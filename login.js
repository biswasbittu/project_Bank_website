document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const emailUpper = emailField.value;
    const email = emailUpper.toLowerCase();



    //    Password Field
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;

    if (email === 'biswasbittu@gmail.com' && password === '741501') {
        location.href='./bank.html';
    }
     else if(email !== 'biswasbittu@gmail.com'){
        alert("Invalid Username")
    }
    else {
        alert('Invalid Password');
    }
})