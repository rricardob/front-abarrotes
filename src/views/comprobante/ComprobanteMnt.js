
import { DatePicker, Modal, Input } from 'antd';
import React, { useState } from 'react';
import swal from 'sweetalert';
import './comprobante.css'
import "antd/dist/antd.css";
import { GridComponent } from './GridComponent';
import { ComprobanteDetalleMnt } from './ComprobanteDetalleMnt';
import { SALE_RECEIPT, SALE_RECEIPT_DETAIL, PATH } from '../config';
import { helpHttp } from '../../helpers/helpHttp';
import moment from "moment";

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
  const [lstProducts, setLstProducts] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [cantidad, setCantidad] = useState(0)
  const api = helpHttp();
  const rootpath = PATH;
  const now = moment();

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
      'fecha': value.format('yyyy/MM/DD')
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
    } else {
      setView('producto')
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

    setform({
      ...form,
      'cliente': `${row.cl_nombre} ${row.cl_apellido}`,
      'cl_id': row.cl_id
    });
    setIsModalVisible(false);
  }

  const rowSelectedVendedor = (row) => {
    setform({
      ...form,
      'vendedor': `${row.ve_nombre} ${row.ve_apellido}`,
      've_id': row.ve_id
    });
    setIsModalVisible(false);
  }

  const rowSelectedProducto = (row) => {
    console.log('fila seleccionada desde componente padre ', row)

    let filteredArray = lstProducts.filter(item => item.pr_id === row.pr_id)

    if (filteredArray !== null && filteredArray !== undefined && filteredArray.length > 0) {
      swal("Oops!", "El producto seleccionado ya fue agregado", "info");
      return
    }

    lstProducts.push(row)
    setIsModalVisible(false);
  }

  const removeRow2 = (row) => {
    let size = 0
    let newLstProducts = []
    if (lstProducts !== null && lstProducts !== undefined && lstProducts.length > 0) {
      size = lstProducts.length
      for (let index = 0; index < lstProducts.length; index++) {
        const element = lstProducts[index];

        if (element.pr_id === row.pr_id) {
          lstProducts.splice(index, 1);
        }

      }
      newLstProducts = lstProducts
    }

    if (lstProducts.length !== size) {
      setLstProducts({ ...newLstProducts })
    }

  }

  const removeRow3 = (row) => {
    if (lstProducts !== null && lstProducts !== undefined && lstProducts.length > 0) {
      let oldLstProducts = [...lstProducts]
      for (let index = 0; index < lstProducts.length; index++) {
        const element = lstProducts[index];

        if (element.pr_id === row.pr_id) {
          oldLstProducts.splice(index, 1);
          setLstProducts({ oldLstProducts })
        }

      }
    }
  }

  const removeRow4 = (row) => {
    if (lstProducts !== null && lstProducts !== undefined && lstProducts.length > 0) {
      let filteredArray = lstProducts.filter(item => item.pr_id !== row.pr_id)
      console.log("sin filtro", lstProducts)
      console.log("filtro", filteredArray)
      //setLstProducts({ ...filteredArray })

      /*setLstProducts(prevState => {
        return {...prevState, ...filteredArray};
      });*/

    }
  }

  /*const onKeyPress = (event) => {
    console.log(event)
    if(event.charCode === 13){
      setCantidad(event.target.value)
      //setSubtotal(cantidad)
    }
  }*/

  const removeRow = (row) => {
    console.log("row", row)
  }

  const calculateTotal = () => {
    let total = 0
    if (lstProducts !== null && lstProducts !== undefined && lstProducts.length > 0) {
      lstProducts.forEach(item => {
        total += item.subtotal
      })
    }
    return total
  }

  const save = (event) => {
    event.preventDefault()

    if (lstProducts !== null && lstProducts !== undefined && lstProducts.length > 0) {
      grabarComprobante()
    } else {
      swal("Oops!", "No se han seleccionado productos aún!!", "info")
    }

  }

  const grabarComprobante = async () => {

    const data = {
      co_fecha: form.fecha,
      co_f_create: now,
      co_f_update: now,
      co_u_create: "admin",
      co_u_update: "admin",
      eliminado: 0,
      cl_id: form.cl_id,
      ve_id: form.ve_id,
      co_total: 0
    }

    let options = {
      body: data,
      //esta parte del header es por obligacion de json server
      headers: { 'content-type': 'application/json' },
    };

    await api.post(rootpath + SALE_RECEIPT.CREATE, options)
      .then(res => {
        if (res !== null && res !== undefined && res.status !== 500) {
          grabarDetalleComprobante(res.id)
        } else {
          swal("Oops!", "Ocurrio un error al intentar grabar la cabecera del comprobante ", "error");
        }
      })
      .catch(err => {
        console.error(err)
        swal("Oops!", "Ocurrio un error al intentar grabar la cabecera del comprobante " + err, "error");
      });
  }


  const grabarDetalleComprobante = async (idComprobante) => {

    let arr = []

    lstProducts.forEach(item => {
      let obj = {
        co_id: idComprobante,
        dec_cantidad: 0, //obtener de input
        dec_f_create: form.fecha,
        dec_f_update: form.fecha,
        dec_u_create: 'admin',
        dec_u_update: 'admin',
        pr_id: item.pr_id
      }
      arr.push(obj)
    })


    let options = {
      body: arr,
      //esta parte del header es por obligacion de json server
      headers: { 'content-type': 'application/json' },
    };


    await api.post(rootpath + SALE_RECEIPT_DETAIL.CREATE, options)
      .then(res => {
        if (res !== null && res !== undefined && res.status !== 500) {
          swal("Genial!", "Comprobante creado correctamente", "success");
        } else {
          swal("Oops!", "Ocurrio un error al intentar grabar el detalle del comprobante ", "error");
        }
      })
      .catch(err => {
        console.error(err)
        swal("Oops!", "Ocurrio un error al intentar grabar el detalle del comprobante " + err, "error");
      });

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
              <h3 className='title'>
                {'Productos Agregados'}&nbsp;
                <button type="button" className="btn btn-primary btn-sm" name='producto' onClick={onClick}>Agregar Producto</button><br></br>
              </h3>
              <ComprobanteDetalleMnt
                data={lstProducts}
                deleteData={removeRow}
              />

              <div className='row'>
                <div className='col-md-6'>
                  <input type="submit" value="Guardar" onClick={save} className="btn btn-primary mr-2" />
                </div>
              </div>

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
          rowSelectedProducto={rowSelectedProducto}
        />
      </Modal>


    </>
  );
}