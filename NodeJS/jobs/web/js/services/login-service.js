(function(angular, btoa){
  'use strict';

  //  angular.module('login').service('LoginService', service);
  //principal funcao - um singleton - mesma instancia utilizada por diferentes modulos
  //singleton - padrão java para ter uma única instância
  //o servico tem uma unica instancia - nem todo servico tem que ser singleton
  //Quando for factory ela cria uma nova instância sempre
  //  angular.module('login').factory('LoginService', service);
  //Diferenca entre factory e um construtor - a função fabrica não é chamada pelo
  //operador new, já o construtor sim, pois cria uma instancia.
  //Na fabrica altera-se o comportamento da factory, se for necessario
  //ver Padrão factory

  angular.module('login').factory('LoginService', service)

  service.$inject = ['$http','api', '$cookies', '$q'];

  function service($http, api,  $cookies, $q) {
    const svc = {}; //por ser factory agora ele vai retornar um novo objeto
    const CREDENTIAL = 'credential';

    svc.authenticate = (user) => {
      const _base64 = btoa(`${user.name}:${user.password}`);
      const _config = {
        headers: {
          authorization: `Basic ${_base64}`
        }
      };

      return $q((resolve, reject) => {
      $http.get(api.profile, _config)
        .then((resp) => {
          $cookies.put(CREDENTIAL, _config.headers.authorization)
          return resolve(resp);
        })
        .catch((err) => {
          return reject(err);
        })
    });
  };

  return svc;
}

})(window.angular, window.btoa);
