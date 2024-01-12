let container = document.querySelector(".container");
let formEl = document.querySelector("#Form");
let usernameEL = document.querySelector(".username");
let EmailEl = document.querySelector(".Email");
let PhoneNumberEl = document.querySelector(".PhoneNumber");
let passwordEl = document.querySelector(".password");
let CpasswordEl = document.querySelector(".Cpassword");
let submitEl = document.querySelector(".submit");

formEl.addEventListener("click", (e) => {
    e.preventDefault();
    validateFun();
})

let validateFun = () => {
    let usernameval = usernameEL.value.trim();
    let Emailval = EmailEl.value.trim();
    let PhoneNumberval = PhoneNumberEl.value.trim();
    let passwordval = passwordEl.value.trim();
    let Cpasswordval = CpasswordEl.value.trim();

    // username

    if (usernameval === "") {
        setError(usernameEL, "*Please enter a valid information")
    }

    else if (usernameval.length <= 3) {
        setError(usernameEL, "*user name must be 3 char")
    }

    else {
        setSucusess(usernameEL);
    }

    // email 

    if (Emailval === "") {
        setError(EmailEl, "*Please enter a valid information")
    }
    else {
        setSucusess(EmailEl);
    }

    // Phone number

    if (PhoneNumberval === "") {
        setError(PhoneNumberEl, "*Please enter a valid information")
    }
    else if (PhoneNumberval.length < 10) {
        setError(PhoneNumberEl, "*Phone number must be 10 char")
    }
    else {
        setSucusess(PhoneNumberEl);
    }
    // password

    if (passwordval === "") {
        setError(passwordEl, "*Please enter a valid information")
    }
    else if (passwordval.length <= 5) {
        setError(passwordEl, "*Password must be 5 char")
    }
    else {
        setSucusess(passwordEl);
    }

    // conform password

    if (Cpasswordval === "") {
        setError(CpasswordEl, "*Please enter a valid information")
    }
    else if (Cpasswordval.length <= 5) {
        setError(CpasswordEl, "*Password must be 5 char")
    }
    else {
        setSucusess(CpasswordEl);
    }

    //Check form 
}

function setError(input, errormsg) {
    let formcontrol = input.parentElement;
    let smallEl = formcontrol.querySelector("small");
    formcontrol.className = "content error"
    smallEl.innerText = errormsg;
}

function setSucusess(input) {
    let formcontrol = input.parentElement;
    let smallEl = formcontrol.querySelector("small");
    smallEl.innerText = "";
    formcontrol.className = "content sucusess";

}
