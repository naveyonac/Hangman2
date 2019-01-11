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
let resetButton = document.querySelector('.resetGame')
let slots = document.querySelector('.blankSpots')
let blankCharacter = []
let correctChoices = [] //array will hold correct letters
let wrongChoices = [] //gonna use this array to hold all the letters they use that are incorrect
let wrongGuesses = 0
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

addKeyboardListeners(wordSplit)
if (correctChoices.length === wordSplit.length) {
    document.querySelector('.message').innerHTML = "You Win! Congragulations!"
}
// console.log(image)
})

function addKeyboardListeners(wordSplit) {
    for (j=0;j<26;j++) {
        keyboardKeys[j].addEventListener('click', function() {
            let target = event.target.innerText //this will get the letter that was clicked
            console.log(target)
            let check = wordSplit.indexOf(target) //this will check to see if the letter is an indicie of the array. if not, it will return a value of -1
            console.log(check)

                if (check < 0) {
                    wrongGuesses++
                    wrongChoices.push(target)
                    document.querySelector('.letterContainer').innerHTML = wrongChoices
                    changeImages(wrongGuesses)//this will increment the images to the next one if they guess a letter wrong.
                }
                //going to push the letter they selected to the blanksToFill div if it IS in the word selected.
                else  {
                    document.querySelectorAll('.blanksToFill')[check].innerHTML = target
                    correctChoices.push(target)// this keeps an array of letters that correlate with word
                    // console.log(test[check])
                    // showLetters(wordSplit)
                }
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
        document.querySelector('.manImage').src = 'http://localhost:59859/img3.c54a28a8.png'
    }
    else if (wrongGuesses === 3) {
        document.querySelector('.manImage').src = 'http://localhost:59859/img4.dd0d453f.png'
    }
    else if (wrongGuesses === 4) {
        document.querySelector('.manImage').src = 'http://localhost:59859/img5.9002a70c.png'
    }
    else if (wrongGuesses === 5) {
        document.querySelector('.manImage').src = 'http://localhost:59859/img6.dfab2afd.png'
    }
    else {
        document.querySelector('.manImage').src = 'http://localhost:59859/img7.97683ac8.png'
        document.querySelector('.message').innerHTML = "Game Over, You Lose!" //once the last image is shown, this message will pop up.
    }
}

resetButton.addEventListener('click', function() {
    location.reload()
})


// function showLetters() {
//     let q = 0
//     while (q < wordSplit.length) {
//         let l = wordSplit.charAt(q)
//         let cont = document.getElementsByClassName('.blankSpots')[0]
//         cont.getElementsByClassName('.blanksToFill')[q].innerHTML = l
//         q++
//     }
// }