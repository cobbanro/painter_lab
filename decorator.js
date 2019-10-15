const Decorator = function(){
  this.stock = [];
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

module.exports = Decorator;
