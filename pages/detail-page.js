/* ----------------------- User Story ----------------------------------*/

/* A user can leave their name and write a comment, when they click submit, 
their name and comment will be displayed on the page. */

/*  -Add an event (name and comment) listener/handler to the button
    - Gather data of the input fields
    - Create some elements (to display the data)
    - Adjust the elements so they display the data
    - Display the adjusted elements on your page
    - Empty the input fields so the next user can type some new text. */


function submitComment() {
    console.log('Hello');
    const inputField = document.querySelector('#name');
    const textArea = document.querySelector('#msg');
    const name = inputField.value;
    const msg = textArea.value;
    console.log(name + ': ' + msg);

    insertComment(name, msg);
    
}

function insertComment(name, msg) {
    console.log('Im in insertComment')
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    console.log(comment);
    console.log(h3);
    console.log(p);

    
    h3.innerHTML = `${name} said:`;
    p.innerHTML = `${msg}`;

    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);

    console.log(comment);

}
