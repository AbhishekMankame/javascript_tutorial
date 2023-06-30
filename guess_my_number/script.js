// // Document object model (DOM)
// // Document Object Model(DOM): Structured representation of HTML documents. Allows javascript to access html elements and styles to manipulate then
// // DOM is basically a connection point between HTML and Javascript
// // DOM is like a tree structure of all the elements in the html document. here each element is an object

// // Special object callled document object. It is automatically created by the browser, it is the entry point to the DOM
// // Query selector method is available on the document object. It is used to select elements in the DOM
// // Generally the first chile element of the document is the html element
// // DOM tree has the nodes for all the text and elements in the html document and also for comments and other stuffs
// // DON !== JavaScript
// // DOM and DOM methods are part of the web APIs. Web APIs are basically libraries that browsers implement and we can access them without having to write the code for them

// 'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// // console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);

'use strict';

document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  const guess = document.querySelector('.guess').value;
});
