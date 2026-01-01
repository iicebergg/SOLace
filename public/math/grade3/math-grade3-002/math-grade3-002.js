window.TEST_IDENTIFIER = 'math_grade3_002';

const sampleQuestions = [
 {
 id: '1',
 text: 'This model is shaded to represent one whole. <br><img src="../math-grade3-2014/images/question_12a.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> These two models are each shaded to represent a fraction. <br><img src="../math-grade3-2014/images/question_12b.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the sum of these two fractions?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>14</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>14</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>7</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'Count the total parts and the shaded parts to determine the fraction.'
 },
 {
 id: '2',
 text: 'Which number sentence best represents this set of flowers? <br><img src="../math-grade3-2014/images/question_13.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['32 ÷ 4 = ?', '32 - 8 = ?', '8 × 4 = ?', '8 + 8 = ?'],
 correctAnswer: 0, 
 explanation: 'Look at the arrangement to determine the multiplication sentence that represents the groups.'
 },
 {
 id: '3',
 text: 'Kiku had a total of 25 plants at her store on Tuesday morning. During the day, she sold 16 of these plants and then received 136 new plants. At the end of the day, exactly how many plants did Kiku have?',
 type: 'multiple-choice',
 options: ['9', '61', '145', '197'],
 correctAnswer: 2, 
 explanation: 'Start with 25, subtract 16 sold, then add 136 new plants: 25 - 16 + 136 = 145.'
 },
 {
 id: '4',
 text: 'This model is shaded to represent one whole. <br><img src="../math-grade3-2014/images/question_15a.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> These two models are shaded to represent a fraction. <br><img src="../math-grade3-2014/images/question_15b.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the difference between these two fractions?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>16</mn></mfrac></math>', '<math><mfrac><mn>10</mn><mn>16</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Count the total equal parts and the shaded parts to find the fraction.'
 },
 {
 id: '5',
 text: 'A store has 57 packages of gum with 5 pieces of gum in each package. What is the total number of pieces of gum in these packages? Write the number only; do not include units.',
 type: 'free-response',
 correctKeywords: ['285'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '6',
 text: 'What is <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>? <br><img src="../math-grade3-2014/images/question_17.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['1 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '1', '<math><mfrac><mn>4</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'When adding fractions with the same denominator, add the numerators: <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>4</mn></mfrac></math> = 1.'
 },
 {
 id: '7',
 text: '3,000 - 285 = ?',
 type: 'multiple-choice',
 options: ['2,285', '2,715', '2,815', '3,285'],
 correctAnswer: 1, 
 explanation: '3,000 - 285 = 2,715.'
 },
 {
 id: '8',
 text: 'Which of these is best represented by this number line? <br><img src="../math-grade3-2014/images/question_19.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['24 + 4', '24 - 4', '6 + 4', '4 × 6'],
 correctAnswer: 3, 
 explanation: 'Look at the pattern on the number line to determine which operation it represents.'
 },
 {
 id: '9',
 text: 'Select each multiplication fact that equals 48.',
 type: 'multiple-select',
 options: ['4 × 8', '6 × 9', '12 × 4', '7 × 6', '8 × 6', '5 × 8'],
 correctAnswer: [2, 4],
 explanation: 'Check each multiplication: 4×12=48, 6×8=48, 12×4=48, 7×6=42, 8×6=48, 5×8=40.'
 },
 /* Practice Items */
  {
 id: '10',
 text: 'The table shows the number of miles a family traveled on three days. <br><img src="../math-grade3-practice-2023/images/4.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on the table, which is closest to the difference between the total number of miles this family traveled on Day 1 and Day 2 combined and the number of miles traveled on Day 3?',
 type: 'multiple-choice',
 options: ['200 miles', '300 miles', '600 miles', '900 miles'],
 correctAnswer: 1, 
 explanation: 'Add Day 1 and Day 2 miles together, then subtract Day 3 miles to find the difference. Use estimation to find the closest answer.'
 },
 {
 id: '11',
 text: 'There were a total of 750 drinks in the cafeteria. There were 249 chocolate milks and 203 whole milks. The rest of the drinks were orange juice. Which estimate is closest to the number of orange juices in the cafeteria?',
 type: 'multiple-choice',
 options: ['400 because 200 + 200 = 400 and 800 - 400 = 400', '1,200 because 200 + 200 = 400 and 800 + 400 = 1,200 ', '300 because 250 + 200 = 450 and 750 - 450 = 300 ', '1,150 because 250 + 200 = 450 and 700 + 450 = 1,500'],
 correctAnswer: 2, 
 explanation: 'Round 249 to 250 and 203 to 200. Add: 250 + 200 = 450 drinks. Subtract from total: 750 - 450 = 300 orange juices.',
 },
 {
 id: '12',
 text: 'Mr. Gary\'s class has a goal of selling 500 pizzas in three months. The class sold 135 pizzas in the first month and 257 pizzas in the second month. Exactly how many more pizzas does the class need to sell to reach its goal?',
 type: 'multiple-choice',
 options: ['392', '382', '208', '108'],
 correctAnswer: 3, 
 explanation: 'Add pizzas sold: 135 + 257 = 392. Subtract from goal: 500 - 392 = 108 more pizzas needed.',
 },
 {
 id: '13',
 text: 'Which of these best represents this set of cherries? <br><img src="../math-grade3-practice-2023/images/7.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['40 - 5', '40 ÷ 5', '5 + 8', '5 × 40'],
 correctAnswer: 1, 
 explanation: 'If 40 cherries are divided into 5 equal groups, use division: 40 ÷ 5 = 8 cherries in each group.'
 },
 {
 id: '14',
 text: 'Which of these best represents this set of cherries? <img src="../math-grade3-practice-2023/images/8.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['6 + 2', '6 × 2', '3 + 2', '3 × 2'],
 correctAnswer: 3, 
 explanation: 'If there are 3 groups with 2 cherries in each group, use multiplication: 3 × 2 = 6 total cherries.'
 },
 {
 id: '15',
 text: 'Which number sentence is true?',
 type: 'multiple-choice',
 options: ['8 × 2 = 16 + 3', '9 - 1 = 8 ÷ 2', '5 × 6 = 25 + 5', '15 - 3 = 6 × 3'],
 correctAnswer: 2, 
 explanation: 'Check each equation: 5 × 6 = 30 and 25 + 5 = 30, so both sides equal 30. This makes the equation true.'
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