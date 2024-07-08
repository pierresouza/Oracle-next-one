function tocaSom(SeletorAudio) {
  const elemento = document.querySelector(SeletorAudio);

  if (elemento !== null && elemento.localName === "audio") {
    if (elemento.localName === "audio") {
      elemento.play();
    } else {
      console.error("Elemento não é um audio.");
    }
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`; //template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (event) {
    console.log(event.code == "Space");

    if (event.code == "Space" || event.code == "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
