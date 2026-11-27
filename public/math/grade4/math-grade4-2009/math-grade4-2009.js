window.TEST_IDENTIFIER = 'math_grade4_2009';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which of the following <i>best</i> describes the difference 43,441 − 35,184?',
 type: 'multiple-choice',
 options: ['Closer to 10,000 than 8,000', 'Closer to 10,000 than 9,000', 'Closer to 9,000 than 8,000', 'Closer to 8,000 than 7,000'],
 correctAnswer: 3, 
 explanation: '43,441 − 35,184 = 8,257, which is closer to 8,000 than to 7,000.'
 },
 {
 id: '2',
 text: 'What is the sum of 1,292 and 1,379?',
 type: 'multiple-choice',
 options: ['2,661', '2,671', '2,681', '2,761'],
 correctAnswer: 1, 
 explanation: '1,292 + 1,379 = 2,671.'
 },
 {
 id: '3',
 text: 'What is the sum of the fractions modeled? <br><img src="images/3.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>8</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>9</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>, so <math><mfrac><mn>7</mn><mn>8</mn></mfrac></math> + <math><mfrac><mn>2</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>9</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '4',
 text: 'Which is closest to 423 ÷ 6?',
 type: 'multiple-choice',
 options: ['30', '50', '70', '90'],
 correctAnswer: 2, 
 explanation: '423 is close to 420, and 420 ÷ 6 = 70.'
 },
 {
 id: '5',
 text: '1.906 − 0.24 = ___',
 type: 'multiple-choice',
 options: ['1.922', '1.882', '1.746', '1.666'],
 correctAnswer: 3, 
 explanation: 'Write 0.24 as 0.240, then subtract: 1.906 − 0.240 = 1.666.'
 },
 {
 id: '6',
 text: 'Ada took a three-day driving trip. She drove 425 miles the first day, 378 miles the second day, and 539 miles the third day. About how many miles did Ada drive in the three days?',
 type: 'multiple-choice',
 options: ['700 miles', '800 miles', '1,300 miles', '1,500 miles'],
 correctAnswer: 2, 
 explanation: 'Round to the nearest hundred: 400 + 400 + 500 = 1,300 miles. (The exact total is 1,342 miles.)'
 },
 {
 id: '7',
 text: 'What is the difference between 112,841 and 92,408?',
 type: 'multiple-choice',
 options: ['20,433', '20,443', '20,447', '20,449'],
 correctAnswer: 0, 
 explanation: '112,841 − 92,408 = 20,433.'
 },
 {
 id: '8',
 text: '552 ÷ 6 = ___',
 type: 'multiple-choice',
 options: ['82', '92', '812', '912'],
 correctAnswer: 1, 
 explanation: '6 × 92 = 552, so 552 ÷ 6 = 92.'
 },
 {
 id: '9',
 text: 'What is the difference between the fractions represented by these models? <br><img src="images/9.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>9</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>11</mn><mn>18</mn></mfrac></math>', '<math><mfrac><mn>12</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>12</mn></mfrac></math>, so <math><mfrac><mn>10</mn><mn>12</mn></mfrac></math> − <math><mfrac><mn>2</mn><mn>12</mn></mfrac></math> = <math><mfrac><mn>8</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '10',
 text: 'Lorenzo and Shawn had a paper airplane contest. Lorenzo’s airplane flew 20.25 feet. Shawn’s airplane flew 16.50 feet. How many feet farther did Lorenzo’s airplane fly than Shawn’s airplane?',
 type: 'multiple-choice',
 options: ['3.75', '4.25', '4.35', '4.75'],
 correctAnswer: 0, 
 explanation: '20.25 − 16.50 = 3.75 feet.'
 },
 {
 id: '11',
 text: '$43.69 − $5.77 = ___',
 type: 'multiple-choice',
 options: ['$37.92', '$38.92', '$42.12', '$49.46'],
 correctAnswer: 0, 
 explanation: '$43.69 − $5.77 = $37.92.'
 },
 {
 id: '12',
 text: '54 × 27 = ___',
 type: 'multiple-choice',
 options: ['486', '1,028', '1,458', '4,608'],
 correctAnswer: 2, 
 explanation: '54 × 27 = (54 × 20) + (54 × 7) = 1,080 + 378 = 1,458.'
 },
 {
 id: '13',
 text: 'Which digit of this number is in the ten thousands place? <br>473,625',
 type: 'multiple-choice',
 options: ['2', '4', '6', '7'],
 correctAnswer: 3, 
 explanation: 'In 473,625, the 4 is in the hundred thousands place and the 7 is in the ten thousands place.'
 },
 {
 id: '14',
 text: 'Which fraction card shows a true statement?',
 type: 'multiple-choice',
 options: [
    {url: 'images/14a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The models show that <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> covers more of the whole than <math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>, so <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> > <math><mfrac><mn>2</mn><mn>4</mn></mfrac></math> is true.'
 },
 {
 id: '15',
 text: 'These number lines represent a 1-mile race. Monty ran <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> mile, and Katie ran <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> mile. If point <i>M</i> represents Monty and point <i>K</i> represents Katie, which number line <i>best</i> represents how far each ran?',
 type: 'multiple-choice',
 options: [
    {url: 'images/15a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Each number line is divided into eighths. M should be 1 mark from 0 and K should be 3 marks from 0.'
 },
 {
 id: '16',
 text: 'Dominic drew a line that was 2.35 meters long. What is this number rounded to the nearest whole number?',
 type: 'multiple-choice',
 options: ['2', '2.4', '3', '3.4'],
 correctAnswer: 0, 
 explanation: 'The tenths digit is 3, so round down: 2.35 rounds to 2.'
 },
 {
 id: '17',
 text: 'Which is correct?',
 type: 'multiple-choice',
 options: ['2,303,109 < 2,299,999', '2,303,109 < 2,303,099', '2,303,109 < 2,302,999', '2,303,109 < 2,303,110'],
 correctAnswer: 3, 
 explanation: '2,303,110 is one more than 2,303,109, so 2,303,109 < 2,303,110.'
 },
 {
 id: '18',
 text: 'A fractional part of this group of leaves is shaded. <br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following groups is shaded to represent a fraction with the same value?',
 type: 'multiple-choice',
 options: [
    {url: 'images/18a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: '5 of the 10 leaves are shaded, which is <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>. The group with 4 of 8 shaded also shows <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '19',
 text: 'When rounded to the nearest ten thousand, which number would be 9,420,000?',
 type: 'multiple-choice',
 options: ['9,412,836', '9,415,372', '9,426,105', '9,428,153'],
 correctAnswer: 1, 
 explanation: '9,415,372 rounds up to 9,420,000 because the thousands digit is 5.'
 },
 {
 id: '20',
 text: 'Which number is “four hundred five thousandths”?',
 type: 'multiple-choice',
 options: ['0.045', '0.45', '0.405', '0.4005'],
 correctAnswer: 2, 
 explanation: 'Four hundred five thousandths is <math><mfrac><mn>405</mn><mn>1000</mn></mfrac></math> = 0.405.'
 },
 {
 id: '21',
 text: 'This diagram represents the paths taken by four students in a race. <br><img src="images/21.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which student took the shortest path from the starting line to the finish line?',
 type: 'multiple-choice',
 options: ['Tyler', 'Kevin', 'Barry', 'Sam'],
 correctAnswer: 3, 
 explanation: 'The shortest path between two points is a straight line. Sam’s path is straight.'
 },
 {
 id: '22',
 text: 'During science class, Joseph found that the mass of a rock was 3 kilograms. What was the mass of Joseph’s rock in grams?',
 type: 'multiple-choice',
 options: ['30', '300', '3,000', '30,000'],
 correctAnswer: 2, 
 explanation: 'There are 1,000 grams in 1 kilogram, so 3 kilograms = 3,000 grams.'
 },
 {
 id: '23',
 text: 'Which of the following cards shows a true statement?',
 type: 'multiple-choice',
 options: ['2 gallons = 8 quarts', '2 quarts = 8 pints', '4 cups = 1 pint', '4 pints = 1 gallon'],
 correctAnswer: 0, 
 explanation: 'There are 4 quarts in 1 gallon, so 2 gallons = 8 quarts.'
 },
 {
 id: '24',
 text: 'This drawing shows a rectangle and a rectangular prism. <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is true about these two figures?',
 type: 'multiple-choice',
 options: ['They both have 4 faces.', 'They both have 12 edges.', 'They both have right angles.', 'They both are geometric solids.'],
 correctAnswer: 2, 
 explanation: 'All the corners of a rectangle and of a rectangular prism are right angles.'
 },
 {
 id: '25',
 text: 'Which of the following <i>best</i> describes a line?',
 type: 'multiple-choice',
 options: ['A collection of points that extends infinitely in two opposite directions', 'All the points between two endpoints', 'All the points extending infinitely in one direction from one endpoint', 'A single, exact location in space without length or width'],
 correctAnswer: 0, 
 explanation: 'A line extends without end in two opposite directions. The other choices describe a line segment, a ray, and a point.'
 },
 {
 id: '26',
 text: 'Which pair of geometric figures is <i>not</i> congruent to each other?',
 type: 'multiple-choice',
 options: [
    {url: 'images/27a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Congruent figures have the same size and shape. The rectangles have the same shape but different sizes, so they are not congruent.'
 },
 {
 id: '27',
 text: 'Which is the <i>best</i> estimate of the mass of a pencil?',
 type: 'multiple-choice',
 options: ['10 grams', '100 ounces', '10 pounds', '100 kilograms'],
 correctAnswer: 0, 
 explanation: 'A pencil is very light, about 10 grams.'
 },
 {
 id: '28',
 text: 'Five points are shown on the grid below. <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which points lie on the same line?',
 type: 'multiple-choice',
 options: ['Points <i>B</i>, <i>C</i>, and <i>D</i>', 'Points <i>C</i>, <i>D</i>, and <i>E</i>', 'Points <i>E</i>, <i>F</i>, and <i>C</i>', 'Points <i>D</i>, <i>E</i>, and <i>F</i>'],
 correctAnswer: 3, 
 explanation: 'Points D, E, and F are on the same horizontal grid line.'
 },
 {
 id: '29',
 text: 'Vince’s younger brother is 36 inches tall. Which of the following is equivalent to 36 inches?',
 type: 'multiple-choice',
 options: ['1 yard', '1 foot', '12 feet', '12 inches'],
 correctAnswer: 0, 
 explanation: 'There are 36 inches in 1 yard.'
 },
 {
 id: '30',
 text: 'Which statement about a ray is true?',
 type: 'multiple-choice',
 options: ['A ray has no endpoints.', 'A ray has one endpoint.', 'A ray has two endpoints.', 'A ray continues in two directions.'],
 correctAnswer: 1, 
 explanation: 'A ray starts at one endpoint and continues without end in one direction.'
 },
 {
 id: '31',
 text: 'The locations of four groups of animals at the city zoo are shown on the coordinate grid. <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which group of zoo animals appears to be located at (6, 1) on the coordinate grid?',
 type: 'multiple-choice',
 options: ['Giraffes', 'Goats', 'Elephants', 'Monkeys'],
 correctAnswer: 3, 
 explanation: 'Move 6 units right and 1 unit up from the origin. The monkeys are at that point.'
 },
 {
 id: '32',
 text: 'There are 10 cards in a bag as shown. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Margie will pull a card from the bag without looking. Which of the following statements is true?',
 type: 'multiple-choice',
 options: ['It is likely that she will pull out a circle card.', 'It is unlikely she will pull out a triangle card.', 'It is certain she will pull out a square card.', 'It is impossible to pull out a star card.'],
 correctAnswer: 3, 
 explanation: 'There are no star cards in the bag, so pulling out a star card is impossible.'
 },
 {
 id: '33',
 text: 'The graph shows the amount of money Pedro earned for his basketball team through bake sales in the months of October, November, December, and January. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>There will be one more bake sale in February. Pedro wants to earn a total of $100 for his basketball team through bake sales. How much more money does Pedro need to earn from the bake sale in February to reach his goal of $100?',
 type: 'multiple-choice',
 options: ['$20', '$40', '$60', '$80'],
 correctAnswer: 1, 
 explanation: '$15 + $15 + $20 + $10 = $60 earned so far. $100 − $60 = $40.'
 },
 {
 id: '34',
 text: 'The graph shows the amount of money each homeroom class earned for the 4th-grade fundraiser. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on information in the graph, which statement is true?',
 type: 'multiple-choice',
 options: ['Ms. Jones’ class earned the most of the four classes.', 'Mr. Henry’s class earned less than any other class.', 'Ms. Davis’ class earned more than twice what Ms. Jones’ class earned.', 'Ms. Smith’s class earned more than twice what Ms. Davis’ class earned.'],
 correctAnswer: 2, 
 explanation: 'Ms. Davis’ class earned $125 and Ms. Jones’ class earned $50. Twice $50 is $100, and $125 is more than $100.'
 },
 {
 id: '35',
 text: 'Which spinner has a <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math> probability of the arrow landing on a section labeled Y on the first spin?',
 type: 'multiple-choice',
 options: [
    {url: 'images/36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The spinner must have 6 equal sections with exactly 2 labeled Y.'
 },
 {
 id: '36',
 text: 'Becky has a box with 11 buttons that are the same size and shape. There are 2 yellow, 3 red, and 6 blue buttons in the box. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If she takes 1 button out of the box without looking, what is the probability that the button will be blue?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>11</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: '6 of the 11 buttons are blue, so the probability is <math><mfrac><mn>6</mn><mn>11</mn></mfrac></math>.'
 },
 {
 id: '37',
 text: 'Iris asked all the fourth-graders in her school to name their favorite color. Each fourth-grader named one color. The bar graph below shows the results. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>According to the data in the graph, which is <i>closest</i> to the total number of fourth-graders?',
 type: 'multiple-choice',
 options: ['61', '67', '72', '80'],
 correctAnswer: 0, 
 explanation: 'Add the bars: about 20 + 9 + 15 + 17 = 61.'
 },
 {
 id: '38',
 text: 'The list shows the number of each color of balloon Katie mixed up in a bag. <br>• 7 purple <br>• 2 yellow <br>• 1 white <br>She will take 1 balloon from the bag without looking. Which <i>best</i> describes the likelihood that Katie will take a purple balloon on her first try?',
 type: 'multiple-choice',
 options: ['Certain', 'Likely, but not certain', 'Unlikely, but not impossible', 'Impossible'],
 correctAnswer: 1, 
 explanation: '7 of the 10 balloons are purple, so it is likely, but not certain.'
 },
 {
 id: '39',
 text: 'This bar graph shows the numbers of books read by a student during each of four months. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>During which two months did the student read a total of exactly 20 books?',
 type: 'multiple-choice',
 options: ['August and September', 'August and November', 'September and October', 'September and November'],
 correctAnswer: 1, 
 explanation: 'August (7 books) + November (13 books) = 20 books.'
 },
 {
 id: '40',
 text: 'These clocks show when the first 6 boat rides begin at an amusement park. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the time between rides stays the same, which clock shows when the next boat ride will begin?',
 type: 'multiple-choice',
 options: [
    {url: 'images/41a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The rides begin every 45 minutes. 12:45 + 45 minutes = 1:30.'
 },
 {
 id: '41',
 text: 'Which symbol goes in the box to make the statement true? <br>40 + 5 = 9 ☐ 5',
 type: 'multiple-choice',
 options: ['+', '×', '÷', '−'],
 correctAnswer: 1, 
 explanation: '40 + 5 = 45 and 9 × 5 = 45, so the symbol is ×.'
 },
 {
 id: '42',
 text: 'Which statement is <i>not</i> true?',
 type: 'multiple-choice',
 options: ['10 + (4 + 2) = (10 + 4) + 2', '(2 × 5) × 4 = (5 × 4) × 2', '21 + 5 = 5 + 21', '16 + 1 = 16 × 1'],
 correctAnswer: 3, 
 explanation: '16 + 1 = 17, but 16 × 1 = 16, so this statement is not true.'
 },
 {
 id: '43',
 text: 'Wendy used an addition rule to make the following pattern. <br>13, 17, 21, 25, 29 <br>Which appears to use the same rule?',
 type: 'multiple-choice',
 options: ['16, 19, 24, 28, 32', '16, 20, 24, 28, 32', '16, 20, 28, 32, 36', '16, 21, 25, 29, 33'],
 correctAnswer: 1, 
 explanation: 'Wendy’s rule is add 4. Only 16, 20, 24, 28, 32 adds 4 each time.'
 },
 {
 id: '44',
 text: 'Which statement is true?',
 type: 'multiple-choice',
 options: ['2 × 3 = 6 + 2', '3 × 4 = 8 + 3', '4 × 2 = 5 + 3', '6 × 3 = 10 + 9'],
 correctAnswer: 2, 
 explanation: '4 × 2 = 8 and 5 + 3 = 8, so both sides are equal.'
 },
 {
 id: '45',
 text: 'The numbers on these gym lockers form a pattern. <br><img src="images/46.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which statement <i>best</i> describes the pattern of numbers on the lockers?',
 type: 'multiple-choice',
 options: ['The number is always 8 times the number just above it.', 'The number is always 8 more than the number just above it.', 'The number is always 14 times the number just above it.', 'The number is always 14 more than the number just above it.'],
 correctAnswer: 3, 
 explanation: '2 + 14 = 16, 16 + 14 = 30, 30 + 14 = 44, and so on. Each number is 14 more than the one above it.'
 },
 {
 id: '46',
 text: 'This number machine uses an addition rule to change numbers into different numbers. The picture shows what happened when three numbers went into and came out of the same number machine. <br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What number should come out if the number 15 goes into this machine?',
 type: 'multiple-choice',
 options: ['22', '23', '24', '25'],
 correctAnswer: 2, 
 explanation: 'The rule is add 9: 4 + 9 = 13, 8 + 9 = 17, 11 + 9 = 20. So 15 + 9 = 24.'
 },
 {
 id: '47',
 text: 'Mrs. Hernandez wrote this pattern on the board. <br>65, 62, 59, 56, 53, 50, ___, ___, 41, 38 <br>If this pattern remains the same, what numbers should Mrs. Hernandez write in the blanks?',
 type: 'multiple-choice',
 options: ['49, 42', '48, 46', '47, 44', '46, 42'],
 correctAnswer: 2, 
 explanation: 'The rule is subtract 3: 50 − 3 = 47 and 47 − 3 = 44.'
 },
 {
 id: '48',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['(5 + 37) + 63 = 5 + (37 + 63)', '(5 + 37) + 63 = 5 × (37 + 63)', '(5 + 37) + 63 = (5 × 63) + (37 × 63)', '(5 + 37) + 63 = (5 + 37) + (37 + 63)'],
 correctAnswer: 0, 
 explanation: 'By the associative property of addition, (5 + 37) + 63 = 5 + (37 + 63). Both sides equal 105.'
 },
 {
 id: '49',
 text: 'What number should go in the box to make the statement true? <br>14 + (17 + 12) = (14 + ☐) + 12',
 type: 'multiple-choice',
 options: ['10', '14', '17', '21'],
 correctAnswer: 2, 
 explanation: 'By the associative property, the same numbers are grouped differently, so the missing number is 17.'
 }
];

// Scaled Score Mapping for Grade 4 Mathematics (2009)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 81,
  2: 130,
  3: 160,
  4: 182,
  5: 199,
  6: 214,
  7: 227,
  8: 238,
  9: 249,
  10: 259,
  11: 268,
  12: 276,
  13: 284,
  14: 292,
  15: 299,
  16: 306,
  17: 313,
  18: 320,
  19: 327,
  20: 333,
  21: 340,
  22: 346,
  23: 352,
  24: 358,
  25: 364,
  26: 371,
  27: 377,
  28: 383,
  29: 389,
  30: 395,
  31: 402,
  32: 408,
  33: 415,
  34: 422,
  35: 429,
  36: 436,
  37: 444,
  38: 451,
  39: 460,
  40: 469,
  41: 478,
  42: 488,
  43: 500,
  44: 512,
  45: 527,
  46: 544,
  47: 565,
  48: 595,
  49: 600,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 25 of the released test required measuring with a physical ruler and was removed.
  // Scale the raw score back to the released test's 50 questions before converting.
  const adjustedScore = Math.round(rawScore * 50 / sampleQuestions.length);
  const clampedScore = Math.max(0, Math.min(50, adjustedScore));
  return scaledScoreMapping[clampedScore] || 0;
}

function getPerformanceLevel(scaledScore) {
  if (scaledScore == 600) return 'Perfect Score';
  if (scaledScore >= 500) return 'Pass Advanced';
  if (scaledScore >= 400) return 'Pass Proficient';
  if (scaledScore >= 0) return 'Not Passing';
  return 'Minimal';
}

// Independent Results Manager for Grade 4 Math
(function() {
  'use strict';
  
  console.log(`Grade 4 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 4 Math`);
        return this.results;
      } catch (error) {
        console.error('Error loading test-specific results:', error);
        return [];
      }
    };
    
    // Override saveTestResult to use test-specific storage and add scaled scores
    window.resultsManager.saveTestResult = function(resultData) {
      // Add scaled score information
      const rawScore = resultData.correctAnswers;
      const scaledScore = getScaledScore(rawScore);
      const performanceLevel = getPerformanceLevel(scaledScore);
      
      const enhancedResultData = {
        ...resultData,
        scaledScore: scaledScore,
        performanceLevel: performanceLevel,
        rawScore: rawScore,
        testType: 'Grade 4 Mathematics (2009)'
      };
      
      console.log(`Saving Grade 4 Math result: ${rawScore}/${sampleQuestions.length} → ${scaledScore} (${performanceLevel})`);
      
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
        scaledScore: enhancedResultData.scaledScore,
        performanceLevel: enhancedResultData.performanceLevel,
        rawScore: enhancedResultData.rawScore,
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
        
        // Trigger immediate enhancement after saving
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
    
    // Also override displayResults to inject scaled scores immediately
    if (window.resultsManager.displayResults) {
      const originalDisplayResults = window.resultsManager.displayResults.bind(window.resultsManager);
      
      window.resultsManager.displayResults = function() {
        console.log('Results manager displayResults called - injecting scaled scores');
        
        // Call original display
        const result = originalDisplayResults.apply(this, arguments);
        
        // Immediately attempt to enhance with scaled scores
        setTimeout(() => {
          console.log('Post-displayResults enhancement trigger');
          enhanceResultsWithRetry();
        }, 10);
        
        return result;
      };
    }
  }
  
  // Function to enhance ALL historical results with scaled scores
  function enhanceAllHistoricalResults() {
    console.log('Enhancing all historical Grade 4 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 4 Mathematics (2009)';
        updated = true;
        console.log(`Enhanced Grade 4 Math result ${index + 1}: ${result.rawScore}/${sampleQuestions.length} → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 4 Math results saved');
      
      // Update results manager if available
      if (window.resultsManager && window.resultsManager.results) {
        window.resultsManager.results = savedResults;
      }
    }
  }
  
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
      
      .performance-level, .mini-performance-level {
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.9rem;
      }
      
      .mini-performance-level {
        font-size: 0.75rem;
        padding: 0.15rem 0.3rem;
        margin-left: 0.25rem;
      }
      
      .performance-level.perfect-score, .mini-performance-level.perfect-score {
        background-color: #e7c3ff;
        color: #6f2c91;
      }
      
      .performance-level.pass-advanced, .mini-performance-level.pass-advanced {
        background-color: var(--success-color, #d4edda);
        color: var(--success-color, #155724);
      }
      
      .performance-level.pass-proficient, .mini-performance-level.pass-proficient {
        background-color: #d1ecf1;
        color: #0c5460;
      }
      
      .performance-level.not-passing, .mini-performance-level.not-passing {
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
      
      .historical-scaled-score {
        font-size: 0.85rem;
        color: var(--text-color, #666);
        margin-left: 0.5rem;
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
  }
  
  function enhanceResultsDisplay() {
    // This function is now mainly used as a fallback
    console.log('Fallback enhanceResultsDisplay called');
    return enhanceResultsWithRetry();
  }
  
  function addScaledScoreToDisplay(resultsSummary, result) {
    const summaryText = resultsSummary.querySelector('.result-summary-text');
    if (!summaryText) {
      console.log('Result summary text not found');
      return;
    }
    
    // Check if already enhanced to prevent duplicates
    if (summaryText.querySelector('.scaled-score-info')) {
      console.log('Scaled score info already present, skipping duplicate');
      return;
    }
    
    console.log('Adding scaled score display with data:', result);
    
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
        <p><em>The scaled score is a converted score that accounts for test difficulty and allows for comparison across different test versions.</em></p>
      </div>
    `;
    
    summaryText.appendChild(scaledScoreInfo);
    addScaledScoreStyles();
    
    console.log('Scaled score display added successfully');
  }
  
  function enhanceResultsHistory() {
    const resultsDetails = document.getElementById('results-details');
    if (!resultsDetails) return;
    
    const resultItems = resultsDetails.querySelectorAll('.result-item');
    if (resultItems.length === 0) return;
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    
    resultItems.forEach((resultItem, index) => {
      if (resultItem.querySelector('.historical-scaled-score')) return;
      
      const savedResult = savedResults[index];
      if (!savedResult || !savedResult.scaledScore) return;
      
      const resultDetails = resultItem.querySelector('.result-details');
      if (!resultDetails) return;
      
      const historicalScaledScore = document.createElement('span');
      historicalScaledScore.className = 'historical-scaled-score';
      historicalScaledScore.innerHTML = ` • Scaled: ${savedResult.scaledScore} (<span class="mini-performance-level ${savedResult.performanceLevel.toLowerCase().replace(/\s+/g, '-')}">${savedResult.performanceLevel}</span>)`;
      
      resultDetails.appendChild(historicalScaledScore);
    });
  }
  
  function checkAndEnhanceResults() {
    // Legacy function - now redirects to the new retry system
    return enhanceResultsWithRetry();
  }
  
  // Enhanced finishTest override for immediate scaled score display
  function enhanceFinishTest() {
    // Wait for finishTest to be available
    const waitForFinishTest = () => {
      if (typeof window.finishTest === 'function') {
        const originalFinishTest = window.finishTest;
        
        window.finishTest = function() {
          console.log('Enhanced finishTest called - injecting scaled scores immediately');
          
          // Get current test data
          const correctAnswers = window.currentTestAnswers ? 
            window.currentTestAnswers.filter(answer => answer.correct).length : 0;
          const totalQuestions = window.questions ? window.questions.length : sampleQuestions.length;
          const score = Math.round((correctAnswers / totalQuestions) * 100);
          
          // Calculate scaled score data
          const scaledScore = getScaledScore(correctAnswers);
          const performanceLevel = getPerformanceLevel(scaledScore);
          
          console.log(`Calculated immediately: ${correctAnswers}/${totalQuestions} → ${scaledScore} (${performanceLevel})`);
          
          // Store enhanced data for immediate use
          window.tempEnhancedResult = {
            score: score,
            correctAnswers: correctAnswers,
            totalQuestions: totalQuestions,
            scaledScore: scaledScore,
            performanceLevel: performanceLevel,
            rawScore: correctAnswers,
            testType: 'Grade 4 Mathematics (2009)'
          };
          
          // Call original finishTest
          const result = originalFinishTest.apply(this, arguments);
          
          // Immediately enhance results with multiple attempts
          setTimeout(() => enhanceResultsWithRetry(), 50);
          setTimeout(() => enhanceResultsWithRetry(), 150);
          setTimeout(() => enhanceResultsWithRetry(), 300);
          setTimeout(() => enhanceResultsWithRetry(), 500);
          
          return result;
        };
        
        console.log('finishTest function enhanced for immediate scaled score display');
      } else {
        // Retry if finishTest not yet available
        setTimeout(waitForFinishTest, 100);
      }
    };
    
    waitForFinishTest();
  }
  
  // Results enhancement with retry logic
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
    
    // Check if already enhanced
    if (resultsSummary.querySelector('.scaled-score-info')) {
      console.log('Results already enhanced');
      // Still enhance history in case it's not done
      setTimeout(() => enhanceResultsHistory(), 100);
      return;
    }
    
    // Try to get result data
    let resultData = window.tempEnhancedResult;
    
    if (!resultData) {
      // Fallback to results manager
      const latestResult = window.resultsManager ? window.resultsManager.getLatestResult() : null;
      if (latestResult) {
        if (!latestResult.scaledScore && latestResult.correctAnswers !== undefined) {
          latestResult.scaledScore = getScaledScore(latestResult.correctAnswers);
          latestResult.performanceLevel = getPerformanceLevel(latestResult.scaledScore);
          latestResult.rawScore = latestResult.correctAnswers;
        }
        resultData = latestResult;
      }
    }
    
    if (!resultData) {
      // Last resort - check localStorage
      const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
      if (savedResults.length > 0) {
        resultData = savedResults[0];
        if (!resultData.scaledScore && resultData.correctAnswers !== undefined) {
          resultData.scaledScore = getScaledScore(resultData.correctAnswers);
          resultData.performanceLevel = getPerformanceLevel(resultData.scaledScore);
          resultData.rawScore = resultData.correctAnswers;
        }
      }
    }
    
    if (!resultData || !resultData.scaledScore) {
      console.log('No valid result data found, retrying...');
      if (retryCount < maxRetries) {
        setTimeout(() => enhanceResultsWithRetry(retryCount + 1), 200);
      }
      return;
    }
    
    // Add scaled score display
    console.log('Adding scaled score display immediately');
    addScaledScoreToDisplay(resultsSummary, resultData);
    
    // Enhance history after a short delay
    setTimeout(() => {
      enhanceAllHistoricalResults();
      enhanceResultsHistory();
    }, 200);
    
    console.log('Immediate scaled score enhancement completed');
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
          if (resultsSummary && !resultsSummary.querySelector('.scaled-score-info')) {
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
  
  function initialize() {
    console.log('Initializing Grade 4 Math independent results system');
    
    addScaledScoreStyles();
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
    
    console.log('Grade 4 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();