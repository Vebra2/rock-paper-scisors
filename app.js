const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click',(e) => {
 userChoice = e.target.id
 yourChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
 getResult()
})) 

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'scisors'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice=== userChoice) {
       result = 'its a draw'
    }
    if (computerChoice=== 'rock' && userChoice === "paper") {
       result = 'you win'
    }
    if (computerChoice=== 'rock' && userChoice === "scisors") {
       result = 'you lose'
    }
    if (computerChoice=== 'paper' && userChoice === "scisors") {
       result = 'you win'
    }
    if (computerChoice=== 'paper' && userChoice === "rock") {
       result = 'you lose'
    }
    if (computerChoice=== 'scisors' && userChoice === "paper") {
       result = 'you lose'
    }
    if (computerChoice=== 'scisors' && userChoice === "rock") {
       result = 'you win'
    }
    resultDisplay.innerHTML = result
}