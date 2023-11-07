const validation = userData => {
  const errors = {}
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

   
   
    if(userData.email.length > 35){
      errors.email = "Supera los caracteres permitidos (35)"
      
    }

    if(!regex.test(userData.email)){
      errors.email = "Usuario inválido"
    }
    

    if(!userData.email){
      errors.email = "Campo obligatorio"
    }

   
    if(!userData.password.match(/[0-9]/)){
      errors.password = "Debe contener al menos un número"
    }


    if(userData.password.length < 6 && userData.password.length > 10){
      errors.password = "Debe tener entre 6 y 10 caracteres"
    }

    if(!userData.password){
      errors.password = "Campo obligatorio"
    }

    return errors
}

export default validation