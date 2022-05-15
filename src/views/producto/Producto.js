import React, { useEffect, useState } from 'react';
import { helpHttp } from './../../helpers/helpHttp';
import CrudForm from './CrudFormProducto';
import Loader from './../../components/Loader';
import Message from './../../components/Message';
import swal from 'sweetalert';
import {getColumnsProducts} from '../../utils/constants'
import CrudTableGeneric from '../../components/shared/CrudTableGeneric';

export function Producto() {

  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(null);


  let api = helpHttp();
  let url = 'producto/findAll';
  let rootpath = 'http://localhost:3000/';

  //useEffect creada para que la pagina inicie con los datos de nuestro api, PARA QUE LOS DATOS APAREZCAN EN LA TABLA AL PRINCIPIO
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(rootpath + url)
      .then(res => {

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

  //RECUPERAR DATA DE LAS CATEGORIAS
  useEffect(() => {
    helpHttp()
      .get(rootpath + 'categoria/findAll')
      .then(res => {
        if (!res.err) {
          setCategory(res)
        } else {
          setCategory(null)
          console.log("Error al recuperar las categorias")
        }
      });
  }, []);

  //CONFIGURANDO POST DE LA API
  const createData = data => {
    // data.id = Date.now();

    let options = {
      body: data,
      //esta parte del header es por obligacion de json server
      headers: { 'content-type': 'application/json' },
    };

    //configurando POST de la api
    api.post(rootpath + "producto/create", options).then(res => {
      console.log(res);
      if (!res.err) {
        //si no hay error actualiza la base de datos
        setDb([...db, res]);
        swal("Genial!", "Producto creado correctamente", "success");
      } else {
        //setError(res);
        swal("Oops!", "Ocurrio un error al intentar crear el producto " + res, "error");
      }
    });
  };

  //CONFIGURANDO UPDATE DE LA API
  const updateData = data => {
    //creo variable para no entrar en conflicto con la url que tengo antes
    let endpoint = `${rootpath + "producto/update"}/${data.pr_id}`;
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
        swal("Genial!", "La informacion del producto se actualizo correctamente", "success");
      } else {
        //setError(res);
        swal("Oops!", "Ocurrio un error al intentar actualizar el producto " + res, "error");
      }
    });
  };

  //configurando DELETE de la api
  const deleteData = obj => {
    /*let isDelete = window.confirm(
      `¿Estás seguro de eliminar el cliente ${obj.cl_nombre} ${obj.cl_apellido} con el DNI ${obj.cl_dni}?,`,
    );*/

    swal({
      title: `¿Estás seguro de eliminar el producto ${obj.pr_nombre}?`,
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          //creo variable para no entrar en conflicto con la url que tengo antes
          let endpoint = `${rootpath + "producto/delete"}/${obj.pr_id}`;
          let options = {
            //este header es necesario por el json-server
            headers: { 'content-type': 'application-json' },
          };
          //configuramos la funcion DEL del fetch
          api.del(endpoint, options).then(res => {
            if (!res.err) {
              //si no hay error actualiza la base de datos
              let newData = db.filter(el => el.id !== obj.pr_id);
              setDb(newData);
              swal("Genial!", "La informacion del producto se elimino correctamente", "success");
            } else {
              //setError(res);
              swal("Oops!", "Ocurrio un error al intentar eliminar el producto " + res, "error");
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
          <h3 className="page-title"> Mantenimiento de Producto </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Producto</a></li>
              <li className="breadcrumb-item active" aria-current="page">Mantenimiento de Producto</li>
            </ol>
          </nav>
        </div>

        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        {db && (
          <CrudTableGeneric
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            colNames={getColumnsProducts}
          />
        )}

      </div>
    </>
  );
}
