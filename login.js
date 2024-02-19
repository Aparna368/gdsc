document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to forms
    var signInForm = document.getElementById('signInForm');
    var signUpForm = document.getElementById('signUpForm');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // You can add validation here before submitting the form
        var email = document.getElementById('signInEmail').value;
        var password = document.getElementById('signInPassword').value;
        // Example: Basic validation
        if (email.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }
        // Here you can perform your sign-in logic, like sending the data to a server
        console.log('Signing in with email:', email, 'and password:', password);
        // Clear the form fields after submission
        signInForm.reset();
    });

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // You can add validation here before submitting the form
        var name = document.getElementById('signUpName').value;
        var email = document.getElementById('signUpEmail').value;
        var password = document.getElementById('signUpPassword').value;
        // Example: Basic validation
        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }
        // Here you can perform your sign-up logic, like sending the data to a server
        console.log('Signing up with name:', name, 'email:', email, 'and password:', password);
        // Clear the form fields after submission
        signUpForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to forms
    var signInForm = document.getElementById('signInForm');
    var signUpForm = document.getElementById('signUpForm');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // Process login data and perform necessary validation
        // Example: Assume login is successful, then redirect to home page
        window.location.href = "info.html"; // Redirect to home page
    });

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // Process registration data and perform necessary validation
        // Example: Assume registration is successful, then redirect to home page
        window.location.href = "info.html"; // Redirect to home page
    });
});
