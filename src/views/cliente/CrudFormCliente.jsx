import React, { useState, useEffect } from 'react';

const initialForm = {
  cl_nombre: '',
  cl_apellido: '',
  cl_dni: '',
  cl_email: '',
  cl_telefono: '',
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setform] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setform(dataToEdit);
    } else {
      setform(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = e => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      !form.cl_nombre ||
      !form.cl_apellido ||
      !form.cl_dni ||
      !form.cl_email ||
      !form.cl_telefono
    ) {
      alert('Datos incompletos');
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = e => {
    setform(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.cl_nombre}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChange}
          value={form.cl_apellido}
        />
        <input
          type="number"
          name="dni"
          placeholder="DNI"
          onChange={handleChange}
          value={form.cl_dni}
        />
        <input
          type="text"
          name="email"
          placeholder="E-MAIL"
          onChange={handleChange}
          value={form.cl_email}
        />
        <input
          type="number"
          name="telefono"
          placeholder="TELEFONO"
          onChange={handleChange}
          value={form.cl_telefono}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
