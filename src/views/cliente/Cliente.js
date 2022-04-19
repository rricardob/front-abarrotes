import React, { useEffect, useState } from 'react';
import { helpHttp } from './../../helpers/helpHttp';
import CrudForm from './CrudFormCliente';
import CrudTable from './CrudTableCliente';
import Loader from './../../components/Loader';
import Message from './../../components/Message';
import swal from 'sweetalert';

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
      .get(rootpath + url)
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
  }, [rootpath + url]);

  //CONFIGURANDO POST DE LA API
  const createData = data => {
    // data.id = Date.now();

    let options = {
      body: data,
      //esta parte del header es por obligacion de json server
      headers: { 'content-type': 'application/json' },
    };

    //configurando POST de la api
    api.post(rootpath + "cliente/create", options).then(res => {
      console.log(res);
      if (!res.err) {
        //si no hay error actualiza la base de datos
        setDb([...db, res]);
        swal("Genial!", "Cliente creado correctamente", "success");
      } else {
        //setError(res);
        swal("Oops!", "Ocurrio un error al intentar crear el cliente " + res, "error");
      }
    });
  };

  //CONFIGURANDO UPDATE DE LA API
  const updateData = data => {
    //creo variable para no entrar en conflicto con la url que tengo antes
    let endpoint = `${rootpath + "cliente/update"}/${data.cl_id}`;
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
        let newData = db.map(el => (el.id === data.cl_id ? data : el));
        //si no hay error actualiza la base de datos
        setDb(newData);
        swal("Genial!", "La informacion del cliente se actualizo correctamente", "success");
      } else {
        //setError(res);
        swal("Oops!", "Ocurrio un error al intentar actualizar el cliente " + res, "error");
      }
    });
  };

  //configurando DELETE de la api
  const deleteData = obj => {
    /*let isDelete = window.confirm(
      `¿Estás seguro de eliminar el cliente ${obj.cl_nombre} ${obj.cl_apellido} con el DNI ${obj.cl_dni}?,`,
    );*/

    swal({
      title: `¿Estás seguro de eliminar el cliente ${obj.cl_nombre} ${obj.cl_apellido} con el DNI ${obj.cl_dni}?`,
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          //creo variable para no entrar en conflicto con la url que tengo antes
          let endpoint = `${rootpath + "cliente/delete"}/${obj.cl_id}`;
          let options = {
            //este header es necesario por el json-server
            headers: { 'content-type': 'application-json' },
          };
          //configuramos la funcion DEL del fetch
          api.del(endpoint, options).then(res => {
            if (!res.err) {
              //si no hay error actualiza la base de datos
              let newData = db.filter(el => el.id !== obj.cl_id);
              setDb(newData);
              swal("Genial!", "La informacion del cliente se elimino correctamente", "success");
            } else {
              //setError(res);
              swal("Oops!", "Ocurrio un error al intentar eliminar el cliente " + res, "error");
            }
          });
        } else {
          return;
        }
      });

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
