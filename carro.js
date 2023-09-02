let xCarros = [600,600,600,600,600,600]
let yCarros = [40,96,150,210,270,318]
let velocidadeCarros = [2.5, 3.5, 3.2,3,5,3.5,2.3]
let wCarros = 50;
let hCarros = 40;

function mostraCarro(){
  for(let i = 0; i < imagensCarros.length; i++)
    image(imagensCarros[i],xCarros[i],yCarros[i],wCarros,hCarros)
}

function moverCarros(){
  for(let i = 0 ; i < imagensCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i]
  }
}

function voltaCarro(){
  for(let i = 0; i < imagensCarros.length; i++){
    if(verificaPosicao(xCarros[i])){
      xCarros[i] = 600
    }
  }
}

function verificaPosicao(xCarros){
 return xCarros < -50
}