document.addEventListener ('DOMContentLoaded', () => {
    const SignInForm = document.querySelector ('#sign-in-form');
    const SignUpForm = document.querySelector ('#sign-up-form'); 
    

    // validation rules
        const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const validatePassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d._]{8,}$/.test(password);
        const validateUsername = (username) => /^[a-zA-Z0-9]{5,}$/.test(username);
        const validatePhone = (phone) => /^\d{11}$/.test(phone);

      // Utility function for showing/hiding errors
      const showError = (input, message) => {
        const errorInput = input.nextElementSibling;
        errorInput.innerText = message;
        errorInput.classList.remove('hidden');
      };

      const hideError = (input) => {
        const errorInput = input.nextElementSibling;
        errorInput.classList.add('hidden');
      };

      // sign in form validation
    SignInForm.addEventListener ('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const username = SignInForm.querySelector ('#signin-username');
        if (!username.value.trim()) {
            showError(username, 'Username is required');
            isValid = false;
        } else {
            hideError(username);
        }

        const password = SignInForm.querySelector ('#signin-password');
        if(!password.value.trim()) {
            showError(password, 'Password is required');
            isValid = false;
        }
        else {
            hideError(password);
        }

        if (isValid) {
            alert('Sign in successful');
        }
    });

    // sign up form validation
    SignUpForm.addEventListener ('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const username = SignUpForm.querySelector ('#signup-username');
        if (!username.value.trim()) {
            showError(username, 'Username is required');
            isValid = false;
        }
        else if (!validateUsername(username.value)) {
            showError(username, 'Username must be at least 5 characters long and contain only letters and numbers');
            isValid = false;
        }
         else {
            hideError(username);
        }

        const email = SignUpForm.querySelector ('#signup-email');
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, 'Email is invalid');
            isValid = false;
        } else {
            hideError(email);
        }

        const password = SignUpForm.querySelector ('#signup-password');
        if (!password.value.trim()) {
            showError(password, 'Password is required');
            isValid = false;
        } else if (!validatePassword(password.value)) {
            showError(password, 'Password must be at least 8 characters long and contain at least one letter and one number , and can include _ or .');
            isValid = false;
        } else {
            hideError(password);
        }

        const confirmPassword = SignUpForm.querySelector ('#signup-confirm-password');
        if (!confirmPassword.value.trim()) {
            showError(confirmPassword, 'Confirm Password is required');
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'Passwords do not match');
            isValid = false;
        } else {
            hideError(confirmPassword);
        }

        const phone = SignUpForm.querySelector ('#signup-phone');
        if(!validatePhone(phone.value)) {
            showError(phone, 'Phone number must be 11 digits');
            isValid = false;
        } else {   
            hideError(phone);
        }


        const terms = SignUpForm.querySelector("#signup-terms");
        if (!terms.checked) {
          showError(terms, "You must agree to the terms.");
          isValid = false;
        }
         else {
          hideError(terms);
        }

        if (isValid) {
            alert('Sign up successful');
        }

    });

});

function toggleSection(sectionId) {
    document.getElementById('sign-in-form').classList.add('hidden-section');
    document.getElementById('sign-up-form').classList.add('hidden-section');
    document.getElementById(sectionId).classList.remove('hidden-section');
  }
