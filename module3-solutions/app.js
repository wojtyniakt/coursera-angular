(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);


function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      list: '=myList',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowCtrl = this;

  narrowCtrl.found = function () {
    narrowCtrl.items = [];
    narrowCtrl.message = "";
    if(narrowCtrl.searchTerm !== undefined && narrowCtrl.searchTerm.length > 0){
      var promise = MenuSearchService.getMatchedMenuItems();
      promise.then(function (response) {
        var menuItems = response.data.menu_items;
        for (var i = 0; i < menuItems.length; i++) {
          var name = menuItems[i].name;
          if (name.toLowerCase().indexOf(narrowCtrl.searchTerm) !== -1) {
            narrowCtrl.items.push(menuItems[i]);
          }
        }
      })
      .catch(function (error) {
       console.log("Something went terribly wrong.");
      });
    } else {
      narrowCtrl.message = "Nothing found";
    }
    console.log(narrowCtrl.items);
  };

  narrowCtrl.removeItem = function (itemIndex) {
    narrowCtrl.items.splice(itemIndex, 1);
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
  };

}

})();
