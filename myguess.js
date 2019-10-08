const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

cpuTest()

async function cpuTest() {

    function cpuNum(max) {
    return Math.floor(Math.random() * Math.floor(max))
    }
    
    console.log("Now that I guessed your number try to guess mine!")
    let cpuSecretNumber = cpuNum(100)
    let turns = 0
    let myGuess = await ask("Guess a number between 1 and 100");
        console.log("Your guess is " +myGuess)
    while (myGuess !== cpuSecretNumber){
        myGuess = await ask("Guess another number! ")
        turns = turns + 1
        if (myGuess > cpuSecretNumber) {
            console.log("Too High guess again! ");
        } else if (myGuess < cpuSecretNumber) {
            console.log("Too low guess again! ");
        } else {
            console.log("Congrats you got my number in " + turns + " tries")
            process.exit()
        }
    }
}
