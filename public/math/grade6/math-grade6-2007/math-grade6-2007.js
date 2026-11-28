window.TEST_IDENTIFIER = 'math_grade6_2007';

const sampleQuestions = [
 {
 id: '1',
 text: 'Silas bought a bag of 12 muffins. There were 7 blueberry muffins and 3 banana muffins in the bag. The rest of the muffins were cranberry. What fractional part of the bag of muffins was cranberry?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: '12 − 7 − 3 = 2 cranberry muffins. <math><mfrac><mn>2</mn><mn>12</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>.'
 },
 {
 id: '2',
 text: '2.86 ÷ 0.01 = ___',
 type: 'multiple-choice',
 options: ['2.86', '286', '2,860', '28,600'],
 correctAnswer: 1, 
 explanation: 'Dividing by 0.01 is the same as multiplying by 100: 2.86 × 100 = 286.'
 },
 {
 id: '3',
 text: 'Look at the table. <br><img src="images/3.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How much more would a person pay for 4 T-shirts at T-shirt Connection than at Al\'s T-shirt Shop?',
 type: 'multiple-choice',
 options: ['$0.50', '$2.00', '$20.47', '$22.97'],
 correctAnswer: 1, 
 explanation: 'Each T-shirt costs $7.49 − $6.99 = $0.50 more at T-shirt Connection. 4 × $0.50 = $2.00.'
 },
 {
 id: '4',
 text: '4.48 ÷ 70 = ___',
 type: 'multiple-choice',
 options: ['15.63', '6.4', '0.156', '0.064'],
 correctAnswer: 3, 
 explanation: '4.48 ÷ 70 = 0.064. Check: 0.064 × 70 = 4.48.'
 },
 {
 id: '5',
 text: 'A bicycle shop has 8 bicycles that sell for $298.75 each. Which is <i>closest</i> to the total cost of all the bicycles?',
 type: 'multiple-choice',
 options: ['$300', '$800', '$2,000', '$2,400'],
 correctAnswer: 3, 
 explanation: '$298.75 is about $300, and 8 × $300 = $2,400.'
 },
 {
 id: '6',
 text: 'Look at the table. <br><img src="images/6.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which estimate is <i>closest</i> to the total amount of time James spends on weekend activities?',
 type: 'multiple-choice',
 options: ['10 hours', '6 hours', '3 hours', '1 hour'],
 correctAnswer: 1, 
 explanation: '1 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> + 2 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = (1 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>) + (<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> + 2 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>) + <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = 2 + 3 + <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = 5 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> hours, which is closest to 6 hours.'
 },
 {
 id: '7',
 text: 'A farmer has 6 cartons of specialty eggs for sale. Each carton contains 12 eggs. If <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> of the eggs are brown eggs, what is the total number of brown eggs he has for sale?',
 type: 'multiple-choice',
 options: ['4', '8', '48', '72'],
 correctAnswer: 2, 
 explanation: 'There are 6 × 12 = 72 eggs. <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> of 72 = 48 brown eggs.'
 },
 {
 id: '8',
 text: 'A carpet cleaning company charged $99.99 to clean 3 rooms in a house and $29.99 for each extra room. What is the total amount of money the company would charge to clean 5 rooms in the house?',
 type: 'multiple-choice',
 options: ['$189.96', '$159.97', '$149.95', '$129.98'],
 correctAnswer: 1, 
 explanation: '5 rooms is 3 rooms plus 2 extra rooms: $99.99 + 2 × $29.99 = $99.99 + $59.98 = $159.97.'
 },
 {
 id: '9',
 text: '<br><img src="images/9.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>According to the table, what is the total distance Frank walked for the three days?',
 type: 'multiple-choice',
 options: ['1 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> miles', '2 <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> miles', '2 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> miles', '2 <math><mfrac><mn>11</mn><mn>12</mn></mfrac></math> miles'],
 correctAnswer: 3, 
 explanation: 'Use a common denominator of 12: <math><mfrac><mn>9</mn><mn>12</mn></mfrac></math> + 1 <math><mfrac><mn>6</mn><mn>12</mn></mfrac></math> + <math><mfrac><mn>8</mn><mn>12</mn></mfrac></math> = 1 <math><mfrac><mn>23</mn><mn>12</mn></mfrac></math> = 2 <math><mfrac><mn>11</mn><mn>12</mn></mfrac></math> miles.'
 },
 {
 id: '10',
 text: 'Seth bought a bag of pencils. <br>• <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> of the pencils are red <br>• <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> of the pencils are blue <br>What fractional part of the bag of pencils is either red or blue?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>.'
 },
 {
 id: '11',
 text: 'Which is equivalent to <math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['0.7%', '7%', '70%', '700%'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math> = <math><mfrac><mn>70</mn><mn>100</mn></mfrac></math> = 70%.'
 },
 {
 id: '12',
 text: 'Which statement is <i>not</i> true?',
 type: 'multiple-choice',
 options: ['−8 > −10', '−6 < 6', '3 > −2', '4 < −9'],
 correctAnswer: 3, 
 explanation: 'Any positive number is greater than any negative number, so 4 < −9 is not true.'
 },
 {
 id: '13',
 text: 'Which point on the number line represents the least integer? <br><img src="images/13.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<i>Q</i>', '<i>R</i>', '<i>S</i>', '<i>T</i>'],
 correctAnswer: 2, 
 explanation: 'The least number is the one farthest to the left on the number line, which is point S.'
 },
 {
 id: '14',
 text: '<br><img src="images/14.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Using the representation above, which figure has a prime number of total units?',
 type: 'multiple-choice',
 options: [
    {url: 'images/14a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Choice F has 7 units, and 7 is prime. The other figures have 10, 9, and 35 units, which are not prime.'
 },
 {
 id: '15',
 text: 'Which list of numbers contains <i>only</i> common factors of 24 and 36?',
 type: 'multiple-choice',
 options: ['2, 4, 6, 12', '2, 4, 8, 12', '3, 6, 9, 12', '3, 6, 12, 18'],
 correctAnswer: 0, 
 explanation: '2, 4, 6, and 12 each divide both 24 and 36 evenly. (8 does not divide 36, 9 does not divide 24, and 18 does not divide 24.)'
 },
 {
 id: '16',
 text: 'Which fraction has the same value as 0.6?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '0.6 = <math><mfrac><mn>6</mn><mn>10</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>.'
 },
 {
 id: '17',
 text: '<br><img src="images/17.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>According to the table, what is the ratio of the number of A\'s Camelia earned to the number of B\'s she earned?',
 type: 'multiple-choice',
 options: ['4:7', '3:4', '7:4', '4:3'],
 correctAnswer: 3, 
 explanation: 'She earned 4 A\'s and 3 B\'s, so the ratio is 4:3.'
 },
 {
 id: '18',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>7</mn><mn>11</mn></mfrac></math> ≥ <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> < <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math> < <math><mfrac><mn>4</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math> ≥ <math><mfrac><mn>4</mn><mn>7</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math> = 0.3 and <math><mfrac><mn>4</mn><mn>9</mn></mfrac></math> ≈ 0.44, so <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math> < <math><mfrac><mn>4</mn><mn>9</mn></mfrac></math>.'
 },
 {
 id: '19',
 text: 'Pictured are the three shapes Nora cut out of poster board to build a three-dimensional model. <br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If there is no overlapping, what is the name of the model that could be made from the three shapes?',
 type: 'multiple-choice',
 options: ['Cone', 'Rectangular prism', 'Sphere', 'Cylinder'],
 correctAnswer: 3, 
 explanation: 'Two circles for the bases and a rectangle that wraps around them make a cylinder.'
 },
 {
 id: '20',
 text: 'What is the total number of quarts in 3 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> gallons?',
 type: 'multiple-choice',
 options: ['7', '12', '14', '28'],
 correctAnswer: 2, 
 explanation: 'There are 4 quarts in a gallon: 3 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> × 4 = 14 quarts.'
 },
 {
 id: '21',
 text: 'Rory and Curtis are on the stage crew for the school play. The rectangular stage measures 20 feet by 40 feet. What is the minimum amount of tape they will need to outline the stage?',
 type: 'multiple-choice',
 options: ['60 feet', '120 feet', '400 feet', '800 feet'],
 correctAnswer: 1, 
 explanation: 'The perimeter is 20 + 40 + 20 + 40 = 120 feet.'
 },
 {
 id: '22',
 text: 'Which measurement represents the greatest length?',
 type: 'multiple-choice',
 options: ['6 feet', '27 inches', '1 meter', '98 centimeters'],
 correctAnswer: 0, 
 explanation: '6 feet = 72 inches. 1 meter is about 39 inches and 98 centimeters is a little less. So 6 feet is the greatest.'
 },
 {
 id: '23',
 text: 'The diameter of a circle is 6 feet. Which is <i>closest</i> to the circumference of the circle?',
 type: 'multiple-choice',
 options: ['18.84 ft', '28.26 ft', '37.68 ft', '113.04 ft'],
 correctAnswer: 0, 
 explanation: 'C = πd ≈ 3.14 × 6 = 18.84 feet.'
 },
 {
 id: '24',
 text: 'The scale shows the weight in grams of 6 raisin boxes of the same size. <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the weight of 1 raisin box?',
 type: 'multiple-choice',
 options: ['250 grams', '125 grams', '84 grams', '42 grams'],
 correctAnswer: 3, 
 explanation: 'The scale shows about 250 grams for 6 boxes. 250 ÷ 6 ≈ 42 grams.'
 },
 {
 id: '25',
 text: 'Which measurement represents a length shorter than 5 centimeters?',
 type: 'multiple-choice',
 options: ['1 foot', '2 kilometers', '3 inches', '4 millimeters'],
 correctAnswer: 3, 
 explanation: '4 millimeters = 0.4 centimeter, which is shorter than 5 centimeters.'
 },
 {
 id: '26',
 text: 'Which figure appears to have <i>exactly</i> one pair of parallel sides and two 90° angles?',
 type: 'multiple-choice',
 options: [
    {url: 'images/27a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Choice A is a trapezoid with one pair of parallel sides, and the side joining them is perpendicular to both, making two right angles.'
 },
 {
 id: '27',
 text: 'Point <i>M</i> is the center of the circle shown. Point <i>N</i> lies on circle <i>M</i>. <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>closest</i> to the area of the circle?',
 type: 'multiple-choice',
 options: ['66 cm<sup>2</sup>', '132 cm<sup>2</sup>', '1,386 cm<sup>2</sup>', '5,544 cm<sup>2</sup>'],
 correctAnswer: 2, 
 explanation: 'The radius is 21 cm. A = πr² ≈ <math><mfrac><mn>22</mn><mn>7</mn></mfrac></math> × 21 × 21 = 1,386 cm<sup>2</sup>.'
 },
 {
 id: '28',
 text: 'Sarah folded the following figure along the dotted lines to make a three-dimensional shape. <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which <i>best</i> describes the shape Sarah made?',
 type: 'multiple-choice',
 options: ['Triangular pyramid', 'Triangular prism', 'Rectangular prism', 'Square pyramid'],
 correctAnswer: 3, 
 explanation: 'The net has a square base and 4 triangles that fold up to meet at a point, which makes a square pyramid.'
 },
 {
 id: '29',
 text: 'Which are the measures of the 3 angles of an equilateral triangle?',
 type: 'multiple-choice',
 options: ['35°, 45°, 110°', '45°, 45°, 90°', '60°, 60°, 60°', '30°, 60°, 90°'],
 correctAnswer: 2, 
 explanation: 'An equilateral triangle has 3 equal angles, and 180° ÷ 3 = 60°.'
 },
 {
 id: '30',
 text: 'Look at the table. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>According to the table, what was the median number of customers?',
 type: 'multiple-choice',
 options: ['115', '126', '131', '172'],
 correctAnswer: 1, 
 explanation: 'In order: 108, 115, 126, 134, 172. The middle value is 126.'
 },
 {
 id: '31',
 text: 'Which is most likely the range for the data plotted in the box-and-whisker plot? <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['6', '14', '21', '29'],
 correctAnswer: 1, 
 explanation: 'The whiskers go from 15 to 29. Range = 29 − 15 = 14.'
 },
 {
 id: '32',
 text: 'The possible outcomes when rolling a pair of fair number cubes are listed below. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the probability of rolling the same number of dots on both number cubes on the first try?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>30</mn><mn>36</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>36</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>36</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>36</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'There are 36 outcomes and 6 of them are doubles (1-1, 2-2, 3-3, 4-4, 5-5, 6-6), so the probability is <math><mfrac><mn>6</mn><mn>36</mn></mfrac></math>.'
 },
 {
 id: '33',
 text: 'The graph shows how the number of video games in Ginny\'s collection increased over a period of months. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which statement is <i>false</i> about Ginny\'s video game collection during this period?',
 type: 'multiple-choice',
 options: ['The number of video games did not appear to change from March to April.', 'The trend for the number of video games is increasing.', 'The greatest monthly increase in the number of video games was from January to February.', 'The number of video games increased by 1 from May to June.'],
 correctAnswer: 3, 
 explanation: 'The graph shows about 10 games in May and 12 in June, an increase of 2, not 1. So that statement is false.'
 },
 {
 id: '34',
 text: 'The data below lists the number of pages in each book Harry read last summer. <br>225, 157, 144, 312, 281, 276, 166 <br>What is the median of the data?',
 type: 'multiple-choice',
 options: ['168', '223', '225', '312'],
 correctAnswer: 2, 
 explanation: 'In order: 144, 157, 166, 225, 276, 281, 312. The middle value is 225.'
 },
 {
 id: '35',
 text: 'Look at the table. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>According to the table, what is the mean number of students enrolled in a class?',
 type: 'multiple-choice',
 options: ['7', '10', '11', '50'],
 correctAnswer: 1, 
 explanation: '8 + 6 + 11 + 12 + 13 = 50. 50 ÷ 5 classes = 10.'
 },
 {
 id: '36',
 text: 'Look at the chart. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which stem-and-leaf plot correctly displays the information from the chart?',
 type: 'multiple-choice',
 options: [
    {url: 'images/37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'In order, the heights are 56, 58, 62, 62, 64, 67, 68, 69, 72, 74, 78. Plot A shows the 60s as 2, 2, 4, 7, 8, 9 and the 70s as 2, 4, 8.'
 },
 {
 id: '37',
 text: 'Look at the table. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Mark randomly chooses 1 of these same-sized pastries from the box, what is the probability that it will have a cream cheese filling?',
 type: 'multiple-choice',
 options: ['25%', '30%', '43%', '60%'],
 correctAnswer: 1, 
 explanation: 'There are 4 + 3 + 6 + 7 = 20 pastries and 6 are cream cheese. <math><mfrac><mn>6</mn><mn>20</mn></mfrac></math> = 30%.'
 },
 {
 id: '38',
 text: 'Based on the pattern shown, what is the value of 6<sup>6</sup>? <br>6<sup>1</sup> = 6 <br>6<sup>2</sup> = 36 <br>6<sup>3</sup> = 216 <br>6<sup>4</sup> = 1,296',
 type: 'multiple-choice',
 options: ['1,308', '2,592', '36,000', '46,656'],
 correctAnswer: 3, 
 explanation: '6<sup>5</sup> = 1,296 × 6 = 7,776 and 6<sup>6</sup> = 7,776 × 6 = 46,656.'
 },
 {
 id: '39',
 text: 'Which is an equation?',
 type: 'multiple-choice',
 options: ['52 = 0.5 + <i>x</i>', '5<i>x</i> + 7', '(48 − 6<i>x</i>) + 13', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math><i>x</i> + 7'],
 correctAnswer: 0, 
 explanation: 'An equation has an equal sign. Only 52 = 0.5 + x has one.'
 },
 {
 id: '40',
 text: 'Which is a perfect square between 81 and 121?',
 type: 'multiple-choice',
 options: ['86', '99', '100', '114'],
 correctAnswer: 2, 
 explanation: '100 = 10 × 10, so it is a perfect square.'
 },
 {
 id: '41',
 text: 'Patty made a figure by drawing 4 small squares as shown below. <br><img src="images/42-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Patty then increased the size of the figure by adding 1 row and 1 column of small squares to get the next figure in the pattern. The next three figures in the pattern are shown below. <br><img src="images/42-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Patty continues the pattern using the same rule, how many small squares will make up the 7th figure?',
 type: 'multiple-choice',
 options: ['64', '49', '34', '25'],
 correctAnswer: 0, 
 explanation: 'The 1st figure is 2 × 2, the 2nd is 3 × 3, and so on. The 7th figure is 8 × 8 = 64 squares.'
 },
 {
 id: '42',
 text: 'What value of <i>z</i> makes the number sentence shown true? <br><i>z</i> + 53 = 92',
 type: 'multiple-choice',
 options: ['4,876', '145', '49', '39'],
 correctAnswer: 3, 
 explanation: 'Subtract 53 from both sides: z = 92 − 53 = 39.'
 },
 {
 id: '43',
 text: 'A pattern is made by repeating the four shapes shown below. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues in the same way, what will be the <i>14th</i> shape?',
 type: 'multiple-choice',
 options: [
    {url: 'images/44a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The pattern repeats every 4 shapes. 14 = 4 + 4 + 4 + 2, so the 14th shape is the same as the 2nd shape, the up arrow.'
 },
 {
 id: '44',
 text: 'Which best describes the circled part of the following? <br><img src="images/45.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Variable', 'Coefficient', 'Term', 'Equation'],
 correctAnswer: 0, 
 explanation: 'The circled x is a letter that stands for an unknown number, so it is a variable.'
 },
 {
 id: '45',
 text: 'Miss Jackson wrote this number sentence on the board. <br><img src="images/46.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which procedure could be used to find a value for <i>x</i> that will make the number sentence true?',
 type: 'multiple-choice',
 options: ['Subtract 7 from 7<i>x</i>, and subtract 7 from 36.', 'Multiply 7<i>x</i> by 7, and multiply 36 by 7.', 'Divide 7<i>x</i> by 7, and divide 36 by 7.', 'Add 7 to 7<i>x</i>, and add 7 to 36.'],
 correctAnswer: 2, 
 explanation: 'To undo multiplying by 7, divide both sides by 7.'
 },
 {
 id: '46',
 text: 'The drawing below is a scale that is balanced. Each △ represents an <i>x</i>, and each ● represents a 1. <br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which best represents the drawing?',
 type: 'multiple-choice',
 options: ['3 + <i>x</i> = 21', '3 + <i>x</i> > 21', '3<i>x</i> > 21', '3<i>x</i> = 21'],
 correctAnswer: 3, 
 explanation: 'There are 3 triangles (3x) on one side and 21 circles on the other, and the scale is balanced, so 3x = 21.'
 },
 {
 id: '47',
 text: 'The first term in the following pattern is 1. <br>1, 7, 19, 43, 91 <br>If the pattern continues in the same way, which rule could be used to get the next term in the pattern?',
 type: 'multiple-choice',
 options: ['Multiply by 2, and then add 5.', 'Add 12.', 'Multiply by 3, and then add 4.', 'Add 6.'],
 correctAnswer: 0, 
 explanation: '1 × 2 + 5 = 7, 7 × 2 + 5 = 19, 19 × 2 + 5 = 43, and 43 × 2 + 5 = 91.'
 },
 {
 id: '48',
 text: 'Luanne stacked some checkers in a triangular shape as pictured. Each row has 1 less checker than the previous row. <br><img src="images/49.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Luanne made another stack using the same pattern starting with 8 checkers in the bottom row. How many total checkers were in her new stack?',
 type: 'multiple-choice',
 options: ['19 checkers', '21 checkers', '29 checkers', '36 checkers'],
 correctAnswer: 3, 
 explanation: '8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36 checkers.'
 },
 {
 id: '49',
 text: 'The scale below is balanced. <br><img src="images/50-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Using the representations and scale above, which could be placed on the right side of the following scale to make it balanced? <br><img src="images/50-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/50a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: '3 dogs balance 12 bones, so 1 dog (x) equals 12 ÷ 3 = 4 bones. Choice G shows 4 bones.'
 }
];

// Scaled Score Mapping for Grade 6 Mathematics (2007)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 12,
  2: 67,
  3: 101,
  4: 125,
  5: 145,
  6: 161,
  7: 176,
  8: 188,
  9: 200,
  10: 211,
  11: 221,
  12: 231,
  13: 240,
  14: 248,
  15: 256,
  16: 264,
  17: 272,
  18: 279,
  19: 287,
  20: 294,
  21: 301,
  22: 308,
  23: 315,
  24: 322,
  25: 329,
  26: 336,
  27: 342,
  28: 349,
  29: 356,
  30: 363,
  31: 370,
  32: 378,
  33: 385,
  34: 393,
  35: 401,
  36: 409,
  37: 417,
  38: 426,
  39: 435,
  40: 445,
  41: 456,
  42: 467,
  43: 480,
  44: 494,
  45: 510,
  46: 529,
  47: 553,
  48: 586,
  49: 600,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 25 of the released test required measuring with a physical protractor and was removed.
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
        testType: 'Grade 6 Mathematics (2007)'
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
        result.testType = 'Grade 6 Mathematics (2007)';
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
            testType: 'Grade 6 Mathematics (2007)'
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