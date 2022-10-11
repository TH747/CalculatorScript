function add() {

 
  var f = document.getElementById('f').value;

  var s = document.getElementById('s').value;

  var t = +f + +s;

  document.getElementById('result').innerHTML = "The answer is " + t

}

function subtract() {

 
  var f = document.getElementById('f').value;

  var s = document.getElementById('s').value;

  var t = f - s;

  document.getElementById('result').innerHTML = "That's easy.... " + t

}


function divide() {

 
  var f = document.getElementById('f').value;

  var s = document.getElementById('s').value;

  var t = f/s;

  document.getElementById('result').innerHTML = "Nice try, " + t

}

function multiply() {

 
  var f = document.getElementById('f').value;

  var s = document.getElementById('s').value;

  var t = f*s;

  document.getElementById('result').innerHTML = t + ".....Woo, watch me go!"

}