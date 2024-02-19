// auth.js

// Function to check if the user is authenticated
function isAuthenticated() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Function to redirect the user to the login page if not authenticated
function redirectToLogin() {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
    }
}

// Check authentication status on page load
document.addEventListener('DOMContentLoaded', function() {
    // Array of restricted pages
    var restrictedPages = ['dashboard.html', 'profile.html', 'settings.html'];

    // Redirect to login page if trying to access a restricted page
    if (restrictedPages.includes(window.location.pathname.split('/').pop())) {
        redirectToLogin();
    }
});
