(function(angular){
'use strict';

 angular.module('jobs').factory('ToastService', service);

 service.$inject = ['$mdToast'];

    function service($mdToast) {

 var src = {
      customToaster: customToaster,
      defaultToaster: defaultToaster
  };

  return src;

  ////////////////////////////Implementation//////////////////////////////////////

  function customToaster(content , delay, position) {
      $mdToast.show(
        $mdToast.simple()
          .textContent(content)
          .position(position)
          .hideDelay(delay)
      );
  }

  function defaultToaster(content) {
      $mdToast.show(
        $mdToast.simple()
          .textContent(content)
          .position('bottom right')
          .hideDelay(3000)
      );
  }
}

/*
 function service($mdToast) {
   const sc = this;
          sc.openToast = function($event) {
            $mdToast.show($mdToast.simple().textContent('Hello!').position('bottom right'));

            // Could also do $mdToast.showSimple('Hello');
          };
        };

        return sc;*/

})(window.angular);
