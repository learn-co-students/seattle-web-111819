function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  //add all elements to div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}

fetch("http://localhost:3000/books")
  .then(response => response.json()).then(data => showBooks(data));

const postBook = book => {
  return fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  }).then(res => res.json());
}

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  const newBook = {
    title: event.target.title.value,
    author: event.target.author.value,
    img: event.target.cover.value
  }
  postBook(newBook).then(book => addBook(book))
})


  // function sayHi(name) {
  //   return "hi " + name
  // } 

  // const sayBye = name => {
  //   return "bye " + name
  //   }

  // parameter => {
  //   return ouput
  // }

// showBooks(books);
