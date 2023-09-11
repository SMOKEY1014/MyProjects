// script.js

const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thank you for contacting me');
        setTimeout(() => {
            window.location.href = icon.getAttribute('href');
        }, 3000); // Redirect after 3 seconds
    });
});
function showPhoneNumber() {
    alert('Phone: +27636110430'); // Replace with your actual phone number
}