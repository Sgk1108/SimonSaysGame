let gameSeq =[];
let userSeq=[];
let h2=document.querySelector("h2");
let btns=["red","yellow","green","purple"];
let started=false;
let level = 0;


document.addEventListener("keypress",function(){ //Starting game by pressing any key on the keyboard
    if(started==false){
        console.log("Game started") ;
        started=true; 
        levelUp();
    }
});

function gameFlash(btn){   //function to flash a button
    btn.classList.add("gameflash");
   
    setTimeout(function() { btn.classList.remove("gameflash")},400);
}

function userFlash(btn){   //function to flash a button
    btn.classList.add("userflash");
    setTimeout(function() { btn.classList.remove("userflash")},300);
}

function levelUp(){  // function for generating random button and uptading the level
       userSeq=[];    //user sequence
       level++;
       h2.innerText = `Level ${level}`
       let ranIdx = Math.floor(Math.random()*3);
       let randcolor =btns[ranIdx];
       let randbtn = document.querySelector(`.${randcolor}`)
       gameFlash(randbtn );
       gameSeq.push(randcolor);
       console.log(gameSeq);
}

function checkAns(idx){     //checks answer and calls levelUp() if userSeq is correct
    // console.log("Current level:",level);
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
      h2.innerHTML = `Game over! Your score was <b>${level}<b> <br> Press any key to Restart the Game`;
      bdy=document.querySelector("body");
      bdy.style.backgroundColor="red";
      setTimeout(function(){
        bdy.style.backgroundColor="rgb(37, 38, 36)"},150);
      reset();
    }
}

function btnPress(){        //after clicking button it Flashes,calling checkAns()
    let btn = this;        // "this" means the button clicked by user
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);  //here we are passing the index of userseq array
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
     gameSeq =[];
     userSeq=[];
    level=0;
}