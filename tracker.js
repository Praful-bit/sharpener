function handleFormSubmit(event) {
    event.preventDefault();
    let ammount = event.target.ammount.value;
    let des = event.target.des.value;
    let cate = event.target.cate.value;

    var userDetails = {
        ammount, des, cate
    };

    var existingUsers = JSON.parse(localStorage.getItem(userDetails.des)) || [];
    existingUsers.push(userDetails);
    localStorage.setItem(userDetails.des, JSON.stringify(existingUsers));
    displayUsers(existingUsers);
}

module.exports = handleFormSubmit;

function displayUsers(users) {
    var userList = document.getElementById('userList');

    userList.innerHTML = '';

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var listItem = document.createElement('li');
        listItem.textContent =` ammount: ${user.ammount}, des: ${user.des}, cate: ${user.cate}`;
        userList.appendChild(listItem);
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Expense';
        deleteButton.addEventListener('click', function () {
            // Call a function to handle the delete action
            deleteUser(user.des);
            localStorage.removeItem(user.des);
        });

        // Create an edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit Expense';
        editButton.addEventListener('click', function () {
            // Call a function to handle the edit action
            editUser(user);
        });

        // Append user details, delete button, and edit button to the list item
        listItem.textContent = ` ammount: ${user.ammount}, des: ${user.des}, cate: ${user.cate}`;
        listItem.appendChild(deleteButton);
        listItem.appendChild(editButton);

        userList.appendChild(listItem);
    }
}

function editUser(user) {
    // Populate the input fields with existing values
    document.getElementById('ammount').value = user.ammount;
    document.getElementById('des').value = user.des;
    document.getElementById('cate').value = user.cate;

    // Remove the user from the screen and local storage
    deleteUser(user.des);
    localStorage.editUser(user.des)
}

function deleteUser(des) {
    const existingUsers = JSON.parse(localStorage.getItem(des)) || [];

    // Find the index of the user with the matching des
    const userIndex = existingUsers.findIndex(function(user) {
        return user.des === des;
    });

    // Remove the user from the array
    existingUsers.splice(userIndex, 1);

    // Update local storage with the modified array
    localStorage.setItem(des, JSON.stringify(existingUsers));

    // Redisplay the updated list
    displayUsers(existingUsers);
}