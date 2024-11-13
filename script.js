let player1Choice = "";
let player2Choice = "";

function choose(choice, player) {
    if (player === 1) {
        player1Choice = choice;
        document.getElementById("player1").style.display = "none";
    } else {
        player2Choice = choice;
        document.getElementById("player2").style.display = "none";
    }

    if (player1Choice && player2Choice) {
        determineWinner();
    }
}

function determineWinner() {
    let resultText = "";
    
    if (player1Choice === player2Choice) {
        resultText = "It's a tie!";
    } else if (
        (player1Choice === "rock" && player2Choice === "scissors") ||
        (player1Choice === "scissors" && player2Choice === "paper") ||
        (player1Choice === "paper" && player2Choice === "rock")
    ) {
        resultText = "Player1 wins!";
    } else {
        resultText = "Player2 wins!";
    }

    document.getElementById("result").innerText = resultText;

}