function Rectangle(x, y) {
  this.width = x;
  this.height = y;
}

var shape1 = new Rectangle(10, 20)

var shape2 = new Rectangle(10, 2)

Rectangle.prototype.area = function() {
  return this.x * this.y;
}

Rectangle.prototype.perimeter = function() {
  return this.x * 2 + this.y * 2;
}

Rectangle.prototype.isSquare = function() {
  return this.width === this.height;
}
