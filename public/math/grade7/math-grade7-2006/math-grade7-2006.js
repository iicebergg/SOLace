window.TEST_IDENTIFIER = 'math_grade7_2006';

const sampleQuestions = [
 {
 id: '1',
 text: 'Patti answered 12 of the 15 questions on her test. What percent of the questions did Patti answer?',
 type: 'multiple-choice',
 options: ['60%', '75%', '80%', '84%'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>12</mn><mn>15</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math> = 0.8 = 80%.'
 },
 {
 id: '2',
 text: 'During a winter\'s night, the low temperature was recorded at 19°F. The wind-chill temperature that same night was −7°F. What was the difference between the wind-chill temperature and the low temperature?',
 type: 'multiple-choice',
 options: ['7°F', '12°F', '25°F', '26°F'],
 correctAnswer: 3, 
 explanation: '19 − (−7) = 19 + 7 = 26°F.'
 },
 {
 id: '3',
 text: 'Jerri was looking at a map with the following scale indicator. <br><math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> inch = 3 miles <br>Jerri measured 3 <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> inches between two towns on the map. What is the distance in miles between the two towns?',
 type: 'multiple-choice',
 options: ['18 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> miles', '9 <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> miles', '3 <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math> miles', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> mile'],
 correctAnswer: 0, 
 explanation: 'Each inch is 6 miles. 3 <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> × 6 = 18 + <math><mfrac><mn>6</mn><mn>8</mn></mfrac></math> = 18 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> miles.'
 },
 {
 id: '4',
 text: 'The Wheelers\' bill at a restaurant is $63.00. How much money should Mr. Wheeler leave as a tip if he plans to tip 15%?',
 type: 'multiple-choice',
 options: ['$78.00', '$72.45', '$9.45', '$5.00'],
 correctAnswer: 2, 
 explanation: '15% of $63.00 = 0.15 × 63 = $9.45.'
 },
 {
 id: '5',
 text: 'A tree casts a shadow 9 meters long. At the same time, a building 54 meters tall casts a shadow 21 meters long. To the nearest meter, what is the height of the tree?',
 type: 'multiple-choice',
 options: ['4 m', '18 m', '23 m', '126 m'],
 correctAnswer: 2, 
 explanation: 'Set up a proportion: <math><mfrac><mn>h</mn><mn>9</mn></mfrac></math> = <math><mfrac><mn>54</mn><mn>21</mn></mfrac></math>. h = 9 × 54 ÷ 21 ≈ 23.1, or about 23 meters.'
 },
 {
 id: '6',
 text: '<br><img src="images/6-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Using the key above as a guide, what is the result of the operation in the model below? <br><img src="images/6-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['−13', '−5', '5', '13'],
 correctAnswer: 1, 
 explanation: 'There are 9 negative counters and 4 positive counters. Each positive cancels a negative, leaving 5 negative counters: −9 + 4 = −5.'
 },
 {
 id: '7',
 text: 'Chris put $1,500 in a savings account at an annual interest rate of 5%. If Chris does not deposit or withdraw any money, what is the amount of interest Chris will earn the first year her money is in the savings account?',
 type: 'multiple-choice',
 options: ['$750', '$500', '$75', '$50'],
 correctAnswer: 2, 
 explanation: '5% of $1,500 = 0.05 × 1,500 = $75.'
 },
 {
 id: '8',
 text: 'A store advertisement reads "Going Out of Business Sale. Everything is <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math> off." What percent is <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['16%', '37.5%', '58%', '62.5%'],
 correctAnswer: 3, 
 explanation: '5 ÷ 8 = 0.625 = 62.5%.'
 },
 {
 id: '9',
 text: 'When simplifying the following, using order of operations, which operation should be performed first? <br>8 − 4 ÷ 2 + 3 · 5',
 type: 'multiple-choice',
 options: ['8 − 4', '4 ÷ 2', '2 + 3', '3 · 5'],
 correctAnswer: 1, 
 explanation: 'Multiplication and division are done before addition and subtraction, from left to right. The first one from the left is 4 ÷ 2.'
 },
 {
 id: '10',
 text: 'Daphne wrote the fractional part of the quizzes she answered correctly. <br><img src="images/10.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which lists these quiz scores in order from least to greatest?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>, <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math>, <math><mfrac><mn>5</mn><mn>11</mn></mfrac></math>, <math><mfrac><mn>7</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>5</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>, <math><mfrac><mn>7</mn><mn>9</mn></mfrac></math>, <math><mfrac><mn>5</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>, <math><mfrac><mn>7</mn><mn>9</mn></mfrac></math>, <math><mfrac><mn>5</mn><mn>11</mn></mfrac></math>, <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>, <math><mfrac><mn>5</mn><mn>11</mn></mfrac></math>, <math><mfrac><mn>7</mn><mn>9</mn></mfrac></math>, <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'As decimals, <math><mfrac><mn>3</mn><mn>7</mn></mfrac></math> ≈ 0.43, <math><mfrac><mn>5</mn><mn>11</mn></mfrac></math> ≈ 0.45, <math><mfrac><mn>7</mn><mn>9</mn></mfrac></math> ≈ 0.78, and <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math> = 0.8.'
 },
 {
 id: '11',
 text: 'Which number sentence illustrates the commutative property of multiplication?',
 type: 'multiple-choice',
 options: ['14 + (13 · 7) = 14 + (7 · 13)', '14 + (13 · 7) = 13 + (14 · 7)', '14 + (13 · 7) = 14 · 13 + 14 · 7', '14 + (13 · 7) = (14 + 13) · 7'],
 correctAnswer: 0, 
 explanation: 'The commutative property says factors can be multiplied in either order: 13 · 7 = 7 · 13.'
 },
 {
 id: '12',
 text: '<math><mfrac><mn>1</mn><mn>7</mn></mfrac></math> · <i>y</i> = <math><mfrac><mn>1</mn><mn>7</mn></mfrac></math> <br>If the number sentence is true, then <i>y</i> is the —',
 type: 'multiple-choice',
 options: ['additive identity', 'additive inverse', 'multiplicative identity', 'multiplicative inverse'],
 correctAnswer: 2, 
 explanation: 'y must be 1, because any number times 1 is itself. 1 is the multiplicative identity.'
 },
 {
 id: '13',
 text: '<math><mfrac><mrow><mn>10</mn><mo>+</mo><mn>30</mn><mo>÷</mo><mn>5</mn></mrow><mrow><mn>28</mn><mo>÷</mo><mn>7</mn><mo>·</mo><mn>2</mn></mrow></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['8', '4', '2', '1'],
 correctAnswer: 2, 
 explanation: 'Numerator: 10 + 6 = 16. Denominator: 4 · 2 = 8. 16 ÷ 8 = 2.'
 },
 {
 id: '14',
 text: 'A business sold for 45 million dollars. What is 45 million expressed in scientific notation?',
 type: 'multiple-choice',
 options: ['4.5 × 10<sup>6</sup>', '4.5 × 10<sup>7</sup>', '4.5 × 10<sup>8</sup>', '4.5 × 10<sup>9</sup>'],
 correctAnswer: 1, 
 explanation: '45,000,000 = 4.5 × 10,000,000 = 4.5 × 10<sup>7</sup>.'
 },
 {
 id: '15',
 text: 'Katie is going to carpet her living room floor and drew the diagram shown. <br><img src="images/15.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the minimum number of square feet of carpet she will need?',
 type: 'multiple-choice',
 options: ['51 sq ft', '60 sq ft', '194 sq ft', '244 sq ft'],
 correctAnswer: 2, 
 explanation: 'Split the figure into a 16 × 11 rectangle (176 sq ft) and a 6 × 3 rectangle (18 sq ft). 176 + 18 = 194 sq ft.'
 },
 {
 id: '16',
 text: '<br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If all sides of the polygon pictured are equal in length, the polygon is most likely a —',
 type: 'multiple-choice',
 options: ['square', 'rhombus', 'rectangle', 'nonagon'],
 correctAnswer: 1, 
 explanation: 'A quadrilateral with 4 equal sides that does not have right angles is a rhombus.'
 },
 {
 id: '17',
 text: '<br><img src="images/17.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the total area of the figure shown?',
 type: 'multiple-choice',
 options: ['42 sq ft', '84 sq ft', '135 sq ft', '168 sq ft'],
 correctAnswer: 1, 
 explanation: 'The base is 5 + 9 = 14 ft and the height is 12 ft. A = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> × 14 × 12 = 84 sq ft.'
 },
 {
 id: '18',
 text: 'Which coordinate grid has the quadrants correctly labeled?',
 type: 'multiple-choice',
 options: [
    {url: 'images/18a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Quadrants are numbered I, II, III, IV counterclockwise starting from the upper right.'
 },
 {
 id: '19',
 text: 'A cylinder-shaped barrel has a diameter of 3 feet and a height of 4.5 feet. If the barrel is empty, which is closest to the minimum amount of water needed to completely fill the barrel?',
 type: 'multiple-choice',
 options: ['32 cu ft', '49 cu ft', '71 cu ft', '98 cu ft'],
 correctAnswer: 0, 
 explanation: 'The radius is 1.5 ft. V = πr²h ≈ 3.14 × 1.5 × 1.5 × 4.5 ≈ 31.8, or about 32 cu ft.'
 },
 {
 id: '20',
 text: 'Mark correctly drew a heptagon on the board. How many interior angles does Mark\'s heptagon have?',
 type: 'multiple-choice',
 options: ['6', '7', '8', '9'],
 correctAnswer: 1, 
 explanation: 'A heptagon has 7 sides and 7 interior angles.'
 },
 {
 id: '21',
 text: 'A circular plate has a radius of 7 inches. Which is closest to the area of the plate?',
 type: 'multiple-choice',
 options: ['39 sq in.', '44 sq in.', '138 sq in.', '154 sq in.'],
 correctAnswer: 3, 
 explanation: 'A = πr² ≈ <math><mfrac><mn>22</mn><mn>7</mn></mfrac></math> × 7 × 7 = 154 sq in.'
 },
 {
 id: '22',
 text: 'Triangle <i>FOX</i> is similar to triangle <i>FAN</i>. <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which side of triangle <i>FOX</i> corresponds to side <span style="text-decoration: overline"><i>FA</i></span>?',
 type: 'multiple-choice',
 options: ['<span style="text-decoration: overline"><i>FO</i></span>', '<span style="text-decoration: overline"><i>AO</i></span>', '<span style="text-decoration: overline"><i>FN</i></span>', '<span style="text-decoration: overline"><i>NX</i></span>'],
 correctAnswer: 0, 
 explanation: 'The vertices match in order: F to F, A to O, N to X. So side FA corresponds to side FO.'
 },
 {
 id: '23',
 text: 'Which polygon is <i>not</i> a quadrilateral?',
 type: 'multiple-choice',
 options: [
    {url: 'images/23a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A quadrilateral has 4 sides. Choice D has 5 sides, so it is a pentagon.'
 },
 {
 id: '24',
 text: 'On a regular coordinate grid, the point (−7, 10) is in which quadrant?',
 type: 'multiple-choice',
 options: ['I', 'II', 'III', 'IV'],
 correctAnswer: 1, 
 explanation: 'The x-coordinate is negative and the y-coordinate is positive, so the point is in Quadrant II.'
 },
 {
 id: '25',
 text: 'Carl is covering the rectangular prism-shaped box with cloth. <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the minimum amount of cloth Carl needs to cover the entire box?',
 type: 'multiple-choice',
 options: ['96 sq in.', '136 sq in.', '192 sq in.', '272 sq in.'],
 correctAnswer: 3, 
 explanation: 'Surface area = 2(12 × 8) + 2(12 × 2) + 2(8 × 2) = 192 + 48 + 32 = 272 sq in.'
 },
 {
 id: '26',
 text: 'Translate the figure horizontally −5 units. <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which best describes the location of the image of vertex <i>L</i>?',
 type: 'multiple-choice',
 options: ['(−3, −2)', '(−2, −3)', '(2, −7)', '(−7, 2)'],
 correctAnswer: 0, 
 explanation: 'Vertex L is at (2, −2). Moving it 5 units to the left gives (2 − 5, −2) = (−3, −2).'
 },
 {
 id: '27',
 text: 'A summer camp offers different choices at lunch. <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many different lunch combinations consisting of 1 main dish, 1 side dish, and 1 drink are possible?',
 type: 'multiple-choice',
 options: ['6', '9', '18', '27'],
 correctAnswer: 2, 
 explanation: '3 main dishes × 2 sides × 3 drinks = 18 combinations.'
 },
 {
 id: '28',
 text: 'The scores Brianna earned on 4 of the 5 science tests she has taken so far this year are listed. <br>95, 90, 85, 95 <br>She wants the mean of all 5 of her test scores to be 90. What does Brianna need to score on the 5th test to get exactly a mean of 90?',
 type: 'multiple-choice',
 options: ['90', '85', '80', '75'],
 correctAnswer: 1, 
 explanation: 'A mean of 90 for 5 tests requires a total of 450. 95 + 90 + 85 + 95 = 365, and 450 − 365 = 85.'
 },
 {
 id: '29',
 text: 'Which scatterplot shows a positive relationship between <i>x</i> and <i>y</i>?',
 type: 'multiple-choice',
 options: [
    {url: 'images/29a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'In a positive relationship, y tends to increase as x increases. The points in choice A rise from left to right.'
 },
 {
 id: '30',
 text: 'A regular card deck contains 52 cards, 4 of which are aces. Assuming the cards are dealt randomly, what is the probability that the first card dealt will be an ace?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>52</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>13</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>13</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>4</mn><mn>52</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>13</mn></mfrac></math>.'
 },
 {
 id: '31',
 text: 'Look at the table. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the median number of students participating in a sport?',
 type: 'multiple-choice',
 options: ['56', '62', '65', '68'],
 correctAnswer: 2, 
 explanation: 'In order: 26, 62, 68, 68. The median is the mean of the middle two: (62 + 68) ÷ 2 = 65.'
 },
 {
 id: '32',
 text: 'The six faces of a fair cube are numbered 1 through 6. If the cube is rolled 300 times, what is the expected number of times a 5 will land face-up?',
 type: 'multiple-choice',
 options: ['50', '100', '200', '250'],
 correctAnswer: 0, 
 explanation: 'The probability of rolling a 5 is <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>. <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> × 300 = 50.'
 },
 {
 id: '33',
 text: 'Mark has a basket of 40 yellow tennis balls and 35 white tennis balls. What is the probability that the next tennis ball he randomly chooses will be yellow?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>8</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>15</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>15</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'There are 75 balls and 40 are yellow: <math><mfrac><mn>40</mn><mn>75</mn></mfrac></math> = <math><mfrac><mn>8</mn><mn>15</mn></mfrac></math>.'
 },
 {
 id: '34',
 text: '<br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which measures can be determined using data presented in a box-and-whisker plot?',
 type: 'multiple-choice',
 options: ['The mean and the range', 'The mean and the mode', 'The median and the mode', 'The median and the range'],
 correctAnswer: 3, 
 explanation: 'A box-and-whisker plot shows the median and the least and greatest values, so the median and the range can be found.'
 },
 {
 id: '35',
 text: 'The number of customers in various age groups that went to Oak Hills Library last Tuesday morning is recorded in the frequency distribution. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which age group had twice as many customers as the 31- to 40-year-old age group?',
 type: 'multiple-choice',
 options: ['1 to 10', '11 to 20', '21 to 30', '41 to 50'],
 correctAnswer: 3, 
 explanation: 'The 31 to 40 group had 9 customers. Twice that is 18, which is the 41 to 50 group.'
 },
 {
 id: '36',
 text: 'Lewis\' restaurant offers a dinner special that consists of a main dish, a vegetable, a salad, and a roll. Lewis\' has 4 main dishes, 7 vegetables, 1 salad, and 1 type of roll to choose from. Which shows the total number of different dinner special combinations that Lewis\' offers?',
 type: 'multiple-choice',
 options: ['4 + 7 + 1 + 1', '4 · 7 · 2', '4 + 7', '4 · 7 · 1 · 1'],
 correctAnswer: 3, 
 explanation: 'By the counting principle, multiply the number of choices for each part: 4 · 7 · 1 · 1.'
 },
 {
 id: '37',
 text: 'The graph shows the amount Nicole received in tips while working at a restaurant for six days. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which day\'s tip amount is closest to the mean (average) for the six days?',
 type: 'multiple-choice',
 options: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
 correctAnswer: 0, 
 explanation: 'The tips are about $50, $30, $27, $22, $85, and $80, which total about $294. $294 ÷ 6 ≈ $49, closest to Monday\'s $50.'
 },
 {
 id: '38',
 text: 'Look at the table. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the ages of the Lopez family members, which of the following has the <i>greatest</i> value?',
 type: 'multiple-choice',
 options: ['Mean', 'Median', 'Mode', 'Range'],
 correctAnswer: 3, 
 explanation: 'The mean is 188 ÷ 6 ≈ 31.3, the median is 33, the mode is 33, and the range is 55 − 5 = 50. The range is greatest.'
 },
 {
 id: '39',
 text: 'What is the common difference of the arithmetic sequence shown below? <br>−5, −1, 3, 7, . . .',
 type: 'multiple-choice',
 options: ['2', '4', '6', '8'],
 correctAnswer: 1, 
 explanation: 'Each term is 4 more than the one before: −5 + 4 = −1, −1 + 4 = 3, and so on.'
 },
 {
 id: '40',
 text: 'Which of the following would <i>not</i> be classified as an expression?',
 type: 'multiple-choice',
 options: ['5 + 4<i>y</i>', '<i>x</i> − 1 = 7', '4 + 1', '3<i>abc</i>'],
 correctAnswer: 1, 
 explanation: 'x − 1 = 7 has an equal sign, so it is an equation, not an expression.'
 },
 {
 id: '41',
 text: 'What is the value of <i>p</i> that makes the following true? <br><i>p</i> − (−4) = 8',
 type: 'multiple-choice',
 options: ['−12', '−4', '4', '12'],
 correctAnswer: 2, 
 explanation: 'p − (−4) = p + 4. If p + 4 = 8, then p = 4.'
 },
 {
 id: '42',
 text: 'Which represents the phrase shown? <br><i>The product of four and a number, decreased by seven</i>',
 type: 'multiple-choice',
 options: ['4(<i>x</i> − 7)', '4(7 − <i>x</i>)', '7 − 4<i>x</i>', '4<i>x</i> − 7'],
 correctAnswer: 3, 
 explanation: 'The product of four and a number is 4x. Decreased by seven means subtract 7: 4x − 7.'
 },
 {
 id: '43',
 text: 'Which table contains <i>only</i> values that satisfy the following? <br><i>y</i> = <i>x</i> − 1',
 type: 'multiple-choice',
 options: [
    {url: 'images/43a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'In table D, each y is 1 less than x: 0 − 1 = −1, 1 − 1 = 0, and 2 − 1 = 1.'
 },
 {
 id: '44',
 text: 'Brittany is <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> Caroline\'s age. If Brittany is 2 years old, what is Caroline\'s age?',
 type: 'multiple-choice',
 options: ['1 year old', '2 years old', '4 years old', '8 years old'],
 correctAnswer: 3, 
 explanation: 'If 2 is <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> of Caroline\'s age, then Caroline is 2 × 4 = 8 years old.'
 },
 {
 id: '45',
 text: 'Which phrase best represents the following? <br>2<i>x</i> − 8',
 type: 'multiple-choice',
 options: ['Eight less than twice a number', 'Twice a number less than eight', 'Eight less than a number squared', 'A number squared less than eight'],
 correctAnswer: 0, 
 explanation: '2x is twice a number, and − 8 means eight less than that.'
 },
 {
 id: '46',
 text: 'Which represents <i>all</i> the values for <i>a</i> that make the following true? <br><i>a</i> + 8 ≥ 4',
 type: 'multiple-choice',
 options: ['<i>a</i> ≤ −4', '<i>a</i> ≥ −4', '<i>a</i> ≤ −12', '<i>a</i> ≥ −12'],
 correctAnswer: 1, 
 explanation: 'Subtract 8 from both sides: a ≥ 4 − 8, so a ≥ −4.'
 },
 {
 id: '47',
 text: 'Which statement is <i>false</i>?',
 type: 'multiple-choice',
 options: ['An equation must have an equal symbol.', 'An equation states that two expressions are equal.', 'An equation always contains variables.', 'An equation always contains terms.'],
 correctAnswer: 2, 
 explanation: 'An equation does not have to contain a variable. For example, 4 + 1 = 5 is an equation with no variables.'
 },
 {
 id: '48',
 text: 'What is the 6th term of the geometric sequence shown? <br>80, 40, 20, . . .',
 type: 'multiple-choice',
 options: ['1', '1 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '5'],
 correctAnswer: 2, 
 explanation: 'Each term is half the one before: 80, 40, 20, 10, 5, 2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>. The 6th term is 2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '49',
 text: 'What value of <i>d</i> makes the following number sentence true? <br><math><mfrac><mn>d</mn><mn>3</mn></mfrac></math> = −27',
 type: 'multiple-choice',
 options: ['−81', '−9', '9', '81'],
 correctAnswer: 0, 
 explanation: 'Multiply both sides by 3: d = −27 × 3 = −81.'
 },
 {
 id: '50',
 text: '"Twice the number of students in Juan\'s class divided by five is ten." <br>Which best represents the sentence above?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2j</mn><mn>5</mn></mfrac></math> = 10', '<math><mfrac><msup><mi>j</mi><mn>2</mn></msup><mn>5</mn></mfrac></math> = 10', '<math><mfrac><mn>2j</mn><mn>5</mn></mfrac></math> + 10', '<math><mfrac><msup><mi>j</mi><mn>2</mn></msup><mn>5</mn></mfrac></math> + 10'],
 correctAnswer: 0, 
 explanation: 'Twice the number is 2j. Divided by five is <math><mfrac><mn>2j</mn><mn>5</mn></mfrac></math>. "Is ten" means = 10.'
 }
];

// Scaled Score Mapping for Grade 7 Mathematics (2006)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 30,
  2: 87,
  3: 122,
  4: 147,
  5: 168,
  6: 185,
  7: 200,
  8: 213,
  9: 225,
  10: 236,
  11: 247,
  12: 257,
  13: 266,
  14: 275,
  15: 283,
  16: 291,
  17: 299,
  18: 307,
  19: 314,
  20: 322,
  21: 329,
  22: 336,
  23: 343,
  24: 350,
  25: 357,
  26: 365,
  27: 372,
  28: 379,
  29: 386,
  30: 393,
  31: 400,
  32: 407,
  33: 415,
  34: 423,
  35: 431,
  36: 439,
  37: 448,
  38: 457,
  39: 467,
  40: 477,
  41: 488,
  42: 500,
  43: 513,
  44: 528,
  45: 545,
  46: 565,
  47: 590,
  48: 600,
  49: 600,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  const clampedScore = Math.max(0, Math.min(50, rawScore));
  return scaledScoreMapping[clampedScore] || 0;
}

function getPerformanceLevel(scaledScore) {
  if (scaledScore == 600) return 'Perfect Score';
  if (scaledScore >= 500) return 'Pass Advanced';
  if (scaledScore >= 400) return 'Pass Proficient';
  if (scaledScore >= 0) return 'Not Passing';
  return 'Minimal';
}

// Independent Results Manager for Grade 7 Math
(function() {
  'use strict';
  
  console.log(`Grade 7 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 7 Math`);
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
        testType: 'Grade 7 Mathematics (2006)'
      };
      
      console.log(`Saving Grade 7 Math result: ${rawScore}/${sampleQuestions.length} → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 7 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 7 Mathematics (2006)';
        updated = true;
        console.log(`Enhanced Grade 7 Math result ${index + 1}: ${result.rawScore}/${sampleQuestions.length} → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 7 Math results saved');
      
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
            testType: 'Grade 7 Mathematics (2006)'
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
    console.log('Initializing Grade 7 Math independent results system');
    
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
    
    console.log('Grade 7 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();