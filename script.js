/* Get DOM Elements */
const addNewBookModalButton = document.querySelector(
  "[data-add-new-book-modal-button]"
);
const closeModalButton = document.querySelector(".close-button");
const modal = document.querySelector(".modal");
const overlay = document.getElementById("overlay");
const form = document.querySelector("form");
/* Get DOM Elements */

addNewBookModalButton.addEventListener("click", () => openModal(modal));
overlay.addEventListener("click", () => closeModal(modal));
closeModalButton.addEventListener("click", () => closeModal(modal));

form.addEventListener("submit", handleForm);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function handleForm(e) {
  e.preventDefault();
  const title = document.querySelector("[data-title]").value;
  const author = document.querySelector("[data-author]").value;
  const pages = document.querySelector("[data-pages]").value;
  const read = document.querySelector("[data-is-read]").checked;
  addBookToLibrary(new Book(title, author, pages, read));

  form.reset();

  closeModal(modal);
}

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}


function addBookToLibrary(book) {
  myLibrary.push(book);
  updateDisplay();
}

function generateSampleData() {
  // Make  Sample books
  const book1 = new Book("The Hobbit", "J.R.R. Tolkein", 295, false);
  const book2 = new Book("Lord of the Rings", "J.R.R. Tolkein", 500, true);
  const book3 = new Book(
    "Harry Potter and the Half-Blood Prince",
    "J.K. Rowling",
    400,
    false
  );
  const book4 = new Book("The Giver", "Some Author", 200, true);
  myLibrary.push(book1);
  myLibrary.push(book2);
  myLibrary.push(book3);
  myLibrary.push(book4);
}

function generateNewCard(book, index) {
  const card = createNewElementWithClass("div", "card");

  const titleDiv = createNewElementWithClass("div", "title");
  titleDiv.textContent = `"${book.title}"`;
  card.appendChild(titleDiv);

  const authorDiv = createNewElementWithClass("div", "author");
  authorDiv.textContent = book.author;
  card.appendChild(authorDiv);

  const pagesDiv = createNewElementWithClass("div", "pages");
  pagesDiv.textContent = book.pages;
  card.appendChild(pagesDiv);

  const readStatusButton = createNewElementWithClass("button", "toggle-read");
  // Toggle book read status
  readStatusButton.addEventListener("click", () => {
    book.read = !book.read;
    updateBookStatusButton(book, readStatusButton);
  });
  updateBookStatusButton(book, readStatusButton);
  card.appendChild(readStatusButton);

  const removeButton = createNewElementWithClass("button", "delete");

  // Remove book when button is clicked
  removeButton.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    updateDisplay();
  });
  removeButton.textContent = "Remove";
  card.appendChild(removeButton);

  card.setAttribute("data-index", index);
  return card;
}

function updateBookStatusButton(book, statusButton) {
  statusButton.textContent = book.read ? "Read" : "Not Read";
  if (book.read) {
    statusButton.classList.remove("read");
    statusButton.classList.add("not-read");
  } else {
    statusButton.classList.remove("not-read");
    statusButton.classList.add("read");
  }
}

function updateDisplay() {
  const cardContainer = document.querySelector(".container");
  cardContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const card = generateNewCard(book, index);
    cardContainer.appendChild(card);
  });
}

function createNewElementWithClass(element, className) {
  element = document.createElement(element);
  element.classList.add(className);
  return element;
}

// Initialize library to be an empty array
let myLibrary = [];
generateSampleData();
updateDisplay();
