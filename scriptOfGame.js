const canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 901;
canvas.height = 901;

var nbreDePions = 10;
var nombreDeCases = 10;
var nbreDeCoupsJoués = 1;
var couleursJoueurs = ["BLANCS", "BRUNS"];
var globalGamePositions = [];
var cellSize = 90;
const vacantCase = { color : "none",  score:"none"}
const PionBlancs = { color : "white",  score:250}
const PionsBruns = { color : "brown", score:250}
let Mobile = true;

var globalGamePositions = Array(80).fill(vacantCase);
for(let i=0; i<10; i++){
    globalGamePositions.unshift(PionBlancs);
globalGamePositions.push(PionsBruns)}


class Cases{
                constructor(x,y,color){  this.color = color;
                                         this.x = x;
                                         this.y = y;
                                         this.cellSize = 90; }

                draw(){ ctx.strokeStyle = this.color;
                        ctx.strokeRect(this.x, this.y, this.cellSize, this.cellSize);
                        ctx.stroke();}                    
                                                                                    }
function InitialiseGrid(){
                            for(i=0; i<canvas.width; i+=cellSize){  
                                for(j=0; j<canvas.height; j+=cellSize){                                                                             
                                                                    let Grid = new Cases(i, j, "Navy", 90, 90);
                                                                    Grid.draw();}}}
   




class Pions{
              constructor(x, y, color, score){ this.x = x;
                                               this.y = y;
                                               this.color = color;
                                               this.score = 100     }

    draw(){  ctx.fillStyle = this.color;
             ctx.beginPath();
             ctx.arc(this.x, this.y, 40, 0, Math.PI*2);
             ctx.closePath;
             ctx.fill();}                                 
                                                                }

function initPionsBlancs(){ PionsBlancsArray = [];
                            for(var i = 0; i < 10; i++){PionsBlancsArray.push(new Pions);}
                            let y = 45;
                            for(var j=45; j<1000; j+=90){
                            let setBlanc = new Pions (j, y, 'Silver', 100);
                            setBlanc.draw()
                            }}

function initPionsBruns(){ PionsBrunsArray = [];
                            for(var i = 0; i < 10; i++){PionsBrunsArray.push(new Pions);}
                            let y = 856;
                            for(var j=45; j<1000; j+=90){
                            let setBrun = new Pions (j, y, 'Maroon', 100);
                            setBrun.draw()
                            }}


                            function which() {canvas.addEventListener('click', function(e) {
                              let valX = e.clientX/cellSize;
                              let valY = e.clientY/cellSize;
                              let colX = Math.ceil(valX);
                              let colY = Math.ceil(valY);
                              let milX = Number( (colX-1)*cellSize + 45); 
                              let milY = Number( (colY-1)*cellSize + 45);
                              const numéroDeCase = (10*(colY-1)+(colX));
                              document.getElementById("mvtGrabber").value=numéroDeCase;
                              document.getElementById("demo").innerHTML = `VOTRE CASE DE DÉPART EST ${numéroDeCase}`;
                            if(globalGamePositions[Number(numéroDeCase-10)].color == "none"){ctx.fillStyle="Tomato";
                                                                                              ctx.beginPath();
                                                                                              ctx.arc(milX, milY-cellSize, 40, 0, Math.PI*2);
                                                                                              ctx.fill() }else{alert("MOUVEMENT IMPOSSIBLE");}
                            }
                              )}

                  
which();                                                           

 
  

function ncj() { let message = document.getElementById("demo");
                 message.innerHTML = `NOMBRE DE COUPS  : ${nbreDeCoupsJoués} `
                 nbreDeCoupsJoués += 1;                                         
                                                                                  }              


function Player() {
                     let joueur = document.getElementById("joueur");
                        if (nbreDeCoupsJoués % 2 == 0) {
                                                         tourDeJouer = couleursJoueurs[0];
                                                         } else { tourDeJouer = couleursJoueurs[1] }
                                                         joueur.innerHTML = `AUX ${tourDeJouer} DE JOUER `
                                                                                                                     }
                                                                                                                     
                                                                                                                     

                

function move(){
                let z = mvtGrabber;
                let nextCase = Number(z.value)+10;
                const contains = globalGamePositions [nextCase].color;  
                if(contains !== "none"){alert("MOUVEMENT IMPOSSIBLE")
              }else{document.getElementById("demo").innerHTML=globalGamePositions[nextCase].color;
                ctx.fillStyle = 'Tomato';
              ctx.arc(nextCase, 250, 550, 0, Math.PI*2);
            ctx.fill()}                                                                                                           
}

function moveB(){
  let z = mvtGrabber;
  let prevCase = Number(z.value-10);
  const containB = globalGamePositions [prevCase].color;  
  if(containB !== "none"){alert("MOUVEMENT IMPOSSIBLE");
}else{
  alert(containB);
  ctx.fillStyle = 'Silver';
ctx.arc(250, 250, 40, 0, Math.PI*2);
ctx.fill()}                                                                                                        
}


                                                                                                            

function GlobalInit(){InitialiseGrid();
    initPionsBlancs();
    initPionsBruns()}
 
  function PlayTheGame(){ncj();
                         Player();}                   
