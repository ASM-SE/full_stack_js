(function(angular){
  'use strict';
  //const API_PATH = 'http://localhost:3000'; vai sar passado na injeção de dependências - definida em uma constante



  angular.module('jobs').controller('UserController', controller);

  controller.$inject = ['UserService', '$routeParams', '$mdToast', 'MessageService']; //injentando dependencias segundo o jhonpapa https://github.com/johnpapa/angular-styleguide
  //tudo que é injetado é um serviço, não se insere controller em um controller
  //Também implementei o toast do Renan aqui, para deixar os dois - a criação de um serviço pro toast tem que ser avaliado, visto que ele já é um serviço

  function controller(UserService, $routeParams, messageService){
    const vm = this; //view model - como definido por john papa



    vm.initForm = () => {
      let _id = $routeParams.id;
      if(_id){
        UserService.getUser(_id)
        .then((res) => {

            vm.user = res.data;

        })
      }
    };



      //  ToastService.defaultToaster('Usuário incluído com sucesso!');
      /*injetar o $mdToast
        let mensagem = $mdToast.simple().textContent('Usuário excluído!').position('bottom right');
        $mdToast.show(mensagem); */

    vm.save = (user) => {
      UserService
        .saveUser(user)
        .then((res) => {
          if(!user._id) {
            user._id = res.data._id;
          }
          messageService.success(messageService.messages.succesInserted);
        })
        .catch((err) => {
          messageService.error('Erro inesperado');
        })
    };

    vm.remove = (user) => {
      UserService
        .remove(user._id)
        .then((res) => {
          vm.user = {};
        })
    };


}

})(window.angular);
