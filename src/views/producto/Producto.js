import React from 'react';
import { GridResultados } from '../../components/shared/GridResultados';

const list = [
  {id: 1, name: "ricardo", age: 12},
  {id: 2, name: "willians", age: 122},
  {id: 3, name: "willians", age: 122},
  {id: 4, name: "willians", age: 122},
  {id: 5, name: "willians", age: 122},
  {id: 6, name: "willians", age: 122},
  {id: 7, name: "willians", age: 122},
  {id: 8, name: "willians", age: 122},
  {id: 9, name: "willians", age: 122},
  {id: 10, name: "willians", age: 122},
  {id: 11, name: "willians", age: 122},
  {id: 12, name: "willians", age: 122},
  {id: 13, name: "willians", age: 122},
  {id: 14, name: "willians", age: 122},
  {id: 15, name: "willians", age: 122},
]

const columns = ['id', 'name', 'age']

export function Producto() {
  return (
    <>
      <h1>
        Pagina de Producto renderizada con React
      </h1>
      <GridResultados
        list={list}
        colNames={columns}
      />
    </>
  );
}
