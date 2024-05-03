const validation = (userData) => {
  const errors = {};
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!userData.name.trim()) {
    errors.name = "Required";
  }

  if (userData.email.length > 35) {
    errors.email = "The allowed amount characters are 35";
  }

  if (!regex.test(userData.email)) {
    errors.email = "Invalid E-mail";
  }

  if (!userData.email.trim()) {
    errors.email = "Required";
  }

  if (!userData.password.trim()) {
    errors.password = "Required";
  }
  if (userData.password.length < 6) {
    errors.password = "Must contain at least 6 characters";
  }

  if (!userData.password.match(/[0-9]/)) {
    errors.password = "Must contain at least 1 number";
  }

  if (userData.password !== userData.repeatPassword) {
    errors.repeatPassword = "The passwords don't match.";
  }

  return errors;
};

export default validation;
