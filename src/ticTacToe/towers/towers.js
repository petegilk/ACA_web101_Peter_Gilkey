$(document).ready(function() {
  let gamePiece = null;
  let tower = document.getElementsByClassName('towers')

function gamePlay () {
  if (gamePiece) {
    tower.appendChild(gamePiece);
  } else {
    gamePiece = tower.children().last().detach();
  }
}

  // if (gamePiece) {
  //   $(this).append(gamePiece);
  //   gamePiece = null;
  // } else {
  //   gamePiece = $(this).children().last().detach();
  // }