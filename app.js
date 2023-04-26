var toGuess = 0;

function calc() {
    const numb1 = document.getElementById("num1").value;
    const numb2 = document.getElementById("num2").value;

    getRandomArbitary = (numb1, numb2) => Math.floor(Math.random() * (Number(numb2) - Number(numb1) + Number(numb1)));
    toGuess = getRandomArbitary(numb1, numb2);
}

function checkGuess() {
    const guessed = document.getElementById("guessed").value;
    if( guessed == toGuess) {
        document.getElementById("guessMessage").innerText = "Congratulations!";
        document.getElementById("guessMessage").style.backgroundColor = "green";
        document.getElementById("guessMessage").style.color = "white";
    } else if(guessed < toGuess) {
        document.getElementById("guessMessage").innerText = "Your guess is too low!";
        document.getElementById("guessMessage").style.backgroundColor = "red";
        document.getElementById("guessMessage").style.color = "white";
    } else if(guessed > toGuess) {
        document.getElementById("guessMessage").innerText = "Your guess is too high!";
        document.getElementById("guessMessage").style.backgroundColor = "red";
        document.getElementById("guessMessage").style.color = "white";
    }
}