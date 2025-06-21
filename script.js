const quizData = [
    {
        question: "Where am I doing Summer internship?",
        options: ["TechNova", "Apex Planet", "CodeCraft", "DevHub"],
        answer: "Apex Planet"
    },
    {
        question: "Internship in which topic?",
        options: ["App Dev", "Machine Learning", "Web Dev", "Game Dev"],
        answer: "Web Dev"
    },
    {
        question: "What is the task number?",
        options: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        question: "What is the duration of internship?",
        options: ["30 days", "45 days", "60 days", "90 days"],
        answer: "45 days"
    },
    {
        question: "What is square root 64?",
        options: ["6", "8", "10", "12"],
        answer: "8"
    }
];
let currentQuestion = 0;
let score = 0;
const questionEl = document.querySelector('.question');
const optionsEl = document.querySelector('.options');
const resultEl = document.querySelector('.result');
const scoreEl = document.getElementById('score');
const wrongEl = document.getElementById('wrong');
const restartBtn = document.querySelector('.restart-btn');

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        endQuiz();
        return;
    }
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = '';
    currentQuiz.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}
function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}
function endQuiz() {
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    resultEl.style.display = 'block';
    scoreEl.textContent = score;
    wrongEl.textContent = quizData.length - score;
    restartBtn.style.display = 'inline-block';
}
restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;

    questionEl.style.display = 'block';
    optionsEl.style.display = 'flex';
    resultEl.style.display = 'none';
    restartBtn.style.display = 'none';

    loadQuestion();
});
loadQuestion();
const getJokeBtn = document.getElementById('get-joke-btn');
const jokeDisplay = document.getElementById('joke-display');
getJokeBtn.addEventListener('click', async () => {
    jokeDisplay.textContent = 'Loading joke...';
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' }
        });
        if (!response.ok) throw new Error('Failed to fetch joke');
        const data = await response.json();
        jokeDisplay.textContent = data.joke;
    } catch (error) {
        jokeDisplay.textContent = 'Sorry, could not fetch a joke right now.';
    }
});