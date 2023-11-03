/* 
    1.- Piedra
    2.- Papel
    3.- Tijera
*/
let v = 0;
let l = 0;
let numeroAlAzar = Math.floor(Math.random() * 3 + 1);
let usuarioEleccion = prompt(
  "Ingrese Piedra, Papel o Tijera (ESC para terminar el juego)"
).toLocaleLowerCase();
/* Compara la eleccion del usuario y la de la maquina para mostrar el mensaje de empate */
const empateComparacion = (usuarioEleccion, numeroAlAzar) => {
  if (usuarioEleccion === "piedra" && numeroAlAzar === 1) {
    alert(`Empate! La maquina tambien eligio ${eleccionMaquina(numeroAlAzar)}`);
  } else if (usuarioEleccion === "papel" && numeroAlAzar === 2) {
    alert(`Empate! La maquina tambien eligio ${eleccionMaquina(numeroAlAzar)}`);
  } else if (usuarioEleccion === "tijera" && numeroAlAzar === 3) {
    alert(`Empate! La maquina tambien eligio ${eleccionMaquina(numeroAlAzar)}`);
  }
};
/* Compara la eleccion del usuario y la de la maquina para saber quien es el ganador */
const ganadorComparacion = (usuarioEleccion, numeroAlAzar) => {
  if (usuarioEleccion === "piedra" && numeroAlAzar === 3) {
    alert(`Haz ganado! La maquina eligio ${eleccionMaquina(numeroAlAzar)}`);
    v++;
  } else if (usuarioEleccion === "papel" && numeroAlAzar === 1) {
    alert(`Haz ganado! La maquina eligio ${eleccionMaquina(numeroAlAzar)}`);
    v++;
  } else if (usuarioEleccion === "tijera" && numeroAlAzar === 2) {
    alert(`Haz ganado! La maquina eligio ${eleccionMaquina(numeroAlAzar)}`);
    v++;
  }
};
/* Compara la eleccion del usuario y la de la maquina para saber quien es el perdedor */
const perdedorComparacion = (usuarioEleccion, numeroAlAzar) => {
  if (usuarioEleccion === "piedra" && numeroAlAzar === 2) {
    alert(`Haz perdido! La maquina eligio ${eleccionMaquina(numeroAlAzar)}`);
    l++;
  } else if (usuarioEleccion === "papel" && numeroAlAzar === 3) {
    alert(`Haz perdido! La maquina eligio ${eleccionMaquina(numeroAlAzar)}`);
    l++;
  } else if (usuarioEleccion === "tijera" && numeroAlAzar === 1) {
    alert(`Haz perdido! La maquina eligio ${eleccionMaquina(numeroAlAzar)}`);
    l++;
  }
};
/* Pasa de numero a piedra, papel o tijera, para poder mostrar al usuario que eligio la maquina y no mostrar un numero */
const eleccionMaquina = (numeroAlAzar) => {
  if (numeroAlAzar == 1) {
    return "Piedra";
  } else if (numeroAlAzar == 2) {
    return "Papel";
  } else if (numeroAlAzar == 3) {
    return "Tijera";
  }
};

while (usuarioEleccion !== "esc") {
  empateComparacion(usuarioEleccion, numeroAlAzar);
  ganadorComparacion(usuarioEleccion, numeroAlAzar);
  perdedorComparacion(usuarioEleccion, numeroAlAzar);
  /* Se actualiza el valor de usuarioEleccion */
  usuarioEleccion = prompt(
    "Ingrese Piedra, Papel o Tijera"
  ).toLocaleLowerCase();
  numeroAlAzar = Math.floor(Math.random() * 3 + 1);
}

alert(`Haz ganado ${v} veces y haz perdido ${l} veces`);
