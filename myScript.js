function onDocumentLoad() {
  
  // Setting button variable so we can track click 
  const btn = document.getElementById('addPostButton');
  
  // Add a click event listener to the button that calls handleClick
  btn.addEventListener('click', handleClick);
}

// Function to handle button click event
function handleClick() {
  
  // Calls the function that creates and appends new elements
  createAndAppendNewElements();
}

function createAndAppendNewElements() {
  
  // Getting values of all variables
  
  // Date
  let today = new Date();
  let dateString = today.toISOString().split('T')[0];
  
  // Title
  let title = document.getElementById('title').value;
  
  // Content
  let content = document.getElementById('content').value;
  
  // Author
  let author = document.getElementById('author').value;
  
  // Create a new div element
  const newDivElement = document.createElement('div');
  
  // Create new h2 element and assign its title
  const newHeaderElement = document.createElement('h2');
  newHeaderElement.textContent = title;
  
  // Create new paragraph element and assign the date/author
  const newParagraphElementAuthor = document.createElement('p');
  newParagraphElementAuthor.textContent = 'Posted on '+ dateString + ' by ' + author;
  
  // Create new paragraph element and assign the content
  const newParagraphElementContent = document.createElement('p');
  newParagraphElementContent.textContent = content;
  
  // Append the h2 and p elements to the div
  newDivElement.appendChild(newHeaderElement);
  newDivElement.appendChild(newParagraphElementAuthor);
  newDivElement.appendChild(newParagraphElementContent);
  
  // Append the new div to the document's body
  document.body.appendChild(newDivElement);
  
  // Setting all the input values to blank after button is pressed
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
  document.getElementById('author').value = '';
  
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);
