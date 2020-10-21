
function randomInt(max) {
  return Math.floor (Math.random() * Math.floor(max));
}
function computerPlay() {
  let compNum = randomInt(3);
  let compPick = ""
  if ( compNum == 0 ) {
    return "rock";
  } else if ( compNum == 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }
console.log(randomInt(3));

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
 if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") { 
    return "You lose! Rock beats scissors.";
  } else if ( playerSelection === "paper" && computerSelection === "rock"){
    return "You win! Paper covers rock."
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper covers rock.";
} else if(playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors cut paper."; 
} else if(playerSelection === "paper" && computerSelection === "scissors") {
    alert ("You lose! Scissors cut paper."); 
} else {
    return " tied "
  } 
}
  

const playerSelection = window.prompt ("Do you pick Rock, Paper or Scissors?");
const computerSelection = computerPlay();

console.log (playRound ( playerSelection, computerSelection ));

let gamesWon = 0;
let gamesLost = 0;
let gamesPlayed = 1;

function game (playerPick) {
     let computerPick = computerPlay();
     computerPicked.textContent ="The wizard picked " + computerPick;
      res.textContent= (playRound(playerPick,computerPick));
      score.textContent= "You Won: " + gamesWon + "  You Lost: " + gamesLost + "  Games Played: " + gamesPlayed;
  if (playerSelection === "rock" && computerSelection === "scissors") {
    gamesWon +=1;
    gamesPlayed +=1;
    return "You win! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") { 
    gamesLost +=1;
    gamesPlayed +=1;
    return "You lose! Rock beats scissors.";
  } else if ( playerSelection === "paper" && computerSelection === "rock"){
    gamesWon +=1;
    gamesPlayed +=1;
    return "You win! Paper covers rock."
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    gamesLost +=1;
    gamesPlayed +=1;
    return "You lose! Paper covers rock.";
} else if(playerSelection === "scissors" && computerSelection === "paper") {
    gamesWon +=1;
    gamesPlayed +=1;
    return "You win! Scissors cut paper."; 
} else if(playerSelection === "paper" && computerSelection === "scissors") {
    gamesLost +=1;
    gamesPlayed +=1;
    alert ("You lose! Scissors cut paper."); 
} else {
    gamesPlayed +=1;
    return " tied "
  } 
}


rockButton= document.querySelector("#rockButton")
paperButton= document.querySelector("#paperButton")
scissorsButton= document.querySelector("#scissorsButton")
rockButton.addEventListener ('click',()=>{playerPicked.textContent ="You picked rock! Great choice for your weapon!"; game("rock")
   } );
paperButton.addEventListener ('click',()=>{playerPicked.textContent ="You picked paper! Best of luck..."; game("paper")
   } );
scissorsButton.addEventListener ('click',()=>{playerPicked.textContent ="You picked scissors! Let's see if they're sharp enough."; game("scissors")
   } );
let playerPicked= document.querySelector("#playerPicked");
let computerPicked = document.querySelector("#computerPicked");
let res= document.querySelector("#res");
let score= document.querySelector("#score");

if (gamesWon === 5){
 score.textContent = "Look at you go superstar!"; } else if (gamesLost == 5) { score.textContent = "Better luck next time.";}
