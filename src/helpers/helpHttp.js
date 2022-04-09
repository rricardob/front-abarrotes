export const helpHttp = () => {
  //metodo para petición fetch
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: 'application/json',
    };

    //objeto que sirve cuando la petición fetch no recibe respuesta se pueda abortar en cualquier momento la peticion
    const controller = new AbortController();

    //agrego AbortController a mis opciones de fetch
    options.signal = controller.signal;

    options.method = options.method || 'GET';

    //mesclando las cabeceras por defecto con las cabeceras que traiga el usuario
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    //convertimos el objeto a cadena pero si es GET seria false
    options.body = JSON.stringify(options.body) || false;

    //el body no pude ser falso es por eso que lo elimino
    if (!options.body) delete options.body;

    //console.log(options);

    //establecemos que si no recibo respuesta despues de 1 segundo se aborte la peticion
    setTimeout(() => {
      controller.abort();
    }, 3000);

    //ejecuto fetch
    return fetch(endpoint, options)
      .then(res =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || '00',
              statusText: res.statusText || 'Ocurrio un error',
            }),
      )
      .catch(err => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = 'POST';
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = 'PUT';
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = 'DELETE';
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
