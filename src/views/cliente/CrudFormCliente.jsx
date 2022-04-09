import React, { useState, useEffect } from 'react';

const initialForm = {
  cl_nombre: 'ai',
  cl_apellido: 'ai',
  cl_dni: 22,
  cl_email: 'ab',
  cl_telefono: '700',
  cl_direccion: 'plp'
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
      !form.cl_telefono ||
      !form.cl_direccion
    ) {
      alert('Datos incompletos');
      return;
    }

    if (form.id === null || form.id === undefined) {
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

    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3>{dataToEdit ? 'Editar Cliente' : 'Agregar Cliente'}</h3>
            <form className="form-sample" onSubmit={handleSubmit}>
              <p className="card-description"></p>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Nombre</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        onChange={handleChange}
                        value={form.cl_nombre}
                        className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Apellidos</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        onChange={handleChange}
                        value={form.cl_apellido}
                        className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">DNI</label>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        name="dni"
                        placeholder="DNI"
                        onChange={handleChange}
                        value={form.cl_dni}
                        className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        name="email"
                        placeholder="E-MAIL"
                        onChange={handleChange}
                        value={form.cl_email}
                        className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Telefono</label>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        name="telefono"
                        placeholder="TELEFONO"
                        onChange={handleChange}
                        value={form.cl_telefono}
                        className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Direccion</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        name="telefono"
                        placeholder="DIRECCION"
                        onChange={handleChange}
                        value={form.cl_direccion}
                        className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <input type="submit" value="Enviar" className="btn btn-primary mr-2" />
                  <input type="reset" value="Limpiar" className="btn btn-dark" onClick={handleReset} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrudForm;
