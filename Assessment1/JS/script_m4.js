/* Name: script.js
   Author: Michael Borck, michael.borck@curtin.edu.au
   Description: Add basic behaviour to Flatland
   Version: 1.0
*/

/*--
Step 1, cut-n-paste from HTML, add link to HTML

---*/

/* Find elements in DOM tree, assign to variable (best practice) */
let square = document.getElementById('square');
let words = document.getElementById('words');
document.onload = greeting();




/* Add function to handle events */
function changeColour (colour){
   square.style.background = colour;
}

function greeting() {
   // console.log("Welcome to Flatland. I am Square.");
   words.innerHTML = "Welcome to Flatland.<br> I am Square.";
}

function clicked(){
   let msg = 'Build a <br>' + createBuzzwordPhrase();
   words.innerHTML = msg
}

function createBuzzwordPhrase() {

   let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
   let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
   let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

   let idx_buz = Math.floor(Math.random() * buzz.length);
   let idx_act = Math.floor(Math.random() * action.length);
   let idx_out = Math.floor(Math.random() * outcome.length);

   return buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}



/* Add event listener */
square.addEventListener('click', (event) =>clicked());
square.addEventListener('mouseover', (event)=> changeColour('gray'));
square.addEventListener('mouseout',(event)=> changeColour('red'));



/* Lets add behaviour when clicked This makes sense to have in JavaScript as it
   'dynamic'
   
   1st-version, simple message added to innerHTML
   
   2nd-version, use buzzword generator */

   
/* This function is supplied in the supporting text file.
   students will only have to copy-n-paste the function */

   
