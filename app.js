//////////////////
//Flashcard Deck//
//////////////////

let flashCards = [
	{
		question: 'What is Doc Antle a doctor in?',
		answer: 'Mystical Science',
	},
	{
		question: 'Who does Joe Exotic hate more than anyone in the world?',
		answer: 'Carol Baskin',
	},
	{
		question: "What's the name of Carol Baskin's dead husband?",
		answer: 'Don Lewis',
	},
	{
		question: 'Did Carol Baskin kill her husband?',
		answer: 'Almost certainly',
	},
	{
		question:
			'How long did it take Kelci Safferty to return to work after having his arm bitten off by a tiger?',
		answer: 'One week.',
	},
	{
		question: 'In what year did Joe Exotic run for governor of Oklahoma?',
		answer: '2016',
	},
	{
		question:
			'How much did Joe Exotic pay Allen Glover to attempt to kill Carol Baskin?',
		answer: '$3,000',
	},
	{
		question: 'To how many years has Joe Exotic been sentenced to jail?',
		answer: '22 years',
	},
	{
		question: 'How many spouses does Doc Antle have?',
		answer: 'Nine (allegedly)',
	},
];

/////////////
//Variables//
/////////////

const prompt = document.querySelector('.prompt');
const rightButton = document.querySelector('.right');
const wrongButton = document.querySelector('.wrong');
const promptClick = document.querySelector('.card');
const controls = document.querySelector('.controls');

const congrats = "Congratulations, you win! You're a real Tiger King! Click the card to reload";

let index = 0;

/////////////////////////////////
//Show question on prompt click//
/////////////////////////////////

function showQuestion() {
	if (prompt.innerHTML === congrats) {
		location.reload()
	} else if (flashCards.length <= 1) {
		prompt.innerHTML = congrats;
	} else if (index === flashCards.length - 1) {
		index = 0;
		prompt.innerHTML = flashCards[0].question;
		controls.innerHTML = 'Press spacebar to see the answer!';
		index += 1;
	} else {
		prompt.innerHTML = flashCards[index].answer
			? (prompt.innerHTML = flashCards[index].question)
			: (prompt.innerHTML = flashCards[index].question);
		controls.innerHTML = 'Press spacebar to see the answer!';
		index += 1;
	}
}

/////////////////////////////////
//Show answer on spacebar press//
/////////////////////////////////

document.body.onkeyup = function (event) {
	if (
		event.key === ' ' &&
		prompt.innerHTML != congrats &&
		prompt.innerHTML != 'Nice job! Click the card to continue!'
	) {
		prompt.innerHTML = flashCards[index - 1].answer;
		controls.innerHTML = '';
	}
};

//////////////////////////////////////////////////
//Splice at index if 'Correct' button is pressed//
//////////////////////////////////////////////////

function rightClickHandler() {
	if (flashCards.length === 1) {
		prompt.innerHTML = congrats;
		if (flashCards.length) {
			flashCards.splice(index, 1);
		}
		// index = 0
	} else if (index === flashCards.length - 1) {
		index = 0;
	} else {
		prompt.innerHTML = 'Nice job! Click the card to continue!';
		controls.innerHTML = '';
		flashCards.splice(index - 1, 1);
	}
}

//////////////////
//Reset on click//
//////////////////

///////////////////
//Event listeners//
///////////////////

promptClick.addEventListener('click', showQuestion);
rightButton.addEventListener('click', rightClickHandler);
wrongButton.addEventListener('click', showQuestion);
