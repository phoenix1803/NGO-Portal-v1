// Shrink header when scrolling
window.onscroll = function () {
  const header = document.querySelector('header');
  const logo = document.querySelector('.logo-img');
  
  if (window.pageYOffset > 50) {
    header.classList.add('shrink');
    logo.style.width = '60px';  // Slightly shrinks the logo
  } else {
    header.classList.remove('shrink');
    logo.style.width = '80px';  // Restore the original logo size
  }
};
// Script to open and close the login modal
const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');

loginBtn.addEventListener('click', () => {
  loginPopup.classList.add('active');
});

// Close the login popup when clicked outside of the modal
window.addEventListener('click', (e) => {
  if (e.target === loginPopup) {
    loginPopup.classList.remove('active');
  }
});