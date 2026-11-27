window.TEST_IDENTIFIER = 'math_grade3_2009';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which number is LESS THAN 8,243?',
 type: 'multiple-choice',
 options: ['8,541', '9,130', '8,029', '9,042'],
 correctAnswer: 2, 
 explanation: 'Compare the hundreds digits of the numbers with 8 thousands: 8,029 has 0 hundreds, which is less than the 2 hundreds in 8,243.'
 },
 {
 id: '2',
 text: 'This model is shaded to represent the number 1. <br><img src="images/2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which model is shaded to represent 0.34?',
 type: 'multiple-choice',
 options: [
    {url: 'images/2a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/2b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/2c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/2d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: '0.34 means 34 out of 100 squares: 3 full columns of ten and 4 more squares.'
 },
 {
 id: '3',
 text: 'This is a whole pizza. <br><img src="images/3-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Carol ate 1 piece of pizza. <br><img src="images/3-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What fraction of the pizza did Carol eat?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>7</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'The pizza has 8 equal pieces and Carol ate 1 of them, so she ate <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> of the pizza.'
 },
 {
 id: '4',
 text: 'Hat Mountain is a volcanic peak in California that rises to a height of 7,693 feet. What is 7,693 rounded to the nearest thousand?',
 type: 'multiple-choice',
 options: ['8,000', '7,700', '7,000', '6,000'],
 correctAnswer: 0, 
 explanation: 'The hundreds digit is 6, so round up: 7,693 rounds to 8,000.'
 },
 {
 id: '5',
 text: 'What is the value of the 4 in this number? <br>784,312',
 type: 'multiple-choice',
 options: ['Four thousand', 'Forty thousand', 'Four hundred thousand', 'Forty hundred thousand'],
 correctAnswer: 0, 
 explanation: 'The 4 is in the thousands place, so its value is four thousand.'
 },
 {
 id: '6',
 text: 'This model is shaded to show 1 whole. <br><img src="images/6-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Look at the shaded parts of the model below. What mixed number is shown? <br><img src="images/6-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>', '1 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>6</mn></mfrac></math>', '1 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'One whole circle is shaded, plus 1 of the 3 parts of the second circle, so the model shows 1 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>.'
 },
 {
 id: '7',
 text: 'This model is shaded to represent 1 whole. <br><img src="images/7-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which number is represented by the shaded part of the following model? <br><img src="images/7-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['2.70', '2.07', '0.72', '0.27'],
 correctAnswer: 0, 
 explanation: 'Two whole grids are shaded (2), and 7 columns of the third grid are shaded (0.70), so the model shows 2.70.'
 },
 {
 id: '8',
 text: 'Ramon had two groups of snap cubes built like the ones shown. <br><img src="images/8.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>He wrote 8 + 6 = 14 to describe the snap cubes. Which number sentence is NOT related to 8 + 6 = 14?',
 type: 'multiple-choice',
 options: ['8 − 6 = 2', '6 + 8 = 14', '14 − 8 = 6', '14 − 6 = 8'],
 correctAnswer: 0, 
 explanation: 'Related facts use the same three numbers, 6, 8, and 14. 8 − 6 = 2 does not use 14, so it is not related.'
 },
 {
 id: '9',
 text: 'Jacob made a design with stripes on <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math> of the squares. Which design could Jacob have made?',
 type: 'multiple-choice',
 options: [
    {url: 'images/9a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/9b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/9c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/9d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Each design has 10 squares. Find the design with exactly 3 striped squares.'
 },
 {
 id: '10',
 text: 'The picture shows the tools hanging on the wall in Mrs. Jenson’s garage. <br><img src="images/10.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which tool is second from the right?',
 type: 'multiple-choice',
 options: [
    {url: 'images/10a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/10b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/10c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/10d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Start at the right end of the picture and count two tools to the left.'
 },
 {
 id: '11',
 text: 'Each figure below is shaded to represent a fraction. Which statement is true?',
 type: 'multiple-choice',
 options: [
    {url: 'images/11a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/11b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/11c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/11d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> is the same as <math><mfrac><mn>6</mn><mn>8</mn></mfrac></math>. Only <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> > <math><mfrac><mn>4</mn><mn>8</mn></mfrac></math> is true.'
 },
 {
 id: '12',
 text: 'Which of the following is a true statement?',
 type: 'multiple-choice',
 options: ['1,207 < 1,346', '1,346 < 893', '786 > 893', '677 > 786'],
 correctAnswer: 0, 
 explanation: '1,207 and 1,346 both have 1 thousand. 2 hundreds is less than 3 hundreds, so 1,207 < 1,346.'
 },
 {
 id: '13',
 text: 'In one year, five cows can produce about one hundred sixty-four thousand, two hundred thirty glasses of milk. Which of the following represents this number?',
 type: 'multiple-choice',
 options: ['164,213', '164,230', '1,604,213', '1,604,230'],
 correctAnswer: 1, 
 explanation: 'One hundred sixty-four thousand is 164,000 and two hundred thirty is 230, so the number is 164,230.'
 },
 {
 id: '14',
 text: 'This figure represents one sticker on a page. <br><img src="images/14.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is the greatest number of stickers that will BEST fit on this page without touching each other?',
 type: 'multiple-choice',
 options: ['3', '30', '300', '3,000'],
 correctAnswer: 1, 
 explanation: 'Estimate how many stickers the size of the one shown could fit on the page without touching. About 30 will fit.'
 },
 {
 id: '15',
 text: 'During a U.S. election in 1824, the people of Virginia voted for one out of four men. <br><img src="images/15.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>According to the table, how many more votes did William H. Crawford receive than John Q. Adams?',
 type: 'multiple-choice',
 options: ['11,977', '11,967', '5,141', '5,139'],
 correctAnswer: 3, 
 explanation: '8,558 − 3,419 = 5,139 more votes.'
 },
 {
 id: '16',
 text: '7 × 8 = ☐',
 type: 'multiple-choice',
 options: ['15', '49', '54', '56'],
 correctAnswer: 3, 
 explanation: '7 × 8 = 56.'
 },
 {
 id: '17',
 text: 'This model is shaded to show 1 whole. <br><img src="images/17-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Below are two models. Each model is shaded to show a fraction. <br><img src="images/17-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The fractions are added. Which model is shaded to show the sum?',
 type: 'multiple-choice',
 options: [
    {url: 'images/17a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Model 1 shows <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math> and Model 2 shows <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math>. <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math> + <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>, so the model with 5 of 6 parts shaded shows the sum.'
 },
 {
 id: '18',
 text: 'This is one. <br><img src="images/18-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>This is one-tenth. <br><img src="images/18-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is 5.4 + 2.3 as shown? <br><img src="images/18-3.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['3.1', '7.3', '7.7', '8.7'],
 correctAnswer: 2, 
 explanation: '5 + 2 = 7 ones and 4 + 3 = 7 tenths, so 5.4 + 2.3 = 7.7.'
 },
 {
 id: '19',
 text: 'What number makes this number sentence true? <br>☐ × 4 = 36',
 type: 'multiple-choice',
 options: ['8', '9', '32', '40'],
 correctAnswer: 1, 
 explanation: '9 × 4 = 36, so the missing number is 9.'
 },
 {
 id: '20',
 text: 'Martina always uses 4 tacks to hang a picture on the art wall in her classroom. <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Exactly how many pictures can she hang using the 12 tacks shown?',
 type: 'multiple-choice',
 options: ['3', '4', '6', '12'],
 correctAnswer: 0, 
 explanation: '12 ÷ 4 = 3 pictures.'
 },
 {
 id: '21',
 text: '12.8 + 1.9 = ☐',
 type: 'multiple-choice',
 options: ['3.18', '13.7', '14.7', '31.8'],
 correctAnswer: 2, 
 explanation: 'Line up the decimal points and add: 12.8 + 1.9 = 14.7.'
 },
 {
 id: '22',
 text: 'Steve bought a package with 5 sheets of stickers in it. Each sheet had 32 stickers. What was the total number of stickers Steve bought?',
 type: 'multiple-choice',
 options: ['37', '160', '180', '1,510'],
 correctAnswer: 1, 
 explanation: '5 × 32 = 160 stickers.'
 },
 {
 id: '23',
 text: 'On Monday, 497 donuts were sold at a bakery. On Tuesday, 354 donuts were sold. What is the total number of donuts sold at the bakery on those two days?',
 type: 'multiple-choice',
 options: ['43', '143', '741', '851'],
 correctAnswer: 3, 
 explanation: '497 + 354 = 851 donuts.'
 },
 {
 id: '24',
 text: 'There were 12 puppies on a farm. If 8 of the puppies were brown and the rest were spotted, how many of the 12 puppies were spotted?',
 type: 'multiple-choice',
 options: ['20', '16', '8', '4'],
 correctAnswer: 3, 
 explanation: '12 − 8 = 4 spotted puppies.'
 },
 {
 id: '25',
 text: 'Which two shapes in this picture appear to be congruent? <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['L and M', 'M and P', 'Q and N', 'M and N'],
 correctAnswer: 3, 
 explanation: 'Congruent shapes have the same size and shape. The small triangles M and N appear to be congruent.'
 },
 {
 id: '26',
 text: 'Look at the table. <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the total value of the coins in Mike’s pocket?',
 type: 'multiple-choice',
 options: ['$1.78', '$1.73', '$1.58', '$1.38'],
 correctAnswer: 2, 
 explanation: '4 quarters = $1.00, 4 dimes = $0.40, 3 nickels = $0.15, and 3 pennies = $0.03. The total is $1.58.'
 },
 {
 id: '27',
 text: 'How many minutes are equal to two hours?',
 type: 'multiple-choice',
 options: ['20 minutes', '100 minutes', '120 minutes', '200 minutes'],
 correctAnswer: 2, 
 explanation: 'There are 60 minutes in 1 hour, so 2 hours = 60 + 60 = 120 minutes.'
 },
 {
 id: '28',
 text: 'Which is CLOSEST to the length of the spider pictured? <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['1 centimeter', '1.5 centimeters', '2 centimeters', '2.5 centimeters'],
 correctAnswer: 0, 
 explanation: 'Use a centimeter ruler to measure the line segment below the spider.'
 },
 {
 id: '29',
 text: 'Which figure has EXACTLY three corners and three sides?',
 type: 'multiple-choice',
 options: [
    {url: 'images/29a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A triangle has exactly three corners and three sides.'
 },
 {
 id: '30',
 text: 'Which thermometer pictured shows a temperature closest to 57°F?',
 type: 'multiple-choice',
 options: [
    {url: 'images/30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: '57°F is a little below 60°F. Find the thermometer whose reading is between 55° and 60°, closest to 57°.'
 },
 {
 id: '31',
 text: 'Miss Jensen ordered a sweater on May 6. The sweater arrived exactly 10 days later. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>On what date did the sweater arrive?',
 type: 'multiple-choice',
 options: ['May 4', 'May 10', 'May 15', 'May 16'],
 correctAnswer: 3, 
 explanation: 'Count 10 days after May 6: 6 + 10 = 16. The sweater arrived on May 16.'
 },
 {
 id: '32',
 text: 'This is 1 block. <br><img src="images/32-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many of these blocks are needed to make the stack shown here? <br><img src="images/32-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['16', '20', '24', '25'],
 correctAnswer: 0, 
 explanation: 'The stack has 4 rows with 4 blocks in each row: 4 × 4 = 16 blocks.'
 },
 {
 id: '33',
 text: 'Which is CLOSEST to the time shown on the clock? <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['4:05', '4:25', '5:20', '5:40'],
 correctAnswer: 1, 
 explanation: 'The hour hand is between 4 and 5, and the minute hand is near the 5, which means about 25 minutes. The time is about 4:25.'
 },
 {
 id: '34',
 text: 'The picture shows how Jim used baseballs to measure the length of his bat. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is CLOSEST to the length of the bat?',
 type: 'multiple-choice',
 options: ['9 baseballs', '10 baseballs', '11 baseballs', '13 baseballs'],
 correctAnswer: 1, 
 explanation: 'Count the baseballs lined up from one end of the bat to the other.'
 },
 {
 id: '35',
 text: 'Which figure shows a line of symmetry?',
 type: 'multiple-choice',
 options: [
    {url: 'images/35a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A line of symmetry divides a figure into two matching halves that would fold exactly onto each other.'
 },
 {
 id: '36',
 text: 'Which shape appears to be a square?',
 type: 'multiple-choice',
 options: [
    {url: 'images/36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A square has 4 equal sides and 4 square corners.'
 },
 {
 id: '37',
 text: 'This list shows the ages of the 12 students in the school science club. <br>7, 7, 8, 10, 6, 6, 8, 11, 8, 9, 6, 11 <br>Which line plot shows the number of students at each age?',
 type: 'multiple-choice',
 options: [
    {url: 'images/37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Count each age: 6 appears 3 times, 7 appears 2 times, 8 appears 3 times, 9 appears 1 time, 10 appears 1 time, and 11 appears 2 times.'
 },
 {
 id: '38',
 text: 'Each student in Mrs. Cook’s class recorded one tally to show the type of drink each student had with lunch. SOME of the results are shown. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>There are 23 students in Mrs. Cook’s class. Which correctly shows the number of students who had water with lunch?',
 type: 'multiple-choice',
 options: [
    {url: 'images/38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The table shows 6 + 8 + 4 = 18 students. 23 − 18 = 5 students had water, which is shown by one tally group of 5.'
 },
 {
 id: '39',
 text: 'The graph shows the number of different colored shirts in Cassie’s closet. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>According to the graph, how many shirts are there in Cassie’s closet?',
 type: 'multiple-choice',
 options: ['18', '13', '9', '7'],
 correctAnswer: 0, 
 explanation: 'Add the bars: 7 + 6 + 3 + 2 = 18 shirts.'
 },
 {
 id: '40',
 text: 'The table shows the number of each color of counters in a box. Each counter is the same size and shape. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Tim closes his eyes and pulls 1 counter from the box, which BEST describes the chance the counter will be yellow?',
 type: 'multiple-choice',
 options: ['Certain', 'Likely, but not certain', 'Unlikely, but not impossible', 'Impossible'],
 correctAnswer: 3, 
 explanation: 'There are no yellow counters in the box, so pulling a yellow counter is impossible.'
 },
 {
 id: '41',
 text: 'The pictograph below shows the number of each color of button Elsa used to decorate a box. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the data in the graph, what was the total number of blue buttons Elsa used?',
 type: 'multiple-choice',
 options: ['4', '13', '20', '65'],
 correctAnswer: 2, 
 explanation: 'There are 4 symbols for blue, and each symbol represents 5 buttons: 4 × 5 = 20 buttons.'
 },
 {
 id: '42',
 text: 'The table shows the number of students enrolled in each dance class. <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph shows the same information as the table?',
 type: 'multiple-choice',
 options: [
    {url: 'images/42a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The bars must show Ballet 18, Modern 12, Jazz 10, and Tap 14.'
 },
 {
 id: '43',
 text: 'This table shows the numbers of pencils with different designs that Brandon’s teacher has in a prize bag. <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Brandon picks one pencil from the prize bag without looking, which design will the pencil MOST likely have on it?',
 type: 'multiple-choice',
 options: ['Frog', 'Star', 'Airplane', 'Basketball'],
 correctAnswer: 2, 
 explanation: 'There are more airplane pencils (200) than any other design, so an airplane pencil is most likely.'
 },
 {
 id: '44',
 text: 'Which number sentence is true?',
 type: 'multiple-choice',
 options: ['7 + 4 = 8 + 3', '7 + 4 = 11 + 3', '8 · 3 = 8 + 3', '8 · 3 = 3 · 7'],
 correctAnswer: 0, 
 explanation: '7 + 4 = 11 and 8 + 3 = 11, so both sides are equal.'
 },
 {
 id: '45',
 text: 'What number belongs in the box to make this number sentence true? <br>15 − ☐ = 7',
 type: 'multiple-choice',
 options: ['23', '22', '8', '7'],
 correctAnswer: 2, 
 explanation: '15 − 8 = 7, so the missing number is 8.'
 },
 {
 id: '46',
 text: 'Janet made this pattern by repeating the first five shapes in the same order as shown. <br><img src="images/46.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The pattern continues in the same way. What will be the next shape in Janet’s pattern?',
 type: 'multiple-choice',
 options: [
    {url: 'images/46a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/46b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/46c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/46d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The pattern repeats heart, diamond, square, square, triangle. The last shape shown is the first square, so the next shape is a square.'
 },
 {
 id: '47',
 text: 'Mrs. Parker wrote the following number pattern on the chalkboard. <br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If this pattern continues in the same way, what number should go in the empty box?',
 type: 'multiple-choice',
 options: ['28', '31', '32', '37'],
 correctAnswer: 2, 
 explanation: 'The rule is add 5: 27 + 5 = 32.'
 },
 {
 id: '48',
 text: 'The table shows the costs for stickers. <br><img src="images/48.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The cost of stickers continues to increase in the same way. What is the greatest number of stickers that can be bought with $5.00?',
 type: 'multiple-choice',
 options: ['16', '18', '20', '22'],
 correctAnswer: 2, 
 explanation: 'Each $1.00 buys 4 more stickers, so $5.00 buys 16 + 4 = 20 stickers.'
 },
 {
 id: '49',
 text: 'Marta showed a basic fact by grouping 8 cubes in 2 different ways. <br><img src="images/49.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which number sentence represents Marta’s two basic facts?',
 type: 'multiple-choice',
 options: ['4 × 2 = 2 × 4', '4 × 2 = 2 + 4', '2 + 4 = 4 × 4', '2 + 4 = 4 + 4'],
 correctAnswer: 0, 
 explanation: 'The cubes are grouped as 4 groups of 2 and 2 groups of 4, so 4 × 2 = 2 × 4.'
 },
 {
 id: '50',
 text: 'Jake’s baseball team has bats made of wood and bats made of metal. Of the 14 total bats, 8 are made of wood and the rest are made of metal. <br>8 + ☐ = 14 <br>How many bats are made of metal?',
 type: 'multiple-choice',
 options: ['8', '7', '6', '5'],
 correctAnswer: 2, 
 explanation: '8 + 6 = 14, so 6 bats are made of metal.'
 }
];

// Scaled Score Mapping for Grade 3 Mathematics (2009)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 72,
  2: 117,
  3: 145,
  4: 164,
  5: 180,
  6: 194,
  7: 205,
  8: 216,
  9: 225,
  10: 234,
  11: 242,
  12: 250,
  13: 257,
  14: 264,
  15: 271,
  16: 278,
  17: 284,
  18: 290,
  19: 296,
  20: 302,
  21: 308,
  22: 314,
  23: 319,
  24: 325,
  25: 331,
  26: 336,
  27: 342,
  28: 348,
  29: 354,
  30: 359,
  31: 365,
  32: 371,
  33: 378,
  34: 384,
  35: 391,
  36: 397,
  37: 404,
  38: 412,
  39: 420,
  40: 428,
  41: 437,
  42: 447,
  43: 457,
  44: 469,
  45: 483,
  46: 499,
  47: 519,
  48: 546,
  49: 592,
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
        testType: 'Grade 3 Mathematics (2009)'
      };
      
      console.log(`Saving Grade 3 Math result: ${rawScore}/50 → ${scaledScore} (${performanceLevel})`);
      
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
        result.testType = 'Grade 3 Mathematics (2009)';
        updated = true;
        console.log(`Enhanced Grade 3 Math result ${index + 1}: ${result.rawScore}/50 → ${result.scaledScore} (${result.performanceLevel})`);
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
            testType: 'Grade 3 Mathematics (2009)'
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