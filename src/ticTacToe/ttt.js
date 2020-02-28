//user clicks square
// 'x' or 'o' is added to square

function addGamePiece (selectedElement) {
  console.log('selectedElement', selectedElement)

  //create element
  var xo = document.createElement('h1')
  var previousPlay;
  
  //add text to element
  xo.innerText = "X"
  selectedElement.appendChild(xo)

  if (previousPlay === "X") {
    xo.innerText === "O"
  
  } else if (selectedElement.innerText === "O") {
    selectedElement.innerText === null
  }
}
