//declaring variables by ID
var currentCount = 0;
var countElement = document.getElementById("counter")
var reset = document.getElementById("resetButton")
console.log(countElement.innerText)

//setting count to zero by default
if (countElement.innerText === "") {
  countElement.innerText = 0;
}

function addByOne() {
  currentCount++
  countElement.innerText = currentCount
  console.log("working", currentCount);
  //
}

function resetCounter() {
  countElement.innerText = ""
  if (countElement.innerText === "") {
    countElement.innerText = 0;
    currentCount = 0;
  }
}