// Get the game parts and elements and assign them to variables
const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
let gamePlay = false;
    // when game button is clicked for the first time, change the text to reflect game in play
button.addEventListener("click", function(){
    if(!gamePlay){
        gamePlay = true;
        maker();
        button.innerHTML = "Check Code Combination"
    }else{
        console.log("checker");
    }
})

// create combo input area, append it to game area when button is clicked
function maker(){
for(let i=0; i<4; i++){
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.max = 3;     // -------------------- set max value of 3 for each number, EASY level
    el.min = 0;     // -------------------- set min value to 0
    el.order = i;   // -------------------- to create the for loop to make 4 inputs
    el.size = 1;    // -------------------- only single digit numbers allowed
    el.style.width = "50px";
    el.classList.add("number");
       // -------------------- default value on load as 0
    el.correct = Math.floor(Math.random()*4)
    el.value = el.correct;
    console.log(el);
    gameArea.appendChild(el);
    }
}