(function(angular){
  'use strict';


  angular.module('login').controller('LoginController', controller);

  controller.$inject = ['$window','LoginService'];

  function controller($window, loginService){
    const vm = this;

    vm.authenticate = (user) => {
      loginService.authenticate(user)
      .then((resp)=>{
        console.log(resp.data);
        $window.location.href = '/';
      })
      .catch(() =>{
        vm.invalidUser = true;
      });


    };

  }


})(window.angular);
