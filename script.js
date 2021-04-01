const form  = document.getElementById('form')
const pass = document.getElementById('password')
const confPass = document.getElementById('confirmpassword')
const messageContainer1 = document.querySelector('.message-container')
const messageContainer = document.getElementById('message')


let isValid = false;
let passMatch = false;
function validateForm(){
    //using constraint API
    isValid = form.checkValidity();
    if(!isValid){
    messageContainer.textContent = 'Please Fill out all the blanks'
    messageContainer.style.color = 'red';
    messageContainer1.style.borderColor = 'red'
    return;
    }
    if(pass.value === confPass.value){
        passMatch = true;
        pass.style.borderColor = 'green'
        confPass.style.borderColor= 'green'
    }
    else{
        passMatch = false;
        pass.style.borderColor = 'red'
        confPass.style.borderColor= 'red'
        messageContainer.textContent = "Make sure Passwords match!"
        messageContainer.style.color= 'red'
        messageContainer1.style.borderColor = 'red'
        return;
    }
    if(passMatch && isValid){
        messageContainer.textContent = 'Successfully Registere!'
        messageContainer1.style.borderColor = 'green'
        messageContainer.style.color='green'
    }
}

function storeForm(){
    const user = {
        name : form.name,
        phone :  form.phone,
        email : form.email,
        website : form.website,
        password : form.password,
        confirmPassword: form.confirmpassword
    };
    console.log(user)
}

function processFormData(e){
    e.preventDefault();
    // console.log(e)
    validateForm();
    if(isValid && passMatch){
        storeForm();

    }
}

form.addEventListener('submit',processFormData);