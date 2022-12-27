const form = document.querySelector("form");
const email = document.getElementById("mail");
const country = document.getElementById("country");
const zipCode = document.getElementById("zip-code");
const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirm");
const mailError = document.querySelector("span.mail-error");
const countryErrorVar = document.querySelector("span.country-error");
const zipError = document.querySelector("span.zip-error");
const passwordError = document.querySelector("span.password-error");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        mailError.textContent = "";
        mailError.className = "error";
    } else {
        emailError();
    }
});

country.addEventListener("input", (event) => {
    if (country.validity.valid) {
        countryErrorVar.textContent = "";
        countryErrorVar.className = "error";
    } else {
        countryError();
    }
});

zipCode.addEventListener("input", (event) => {
    if (zipCode.validity.valid) {
        zipError.textContent = "";
        zipError.className = "error";
    } else {
        zipCodeError();
    }
});

password.addEventListener("input", (event) => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "error";
    } else {
        pswError();
    }
});

form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        emailError();

    } else if (!country.validity.valid) {
        countryError();
    } else if (!zipCode.validity.valid) {
        zipCodeError();
    } else if (!password.validity.valid) {
        pswError();
    }
    event.preventDefault();
});

function emailError() {
    if (email.validity.valueMissing) {
        mailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        mailError.textContent =
            "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
        mailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
}

function pswError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "Enter a password";
    } else if (password.validity.tooShort) {
        passwordError.textContent = `Password should be at least ${password.minLength} characters`;
    }
}

function countryError() {
    if (country.validity.valueMissing) {
        countryErrorVar.textContent = "Please enter your country name";
    } else if (country.validity.tooShort) {
        countryErrorVar.textContent = `Country should be at least ${country.minLength} characters.`;
    }
};

function zipCodeError() {
    if (zipCode.validity.valueMissing) {
        zipError.textContent = "Enter zip code";
    } else if (zipCode.validity.patternMismatch) {
        zipError.textContent = "Please enter the right format.";
    }
};

function zipCodeError() {
    if (zipCode.validity.valueMissing) {
        zipError.textContent = "Enter zip code";
    } else if (zipCode.validity.patternMismatch) {
        zipError.textContent = "Please enter the right format.";
    }
};

function showPassword() {
    let psw = document.getElementById("password");
    if (psw.type === "password") {
        psw.type = "text";
    } else {
        psw.type = "password";
    }
}
