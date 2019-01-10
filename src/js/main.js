// const key = document.querySelectorAll('.key')
// const button = document.querySelector('.startGame')
// var word
// var wordArray

// button.addEventListener('click', startGameFunction(evt))
//     // evt.preventDefault()
//     // let wordInput = prompt('Pick a word for player 2 to guess!')
//     // console.log(wordInput)
//     // evt.stopImmediatePropagation() //stops the prompt form popping up a million times.
//     // word = wordInput
// // }) //this will get the word from player one to use.
// // for (i=0;i < 26; i++) {
// //     key[i].addEventListener('click', function(evt){
// //         evt.stopImmediatePropagation()
// //         alert('Key Was Clicked!')
// //     })} 
// //adds event listeners to all of the keyboard keys for input selection

// function startGameFunction() {
//     evt.preventDefault()
//     let wordInput = prompt('Pick a word for player 2 to guess!')
//     console.log(wordInput)
// }

// while (i=0; i < 26; i++) {
//     key[i].addEventListener('click', function(){
//         alert('Key Was Clicked!')
//     }
// }
let keyBoard = document.querySelector('.keyboard')
let keyboardKeys = document.querySelectorAll('.key')
let startButton = document.querySelector('.startGame')
let slots = document.querySelector('.blankSpots')
let blankCharacter = []
let wrongGuesses = 1
const image = document.querySelector('.manImage').src

startButton.addEventListener('click', function(evt) {
    evt.preventDefault()
    let word = prompt('Enter in a word for other player to guess.')
    let wordSplit = word.split('')
    console.log(wordSplit)

    //wanting to go through a loop to make a "_" for each letter in the word
for (i=0;i<wordSplit.length;i++) {
    // letter = word.charAt[i]
    // slots.className = slotDiv
    // slots.appendChild(blankCharacter)
    // document.querySelector('.blankSpots').appendChild(slots)
    // blankCharacter.push('_')
    // slots.appendChild(blankCharacter)
    // idea above not working, trying new method.
    let newDiv = document.createElement('div')
    //makes a new div class for each letter in the word
    newDiv.classList.add('blanksToFill')
    slots.appendChild(newDiv)
    //appends the new div to the .blankSpots node
}

changeImages(wrongGuesses)
addKeyboardListeners()
// console.log(image)
})

function addKeyboardListeners() {
    for (j=0;j<26;j++) {
        keyboardKeys[j].addEventListener('click', function() {
            console.log(keyboardKeys.innerHTML)
        })
    }
}

function changeImages(wrongGuesses) {
    if (wrongGuesses === 0) {
        document.querySelector('.manImage').src = 'http://localhost:59859/img1.97b391c3.png'
    }
    else if (wrongGuesses === 1) {
        document.querySelector('.manImage').src = 'http://localhost:59859/img2.c13fb1c1.png'
    }
    else if (wrongGuesses === 2) {
        document.querySelector('.manImage').src='http://localhost:59859/img3.c54a28a8.png'
    }
    else if (wrongGuesses === 3) {
        document.querySelector('.manImage').src='http://localhost:59859/img4.dd0d453f.png'
    }
    else if (wrongGuesses === 4) {
        document.querySelector('.manImage').src='http://localhost:59859/img5.9002a70c.png'
    }
    else if (wrongGuesses === 5) {
        document.querySelector('.manImage').src='http://localhost:59859/img6.dfab2afd.png'
    }
    else {
        document.querySelector('.manImage').src='http://localhost:59859/img7.97683ac8.png'
    }
}
