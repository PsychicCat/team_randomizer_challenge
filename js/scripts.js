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

var shuffledClass = shuffle(classArray);
var teams = [];


//team generating function 
function teamGenerator(numOfTeams){
  var teamSize = Math.floor(shuffledClass.length/numOfTeams);
  if(numOfTeams == 10){teamSize = 2;}
  for(var i=0; i<numOfTeams; i++){
    teams.push(shuffledClass.splice(0,teamSize));
  }
  if(shuffledClass.length !== 0){
    teams[numOfTeams-1].push(shuffledClass[0]);
  }
}



