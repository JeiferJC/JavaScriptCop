import React,{useState} from "react";
import './styles.css'
import Layout from './components/Layout';
import themesContext, {themes} from "./context";


export default function App(){
    const [theme, setTheme]= useState(themes.light);

    const handleChangeTheme=()=>{
        console.log(theme)
        setTheme(()=>{
            return theme===themes.dark ? themes.light : themes.dark;
        });
    };

    return (
        //provider permite compartir datos entre componentes sin necesidad de pasar propiedades manualmente 
        <themesContext.provider value={{theme, handleChangeTheme}}>
           //aca se ponen todos los archivos que se quiere que puedan acceder a la informacion 
           <Layout>
            <div className="App"> 
                <h1>React context</h1>
            </div>
           </Layout>
        </themesContext.provider>
    )
}