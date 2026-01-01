window.TEST_IDENTIFIER = 'math_grade3_004';

const sampleQuestions = [
 {
 id: '1',
 text: 'This chart shows the type of toy and color choices for a reward in a teacher\'s basket. <br><img src="../math-grade3-2014/images/question_32.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which shows all the possible outcomes for a reward using one type of toy and one color?',
 type: 'multiple-choice',
 options: [
    {url: '../math-grade3-2014/images/question_32a.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_32b.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_32c.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_32d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Count the total possible combinations by multiplying the number of toy types by the number of colors.'
 },
 {
 id: '2',
 text: 'This pattern repeats after the first four circles. Joanne removed two circles from this repeating pattern. <br><img src="../math-grade3-2014/images/question_33.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which ordered pair of circles did she remove?',
 type: 'multiple-choice',
 options: [
    {url: '../math-grade3-2014/images/question_33a.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_33b.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_33c.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_33d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Identify the repeating pattern and determine which circles are missing from the sequence.'
 },
 {
 id: '3',
 text: 'Tia surveyed 14 students. She asked each student to choose one favorite food from four choices. Which chart could show the data from Tia\'s survey?',
 type: 'multiple-choice',
 options: [
    {url: '../math-grade3-2014/images/question_34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '4',
 text: 'This table shows the number of minutes it takes Kendal to run laps around a track. <br><img src="../math-grade3-2014/images/question_35.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> If the pattern in the table continues in the same way, which of the following should be used to determine how many minutes it takes Kendal to run 10 laps?',
 type: 'multiple-choice',
 options: ['10 × 3', '10 + 6', '10 + 24', '10 × 6'],
 correctAnswer: 0, 
 explanation: 'Look at the pattern in the table to determine the relationship between laps and minutes.'
 },
 {
 id: '5',
 text: 'Stephanie recorded the number of inches of rainfall in her city during 4 weeks. The graph below shows the results. <br><img src="../math-grade3-2014/images/question_36.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which bar graph shows the same information?',
 type: 'multiple-choice',
 options: [
    {url: '../math-grade3-2014/images/question_36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-2014/images/question_36d.png', alt: 'BImage failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Compare the data values in the line graph to find the matching bar graph.'
 },
 {
 id: '6',
 text: 'Which number sentence shows the use of the identity property of multiplication?',
 type: 'multiple-choice',
 options: ['5 × 3 = 3 × 5', '5 + 0 = 5', '4 + 1 = 5', '1 × 5 = 5'],
 correctAnswer: 3, 
 explanation: 'The identity property of multiplication states that any number multiplied by 1 equals itself.'
 },
 {
 id: '7',
 text: 'Look at this pattern. <br><center>1, 3, 9, 27, 81.</center><br> Which describes the rule used in this pattern?',
 type: 'multiple-choice',
 options: ['Divide by 9', 'Multiply by 3', 'Subtract 2', 'Add 2'],
 correctAnswer: 1, 
 explanation: 'Each number in the pattern is multiplied by 3 to get the next number: 1×3=3, 3×3=9, 9×3=27, 27×3=81.'
 },
 {
 id: '8',
 text: 'This line plot shows the number of points scored by students on a team. <br><img src="../math-grade3-2014/images/question_39.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What was the total number of points scored by the students?',
 type: 'multiple-choice',
 options: ['20', '19', '56', '8'],
 correctAnswer: 0, 
 explanation: 'Add up all the points shown on the line plot by multiplying each score by the number of students who achieved it.'
 },
 {
 id: '9',
 text: 'Debi will pick a card from the bag without looking. Which combination of 8 cards in the bag show that the likelihood of Debi picking a card with a star is equally likely as picking a card with a heart?',
 type: 'multiple-choice',
 options: ['4 star cards, 4 heart cards', '2 star cards, 6 heart cards', '6 star cards, 2 heart cards', '0 star cards, 8 heart cards'],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 },
/* Practice Items */
 {
 id: '10',
 text: ' Mrs. Morgan wants to know what game the students would like to play during indoor recess. What is the best way for Mrs. Morgan to collect the data?',
 type: 'multiple-choice',
 options: ['Count the number of students who like to play football', 'Count the number of students that will be at indoor recess', 'Create a tally chart to show how long students play during recess', 'Create a tally chart to show what game the students would like to play during indoor recess'],
 correctAnswer: 3, 
 explanation: 'To find out what game students want to play, make a tally chart that shows each game choice and how many students picked each one.'
 },
 {
 id: '11',
 text: 'Four students have a total of 200 coins. This pictograph represents the number of coins three of the students have. The number of coins Diana has is missing. <br><img src="../math-grade3-practice-2023/images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which set represents the number of coins Diana has?',
 type: 'multiple-choice',
 options: [
    {url: '../math-grade3-practice-2023/images/19a.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-practice-2023/images/19b.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-practice-2023/images/19c.png', alt: 'Image failed to load. Please try again later.'},
    {url: '../math-grade3-practice-2023/images/19d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Add up the coins for the three students shown in the pictograph. Subtract that total from 200 to find how many coins Diana has.'
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