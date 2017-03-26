(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var MAX_DISHES = 3;

  $scope.dishesInput = '';
  $scope.message = '';

  $scope.checkDishes = function () {
    $scope.message_postfix = 'warn';
    var count = countDishes($scope.dishesInput);

    if (count == 0) {
      $scope.message = "Please enter data first";
    } else if ( count > MAX_DISHES) {
      $scope.message = "Too much!"
    } else {
      $scope.message = "Enjoy!"
      $scope.message_postfix = 'info';
    }
  }

  function countDishes(input) {
    var notEmpty = function(element) {
      return element != undefined && element.trim().length > 0;
    }

    var splitted = input
        .split(',')
        .filter(notEmpty);
    return splitted.length;
  }

};

})();
