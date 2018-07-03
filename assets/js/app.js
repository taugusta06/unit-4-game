// // There will be four crystals displayed as buttons on the page.
// // The player will be shown a random number at the start of the game.

// // When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

// // Your game will hide this amount until the player clicks a crystal.
// // When they do click one, update the player's score counter.

// // The player wins if their total score matches the random number from the beginning of the game.
// // The player loses if their score goes above the random number.

// // The game restarts whenever the player wins or loses.

// // When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.

var randomNumber;
var win =0;
var lose =0;
var totalNum = 0;


var beginRestart = function(){

randomNumber = Math.floor(Math.random() * 101)+ 19;
$(".crystals").empty();

// var images = [
//     "",
//     "",
//     "",
//     "",
//                 ]

console.log(randomNumber);

$("#numText").html("Number To Match: " + randomNumber);

for (i =0; i < 4; i++){

    var crystalNum = Math.floor(Math.random() *12) + 1;
    // console.log(crystalNum);

    // var crystal = $("<div>");  //working game attempt
    var crystal = $("<div>");   //image attempt
        crystal.attr({
            "class": 'crystal',
            "randomPick": crystalNum});

        // crystal.html(crystalNum);

    $(".crystals").append(crystal);
};

}
beginRestart();

$(document).on("click", '.crystal', function(){
    
    var numberChoice = parseInt($(this).attr("randomPick"));
    console.log($(this).attr("randomPick"));
    
    totalNum += numberChoice;
    console.log(totalNum);
    $("#totalNums").html("Current points so far: " + totalNum);
    
    if (totalNum === randomNumber){
        win++;
        $("#wins").html("Wins:" + win);
        $("#totalNums").html("You Win!!!");

        totalNum = 0;
        beginRestart();
    }
    else if (totalNum > randomNumber){
        lose++;
        $("#losses").html("Losses:" + lose);
        $("#totalNums").html("You Lost!!!");

        totalNum = 0;
        beginRestart();
    }
    
})