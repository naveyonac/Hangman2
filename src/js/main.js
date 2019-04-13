
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