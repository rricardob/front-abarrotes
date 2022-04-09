import React from 'react';

export function Cliente() {
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
  );
}
