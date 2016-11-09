(function(angular){
  'use strict';
  //const API_PATH = 'http://localhost:3000'; vai sar passado na injeção de dependências - definida em uma constante



  angular.module('jobs').controller('UserController', controller);

  controller.$inject = ['UserService', '$routeParams']; //injentando dependencias segundo o jhonpapa https://github.com/johnpapa/angular-styleguide

  function controller(UserService, $routeParams){
    const vm = this; //view model - como definido por john papa

    vm.InitForm = () => {
      let _id = $routeParams.params.id;

      if(_id){
        UserService.getUser(_id).then((res) => {
            vm.user = res.data;
        })
      }
    };


    vm.save = (user) =>{
      UserService.saveUser(user)
      .then((res) =>{
        if(!user._id){
          user._id = res.data._id;
        }
        vm.user._id = res.data_id;
      })
      .catch((err)=>{
        console.log(err);
      })

    }


    vm.remove = (user) => {
      UserService.remove(user._id)
      .then((res) =>{
          vm.user = ();
      })


    };

}

})(window.angular);
