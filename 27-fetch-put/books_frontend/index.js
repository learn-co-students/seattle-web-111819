let editedNode = null;


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

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Book";
  deleteButton.style.float = "right";

  deleteButton.addEventListener("click", function() {
    deleteBook(book.id);
    div.remove();
  });

  const editButton = document.createElement("button");
  editButton.textContent = "Edit Book";
  editButton.style.float = "right";

  editButton.addEventListener("click", function() {
    console.log("Editing");
    startEditing(book);
    editedNode = div;
  });

  //add all elements to div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(deleteButton);
  div.appendChild(editButton);

  return div;
}

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}

const startEditing = book => {
  let editForm = document.getElementById("edit-form");
  editForm.style.display = "block";
  editForm.title.value = book.title;
  editForm.author.value = book.author;
  editForm.cover.value = book.img;
  editForm["book-id"].value = book.id;
};

document
  .getElementById("edit-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("edit-form").style.display = "none";
    let book = {
      title: event.target.title.value,
      author: event.target.author.value,
      img: event.target.cover.value,
      id: event.target["book-id"].value
    };
    updateBook(book);
  });

fetch("http://localhost:3000/books")
  .then(response => response.json())
  .then(data => showBooks(data));

const updateBook = book => {
  fetch(`http://localhost:3000/books/${book.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book)
  }).then(res => res.json()).then(data => {
    editedNode.replaceWith(makeBookCard(data))
    editedNode = null;
    });
};

const postBook = book => {
  return fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  }).then(res => res.json());
};

const deleteBook = id => {
  fetch(`http://localhost:3000/books/${id}`, {
    method: "DELETE"
  });
};

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  const newBook = {
    title: event.target.title.value,
    author: event.target.author.value,
    img: event.target.cover.value
  };
  postBook(newBook).then(book => addBook(book));
});
