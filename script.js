const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//=> it used to determine function
//e containes information about the event
//e.target  used to access fields

form.addEventListener('submit' ,(e) => {
   e.preventDefault();

   validateInputs();

});

const setError = (element , message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


//regex to validate the format of the email.
const isValidEmail = email => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
     setError(username, 'Username is required');
    }
    else{
     setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email is required')
    }
    else if(!isValidEmail(emailValue)){
        setError(email , 'Provide a valid email address');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password , 'Password is required');
    }
    else if (passwordValue.length < 8){
        setError(password, 'password m{ust be at least 8 character');
    }
    else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'Please confirm your password');
    }
    else if(password2Value !== passwordValue){
        setError(password2, "password doesn't match");
    }
    else {
        setSuccess(password2);
    }

};