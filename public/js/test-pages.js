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
    // Force proper positioning when panel is open
    const testContainer = document.querySelector('.test-container');
    const readingPanel = document.querySelector('.reading-panel');
    
    if (testContainer && readingPanel && readingPanel.classList.contains('open')) {
      // Ensure feedback container is properly constrained
      feedbackContainer.style.position = 'relative';
      feedbackContainer.style.zIndex = '102';
      feedbackContainer.style.left = '0';
      feedbackContainer.style.right = '0';
      feedbackContainer.style.width = '100%';
      feedbackContainer.style.maxWidth = '100%';
      feedbackContainer.style.marginLeft = '0';
      feedbackContainer.style.marginRight = '0';
      feedbackContainer.style.transform = 'none';
      
      // Ensure the parent container has proper positioning context
      testContainer.style.position = 'relative';
      testContainer.style.zIndex = '100';
      testContainer.style.isolation = 'isolate';
    }
    
    feedbackContainer.style.display = 'block';
    
    // Force a reflow to ensure positioning is applied
    feedbackContainer.offsetHeight;
    
    // Scroll feedback into view if needed
    setTimeout(() => {
      feedbackContainer.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest',
        inline: 'nearest'
      });
    }, 100);
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

// Add CSS styles for the question detail modal
function addQuestionDetailStyles() {
  if (document.getElementById('question-detail-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'question-detail-styles';
  style.textContent = `
    .question-result {
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
    }
    
    .question-result:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 10;
    }
    
    .question-result:active {
      transform: scale(0.98);
    }
    
    .question-detail-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: none;
      z-index: 1000;
      padding: 20px;
      box-sizing: border-box;
      overflow-y: auto;
    }
    
    .question-detail-modal.active {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding-top: 50px;
    }
    
    .question-detail-content {
      background-color: var(--secondary-bg, #f9f9f9);
      border: 2px solid var(--border-color, #dddddd);
      border-radius: 12px;
      max-width: 800px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      animation: modalSlideIn 0.3s ease-out;
    }
    
    @keyframes modalSlideIn {
      from {
        opacity: 0;
        transform: translateY(-20px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    .question-detail-header {
      background: linear-gradient(135deg, var(--accent-color, #4a6fa5) 0%, #3a5a80 100%);
      color: white;
      padding: 1.5rem;
      border-radius: 10px 10px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .question-detail-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0;
    }
    
    .question-detail-close {
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 4px;
      transition: background-color 0.2s ease;
    }
    
    .question-detail-close:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
    
    .question-detail-body {
      padding: 2rem;
    }
    
    .detail-question-text {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      color: var(--text-color, #333);
      line-height: 1.6;
    }
    
    .detail-question-image {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 1rem 0;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    
    .detail-options-container {
      margin: 1.5rem 0;
    }
    
    .detail-option {
      display: flex;
      align-items: flex-start;
      padding: 1rem;
      margin: 0.5rem 0;
      border-radius: 6px;
      border: 2px solid transparent;
      background-color: var(--input-bg, white);
      transition: all 0.2s ease;
    }
    
    .detail-option.user-selected {
      border-color: #ffc107;
      background-color: #fff3cd;
    }
    
    .detail-option.correct-answer {
      border-color: var(--success-color, #28a745);
      background-color: var(--success-color, #d4edda);
    }
    
    .detail-option.user-selected.correct-answer {
      border-color: var(--success-color, #28a745);
      background-color: var(--success-color, #d4edda);
    }
    
    .detail-option.user-selected:not(.correct-answer) {
      border-color: var(--error-color, #dc3545);
      background-color: var(--error-color, #f8d7da);
    }
    
    .detail-option-indicator {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid var(--border-color, #ddd);
      margin-right: 1rem;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 0.8rem;
      margin-top: 0.1rem;
    }
    
    .detail-option.correct-answer .detail-option-indicator {
      background-color: var(--success-color, #28a745);
      border-color: var(--success-color, #28a745);
      color: white;
    }
    
    .detail-option.user-selected:not(.correct-answer) .detail-option-indicator {
      background-color: var(--error-color, #dc3545);
      border-color: var(--error-color, #dc3545);
      color: white;
    }
    
    .detail-option.user-selected.correct-answer .detail-option-indicator {
      background-color: var(--success-color, #28a745);
      border-color: var(--success-color, #28a745);
      color: white;
    }
    
    .detail-option-content {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .detail-option-image {
      max-width: 150px;
      max-height: 100px;
      border-radius: 4px;
      object-fit: contain;
    }
    
    .detail-option-text {
      flex: 1;
      color: var(--text-color, #333);
    }
    
    .detail-answer-summary {
      background-color: var(--secondary-bg, #f0f5fa);
      border: 1px solid var(--border-color, #ddd);
      border-radius: 8px;
      padding: 1.5rem;
      margin: 1.5rem 0;
    }
    
    .detail-answer-summary h4 {
      margin: 0 0 1rem 0;
      color: var(--text-color, #333);
    }
    
    .answer-summary-item {
      margin: 0.5rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .answer-summary-label {
      font-weight: bold;
      min-width: 120px;
    }
    
    .answer-summary-value {
      color: var(--text-color, #666);
    }
    
    .correct-indicator {
      color: var(--success-color, #28a745);
      font-weight: bold;
    }
    
    .incorrect-indicator {
      color: var(--error-color, #dc3545);
      font-weight: bold;
    }
    
    .detail-explanation {
      background-color: var(--input-bg, white);
      border-left: 4px solid var(--accent-color, #4a6fa5);
      padding: 1.5rem;
      margin: 1.5rem 0;
      border-radius: 0 8px 8px 0;
    }
    
    .detail-explanation h4 {
      margin: 0 0 1rem 0;
      color: var(--accent-color, #4a6fa5);
    }
    
    .detail-explanation p {
      margin: 0;
      color: var(--text-color, #333);
      line-height: 1.6;
    }
    
    .detail-drag-drop-container {
      margin: 1rem 0;
    }
    
    .detail-drag-items, .detail-drop-zones {
      margin: 1rem 0;
    }
    
    .detail-drag-item, .detail-drop-zone {
      display: inline-block;
      padding: 0.5rem 1rem;
      margin: 0.25rem;
      border-radius: 4px;
      border: 1px solid var(--border-color, #ddd);
      background-color: var(--input-bg, white);
    }
    
    .detail-drop-zone {
      min-height: 2rem;
      min-width: 100px;
    }
    
    .detail-free-response {
      background-color: var(--input-bg, white);
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
      padding: 1rem;
      margin: 1rem 0;
      white-space: pre-wrap;
      min-height: 3rem;
    }
    
    /* Mobile responsiveness */
    @media (max-width: 768px) {
      .question-detail-modal {
        padding: 10px;
        padding-top: 20px;
      }
      
      .question-detail-content {
        max-height: 95vh;
      }
      
      .question-detail-header {
        padding: 1rem;
      }
      
      .question-detail-body {
        padding: 1rem;
      }
      
      .detail-option {
        padding: 0.75rem;
      }
      
      .detail-option-content {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
      
      .detail-option-image {
        max-width: 100%;
        max-height: 150px;
      }
    }
    
    /* Dark theme support */
    body.theme-white-on-black .question-detail-content,
    body.theme-yellow-on-blue .question-detail-content {
      background-color: var(--bg-color);
      color: var(--text-color);
    }
    
    body.theme-white-on-black .detail-option,
    body.theme-yellow-on-blue .detail-option {
      background-color: var(--input-bg);
      color: var(--text-color);
    }
    
    /* Accessibility improvements */
    .question-result[aria-expanded="true"] {
      outline: 2px solid var(--accent-color, #4a6fa5);
      outline-offset: 2px;
    }
    
    .question-detail-modal:focus-within {
      outline: none;
    }
    
    .question-detail-content:focus {
      outline: 2px solid var(--accent-color, #4a6fa5);
      outline-offset: -2px;
    }
  `;
  
  document.head.appendChild(style);
}

// Create the question detail modal
function createQuestionDetailModal() {
  if (document.getElementById('question-detail-modal')) return;
  
  const modal = document.createElement('div');
  modal.id = 'question-detail-modal';
  modal.className = 'question-detail-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'question-detail-title');
  
  modal.innerHTML = `
    <div class="question-detail-content" tabindex="-1">
      <div class="question-detail-header">
        <h3 id="question-detail-title" class="question-detail-title">Question Details</h3>
        <button class="question-detail-close" aria-label="Close question details">&times;</button>
      </div>
      <div class="question-detail-body" id="question-detail-body">
        <!-- Content will be inserted here -->
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add event listeners
  const closeBtn = modal.querySelector('.question-detail-close');
  closeBtn.addEventListener('click', closeQuestionDetail);
  
  // Close on background click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeQuestionDetail();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeQuestionDetail();
    }
  });
}

// Close the question detail modal
function closeQuestionDetail() {
  const modal = document.getElementById('question-detail-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Clear all expanded states and visual indicators
    document.querySelectorAll('.question-result[aria-expanded="true"]').forEach(box => {
      box.setAttribute('aria-expanded', 'false');
      box.style.outline = '';
    });
    
    console.log('Question detail modal closed');
  }
}

// Show question detail modal
function showQuestionDetail(questionIndex, testResult) {
  console.log('showQuestionDetail called with:', questionIndex, testResult);
  
  const modal = document.getElementById('question-detail-modal');
  const body = document.getElementById('question-detail-body');
  const title = document.getElementById('question-detail-title');
  
  if (!modal || !body || !title) {
    console.error('Modal elements not found');
    return;
  }
  
  // Get questions array from multiple possible sources
  let questionsArray = null;
  
  // First try window.questions (current test)
  if (window.questions && window.questions.length > 0) {
    questionsArray = window.questions;
    console.log('Using window.questions');
  }
  
  // If not available, try to get from the test result (if stored)
  if (!questionsArray && testResult.questionsData) {
    questionsArray = testResult.questionsData;
    console.log('Using stored questions from test result');
  }
  
  // If still not available, try to get from the global sampleQuestions (test-specific)
  if (!questionsArray && window.sampleQuestions && window.sampleQuestions.length > 0) {
    questionsArray = window.sampleQuestions;
    console.log('Using window.sampleQuestions');
  }
  
  // Last resort: try to find sampleQuestions in global scope
  if (!questionsArray) {
    // Check if we're in a test-specific file that has sampleQuestions defined
    const scripts = document.getElementsByTagName('script');
    for (let script of scripts) {
      if (script.src && script.src.includes('math-grade3-2014.js')) {
        // We know this test has sampleQuestions
        if (typeof sampleQuestions !== 'undefined') {
          questionsArray = sampleQuestions;
          console.log('Using global sampleQuestions');
          break;
        }
      }
    }
  }
  
  if (!questionsArray || questionsArray.length === 0) {
    console.error('Questions array not available from any source');
    body.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <h3>Question Data Not Available</h3>
        <p>The original question data is not currently loaded. This can happen when:</p>
        <ul style="text-align: left; display: inline-block;">
          <li>Viewing old test results after refreshing the page</li>
          <li>The test questions haven't been loaded yet</li>
          <li>Browser storage limitations</li>
        </ul>
        <p><strong>Solution:</strong> Take the test again or navigate back to the test page to load the questions, then return to view results.</p>
        <button onclick="closeQuestionDetail()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--accent-color, #4a6fa5); color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
      </div>
    `;
    modal.classList.add('active');
    return;
  }
  
  const question = questionsArray[questionIndex];
  const userAnswer = testResult.answers[questionIndex];
  
  if (!question) {
    console.error('Question not found at index:', questionIndex);
    body.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <h3>Question Not Found</h3>
        <p>Question ${questionIndex + 1} could not be found in the available data.</p>
        <button onclick="closeQuestionDetail()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--accent-color, #4a6fa5); color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
      </div>
    `;
    modal.classList.add('active');
    return;
  }
  
  if (!userAnswer) {
    console.error('User answer not found at index:', questionIndex);
    body.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <h3>Answer Data Not Found</h3>
        <p>Your answer for question ${questionIndex + 1} could not be found.</p>
        <button onclick="closeQuestionDetail()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--accent-color, #4a6fa5); color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
      </div>
    `;
    modal.classList.add('active');
    return;
  }
  
  console.log('Question found:', question);
  console.log('User answer:', userAnswer);
  
  // Update title
  title.textContent = `Question ${questionIndex + 1} Details`;
  
  // Generate content based on question type
  let content = `<div class="detail-question-text">${question.text}</div>`;
  
  // Add question image if present
  if (question.image) {
    content += `<img src="${question.image.url}" alt="${question.image.alt || 'Question image'}" class="detail-question-image">`;
  }
  
  // Generate content based on question type
  try {
    switch (question.type) {
      case 'multiple-choice':
        content += generateMultipleChoiceDetail(question, userAnswer);
        break;
      case 'multiple-select':
        content += generateMultipleSelectDetail(question, userAnswer);
        break;
      case 'drag-drop':
        content += generateDragDropDetail(question, userAnswer);
        break;
      case 'free-response':
        content += generateFreeResponseDetail(question, userAnswer);
        break;
      default:
        content += '<p>Question type not supported for detailed view.</p>';
    }
    
    // Add answer summary
    content += generateAnswerSummary(question, userAnswer, questionIndex + 1);
    
    // Add explanation
    content += `
      <div class="detail-explanation">
        <h4>Explanation</h4>
        <p>${question.explanation}</p>
      </div>
    `;
  } catch (error) {
    console.error('Error generating question content:', error);
    content += `
      <div style="text-align: center; padding: 2rem;">
        <h3>Error Loading Question</h3>
        <p>There was an error loading the question details.</p>
        <p><em>Error: ${error.message}</em></p>
        <button onclick="closeQuestionDetail()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--accent-color, #4a6fa5); color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
      </div>
    `;
  }
  
  body.innerHTML = content;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Focus the modal content for accessibility
  setTimeout(() => {
    const modalContent = modal.querySelector('.question-detail-content');
    if (modalContent) {
      modalContent.focus();
    }
  }, 100);
  
  console.log('Question detail modal shown');
}

// Generate multiple choice detail view
function generateMultipleChoiceDetail(question, userAnswer) {
  let content = '<div class="detail-options-container">';
  
  question.options.forEach((option, index) => {
    const isUserSelected = userAnswer.userAnswer === index;
    const isCorrect = question.correctAnswer === index;
    
    let optionClass = 'detail-option';
    let indicator = String.fromCharCode(65 + index); // A, B, C, D
    
    if (isCorrect) {
      optionClass += ' correct-answer';
      indicator = '✓';
    }
    if (isUserSelected) {
      optionClass += ' user-selected';
      if (!isCorrect) {
        indicator = '✗';
      }
    }
    
    let optionContent = '';
    if (typeof option === 'object' && option.url) {
      // Image option
      optionContent = `
        <div class="detail-option-content">
          <img src="${option.url}" alt="${option.alt || `Option ${index + 1}`}" class="detail-option-image">
        </div>
      `;
    } else if (question.optionImages && question.optionImages[index]) {
      // Text with image
      optionContent = `
        <div class="detail-option-content">
          <img src="${question.optionImages[index].url}" alt="${question.optionImages[index].alt || option}" class="detail-option-image">
          <div class="detail-option-text">${option}</div>
        </div>
      `;
    } else {
      // Text only
      optionContent = `
        <div class="detail-option-content">
          <div class="detail-option-text">${option}</div>
        </div>
      `;
    }
    
    content += `
      <div class="${optionClass}">
        <div class="detail-option-indicator">${indicator}</div>
        ${optionContent}
      </div>
    `;
  });
  
  content += '</div>';
  return content;
}

// Generate multiple select detail view
function generateMultipleSelectDetail(question, userAnswer) {
  let content = '<div class="detail-options-container">';
  content += '<p><em>Select all that apply:</em></p>';
  
  question.options.forEach((option, index) => {
    const isUserSelected = userAnswer.userAnswer && userAnswer.userAnswer.includes(index);
    const isCorrect = question.correctAnswer.includes(index);
    
    let optionClass = 'detail-option';
    let indicator = '☐'; // Empty checkbox
    
    if (isCorrect && isUserSelected) {
      optionClass += ' correct-answer user-selected';
      indicator = '☑';
    } else if (isCorrect && !isUserSelected) {
      optionClass += ' correct-answer';
      indicator = '☑';
    } else if (!isCorrect && isUserSelected) {
      optionClass += ' user-selected';
      indicator = '☒';
    }
    
    let optionContent = '';
    if (typeof option === 'object' && option.url) {
      optionContent = `
        <div class="detail-option-content">
          <img src="${option.url}" alt="${option.alt || `Option ${index + 1}`}" class="detail-option-image">
        </div>
      `;
    } else if (question.optionImages && question.optionImages[index]) {
      optionContent = `
        <div class="detail-option-content">
          <img src="${question.optionImages[index].url}" alt="${question.optionImages[index].alt || option}" class="detail-option-image">
          <div class="detail-option-text">${option}</div>
        </div>
      `;
    } else {
      optionContent = `
        <div class="detail-option-content">
          <div class="detail-option-text">${option}</div>
        </div>
      `;
    }
    
    content += `
      <div class="${optionClass}">
        <div class="detail-option-indicator">${indicator}</div>
        ${optionContent}
      </div>
    `;
  });
  
  content += '</div>';
  return content;
}

// Generate drag and drop detail view
function generateDragDropDetail(question, userAnswer) {
  let content = '<div class="detail-drag-drop-container">';
  
  content += '<h4>Available Items:</h4>';
  content += '<div class="detail-drag-items">';
  question.options.forEach((item, index) => {
    content += `<span class="detail-drag-item">${item}</span>`;
  });
  content += '</div>';
  
  content += '<h4>Drop Zones:</h4>';
  content += '<div class="detail-drop-zones">';
  question.dropZones.forEach((zone, index) => {
    const userItem = userAnswer.userAnswer && userAnswer.userAnswer[index] !== null ? 
      question.options[userAnswer.userAnswer[index]] : 'No answer';
    const correctItem = question.correctAnswer[index] !== null ? 
      question.options[question.correctAnswer[index]] : 'No answer';
    
    const isCorrect = userAnswer.userAnswer && userAnswer.userAnswer[index] === question.correctAnswer[index];
    
    content += `
      <div class="detail-drop-zone">
        <strong>${zone}:</strong><br>
        <span class="${isCorrect ? 'correct-indicator' : 'incorrect-indicator'}">
          Your answer: ${userItem}
        </span><br>
        <span class="correct-indicator">Correct answer: ${correctItem}</span>
      </div>
    `;
  });
  content += '</div>';
  
  content += '</div>';
  return content;
}

// Generate free response detail view
function generateFreeResponseDetail(question, userAnswer) {
  const userResponse = userAnswer.userAnswer || 'No answer provided';
  const isCorrect = userAnswer.correct;
  
  let content = `
    <h4>Your Response:</h4>
    <div class="detail-free-response ${isCorrect ? 'correct-answer' : 'user-selected'}">${userResponse}</div>
  `;
  
  if (question.correctKeywords && question.correctKeywords.length > 0) {
    content += `
      <h4>Expected Keywords/Answers:</h4>
      <p>${question.correctKeywords.join(', ')}</p>
    `;
  }
  
  return content;
}

// Generate answer summary
function generateAnswerSummary(question, userAnswer, questionNumber) {
  const isCorrect = userAnswer.correct;
  const statusText = isCorrect ? 'Correct' : 'Incorrect';
  const statusClass = isCorrect ? 'correct-indicator' : 'incorrect-indicator';
  
  return `
    <div class="detail-answer-summary">
      <h4>Answer Summary</h4>
      <div class="answer-summary-item">
        <span class="answer-summary-label">Question:</span>
        <span class="answer-summary-value">${questionNumber} of ${window.questions ? window.questions.length : 'N/A'}</span>
      </div>
      <div class="answer-summary-item">
        <span class="answer-summary-label">Result:</span>
        <span class="answer-summary-value ${statusClass}">${statusText}</span>
      </div>
      <div class="answer-summary-item">
        <span class="answer-summary-label">Question Type:</span>
        <span class="answer-summary-value">${question.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
      </div>
    </div>
  `;
}

// Enhanced generateDetailedResultHTML function to add click handlers
function enhancedGenerateDetailedResultHTML(result) {
  if (!result.answers || result.answers.length === 0) {
    return '<p>Detailed answers not available for this test.</p>';
  }

  let detailsHTML = '<div class="question-results">';
  
  result.answers.forEach((answer, index) => {
    const statusClass = answer.correct ? 'correct' : 'incorrect';
    const statusText = answer.correct ? '✓ Correct' : '✗ Incorrect';
    
    detailsHTML += `
      <div class="question-result ${statusClass}" 
           data-question-index="${index}" 
           role="button" 
           tabindex="0"
           aria-expanded="false"
           aria-label="View details for question ${index + 1}">
        <div class="question-number">Q${index + 1}</div>
        <div class="question-status">${statusText}</div>
      </div>
    `;
  });

  detailsHTML += '</div>';
  return detailsHTML;
}

// Add click handlers to question result boxes
function addQuestionDetailHandlers() {
  console.log('Adding question detail handlers');
  
  // Remove existing handlers first to prevent duplicates
  const existingHandler = window.questionBoxClickHandler;
  if (existingHandler) {
    document.removeEventListener('click', existingHandler);
    document.removeEventListener('keydown', window.questionBoxKeydownHandler);
  }
  
  // Create new handlers
  window.questionBoxClickHandler = function(e) {
    const questionBox = e.target.closest('.question-result');
    if (!questionBox) return;
    
    console.log('Question box clicked:', questionBox);
    
    e.preventDefault();
    e.stopPropagation();
    
    const questionIndex = parseInt(questionBox.getAttribute('data-question-index'));
    if (isNaN(questionIndex)) {
      console.error('Invalid question index');
      return;
    }
    
    console.log('Question index:', questionIndex);
    
    // Find the test result data
    const resultItem = questionBox.closest('.result-item');
    if (!resultItem) {
      console.error('Result item not found');
      return;
    }
    
    // Get the result data from the enhanced results manager
    let testResult = null;
    
    // First try to get from the enhanced results manager
    if (window.resultsManager && window.resultsManager.results) {
      const resultIndex = Array.from(document.querySelectorAll('.result-item')).indexOf(resultItem);
      testResult = window.resultsManager.results[resultIndex];
      console.log('Found result from results manager:', testResult);
    }
    
    // Fallback to localStorage if needed
    if (!testResult) {
      const storageKey = window.TEST_STORAGE_KEY || `solace_test_results_${window.TEST_IDENTIFIER || 'default'}`;
      const savedResults = JSON.parse(localStorage.getItem(storageKey) || '[]');
      const resultIndex = Array.from(document.querySelectorAll('.result-item')).indexOf(resultItem);
      testResult = savedResults[resultIndex];
      console.log('Found result from localStorage:', testResult);
    }
    
    if (!testResult || !testResult.answers) {
      console.error('Test result or answers not found:', testResult);
      return;
    }
    
    // Clear all other aria-expanded attributes
    document.querySelectorAll('.question-result[aria-expanded="true"]').forEach(box => {
      if (box !== questionBox) {
        box.setAttribute('aria-expanded', 'false');
        box.style.outline = '';
      }
    });
    
    // Check if this question is already expanded
    const isExpanded = questionBox.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      // Close the modal if it's open
      closeQuestionDetail();
    } else {
      // Update aria-expanded attribute and show visual indication
      questionBox.setAttribute('aria-expanded', 'true');
      
      // Show the question detail
      console.log('Showing question detail for index:', questionIndex);
      showQuestionDetail(questionIndex, testResult);
    }
  };
  
  window.questionBoxKeydownHandler = function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.questionBoxClickHandler(e);
    }
  };
  
  // Add new handlers
  document.addEventListener('click', window.questionBoxClickHandler);
  document.addEventListener('keydown', window.questionBoxKeydownHandler);
  
  console.log('Question detail handlers added successfully');
}

// Override the original generateDetailedResultHTML function
function overrideGenerateDetailedResultHTML() {
  // This will be called when results manager is available
  const waitForResultsManager = () => {
    if (window.resultsManager && window.resultsManager.generateDetailedResultHTML) {
      console.log('Overriding generateDetailedResultHTML');
      window.resultsManager.generateDetailedResultHTML = enhancedGenerateDetailedResultHTML;
      
      // Also override attachResultEventListeners to add our handlers
      const originalAttachResultEventListeners = window.resultsManager.attachResultEventListeners.bind(window.resultsManager);
      
      window.resultsManager.attachResultEventListeners = function() {
        console.log('Enhanced attachResultEventListeners called');
        originalAttachResultEventListeners.apply(this, arguments);
        
        // Add our question detail handlers after a short delay
        setTimeout(() => {
          addQuestionDetailHandlers();
        }, 100);
      };
    } else {
      // Retry if results manager not yet available
      setTimeout(waitForResultsManager, 100);
    }
  };
  
  waitForResultsManager();
}

// Initialize the question detail functionality
function initializeQuestionDetail() {
  console.log('Initializing question detail functionality');
  
  addQuestionDetailStyles();
  createQuestionDetailModal();
  overrideGenerateDetailedResultHTML();
  enhanceFinishTestForQuestions();
  
  // Add handlers with a delay to ensure DOM is ready
  setTimeout(() => {
    addQuestionDetailHandlers();
  }, 500);
  
  // Also add handlers when results are displayed
  const originalDisplayResults = window.displayResults;
  if (originalDisplayResults) {
    window.displayResults = function() {
      const result = originalDisplayResults.apply(this, arguments);
      setTimeout(() => {
        addQuestionDetailHandlers();
      }, 200);
      return result;
    };
  }
  
  console.log('Question detail functionality initialized');
}

// Enhance finishTest to store question data with results
function enhanceFinishTestForQuestions() {
  const waitForFinishTest = () => {
    if (typeof window.finishTest === 'function') {
      const originalFinishTest = window.finishTest;
      
      window.finishTest = function() {
        console.log('Enhanced finishTest called - storing question data');
        
        // Store current questions data for future reference
        if (window.questions && window.questions.length > 0) {
          window.currentTestQuestionsData = window.questions;
          console.log('Stored questions data for future reference');
        } else if (window.sampleQuestions && window.sampleQuestions.length > 0) {
          window.currentTestQuestionsData = window.sampleQuestions;
          console.log('Stored sampleQuestions data for future reference');
        }
        
        // Call original finishTest
        return originalFinishTest.apply(this, arguments);
      };
      
      console.log('finishTest function enhanced for question data storage');
    } else {
      // Retry if finishTest not yet available
      setTimeout(waitForFinishTest, 100);
    }
  };
  
  waitForFinishTest();
}

// Also enhance the results saving to include question data
function enhanceResultsSaving() {
  // Wait for results manager to be available
  const waitForResultsManager = () => {
    if (window.resultsManager && window.resultsManager.saveTestResult) {
      const originalSaveTestResult = window.resultsManager.saveTestResult.bind(window.resultsManager);
      
      window.resultsManager.saveTestResult = function(resultData) {
        console.log('Enhanced saveTestResult called - including question data');
        
        // Add question data to the result if available
        if (window.currentTestQuestionsData) {
          resultData.questionsData = window.currentTestQuestionsData;
          console.log('Added questions data to test result');
        } else if (window.questions) {
          resultData.questionsData = window.questions;
          console.log('Added window.questions to test result');
        } else if (window.sampleQuestions) {
          resultData.questionsData = window.sampleQuestions;
          console.log('Added sampleQuestions to test result');
        }
        
        return originalSaveTestResult.call(this, resultData);
      };
      
      console.log('saveTestResult enhanced to include question data');
    } else {
      setTimeout(waitForResultsManager, 100);
    }
  };
  
  waitForResultsManager();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeQuestionDetail);
} else {
  setTimeout(initializeQuestionDetail, 100);
}

// Also run when the app initializes (for test-pages.js integration)
const originalInitApp = window.initApp;
if (originalInitApp) {
  window.initApp = function() {
    const result = originalInitApp.apply(this, arguments);
    setTimeout(() => {
      console.log('Adding question detail initialization to initApp');
      initializeQuestionDetail();
      enhanceResultsSaving();
    }, 1000);
    return result;
  };
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