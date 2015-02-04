'use strict';

describe('Directive: directiveThree', function () {

  // load the directive's module
  beforeEach(module('playgroundApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<directive-three></directive-three>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the directiveThree directive');
  }));
});
