import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Config";
import Swal from 'sweetalert2'



export const SignUp = () => {
    const [userCredentials,setUserCredentials] = useState({});
    const navigate = useNavigate();

    const Information = (e) => {
  
      setUserCredentials({...userCredentials,[e.target.name]:e.target.value});
      console.log(userCredentials);
    }

    const newUser = (e) => {
        e.preventDefault();
  
    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      Swal.fire({
        title: "Estas seguro de registrarte?",
        text: "Una vez registrado, podras iniciar sesion!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Registrado exitosamente!",
            icon: "success"
          });
          navigate("/");
        }
      });

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
      }



  return (
    <>
    <h1>Registro de usuario</h1>
    <form className="container p-4 redondes-4">
 <div className="mb-3">
   <label className="form-label">Correo</label>
   <div className="input-group">
   <i className="bi bi-person-circle"></i>
   <input type="text" name="email" className='form-control' onChange={e => Information(e)}/>
 </div>
 </div>

 <div className="mb-3">
   <label className="form-label">Contraseña</label>
   <div className="input-group">
   <i className="bi bi-lock-fill"></i>
   <input type="password" name="password" className='form-control' onChange={e => Information(e)}/>
 </div>
 </div>

 <div className="d-grid gap-2 d-md-block">
 <button className="btn btn-primary mx-4" type="button" onClick={e => {newUser(e)}}>Registrar</button>

 </div>
 </form>
 </>
  )
}
