// VARIABLES --------------------------------------------

//      OBJECTS

var character = {
    name: "",
    imageName: "",
    isEnemy: false,
    isDefender: false,
    healthPoints: "",
    attackPoint: "",
    attackPower: "",
    counterAtackPower: "",
    attackCounter: 0,
}

var character1 = {
    name: "Han Solo",
    imageName: "hansolo",
    isEnemy: false,
    isDefender: false,
    healthPoints: 120,
    attackPoint: 100,
    attackPower: 7,
    counterAtackPower: 10,
}

var character2 = {
    name: "Master Yoda",
    imageName: "yoda",
    isEnemy: false,
    isDefender: false,
    healthPoints: 130,
    attackPoint: 110,
    attackPower: 9,
    counterAtackPower: 12,
}

var character3 = {
    name: "Ben Kenobi",
    imageName: "ben",
    isEnemy: false,
    isDefender: false,
    healthPoints: 140,
    attackPoint: 120,
    attackPower: 11,
    counterAtackPower: 14,
}

var character4 = {
    name: "Darth Maul",
    imageName: "darthmaul",
    isEnemy: false,
    isDefender: false,
    healthPoints: 150,
    attackPoint: 130,
    attackPower: 13,
    counterAtackPower: 16,
}

var character5 = {
    name: "Darth Vader",
    imageName: "vader",
    isEnemy: false,
    isDefender: false,
    healthPoints: 160,
    attackPoint: 140,
    attackPower: 15,
    counterAtackPower: 18,
}

var character6 = {
    name: "Darth Vader",
    imageName: "vader",
    isEnemy: false,
    isDefender: false,
    healthPoints: 170,
    attackPoint: 150,
    attackPower: 17,
    counterAtackPower: 20,
}

//      ARRAYS
charArray = [character1, character2, character3, character4, character5, character6];

//      STRINGS/CHAR
var charSelected = "";
var charAttacker = "";

//      NUMBER/INTEGER
var matches = 0;
var wins = 0;
var loss = 0;


//      BOOLEAN
var selection1 = false;
var selection2 = false;


// ------------------------------------------------------------

$(document).ready(function () {

    $(".roundBtn").on("click", function () {
        $(".roundBtn").text("Set as defender");

        character = charArray[parseInt(this.id)];
        console.log(character);

        console.log("Character Selected: " + character.name);

        $("#charName").text(character.name);
        $("#charHP").text("HP: " + character.healthPoints);


        // character[name] = 

    });




});
