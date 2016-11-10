(function(angular) {
  'use strict';

    angular.module('jobs').controller('toastController', controller);

    controller.$inject = ['$scope', '$mdToast'];

     function controller($scope, $mdToast) {
       const sc = $scope;
              sc.openToast = function($event) {
                $mdToast.show($mdToast.simple().textContent('Hello!').position('bottom right'));

                // Could also do $mdToast.showSimple('Hello');
              };
            };

})(window.angular);
