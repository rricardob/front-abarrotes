import React from 'react';
import CrudTableRow from '../../views/producto/CrudTableRowProducto';

const CrudTableGeneric = ({ data, setDataToEdit, deleteData, colNames }) => {

  console.log("colNames",colNames())

  return (

    <div className='row'>
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">

            </h4>
            <p className="card-description">
            </p>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    {colNames().map((headerItem, index) => (
                      <th key={index}>{headerItem.toUpperCase()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map(el => (
                      <CrudTableRow
                        key={el.id}
                        el={el}
                        setDataToEdit={setDataToEdit}
                        deleteData={deleteData}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8">Sin datos</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default CrudTableGeneric;
