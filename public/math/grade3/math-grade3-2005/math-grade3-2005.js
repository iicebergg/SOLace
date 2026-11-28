window.TEST_IDENTIFIER = 'math_grade3_2005';

const sampleQuestions = [
 {
 id: '1',
 text: 'Last month, 104,629 people went to the circus. What is the value of the 6 in 104,629? <br><img src="images/1.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['6', '60', '600', '6,000'],
 correctAnswer: 2, 
 explanation: 'The 6 is in the hundreds place, so its value is 600.'
 },
 {
 id: '2',
 text: 'Ellen counted 66 railroad cars in a train. <br><img src="images/2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is 66 rounded to the nearest ten?',
 type: 'multiple-choice',
 options: ['50', '60', '70', '80'],
 correctAnswer: 2, 
 explanation: '66 is between 60 and 70. The ones digit is 6, which is 5 or more, so 66 rounds up to 70.'
 },
 {
 id: '3',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['1,204 is less than 1,204', '3,893 is greater than 3,793', '2,687 is less than 2,675', '4,312 is greater than 4,328'],
 correctAnswer: 1, 
 explanation: '3,893 and 3,793 both have 3 thousands. 8 hundreds is more than 7 hundreds, so 3,893 is greater than 3,793.'
 },
 {
 id: '4',
 text: 'Mike\'s math teacher gave him the clue, 8 + 6 = 14, to help him solve a related problem. Which could be the problem Mike is trying to solve?',
 type: 'multiple-choice',
 options: ['14 − ___ = 8', '8 × ___ = 48', '6 ÷ ___ = 2', '14 + ___ = 20'],
 correctAnswer: 0, 
 explanation: 'Addition and subtraction are related. Since 8 + 6 = 14, it is also true that 14 − 6 = 8.'
 },
 {
 id: '5',
 text: '<br><img src="images/5.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What fraction of the circles is shaded?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>5</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>9</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'There are 9 circles and 4 of them are shaded, so <math><mfrac><mn>4</mn><mn>9</mn></mfrac></math> of the circles are shaded.'
 },
 {
 id: '6',
 text: 'Last year, 345,129 people watched a parade. <br><img src="images/6.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following shows 345,129 written in words?',
 type: 'multiple-choice',
 options: ['Three thousand, four hundred twenty-nine', 'Three hundred forty-five, one hundred twenty-nine', 'Three thousand forty-five, one hundred twenty-nine', 'Three hundred forty-five thousand, one hundred twenty-nine'],
 correctAnswer: 3, 
 explanation: '345,129 has 345 thousands and 129 ones: three hundred forty-five thousand, one hundred twenty-nine.'
 },
 {
 id: '7',
 text: 'Which group shows <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> of the dogs with spots?',
 type: 'multiple-choice',
 options: [
    {url: 'images/7a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/7b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/7c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/7d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> means 3 out of 4. Group D has 4 dogs, and 3 of them have spots.'
 },
 {
 id: '8',
 text: 'The figure below represents 1 pie. <br><img src="images/8-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which number is represented by the model below? <br><img src="images/8-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['0.66', '0.76', '6.6', '7.6'],
 correctAnswer: 2, 
 explanation: 'There are 6 whole pies and 6 of 10 pieces of another pie, which is 6 and <math><mfrac><mn>6</mn><mn>10</mn></mfrac></math>, or 6.6.'
 },
 {
 id: '9',
 text: '<br><img src="images/9.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which figure has LESS THAN <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> shaded?',
 type: 'multiple-choice',
 options: ['1', '2', '3', '4'],
 correctAnswer: 3, 
 explanation: 'Figure 4 has only 1 of its 4 equal parts shaded, which is <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>. <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> is less than <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '10',
 text: '<br><img src="images/10.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Connie put 4 apples in each basket. How many apples did she use altogether?',
 type: 'multiple-choice',
 options: ['12', '16', '38', '48'],
 correctAnswer: 3, 
 explanation: 'There are 12 baskets with 4 apples each: 12 × 4 = 48 apples.'
 },
 {
 id: '11',
 text: 'Karl wrote a book report that had 525 words. <br><img src="images/11.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is 525 rounded to the nearest hundred?',
 type: 'multiple-choice',
 options: ['500', '520', '530', '600'],
 correctAnswer: 0, 
 explanation: '525 is between 500 and 600. The tens digit is 2, which is less than 5, so 525 rounds down to 500.'
 },
 {
 id: '12',
 text: 'The model below is shaded to represent the number 1. <br><img src="images/12-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which number is represented by the shaded portion of the model below? <br><img src="images/12-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['0.72', '7.2', '72', '720'],
 correctAnswer: 0, 
 explanation: '72 of the 100 small squares are shaded, which is <math><mfrac><mn>72</mn><mn>100</mn></mfrac></math>, or 0.72.'
 },
 {
 id: '13',
 text: 'Nancy will decorate exactly <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> of the eggs below. <br><img src="images/13.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following groups shows how many of the eggs she will decorate?',
 type: 'multiple-choice',
 options: [
    {url: 'images/13a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/13b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/13c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/13d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'There are 12 eggs. Half of 12 is 6, so she will decorate 6 eggs.'
 },
 {
 id: '14',
 text: '9 × 9 = ___',
 type: 'multiple-choice',
 options: ['18', '36', '63', '81'],
 correctAnswer: 3, 
 explanation: '9 × 9 = 81.'
 },
 {
 id: '15',
 text: 'The table shows the number of rocks each student collected during a field trip. <br><img src="images/15.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many more rocks did Su collect than Anna?',
 type: 'multiple-choice',
 options: ['5', '7', '10', '11'],
 correctAnswer: 0, 
 explanation: 'Su collected 20 rocks and Anna collected 15. 20 − 15 = 5 more rocks.'
 },
 {
 id: '16',
 text: 'Last year, there were exactly 2,467 students attending Lee Elementary School. This year, there are 310 more students attending the school. How many students are attending Lee Elementary School this year?',
 type: 'multiple-choice',
 options: ['5,567', '5,477', '2,777', '2,157'],
 correctAnswer: 2, 
 explanation: '2,467 + 310 = 2,777 students.'
 },
 {
 id: '17',
 text: '3.9 − 2.8 = ___',
 type: 'multiple-choice',
 options: ['0.9', '1.1', '1.9', '11'],
 correctAnswer: 1, 
 explanation: 'Line up the decimal points and subtract: 3.9 − 2.8 = 1.1.'
 },
 {
 id: '18',
 text: 'Which number sentence is in the same family of facts as 8 + 5 = 13?',
 type: 'multiple-choice',
 options: ['13 + 8 = 21', '5 + 13 = 18', '13 − 5 = 8', '8 − 5 = 3'],
 correctAnswer: 2, 
 explanation: 'The fact family for 8 + 5 = 13 uses the numbers 8, 5, and 13. 13 − 5 = 8 is in this fact family.'
 },
 {
 id: '19',
 text: '49 ÷ 7 = ___',
 type: 'multiple-choice',
 options: ['6', '7', '8', '9'],
 correctAnswer: 1, 
 explanation: '7 × 7 = 49, so 49 ÷ 7 = 7.'
 },
 {
 id: '20',
 text: 'Which of the area models shown below BEST represents 3 × 10?',
 type: 'multiple-choice',
 options: [
    {url: 'images/20a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: '3 × 10 can be shown as 3 rows with 10 squares in each row. Choice J shows 3 rows of 10.'
 },
 {
 id: '21',
 text: 'What is <br><img src="images/21.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>9</mn><mn>20</mn></mfrac></math>', '<math><mfrac><mn>9</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>9</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>9</mn><mn>1</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math> + <math><mfrac><mn>2</mn><mn>10</mn></mfrac></math> = <math><mfrac><mn>9</mn><mn>10</mn></mfrac></math>. When the denominators are the same, add the numerators.'
 },
 {
 id: '22',
 text: '<br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Dan fed 4 dolphins. Each dolphin ate 28 fish. How many fish did the dolphins eat all together?',
 type: 'multiple-choice',
 options: ['832', '112', '82', '32'],
 correctAnswer: 1, 
 explanation: '4 × 28 = 112 fish.'
 },
 {
 id: '23',
 text: 'Last year, students collected 2,195 pounds of paper. This year\'s students collected 1,681 pounds more than last year\'s students. What was the total amount of paper collected by this year\'s students?',
 type: 'multiple-choice',
 options: ['514 pounds', '1,514 pounds', '3,776 pounds', '3,876 pounds'],
 correctAnswer: 3, 
 explanation: '2,195 + 1,681 = 3,876 pounds.'
 },
 {
 id: '24',
 text: '21.3 + 15.9 = ___',
 type: 'multiple-choice',
 options: ['36.2', '37.2', '37.6', '47.2'],
 correctAnswer: 1, 
 explanation: 'Line up the decimal points and add: 21.3 + 15.9 = 37.2.'
 },
 {
 id: '25',
 text: 'Look at the figure shown below. <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following would complete the figure so that it has a line of symmetry?',
 type: 'multiple-choice',
 options: [
    {url: 'images/25a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The missing half must be a mirror image of the figure across the dashed line. Choice A is the mirror image.'
 },
 {
 id: '26',
 text: 'Which is CLOSEST to the amount of water Peter\'s glass will hold when full? <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['2 gallons', '2 pints', '2 quarts', '2 cups'],
 correctAnswer: 3, 
 explanation: 'A drinking glass holds a small amount of water, about 2 cups. Gallons, quarts, and pints are much larger.'
 },
 {
 id: '27',
 text: 'The clock below shows the time when David finished his reading test. <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following clocks shows the same time as the clock above?',
 type: 'multiple-choice',
 options: [
    {url: 'images/27a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: '1:51 means the hour hand is almost at 2 and the minute hand points to the 10 (50 minutes) plus 1 more minute. Clock B shows this time.'
 },
 {
 id: '28',
 text: 'What is the total value of the money shown below? <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['$3.61', '$3.90', '$4.75', '$5.00'],
 correctAnswer: 3, 
 explanation: '3 dollar bills ($3.00) + 5 quarters ($1.25) + 6 dimes ($0.60) + 1 nickel ($0.05) + 10 pennies ($0.10) = $5.00.'
 },
 {
 id: '29',
 text: '<br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Sarah\'s birthday is on the third Sunday in August. When is her birthday?',
 type: 'multiple-choice',
 options: ['August 3', 'August 14', 'August 21', 'August 28'],
 correctAnswer: 2, 
 explanation: 'The Sundays in August are the 7th, 14th, 21st, and 28th. The third Sunday is August 21.'
 },
 {
 id: '30',
 text: 'Adam spent exactly 60 minutes at the library. How many hours did he spend at the library?',
 type: 'multiple-choice',
 options: ['1', '2', '3', '4'],
 correctAnswer: 0, 
 explanation: 'There are 60 minutes in 1 hour.'
 },
 {
 id: '31',
 text: 'How many FACES does the figure shown below have? <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['3', '4', '6', '8'],
 correctAnswer: 2, 
 explanation: 'The figure is a cube. A cube has 6 faces.'
 },
 {
 id: '32',
 text: 'You can draw on the grid to help find the answer. <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Three of the points on the grid above can be connected to make one line segment. Which three points are they?',
 type: 'multiple-choice',
 options: ['Points <i>A, B,</i> and <i>D</i>', 'Points <i>A, B,</i> and <i>E</i>', 'Points <i>C, D,</i> and <i>E</i>', 'Points <i>B, C,</i> and <i>D</i>'],
 correctAnswer: 0, 
 explanation: 'From A to B to D, each step moves 2 units right and 1 unit down, so points A, B, and D lie on one straight line.'
 },
 {
 id: '33',
 text: 'Which thermometer shows 72° Fahrenheit?',
 type: 'multiple-choice',
 options: [
    {url: 'images/33a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: '72° is 2 degrees above 70°. The thermometer in choice C is filled to just above the 70° mark.'
 },
 {
 id: '34',
 text: 'Which piece of dot paper shows two figures that are the same size and shape?',
 type: 'multiple-choice',
 options: [
    {url: 'images/34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Choice J shows two rectangles that are each 1 unit by 2 units. They are the same size and shape, just turned differently.'
 },
 {
 id: '35',
 text: 'This is 1 cube. <br><img src="images/35-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many of these cubes are needed to make the group shown below? <br><img src="images/35-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['23', '21', '18', '15'],
 correctAnswer: 3, 
 explanation: 'The group has 5 rows of 3 cubes: 5 × 3 = 15 cubes.'
 },
 {
 id: '36',
 text: 'The picture graph below shows the number of apples four friends picked on Saturday. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Who picked exactly 50 apples?',
 type: 'multiple-choice',
 options: ['Marcel', 'Rebecca', 'Angelo', 'Joyce'],
 correctAnswer: 1, 
 explanation: 'Each apple stands for 10 apples. 50 ÷ 10 = 5 symbols, and Rebecca has 5 symbols.'
 },
 {
 id: '37',
 text: 'The list below shows the height in inches of each student in Monika\'s class. <br>45, 48, 46, 47, 45, 50, 45, 46, 46, 51, 48, 48, 46 <br>Which of the following shows this data correctly plotted?',
 type: 'multiple-choice',
 options: [
    {url: 'images/38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The list has 45 three times, 46 four times, 47 once, 48 three times, 50 once, and 51 once. Line plot G shows these counts.'
 },
 {
 id: '38',
 text: 'Amy has these beads to make a necklace. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which bar graph correctly shows the number of each kind of bead?',
 type: 'multiple-choice',
 options: [
    {url: 'images/39a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Count each kind of bead: 10 square beads, 9 tube beads, 5 oval beads, and 7 diamond beads. Graph B shows these numbers.'
 },
 {
 id: '39',
 text: 'The bar graph below shows the number of hours Richard worked. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many hours did Richard work altogether?',
 type: 'multiple-choice',
 options: ['4', '10', '16', '26'],
 correctAnswer: 3, 
 explanation: 'Add the hours for each week: 5 + 3 + 8 + 10 = 26 hours.'
 },
 {
 id: '40',
 text: 'These rolls of wrapping paper were placed in a basket and mixed up. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Lamont picks 1 roll without looking, what kind of paper is it MOST LIKELY to be?',
 type: 'multiple-choice',
 options: [
    {url: 'images/41a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'There are more rolls with dots (5) than any other kind, so a dotted roll is most likely.'
 },
 {
 id: '41',
 text: 'The picture graph shows the number of 4 different kinds of flowers that a shop used on Saturday. <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many tulips did the shop use?',
 type: 'multiple-choice',
 options: ['6', '16', '60', '66'],
 correctAnswer: 2, 
 explanation: 'Tulips have 6 symbols, and each symbol stands for 10 flowers. 6 × 10 = 60 tulips.'
 },
 {
 id: '42',
 text: 'Mrs. Taft has these flowers and vases to choose from. <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which shows all the possible ways she can combine 1 flower and 1 vase?',
 type: 'multiple-choice',
 options: [
    {url: 'images/43a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Each of the 3 flowers can go in each of the 3 vases, so there are 3 × 3 = 9 combinations. Choice D shows all 9.'
 },
 {
 id: '43',
 text: 'Look at the group of objects below. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is MOST LIKE all the objects in the group?',
 type: 'multiple-choice',
 options: [
    {url: 'images/44a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'All the objects in the group are circles. The black circle in choice J is most like them.'
 },
 {
 id: '44',
 text: 'These notes form a pattern. <br><img src="images/45.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of these shows the same kind of pattern?',
 type: 'multiple-choice',
 options: [
    {url: 'images/45a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/45b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/45c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/45d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The notes show 1 dark note followed by 1, then 2, then 3, then 4 open notes. Choice D follows the same pattern: 1 triangle followed by 1, 2, 3, and then 4 squares.'
 },
 {
 id: '45',
 text: 'Look at the pattern of numbers shown below. <br>70 &nbsp; 65 &nbsp; 60 &nbsp; 55 &nbsp; ___ <br>If the pattern continues decreasing in the same way, what will be the next number?',
 type: 'multiple-choice',
 options: ['60', '50', '45', '40'],
 correctAnswer: 1, 
 explanation: 'Each number is 5 less than the one before: 55 − 5 = 50.'
 },
 {
 id: '46',
 text: 'Look at the objects in the group below. <br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following BEST describes how the things in the group are alike?',
 type: 'multiple-choice',
 options: ['Shape', 'Size', 'Color', 'Weight'],
 correctAnswer: 0, 
 explanation: 'All of the objects are shaped like stars, but they are different sizes and colors.'
 },
 {
 id: '47',
 text: 'Which symbol goes in the ___ to make this sentence true? <br>7 + 2 ___ 4 + 5',
 type: 'multiple-choice',
 options: ['=', '>', '<', '÷'],
 correctAnswer: 0, 
 explanation: '7 + 2 = 9 and 4 + 5 = 9. The two sides are equal, so the symbol is =.'
 },
 {
 id: '48',
 text: 'The table below shows the prices of different numbers of oranges at a fruit stand. <br><img src="images/49.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern in the table continues, what will be the price of 9 oranges?',
 type: 'multiple-choice',
 options: ['50¢', '56¢', '63¢', '70¢'],
 correctAnswer: 2, 
 explanation: 'Each orange costs 7¢, so 9 oranges cost 9 × 7¢ = 63¢.'
 },
 {
 id: '49',
 text: 'Leonard is stringing beads in the pattern shown. The pattern is formed by repeating the first eight beads over and over. <br><img src="images/50.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Leonard continues the pattern in the same way, what should be the next two beads he adds to the string?',
 type: 'multiple-choice',
 options: [
    {url: 'images/50a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The first eight beads are gray oval, diamond, striped oval, square, dark oval, diamond, white oval, diamond. The string ends with a white oval after a dark oval and a diamond, so the next two beads are a diamond and then a gray oval.'
 }
];

// Scaled Score Mapping for Grade 3 Mathematics (2005)
// No raw-to-scaled score table was released with this test, so the Grade 3 Mathematics (2007)
// table is used as an approximation. It maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 84,
  2: 129,
  3: 156,
  4: 176,
  5: 192,
  6: 205,
  7: 216,
  8: 226,
  9: 236,
  10: 244,
  11: 252,
  12: 260,
  13: 267,
  14: 274,
  15: 280,
  16: 287,
  17: 293,
  18: 299,
  19: 304,
  20: 310,
  21: 316,
  22: 321,
  23: 327,
  24: 332,
  25: 338,
  26: 343,
  27: 349,
  28: 354,
  29: 360,
  30: 366,
  31: 371,
  32: 377,
  33: 383,
  34: 389,
  35: 396,
  36: 402,
  37: 409,
  38: 416,
  39: 424,
  40: 432,
  41: 440,
  42: 450,
  43: 460,
  44: 471,
  45: 485,
  46: 500,
  47: 520,
  48: 547,
  49: 592,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 36 of the released test required measuring with a physical ruler and was removed.
  // Scale the raw score to the 50 questions of the score table before converting.
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

// Independent Results Manager for Grade 3 Math
(function() {
  'use strict';
  
  console.log(`Grade 3 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 3 Math`);
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
        testType: 'Grade 3 Mathematics (2005)'
      };
      
      console.log(`Saving Grade 3 Math result: ${rawScore}/${sampleQuestions.length} → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 3 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 3 Mathematics (2005)';
        updated = true;
        console.log(`Enhanced Grade 3 Math result ${index + 1}: ${result.rawScore}/${sampleQuestions.length} → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 3 Math results saved');
      
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
            testType: 'Grade 3 Mathematics (2005)'
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
    console.log('Initializing Grade 3 Math independent results system');
    
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
    
    console.log('Grade 3 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();