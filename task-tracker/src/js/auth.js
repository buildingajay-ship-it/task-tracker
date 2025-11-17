// This file handles user authentication, including login and logout functionality, and manages user sessions.

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;
            authenticateUser(username, password);
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            logoutUser();
        });
    }

    function authenticateUser(username, password) {
        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                sessionStorage.setItem('user', JSON.stringify(data.user));
                window.location.href = 'dashboard.html';
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    }

    function logoutUser() {
        fetch('/api/auth/logout', {
            method: 'POST'
        })
        .then(response => {
            if (response.ok) {
                sessionStorage.removeItem('user');
                window.location.href = 'login.html';
            }
        })
        .catch(error => console.error('Error:', error));
    }
});