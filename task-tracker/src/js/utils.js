// This file contains utility functions that are used across the application, such as data formatting and validation.

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export { formatDate, validateEmail, generateUniqueId, deepClone };