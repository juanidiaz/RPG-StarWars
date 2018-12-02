// VARIABLES --------------------------------------------

//      OBJECTS

var character1 = {
    name: "Han Solo",
    imageName: "solo",
    isEnemy: false,
    isDefender: false,
    healthPoints: 120,
    attackPower: 7,
    counterAttackPower: 10,
}

var character2 = {
    name: "Master Yoda",
    imageName: "yoda",
    isEnemy: false,
    isDefender: false,
    healthPoints: 130,
    attackPower: 9,
    counterAttackPower: 12,
}

var character3 = {
    name: "Ben Kenobi",
    imageName: "benkenobi",
    isEnemy: false,
    isDefender: false,
    healthPoints: 140,
    attackPower: 11,
    counterAttackPower: 14,
}

var character4 = {
    name: "Darth Maul",
    imageName: "darthmaul",
    isEnemy: false,
    isDefender: false,
    healthPoints: 150,
    attackPower: 13,
    counterAttackPower: 16,
}

var character5 = {
    name: "Darth Vader",
    imageName: "darthvader",
    isEnemy: false,
    isDefender: false,
    healthPoints: 160,
    attackPower: 15,
    counterAttackPower: 18,
}

var character6 = {
    name: "Obi Wan Kenobi",
    imageName: "obiwan",
    isEnemy: false,
    isDefender: false,
    healthPoints: 170,
    attackPower: 17,
    counterAttackPower: 20,
}

//      ARRAYS
charArray = [character1, character2, character3, character4, character5, character6];

//      STRINGS/CHAR
var charPlayer = "";        // Character selected to play as
var charDefender = "";      // Character selected to attack


//      NUMBER/INTEGER
var matches = 0;
var wins = 0;
var loss = 0;


//      BOOLEAN
var selection1 = false;
var selection2 = false;


// ------------------------------------------------------------

$(document).ready(function () {

    // Player clicks to select characters
    $(".roundBtn").on("click", function () {

        if (charPlayer === "") {
            // First character is the one to play as
            charPlayer = parseInt(this.id);
            console.log("Playing as: " + charArray[charPlayer].name);

            // Send player info
            console.log(charArray[charPlayer]);
        }
        else {
            // Any character selection is the one to attack
            charDefender = parseInt(this.id);
            console.log("Attacking: " + charArray[charDefender].name);

            // Send player info
            console.log(charArray[charDefender]);
        }

        updateScreen();
    });

    $("#attack").on("click", function () {

        // Confirm the player and Defender characters have been set
        if (charPlayer !== "" && charDefender !== "") {

            // Calculate the losses for every characters
            var lossPlayer = charArray[charDefender].counterAttackPower;
            var lossDefender = (charArray[charPlayer].attackPower * (matches + 1));

            // Updating the health points for both characters
            charArray[charPlayer].healthPoints = charArray[charPlayer].healthPoints - lossPlayer;
            charArray[charDefender].healthPoints = charArray[charDefender].healthPoints - lossDefender;

            // Log a detailed explanation of the calculation
            console.log("Player loss: " + lossPlayer + "     ( " + charArray[charPlayer].healthPoints + " ) = Player HP - ( " + charArray[charDefender].counterAttackPower + " )");
            console.log("Defender loss: " + lossDefender + "     ( " + charArray[charDefender].healthPoints + " ) = Defender HP - ( " + charArray[charPlayer].attackPower + " ) * ( " + matches + " + 1 ) )");

            // Increase the matches
            matches++;

            // Log the status of the two characters
            logStats();
        }
        else {
            alert("ERROR: Either the Player or the Defender character have not been selected!")
        }
        updateScreen();

    });

    $("#change").on("click", function () {

        // Hide Defender's card
        $("#cardDefender").css("visibility", "hidden");

        // Return selected character as Defender to character list
        $("#" + charDefender).css("display", "inline");

        // Show all buttons
        $(".roundBtn").css("visibility", "visible");

        // Show ATTACK button
        $("#attack").css("visibility", "hidden");

        // Clear selected Defender
        charDefender = "";

    })

    function logStats() {
        console.log("----------------------")
        console.log("Matches: " + matches);
        console.log("----------------------")
        console.log("  PLAYER STATS")
        console.log("Name: " + charArray[charPlayer].name);
        console.log("HP: " + charArray[charPlayer].healthPoints);
        console.log("Initial attack power: " + charArray[charPlayer].attackPower);
        console.log("Current attack power: " + (charArray[charPlayer].attackPower * matches));
        console.log("----------------------")
        console.log("  DEFENDER")
        console.log("Name: " + charArray[charDefender].name);
        console.log("HP: " + charArray[charDefender].healthPoints);
        console.log("----------------------")
    }

    function updateScreen() {
        if (charPlayer === "") {        // If no character has been set as player

            // Initial state

        }

        if (charPlayer !== "") {         // Only if a character has been set as player

            // Populate game stat banner
            $("#statsName").html("Current selected character: <b>" + charArray[charPlayer].name + "</b>");
            $("#statsHP").html("HP: <b>" + charArray[charPlayer].healthPoints + "</b>");
            $("#statsWins").html("Games won: <b>" + wins + "</b>");
            $("#statsMatches").html("Games played: <b>" + matches + "</b>");


            // Populate player's card
            $("#imagePlayer").attr("src", "./assets/images/" + charArray[charPlayer].imageName + ".png");
            $("#namePlayer").text(charArray[charPlayer].name);
            $("#hpPlayer").text("HP: " + charArray[charPlayer].healthPoints);

            // Display player's card
            $("#cardPLayer").css("visibility", "visible");

            // Changing look of buttons
            $(".roundBtn").text("Set as defender");
            $(".roundBtn").removeClass("btn-success");
            $(".roundBtn").addClass("btn-danger");

            // Hide selected character as player from characterl list
            $("#" + charPlayer).css("display", "none");

        }

        if (charPlayer !== "" && charDefender !== "") {     // If both player and Defender have been selected

            // Populate Defender's card
            $("#imageDefender").attr("src", "./assets/images/" + charArray[charDefender].imageName + ".png");
            $("#nameDefender").text(charArray[charDefender].name);
            $("#hpDefender").text("HP: " + charArray[charDefender].healthPoints);

            // Display Defender's card
            $("#cardDefender").css("visibility", "visible");

            // Changing look of buttons
            $(".roundBtn").removeClass("btn-danger");
            $(".roundBtn").addClass("btn-secondary");

            // Hide selected character as Defender from characterl list
            $("#" + charDefender).css("display", "none");

            // Hide all buttons
            $(".roundBtn").css("visibility", "hidden");

            // Show ATTACK button
            $("#attack").css("visibility", "visible");

        }

    }


});
