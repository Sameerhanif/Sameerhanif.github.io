var squares = document.getElementsByClassName("square");
var reset = document.getElementById("reset");
var player = "X";
var computer = "O";
var gameOver = false;
//terwijl je op een van de dozen klinkt gaat het eerst de doos invullen, daarna de computer laten spelen, en dan gaat het kijken of er al een winaar is
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function() {
    if (!this.innerHTML && !gameOver) {
      this.innerHTML = player;
      checkWinner();
      if (!gameOver) {
        computerMove();
        checkWinner();
      }
    }
  });
}

reset.addEventListener("click", function() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  }
  gameOver = false;
});
//hier kijkt het naar wie de winnaar is tussen Speler of Computer
function checkWinner() {
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    if (
      squares[winningCombinations[i][0]].innerHTML == player &&
      squares[winningCombinations[i][1]].innerHTML == player &&
      squares[winningCombinations[i][2]].innerHTML == player
    ) {
      gameOver = true;
      alert("Player wins!");
      return;
    } else if (
      squares[winningCombinations[i][0]].innerHTML == computer &&
      squares[winningCombinations[i][1]].innerHTML == computer &&
      squares[winningCombinations[i][2]].innerHTML == computer
    ) {
      gameOver = true;
      alert("Computer wins!");
      return;
    }
  }
}

function computerMove() {
  let openSquares = [];
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i].innerHTML) {
      openSquares.push(i);
    }
  }

  // de computer selecteerd hier een willekeurige box om intevullen 
  let randomIndex = Math.floor(Math.random() * openSquares
.length);
let randomSquare = squares[openSquares[randomIndex]];
randomSquare.innerHTML = computer;
}


function pvp()
{

window.location = "/index.html"

}