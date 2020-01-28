import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'

// console.log(new App().render())

ReactDOM.render(<App />, document.getElementById("root"))


// let greeting = document.createElement("h1");
// greeting.textContent = "Hello World";
// document.body.appendChild(greeting)

// let reactGreeting = React.createElement("h1", null, "Hello From React")
// let reactGoodbye = {
//     $$typeof: Symbol.for("react.element"),
//     type: "h2",
//     ref: null,
//     key: null,
//     props: {
//         children: "Goodbye from React"
//     }
// }

// console.log(reactGreeting)




// document.body.innerHTML = "<h1>Hello Whole World<span id='cursor'>|</span></h1>";
// setInterval(() => {
//   let cursorItem = document.getElementById("cursor");
//   if (cursorItem.style.display !== "none") {
//     cursorItem.style.display = "none";
//   } else {
//     cursorItem.style.display = "inline";
//   }
// }, 750);


