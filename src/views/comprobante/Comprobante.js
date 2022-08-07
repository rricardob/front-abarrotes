import React, { useState, useEffect, useReducer } from 'react';
import FilterComprobante from './FilterComprobante';
import { helpHttp } from '../../helpers/helpHttp';
import { SALE_RECEIPT, PATH, CANCEL } from '../config/index'
import { getColumnsSale } from '../../utils/constants'
import CrudTableGenericSale from '../../components/shared/CrudTableGenericSale'
import { Button, Modal } from 'antd';
import "antd/dist/antd.css";
import { ViewerPDF } from '../../pdf/VIewerPDF';
import swal from 'sweetalert';


export function Comprobante() {

  const api = helpHttp();
  const rootpath = PATH;

  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataPDF, setDataPDF] = useState(null);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

  useEffect(() => {
    setLoading(true);
    getAll()
  }, [rootpath + SALE_RECEIPT.GET]);

  const getAll = () => {
    api.get(rootpath + SALE_RECEIPT.GET)
      .then(res => {

        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }

        setLoading(false);
      });
  }

  const filter = (params) => {
    console.log("filter -> ", params)

    let url = rootpath + SALE_RECEIPT.GET +
      "?cliente=" + params.cl_id + "&vendedor=" + params.ve_id + "&estado=" + params.estado + "&fecinicio=" + params.f_ini + "&fecfin=" + params.f_fin;

    api.get(url)
      .then(res => {
        setDb(res)
      })
      .catch(err => {
        console.error(err)
        setError(err)
        setDb(null)
      })


  }

  const deleteData = params => {

  }

  const cancelData = params => {


    if (params.eliminado === 2) {
      swal("Oops!", "El comprobante N° " + params.co_id + " ya se encuentra anulado");
      return
    }

    if (params.eliminado === 1) {
      swal("Oops!", "El comprobante N° " + params.co_id + " se encuentra inactivo no puede ser anulado");
      return
    }

    const id = params.co_id;

    let url = rootpath + SALE_RECEIPT.CANCEL + '/' + id


    swal({
      title: "¿Estas Seguro de Anular el Comprobante N°" + id + "?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {

          api.get(url)
            .then(res => {
              console.log(res)

              if (res.rows_affected !== 0) {
                swal("se Anulo el comprobante satisfactoriamente!", {
                  icon: "success",
                });

                getAll()

                /*let newData = db.map(el => (el.co_id === id ? params : el));
                //si no hay error actualiza la base de datos
                setDb(newData);*/

              }

            })
            .catch(err => {
              console.error(err)
              setError(err)
              swal("Oops!", "Ocurrio un error al intentar anular el comprobante " + err, "error");
            })

        }
      });

  }

  const viewPdf = async data => {

    setDataPDF(data)
    setIsModalVisible(true);
    /*let url = rootpath + SALE_RECEIPT.FINDBYID+'/'+data.co_id 

    await api.get(url)
      .then(res => {
        console.log(res)
        setDataPDF(res)
        setIsModalVisible(true);
      })
      .catch(err => {
        console.error(err)
        setError(err)
        
      })*/

  }




  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <>
      <div className="content-wrapper">

        <div className="page-header">
          <h3 className="page-title"> Mantenimiento de Comprobantes </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Comprobante</a></li>
              <li className="breadcrumb-item active" aria-current="page">Mantenimiento de Comprobantes</li>
            </ol>
          </nav>
        </div>

        <FilterComprobante
          filterData={filter}
        />

        <Modal
          title=""
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}>
          <ViewerPDF
            data={dataPDF} />
        </Modal>

        <button type="button" className="btn btn-primary btn-sm">Nuevo Comprobante</button><br></br>
        {db && (
          <CrudTableGenericSale
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            colNames={getColumnsSale}
            cancelData={cancelData}
            viewPdf={viewPdf}
          />
        )}

      </div>
    </>
  );
}
