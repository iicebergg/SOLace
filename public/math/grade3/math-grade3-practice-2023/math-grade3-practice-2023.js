window.TEST_IDENTIFIER = 'math_grade3_practice_2023';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which number sentence will make this statement true? <center>? > 8,243</center>',
 type: 'multiple-choice',
 options: ['8,223', '8,285', '8,198', '8,234'],
 correctAnswer: 0,
 explanation: 'Addition and subtraction are inverse operations, so 9 + 6 = 15 helps solve 15 - 9 = 6.'
 },
 {
 id: '2',
 text: 'This set of circles is shaded to represent one whole. <br><img src="images/question_2.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which model is shaded to represent this expression? <center><math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> + <center><math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> + <center><math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> + <center><math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> + <center><math><mfrac><mn>1</mn><mn>4</mn></mfrac></math></center>',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_2a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_2b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_2c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_2d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'When comparing fractions with the same denominator, compare the numerators. Since 3 < 4, we have 3/11 < 4/11.'
 },
 {
 id: '3',
 text: 'This model is shaded to represent one whole. <br><img src="images/question_3_1.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Model R is shaded to represent a fraction. <br><img src="images/question_3_2.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which of these is shaded to represent a fraction that is less than the fraction represented by Model R?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_3a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_3b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_3c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_3d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Count the place value blocks: thousands, hundreds, tens, and ones to determine the number.'
 },
 {
 id: '4',
 text: 'The table shows the number of miles a family traveled on three days. <br><img src="images/question_4.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on the table, which is closest to the difference between the total number of miles this family traveled on Day 1 and Day 2 combined and the number of miles traveled on Day 3?',
 type: 'multiple-choice',
 options: ['200 miles', '300 miles', '600 miles', '900 miles'],
 correctAnswer: 2, 
 explanation: 'Count the place value blocks: thousands, hundreds, tens, and ones to determine the number.'
 },
 {
 id: '5',
 text: 'There were a total of 750 drinks in the cafeteria. There were 249 chocolate milks and 203 whole milks. The rest of the drinks were orange juice. Which estimate is closest to the number of orange juices in the cafeteria?',
 type: 'multiple-choice',
 options: ['400 because 200 + 200 = 400 and 800 - 400 = 400', '1,200 because 200 + 200 = 400 and 800 + 400 = 1,200 ', '300 because 250 + 200 = 450 and 750 - 450 = 300 ', '1,150 because 250 + 200 = 450 and 700 + 450 = 1,500'],
 correctAnswer: 3, 
 explanation: 'Compare the fractions by looking at the numerators when denominators are the same.'
 },
 {
 id: '6',
 text: 'Mr. Gary’s class has a goal of selling 500 pizzas in three months. The class sold 135 pizzas in the first month and 257 pizzas in the second month. Exactly how many more pizzas does the class need to sell to reach its goal?',
 type: 'multiple-choice',
 options: ['392', '382', '208', '108'],
 correctAnswer: 3, 
 explanation: '78,025 is read as seventy-eight thousand, twenty-five.'
 },
 {
 id: '7',
 text: 'Which of these best represents this set of cherries? <br><img src="images/question_7.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['40 - 5', '40 ÷ 5', '5 + 8', '5 × 40'],
 correctAnswer: 2, 
 explanation: 'Count the whole units and fractional parts shown in the model.'
 },
 {
 id: '8',
 text: 'Which of these is best represented by this number line? <br>Which of these best represents this set of cherries? <img src="images/question_7.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['6 + 2', '6 × 2', '3 + 2', '3 × 2'],
 correctAnswer: 1, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '9',
 text: 'Which number sentence is true?',
 type: 'multiple-choice',
 options: ['8 × 2 = 16 + 3', '9 - 1 = 8 ÷ 2', '5 × 6 = 25 + 5', '15 - 3 = 6 × 3'],
 correctAnswer: 1, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '10',
 text: 'A hairclip is shown. <br><img src="images/question_10.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the length of this hairclip to the nearest half inch?',
 type: 'multiple-choice',
 options: ['2<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> inches', '3<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> inches', '6 inches', '7 inches'],
 correctAnswer: 1, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '11',
 text: 'This model shows a rectangle that is 3 feet long and 2 feet wide. <br><img src="images/question_11.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which is the closest to the area of the shaded part of this modeL?',
 type: 'multiple-choice',
 options: ['8 square feet', '6 square feet', '4 square feet', '2 square feet'],
 correctAnswer: 1, 
 explanation: '63 ÷ 7 = 9, so the answer is 7.'
 },
 {
 id: '13',
 text: 'Claudia painted a picture as shown. <br><img src="images/question_13.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which measurement is closest to the perimeter of Claudia\'s picture?',
 type: 'multiple-choice',
 options: ['14 feet', '12 feet', '8 feet', '6 feet'],
 correctAnswer: 0, 
 explanation: 'Look at the arrangement to determine the multiplication sentence that represents the groups.'
 },
 {
 id: '14',
 text: 'Which is closest to the time shown on this clock? <br><img src="images/question_14.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['4:08', '4:40', '8:04', '8:20'],
 correctAnswer: 2, 
 explanation: 'Start with 25, subtract 16 sold, then add 136 new plants: 25 - 16 + 136 = 145.'
 },
 {
 id: '15',
 text: 'Allen arrived at his friend’s house at 3:20 P.M. He left 2 hours later. At what time did Allen leave his friend’s house?',
 type: 'multiple-choice',
 options: ['2:20 P.M.', '3:20 P.M.', '4:20 P.M.', '5:20 P.M.'],
 correctAnswer: 0, 
 explanation: 'Count the total equal parts and the shaded parts to find the fraction.'
 },
 {
 id: '16',
 text: 'Claire arrived at the zoo at 12:45 P.M. She left the zoo at 3:45 P.M. What was the total amount of time Claire was at the zoo?',
 type: 'multiple-choice',
 options: ['3 hours', '4 hours', '9 hours', '12 hours'],
 correctAnswer: 0, 
 explanation: 'Count the total equal parts and the shaded parts to find the fraction.'
 },
 {
 id: '17',
 text: 'Which 3 polygons were combined without overlapping to make the figure shown? <br><img src="images/question_17.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Triangle, pentagon, triangle', 'Quadrilateral, triangle, quadrilateral', 'Quadrilateral, pentagon, triangle', 'Triangle, quadrilateral, triangle'],
 correctAnswer: 1, 
 explanation: 'When adding fractions with the same denominator, add the numerators: <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>4</mn></mfrac></math> = 1.'
 },
 {
 id: '18',
 text: ' Mrs. Morgan wants to know what game the students would like to play during indoor recess. What is the best way for Mrs. Morgan to collect the data?',
 type: 'multiple-choice',
 options: ['Count the number of students who like to play football', 'Count the number of students that will be at indoor recess', 'Create a tally chart to show how long students play during recess', 'Create a tally chart to show what game the students would like to play during indoor recess'],
 correctAnswer: 1, 
 explanation: '3,000 - 285 = 2,715.'
 },
 {
 id: '19',
 text: 'Four students have a total of 200 coins. This pictograph represents the number of coins three of the students have. The number of coins Diana has is missing. <br><img src="images/question_19.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which set represents the number of coins Diana has?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_19.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_19.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_19.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_19.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Count the place value blocks: thousands, hundreds, tens, and ones to determine the number.'
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