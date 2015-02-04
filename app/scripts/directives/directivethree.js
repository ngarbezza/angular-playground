'use strict';

/**
 * @ngdoc directive
 * @name playgroundApp.directive:directiveThree
 * @description
 * # directiveThree
 */
angular.module('playgroundApp')
  .directive('directiveThree', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/directiveThree.html',
      link: function postLink(scope, element, attrs) {
        console.log("directiveThree link");
      }
    };
  });
