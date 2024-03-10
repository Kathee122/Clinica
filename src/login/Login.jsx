
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase/Config";
import Swal from 'sweetalert2'

export const Login = () => {

  const [userCredentials,setUserCredentials] = useState({});
  const navigate = useNavigate();

  const Information = (e) => {

    setUserCredentials({...userCredentials,[e.target.name]:e.target.value});
    console.log(userCredentials);
  }

  const singin = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      
     Swal.fire({
        title: "Bienvenido!",
        text: "Has iniciado sesion :)",
        icon: "success"
      });
      navigate("/cita");
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Credenciales invalidas",
      });
    });
}

  return (
    <>
    <h2>Gestion de citas</h2>
    <h1>Inicio de sesion</h1>
    <form className="container p-4 redondes-4">
    <div className="mb-4">
   <label className="form-label">Correo electronico</label>
   <div className="input-group">
   <i className="bi bi-person-circle"></i>
   <input type="text" name="email"  className='form-control' onChange={e => Information(e)}/>
  </div>
  </div>

    <div className="mb-4">
   <label className="form-label">Contraseña</label>
   <div className="input-group">
   <i className="bi bi-lock-fill"></i>
   <input type="password" name="password" className='form-control' onChange={e => Information(e)}/>
 </div>
 </div>
 <div>
 <Link className='link' to='/signup'>Si no tines una cuenta Registrate</Link>
 </div>
 <div className="d-grid gap-2 d-md-block">
 <button className="btn btn-primary mx-4" type="button" onClick={e => {singin(e)}}>Entrar</button>
</div>
 </form>
 </>
 )
}
