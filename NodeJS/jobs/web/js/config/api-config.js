(function(angular){
'use strict';

 const _baseApiPath = 'http://localhost:3000/';
 const _api = {
    user: _baseApiPath + 'user',
    users: _baseApiPath + 'users',
    profile: _baseApiPath + 'user/profile'
 };

 angular.module('config').constant('api', _api); //definição da constante para ser importanda no user-controller como uma dependencia

})(window.angular);
