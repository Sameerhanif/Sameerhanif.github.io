alert("welkom bij tic tac toe")
alert("het spel is simpel. klik op het boxje om een x of o erbij te zetten")
alert("de eerste speler die drie op een rij heeft wint het spel")












function myfunc() {
 
  // Dit maakt een connectie tussen het HTML element en de variable
  let b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  // Bekijken of speler X wel of niet heeft gewonnen
  //
  if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
      b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("b4").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert('Player X won');
  }
  else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
      b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;

      window.alert('Player X won');
  }
  else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
      b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b6").disabled = true;
      window.alert('Player X won');
  }
  else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
      b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      window.alert('Player X won');
  }
  else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
      b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      window.alert('Player X won');
  }
  else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
      b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert('Player X won');
  }
  else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
      b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("b1").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert('Player X won');
  }
  else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
      b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert('Player X won');
  }










  // kijkt of speler x klaar is met 
  //Controleren op Speler 0 begint, en of speler 0 gewonnen heeft of
  // niet en daarna alle andere velden uitgeschakelen
  else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
      b2 == '0') && (b3 == '0' || b3 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("b4").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
      b4 == '0') && (b7 == '0' || b7 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
      b8 == '0') && (b9 == '0' || b9 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b6").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
      b6 == '0') && (b9 == '0' || b9 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
      b5 == '0') && (b9 == '0' || b9 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
      b5 == '0') && (b7 == '0' || b7 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
      b5 == '0') && (b8 == '0' || b8 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("b1").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
      b5 == '0') && (b6 == '0' || b6 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert('Player 0 won');
  }

  // Controleren wat de inzet van speler O was
  // Het controleert ook of het een draw is.
  else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
      || b2 == '0') && (b3 == 'X' || b3 == '0') &&
      (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
      b5 == '0') && (b6 == 'X' || b6 == '0') &&
      (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
      b8 == '0') && (b9 == 'X' || b9 == '0')) {
          document.getElementById('print')
              .innerHTML = "Match Tie";
          window.alert('Match Tie');
  }
  else {

      // hier laat het zien wie als eerst aan de beurt is
      if (flag == 1) {
          document.getElementById('print')
              .innerHTML = "Player X Turn";
      }
      else {
          document.getElementById('print')
              .innerHTML = "Player 0 Turn";
      }
  }
}

// Function to reset game
function myfunc_2() {
  location.reload();
  document.getElementById('b1').value = '';
  document.getElementById("b2").value = '';
  document.getElementById("b3").value = '';
  document.getElementById("b4").value = '';
  document.getElementById("b5").value = '';
  document.getElementById("b6").value = '';
  document.getElementById("b7").value = '';
  document.getElementById("b8").value = '';
  document.getElementById("b9").value = '';

}

// Vanaf hier controleren de functies de beurt van de speler
// en bekijkt welke waarde (X of 0) in de box is. het zegt eigelijk als een box is ingevuld met X of 0 dat het niet meer ingevuld kan worden met iets anders.
flag = 1;
function myfunc_3() {
  if (flag == 1) {
      document.getElementById("b1").value = "X";
      document.getElementById("b1").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("b1").value = "0";
      document.getElementById("b1").disabled = true;
      flag = 1;
  }
}

function myfunc_4() {
  if (flag == 1) {
      document.getElementById("b2").value = "X";
      document.getElementById("b2").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("b2").value = "0";
      document.getElementById("b2").disabled = true;
      flag = 1;
  }
}

function myfunc_5() {
  if (flag == 1) {
      document.getElementById("b3").value = "X";
      document.getElementById("b3").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("b3").value = "0";
      document.getElementById("b3").disabled = true;
      flag = 1;
  }
}

function myfunc_6() {
  if (flag == 1) {
      document.getElementById("b4").value = "X";
      document.getElementById("b4").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("b4").value = "0";
      document.getElementById("b4").disabled = true;
      flag = 1;
  }
}

function myfunc_7() {
  if (flag == 1) {
      document.getElementById("b5").value = "X";
      document.getElementById("b5").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("b5").value = "0";
      document.getElementById("b5").disabled = true;
      flag = 1;
  }
}

function myfunc_8() {
  if (flag == 1) {
      document.getElementById("b6").value = "X";
      document.getElementById("b6").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("b6").value = "0";
      document.getElementById("b6").disabled = true;
      flag = 1;
  }
}

function myfunc_9() {
  if (flag == 1) {
      document.getElementById("b7").value = "X";
      document.getElementById("b7").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("b7").value = "0";
      document.getElementById("b7").disabled = true;
      flag = 1;
  }
}

function myfunc_10() {
  if (flag == 1) {
      document.getElementById("b8").value = "X";
      document.getElementById("b8").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("b8").value = "0";
      document.getElementById("b8").disabled = true;
      flag = 1;
  }
}

function myfunc_11() {
  if (flag == 1) {
      document.getElementById("b9").value = "X";
      document.getElementById("b9").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("b9").value = "0";
      document.getElementById("b9").disabled = true;
      flag = 1;
  }
}


function pve()
{

window.location = "/game2/boter.html"

}