const formContainer = document.getElementById("formContainer");

class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}

let myLibrary = [];

// dummy objects, didn't implement the 'add book' feature yet
addBookToLibrary("Sam", "Undertale", 200, true);
addBookToLibrary("Max", "Final Fintasy", 250, false);
addBookToLibrary("Dan", "Assassination Classroom", 100, true);

const submitButton = document.querySelector("#submitBtn");
submitButton.addEventListener("click", e => {
    event.preventDefault();
    let author = document.querySelector('#author').value;
    let title = document.querySelector('#title').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    // check if user inputs were valid
    if (formContainer.reportValidity() == false) return;

    addBookToLibrary(author, title, pages, read);
});


// the constructor
function addBookToLibrary(author, title, pages, read) {
    let book = new Book(author, title, pages, read);
    myLibrary.push(book);

    let catalog = document.getElementById('catalog');
    let divContainer = document.createElement("div");
    let closeBtn = document.createElement("button");
    let readBtn = document.createElement("button");

    readBtn.innerText = `${read ? 'Read' : 'Not Read'}`;
    readBtn.value = myLibrary.length - 1;

    closeBtn.value = myLibrary.length - 1;
    closeBtn.innerText = "x";

    divContainer.innerText = `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'} `;
    divContainer.appendChild(readBtn);
    divContainer.appendChild(closeBtn);
    catalog.appendChild(divContainer);

    closeBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    });

    readBtn.addEventListener("click", (e) => {
        let index = e.target.value; // gets the index of the element corresponding to the read button                
        myLibrary[index].read = myLibrary[index].read ? false : true;
        e.target.innerText = `${myLibrary[index].read ? 'Read' : 'Not Read'}`;

    });
}


