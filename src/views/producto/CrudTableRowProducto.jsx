import React from 'react';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { co_id, co_fecha, cliente, vendedor, estado, co_total } = el;
  let stateClass = estado === 0 ? "badge badge-success" : "badge badge-danger";

  return (
    <tr>
      <td>{co_id}</td>
      <td>{co_fecha}</td>
      <td>{cliente}</td>
      <td>{vendedor}</td>      
      <td className='text-center'> 
        <label className={stateClass}>
          {estado === 0 ? "ACTIVO" : "INACTIVO"}
        </label> 
      </td>
      <td>{co_total}</td>
      <td className='text-center'>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => setDataToEdit(el)}>Editar</button>&nbsp;
        <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteData(el)}>Eliminar</button>&nbsp;
        <button type="button" className="btn btn-info btn-sm" onClick={() => deleteData(el)}>Anular</button>&nbsp;
        <button type="button" className="btn btn-success btn-sm" onClick={() => deleteData(el)}>Visualizar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
