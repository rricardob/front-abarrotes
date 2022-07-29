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
