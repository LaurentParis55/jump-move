const canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 901;
canvas.height = 901;

var nbreDePions = 10;
var nombreDeCases = 10;
var nbreDeCoupsJoués = 1;
var playerColor = ["BLANCS", "BRUNS"];
var globalGamePositions = [];
var cellSize = 90;
var nombreDeCoups = 1;
var message = document.getElementById("demo");
var joueur = document.getElementById("joueur");
var player
const vacantCase = { color : "none",  score:"none"}
const PionBlancs = { color : 'Silver',  score:250}
const PionsBruns = { color : 'Maroon', score:250}
const cond = nbreDeCoupsJoués % 2 == 0;

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
   




class Pions {
              constructor(x, y, color, score, det){ this.x = x;
                                               this.y = y;
                                               this.color = color;
                                               this.score = 100;
                                               this.det = det;    }

    draw(){  ctx.fillStyle = this.color;
             ctx.beginPath();
             ctx.arc(this.x, this.y, 40, 0, Math.PI*2);
             ctx.fill();
             ctx.closePath}
                            
            
    move(){                                             
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(milX, milY + cellSize, 40, 0, Math.PI*2);
                ctx.fill(); }
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

 
                             
//  TERRAIN INITIALISÉ //
                          

         
// FAIRE LA BOUCLE DE JEU //


// donne le joueur et le nombre de coups //
function ncjPlayer() {
                        

   message.innerHTML = `NOMBRE DE COUPS  : ${nbreDeCoupsJoués} `;
   
   if(nbreDeCoupsJoués % 2 == 0){player = playerColor[1];
  }else{player = playerColor[0]; }
  joueur.innerHTML = `AUX ${player} DE JOUER `;
  

    
  }
  
  
                                   
 
   function movement(){ canvas.addEventListener('click', function(e) {
    let valX = e.clientX/cellSize;
    let valY = e.clientY/cellSize;
    let colX = Math.ceil(valX);
    let colY = Math.ceil(valY);
    let milX = Number( (colX-1)*cellSize + 45); 
    let milY = Number( (colY-1)*cellSize + 45);
    let z = mvtGrabber;
    const numéroDeCase = (10*(colY-1)+(colX));
    if( nbreDeCoupsJoués %2 == 0 ){discr = numéroDeCase - 10
    }else{discr = numéroDeCase + 10}
    const contains = globalGamePositions[discr];
    
  ncjPlayer();
  console.log(contains);
  if(contains.color == 'none' && nbreDeCoupsJoués % 2 == 0){    ctx.fillStyle = PionBlancs.color;
                                                                ctx.beginPath();
                                                                ctx.arc(milX, milY + cellSize, 40, 0, Math.PI*2);
                                                                ctx.fill();
                                                                globalGamePositions[numéroDeCase + 10] = "BLANCS";
                                                                globalGamePositions[numéroDeCase] = "none";

} else if (contains.color == 'none' && nbreDeCoupsJoués % 2 !== 0) { ctx.fillStyle = PionsBruns.color;
    ctx.beginPath();
    ctx.arc(milX, milY + cellSize, 40, 0, Math.PI*2);
    ctx.fill();
    globalGamePositions[numéroDeCase - 10] = "BRUNS";
    globalGamePositions[numéroDeCase] = "none";

}else{
         alert("MOUVEMENT IMPOSSIBLE")}
  nbreDeCoupsJoués+=1
                                                                      })}

                                                                       
                                                                     
                                                               

function FirstInit(){InitialiseGrid();
                     initPionsBlancs();
                     initPionsBruns()
                     ncjPlayer();
                     movement()}

function initPions(){initPionsBlancs();
                     initPionsBruns()}
 
  function playTheGame(){ncj();
                         Player();
                         move()
                                    }                   
                                                    
     
     
                                                                                           
     


