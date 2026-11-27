window.TEST_IDENTIFIER = 'math_grade6_2009';

const sampleQuestions = [
 {
 id: '1',
 text: '3.2 ÷ 0.2 = ___',
 type: 'multiple-choice',
 options: ['2', '16', '64', '160'],
 correctAnswer: 1, 
 explanation: 'Move both decimal points one place to the right: 32 ÷ 2 = 16.'
 },
 {
 id: '2',
 text: 'Which is equal to <math><mfrac><mn>3</mn><mn>2</mn></mfrac></math> × <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['2', '1 <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'Multiply numerators and denominators: <math><mfrac><mn>9</mn><mn>8</mn></mfrac></math> = 1 <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '3',
 text: 'The prices of the items in Alana’s grocery cart are pictured. <br><img src="images/3.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Alana has $10.00 to spend on the items. Which list of items could Alana purchase with her $10.00?',
 type: 'multiple-choice',
 options: ['4 cans of soup, 1 loaf of bread, and 1 bottle of juice', '1 loaf of bread, 3 bottles of juice, and 2 cans of soup', '1 loaf of bread, 3 cans of soup, and 1 container of milk', '2 cans of soup, 1 bottle of juice, and 1 container of milk'],
 correctAnswer: 3, 
 explanation: '2 × $2.29 + $2.29 + $2.89 = $9.76, which is less than $10.00.'
 },
 {
 id: '4',
 text: 'Antonio moved boxes that weighed 26.5 pounds, 34.2 pounds, and 45.8 pounds. Which is <i>closest</i> to the number of pounds Antonio moved all together?',
 type: 'multiple-choice',
 options: ['100 pounds', '107 pounds', '115 pounds', '200 pounds'],
 correctAnswer: 1, 
 explanation: '26.5 + 34.2 + 45.8 = 106.5, which is closest to 107 pounds.'
 },
 {
 id: '5',
 text: 'Greg and Sam ordered a pizza for lunch. Greg ate <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> of the pizza, and Sam ate <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> of the pizza. How much of the whole pizza was eaten by Greg and Sam?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>6</mn><mn>8</mn></mfrac></math>, so <math><mfrac><mn>6</mn><mn>8</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>7</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '6',
 text: 'Carl needs 2 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> cups of flour to make a certain cake. He only has <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> cup of flour in the pantry. How many more cups of flour does Carl need for the cake?',
 type: 'multiple-choice',
 options: ['2 <math><mfrac><mn>1</mn><mn>24</mn></mfrac></math> cups', '2 <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math> cups', '2 <math><mfrac><mn>7</mn><mn>24</mn></mfrac></math> cups', '2 <math><mfrac><mn>5</mn><mn>11</mn></mfrac></math> cups'],
 correctAnswer: 2, 
 explanation: '2 <math><mfrac><mn>16</mn><mn>24</mn></mfrac></math> − <math><mfrac><mn>9</mn><mn>24</mn></mfrac></math> = 2 <math><mfrac><mn>7</mn><mn>24</mn></mfrac></math> cups.'
 },
 {
 id: '7',
 text: 'Mrs. Chan purchased 2 oranges at lunch every day for 9 days. The oranges cost $0.49 each. To the nearest dollar, how much did Mrs. Chan pay for all the oranges?',
 type: 'multiple-choice',
 options: ['$1', '$5', '$9', '$18'],
 correctAnswer: 2, 
 explanation: '2 × 9 = 18 oranges, and 18 × $0.49 = $8.82, which rounds to $9.'
 },
 {
 id: '8',
 text: 'Alexis needs to buy 300 sheets of construction paper. The office supply store sells construction paper in the following packages. <br><img src="images/8.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is the <i>least</i> expensive way for Alexis to buy 300 sheets of construction paper?',
 type: 'multiple-choice',
 options: ['6 packages of paper <i>W</i>', '4 packages of paper <i>X</i>', '3 packages of paper <i>Y</i>', '2 packages of paper <i>Z</i>'],
 correctAnswer: 1, 
 explanation: 'W: $27.00, X: $20.40, Y: $32.25, Z: $24.50. Four packages of paper X cost the least.'
 },
 {
 id: '9',
 text: '0.312 ÷ 0.3 = ___',
 type: 'multiple-choice',
 options: ['14', '1.4', '1.04', '0.104'],
 correctAnswer: 2, 
 explanation: 'Move both decimal points one place to the right: 3.12 ÷ 3 = 1.04.'
 },
 {
 id: '10',
 text: 'Karl earns $8.50 per hour at his part-time job. Last week he worked 18 hours. This week he worked 14 hours. What is the total amount of money that Karl earned for working these two weeks?',
 type: 'multiple-choice',
 options: ['$119', '$153', '$261', '$272'],
 correctAnswer: 3, 
 explanation: '18 + 14 = 32 hours, and 32 × $8.50 = $272.'
 },
 {
 id: '11',
 text: 'Which of the following is the greatest common factor of 6 and 10?',
 type: 'multiple-choice',
 options: ['2', '10', '30', '60'],
 correctAnswer: 0, 
 explanation: 'The factors of 6 are 1, 2, 3, 6 and the factors of 10 are 1, 2, 5, 10. The greatest common factor is 2.'
 },
 {
 id: '12',
 text: 'Which of the following figures most closely shows 25% shaded?',
 type: 'multiple-choice',
 options: [
    {url: 'images/12a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/12b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/12c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/12d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: '25% is one-fourth. Find the bar with about <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> of its length shaded.'
 },
 {
 id: '13',
 text: 'Which of the following is true?',
 type: 'multiple-choice',
 options: ['−10 > −20', '−50 > 45', '−30 < −35', '25 < −45'],
 correctAnswer: 0, 
 explanation: 'On a number line, −10 is to the right of −20, so −10 > −20.'
 },
 {
 id: '14',
 text: 'Which statement <i>best</i> describes the number 22?',
 type: 'multiple-choice',
 options: ['It is a composite number.', 'It is a prime number.', 'It is both a prime and a composite number.', 'It is neither a prime nor a composite number.'],
 correctAnswer: 0, 
 explanation: '22 has the factors 1, 2, 11, and 22, so it is composite.'
 },
 {
 id: '15',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['2 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> < 2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '2 <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math> > 2 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '2 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> < 2 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '2 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> > 2 <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> ≈ 0.67 and <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math> = 0.3, so 2 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> > 2 <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>.'
 },
 {
 id: '16',
 text: 'Which number is equivalent to 30%?',
 type: 'multiple-choice',
 options: ['0.03', '<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '30.0'],
 correctAnswer: 1, 
 explanation: '30% = <math><mfrac><mn>30</mn><mn>100</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>.'
 },
 {
 id: '17',
 text: '<br><img src="images/17.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>According to the table, which shows the ratio of the number of red calculators to the number of blue calculators?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>14</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>14</mn></mfrac></math>', '<math><mfrac><mn>14</mn><mn>28</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>20</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'There are 14 red and 8 blue calculators, so the ratio of red to blue is <math><mfrac><mn>14</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '18',
 text: 'Which are multiples of both 4 and 6?',
 type: 'multiple-choice',
 options: ['20 and 24', '18 and 20', '12 and 18', '12 and 24'],
 correctAnswer: 3, 
 explanation: '12 and 24 are both divisible by 4 and by 6.'
 },
 {
 id: '19',
 text: 'Logan needs to order a cover for his swimming pool. The circular swimming pool has a radius of 17 feet. <br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>closest</i> to the number of square feet needed to completely cover the pool?',
 type: 'multiple-choice',
 options: ['106.76', '289', '907.46', '1,156'],
 correctAnswer: 2, 
 explanation: 'A = πr<sup>2</sup> ≈ 3.14 × 289 = 907.46 square feet.'
 },
 {
 id: '20',
 text: 'Andrea is buying a rectangular rug that is 3 feet wide and 4 feet long. What is the total area that the rug will cover?',
 type: 'multiple-choice',
 options: ['12 square feet', '14 square feet', '24 square feet', '28 square feet'],
 correctAnswer: 0, 
 explanation: 'A = 3 × 4 = 12 square feet.'
 },
 {
 id: '21',
 text: '<br><img src="images/21.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which correctly describes triangle <i>PQR</i>?',
 type: 'multiple-choice',
 options: ['Obtuse', 'Acute', 'Equilateral', 'Isosceles'],
 correctAnswer: 1, 
 explanation: 'The third angle is 180° − 75° − 45° = 60°. All three angles are less than 90°, so the triangle is acute.'
 },
 {
 id: '22',
 text: 'Which appears to be an obtuse triangle?',
 type: 'multiple-choice',
 options: [
    {url: 'images/22a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/22b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/22c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/22d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'An obtuse triangle has one angle greater than 90°.'
 },
 {
 id: '23',
 text: 'Which is equivalent to 1 liter?',
 type: 'multiple-choice',
 options: ['25 milliliters', '100 milliliters', '250 milliliters', '1,000 milliliters'],
 correctAnswer: 3, 
 explanation: '1 liter = 1,000 milliliters.'
 },
 {
 id: '24',
 text: 'Which of the following measurements is <i>closest</i> to 1 ton?',
 type: 'multiple-choice',
 options: ['1,002 pounds', '1,902 pounds', '1,998 pounds', '2,505 pounds'],
 correctAnswer: 2, 
 explanation: '1 ton = 2,000 pounds. 1,998 pounds is closest.'
 },
 {
 id: '25',
 text: 'In the circle shown, Point <i>T</i> is the center of the circle and Point <i>R</i> is on the circle. <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the circumference of circle <i>T</i>?',
 type: 'multiple-choice',
 options: ['15.70 cm', '17.27 cm', '31.40 cm', '34.54 cm'],
 correctAnswer: 3, 
 explanation: 'C = 2πr ≈ 2 × 3.14 × 5.5 = 34.54 cm.'
 },
 {
 id: '26',
 text: 'Mrs. Meyer folded the following figure to make a three-dimensional shape. <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If no parts overlapped and the entire figure was used, which <i>best</i> represents the shape Mrs. Meyer made?',
 type: 'multiple-choice',
 options: ['Cone', 'Rectangular prism', 'Square pyramid', 'Cylinder'],
 correctAnswer: 3, 
 explanation: 'Two circles and a rectangle fold into a cylinder.'
 },
 {
 id: '27',
 text: 'Susan has a rectangular garden that measures 20 feet by 10 feet. What is the <i>least</i> amount of fencing that she needs to buy in order to enclose the garden?',
 type: 'multiple-choice',
 options: ['30 feet', '60 feet', '80 feet', '200 feet'],
 correctAnswer: 1, 
 explanation: 'P = 20 + 10 + 20 + 10 = 60 feet.'
 },
 {
 id: '28',
 text: 'Which of the following angles measures 180°?',
 type: 'multiple-choice',
 options: [
    {url: 'images/28a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A 180° angle is a straight angle; its two rays form a straight line.'
 },
 {
 id: '29',
 text: 'Daryl can jump 2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> yards. Sarah can jump 8 feet, and Michelle can jump 72 inches. Which statement is true?',
 type: 'multiple-choice',
 options: ['Sarah jumps the farthest.', 'Daryl jumps the farthest.', 'Michelle jumps farther than Daryl.', 'Sarah and Michelle jump the same distance.'],
 correctAnswer: 0, 
 explanation: 'Daryl: 2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> yards = 7.5 feet. Sarah: 8 feet. Michelle: 72 inches = 6 feet. Sarah jumps the farthest.'
 },
 {
 id: '30',
 text: 'Pictured is a figure from the cover of Kreig’s CD case. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Four more figures from Kreig’s CD case are shown below. Which appears to be congruent to the figure above?',
 type: 'multiple-choice',
 options: [
    {url: 'images/30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Congruent figures have the same size and shape, even if they are turned.'
 },
 {
 id: '31',
 text: 'Students at Wilson Middle School must choose one elective from each group in the table. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which tree diagram shows all possible combinations of choosing one elective from each group?',
 type: 'multiple-choice',
 options: [
    {url: 'images/31a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'There are 3 sports, 2 clubs, and 2 languages, so each sport must branch to both clubs, and each club to both French and Spanish: 3 × 2 × 2 = 12 combinations.'
 },
 {
 id: '32',
 text: 'A deck of 50 cards for a math game has 9 red cards, 13 blue cards, 18 green cards, and 10 yellow cards. What is the probability that a card randomly selected from the deck will be a blue card?',
 type: 'multiple-choice',
 options: ['13%', '26%', '74%', '87%'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>13</mn><mn>50</mn></mfrac></math> = <math><mfrac><mn>26</mn><mn>100</mn></mfrac></math> = 26%.'
 },
 {
 id: '33',
 text: 'Look at the table. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the mean number of lunches sold last week?',
 type: 'multiple-choice',
 options: ['105', '111', '118', '130'],
 correctAnswer: 2, 
 explanation: '121 + 111 + 108 + 111 + 139 = 590, and 590 ÷ 5 = 118.'
 },
 {
 id: '34',
 text: 'This stem-and-leaf plot shows the high temperatures in Richmond for two weeks. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is a <i>true</i> conclusion based on the data in the stem-and-leaf plot?',
 type: 'multiple-choice',
 options: ['The range of the temperatures was 22°F.', 'The temperature was 80°F for 3 days.', 'The temperature was at least 57°F every day.', 'The temperature was greater than 70°F exactly 6 times.'],
 correctAnswer: 3, 
 explanation: 'The temperatures greater than 70°F are 71, 73, 76, 80, 80, and 82, which is exactly 6 days.'
 },
 {
 id: '35',
 text: 'What is the median of the following list of numbers? <br>33, 21, 42, 19, 42, 12',
 type: 'multiple-choice',
 options: ['26', '27', '30', '42'],
 correctAnswer: 1, 
 explanation: 'In order: 12, 19, 21, 33, 42, 42. The median is (21 + 33) ÷ 2 = 27.'
 },
 {
 id: '36',
 text: 'Holly drew a box-and-whisker plot to display the number of days her classmates were out of town over the summer. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The arrow is most likely pointing to the —',
 type: 'multiple-choice',
 options: ['lower extreme', 'upper extreme', 'upper quartile', 'lower quartile'],
 correctAnswer: 3, 
 explanation: 'The arrow points to the left edge of the box, which is the lower quartile.'
 },
 {
 id: '37',
 text: 'Look at the table. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the range for the number of miles driven?',
 type: 'multiple-choice',
 options: ['181', '198', '287', '319'],
 correctAnswer: 1, 
 explanation: 'Range = 485 − 287 = 198.'
 },
 {
 id: '38',
 text: 'Ivan has a fair number cube numbered 1 through 6. He will roll the cube one time. What is the probability that the number shown on the top face is a 2?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Only 1 of the 6 faces shows a 2, so the probability is <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>.'
 },
 {
 id: '39',
 text: 'The first four figures in a pattern are shown. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues by adding another row and column of dots to the previous group, how many dots will be in the next group?',
 type: 'multiple-choice',
 options: ['30', '35', '36', '40'],
 correctAnswer: 2, 
 explanation: 'The groups have 2 × 2, 3 × 3, 4 × 4, and 5 × 5 dots. The next group has 6 × 6 = 36 dots.'
 },
 {
 id: '40',
 text: 'Which shows 72,000,000 written in scientific notation?',
 type: 'multiple-choice',
 options: ['0.72 × 10<sup>6</sup>', '7.2 × 10<sup>6</sup>', '7.2 × 10<sup>7</sup>', '72 × 10<sup>7</sup>'],
 correctAnswer: 2, 
 explanation: 'Move the decimal point 7 places to the left: 72,000,000 = 7.2 × 10<sup>7</sup>.'
 },
 {
 id: '41',
 text: 'The scale below is balanced. <br><img src="images/41-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Using the above representations, which could be placed on the right side of the following scale to make it balanced? <br><img src="images/41-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/41a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The first scale shows 3<i>b</i> = 15 cookies, so <i>b</i> = 5. One bag balances 5 cookies.'
 },
 {
 id: '42',
 text: 'Solve for <i>m</i>: <br>2<i>m</i> = 42',
 type: 'multiple-choice',
 options: ['<i>m</i> = 21', '<i>m</i> = 40', '<i>m</i> = 44', '<i>m</i> = 84'],
 correctAnswer: 0, 
 explanation: 'Divide both sides by 2: <i>m</i> = 21.'
 },
 {
 id: '43',
 text: 'Which word <i>best</i> describes the following? <br><i>h</i> − 6 = 14',
 type: 'multiple-choice',
 options: ['Equation', 'Term', 'Coefficient', 'Variable'],
 correctAnswer: 0, 
 explanation: 'It has an equal sign showing two expressions are equal, so it is an equation.'
 },
 {
 id: '44',
 text: 'What rule describes the sequence shown? <br>64, 16, 4, 1, . . .',
 type: 'multiple-choice',
 options: ['Multiply by 4', 'Subtract 48', 'Divide by 4', 'Add 3'],
 correctAnswer: 2, 
 explanation: '64 ÷ 4 = 16, 16 ÷ 4 = 4, and 4 ÷ 4 = 1.'
 },
 {
 id: '45',
 text: 'What is the coefficient in the number sentence 8<i>x</i> = 16?',
 type: 'multiple-choice',
 options: ['<i>x</i>', '8', '8<i>x</i>', '16'],
 correctAnswer: 1, 
 explanation: 'The coefficient is the number multiplied by the variable: 8.'
 },
 {
 id: '46',
 text: 'What is a square root of 100?',
 type: 'multiple-choice',
 options: ['50', '25', '10', '4'],
 correctAnswer: 2, 
 explanation: '10 × 10 = 100, so 10 is a square root of 100.'
 },
 {
 id: '47',
 text: 'Which pattern follows the rule below? <br><i>Divide by 3</i>',
 type: 'multiple-choice',
 options: ['105, 35, 32, 23, 20', '108, 36, 18, 9, 3', '120, 90, 60, 30, 10', '162, 54, 18, 6, 2'],
 correctAnswer: 3, 
 explanation: '162 ÷ 3 = 54, 54 ÷ 3 = 18, 18 ÷ 3 = 6, and 6 ÷ 3 = 2.'
 },
 {
 id: '48',
 text: 'John found the solution of 14 + <i>n</i> = 84 in one step by —',
 type: 'multiple-choice',
 options: ['adding 14 to both sides of the number sentence', 'dividing both sides of the number sentence by 14', 'multiplying both sides of the number sentence by 14', 'subtracting 14 from both sides of the number sentence'],
 correctAnswer: 3, 
 explanation: 'Subtracting 14 from both sides gives <i>n</i> = 70.'
 },
 {
 id: '49',
 text: 'Which of the following is equivalent to 2<sup>3</sup>?',
 type: 'multiple-choice',
 options: ['2 · 3', '3 · 3', '2 · 2 · 2', '2 · 2 · 2 · 2'],
 correctAnswer: 2, 
 explanation: '2<sup>3</sup> means 2 used as a factor 3 times: 2 · 2 · 2.'
 },
 {
 id: '50',
 text: 'Look at the equation mat. <br><img src="images/50.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the value of <i>x</i>?',
 type: 'multiple-choice',
 options: ['1', '2', '4', '6'],
 correctAnswer: 2, 
 explanation: 'The left side has <i>x</i> + 4 and the right side has 2<i>x</i>. Removing one <i>x</i> from each side leaves 4 = <i>x</i>.'
 }
];

// Scaled Score Mapping for Grade 6 Mathematics (2009)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 12,
  2: 67,
  3: 100,
  4: 125,
  5: 144,
  6: 161,
  7: 175,
  8: 188,
  9: 200,
  10: 211,
  11: 221,
  12: 230,
  13: 240,
  14: 248,
  15: 257,
  16: 265,
  17: 273,
  18: 280,
  19: 288,
  20: 295,
  21: 303,
  22: 310,
  23: 317,
  24: 324,
  25: 331,
  26: 338,
  27: 346,
  28: 353,
  29: 360,
  30: 367,
  31: 375,
  32: 382,
  33: 390,
  34: 398,
  35: 406,
  36: 414,
  37: 423,
  38: 432,
  39: 442,
  40: 452,
  41: 463,
  42: 474,
  43: 487,
  44: 502,
  45: 518,
  46: 538,
  47: 562,
  48: 595,
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

// Independent Results Manager for Grade 6 Math
(function() {
  'use strict';
  
  console.log(`Grade 6 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 6 Math`);
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
        testType: 'Grade 6 Mathematics (2009)'
      };
      
      console.log(`Saving Grade 6 Math result: ${rawScore}/50 → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 6 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 6 Mathematics (2009)';
        updated = true;
        console.log(`Enhanced Grade 6 Math result ${index + 1}: ${result.rawScore}/50 → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 6 Math results saved');
      
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
          const totalQuestions = window.questions ? window.questions.length : 50;
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
            testType: 'Grade 6 Mathematics (2009)'
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
    console.log('Initializing Grade 6 Math independent results system');
    
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
    
    console.log('Grade 6 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();