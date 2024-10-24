

// Password visibility toggle
const passwordField = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
togglePassword.addEventListener('click', () => {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

// Password strength checker
const strengthMeter = document.getElementById('strengthMeter');
passwordField.addEventListener('input', () => {
    const value = passwordField.value;
    const strength = getPasswordStrength(value);
    strengthMeter.style.width = `${strength}%`;

    if (strength < 30) {
        strengthMeter.style.background = '#dc3545';
    } else if (strength < 60) {
        strengthMeter.style.background = '#f0ad4e';
    } else {
        strengthMeter.style.background = '#28a745';
    }
});

// Handle input field label animations
const inputs = document.querySelectorAll('.form-group input');

inputs.forEach((input) => {
    input.addEventListener('focus', () => {
        input.classList.add('filled');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.classList.remove('filled');
        }
    });
});

function getPasswordStrength(password) {
    let strength = 0;
    if (password.length > 6) strength += 20;
    if (password.match(/[A-Z]/)) strength += 20;
    if (password.match(/[0-9]/)) strength += 20;
    if (password.match(/[!@#$%^&*]/)) strength += 20;
    if (password.length > 10) strength += 20;
    return strength;
}

// Login form submission with progress bar animation
const loginForm = document.getElementById('loginForm');
const progressBar = document.getElementById('progressBar');
const successCheck = document.getElementById('successCheck');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    progressBar.style.width = '100%';
    setTimeout(() => {
        successCheck.style.display = 'block';
        loginForm.style.display = 'none';
    }, 1000);
});
