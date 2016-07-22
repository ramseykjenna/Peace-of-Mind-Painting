'use strict';

describe('Controller: DashCtrl', function () {

  // load the controller's module
  beforeEach(module('pompApp'));

  var DashCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashCtrl = $controller('DashCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
