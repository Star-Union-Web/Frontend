
# Registration Form with JavaScript Validation, Local Storage, and Tailwind CSS

This repository contains a **registration form** with client-side validation using **JavaScript**, styled with **Tailwind CSS**, and uses **local storage** to save the user's input. The form is deployed on **Netlify**.

---

![Screenshot 2024-12-10 125420](https://github.com/user-attachments/assets/622e167e-d3b9-4332-a24c-6900bf525843)


###  Features
- **JavaScript Form Validation**:
  - Ensures required fields are filled.
  - Validates email format.
  - Password validation with specific requirements (e.g., minimum length, special characters).
- **Local Storage**:
  - Saves form data locally in the browser so users can retain their input even after refreshing the page.
- **Tailwind CSS**:
  - The form is styled using **Tailwind CSS**, providing a responsive and customizable design.
- **Responsive Design**: The form works well across various screen sizes.

---

###  Live Demo

You can try out the registration form live [here on Netlify](https://candid-fudge-0fa662.netlify.app/).

---


###  File Structure

```plaintext
/registration-form
  /index.html         # The registration form HTML
  /script.js          # JavaScript for form validation and local storage
  /README.md          # This file
```

### How It Works

**Tailwind CSS**:

- The form is styled using **Tailwind CSS**, ensuring it is both responsive and aesthetically pleasing. You can customize it easily by changing utility classes.
- To include Tailwind in your project via CDN, add this script to the `index.html`:
  ```html
  <script src="https://cdn.tailwindcss.com"></script>
  ```

**Form Validation**:

- The form includes JavaScript validation for the following fields:
  - **Name**: Required field.
  - **Email**: Must be a valid email format.
  - **Password**: Must meet a minimum length (e.g., 8 characters) and contain at least one special character.
  - **Confirm Password**: Must match the password.
  - **Phone Number** (Optional): If provided, must be a valid phone number.
  - **Agree to Terms**: The checkbox must be checked to proceed with the form submission.
- If any validation fails, an error message is displayed next to the corresponding input field using Tailwind's utility classes.

**Local Storage**:

- When the user fills out the form, the data is saved to the browser's local storage.
- If the user refreshes the page, the form will repopulate with the saved data.
- The form data persists as long as the browser's local storage is not cleared.

**Submission**:

- Upon successful validation, the form data is logged to the console (you can extend this to send the data to a server or API).





