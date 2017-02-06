// Created by Tim Van den Enden on 03/02/2017.
// Copyright © 2017 Tim Van den Enden. All rights reserved.

var counter = 0;
var pointCounter = 0;
var width = 1000;

// Maakt de rij waar de kaarten in moeten komen!
var createRows = function() {
	for (var i = 1; i <= 2; i++) {
		var iDiv = document.getElementById("cards");
		iDiv.id = "cards";
		document.getElementsByTagName('body')[0].appendChild(iDiv);

		var innerDiv = document.createElement('div');
		innerDiv.id = 'row' + i;
		innerDiv.className = 'row';
	
		iDiv.appendChild(innerDiv);

		counter++;

		// Maak de kaarten!
		createCards();

	}
}

// Maakt de kaarten!
var createCards = function() {
	var start = 1;
	var end = 9;

	if (counter >= 2) {
		start = 10;
		end = 18;
	}

	for (start; start <= end; start++) {

		var iDiv = document.getElementById("row" + counter);
		iDiv.id = "row" + counter;
		document.getElementsByTagName('div')[1].appendChild(iDiv);

		var innerDiv = document.createElement('div');
		innerDiv.id = 'card' + start;
		innerDiv.className = 'card';
		innerDiv.addEventListener('click', showImage);
	
		iDiv.appendChild(innerDiv);
	}

}

// Lijst van dieren plaatjes
var dierenPlaatjes = ["bear.jpg", "deer.jpg", "frog.jpg", "horse.jpg", "lion.jpg", "lobster.jpg", "seagull.jpg", "skunk.jpg", "turtle.jpg"];

var cardsListRow1 = ["card1" , "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9"];

var cardsListRow2 = ["card10" , "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18"];


var input1 = null;
var input2 = null;

var clickCounter = 0;

var selectedCards = [];

var showImage = function(event) {

	var cardId = event.target.id;

	selectedCards.push(cardId);

	var card = document.getElementById(cardId);

	clickCounter++;

	// Eerste kaart keuze!
	if (clickCounter == 1) {
		if (cardsListRow1.includes(cardId)) {
			var place = cardsListRow1.indexOf(cardId);
			input1 = place;

		} else if (cardsListRow2.includes(cardId)) {
			var place = cardsListRow2.indexOf(cardId);
			input1 = place;
		}

		// Shows The image from the card!
		card.style.background =  "url(image/" + dierenPlaatjes[place] + ") no-repeat";
		card.style.backgroundSize = "100px 100px";

	}

	// Tweede kaart keuze!
	if (clickCounter == 2) {
		if (cardsListRow1.includes(cardId)) {
			var place = cardsListRow1.indexOf(cardId);
			input2 = place;


		} else if (cardsListRow2.includes(cardId)) {
			var place = cardsListRow2.indexOf(cardId);
			input2 = place;



		}

		// Shows The image from the card!
		card.style.background =  "url(image/" + dierenPlaatjes[place] + ") no-repeat";
		card.style.backgroundSize = "100px 100px";

		// Reset the cards! & Compare the cards for if they are the same!
		compareCards();

		clickCounter = 0;

	}

}

var compareCards = function() {
	if (input1 == input2) {
		console.log("Good job men!");
		cardCorrect();

	} else {
		console.log("Wrong!");
		cardWrong();


	}
}

var cardCorrect = function() {
	var cardone = document.getElementById(String(selectedCards[0]));
	var cardsec = document.getElementById(selectedCards[1]);
	var pointboard = document.getElementById("totalPoints");
	
	cardone.style.border = "1px solid green";
	cardsec.style.border = "1px solid green";
	pointCounter++

	setTimeout(
    	function() {
    		pointboard.innerHTML = "Points: " + pointCounter;
			cardone.style.display = "none";
			cardsec.style.display = "none";
			cardsdiv.style.width = width + "px";
			cardone.style.border = "1px solid black";
			cardsec.style.border = "1px solid black";
			cardone.style.opacity = "0";
			cardsec.style.opacity = "0";
    }, 1000);

	selectedCards = [];

}

var cardWrong = function() {
	var cardone = document.getElementById(String(selectedCards[0]));
	var cardsec = document.getElementById(selectedCards[1]);
	cardone.style.border = "1px solid red";
	cardsec.style.border = "1px solid red";

	setTimeout(
    	function() {
			cardone.style.background = "blue";
			cardsec.style.background = "blue";
			cardone.style.border = "1px solid black";
			cardsec.style.border = "1px solid black";
    }, 1000);

	selectedCards = [];

}

// CopyRight and Start from the Game!
window.onload = function() {
  console.log("Created by Tim Van den Enden on 03/02/2017.");
  console.log("Copyright 2017 Tim Van den Enden. All rights reserved.");

  createRows();

};
