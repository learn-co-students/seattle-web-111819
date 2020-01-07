function reportDOM() {
  console.log("%creportDOM start", "color:green;");
  let title = document.querySelector("h1");
  console.log(title);
  let contentDivHeader = document.querySelector("div.content h2");
  console.log(contentDivHeader);
  let dinnerList = document.querySelectorAll("li");
  dinnerList.forEach(function(item) {
    // item.textContent = "new Food"
    let newId = item.textContent.split(" ")[1].toLowerCase();
    item.id = newId;
    console.dir(item);
  });

  document.getElementById("cake").style.color = "red";
  console.log("%creportDOM stop", "color:red;");
}

function submitFood(event) {
    let newFood = event.target["new-food"].value;
    addFood(newFood)
}

function addFood(food) {
    let newFoodListItem = document.createElement("li");
    newFoodListItem.innerHTML = `${food} | <a class='delete' href='#'>x</a>`;
    newFoodListItem.id = food.toLowerCase();
    document.querySelector("ul").appendChild(newFoodListItem);

    newFoodListItem.querySelector(".delete").addEventListener("click", function() {
        newFoodListItem.remove()
    })
}


let foods = ["Salmon", "Cake", "Pizza", "Jelly beans"]



document.addEventListener("DOMContentLoaded", function() {

    foods.forEach(function(food){
        addFood(food)
    })

  //   reportDOM();
  let toggleButton = document.getElementById("background-button");

  toggleButton.addEventListener("click", function(event) {
    if (document.body.style.backgroundColor != "beige") {
      document.body.style.backgroundColor = "beige";
    } else {
      document.body.style.backgroundColor = "white";
    }
  });

  document.querySelector("form").addEventListener("submit", function() {
    event.preventDefault();
    console.log(event);
    submitFood(event)
  });
});
