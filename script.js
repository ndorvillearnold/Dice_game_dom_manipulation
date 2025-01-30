
const imagePaths = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png'
  ];

  function randomNumber(){
    return Math.floor(Math.random() * imagePaths.length);
   }

  const player1 =  document.getElementById("img1");
  const player2 =  document.getElementById("img2");

player1.setAttribute("src", imagePaths[randomNumber()]);
player2.setAttribute("src", imagePaths[randomNumber()]);

// let draw = document.querySelector("h1").innerHTML = "DRAW!";
// let wins = document.querySelector("h1").innerHTML = "Wins!";


console.log(player1);
console.log(player2);


if (player1 === player2 ){


    return document.querySelector("h1").innerHTML = "DRAW!"
    
   
   }else if(player1 > player2 ) {
    return document.querySelector("h1").innerHTML = "Player 1 Wins!"

   }else{
    return document.querySelector("h1").innerHTML = "Player 2 Wins!"

   }


