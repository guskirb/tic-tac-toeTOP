const squares = document.querySelectorAll(".square");
const submitButton = document.getElementById("submitButton");
const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");
const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");
const resultAlert = document.querySelector(".result");
const resultScreen = document.querySelector(".popupResults");
const playAgain = document.getElementById("playAgain");
const menuButton = document.getElementById("menu");

// player factory function

function createPlayer(name) {
    const playerName = name;
    const score = ["", "", "", "", "", "", "", "", ""];

    return { playerName, score };
};

let player1
let player2
let currentPlayer

// win conditions IIFE module

const winConditions = (function () {
    function checkScore(current) {
        checkWinner(current.score);
    };
    function checkWinner(player) {
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let x = 0; x < win.length; x++) {
            let winner = win[x]
            let win1 = winner[0];
            let win2 = winner[1];
            let win3 = winner[2];
            if (win1 === parseInt(player[win1]) && win2 === parseInt(player[win2]) && win3 === parseInt(player[win3])) {
                console.log("win");
                render.declareWinner(currentPlayer.playerName);
            }
        }
    };
    return { checkWinner, checkScore };
})();


function assignEvents() {
    squares.forEach(function (square) {
        square.addEventListener("click", function play() {
            currentPlayer.score[square.id] = square.id;
            render.changeBoard(square.id);
            winConditions.checkScore(currentPlayer);
            if (currentPlayer === player1) {
                currentPlayer = player2;
                player1Name.style.fontSize = "1.3em";
                player2Name.style.fontSize = "1.6em";
            } else if (currentPlayer === player2) {
                currentPlayer = player1;
                player2Name.style.fontSize = "1.3em";
                player1Name.style.fontSize = "1.6em";
            };
            square.removeEventListener("click", play);
        })
    })
};

submitButton.addEventListener("click", startGame);

menuButton.addEventListener("click", restartGame);

// render module

const render = (function () {
    function displayName() {
        player1Name.textContent = player1.playerName.toUpperCase();
        player2Name.textContent = player2.playerName.toUpperCase();
    };
    function changeBoard(num) {
        currentSquare = document.getElementById(num);
        if (currentPlayer === player1) {
            return currentSquare.classList.add("crosses");
        } if (currentPlayer === player2) {
            return currentSquare.classList.add("naughts");
        } else {
            console.log("error"); 1
        }
    };
    function declareWinner(player) {
        resultScreen.style.display = "flex";
        resultAlert.textContent = player.toUpperCase() + " WINS!";
    };
    return { displayName, changeBoard, declareWinner };
})();

function restartGame() {
    squares.forEach((square) => {
        square.classList.remove("naughts");
        square.classList.remove("crosses");
    });
    document.querySelector(".popupBackground").style.display = 'flex';
    resultScreen.style.display = "none";
}

function startGame() {
    document.querySelector(".popupBackground").style.display = 'none';
    player1 = createPlayer(player1Input.value);
    player2 = createPlayer(player2Input.value);
    if (player1Input.value === "") {
        player1 = createPlayer("Player 1");
    };
    if (player2Input.value === "") {
        player2 = createPlayer("Player 2");
    };
    currentPlayer = player1;
    render.displayName();
    player2Name.style.fontSize = "1.3em";
    player1Name.style.fontSize = "1.6em";
    assignEvents();
};

function replay() {

}