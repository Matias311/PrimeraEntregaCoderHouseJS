/* Import html */
const numeroGanadas = document.querySelector("#numeroVecesGanadas");
const numeroPerdidas = document.querySelector("#numeroVecesPerdidas");
const tituloVictoriasDerrotas = document.querySelector("#titulo");
const botonMaquina = document.querySelector("#maquinaEleccion");
const piedra = document.querySelector("#piedra");
const papel = document.querySelector("#papel");
const tijera = document.querySelector("#tijera");
const user = document.querySelector(".user");
const arr = [];
let v = 1;
let d = 1;

/* Funcion de comparacion de maquina */
function comparacionMaquina(maquina) {
  if (maquina === 1) {
    botonMaquina.innerHTML = "Piedra";
    return "Piedra";
  } else if (maquina === 2) {
    botonMaquina.innerHTML = "Papel";
    return "Papel";
  } else if (maquina === 3) {
    botonMaquina.innerHTML = "Tijera";
    return "Tijera";
  }
}

/* Compara y si maquina y usuario son iguales, llama a la funcion contador */
function comparar(usuario, maquina) {
  let bot = comparacionMaquina(maquina);
  contador(usuario, bot);
}

/* Numero al azar para comparar maquina */
function numeroAlAzar() {
  let numero = Math.floor(Math.random() * 3 + 1);
  return numero;
}

/* contador de victorias y derrotas */
function contador(usuario, maquina) {
  /* Empate */
  if (usuario === maquina) {
    tituloVictoriasDerrotas.innerHTML = `Empate! La maquina eligio ${maquina}`;
  }
  /* Victorias */
  if (usuario === "Piedra" && maquina === "Tijera") {
    numeroGanadas.innerHTML = v++;
    tituloVictoriasDerrotas.innerHTML = `Ganaste! La maquina eligio ${maquina}`;
  } else if (usuario === "Papel" && maquina === "Piedra") {
    numeroGanadas.innerHTML = v++;
    tituloVictoriasDerrotas.innerHTML = `Ganaste! La maquina eligio ${maquina}`;
  } else if (usuario === "Tijera" && maquina === "Papel") {
    numeroGanadas.innerHTML = v++;
    tituloVictoriasDerrotas.innerHTML = `Ganaste! La maquina eligio ${maquina}`;
  }
  /* Derrotas */
  if (usuario === "Piedra" && maquina === "Papel") {
    numeroPerdidas.innerHTML = d++;
    tituloVictoriasDerrotas.innerHTML = `Perdiste la maquina eligio ${maquina}`;
  } else if (usuario === "Papel" && maquina === "Tijera") {
    numeroPerdidas.innerHTML = d++;
    tituloVictoriasDerrotas.innerHTML = `Perdiste la maquina eligio ${maquina}`;
  } else if (usuario === "Tijera" && maquina === "Piedra") {
    numeroPerdidas.innerHTML = d++;
    tituloVictoriasDerrotas.innerHTML = `Perdiste la maquina eligio ${maquina}`;
  }
}

/* Click de usuario piedra */
piedra.addEventListener("click", (e) => {
  const usuarioPiedra = piedra.textContent;
  comparar(usuarioPiedra, numeroAlAzar());
});

/* Click de usuario papel */
papel.addEventListener("click", (e) => {
  const usuarioPapel = papel.textContent;
  comparar(usuarioPapel, numeroAlAzar());
});

/* Click de usuario tijera */
tijera.addEventListener("click", (e) => {
  const usuarioTijera = tijera.textContent;
  comparar(usuarioTijera, numeroAlAzar());
});