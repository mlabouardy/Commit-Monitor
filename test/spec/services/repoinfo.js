'use strict';

describe('Service: repoInfo', function () {

  // load the service's module
  beforeEach(module('commitMonitorApp'));

  // instantiate service
  var repoInfo;
  beforeEach(inject(function (_repoInfo_) {
    repoInfo = _repoInfo_;
  }));

  it('should do something', function () {
    expect(!!repoInfo).toBe(true);
  });

});
