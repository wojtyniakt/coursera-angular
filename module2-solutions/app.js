(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyCtrl = this;

  buyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

  buyCtrl.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List items to buy
  var itemsToBuy = [
    { name: "cookies", quantity: 10 },
    { name: "energy drinks", quantity: 2 },
    { name: "chips", quantity: 5 }];
  var itemsBought = [];

  service.boughtItem = function (itemIdex) {
    itemsBought.push(itemsToBuy[itemIdex]);
    itemsToBuy.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    return itemsBought;
  };
}
})();
