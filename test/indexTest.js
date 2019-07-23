const expect = require("chai").expect;
const assert = require("chai").assert;
const summ = require("../index");


describe("Test summ function", function() {
  it("Should return the summ of two numbers", function() {
    var result = summ(2, 4);
    expect(result).to.equal(6);
  });

  it("Should return the summ of two numbers", function() {
    var result = summ(5, 6);
    expect(result).to.equal(11);
  });

  it("Should return type number", function() {
    var result = summ(1, 2);
    assert.typeOf(result, 'number');
  });
});

