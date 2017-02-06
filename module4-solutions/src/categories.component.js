(function(){
  'use strict';
  angular.module('MenuApp')
  .component('categories',{
    templateUrl: 'src/categories.component.template.html',
    controller: CategoriesComponentController,
    bindings: {
      categories : '<'
    }
  });

  function CategoriesComponentController(){
    var $ctrl  = this;
  }
})();
