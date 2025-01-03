// index for "correct" begins at 0
// revise questions 1, 2, 5, 8, ... for formatting
const questions = [
    {
        question: "Which number sentence will 9+6=15 help solve?",
        options: ["15-9=___", "15x9=___", "15/9=___", "15+9=___"],
        correct: 0
    },
    {
        question: "Which of the following correctly compares the fraction of circles shaded in Set S to the fraction of circles shaded in Set T?",
        options: ["unform frac", "c", "c", "c"],
        correct: 0
    },
    {
        question: "What number is represented by this place value model?",
        options: ["354", "454", "3,154", "4,054"],
        correct: 0
    },
    // question 4 omitted (not mc)
    {
        question: "Which statement correctly commpares the fraction of the number of eggs in Package P to the fraction of the number of eggs in Package Q?",
        options: ["unform frac", "c", "c", "c"],
        correct: 0
    },
    {
        question: "Which shows the number 78,025 written in word form?",
        options: ["Seven hundred eight thousand, two hundred fifty", "Seven hundred eight thousand, twenty-five", "Seventy-eight thousand, two hundred fifty", "Seventy-eight thousand, twenty-five"],
        correct: 0
    },
    {
        question: "What number do the shaded parts in this model represent?",
        options: ["unform frac", "c", "c", "c"],
        correct: 0
    },
    {
        question: "Which number sentence can be completed using the basic fact sentence 3x2=6?",
        options: ["unform eq", "c", "c", "c"],
        correct: 0
    },
    // question 9 omitted (not mc)
    {
        question: "In which group are exactly 3/8 of the shapes circles?",
        options: ["unform img", "c", "c", "c"],
        correct: 0
    },
    {
        question: "What number goes in the box to make this number sentence true?",
        options: ["6", "7", "8", "9"],
        correct: 0
    },
    {
        question: "What is the sum of these two fractions?",
        options: ["unform frac", "c", "c", "c"],
        correct: 0
    },
    {
        question: "Which number sentence best represents this set of flowers?",
        options: ["unform eq", "c", "c", "c"],
        correct: 0
    },
    {
        question: "Kiku had a total of 35 plants at her store on Tuesday morning. During the day, she sold 26 of these plants and then received 136 new plants. At the end of the day, exactly how many plants did Kiku have?",
        options: ["9", "61", "145", "197"],
        correct: 0
    },
    {
        question: "What is the difference between these two fractions?",
        options: ["unform frac", "c", "c", "c"],
        correct: 0
    },
    // question 16 omitted (not mc)
    {
        question: "What is unform frac + unform frac?",
        options: ["unform frac", "c", "c", "c"],
        correct: 0
    },
    {
        question: "unform eq",
        options: ["2,285", "2,715", "2,815", "3,285"],
        correct: 0
    },
    {
        question: "Which of these is best represented by this number line?",
        options: ["unform eq", "c", "c", "c"],
        correct: 0
    },
    // question 20 omitted (not mc)
    // END FIRST SECTION
    {
        question: "Alex worked for 5 hours raking leaves. How many minutes are equivalent to 5 hours?",
        options: ["500 minutes", "300 minutes", "150 minutes", "120 minutes"],
        correct: 0
    },
    {
        question: "Which best describes the figures in this picture?",
        options: ["Cubes", "Squares", "Rectangles", "Rectangular prisms"],
        correct: 0
    },
    {
        question: "What is the most reasonable length of a bed?",
        options: ["6 feet", "6 inches", "6 meters", "6 centimeters"],
        correct: 0
    },
    {
        question: "What is closest to the time shown on this clock?",
        options: ["4:45", "5:45", "9:05", "9:25"],
        correct: 0
    },
    // question 25 omitted (not mc)
    {
        question: "Which tower of blacks appears to be congruent to Jack's tower of blocks?",
        options: ["unform img", "c", "c", "c"],
        correct: 0
    },
    {
        question: "He finished selling lumber three hours later. At what time did Franklin finish selling lumber?",
        options: ["unform time", "c", "c", "c"],
        correct: 0
    },
    {
        question: "What is the perimeter of the shaded figure on this grid?",
        options: ["18 units", "19 units", "22 units", "24 units"],
        correct: 0
    },
    {
        question: "Exactly how much money does Christina have?",
        options: ["$3.50", "$3.60", "$3.85", "$4.05"],
        correct: 0
    },
    {
        question: "Alfred drew two rays and a line segment in his geometry notebook. Which of these could be the picture Alfred drew?",
        options: ["unform img", "c", "c", "c"],
        correct: 0
    },
    {
        question: "Which measurement is closest to the perimeter of this figure?",
        options: ["5 feet", "8 feet", "10 feet", "12 feet"],
        correct: 0
    },
    {
        question: "Which shows all the possible outcomes for a reward using one type of toy and one color?",
        options: ["unform img", "c", "c", "c"],
        correct: 0
    },
    {
        question: "Which ordered set of circles did she remove?",
        options: ["unform img", "c", "c", "c"],
        correct: 0
    },
    {
        question: "Tia surveyed 14 students. She asked each student to choose one favorite food from four choices. Which chart could show the data from Tia's survey?",
        options: ["unform table", "c", "c", "c"],
        correct: 0
    },
    {
        question: "If the pattern in the table continues in the same way, which of the following should be used to determine how many minutes it takes Kendal to run 10 steps?",
        options: ["unform eq", "c", "c", "c"],
        correct: 0
    },
    {
        question: "Which bar graph shows the same information?",
        options: ["unform img", "c", "c", "c"],
        correct: 0
    },
    {
        question: "Which number sentence shows the use of the indentity property of multiplication?",
        options: ["unform eq", "c", "c", "c"],
        correct: 0
    },
    {
        question: "Which describes the rule used in this pattern?",
        options: ["Divide by 9", "Multiply by 3", "Subtract 2", "Add 2"],
        correct: 0
    },
    {
        question: "What was the total number of points scored by the students?",
        options: ["20", "19", "10", "8"],
        correct: 0
    },
    // question 40 omitted (not mc)
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function calculateScaledScore() {
    // Scale to 600
    // Add scaled score ranges
    if (score === 0) return 0;
    else if (score >= 80) return 90;
    else if (score>= 60) return 75;
    else if (score >= 40) return 60;
    else if (score >= 20) return 45;
    else return 30;
}

function displayQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('question-container');
    
    let html = `
        <h2>Quiz Question</h2>
        <p>${question.question}</p>
        <div class="options">
    `;

    question.options.forEach((option, index) => {
        html += `
            <label class="option">
                <input type="radio" name="answer" value="${index}"> ${option}
            </label>
        `;
    });

    html += '</div>';
    container.innerHTML = html;

    // Update question counter
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = questions.length;
    
    // Reset state
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('next-btn').disabled = true;
    answered = false;
}

function checkAnswer() {
    if (answered) return;

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedbackElement = document.getElementById('feedback');
    
    if (!selectedAnswer) {
        alert('Please select an answer');
        return;
    }

    answered = true;
    const isCorrect = parseInt(selectedAnswer.value) === questions[currentQuestion].correct;
    feedbackElement.style.display = 'block';
    
    if (isCorrect) {
        score++;
        document.getElementById('score').textContent = score;
        feedbackElement.textContent = 'Correct!';
        feedbackElement.className = 'feedback correct';
    } else {
        feedbackElement.textContent = `Incorrect. The correct answer is ${questions[currentQuestion].options[questions[currentQuestion].correct]}`;
        feedbackElement.className = 'feedback incorrect';
    }

    document.getElementById('next-btn').disabled = false;
    
    // If this is the last question, show final score instead of enabling next button
    if (currentQuestion === questions.length - 1) {
        showFinalScore();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

function showFinalScore() {
    const finalScoreElement = document.getElementById('final-score');
    const percentage = (score / questions.length) * 100;
    finalScoreElement.innerHTML = `
        You have completed the test.<br>
        Final Score: ${score} out of ${questions.length} (${percentage.toFixed(1)}%)
        Total Scaled Score (out of 600): ${scaledScore}
    `;
    finalScoreElement.style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
}

// Initialize the first question (CHANGE TO A START BUTTON LATER)
displayQuestion();