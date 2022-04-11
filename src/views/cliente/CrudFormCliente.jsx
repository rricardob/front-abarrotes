import React, { useState, useEffect } from 'react';

const initialForm = {
  cl_id: null,
  cl_nombre: '',
  cl_apellido: '',
  cl_dni: null,
  cl_email: '',
  cl_telefono: '',
  cl_direccion: ''
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
    debugger
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

    if (form.cl_id === null || form.cl_id === undefined) {
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
                        name="cl_nombre"
                        placeholder="Nombre"
                        onChange={handleChange}
                        defaultValue={form.cl_nombre}
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
                        name="cl_apellido"
                        placeholder="Apellido"
                        onChange={handleChange}
                        defaultValue={form.cl_apellido}
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
                        name="cl_dni"
                        placeholder="DNI"
                        onChange={handleChange}
                        defaultValue={form.cl_dni}
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
                        name="cl_email"
                        placeholder="E-MAIL"
                        onChange={handleChange}
                        defaultValue={form.cl_email}
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
                        name="cl_telefono"
                        placeholder="TELEFONO"
                        onChange={handleChange}
                        defaultValue={form.cl_telefono}
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
                        name="cl_direccion"
                        placeholder="DIRECCION"
                        onChange={handleChange}
                        defaultValue={form.cl_direccion}
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
