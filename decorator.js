const Decorator = function(){
  this.stock = [];
  this.paintingStatus = false;
};

  Decorator.prototype.addACanOfPaint = function (can) {
    this.stock.push(can)
  };

  Decorator.prototype.litreT = function () {
    t = 0
    for (can of this.stock){
      t += can.amount
    }
    return t
  }

  Decorator.prototype.canPaint = function(room) {
    const surfaceArea = room.area*5;
    if (surfaceArea <= this.stock.litreT()){
      return true
    }
    return false
  };

  Decorator.prototype.enoughPaint = function(){
    if (this.stock.canPaint(room)){
      this.paintingStatus = true;
      return this.paintingStatus;
    }
  };

module.exports = Decorator;
