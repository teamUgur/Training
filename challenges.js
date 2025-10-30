// TERNARY OPERATOR challenge

const playerGuess = 3
const correctAnswer = 6

const message = playerGuess === correctAnswer ? 'Correct!'  : correctAnswer > playerGuess ? 'Too low' : 'To high'
console.log(message)

// Object Destructuring challenge

const dreamHoliday = {
    destination: 'USA',
    activity: 'sport',
    accommodation: '1-room flat',
    companion: 'James'
}

const {destination, activity, accommodation, companion} = dreamHoliday
console.log(`It is about ${destination}, ${activity}, ${accommodation}, ${companion}`)

// setTimeout challenge

function logAnswer(answer, points) {
    console.log(`The answer is ${answer} of course. It gave you ${points} points`)
}

console.log("What is the capital of Peru?")
setTimeout(logAnswer, 3000, 'Lima', 10)
