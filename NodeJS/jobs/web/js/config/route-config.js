(function(angular) {
  'use strict';

  angular.module('jobs').config(config);

  config.$inject = ['$routeProvider']; //provedor de rotas

  function config($routeProvider) {
    $routeProvider.when('/user/new', {
      templateUrl: 'views/user.html',
      controller: 'UserController',
      controllerAs: 'vm'
    })

    .when('/user/:id/edit', {
      templateUrl: 'views/user.html',
      controller: 'UserController',
      controllerAs: 'vm'
    })


    .when('/users', {
      templateUrl: 'views/users.html',
      controller: 'UserListController',
      controllerAs: 'vm'
    })

  }

})(window.angular);
