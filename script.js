let turns = 5;
let gadgets = ["Anywhere Door", "Time Cloth", "Take-copter"];
let foundGadgets = [];

// Update the display of turns left
function updateTurns() {
    document.getElementById("turns").innerText = `Turns left: ${turns}`;
}

// Show messages in the game
function showMessage(message) {
    document.getElementById("message").innerText = message;
}

// Search a specific location for gadgets
function searchLocation(locationIndex) {
    // Check if game is over
    if (turns <= 0 || foundGadgets.length >= gadgets.length) {
        showMessage("The game is over! Please click 'New Game' to restart.");
        return; 
    }

    turns--; // Decrease the turn count
    updateTurns(); // Update the display

    const found = Math.random() > 0.5; // 50% chance of finding a gadget
    if (found && gadgets.length > 0) {
        const gadget = gadgets.shift(); // Get the first gadget in the list
        foundGadgets.push(gadget);
        showMessage(`You found the ${gadget} in the location!`);
    } else {
        showMessage("Sorry, no gadgets found here.");
    }

    // Check if the game is over
    if (turns === 0 || foundGadgets.length === 3) {
        endGame();
    }
}

// End the game and display the results
function endGame() {
    document.querySelector(".locations").classList.add("hidden"); // Hide search buttons
    document.getElementById("summary").classList.remove("hidden"); // Show summary

    const message = foundGadgets.length === 3 ? 
        "Congratulations! You found all the gadgets!" : 
        "Oh no! Gian and Suneo found the remaining gadgets. Game Over!";
        
    // Display found gadgets and message
    document.getElementById("gadgets-found").innerText = `Gadgets found: ${foundGadgets.join(", ") || "None"}.`;
    showMessage(message);

    // Show the New Game button
    document.getElementById("new-game").classList.remove("hidden");
}

// Reset the game for another play
function resetGame() {
    turns = 5;
    gadgets = ["Anywhere Door", "Time Cloth", "Take-copter"];
    foundGadgets = [];
    updateTurns(); // Reset turn display
    showMessage(""); // Clear messages
    document.querySelector(".locations").classList.remove("hidden"); // Show buttons
    document.getElementById("summary").classList.add("hidden"); // Hide summary
    document.getElementById("gadgets-found").innerText = ""; // Clear found gadgets display
    document.getElementById("new-game").classList.add("hidden"); // Hide New Game button
}

// Initialize game display
updateTurns();
