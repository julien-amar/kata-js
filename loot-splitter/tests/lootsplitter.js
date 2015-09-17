var assert = require("assert");
var loot = require("../src/lootsplitter");

describe('Adventurers found a treasure', function() {
  describe('When it s not possible to share', function () {
    it('should return a warning', function () {
      assert.equal(false, loot.canShare(3, [1, 2, 3, 4]));
    });
  });

  describe('When it s possible to share', function () {
    it('should not return a warning', function () {
      assert.equal(true, loot.canShare(2, [9, 12, 14, 17, 23, 32, 34, 40, 42, 49]));
    });
  });

  describe('When it s not possible to share because the higher value gem is bigger than the average of the others', function () {
    it('should return a warning', function () {
      assert.equal(false, loot.canShare(3, [61, 1, 1]));
    });
  });

  describe('When it s possible to share because the higher value gem is lower than the average of the others', function () {
    it('should not return a warning', function () {
      assert.equal(true, loot.canShare(2, [30, 42, 12]));
    });
  });

  describe('When it s not possible to share because there is not enought gems for each aventurers', function () {
    it('should return a warning', function () {
      assert.equal(false, loot.canShare(3, [2, 1]));
    });
  });

  describe('When it s possible to share', function () {
    it('should get an equal share', function () {
		var loots = loot.share(2, [9, 12, 14, 17, 23, 32, 34, 40, 42, 49]);

      	assert.equal(2, loots.length);
  
      	assert.deepEqual([9, 12, 32, 34, 49], loots[0]);
      	assert.deepEqual([14, 17, 23, 40, 42], loots[1]);
    });
  });
});

