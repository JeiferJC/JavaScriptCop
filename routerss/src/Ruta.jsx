//ESTA YA NO SE USA----EL ARCHIVO RUTA
// // importamos el BrowserRouter, Routes y Route de react-router-dom para definir las rutas de la aplicacion

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './paginas/Home'
import SobreNosotros from './paginas/SobreNosotros'
import Error504 from './paginas/Error504'

const Ruta = () => {
  return (//en browser router se define la ruta.. Routes nos incializa las rutas... Route son las rutas que se definen
    <div>
        <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path ="/Sobre-Nosotros" element = {<SobreNosotros/>}/>
          <Route path ='*' element = {<Error504/>}/>
        </Routes>

        </BrowserRouter>
    </div>
  )
}

export default Ruta