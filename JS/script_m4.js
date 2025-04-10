var square = document.getElementById('square');
var words = document.getElementById('words');
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
   var msg = 'Build a <br>' + createBuzzwordPhrase();
   words.innerHTML = msg;
}

function createBuzzwordPhrase() {

   var buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
   var action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
   var outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

   var idx_buz = Math.floor(Math.random() * buzz.length);
   var idx_act = Math.floor(Math.random() * action.length);
   var idx_out = Math.floor(Math.random() * outcome.length);

   return buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}



/* Add event listener */
square.addEventListener('click', function(event){
   clicked();
});
square.addEventListener('mouseover', function(event){
   changeColour('gray'); 
});
square.addEventListener('mouseout',function(event){
      changeColour('red');
});



   
