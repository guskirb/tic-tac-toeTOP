
function createPlayer(name) {
    const playerName = name;
    const playerScore = ["", "", "", "", "", "", "", "", ""];
    let turn = 0;

    const nextTurn = () => turn++;
    const getTurn = () => turn;

    return { playerName, playerScore, nextTurn, getTurn };
}

const winConditions = (function () {

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
            if (win1 === player[win1] && win2 === player[win2] && win3 === player[win3]) {
                console.log("win");
                declareWinner(player);
                break;
            }
        }
    };


    return { checkWinner };
})();






