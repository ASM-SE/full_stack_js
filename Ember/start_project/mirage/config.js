export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'http://localhost:3000';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
   this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.post('/books', function(response, request) {
    response = response.db.books.insert(request.params);

    return  {
        data: {
            type: 'books',
            id: response.id,
            attributes: request.params
        }
    };
  });

  this.patch('/books/:id', function(response, request) { //recebe só o que foi alterado - menos recursos no lugar do put
    let id = request.params.id;
    let params = JSON.parse(request.requestBody);

    response.db.books.update(id, params.data.attributes);

    return  {
        data: {
            type: 'books',
            id: request.id,
            attributes:  params.data.attributes
        }
    };
  });





  this.get('/books', function(response, request) {
    return  {
        data: response.db.books.map(attrs => ({
          type: 'books', id: attrs.id, attributes: attrs
        }))
    }
  });


  this.get('/books/:id', function(response, request) {
    let id = request.params.id;
    return  {
        data: {
            type: 'books',
            id: id,
            attributes: response.db.books.find(id)
        }
    }
  });

  this.del('/books/:id', function(response, request) {
    response.db.books.remove(request.params.id);
    return {};
  });

}
