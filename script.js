// Global variable
var globalValue = 90;

// Show the initial value
document.getElementById("initial").innerHTML =
  "Initial Global Value: " + globalValue;

// Function 1: adds 10 to the global variable
function add() {
  globalValue = globalValue + 10;
  document.getElementById("result").innerHTML =
    "Updated Global Value after adding 10: " + globalValue;
}

// Function 2: subtracts 50 from the global variable
function sub() {
  globalValue = globalValue - 50;
  document.getElementById("result").innerHTML =
    "Updated Global Value after subtracting 50: " + globalValue;
}
