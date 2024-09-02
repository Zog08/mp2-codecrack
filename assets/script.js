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
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    console.log(el);
    gameArea.appendChild(el);
}