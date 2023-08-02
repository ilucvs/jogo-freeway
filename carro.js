let xCarros = [605, 605, 605, 605, 605, 605];
let yCarros = [42, 97, 152, 212, 267, 322];
let velocidadeCarros = [2, 3, 5, 3.5, 2.5, 4];
let comprimentoCarro = 45;
let alturaCarro = 30;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function posicaoInicialCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if (passouDaTela(xCarros[i])){
      xCarros[i] = 630;
    }
  }
}

function passouDaTela(xCarros){
   return xCarros < -30;
}