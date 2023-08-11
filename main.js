const emailInput = document.querySelector('#email');

const validateEmail = () => {
  return emailInput.validity.typeMismatch;
};

emailInput.addEventListener('input', validateEmail);