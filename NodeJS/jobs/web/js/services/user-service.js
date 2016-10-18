(function(angular){
'use strict';

 angular.module('jobs').service('UserService', service);

 service.$inject = ['$http', 'api'];
 //segue o padrão singleton - tem uma instância única para toda a aplicação
 function service($http, api){
   const svc = this;

   svc.getUsers = () =>{
     return $http.get(api.users);
   };

   svc.saveUser = (user) =>{
       return $http.post(api.user, user);
     };
   }


})(window.angular);
