(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunchMenu = "";


  $scope.checkIfToMuch = function () {
    var listOfItem = $scope.lunchMenu;
    var arrayOfItem = listOfItem.split(",");

    arrayOfItem = removeEmptyString(arrayOfItem);

    if(arrayOfItem.length == 0){
      $scope.message = "Please enter data first";
    } else if (arrayOfItem.length <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };

  function removeEmptyString(arrayOfItem) {
    var array = [];
    for(var i=0;i<arrayOfItem.length;i++){
      if(arrayOfItem[i].trim().length != 0){
          array.push(arrayOfItem[i]);
      }
    }
    return array;
  };
}
})();
