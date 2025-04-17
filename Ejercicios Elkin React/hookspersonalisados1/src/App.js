import {useState} from "react"
import useCounter from "./useCounter"
import useTitle from "./useTitle"
import "./App.css";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
    const {counter, increase, decrease, reset}= useCounter();
    const [ , setDocumentTitle]= useTitle("Titulo inicial");
    const [cont, setCont]= useState(1);
    
    const handleTitle =()=>{
        setDocumentTitle(`titulo numero ${cont}`)
        setCont(cont+1)

    } 
    return (
        <div>
            <div>{counter}</div>
            <Button onClick={()=>increase()} variant="success"as="a">+</Button>
            <button onClick={()=>decrease()}>-</button>
            <button onClick={()=>reset()}>reset</button>
            <button onClick={()=>handleTitle()}>Cambiar titulo</button>
        </div>
    );
}