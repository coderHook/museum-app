/* ----------------------- User Story ----------------------------------*/

/* A user can leave their name and write a comment, when they click submit, 
their name and comment will be displayed on the page. */


function submitComment() {
    const inputField = document.querySelector('#name');
    const textArea = document.querySelector('#msg');
    const name = inputField.value;
    const msg = textArea.value;

    //Validate the data entered:
    validations(name, msg);

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
    p.innerHTML = `\"${msg}\"`;

    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);

    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

}

//Validating

function validations(name, msg) {
    if(!name || !msg) {
        alert('Name and message must be filled to submit a comment.');
    } else if (msg.length > 280) { 
        alert("Your Comment is too Long, Please do not exceed 280 characters!")  
    } else {
        //Call the function to add comments.
        insertComment(name, msg);
    }
    
}

