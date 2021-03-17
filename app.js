const form = document.getElementById("form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");


function addUserHandler() {
    form.submit();

    const isValid = checkInputs(username, email);
    isValid
        ?
        addUser(username, email) :
        null;
}

function addUser(username, email) {
    let userData = document.getElementById('username-data');
    let emailData = document.getElementById('email-data');
    userData.innerHTML = username.value;
    emailData.innerHTML = email.value;
}

function remove() {
    let userData = document.getElementById('username-data');
    let emailData = document.getElementById('email-data');
    userData.innerHTML = "";
    emailData.innerHTML = "";
}

//username field with keyup event
let usernameEl = document.querySelector("#username");
usernameEl.addEventListener("keyup", function () {
    checkUserName(username);
});

let emailEl = document.querySelector("#email");
emailEl.addEventListener("keyup", function () {
    checkEmail(email);
});

let checkUserName = (username) => {
    let inputFeedbackEl = document.querySelector("#username-feedback");
    let regExp = /^[a-zA-Z0-9]{2,10}$/;
    if (regExp.test(username.value)) {
        makeValid(username, inputFeedbackEl);
        return true;
    } else {
        makeInvalid(username, inputFeedbackEl);
        return false;
    }
};

let checkEmail = (email) => {
    let inputFeedbackEl = document.querySelector("#email-feedback");
    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regExp.test(email.value)) {
        makeValid(email, inputFeedbackEl);
        return true;
    } else {
        makeInvalid(email, inputFeedbackEl);
        return false;
    }
};

//make valid
let makeValid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.add("is-form-valid");
    inputEl.classList.remove("is-form-invalid");
    inputFeedbackEl.classList.add("text-success");
    inputFeedbackEl.classList.remove("text-danger");
    inputFeedbackEl.innerText = "Looks Good";
};

//make Invalid
let makeInvalid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.remove("is-form-valid");
    inputEl.classList.add("is-form-invalid");
    inputFeedbackEl.classList.remove("text-success");
    inputFeedbackEl.classList.add("text-danger");
    inputFeedbackEl.innerText = `please enter a valid ${inputEl.placeholder}`;
};

function checkInputs(username, email) {
    let isUserValid = checkUserName(username);
    let isEmailValid = checkEmail(email);
    return isEmailValid && isUserValid;
}