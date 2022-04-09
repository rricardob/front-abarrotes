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
  let url = 'cliente/findAll';
  let rootpath = 'http://localhost:3000/';

  //useEffect creada para que la pagina inicie con los datos de nuestro api, PARA QUE LOS DATOS APAREZCAN EN LA TABLA AL PRINCIPIO
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(rootpath+url)
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
  }, [rootpath+url]);

  //CONFIGURANDO POST DE LA API
  const createData = data => {
    // data.id = Date.now();

    let options = {
      body: data,
      //esta parte del header es por obligacion de json server
      headers: { 'content-type': 'application/json' },
    };

    //configurando POST de la api
    api.post(rootpath+"cliente/create", options).then(res => {
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
    let endpoint = `${rootpath+"cliente/update"}/${data.id}`;
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
      let endpoint = `${rootpath+"cliente/delete"}/${id}`;
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
    <>
      <div className="content-wrapper">

        <div className="page-header">
          <h3 className="page-title"> Mantenimiento de Clientes </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Clientes</a></li>
              <li className="breadcrumb-item active" aria-current="page">Mantenimiento de Clientes</li>
            </ol>
          </nav>
        </div>

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

      </div>
    
    </>
    
  );
};
