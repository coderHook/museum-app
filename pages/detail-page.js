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

    //Call the function to add comments.
    insertComment(name, msg);

    //Reset values
    inputField.value = null;
    textArea.value = null;
    
}

//Inserting comments.
function insertComment(name, msg) {
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    
    h3.innerHTML = `${name} said:`;
    p.innerHTML = ` ${msg}`;

    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);

    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

}
