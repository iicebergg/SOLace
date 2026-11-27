window.TEST_IDENTIFIER = 'math_grade5_2009';

const sampleQuestions = [
 {
 id: '1',
 text: '6.48 ÷ 4 = ___',
 type: 'multiple-choice',
 options: ['0.162', '1.62', '16.2', '162'],
 correctAnswer: 1, 
 explanation: '6.48 ÷ 4 = 1.62. Check: 1.62 × 4 = 6.48.'
 },
 {
 id: '2',
 text: 'Last year, Linda scored at least 16 points in every basketball game in which she played. She played in a total of 13 games last year. What is the least number of points she could have scored last year?',
 type: 'multiple-choice',
 options: ['29', '108', '164', '208'],
 correctAnswer: 3, 
 explanation: 'The least she could score is 16 points in each of 13 games: 16 × 13 = 208 points.'
 },
 {
 id: '3',
 text: 'What is the sum of 3 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> and 3 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['6 <math><mfrac><mn>1</mn><mn>12</mn></mfrac></math>', '6 <math><mfrac><mn>2</mn><mn>7</mn></mfrac></math>', '6 <math><mfrac><mn>7</mn><mn>12</mn></mfrac></math>', '7'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math> and <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>12</mn></mfrac></math>. 3 <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math> + 3 <math><mfrac><mn>4</mn><mn>12</mn></mfrac></math> = 6 <math><mfrac><mn>7</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '4',
 text: 'A group planted 3,619 flowers last year. This year, they planted 2,485 flowers. How many more flowers did the group plant last year than this year?',
 type: 'multiple-choice',
 options: ['1,124', '1,134', '1,274', '6,104'],
 correctAnswer: 1, 
 explanation: '3,619 − 2,485 = 1,134 more flowers.'
 },
 {
 id: '5',
 text: 'A male Siberian tiger is 3.3 meters long. A female Siberian tiger is 2.6 meters long. What is the difference in these lengths?',
 type: 'multiple-choice',
 options: ['0.7 meter', '1.3 meters', '1.7 meters', '5.9 meters'],
 correctAnswer: 0, 
 explanation: '3.3 − 2.6 = 0.7 meter.'
 },
 {
 id: '6',
 text: '846 ÷ 7 = ___',
 type: 'multiple-choice',
 options: ['121 R1', '120 R6', '112 R2', '12 R6'],
 correctAnswer: 1, 
 explanation: '7 × 120 = 840, and 846 − 840 = 6, so 846 ÷ 7 = 120 R6.'
 },
 {
 id: '7',
 text: '31.514 − 24.607 = ___',
 type: 'multiple-choice',
 options: ['6.907', '6.913', '7.107', '7.113'],
 correctAnswer: 0, 
 explanation: '31.514 − 24.607 = 6.907.'
 },
 {
 id: '8',
 text: 'Mrs. Burns gives her 4 children a total of $60 per week for their allowance. How much money should each child receive if they share the $60 equally?',
 type: 'multiple-choice',
 options: ['$10', '$15', '$24', '$30'],
 correctAnswer: 1, 
 explanation: '$60 ÷ 4 = $15.'
 },
 {
 id: '9',
 text: '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> − <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>0</mn><mn>1</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math> and <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>, so <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math> − <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>.'
 },
 {
 id: '10',
 text: '8,460 ÷ 20 = ___',
 type: 'multiple-choice',
 options: ['42 R6', '402 R6', '403', '423'],
 correctAnswer: 3, 
 explanation: '20 × 423 = 8,460, so 8,460 ÷ 20 = 423.'
 },
 {
 id: '11',
 text: '0.505 + 0.314 is <i>closest</i> to —',
 type: 'multiple-choice',
 options: ['0.6', '0.7', '0.8', '0.9'],
 correctAnswer: 2, 
 explanation: '0.505 + 0.314 = 0.819, which is closest to 0.8.'
 },
 {
 id: '12',
 text: 'The first week a printer was used, it produced 34,581 pages. The next week the printer produced 40,586 pages. What was the total number of pages the printer produced in these two weeks?',
 type: 'multiple-choice',
 options: ['6,005', '14,005', '75,167', '85,167'],
 correctAnswer: 2, 
 explanation: '34,581 + 40,586 = 75,167 pages.'
 },
 {
 id: '13',
 text: 'Which set of fractions is ordered from <i>least</i> to <i>greatest</i>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'For fractions with a numerator of 1, the larger the denominator, the smaller the fraction: <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> < <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> < <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, and <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> is the greatest.'
 },
 {
 id: '14',
 text: 'What is the place value of the 7 in 594.237?',
 type: 'multiple-choice',
 options: ['Ones', 'Tenths', 'Hundredths', 'Thousandths'],
 correctAnswer: 3, 
 explanation: 'The 7 is the third digit after the decimal point, so it is in the thousandths place.'
 },
 {
 id: '15',
 text: 'How is 0.372 written in words?',
 type: 'multiple-choice',
 options: ['Three hundred seventy-two thousandths', 'Three and seventy-two thousandths', 'Three hundred seventy-two hundredths', 'Three hundred seventy-two'],
 correctAnswer: 0, 
 explanation: 'The last digit is in the thousandths place: three hundred seventy-two thousandths.'
 },
 {
 id: '16',
 text: 'Which decimal below has the same value as <math><mfrac><mn>6</mn><mn>10</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['6.10', '6.0', '0.6', '0.06'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>6</mn><mn>10</mn></mfrac></math> is six tenths, or 0.6.'
 },
 {
 id: '17',
 text: 'Which number is two hundred and three thousandths?',
 type: 'multiple-choice',
 options: ['200.003', '200.03', '200.3', '203.000'],
 correctAnswer: 0, 
 explanation: 'Two hundred is 200, and three thousandths is 0.003, so the number is 200.003.'
 },
 {
 id: '18',
 text: 'Which is a true statement?',
 type: 'multiple-choice',
 options: ['1.327 > 1.618', '1.443 < 1.389', '1.536 > 1.254', '1.712 < 1.563'],
 correctAnswer: 2, 
 explanation: '5 tenths is greater than 2 tenths, so 1.536 > 1.254.'
 },
 {
 id: '19',
 text: 'What is the value of the digit 5 in 1.59?',
 type: 'multiple-choice',
 options: ['5 tenths', '5 ones', '5 tens', '5 hundredths'],
 correctAnswer: 0, 
 explanation: 'The 5 is in the tenths place.'
 },
 {
 id: '20',
 text: 'When rounded to the nearest tenth, which of the following decimal numbers would round to 9.6?',
 type: 'multiple-choice',
 options: ['9.52', '9.56', '9.67', '9.69'],
 correctAnswer: 1, 
 explanation: '9.56 rounds up to 9.6 because the hundredths digit is 6.'
 },
 {
 id: '21',
 text: 'The picture shows a rectangular garden Jerri and Samantha are planning for their science project. What is the perimeter of the garden? <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['108 ft', '48 ft', '24 ft', '12 ft'],
 correctAnswer: 1, 
 explanation: 'P = 18 + 6 + 18 + 6 = 48 ft.'
 },
 {
 id: '22',
 text: 'Anita and her family drove to Virginia Beach. They left home at 9:15 a.m. They arrived at Virginia Beach at 5:17 p.m. Which of the following is <i>closest</i> to the total time it took them to drive from home to Virginia Beach?',
 type: 'multiple-choice',
 options: ['3 hours, 8 minutes', '4 hours, 2 minutes', '8 hours, 2 minutes', '14 hours, 32 minutes'],
 correctAnswer: 2, 
 explanation: 'From 9:15 a.m. to 5:15 p.m. is 8 hours, plus 2 more minutes, for a total of 8 hours, 2 minutes.'
 },
 {
 id: '23',
 text: 'Which two types of angles are used to form this triangle? <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Acute, obtuse', 'Acute, right', 'Obtuse, acute', 'Obtuse, right'],
 correctAnswer: 1, 
 explanation: 'The triangle has one right angle (shown by the square mark) and two acute angles.'
 },
 {
 id: '24',
 text: 'In which picture is Figure 2 a reflection (flip) of Figure 1 across the dashed line?',
 type: 'multiple-choice',
 options: [
    {url: 'images/25a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A reflection is a mirror image. Each point of Figure 2 is the same distance from the dashed line as the matching point of Figure 1.'
 },
 {
 id: '25',
 text: '<br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The area of the field shown in the picture is 12 —',
 type: 'multiple-choice',
 options: ['square inches', 'pounds', 'square yards', 'meters'],
 correctAnswer: 2, 
 explanation: 'The side lengths are in yards, so the area is 4 × 3 = 12 square yards.'
 },
 {
 id: '26',
 text: 'Which illustration <i>best</i> shows <span style="text-decoration: overline;"><i>MN</i></span> as the radius of the circle?',
 type: 'multiple-choice',
 options: [
    {url: 'images/27a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'A radius goes from the center of a circle to a point on the circle.'
 },
 {
 id: '27',
 text: 'Meghan measured the mass of an object in grams. Meghan <i>most likely</i> measured a —',
 type: 'multiple-choice',
 options: ['car', 'chair', 'desk', 'pencil'],
 correctAnswer: 3, 
 explanation: 'Grams are used to measure the mass of light objects, such as a pencil.'
 },
 {
 id: '28',
 text: 'The picture shows six points on a grid. <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which three points can be connected to form a right angle?',
 type: 'multiple-choice',
 options: ['Points <i>T</i>, <i>L</i>, and <i>N</i>', 'Points <i>L</i>, <i>P</i>, and <i>T</i>', 'Points <i>N</i>, <i>O</i>, and <i>P</i>', 'Points <i>M</i>, <i>O</i>, and <i>P</i>'],
 correctAnswer: 3, 
 explanation: 'M and O are on the same horizontal line, and O and P are on the same vertical line, so they form a right angle at O.'
 },
 {
 id: '29',
 text: 'The picture below shows all the faces of a solid. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which solid could be formed by the faces shown?',
 type: 'multiple-choice',
 options: [
    {url: 'images/30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'One square face and four triangular faces form a square pyramid.'
 },
 {
 id: '30',
 text: '<br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>When section 3 is removed from the parallelogram shown, which of the following <i>best</i> describes the new figure?',
 type: 'multiple-choice',
 options: ['Kite', 'Rhombus', 'Trapezoid', 'Rectangle'],
 correctAnswer: 2, 
 explanation: 'Removing section 3 leaves a figure with exactly one pair of parallel sides, which is a trapezoid.'
 },
 {
 id: '31',
 text: 'Which appears to show two congruent shapes?',
 type: 'multiple-choice',
 options: [
    {url: 'images/32a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Congruent shapes have the same size and shape.'
 },
 {
 id: '32',
 text: 'Joe wants to do something fun this weekend. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which diagram shows all possible combinations Joe has if he picks 1 event and 1 day from the chart?',
 type: 'multiple-choice',
 options: [
    {url: 'images/33a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Each of the 2 events must branch to all 3 days, for 2 × 3 = 6 combinations.'
 },
 {
 id: '33',
 text: 'Celeste has a 12-sided solid with sides numbered 1 through 12. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the probability that she will roll a 4, 5, or 6 on the first roll?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: '3 of the 12 sides are 4, 5, or 6, so the probability is <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '34',
 text: 'The stem-and-leaf plot shows the grades some students in Mr. Castillo’s class earned on their last math quiz. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on data in the stem-and-leaf plot, what is the total number of students who earned a grade of 70 or higher on their last math quiz?',
 type: 'multiple-choice',
 options: ['3', '6', '9', '12'],
 correctAnswer: 3, 
 explanation: 'Count the leaves for stems 7, 8, and 9: 6 + 4 + 2 = 12 students.'
 },
 {
 id: '35',
 text: 'Mr. Copeland made a chart to display the number of each kind of prize he had in his prize box. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the mode of the numbers in the chart?',
 type: 'multiple-choice',
 options: ['7', '10', '12', '15'],
 correctAnswer: 0, 
 explanation: 'The mode is the number that appears most often. 7 appears twice.'
 },
 {
 id: '36',
 text: 'Students in Mr. Malone’s class voted for their one favorite sea animal. The results are shown below. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The greatest difference in the number of votes received was between the —',
 type: 'multiple-choice',
 options: ['Giant Squid and Shark', 'Sea Lion and Whale', 'Giant Squid and Whale', 'Dolphin and Shark'],
 correctAnswer: 3, 
 explanation: 'Dolphin had the fewest votes (3) and Shark had the most (7), so the greatest difference is 7 − 3 = 4.'
 },
 {
 id: '37',
 text: 'Pieces of paper numbered 1 through 31 are in a bag. Sal drew a piece of paper from the bag without looking. Which question could be answered using probability?',
 type: 'multiple-choice',
 options: ['How many odd numbers are written on the pieces of paper?', 'Is the number Sal drew from the bag likely to be less than 10?', 'How many pieces of paper are in the bag before any are drawn out?', 'After Sal drew a piece of paper from the bag, how many pieces were left?'],
 correctAnswer: 1, 
 explanation: 'Probability describes how likely an outcome is.'
 },
 {
 id: '38',
 text: 'The chart shows the number of each color of counting chip Mr. Kellas placed in an empty box. All the chips were the same size and shape. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Ross is going to take 4 counting chips out of the box without looking. Which combination of counting chips could Ross take from the box?',
 type: 'multiple-choice',
 options: ['2 purple, 2 white', '2 red, 2 yellow', '1 white, 3 purple', '3 green, 1 yellow'],
 correctAnswer: 2, 
 explanation: 'There is only 1 white, 1 yellow, and 2 green chips, so only 1 white and 3 purple is possible.'
 },
 {
 id: '39',
 text: 'Peggy spins the arrow on the spinner shown. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the probability that the arrow will point to the section containing hearts on the first try?',
 type: 'multiple-choice',
 options: ['1 out of 3', '1 out of 4', '3 out of 4', '3 out of 24'],
 correctAnswer: 1, 
 explanation: 'The spinner has 4 equal sections and 1 contains hearts, so the probability is 1 out of 4.'
 },
 {
 id: '40',
 text: 'Which of the following can be solved using the open sentence <i>s</i> − 6 = ☐?',
 type: 'multiple-choice',
 options: ['Pablo has 6 more vacation days than Sandra. If <i>s</i> represents the number of vacation days Sandra has, how many vacation days does Pablo have?', 'Pablo has 6 times more vacation days than Sandra. If <i>s</i> represents the number of vacation days Sandra has, how many vacation days does Pablo have?', 'Pablo has 6 fewer vacation days than Sandra. If <i>s</i> represents the number of vacation days Sandra has, how many vacation days does Pablo have?', 'Sandra has 6 times more vacation days than Pablo. If <i>s</i> represents the number of vacation days Sandra has, how many vacation days does Pablo have?'],
 correctAnswer: 2, 
 explanation: '6 fewer than <i>s</i> is <i>s</i> − 6.'
 },
 {
 id: '41',
 text: 'Which represents the unknown value in the following statement? <br><i>d</i> ÷ 2 = 11',
 type: 'multiple-choice',
 options: ['<i>d</i>', '÷', '2', '11'],
 correctAnswer: 0, 
 explanation: 'The letter <i>d</i> is the variable that represents the unknown value.'
 },
 {
 id: '42',
 text: 'What is the missing number in the following numerical pattern? <br>9, 13, 17, 21, 25, ___, 33',
 type: 'multiple-choice',
 options: ['27', '29', '31', '37'],
 correctAnswer: 1, 
 explanation: 'The rule is add 4: 25 + 4 = 29.'
 },
 {
 id: '43',
 text: 'A number machine uses a rule to change numbers. The table shows the results. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which could be the rule the number machine used?',
 type: 'multiple-choice',
 options: ['<i>k</i> ÷ 12 = <i>m</i>', '<i>k</i> × 12 = <i>m</i>', '<i>k</i> − 12 = <i>m</i>', '<i>k</i> + 12 = <i>m</i>'],
 correctAnswer: 3, 
 explanation: '2 + 12 = 14, 5 + 12 = 17, 7 + 12 = 19, and 11 + 12 = 23. The rule is <i>k</i> + 12 = <i>m</i>.'
 },
 {
 id: '44',
 text: 'Terry ate 3 fewer pretzels than Susan. If <i>p</i> represents the number of pretzels Susan ate, which could be used to determine the number of pretzels Terry ate?',
 type: 'multiple-choice',
 options: ['<i>p</i> + 3 = ☐', '<i>p</i> − 3 = ☐', '<i>p</i> × 3 = ☐', '<i>p</i> ÷ 3 = ☐'],
 correctAnswer: 1, 
 explanation: '3 fewer than <i>p</i> is <i>p</i> − 3.'
 },
 {
 id: '45',
 text: 'Paula and John played a number game. When Paula said a number, John used a rule to find the number he would reply. The pictures show what happened. <br><img src="images/46.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following could be the rule John used?',
 type: 'multiple-choice',
 options: ['Add 8', 'Add 50', 'Multiply by 3', 'Multiply by 5'],
 correctAnswer: 2, 
 explanation: '4 × 3 = 12, 5 × 3 = 15, 9 × 3 = 27, and 25 × 3 = 75. The rule is multiply by 3.'
 },
 {
 id: '46',
 text: 'What is the 5th shape in the pattern? <br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/47a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/47b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/47c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/47d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Each shape has one fewer side than the shape before it: 8, 7, 6, 5, then 4 sides (a square), then 3 sides.'
 },
 {
 id: '47',
 text: 'Nick is paid $6.00 per hour, and last week he earned $150.00. What does the <i>x</i> represent in the equation 6<i>x</i> = 150?',
 type: 'multiple-choice',
 options: ['The number of days Nick worked last week', 'The number of hours Nick worked last week', 'The number of days Nick worked last month', 'The number of hours Nick worked yesterday'],
 correctAnswer: 1, 
 explanation: '$6 per hour times the number of hours worked equals $150, so <i>x</i> is the number of hours Nick worked last week.'
 },
 {
 id: '48',
 text: 'William’s age is 9 times Susan’s age. If Susan’s age is <i>s</i>, which expression <i>best</i> represents William’s age?',
 type: 'multiple-choice',
 options: ['9 × <i>s</i>', '9 + <i>s</i>', '<i>s</i> − 9', '<i>s</i> ÷ 9'],
 correctAnswer: 0, 
 explanation: '9 times Susan’s age is 9 × <i>s</i>.'
 },
 {
 id: '49',
 text: 'Which of these could be solved by using the open sentence 6 + <i>z</i> = 12?',
 type: 'multiple-choice',
 options: ['Fred caught 6 fish every day for 12 days. How many fish did he catch all together?', 'Fred caught 6 fish before lunch. He caught 12 more after lunch. What was the total number of fish he caught?', 'Fred caught 6 fish before lunch. He caught more fish after lunch. At the end of the day, he had 12 fish. How many fish did he catch after lunch?', 'Fred caught 12 fish. He put them in 6 bags. If each bag had the same number of fish, how many fish were in each bag?'],
 correctAnswer: 2, 
 explanation: '6 fish plus an unknown number <i>z</i> equals 12 fish.'
 }
];

// Scaled Score Mapping for Grade 5 Mathematics (2009)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 6,
  2: 64,
  3: 98,
  4: 124,
  5: 144,
  6: 161,
  7: 176,
  8: 189,
  9: 201,
  10: 213,
  11: 223,
  12: 233,
  13: 242,
  14: 251,
  15: 259,
  16: 268,
  17: 276,
  18: 283,
  19: 291,
  20: 298,
  21: 306,
  22: 313,
  23: 320,
  24: 327,
  25: 334,
  26: 341,
  27: 348,
  28: 355,
  29: 363,
  30: 370,
  31: 377,
  32: 385,
  33: 393,
  34: 400,
  35: 409,
  36: 417,
  37: 426,
  38: 435,
  39: 445,
  40: 455,
  41: 466,
  42: 478,
  43: 491,
  44: 506,
  45: 523,
  46: 543,
  47: 568,
  48: 600,
  49: 600,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 21 of the released test required measuring with a physical protractor and was removed.
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

// Independent Results Manager for Grade 5 Math
(function() {
  'use strict';
  
  console.log(`Grade 5 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 5 Math`);
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
        testType: 'Grade 5 Mathematics (2009)'
      };
      
      console.log(`Saving Grade 5 Math result: ${rawScore}/${sampleQuestions.length} → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 5 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 5 Mathematics (2009)';
        updated = true;
        console.log(`Enhanced Grade 5 Math result ${index + 1}: ${result.rawScore}/${sampleQuestions.length} → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 5 Math results saved');
      
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
            testType: 'Grade 5 Mathematics (2009)'
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
    console.log('Initializing Grade 5 Math independent results system');
    
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
    
    console.log('Grade 5 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();