import componenteFuncional2 from "./componenteFuncional2"

const ComponenteFuncional1 = () => {
  let nombre ="Cesar Gonzalez";
  let numero = 12;
  return (
    <div>  <h1> hola desde componenteFuncional</h1>
    <componeneteFuncional2 prop1 ="manzana" nombre ={nombre} numero ={numero} />
    </div>
  )
}

export default ComponenteFuncional1