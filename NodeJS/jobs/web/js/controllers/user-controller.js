(function(angular){
  'use strict';
  angular.module('jobs').controller('UserController', controller);

  controller.$inject = ['$scope']; //injentando dependencias segundo o jhonpapa https://github.com/johnpapa/angular-styleguide

  function controller($scope){

    $scope.users = [];

    $scope.save = function(){

      $scope.users.push($scope.user);
      $scope.user = {};
    }
  }

})(window.angular);
