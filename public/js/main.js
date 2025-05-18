// Main application logic

// DOM Elements
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');
const homeBtn = document.getElementById('home-btn');
const testBtn = document.getElementById('test-btn');
const resultsBtn = document.getElementById('results-btn');
const settingsBtn = document.getElementById('settings-btn');
const startTestBtn = document.getElementById('start-test');
const viewResultsBtn = document.getElementById('view-results');
const submitAnswerBtn = document.getElementById('submit-answer');
const nextQuestionBtn = document.getElementById('next-question');
const retakeTestBtn = document.getElementById('retake-test');
const viewTrendsBtn = document.getElementById('view-trends');
const saveSettingsBtn = document.getElementById('save-settings');

// Application State
let currentPage = 'home';
let currentQuestionIndex = 0;
let questions = [];
let currentTestAnswers = [];
let currentUser = {
 id: 'user123', // In a real app, this would come from authentication
 username: 'testuser',
 accessibilityPreferences: {
 theme: 'black-on-white',
 fontSize: 'medium',
 reduceMotion: false,
 screenReaderOptimized: false
 }
};

// Initialize the application
function initApp() {
 // Set up event listeners
 setupNavigation();
 setupEventListeners();

 // Load user preferences
 loadUserPreferences();

 // Load questions (in a real app, these would come from the server)
 fetchQuestions();
}

// Set up navigation between pages
function setupNavigation() {
 navButtons.forEach(button => {
 button.addEventListener('click', () => {
 const targetPage = button.id.split('-')[0];
 navigateTo(targetPage);
 });
 });
}

// Set up other event listeners
function setupEventListeners() {
 startTestBtn.addEventListener('click', () => {
 navigateTo('test');
 startTest();
 });

 viewResultsBtn.addEventListener('click', () => {
 navigateTo('results');
 loadResults();
 });

 submitAnswerBtn.addEventListener('click', submitAnswer);
 nextQuestionBtn.addEventListener('click', loadNextQuestion);

 retakeTestBtn.addEventListener('click', () => {
 navigateTo('test');
 startTest();
 });

 viewTrendsBtn.addEventListener('click', showPerformanceTrends);

 saveSettingsBtn.addEventListener('click', saveUserPreferences);

 // Theme buttons
 document.querySelectorAll('.theme-btn').forEach(button => {
 button.addEventListener('click', () => {
 document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
 button.classList.add('active');
 const theme = button.getAttribute('data-theme');
 document.body.className = `theme-${theme} font-size-${currentUser.accessibilityPreferences.fontSize}`;
 currentUser.accessibilityPreferences.theme = theme;
 });
 });

 // Font size buttons
 document.getElementById('increase-font').addEventListener('click', () => {
 changeFontSize(1);
 });

 document.getElementById('decrease-font').addEventListener('click', () => {
 changeFontSize(-1);
 });

 // Checkboxes
 document.getElementById('reduce-motion').addEventListener('change', (e) => {
 if (e.target.checked) {
 document.body.classList.add('reduce-motion');
 } else {
 document.body.classList.remove('reduce-motion');
 }
 currentUser.accessibilityPreferences.reduceMotion = e.target.checked;
 });

 document.getElementById('screen-reader-opt').addEventListener('change', (e) => {
 if (e.target.checked) {
 document.body.classList.add('screen-reader-optimized');
 } else {
 document.body.classList.remove('screen-reader-optimized');
 }
 currentUser.accessibilityPreferences.screenReaderOptimized = e.target.checked;
 });
}

// Navigate to a different page
function navigateTo(page) {
 // Update active state in navigation
 navButtons.forEach(button => {
 if (button.id === `${page}-btn`) {
 button.classList.add('active');
 } else {
 button.classList.remove('active');
 }
 });

 // Show the active page
 pages.forEach(pageEl => {
 if (pageEl.id === page) {
 pageEl.classList.add('active');
 } else {
 pageEl.classList.remove('active');
 }
 });

 currentPage = page;
}

// Fetch questions from the server
async function fetchQuestions() {
 try {
 // In a real app, this would be a fetch request to your API
 // For now, we'll use the sample questions from questions.js
 questions = sampleQuestions;
 console.log('Questions loaded:', questions.length);
 } catch (error) {
 console.error('Error fetching questions:', error);
 }
}

// Start a new test
function startTest() {
 currentQuestionIndex = 0;
 currentTestAnswers = [];

 // Reset UI elements
 document.getElementById('progress-fill').style.width = '0%';
 document.getElementById('current-question').textContent = '1';
 document.getElementById('total-questions').textContent = questions.length;

 // Load the first question
 loadQuestion(0);
}

// Load a specific question
function loadQuestion(index) {
 if (index >= questions.length) {
 // Test is finished
 finishTest();
 return;
 }

 const question = questions[index];
 const questionContainer = document.getElementById('question-container');

 // Clear previous question
 questionContainer.innerHTML = '';

 // Hide feedback container
 document.getElementById('feedback-container').style.display = 'none';

 // Show submit button, hide next button
 submitAnswerBtn.style.display = 'block';
 nextQuestionBtn.style.display = 'none';

 // Update progress
 document.getElementById('progress-fill').style.width = `${((index + 1) / questions.length) * 100}%`;
 document.getElementById('current-question').textContent = index + 1;

 // Use the appropriate template based on question type
 let template;
 switch (question.type) {
 case 'multiple-choice':
 template = document.getElementById('multiple-choice-template').content.cloneNode(true);
 renderMultipleChoiceQuestion(template, question);
 break;

 case 'multiple-select':
 template = document.getElementById('multiple-select-template').content.cloneNode(true);
 renderMultipleSelectQuestion(template, question);
 break;

 case 'drag-drop':
 template = document.getElementById('drag-drop-template').content.cloneNode(true);
 renderDragDropQuestion(template, question);
 break;

 case 'free-response':
 template = document.getElementById('free-response-template').content.cloneNode(true);
 renderFreeResponseQuestion(template, question);
 break;
 }

 questionContainer.appendChild(template);
}

// Render a multiple-choice question
function renderMultipleChoiceQuestion(template, question) {
 template.querySelector('.question-text').textContent = question.text;
 const optionsContainer = template.querySelector('.options-container');

 question.options.forEach((option, index) => {
 const optionElement = document.createElement('div');
 optionElement.className = 'option';
 optionElement.innerHTML = `
 <input type="radio" id="option-${index}" name="question-option" value="${index}">
 <label for="option-${index}">${option}</label>
 `;

 // Add click event for the whole option div
 optionElement.addEventListener('click', () => {
 optionElement.querySelector('input').checked = true;

 // Update selected state for all options
 optionsContainer.querySelectorAll('.option').forEach(opt => {
 if (opt === optionElement) {
 opt.classList.add('selected');
 } else {
 opt.classList.remove('selected');
 }
 });
 });

 optionsContainer.appendChild(optionElement);
 });
}

// Render a multiple-select question
function renderMultipleSelectQuestion(template, question) {
 template.querySelector('.question-text').textContent = question.text;
 const optionsContainer = template.querySelector('.options-container');

 question.options.forEach((option, index) => {
 const optionElement = document.createElement('div');
 optionElement.className = 'option';
 optionElement.innerHTML = `
 <input type="checkbox" id="option-${index}" name="question-option" value="${index}">
 <label for="option-${index}">${option}</label>
 `;

 // Add click event for the whole option div
 optionElement.addEventListener('click', () => {
 const checkbox = optionElement.querySelector('input');
 checkbox.checked = !checkbox.checked;

 // Update selected state
 if (checkbox.checked) {
 optionElement.classList.add('selected');
 } else {
 optionElement.classList.remove('selected');
 }
 });

 optionsContainer.appendChild(optionElement);
 });
}

// Render a drag-drop question
function renderDragDropQuestion(template, question) {
 template.querySelector('.question-text').textContent = question.text;
 const dragItemsContainer = template.querySelector('.drag-items-container');
 const dropZonesContainer = template.querySelector('.drop-zones-container');

 // Create drag items
 question.options.forEach((item, index) => {
 const dragItem = document.createElement('div');
 dragItem.className = 'drag-item';
 dragItem.setAttribute('draggable', 'true');
 dragItem.setAttribute('data-index', index);
 dragItem.textContent = item;

 // Set up drag events
 dragItem.addEventListener('dragstart', (e) => {
 e.dataTransfer.setData('text/plain', index);
 dragItem.classList.add('dragging');
 });

 dragItem.addEventListener('dragend', () => {
 dragItem.classList.remove('dragging');
 });

 dragItemsContainer.appendChild(dragItem);
 });

 // Create drop zones
 question.dropZones.forEach((zone, index) => {
 const dropZone = document.createElement('div');
 dropZone.className = 'drop-zone';
 dropZone.setAttribute('data-zone-index', index);

 const zoneLabel = document.createElement('div');
 zoneLabel.className = 'zone-label';
 zoneLabel.textContent = zone;

 dropZone.appendChild(zoneLabel);

 // Set up drop events
 dropZone.addEventListener('dragover', (e) => {
 e.preventDefault();
 dropZone.classList.add('highlight');
 });

 dropZone.addEventListener('dragleave', () => {
 dropZone.classList.remove('highlight');
 });

 dropZone.addEventListener('drop', (e) => {
 e.preventDefault();
 dropZone.classList.remove('highlight');

 const dragItemIndex = e.dataTransfer.getData('text/plain');
 const dragItem = document.querySelector(`.drag-item[data-index="${dragItemIndex}"]`);

 // Clone the item and add it to the drop zone
 const clonedItem = dragItem.cloneNode(true);

 // Clear any previous items in this zone
 const existingItems = dropZone.querySelectorAll('.drag-item');
 existingItems.forEach(item => item.remove());

 dropZone.appendChild(clonedItem);
 });

 dropZonesContainer.appendChild(dropZone);
 });
}

// Render a free-response question
function renderFreeResponseQuestion(template, question) {
 template.querySelector('.question-text').textContent = question.text;
}

// Submit the current answer
function submitAnswer() {
 const question = questions[currentQuestionIndex];
 let isCorrect = false;
 let userAnswer;

 // Get the user's answer based on question type
 switch (question.type) {
 case 'multiple-choice':
 const selectedOption = document.querySelector('input[name="question-option"]:checked');
 if (selectedOption) {
 userAnswer = parseInt(selectedOption.value);
 isCorrect = userAnswer === question.correctAnswer;

 // Mark the options as correct/incorrect
 document.querySelectorAll('.option').forEach((option, index) => {
 if (index === question.correctAnswer) {
 option.classList.add('correct');
 } else if (index === userAnswer && userAnswer !== question.correctAnswer) {
 option.classList.add('incorrect');
 }
 });
 }
 break;

 case 'multiple-select':
 const checkedOptions = Array.from(document.querySelectorAll('input[name="question-option"]:checked'))
 .map(input => parseInt(input.value));
 userAnswer = checkedOptions;

 // Check if arrays are equal (same values, regardless of order)
 isCorrect = arraysEqual(checkedOptions.sort(), question.correctAnswer.sort());

 // Mark the options as correct/incorrect
 document.querySelectorAll('.option').forEach((option, index) => {
 if (question.correctAnswer.includes(index)) {
 option.classList.add('correct');
 } else if (userAnswer.includes(index)) {
 option.classList.add('incorrect');
 }
 });
 break;

 case 'drag-drop':
 const dropZones = document.querySelectorAll('.drop-zone');
 userAnswer = Array.from(dropZones).map(zone => {
 const item = zone.querySelector('.drag-item');
 return item ? parseInt(item.getAttribute('data-index')) : null;
 });

 isCorrect = arraysEqual(userAnswer, question.correctAnswer);

 // Mark the drop zones as correct/incorrect
 dropZones.forEach((zone, index) => {
 if (userAnswer[index] === question.correctAnswer[index]) {
 zone.classList.add('correct');
 } else {
 zone.classList.add('incorrect');
 }
 });
 break;

 case 'free-response':
 const responseText = document.querySelector('.response-input').value.trim();
 userAnswer = responseText;

 // For free response, check if the answer contains the correct keywords
 // This is a simplified approach - real implementations would use more sophisticated methods
 isCorrect = question.correctKeywords.some(keyword =>
 responseText.toLowerCase().includes(keyword.toLowerCase())
 );

 break;
 }

 // Store the answer
 currentTestAnswers.push({
 questionId: question.id,
 userAnswer: userAnswer,
 correct: isCorrect
 });

 // Show feedback
 displayFeedback(isCorrect, question.explanation);

 // Hide submit button, show next button
 submitAnswerBtn.style.display = 'none';
 nextQuestionBtn.style.display = 'block';
}

// Display feedback for the current question
function displayFeedback(isCorrect, explanation) {
 const feedbackContainer = document.getElementById('feedback-container');
 const feedbackMessage = document.getElementById('feedback-message');
 const explanationElement = document.getElementById('explanation');

 feedbackMessage.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
 feedbackMessage.className = isCorrect ? 'correct' : 'incorrect';

 explanationElement.textContent = explanation;

 feedbackContainer.style.display = 'block';
}

// Load the next question
function loadNextQuestion() {
 currentQuestionIndex++;

 // Check if we've reached the end of the questions
 if (currentQuestionIndex >= questions.length) {
 finishTest();
 return;
 }

 loadQuestion(currentQuestionIndex);
}

// Finish the test and calculate results
function finishTest() {
 // Calculate score
 const correctAnswers = currentTestAnswers.filter(answer => answer.correct).length;
 const score = Math.round((correctAnswers / questions.length) * 100);

 // Save the test results
 saveTestResults({
 date: new Date(),
 score: score,
 answers: currentTestAnswers
 });

 // Navigate to results page
 navigateTo('results');

 // Display results
 displayResults();
}

// Save test results
function saveTestResults(results) {
 // In a real app, this would send the results to the server
 // For now, we'll just store in localStorage
 const savedResults = JSON.parse(localStorage.getItem('testResults') || '[]');
 savedResults.push(results);
 localStorage.setItem('testResults', JSON.stringify(savedResults));
}

// Display test results
function displayResults() {
 // Get the latest test results
 const savedResults = JSON.parse(localStorage.getItem('testResults') || '[]');
 const latestResult = savedResults[savedResults.length - 1];

 if (!latestResult) {
 return;
 }

 // Update summary
 const resultsSummary = document.getElementById('results-summary');
 resultsSummary.innerHTML = `
 <div class="score-circle">${latestResult.score}%</div>
 <p>You answered ${latestResult.answers.filter(a => a.correct).length} out of ${questions.length} questions correctly.</p>
 <p>Completed on: ${new Date(latestResult.date).toLocaleString()}</p>
 `;

 // Update details
 const resultsDetails = document.getElementById('results-details');
 resultsDetails.innerHTML = '<h3>Question Details</h3>';

 latestResult.answers.forEach((answer, index) => {
 const question = questions.find(q => q.id === answer.questionId);

 const resultItem = document.createElement('div');
 resultItem.className = 'result-item';

 let answerText = '';
 switch (question.type) {
 case 'multiple-choice':
 answerText = answer.userAnswer !== undefined ? question.options[answer.userAnswer] : 'No answer';
 break;

 case 'multiple-select':
 answerText = answer.userAnswer && answer.userAnswer.length > 0
 ? answer.userAnswer.map(idx => question.options[idx]).join(', ')
 : 'No answer';
 break;

 case 'drag-drop':
 answerText = answer.userAnswer
 ? answer.userAnswer.map((idx, i) =>
 `${question.dropZones[i]}: ${idx !== null ? question.options[idx] : 'No answer'}`
 ).join('; ')
 : 'No answer';
 break;

 case 'free-response':
 answerText = answer.userAnswer || 'No answer';
 break;
 }

 resultItem.innerHTML = `
 <div class="result-question">${index + 1}. ${question.text}</div>
 <div class="result-answer">Your answer: ${answerText}</div>
 <div class="result-status ${answer.correct ? 'correct' : 'incorrect'}">
 ${answer.correct ? 'Correct' : 'Incorrect'}
 </div>
 <div class="result-explanation">${question.explanation}</div>
 `;

 resultsDetails.appendChild(resultItem);
 });
}
/*
// Load and display previous results
function loadResults() {
 displayResults();
}

// Show performance trends
function showPerformanceTrends() {
 // In a real app, this would generate charts or visualizations
 alert('Performance trends feature is not implemented in this demo.');
}
*/
// Load user preferences
function loadUserPreferences() {
 // In a real app, this would fetch from the server
 // For now, we'll just apply the default preferences

 // Apply theme
 document.body.className = `theme-${currentUser.accessibilityPreferences.theme} font-size-${currentUser.accessibilityPreferences.fontSize}`;

 // Set active theme button
 document.querySelector(`.theme-btn[data-theme="${currentUser.accessibilityPreferences.theme}"]`).classList.add('active');

 // Set font size display
 document.getElementById('font-size-value').textContent = capitalize(currentUser.accessibilityPreferences.fontSize);

 // Set checkboxes
 document.getElementById('reduce-motion').checked = currentUser.accessibilityPreferences.reduceMotion;
 document.getElementById('screen-reader-opt').checked = currentUser.accessibilityPreferences.screenReaderOptimized;

 if (currentUser.accessibilityPreferences.reduceMotion) {
 document.body.classList.add('reduce-motion');
 }

 if (currentUser.accessibilityPreferences.screenReaderOptimized) {
 document.body.classList.add('screen-reader-optimized');
 }
}

// Save user preferences
function saveUserPreferences() {
 // In a real app, this would send to the server
 // For now, we'll just save to localStorage
 localStorage.setItem('userPreferences', JSON.stringify(currentUser.accessibilityPreferences));
 alert('Settings saved successfully!');
}

// Change font size
function changeFontSize(direction) {
 const sizes = ['small', 'medium', 'large', 'xlarge'];
 let currentIndex = sizes.indexOf(currentUser.accessibilityPreferences.fontSize);

 currentIndex += direction;

 // Bounds checking
 if (currentIndex < 0) currentIndex = 0;
 if (currentIndex >= sizes.length) currentIndex = sizes.length - 1;

 const newSize = sizes[currentIndex];
 currentUser.accessibilityPreferences.fontSize = newSize;

 // Update the display
 document.getElementById('font-size-value').textContent = capitalize(newSize);

 // Update body class
 document.body.className = document.body.className.replace(/font-size-\w+/, `font-size-${newSize}`);
}

// Helper function to check if two arrays are equal
function arraysEqual(arr1, arr2) {
 if (!arr1 || !arr2) return false;
 if (arr1.length !== arr2.length) return false;

 for (let i = 0; i < arr1.length; i++) {
 if (arr1[i] !== arr2[i]) return false;
 }

 return true;
}

// Helper function to capitalize first letter
function capitalize(string) {
 return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', initApp);