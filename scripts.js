

// vidéo commit git https://youtu.be/GVEJJQUDVz4 //
const canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 901;
canvas.height = 901;



//global vars : //
var nbreDePions = 10;
var nombreDeCases = 10;
var nbreDeCoupsJoués = 0;
var couleursJoueurs = ["BLANCS", "BRUNS"];
var ArrayPionsBlancs = [[45,45],[135,45],[225,45],[315,45],[405,45],[495,45],[585,45],[675,45],[765,45],[855,45]];
var ArrayPionsBruns  = [[45,856],[135,856],[225,856],[315,856],[405,856],[495,856],[585,856],[675,856],[765,856],[855,856]];
var cellSize = 90;
const vacantCase = { color : "none",  score:"none"}
const PionBlancs = { color : "white",  score:250}
const PionsBruns = { color : "brown", score:250}


var T = [{color : "brown", score : 250}, {color:"white" , score:295}]



//INITIALISATION DU JEU//

// Dessin du terrain //
// DESSIN DES CASES//
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
   

InitialiseGrid();



// Les Pions //
class Blanc{
    constructor(x, y){ this.x = x;
                       this.y = y;
                       this.radius = 40;
                       this.number = nbreDePions;
                                                    }
draw(){
    ctx.fillStyle = 'Silver';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.closePath;
    ctx.fill();
}}
function initPionsBlancs() {
                                pbArray = [];
                                for(let i = 0; i<nbreDePions; i++){
                                    let x = ArrayPionsBlancs[i][0];
                                    let y = 45
                                pbArray.push(new Blanc(x, y))
                                
                             }}
initPionsBlancs();

function dessinew(){
    for(let i = 0; i<pbArray.length; i++){
        pbArray[i].draw();
    }
    requestAnimationFrame(dessinew);
}
dessinew();


class Brun{
    constructor(x, y){ this.x = x;
                       this.y = y;
                       this.radius = 40;
                       this.number = nbreDePions;
                                                    }
draw(){
    ctx.fillStyle = 'Maroon';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.closePath;
    ctx.fill();
}}
function initPionsBruns() {
                                pnArray = [];
                                for(let i = 0; i<nbreDePions; i++){
                                    let x = ArrayPionsBruns[i][0];
                                    let y = 856
                                pnArray.push(new Brun(x, y))
                                
                             }}
initPionsBruns();

function dessineb(){
    for(let i = 0; i<pnArray.length; i++){
        pnArray[i].draw();
    }
    requestAnimationFrame(dessineb);
}
dessineb();

//JUSQU'ICI *Initialisation des Pions* //

//Compte des coups joués et couleur du joueur //
function ncj() {
    let message = document.getElementById("demo");

    message.innerHTML = `NOMBRE DE COUPS  : ${nbreDeCoupsJoués} `
    nbreDeCoupsJoués += 1;
}

function Player() {

    let joueur = document.getElementById("joueur");
    if (nbreDeCoupsJoués % 2 == 0) {
        tourDeJouer = couleursJoueurs[1];
    } else { tourDeJouer = couleursJoueurs[0] }
    joueur.innerHTML = `C'EST AUX ${tourDeJouer} DE JOUER `


}

// JUSQU'ICI INITIALISATION DU JEU //
// Jouer le coup//
let joueur = document.getElementById("joueur");
if (nbreDeCoupsJoués % 2 == 0) {
    tourDeJouer = couleursJoueurs[1];
} else { tourDeJouer = couleursJoueurs[0] }
joueur.innerHTML = `C'EST AUX ${tourDeJouer} DE JOUER `

//début joueuer//
var globalGamePositions = Array(80).fill(vacantCase);
for(let i=0; i<10; i++){
    globalGamePositions.unshift(PionBlancs);
globalGamePositions.push(PionsBruns)}


// Début code pour indiquer le mouvement //
/*function movement(){whichCase();
                    whichMove();} */
function moveH(){ window.addEventListener('keydown',  function(e){if(e.key == 'm'){console.log("coucou")
}else{console.log('not coucou')}
})}
   
  
              //garder la funct(e); écrire des conditions pour la dispo des cases de mouvements potentiels // 
              // move c'est quand on est dans le sens + du canvas et move back dans le sens <0 du canvas //     
   function playTour(){movement()}
   
   
   
   
              function movement(){ canvas.addEventListener('click', function detCase (e) {
        let valX = e.clientX;
        let valY = e.clientY;
        let QX = Math.ceil(valX/cellSize);
        let QY = Math.ceil(valY/cellSize);
        const numéroDeCase = (10*(QY-1)+(QX));
        document.getElementById("mvtGrabber").value=numéroDeCase;
        document.getElementById("demo").innerHTML = `VOTRE CASE DE DÉPART EST ${numéroDeCase}`})}

        function move(){  
        
            if(numéroDeCase>=91){alert("MOVE IS NOT POSSIBLE")
            }else{
           document.getElementById("demo").innerHTML = `CASE D'ARRIVÉE EST ${numéroDeCase + 1}`}}

playTour()
    function move(){  
        
         if(numéroDeCase>=91){alert("MOVE IS NOT POSSIBLE")
         }else{
        document.getElementById("demo").innerHTML = `CASE D'ARRIVÉE EST ${numéroDeCase + 1}`}}

        function moveB(){  
            canvas.addEventListener('click', function detCase (e) {
            let valX = e.clientX;
            let valY = e.clientY;
            let QX = Math.ceil(valX/cellSize);
            let QY = Math.ceil(valY/cellSize);
            const numéroDeCase = (10*(QY-1)+(QX));
             if(numéroDeCase<=10){alert("MOVE BACK IS NOT POSSIBLE")
             }else{
            document.getElementById("mvtGrabber").value=numéroDeCase;}})}
    
            function flipR(){  
                canvas.addEventListener('click', function detCase (e) {
                let valX = e.clientX;
                let valY = e.clientY;
                let QX = Math.ceil(valX/cellSize);
                let QY = Math.ceil(valY/cellSize);
                const numéroDeCase = (10*(QY-1)+(QX));
                 if(numéroDeCase %10 == 0){alert("FLIP RIGHT IS NOT POSSIBLE")
                 }else{
                document.getElementById("mvtGrabber").value=numéroDeCase;}})}
        
              /*  function flipL(){  
                    canvas.addEventListener('click', function detCase (e) {
                    let valX = e.clientX;
                    let valY = e.clientY;
                    let QX = Math.ceil(valX/cellSize);
                    let QY = Math.ceil(valY/cellSize);
                    const numéroDeCase = (10*(QY-1)+(QX));
                     if((numéroDeCase - 1) % 10 == 0){alert("FLIP LEFT IS NOT POSSIBLE")
                     }else{
                    document.getElementById("mvtGrabber").value=numéroDeCase;}})}
            */
              function flipL(){for (let pion of globalGamePositions) {
                console.log('Couleur de Pion ' + pion.color + ' avec un score de ' + pion.score);
                alert(globalGamePositions.length)
             }}
                    
      //CONTINUER Á LES FUNCTIONS POUR TOUS LES MOUVEMENTS //                  
                  
    
       // function MOVE() //                                          
        
                                          

 
                                                                                                
                                                                                                                                
     
                                                                                                                         

                                                        
                                                        
                                                           
                                                        
  //ATTENTION PRIMORDIAL CHANGER LE SIGNE CAR SELON LA COULEUR LE SENS DE MOUVEMENT EST INVERSE //                                                                          alert (globalGamePositions[((QX-1)+ (QY)*10)])})


//depuis case = 10(QY-1) + (QX) ==> case de résultat move = 10(QY)+(QX) //
// POUR VÉRIFIER QUE JUMP EST POSSIBLE IL FAUT VÉRIFIER LES 2 CAS AVEC +1 ET -1  //
// pour jump si sur case 10(QY-1) + (QX) il faut case 10(QY) + [(QX)+1] ou 10(QY) + [QX-1] occupée par autre couleur et on saute à 10(QY+1) + (QX+1) //
                       
// MOVE PASSAGE DE CASE N 0 CASE N+10 //
// JUMP ON EST EN CASE N ON VOIT SI N+10-1 OU N+10+1 SONT OCCUPÉS ET SI OUI ON ARRIVE SUR LA CASE EN REFAISANT +10 +1 //
// Les mouvements sont vers l'avant move, vers l'arriére backmove, latéral = flip ==< flip right et flip left,> et jump en mangeant 



    
    
//vérifier les length des tableau pour savoir s'il reste des pions //

// BOUCLE DE JEU : initialize Grid, Initialise Pions, numéro de coups, tour de jouer, cliquer sur case à jouer, cliquer sur case de déstination //
// BOUCLE DE JEU dessinTerrain dessinPions  ncj()  player()/ /
