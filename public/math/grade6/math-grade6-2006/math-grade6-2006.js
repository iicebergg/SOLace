window.TEST_IDENTIFIER = 'math_grade6_2006';

const sampleQuestions = [
 {
 id: '1',
 text: 'Jamal walked <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> mile yesterday morning and <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> mile yesterday afternoon. What was the total distance walked by Jamal?',
 type: 'multiple-choice',
 options: ['1 mile', '<math><mfrac><mn>7</mn><mn>8</mn></mfrac></math> mile', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> mile', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> mile'],
 correctAnswer: 1, 
 explanation: 'Rewrite <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> as <math><mfrac><mn>6</mn><mn>8</mn></mfrac></math>. Then <math><mfrac><mn>6</mn><mn>8</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>7</mn><mn>8</mn></mfrac></math> mile.'
 },
 {
 id: '2',
 text: 'Mrs. Dinato remembered the area of the top of her rectangular table was between 1,500 and 2,000 square inches. Which could be the dimensions of her table?',
 type: 'multiple-choice',
 options: ['72 in. × 36 in.', '60 in. × 30 in.', '40 in. × 30 in.', '18 in. × 32 in.'],
 correctAnswer: 1, 
 explanation: '60 × 30 = 1,800 square inches, which is between 1,500 and 2,000. (72 × 36 = 2,592, 40 × 30 = 1,200, and 18 × 32 = 576.)'
 },
 {
 id: '3',
 text: 'One batch of Derrick\'s pancake recipe takes 2 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> cups of milk. If Derrick makes 3 batches of his pancake recipe, how many cups of milk will he need?',
 type: 'multiple-choice',
 options: ['8 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> cups', '8 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> cups', '6 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> cups', '6 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> cups'],
 correctAnswer: 1, 
 explanation: '3 × 2 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> = 6 + <math><mfrac><mn>9</mn><mn>4</mn></mfrac></math> = 6 + 2 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = 8 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> cups.'
 },
 {
 id: '4',
 text: '0.084 ÷ 0.6 = ___',
 type: 'multiple-choice',
 options: ['7.14', '1.4', '0.714', '0.14'],
 correctAnswer: 3, 
 explanation: 'Multiply both numbers by 10: 0.84 ÷ 6 = 0.14.'
 },
 {
 id: '5',
 text: '<br><img src="images/5.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on this table, what is the cost to buy 10 of each different type of reed?',
 type: 'multiple-choice',
 options: ['$18.50', '$26.92', '$71.47', '$98.35'],
 correctAnswer: 2, 
 explanation: '10 clarinet reeds = 1 box ($5.13). 10 oboe reeds = 10 boxes ($49.50). 10 saxophone reeds = 2 boxes ($16.84). $5.13 + $49.50 + $16.84 = $71.47.'
 },
 {
 id: '6',
 text: 'Look at the table. <br><img src="images/6.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What would be the <i>least</i> amount of money Jeremy\'s dad could spend if he bought one of each type of sign?',
 type: 'multiple-choice',
 options: ['$512', '$761', '$816', '$819'],
 correctAnswer: 1, 
 explanation: 'Buy the cheaper neon sign ($534 at Store B) and the cheaper wood sign ($227 at Store A): $534 + $227 = $761.'
 },
 {
 id: '7',
 text: 'Maria has a piece of ribbon <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> foot long. She cuts <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> foot off of the piece of ribbon. What is the length of the remaining piece of ribbon?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math> foot', '<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> foot', '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> foot', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> foot'],
 correctAnswer: 0, 
 explanation: 'Use a common denominator of 12: <math><mfrac><mn>10</mn><mn>12</mn></mfrac></math> − <math><mfrac><mn>9</mn><mn>12</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>12</mn></mfrac></math> foot.'
 },
 {
 id: '8',
 text: 'Harry worked 1 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> hours on Friday and 3 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> hours on Saturday. What was the total amount of time Harry worked on those two days?',
 type: 'multiple-choice',
 options: ['4 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> hours', '4 <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math> hours', '5 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> hours', '5 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> hours'],
 correctAnswer: 2, 
 explanation: '1 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> + 3 <math><mfrac><mn>2</mn><mn>4</mn></mfrac></math> = 4 <math><mfrac><mn>5</mn><mn>4</mn></mfrac></math> = 5 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> hours.'
 },
 {
 id: '9',
 text: '6.596 ÷ 0.04 = ___',
 type: 'multiple-choice',
 options: ['164.9', '16.49', '6.06', '0.61'],
 correctAnswer: 0, 
 explanation: 'Multiply both numbers by 100: 659.6 ÷ 4 = 164.9.'
 },
 {
 id: '10',
 text: 'Cody was paid $15.00 for washing his mother\'s car. If he spends $5.75 on a movie, $1.50 on candy, and $2.00 for a soda, which is closest to the amount he will have left?',
 type: 'multiple-choice',
 options: ['$10.00', '$8.00', '$5.00', '$0'],
 correctAnswer: 2, 
 explanation: 'He spends $5.75 + $1.50 + $2.00 = $9.25. $15.00 − $9.25 = $5.75, which is closest to $5.00.'
 },
 {
 id: '11',
 text: 'There are 30 red marbles and 150 blue marbles in a box. What is the ratio of blue marbles to red marbles?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>180</mn><mn>30</mn></mfrac></math>', '<math><mfrac><mn>30</mn><mn>80</mn></mfrac></math>', '<math><mfrac><mn>150</mn><mn>30</mn></mfrac></math>', '<math><mfrac><mn>30</mn><mn>150</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'Blue to red is 150 to 30, or <math><mfrac><mn>150</mn><mn>30</mn></mfrac></math>.'
 },
 {
 id: '12',
 text: 'What is the least common multiple of 6 and 10?',
 type: 'multiple-choice',
 options: ['20', '30', '60', '90'],
 correctAnswer: 1, 
 explanation: 'Multiples of 6: 6, 12, 18, 24, 30. Multiples of 10: 10, 20, 30. The least common multiple is 30.'
 },
 {
 id: '13',
 text: 'Which statement is true?',
 type: 'multiple-choice',
 options: ['−599 > −385', '4,119 < −3,513', '−56,803 > −64,122', '−85 > 89'],
 correctAnswer: 2, 
 explanation: '−56,803 is closer to zero than −64,122, so it is greater.'
 },
 {
 id: '14',
 text: 'Which group contains <i>only</i> prime numbers?',
 type: 'multiple-choice',
 options: ['5, 13, 29, and 47', '7, 11, 27, and 43', '7, 19, 33, and 41', '11, 17, 37, and 39'],
 correctAnswer: 0, 
 explanation: '5, 13, 29, and 47 each have only two factors, 1 and themselves. 27 = 3 × 9, 33 = 3 × 11, and 39 = 3 × 13 are not prime.'
 },
 {
 id: '15',
 text: 'What is the greatest common factor of 30, 42, and 48?',
 type: 'multiple-choice',
 options: ['2', '3', '6', '8'],
 correctAnswer: 2, 
 explanation: '6 divides 30, 42, and 48 evenly, and no larger number divides all three.'
 },
 {
 id: '16',
 text: 'The picture shows the number of stars Angie received from her piano teacher for practicing. <br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the ratio of the number of striped stars to black stars?',
 type: 'multiple-choice',
 options: ['4 to 3', '3 to 4', '4 to 10', '6 to 10'],
 correctAnswer: 0, 
 explanation: 'There are 4 striped stars and 3 black stars, so the ratio is 4 to 3.'
 },
 {
 id: '17',
 text: 'Which statement is true?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> > <math><mfrac><mn>7</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> > <math><mfrac><mn>6</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> > <math><mfrac><mn>6</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math> > <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>9</mn><mn>12</mn></mfrac></math>, and <math><mfrac><mn>9</mn><mn>12</mn></mfrac></math> > <math><mfrac><mn>7</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '18',
 text: 'Which represents the part of the 10-by-10 grid that is shaded? <br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '60 of the 100 squares are shaded. <math><mfrac><mn>60</mn><mn>100</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>.'
 },
 {
 id: '19',
 text: 'A wall in Kelly\'s house is diagrammed below. <br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the width of the wall?',
 type: 'multiple-choice',
 options: ['6 window widths', '4 window widths', '2 door widths', '4 door widths'],
 correctAnswer: 3, 
 explanation: 'The door is about one-fourth as wide as the wall, so the wall is about 4 door widths wide.'
 },
 {
 id: '20',
 text: 'What is the sum of the measures of all the interior angles of any quadrilateral?',
 type: 'multiple-choice',
 options: ['90°', '180°', '360°', '450°'],
 correctAnswer: 2, 
 explanation: 'A quadrilateral can be divided into 2 triangles, and each triangle has 180°, so the sum is 360°.'
 },
 {
 id: '21',
 text: 'Which two figures <i>always</i> have four congruent sides?',
 type: 'multiple-choice',
 options: ['Rhombus and square', 'Rectangle and rhombus', 'Square and equilateral triangle', 'Parallelogram and rectangle'],
 correctAnswer: 0, 
 explanation: 'A rhombus and a square always have 4 sides of equal length.'
 },
 {
 id: '22',
 text: 'If the diameter of a circle is 7 inches, which is closest to the circumference?',
 type: 'multiple-choice',
 options: ['21.98 in.', '38.47 in.', '43.96 in.', '153.86 in.'],
 correctAnswer: 0, 
 explanation: 'C = πd ≈ 3.14 × 7 = 21.98 inches.'
 },
 {
 id: '23',
 text: 'The glasses shown each hold 12 fluid ounces when full. The shaded portions show how much water Robert drinks on average every morning. <br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the amount of water Robert drinks on average every morning?',
 type: 'multiple-choice',
 options: ['3 fluid ounces', '18 fluid ounces', '22 fluid ounces', '34 fluid ounces'],
 correctAnswer: 3, 
 explanation: 'Two glasses are full (24 ounces), one is about half full (6 ounces), and one is about one-third full (4 ounces). 24 + 6 + 4 = 34 fluid ounces.'
 },
 {
 id: '24',
 text: 'Six points are shown on the grid. <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which three points can be connected in the order shown to form an acute angle?',
 type: 'multiple-choice',
 options: ['Points <i>M</i>, <i>N</i>, and <i>R</i>', 'Points <i>M</i>, <i>N</i>, and <i>P</i>', 'Points <i>N</i>, <i>R</i>, and <i>S</i>', 'Points <i>N</i>, <i>P</i>, and <i>S</i>'],
 correctAnswer: 1, 
 explanation: 'Angle MNP has its vertex at N. Ray NM goes straight up and ray NP goes up and to the right, so the angle between them is less than 90°.'
 },
 {
 id: '25',
 text: 'What is the area of the large rectangle shown if each small square is 4 inches wide and 4 inches long? <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['480 sq in.', '120 sq in.', '80 sq in.', '30 sq in.'],
 correctAnswer: 0, 
 explanation: 'There are 6 × 5 = 30 small squares, and each has an area of 4 × 4 = 16 square inches. 30 × 16 = 480 square inches.'
 },
 {
 id: '26',
 text: 'Which solid could <i>not</i> have two parallel faces?',
 type: 'multiple-choice',
 options: ['Cube', 'Rectangular prism', 'Pyramid', 'Cylinder'],
 correctAnswer: 2, 
 explanation: 'A pyramid has one base and triangular faces that meet at a point, so no two of its faces are parallel.'
 },
 {
 id: '27',
 text: '<br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The measure of the angle shown is —',
 type: 'multiple-choice',
 options: ['between 0° and 45°', 'between 45° and 90°', 'between 90° and 180°', 'greater than 180°'],
 correctAnswer: 2, 
 explanation: 'The angle opens wider than a square corner but less than a straight line, so it is between 90° and 180°.'
 },
 {
 id: '28',
 text: 'Which measurement represents the <i>greatest</i> volume?',
 type: 'multiple-choice',
 options: ['17 pints', '2 gallons', '35 cups', '9 quarts'],
 correctAnswer: 3, 
 explanation: 'Convert to quarts: 17 pints = 8.5 quarts, 2 gallons = 8 quarts, 35 cups = 8.75 quarts. 9 quarts is the greatest.'
 },
 {
 id: '29',
 text: '<br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which picture appears to show Steve\'s body at an angle congruent to the angle shown above?',
 type: 'multiple-choice',
 options: [
    {url: 'images/29a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Congruent angles have the same measure. The angle in choice C opens the same amount as the angle shown above.'
 },
 {
 id: '30',
 text: 'Which shape is <i>not</i> a quadrilateral?',
 type: 'multiple-choice',
 options: ['Square', 'Parallelogram', 'Pentagon', 'Trapezoid'],
 correctAnswer: 2, 
 explanation: 'A quadrilateral has 4 sides. A pentagon has 5 sides.'
 },
 {
 id: '31',
 text: 'Chrissy has 4 white towels, 2 yellow towels, and 3 blue towels in a bag. What is the probability that the first towel chosen at random from the bag will be white?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>9</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'There are 4 + 2 + 3 = 9 towels, and 4 are white, so the probability is <math><mfrac><mn>4</mn><mn>9</mn></mfrac></math>.'
 },
 {
 id: '32',
 text: 'What is the range of the numbers listed? <br>76, 59, 91, 22, 43, 57, 89, 76, 31',
 type: 'multiple-choice',
 options: ['43', '45', '60', '69'],
 correctAnswer: 3, 
 explanation: 'Range = greatest − least = 91 − 22 = 69.'
 },
 {
 id: '33',
 text: 'Which stem-and-leaf plot correctly displays this data? <br>15 &nbsp; 32 &nbsp; 21 &nbsp; 13 &nbsp; 36 &nbsp; 10 &nbsp; 23 <br>30 &nbsp; 15 &nbsp; 11 &nbsp; 27 &nbsp; 42 &nbsp; 33',
 type: 'multiple-choice',
 options: [
    {url: 'images/33a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'In order, the data are 10, 11, 13, 15, 15, 21, 23, 27, 30, 32, 33, 36, 42. Plot A shows all 13 values.'
 },
 {
 id: '34',
 text: '76, 79, 75, 77, 74 <br>For the data listed, the value 76.2 represents the —',
 type: 'multiple-choice',
 options: ['median', 'mode', 'range', 'mean'],
 correctAnswer: 3, 
 explanation: 'The sum is 381, and 381 ÷ 5 = 76.2, so 76.2 is the mean.'
 },
 {
 id: '35',
 text: 'These are six songs that are on Jane\'s new CD. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If her CD player plays the songs randomly, what is the probability that the song <i>Mongoose Omelette</i> will play first?',
 type: 'multiple-choice',
 options: ['−0.6', '0', '0.6', '1'],
 correctAnswer: 1, 
 explanation: '<i>Mongoose Omelette</i> is not one of the songs on the CD, so it is impossible for it to play. The probability is 0.'
 },
 {
 id: '36',
 text: 'Look at the graph. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which type of clothing appears to have had 5 times the sales of dresses?',
 type: 'multiple-choice',
 options: ['Shorts', 'Pants', 'Shirts', 'Skirts'],
 correctAnswer: 0, 
 explanation: 'Dresses sold 20. 5 × 20 = 100, and shorts sold 100.'
 },
 {
 id: '37',
 text: 'The number of pages Jane read in a book each day for one week are listed below. <br>{12, 18, 19, 11, 12, 15, 18} <br>Below is the box-and-whisker plot of this data. To which number is the arrow most likely pointing? <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['11', '12', '15', '18'],
 correctAnswer: 2, 
 explanation: 'The arrow points to the line inside the box, which is the median. In order, the data are 11, 12, 12, 15, 18, 18, 19, so the median is 15.'
 },
 {
 id: '38',
 text: 'Mr. Warren requires his students to read 2 books: 1 book from list #1 and 1 book from list #2. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the total number of different combinations for the 2 books?',
 type: 'multiple-choice',
 options: ['9', '6', '2', '1'],
 correctAnswer: 0, 
 explanation: 'Each of the 3 books on list #1 can be paired with each of the 3 books on list #2: 3 × 3 = 9 combinations.'
 },
 {
 id: '39',
 text: 'Based on the geometric pattern shown, what is the value of 8<sup>5</sup>? <br>8<sup>1</sup> = 8 <br>8<sup>2</sup> = 64 <br>8<sup>3</sup> = 512 <br>8<sup>4</sup> = 4,096',
 type: 'multiple-choice',
 options: ['13', '40', '20,480', '32,768'],
 correctAnswer: 3, 
 explanation: 'Each value is 8 times the one before: 4,096 × 8 = 32,768.'
 },
 {
 id: '40',
 text: 'Which represents the variable in the following number sentence? <br>3 + <i>v</i> = 45',
 type: 'multiple-choice',
 options: ['3', '<i>v</i>', '=', '45'],
 correctAnswer: 1, 
 explanation: 'A variable is a letter that stands for an unknown number. In this sentence the variable is v.'
 },
 {
 id: '41',
 text: '2.3 × 10<sup>7</sup> = ___',
 type: 'multiple-choice',
 options: ['230,000,000', '23,000,000', '2,300,000', '230,000'],
 correctAnswer: 1, 
 explanation: 'Multiplying by 10<sup>7</sup> moves the decimal point 7 places to the right: 23,000,000.'
 },
 {
 id: '42',
 text: 'Which method could be used to solve the number sentence shown? <br>4<i>x</i> = 16',
 type: 'multiple-choice',
 options: ['Subtract 4 from 4<i>x</i>, and subtract 4 from 16', 'Subtract 4 from 4<i>x</i>, and subtract 16 from 16', 'Divide 4<i>x</i> by 4, and divide 16 by 16', 'Divide 4<i>x</i> by 4, and divide 16 by 4'],
 correctAnswer: 3, 
 explanation: 'To undo multiplying by 4, divide both sides by 4: x = 16 ÷ 4 = 4.'
 },
 {
 id: '43',
 text: 'What value of <i>y</i> makes the number sentence shown true? <br><i>y</i> − 3 = 15',
 type: 'multiple-choice',
 options: ['5', '12', '18', '45'],
 correctAnswer: 2, 
 explanation: 'Add 3 to both sides: y = 15 + 3 = 18.'
 },
 {
 id: '44',
 text: '<br><img src="images/44-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Use the representations above to answer the question. <br><img src="images/44-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the scale is balanced, which number sentence does it best represent?',
 type: 'multiple-choice',
 options: ['5<i>w</i> = 30', '<i>w</i> + 5 = 30', '5 − <i>w</i> = 30', '<i>w</i> ÷ 5 = 30'],
 correctAnswer: 0, 
 explanation: 'There are 5 stars (5w) on the left and 30 rectangles (30) on the right, so 5w = 30.'
 },
 {
 id: '45',
 text: 'The number 514 in scientific notation is written as —',
 type: 'multiple-choice',
 options: ['5.14 × 10<sup>1</sup>', '5.14 × 10<sup>2</sup>', '51.4 × 10<sup>1</sup>', '514 × 10<sup>2</sup>'],
 correctAnswer: 1, 
 explanation: '514 = 5.14 × 100 = 5.14 × 10<sup>2</sup>.'
 },
 {
 id: '46',
 text: 'Which is an equation?',
 type: 'multiple-choice',
 options: ['<i>x</i> + 6', '5 > 7', '<i>x</i>', '<i>x</i> + <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = 9'],
 correctAnswer: 3, 
 explanation: 'An equation has an equal sign showing that two expressions are equal. Only x + <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = 9 has an equal sign.'
 },
 {
 id: '47',
 text: 'Kale wrote the number pattern shown. <br>1, 2, 4, 7, 11, . . . <br>He noticed another pattern when he found that the differences between the numbers increased by 1 as shown below. <br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the differences continue to increase by 1, what will be the 7th term in Kale\'s <i>original</i> pattern?',
 type: 'multiple-choice',
 options: ['15', '19', '21', '22'],
 correctAnswer: 3, 
 explanation: 'The next differences are +5 and +6: 11 + 5 = 16 (6th term), and 16 + 6 = 22 (7th term).'
 },
 {
 id: '48',
 text: '<br><img src="images/48.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Using the representations above, which model best represents the following? <br><i>r</i> + 2 = 18',
 type: 'multiple-choice',
 options: [
    {url: 'images/48a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/48b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/48c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/48d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The left side needs 1 cube (r) and 2 disks (2). The right side needs 18 disks. Choice G shows this.'
 },
 {
 id: '49',
 text: 'The first four figures in a pattern are shown. <br><img src="images/49.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues to double the number of dots, what will be the total number of dots in the 6th figure in the pattern?',
 type: 'multiple-choice',
 options: ['128', '64', '32', '14'],
 correctAnswer: 1, 
 explanation: 'The figures have 2, 4, 8, and 16 dots. The 5th figure has 32 dots and the 6th has 64 dots.'
 },
 {
 id: '50',
 text: 'Gracie\'s pattern of increasing perfect squares is shown below. <br>25, 36, ___, 64, 81, 100 <br>What number does Gracie need to square to find the missing term?',
 type: 'multiple-choice',
 options: ['5', '6', '7', '8'],
 correctAnswer: 2, 
 explanation: 'The squares are 5², 6², ___, 8², 9², 10². The missing term is 7² = 49, so Gracie needs to square 7.'
 }
];

// Scaled Score Mapping for Grade 6 Mathematics (2006)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 22,
  2: 77,
  3: 111,
  4: 135,
  5: 155,
  6: 171,
  7: 186,
  8: 198,
  9: 210,
  10: 220,
  11: 231,
  12: 240,
  13: 249,
  14: 257,
  15: 265,
  16: 274,
  17: 281,
  18: 289,
  19: 295,
  20: 303,
  21: 310,
  22: 317,
  23: 323,
  24: 330,
  25: 337,
  26: 344,
  27: 350,
  28: 357,
  29: 364,
  30: 371,
  31: 378,
  32: 385,
  33: 392,
  34: 400,
  35: 408,
  36: 416,
  37: 424,
  38: 432,
  39: 442,
  40: 452,
  41: 462,
  42: 474,
  43: 486,
  44: 500,
  45: 516,
  46: 535,
  47: 559,
  48: 592,
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
        testType: 'Grade 6 Mathematics (2006)'
      };
      
      console.log(`Saving Grade 6 Math result: ${rawScore}/${sampleQuestions.length} → ${scaledScore} (${performanceLevel})`);
      
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
        result.testType = 'Grade 6 Mathematics (2006)';
        updated = true;
        console.log(`Enhanced Grade 6 Math result ${index + 1}: ${result.rawScore}/${sampleQuestions.length} → ${result.scaledScore} (${result.performanceLevel})`);
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
            testType: 'Grade 6 Mathematics (2006)'
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