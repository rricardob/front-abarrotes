import React from 'react';
import moment from 'moment';



const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { co_id, co_fecha, cliente, vendedor, eliminado, co_total } = el;
  let stateClass = eliminado === 0 ? "badge badge-success" : eliminado === 1 ? "badge badge-danger" : "badge badge-warning";

  return (
    <tr>
      <td>{co_id}</td>
      <td>{moment(co_fecha).format('DD/MM/yyyy')}</td>
      <td>{cliente}</td>
      <td>{vendedor}</td>      
      <td className='text-center'> 
        <label className={stateClass}>
          {eliminado === 0 ? "INACTIVO" : eliminado === 1 ? "ACTIVO" : "ANULADO"}
        </label> 
      </td>
      <td>{co_total}</td>
      <td className='text-center'>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => setDataToEdit(el)}>Editar</button>&nbsp;
        <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteData(el)}>Eliminar</button>&nbsp;
        <button type="button" className="btn btn-warning btn-sm" onClick={() => deleteData(el)}>Anular</button>&nbsp;
        <button type="button" className="btn btn-success btn-sm" onClick={() => deleteData(el)}>Visualizar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
