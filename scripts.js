// Mon IP :78.192.226.69//
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
const unnocupiedCase = globalGamePositions[i] == null;





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
class Pions{
    constructor(x, y, color){  this.x = x;
                                        this.y = y;
                                        this.radius = 40;
                                        this.color = color; }
 draw() {
            { ctx.fillStyle = "this.color";
              ctx.arc(ArrayPionsBlancs[i][0], 45, 40, 0, 2 * Math.PI);
              ctx.fill()
                                                }}
                                            

update(){}
                                        }

                            

                        
 function InitializePions(){
                                for(i=0; i<nbreDePions; i++){
                                    let PionsBruns = new Pions(ArrayPionsBlancs[i][0], 45, 'Silver'); 
                                    let PionsBlancs = new Pions (ArrayPionsBruns[i][0], 45, 'Maroon');
                                    PionsBlancs.draw;
                                    PionsBruns.draw;}}
    InitializePions();              
 //  selectThisPion() { trouver une fonction pour sélectionner les pions// 

    

// *Initialisation des Pions* //

// 1) Création des Pions //
var pionsW = [];
var pionsB = [];
var w = [];
var b = [];
var g = [];
var t =[[1,5], [2,5]]
for(let i in t){console.log(t[0][0])}
for (let i = 0; i < 10; i++) {
    w.unshift("W");
    b.push("B");
}
for (let i = 0; i < 80; i++) { g[i] = "null"; }
var globalGamePositions = w.concat(g).concat(b);


for (let i = 0; i < 10; i++) {
                                 pionsW.unshift("W");
                                 pionsB.unshift("B");
                                                         }


function updatePions() {
    let textw = [];
    let textb = [];


    // 2) Dessin des Pions //
    for (let i = 0; i < 10; i++) {


        textw.push(45 + i * 90);
        textb.push(45 + i * 90);
        ctx.fillStyle = "Silver";
        ctx.beginPath();
        ctx.arc(textw[i], 45, 38, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "Aqua";
        ctx.beginPath();
        ctx.arc(textw[i], 856, 38, 0, 2 * Math.PI);


        ctx.fill();



    }

}

updatePions();

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

                        canvas.addEventListener('click', function detCase (e) { let valX = e.clientX;
                                                                                let QX = Math.ceil(valX/cellSize);
                                                                                let valY = e.clientY;
                                                                                let QY = Math.ceil(valY/cellSize);
                                                                                alert(10*(QY-1)+(QX)) })
  //ATTENTION PRIMORDIAL CHANGER LE SIGNE CAR SELON LA COULEUR LE SENS DE MOUVEMENT EST INVERSE //                                                                          alert (globalGamePositions[((QX-1)+ (QY)*10)])})

// vérifier la meilleur formule avec floor ou ceil //
//depuis case = 10(QY-1) + (QX) ==> case de résultat move = 10(QY)+(QX) //
// POUR VÉRIFIER QUE JUMP EST POSSIBLE IL FAUT VÉRIFIER LES 2 CAS AVEC +1 ET -1  //
// pour jump si sur case 10(QY-1) + (QX) il faut case 10(QY) + [(QX)+1] ou 10(QY) + [QX-1] occupée par autre couleur et on saute à 10(QY+1) + (QX+1) //
                       
// MOVE PASSAGE DE CASE N 0 CASE N+10 //
// JUMP ON EST EN CASE N ON VOIT SI N+10-1 OU N+10+1 SONT OCCUPÉS ET SI OUI ON ARRIVE SUR LA CASE EN REFAISANT +10 +1 //




    
    
//vérifier les length des tableau pour savoir s'il reste des pions //

// BOUCLE DE JEU : initialize Grid, Initialise Pions, numéro de coups, tour de jouer, cliquer sur case à jouer, cliquer sur case de déstination //
// BOUCLE DE JEU dessinTerrain dessinPions  ncj()  player()/ /
