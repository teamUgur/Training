// TERNARY OPERATOR
// condition ? expression : expresion

const exerciseTimeMins = 70
let message = ""

exerciseTimeMins < 30 ? message = 'You need to try harder' : message = 'Doing good!'
console.log(message)
// you also can do it by if and else, but sometimes ternary operator is better and shorter

const messageTwo = exerciseTimeMins < 30 ? 'You need to try harder' : 'Doing good!'
console.log(messageTwo)
// Writing it in this way is even better

// More difficult conditions (3 conditions)
const messageThree = exerciseTimeMins < 30 ? 'You need to try harder' : exerciseTimeMins < 60 ? 'Doing good!' : 'Excellent!'
console.log(messageThree) // but for big conditions it is better to use if and else

// SWITCH STATEMENTS


