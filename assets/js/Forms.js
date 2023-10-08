let eyeOne = document.getElementById('signPassVeiw')
let eyeOneO = document.getElementById('logPassVeiwO')
let eyeOneT = document.getElementById('logPassVeiwT')
eyeOne.addEventListener("click", () =>{
    eyeOne.classList.toggle("fa-eye-slash")
        if (eyeOne.classList.contains("fa-eye-slash")) {
            password22.type = "text"
        } else {
            password22.type = "password"

        }
 
})
// let eyeOneO = document.getElementById('logPassVeiwO')
eyeOneO.addEventListener("click", () =>{
    eyeOneO.classList.toggle("fa-eye-slash")
        if (eyeOneO.classList.contains("fa-eye-slash")) {
            password.type = "text"
        } else {
            password.type = "password"

        }
 
})
eyeOneT.addEventListener("click", () =>{
    eyeOneT.classList.toggle("fa-eye-slash")
        if (eyeOneT.classList.contains("fa-eye-slash")) {
            password2.type = "text"
        } else {
            password2.type = "password"

        }
 
})







//  =================== SIGN UP FORM VALIDATION
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// form.style.display = "none"

const SignOut = document.getElementById('Signout');
SignOut.classList.remove('Signout');
const SignUp = document.getElementById('Signup');
const SignIn = document.getElementById('Signin');

SignOut.addEventListener('click', () =>{
SignOut.classList.remove('Signout');
SignUp.classList.add('Signup');
SignIn.classList.add('Signin');
})

const closeform1 = document.getElementById('closeform1');
const SuccessM1 = document.getElementById('SuccessM1');
closeform1.addEventListener('click', () => {
        email.value = ""
        username.value = ""
        password.value = ""
        password2.value = ""
        SuccessM1.classList.remove('SuccessMActive');
        SignOut.classList.add('Signout');
        SignUp.classList.remove('Signup');
        SignIn.classList.remove('Signin');

})


form.addEventListener('submit', e => {
    e.preventDefault();
    e.pr

    if (username.value === "") {
        username.style.borderColor = "red"
        return
    }else{
        username.style.borderColor = " green"
    }
    if (email.value === "" || !email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        email.style.borderColor = "red"
        return
    }else{
        email.style.borderColor = " green"
    }
    if (password.value === "") {
        password.style.borderColor = " red" 
        return
    }else{
        password.style.borderColor = "green"
    }
    if (password2.value === "" || !password2.value === password.value) {
        password2.style.borderColor = " red"
        return
    }else{
        password2.style.borderColor = "green"

    }
    SuccessM1.classList.add('SuccessMActive');

    
});


//  ================ SIGN IN FORM VALIDATION


const form2 = document.getElementById('form2');
const email2 = document.getElementById('email2');
const password22 = document.getElementById('password22');

password22.value = ""
const closeform2 = document.getElementById('closeform2');
const SuccessM2 = document.getElementById('SuccessM2');
closeform2.addEventListener('click', () => {
    email2.value = ""
    password22.value = ""
    SuccessM2.classList.remove('SuccessMActive2');
    SignOut.classList.add('Signout');
    SignUp.classList.remove('Signup');
    SignIn.classList.remove('Signin');
})


// form2.classList.remove('success')
form2.addEventListener('submit', g => {
    g.preventDefault();

    if (email2.value === "" || !email2.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        email2.style.borderColor = "red"
        return
    }else{
        email2.style.borderColor = " green"
    }
    if (password22.value === "") {
        password22.style.borderColor = " red" 
        return
    }else{
        password22.style.borderColor = "green"
    }

    SuccessM2.classList.add('SuccessMActive2');

});
