$(document).ready(function(){
var $form = $('#radio');
var teams = [];
var classArray = [
    "Allan",
    "Ben",
    "Brendan",
    "Brook",
    "Garrett",
    "Jacob",
    "James",
    "Jason S.",
    "Jason N.",
    "Kathryn",
    "Kim",
    "Kamie",
    "Katie",
    "Liz",
    "Madeleine",
    "Martha",
    "Matthew",
    "Shawn",
    "Vas"
];

var teamObject = {};


$form.on('submit', function(e){
  e.preventDefault();
  var numOfTeams = $('input:radio:checked').val();
  teamGenerator(numOfTeams);
  teamObject = {
  team1: teams[0],
  team2: teams[1],
  team3: teams[2],
  team4: teams[3],
  team5: teams[4],
  team6: teams[5],
  team7: teams[6],
  team8: teams[7],
  team9: teams[8],
  team10: teams[9]
}
});



//shuffle function!
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}





//team generating function 
function teamGenerator(numOfTeams){
  var shuffledClass = shuffle(classArray);
  var teamSize = Math.floor(shuffledClass.length/numOfTeams);
  if(numOfTeams == 10){teamSize = 2;}
  for(var i=0; i<numOfTeams; i++){
    teams.push(shuffledClass.splice(0,teamSize));
  }
  if(shuffledClass.length !== 0){
    teams[numOfTeams-1].push(shuffledClass[0]);
  }


}




});
