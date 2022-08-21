
import { DatePicker, Modal, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import './comprobante.css'
import "antd/dist/antd.css";
import { getColumnsDetailComprobante } from '../../utils/constants';
import TableRowGridComprobanteDetalle from './TableRowGridComprobanteDetalle';


const { Search } = Input;

export function ComprobanteDetalleMnt({ deleteData, dataToEdit, data, view }) {

    const dateFormat = "YYYY-MM-DD";

    return (

        <>
            <div className='row'>
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">

                            </h4>

                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        {getColumnsDetailComprobante().map((headerItem, index) => (
                                            <th key={index}>{headerItem.toUpperCase()}</th>
                                        ))
                                        }
                                    </thead>
                                    <tbody>
                                        {
                                           data !== null && data !== undefined && data.length > 0 ? (
                                                data.map(el => (
                                                    <TableRowGridComprobanteDetalle
                                                        key={el.dec_id}
                                                        row={el}                                                        
                                                        deleteData={deleteData}
                                                        dataToEdit={dataToEdit}
                                                    />
                                                ))

                                            ) : (
                                                <tr>
                                                    <td colSpan={7}>Sin datos</td>
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

        </>
    );
}