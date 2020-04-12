//Flashcard Deck//
let flashCards = [
	{
		question: 'What is Doc Angle a doctor in?',
		answer: 'Mystical Science',
	},
	{
		question: 'How many years in jail has Joe Exotic been sentenced to?',
		answer: '22',
	},
	{
		question: "What is the name of Carole Baskin's dead husband?",
		answer: 'Don Lewis',
	},
	{
		question: 'In what state is the GW Zoo located?',
		answer: 'Oklahoma',
	},
	{
		question: 'In what kind of accident did John Reinke lose his legs?',
		answer: 'Ziplining accident',
	},
	{
		question: 'In which party\'s gubernatorial primary did Joe Exotic run in 2018?',
		answer: 'Libertarian Party',
	},
	{
		question: 'After fleeing his zoo, in which country did Joe Exotic pretend to be?',
		answer: 'Belize',
	},
	{
		question: 'How much did Joe Exotic give Allen Glover to kill Carole Baskin?',
		answer: '$3,000',
	},
];

//Set variables to be used for event listeners later
const prompt = document.querySelector('.prompt');
const rightButton = document.querySelector('.right');
const promptClick = document.querySelector('.card');

//Congratulations message on game over
const congrats = 'Congratulations, you win! \n Stay safe, friend.';

//Track which object is displayed and manipulated at a given time
let index = 0


//Show answer on spacebar press
document.body.onkeyup = function (event) {
	if (event.key === ' ') {
		prompt.innerHTML = flashCards[index].answer;
	}
	console.log('index', index);
	console.log('flashcards length:',flashCards.length)
};

//Show question on div click
function showQuestion() {
	if (flashCards.length <= 1) {
		prompt.innerHTML = congrats;
	}
	if (index > flashCards.length - 2) {
		index = 0;
	}
	index += 1;
	prompt.innerHTML = flashCards[index].answer
		? (prompt.innerHTML = flashCards[index].question)
		: (prompt.innerHTML = flashCards[index].question);
		console.log('index:', index);
		console.log('flashcards length:', flashCards.length);
}

function rightClickHandler() {
	prompt.innerHTML = 'Nice job!'
	flashCards.splice(index, 1);
}

promptClick.addEventListener('click', showQuestion);
rightButton.addEventListener('click', rightClickHandler);



// let cardID = Math.floor(Math.random() * flashCards.length);
// function rightClickHandler() {
// 	prompt.innerHTML = flashCards[cardID].question;
// 	flashCards.splice(cardID, 1);
// 	// cardID = Math.floor(Math.random() * flashCards.length);
// 	console.log(flashCards);
// 	console.log(cardID)
// }

// function promptClickHandler(){
// 	prompt.innerHTML = flashCards[cardID].answer ;
// }

// rightButton.addEventListener('click', rightClickHandler);
// promptClick.addEventListener('click', promptClickHandler)

//Alternate questions and answers
//     counter += 1
//     if (counter % 2 === 0) {
//         //Replace <p> text with questions and answers
//
//     } else if (counter % 2 === 1)
//         prompt.innerHTML = flashCards[cardID].question;

//};
