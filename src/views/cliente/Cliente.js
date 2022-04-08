import React, { useEffect, useState } from 'react';
import { helpHttp } from './../../helpers/helpHttp';
import CrudForm from './CrudFormCliente';
import CrudTable from './CrudTableCliente';
import Loader from './../../components/Loader';
import Message from './../../components/Message';

export const Cliente = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = 'http://localhost:3000/cliente/findAll';

  //useEffect creada para que la pagina inicie con los datos de nuestro api, PARA QUE LOS DATOS APAREZCAN EN LA TABLA AL PRINCIPIO
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then(res => {
        //console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }

        setLoading(false);
      });
  }, [url]);

  //CONFIGURANDO POST DE LA API
  const createData = data => {
    // data.id = Date.now();

    let options = {
      body: data,
      //esta parte del header es por obligacion de json server
      headers: { 'content-type': 'application/json' },
    };

    //configurando POST de la api
    api.post(url, options).then(res => {
      console.log(res);
      if (!res.err) {
        //si no hay error actualiza la base de datos
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  //CONFIGURANDO UPDATE DE LA API
  const updateData = data => {
    //creo variable para no entrar en conflicto con la url que tengo antes
    let endpoint = `${url}/${data.id}`;
    // console.log(endpoint);

    let options = {
      body: data,
      //esta parte del header es por obligacion de json server
      headers: { 'content-type': 'application/json' },
    };

    //configurando PUT de la api
    api.put(endpoint, options).then(res => {
      // console.log(res);
      if (!res.err) {
        let newData = db.map(el => (el.id === data.id ? data : el));
        //si no hay error actualiza la base de datos
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  //configurando DELETE de la api
  const deleteData = id => {
    //creo variable para no entrar en conflicto con url principal
    let url = `http://localhost:3000/cliente/delete/`;
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id "${id}"?,`,
    );

    if (isDelete) {
      //creo variable para no entrar en conflicto con la url que tengo antes
      let endpoint = `${url}/${id}`;
      let options = {
        //este header es necesario por el json-server
        headers: { 'content-type': 'application-json' },
      };
      //configuramos la funcion DEL del fetch
      api.del(endpoint, options).then(res => {
        if (!res.err) {
          //si no hay error actualiza la base de datos
          let newData = db.filter(el => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Crup CLIENTES</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}

        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};
