let xAtor = 100;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeMover()){
       yAtor += 3;
    }
  }
}

function podeMover(){
  return yAtor < 370;
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      somDaColisao.play();
      voltaAtorPosicaoInicial();
    if (diminuiPontos()){
      meusPontos -= 1;
    }
    }
  } 
}

function diminuiPontos(){
  return meusPontos > 0;
}

function voltaAtorPosicaoInicial(){
  yAtor = 370;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(22);
  fill(255, 240, 60)
  text(meusPontos, width / 5, 25)
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorPosicaoInicial();
    somDoPonto.play();
  }
}