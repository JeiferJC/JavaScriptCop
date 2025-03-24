import React from "react";
import Hijos from "../Hijo"


class Padre extends React.Component{



     state= {
        count:0,
     }

     sum= ()=>{
           this.setState(prevState=>{
            return{
                count: prevState.count+1
            }
           })
     }

     res=()=>{
        this.setState(prevState=>{
         return{
             count: prevState.count-1
         }
        })
  }

  render (){
    return(
        <div>
            <Hijos count= {this.state.count} suma={this.sum} resta={this.res}/>
        </div>
    )
        
    
  }

}
export default Padre;


