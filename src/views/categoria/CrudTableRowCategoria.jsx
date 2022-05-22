import React from 'react';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  // let { ca_nombre, ca_id, eliminado } = el;
  let { ca_nombre, eliminado } = el;
  let stateClass =
    eliminado === 0 ? 'badge badge-success' : 'badge badge-danger';

  return (
    <tr>
      <td>{ca_nombre}</td>
      <td className="text-center">
        <label className={stateClass}>
          {eliminado === 0 ? 'ACTIVO' : 'INACTIVO'}
        </label>
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => setDataToEdit(el)}>
          Editar
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => deleteData(el)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
