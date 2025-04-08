import React from "react";
import Hijo from "../Hijo"

class Padre extends React.Component{
         state = {// le asigno el objeto count al estado, se peuden utilizar muchas propuiedades o objetos com ocount en este segmento
            count:0
         }
         set=()=>{
            this.setState(prevState =>{// esto es de react set y prevstate juntos funcionan
                return{// hacen que devuelva el ultimo estado este callback de prevstate
                    count: prevState.count+1// al count del ultimo estado que hubo se le suma uno 
                }
            })
         }
         
         rest=()=>{
            this.setState(prevState =>{
                return{
                    count: prevState.count-1
                }
            })
         }
         //Renderizar 
         render(){
            return(
                <div>
                    <Hijo count= {this.state.count} suma ={this.sum} resta={this.rest}/>
        
                </div>//aca le pasamos todo lo que vamos a mostrar 
            )
         }
}
export default Padre;