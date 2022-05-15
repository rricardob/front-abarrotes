import React, { useState, useEffect } from 'react';

const initialForm = {
  ca_id: null,
  ca_nombre: '',
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

    if (!form.ca_nombre) {
      alert('Datos incompletos');
      return;
    }

    if (form.ca_id === null || form.ca_id === undefined) {
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
            <h3>{dataToEdit ? 'Editar Categoria' : 'Agregar Categoria'}</h3>
            <form className="form-sample" onSubmit={handleSubmit}>
              <p className="card-description"></p>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Nombre</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        name="ca_nombre"
                        placeholder="Nombre Categoria"
                        onChange={handleChange}
                        defaultValue={form.ca_nombre}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="submit"
                      value="Enviar"
                      className="btn btn-primary mr-2"
                    />
                    <input
                      type="reset"
                      value="Limpiar"
                      className="btn btn-dark"
                      onClick={handleReset}
                    />
                  </div>
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
