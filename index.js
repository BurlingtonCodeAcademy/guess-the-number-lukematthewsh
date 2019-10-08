const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}


start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);

  function compGuess(max, min) {

    return (min) + Math.floor(Math.random() * (max - min))

  }
  game()
  async function game() {
    let max = 100
    let min = 1
    let turns = 0;

    console.log("Okay computer give it your best shot!\nGuess a number between 1 and 100!")
    let guess = compGuess(max, min)
    let playerAnswer = await ask("Is your number " + guess + "?")

    while (playerAnswer !== "yes") {
      guess = compGuess(max, min)
      playerAnswer = await ask("Is your number " + guess + "?")

      turns = turns + 1
      if (guess > secretNumber) {
        console.log("Too High! Guess again!")
        max = guess
      } else if (guess < secretNumber) {
        console.log("Too low! Guess again!")
        min = guess + 1
      } else {
        console.log("Great job it only took you " + turns + " tries!")
        process.exit()
      }
    }
  }

}



