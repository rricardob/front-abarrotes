import React from 'react';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { cl_nombre, cl_apellido, cl_dni, cl_direccion, cl_email, cl_id, eliminado } = el;
  let stateClass = eliminado === 0 ? "badge badge-success" : "badge badge-danger";

  return (
    <tr>
      <td>{cl_nombre}</td>
      <td>{cl_apellido}</td>
      <td>{cl_dni}</td>
      <td>{cl_direccion}</td>
      <td>{cl_email}</td>
      <td className='text-center'> 
        <label className={stateClass}>
          {eliminado === 0 ? "ACTIVO" : "INACTIVO"}
        </label> 
      </td>
      <td className='text-center'>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => setDataToEdit(el)}>Editar</button>&nbsp;
        <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteData(cl_id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
