window.TEST_IDENTIFIER = 'math_grade3_001';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which number sentence will 9 + 6 = 15 help solve?',
 type: 'multiple-choice',
 options: ['15 - 9 = __', '15 × 9 = __', '15 ÷ 9 = __', '15 + 9 = __'],
 correctAnswer: 0,
 explanation: 'Addition and subtraction are inverse operations, so 9 + 6 = 15 helps solve 15 - 9 = 6.'
 },
 {
 id: '2',
 text: 'Two sets of circles are shown. <br><img src="../math-grade3-2014/images/question_2.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which of the following correctly compares the fraction of circles shaded in Set S to the fraction of circles shaded in Set T?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>11</mn></mfrac></math> > <math><mfrac><mn>7</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>11</mn></mfrac></math> < <math><mfrac><mn>7</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>11</mn></mfrac></math> > <math><mfrac><mn>4</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>11</mn></mfrac></math> < <math><mfrac><mn>4</mn><mn>11</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'When comparing fractions with the same denominator, compare the numerators. Since 3 < 4, we have 3/11 < 4/11.'
 },
 {
 id: '3',
 text: 'The place value model shown represents a number. <br><img src="../math-grade3-2014/images/question_3.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What number is represented by this place value model?',
 type: 'multiple-choice',
 options: ['354', '454', '3,154', '4,054'],
 correctAnswer: 2, 
 explanation: 'Count the place value blocks: thousands, hundreds, tens, and ones to determine the number.'
 },
 {
 id: '4',
 text: 'Round 5,647 to the places shown.',
 type: 'drag-drop',
 options: ['5,000', '5,600', '5,650', '5,640', '6,000', '5,700'],
 dropZones: ['Rounded to the Nearest Thousand', 'Rounded to the Nearest Hundred', 'Rounded to the Nearest Ten'],
 correctAnswer: [4, 1, 2],
 explanation: 'To round 5,647: to nearest thousand (6,000), nearest hundred (5,600), nearest ten (5,650).'
 },
 {
 id: '5',
 text: 'Two packages of eggs are shown. <br><img src="../math-grade3-2014/images/question_5.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which statement correctly compares the fraction of the number of eggs in Package P to the fraction of the number of eggs in Package Q?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>4</mn><mn>12</mn></mfrac></math> < <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>12</mn></mfrac></math> > <math><mfrac><mn>9</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>12</mn></mfrac></math> > <math><mfrac><mn>9</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>12</mn></mfrac></math> < <math><mfrac><mn>9</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'Compare the fractions by looking at the numerators when denominators are the same.'
 },
 {
 id: '6',
 text: 'Which shows the number 78,025 written in word form?',
 type: 'multiple-choice',
 options: ['Seven hundred eight thousand, two hundred fifty', 'Seven hundred eight thousand, twenty-five', 'Seventy-eight thousand, two hundred fifty', 'Seventy-eight thousand, twenty-five'],
 correctAnswer: 3, 
 explanation: '78,025 is read as seventy-eight thousand, twenty-five.'
 },
 {
 id: '7',
 text: 'This model is shaded to represent one whole. <br><img src="../math-grade3-2014/images/question_7a.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Look at the following model. <img src="../math-grade3-2014/images/question_7b.png" class="question-image" alt="Image failed to load. Please try again later."></img> What number do the shaded parts in this model represent?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>11</mn><mn>12</mn></mfrac></math>', '5 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '10 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'Count the whole units and fractional parts shown in the model.'
 },
 {
 id: '8',
 text: 'Which number sentence can be completed using the basic fact sentence 3 × 2 = 6?',
 type: 'multiple-choice',
 options: ['12 ÷ 6 = __', '6 ÷ 3 = __', '6 × 3 = __', '3 + 2 = __'],
 correctAnswer: 1, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '9',
 text: 'Select the symbol that will make each number sentence true.',
 type: 'drag-drop',
 options: ['>', '=', '<'],
 dropZones: ['78 __ 78', '2,288 __ 2,199'],
 correctAnswer: [1, 0],
 explanation: '78 equals 78, so use =. 2,288 is greater than 2,199, so use >.'
 },
 {
 id: '10',
 text: 'In which group are exactly <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> of the shapes circles?',
 type: 'multiple-choice',
 options: [
    {url: '../math-grade3-2014/images/question_10a.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_10b.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_10c.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_10d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Count the total shapes and circles in each group to find where exactly <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> are circles.'
 },
 /* Practice Items */
 {
 id: '11',
 text: 'Which number sentence will make this statement true? <center>? > 8,243</center>',
 type: 'multiple-choice',
 options: ['8,223', '8,285', '8,198', '8,234'],
 correctAnswer: 1,
 explanation: 'To be greater than 8,243, the number must be bigger. Compare: 8,285 > 8,243 because 285 is greater than 243 in the last three digits.'
 },
 {
 id: '12',
 text: 'This set of circles is shaded to represent one whole. <br><img src="../math-grade3-practice-2023/images/2.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which model is shaded to represent this expression? <center><math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math></center>',
 type: 'multiple-choice',
 options: [
    {url: '../math-grade3-practice-2023/images/2a.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-practice-2023/images/2b.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-practice-2023/images/2c.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-practice-2023/images/2d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Adding five quarters: 1/4 + 1/4 + 1/4 + 1/4 + 1/4 = 5/4, which is one whole circle plus one more quarter.'
 },
 {
 id: '13',
 text: 'This model is shaded to represent one whole. <br><img src="../math-grade3-practice-2023/images/3_1.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Model R is shaded to represent a fraction. <br><img src="../math-grade3-practice-2023/images/3_2.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which of these is shaded to represent a fraction that is less than the fraction represented by Model R?',
 type: 'multiple-choice',
 options: [
    {url: '../math-grade3-practice-2023/images/3a.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-practice-2023/images/3b.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-practice-2023/images/3c.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-practice-2023/images/3d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Compare the shaded parts. A fraction is smaller when fewer parts are shaded. Look for the model with less shaded area than Model R.'
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