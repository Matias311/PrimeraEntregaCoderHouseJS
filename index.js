/* Import html */
const numeroGanadas = document.querySelector("#numeroVecesGanadas");
const numeroPerdidas = document.querySelector("#numeroVecesPerdidas");
const tituloEleccion = document.querySelector("#titulo");
const btnUsuario = document.querySelectorAll("#usuariobtn");
const btnReset = document.querySelector("#btn-reset");
const btnMaquina = document.querySelector("#maquinaEleccion");
const victoriasPerdidas = {
  victorias: 0,
  perdida: 0,
};

/* Carga de la pagina */
window.addEventListener("load", () => {
  numeroGanadas.innerHTML = localStorage.getItem("Ganadas") || 0;
  numeroPerdidas.innerHTML = localStorage.getItem("Perdidas") || 0;
});

/* Click del usuario */
btnUsuario.forEach((element) => {
  element.addEventListener("click", ({ target: { value } } = e) => {
    ganadas(value, maquina(numeroAlazar()));
    perdida(value, maquina(numeroAlazar()));
    empate(value, maquina(numeroAlazar()));
  });
});

/* Funcion numero al azar */
const numeroAlazar = () => Math.floor(Math.random() * 3 + 1);

/* Funcion maquina eleccion */
const maquina = (numeroAzar) => {
  if (numeroAzar === 1) {
    btnMaquina.innerHTML = "🪨";
    return "Piedra";
  }
  if (numeroAzar === 2) {
    btnMaquina.innerHTML = "🧻";
    return "Papel";
  }
  if (numeroAzar === 3) {
    btnMaquina.innerHTML = "✂️";
    return "Tijera";
  }
};

/* Ganadas */
const ganadas = (usuario, maquina) => {
  usuario === "Piedra" && maquina === "Tijera" && functionTitulo(maquina);
  usuario === "Papel" && maquina === "Piedra" && functionTitulo(maquina);
  usuario === "Tijera" && maquina === "Papel" && functionTitulo(maquina);
};

/* Titulo ganada */
const functionTitulo = (maquina) => {
  tituloEleccion.innerHTML = `Haz ganado la maquina eligio ${maquina}`;
  victoriasPerdidas.victorias++;
  tituloVictorias();
};

/* Funcion contador de victorias */
const tituloVictorias = () => {
  numeroGanadas.innerHTML = victoriasPerdidas.victorias;
  localStorage.setItem("Ganadas", JSON.stringify(victoriasPerdidas.victorias));
};

/* Perdida */
const perdida = (usuario, maquina) => {
  usuario === "Piedra" && maquina === "Papel" && functionTituloPerdida(maquina);
  usuario === "Papel" && maquina === "Tijera" && functionTituloPerdida(maquina);
  usuario === "Tijera" &&
    maquina === "Piedra" &&
    functionTituloPerdida(maquina);
};

/* Titulo perdida */
const functionTituloPerdida = (maquina) => {
  tituloEleccion.innerHTML = `Haz perdido la maquina eligio ${maquina}`;
  victoriasPerdidas.perdida++;
  tituloPerdidas();
};

/* Contador de perdidas */
const tituloPerdidas = () => {
  numeroPerdidas.innerHTML = victoriasPerdidas.perdida;
  localStorage.setItem("Perdidas", JSON.stringify(victoriasPerdidas.perdida));
};

/* Empate */
const empate = (usuario, maquina) => {
  usuario === maquina && functionTituloEmpate(maquina);
};

/* Funcion titulo empate */
const functionTituloEmpate = (maquina) => {
  tituloEleccion.innerHTML = `Empate la maquina eligio ${maquina}`;
};

/* Boton de reset */
btnReset.addEventListener("click", () => {
  localStorage.removeItem("Perdidas");
  localStorage.removeItem("Ganadas");
  numeroGanadas.innerHTML = 0;
  numeroPerdidas.innerHTML = 0;
});
