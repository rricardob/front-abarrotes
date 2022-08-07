import './ViewerPDF.css'
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { SALE_RECEIPT, PATH } from '../views/config/index'
import { helpHttp } from '../helpers/helpHttp';


const url = PATH + SALE_RECEIPT.FINDBYID
const api = helpHttp();

export const ViewerPDF = ({ data }) => {

    const [obj, setObj] = useState(null);

    useEffect(async () => {
        await api.get(url + '/' + data.co_id)
            .then(res => {
                console.log(res)
                setObj(res)
            })
            .catch(err => {
                console.error(err)
            })
        //setObj(data)
        //console.log("useEffect -> ", obj)
    }, [url + '/' + data.co_id]);

    const validateData = () => {
        if (obj !== null && obj !== undefined && obj.length > 0) {
            return true
        }
        return false
    }

    const getTotal = () => {
        let total = 0
        if (validateData()) {
            obj.forEach(element => {
                total += parseInt(element.subtotal)
            });
        }
        return total
    }

    const getState = () => {
        let state = '';
        if (validateData()) {
            switch (obj[0].eliminado) {
                case 0:
                    state = 'Inactivo'
                    break;
                case 1:
                    state = 'Activo'
                    break;
                case 2:
                    state = 'Anulado'
                    break;
                default:
                    state = ''
            }
        }
        return state
    }

    return (
        <div className="container">
            <div className="head">
                <div className="content_header">
                    <h2>
                        Comprobante de Venta
                    </h2>
                    <div className="numeration">
                        <h2>
                            RUC 000000000
                        </h2>
                        <p>
                            Factura
                            <span> F000000000{validateData() ? obj[0].co_id : ''}</span>
                        </p>
                    </div>
                </div>
                <div className="client_info">
                    <p>Fecha: {validateData() ? obj[0].fecha : ''}</p>
                    <p>Cliente: {validateData() ? obj[0].cliente : ''}</p>
                    <p>Ruc: NN</p>
                    <p>DNI: {validateData() ? obj[0].cl_dni : ''}</p>
                    <p>Direccion: {validateData() ? obj[0].cl_direccion : ''}</p>
                    <p>Vendedor: {validateData() ? obj[0].vendedor : ''}</p>
                </div>
            </div>
            <div className="content">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>SubTotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            validateData() ?
                                obj.map((el, i) => (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{el.pr_nombre}</td>
                                        <td>{el.pr_precio}</td>
                                        <td>{el.dec_cantidad}</td>
                                        <td>{el.subtotal}</td>
                                    </tr>
                                ))

                                : ''
                        }
                        <tr className="active-row">
                            <td colSpan={3}></td>
                            <td>Total</td>
                            <td>{getTotal().toLocaleString('en-US', { maximumFractionDigits: 20 })}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="footer">
                <h6>Chimbote {moment().format('YYYY-MMMM-DD')} {getState()}</h6>
            </div>
        </div>
    );

}