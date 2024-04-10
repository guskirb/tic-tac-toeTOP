const squares = document.querySelectorAll(".square");

// player factory function

function createPlayer(name) {
    const playerName = name;
    const score = ["", "", "", "", "", "", "", "", ""];
    let turn = 0;

    const nextTurn = () => turn++;
    const getTurn = () => turn;

    return { playerName, score, nextTurn, getTurn };
};

const player1 = createPlayer("Gus");
const player2 = createPlayer("PC");

let currentPlayer = player1;
let nextPlayer = player2;

// win conditions IIFE module

const winConditions = (function () {
    function checkScore(play1, play2) {
        if (play1.getTurn() === 2) {
            winConditions.checkWinner(play1.score);
        } else if (play2.getTurn() === 2) {
            winConditions.checkWinner(play2.score);
        }
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
            if (win1 === Number(player[win1]) && win2 === Number(player[win2]) && win3 === Number(player[win3])) {
                console.log("win");

            }
        }
    };
    return { checkWinner, checkScore };
})();

squares.forEach(function (square) {
    square.addEventListener("click", function play() {
        currentPlayer.score[square.id] = square.id;
        winConditions.checkScore(player1, player2);
        if (currentPlayer === player1) {
            player1.nextTurn();
            currentPlayer = player2;
            nextPlayer = player1
        } else {
            player2.nextTurn();
            currentPlayer = player1;
            nextPlayer = player2;
        }
        square.removeEventListener("click", play);
    })
});


