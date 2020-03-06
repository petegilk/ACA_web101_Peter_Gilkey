var newItem = document.getElementsByName('newItem');
var itemList = document.getElementById('list-of-items');

function addNewItem () {
  var newText = document.getElementById('textField').innerText;
  console.log('newText', newText);
  itemList.appendChild(newText)
}