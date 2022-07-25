export const PATH = process.env.REACT_APP_PATH

//endpoints

export const PRODUCT = {
    GET:    'producto/findAll',
    CREATE: 'producto/create',
    UPDATE: 'producto/update',
    DELETE: 'producto/delete'
}

export const CATEGORY = {
    GET:    'categoria/findAll',
    CREATE: 'categoria/create',
    UPDATE: 'categoria/update',
    DELETE: 'categoria/delete'
}

export const CLIENTE = {
    GET:    'cliente/findAll',
    CREATE: 'cliente/create',
    UPDATE: 'cliente/update',
    DELETE: 'cliente/delete'
}

export const VENDEDOR = {
    GET:    'vendedor/findAll',
    CREATE: 'vendedor/create',
    UPDATE: 'vendedor/update',
    DELETE: 'vendedor/delete'
}

export const SALE_RECEIPT = {
    GET:    'comprobante/findAll',
    CREATE: 'comprobante/create',
    UPDATE: 'comprobante/update',
    DELETE: 'comprobante/delete'
}