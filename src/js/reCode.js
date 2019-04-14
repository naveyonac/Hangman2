
let keyBoard = document.querySelector('.keyboard')
let keyboardKeys = document.querySelectorAll('.key')
let startButton = document.querySelector('.startGame')
let resetButton = document.querySelector('.resetGame')
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


//takes player input for word
function startGame(evt) {
    evt.preventDefault()
    let initialWord = prompt('Enter a word for player two to guess.. Make sure they do not see the word!')
    let word = initialWord.toLowerCase()
    console.log(word)

    let wordSplit = word.split('')
    //adds '_' for each letter in player selected word
    for (i=0;i<wordSplit.length;i++) {
        let newDiv = document.createElement('div')
        newDiv.classList.add('blanksToFill')
        slots.appendChild(newDiv)
    }
    addKeyListeners()
    // checkAnswers()
}

//adds listener on each of the keyboard inputs
function addKeyListeners() {
    for(i=0;i<26;i++) {
        keyboardKeys[i].addEventListener('click', function() {
            let keyLetter = event.target.innerHTML
            console.log(keyLetter)
        })
    }
    //for each letter clicked, we want to check if it's a letter in the wordSplit array.
}

function checkAnswers() {
    
}
