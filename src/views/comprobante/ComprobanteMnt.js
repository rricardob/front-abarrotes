
import { DatePicker, Modal, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import './comprobante.css'
import "antd/dist/antd.css";
import { GridComponent } from './GridComponent';
import { getColumsCliente, getColumnsVendedor, getColumnsProducts } from '../../utils/constants';

const initialForm = {
  ce_id: null,
  cl_id: null,
  ve_id: null,
  fecha: '',
  cliente: null,
  vendedor: null
};

const { Search } = Input;

export function ComprobanteMnt({ createData, updateData, dataToEdit, setDataToEdit }) {

  const dateFormat = "YYYY-MM-DD";
  const [form, setform] = useState(initialForm);
  const [view, setView] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleReset = e => {
    setform(initialForm);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      !form.ce_id ||
      !form.cl_id ||
      !form.ve_id ||
      !form.fecha
    ) {
      swal("Oops!", "datos incompletos ", "info");
      return;
    }

    if (form.ce_id === null || form.ce_id === undefined) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const onChange = (value, dateString) => {
    setform({
      ...form,
      'fecha': value.format('DD/MM/yyyy')
    });
  }

  const onClick = (e) => {
    console.log(e)
    const input = e.target.name
    setIsModalVisible(false);
    if (input === 'cliente') {
      setView('cliente')
      setIsModalVisible(true);
    } else if (input === 'vendedor') {
      setView('vendedor')
      setIsModalVisible(true);
    }
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const rowSelectedCliente = (row) => {
    console.log('fila seleccionada desde componente padre ', row)
    setform({
      ...form,
      'cliente': `${row.cl_nombre} ${row.cl_apellido}`,
      'cl_id': row.cl_id
    });
    setIsModalVisible(false);
  }

  const rowSelectedVendedor = (row) => {
    console.log('fila seleccionada desde componente padre ', row)
    setform({
      ...form,
      'vendedor': `${row.ve_nombre} ${row.ve_apellido}`,
      've_id': row.ve_id
    });
    setIsModalVisible(false);
  }

  return (

    <>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3 className='title'>{dataToEdit ? 'Editar Comprobante' : 'Nuevo Comprobante'}</h3>
              <form className="form-sample" onSubmit={handleSubmit}>
                <p className="card-description"></p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="title col-sm-3 col-form-label">Cliente</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="cliente"
                          placeholder="cliente"
                          defaultValue={form.cliente}
                          className="form-control"
                          onClick={onClick}
                           />


                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="title col-sm-3 col-form-label">Fecha</label>
                      <div className="col-sm-9">
                        <DatePicker
                          onChange={onChange}
                          placeholder={"dd/mm/yyyy"}
                          format={dateFormat}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="title col-sm-3 col-form-label">Vendedor</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="vendedor"
                          placeholder="Vendedor"
                          defaultValue={form.vendedor}
                          className="form-control"
                          onClick={onClick}
                           />
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

      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3 className='title'>{'Productos Agregados'}</h3>

            </div>
          </div>
        </div>
      </div>

      <Modal
        title={view === 'cliente' ? 'Buscar Cliente' : view === 'vendedor' ? 'Buscar Vendedor' : 'Buscar Producto'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1350}>
        <GridComponent
          view={view}
          rowSelectedCliente={rowSelectedCliente}
          rowSelectedVendedor={rowSelectedVendedor}
        />
      </Modal>


    </>
  );
}