$(document).ready(function(){
	var $form = $('#radio1');
	var $form2 = $('#radio2');
	var $group = $('#group-selector');
	var $size = $('#size-selector')

$form2.hide();


var source   = $("#teams-template").html();
var template = Handlebars.compile(source);

$size.on('click', function(){
	$form.hide();
	$form2.show();
	$(this).addClass('active');
	$group.removeClass('active');
})

$group.on('click', function(){
	$form2.hide();
	$form.show();
	$(this).toggleClass('active');
	$size.removeClass('active');
})

$form.on('submit', function(e){
		e.preventDefault();
		var numOfTeams = $('input:radio:checked').val();
		if(numOfTeams == null) {
			alert("You need to select a group size!")
		}
		var teams = teamGenerator(numOfTeams);


		$('#content').html(template(teams));
		$('#content').hide().delay(1000).show('slide');


});

$form2.on('submit', function(e){
		e.preventDefault();
		var teamSize = $('input:radio:checked').val();
		console.log("works!");
		if(teamSize == null) {
			alert("You need to select a team size!")
		}
		var teams = teamGenerator2(teamSize);
		console.log(teams);


		$('#content').html(template(teams));
		$('#content').hide().delay(1000).show('slide');


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

//constructor for team object
function teamObject(name, group){
	this.name = name;
	this.group = group;
};


//team generating function 
function teamGenerator(numOfTeams){
		var classArray = [
    " Allan",
    " Ben",
    " Brendan",
    " Brook",
    " Garrett",
    " Jacob",
    " James",
    " Jason S.",
    " Jason N.",
    " Kathryn",
    " Kim",
    " Kamie",
    " Katie",
    " Liz",
    " Madeleine",
    " Martha",
    " Matthew",
    " Shawn",
    " Vas"
];
	//define variables
		var currentTeam = [];
		var allTeams = [];
	//shuffle the class array	
		var shuffledClass = shuffle(classArray);
	//determine size of teams
		var teamSize = Math.round(shuffledClass.length/numOfTeams);
	
	//hard code team size to 2 if number of teams == 10
	  // if(numOfTeams == 10){teamSize = 2;}
	  console.log(teamSize);
	//loop through
	  for(var i=0; i<numOfTeams; i++){
	  	//push selected team name to team array
	  	var teamName = "Team " + (i+1);
	  	//push selected person name to current team array
	    currentTeam.push(shuffledClass.splice(0,teamSize));
	    if(numOfTeams == 8){
	    	if(shuffledClass.length < 10 && shuffledClass.length !== 0){
	    		currentTeam[i].push(shuffledClass[0]);
	    		shuffledClass.shift();
	    	}
	    }
	        if(shuffledClass.length == 1){
		    	currentTeam[i].push(shuffledClass[0]);
		    	console.log("PUSHING EXTRA")
		    	shuffledClass.shift();	
		    }

	    var teamObj = new teamObject(teamName, currentTeam[i]);
	    allTeams.push(teamObj);
	  }
	  //returns an array of team objects containing team name and members
	  return allTeams;
};

//team generating function 
function teamGenerator2(teamSize){
		var classArray = [
    " Allan",
    " Ben",
    " Brendan",
    " Brook",
    " Garrett",
    " Jacob",
    " James",
    " Jason S.",
    " Jason N.",
    " Kathryn",
    " Kim",
    " Kamie",
    " Katie",
    " Liz",
    " Madeleine",
    " Martha",
    " Matthew",
    " Shawn",
    " Vas"
];
	//define variables
		var currentTeam = [];
		var allTeams = [];
	//shuffle the class array	
		var shuffledClass = shuffle(classArray);
	//determine size of teams
	var teamSize = teamSize;
		var numOfTeams = Math.ceil(classArray.length/teamSize);
	
	//hard code team size to 2 if number of teams == 10
	  // if(numOfTeams == 10){teamSize = 2;}
	  console.log(teamSize);
	//loop through
	  for(var i=0; i<numOfTeams; i++){
	  	//push selected team name to team array
	  	var teamName = "Team " + (i+1);
	  	//push selected person name to current team array
	    currentTeam.push(shuffledClass.splice(0,teamSize));
	    if(numOfTeams == 8){
	    	if(shuffledClass.length < 10 && shuffledClass.length !== 0){
	    		currentTeam[i].push(shuffledClass[0]);
	    		shuffledClass.shift();
	    	}
	    }
	        if(shuffledClass.length == 1){
		    	currentTeam[i].push(shuffledClass[0]);
		    	console.log("PUSHING EXTRA")
		    	shuffledClass.shift();	
		    }

	    var teamObj = new teamObject(teamName, currentTeam[i]);
	    allTeams.push(teamObj);
	  }
	  //returns an array of team objects containing team name and members
	  return allTeams;
};

});