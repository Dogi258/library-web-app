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

// Initialize library to be an empty array
let myLibrary = [];

// Make book object
myBook = new Book("The Hobbit", "J.R.R. Tolkein", 295, false);

console.log(myBook);
