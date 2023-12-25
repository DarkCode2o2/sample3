// Letters 
let letters = "abcdefghijklmnopqrstuvwxyz"

let lettersArray = Array.from(letters)

let lettersContainer = document.querySelector(".letters")

lettersArray.forEach(letter => {
    
    // Create Span 
    let mainSpan = document.createElement("span")

    // Create Letter Text Node 
    let textLetter = document.createTextNode(letter)

    // Append It To Span 
    mainSpan.appendChild(textLetter)
    mainSpan.className = "letters-box"

    // Append The Span To Our container 
    lettersContainer.appendChild(mainSpan)
})

// Object Of Word + Category

let words = {
    programming : ["php", "javaScript", "go", "swift", "dart", "java", "scala", "python"],
    movies: ["mrRobot", "prison break", "la casa de papel", "dont make me go"],
    people: ["Ludwig van Beethoven", "Joan of Arc", "James Cook", "Malcom X", ],
    countries: ["Iraq", "Saudi Arabia", "Palestine", "Egypt", "Syria", "Qatar"]
}

// Get Random Property

let allKeys = Object.keys(words)

// Random Number Depend On Keys
let randomPropNumber = Math.floor(Math.random() * allKeys.length)

// Category 
let randomPropName = allKeys[randomPropNumber]

// Category Words
let randomPropValue = words[randomPropName]

// Random Number Depend On Words
let randomWord = Math.floor(Math.random() * randomPropValue.length)

// The Choosen Word
let randomValueValue = randomPropValue[randomWord]
console.log(randomValueValue);
document.querySelector(".category span").innerHTML = `${randomPropName}`

// Select letters Guess
let guessLetters = document.querySelector(".letters-guess")

let letterAndSpace = Array.from(randomValueValue)
letterAndSpace.forEach(letter => {

    // Create Span And Put it On it
    let spanChar = document.createElement("span")

    if (letter == ' ') {
        spanChar.className = "has-space"
    }

    // Append All Span To Guess Container
    guessLetters.appendChild(spanChar)
})

let lettersGuess = document.querySelectorAll(".letters-guess span")

let letters2 = document.querySelector(".letters-guess");

let hangmanDraw = document.querySelector(".hangman-draw")

let wrongAttempts = 0;

// Handle Clicking On Letters 
document.addEventListener("click", (e) => {
    let theStatus = false
    if (e.target.className == "letters-box") {

        e.target.classList.add("clicked")

        let theChosenWord = Array.from(randomValueValue.toLowerCase())

        // Get clicked Letter 
        let clickedLetter = e.target.innerHTML.toLowerCase()
        

        // Loop On chosen Word
        theChosenWord.forEach((letterWord, wordIndex) => {
            if (clickedLetter == letterWord) {
                lettersGuess.forEach((span, spanIndex) => {
                    theStatus = true;
                    if (wordIndex === spanIndex) {

                        span.innerHTML = clickedLetter
                    }
                })

            }
        })

        // Edited by Waleed
        var letters_from_user = '';
        for (var letter of lettersGuess){
            letters_from_user += letter.textContent.trim()
        }
        console.log(letters_from_user)
    
        if (randomValueValue.toLowerCase().replaceAll(' ','') == letters_from_user){
            document.getElementById("win-game").play()

            let div = document.createElement("div")
            let button = document.createElement("button")

            button.innerHTML = 'Rematch'

            div.innerHTML = `Congratulations You Win After ${wrongAttempts} mistakes`

            div.classList = "failed-div"

            div.appendChild(button)
            document.body.appendChild(div)

            console.log(button)
            button.onclick = function() {
                document.location.reload()
            }

        }



        if (theStatus !== true) {
            wrongAttempts++;
            if (wrongAttempts == 8) {
                lettersContainer.classList.add("game-over")
                failed()
            }
            hangmanDraw.classList.add(`wrong-${wrongAttempts}`)

            document.getElementById("failed").play()

        }else {
            document.getElementById('success').play()
        }
    }
   
})

// Function failed
function failed() {
    document.getElementById("game-over").play()

    let div = document.createElement("div")
    let button = document.createElement("button")

    button.innerHTML = 'Rematch'

    div.innerHTML = `Sorry, You are Failed The Word was:  <span> ${randomValueValue}</span>`

    div.classList = "failed-div"

    div.appendChild(button)
    document.body.appendChild(div)

    console.log(button)
    button.onclick = function() {
        document.location.reload()
    }
}



