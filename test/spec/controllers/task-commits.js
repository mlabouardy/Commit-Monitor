'use strict';

describe('Controller: TaskCommitsCtrl', function () {

  // load the controller's module
  beforeEach(module('commitMonitorApp'));

  var TaskCommitsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskCommitsCtrl = $controller('TaskCommitsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TaskCommitsCtrl.awesomeThings.length).toBe(3);
  });
});
