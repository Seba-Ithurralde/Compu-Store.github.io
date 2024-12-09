import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ title }) => {
  const [checkoutValues, setCheckoutValues] = useState({
    nombre: '',
    telefono: '',
    email: '',
  });

  const [checkoutErrors, setCheckoutErrors] = useState({
    nombre: '',
    telefono: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutValues({
      ...checkoutValues,
      [name]: value,
    });
  };

  const checkoutForm = () => {
    let isValid = true;
    const errors = {
      nombre: '',
      telefono: '',
      email: '',
    };

    if (!checkoutValues.nombre) {
      errors.nombre = 'El nombre es requerido';
      isValid = false;
    }

    if (!checkoutValues.email) {
      errors.email = 'El email es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(checkoutValues.email)) {
      errors.email = 'El formato del email es incorrecto';
      isValid = false;
    }

    if (!checkoutValues.telefono) {
      errors.telefono = 'El teléfono es requerido';
      isValid = false;
    }

    setCheckoutErrors(errors);
    return isValid;
  };


  const checkout = (e) => {
    if (checkoutForm()) {
    } else {
      e.preventDefault();
    }
  };

  return (
    
    <form onSubmit={checkout}>
      <h1>{title}</h1>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={checkoutValues.nombre}
            onChange={handleChange}
          />
        </label>
        {checkoutErrors.nombre && <div>{checkoutErrors.nombre}</div>}
      </div>
      <br />

      <div>
        <label>
          Teléfono:
          <input
          type="text"
            name="telefono"
            value={checkoutValues.telefono}
            onChange={handleChange}
          />
        </label>
        {checkoutErrors.telefono && <div>{checkoutErrors.telefono}</div>}
      </div>
      <br />

      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={checkoutValues.email}
            onChange={handleChange}
          />
        </label>
        {checkoutErrors.email && <div>{checkoutErrors.email}</div>}
      </div>
      <br /><br />

      <button type="submit">Confirmar</button> <br /> <br />

      <Link to="/cart"><b>Volver</b></Link>
    </form>
  );
};

export default Checkout;
