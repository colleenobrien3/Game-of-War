

// LAB-CLASSES


//  * Define a Card class with the following properties:
//  *
//  *   - suit (hearts, spades, clubs, diamonds)
//  *   - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
//  *   - score (1, 2, 3, 4, ... 11, 12, 13)

class Card {
	constructor(suit,rank,score){
		this.suit=suit
		this.rank=rank
		this.score=score
	}
}


 // *
 // * Define a Deck class with the following properties and methods:
 // *
 // *   - length (the number of cards - should start at 52)
 // *   - cards (an array of cards in the deck)
 // *   - draw: return a random card from the cards array



 class Deck {
 	constructor(){
 		let gameDeck=[]
 
 		let suits = ['hearts', 'clubs', 'spades', 'diamonds']
		let ranks = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace']
		let scores=[2,3,4,5,6,7,8,9,10,11,12,13,14]
		for (let i=0; i < suits.length; i++){
			for (let j=0; j < 13; j++){
				gameDeck.push(new Card(suits[i],ranks[j],scores[j]))
		}
	}
		this.cards=gameDeck
 		this.length=gameDeck.length

 		// what ever you want here
 		// ...
 		// ...
 	}
 	draw(){
 		console.log('hello')
 		//i mean i can copy and paste the randomization function in here if you want?
 	}
 }

 const entireDeck = new Deck()
 console.log(entireDeck)

 entireDeck.draw()

 function shuffleCards(array){
	for (let i=array.length -1; i>0;i--){
		let j=Math.floor(Math.random()*(i+1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

shuffleCards(entireDeck.cards);
console.log(entireDeck);




let cardsInPlay=[]



// 	//Create two players and split cards between them

let player1Stack=[]
let player2Stack=[]

function splitCards(){
	for(i=0; i<=25; i++){
	player1Stack.push(entireDeck.cards[i])
}
}
splitCards();



function splitCards2(){
	for(i=26; i<=51; i++){
	player2Stack.push(entireDeck.cards[i])
}
}
splitCards2();

//works til here

let spoilsOfWar=[];
let cardsInPlay1=[];
let cardsInPlay2=[];
let warDeclared=false;
let winnerOfRound=null;
let player1=[]
let player2=[]
let round;


function addCardsInPlay(){
	cardsInPlay1.unshift(player1Stack[0]);
	cardsInPlay2.unshift(player2Stack[0])
	}

function takeFirstCards(){
	player1Stack.shift()
	player2Stack.shift()
	}


//works thru here

function prepareForWar(){
		if (player2Stack.length<3){
			console.log('Player 2 wins')
		} else if (player2Stack.length<3){
			console.log('Player 1 wins')
		}
		spoilsOfWar.push(player2Stack[0], player2Stack[1], player2Stack[2]);
		spoilsOfWar.push(player1Stack[0], player1Stack[1], player1Stack[2]);
		// console.log(spoilsOfWar)
		player2Stack.splice(0,3);
		player1Stack.splice(0,3);
		compareCards()
}


function assignWinnerCards(winner){
	winner.push(...cardsInPlay1);
	winner.push(...cardsInPlay2);
	if(spoilsOfWar.length>0){
	winner.push(...spoilsOfWar)}
	spoilsOfWar=[]
}

function compareCards(){
	while(player2Stack.length>0 && player1Stack.length>0){
	addCardsInPlay()
	console.log('Player 1 played ' + cardsInPlay1[0].rank + ' of ' + cardsInPlay1[0].suit + '.')
	console.log('Player 2 played ' + cardsInPlay2[0].rank + ' of ' + cardsInPlay2[0].suit + '.')
	// console.log(cardsInPlay1)
	// console.log(cardsInPlay2)
	// console.log(spoilsOfWar)
	takeFirstCards()

	if (cardsInPlay1[0].rank > cardsInPlay2[0].rank){
		console.log('Player 1 wins round.')
		warDeclared=false;
		console.log('War declared: ' + warDeclared)
		winnerOfRound=player1Stack
		// console.log(player1Stack)
		// console.log(player2Stack)
		assignWinnerCards(winnerOfRound)
		console.log('Player 1 has ' + player1Stack.length + ' cards.');
		console.log('Player 2 has ' + player2Stack.length + ' cards.');
		console.log('Next round.')

		if(player2Stack.length===0){
		console.log('Player 1 wins game.')
	}

		cardsInPlay1=[]
		cardsInPlay2=[]
	} else if(cardsInPlay2[0].rank > cardsInPlay1[0].rank){
		console.log('Player 2 wins round.')
		warDeclared=false;
		console.log('War declared: '+warDeclared)
		winnerOfRound=player2Stack;
		// console.log(player1Stack)
		// console.log(player2Stack)
		assignWinnerCards(winnerOfRound)
		console.log('Player 1 has ' + player1Stack.length + ' cards.');
		console.log('Player 2 has ' + player2Stack.length + ' cards.');
		console.log('Next round.')
		if(player1Stack.length===0){
		console.log('Player 2 wins game.')
	}
		cardsInPlay1=[]
		cardsInPlay2=[]
	}else{
		winnerOfRound=null;
		warDeclared=true;
		console.log('War declared: ' + warDeclared)
		prepareForWar()
	}
}
}


for(let i=0; i<1000; i++){
	compareCards()
}






















// //When page loads:

// 	//Create cards
// let values=[];

// function createValuesArray(){
// 	for (i=2; i<15; i++){
// 	values.push(i);
// 	};
// };
// createValuesArray();
// console.log(values)

// let suits=['hearts', 'diamonds','spades','clubs'];

// let cards = [];

// function createDeck(){
// for (let i=0; i < suits.length; i++){
// 	for (let j=0; j < 13; j++){
// 		// for (let k=cardImages[0]; k>cardImages.length; k++){
// 			cards.push({
// 						rank: values[j],
// 						suit: suits[i],
// 						// cardImage: cardImages[k]
// 						})
// 					}
// 				}
// 			}
// 	// }

// createDeck();
// // console.log(cards)

// // Shuffle cards

// function shuffleCards(array){
// 	for (let i=array.length -1; i>0;i--){
// 		let j=Math.floor(Math.random()*(i+1));
// 		[array[i], array[j]] = [array[j], array[i]];

// 	}

// }

// // this function is from https://javascript.info/task/shuffle

// shuffleCards(cards)
// // console.log(cards)

// // let cardsInPlay=[]



// // 	//Create two players and split cards between them

// let player1Stack=[]
// let player2Stack=[]

// function splitCards(){
// 	for(i=0; i<=25; i++){
// 	player1Stack.push(cards[i])
// }
// }
// splitCards();



// function splitCards2(){
// 	for(i=26; i<=51; i++){
// 	player2Stack.push(cards[i])
// }
// }
// splitCards2();




// let spoilsOfWar=[];
// let cardsInPlay1=[];
// let cardsInPlay2=[];
// let warDeclared=false;
// let winnerOfRound=null;
// let player1=[]
// let player2=[]
// let round;


// // function playGame(){

// function addCardsInPlay(){
// 	cardsInPlay1.unshift(player1Stack[0]);
// 	cardsInPlay2.unshift(player2Stack[0])
// }
// // addCardsInPlay()
// // console.log(cardsInPlay1);
// // console.log(cardsInPlay2);

// function takeFirstCards(){
// 	player1Stack.shift()
// 	player2Stack.shift()
// }
// // takeFirstCards()
// // console.log(player1Stack)
// // console.log(player2Stack)

// function prepareForWar(){
// 		if (player2Stack.length<3){
// 			console.log('Player 2 wins')
// 		} else if (player2Stack.length<3){
// 			console.log('Player 1 wins')
// 		}
// 		spoilsOfWar.push(player2Stack[0], player2Stack[1], player2Stack[2]);
// 		spoilsOfWar.push(player1Stack[0], player1Stack[1], player1Stack[2]);
// 		console.log(spoilsOfWar)
// 		player2Stack.splice(0,3);
// 		player1Stack.splice(0,3);
// 		compareCards()
// }


// function assignWinnerCards(winner){
// 	winner.push(...cardsInPlay1);
// 	winner.push(...cardsInPlay2);
// 	if(spoilsOfWar.length>0){
// 	winner.push(...spoilsOfWar)}
// 	spoilsOfWar=[]
// }

// function compareCards(){
// 	addCardsInPlay()
// 	console.log(cardsInPlay1)
// 	console.log(cardsInPlay2)
// 	console.log(spoilsOfWar)
// 	takeFirstCards()

// 	if (cardsInPlay1[0].rank > cardsInPlay2[0].rank){
// 		console.log('Player 1 wins round')
// 		warDeclared=false;
// 		console.log(warDeclared)
// 		winnerOfRound=player1Stack
// 		console.log(player1Stack)
// 		console.log(player2Stack)
// 		assignWinnerCards(winnerOfRound)
// 		console.log(player1Stack);
// 		console.log(player2Stack);

// 		if(player2Stack.length===0){
// 		console.log('Player 1 wins game')
// 	}

// 		cardsInPlay1=[]
// 		cardsInPlay2=[]
// 	} else if(cardsInPlay2[0].rank > cardsInPlay1[0].rank){
// 		console.log('Player 2 wins round')
// 		warDeclared=false;
// 		console.log(warDeclared)
// 		winnerOfRound=player2Stack;
// 		console.log(player1Stack)
// 		console.log(player2Stack)
// 		assignWinnerCards(winnerOfRound)
// 		console.log(player1Stack);
// 		console.log(player2Stack);
// 		if(player2Stack.length===0){
// 		console.log('Player 2 wins game')
// 	}
// 		cardsInPlay1=[]
// 		cardsInPlay2=[]
// 	}else{
// 		winnerOfRound=null;
// 		warDeclared=true;
// 		console.log(warDeclared)
// 		prepareForWar()
// 	}

// }
// while(player1Stack.length>0 && player2Stack.length>0){
// compareCards()
// }










// function wholeThing(){
// while(player1Stack.length>0 && player2Stack.length>0){
// playGame();
// }
// }

// wholeThing()