document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('.newsletter form');
    const email_Input = document.querySelector('#email');
    const message_Div = document.querySelector ('.message');

    form.addEventListener('submit', function(event){
        event.preventDefault(); //Prevent page reload.

        const email = email_Input.value.trim();

        if (email === "") {
            message_Div.textContent = "Please enter a valid email address.";
            message_Div.style.color = "white";
        } else {
            message_Div.textContent = `Thank you! Your email address ${email} has been added to our mailing list.`;
            message_Div.style.color = "white";

            email_Input.value = ""; //Clear the input.
        }
    });
});