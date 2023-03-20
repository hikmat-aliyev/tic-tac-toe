const boardModule = (function() {

    let gameboard = [];
    
    return {
        gameBoardFunction: function() {
            return gameboard;
        },
        gameboardArray: gameboard
    };
})();
   

function player(name, score) {
    return {
        name: name,
        score: score
    }
}
const player1Name = document.getElementById("player1").value;
const player2Name = document.getElementById("player2").value;
const playersInfoInterface = document.querySelector(".players-info");
const player1 = player(player1Name, 0);
const player2 = player(player2Name, 0);
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const submitButton = document.getElementById("submit-button");
if(!player1.name){
    playersInfoInterface.style.display = "block";
    document.querySelector(".names-scores-div").style.display = "none";
}

submitButton.addEventListener("click", () => {
    playersInfoInterface.style.display = "none";
    player1.name = document.getElementById("player1").value;
    player2.name = document.getElementById("player2").value;
    document.querySelector(".names-scores-div").style.display = "block";
    document.getElementById("player1-label").textContent = player1.name;
    document.getElementById("player2-label").textContent = player2.name;
    score1.value = "0";
    score2.value = "0";
    console.log(player1.name);
    console.log(player2.name);
})

const buttonsContainer = document.querySelector(".button-container");
const buttons = buttonsContainer.querySelectorAll("button");
let buttonArray = boardModule.gameboardArray;

function contentOfButton() {

    for(i in buttonArray) {
        if(i % 2 === 0 && !buttonArray[i].textContent) {
            buttonArray[i].textContent = "X";
            buttonArray[i].disabled = true;  
            buttonArray[i].blur();
        } if(i % 2 !== 0 && !buttonArray[i].textContent) {
            buttonArray[i].textContent = "0";
            buttonArray[i].disabled = true;
        }
    }
}

buttons.forEach(button => {

    button.addEventListener("click", function() {

        buttonArray.push(button);
        console.log(buttonArray);
        contentOfButton();
        gameStatus();
    })
})

const statusOfGame = document.getElementById("game-status");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");


function gameStatus () {


    if(button1.textContent === button2.textContent && button1.textContent === button3.textContent) {
        if(button1.textContent === "X") {
            if(score1.value == 2) {
                score1.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player1.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else{
                statusOfGame.textContent =  `${player1.name} wins!`;
                statusOfGame.style.display = "block";
                score1.value ++;
            }
        } 
        
        else if(button1.textContent === "0") {
            if(score2.value == 2) {
                score2.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player2.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else {
                statusOfGame.textContent = `${player2.name} wins!`
                statusOfGame.style.display = "block";
                score2.value++;
            }
        }
    } 
    if(button4.textContent === button5.textContent && button4.textContent === button6.textContent) {
        if(button4.textContent === "X") {
            if(score1.value == 2) {
                score1.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player1.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else{
                statusOfGame.textContent = `${player1.name} wins!`;
                statusOfGame.style.display = "block";
                score1.value ++;
            }
        }
         else if(button4.textContent === "0") {
            if(score2.value == 2) {
                score2.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player2.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else {
                statusOfGame.textContent = `${player2.name} wins!`
                statusOfGame.style.display = "block";
                score2.value++;
            }
        }     
    }
    if(button7.textContent === button8.textContent && button7.textContent === button9.textContent) {
        if(button7.textContent === "X") {
            if(score1.value == 2) {
                score1.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player1.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else{
                statusOfGame.textContent = `${player1.name} wins!`;
                statusOfGame.style.display = "block";
                score1.value ++;
            }
        } else if(button7.textContent === "0") {
            if(score2.value == 2) {
                score2.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player2.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else {
                statusOfGame.textContent = `${player2.name} wins!`
                statusOfGame.style.display = "block";
                score2.value++;
            }
        }     
    }
    if(button1.textContent === button4.textContent && button1.textContent === button7.textContent) {
        if(button1.textContent === "X") {
            if(score1.value == 2) {
                score1.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player1.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else{
                statusOfGame.textContent = `${player1.name} wins!`;
                statusOfGame.style.display = "block";
                score1.value ++;
            }
        } else if(button1.textContent === "0") {
            if(score2.value == 2) {
                score2.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player2.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else {
                statusOfGame.textContent = `${player2.name} wins!`
                statusOfGame.style.display = "block";
                score2.value++;
            }
        }    
    }
    if(button2.textContent === button5.textContent && button2.textContent === button8.textContent) {
        if(button2.textContent === "X") {
            if(score1.value == 2) {
                score1.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player1.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else{
                statusOfGame.textContent = `${player1.name} wins!`;
                statusOfGame.style.display = "block";
                score1.value ++;
            }
        } else if(button2.textContent === "0") {
            if(score2.value == 2) {
                score2.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player2.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else {
                statusOfGame.textContent = `${player2.name} wins!`
                statusOfGame.style.display = "block";
                score2.value++;
            }
        }
          
    }
    if(button3.textContent === button6.textContent && button3.textContent === button9.textContent) {
        if(button3.textContent === "X") {
            if(score1.value == 2) {
                score1.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player1.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else{
                statusOfGame.textContent = `${player1.name} wins!`;
                statusOfGame.style.display = "block";
                score1.value ++;
            }
        } else if(button3.textContent === "0") {
            if(score2.value == 2) {
                score2.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player2.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else {
                statusOfGame.textContent = `${player2.name} wins!`
                statusOfGame.style.display = "block";
                score2.value++;
            }
        }     
    }
    if(button1.textContent === button5.textContent && button1.textContent === button9.textContent) {
        if(button1.textContent === "X") {
            if(score1.value == 2) {
                score1.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player1.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else{
                statusOfGame.textContent = `${player1.name} wins!`;
                statusOfGame.style.display = "block";
                score1.value ++;
            }
        } else if(button1.textContent === "0") {
            if(score2.value == 2) {
                score2.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player2.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else {
                statusOfGame.textContent = `${player2.name} wins!`
                statusOfGame.style.display = "block";
                score2.value++;
            }
        }       
    }
    if(button3.textContent === button5.textContent && button3.textContent === button7.textContent) {
        if(button3.textContent === "X") {
            if(score1.value == 2) {
                score1.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player1.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else{
                statusOfGame.textContent = `${player1.name} wins!`;
                statusOfGame.style.display = "block";
                score1.value ++;
            }
        } else if(button3.textContent === "0") {
            if(score2.value == 2) {
                score2.value++;
                statusOfGame.style.display = "block";
                statusOfGame.textContent = `Game over! ${player2.name} won!`
                score1.value = 0;
                score2.value = 0;
            } else {
                statusOfGame.textContent = `${player2.name} wins!`
                statusOfGame.style.display = "block";
                score2.value++;
            }
        }  
    }
    if(button1.textContent && button2.textContent && button3.textContent
         && button4.textContent && button5.textContent && button6.textContent
          && button7.textContent && button8.textContent && button9.textContent){
        statusOfGame.textContent = "It's a tie!";
        statusOfGame.style.display = "block";
    }

}

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", () => {
    buttonArray.forEach(button => {
        button.textContent = "";
        button.disabled = false;  

    })
    buttonArray = [];
    statusOfGame.textContent = "";
    
})

statusOfGame.addEventListener("click", () => {
    
    statusOfGame.style.display = "none";
    buttonArray.forEach(button => {
        button.textContent = "";
        button.disabled = false;  
    });
    buttonArray = [];
})


if(score1.value === 3) {
    statusOfGame.textContent = "Game over! Player1 won!"
    score1.value = 0;
    score2.value = 0;
}
if(score2.value === 3) {
    statusOfGame.textContent = "Game over! Player2 won!"
    score1.value = 0;
    score2.value = 0;
}