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

// Question and ANSWER after 5 seconds if stop = cancell
const startBtn = document.getElementById("start-btn").addEventListener("click", render)
const stopBtn = document.getElementById("stop-btn").addEventListener("click", stopAsnwer)
const text = document.getElementById("text")

function render() {

    text.innerHTML += `
        What is the capital of Peru?
    `

    if (stopBtn) {
        stopAsnwer()
    } else {
        logAnswer()
    }
}

const questionTimer = setTimeout(function() { // Pay attention on this structure !!!
    text.innerHTML += `
        <p>
            The answer is Lima of course. It gave you 10 points
        </p>
    `}, 5000)

function stopAsnwer() { // setTimeout with button
    clearTimeout(questionTimer) // clearTimeout - cancell button click, removes timer
    text.innerHTML += `
            <p>
                Cancelling...
            </p>
        `
}

function logAnswer() {
    return questionTimer
}



