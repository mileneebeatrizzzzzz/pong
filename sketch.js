function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }let xbolinha = 300;
  let ybolinha = 200;
  let diametro = 15;
  let raio = diametro / 2;
  let velocidadexbolinha = 5;
  let velocidadeybolinha = 5;
  
  
  
  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);
    movimentaBolinha();
    mostraBolinha()
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
  }
  
  if (xbolinha + raio > width || xbolinha < 0) {
  velocidadexbolinha *= - 1; 
  }
  if (xbolinha + raio > height|| xbolinha < 0) {
    velocidadexbolinha *= - 1;
  }
  
  function mostraBolinha() {
  circle(xBolinha,yBolinha,diametro)
  }
  
  function movimentaBolinha(){
  xbolinha= xBolinha + velocidadeXBolinha;
  ybolinha+=velocidadeYBolinha;
  }
  
  function movimentaBolinha(){
    xbolinha += velocidadexbolinha;
    ybolinha += velocidadeybolinha;
  }
    
  
  function verificaColisaoBorda() {
  
    if(xBolinha+raio> width  || xBolinha - raio <0)
  velocidadeXBolinha*= -1;
  }
  if(yBolinha + raio >height || yBolinha - raio <0){
  velocidadeYBolinha*= -1;
  }
  