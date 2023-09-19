const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submit = document.getElementById("submit");

function invalidMessage(input) {
    let label = input.name.split("-").join(" ");
    if (input.value == "") {
        input.setCustomValidity(`Please input your ${label}`);
    }
    else if (input.validity.patternMismatch) {
        input.setCustomValidity(`Please enter a valid ${label}`);
    }
    else {
        input.setCustomValidity("");
    }
    return true;
}

function passwordMatch () {
    if ((confirmPassword.value != password.value) || (confirmPassword.value == "") ){
        confirmPassword.setCustomValidity("Password does not match");
        return false;
    }
    else {
    confirmPassword.setCustomValidity("");
    return true;
    }
};

confirmPassword.addEventListener('focusout', function() {
    if ((confirmPassword.value != password.value) || (confirmPassword.value == "") ){
        confirmPassword.setCustomValidity("Password does not match");
        return false;
    }
    else {
    confirmPassword.setCustomValidity("");
    return true;
    }
});
