export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'http://localhost:3000';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

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

}
