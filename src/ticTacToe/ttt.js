//user clicks square
// 'x' or 'o' is added to square


function addGamePiece (selectedElement) {
  console.log('selectedElement', selectedElement)
  var previousPlay;

  //create element
  var xo = document.createElement('h1')
  
  //add text to element
  if (xo.innerText === "") {
    xo.innerText === "X"
    selectedElement.appendChild(xo)
  } else if (xo.innerText === "X") {
    xo.innerText === "O"
    selectedElement.appendChild(xo)
  } else if (xo.innerText === "O") {
    xo.innerText === ""
    selectedElement.appendChild(xo)
  }


  // xo.innerText = "X"
  // selectedElement.appendChild(xo)
  // previousPlay = "X"







  //   if (previousPlay === "X") {
//     xo.innerText === "O"
//     selectedElement.appendChild(xo)
//   } else if (selectedElement.innerText === "O") {
//     selectedElement.innerText === null
//   }
// }
