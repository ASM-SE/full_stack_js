(function(angular){
'use strict';

 const _baseApiPath = 'http://localhost:3000/';
 const _api = {
    user: _baseApiPath + 'user',
    users: _baseApiPath + 'users'
 };

 angular.module('jobs').constant('api', _api); //definição da constante para ser importanda no user-controller como uma dependencia

})(window.angular);
