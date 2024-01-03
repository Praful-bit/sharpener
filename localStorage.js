
function handleFormSubmit(event) {
    event.preventDefault(); 
    

    const userName   = document.getElementById('username').value
    const userEmail = document.getElementById('email').value
    const userPhone = document.getElementById('phoneNumber').value

    localStorage.setItem('name', userName)
    localStorage.setItem('email',userEmail)
    localStorage.setItem('phoneNumber',userPhone)
    console.log(localStorage.getItem('name'))
    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('phoneNumber'))
}