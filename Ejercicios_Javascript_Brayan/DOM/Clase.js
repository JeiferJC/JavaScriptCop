class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  // Crear una instancia de la clase Persona
  const persona1 = new Persona('Juan', 30);
  persona1.saludar(); // Output: Hola, me llamo Juan y tengo 30 años.
  