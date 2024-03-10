import Swal from 'sweetalert2'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Cita = () => {
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Paciente:', nombre);
      console.log('Fecha:', fecha);
      console.log('Hora:', hora);
      Swal.fire({
        title: "Registrado exitosamente!",
        icon: "success"
      })
    }

  
    return (
    <>
    <h1>Bienvenido Registre su cita</h1>
     <div style={{backgroundImage:'https://i.pinimg.com/564x/b5/36/6e/b5366e76dd1d77389dc35e5dc3a6e238.jpg', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Formulario de Citas Médicas</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre del paciente:</label>
              <input
                type="text"
                id="nombre"
                className="form-control"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha de la cita:</label>
              <input
                type="date"
                id="fecha"
                className="form-control"
                value={fecha}
                onChange={(event) => setFecha(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Hora de la cita:</label>
              <input
                type="time"
                id="hora"
                className="form-control"
                value={hora}
                onChange={(event) => setHora(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-danger">Registrar</button>
            <Link to='/' className='btn btn-dark' >Cerrar Sesion</Link>
          </form>
        </div>
      </div>
      </div>
      </>
    );
    
  }
