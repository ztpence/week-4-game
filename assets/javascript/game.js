//need to create a way for computer to create random number
//computer randomly selects a number between 18-120 for player to match

var randomNumber = 19 + Math.floor(Math.random() * 101);

$("#random-number-box").html(randomNumber);
    console.log(randomNumber);

//need to create variables and start them at zero - can then change start values later

var wins = 0;
var losses = 0;
var playerTotal = 0;

$("#Wins").html("Wins: " + wins);
$("#Losses").html("Losses: " + losses);
$("#number-counter-box").html(playerTotal);

//need to create random number generator for crystals

var crystalOne = 1 + Math.floor(Math.random() * 12);
var crystalTwo = 1 + Math.floor(Math.random() * 12);
var crystalThree = 1 + Math.floor(Math.random() * 12);
var crystalFour = 1 + Math.floor(Math.random() * 12);

//whenever user clicks on a gem, the random number is added to total score. Need on click 
//show this number under total score box

$("#crystal-1").on("click", function () {
    playerTotal = playerTotal + crystalOne;
    console.log(playerTotal)
    $("#number-counter-box").html(playerTotal);
    winCheck();
})

$("#crystal-2").on("click", function () {
    playerTotal = playerTotal + crystalTwo;
    console.log(playerTotal)
    $("#number-counter-box").html(playerTotal);
    winCheck();
})

$("#crystal-3").on("click", function () {
    playerTotal = playerTotal + crystalThree;
    console.log(playerTotal)
    $("#number-counter-box").html(playerTotal);
    winCheck();
})

$("#crystal-4").on("click", function () {
    playerTotal = playerTotal + crystalFour;
    console.log(playerTotal)
    $("#number-counter-box").html(playerTotal);
    winCheck();
})

//need if else statements for winning or lose 
// if playerTotal === randomNumber then its a win.
//maybe else or else if  PlayerTotal > randomNumber then is is a  loss.

var winCheck = function (){
    if (playerTotal === randomNumber) {
        wins++;
        $("#wins").html("Wins: " + wins);
        resetGame();
    }
    else if (playerTotal > randomNumber){
        losses++;
        $("#losses").html("Losses: " + losses);
        resetGame();
    }
};



//need to somehow reset all variables and numbers once game is won or lost

var resetGame = function(){
    playerTotal = 0;
    randomNumber = 19 + Math.floor(Math.random() * 101);
    crystalOne = 1 + Math.floor(Math.random() * 12);
    crystalTwo = 1 + Math.floor(Math.random() * 12);
    crystalThree = 1 + Math.floor(Math.random() * 12);
    crystalFour = 1 + Math.floor(Math.random() * 12);

    console.log(randomNumber);
    $("#random-number-box").html(randomNumber);
    $("#Wins").html("Wins: " + wins);
    $("#Losses").html("Losses: " + losses);
    $("#number-counter-box").html(playerTotal);

}



