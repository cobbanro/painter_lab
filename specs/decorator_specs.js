const assert = require("assert");
const Decorator = require("../decorator.js");
const PaintCan = require("../paint_can.js");
const Room = require("../room.js");

describe("Decorator", function(){

  let decorator;

  beforeEach(function(){
    decorator = new Decorator()
  });

  it("should start with an empty stock", function(){
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, []);
  });

  it("should not initally be able to paint", function(){
    const actual = decorator.paintingStatus;
    assert.deepStrictEqual(actual, false);
  });

  it("should be able to add paint to the stock", function(){
    const canOfPaint = new PaintCan(5);
    decorator.addACanOfPaint(canOfPaint);
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 1)
  })

  it("should be able to add up total litres of the paint that resides in the cans", function(){
    const paintCan1 = new PaintCan(69);
    const paintCan2 = new PaintCan(420);
    decorator.addACanOfPaint(paintCan1);
    decorator.addACanOfPaint(paintCan2);
    const actual = decorator.litreT();
    assert.deepStrictEqual(actual, 489);
  })

  it("should be able to check if the decorator has enough paint for a room", function(){
    const paint_can = new PaintCan(69);
    const room = new Room(20);
    decorator.addACanOfPaint(paint_can);
    const actual = decorator.canPaint(paint_can);
    assert.strictEqual(actual, false);
  })

  it("should be able to allow the decorator to start paitning", function(){
    const paint_can = new PaintCan(69);
    const room = new Room(10);
    decorator.addACanOfPaint(paint_can);
    const actual = decorator.enoughPaint;
    assert.strictEqual(actual, true);
  })

});
