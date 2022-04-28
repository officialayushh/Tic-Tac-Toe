let sign = "X";
let display = document.getElementById("player");
let block;
let gameOver;
let time;


function printSign(number) {
    if (!gameOver) {
        onClickAudio();
        block = document.getElementById("r" + number);
        if (isEmpty(block.innerHTML)) {
            block.innerHTML = sign;
            checkWinner();
            if (!gameOver) {
                changeSign();
                display.innerHTML = "<center>" + sign + "'s Turn now" + "</center>"

            }
        }
    }
}


function changeSign() {
    if (sign === "X")
        sign = "O"
    else
        sign = "X";

}


function getBox(boxNumber) {
    return document.getElementById("r" + boxNumber).innerHTML;
}


function playerMove(firstBox, secondBox, thirdBox, sameSign) {
    return (getBox(firstBox) === sameSign && getBox(secondBox) === sameSign && getBox(thirdBox) === sameSign);
}


function isEmpty(val) {
    return !val;
}


function isNotEmpty(val) {
    return !isEmpty(val);
}


function checkWinner() {
    if (playerMove(1, 2, 3, sign) || playerMove(4, 5, 6, sign) || playerMove(7, 8, 9, sign) || playerMove(1, 4, 7, sign) || playerMove(2, 5, 8, sign) || playerMove(3, 6, 9, sign) || playerMove(1, 5, 9, sign) || playerMove(3, 5, 7, sign)) {

        display.innerHTML = "<center>Congratulations ! " + sign + " Won the game &#128081;" + "</center>";
        gameOverAudio();
        celebration();
        gameOver = true;
        return "End Game";
    }

    else {

        if (isNotEmpty(getBox(1)) && isNotEmpty(getBox(2)) && isNotEmpty(getBox(3)) && isNotEmpty(getBox(4)) && isNotEmpty(getBox(5)) && isNotEmpty(getBox(6)) && isNotEmpty(getBox(7)) && isNotEmpty(getBox(8)) && isNotEmpty(getBox(9))) {
            display.innerHTML = "<center>Its a Tie ! &#128517;</center>";
            gameOverAudio();
            gameOver = true;
            return "ITS A TIE";
        }
    }
}


function celebration() {
    confetti.start();
    
 }


function onClickAudio() {
    var audio = new Audio('clickSound.wav');
    audio.play();
}


function gameOverAudio() {
    var audio = new Audio('WinnerSound.wav');
    audio.play();
}


function changeBackground() {

    let background = document.getElementById("body")
        if (background.className === 'first') {

            background.className = 'second';
        }
        else {
            background.className = 'first';
        }
}


function newStart() {

    location.reload();
}
