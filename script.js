/* Get DOM Elements */

/* Get DOM Elements */

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
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
  console.log(myLibrary);
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
  readStatusButton.textContent = "Toggle: Read";
  card.appendChild(readStatusButton);

  const removeButton = createNewElementWithClass("button", "delete");
  removeButton.textContent = "Remove";
  card.appendChild(removeButton);

  card.setAttribute("data-index", index);
  return card;
}

function updateDisplay() {
  const cardContainer = document.querySelector(".container");

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
