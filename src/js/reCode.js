
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
    // console.log(word)

    let wordSplit = word.split('')
    //adds '_' for each letter in player selected word
    for (i=0;i<wordSplit.length;i++) {
        let newDiv = document.createElement('div')
        newDiv.classList.add('blanksToFill')
        slots.appendChild(newDiv)
    }
    addKeyListeners(wordSplit)
    // checkAnswers()
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
    checkLetter(keyLetter, wordSplit)

    // //loop through all the indicies and see if the keyLetter matches the inner HTML text
    // let check = wordSplit.indexOf(keyLetter)
    // // console.log(check)
    // if (check < 0) {
    //     wrongGuesses++
    //     wrongChoices.push(keyLetter)
    //     document.querySelector('.letterContainer').innerHTML = wrongChoices
    //     changeImages(wrongGuesses)
    // }
    // else null
    // //     {
    // //     for (j=0; j<wordSplit.length;j++) {
    // //         if (wordSplit[j] = keyLetter) {
    // //             correctChoices.push(keyLetter)
    // //             console.log()
    // //         }
    // //     }
    // // }

    // // for (j=0; j<wordSplit.length;j++) {
    // //     if (wordSplit[j] = keyLetter) {
    // //         correctChoices.push(keyLetter)
    // //     }
    // // }
}

function checkLetter(keyLetter, wordSplit) {
    for (t=0;t<wrongChoices.length;t++) {
        if (keyLetter === wrongChoices[t]) {
            alert("Please pick a different letter")
        }
    }
    //loop through all the indicies and see if the keyLetter matches the inner HTML text
    let check = wordSplit.indexOf(keyLetter)
    // console.log(check)
    if (check < 0) {
        wrongGuesses++
        wrongChoices.push(keyLetter)
        document.querySelector('.letterContainer').innerHTML = wrongChoices
        changeImages(wrongGuesses)
    }
    else null
    //     {
    //     for (j=0; j<wordSplit.length;j++) {
    //         if (wordSplit[j] = keyLetter) {
    //             correctChoices.push(keyLetter)
    //             console.log()
    //         }
    //     }
    // }

    // for (j=0; j<wordSplit.length;j++) {
    //     if (wordSplit[j] = keyLetter) {
    //         correctChoices.push(keyLetter)
    //     }
    // }
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