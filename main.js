const emailInput = document.querySelector('#email');
const zipInput = document.querySelector('#zipcode');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const submitButton = document.querySelector('#btnFetch');

const validateEmail = () => {
  return emailInput.validity.typeMismatch;
};

const validateZip = () => {
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    us: [
      "\\d{5}",
      "US ZIPs must have exactly 5 digits"
    ]
  };

  const country = document.querySelector('#country').value;

  const constraint = new RegExp(constraints[country][0], "");

  if (constraint.test(zipInput.value)) {
    // The ZIP follows the constraint, we use the ConstraintAPI to tell it
    zipInput.setCustomValidity("");
  } else {
    // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
    // give a message about the format required for this country
    zipInput.setCustomValidity(constraints[country][1]);
  }
};

const validatePassword = () => {
  return passwordInput.checkValidity();
};

const validateConfirmPassword = () => {
  if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity('');
  } else {
    confirmPasswordInput.setCustomValidity('Does not match password')
  }
};

const submitForm = () => {
  if (document.querySelector('form').checkValidity()) {
    document.querySelector('body').replaceChildren();
    template = '<h2>Form submitted successfully!</h2>'
    document.querySelector('body').innerHTML = template;
  } else {
    document.querySelector('form').reportValidity()
  }
};

emailInput.addEventListener('input', validateEmail);
zipInput.addEventListener('input', validateZip);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);
submitButton.addEventListener('click', submitForm);