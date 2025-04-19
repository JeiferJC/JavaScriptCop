import React from 'react'

const componenteFuncional2 = ({prop1, nombre, numero}) => {// aca se pasa el prop1 desde el componenetefunconal1
  return (
    <div>
   <h3> componenete desde conmponente 2 </h3>
   <ul>
    <li> Prop1: {prop1}</li>
    <li> Nombre: {nombre}</li>
   </ul>
    </div>
  )
}

export default componenteFuncional2