'use strict';

/**
 * @ngdoc directive
 * @name playgroundApp.directive:directiveOne
 * @description
 * # directiveOne
 */
angular.module('playgroundApp')
  .directive('directiveOne', ['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        console.log("directiveOne link");

        // hack one: horrible hack that does not always work
        //$timeout(function () {
        //  $timeout(function() {
        //    $timeout(function() {
        //      console.log("directiveOne link after all");
        //    });
        //  });
        //});

        // hack two:
        scope.$watch(
          function () { return element.find('#myDomElement')[0]; },
          function (newValue, oldValue) {
            if (newValue !== oldValue) {
              console.log("directiveOne link after #myDomElement was rendered");
            }
          });

        // hack three
        //function doDomStuff() {
        //  $timeout(function() {
        //    var elem = element.find('#myDomElement')[0];
        //
        //    if (elem) {
        //      console.log("directiveOne link after #myDomElement was rendered");
        //    } else {
        //      doDomStuff();
        //    }
        //  }, 50);
        //}
        //
        //doDomStuff();
      }
    };
  }]);
