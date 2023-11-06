const validationErrors = (userData, errors, setErrors) => {
  if (!userData.email) setErrors({ ...errors, email: "El email está vacío" });
 if (
    /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(userData.email) &&
    userData.email.length !== 35
  )setErrors({ ...errors, email: "" });
  
  else setErrors({ ...errors, email: "El email es incorrecto" });


  if(!/.*\d.*/.test(userData.password)) setErrors({...errors, password: "La contraseña debe contener al menos un número"})
  else if(userData.password.length > 6 || userData.password.length < 10) setErrors({...errors, password:""})
  else setErrors({...errors, password: "la contraseña tiene que tener una longitud entre 6 y 10 caracteres. "})
};

export default validationErrors;
