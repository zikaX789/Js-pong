let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

let velocidadexBolinha = 4;
let velocidadeyBolinha = 4;

let xRaqueteEsquerda = 10;

let yRaqueteEsquerda = 155;
let oponenteRaquete = 10;
let alturaRaquete = 90;

let xRaqueteDireita = 580;
let yRaqueteDireita = 155;

let meuPlacar = 0
let Placaroponente = 0

let trilha;
let ponto;
let raquetada;

function setup() {
  createCanvas(600, 400);
  square(20, 20, 60);
 trilha.loop();
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaBorda();
  desenhaRaqueteEsquerda();
  desenhaRaqueteDireita();
  movimentaRaqueteDireita();
  movimentaRaqueteEsquerda();
  colisaoRaquete();
  mostraPlacar();
  contaPlacar();
}

function desenhaBolinha() {
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha() {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;

}

function verificaBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeyBolinha *= -1;
  }

}

function desenhaRaqueteEsquerda() {
  rect(xRaqueteEsquerda, yRaqueteEsquerda, oponenteRaquete,alturaRaquete);
}
function desenhaRaqueteDireita() {
  rect(xRaqueteDireita, yRaqueteDireita, oponenteRaquete, alturaRaquete);
  }
function movimentaRaqueteEsquerda () {
 
   if (keyIsDown(UP_ARROW)){
     yRaqueteEsquerda -= 10;
   }
   if ( keyIsDown(DOWN_ARROW)){
     yRaqueteEsquerda += 10;
   }
}
function movimentaRaqueteDireita (){
  if (keyIsDown(87)){
    yRaqueteDireita -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteDireita += 10;
  }
}

function colisaoRaquete(){
   if(xBolinha - raio <= xRaqueteEsquerda + oponenteRaquete &&
      yBolinha + raio >= yRaqueteEsquerda &&
      yBolinha - raio <= yRaqueteEsquerda + alturaRaquete){
     velocidadexBolinha *= -1;
     raquetada.play();
   }
  if(xBolinha + raio >= xRaqueteDireita &&
      yBolinha + raio >= yRaqueteDireita &&
      yBolinha - raio <= yRaqueteDireita + alturaRaquete){
     velocidadexBolinha *= -1;
    raquetada.play();
   }
}

function desprendeBolinha(){
  if(xBolinha - raio < 0){
    xBolinha = 23;
  }
  if(xBolinha + raio > width){
    xBolinha = width - 23
  }
}


function mostraPlacar(){
  fill('orange');
  rect(130, 5, 40, 25);
  rect(430, 5, 40, 25);
  fill(255);
  textSize(22);
  textAlign(CENTER);
  text(meuPlacar, 150, 25);
  text(Placaroponente, 450, 25);
 
}

 function contaPlacar(){
//   contabiliza Placar do oponente
 if(xBolinha - raio <= 0){
   Placaroponente += 1;
   ponto.play();
 }
//   contabiliza meu placar
    if(xBolinha + raio >= width){
      meuPlacar += 1;
      ponto.play();
    }
 }
   
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
 
}
