
countUp()

// let countUp = () => { //UN-HOISTED
//     console.log("1,2,3,4")
// }

function countUp() {  //HOISTED
    console.log("4,5,6,7")
}

//arrow vs standard functions

//these two functions will perform the same behavior
function tellMeTheTime() {
  return new Date().toString();
}
//  console.log(tellMeTheTime())

const tellMeTheTimeArrow = () => new Date().toString();
console.log("ARROW", tellMeTheTimeArrow());

// console.log(tellMeTheTime());

//closures (functions that return interior functions)
function addTitle(name) {
  if (name == "Jones") {
    return function(title) {
      return `Doctor ${name}`;
    };
  } else {
    return function() {
      return `Mr. ${name}`;
    };
  }
}
// console.log(addTitle("Jones")());

//arrow function provides access to the outer scope, ie. the instance
// class Person {
//   name = "Jones";

//   addTitle() {
//     return function(title) {
//       return `${title} ${this.name}`;
//     };
//   }
// }
// console.log(new Person().addTitle()())

//PROTOTYPE vs CLASS:

//prototype (old way)

export function Lion(name) {
  this.name = name;
  console.log(this);
}

Lion.prototype.sayName = function() {
  return this.name + " " + "the lion";
};

// String.prototype.beAString = function() {
//     console.log("Im a string")
// }

// "text".beAString()

// new Lion("leo")
// console.log(new Lion("leo").sayName())

//class (new way, es6 way, using string interpolation)
export class Hamster {
  constructor(name) {
    this.name = `${name} the hamster`;
    // console.log(this)
  }

  sayName() {
    return this.name;
  }
}

class CustomMath {
  static addWrong(a, b) {
    return a + b + 4;
  }
}

console.log(CustomMath.addWrong(1, 2));

// extended class with super()
export class BabyHamster extends Hamster {
  constructor(name) {
    super(name);
    this.isBaby = true;
    this.dance();
  }

  dance() {
    console.log(this);
  }

  sayBabyName() {
    return () => {
      return `${this.name} the baby`;
    };
  }
}

// console.log(new BabyHamster("Timmy").sayBabyName()());

let library = {
    name: "Seattle Library",
    open: false,
    openLibrary: function() {this.open = true; return this.sayName()},
    sayName: function() {return this.name}
}

// console.log(library);
console.log(library.openLibrary());
// console.log(library.sayName())

