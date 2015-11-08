'use strict';

describe('Controller: CommitFilesCtrl', function () {

  // load the controller's module
  beforeEach(module('commitMonitorApp'));

  var CommitFilesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommitFilesCtrl = $controller('CommitFilesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CommitFilesCtrl.awesomeThings.length).toBe(3);
  });
});
