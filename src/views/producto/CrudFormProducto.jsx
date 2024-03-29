import React, { useState, useEffect } from 'react';
import { helpHttp } from '../../helpers/helpHttp.js'
import swal from 'sweetalert';
import { Select } from 'antd'
import { PATH, CATEGORY } from '../config/index'

const initialForm = {
    pr_id: null,
    pr_nombre: '',
    pr_precio: '',
    pr_stock: '',
    ca_id: null
};
//
const rootpath = PATH;

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit, category = [] }) => {
    const { Option } = Select 
    const [form, setform] = useState(initialForm);
    const [selectedValue, setSelectedValue] = useState(null);    
    const [categoriesLoad, setCategoriesLoad] = useState([]);

    useEffect(() => {
        if (dataToEdit) {
            setform(dataToEdit);
            //setSelectedValue(dataToEdit.ca_id)  
        } else {
            setform(initialForm);
            fetchData()
            //genCategories()
        }
    }, [dataToEdit]);  

    // handle selection
    const handleChangeCategory2 = value => {
        setSelectedValue(value);        
        setform({
            ...form,
            ca_id: value.ca_id,
        });
    }

    const setCategory = (item) => {
        setform({
            ...form,
            ca_id: item,
        });
    }

    const findCategoryById = (id) => {
        if(categoriesLoad !== null && categoriesLoad !== undefined && categoriesLoad.length > 0){
            const filter = categoriesLoad.filter(item => {
                return item.ca_id === id
            })

            categoriesLoad.forEach( item => {
                if(item.ca_id === id){

                }
            })

        }
    }

    const fetchData = async () => {
       await helpHttp()
            .get(rootpath + CATEGORY.GET)
            .then(res => {               
                setCategoriesLoad(res) 
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

    const genCategories = () => {
        const options = [];           
        categoriesLoad.map((category) =>            
            options.push(
                <option key={category.ca_id} value={category.ca_id}>
                {category.ca_nombre}
                </option>
          )
        );
        return options;
      }; 
 
      const handleChangeCategory = (value) => {        

        setform({
            ...form,
            ca_id: value.target.value,
        });
        //setSelectedValue(value.target.value)                    
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
                                                type="text"
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
                                                type="text"
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
                                            <select
                                            className="form-control"  
                                            name='ca_id'                                          
                                            onChange={handleChange} 
                                            defaultValue={form.ca_id}   
                                            value={form.ca_id}                                
                                            >                      
                                            <option>Seleccione un valor</option>                          
                                                {genCategories()}
                                            </select>
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
