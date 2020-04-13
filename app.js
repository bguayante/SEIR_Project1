//////////////////
//Flashcard Deck//
//////////////////

let flashCards = [
	{
		question: 'Q1',
		answer: 'A1',
	},
	{
		question: 'Q2',
		answer: 'A2',
	},
	{
		question: 'Q3',
		answer: 'A3',
	},
	{
		question: 'Q4',
		answer: 'A4',
	},
	{
		question: 'Q5',
		answer: 'A5',
	},
	{
		question: 'Q6',
		answer: 'A6',
	},
	{
		question: 'Q7',
		answer: 'A7',
	},
	{
		question: 'Q8',
		answer: 'A8',
	},
];

//Set variables to be used for event listeners
const prompt = document.querySelector('.prompt');
const rightButton = document.querySelector('.right');
const promptClick = document.querySelector('.card');

//Congratulations message on game over
const congrats = "Congratulations, you win! \n You're a real Tiger King!";

//Track which object is displayed and manipulated at a given time
let index = 0;

/////////////////////////////////
//Show answer on spacebar press//
/////////////////////////////////

document.body.onkeyup = function (event) {
	if (index == -1) {
		index = 0;
	} else if (event.key === ' ' && prompt.innerHTML != congrats) {
		prompt.innerHTML = flashCards[index - 1].answer;
	} else if ((prompt.innerHTML = congrats)) {
		prompt.innerHTML = flashCards[index].question;
	}
	console.log('index:', index);
};

/////////////////////////////////
//Show question on prompt click//
/////////////////////////////////

function showQuestion() {
	//Show congrats if array is empty
	if (flashCards.length <= 1) {
		prompt.innerHTML = congrats;
		//Reset index counter to 0 when end of array is reached
	} else if (index == flashCards.length) {
		index = 0;
		prompt.innerHTML = flashCards[0].question;
		index += 1;
	} else if (index == 0) {
		//Needed to display question at index 0
		prompt.innerHTML = flashCards[0].question;
		index += 1;
	} else {
		//Increment index by 1 and replace prompt div text with question
		prompt.innerHTML = flashCards[index].answer
			? (prompt.innerHTML = flashCards[index].question)
			: (prompt.innerHTML = flashCards[index].question);
		index += 1;
	}
	console.log('index:', index);
	console.log('flashcards length:', flashCards.length);
	console.log(flashCards);
}

//////////////////
//Correct Button//
//////////////////

function rightClickHandler() {
	if (flashCards.length <= 0) {
		prompt.innerHTML = congrats;
	} else if (index == flashCards.length - 1) {
		index = 0;
		// } else if ((index == 0) && (flashCards.length == 1)){
		// 	prompt.innerHTML = 'Nice job!';
		// 	flashCards.pop();
		// 	console.log('POP')
		//	index += 1
	} else if (flashCards.length == 1) {
		prompt.innerHTML = 'Nice job!';
		flashCards.splice(-1, 1);
		console.log('POP');
	} else {
		prompt.innerHTML = 'Nice job!';
		flashCards.splice(index - 1, 1);
		console.log('index:', index);
		console.log('flashcards length:', flashCards.length);
		console.log(flashCards);
	}
}
//Set event listeners
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
