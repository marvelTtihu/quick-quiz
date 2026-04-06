const questions = [
    {
        question: "1. What is HTML?",
        options: ["A. Hamburger Language ", "B. Hypertext Markup Language", "C. Coding language", "D. None of the above"],
        answer: "B"
    },
    {
        question: "2. What is CSS?",
        options: ["A. Chess game", "B. Coding Style Sheet", "C. Cascading Style Sheet", "D. None of the above"],
        answer: "C"
    },
    {
        question: "3. What are the box model properties?",
        options: ["A. Flex, Grid, Block, Inline", "B. Margin, Border, Padding, Content", "C. I don't know, maybe a box ", 
            "D. It's a model for a box"],
        answer: "B"
    },
    {
        question: "4. What is Javascript?",
        options: ["A. Coding Language", "B. Logical Language", "C. Programming Language", "D. All of the above"],
        answer: "D"
    },
    {
        question: "5. What is a DOM?",
        options: ["A. Data Object Model", "B. Document Object Model", "C. DOM DOM DOM", "D. Document Object Manager"],
        answer: "B"
    }
]

let theQuestion = document.getElementById("the-question");
let theOptions = document.getElementById("the-options");
let nextButton = document.getElementById("next-button");
let skipButton = document.getElementById("skip-button");

let indexQuestion = 0;
let score = 0;

function showQuestion() {
    theOptions.innerHTML = "";
    theQuestion.textContent = questions[indexQuestion].question;
    nextButton.disabled = true;

    questions[indexQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => {
            checkAnswer(option[0]);
        })
        theOptions.appendChild(button)
    })
}

function checkAnswer(SelectedOption) {
    nextButton.disabled = false;
    if (SelectedOption === questions[indexQuestion].answer) {
        score++;
    }
}

function nextQuestion() {
    indexQuestion++;
    if (indexQuestion < questions.length) {
        showQuestion();
    }
    else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").innerHTML = `
        <h1 class="title-result">Quiz Completed</h1>
        <h2 class="results">You answered ${score} out of ${questions.length} questions correctly</h2>
        <button id="play-again-button" class="another-btn">Play again!</button>
    `;

    document.getElementById("play-again-button").addEventListener("click", resetQuiz);
}

function resetQuiz() {
    indexQuestion = 0;
    score = 0;

    document.getElementById("quiz-container").innerHTML= `
        <h2 id="the-question" class="question"></h2>
        <div id="the-options" class="options"></div>
        <div class="btn-group">
            <button id="skip-button" class="secondary-btn">Skip</button>
            <button id="next-button" class="primary-btn">Next</button>
        </div>
    `;

    theQuestion = document.getElementById('the-question');
    theOptions = document.getElementById('the-options');
    nextButton = document.getElementById('next-button');
    skipButton = document.getElementById('skip-button');

    nextButton.addEventListener('click', nextQuestion);
    skipButton.addEventListener('click', nextQuestion);

    showQuestion();
}

nextButton.addEventListener('click', nextQuestion);
skipButton.addEventListener('click', nextQuestion);

showQuestion();
