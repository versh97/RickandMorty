import React, { useState } from "react";
import validate from "./validation";


const Form = ({login}) => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });


    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
          }));
          
    };

    const handleSubmit = (event) => {
       event.preventDefault();
       login(userData);
    }




    return (
        <form onSubmit={handleSubmit}>
           <label>Usuario</label>
           <input onChange={handleInputChange} value={userData.username} type='text' name='username'
            style={{
                border: '2px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                padding: '10px',
                marginBottom: '10px',
                outline: 'none',
                boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
                borderColor: errors.username ? '#dc3545' : '#ccc'
            }} />
            
            {errors.username && <p>{errors.username}</p>}

           <label>Contraseña</label>
           <input onChange={handleInputChange} value={userData.password} type='password' name='password' 
            style={{
                border: '2px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                padding: '10px',
                marginBottom: '10px',
                outline: 'none',
                boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
                borderColor: errors.username ? '#dc3545' : '#ccc'
            }}/>

           {errors.password && <p>{errors.password}</p>}
           <button>Login</button>
        </form>
    )
}

export default Form;