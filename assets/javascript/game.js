// VARIABLES --------------------------------------------

//      OBJECTS

var character1 = {
    name: "Han Solo",
    imageName: "solo",
    defeated: false,
    healthPoints: 120,
    attackPower: 7,
    counterAttackPower: 10,
}

var character2 = {
    name: "Master Yoda",
    imageName: "yoda",
    defeated: false,
    healthPoints: 130,
    attackPower: 9,
    counterAttackPower: 12,
}

var character3 = {
    name: "Princess Leia",
    imageName: "pleia",
    defeated: false,
    healthPoints: 140,
    attackPower: 11,
    counterAttackPower: 14,
}

var character4 = {
    name: "Darth Maul",
    imageName: "darthmaul",
    defeated: false,
    healthPoints: 150,
    attackPower: 13,
    counterAttackPower: 16,
}

var character5 = {
    name: "Darth Vader",
    imageName: "darthvader",
    defeated: false,
    healthPoints: 160,
    attackPower: 15,
    counterAttackPower: 18,
}

var character6 = {
    name: "Obi Wan Kenobi",
    imageName: "obiwan",
    defeated: false,
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
var attacks = 0;
var wins = 0;
var loss = 0;

//      BOOLEAN
var gameMode = false;

// ------------------------------------------------------------

$(document).ready(function () {

    // First load... lets play!
    gameMode = true;

    // Show stats of game (needs player and defender defined)
    function logStats() {
        // USe this funtion to log the game stats

        console.log("----------------------")
        console.log("  PLAYER STATS")
        console.log("Name: " + charArray[charPlayer].name);
        console.log("HP: " + charArray[charPlayer].healthPoints);
        console.log("Attacks: " + attacks);
        console.log("Initial attack power: " + charArray[charPlayer].attackPower);
        console.log("Current attack power: " + (charArray[charPlayer].attackPower * attacks));
        console.log("----------------------")
        console.log("  DEFENDER")
        console.log("Name: " + charArray[charDefender].name);
        console.log("HP: " + charArray[charDefender].healthPoints);
        console.log("----------------------")
    }

    // Updates site... makes the pretty magic :)
    function updateScreen() {

        // Updating character list
        for (var i = 0; i < charArray.length; i++) {
            $("#charName" + (i + 1)).html("<h2>" + charArray[i].name + "</h2><p style=\"color:white;\">" + charArray[i].healthPoints + "</p>");
            $("#charImage" + (i + 1)).attr("src", "./assets/images/" + charArray[i].imageName + ".png");

            if (charArray[i].defeated) {
                $("#charName" + (i + 1)).html("<h2>" + charArray[i].name + "</h2><p style=\"color:red\">Defeated</p>");

                $("#" + i).css("visibility", "hidden");
                $("." + (i + 1)).css("visibility", "visible");
            }

        }

        if (charPlayer !== "") {         // Only if a character has been set as player

            // Populate game stat banner
            $("#statsName").html("Current selected character: <b>" + charArray[charPlayer].name + "</b>");
            $("#statsHP").html("HP: <b>" + charArray[charPlayer].healthPoints + "</b>");
            $("#statsWins").html("Attackers defeated: <b>" + wins + "</b>");
            $("#statsMatches").html("Games played: <b>" + matches + "</b>");
            $("#statsLoss").html("Games lost: <b>" + loss + "</b>");

            // Populate player's card

            // Displaying player's image
            $("#imagePlayer").attr("src", "./assets/images/" + charArray[charPlayer].imageName + ".png");

            // Displaying player's name
            $("#namePlayer").text(charArray[charPlayer].name);

            // Display player's health points
            $("#hpPlayer").text("HP: " + charArray[charPlayer].healthPoints);

            // Display player's card
            $("#cardPLayer").css("visibility", "visible");

            // Changing look of buttons
            $(".roundBtn").text("Set as defender");
            $(".roundBtn").removeClass("btn-success");
            $(".roundBtn").addClass("btn-danger");

            // Hide selected character as player from characterl list
            $("#" + charPlayer).css("visibility", "hidden");    // Hide button
            $("." + charPlayer).css("visibility", "hidden");    // Hide info

        }

        if (charPlayer !== "" && charDefender !== "") {     // If both player and defender have been selected

            // Populate defender's card

            // Displaying defender's image
            $("#imageDefender").attr("src", "./assets/images/" + charArray[charDefender].imageName + ".png");

            // Displaying defender's name
            $("#nameDefender").text(charArray[charDefender].name);

            // Display defender's health points or "defeated"
            if (!charArray[charPlayer].defeated) {
                $("#hpDefender").text("HP: " + charArray[charDefender].healthPoints);
            }
            else {
                $("#hpDefender").text("Defeated");
            }

            // Display defender's card
            $("#cardDefender").css("visibility", "visible");

            // Hide selected character as defender from characterl list
            $("#" + charDefender).css("visibility", "hidden");    // Hide button
            $("." + charDefender).css("visibility", "hidden");    // Hide info

            // Hide all buttons
            $(".roundBtn").css("visibility", "hidden");

            // Show ATTACK button
            $("#attack").css("visibility", "visible");

        }

        // console.log("Defated state of " + charDefender + " = " + charArray[charDefender].defeated);

        if (charDefender !== "") {
            if (charArray[charDefender].defeated) {
                // The crard will not show the heath ponts anymore
                $("#hpDefender").text("DEFEATED!");

                // Hide ATTACK button
                $("#attack").css("visibility", "hidden");
            }
        }
    }

    // Initialize all for new match
    function initializeAll() {
        // REDRAW
        charPlayer = "";
        charDefender = "";
        attacks = 0;

        for (var i = 0; i < charArray.length; i++) {
            charArray[i].defeated = false;
        }

        updateScreen();
    }

    // Player has been defeated!
    function lostGame() {

        // Game lost... re-draw
        gameMode = false;

        // Increase loss counter
        loss++;

        // Increase matches counter
        matches++;

        // Alert user that the player has been defeated!
        alert("Your character " + charArray[charPlayer].name + " has been defeated by " + charArray[charDefender].name);

        // Invite to play again
        alert("To play again select a character to play");

        initializeAll();
    }

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

    // Player clicks to attack a character
    $("#attack").on("click", function () {

        // Confirm the player and Defender characters have been set
        if (charPlayer !== "" && charDefender !== "") {

            // Checking if character has been defeated
            function isDefeated(who) {
                if (charArray[who].healthPoints < 1) {
                    // If health points are under 1 set character as "defeated"
                    charArray[who].defeated = true;
                    // wins++;

                    if (charArray[charPlayer].defeated) {
                        // Player has been defeated... game lost

                        console.log("Player character has been defeated. Game over!");
                        lostGame()
                    }

                    if (charArray[charDefender].defeated) {
                        // Defender character has been defeated
                        wins++;
                        console.log("Character " + charArray[charDefender].name + " has been defeated.");
                    }
                }
            }

            // Calculate the losses for every characters
            var lossPlayer = charArray[charDefender].counterAttackPower;
            var lossDefender = (charArray[charPlayer].attackPower * (attacks + 1));

            // Updating the health points for both characters
            charArray[charPlayer].healthPoints = charArray[charPlayer].healthPoints - lossPlayer;
            charArray[charDefender].healthPoints = charArray[charDefender].healthPoints - lossDefender;

            isDefeated(charPlayer);
            isDefeated(charDefender);

            // Log a detailed explanation of the calculation
            console.log("Player loss: " + lossPlayer + "     ( " + charArray[charPlayer].healthPoints + " ) = Player HP - ( " + charArray[charDefender].counterAttackPower + " )");
            console.log("Defender loss: " + lossDefender + "     ( " + charArray[charDefender].healthPoints + " ) = Defender HP - ( " + charArray[charPlayer].attackPower + " ) * ( " + attacks + " + 1 ) )");

            // Increase the attacks count
            attacks++;

            // Log the status of the two characters
            logStats();
        }
        else {
            // This case would never happen.. but just in case!
            alert("ERROR: Either a player or defender character have not been selected!")
        }
        updateScreen();

    });

    // Select another defenter character
    $("#change").on("click", function () {

        // Hide Defender's card
        $("#cardDefender").css("visibility", "hidden");

        // Return selected character as Defender to character list
        $("#" + charDefender).css("visibility", "visible");
        $("." + charDefender).css("visibility", "visible");

        // Show all buttons
        $(".roundBtn").css("visibility", "visible");

        // Show ATTACK button
        $("#attack").css("visibility", "hidden");

        // Clear selected Defender
        charDefender = "";

        updateScreen();
    })

    updateScreen();
});
