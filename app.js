//Flashcard Deck
let flashCards = [
	{
		question: 'q0',
		answer: 'a0',
	},
	{
		question: 'q1',
		answer: 'a1',
	},
	{
		question: 'q2',
		answer: 'a2',
	},
	{
		question: 'q3',
		answer: 'a3',
	},
	{
		question: 'q4',
		answer: 'a4',
	},
];

const prompt = document.querySelector('.prompt');
const rightButton = document.querySelector('.right');
const promptClick = document.querySelector('.card');

let index = 0;

//On spacebar//
document.body.onkeyup = function (event) {
	if (event.key === ' ') {
		if (index > flashCards.length - 1) {
			index = 0;
		}
		prompt.innerHTML = flashCards[index].question;
		index += 1;
	}
	console.log('index', index);
};
//}

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
