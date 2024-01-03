
function handleFormSubmit(event) {
    event.preventDefault(); 

    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    // Create an object to store user details
    var userDetails = {
        username: username,
        email: email,
        phoneNumber: phoneNumber
    };

    // Convert the object to a JSON string and store in local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Optionally, you can display a confirmation message or redirect to another page
    alert('User details have been successfully stored in local storage.');
}

// Attach the handleFormSubmit function to the form's submit event
document.getElementById('userForm').addEventListener('submit', handleFormSubmit);