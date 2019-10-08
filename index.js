const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}


start();

async function start() {
  console.log("\nLet's play a game where you make up a number and I try to guess it.")
  let secretNumber = await ask("\nWhat is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);

  function compGuess(max, min) {

    return (min) + Math.floor(Math.random() * (max - min))

  }
  game()
  async function game() {
    let max = 100
    let min = 1
    let turns = 0;

    console.log("\nOkay computer give it your best shot!\nGuess a number between 1 and 100!")
    let guess = compGuess(max, min)
    let playerAnswer = await ask("Is your number " + guess + "?")

    while (playerAnswer !== "yes") {
      guess = compGuess(max, min)
      playerAnswer = await ask("Is your number " + guess + "?")

      turns = turns + 1
      if (guess > secretNumber) {
        console.log("Too High! Guess again!\n")
        max = guess
      } else if (guess < secretNumber) {
        console.log("Too low! Guess again!\n")
        min = guess + 1
      } else {
        console.log("\nGreat job it only took you " + turns + " tries!")
        cpuTest()
      }
    }
  }


  async function cpuTest() {

    function cpuNum(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }

    console.log("\nNow that I guessed your number try to guess mine!")
    let cpuSecretNumber = cpuNum(100)
    let tries = 0
    let myGuess = await ask("Guess a number between 1 and 100");
    console.log("Your guess is " + myGuess)
    while (myGuess !== cpuSecretNumber) {
      myGuess = await ask("Guess another number! ")
      tries = tries + 1
      if (myGuess > cpuSecretNumber) {
        console.log("Too High guess again! ");
      } else if (myGuess < cpuSecretNumber) {
        console.log("Too low guess again! ");
      } else {
        console.log("Congrats you got my number in " + tries + " tries")
        process.exit()
      }
    }
  }


}



