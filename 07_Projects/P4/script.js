let num = parseInt(Math.floor((Math.random() * 100) + 1))

const submit = document.querySelector('#submit');
const userinput = document.querySelector('#guessfield');
const preguess = document.querySelector('.guesses');
const remainguess = document.querySelector('.lastResults');
const hint = document.querySelector('.loworhigh');
const startover = document.querySelector('.result');

const p = document.createElement('p');

let previousguess = [];
let numguess = 1;
console.log(remainguess)
let playgame = true;

if(playgame){
    submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userinput.value);
    // console.log(guess);
    validateGuess(guess);
});
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess < 1 || guess > 100){
        alert('Please enter a number between 1 and 100');
    }
    else if(previousguess.includes(guess)){
        alert('You have already guessed that number');
    }
    else{
        previousguess.push(guess);
        if(numguess>=10){
            displayguess(guess);
            displayMessage(`Game Over! Random number is ${num}`);
            endgame();
            alert('You reacher the limit')
        }
        else{
            displayguess(guess);
            console.log(guess)
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess > num ){
        displayMessage(`You Entered Greater number`)
    }
    else if(guess < num){
        displayMessage(`You Entered Smaller number`)
    }
    else{
        playgame = false;
        displayMessage(`Congratulations!!! You guessed correctly ${guess}`);
        endgame();
    }
}

function displayguess(guess) {
    userinput.value = '';
    preguess.innerHTML += `${guess}, `;
    numguess++;
    remainguess.innerHTML = `${11 - numguess}`;
}

function displayMessage(Message){
    hint.innerHTML = `<h2>${Message}</h2>`;
}

function endgame(){
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 style="cursor:pointer;" id='newGame'>Start New Game</h2>`
    startover.appendChild(p)
    playgame= false;
    newgame();
}
function newgame(){
    const newgamebtn = document.querySelector('#newGame');
    newgamebtn.addEventListener('click',function(e){
        num = parseInt(Math.floor((Math.random() * 100) + 1))
        previousguess = [];
        numguess = 1;
        preguess.innerHTML ='';
        remainguess.innerHTML =`${11-numguess}`;
        userinput.removeAttribute('disabled');
        startover.removeChild(p);
        playgame=true;
    })
}