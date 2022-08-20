import React, { useState, useEffect } from 'react';
import moment from 'moment';

const TableRowGridComponenteVendedor = ({ view, row, rowSelected, cancel }) => {

  let nombre, apellido, dni, direccion, telefono, email, id, cestado
  let vnombre, vapellido, vdni, vdireccion, vtelefono, vemail, vusuario, vclave, vid, veliminado
  let pid, pnombre, pprecio, pstock, pcaid, pcanombre, pestado



  useEffect(() => {
    loadData()
  });

  const loadData = () => {
    switch (view) {
      case 'cliente':
        let { cl_nombre, cl_apellido, cl_dni, cl_direccion, cl_telefono, cl_email, cl_id, eliminado } = row
        nombre = cl_nombre
        apellido = cl_apellido
        dni = cl_dni
        direccion = cl_direccion
        telefono = cl_telefono
        email = cl_email
        id = cl_id
        cestado = eliminado
        break;
      case 'vendedor':
        let { ve_nombre, ve_apellido, ve_dni, ve_direccion, ve_telefono, ve_email, ve_usuario, ve_clave, ve_id, eliminado: estado } = row;
        vnombre = ve_nombre
        vapellido = ve_apellido
        vdni = ve_dni
        vdireccion = ve_direccion
        vtelefono = ve_telefono
        vemail = ve_email
        vusuario = ve_usuario
        vid = ve_id
        veliminado = estado
        break
      default:
        let { pr_id, pr_nombre, pr_precio, pr_stock, ca_id, ca_nombre, eliminado: estadop } = row;
        pid = pr_id
        pnombre = pr_nombre
        pprecio = pr_precio
        pstock = pr_stock
        pcaid = ca_id
        pcanombre = ca_nombre
        pestado = estadop
        break;
    }
  }

  let stateClass = cestado === 0 ? "badge badge-success" : "badge badge-danger";
  let stateClassv = veliminado === 0 ? "badge badge-success" : "badge badge-danger";
  let stateClassp = pestado === 0 ? "badge badge-success" : "badge badge-danger";

  return (
    <tr>
      <td>{vnombre}</td>
      <td>{vapellido}</td>
      <td>{vdni}</td>
      <td>{vdireccion}</td>
      <td>{vtelefono}</td>
      <td>{vemail}</td>
      <td>{vusuario}</td>
      <td>{vclave}</td>
      <td className='text-center'>
        <label className={stateClassv}>
          {veliminado === 0 ? "ACTIVO" : "INACTIVO"}
        </label>
      </td>

      <td className='text-center'>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => rowSelected(row)}>Aceptar</button>&nbsp;
        <button type="button" className="btn btn-danger btn-sm" onClick={() => cancel(row)}>Cancelar</button>&nbsp;
      </td>
    </tr>
  );
};

export default TableRowGridComponenteVendedor;
