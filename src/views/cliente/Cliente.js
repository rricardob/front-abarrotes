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

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Consulta de Clientes</h4>
                <form className="form-sample">
                  <p className="card-description"></p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Nombre</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Apellidos</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">DNI</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <button type="submit" class="btn btn-primary mr-2">Buscar</button>
                      <button class="btn btn-dark">Limpiar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  <button type="button" class="btn btn-primary btn-sm">Nuevo</button>
                </h4>
                <p className="card-description">
                </p>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Usuario </th>
                        <th> Nombres </th>
                        <th> Apellidos </th>
                        <th> DNI </th>
                        <th> Email </th>
                        <th> Estado </th>
                        <th className='text-center'> Acciones </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1">
                          <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" />
                        </td>
                        <td> Herman Beck </td>
                        <td> Cabrera Peña </td>
                        <td> 11111111 </td>
                        <td> hernan@gmail.com </td>
                        <td> <label class="badge badge-danger">Eliminado</label> </td>
                        <td className='text-center'>
                          <button type="button" class="btn btn-primary btn-sm">Editar</button> &nbsp;
                          <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src="../../assets/images/faces-clipart/pic-2.png" alt="image" />
                        </td>
                        <td> Messsy Adam </td>
                        <td> Perez Perez </td>
                        <td> 22222222 </td>
                        <td> hernan@gmail.com </td>
                        <td> <label class="badge badge-success">Activo</label> </td>
                        <td className='text-center'>
                          <button type="button" class="btn btn-primary btn-sm">Editar</button> &nbsp;
                          <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src="../../assets/images/faces-clipart/pic-3.png" alt="image" />
                        </td>
                        <td> John Richards </td>
                        <td> Lima Lima </td>
                        <td> 33333333 </td>
                        <td> hernan@gmail.com </td>
                        <td> <label class="badge badge-success">Activo</label> </td>
                        <td className='text-center'>
                          <button type="button" class="btn btn-primary btn-sm">Editar</button> &nbsp;
                          <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src="../../assets/images/faces-clipart/pic-4.png" alt="image" />
                        </td>
                        <td> Peter Meggik </td>
                        <td> Lima Lima </td>
                        <td> 44444444 </td>
                        <td> hernan@gmail.com </td>
                        <td> <label class="badge badge-success">Activo</label> </td>
                        <td className='text-center'>
                          <button type="button" class="btn btn-primary btn-sm">Editar</button> &nbsp;
                          <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" />
                        </td>
                        <td> Edward </td>
                        <td> Lima Lima </td>
                        <td> 55555555 </td>
                        <td> hernan@gmail.com </td>
                        <td> <label class="badge badge-success">Activo</label> </td>
                        <td className='text-center'>
                          <button type="button" class="btn btn-primary btn-sm">Editar</button> &nbsp;
                          <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src="../../assets/images/faces-clipart/pic-2.png" alt="image" />
                        </td>
                        <td> John Doe </td>
                        <td> Lima Lima </td>
                        <td> 66666666 </td>
                        <td> hernan@gmail.com </td>
                        <td> <label class="badge badge-success">Activo</label> </td>
                        <td className='text-center'>
                          <button type="button" class="btn btn-primary btn-sm">Editar</button> &nbsp;
                          <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src="../../assets/images/faces-clipart/pic-3.png" alt="image" />
                        </td>
                        <td> Henry Tom </td>
                        <td> Lima Lima </td>
                        <td> 77777777 </td>
                        <td> hernan@gmail.com </td>
                        <td> <label class="badge badge-success">Activo</label> </td>
                        <td className='text-center'>
                          <button type="button" class="btn btn-primary btn-sm">Editar</button> &nbsp;
                          <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </>
    /*{<div>
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
    </div>}*/
  );
};
