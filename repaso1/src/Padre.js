import React from "react";




function Padre (props){
    return(
        
        <div className="App">
            <head>
            <h1>Hola</h1>
            </head>

            <main>
                <h1>hola</h1>
            <div>{props.children}</div>
            </main>
            
            <footer>
                <h4>Este es el footer</h4>
            </footer>
        
        </div>
       
    );
}

export default Padre;