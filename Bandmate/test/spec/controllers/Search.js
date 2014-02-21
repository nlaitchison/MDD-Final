'use strict';

describe('Controller: SearchctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('bandmateApp'));

  var SearchctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchctrlCtrl = $controller('SearchctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
