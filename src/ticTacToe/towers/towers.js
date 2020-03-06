  let gamePiece = null;
  let tower = document.getElementsByClassName('towers');

function gamePlay () {
  var lastChild = tower.lastElementChild
  if (gamePiece === null) {
    gamePiece = tower.removeChild(lastElementChild);
  } else {
    tower.appendChild(gamePiece);
  }
  // if (gamePiece !== null) {
  //   tower.appendChild(gamePiece);
  // } else {
  //   gamePiece = tower.children().last().detach();
  // }
}


  // if (gamePiece) {
  //   $(this).append(gamePiece);
  //   gamePiece = null;
  // } else {
  //   gamePiece = $(this).children().last().detach();
  // }