//Basic => syntax
const multiply = (a, b) => a * b;
const result = multiply(2, 3);
console.log(result);

//single parameter, no parathesis

const sqaure = (x) => x * x;
const sqrfun = sqaure(5);
console.log(sqrfun);

//no parameters
const random = () => Math.random();
console.log(random());

//assignment
//question
//Your task is to create a function extractAuthors for a library management system.
//This function should take an array of book objects, each with a title and an author property. The function must return an array containing the authors' names. Additionally, your function should validate that each book object has the correct properties. If a book object does not have an author property, your function should throw an error. Use ES6 arrow functions to implement this functionality, ensuring that the function works correctly only when the correct property names are used.
const extractAuthors = (books) => {
  if (books.some((book) => !("author" in book))) {
    throw new Error("Invalid book object - 'author' property missing");
  }
  return books.map((book) => book.author);
};

// Example usage:
const libraryBooks = [
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
];

console.log(extractAuthors(libraryBooks)); // ['Aldous Huxley', 'J.D. Salinger']
