import React from 'react';

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
