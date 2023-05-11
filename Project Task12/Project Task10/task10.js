const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput == "bomb"){
        return userInput;
    }else{
        console.log("Your choice is not valid!");
    }
}
let choices = ["Rock","Paper","Scissor"];
const getComputerChoice = () =>{
    return choices[Math.floor(Math.random()*3)];
}

function determineWinner(userChoice,computerChoice){
    if(userChoice === computerChoice){
        return "The game is tie";
    }else if(userChoice === "rock" && computerChoice === "paper"){
        return "Computer Won";
    }else if(userChoice === "paper" && computerChoice === "rock"){
        return "You Won";
    }else if(userChoice === "paper" && computerChoice === "scissors"){
        return "Computer Won";
    }else if(userChoice === "scissors" && computerChoice === "paper"){
        return "You Won";
    }else if(userChoice === "rock" && computerChoice === "scissors"){
        return "You Won";
    }else{
        return "Computer Won";
    }
}

function playGame(){
    let userChoice = getUserChoice("rock");
    let computerChoice = getComputerChoice();
    if(userChoice === "bomb"){
        console.log("You Won");
        return;
    }
    console.log("user choice is : "+userChoice+"\n");
    console.log("computer choice is :"+computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
}

playGame();