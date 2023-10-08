
//  =================== SIGN UP contactform VALIDATION
const contactform = document.getElementById('contactform');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const contactemail = document.getElementById('contactemail');
const contactphone = document.getElementById('contactphone');
const contactsubject = document.getElementById('contactsubject');
const contactmessage = document.getElementById('contactmessage');

const closecontactform = document.getElementById('closecontactform');
const SuccesscontContact = document.getElementById('SuccesscontContact');
closecontactform.addEventListener('click', () => {
        contactemail.value = ""
        firstname.value = ""
        lastname.value = ""
        contactphone.value = ""
        contactsubject.value = ""
        contactmessage.value = ""
        contactmessage.value = ""

        contactemail.style.borderColor = "var(--border-color1-w-tish)"
        firstname.style.borderColor = "var(--border-color1-w-tish)"
        lastname.style.borderColor = "var(--border-color1-w-tish)"
        contactphone.style.borderColor = "var(--border-color1-w-tish)"
        contactsubject.style.borderColor = "var(--border-color1-w-tish)"
        contactmessage.style.borderColor = "var(--border-color1-w-tish)"
        contactmessage.style.borderColor = "var(--border-color1-w-tish)"
        SuccesscontContact.classList.remove('SuccesscontContactActive');
        contactform.style.border = "none"


})



contactform.addEventListener('submit', e => {
    e.preventDefault();
    
    if (firstname.value === "") {
        firstname.style.borderColor = "red"
        contactform.style.border = "1px solid red"
        // alert("Please enter first name")
        return

    }else{
        firstname.style.borderColor = " green"
        contactform.style.border = "1px solid green"

    }
    if (lastname.value === "") {
        lastname.style.borderColor = " red"
        contactform.style.border = "1px solid red"
        // alert("Please enter first name")
        return

    }else{
        lastname.style.borderColor = "green"
        contactform.style.border = "1px solid green"

    }
    if (contactemail.value === "" || !contactemail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        contactemail.style.borderColor = "red"
        contactform.style.border = "red"
        // alert("Please enter first name")
        return

    }else{
        contactemail.style.borderColor = " green"
        contactform.style.border = "1px solid green"

    }
    if (contactsubject.value === "") {
        contactsubject.style.borderColor = " red"
        contactform.style.border = "1px solid red"
        // alert("Please enter first name")
        return

    }else{
        contactsubject.style.borderColor = "green"
        contactform.style.border = "1px solid green"
    }
    if (contactphone.value === "") {
        contactphone.style.borderColor = "red"
        contactform.style.border = "1px solid red"
        // alert("Please enter first name")
        return

    }else{
        contactphone.style.borderColor = "green"
        contactform.style.border = "1px solid green"

    }
    if (contactmessage.value === "") {
        contactmessage.style.borderColor = "red"
        contactform.style.border = "1px solid red"
        // alert("Please enter first name")
        return
    }else{
        contactmessage.style.borderColor = "green"
        contactform.style.border = "1px solid green"

    }
    SuccesscontContact.classList.add('SuccesscontContactActive');
});

