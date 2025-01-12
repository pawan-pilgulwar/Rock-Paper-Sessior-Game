let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const CompChoice = options[Math.floor(Math.random()*3)];
    return CompChoice;
}

const drawGame = () => {
    console.log("Game was Draw.")
    msg.innerText = "The game was draw. Play Again."
    msg.style.backgroundColor = "gray";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin===true){
        userScorePara.innerText = `${++userScore}`; 
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScorePara.innerText = `${++compScore}`;
        msg.innerText = `You Loss! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const CompChoice = getCompChoice(); 

    if(CompChoice === userChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = CompChoice==="paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = CompChoice==="scissor" ? false : true;
        } else if(userChoice === "scissor"){
            userWin = CompChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,CompChoice);   
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});