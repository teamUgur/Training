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

