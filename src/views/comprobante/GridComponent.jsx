

import { DatePicker } from 'antd';
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import './comprobante.css'
import "antd/dist/antd.css";
import { getColumnsProducts, getColumnsVendedor, getColumsCliente } from '../../utils/constants';
import { helpHttp } from '../../helpers/helpHttp';
import { VENDEDOR, CLIENTE, PATH, PRODUCT } from '../config/index'
import TableRowGridComponente from './TableRowGridComprobanteDetalle';
import CrudTableRow from '../cliente/CrudTableRowCliente'
import CrudTableRowProducto from '../producto/CrudTableRowProducto'
import CrudTableRowVendedor from '../vendedor/CrudTableRowVendedor'


const initialForm = {
    input: null
};

export function GridComponent({ view, rowSelectedCliente, rowSelectedVendedor, rowSelectedProducto }) {

    const [form, setform] = useState(initialForm);
    const [vendedores, setvendedores] = useState([]);
    const [clientes, setclientes] = useState([]);
    const [productos, setproductos] = useState([]);
    const api = helpHttp();
    const rootpath = PATH;


    useEffect(() => {
        switch (view) {
            case 'cliente':
                getDataCliente()
                break;
            case 'vendedor':
                getDataVendedor()
                break;
            case 'producto':
                getDataProducto()
                break;
            default:
                break;
        }
    },[view]);


    const onMouseEnter = (e) => {
        console.log(e)
    }

    const getDataVendedor = async () => {
        await api.get(rootpath + VENDEDOR.GET)
            .then(res => {
                setvendedores(res)
            })
            .catch(err => {
                console.error(err)
                setvendedores(null)
            });
    }

    const getDataCliente = async () => {
        await api.get(rootpath + CLIENTE.GET)
            .then(res => {
                setclientes(res)
            })
            .catch(err => {
                console.error(err)
                setclientes([])
            });
    }

    const getDataProducto = async () => {
        await api.get(rootpath + PRODUCT.GET)
            .then(res => {
                setproductos(res)
            })
            .catch(err => {
                console.error(err)
                setproductos([])
            });
    }

    const cancel = () => {

    }

    return (

        <div className='row'>
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">

                        </h4>
                        <p className="card-description">
                            <input
                                type="text"
                                name="txtInput"
                                placeholder={'Ingrese un dato'}
                                defaultValue={form.input}
                                className="form-control"
                                onMouseEnter={onMouseEnter} />
                        </p>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>

                                    {view === 'cliente' ?
                                        <tr>
                                            <th className='text-center'> Nombres </th>
                                            <th className='text-center'> Apellidos </th>
                                            <th className='text-center'> DNI </th>
                                            <th className='text-center'> Direccion </th>
                                            <th className='text-center'> Telefono </th>
                                            <th className='text-center'> Email </th>
                                            <th className='text-center'> Estado </th>
                                            <th className='text-center'> Acciones </th>
                                        </tr>
                                        : view === 'vendedor' ?

                                            <tr>
                                                <th className='text-center'> Nombres </th>
                                                <th className='text-center'> Apellidos </th>
                                                <th className='text-center'> DNI </th>
                                                <th className='text-center'> Direccion </th>
                                                <th className='text-center'> Telefono </th>
                                                <th className='text-center'> Email </th>
                                                <th className='text-center'> Usuario </th>
                                                <th className='text-center'> Clave </th>
                                                <th className='text-center'> Estado </th>
                                                <th className='text-center'> Acciones </th>
                                            </tr>

                                            : getColumnsProducts().map((headerItem, index) => (
                                                <th key={index}>{headerItem.toUpperCase()}</th>
                                            ))
                                    }

                                </thead>
                                <tbody>

                                    {view === 'cliente' ?

                                        clientes.length > 0 ? (
                                            clientes.map(el => (
                                                <CrudTableRow
                                                    key={el.cl_id}
                                                    el={el}
                                                    view={view}
                                                    setDataToEdit={rowSelectedCliente}
                                                    deleteData={cancel}
                                                />
                                            ))

                                        ) : (
                                            <tr>
                                                <td colSpan={view === 'cliente' ? 7 : view === 'vendedor' ? 10 : 9}>Sin datos</td>
                                            </tr>
                                        )

                                        : view === 'vendedor' ?

                                            vendedores.length > 0 ? (
                                                vendedores.map(el => (
                                                    <CrudTableRowVendedor
                                                        key={el.ve_id}
                                                        el={el}
                                                        view={view}
                                                        setDataToEdit={rowSelectedVendedor}
                                                        deleteData={cancel}
                                                    />
                                                ))

                                            ) : (
                                                <tr>
                                                    <td colSpan={view === 'cliente' ? 7 : view === 'vendedor' ? 10 : 9}>Sin datos</td>
                                                </tr>
                                            )

                                            :

                                            productos.length > 0 ? (
                                                productos.map(el => (
                                                    <CrudTableRowProducto
                                                        key={el.pr_id}
                                                        el={el}
                                                        view={view}
                                                        setDataToEdit={rowSelectedProducto}
                                                        deleteData={cancel}
                                                    />
                                                ))

                                            ) : (
                                                <tr>
                                                    <td colSpan={view === 'cliente' ? 7 : view === 'vendedor' ? 10 : 9}>Sin datos</td>
                                                </tr>
                                            )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}