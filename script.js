
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

  // Get random numbers for each player
const roll1 = randomNumber();
const roll2 = randomNumber();

// Set the images based on the random rolls
player1.setAttribute("src", imagePaths[roll1]);
player2.setAttribute("src", imagePaths[roll2]);


console.log(player1);
console.log(player2);


if (roll1 === roll2 ){


     document.querySelector("#heading").innerHTML = "DRAW!"
    
   
   }else if(roll1 > roll2 ) {
document.querySelector("#heading").innerHTML = "Player 1 Wins!"

   }else{
     document.querySelector("#heading").innerHTML = "Player 2 Wins!"

   }


