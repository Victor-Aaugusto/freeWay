function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada,255);
  mostraCarro();
  moverCarros();
  voltaCarro();
  mostraAtor();
  movimentaAtor();
  verificaColisao();
  pontuacao();
  marcaPontos(); 
}