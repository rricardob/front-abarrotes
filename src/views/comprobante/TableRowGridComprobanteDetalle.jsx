import React, { useState, useEffect } from 'react';
import moment from 'moment';

const TableRowGridComprobanteDetalle = ({ row, deleteData, dataToEdit }) => {

  let { pr_id, pr_nombre, pr_precio, pr_stock, pr_f_create, pr_f_update, pr_u_create, pr_u_update, eliminado, ca_id, ca_nombre } = row
  const [cantidad, setCantidad] = useState(0)

  const onKeyPress = (event) => {

    if (event.charCode === 13) {
      setCantidad(event.target.value)
    }
  }

  return (
    <tr>
      <td>{pr_id}</td>
      <td>{pr_nombre}</td>
      <td>{pr_stock}</td>
      <td><input onKeyPress={onKeyPress}></input></td>
      <td>{pr_precio}</td>
      <td>{cantidad*pr_precio}</td>

      <td className='text-center'>
        {/*<button type="button" className="btn btn-primary btn-sm" onClick={() => dataToEdit(row)}>Editar</button>&nbsp;*/}
        <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteData(row)}>Eliminar</button>&nbsp;
      </td>
    </tr>
  );
};

export default TableRowGridComprobanteDetalle;
