import React, { useState, useEffect } from 'react';
import FilterComprobante from './FilterComprobante';
import { helpHttp } from '../../helpers/helpHttp';
import { SALE_RECEIPT, PATH } from '../config/index'
import { getColumnsSale } from '../../utils/constants'
import CrudTableGenericSale from '../../components/shared/CrudTableGenericSale'
import { Button, Modal } from 'antd';
import "antd/dist/antd.css";
import { ViewerPDF } from '../../pdf/VIewerPDF';


export function Comprobante() {

  const api = helpHttp();
  const rootpath = PATH;

  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataPDF, setDataPDF] = useState(null);

  useEffect(() => {
    setLoading(true);

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
  }, [rootpath + SALE_RECEIPT.GET]);

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
