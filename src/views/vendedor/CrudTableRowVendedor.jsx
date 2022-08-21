import React from 'react';


const CrudTableRow = ({ el, setDataToEdit, deleteData, view = '' }) => {
    let { ve_nombre, ve_apellido, ve_dni, ve_direccion, ve_telefono, ve_email, ve_usuario, ve_clave , ve_id, eliminado } = el;
    let stateClass = eliminado === 0 ? "badge badge-success" : "badge badge-danger";

    return (
    <tr>
        <td>{ve_nombre}</td>
        <td>{ve_apellido}</td>
        <td>{ve_dni}</td>
        <td>{ve_direccion}</td>
        <td>{ve_telefono}</td>
        <td>{ve_email}</td>
        <td>{ve_usuario}</td>
        <td>{ve_clave}</td>
        <td className='text-center'> 
        <label className={stateClass}>
            {eliminado === 0 ? "ACTIVO" : "INACTIVO"}
        </label> 
        </td>
        <td className='text-center'>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => setDataToEdit(el)}>{view !== '' ? 'Seleccionar' : 'Editar'}</button>&nbsp;
        { view !== '' ? '' :<button type="button" className="btn btn-danger btn-sm" onClick={() => deleteData(el)}>Eliminar</button>}
        </td>
    </tr>
    );
};


export default CrudTableRow;