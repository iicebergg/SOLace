window.TEST_IDENTIFIER = 'math_grade3_003';

const sampleQuestions = [
 {
 id: '1',
 text: 'How many minutes are there from 10:30 A.M. to 1:00 P.M.?',
 type: 'multiple-choice',
 options: ['500 minutes', '300 minutes', '150 minutes', '120 minutes'],
 correctAnswer: 2, 
 explanation: 'From 10:30 A.M. to 1:00 P.M. is 2 hours and 30 minutes = 150 minutes.'
 },
 {
 id: '2',
 text: 'Harry drew a picture with the figures shown. <br><img src="../math-grade3-2014/images/question_22.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which best describes the figures in this picture?',
 type: 'multiple-choice',
 options: ['Cubes', 'Squares', 'Rectangles', 'Rectangular prisms'],
 correctAnswer: 2, 
 explanation: 'The figures are three-dimensional, so they are rectangular prisms, not flat shapes.'
 },
 {
 id: '3',
 text: 'Which is the most reasonable length of a bed?',
 type: 'multiple-choice',
 options: ['6 feet', '6 inches', '6 meters', '6 centimeters'],
 correctAnswer: 0, 
 explanation: '6 feet is the most reasonable length for a bed. 6 inches and 6 centimeters are too short, 6 meters is too long.'
 },
 {
 id: '4',
 text: 'Which is closest to the time shown on this clock? <br><img src="../math-grade3-2014/images/question_24.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['4:45', '5:45', '9:05', '9:25'],
 correctAnswer: 0, 
 explanation: 'Read the hour and minute hands to determine the approximate time.'
 },
 {
 id: '5',
 text: 'What is the temperature in °F on this thermometer? Write the number only; do not include units. <br><img src="../math-grade3-2014/images/question_25.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'free-response',
 correctKeywords: ['84'],
 explanation: 'Read the temperature scale on the thermometer to find the exact temperature.'
 },
 {
 id: '6',
 text: 'Jack built a tower of blocks as shown. <br><img src="../math-grade3-2014/images/question_26.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which tower of blocks appears to be congruent to Jack\'s tower of blocks?',
 type: 'multiple-choice',
 options: [
    {url: '../math-grade3-2014/images/question_26a.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_26b.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_26c.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_26d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Congruent figures have the same shape and size. Look for the tower that matches exactly.'
 },
 {
 id: '7',
 text: 'Franklin began selling lumber in the morning at the time shown on the clock. <br><img src="../math-grade3-2014/images/question_27.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> He finished selling lumber three hours later. At what time did Franklin finish selling lumber?',
 type: 'multiple-choice',
 options: ['8:45 A.M.', '9:45 A.M.', '10:45 A.M.', '11:45 A.M.'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '8',
 text: 'What is the perimeter of the shaded figure on this grid? <br><img src="../math-grade3-2014/images/question_28.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['18 units', '19 units', '22 units', '24 units'],
 correctAnswer: 3, 
 explanation: 'Count the units around the outside edge of the shaded figure to find the perimeter.'
 },
 {
 id: '9',
 text: 'Christina has the money shown. <br><img src="../math-grade3-2014/images/question_29.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Exactly how much money does Christina have?',
 type: 'multiple-choice',
 options: ['$3.50', '$3.60', '$3.85', '$4.05'],
 correctAnswer: 1, 
 explanation: 'Count the value of all the coins and bills shown.'
 },
 {
 id: '10',
 text: 'Alfred drew two rays and a line segment in his geometry notebook. Which of these could be the picture Alfred drew?',
 type: 'multiple-choice',
 options: [
    {url: '../math-grade3-2014/images/question_30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A ray has one endpoint and extends infinitely in one direction. A line segment has two endpoints.'
 },
 {
 id: '11',
 text: 'Each side of this figure is the same length. <br><img src="../math-grade3-2014/images/question_31.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which measurement is closest to the perimeter of this figure?',
 type: 'multiple-choice',
 options: ['5 feet', '8 feet', '10 feet', '12 feet'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
/* Practice Items */
 {
 id: '12',
 text: 'This model shows a rectangle that is 3 feet long and 2 feet wide. <br><img src="../math-grade3-practice-2023/images/11.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which is the closest to the area of the shaded part of this modeL?',
 type: 'multiple-choice',
 options: ['8 square feet', '6 square feet', '4 square feet', '2 square feet'],
 correctAnswer: 2, 
 explanation: 'Count the shaded squares in the rectangle. If about half of the 6 total squares (3 × 2) are shaded, the area is about 4 square feet.'
 },
 {
 id: '13',
 text: 'Claudia painted a picture as shown. <br><img src="../math-grade3-practice-2023/images/13.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which measurement is closest to the perimeter of Claudia\'s picture?',
 type: 'multiple-choice',
 options: ['14 feet', '12 feet', '8 feet', '6 feet'],
 correctAnswer: 1, 
 explanation: 'Perimeter is the distance around the outside. Add all four sides of the picture frame to find the total distance around.'
 },
 {
 id: '14',
 text: 'Which is closest to the time shown on this clock? <br><img src="../math-grade3-practice-2023/images/14.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['4:08', '4:40', '8:04', '8:20'],
 correctAnswer: 3, 
 explanation: 'Look at the clock hands. The short hand (hour hand) points between 8 and 9, and the long hand (minute hand) points to 4, which means 20 minutes. The time is 8:20.'
 },
 {
 id: '15',
 text: 'Allen arrived at his friend\'s house at 3:20 P.M. He left 2 hours later. At what time did Allen leave his friend\'s house?',
 type: 'multiple-choice',
 options: ['2:20 P.M.', '3:20 P.M.', '4:20 P.M.', '5:20 P.M.'],
 correctAnswer: 3, 
 explanation: 'Add 2 hours to the start time: 3:20 P.M. + 2 hours = 5:20 P.M.'
 },
 {
 id: '16',
 text: 'Claire arrived at the zoo at 12:45 P.M. She left the zoo at 3:45 P.M. What was the total amount of time Claire was at the zoo?',
 type: 'multiple-choice',
 options: ['3 hours', '4 hours', '9 hours', '12 hours'],
 correctAnswer: 0, 
 explanation: 'Count the hours from 12:45 P.M. to 3:45 P.M.: from 12:45 to 1:45 is 1 hour, to 2:45 is 2 hours, to 3:45 is 3 hours total.'
 },
 {
 id: '17',
 text: 'Which 3 polygons were combined without overlapping to make the figure shown? <br><img src="../math-grade3-practice-2023/images/17.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Triangle, pentagon, triangle', 'Quadrilateral, triangle, quadrilateral', 'Quadrilateral, pentagon, triangle', 'Triangle, quadrilateral, triangle'],
 correctAnswer: 3, 
 explanation: 'Look at the shapes that make up the figure. Count the sides of each part: triangles have 3 sides, quadrilaterals have 4 sides.'
 },
];

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

// Independent Results Manager for Non-Scaled Tests
(function() {
  'use strict';
  
  console.log(`Non-scaled test results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
  // Override the results manager to use test-specific storage
  function createTestSpecificResultsManager() {
    if (!window.resultsManager) {
      console.log('Results manager not found, creating test-specific fallback');
      return;
    }
    
    // Store reference to original methods
    const originalLoadAllResults = window.resultsManager.loadAllResults.bind(window.resultsManager);
    const originalSaveTestResult = window.resultsManager.saveTestResult.bind(window.resultsManager);
    
    // Override loadAllResults to use test-specific storage
    window.resultsManager.loadAllResults = function() {
      try {
        const stored = localStorage.getItem(TEST_STORAGE_KEY);
        this.results = stored ? JSON.parse(stored) : [];
        console.log(`Loaded ${this.results.length} results for ${window.TEST_IDENTIFIER}`);
        return this.results;
      } catch (error) {
        console.error('Error loading test-specific results:', error);
        return [];
      }
    };
    
    // Override saveTestResult to use test-specific storage
    window.resultsManager.saveTestResult = function(resultData) {
      // Enhanced result data with test identification (no scaled scores)
      const enhancedResultData = {
        ...resultData,
        testType: window.TEST_IDENTIFIER.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      };
      
      console.log(`Saving ${window.TEST_IDENTIFIER} result: ${enhancedResultData.correctAnswers}/${enhancedResultData.totalQuestions} correct (${enhancedResultData.score}%)`);
      
      // Store for immediate use
      window.tempEnhancedResult = enhancedResultData;
      
      // Create the result object
      const result = {
        id: 'result_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        score: enhancedResultData.score,
        totalQuestions: enhancedResultData.totalQuestions,
        correctAnswers: enhancedResultData.correctAnswers,
        timeSpent: enhancedResultData.timeSpent || 0,
        answers: enhancedResultData.answers || [],
        testType: enhancedResultData.testType
      };
      
      // Load current results, add new one, and save
      this.results = this.loadAllResults();
      this.results.unshift(result);
      
      // Keep only the most recent 50 results
      if (this.results.length > 50) {
        this.results = this.results.slice(0, 50);
      }
      
      // Save to test-specific storage
      try {
        localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(this.results));
        console.log('Test-specific result saved successfully:', result.id);
        
        // Trigger immediate enhancement after saving (for any custom enhancements)
        setTimeout(() => {
          console.log('Triggering immediate enhancement after save');
          enhanceResultsWithRetry();
        }, 10);
        
        return result;
      } catch (error) {
        console.error('Error saving test-specific result:', error);
        return null;
      }
    };
    
    // Reload results with the new system
    window.resultsManager.results = window.resultsManager.loadAllResults();
    
    // Override displayResults to ensure proper timing
    if (window.resultsManager.displayResults) {
      const originalDisplayResults = window.resultsManager.displayResults.bind(window.resultsManager);
      
      window.resultsManager.displayResults = function() {
        console.log('Results manager displayResults called');
        
        // Call original display
        const result = originalDisplayResults.apply(this, arguments);
        
        // Immediately attempt any custom enhancements
        setTimeout(() => {
          console.log('Post-displayResults enhancement trigger');
          enhanceResultsWithRetry();
        }, 10);
        
        return result;
      };
    }
  }
  
  // Enhanced finishTest override for immediate result processing
  function enhanceFinishTest() {
    // Wait for finishTest to be available
    const waitForFinishTest = () => {
      if (typeof window.finishTest === 'function') {
        const originalFinishTest = window.finishTest;
        
        window.finishTest = function() {
          console.log('Enhanced finishTest called - processing results immediately');
          
          // Get current test data
          const correctAnswers = window.currentTestAnswers ? 
            window.currentTestAnswers.filter(answer => answer.correct).length : 0;
          const totalQuestions = window.questions ? window.questions.length : 0;
          const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
          
          console.log(`Test completed: ${correctAnswers}/${totalQuestions} → ${score}%`);
          
          // Store enhanced data for immediate use
          window.tempEnhancedResult = {
            score: score,
            correctAnswers: correctAnswers,
            totalQuestions: totalQuestions,
            testType: window.TEST_IDENTIFIER.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
          };
          
          // Call original finishTest
          const result = originalFinishTest.apply(this, arguments);
          
          // Immediately process results with multiple attempts
          setTimeout(() => enhanceResultsWithRetry(), 50);
          setTimeout(() => enhanceResultsWithRetry(), 150);
          setTimeout(() => enhanceResultsWithRetry(), 300);
          setTimeout(() => enhanceResultsWithRetry(), 500);
          
          return result;
        };
        
        console.log('finishTest function enhanced for immediate result processing');
      } else {
        // Retry if finishTest not yet available
        setTimeout(waitForFinishTest, 100);
      }
    };
    
    waitForFinishTest();
  }
  
  // Results enhancement with retry logic (for custom enhancements if needed)
  function enhanceResultsWithRetry(retryCount = 0) {
    const maxRetries = 10;
    
    console.log(`Attempting to enhance results (attempt ${retryCount + 1})`);
    
    // Check if we're on results page
    const resultsPage = document.getElementById('results');
    if (!resultsPage || !resultsPage.classList.contains('active')) {
      if (retryCount < maxRetries) {
        setTimeout(() => enhanceResultsWithRetry(retryCount + 1), 100);
      }
      return;
    }
    
    const resultsSummary = document.getElementById('results-summary');
    if (!resultsSummary) {
      if (retryCount < maxRetries) {
        setTimeout(() => enhanceResultsWithRetry(retryCount + 1), 100);
      }
      return;
    }
    
    // Check if results content is actually displayed
    const scoreCircle = resultsSummary.querySelector('.score-circle');
    if (!scoreCircle) {
      if (retryCount < maxRetries) {
        setTimeout(() => enhanceResultsWithRetry(retryCount + 1), 100);
      }
      return;
    }
    
    // For non-scaled tests, we mainly just ensure the basic results are displayed
    // You can add custom enhancements here if needed for specific test types
    
    console.log('Basic results enhancement completed for non-scaled test');
    
    // Add any test-specific enhancements here
    // For example: addCustomTestInfo(), enhanceWithSpecialScoring(), etc.
    
    return true;
  }
  
  // MutationObserver to watch for results changes
  function setupResultsObserver() {
    const resultsSection = document.getElementById('results');
    if (!resultsSection) return;
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
          // Check if results summary was updated
          const resultsSummary = document.getElementById('results-summary');
          if (resultsSummary) {
            const scoreCircle = resultsSummary.querySelector('.score-circle');
            if (scoreCircle) {
              console.log('Results detected via MutationObserver, enhancing...');
              setTimeout(() => enhanceResultsWithRetry(), 50);
            }
          }
        }
      });
    });
    
    observer.observe(resultsSection, {
      childList: true,
      subtree: true,
      attributes: false
    });
    
    console.log('Results MutationObserver setup complete');
  }
  
  // Legacy function compatibility
  function enhanceResultsDisplay() {
    return enhanceResultsWithRetry();
  }
  
  function checkAndEnhanceResults() {
    return enhanceResultsWithRetry();
  }
  
  function initialize() {
    console.log(`Initializing ${window.TEST_IDENTIFIER} independent results system`);
    
    createTestSpecificResultsManager();
    enhanceFinishTest();
    setupResultsObserver();
    
    // Backup polling system (reduced frequency since we have better detection now)
    const checkInterval = setInterval(() => {
      const resultsPage = document.getElementById('results');
      if (resultsPage && resultsPage.classList.contains('active')) {
        enhanceResultsWithRetry();
        clearInterval(checkInterval);
      }
    }, 1000);
    
    setTimeout(() => clearInterval(checkInterval), 20000);
    
    // Enhanced click listeners
    document.addEventListener('click', function(e) {
      if (e.target && (e.target.id === 'results-btn' || e.target.id === 'view-results')) {
        console.log('Navigation to results detected');
        setTimeout(() => enhanceResultsWithRetry(), 100);
        setTimeout(() => enhanceResultsWithRetry(), 300);
        setTimeout(() => enhanceResultsWithRetry(), 600);
      }
    });
    
    console.log(`${window.TEST_IDENTIFIER} independent results system initialized`);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();