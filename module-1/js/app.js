(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var MAX_DISHES = 3;

  $scope.message = '';

  $scope.checkDishes = function () {
    $scope.message_postfix = 'warn';
    if ($scope.dishesInput == undefined || $scope.dishesInput == '') {
      $scope.message = "Please enter data first";
    } else if (countDishes($scope.dishesInput) > MAX_DISHES) {
      $scope.message = "Too much!"
    } else {
      $scope.message = "Enjoy!"
      $scope.message_postfix = 'info';
    }

  }

  function countDishes(input) {
    var splitted = input.split(',')
    return splitted.length;
  }

};

})();
