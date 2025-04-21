//ESTE ES EL LAYAOUT

import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Frontend = () => {
  return (

    <>
    <Header/>
    <main className="container">
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Frontend