window.TEST_IDENTIFIER = 'math_grade3_2008';

const sampleQuestions = [
 {
 id: '1',
 text: 'Each small cube in the model has a value of 1. What number is represented by the model shown? <br><img src="images/1.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['25', '205', '250', '2,005'],
 correctAnswer: 2, 
 explanation: 'There are 2 hundreds flats and 5 tens rods, so the model shows 200 + 50 = 250.'
 },
 {
 id: '2',
 text: 'A toy store sold 1,032 video games in December. What is 1,032 rounded to the nearest hundred?',
 type: 'multiple-choice',
 options: ['1,000', '1,030', '1,100', '1,130'],
 correctAnswer: 0, 
 explanation: 'The tens digit is 3, so round down: 1,032 rounds to 1,000.'
 },
 {
 id: '3',
 text: 'This model is shaded to show a fraction of a whole. <br><img src="images/3.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is shaded to show a fraction with a value LESS THAN the one above?',
 type: 'multiple-choice',
 options: [
    {url: 'images/3a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/3b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/3c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/3d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The model shows <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>. <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> is less than <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> because fourths are smaller parts than thirds.'
 },
 {
 id: '4',
 text: 'The number sentence below is true. <br>6 + 8 = 14 <br>Which number makes the following number sentence true? <br>14 − ___ = 6',
 type: 'multiple-choice',
 options: ['6', '8', '20', '84'],
 correctAnswer: 1, 
 explanation: 'Addition and subtraction are related. Since 6 + 8 = 14, then 14 − 8 = 6.'
 },
 {
 id: '5',
 text: 'This model is shaded to show 1 whole. <br><img src="images/5-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What decimal is shown by the model below? <br><img src="images/5-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['7.30', '3.70', '0.73', '0.37'],
 correctAnswer: 3, 
 explanation: '3 full columns (0.30) and 7 more squares (0.07) are shaded, so the model shows 0.37.'
 },
 {
 id: '6',
 text: 'This is a group of dog treats. <br><img src="images/6.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What fraction of the group is shaded?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'There are 10 dog treats and 6 are shaded, so <math><mfrac><mn>6</mn><mn>10</mn></mfrac></math> of the group is shaded.'
 },
 {
 id: '7',
 text: 'What is the value of the 1 in 13,729?',
 type: 'multiple-choice',
 options: ['100', '1,000', '10,000', '100,000'],
 correctAnswer: 2, 
 explanation: 'The 1 is in the ten thousands place, so its value is 10,000.'
 },
 {
 id: '8',
 text: 'February is the second month of the year. The chart shows the months of the year in order as they occur. <br><img src="images/8.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the tenth month of the year?',
 type: 'multiple-choice',
 options: ['December', 'November', 'October', 'September'],
 correctAnswer: 2, 
 explanation: 'Count down the chart to the tenth month: October.'
 },
 {
 id: '9',
 text: 'What is 4,996 rounded to the nearest thousand?',
 type: 'multiple-choice',
 options: ['4,000', '4,800', '4,900', '5,000'],
 correctAnswer: 3, 
 explanation: 'The hundreds digit is 9, so round up: 4,996 rounds to 5,000.'
 },
 {
 id: '10',
 text: 'Which of the following numbers represents two hundred sixty-three thousand, four hundred seventeen?',
 type: 'multiple-choice',
 options: ['206,407', '260,417', '263,407', '263,417'],
 correctAnswer: 3, 
 explanation: 'Two hundred sixty-three thousand is 263,000, and four hundred seventeen is 417, so the number is 263,417.'
 },
 {
 id: '11',
 text: 'This model is shaded to show one whole. <br><img src="images/11-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What number is shown by the shaded parts of the model below? <br><img src="images/11-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['3 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '3 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '3 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '3 <math><mfrac><mn>3</mn><mn>1</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Three circles are fully shaded and 1 of 4 parts of the last circle is shaded, so the model shows 3 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>.'
 },
 {
 id: '12',
 text: 'Which number has an 8 in the thousands place?',
 type: 'multiple-choice',
 options: ['721,801', '595,382', '248,937', '186,546'],
 correctAnswer: 2, 
 explanation: 'In 248,937, the 8 is in the thousands place.'
 },
 {
 id: '13',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['8,412 is greater than 8,901', '7,563 is greater than 7,563', '5,718 is greater than 5,763', '9,174 is greater than 9,082'],
 correctAnswer: 3, 
 explanation: 'Both numbers have 9 thousands. 1 hundred is greater than 0 hundreds, so 9,174 is greater than 9,082.'
 },
 {
 id: '14',
 text: '72 ÷ 9 = ___',
 type: 'multiple-choice',
 options: ['6', '7', '8', '9'],
 correctAnswer: 2, 
 explanation: '9 × 8 = 72, so 72 ÷ 9 = 8.'
 },
 {
 id: '15',
 text: 'Trey bought 4 rolls of film. Each roll could make 27 pictures. What was the total number of pictures that Trey could make with the 4 rolls he bought?',
 type: 'multiple-choice',
 options: ['35', '108', '211', '828'],
 correctAnswer: 1, 
 explanation: '4 × 27 = 108 pictures.'
 },
 {
 id: '16',
 text: 'An ice-cream shop used 1,287 gallons of vanilla ice cream and 956 gallons of chocolate ice cream last month. What was the total number of gallons of vanilla ice cream and chocolate ice cream sold last month?',
 type: 'multiple-choice',
 options: ['331', '1,133', '2,243', '10,847'],
 correctAnswer: 2, 
 explanation: '1,287 + 956 = 2,243 gallons.'
 },
 {
 id: '17',
 text: '2.3 + 6.8 = ___',
 type: 'multiple-choice',
 options: ['0.81', '0.91', '8.1', '9.1'],
 correctAnswer: 3, 
 explanation: 'Line up the decimal points and add: 2.3 + 6.8 = 9.1.'
 },
 {
 id: '18',
 text: 'At a carnival, 817 tickets were sold on Monday. On Tuesday, 1,265 tickets were sold. What is the total number of tickets sold at the carnival on those two days?',
 type: 'multiple-choice',
 options: ['2,082', '1,652', '1,072', '448'],
 correctAnswer: 0, 
 explanation: '817 + 1,265 = 2,082 tickets.'
 },
 {
 id: '19',
 text: 'This is one. <br><img src="images/19-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How much is <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> + <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math> = ? <br><img src="images/19-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'When the denominators are the same, add the numerators: <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> + <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>6</mn></mfrac></math>.'
 },
 {
 id: '20',
 text: 'There are 9 hooks on a coat rack. Only one coat can hang on each hook. If 4 hooks are NOT used, how many coats are hanging on the coat rack?',
 type: 'multiple-choice',
 options: ['5', '6', '13', '14'],
 correctAnswer: 0, 
 explanation: '9 − 4 = 5 hooks are used, so 5 coats are hanging.'
 },
 {
 id: '21',
 text: '8 × 8 = ___',
 type: 'multiple-choice',
 options: ['16', '32', '64', '72'],
 correctAnswer: 2, 
 explanation: '8 × 8 = 64.'
 },
 {
 id: '22',
 text: 'Tina bought 3 boxes of cookies. Each box had exactly 60 cookies in it. What is the total number of cookies Tina bought?',
 type: 'multiple-choice',
 options: ['180', '120', '63', '20'],
 correctAnswer: 0, 
 explanation: '3 × 60 = 180 cookies.'
 },
 {
 id: '23',
 text: '9.3 − 0.6 = ___',
 type: 'multiple-choice',
 options: ['9.3', '8.7', '0.93', '0.87'],
 correctAnswer: 1, 
 explanation: 'Line up the decimal points and subtract: 9.3 − 0.6 = 8.7.'
 },
 {
 id: '24',
 text: 'This model is shaded to represent one whole. <br><img src="images/24-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Each of these models is shaded to represent a fraction. <br><img src="images/24-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Subtract the fractions. What is the difference?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'Model 1 shows <math><mfrac><mn>6</mn><mn>8</mn></mfrac></math> and Model 2 shows <math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>. <math><mfrac><mn>6</mn><mn>8</mn></mfrac></math> − <math><mfrac><mn>2</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '25',
 text: 'Which of these figures is a rectangular solid?',
 type: 'multiple-choice',
 options: [
    {url: 'images/25a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'A rectangular solid (rectangular prism) has 6 rectangular faces, like a box.'
 },
 {
 id: '26',
 text: 'Priscilla cleaned her mom’s car and found the coins shown in the picture. <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the total amount of money Priscilla found?',
 type: 'multiple-choice',
 options: ['47¢', '52¢', '57¢', '62¢'],
 correctAnswer: 3, 
 explanation: 'Add the value of each coin: 1 quarter (25¢), 3 dimes (30¢), and 7 pennies (7¢) make 62¢.'
 },
 {
 id: '27',
 text: 'Which is CLOSEST to the temperature shown on this thermometer? <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['68°F', '70°F', '74°F', '76°F'],
 correctAnswer: 2, 
 explanation: 'The top of the liquid is a little above the 70° mark, closest to 74°F.'
 },
 {
 id: '28',
 text: 'Exactly how many faces are on the figure below? <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['4', '6', '8', '12'],
 correctAnswer: 1, 
 explanation: 'A cube has 6 faces.'
 },
 {
 id: '29',
 text: 'Using the calendar shown below, what is the date of the fourth Monday of the month? <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['September 4', 'September 14', 'September 21', 'September 28'],
 correctAnswer: 3, 
 explanation: 'The Mondays are September 7, 14, 21, and 28. The fourth Monday is September 28.'
 },
 {
 id: '30',
 text: 'The clock shows the time the April parade began. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the clocks shows the same time?',
 type: 'multiple-choice',
 options: [
    {url: 'images/31a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The hour hand is between 10 and 11 and the minute hand points just past the 7, which is 37 minutes. The time is 10:37.'
 },
 {
 id: '31',
 text: 'Which of the following weighs about the same as a paper clip?',
 type: 'multiple-choice',
 options: ['A desk', 'A math book', 'A pair of scissors', 'A piece of notebook paper'],
 correctAnswer: 3, 
 explanation: 'A paper clip and a piece of notebook paper are both very light.'
 },
 {
 id: '32',
 text: '<br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which numbered shape is NOT congruent to the other shapes?',
 type: 'multiple-choice',
 options: ['1', '2', '3', '4'],
 correctAnswer: 2, 
 explanation: 'Congruent shapes have the same size and shape. Shape 3 is longer than the other shapes.'
 },
 {
 id: '33',
 text: 'Which picture appears to have a line of symmetry?',
 type: 'multiple-choice',
 options: [
    {url: 'images/34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'A line of symmetry divides a figure into two matching halves. The ball can be folded along a line so that both halves match.'
 },
 {
 id: '34',
 text: 'Which figure represents an angle?',
 type: 'multiple-choice',
 options: [
    {url: 'images/35a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'An angle is formed by two rays that share an endpoint.'
 },
 {
 id: '35',
 text: 'What is the total number of hours in exactly 1 day?',
 type: 'multiple-choice',
 options: ['7', '12', '24', '30'],
 correctAnswer: 2, 
 explanation: 'There are 24 hours in 1 day.'
 },
 {
 id: '36',
 text: 'Andy, Bob, Charles, and David went on a fossil hunt. The graph shows the number of fossils each boy found. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the data in the graph, what was the total number of fossils found altogether?',
 type: 'multiple-choice',
 options: ['34', '31', '27', '24'],
 correctAnswer: 0, 
 explanation: '9 + 10 + 8 + 7 = 34 fossils.'
 },
 {
 id: '37',
 text: 'Kaitlyn recorded the amount of rainfall at her house each week during April. The bar graph below shows her results. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the data in the bar graph, which of the following statements is true?',
 type: 'multiple-choice',
 options: ['Week 2 and week 4 had the same number of inches of rain.', 'Week 3 had the greatest number of inches of rain.', 'Week 2 had a greater number of inches of rain than week 1.', 'Week 1 had the least number of inches of rain.'],
 correctAnswer: 0, 
 explanation: 'Week 2 and week 4 each had 2 inches of rain.'
 },
 {
 id: '38',
 text: 'Look at the picture graph. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What information is missing from the picture graph?',
 type: 'multiple-choice',
 options: ['A title telling about the graph', 'A label listing the names of the students that planted seeds', 'A picture to represent the seeds planted', 'A key showing the number of seeds each picture represents'],
 correctAnswer: 3, 
 explanation: 'The graph has a title, labels, and pictures, but no key showing how many seeds each picture represents.'
 },
 {
 id: '39',
 text: 'Sandy served hot dogs, hamburgers, and pizza for lunch at her party. She also served fruit punch, orange juice, and soda to drink. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The chart lists some possible combinations for one lunch item and one drink item. Which possible combination is missing from the chart?',
 type: 'multiple-choice',
 options: ['Hamburger and fruit punch', 'Orange juice and soda', 'Hamburger and pizza', 'Fruit punch and orange juice'],
 correctAnswer: 0, 
 explanation: 'Hot dog and pizza each appear with all three drinks, but hamburger is missing fruit punch.'
 },
 {
 id: '40',
 text: 'Erika asked 18 classmates to name their favorite season. The results are shown in the table. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph correctly displays the data from the table?',
 type: 'multiple-choice',
 options: [
    {url: 'images/41a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The bars must show Winter 2, Spring 3, Summer 8, and Fall 5.'
 },
 {
 id: '41',
 text: 'Chris is going to make a snack. The pictures in the chart show his choices for a piece of fruit and a cookie. <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which shows ALL the different combinations of 1 piece of fruit and 1 cookie that Chris can make?',
 type: 'multiple-choice',
 options: [
    {url: 'images/42a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'There are 2 fruits and 3 cookies, so there are 2 × 3 = 6 combinations. Each fruit must be paired with each cookie.'
 },
 {
 id: '42',
 text: 'Look at the pictograph. <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the graph, what was the total number of cars at the car wash?',
 type: 'multiple-choice',
 options: ['20', '18', '14', '10'],
 correctAnswer: 0, 
 explanation: 'There are 10 car pictures, and each picture represents 2 cars: 10 × 2 = 20 cars.'
 },
 {
 id: '43',
 text: 'This pattern repeats the first four figures. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If this pattern is continued following the same rule, what will be the next 3 figures?',
 type: 'multiple-choice',
 options: [
    {url: 'images/44a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The pattern repeats triangle, square, circle, circle. The last figure shown is a triangle, so the next 3 figures are square, circle, circle.'
 },
 {
 id: '44',
 text: 'The number sentence below models an addition property. <br>1 + 2 = 2 + 1 <br>Which number can be placed in the box so that the following number sentence models the same kind of property? <br>4 + 9 = 9 + ☐',
 type: 'multiple-choice',
 options: ['4', '5', '9', '13'],
 correctAnswer: 0, 
 explanation: 'The order of the addends changes but the numbers stay the same, so 4 + 9 = 9 + 4.'
 },
 {
 id: '45',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['42 = 35 + 7', '42 = 42 + 2', '42 = 7 × 5', '42 = 6 × 6'],
 correctAnswer: 0, 
 explanation: '35 + 7 = 42, so 42 = 35 + 7 is true.'
 },
 {
 id: '46',
 text: 'Look at this pattern of numbers. <br>122, 125, 128, 131, 134, ___ <br>If this pattern continues following the same rule, what should be the next number?',
 type: 'multiple-choice',
 options: ['135', '137', '141', '144'],
 correctAnswer: 1, 
 explanation: 'The rule is add 3: 134 + 3 = 137.'
 },
 {
 id: '47',
 text: 'Ming had 11 pencils in her pencil box. Each pencil was either yellow or red. If 8 pencils were yellow, how many red pencils were in Ming’s pencil box?',
 type: 'multiple-choice',
 options: ['19', '9', '4', '3'],
 correctAnswer: 3, 
 explanation: '11 − 8 = 3 red pencils.'
 },
 {
 id: '48',
 text: 'What number goes in the blank to make the statement true? <br>8 × ___ = 8',
 type: 'multiple-choice',
 options: ['0', '1', '8', '16'],
 correctAnswer: 1, 
 explanation: 'Any number multiplied by 1 equals itself: 8 × 1 = 8.'
 },
 {
 id: '49',
 text: 'A subtraction rule was used to make the number pattern shown. <br>70, 65, 60, 55, ___ <br>The pattern continues in the same way. What will be the next number?',
 type: 'multiple-choice',
 options: ['60', '50', '45', '40'],
 correctAnswer: 1, 
 explanation: 'The rule is subtract 5: 55 − 5 = 50.'
 }
];

// Scaled Score Mapping for Grade 3 Mathematics (2008)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 78,
  2: 124,
  3: 151,
  4: 171,
  5: 188,
  6: 201,
  7: 213,
  8: 224,
  9: 233,
  10: 242,
  11: 251,
  12: 258,
  13: 266,
  14: 273,
  15: 280,
  16: 286,
  17: 293,
  18: 299,
  19: 305,
  20: 311,
  21: 316,
  22: 322,
  23: 328,
  24: 334,
  25: 339,
  26: 345,
  27: 350,
  28: 356,
  29: 362,
  30: 367,
  31: 373,
  32: 379,
  33: 385,
  34: 391,
  35: 398,
  36: 404,
  37: 411,
  38: 419,
  39: 426,
  40: 434,
  41: 443,
  42: 452,
  43: 463,
  44: 474,
  45: 488,
  46: 503,
  47: 523,
  48: 550,
  49: 595,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 28 of the released test required measuring with a physical ruler and was removed.
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
        testType: 'Grade 3 Mathematics (2008)'
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
        result.testType = 'Grade 3 Mathematics (2008)';
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
            testType: 'Grade 3 Mathematics (2008)'
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