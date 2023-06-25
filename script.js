const form = document.getElementById("myform");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const terms = document.getElementById("terms").checked;

    let isValid = true;

    if (firstName === "" || lastName === "") {
        displayError("firstName", "Name cannot be empty");
        isValid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        displayError("phone", "Please enter a valid phone number");
        isValid = false;
    }

    if (!/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,3})+$/.test(email)) {
        displayError("email", "Please enter a valid email address");
        isValid = false;
    }

    if (!/^(?=.*\d)(?=.*[A-Z]).{8,}$/.test(password)) {
        displayError("password", "Password must be at least 8 characters long and contain at least one numeric value and one uppercase value");
        isValid = false;
    }

    if (!terms) {
        displayError("terms", "Please agree to the given Terms and Conditions");
        isValid = false;
    }

    if (isValid) {
        console.log("Form submitted successfully");
        alert("Form submitted successfully");
    }
});

function displayError(fieldId, errorMessage) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    errorElement.innerText = errorMessage;
}

function clearErrors() {
    const errorElements = document.getElementsByClassName("error");
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].innerText = "";
    }
}