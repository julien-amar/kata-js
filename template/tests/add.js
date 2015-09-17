var assert = require("assert");
var operators = require("../src/operators");

describe('Add', function() {
  describe('1+1', function () {
    it('should return 2', function () {
      assert.equal(2, operators.add(1, 1));
    });
  });
});



