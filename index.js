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

  function compGuess(max) {
    return (Math.floor(Math.random() * Math.floor(max)))

  }
  game()
  async function game() {
    let turns = 0
    console.log("Okay computer give it your best shot!\nGuess a number between 1 and 100!")
    let guess = compGuess(100)
    console.log("You guessed " + guess);

    if (guess > secretNumber) {
      console.log("Too High! Guess again!")
    } else if (guess < secretNumber) {
      console.log("Too low! Guess again!")
    } else {
      console.log("Great job you only took" + turns++ + "tries!")
    }
  }
}


process.exit();


