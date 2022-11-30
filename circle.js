class Circle{
    constructor(radius,color)
    {
        this.radius = radius;
        this.color = color;
    }
    getRadius()
    {
      return (`the radius of circle is ${this.radius}`);
    }
    setRadius(radius)
    {
       return this.radius=2;
    }
    getColor()
    {
      return (`the color of circle is ${this.color}`);
    }
    setColor(color)
    {
       return this.color="black";
    }
    getToString()
    {
        return `circle[radius is : ${this.radius} , color is : ${this.color}]`;
    }
    getArea()
    {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference()
    {
       return 2 * Math.PI * this.radius;
    }
}
let cir1= new Circle(1.0,"red");
console.log(cir1.radius);
console.log(cir1.getRadius());
console.log(cir1.setRadius());
console.log(cir1.getColor());
console.log(cir1.setColor());
console.log(cir1.getToString());
console.log(cir1.getArea());
console.log(cir1.getCircumference());