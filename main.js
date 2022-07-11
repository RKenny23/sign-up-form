const form = document.getElementById('form');

const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cPassword = document.getElementById('cpassword');

const thanks = document.getElementById('thanks');

form.addEventListener('submit', (e) => {
  if (
    !checkFnameValue() ||
    !checkLnameValue() ||
    !checkEmailValue() ||
    !checkPhoneValue() ||
    !checkPasswordValue() ||
    !checkCpasswordValue()
  ) {
    e.preventDefault();
  } else {
    thanks.style = 'display: flex';
    setTimeout(form.submit(), 5000);
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

// Check name inputs

function checkFnameValue() {
  const fNameValue = fName.value.trim();

  if (fNameValue === '') {
    setError(fName, 'First name is required.');
  } else {
    setSuccess(fName);
    return true;
  }
}

fName.addEventListener('blur', (e) => {
  checkFnameValue();
});

fName.addEventListener('input', (e) => {
  setSuccess(fName);
});

function checkLnameValue() {
  const lNameValue = lName.value.trim();

  if (lNameValue === '') {
    setError(lName, 'Last name is required.');
  } else {
    setSuccess(lName);
    return true;
  }
}

lName.addEventListener('blur', (e) => {
  checkLnameValue();
});

lName.addEventListener('input', (e) => {
  setSuccess(lName);
});

// Validate email input
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

function checkEmailValue() {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setError(email, 'Email is required.');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Entered value needs to be an email address.');
  } else if (emailValue.length < 8) {
    setError(email, 'Email should be at least 8 characters.');
  } else {
    setSuccess(email);
    return true;
  }
}

email.addEventListener('blur', (e) => {
  checkEmailValue();
});

email.addEventListener('input', (e) => {
  setSuccess(email);
});

// Validate Phone input
const isValidPhone = (phone) => {
  const re = /[\d]{10,}/;
  return re.test(String(phone));
};

function checkPhoneValue() {
  const phoneValue = phone.value.trim();

  if (phoneValue === '') {
    setError(phone, 'Phone is required.');
  } else if (!isValidPhone(phoneValue)) {
    setError(phone, 'Entered value needs to be a phone number.');
  } else {
    setSuccess(phone);
    return true;
  }
}

phone.addEventListener('blur', (e) => {
  checkPhoneValue();
});

phone.addEventListener('input', (e) => {
  setSuccess(phone);
});

// Validate password input
// Make sure password contains at least one digit, one lower case, one upper case, at least 8 characters.
const isValidPassword = (password) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return re.test(String(password));
};

function checkPasswordValue() {
  const passwordValue = password.value.trim();

  if (passwordValue === '') {
    setError(password, 'Password is required.');
  } else if (!isValidPassword(passwordValue)) {
    setError(
      password,
      'Password must contain at least one digit, one uppercase and lowercase letter, and be at least 8 characters in length.'
    );
  } else {
    setSuccess(password);
    return true;
  }
}

password.addEventListener('blur', (e) => {
  checkPasswordValue();
});

password.addEventListener('input', (e) => {
  setSuccess(password);
});

// Validate password confirmation input
function checkCpasswordValue() {
  const cPasswordValue = cPassword.value.trim();
  const passwordValue = password.value.trim();

  if (cPasswordValue === '') {
    setError(cPassword, 'Confirmation required.');
  } else if (cPasswordValue !== passwordValue) {
    setError(cPassword, "Passwords don't match.");
  } else if (cPasswordValue === passwordValue) {
    setSuccess(cPassword);
    return true;
  }
}

cPassword.addEventListener('input', (e) => {
  setSuccess(cPassword);
});

cPassword.addEventListener('blur', (e) => {
  checkCpasswordValue();
});
