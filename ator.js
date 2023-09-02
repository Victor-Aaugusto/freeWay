let xAtor = 85;
let yAtor = 366;

let colidiu = false;

let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()){
       yAtor += 3;
    }
   
  }
}

function verificaColisao() {
  for (let i = 0; i < imagensCarros.length; i++) {
    colidiu = collideRectCircle(
      xCarros[i],
      yCarros[i],
      wCarros,
      hCarros,
      xAtor,
      yAtor,
      15
    );

    if (colidiu) {
      voltaCarroParaOInicio();
      if (perderPontos()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaCarroParaOInicio() {
  yAtor = 366;
}

function pontuacao() {
  textAlign(CENTER);
  textSize(25);
  fill(255, 240, 60);
  text(meusPontos, width / 5, 27);
}

function marcaPontos() {
  if (yAtor < 15) {
    meusPontos += 1;
    voltaCarroParaOInicio();
  }
}

function perderPontos() {
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366
}