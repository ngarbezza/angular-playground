'use strict';

/**
 * @ngdoc directive
 * @name playgroundApp.directive:directiveTwo
 * @description
 * # directiveTwo
 */
angular.module('playgroundApp')
  .directive('directiveTwo', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/directiveTwo.html',
      link: function postLink(scope, element, attrs) {
        console.log("directiveTwo link");
      }
    };
  });
