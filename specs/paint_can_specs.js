const assert = require("assert");
const PaintCan = require("../paint_can.js");

describe("PaintCan", function(){

  let paint_can;

  beforeEach(function(){
    paint_can = new PaintCan(5, false)
  });

  it("should have a paint in it", function(){
    const actual = paint_can.amount;
    assert.strictEqual(actual, 5);
  });

  it("should be empty", function(){
    paint_can.amount = 0;
    const actual = paint_can.isEmpty()
    assert.strictEqual(actual, true);
  });
  
  it("shouldn't be empty", function(){
    const actual = paint_can.isEmpty()
    assert.strictEqual(actual, false);
  });

});
