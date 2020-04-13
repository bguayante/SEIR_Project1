//////////////////
//Flashcard Deck//
//////////////////

let flashCards = [
	{
		question: 'What is Doc Antle a doctor in?',
		answer: '',
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
		return;
	}
};

/////////////////////////////////
//Show question on prompt click//
/////////////////////////////////

function showQuestion() {
	//Show congrats if array is empty
	if (flashCards.length <= 1) {
		prompt.innerHTML = congrats;
		//Reset index counter to 0 when end of array is reached
	} else if (index == flashCards.length - 1) {
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
}

//////////////////
//Correct Button//
//////////////////

function rightClickHandler() {
	if (flashCards.length == 1) {
		prompt.innerHTML = congrats;
		if (flashCards.length) {
			flashCards.splice(index, 1);
		}
	} else if (index == flashCards.length - 1) {
		index = 0;
	} else {
		prompt.innerHTML = 'Nice job!';
		flashCards.splice(index - 1, 1);
	}
}

//Set event listeners
promptClick.addEventListener('click', showQuestion);
rightButton.addEventListener('click', rightClickHandler);
