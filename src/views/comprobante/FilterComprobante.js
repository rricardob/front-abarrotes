import React, { useState, useEffect } from 'react';
import { DatePicker, Select } from 'antd';
import { helpHttp } from '../../helpers/helpHttp';
import "antd/dist/antd.css";
import { VENDEDOR, CLIENTE, PATH } from '../config/index'
import moment from "moment";

const now = moment();
const initialFilter = {
    ve_id: null,
    cl_id: null,
    f_ini: '',
    f_fin: '',
    estado: ''
};

const { Option } = Select;

const FilterComprobante = ({ filterData }) => {

    const api = helpHttp();
    const rootpath = PATH;
    const { RangePicker } = DatePicker;
    const [vendedores, setvendedores] = useState([]);
    const [clientes, setclientes] = useState([]);
    const [form, setform] = useState(initialFilter);
    const dateFormat = "YYYY-MM-DD";

    useEffect(() => {
        getDataVendedor();
        getDataCliente();
    }, []);


    const handleSubmit = e => {
        e.preventDefault();
        filterData(form)
    }

    const handleReset = e => {
        setform(initialFilter);
    };

    const handleChange = e => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onChangeClient = (value) => {

        setform({
            ...form,
            'cl_id': value,
        });

    };

    const onChangeVendor = (value) => {

        setform({
            ...form,
            've_id': value,
        });

    };

    const onChange = (value, dateString) => {
        setform({
            ...form,
            'f_ini': dateString[0],
            'f_fin': dateString[1]
        });
    }

    const onChangeEstado = (value) => {
        setform({
            ...form,
            'estado': value
        });
    }

    const genVendedor = () => {
        const options = [];
        vendedores.map((vendor) =>
            options.push(
                <Option key={vendor.ve_id} value={vendor.ve_id}>
                    {vendor.ve_nombre} {vendor.ve_apellido}
                </Option>
            )
        );
        return options;
    };

    const genCliente = () => {
        const options = [];
        clientes.map((client) =>
            options.push(
                <Option key={client.cl_id} value={client.cl_id}>
                    {client.cl_nombre} {client.cl_apellido}
                </Option>
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
                                            {/*<select
                                                className="form-control"
                                                name='cl_id'
                                                onChange={handleChange}
                                                defaultValue={form.cl_id}
                                                value={form.cl_id}
                                            >
                                                <option>Seleccione un Cliente</option>
                                                {genCliente()}
                                            </select>*/}
                                            <Select
                                                allowClear
                                                showSearch
                                                placeholder="Seleccione un Cliente"
                                                optionFilterProp="children"
                                                name='cl_id'
                                                onChange={onChangeClient}
                                                filterOption={(input, option) => option.children.toString().toLowerCase().includes(input.toString().toLowerCase())}
                                                style={{ width: '100%', }}
                                            >
                                                {genCliente()}
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Vendedor</label>
                                        <div className="col-sm-9">
                                            {/*<select
                                                className="form-control"
                                                name='ve_id'
                                                onChange={handleChange}
                                                defaultValue={form.ve_id}
                                                value={form.ve_id}
                                            >
                                                <option>Seleccione un Vendedor</option>
                                                {genVendedor()}
                                            </select>*/}
                                            <Select
                                                allowClear
                                                showSearch
                                                placeholder="Seleccione un Vendedor"
                                                optionFilterProp="children"
                                                name='ve_id'
                                                onChange={onChangeVendor}
                                                filterOption={(input, option) => option.children.toString().toLowerCase().includes(input.toString().toLowerCase())}
                                                style={{ width: '100%', }}
                                            >
                                                {genVendedor()}
                                            </Select>
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
                                                placeholder={["Fecha de inicio", "Fecha de fin"]}
                                                format={dateFormat}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Estado</label>
                                        <div className="col-sm-9">
                                            <Select
                                                allowClear
                                                showSearch
                                                placeholder="Selecione un Estado"
                                                optionFilterProp='childre'
                                                name='estado'
                                                onChange={onChangeEstado}
                                                filterOption={(input, option) => option.children.toString().toLowerCase().includes(input.toString().toLowerCase())}
                                                style={{ width: '100%', }}
                                            >
                                                <Option key={0} value={0}>Activo</Option>
                                                <Option key={2} value={2}>Anulado</Option>
                                                <Option key={1} value={1}>Inactivo</Option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <input type="submit" value="Buscar" className="btn btn-primary mr-2" onClick={filterData} />
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