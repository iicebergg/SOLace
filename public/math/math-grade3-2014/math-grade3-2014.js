// Grade 3 Math Questions

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
 text: 'Two sets of circles are shown. Which of the following correctly compares the fraction of circles shaded in Set S to the fraction of circles shaded in Set T?',
 type: 'multiple-choice',
 image: {url: 'images/question_2.png', alt: 'Image failed to load. Please try again later.'},
 options: ['<math><mfrac><mn>3</mn><mn>11</mn></mfrac></math> > <math><mfrac><mn>7</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>11</mn></mfrac></math> < <math><mfrac><mn>7</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>11</mn></mfrac></math> > <math><mfrac><mn>4</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>11</mn></mfrac></math> < <math><mfrac><mn>4</mn><mn>11</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'When comparing fractions with the same denominator, compare the numerators. Since 3 < 4, we have 3/11 < 4/11.'
 },
 {
 id: '3',
 text: 'The place value model shown represents a number. What number is represented by this place value model?',
 type: 'multiple-choice',
 image: {url: 'images/question_3.png', alt: 'Image failed to load. Please try again later.'},
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
 text: 'Two packages of eggs are shown. Which statement correctly compares the fraction of the number of eggs in Package P to the fraction of the number of eggs in Package Q?',
 type: 'multiple-choice',
 image: {url: 'images/question_5.png', alt: 'Image failed to load. Please try again later.'},
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
 text: ' ',
 type: 'multiple-choice',
 image: {url: 'images/question_7.png', alt: 'Image failed to load. Please try again later.'},
 options: ['<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>11</mn><mn>12</mn></mfrac></math>', '5 <math><mfrac><mn>1</mn><mn>12</mn></mfrac></math>', '10 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'],
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
 text: 'In which group are exactly 3/8 of the shapes circles?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_10a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Count the total shapes and circles in each group to find where exactly 3/8 are circles.'
 },
 {
 id: '11',
 text: 'What number goes in the box to make this number sentence true? 63 ÷ __ = 9',
 type: 'multiple-choice',
 options: ['6', '7', '8', '9'],
 correctAnswer: 1, 
 explanation: '63 ÷ 7 = 9, so the answer is 7.'
 },
 {
 id: '12',
 text: ' ',
 type: 'multiple-choice',
 image: {url: 'images/question_12.png', alt: 'Image failed to load. Please try again later.'},
 options: ['<math><mfrac><mn>1</mn><mn>14</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>14</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>7</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'Count the total parts and the shaded parts to determine the fraction.'
 },
 {
 id: '13',
 text: 'Which number sentence best represents this set of flowers?',
 type: 'multiple-choice',
 image: {url: 'images/question_13.png', alt: 'Image failed to load. Please try again later.'},
 options: ['32 ÷ 4 = ?', '32 - 8 = ?', '8 × 4 = ?', '8 + 8 = ?'],
 correctAnswer: 0, 
 explanation: 'Look at the arrangement to determine the multiplication sentence that represents the groups.'
 },
 {
 id: '14',
 text: 'Kiku had a total of 25 plants at her store on Tuesday morning. During the day, she sold 16 of these plants and then received 136 new plants. At the end of the day, exactly how many plants did Kiku have?',
 type: 'multiple-choice',
 options: ['9', '61', '145', '197'],
 correctAnswer: 2, 
 explanation: 'Start with 25, subtract 16 sold, then add 136 new plants: 25 - 16 + 136 = 145.'
 },
 {
 id: '15',
 text: ' ',
 type: 'multiple-choice',
 image: {url: 'images/question_15.png', alt: 'Image failed to load. Please try again later.'},
 options: ['<math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>16</mn></mfrac></math>', '<math><mfrac><mn>10</mn><mn>16</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Count the total equal parts and the shaded parts to find the fraction.'
 },
 {
 id: '16',
 text: 'A store has 57 packages of gum with 5 pieces of gum in each package. What is the total number of pieces of gum in these packages? Write the number only; do not include units.',
 type: 'free-response',
 correctKeywords: ['285'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '17',
 text: 'What is 3/4 + 1/4?',
 type: 'multiple-choice',
 image: {url: 'images/question_17.png', alt: 'Image failed to load. Please try again later.'},
 options: ['1 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '1', '<math><mfrac><mn>4</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'When adding fractions with the same denominator, add the numerators: <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>4</mn></mfrac></math> = 1.'
 },
 {
 id: '18',
 text: '3,000 - 285 = ?',
 type: 'multiple-choice',
 options: ['2,285', '2,715', '2,815', '3,285'],
 correctAnswer: 1, 
 explanation: '3,000 - 285 = 2,715.'
 },
 {
 id: '19',
 text: 'Which of these is best represented by this number line?',
 type: 'multiple-choice',
 image: {url: 'images/question_19.png', alt: 'Image failed to load. Please try again later.'},
 options: ['24 + 4', '24 - 4', '6 × 4', '4 × 6'],
 correctAnswer: 3, 
 explanation: 'Look at the pattern on the number line to determine which operation it represents.'
 },
 {
 id: '20',
 text: 'Select each multiplication fact that equals 48.',
 type: 'multiple-select',
 options: ['4 × 8', '6 × 9', '12 × 4', '7 × 6', '8 × 6', '5 × 8'],
 correctAnswer: [2, 4],
 explanation: 'Check each multiplication: 4×12=48, 6×8=48, 12×4=48, 7×6=42, 8×6=48, 5×8=40.'
 },
 {
 id: '21',
 text: 'How many minutes are there from 10:30 A.M. to 1:00 P.M.?',
 type: 'multiple-choice',
 options: ['500 minutes', '300 minutes', '150 minutes', '120 minutes'],
 correctAnswer: 2, 
 explanation: 'From 10:30 A.M. to 1:00 P.M. is 2 hours and 30 minutes = 150 minutes.'
 },
 {
 id: '22',
 text: 'Harry drew a picture with the figures shown. Which best describes the figures in this picture?',
 type: 'multiple-choice',
 image: {url: 'images/question_22.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Cubes', 'Squares', 'Rectangles', 'Rectangular prisms'],
 correctAnswer: 2, 
 explanation: 'The figures are three-dimensional, so they are rectangular prisms, not flat shapes.'
 },
 {
 id: '23',
 text: 'Which is the most reasonable length of a bed?',
 type: 'multiple-choice',
 options: ['6 feet', '6 inches', '6 meters', '6 centimeters'],
 correctAnswer: 0, 
 explanation: '6 feet is the most reasonable length for a bed. 6 inches and 6 centimeters are too short, 6 meters is too long.'
 },
 {
 id: '24',
 text: 'Which is closest to the time shown on this clock?',
 type: 'multiple-choice',
 image: {url: 'images/question_24.png', alt: 'Image failed to load. Please try again later.'},
 options: ['4:45', '5:45', '9:05', '9:25'],
 correctAnswer: 0, 
 explanation: 'Read the hour and minute hands to determine the approximate time.'
 },
 {
 id: '25',
 text: 'What is the temperature in °F on this thermometer? Write the number only; do not include units.',
 type: 'free-response',
 image: {url: 'images/question_25.png', alt: 'Image failed to load. Please try again later.'},
 correctKeywords: ['84'],
 explanation: 'Read the temperature scale on the thermometer to find the exact temperature.'
 },
 {
 id: '26',
 text: 'Jack built a tower of blocks as shown. Which tower of blocks appears to be congruent to Jack\'s tower of blocks?',
 type: 'multiple-choice',
 image: {url: 'images/question_26.png', alt: 'Image failed to load. Please try again later.'},
 options: [
    {url: 'images/question_26a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_26b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_26c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_26d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Congruent figures have the same shape and size. Look for the tower that matches exactly.'
 },
 {
 id: '27',
 text: 'Franklin began selling lumber in the morning at the time shown on the clock. He finished selling lumber three hours later. At what time did Franklin finish selling lumber?',
 type: 'multiple-choice',
 image: {url: 'images/question_27.png', alt: 'Image failed to load. Please try again later.'},
 options: ['8:45 A.M.', '9:45 A.M.', '10:45 A.M.', '11:45 A.M.'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '28',
 text: 'What is the perimeter of the shaded figure on this grid?',
 type: 'multiple-choice',
 image: {url: 'images/question_28.png', alt: 'Image failed to load. Please try again later.'},
 options: ['18 units', '19 units', '22 units', '24 units'],
 correctAnswer: 3, 
 explanation: 'Count the units around the outside edge of the shaded figure to find the perimeter.'
 },
 {
 id: '29',
 text: 'Christina has the money shown. Exactly how much money does Christina have?',
 type: 'multiple-choice',
 image: {url: 'images/question_29.png', alt: 'Image failed to load. Please try again later.'},
 options: ['$3.50', '$3.60', '$3.85', '$4.05'],
 correctAnswer: 1, 
 explanation: 'Count the value of all the coins and bills shown.'
 },
 {
 id: '30',
 text: 'Alfred drew two rays and a line segment in his geometry notebook. Which of these could be the picture Alfred drew?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A ray has one endpoint and extends infinitely in one direction. A line segment has two endpoints.'
 },
 {
 id: '31',
 text: 'Each side of this figure is the same length. Which measurement is closest to the perimeter of this figure?',
 type: 'multiple-choice',
 image: {url: 'images/question_31.png', alt: 'Image failed to load. Please try again later.'},
 options: ['5 feet', '8 feet', '10 feet', '12 feet'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '32',
 text: 'This chart shows the type of toy and color choices for a reward in a teacher\'s basket. Which shows all the possible outcomes for a reward using one type of toy and one color?',
 type: 'multiple-choice',
 image: {url: 'images/question_32.png', alt: 'Image failed to load. Please try again later.'},
 options: [
    {url: 'images/question_32a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_32b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_32c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_32d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Count the total possible combinations by multiplying the number of toy types by the number of colors.'
 },
 {
 id: '33',
 text: 'This pattern repeats after the first four circles. Joanne removed two circles from this repeating pattern. Which ordered pair of circles did she remove?',
 type: 'multiple-choice',
 image: {url: 'images/question_33.png', alt: 'Image failed to load. Please try again later.'},
 options: [
    {url: 'images/question_33a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_33b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_33c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_33d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Identify the repeating pattern and determine which circles are missing from the sequence.'
 },
 {
 id: '34',
 text: 'Tia surveyed 14 students. She asked each student to choose one favorite food from four choices. Which chart could show the data from Tia\'s survey?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '35',
 text: 'This table shows the number of minutes it takes Kendal to run laps around a track. If the pattern in the table continues in the same way, which of the following should be used to determine how many minutes it takes Kendal to run 10 laps?',
 type: 'multiple-choice',
 image: {url: 'images/question_35.png', alt: 'Image failed to load. Please try again later.'},
 options: ['10 × 3', '10 + 6', '10 + 24', '10 × 6'],
 correctAnswer: 0, 
 explanation: 'Look at the pattern in the table to determine the relationship between laps and minutes.'
 },
 {
 id: '36',
 text: 'Stephanie recorded the number of inches of rainfall in her city during 4 weeks. The graph below shows the results. Which bar graph shows the same information?',
 type: 'multiple-choice',
 image: {url: 'images/question_36.png', alt: 'Image failed to load. Please try again later.'},
 options: [
    {url: 'images/question_36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36d.png', alt: 'BImage failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Compare the data values in the line graph to find the matching bar graph.'
 },
 {
 id: '37',
 text: 'Which number sentence shows the use of the identity property of multiplication?',
 type: 'multiple-choice',
 options: ['5 × 3 = 3 × 5', '5 + 0 = 5', '4 + 1 = 5', '1 × 5 = 5'],
 correctAnswer: 3, 
 explanation: 'The identity property of multiplication states that any number multiplied by 1 equals itself.'
 },
 {
 id: '38',
 text: 'Look at this pattern: 1, 3, 9, 27, 81. Which describes the rule used in this pattern?',
 type: 'multiple-choice',
 options: ['Divide by 9', 'Multiply by 3', 'Subtract 2', 'Add 2'],
 correctAnswer: 1, 
 explanation: 'Each number in the pattern is multiplied by 3 to get the next number: 1×3=3, 3×3=9, 9×3=27, 27×3=81.'
 },
 {
 id: '39',
 text: 'This line plot shows the number of points scored by students on a team. What was the total number of points scored by the students?',
 type: 'multiple-choice',
 image: {url: 'images/question_39.png', alt: 'Image failed to load. Please try again later.'},
 options: ['20', '19', '56', '8'],
 correctAnswer: 0, 
 explanation: 'Add up all the points shown on the line plot by multiplying each score by the number of students who achieved it.'
 },
 {
 id: '40',
 text: 'Debi will pick a card from the bag without looking. Which combination of 8 cards in the bag show that the likelihood of Debi picking a card with a star is equally likely as picking a card with a heart?',
 type: 'multiple-choice',
 image: {url: 'images/question_40.png', alt: 'Image failed to load. Please try again later.'},
 options: ['4 star cards, 4 heart cards', '2 star cards, 6 heart cards', '6 star cards, 2 heart cards', '0 star cards, 8 heart cards'],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 }
];

// Scaled Score Mapping for Grade 3 Mathematics (2014)
// Maps raw scores (number correct out of 40) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 134,
  2: 174,
  3: 199,
  4: 217,
  5: 232,
  6: 245,
  7: 256,
  8: 266,
  9: 275,
  10: 284,
  11: 292,
  12: 300,
  13: 307,
  14: 314,
  15: 321,
  16: 328,
  17: 335,
  18: 342,
  19: 348,
  20: 355,
  21: 362,
  22: 368,
  23: 375,
  24: 382,
  25: 389,
  26: 396,
  27: 404,
  28: 412,
  29: 420,
  30: 428,
  31: 437,
  32: 447,
  33: 458,
  34: 470,
  35: 484,
  36: 500,
  37: 519,
  38: 546,
  39: 589,
  40: 600
};

// Function to get scaled score based on raw score (number correct)
function getScaledScore(rawScore) {
  const clampedScore = Math.max(0, Math.min(40, rawScore));
  return scaledScoreMapping[clampedScore] || 0;
}

// Function to get performance level based on scaled score
function getPerformanceLevel(scaledScore) {
  if (scaledScore == 600) return 'Perfect Score';
  if (scaledScore >= 500) return 'Pass Advanced';
  if (scaledScore >= 400) return 'Pass Proficient';
  if (scaledScore >= 0) return 'Not Passing';
  return 'Minimal';
}

// Grade 3 Math Scaled Score Enhancement System
// This integrates with the existing results system more robustly
(function() {
  'use strict';
  
  console.log('Grade 3 Math scaled score system initializing...');
  
  // Flag to track if we've enhanced the results
  let resultsEnhanced = false;
  
  // Function to add scaled score styles (run once)
  function addScaledScoreStyles() {
    if (document.getElementById('scaled-score-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'scaled-score-styles';
    style.textContent = `
      .scaled-score-info {
        margin-top: 1.5rem;
        padding: 1.5rem;
        background-color: var(--secondary-bg, #f0f8ff);
        border: 2px solid var(--accent-color, #4a6fa5);
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      .scaled-score-container {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 1rem;
      }
      
      .scaled-score-circle {
        background: linear-gradient(135deg, var(--accent-color, #4a6fa5) 0%, #2c4f7a 100%);
        color: white;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        font-weight: bold;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        flex-shrink: 0;
      }
      
      .scaled-score-details {
        flex: 1;
      }
      
      .scaled-score-details p {
        margin: 0.5rem 0;
        color: var(--text-color, #333);
      }
      
      .performance-level {
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.9rem;
      }
      
      .performance-level.perfect-score {
        background-color: #e7c3ff;
        color: #6f2c91;
      }
      
      .performance-level.pass-advanced {
        background-color: var(--success-color, #d4edda);
        color: var(--success-color, #155724);
      }
      
      .performance-level.pass-proficient {
        background-color: #d1ecf1;
        color: #0c5460;
      }
      
      .performance-level.not-passing {
        background-color: #f8d7da;
        color: #721c24;
      }
      
      .performance-level.minimal {
        background-color: #f8d7da;
        color: #721c24;
      }
      
      .score-explanation {
        margin-top: 1rem;
        padding: 1rem;
        background-color: var(--input-bg, white);
        border-left: 4px solid var(--accent-color, #4a6fa5);
        border-radius: 0 4px 4px 0;
      }
      
      .score-explanation p {
        margin: 0;
        font-size: 0.9rem;
        color: var(--text-color, #666);
        font-style: italic;
      }
      
      @media (max-width: 600px) {
        .scaled-score-container {
          flex-direction: column;
          text-align: center;
        }
        
        .scaled-score-circle {
          width: 70px;
          height: 70px;
          font-size: 1.2rem;
        }
      }
    `;
    
    document.head.appendChild(style);
    console.log('Scaled score styles added');
  }
  
  // Function to add CSS styles for historical scaled score display
  function addHistoricalScaledScoreStyles() {
    if (document.getElementById('historical-scaled-score-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'historical-scaled-score-styles';
    style.textContent = `
      .historical-scaled-score {
        font-size: 0.85rem;
        color: var(--text-color, #666);
        margin-left: 0.5rem;
      }
      
      .mini-performance-level {
        padding: 0.15rem 0.3rem;
        border-radius: 3px;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.75rem;
        margin-left: 0.25rem;
      }
      
      .mini-performance-level.perfect-score {
        background-color: #e7c3ff;
        color: #6f2c91;
      }
      
      .mini-performance-level.pass-advanced {
        background-color: var(--success-color, #d4edda);
        color: var(--success-color, #155724);
      }
      
      .mini-performance-level.pass-proficient {
        background-color: #d1ecf1;
        color: #0c5460;
      }
      
      .mini-performance-level.not-passing {
        background-color: #f8d7da;
        color: #721c24;
      }
      
      .mini-performance-level.minimal {
        background-color: #f8d7da;
        color: #721c24;
      }
    `;
    
    document.head.appendChild(style);
    console.log('Historical scaled score styles added');
  }
  
  // Function to enhance ALL historical results with scaled scores
  function enhanceAllHistoricalResults() {
    console.log('Enhancing all historical results with scaled scores...');
    
    // Get all results from localStorage
    const savedResults = JSON.parse(localStorage.getItem('solace_test_results') || '[]');
    let updated = false;
    
    // Process each result to add scaled scores if missing
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 3 Mathematics (2014)';
        updated = true;
        console.log(`Enhanced historical result ${index + 1}: ${result.rawScore}/40 → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    // Save updated results back to localStorage
    if (updated) {
      localStorage.setItem('solace_test_results', JSON.stringify(savedResults));
      console.log('Updated historical results saved to localStorage');
    }
    
    // Also update the results manager's internal storage if available
    if (window.resultsManager && window.resultsManager.results) {
      window.resultsManager.results.forEach((result, index) => {
        if (!result.scaledScore && result.correctAnswers !== undefined) {
          result.scaledScore = getScaledScore(result.correctAnswers);
          result.performanceLevel = getPerformanceLevel(result.scaledScore);
          result.rawScore = result.correctAnswers;
          result.testType = 'Grade 3 Mathematics (2014)';
          console.log(`Enhanced results manager result ${index + 1}: ${result.rawScore}/40 → ${result.scaledScore}`);
        }
      });
    }
  }

  // Function to enhance results display with scaled score information
  function enhanceResultsDisplay() {
    console.log('Attempting to enhance results display...');
    
    // First, enhance all historical results
    enhanceAllHistoricalResults();
    
    const resultsSummary = document.getElementById('results-summary');
    if (!resultsSummary) {
      console.log('Results summary not found, skipping enhancement');
      return false;
    }
    
    // Check if we've already enhanced these results
    if (resultsSummary.querySelector('.scaled-score-info')) {
      console.log('Latest result already enhanced, but checking history...');
      enhanceResultsHistory();
      return true;
    }
    
    // Get the latest result
    const latestResult = window.resultsManager ? window.resultsManager.getLatestResult() : null;
    if (!latestResult) {
      console.log('No latest result found, checking localStorage');
      
      // Fallback: try to get from localStorage and calculate scaled score
      const savedResults = JSON.parse(localStorage.getItem('solace_test_results') || '[]');
      if (savedResults.length === 0) {
        console.log('No saved results found');
        return false;
      }
      
      const lastResult = savedResults[0];
      
      // Calculate scaled score if not present
      if (!lastResult.scaledScore && lastResult.correctAnswers !== undefined) {
        lastResult.scaledScore = getScaledScore(lastResult.correctAnswers);
        lastResult.performanceLevel = getPerformanceLevel(lastResult.scaledScore);
        lastResult.rawScore = lastResult.correctAnswers;
        console.log(`Calculated scaled score: ${lastResult.scaledScore} for raw score ${lastResult.rawScore}`);
      }
      
      if (!lastResult.scaledScore) {
        console.log('Could not determine scaled score');
        return false;
      }
      
      // Use the calculated result
      addScaledScoreToDisplay(resultsSummary, lastResult);
      enhanceResultsHistory();
      return true;
    }
    
    // Calculate scaled score if not present in latest result
    if (!latestResult.scaledScore && latestResult.correctAnswers !== undefined) {
      latestResult.scaledScore = getScaledScore(latestResult.correctAnswers);
      latestResult.performanceLevel = getPerformanceLevel(latestResult.scaledScore);
      latestResult.rawScore = latestResult.correctAnswers;
      console.log(`Calculated scaled score: ${latestResult.scaledScore} for raw score ${latestResult.rawScore}`);
    }
    
    if (!latestResult.scaledScore) {
      console.log('Latest result missing scaled score data');
      return false;
    }
    
    addScaledScoreToDisplay(resultsSummary, latestResult);
    enhanceResultsHistory();
    return true;
  }
  
  // Function to add scaled score display to the results summary
  function addScaledScoreToDisplay(resultsSummary, result) {
    console.log('Adding scaled score display to results');
    
    const summaryText = resultsSummary.querySelector('.result-summary-text');
    if (!summaryText) {
      console.log('Result summary text not found');
      return;
    }
    
    // Create scaled score info element
    const scaledScoreInfo = document.createElement('div');
    scaledScoreInfo.className = 'scaled-score-info';
    scaledScoreInfo.innerHTML = `
      <div class="scaled-score-container">
        <div class="scaled-score-circle">${result.scaledScore}</div>
        <div class="scaled-score-details">
          <p><strong>Scaled Score:</strong> ${result.scaledScore}</p>
          <p><strong>Performance Level:</strong> <span class="performance-level ${result.performanceLevel.toLowerCase().replace(/\s+/g, '-')}">${result.performanceLevel}</span></p>
          <p><strong>Raw Score:</strong> ${result.rawScore || result.correctAnswers}/${result.totalQuestions}</p>
        </div>
      </div>
      <div class="score-explanation">
        <p><em>The scaled score is a converted score out of 600 that accounts for test difficulty across the state.</em></p>
      </div>
    `;
    
    // Add the scaled score info to the summary
    summaryText.appendChild(scaledScoreInfo);
    
    // Add styles
    addScaledScoreStyles();
    
    console.log('Scaled score display added successfully');
  }
  
  // Function to enhance the results history with scaled scores
  function enhanceResultsHistory() {
    console.log('Enhancing results history with scaled scores...');
    
    const resultsDetails = document.getElementById('results-details');
    if (!resultsDetails) {
      console.log('Results details section not found');
      return;
    }
    
    // Find all result items in the history
    const resultItems = resultsDetails.querySelectorAll('.result-item');
    if (resultItems.length === 0) {
      console.log('No result items found in history');
      return;
    }
    
    // Get all saved results to match with display items
    const savedResults = JSON.parse(localStorage.getItem('solace_test_results') || '[]');
    
    resultItems.forEach((resultItem, index) => {
      // Skip if already enhanced
      if (resultItem.querySelector('.historical-scaled-score')) {
        return;
      }
      
      // Get the corresponding saved result
      const savedResult = savedResults[index];
      if (!savedResult || !savedResult.scaledScore) {
        console.log(`No scaled score data for result item ${index}`);
        return;
      }
      
      // Find the result details section
      const resultDetails = resultItem.querySelector('.result-details');
      if (!resultDetails) {
        console.log(`No result details found for item ${index}`);
        return;
      }
      
      // Create scaled score element for history item
      const historicalScaledScore = document.createElement('span');
      historicalScaledScore.className = 'historical-scaled-score';
      historicalScaledScore.innerHTML = ` • Scaled: ${savedResult.scaledScore} (<span class="mini-performance-level ${savedResult.performanceLevel.toLowerCase().replace(/\s+/g, '-')}">${savedResult.performanceLevel}</span>)`;
      
      // Add to the result details
      resultDetails.appendChild(historicalScaledScore);
      
      console.log(`Enhanced historical result ${index + 1} with scaled score ${savedResult.scaledScore}`);
    });
    
    // Add mini styles for historical display
    addHistoricalScaledScoreStyles();
  }
  
  // Function to periodically check for results and enhance them
  function checkAndEnhanceResults() {
    // Only check if we're on the results page
    const resultsPage = document.getElementById('results');
    if (!resultsPage || !resultsPage.classList.contains('active')) {
      return;
    }
    
    if (enhanceResultsDisplay()) {
      resultsEnhanced = true;
      
      // Also enhance historical results after a short delay
      setTimeout(() => {
        enhanceResultsHistory();
      }, 100);
      
      return true;
    }
    
    return false;
  }
  
  // Override the finishTest function to include scaled score data
  function enhanceFinishTest() {
    if (typeof window.finishTest !== 'function') return;
    
    const originalFinishTest = window.finishTest;
    window.finishTest = function() {
      console.log('Enhanced finishTest called');
      
      // Get the current test results
      const correctAnswers = window.currentTestAnswers ? 
        window.currentTestAnswers.filter(answer => answer.correct).length : 0;
      const totalQuestions = window.questions ? window.questions.length : 40;
      
      // Calculate scaled score
      const scaledScore = getScaledScore(correctAnswers);
      const performanceLevel = getPerformanceLevel(scaledScore);
      
      console.log(`Test finished: ${correctAnswers}/${totalQuestions} correct, scaled score: ${scaledScore} (${performanceLevel})`);
      
      // Store scaled score data in a temporary variable for later use
      window.tempScaledScoreData = {
        scaledScore,
        performanceLevel,
        rawScore: correctAnswers
      };
      
      // Call the original function
      const result = originalFinishTest.apply(this, arguments);
      
      // Set up a timer to enhance results after they're displayed
      setTimeout(() => {
        checkAndEnhanceResults();
      }, 100);
      
      return result;
    };
  }
  
  // Initialize the enhancement system
  function initialize() {
    console.log('Initializing Grade 3 Math scaled score system');
    
    // Add styles immediately
    addScaledScoreStyles();
    
    // Try to enhance finishTest function
    enhanceFinishTest();
    
    // Set up periodic checking for results
    const checkInterval = setInterval(() => {
      if (checkAndEnhanceResults()) {
        clearInterval(checkInterval);
      }
    }, 500);
    
    // Clean up the interval after 30 seconds
    setTimeout(() => {
      clearInterval(checkInterval);
    }, 30000);
    
    // Listen for navigation to results page
    document.addEventListener('click', function(e) {
      if (e.target && (e.target.id === 'results-btn' || e.target.id === 'view-results')) {
        setTimeout(() => {
          checkAndEnhanceResults();
          // Additional check for historical results
          setTimeout(() => {
            enhanceResultsHistory();
          }, 300);
        }, 200);
      }
    });
    
    console.log('Grade 3 Math scaled score system initialized');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();