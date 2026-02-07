if (window.performance.navigation.type === 1){
    dicee();
}
function dicee(){var x;
var randomnum1 = Math.random(x);
randomnum1 = Math.floor(randomnum1*6) + 1;
var randomnum2 = Math.random(x);
randomnum2 = Math.floor(randomnum2*6) + 1;

console.log(document.querySelector(".img1").setAttribute("src","images/dice" + randomnum1 + ".png"));
console.log(document.querySelector(".img2").setAttribute("src","images/dice" + randomnum2 + ".png"));


if(randomnum1 == randomnum2){
   document.getElementsByTagName("h1")[0].innerHTML = "Draw"; 
}
else if(randomnum1 > randomnum2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 wins";
}
else if(randomnum2 > randomnum1){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins";
}
}