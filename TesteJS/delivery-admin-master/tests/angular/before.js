function getElement(compile, $scope, html){
  var element = compile(angular.element(html))($scope);
  $scope.$digest();
  return element;
}

var before = function($rootScope, _$httpBackend_, _$localStorage_) {
  $httpBackend = _$httpBackend_;
  $localStorage = _$localStorage_;

  $httpBackend.when('GET', /app\/_resources\/locale-pt_BR\.json/).respond(200,{
    "customer" : "Cliente"
  });

  $localStorage.currentUser = {};
};