// con path los parametros se vuelven obligatorios en la ruta en cambio en query string es mas flexible

import {useLocation}from 'react-router-dom'

const RutasQuery = () => {
  const search = useLocation().search
  let id = new URLSearchParams(search).get('id')
  let slug = new URLSearchParams(search).get('slug')

   return (
    <>
    <h2>Ejemplos parametros query string</h2>
    <ul>
        <li>id:{id}</li>
        <li>slug:{slug}</li>
    </ul>
        </>
  )
}

export default RutasQuery