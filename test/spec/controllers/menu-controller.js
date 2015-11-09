'use strict';

describe('Controller: MenuControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('commitMonitorApp'));

  var MenuControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuControllerCtrl = $controller('MenuControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenuControllerCtrl.awesomeThings.length).toBe(3);
  });
});
