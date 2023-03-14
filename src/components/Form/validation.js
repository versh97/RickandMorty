const validate = (userData) => {
    let errors = {};
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.email = 'Correo electrónico inválido!';
    }
    if (!userData.email) {
      errors.email = 'Completa el campo!';
    }
     
    if (!userData.password.match(/\d/)) {
      errors.password = 'Debe contener al menos un número!';
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password = 'Debe contener entre 6 y 10 caracteres!';
    }
    return errors;
  };
  
  export default validate;
  