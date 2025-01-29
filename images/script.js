
let diceCount = [ "diceOne", "diceTwo", "diceThree", "diceFour",  "diceFive", "diceSix"]


let imageOne = document.getElementById("img1").innerHTML = "diceCount[0]"

if(diceCount[0]){
console.log("yo")


}else{

    console.log("NO")
}



function playerOne(number){
    number = Math.random() * 6;
    number = Math.floor(number);
    console.log(number);
   
     return number;

}

playerOne()




function playerTwo(number){
 number = Math.random() * 6;
 number = Math.floor(number);
 console.log(number);

return number;

}
playerTwo()


// while(playerOne){

//     if(){


//     }

// }