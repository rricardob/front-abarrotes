import React, { useState, useEffect } from 'react';

const initialForm = {
    ve_id: null,
    ve_nombre: '',
    ve_apellido: '',
    ve_dni: null,
    ve_direccion: '',
    ve_email: '',
    ve_telefono: '',
    ve_usuario: '',
    ve_clave: '',
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
        !form.ve_nombre ||
        !form.ve_apellido ||
        !form.ve_dni ||
        !form.ve_direccion ||
        !form.ve_email ||
        !form.ve_telefono ||
        !form.ve_usuario ||
        !form.ve_clave 

    ) {
        alert('Datos incompletos');
        return;
    }

    if (form.ve_id === null || form.ve_id === undefined) {
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
            <h3>{dataToEdit ? 'Editar Vendedor' : 'Agregar Vendedor'}</h3>
            <form className="form-sample" onSubmit={handleSubmit}>
                <p className="card-description"></p>
                <div className="row">
                <div className="col-md-6">
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Nombre</label>
                    <div className="col-sm-9">
                        <input
                        type="text"
                        name="ve_nombre"
                        placeholder="Nombre"
                        onChange={handleChange}
                        defaultValue={form.ve_nombre}
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
                        name="ve_apellido"
                        placeholder="Apellido"
                        onChange={handleChange}
                        defaultValue={form.ve_apellido}
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
                        name="ve_dni"
                        placeholder="DNI"
                        onChange={handleChange}
                        defaultValue={form.ve_dni}
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
                        name="ve_email"
                        placeholder="E-MAIL"
                        onChange={handleChange}
                        defaultValue={form.ve_email}
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
                        name="ve_telefono"
                        placeholder="TELEFONO"
                        onChange={handleChange}
                        defaultValue={form.ve_telefono}
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
                        name="ve_direccion"
                        placeholder="DIRECCION"
                        onChange={handleChange}
                        defaultValue={form.ve_direccion}
                        className="form-control" />
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Usuario</label>
                    <div className="col-sm-9">
                        <input
                        type="text"
                        name="ve_usuario"
                        placeholder="Usuario"
                        onChange={handleChange}
                        defaultValue={form.ve_usuario}
                        className="form-control" />
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Clave</label>
                    <div className="col-sm-9">
                        <input
                        type="text"
                        name="ve_clave"
                        placeholder="Clave"
                        onChange={handleChange}
                        defaultValue={form.ve_clave}
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