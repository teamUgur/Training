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

function selectItem(item) {
    //case id like item === 'coffee' and etc...
    let price = 0
    switch(item) {
        case 'coffee':
            price = 2
            break
        case 'salad':
            price = 4
            break
        case 'lemon cake':
            price = 3
            break
        default: // if didnt match any case
            return `Sorry, we dont sell ${item}`
    }
    return `You selected ${item}. That will be ${price}$`
}

// Object Destructuring

const favouriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
}

const {title, year, genre, star, director} = favouriteFilm // instead of using different variables with a lot of const
console.log(`It is about ${title}, ${year}, ${genre}, ${star}, ${director}`)

// setTimeout

function displayLight(light) {
    console.log(light)
}

setTimeout(displayLight, 3000, "🟢") // will be output after 3 seconds
displayLight("🔴") // immediately output

// The Date() Constructor
// Constructors give objects

// TWO types of constructor
// INBUILT - provide objects in various predetermined formats like Date objects, error objects and other for each data type
// CUSTOM - we can design oursekves to produce objects for our own specific purposes

// Date constructor
const dateSnapshot = new Date() // inbuilt constructor always starts with upper-case letter (Date())
console.log(dateSnapshot) // output: 2025-11-01T05:00:49.088Z
console.log(dateSnapshot.toString()) // Sat Nov 01 2025 08:02:39 GMT+0300 (Moscow Standard Time)
console.log(typeof dateSnapshot) // object

const newDateSnapshot = new Date()
console.log(newDateSnapshot.getFullYear()) // 2025 - only year

// Error constructor
function checkUsername(username) {
    if (username) {
        console.log(username)
    } else {
        console.log(new Error('No username provided')) // without it, we will get undefined
        throw new Error('No username provided') // after error - code will break
    }
}

checkUsername()

// We also have this constructors:
String()
Number()
Array()
Object()
Boolean()