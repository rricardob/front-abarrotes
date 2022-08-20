

export const getColumnsProducts = () => {
    return ['Nombre', 'Precio', 'Stock', 'Categoria', 'Estado', 'Acciones']
}

export const getColumnsSale = () => {
    return ['#', 'Fecha', 'Cliente', 'Vendedor', 'Estado', 'Total', 'Acciones']
}

export const getColumnsDetailComprobante = () => {
    return ['#', 'Descripcion', 'Stock', 'Cantidad', 'Precio', 'Subtotal', 'Acciones']
}

export const getColumsCliente = () => {
    return ['#', 'Nombre', 'apellido', 'DNI', 'Direccion', 'Email', 'Telefono', 'Fecha Creacion', 'Estado']
}

export const getColumnsVendedor = () => {
    return ['#', 'Nombre', 'apellido', 'DNI', 'Direccion', 'Email', 'Telefono', 'Usuario', 'Fecha Creacion', 'Estado']
}