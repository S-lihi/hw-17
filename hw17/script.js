class Circle {
  constructor(radius = 10) {
    this.radius = radius
  }
  static createDefault() {
    return new this()
  }
  square() {
    return Math.round(Math.PI * this.radius ** 2)
  }
}

const radius = [21, 34, 15, 13]
radius.forEach(elem => console.log(new Circle(elem).square()))
console.log(Circle.createDefault().square())