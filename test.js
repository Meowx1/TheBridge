
function validateForm() {
    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var username = usernameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;

    if (username === "" || email === "" || message === "") {
        alert("Please fill out all fields in the form");
        return false; // Prevent the form from submitting
    }
    else {
    alert("TheBridge Form is submitted with the following values:\nUsername: " + username + "\nEmail: " + email + "\nMessage: " + message);
    }
}

