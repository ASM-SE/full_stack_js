'use strict';

let bluebird = require('bluebird');
let debug = require('debug')('delivery-admin:controller:order');
let repository = require('../repository/OrderRepository');
const PER_PAGE = 10;

let OrderController = {
  list: function(request, response, next) {
    let query = {};
    let page = parseInt(request.query.page || 1, 10);
    let per_page = parseInt(request.query.size || PER_PAGE, 10);

    if (request.query.q) {
      let search = new RegExp(request.query.q, 'i');
      query.$or = [
          { 'customer.givenName': search }
        ];
    }
    if (request.query.location) {
      query['shippingAddress.location'] = { $exists: 1 };
    }
    debug('query', query);

    bluebird.all([
      repository.find(query)
        .sort({ 'delivery.date': -1 })
        .limit(per_page)
        .skip(per_page * (page - 1)),
      repository.count(query)
    ])
    .then(function(results) {
      let result = results[0];
      let count = results[1];
      let data = {
        items: result,
        _metadata: {
          size: (result || []).length,
          total: count,
          perPage: per_page,
          page: page
        }
      };

      response.json(data);
    })
    .catch(next);
  },
  byId: function(request, response, next) {
    let _id = request.params._id;
    repository.findOne({ _id: _id })
    .populate('_customer')
    .then(function(result) {
      if (!result) {
        let err = new Error('order not found');
        err.status = 404;
        throw err;
      }
      return result;
    })
    .then(function(result) {
      debug('result', result);
      response.json(result);
    })
    .catch(next);
  },
  create: function(request, response, next) {
    let order = new repository(request.body);
    order.save()
      .then(function(result) {
        response.status(201).json(result);
      })
      .catch(function(err) {
        err.status = 422;
        next(err);
      });
  },
  update: function(request, response, next) {
    let _id = request.params._id;
    repository.update({ _id: _id }, { $set: request.body })
    .then(function(result) {
      response.json(result);
    })
    .catch(next);
  },
  remove: function(request, response, next) {
    let _id = request.params._id;
    repository.remove({ _id: _id })
    .then(function(result) {
      response.sendStatus(204);
    })
    .catch(next);
  }
};

module.exports = OrderController;