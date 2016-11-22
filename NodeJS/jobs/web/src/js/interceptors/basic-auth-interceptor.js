(function(angular) {
  'use strict';

// 'service' return a singleton and 'factory' return a new instance
  angular.module('jobs').factory('BasicAuthInterceptor', interceptor)

  interceptor.$inject = ['$q', '$window', '$cookies'];

  function interceptor($q, $window, $cookies) {
    const itc = {};
    const CREDENTIAL = 'credential';

    itc.request = (config) => {
      const credential = $cookies.get(CREDENTIAL);
      if(!credential) {
        $window.location.href = '/login.html';
      }
      config.headers.Authorization = credential;
      return config;
    };

    //
    // itc.requestError = (rejection) => {
    //   console.log('RequestError');
    //   return  $q.reject(rejection)
    // }
    //
    // itc.response = (response) => {
    //   console.log('Response');
    //   return response;
    // }
   //



    itc.responseError = (rejection) => {
      if(rejection.status === 401 || rejection.status === 403) {
        $window.location.href = '/login.html';
      };
      return $q.reject(rejection);
    };

    return itc;
  }

})(window.angular);
