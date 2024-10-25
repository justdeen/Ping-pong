//Storing html elements in js variables 
const target = document.getElementById('target')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const reset = document.getElementById('reset')
const left = document.getElementById('left')
const right = document.getElementById('right')
const winner = document.getElementById('winner')

//Declaring global variables
let track = 0
let score = 0
let score1 = 0

//Eventlistener for player1 button
player1.addEventListener('click', () =>{
    //if conditional for updating player1's score
    if(target.value > 1){
    track = target.value
    target.disabled = true
    score += 1
    left.innerText = score
    }
    else{
        alert('Select a number greater than 1')
    } 

    //While loop for displaying the winner
    while(score+score1 >= track && track > 1){
        player1.disabled = true
        player2.disabled = true
        if(score > score1){
            winner.innerText = "Player 1 won!"
            left.style.color = "green"
            right.style.color = "red"
        }
        else if(score < score1){
            winner.innerText = "Player 2 won!"
            left.style.color = "red"
            right.style.color = "green"
        }
        else{
            winner.innerText = "It's a draw!"
        }
        break
    }
})

player2.addEventListener('click', () =>{
    //if conditional for updating player1's score
    if(target.value > 1){
        track = target.value
        target.disabled = true
        score1 += 1
        right.innerText = score1
    }
    else{
        alert('Select a number greater than 1')
    }

    //While loop for displaying the winner
    while(score+score1 >= track && track > 1){
        player1.disabled = true
        player2.disabled = true
        if(score > score1){
            winner.innerText = "Player 1 won!"
            left.style.color = "green"
            right.style.color = "red"
        }
        else if(score < score1){
            winner.innerText = "Player 2 won!"
            left.style.color = "red"
            right.style.color = "green"
        }
        else{
            winner.innerText = "It's a draw!"
        }
        break
    }
})

//Eventlistener for the reset button
reset.addEventListener('click', () => {
    winner.innerText = ''
    right.innerText = 0
    left.innerText = 0
    score = 0
    score1 = 0
    player1.disabled = false
    player2.disabled = false
    target.disabled = false
    track = 0
    target.value = 0
    left.style.color = ""
    right.style.color = ""
})