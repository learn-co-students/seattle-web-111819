// function Character(name, age, force, inventory, greeting) {
//   this.name = name;
//   this.age = age;
//   this.forceUser = force;
//   this.greeting = greeting;
//   this.inventory = inventory;
// }

//   Character.prototype.sayHello = function() {
//     console.log(this.greeting);
//   };

//   Character.prototype.ageMe = function() {
//       this.age++;
//   }

//   String.prototype.goofyMethod = function() {
//       console.log("why are you talking to a string?")
//   }

class Character {
  static allCharacters = [];
  static getAllCharacters = function() {
    return Character.allCharacters;
  };

  constructor(name, age, force, inventory, greeting) {
    this.name = name;
    this.age = age;
    this.forceUser = force;
    this.greeting = greeting;
    this.inventory = inventory;
    Character.allCharacters.push(this);
  }

  sayHello = function() {
    console.log(this.greeting);
  };

  ageMe = function() {
    this.age++;
  };

  show = function() {
    document.getElementById("name").textContent = this.name;
    document.getElementById("age").textContent = this.age;

    if (this.forceUser) {
      document.getElementById("force").textContent = "Yes";
    } else {
      document.getElementById("force").textContent = "Nah";
    }
    
    document.getElementById("inv").innerHTML = "";
    this.inventory.forEach(function(item) {
      document.getElementById("inv").appendChild(
        //Immediately Invoked Functional Expression
        //IIFE
        (function() {
          let newitem = document.createElement("li");
          newitem.textContent = item;
          console.log(newitem);
          return newitem;
        })()
      );
    });
  };
}

class Jedi extends Character {
  constructor(name, age, inventory, greeting) {
    super(name, age, true, [...inventory, "lightsaber"], greeting);
    this.giftcard = true;
  }

  sayHello = function() {
    console.log("not your droids");
  };
}

new Character("han solo", 45, false, ["blaster", "vest"], "hey kid");
new Character("Baby Yoda", 50, true, ["a Mandalorian"], "coo");
new Jedi("Luke Skywalker", 50, ["robot hand"], "hello, i am luke");

document.addEventListener("DOMContentLoaded", () => {
  const myList = document.getElementById("characters");
  Character.getAllCharacters().forEach(function(character) {
    let newListItem = document.createElement("li");
    newListItem.textContent = character.name;
    myList.appendChild(newListItem);
    newListItem.addEventListener("click", function() {
      character.show();
      character.sayHello();
    });
  });
});
