import React, { useState, useEffect } from 'react';
import { DatePicker, Space } from 'antd';
import { helpHttp } from '../../helpers/helpHttp';
import "antd/dist/antd.css";
import { VENDEDOR, CLIENTE, PATH } from '../config/index'

const initialFilter = {
    ve_id: null,
    cl_id: null,
    f_ini: '',
    f_fin: '',
    estado: ''
};

const FilterComprobante = ({ filterData }) => {

    const api = helpHttp();
    const rootpath = PATH;
    const { RangePicker } = DatePicker;
    const [vendedores, setvendedores] = useState([]);
    const [clientes, setclientes] = useState([]);
    const [form, setform] = useState(initialFilter);


    useEffect(() => {

      /*api.get(rootpath + SALE_RECEIPT.GET)
      .then(res => {
        if (!res.err) {
            console.log("sale receipt -> ",res)*/
            getDataVendedor();
            getDataCliente();
          /*setDb(res);
          setError(null);*/
        /*}
        })*/
      }, []);


    const handleSubmit = e => {
        e.preventDefault();

        filterData(form)

    }

    const handleReset = e => {

    };

    const handleChange = e => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString)

        setform({
            ...form,
            'f_ini': dateString[0],
            'f_fin': dateString[1]
        });

    }

    const genVendedor = () => {
        const options = [];           
        vendedores.map((vendor) =>            
            options.push(
                <option key={vendor.ve_id} value={vendor.ve_id}>
                {vendor.ve_nombre} {vendor.ve_apellido} 
                </option>
          )
        );
        return options;
    };
    
    const genCliente = () => {
        const options = [];           
        clientes.map((client) =>            
            options.push(
                <option key={client.cl_id} value={client.cl_id}>
                {client.cl_nombre} {client.cl_apellido}
                </option>
          )
        );
        return options;
      }; 

    const getDataVendedor = async () => {
        await api.get(rootpath + VENDEDOR.GET)
        .then(res => {
            setvendedores(res)
        });
    }

    const getDataCliente = async () => {
        await api.get(rootpath + CLIENTE.GET)
        .then(res => {
            setclientes(res)
        });
    }

    return (

        <div className="row">
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h3>{'Filtrar Comprobantes'}</h3>
                        <form className="form-sample" onSubmit={handleSubmit}>
                            <p className="card-description"></p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Cliente</label>
                                        <div className="col-sm-9">
                                        <select
                                            className="form-control"  
                                            name='cl_id'                                          
                                            onChange={handleChange} 
                                            defaultValue={form.cl_id}   
                                            value={form.cl_id}                             
                                            >                      
                                            <option>Seleccione un Cliente</option>                          
                                                {genCliente()}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Vendedor</label>
                                        <div className="col-sm-9">
                                        <select
                                            className="form-control"
                                            name='ve_id'                                          
                                            onChange={handleChange} 
                                            defaultValue={form.ve_id}   
                                            value={form.ve_id}                            
                                            >                      
                                            <option>Seleccione un Vendedor</option>                          
                                                {genVendedor()}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Fecha</label>
                                        <div className="col-sm-9">
                                            <RangePicker
                                            onChange={onChange}
                                             />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Estado</label>
                                        <div className="col-sm-9">
                                            <select
                                                className="form-control"
                                                name='estado'                                          
                                                onChange={handleChange} 
                                                defaultValue={form.estado}   
                                                value={form.estado}  
                                            >
                                                <option>Seleccione un valor</option>
                                                <option value={1}>Activo</option>
                                                <option value={2}>Anulado</option>
                                                <option value={0}>Inactivo</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <input type="submit" value="Buscar" className="btn btn-primary mr-2" />
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

export default FilterComprobante;