(function(angular) {
  'use strict';

  angular.module('jobs').config(config);

  config.$inject = ['$mdIconProvider']; //provedor de icones

  function config($mdIconProvider) {

    $mdIconProvider
           .icon('navigation:menu', '/img/icons/ic_menu.svg')
           .icon('social:people', '/img/icons/ic_people.svg')
           .icon('social:people_pin', '/img/icons/ic_person_pin.svg')
           .icon('admin:business', '/img/icons/ic_business.svg')
           .icon('admin:jobs', '/img/icons/ic_work.svg')
           .icon('admin:logout', '/img/icons/ic_exit.svg')
           .icon('social:addperson', '/img/icons/ic_person.svg');

  }

})(window.angular);
