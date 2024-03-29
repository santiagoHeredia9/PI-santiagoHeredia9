const validation = (userData) => {
  const errors = {};
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (userData.email.length > 35) {
    errors.email = "The allowed amount characters are 35";
  }

  if (!regex.test(userData.email)) {
    errors.email = "Invalid E-mail";
  }

  if (!userData.email) {
    errors.email = "Required";
  }

  if (!userData.password) {
    errors.password = "Required";
  }
  if (userData.password.length < 6) {
    errors.password = "Must contain at least 6 characters";
  }

  if (!userData.password.match(/[0-9]/)) {
    errors.password = "Must contain at least 1 number";
  }

  return errors;
};

export default validation;
