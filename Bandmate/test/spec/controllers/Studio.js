'use strict';

describe('Controller: StudioctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('bandmateApp'));

  var StudioctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudioctrlCtrl = $controller('StudioctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
