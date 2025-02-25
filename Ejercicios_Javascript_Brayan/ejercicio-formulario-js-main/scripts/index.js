const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  const email = document.querySelector("#email-input").value;
  // 2. Obtenemos los datos ingresados en el input de password
  const password = document.querySelector("#password-input").value;
  // 3. Obtenemos el valor del input radio
  const legalAge = document.querySelector("input[name='legalAge']:checked");
  // 4. Obtenemos el valor del input checkbox
 const termsAccepted = document.querySelector("#tyc").checked;
     // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  if (!legalAge){
    alert("debes ser mayor para ingresar al sitio");
    return;
 }
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  if (!termsAccepted ){
    alert("tienes que aceptar las condiciones para poder ingresar");
    return;
  }
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
  const UsuarioInf={
    email: email,
    password: password,
    legalAge: legalAge.value ==="true",
    termsAccepted: termsAccepted
  };
  console.log(UsuarioInf);
});
