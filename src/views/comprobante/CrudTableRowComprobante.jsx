import React from 'react';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { pr_id, pr_nombre, pr_precio, pr_stock, ca_id, ca_nombre, eliminado } = el;
  let stateClass = eliminado === 0 ? "badge badge-success" : "badge badge-danger";

  return (
    <tr>
      <td>#</td>
      <td>{pr_nombre}</td>
      <td>{pr_precio}</td>
      <td>{pr_stock}</td>
      <td>{ca_nombre}</td>      
      <td className='text-center'> 
        <label className={stateClass}>
          {eliminado === 0 ? "ACTIVO" : "INACTIVO"}
        </label> 
      </td>
      <td className='text-center'>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => setDataToEdit(el)}>Editar</button>&nbsp;
        <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteData(el)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
