//Question 1

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(`mmm, mmm, I'm love'n it.`);
  }
}

Human.prototype.ageOneYear = function (age) {
  this.age++;
};

let claire = new Human("Claire", 25);
console.log(claire.age);
claire.ageOneYear();
console.log(claire.age);
console.log(claire.eating());

//Question 2

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus (vec) {
    let newVecX = this.x + vec.x;
    let newVecY = this.y + vec.y;
    return new Vector(newVecX, newVecY);
  }

  minus (vec) {
    let newVecX = this.x - vec.x;
    let newVecY = this.y - vec.y;
    return new Vector(newVecX, newVecY);
  }

  getLength () {
    let hype = (this.x * this.x) + (this.y * this.y)
    return Math.sqrt(hype);
  }
}

let v1 = new Vector(1, 2);
let v2 = new Vector(2, 3);
console.log(v1.plus(v2));
console.log(v1.minus(v2));
let v3 = new Vector(3, 4);
console.log(v3.getLength());
