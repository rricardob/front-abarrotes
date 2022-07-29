import React, { useState, useEffect }  from 'react';
import FilterComprobante from './FilterComprobante';
import { helpHttp } from '../../helpers/helpHttp';
import { SALE_RECEIPT, PATH } from '../config/index'
import { getColumnsSale } from '../../utils/constants'
import CrudTableGenericSale from '../../components/shared/CrudTableGenericSale'

export function Comprobante() {

  const api = helpHttp();
  const rootpath = PATH;

  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);

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
    console.log("filter -> ",params)

    let url = rootpath + SALE_RECEIPT.GET + 
    "?cliente="+params.cl_id+"&vendedor="+params.ve_id+"&estado="+params.estado+"&fecinicio="+params.f_ini+"&fecfin="+params.f_fin;

    /*if (params.cl_id !== null && params.cl_id !== undefined) {
      url += "?cliente="+params.cl_id
    }else{
      url +="?cliente=''"
    }

    if (params.ve_id !== null && params.ve_id !== undefined) {
      url += "&vendedor="+params.ve_id
    }else{
      url +="&vendedor=''"
    }

    if (params.estado !== null && params.estado !== undefined) {
      url += "&estado="+params.estado
    }else{
      url +="&estado=''"
    }

    if (params.f_ini !== null && params.f_ini !== undefined) {
      url += "&fecinicio="+params.f_ini
    }else{
      url +="&fecinicio=''"
    }

    if (params.f_fin !== null && params.f_fin !== undefined) {
      url += "&fecfin="+params.f_fin
    }else{
      url +="&fecfin=''"
    }*/


    api.get( url )
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

      <button type="button" className="btn btn-primary btn-sm">Nuevo Comprobante</button><br></br>
        {db && (
          <CrudTableGenericSale
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            colNames={getColumnsSale}
          />
        )}

      </div>
    </>
  );
}
