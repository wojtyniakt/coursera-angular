(function(){
'use strict';

angular.module('MenuApp')

.component('items', {
  templateUrl: 'src/items.component.template.html',
  controller: ItemsComponentController,
  bindings: {
    items: '<'
  }
});

function ItemsComponentController(){
  var $ctrl = this;
}
})();
