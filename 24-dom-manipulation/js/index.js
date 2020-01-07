// // alert("Hello")

// // def sayHi
// //     puts "hi"
// // end

// function sayHi() {
//     console.log("Hi")
//     return "Goodbye"
// }

// // let arr = ["John", "Soundarya", "Cody", "Matt"];
// const arr = ["John", "Soundarya", "Cody", "Matt"]
// arr.push("Lucy")

// arr.forEach(function(item) {
//     console.log(`Hello my name is ${item}`)
// });

// for (let i = 0;i < arr.length; i++) {
//     console.log(`${arr[i]} says for loops are cool`)
// }

// console.log(arr)

function reportDOM() {
    console.log("%creportDOM start", "color:green;")
    let title = document.querySelector("h1");
    console.log(title);
    let contentDivHeader = document.querySelector("div.content h2")
    console.log(contentDivHeader);
    let dinnerList = document.querySelectorAll("li")
    dinnerList.forEach(function(item) {
        // item.textContent = "new Food"
        let newId = item.textContent.split(" ")[1].toLowerCase()
        item.id = newId
        console.dir(item)
    })

    document.getElementById("cake").style.color = "red"
        console.log("%creportDOM stop", "color:red;");

}

console.dir(document)


document.addEventListener("DOMContentLoaded", function() {
    reportDOM()
})