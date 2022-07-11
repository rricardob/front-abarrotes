import { type } from '@testing-library/user-event/dist/type';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import React, { useState, useEffect } from 'react';
//import AsyncSelect from 'react-select/async';
import { helpHttp } from '../../helpers/helpHttp.js'
import swal from 'sweetalert';
import styles from './productostyles.module.css'
import { Select } from 'antd'

const initialForm = {
    pr_id: null,
    pr_nombre: '',
    pr_precio: 0,
    pr_stock: 0,
    ca_id: null
};

const rootpath = 'http://localhost:3000/';

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit, category = [] }) => {
    const [form, setform] = useState(initialForm);
    const [selectedValue, setSelectedValue] = useState(null);
    let isCategoriesLoad = false;
    const [categoriesLoad, setCategoriesLoad] = useState(null);

    useEffect(() => {
        if (dataToEdit) {
            setform(dataToEdit);
        } else {
            setform(initialForm);
        }
    }, [dataToEdit]);

    //useEffect necesario para efecto secundario cuando renderiza la web cargando los datos del servicio
    useEffect(() => {
        if (category) {
            //listCategories()
            isCategoriesLoad = true;
        } else {
            isCategoriesLoad = false;
        }
    }, [category])


    const listCategories = () => {
        category.map((option) => (
            <option value={option.ca_id}>{option.ca_nombre}</option>
        ))
    }

    // handle selection
    const handleChangeC = value => {
        setSelectedValue(value);        
        setform({
            ...form,
            ca_id: value.ca_id,
        });
    }

    const fetchData = () => {
        return helpHttp()
            .get(rootpath + 'categoria/findAll')
            .then(res => {
                return res;
            });
    }

    const handleChange = e => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (
            !form.pr_nombre ||
            !form.pr_precio ||
            !form.pr_stock ||
            !form.ca_id
        ) {
            swal("Oops!", "datos incompletos ", "info");
            return;
        }

        if (form.pr_id === null || form.pr_id === undefined) {
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
                        <h3>{dataToEdit ? 'Editar Producto' : 'Agregar Producto'}</h3>
                        <form className="form-sample" onSubmit={handleSubmit}>
                            <p className="card-description"></p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Nombre</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                name="pr_nombre"
                                                placeholder="Nombre"
                                                onChange={handleChange}
                                                defaultValue={form.pr_nombre}
                                                className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Precio</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="number"
                                                name="pr_precio"
                                                placeholder="Precio"
                                                onChange={handleChange}
                                                defaultValue={form.pr_precio}
                                                className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Stock</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="number"
                                                name="pr_stock"
                                                placeholder="Stock"
                                                onChange={handleChange}
                                                defaultValue={form.pr_stock}
                                                className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Categoría</label>
                                        <div className="col-sm-9">
                                            <Select
                                                name="category"
                                                showArrow={true}
                                                allowClear={true}
                                                style={{ width: "100%"}}
                                                disabled= {false}
                                                showSearch

                                                /*className={styles.select}
                                                cacheOptions
                                                defaultOptions
                                                value={selectedValue}
                                                getOptionLabel={e => e.ca_nombre}
                                                getOptionValue={e => e.ca_id}
                                                loadOptions={fetchData}
                                                onChange={handleChangeC}*/
                                            >
                                                
                                            </Select>
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
