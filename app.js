const flashCards = [
	{
		question: 'q0',
		answer: 'a0'
	},
	{
		question: 'q1',
		answer: 'a1'
	},
	{
        question: 'q2',
        answer: 'a2'
	},
	{
		question: 'q3',
		answer: 'a3'
	},
	{
		question: 'q4',
		answer: 'a4'
	},
];

const prompt = document.querySelector('.prompt');

document.body.onkeyup = function (event) {
	if (event.key === ' ') {
        let cardID = Math.floor(Math.random() * flashCards.length);
      prompt.innerHTML = flashCards[cardID].question;
	}
};
