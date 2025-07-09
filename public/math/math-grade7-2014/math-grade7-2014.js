window.TEST_IDENTIFIER = 'math_grade7_2014';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which of the following is true?',
 type: 'multiple-choice',
 options: ['-10 + 14 = 4', '-14 ÷ 10 = 1.4', '10 - 14 = 4', '14 × (-10) = 140'],
 correctAnswer: 0,
 explanation: 'Addition and subtraction are inverse operations, so 9 + 6 = 15 helps solve 15 - 9 = 6.'
 },
 {
 id: '2',
 text: 'Which number is a square root of 400?',
 type: 'multiple-choice',
 options: ['400', '200', '40', '20'],
 correctAnswer: 3, 
 explanation: 'When comparing fractions with the same denominator, compare the numerators. Since 3 < 4, we have 3/11 < 4/11.'
 },
 {
 id: '3',
 text: 'What is 0.000012 written in scientific notation?',
 type: 'multiple-choice',
 options: ['1.2 × 10⁻⁵', '1.2 × 10⁻⁴', '1.2 × 10⁴', '1.2 × 10⁵'],
 correctAnswer: 2, 
 explanation: 'Count the place value blocks: thousands, hundreds, tens, and ones to determine the number.'
 },
 {
 id: '4',
 text: 'Arrange the three numbers shown in order from least to greatest.',
 type: 'drag-drop',
 options: ['4.7 × 10⁵', '3.9 × 10⁸', '5.2 × 10⁵'],
 dropZones: ['Least', '↓', 'Greatest'],
 correctAnswer: [4, 1, 2],
 explanation: 'To round 5,647: to nearest thousand (6,000), nearest hundred (5,600), nearest ten (5,650).'
 },
 {
 id: '5',
 text: 'Which list of numbers is arranged from least to greatest?',
 type: 'multiple-choice',
 options: ['0.25, 17%, <math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>', '0.25, <math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>, 17%', '17%, 0.25, <math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>', '17%, <math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>, 0.25'],
 correctAnswer: 3, 
 explanation: 'Compare the fractions by looking at the numerators when denominators are the same.'
 },
 {
 id: '6',
 text: 'What is the value of (-15) - (-18) ÷ 3?',
 type: 'free-response',
 correctKeywords: ['285'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '7',
 text: 'Which number is a square root of 1?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '1', '2'],
 correctAnswer: 2, 
 explanation: 'Count the whole units and fractional parts shown in the model.'
 },
 {
 id: '8',
 text: 'Let n represent any number in this sequence. <center> 2, 24, 46, 68, ...</center> Which of these can be used to determine the next number?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>n</mn><mn>12</mn></mfrac></math>', '12n', 'n + 22', 'n - 22'],
 correctAnswer: 1, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '9',
 text: 'Which number sentence is represented by this model? <br><img src="images/question_9.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['-3 • 5 = 15', '-3 • 5 = -15', '-3 • (-5) = 15', '-3 • (-5) = -15'],
 correctAnswer: 1, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '10',
 text: 'Clarence made a scale drawing of a classroom. The scale in the drawing is 2 inches represents 9 feet. The actual length of the classroom is 36 feet. What is the length of the classroom on the scale drawing?',
 type: 'multiple-choice',
 options: ['4 inches', '8 inches', '27 inches', '162 inches'],
 correctAnswer: 3, 
 explanation: 'Count the total shapes and circles in each group to find where exactly <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> are circles.'
 },
 {
 id: '11',
 text: 'Which fraction and decimal are equivalent to 10⁻³?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>-1</mn><mn>10³</mn></mfrac></math> and -0.003', '<math><mfrac><mn>1</mn><mn>10³</mn></mfrac></math> and -0.003', '<math><mfrac><mn>-1</mn><mn>10³</mn></mfrac></math> and 0.001', '<math><mfrac><mn>1</mn><mn>10³</mn></mfrac></math> and 0.001'],
 correctAnswer: 1, 
 explanation: '63 ÷ 7 = 9, so the answer is 7.'
 },
 {
 id: '12',
 text: 'What is the absolute value of -8.2?',
 type: 'multiple-choice',
 options: ['8.2', '4.1', '-4.1', '-8.2'],
 correctAnswer: 3, 
 explanation: 'Count the total parts and the shaded parts to determine the fraction.'
 },
 {
 id: '13',
 text: 'Which statement is true about the pattern shown? <center> 5, 20, 80, 320, ...</center>',
 type: 'multiple-choice',
 options: ['The common ratio is 4.', 'The common ratio is 15.', 'The common difference is 4.', 'The common difference is 15.'],
 correctAnswer: 0, 
 explanation: 'Look at the arrangement to determine the multiplication sentence that represents the groups.'
 },
 {
 id: '14',
 text: 'Kelly received a 25% discount on the purchase of a $240 bicycle. What was the amount of the discount Kelly received?',
 type: 'multiple-choice',
 options: ['$25', '$60', '$180', '$215'],
 correctAnswer: 2, 
 explanation: 'Start with 25, subtract 16 sold, then add 136 new plants: 25 - 16 + 136 = 145.'
 },
 {
 id: '15',
 text: 'Which number sentence is represented by this model? <br><img src="images/question_15.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['-4 • 7 = 28', '-4 • 7 = -28', '4 • (-7) = 28', '4 • (-7) = -28'],
 correctAnswer: 0, 
 explanation: 'Count the total equal parts and the shaded parts to find the fraction.'
 },
 {
 id: '16',
 text: 'What is |<math><mfrac><mn>-11</mn><mn>12</mn></mfrac></math>|?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>12</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>11</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>-11</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>-12</mn><mn>11</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Count the total equal parts and the shaded parts to find the fraction.'
 },
 {
 id: '17',
 text: 'The length of Rectangular Prism A is shown. <br><img src="images/question_17.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> The length of this prism is multiplied by a scale factor of <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> to create Rectangular Prism B. The volume of Rectangular Prism B is--',
 type: 'multiple-choice',
 options: ['2 times the volume of Rectangular Prism A', '3 times the volume of Rectangular Prism A', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> the volume of Rectangular Prism A', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> the volume of Rectangular Prism A'],
 correctAnswer: 1, 
 explanation: 'When adding fractions with the same denominator, add the numerators: <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>4</mn></mfrac></math> = 1.'
 },
 {
 id: '18',
 text: 'Which statement is false?',
 type: 'multiple-choice',
 options: ['All squares are rectangles.', 'All squares are parallelograms.', 'All rhombuses are squares.', 'All rhombuses are parallelograms.'],
 correctAnswer: 1, 
 explanation: '3,000 - 285 = 2,715.'
 },
 {
 id: '19',
 text: 'Quadrilateral KL1WN is rotated 180° clockwise about the origin. Which coordinates best represent the image of point K? <br><img src="images/question_19.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['(6, 8)', '(-4, 2)', '(8, -6)', '(4, -2)'],
 correctAnswer: 3, 
 explanation: 'Look at the pattern on the number line to determine which operation it represents.'
 },
 {
 id: '20',
 text: 'Triangle STV and triangle ZXY are similar. Which pair of segments are corresponding sides of these triangles? <br><img src="images/question_20.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'drag-drop',
 options: ['ST', 'TV', 'XY', 'ZX', 'ZY', 'SV'],
 dropZones: ['', ''],
 correctAnswer: [4, 1, 2],
 explanation: 'To round 5,647: to nearest thousand (6,000), nearest hundred (5,600), nearest ten (5,650).'
 },
 {
 id: '21',
 text: 'The dimensions of 4 rectangular prisms are shown. Identify each of the prisms for which the maximum amount of sand the prism can hold is 30 cubic inches.',
 type: 'multiple-select',
 options: [
    {url: 'images/question_21a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_21b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_21c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_21d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'From 10:30 A.M. to 1:00 P.M. is 2 hours and 30 minutes = 150 minutes.'
 },
 {
 id: '22',
 text: 'A rectangular prism has a height of 3 inches and a volume of 27 cubic inches. The height of this prism is changed to 6 inches, and the other dimensions stay the same. What is the volume of the prism with this change?',
 type: 'multiple-choice',
 options: ['30 cubic inches', '54 cubic inches', '81 cubic inches', '162 cubic'],
 correctAnswer: 2, 
 explanation: 'The figures are three-dimensional, so they are rectangular prisms, not flat shapes.'
 },
 {
 id: '23',
 text: 'Every rhombus is also a--',
 type: 'multiple-choice',
 options: ['parallelogram', 'trapezoid', 'rectangle', 'square'],
 correctAnswer: 0, 
 explanation: '6 feet is the most reasonable length for a bed. 6 inches and 6 centimeters are too short, 6 meters is too long.'
 },
 {
 id: '24',
 text: 'Quadrilateral PQMN is similar to quadrilateral WXYZ. <br><img src="images/question_24.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the measure of angle Z?',
 type: 'multiple-choice',
 options: ['65°', '80°', '100°', '115°'],
 correctAnswer: 0, 
 explanation: 'Read the hour and minute hands to determine the approximate time.'
 },
 {
 id: '25',
 text: 'This table shows the dimensions of four rectangular prisms. <br><img src="images/question_26.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which rectangular prism has the greatest volume?',
 type: 'multiple-choice',
 options: ['Rectangular Prism Q', 'Rectangular Prism R', 'Rectangular Prism S', 'Rectangular Prism T'],
 correctAnswer: 3, 
 explanation: 'Congruent figures have the same shape and size. Look for the tower that matches exactly.'
 },
 {
 id: '26',
 text: 'Which numbered triangle is a 90° counterclockwise rotation about the origin of the shaded triangle? <br><img src="images/question_26.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['Triangle 1', 'Triangle 2', 'Triangle 3', 'Triangle 4'],
 correctAnswer: 3, 
 explanation: 'Congruent figures have the same shape and size. Look for the tower that matches exactly.'
 },
 {
 id: '27',
 text: 'The diameter and height of a cylindrical container are shown. <br><img src="images/question_27.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> The container is filled completely with cheese sauce. Which of these represents the total number of cubic inches of cheese sauce in the container?',
 type: 'multiple-choice',
 options: ['π • 8² • 7', 'π • 16² • 7', '2π • 8² + 2π • 8 • 7', '2π • 16² + 2π • 16 • 7'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '28',
 text: 'Figure LMNP will be reflected across the y-axis. Place the point on the graph that represents point N\'.',
 type: 'point-select',
 image: {url: 'images/question_28.png', alt: 'Image failed to load. Please try again later.'},
 correctAnswer: { x: 0.27, y: 0.3 }, 
 explanation: 'The probability of rolling a 2 is 1/6 ≈ 0.167. Place the point at approximately 1/6 on the number line.'
 },
 {
 id: '29',
 text: 'Triangle PQR is similar to triangle STU. <br><img src="images/question_29.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which proportion can be used to find n?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>5</mn><mn>15</mn></mfrac></math> = <math><mfrac><mn>n</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>15</mn><mn>5</mn></mfrac></math> = <math><mfrac><mn>n</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>13</mn><mn>n</mn></mfrac></math> = <math><mfrac><mn>12</mn><mn>36</mn></mfrac></math>', '<math><mfrac><mn>13</mn><mn>n</mn></mfrac></math> = <math><mfrac><mn>36</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'Count the value of all the coins and bills shown.'
 },
 {
 id: '30',
 text: 'The number of 8-ounce glasses of water Shane drank each day for 12 days is represented in this histogram. <br><img src="images/question_30.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on this histogram, which statement must be true?',
 type: 'multiple-choice',
 options: ['On exactly 2 of these days, Shane drank 1 to 2 glasses of water.', 'On exactly 3 of these days, Shane drank 7 to 8 glasses of water.', 'On exactly 25% of these days, Shane drank 3 to 4 glasses of water.', 'On exactly 60% of these days, Shane drank 5 to 6 glasses of water.'],
 correctAnswer: 1, 
 explanation: 'Count the value of all the coins and bills shown.'
 },
 {
 id: '31',
 text: 'The digits 1, 2, 3, and 4 are used to make a 3-digit number. Each digit can be repeated. What is the total number of 3-digit numbers that can be made using the.se digits?',
 type: 'multiple-choice',
 options: ['12', '27', '64', '81'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '32',
 text: 'If k = 2, what is the value of k³ - (k - 10) + 4k?',
 type: 'multiple-choice',
 options: ['6', '8', '22', '24'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '33',
 text: 'A spinner has 5 sections of equal size labeled P, Q, R, S, and T. The arrow of this spinner was spun 15 times and landed 4 times on the section labeled Q. <br><img src="images/question_33.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which statement best describes the experimental probability and theoretical probability of the arrow landing on the section labeled Q?',
 type: 'multiple-choice',
 options: ['The experimental probability is <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>, and the theoretical probability is <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>.', 'The experimental probability is <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>, and the theoretical probability is <math><mfrac><mn>4</mn><mn>15</mn></mfrac></math>.', 'The experimental probability is <math><mfrac><mn>4</mn><mn>15</mn></mfrac></math>, and the theoretical probability is <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>.', 'The experimental probability is <math><mfrac><mn>4</mn><mn>15</mn></mfrac></math>, and the theoretical probability is <math><mfrac><mn>4</mn><mn>15</mn></mfrac></math>.'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '34',
 text: 'Ethan earns $12 per hour to walk 2 dogs, plus an additional $7 for brushing the 2 dogs after their walk. <center>Let x represent the hours Ethan works.<br>Let v represent the total he earns each day.</center> Which number sentence best represents this situation?',
 type: 'multiple-choice',
 options: ['12x + 2 + 7 = y', '12x • 2 + 7 = y', '12x + 7 = y', '12x - 7 = y'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '35',
 text: 'Aidan\'s age is 6 years less than half of Maggie\'s age. Aidan\'s age is 4 years. What is Maggie\'s age?',
 type: 'multiple-choice',
 options: ['2 years', '5 years', '10 years', '20 years'],
 correctAnswer: 0, 
 explanation: 'Look at the pattern in the table to determine the relationship between laps and minutes.'
 },
 {
 id: '36',
 text: 'What is the solution to -12x ≤ -72?',
 type: 'multiple-choice',
 options: ['x ≥ 6', 'x ≤ 6', 'x ≥ -6', 'x ≤ -6'],
 correctAnswer: 0, 
 explanation: 'Look at the pattern in the table to determine the relationship between laps and minutes.'
 },
 {
 id: '37',
 text: 'Which property is illustrated by this number sentence? <center>(-1 • 7) + 3 = 3 + (-1 • 7)</center>',
 type: 'multiple-choice',
 options: ['Associative Property of Addition', 'Associative Property of Multiplication', 'Commutative Property of Addition', 'Communative Property of Multiplication', 'Distributive Property', 'Multiplicative Identity Property'],
 correctAnswer: 3, 
 explanation: 'The identity property of multiplication states that any number multiplied by 1 equals itself.'
 },
 {
 id: '38',
 text: 'Which graph represents the solution set to this inequality? <center>x + 5 < 7</center>',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Each number in the pattern is multiplied by 3 to get the next number: 1×3=3, 3×3=9, 9×3=27, 27×3=81.'
 },
 {
 id: '39',
 text: 'This stem-and-leaf plot shows the high temperatures for a city over 20 days. <br><img src="images/question_39.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which histogram represents the same set of data?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_39a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_39b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_39c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_39d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Add up all the points shown on the line plot by multiplying each score by the number of students who achieved it.'
 },
 {
 id: '40',
 text: 'Marjorie bought 24 bottles of juice. Each day she opens and drinks 2 of these bottles of juice. Which of the following best represents the number of unopened bottles of juice Marjorie has at the end of d days?',
 type: 'multiple-choice',
 options: ['2d - 24', '24d - 2', '24 + 2d', '24 - 2d'],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 },
 {
 id: '42',
 text: 'This spinner has 6 sections of equal size. <br><img src="images/question_42.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> The arrow of this spinner was spun 60 times. On 45 out of 60 times, the arrow landed on a section labeled with a multiple of 4. What was the experimenal probability of the arrow landing on a section labeled with a multiple of 4?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 },
 {
 id: '43',
 text: 'What is the solution to <math><mfrac><mn>x</mn><mn>-4</mn></mfrac></math> = 10',
 type: 'multiple-choice',
 options: ['-40', '-6', '6', '40'],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 },
 {
 id: '44',
 text: 'Which of the following is the algebraic form for the verbal statement shown? <center>"13 more than the product of 4 and a number, n"</center>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>n</mn><mn>4</mn></mfrac></math> + 13', '4n + 13', '4(n + 13)', '13(n + 4)'],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 },
 {
 id: '45',
 text: 'The table shows the results of 50 rolls of a fair number cube numbered 1 to 6. <br><img src="images/question_45.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> According to the data in the table, what was the experimental probability of rolling a 1?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>4</mn><mn>25</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>9</mn><mn>50</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 },
 {
 id: '46',
 text: 'A spinner has sections labeled W, X, Y, and Z. The faces of a number cube are labeled 1, 2, 3, 4, 5, and 6. What is the total number of possible outcomes of 1 spin of the arrow on the spinner and 1 roll of the number cube?',
 type: 'multiple-choice',
 options: ['6', '10', '24', '48'],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 },
 {
 id: '47',
 text: 'Which value of k makes -5 > k + 11 true?',
 type: 'multiple-choice',
 options: ['8', '-4', '-16', '-22'],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 },
 {
 id: '48',
 text: 'Which table contains only the points that lie on the line represented by y = <math><mfrac><mn>5</mn><mn>4</mn></mfrac></math>x - 3?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_48a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_48b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_48c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_48d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 },
 {
 id: '49',
 text: 'What is the value of n that makes the following true? <center>n + (-7) = -77</center>',
 type: 'multiple-choice',
 options: ['-84', '-70', '84', '70'],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 },
 {
 id: '50',
 text: 'What is the solution to c - 14 < 16?',
 type: 'multiple-choice',
 options: ['c < 2', 'c > 2', 'c < 30', 'c > 30'],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 },
];

const scaledScoreMapping = {
  0: 0,
  1: 152,
  2: 189,
  3: 211,
  4: 227,
  5: 241,
  6: 252,
  7: 262,
  8: 270,
  9: 278,
  10: 286,
  11: 293,
  12: 299,
  13: 305,
  14: 311,
  15: 317,
  16: 322,
  17: 328,
  18: 333,
  19: 338,
  20: 343,
  21: 348,
  22: 353,
  23: 358,
  24: 363,
  25: 368,
  26: 373,
  27: 377,
  28: 382,
  29: 387,
  30: 392,
  31: 397,
  32: 402,
  33: 408,
  34: 413,
  35: 419,
  36: 425,
  37: 431,
  38: 437,
  39: 444,
  40: 451,
  41: 458,
  42: 466,
  43: 475,
  44: 485,
  45: 497,
  46: 510,
  47: 527,
  48: 549,
  49: 587,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  const clampedScore = Math.max(0, Math.min(40, rawScore));
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
        testType: 'Grade 3 Mathematics (2014)'
      };
      
      console.log(`Saving Grade 3 Math result: ${rawScore}/40 → ${scaledScore} (${performanceLevel})`);
      
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
        result.testType = 'Grade 3 Mathematics (2014)';
        updated = true;
        console.log(`Enhanced Grade 3 Math result ${index + 1}: ${result.rawScore}/40 → ${result.scaledScore} (${result.performanceLevel})`);
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
          const totalQuestions = window.questions ? window.questions.length : 40;
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
            testType: 'Grade 3 Mathematics (2014)'
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