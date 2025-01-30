
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

  const son =  document.getElementById("img1");
  const daughter =  document.getElementById("img2");

  // Get random numbers for each player
const roll1 = randomNumber();
const roll2 = randomNumber();

// Set the images based on the random rolls
son.setAttribute("src", imagePaths[roll1]);
daughter.setAttribute("src", imagePaths[roll2]);


console.log(son);
console.log(daughter);


if (roll1 === roll2 ){


     document.querySelector("#heading").innerHTML = "DRAW!"
    
   
   }else if(roll1 > roll2 ) {
document.querySelector("#heading").innerHTML = "My baby girl is washing the dishes!"

   }else{
     document.querySelector("#heading").innerHTML = "My baby boy is washing dishes!"

   }


