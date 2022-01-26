let myLibrary = [];
const display = document.getElementById("display");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      return `${title} by ${author}, ${pages} pages, ${read}`;
    };
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(arr) {
  for (let i = 0; i < arr.length; i++) {
    const card = document.createElement("div");
    const para = document.createElement("p");
    para.innerText = arr[i].info();
    card.appendChild(para);
    const remove = document.createElement("button");
    remove.innerText = "x";
    card.appendChild(remove);
    card.classList.add("card");
    display.appendChild(card);
    remove.addEventListener("click", function () {
      card.remove();
    });
  }
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295",
  "not read yet"
);

const fightClub = new Book("Fight Club", "Chuck Palahniuk", "208", "read");

const t = document.getElementById("title");
const a = document.getElementById("author");
const p = document.getElementById("pages");
const r = document.getElementById("read");
const add = document.getElementById("add");
add.addEventListener("click", addNewBook);

function addNewBook(newBook) {
  newBook = new Book(t.value, a.value, p.value, r.value);
  addBookToLibrary(newBook);
  const card = document.createElement("div");
  const para = document.createElement("p");
  para.innerText = myLibrary[myLibrary.length - 1].info();
  card.appendChild(para);
  const remove = document.createElement("button");
  remove.innerText = "x";
  card.appendChild(remove);
  card.classList.add("card");
  display.appendChild(card);
  remove.addEventListener("click", function () {
    card.remove();
    myLibrary.splice(myLibrary.indexOf(newBook), 1);
    console.log(myLibrary);
  });
  t.value = "";
  a.value = "";
  p.value = "";
  r.value = "";
}

addBookToLibrary(theHobbit);
addBookToLibrary(fightClub);

displayBooks(myLibrary);
