
let keyBoard = document.querySelector('.keyboard')
let keyboardKeys = document.querySelectorAll('.key')
let startButton = document.querySelector('.startGame')
let resetButton = document.querySelector('.resetGame')
let soloButton = document.querySelector('.soloGame')
let slots = document.querySelector('.blankSpots')
let blankCharacter = []
let word = ''
let correctChoices = [] //array will hold correct letters
let wrongChoices = [] //gonna use this array to hold all the letters they use that are incorrect
let wrongGuesses = 0
const image = document.querySelector('.manImage').src



//initializes board and runs game
startButton.addEventListener('click', startGame)

//resets game(refreshes page)
resetButton.addEventListener('click', function() {
    location.reload()
})

soloButton.addEventListener('click', startSoloGame)


//will first pick a random word to guess, then runs the addKeyListeners function like normal
function startSoloGame() {
    //start by getting a random word from the soloWords array 
    let ranLength = soloWords.length
    console.log(ranLength)
    let ranNum = Math.floor((Math.random() * ranLength) + 1)
    console.log(ranNum)
    let ranWord = soloWords[ranNum]
    console.log(ranWord)
    let lowCaseWord = ranWord.toLowerCase()
    let wordSplit = lowCaseWord.split('')
    for (q=0;q<wordSplit.length;q++) {
        let newDiv = document.createElement('div')
        newDiv.classList.add('blanksToFill')
        slots.appendChild(newDiv)
        newDiv.id = q
    }
    addKeyListeners(wordSplit)
}


//takes player input for word
function startGame(evt) {
    evt.preventDefault()
    let initialWord = prompt('Enter a word for player two to guess.. Make sure they do not see the word!')
    let word = initialWord.toLowerCase()
    // console.log(word)

    let wordSplit = word.split('')
    //adds '_' for each letter in player selected word
    for (z=0;z<wordSplit.length;z++) {
        let newDiv = document.createElement('div')
        newDiv.classList.add('blanksToFill')
        slots.appendChild(newDiv)
        newDiv.id = z
        // console.log(newDiv.id)
    }
    addKeyListeners(wordSplit)
}

//adds listener on each of the keyboard inputs
function addKeyListeners(wordSplit) {
    for(i=0;i<26;i++) {
        keyboardKeys[i].addEventListener('click', function() {
            let keyLetter = event.target.innerHTML
            // console.log(keyLetter)
            checkAnswers(keyLetter, wordSplit)
        })
    }
}

function checkAnswers(keyLetter, wordSplit) {

    //first check to make sure the selected letter has not already been selected
    checkLetter(keyLetter)

    //loop through all the indicies and see if the keyLetter matches the inner HTML text
    let check = wordSplit.indexOf(keyLetter)
    // console.log(check)
    if (check < 0) {
        wrongGuesses++
        wrongChoices.push(keyLetter) 
        document.querySelector('.letterContainer').innerHTML = wrongChoices
        changeImages(wrongGuesses)
    }
    else {
        for(p=0;p<wordSplit.length;p++) {
            if (wordSplit[p] === keyLetter) {
                // console.log(p)
                correctChoices.push(keyLetter)
                // console.log(correctChoices)
                fillBlanks(p, keyLetter)
            }
            else null
        }
        if (correctChoices.length === wordSplit.length) {
            // document.querySelector('.message').innerHTML = "You Win! Congragulations!"
            alert('Congratulations, you win!!')
        }
    }
}

function fillBlanks(p, keyLetter) {
    let textNode = document.createTextNode(keyLetter)
    let replaceBlank = document.getElementById(`${p}`)
    replaceBlank.appendChild(textNode)
}

function checkLetter(keyLetter) {
    for (t=0;t<wrongChoices.length;t++) {
        if (keyLetter === wrongChoices[t]) {
            alert("Please pick a different letter")
            let response = false
            return response
        }
        else {}

    }

}


function changeImages(wrongGuesses) {
    if (wrongGuesses === 0) {
        document.querySelector('.manImage').src = 'src/img/img1.png'
    }
    else if (wrongGuesses === 1) {
        document.querySelector('.manImage').src = 'src/img/img2.png'
    }
    else if (wrongGuesses === 2) {
        document.querySelector('.manImage').src = 'src/img/img3.png'
    }
    else if (wrongGuesses === 3) {
        document.querySelector('.manImage').src = 'src/img/img4.png'
    }
    else if (wrongGuesses === 4) {
        document.querySelector('.manImage').src = 'src/img/img5.png'
    }
    else if (wrongGuesses === 5) {
        document.querySelector('.manImage').src = 'src/img/img6.png'
    }
    else {
        document.querySelector('.manImage').src = 'src/img/img7.png'

        document.querySelector('.message').innerHTML = "Game Over, You Lose!" //once the last image is shown, this message will pop up.
    }
}