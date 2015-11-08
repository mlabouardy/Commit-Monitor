'use strict';

describe('Controller: RepositoryCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('commitMonitorApp'));

  var RepositoryCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepositoryCreateCtrl = $controller('RepositoryCreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RepositoryCreateCtrl.awesomeThings.length).toBe(3);
  });
});
