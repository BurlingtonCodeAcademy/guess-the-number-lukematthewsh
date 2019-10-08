

var number = Math.floor(Math.random() * 100 + 1)
//guess variable to store the guessed number by user
var guess
//output to store output to the user
var output
//if the user guessed the number or not, initialize it to false
var guessed = false

//do/while loop, while condition is based on if the user NOT guessing the number (e.g. guessed == false)
pizza()
async function pizza(){
guess = await ask("Think of a number between 1 and 100, what is your number?");
if (guess > number) {
  console.log("You guessed too high, think smaller");
  guessed = false
} else if (guess < number) {
  console.log("You guessed too low, think bigger");
  guessed = false
} else {
  console.log("You guessed the right number!")
 
}
}
while (guessed === false){

}

