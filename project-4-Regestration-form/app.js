document.addEventListener("DOMContentLoaded",()=>{
  const form=document.getElementById("form")
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const phoneInput = document.getElementById("phone");
  const termsCheckbox = document.getElementById("terms");

  nameInput.addEventListener("blur", validateName);//make the check after the user enter all data needed in the box
  emailInput.addEventListener("blur", validateEmail);
  passwordInput.addEventListener("blur", validatePassword);
  confirmPasswordInput.addEventListener("blur", validateConfirmPassword);
  phoneInput.addEventListener("blur", validatePhone);
  termsCheckbox.addEventListener("change", validateTerms);



  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting immediately

    if (validateForm()) {
      // If the form is valid, store data in local storage
      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
        confirmPassword: confirmPasswordInput.value.trim(),
        phone: phoneInput.value.trim(),
        termsAccepted: termsCheckbox.checked
      };

      localStorage.setItem('formData', JSON.stringify(formData)); // Save the form data to localStorage
      alert('Form data saved successfully!'); // Optional: Notify the user
    }
  });


  function showerror(input, message) {
    const errorMessage = input.parentElement.querySelector(".error-message");
    if (errorMessage) {
      errorMessage.textContent = message;  // Set the error message
    } else {
      console.error("Error message element not found.");
    }
    input.classList.add("border-red-500");  // Highlight the input with red border
    input.classList.remove("border-green-500");  // Remove any green border if present
  }



  function showSuccess(input) {
    const errorMessage = input.parentElement.querySelector(".error-message");
    if (errorMessage) {  // Ensure the element exists
      errorMessage.textContent = "";  // Clear the error message
      input.classList.add("border-green-500");
      input.classList.remove("border-red-500");
    }
  }

  function validateName(){
    const name_Value= nameInput.value.trim();
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!name_Value) {
      showerror(nameInput, "Name is required.");
      return false;
    } else if (!nameRegex.test(name_Value)) {
      showerror(nameInput, "Name must contain only letters.");
      return false;
    } else {
      showSuccess(nameInput);
      return true;
    }
  }

  function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue) {
      showerror(emailInput, "Email is required.");
      return false;
    } else if (!emailRegex.test(emailValue)) {
      showerror(emailInput, "Enter a valid email address.");
      return false;
    } else {
      showSuccess(emailInput);
      return true;
    }
  }
  function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordValue = passwordInput.value.trim();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordValue) {
      showerror(passwordInput, "Password is required.");
      return false;
    } else if (!passwordRegex.test(passwordValue)) {
      showerror(passwordInput, "Password must be at least 8 characters long, with uppercase, lowercase, and a number.");
      return false;
    } else {
      showSuccess(passwordInput);
      return true;
    }
  }

  function validateConfirmPassword() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
      showerror(confirmPasswordInput, "Passwords do not match.");
      return false;
    } else {
      showSuccess(confirmPasswordInput);
      return true;
    }
  }
  function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phoneValue = phoneInput.value.trim();
    const phoneRegex = /^[0-9]{10,15}$/;

    if (phoneValue && !phoneRegex.test(phoneValue)) {
      showerror(phoneInput, "Enter a valid phone number.");
      return false;
    } else {
      showSuccess(phoneInput);
      return true;
    }
  }
  function validateTerms() {
    const termsCheckbox = document.getElementById("terms");

    if (!termsCheckbox.checked) {
      showerror(termsCheckbox, "You must agree to the terms.");
      return false;
    } else {
      showSuccess(termsCheckbox);
      return true;
    }
  }
  function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isPhoneValid = validatePhone();
    const isTermsValid = validateTerms();

    return isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isPhoneValid && isTermsValid;

  }
})
