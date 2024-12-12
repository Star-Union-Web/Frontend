function validateForm(event) {
    event.preventDefault(); 

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const phone = document.getElementById("phone");
    const check = document.getElementById("check");

    let valid = true;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!name.value || !nameRegex.test(name.value)) {
        alert("Please enter a valid name containing only letters.");
        name.style.border = '2px solid red';
        valid = false;
        return false;
    } else {
        name.style.border = '2px solid green';
    }
    
    if (!email.value || !emailRegex.test(email.value)) {
        alert("Please enter a valid email address.");
        email.style.border = '2px solid red';
        valid = false;
        return false;
    } else {
        email.style.border = '2px solid green';
    }
    
    if (!password.value || !passwordRegex.test(password.value)) {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.");
        password.style.border = '2px solid red';
        valid = false;
        return false;
    } else {
        password.style.border = '2px solid green';
    }

    if (!confirmPassword){
        alert("Please confirm the password.");
        confirmPassword.style.border = '2px solid red';
        valid = false;
        return false;
    } 
    
    if (password.value != confirmPassword.value) {
        alert("Password and Confirm Password must match.");
        confirmPassword.style.border = '2px solid red';
        valid = false;
        return false;
    } else {
        password.style.border = '2px solid green';
        confirmPassword.style.border = '2px solid green';
    }
    
    if (!phone.value || !phoneRegex.test(phone.value)) {
        alert("Please enter a valid phone number.");
        phone.style.border = '2px solid red';
        valid = false;
        return false;
    } else if (phone.value) {
        phone.style.border = '2px solid green';
    }

    if (!check.checked) {
        alert("You must agree to the Terms and Conditions.");
        valid = false;
        return false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
}

document.querySelector("form").addEventListener("submit", validateForm);
