'use strict';

const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Your submission logic here
  form.reset();
});
