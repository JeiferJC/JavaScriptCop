let respuestaUsuario = parseint(prompt("Escoge una opsion: piedra(1),papel(2), tijera(3)"))
let respuestaComputadora = parseint(Math.random()*3+1);

console.log ("usuario:" + respuestaUsuario);
console.log ("compuadora:" + respuestaComputadora);

switch(true) {

 case (respuestaComputadora === respuestaUsuario):
 console.log("empate");
 break;
 
 case (respuestaComputadora === 1 && respuestaUsuario === 3 ):
 case (respuestaComputadora === 2 && respuestaUsuario === 1):
 case (respuestaComputadora === 3 && respuestaUsuario === 2):

 console.log ("Gana la coputadora");
 break;
 default:
 console.log ("Gana el usuario");
break;
}
    