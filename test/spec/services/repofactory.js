'use strict';

describe('Service: repoFactory', function () {

  // load the service's module
  beforeEach(module('commitMonitorApp'));

  // instantiate service
  var repoFactory;
  beforeEach(inject(function (_repoFactory_) {
    repoFactory = _repoFactory_;
  }));

  it('should do something', function () {
    expect(!!repoFactory).toBe(true);
  });

});
