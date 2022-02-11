document.getElementById("submit-btn").addEventListener('click', ()=>{
    let emailField = document.getElementById("email-field");
    emailValue = emailField.value;

    let passwordField = document.getElementById("password-field");
    passwordValue = passwordField.value;

    if(emailValue == 'hellobank@gmail.com' && passwordValue == 'hellobank'){
        window.location.href = 'banking.html'
    }else{
        alert("Wrong input")
    }
})
