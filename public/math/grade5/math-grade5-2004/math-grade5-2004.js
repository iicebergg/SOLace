window.TEST_IDENTIFIER = 'math_grade5_2004';

const sampleQuestions = [
 {
 id: '1',
 text: 'The men\'s 110-meter hurdles is an event in the Olympic games. <br><img src="images/1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The distance from the starting line to the first hurdle is 13.72 meters. The distance from the first hurdle to the second hurdle is 9.14 meters. What is the total distance from the starting line to the second hurdle?',
 type: 'multiple-choice',
 options: ['19.86 meters', '22.86 meters', '23.86 meters', '24.86 meters'],
 correctAnswer: 1, 
 explanation: '13.72 + 9.14 = 22.86 meters.'
 },
 {
 id: '2',
 text: '2 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> − <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['2 <math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>', '2 <math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>', '1 <math><mfrac><mn>1</mn><mn>12</mn></mfrac></math>', '1 <math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Use a common denominator of 12: 2 <math><mfrac><mn>8</mn><mn>12</mn></mfrac></math> − <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math> = 2 <math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '3',
 text: '12.08 × 1.7 = ___',
 type: 'multiple-choice',
 options: ['2,053.6', '205.36', '20.536', '2.0536'],
 correctAnswer: 2, 
 explanation: '1208 × 17 = 20,536. There are 3 decimal places in the factors, so 12.08 × 1.7 = 20.536.'
 },
 {
 id: '4',
 text: 'The sum of 32,796 + 47,580 is best described as —',
 type: 'multiple-choice',
 options: ['about 60,000', 'about 70,000', 'about 80,000', 'about 90,000'],
 correctAnswer: 2, 
 explanation: 'Round to the nearest ten thousand: 30,000 + 50,000 = 80,000. (The exact sum is 80,376.)'
 },
 {
 id: '5',
 text: 'Matt bought the items shown below at the school store. The prices shown include tax. <br><img src="images/5.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the total cost of these four items?',
 type: 'multiple-choice',
 options: ['$14.84', '$15.04', '$16.04', '$23.15'],
 correctAnswer: 2, 
 explanation: '$0.79 + $9.62 + $3.45 + $2.18 = $16.04.'
 },
 {
 id: '6',
 text: 'In one hour, Tracy walked 2.31 miles on a treadmill. Lisa walked 1.95 miles in the same amount of time. How much farther did Tracy walk than Lisa?',
 type: 'multiple-choice',
 options: ['1.66 miles', '1.36 miles', '0.46 mile', '0.36 mile'],
 correctAnswer: 3, 
 explanation: '2.31 − 1.95 = 0.36 mile.'
 },
 {
 id: '7',
 text: '7.548 ÷ 6 = ___',
 type: 'multiple-choice',
 options: ['1,258', '125.8', '12.58', '1.258'],
 correctAnswer: 3, 
 explanation: '7.548 ÷ 6 = 1.258. Check: 1.258 × 6 = 7.548.'
 },
 {
 id: '8',
 text: '18,416 − 5,037 = ___',
 type: 'multiple-choice',
 options: ['13,339', '13,379', '13,429', '13,479'],
 correctAnswer: 1, 
 explanation: '18,416 − 5,037 = 13,379.'
 },
 {
 id: '9',
 text: 'Which of the following is the <i>best estimate</i> of the solution to 25 × 101?',
 type: 'multiple-choice',
 options: ['250', '2,500', '25,000', '250,000'],
 correctAnswer: 1, 
 explanation: '101 is close to 100, and 25 × 100 = 2,500.'
 },
 {
 id: '10',
 text: 'To prepare for a regional competition, Keith practiced on his skateboard 12 hours each week for 18 weeks. How many hours did Keith practice in all?',
 type: 'multiple-choice',
 options: ['216', '192', '116', '30'],
 correctAnswer: 0, 
 explanation: '12 × 18 = 216 hours.'
 },
 {
 id: '11',
 text: '79 ÷ 3 = ___',
 type: 'multiple-choice',
 options: ['26 R1', '26 R10', '25 R4', '25 R3'],
 correctAnswer: 0, 
 explanation: '3 × 26 = 78, and 79 − 78 = 1, so the answer is 26 R1.'
 },
 {
 id: '12',
 text: '<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math> + <math><mfrac><mn>10</mn><mn>12</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>9</mn></mfrac></math>', '1 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '1 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math> + <math><mfrac><mn>10</mn><mn>12</mn></mfrac></math> = <math><mfrac><mn>15</mn><mn>12</mn></mfrac></math> = 1 <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math> = 1 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>.'
 },
 {
 id: '13',
 text: 'Which number goes into the box to make the statement true? <br>4,___76,192 < 4,578,136',
 type: 'multiple-choice',
 options: ['7', '6', '3', '8'],
 correctAnswer: 2, 
 explanation: 'The hundred thousands digit must be less than 5 for the statement to be true. Of the choices, only 3 is less than 5.'
 },
 {
 id: '14',
 text: 'Martha\'s pet ferret measures 42.27 centimeters long. <br><img src="images/14.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is that length rounded to the nearest tenth of a centimeter?',
 type: 'multiple-choice',
 options: ['42.0 centimeters', '42.1 centimeters', '42.2 centimeters', '42.3 centimeters'],
 correctAnswer: 3, 
 explanation: 'The tenths digit is 2 and the hundredths digit is 7, which is 5 or more, so round up to 42.3.'
 },
 {
 id: '15',
 text: 'This figure is shaded to represent the number 1. <br><img src="images/15-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following numbers is represented by the shaded part of the figure below? <br><img src="images/15-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['63', '6.3', '0.63', '0.063'],
 correctAnswer: 2, 
 explanation: '63 of the 100 small squares are shaded, which is 0.63.'
 },
 {
 id: '16',
 text: 'The figure below is shaded to represent a decimal. <br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following groups is shaded to represent a fraction with the same value as the decimal represented above?',
 type: 'multiple-choice',
 options: [
    {url: 'images/16a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The figure has 8 of 10 parts shaded, which is 0.8 = <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math>. Choice F has 4 of 5 butterflies shaded.'
 },
 {
 id: '17',
 text: 'Sherman read that the Sahara Desert, the largest desert in the world, covers an area of 3,541,790 square miles. What is the value of the 7 in that number?',
 type: 'multiple-choice',
 options: ['7', '700', '70,000', '700,000'],
 correctAnswer: 1, 
 explanation: 'The 7 is in the hundreds place, so its value is 700.'
 },
 {
 id: '18',
 text: 'Jennifer needs <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> cup of chocolate chips to make cookies. Which of the following amounts is equivalent to <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> cup?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> cup', '<math><mfrac><mn>6</mn><mn>10</mn></mfrac></math> cup', '<math><mfrac><mn>4</mn><mn>8</mn></mfrac></math> cup', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> cup'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>4</mn><mn>8</mn></mfrac></math> is half of 8, so <math><mfrac><mn>4</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '19',
 text: 'Which goes in the blank to make the statement true? <br>2.301 > ___',
 type: 'multiple-choice',
 options: ['23.1', '2.3010', '2.310', '2.13'],
 correctAnswer: 3, 
 explanation: '2.13 has 1 tenth, and 2.301 has 3 tenths, so 2.301 > 2.13. (2.3010 is equal to 2.301.)'
 },
 {
 id: '20',
 text: 'Which of the following shows the numbers listed from <i>least</i> to <i>greatest</i>?',
 type: 'multiple-choice',
 options: ['0.5, <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>, 0.9, 1 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, 1 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '1 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, 1 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>, 0.5, 0.9', '0.9, 1 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>, 1 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>, 0.5', '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>, 0.5, 1 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, 0.9, 1 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'As decimals, the numbers are 0.5, 0.6, 0.9, about 1.33, and 1.75. Choice F lists them in that order.'
 },
 {
 id: '21',
 text: 'Eddie connected points <i>M</i> and <i>N</i> to make one side of an angle. Which other point should he connect to point <i>M</i> in order to make a 135° angle? <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<i>V</i>', '<i>W</i>', '<i>X</i>', '<i>Y</i>'],
 correctAnswer: 0, 
 explanation: 'A 135° angle is a right angle (90°) plus half of a right angle (45°). Point V is the same number of units left and up from M, so ray MV goes diagonally up and to the left, making a 135° angle with ray MN.'
 },
 {
 id: '22',
 text: 'The figure below shows a coordinate grid placed over an archery target. Each ring of the target is labeled with the number of points the player will earn if an arrow lands in that ring. <br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Lyle\'s arrow landed at (3, 4). How many points should he have earned with that arrow?',
 type: 'multiple-choice',
 options: ['1', '5', '10', '25'],
 correctAnswer: 2, 
 explanation: 'The point (3, 4) is 3 units right and 4 units up, which is in the white ring labeled 10 points.'
 },
 {
 id: '23',
 text: 'The diagram below shows a group of pipes in a basement. Which two pipes appear to be parallel? <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Pipes 1 and 3', 'Pipes 2 and 3', 'Pipes 1 and 4', 'Pipes 2 and 4'],
 correctAnswer: 2, 
 explanation: 'Pipes 1 and 4 both run straight up and down, so they are parallel.'
 },
 {
 id: '24',
 text: 'What type of angle is formed between the hands of the clock shown below? <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Right', 'Acute', 'Obtuse', 'Straight'],
 correctAnswer: 0, 
 explanation: 'The hands point to the 12 and the 3, which form a square corner, so the angle is a right angle.'
 },
 {
 id: '25',
 text: 'A cube can also be classified as a —',
 type: 'multiple-choice',
 options: ['rectangular prism', 'square-based pyramid', 'cylinder', 'rhombus'],
 correctAnswer: 0, 
 explanation: 'A cube has 6 rectangular (square) faces, so it is a special kind of rectangular prism.'
 },
 {
 id: '26',
 text: '<br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The clock shows the time Simon\'s mathematics class began. The class ended at 9:35. How long was the class?',
 type: 'multiple-choice',
 options: ['55 minutes', '1 hour, 15 minutes', '1 hour, 55 minutes', '13 hours, 15 minutes'],
 correctAnswer: 1, 
 explanation: 'The clock shows 8:20. From 8:20 to 9:20 is 1 hour, and from 9:20 to 9:35 is 15 minutes.'
 },
 {
 id: '27',
 text: 'Lauren used 1 quart of milk to make ice cream. Which is <i>closest</i> to this amount of milk?',
 type: 'multiple-choice',
 options: ['100 milliliters', '100 liters', '1 milliliter', '1 liter'],
 correctAnswer: 3, 
 explanation: '1 quart is a little less than 1 liter.'
 },
 {
 id: '28',
 text: 'In the figure below, point <i>C</i> is the center of the circle. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which two points can be connected to form a chord that is <i>not</i> a diameter?',
 type: 'multiple-choice',
 options: ['Points <i>Q</i> and <i>T</i>', 'Points <i>S</i> and <i>C</i>', 'Points <i>R</i> and <i>T</i>', 'Points <i>T</i> and <i>C</i>'],
 correctAnswer: 0, 
 explanation: 'A chord has both endpoints on the circle. Q and T are on the circle, and segment QT does not pass through the center, so it is not a diameter. (RT passes through C, so it is a diameter.)'
 },
 {
 id: '29',
 text: 'Which two points appear to lie on the line of symmetry for the shaded figure shown on the grid below? <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Points <i>M</i> and <i>R</i>', 'Points <i>R</i> and <i>Z</i>', 'Points <i>W</i> and <i>X</i>', 'Points <i>Y</i> and <i>Z</i>'],
 correctAnswer: 2, 
 explanation: 'The line of symmetry of the triangle is the vertical line through its top point. Points W and X lie on that line.'
 },
 {
 id: '30',
 text: 'What is the area of a rectangle that measures 9 centimeters long and 6 centimeters wide?',
 type: 'multiple-choice',
 options: ['15 cm<sup>2</sup>', '27 cm<sup>2</sup>', '30 cm<sup>2</sup>', '54 cm<sup>2</sup>'],
 correctAnswer: 3, 
 explanation: 'Area = length × width = 9 × 6 = 54 square centimeters.'
 },
 {
 id: '31',
 text: 'After a heavy rain storm, Mrs. Mendez recorded the height of the water at a low water crossing. She used her data to make the graph below. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the height of the water recorded at 6:30 a.m.?',
 type: 'multiple-choice',
 options: ['8 in.', '10 in.', '13 in.', '15 in.'],
 correctAnswer: 2, 
 explanation: 'At 6 a.m. the water was about 8 inches and at 7 a.m. it was about 17 inches. Halfway between, at 6:30 a.m., it was about 13 inches.'
 },
 {
 id: '32',
 text: 'Nancy has 2 quarters, 5 dimes, 1 nickel and 6 pennies in her pocket. Which of the following questions about the coins could you use probability to solve?',
 type: 'multiple-choice',
 options: ['What is the total value of these coins?', 'How many more pennies than nickels does Nancy have?', 'If Nancy takes 1 coin from her pocket without looking, what kind of coin is it most likely to be?', 'If Nancy finds 1 more dime, how many coins will she have then?'],
 correctAnswer: 2, 
 explanation: 'Probability describes how likely something is to happen. Taking a coin without looking is a chance event.'
 },
 {
 id: '33',
 text: 'Mrs. Hunter has a box with 5 unsharpened pencils and 30 sharpened pencils. If she takes out 1 pencil without looking, what are the chances that the pencil she gets will be sharpened?',
 type: 'multiple-choice',
 options: ['Certain', 'Likely but not certain', 'Unlikely but not impossible', 'Impossible'],
 correctAnswer: 1, 
 explanation: 'Most of the pencils (30 of 35) are sharpened, so it is likely, but not certain because 5 are unsharpened.'
 },
 {
 id: '34',
 text: 'Maxine runs a bakery. This lists the number of special requests she received each day in a two-week period. <br>16 &nbsp; 29 &nbsp; 28 &nbsp; 15 &nbsp; 22 &nbsp; 25 <br>34 &nbsp; 48 &nbsp; 17 &nbsp; 40 &nbsp; 48 &nbsp; 27 <br>Which of the following stem-and-leaf plots shows this same information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'In order, the numbers are 15, 16, 17, 22, 25, 27, 28, 29, 34, 40, 48, 48. Plot G shows all 12 numbers.'
 },
 {
 id: '35',
 text: 'Mr. Rampell gave 9 students a makeup exam. The scores were 79, 68, 100, 79, 84, 92, 68, 100, and 68. What was the mode of these scores?',
 type: 'multiple-choice',
 options: ['84', '82', '79', '68'],
 correctAnswer: 3, 
 explanation: 'The mode is the score that appears most often. 68 appears 3 times.'
 },
 {
 id: '36',
 text: 'Gil has these model cars on a shelf. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If he takes 1 car off the shelf without looking, what is the probability that it will be white?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'There are 7 cars and 3 of them are white, so the probability is <math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>.'
 },
 {
 id: '37',
 text: '<br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which diagram shows all the possible combinations of 1 shirt, 1 pair of shorts, and 1 kind of shoes?',
 type: 'multiple-choice',
 options: [
    {url: 'images/39a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'There is 1 shirt × 2 shorts × 2 shoes = 4 combinations. Diagram C shows all 4.'
 },
 {
 id: '38',
 text: 'The table below shows the number of loads of wood Mr. Clark sold each day for four days. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following shows this information correctly graphed?',
 type: 'multiple-choice',
 options: [
    {url: 'images/40a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Graph G has bars at 27 for Monday, 16 for Tuesday, 24 for Wednesday, and 13 for Thursday.'
 },
 {
 id: '39',
 text: 'Which <i>best describes</i> the location of point <i>X</i> on the number line shown below? <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['134', '131', '128', '125'],
 correctAnswer: 2, 
 explanation: '114 and 122 are 4 marks apart, so each mark is 2. Point X is 3 marks to the right of 122: 122 + 6 = 128.'
 },
 {
 id: '40',
 text: 'The table shows the cost of parking in a downtown parking lot. The cost per hour for parking does not change. <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the pattern in the table, what will be the total cost for parking 3 hours?',
 type: 'multiple-choice',
 options: ['$8.75', '$6.75', '$6.50', '$5.25'],
 correctAnswer: 1, 
 explanation: 'Each hour costs $2.25, so 3 hours cost 3 × $2.25 = $6.75.'
 },
 {
 id: '41',
 text: 'A number machine uses a rule to change numbers into different numbers. The table below shows what happened when different numbers went into the same number machine. <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following could be the rule used by this number machine?',
 type: 'multiple-choice',
 options: ['Divide by 2', 'Subtract 9', 'Multiply by 2', 'Add 9'],
 correctAnswer: 1, 
 explanation: '15 − 9 = 6, 11 − 9 = 2, 18 − 9 = 9, and 23 − 9 = 14.'
 },
 {
 id: '42',
 text: 'Elsa is using a pattern to string the beads shown below. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues, what will the 11th bead look like?',
 type: 'multiple-choice',
 options: [
    {url: 'images/44a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The pattern repeats every 4 beads: dark round bead, light round bead, oval bead, striped bead. The 9th, 10th, and 11th beads are dark, light, and oval, so the 11th bead is an oval bead.'
 },
 {
 id: '43',
 text: 'Hiram read about a "Buy 2, Get 1 Free" sale on socks. If he buys 2 pairs of socks, he will get the 3rd pair free. He started the list below to find out how many free pairs of socks he would get. <br><img src="images/45.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the <i>least</i> number of pairs of socks Hiram would have to buy in order to get 4 free pairs?',
 type: 'multiple-choice',
 options: ['7', '8', '9', '12'],
 correctAnswer: 1, 
 explanation: 'He gets 1 free pair for every 2 pairs he buys. For 4 free pairs he must buy 4 × 2 = 8 pairs.'
 },
 {
 id: '44',
 text: 'A function machine uses a rule to change numbers into other numbers. The picture below shows what happened when the numbers 4, 12, and 7 went into the machine. <br><img src="images/46-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What number will come out of the machine if the number 9 goes into it? <br><img src="images/46-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['63', '72', '81', '90'],
 correctAnswer: 1, 
 explanation: 'The rule is multiply by 8: 4 × 8 = 32, 12 × 8 = 96, and 7 × 8 = 56. So 9 × 8 = 72.'
 },
 {
 id: '45',
 text: 'If <i>C</i> represents a number, which of the following means "5 less than a number"?',
 type: 'multiple-choice',
 options: ['<i>C</i> − 5', '<i>C</i> × 5', '<i>C</i> ÷ 5', '<i>C</i> + 5'],
 correctAnswer: 0, 
 explanation: '"5 less than a number" means take 5 away from the number: C − 5.'
 },
 {
 id: '46',
 text: 'Which of the following will be a true statement if an equal sign (=) is placed in the box?',
 type: 'multiple-choice',
 options: ['5 + 2 ☐ 5 + 5', '5 + 10 ☐ 10 − 5', '5 + 5 ☐ 10 × 2', '5 + 5 ☐ 2 × 5'],
 correctAnswer: 3, 
 explanation: '5 + 5 = 10 and 2 × 5 = 10, so 5 + 5 = 2 × 5.'
 },
 {
 id: '47',
 text: 'Which number sentence is true for all pairs of values shown in the table below? <br><img src="images/49.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<i>A</i> + <i>B</i> = 12', '<i>A</i> − <i>B</i> = 20', '<i>A</i> ÷ 5 = <i>B</i>', '<i>A</i> = <i>B</i> × 3'],
 correctAnswer: 2, 
 explanation: '15 ÷ 5 = 3, 25 ÷ 5 = 5, 10 ÷ 5 = 2, and 30 ÷ 5 = 6, so A ÷ 5 = B for every pair.'
 },
 {
 id: '48',
 text: 'Which can be solved using the open sentence <i>F</i> + 2 = ?',
 type: 'multiple-choice',
 options: ['There are 2 more drummers in the band than flute players. If <i>F</i> is the number of flute players in the band, how many drummers are there?', 'There are 2 fewer trumpet players in the band than flute players. If <i>F</i> is the number of flute players in the band, how many trumpet players are there?', 'There are 2 times as many flute players in the band as trombone players. If <i>F</i> is the number of trombone players in the band, how many flute players are there?', 'The flute players in the band sit in the first 2 rows. The same number of flute players sit in each row. If <i>F</i> is the total number of flute players in the band, how many sit in each row?'],
 correctAnswer: 0, 
 explanation: '"2 more than the flute players" means add 2 to F: F + 2.'
 }
];

// Scaled Score Mapping for Grade 5 Mathematics (2004)
// No raw-to-scaled score table was released with this test, so the Grade 5 Mathematics (2007)
// table is used as an approximation. It maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 10,
  2: 67,
  3: 101,
  4: 126,
  5: 146,
  6: 163,
  7: 178,
  8: 191,
  9: 203,
  10: 214,
  11: 224,
  12: 234,
  13: 243,
  14: 252,
  15: 260,
  16: 268,
  17: 276,
  18: 284,
  19: 292,
  20: 299,
  21: 306,
  22: 314,
  23: 321,
  24: 328,
  25: 335,
  26: 342,
  27: 350,
  28: 357,
  29: 364,
  30: 371,
  31: 379,
  32: 387,
  33: 394,
  34: 402,
  35: 411,
  36: 419,
  37: 428,
  38: 437,
  39: 447,
  40: 458,
  41: 469,
  42: 481,
  43: 494,
  44: 509,
  45: 526,
  46: 546,
  47: 572,
  48: 600,
  49: 600,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 21 of the released test required measuring with a physical ruler and was removed.
  // Question 29 of the released test required measuring with a physical ruler and was removed.
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
        testType: 'Grade 5 Mathematics (2004)'
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
        result.testType = 'Grade 5 Mathematics (2004)';
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
            testType: 'Grade 5 Mathematics (2004)'
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