import React from 'react';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { cl_nombre, cl_apellido, cl_dni, cl_direccion, cl_email, cl_id } = el;

  return (
    <tr>
      <td>{cl_nombre}</td>
      <td>{cl_apellido}</td>
      <td>{cl_dni}</td>
      <td>{cl_direccion}</td>
      <td>{cl_email}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(cl_id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
