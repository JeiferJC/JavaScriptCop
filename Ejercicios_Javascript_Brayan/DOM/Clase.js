class Persona {
    constructor(nombre, edad, id) {
      this.nombre = nombre;
      this.edad = edad;
      this.id = id;

    }
  
    saludar() {
      console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años. mi id es ${this.id}`);
    }
  }
  
  // Crear una instancia de la clase Persona
  const persona1 = new Persona('Juan', 30, 52);
  persona1.saludar(); // Output: Hola, me llamo Juan y tengo 30 años my id es 52  
  