const key = document.querySelectorAll('.key')
const button = document.querySelector('.startGame')
var word
var wordArray

button.addEventListener('click', startGameFunction(evt))
    // evt.preventDefault()
    // let wordInput = prompt('Pick a word for player 2 to guess!')
    // console.log(wordInput)
    // evt.stopImmediatePropagation() //stops the prompt form popping up a million times.
    // word = wordInput
// }) //this will get the word from player one to use.
// for (i=0;i < 26; i++) {
//     key[i].addEventListener('click', function(evt){
//         evt.stopImmediatePropagation()
//         alert('Key Was Clicked!')
//     })} 
//adds event listeners to all of the keyboard keys for input selection

function startGameFunction() {
    evt.preventDefault()
    let wordInput = prompt('Pick a word for player 2 to guess!')
    console.log(wordInput)
    for (i=0;i < 26; i++) {
        key[i].addEventListener('click', function(evt){
            evt.stopImmediatePropagation()
            alert('Key Was Clicked!')
        }
    ,
}