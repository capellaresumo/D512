'use strict';

describe('Service: localDB', function () {

  // load the service's module
  beforeEach(module('d512App'));

  // instantiate service
  var localDB;
  beforeEach(inject(function (_localDB_) {
    localDB = _localDB_;
  }));

  it('should do something', function () {
    expect(!!localDB).toBe(true);
  });

});
