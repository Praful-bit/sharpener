function handleFormSubmit(event) {
    event.preventDefault();
    let username = event.target.username.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;

    const userDetails = {
        username, email, phone
    };

    const existingUsers = JSON.parse(localStorage.getItem(userDetails.email)) || [];
    existingUsers.push(userDetails);
    localStorage.setItem(userDetails.email, JSON.stringify(existingUsers));
    displayUsers(existingUsers);
}

function displayUsers(users) {
    const userList = document.getElementById('userList');

    userList.innerHTML = '';

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const listItem = document.createElement('li');

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            // Call a function to handle the delete action
            deleteUser(user.email);
            localStorage.removeItem(user.email)
        });

        // Append user details and delete button to the list item
        listItem.textContent = ` Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
        listItem.appendChild(deleteButton);

        userList.appendChild(listItem);
    }
}

function deleteUser(email) {
    const existingUsers = JSON.parse(localStorage.getItem(email)) || [];
    
    // Find the index of the user with the matching email
    const userIndex = existingUsers.findIndex(function(user) {
        return user.email === email;
    });

    // Remove the user from the array
    existingUsers.splice(userIndex, 1);

    // Update local storage with the modified array
    localStorage.setItem(email, JSON.stringify(existingUsers));

    // Redisplay the updated list
    displayUsers(existingUsers);
}

module.exports = handleFormSubmit;
