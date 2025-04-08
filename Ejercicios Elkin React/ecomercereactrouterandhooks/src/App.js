import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import ProductContainer from "./components/Product.Container"
import ProductDetail from "./components/ProductDetail"


function App (){
    return(

        <BrowserRouter>
        <Navbar title="Ecomerce"/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<ProductContainer/>}></Route>
            <Route path="/products/id:" element={<ProductDetail/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}