if(player == "BLANCS"){ const contains = globalGamePositions [numéroDeCase + 10].color;
    if(contains !== "none"){alert("MOUVEMENT IMPOSSIBLE")
    }else{alert("BLANCS");
    MoveWhites();
    
    InitialiseGrid();
    
    console.log(globalGamePositions)}
    
    }else{
    
    const contains = globalGamePositions [numéroDeCase - 10].color;
    if(contains !== "none"){alert("MOUVEMENT IMPOSSIBLE")
    }else{alert("BRUNS");
    
    moveBrowns();
    handleAfterPlay();
    console.log(globalGamePositions) }}
    })}
    
    
    
    
    
    
    
    function MoveWhites(){                                            
    ctx.fillStyle ="Silver";
    ctx.beginPath();
    ctx.arc(milX, milY + cellSize, 40, 0, Math.PI*2);
    ctx.fill();
    globalGamePositions[numéroDeCase + 10] = "BLANCS";
    globalGamePositions[numéroDeCase] = "none";   }  
    
    function MoveBrowns(){
    ctx.fillStyle ="Maroon";
    ctx.beginPath();
    ctx.arc(milX, milY - cellSize, 40, 0, Math.PI*2);
    ctx.fill();
    globalGamePositions[numéroDeCase - 10] = "BRUNS";
    globalGamePositions[numéroDeCase] = "none"; 
                }                       
    function clean(){ ctx.clearRect(0, 0, canvas.width, canvas.height);} 
    
    MvtArray.unshift(numéroDeCase);
    const CaseArrivée = numéroDeCase + 10;
    MvtArray.push(CaseArrivée);
    console.log (MvtArray);
    document.getElementById("mvtGrabber").value = numéroDeCase ;
    if(nbreDeCoupsJoués){var dM = 10}else{var dM = -10}
document.getElementById("Arrvée").value = numéroDeCase + dM;
    alert(globalGamePositions[numéroDeCase].color)
    nbreDeCoupsJoués+=1;
    
    
    
    
                                                                   
    
    function FirstInit(){InitialiseGrid();
                         initPionsBlancs();
                         initPionsBruns()}
    
    function initPions(){initPionsBlancs();
                         initPionsBruns()}
     
      function playTheGame(){ncj();
                             Player();
                             move()
                                        }                   
                                                        
         