(function() {
  var app = angular.module('myApp', [
      'angular-svg-round-progress'
  ]);

  app.controller('myController', myController);
  myController.$inject = ['$scope'];
  function myController($scope){
      $scope.copyright = new Date();
      $scope.isHeating = true;
      $scope.kill = false;
      $scope.current = 130.2;
  }

})();