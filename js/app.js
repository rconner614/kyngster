(function() {
  var app = angular.module('myApp', [
      'angular-svg-round-progress'
  ]);

  app.controller('myController', myController);
  myController.$inject = ['$scope', '$timeout'];
  function myController($scope, $timeout){
      $scope.copyright = new Date();
      $scope.isHeating = true;
      $scope.kill = false;
      $scope.current = 160;
      $scope.settings = {
          targetTemp: 160.00,
          threshold: 4.00,
          killThreshold: 20.00,
          updateKey: null
      };
      $scope.needle = function () {
          return 360 * (1-($scope.current / 212));
      };

      $scope.adjustHeight = function(){
          var bBox = svg1.getBBox();
          console.log('XxY', bBox.x + 'x' + bBox.y);
          console.log('size', bBox.width + 'x' + bBox.height);
      }

      $scope.targetNeedle = function () {
          return 360 * (1-($scope.settings.targetTemp / 212));
      };

      $scope.findTemp = function(){
          var hue = (($scope.current / 220) * 175) + 200;
          $scope.tempColor = 'hsl(' + hue + ', 60%, 50%)';
      };

      $scope.temp = function(){
          if($scope.isHeating){
              $scope.current = (Number($scope.current) + (Math.random() * 2 - 1)).toFixed(2);
          } else{
              $scope.current = (Number($scope.current) - (Math.random() *.5)).toFixed(2);
          }

          $timeout(function(){
              $scope.temp();
              $scope.findTemp();
          }, 2000);
      };
      $scope.temp();
      $scope.findTemp();
  }

})();