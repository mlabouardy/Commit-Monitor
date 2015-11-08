'use strict';

describe('Service: authenticationFactory', function () {

  // load the service's module
  beforeEach(module('commitMonitorApp'));

  // instantiate service
  var authenticationFactory;
  beforeEach(inject(function (_authenticationFactory_) {
    authenticationFactory = _authenticationFactory_;
  }));

  it('should do something', function () {
    expect(!!authenticationFactory).toBe(true);
  });

});
