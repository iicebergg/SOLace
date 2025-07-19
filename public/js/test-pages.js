// Disable Right Click
window.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// Confirm leaving site when external link is clicked
function confirmExit() {
  if (confirm("You are about to leave SOLace and go to a third-party website. Third-party websites may not be suitable for children under 13. Do you wish to continue?")) {
    return true;
  } else {
    return false;
  }
}

// Get test-specific identifier (each test file can define this)
const TEST_IDENTIFIER = window.TEST_IDENTIFIER || 'default';

// Modified storage keys to be test-specific
const STORAGE_KEYS = {
  TEST_RESULTS: `solace_test_results_${TEST_IDENTIFIER}`,
  USER_PREFERENCES: 'solace_user_preferences'
};

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
const saveSettingsBtn = document.getElementById('save-settings');

// Add to your existing DOMContentLoaded function:
document.addEventListener('DOMContentLoaded', function() {
  // ... your existing code ...
  
  // Simple footer management with CSS classes
  const testBtn = document.getElementById('test-btn');
  const startTestBtn = document.getElementById('start-test');
  const homeBtn = document.getElementById('home-btn');
  const resultsBtn = document.getElementById('results-btn');
  const settingsBtn = document.getElementById('settings-btn');
  
  // Hide footer when entering test
  if (testBtn) {
    testBtn.addEventListener('click', () => {
      document.body.classList.add('test-mode');
    });
  }
  
  if (startTestBtn) {
    startTestBtn.addEventListener('click', () => {
      document.body.classList.add('test-mode');
    });
  }
  
  // Show footer when leaving test
  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      document.body.classList.remove('test-mode');
    });
  }
  
  if (resultsBtn) {
    resultsBtn.addEventListener('click', () => {
      document.body.classList.remove('test-mode');
    });
  }
  
  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      document.body.classList.remove('test-mode');
    });
  }
});

// Application State
let currentPage = 'home';
let currentQuestionIndex = 0;
let questions = [];
let currentTestAnswers = [];
let testStartTime = null; // Add time tracking
let testInitialized = false; // Track if test has been properly initialized
let currentUser = {
  accessibilityPreferences: {
    theme: 'black-on-white',
    fontSize: 'medium',
    reduceMotion: false,
    screenReaderOptimized: false
  }
};

// Initialize the application
function initApp() {
  console.log('Initializing application...');
  
  // Set up event listeners
  setupNavigation();
  setupEventListeners();

  // Initially disable the test navigation button
  disableTestNavButton();

  // Load user preferences
  /* loadUserPreferences(); */

  // Load questions (in a real app, these would come from the server)
  fetchQuestions();
  
  // Check if questions loaded successfully
  setTimeout(() => {
    if (questions.length === 0) {
      console.error('No questions loaded! Check sampleQuestions definition.');
      alert('Error: Questions failed to load. Please refresh the page.');
    } else {
      console.log(`Application initialized successfully with ${questions.length} questions`);
    }
  }, 100);
}

// Set up navigation between pages
function setupNavigation() {
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetPage = button.id.split('-')[0];
      console.log('Navigating to:', targetPage);

            // Prevent navigation to test page if test not initialized
      if (targetPage === 'test' && !testInitialized) {
        console.log('Test not initialized - navigation blocked');
        return;
      }

      navigateTo(targetPage);
      
      // If navigating to results, display them
      if (targetPage === 'results') {
        setTimeout(() => {
          displayResults();
        }, 100);
      }
    });
  });
}

// Set up other event listeners
function setupEventListeners() {
  if (startTestBtn) {
    startTestBtn.addEventListener('click', () => {
      enableTestNavButton();
      navigateTo('test');
      startTest();
    });
  }

  if (viewResultsBtn) {
    viewResultsBtn.addEventListener('click', () => {
      navigateTo('results');
      setTimeout(() => {
        displayResults();
      }, 100);
    });
  }

  if (submitAnswerBtn) {
    submitAnswerBtn.addEventListener('click', submitAnswer);
  }
  
  if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener('click', loadNextQuestion);
  }

  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', saveUserPreferences);
  }
}

// Navigate to a different page
function navigateTo(page) {
  console.log('Navigating to page:', page);
  
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
  console.log('Current page is now:', currentPage);
}

async function fetchQuestions() {
  try {
    questions = sampleQuestions;
    console.log('Questions loaded:', questions.length);
    console.log('First question:', questions[0]);
    console.log('Last question:', questions[questions.length - 1]);
  } catch (error) {
    console.error('Error fetching questions:', error);
    questions = []; // Fallback to empty array
  }
}

// Start a new test
function startTest() {
  console.log('Starting test...');
  
  if (questions.length === 0) {
    console.error('Cannot start test: No questions loaded');
    alert('Error: No questions available. Please refresh the page and try again.');
    return;
  }
  
  currentQuestionIndex = 0;
  currentTestAnswers = [];
  testInitialized = true;
  
  // Start time tracking
  testStartTime = new Date();
  console.log('Test timer started at:', testStartTime);

  // Reset UI elements
  const progressFill = document.getElementById('progress-fill');
  const currentQuestionSpan = document.getElementById('current-question');
  const totalQuestionsSpan = document.getElementById('total-questions');
  
  if (progressFill) progressFill.style.width = '0%';
  if (currentQuestionSpan) currentQuestionSpan.textContent = '1';
  if (totalQuestionsSpan) totalQuestionsSpan.textContent = questions.length;

  console.log(`Test started with ${questions.length} questions`);
  
  // Load the first question (fixed: was loadQuestion(1), should be loadQuestion(0))
  loadQuestion(0);
}

// Load a specific question
function loadQuestion(index) {
  console.log(`Loading question ${index + 1} of ${questions.length}`);
  
  if (index >= questions.length) {
    // Test is finished
    finishTest();
    return;
  }

  const question = questions[index];
  console.log('Question object:', question);
  
  if (!question) {
    console.error(`Question at index ${index} is undefined`);
    return;
  }

  const questionContainer = document.getElementById('question-container');
  if (!questionContainer) {
    console.error('Question container not found');
    return;
  }

  // Clear previous question
  questionContainer.innerHTML = '';

  // Hide feedback container
  const feedbackContainer = document.getElementById('feedback-container');
  if (feedbackContainer) {
    feedbackContainer.style.display = 'none';
  }

  // Show submit button, hide next button
  if (submitAnswerBtn) submitAnswerBtn.style.display = 'block';
  if (nextQuestionBtn) nextQuestionBtn.style.display = 'none';

  // Scroll to top of page smoothly
  window.scrollTo({
    top: 0,
  });

  // Update progress
  const progressFill = document.getElementById('progress-fill');
  const currentQuestionSpan = document.getElementById('current-question');
  
  if (progressFill) {
    progressFill.style.width = `${((index + 1) / questions.length) * 100}%`;
  }
  if (currentQuestionSpan) {
    currentQuestionSpan.textContent = index + 1;
  }

  // Use the appropriate template based on question type
  let template;
  const templateId = `${question.type}-template`;
  const templateElement = document.getElementById(templateId);
  
  if (!templateElement) {
    console.error(`Template not found: ${templateId}`);
    return;
  }

  template = templateElement.content.cloneNode(true);
  
  try {
    switch (question.type) {
      case 'multiple-choice':
        renderMultipleChoiceQuestion(template, question);
        break;

      case 'multiple-select':
        renderMultipleSelectQuestion(template, question);
        break;

      case 'drag-drop':
        renderDragDropQuestion(template, question);
        break;

      case 'free-response':
        renderFreeResponseQuestion(template, question);
        break;
      
      case 'point-select':
        renderPointSelectQuestion(template, question);
        break;

      default:
        console.error(`Unknown question type: ${question.type}`);
        return;
    }

    questionContainer.appendChild(template);
    console.log(`Question ${index + 1} loaded successfully`);
  } catch (error) {
    console.error(`Error rendering question ${index + 1}:`, error);
  }
}

// Render a multiple-choice question
function renderMultipleChoiceQuestion(template, question) {
  console.log('Rendering multiple choice question:', question.id);
  
  const questionTextElement = template.querySelector('.question-text');
  if (!questionTextElement) {
    console.error('Question text element not found in template');
    return;
  }
  
  questionTextElement.innerHTML = question.text;
  
  // Add question image if present
  renderQuestionImage(template, question);
  
  const optionsContainer = template.querySelector('.options-container');
  if (!optionsContainer) {
    console.error('Options container not found in template');
    return;
  }
  
  console.log('Question options:', question.options);
  
  question.options.forEach((option, index) => {
    console.log(`Processing option ${index}:`, option);
    
    const optionElement = document.createElement('div');
    
    // Check if this option is an image object or text
    const isImageOption = typeof option === 'object' && option.url;
    const hasImage = question.optionImages && question.optionImages[index];
    
    optionElement.className = (hasImage || isImageOption) ? 'option option-with-image' : 'option';
    
    // Create option content HTML
    let optionHTML = `<input type="radio" id="option-${index}" name="question-option" value="${index}">`;
    
    if (isImageOption) {
      // Handle case where the entire option is an image
      optionHTML += `
        <div class="option-content">
          <img src="${option.url}" 
               alt="${option.alt || `Option ${index + 1}`}" 
               class="option-image"
               onerror="this.style.display='none'">
        </div>
      `;
    } else if (hasImage) {
      // Handle case where option has both text and image
      optionHTML += `
        <div class="option-content">
          <img src="${question.optionImages[index].url}" 
               alt="${question.optionImages[index].alt || option}" 
               class="option-image"
               onerror="this.style.display='none'">
          <label for="option-${index}" class="option-text">${option}</label>
        </div>
      `;
    } else {
      // Handle text-only options
      optionHTML += `<label for="option-${index}">${option}</label>`;
    }
    
    optionElement.innerHTML = optionHTML;
    
    // Add click event for the whole option div
    optionElement.addEventListener('click', () => {
      const radioInput = optionElement.querySelector('input');
      if (radioInput) {
        radioInput.checked = true;
        
        // Update selected state for all options
        optionsContainer.querySelectorAll('.option').forEach(opt => {
          if (opt === optionElement) {
            opt.classList.add('selected');
          } else {
            opt.classList.remove('selected');
          }
        });
      }
    });
    
    optionsContainer.appendChild(optionElement);
  });
  
  console.log('Multiple choice question rendered successfully');
}

// Render a multiple-select question
function renderMultipleSelectQuestion(template, question) {
  template.querySelector('.question-text').innerHTML = question.text;
  
  // Add question image if present
  renderQuestionImage(template, question);
  
  const optionsContainer = template.querySelector('.options-container');
  
  question.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    
    // Check if this option is an image object or text
    const isImageOption = typeof option === 'object' && option.url;
    const hasImage = question.optionImages && question.optionImages[index];
    
    optionElement.className = (hasImage || isImageOption) ? 'option option-with-image' : 'option';
    
    // Create option content HTML
    let optionHTML = `<input type="checkbox" id="option-${index}" name="question-option" value="${index}">`;
    
    if (isImageOption) {
      // Handle case where the entire option is an image
      optionHTML += `
        <div class="option-content">
          <img src="${option.url}" 
               alt="${option.alt || `Option ${index + 1}`}" 
               class="option-image"
               onerror="this.style.display='none'">
          <label for="option-${index}" class="option-text">Option ${index + 1}</label>
        </div>
      `;
    } else if (hasImage) {
      // Handle case where option has both text and image
      optionHTML += `
        <div class="option-content">
          <img src="${question.optionImages[index].url}" 
               alt="${question.optionImages[index].alt || option}" 
               class="option-image"
               onerror="this.style.display='none'">
          <label for="option-${index}" class="option-text">${option}</label>
        </div>
      `;
    } else {
      // Handle text-only options
      optionHTML += `<label for="option-${index}">${option}</label>`;
    }
    
    optionElement.innerHTML = optionHTML;
    
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
  template.querySelector('.question-text').innerHTML = question.text;
  
  // Add question image if present
  renderQuestionImage(template, question);
  
  const dragItemsContainer = template.querySelector('.drag-items-container');
  const dropZonesContainer = template.querySelector('.drop-zones-container');
  
  // Create drag items
  question.options.forEach((item, index) => {
    const dragItem = document.createElement('div');
    const hasImage = question.optionImages && question.optionImages[index];
    
    dragItem.className = hasImage ? 'drag-item drag-item-with-image' : 'drag-item';
    dragItem.setAttribute('draggable', 'true');
    dragItem.setAttribute('data-index', index);
    
    if (hasImage) {
      dragItem.innerHTML = `
        <img src="${question.optionImages[index].url}" 
             alt="${question.optionImages[index].alt || item}" 
             class="drag-item-image"
             onerror="this.style.display='none'">
        <span class="drag-item-text">${item}</span>
      `;
    } else {
      dragItem.innerHTML = item;
    }
    
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
  template.querySelector('.question-text').innerHTML = question.text;
  
  // Add question image if present
  renderQuestionImage(template, question);
}

// Helper function to render question images
function renderQuestionImage(template, question) {
  const imageContainer = template.querySelector('.question-image-container');
  
  if (!imageContainer) {
    console.log('No image container found in template');
    return;
  }
  
  if (question.image) {
    console.log('Rendering question image:', question.image);
    
    const img = document.createElement('img');
    img.className = 'question-image loading';
    img.src = question.image.url;
    img.alt = question.image.alt || 'Question image';
    
    // Handle image loading states
    img.addEventListener('load', () => {
      img.classList.remove('loading');
      console.log('Question image loaded successfully');
    });
    
    img.addEventListener('error', () => {
      img.classList.remove('loading');
      img.classList.add('error');
      img.alt = 'Image failed to load';
      console.log('Question image failed to load:', question.image.url);
      img.src = 'data:image/svg+xml;base64,' + btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
          <rect width="300" height="200" fill="#f8f9fa" stroke="#dc3545" stroke-width="2" stroke-dasharray="5,5"/>
          <text x="150" y="100" text-anchor="middle" fill="#dc3545" font-family="Arial" font-size="14">
            Image failed to load
          </text>
        </svg>
      `);
    });
    
    imageContainer.appendChild(img);
  } else {
    console.log('No image for this question');
  }
}

// Render a point-selection question
function renderPointSelectQuestion(template, question) {
  console.log('Rendering point select question:', question.id);
  
  const questionTextElement = template.querySelector('.question-text');
  questionTextElement.innerHTML = question.text;
  
  const imageContainer = template.querySelector('.point-select-image-container');
  
  if (!question.image) {
    imageContainer.innerHTML = '<p>Error: This question requires an image.</p>';
    return;
  }
  
  const interactiveContainer = document.createElement('div');
  interactiveContainer.className = 'point-select-container';
  
  const img = document.createElement('img');
  img.className = 'point-select-image';
  img.src = question.image.url;
  img.alt = question.image.alt || 'Question image for point selection';
  
  const overlay = document.createElement('div');
  overlay.className = 'point-select-overlay';
  
  const instructions = document.createElement('div');
  instructions.className = 'point-select-instructions';
  instructions.textContent = 'Click on the image to place your point.';
  
  let selectedPoint = null;
  
  img.addEventListener('load', () => {
    overlay.addEventListener('click', (e) => {
      const rect = overlay.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Remove existing point
      const existingPoint = overlay.querySelector('.selected-point');
      if (existingPoint) existingPoint.remove();
      
      // Create new point
      const point = document.createElement('div');
      point.className = 'selected-point';
      point.style.left = `${x}px`;
      point.style.top = `${y}px`;
      
      overlay.appendChild(point);
      
      selectedPoint = {
        x: x / rect.width,
        y: y / rect.height
      };
      
      instructions.textContent = 'Point placed. Click again to move it.';
    });
  });
  
  interactiveContainer.appendChild(img);
  interactiveContainer.appendChild(overlay);
  imageContainer.appendChild(instructions);
  imageContainer.appendChild(interactiveContainer);
  
  imageContainer.getSelectedPoint = () => selectedPoint;
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

      case 'point-select':
        const imageContainer = document.querySelector('.point-select-image-container');
        if (imageContainer && imageContainer.getSelectedPoint) {
        userAnswer = imageContainer.getSelectedPoint();
    
    if (userAnswer && question.correctAnswer) {
      const tolerance = 0.05; // 5% tolerance
      const deltaX = Math.abs(userAnswer.x - question.correctAnswer.x);
      const deltaY = Math.abs(userAnswer.y - question.correctAnswer.y);
      
      isCorrect = deltaX <= tolerance && deltaY <= tolerance;
      
      // Show correct answer
      const overlay = document.querySelector('.point-select-overlay');
      if (overlay) {
        const correctPoint = document.createElement('div');
        correctPoint.className = 'correct-point';
        
        const rect = overlay.getBoundingClientRect();
        correctPoint.style.left = `${question.correctAnswer.x * rect.width}px`;
        correctPoint.style.top = `${question.correctAnswer.y * rect.height}px`;
        
        overlay.appendChild(correctPoint);
        
        const userPoint = overlay.querySelector('.selected-point');
        if (userPoint) {
          userPoint.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
      }
    } else {
      isCorrect = false;
    }
  } else {
    userAnswer = null;
    isCorrect = false;
  }
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
  if (submitAnswerBtn) submitAnswerBtn.style.display = 'none';
  if (nextQuestionBtn) nextQuestionBtn.style.display = 'block';
}

// Change button text for final question
if (currentQuestionIndex + 1 == questions.length) {
  nextQuestionBtn.textContent = 'Submit Test';
} else {
  nextQuestionBtn.textContent = 'Next Question';
}

// Display feedback for the current question
function displayFeedback(isCorrect, explanation) {
  const feedbackContainer = document.getElementById('feedback-container');
  const feedbackMessage = document.getElementById('feedback-message');
  const explanationElement = document.getElementById('explanation');

  if (feedbackMessage) {
    feedbackMessage.textContent = isCorrect ? 'Correct!' : 'Incorrect:';
    feedbackMessage.className = isCorrect ? 'correct' : 'incorrect';
  }

  if (explanationElement) {
    explanationElement.textContent = explanation;
  }

  if (feedbackContainer) {
    feedbackContainer.style.display = 'block';
  }
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
  console.log('Finishing test...');

   // Mark test as no longer active
  testInitialized = false;
  disableTestNavButton();
  
  // Calculate score
  const correctAnswers = currentTestAnswers.filter(answer => answer.correct).length;
  const score = Math.round((correctAnswers / questions.length) * 100);
  
  // Calculate time spent
  const timeSpent = calculateTimeSpent();
  
  console.log(`Test completed: ${correctAnswers}/${questions.length} correct (${score}%)`);
  console.log(`Time spent: ${timeSpent} seconds`);

  // Prepare result data for storage
  const resultData = {
    score: score,
    totalQuestions: questions.length,
    correctAnswers: correctAnswers,
    timeSpent: timeSpent,
    answers: currentTestAnswers
  };

  // Save results using the results manager
  if (window.resultsManager) {
    const savedResult = window.resultsManager.saveTestResult(resultData);
    
    if (savedResult) {
      console.log('Test results saved successfully with ID:', savedResult.id);
      showResultsSavedMessage();
    } else {
      console.error('Failed to save test results');
      alert('Warning: Your test results could not be saved. Your score is ' + score + '%.');
    }
  } else {
    console.error('Results manager not available - falling back to localStorage');
    // Fallback to simple localStorage if results manager isn't available
    const savedResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    savedResults.push({
      date: new Date(),
      score: score,
      answers: currentTestAnswers,
      timeSpent: timeSpent
    });
    localStorage.setItem('testResults', JSON.stringify(savedResults));
  }

  // Navigate to results page
  navigateTo('results');

  // Display results after a short delay
  setTimeout(() => {
    displayResults();
  }, 100);
}

// Calculate time spent on test
function calculateTimeSpent() {
  if (!testStartTime) return 0;
  const endTime = new Date();
  return Math.round((endTime - testStartTime) / 1000); // Return seconds
}

// Format time for display
function formatTimeSpent(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}

// Show success notification when results are saved
function showResultsSavedMessage() {
  const message = document.createElement('div');
  message.className = 'results-saved-notification';
  message.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">✓</span>
      <span class="notification-text">Test results saved successfully!</span>
    </div>
  `;
  
  // Add styles for the notification
  message.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: var(--success-color, #28a745);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(message);
  
  // Remove the message after 3 seconds
  setTimeout(() => {
    if (message.parentNode) {
      message.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => {
        if (message.parentNode) {
          message.parentNode.removeChild(message);
        }
      }, 300);
    }
  }, 3000);
}

// Display test results (enhanced version)
function displayResults() {
  console.log('Displaying results...');
  
  // Use results manager if available
  if (window.resultsManager) {
    console.log('Using enhanced results manager');
    window.resultsManager.displayResults();
    return;
  }
  
  // Fallback to simple display if results manager isn't available
  console.log('Using fallback results display');
  
  const savedResults = JSON.parse(localStorage.getItem('testResults') || '[]');
  const latestResult = savedResults[savedResults.length - 1];

  const resultsSummary = document.getElementById('results-summary');
  const resultsDetails = document.getElementById('results-details');
  
  if (!resultsSummary || !resultsDetails) {
    console.error('Results page elements not found');
    return;
  }

  if (!latestResult) {
    resultsSummary.innerHTML = `
      <div class="no-results">
        <h3>No Test Results Yet</h3>
        <p>Take your first test to see results here!</p>
      </div>
    `;
    resultsDetails.innerHTML = '';
    return;
  }

  // Update summary with latest result
  resultsSummary.innerHTML = `
    <div class="score-circle">${latestResult.score}%</div>
    <div class="result-summary-text">
      <p>You answered ${latestResult.answers.filter(a => a.correct).length} out of ${questions.length} questions correctly.</p>
      <p>Completed on: ${new Date(latestResult.date).toLocaleString()}</p>
      ${latestResult.timeSpent ? `<p>Time spent: ${formatTimeSpent(latestResult.timeSpent)}</p>` : ''}
      <p>Total tests taken: ${savedResults.length}</p>
    </div>
  `;

  // Update details with question breakdown
  resultsDetails.innerHTML = '<h3>Question Details</h3>';

  latestResult.answers.forEach((answer, index) => {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) return;

    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';

    let answerText = '';
    switch (question.type) {
      case 'multiple-choice':
        answerText = answer.userAnswer !== undefined ? 
          (typeof question.options[answer.userAnswer] === 'object' ? 
            `Option ${answer.userAnswer + 1}` : 
            question.options[answer.userAnswer]) : 'No answer';
        break;

      case 'multiple-select':
        answerText = answer.userAnswer && answer.userAnswer.length > 0
          ? answer.userAnswer.map(idx => 
              typeof question.options[idx] === 'object' ? 
                `Option ${idx + 1}` : 
                question.options[idx]
            ).join(', ')
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

// Load and display previous results
function loadResults() {
  console.log('Loading results page...');
  displayResults();
}

// Load user preferences
function loadUserPreferences() {
  // In a real app, this would fetch from the server
  // For now, we'll just apply the default preferences

  // Apply theme
  document.body.className = `theme-${currentUser.accessibilityPreferences.theme} font-size-${currentUser.accessibilityPreferences.fontSize}`;

  // Set active theme button
  const themeBtn = document.querySelector(`.theme-btn[data-theme="${currentUser.accessibilityPreferences.theme}"]`);
  if (themeBtn) themeBtn.classList.add('active');

  // Set font size display
  const fontSizeValue = document.getElementById('font-size-value');
  if (fontSizeValue) fontSizeValue.textContent = capitalize(currentUser.accessibilityPreferences.fontSize);

  // Set checkboxes
  const reduceMotionCheckbox = document.getElementById('reduce-motion');
  const screenReaderOptCheckbox = document.getElementById('screen-reader-opt');
  
  if (reduceMotionCheckbox) {
    reduceMotionCheckbox.checked = currentUser.accessibilityPreferences.reduceMotion;
  }
  
  if (screenReaderOptCheckbox) {
    screenReaderOptCheckbox.checked = currentUser.accessibilityPreferences.screenReaderOptimized;
  }

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

// Show performance trends
function showPerformanceTrends() {
  if (window.resultsManager) {
    const stats = window.resultsManager.getPerformanceStats();
    const recentResults = window.resultsManager.results.slice(0, 10);
    
    let trendsHTML = `
      <div class="performance-trends">
        <h3>Performance Statistics</h3>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-value">${stats.totalTests}</div>
            <div class="stat-label">Total Tests</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${stats.averageScore}%</div>
            <div class="stat-label">Average Score</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${stats.bestScore}%</div>
            <div class="stat-label">Best Score</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${stats.recentAverage}%</div>
            <div class="stat-label">Recent Average</div>
          </div>
        </div>
    `;
    
    if (stats.improvement !== 0) {
      const improvementText = stats.improvement > 0 ? 
        `+${stats.improvement}% improvement` : 
        `${stats.improvement}% decline`;
      const improvementClass = stats.improvement > 0 ? 'positive' : 'negative';
      
      trendsHTML += `
        <div class="improvement-indicator ${improvementClass}">
          <strong>Trend:</strong> ${improvementText} (recent vs. earlier tests)
        </div>
      `;
    }
    
    if (recentResults.length > 1) {
      trendsHTML += `
        <div class="recent-scores">
          <h4>Recent Test Scores</h4>
          <div class="score-timeline">
      `;
      
      recentResults.slice(0, 5).reverse().forEach((result, index) => {
        trendsHTML += `
          <div class="score-point">
            <div class="score-circle-small">${result.score}%</div>
            <div class="score-date">${result.date}</div>
          </div>
        `;
      });
      
      trendsHTML += '</div></div>';
    }
    
    trendsHTML += '</div>';
    
    // Show in results details area
    const resultsDetails = document.getElementById('results-details');
    if (resultsDetails) {
      resultsDetails.innerHTML = trendsHTML + `
        <div class="action-btns">
          <button class="secondary-btn" onclick="displayResults();">Back to Results</button>
        </div>
      `;
    }
  } else {
    alert('Performance trends feature requires the enhanced results system.');
  }
}

// Enable the test navigation button
function enableTestNavButton() {
  const testNavBtn = document.getElementById('test-btn');
  if (testNavBtn) {
    testNavBtn.disabled = false;
    testNavBtn.classList.remove('disabled');
    testNavBtn.setAttribute('aria-disabled', 'false');
    testNavBtn.title = 'Continue or resume test';
    console.log('Test navigation button enabled');
  }
}

// Disable the test navigation button
function disableTestNavButton() {
  const testNavBtn = document.getElementById('test-btn');
  if (testNavBtn) {
    testNavBtn.disabled = true;
    testNavBtn.classList.add('disabled');
    testNavBtn.setAttribute('aria-disabled', 'true');
    testNavBtn.title = 'Start a new test from the Home page first';
    console.log('Test navigation button disabled');
  }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', initApp);