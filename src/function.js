const gameStartBtn = document.getElementById('gameStartBtn');

function startGame(score) {
  alert(`the game is on at ${score}`);
}
// startGame(1020);

gameStartBtn.addEventListener('click', startGame);
