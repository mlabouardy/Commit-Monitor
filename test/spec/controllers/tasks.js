'use strict';

describe('Controller: TasksCtrl', function () {

  // load the controller's module
  beforeEach(module('commitMonitorApp'));

  var TasksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TasksCtrl = $controller('TasksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TasksCtrl.awesomeThings.length).toBe(3);
  });
});
