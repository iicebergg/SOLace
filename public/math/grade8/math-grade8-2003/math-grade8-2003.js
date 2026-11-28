window.TEST_IDENTIFIER = 'math_grade8_2003';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which of the following is <i>not</i> a prime number?',
 type: 'multiple-choice',
 options: ['13', '17', '33', '47'],
 correctAnswer: 2, 
 explanation: '33 = 3 × 11, so it is not prime.'
 },
 {
 id: '2',
 text: 'On a certain map, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> inch represents 75 miles. If the distance between two towns on this map is 2 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> inches, what is the actual distance between the two towns?',
 type: 'multiple-choice',
 options: ['15 mi', '16 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> mi', '337.5 mi', '375 mi'],
 correctAnswer: 2, 
 explanation: '1 inch represents 150 miles. 2 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> × 150 = 337.5 miles.'
 },
 {
 id: '3',
 text: 'Which is ordered from least to greatest?',
 type: 'multiple-choice',
 options: ['0.003, 3%, <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>, 3 · 10<sup>1</sup>', '3 · 10<sup>1</sup>, 0.003, <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>, 3%', '<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>, 3%, 0.003, 3 · 10<sup>1</sup>', '3 · 10<sup>1</sup>, 3%, 0.003, <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'As decimals: 0.003, 3% = 0.03, <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math> = 0.3, and 3 · 10<sup>1</sup> = 30.'
 },
 {
 id: '4',
 text: 'The diagram shows how some of the subsets of the set of real numbers are related. The letters represent members of the sets. <br><img src="images/4.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Terrie wants to replace the letters with actual numbers. Which letter could be replaced with −3?',
 type: 'multiple-choice',
 options: ['<i>n</i>', '<i>r</i>', '<i>u</i>', '<i>x</i>'],
 correctAnswer: 1, 
 explanation: '−3 is an integer but not a whole number. Letter r is in the Integers circle but outside the Whole Numbers circle.'
 },
 {
 id: '5',
 text: 'Which is <i>not</i> equivalent to <math><mfrac><mn>20</mn><mn>3</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['6 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '6.<span style="text-decoration: overline">6</span>', '66 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>%', '<math><mfrac><mn>40</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>20</mn><mn>3</mn></mfrac></math> = 6.666... = 666 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>%. 66 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>% equals only <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>, so it is not equivalent.'
 },
 {
 id: '6',
 text: 'Peggy is stocking boxes of cereal on a shelf in the supermarket. She has 48 boxes of corn flakes and 72 boxes of bran flakes. The boxes are to be arranged so each row has the same number of boxes and only one kind of cereal. What is the greatest number of boxes that can be in each row?',
 type: 'multiple-choice',
 options: ['8', '9', '12', '24'],
 correctAnswer: 3, 
 explanation: 'The greatest number is the greatest common factor of 48 and 72, which is 24.'
 },
 {
 id: '7',
 text: 'Sarah is filling numbers in the Venn diagram. No number is to be entered more than once. <br><img src="images/7.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the least number that can be appropriately placed in the shaded area of the diagram?',
 type: 'multiple-choice',
 options: ['360', '240', '120', '60'],
 correctAnswer: 2, 
 explanation: 'The shaded area holds common multiples of 15 and 24. The least common multiple of 15 and 24 is 120.'
 },
 {
 id: '8',
 text: 'Which is equivalent to 9 − 2<sup>3</sup>?',
 type: 'multiple-choice',
 options: ['343', '4', '3', '1'],
 correctAnswer: 3, 
 explanation: '2<sup>3</sup> = 8, and 9 − 8 = 1.'
 },
 {
 id: '9',
 text: 'As labor costs, an electrician charges $36.50 per hour for himself, and $27.50 for his assistant. What would be the total labor cost for a job taking 6 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> hours?',
 type: 'multiple-choice',
 options: ['$416.00', '$384.00', '$264.75', '$64.00'],
 correctAnswer: 0, 
 explanation: 'Together they charge $64.00 per hour. $64.00 × 6.5 = $416.00.'
 },
 {
 id: '10',
 text: '<br><img src="images/10.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>On the map shown, 1 inch represents 50 miles. The distance between Sommerville and Linden is 2.5 inches. What is the actual distance between these towns?',
 type: 'multiple-choice',
 options: ['2.5 miles', '20 miles', '52.5 miles', '125 miles'],
 correctAnswer: 3, 
 explanation: '2.5 × 50 = 125 miles.'
 },
 {
 id: '11',
 text: 'Marti wants to buy a dress priced at $89.75. If the sales tax is 8%, what is the total amount she must pay for the dress?',
 type: 'multiple-choice',
 options: ['$71.80', '$82.57', '$96.93', '$97.75'],
 correctAnswer: 2, 
 explanation: 'Tax is 0.08 × $89.75 = $7.18. $89.75 + $7.18 = $96.93.'
 },
 {
 id: '12',
 text: 'Just before sunrise, the temperature in degrees Fahrenheit was 13 degrees below zero. By 10 a.m. the temperature had risen 19 degrees. Which shows how to find the temperature in degrees Fahrenheit at 10 a.m.?',
 type: 'multiple-choice',
 options: ['13 − 19', '13 + 19', '−13 − 19', '−13 + 19'],
 correctAnswer: 3, 
 explanation: 'Start at −13 and rise 19 degrees: −13 + 19.'
 },
 {
 id: '13',
 text: 'What is the value of <i>x</i> − (3<i>x</i> + 5) when <i>x</i> = −2?',
 type: 'multiple-choice',
 options: ['−1', '1', '5', '9'],
 correctAnswer: 0, 
 explanation: '−2 − (3(−2) + 5) = −2 − (−1) = −1.'
 },
 {
 id: '14',
 text: 'Between what two consecutive whole numbers does √61 lie?',
 type: 'multiple-choice',
 options: ['6 and 7', '7 and 8', '8 and 9', '9 and 10'],
 correctAnswer: 1, 
 explanation: '7<sup>2</sup> = 49 and 8<sup>2</sup> = 64. Since 61 is between them, √61 is between 7 and 8.'
 },
 {
 id: '15',
 text: '2.964 ÷ 1.2 = ___',
 type: 'multiple-choice',
 options: ['0.247', '2.47', '24.7', '247'],
 correctAnswer: 1, 
 explanation: 'Multiply both numbers by 10: 29.64 ÷ 12 = 2.47.'
 },
 {
 id: '16',
 text: 'Lines <i>l</i>, <i>m</i>, and <i>n</i> intersect at the same point forming the six angles shown. Lines <i>l</i> and <i>m</i> are perpendicular. <br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which angle has the same measure as ∠1?',
 type: 'multiple-choice',
 options: ['∠2', '∠3', '∠4', '∠5'],
 correctAnswer: 2, 
 explanation: '∠1 and ∠4 are vertical angles (opposite each other), so they have the same measure.'
 },
 {
 id: '17',
 text: 'Which of the following angles measures closest to 170°?',
 type: 'multiple-choice',
 options: [
    {url: 'images/17a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A 170° angle is almost a straight line. The angle in choice D is the closest to a straight line.'
 },
 {
 id: '18',
 text: '<br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the volume of the cone shown above?',
 type: 'multiple-choice',
 options: ['16.75 cu in.', '20.94 cu in.', '43.98 cu in.', '67.02 cu in.'],
 correctAnswer: 0, 
 explanation: 'V = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>πr²h ≈ <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> × 3.14 × 4 × 4 ≈ 16.75 cu in.'
 },
 {
 id: '19',
 text: 'The radius of each wheel on this cart is 13 inches. <br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If a steel rim is fitted around the wheel, which is closest to the circumference of the rim?',
 type: 'multiple-choice',
 options: ['20.4 in.', '40.8 in.', '81.6 in.', '530.7 in.'],
 correctAnswer: 2, 
 explanation: 'C = 2πr ≈ 2 × 3.14 × 13 ≈ 81.6 inches.'
 },
 {
 id: '20',
 text: 'The diagram below shows a geometric figure on a coordinate plane. <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the diagrams below shows a rotation of this geometric figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/20a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A rotation turns the figure about a point without changing its size or shape. Choice J shows the same triangle, the same size and shape, turned about the origin.'
 },
 {
 id: '21',
 text: 'The measure of the largest angle in an acute triangle is —',
 type: 'multiple-choice',
 options: ['less than 90°', 'greater than 90°', 'equal to the sum of the measures of the other 2 angles', 'greater than the sum of the measures of the other 2 angles'],
 correctAnswer: 0, 
 explanation: 'In an acute triangle, every angle is less than 90°, including the largest one.'
 },
 {
 id: '22',
 text: 'LaRue is going to put fertilizer on a rectangular field that measures 124 meters by 234 meters. How many square meters will she have to fertilize?',
 type: 'multiple-choice',
 options: ['358 m<sup>2</sup>', '716 m<sup>2</sup>', '27,776 m<sup>2</sup>', '29,016 m<sup>2</sup>'],
 correctAnswer: 3, 
 explanation: 'Area = 124 × 234 = 29,016 m<sup>2</sup>.'
 },
 {
 id: '23',
 text: '<br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the height of a cone that has a slant height of 16 inches and a radius of 6 inches?',
 type: 'multiple-choice',
 options: ['10 in.', '14.8 in.', '20 in.', '17.1 in.'],
 correctAnswer: 1, 
 explanation: 'The height, radius, and slant height form a right triangle: h = √(16² − 6²) = √220 ≈ 14.8 inches.'
 },
 {
 id: '24',
 text: 'Thelma and David built a recycling bin with a volume of 576 cubic feet. The bin is a rectangular prism with a base 12 feet long and 6 feet wide. <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the height, <i>h</i>, of the bin?',
 type: 'multiple-choice',
 options: ['6 ft', '7 ft', '8 ft', '9 ft'],
 correctAnswer: 2, 
 explanation: 'V = l × w × h, so 576 = 12 × 6 × h = 72h, and h = 8 feet.'
 },
 {
 id: '25',
 text: 'Look at the design below. <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which term identifies the shaded part in the center of the design?',
 type: 'multiple-choice',
 options: ['Pentagon', 'Heptagon', 'Nonagon', 'Decagon'],
 correctAnswer: 2, 
 explanation: 'The shaded polygon has 9 sides, so it is a nonagon.'
 },
 {
 id: '26',
 text: '<br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the length of <span style="text-decoration: overline"><i>AC</i></span>?',
 type: 'multiple-choice',
 options: ['√85 cm', '√13 cm', '8 cm', '10 cm'],
 correctAnswer: 0, 
 explanation: 'AC is the hypotenuse: AC = √(6² + 7²) = √(36 + 49) = √85 cm.'
 },
 {
 id: '27',
 text: 'What must the value of <i>x</i> be in order for the figures below to be similar? <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['16 cm', '14 cm', '12 cm', '10 cm'],
 correctAnswer: 2, 
 explanation: 'The scale factor is 15 ÷ 10 = 1.5 (and 21 ÷ 14 = 1.5). x = 8 × 1.5 = 12 cm.'
 },
 {
 id: '28',
 text: 'Margo is designing a band formation for a halftime ceremony at a football game. This drawing shows where the band members will stand during the ceremony. <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many yards apart are the band members standing at points <i>A</i> and <i>C</i>?',
 type: 'multiple-choice',
 options: ['11', '33', '44', '55'],
 correctAnswer: 1, 
 explanation: 'Triangle ABC is a right triangle with hypotenuse 55 and leg 44. AC = √(55² − 44²) = √1,089 = 33 yards.'
 },
 {
 id: '29',
 text: '<br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>In this scale drawing of a molding, each square represents 1 square inch. What is the area of the molding?',
 type: 'multiple-choice',
 options: ['24 sq in.', '34 sq in.', '35 sq in.', '37 sq in.'],
 correctAnswer: 3, 
 explanation: 'Count the squares inside the L-shaped figure. There are 37 squares, so the area is 37 sq in.'
 },
 {
 id: '30',
 text: 'A study was conducted to determine the effectiveness of a speed limit sign. The speeds of cars at the 65 mph sign were: <br>79 &nbsp; 60 &nbsp; 70 &nbsp; 65 &nbsp; 70 &nbsp; 85 &nbsp; 74 &nbsp; 58 &nbsp; 71 &nbsp; 88 &nbsp; 65 <br>Which box-and-whisker plot correctly displays the information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/31a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'In order: 58, 60, 65, 65, 70, 70, 71, 74, 79, 85, 88. The extremes are 58 and 88, the quartiles are 65 and 79, and the median is 70. Plot A shows these values.'
 },
 {
 id: '31',
 text: 'In a random survey, 25 out of 150 people were able to give a correct answer to the question asked. If 500 people are surveyed, about how many would be expected to answer the question correctly?',
 type: 'multiple-choice',
 options: ['4', '20', '83', '325'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>25</mn><mn>150</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>, and <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> × 500 ≈ 83.'
 },
 {
 id: '32',
 text: 'The stem-and-leaf plot shows the number of home runs hit per year by the leading hitter of the major leagues over a 10-year period. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the mode for the data?',
 type: 'multiple-choice',
 options: ['37', '44', '48', '58'],
 correctAnswer: 2, 
 explanation: 'The data are 37, 38, 39, 40, 44, 48, 48, 56, 57, 58. 48 appears twice, so it is the mode.'
 },
 {
 id: '33',
 text: 'The graph shows the heights of four friends. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the graph, which statement is <i>false</i>?',
 type: 'multiple-choice',
 options: ['James is 4 feet tall.', 'Bob is 5 feet 3 inches tall.', 'Meg is taller than Ann.', 'Ann is 4 feet 1 inch tall.'],
 correctAnswer: 3, 
 explanation: 'Ann\'s bar is at about 4 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> feet, which is 4 feet 3 inches, not 4 feet 1 inch.'
 },
 {
 id: '34',
 text: 'Soccer is the world\'s most popular sport. The table lists the records of 5 World Cup winners. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the median number of total points scored by these teams?',
 type: 'multiple-choice',
 options: ['51', '74', '74.2', '99'],
 correctAnswer: 1, 
 explanation: 'In order: 48, 57, 74, 93, 99. The middle value is 74.'
 },
 {
 id: '35',
 text: 'Kay, Lil, and May made a table of their history quiz grades during the grading period. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which matrix <i>best</i> organizes the data?',
 type: 'multiple-choice',
 options: [
    {url: 'images/36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Kay has 2 A\'s, 6 B\'s, and 4 C\'s; Lil has 4 of each; May has 8 A\'s, 4 B\'s, and 0 C\'s. Matrix F shows this.'
 },
 {
 id: '36',
 text: '<br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the mean height of the players in the starting lineup of the Alton Tigers?',
 type: 'multiple-choice',
 options: ['67.4 in.', '68.8 in.', '72 in.', '74 in.'],
 correctAnswer: 1, 
 explanation: '65 + 61 + 72 + 72 + 74 = 344. 344 ÷ 5 = 68.8 inches.'
 },
 {
 id: '37',
 text: 'These are the sides of a number cube used in a game. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Sam will win the game he is playing if he gets a number less than 3 the next time he rolls the number cube. What is the probability that Sam will win the game on his next roll?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'Two numbers (1 and 2) are less than 3, so the probability is <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>.'
 },
 {
 id: '38',
 text: 'An ice-cream parlor makes sundaes with chocolate or vanilla ice cream and strawberry, chocolate, or caramel topping. Which tree diagram shows all possible combinations of sundaes with one flavor of ice cream and one topping?',
 type: 'multiple-choice',
 options: [
    {url: 'images/39a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Each of the 2 ice cream flavors can go with each of the 3 toppings. Tree diagram A shows all 6 combinations.'
 },
 {
 id: '39',
 text: 'During an experiment, Roscoe tossed a fair coin 10 times and got 6 "heads". What is the probability the coin will land showing heads on Roscoe\'s next toss?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Each toss of a fair coin is independent, so the probability of heads is always <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '40',
 text: '<br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>According to the graph, which was most likely the number of farms in 1955?',
 type: 'multiple-choice',
 options: ['5,000,000', '4,500,000', '4,000,000', '3,750,000'],
 correctAnswer: 1, 
 explanation: 'The graph shows about 5.3 million farms in 1950 and 3.7 million in 1960. Halfway between, in 1955, there were about 4.5 million.'
 },
 {
 id: '41',
 text: 'Darrell had biology test scores of <br>76, 78, 76, 82, 62, and 100. <br>For this data, which measure is greatest?',
 type: 'multiple-choice',
 options: ['Mean', 'Median', 'Mode', 'Range'],
 correctAnswer: 0, 
 explanation: 'Mean = 474 ÷ 6 = 79, median = 77, mode = 76, range = 38. The mean is greatest.'
 },
 {
 id: '42',
 text: 'A taxi company based its fares on the following chart. <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues, what would be the fare for a trip of 6 miles?',
 type: 'multiple-choice',
 options: ['$3.00', '$5.00', '$11.00', '$15.00'],
 correctAnswer: 1, 
 explanation: 'The fare is $2.00 plus $0.50 per mile. For 6 miles: $2.00 + 6 × $0.50 = $5.00.'
 },
 {
 id: '43',
 text: '<br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the line containing these points is plotted on a coordinate plane, what should the graph look like?',
 type: 'multiple-choice',
 options: [
    {url: 'images/44a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'All three points have y = −3, so they lie on a horizontal line through y = −3, as in graph F.'
 },
 {
 id: '44',
 text: 'Mona\'s bank charges a $10 fee per month plus a $0.12 fee per check. The formula below gives <i>f</i>, the total fee in dollars for a month in which Mona writes <i>n</i> checks. <br><i>f</i> = 10 + 0.12<i>n</i> <br>How many checks did Mona write during a month in which her total fee was $12.52?',
 type: 'multiple-choice',
 options: ['5', '21', '124', '188'],
 correctAnswer: 1, 
 explanation: '12.52 = 10 + 0.12n, so 0.12n = 2.52 and n = 21.'
 },
 {
 id: '45',
 text: 'What value for <i>x</i> makes <i>x</i> + 2 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = 4 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> true?',
 type: 'multiple-choice',
 options: ['2', '2 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '2 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '3'],
 correctAnswer: 1, 
 explanation: 'x = 4 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> − 2 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = 2 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>.'
 },
 {
 id: '46',
 text: 'Last season, Ellen and Janet together won 32 tennis matches. Ellen won 6 more matches than Janet. How many matches did Ellen win?',
 type: 'multiple-choice',
 options: ['13', '16', '19', '25'],
 correctAnswer: 2, 
 explanation: 'Janet won j and Ellen won j + 6. 2j + 6 = 32, so j = 13 and Ellen won 19.'
 },
 {
 id: '47',
 text: '<br><img src="images/48.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which equation is true for all pairs of values in the table?',
 type: 'multiple-choice',
 options: ['<i>y</i> = 2<i>x</i> − 1', '<i>y</i> = 2<i>x</i> + 1', '<i>y</i> = <i>x</i> − 4', '<i>y</i> = <i>x</i> + 2'],
 correctAnswer: 0, 
 explanation: '2(−3) − 1 = −7, 2(0) − 1 = −1, and 2(3) − 1 = 5.'
 },
 {
 id: '48',
 text: 'The basketball concession stand sold 327 drinks in two games. Which proportion could be used to make the best estimate for the number of drinks that will be sold for 10 games?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>327</mn><mn>10</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>x</mn></mfrac></math>', '<math><mfrac><mn>10</mn><mn>2</mn></mfrac></math> = <math><mfrac><mn>327</mn><mn>x</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>327</mn></mfrac></math> = <math><mfrac><mn>x</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>327</mn></mfrac></math> = <math><mfrac><mn>10</mn><mn>x</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'The ratio of games to drinks stays the same: <math><mfrac><mn>2</mn><mn>327</mn></mfrac></math> = <math><mfrac><mn>10</mn><mn>x</mn></mfrac></math>.'
 },
 {
 id: '49',
 text: 'Which of the following ordered pairs represents a point in the third quadrant of a coordinate plane?',
 type: 'multiple-choice',
 options: ['(−6, 4)', '(−5, −7)', '(3, −2)', '(4, 2)'],
 correctAnswer: 1, 
 explanation: 'In Quadrant III both coordinates are negative: (−5, −7).'
 },
 {
 id: '50',
 text: '<br><img src="images/51.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph best illustrates the relationship shown in this table?',
 type: 'multiple-choice',
 options: [
    {url: 'images/51a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/51b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/51c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/51d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The amount earned is $3 per mile, starting at 0. Graph C starts at the origin and reaches $30 at 10 miles.'
 },
 {
 id: '51',
 text: 'What is the solution to <br>3<i>x</i> − 4 = 17?',
 type: 'multiple-choice',
 options: ['4 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '7', '18 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '21'],
 correctAnswer: 1, 
 explanation: '3x = 21, so x = 7.'
 },
 {
 id: '52',
 text: 'The table shows <i>p</i>, the charge in cents, for a long-distance phone call that lasts <i>t</i> minutes. <br><img src="images/53.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which describes this relationship?',
 type: 'multiple-choice',
 options: ['<i>p</i> = 20<i>t</i> + 12', '<i>p</i> = 8<i>t</i> + 12', '<i>p</i> = 11<i>t</i>', '<i>p</i> = 20<i>t</i>'],
 correctAnswer: 1, 
 explanation: 'The charge goes up 8 cents each minute, starting from 12: 8(1) + 12 = 20, 8(2) + 12 = 28, and so on.'
 },
 {
 id: '53',
 text: '<br><img src="images/54.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph corresponds to this table?',
 type: 'multiple-choice',
 options: [
    {url: 'images/54a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/54b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/54c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/54d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The points (−3, −1), (0, 2), and (3, 5) lie on y = x + 2, which crosses the y-axis at 2, as in graph H.'
 },
 {
 id: '54',
 text: '<br><img src="images/55.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which value is missing in the table?',
 type: 'multiple-choice',
 options: ['15', '18', '21', '36'],
 correctAnswer: 1, 
 explanation: '2(6 + 3) = 2 × 9 = 18.'
 },
 {
 id: '55',
 text: 'Part of the statement below is circled. <br><img src="images/56.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which <i>best</i> describes the circled part of the statement?',
 type: 'multiple-choice',
 options: ['Coefficient', 'Variable', 'Term', 'Expression'],
 correctAnswer: 3, 
 explanation: '7x + 9 is an expression made of two terms joined by an operation.'
 },
 {
 id: '56',
 text: 'The table shows the relationship between <i>j</i>, Jerry\'s age and <i>t</i>, Tara\'s age. <br><img src="images/57.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following describes the relationship?',
 type: 'multiple-choice',
 options: ['<i>t</i> = <i>j</i> + 6', '<i>t</i> = 2<i>j</i> + 1', '<i>t</i> = 2<i>j</i> + 2', '<i>t</i> = 6<i>j</i>'],
 correctAnswer: 0, 
 explanation: 'Tara is always 6 years older than Jerry: 1 + 6 = 7, 2 + 6 = 8, and so on.'
 },
 {
 id: '57',
 text: 'Which is a solution for <br>5(<i>x</i> − 3) = 15?',
 type: 'multiple-choice',
 options: ['0', '<math><mfrac><mn>12</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>18</mn><mn>5</mn></mfrac></math>', '6'],
 correctAnswer: 3, 
 explanation: 'Divide by 5: x − 3 = 3, so x = 6.'
 },
 {
 id: '58',
 text: 'Mr. Kitran\'s age is 4 years less than 3 times Henry\'s age. If Henry is <i>h</i> years old, which of the following represents Mr. Kitran\'s age?',
 type: 'multiple-choice',
 options: ['3<i>h</i> + 4', '3<i>h</i> − 4', '4<i>h</i> + 3', '3(<i>h</i> − 4)'],
 correctAnswer: 1, 
 explanation: '3 times Henry\'s age is 3h, and 4 less than that is 3h − 4.'
 },
 {
 id: '59',
 text: 'At the same time that a 60-foot tall building casts a shadow that is 21.5 feet long, a nearby tree casts a shadow that is 18 feet long. Which measure is closest to the height of the tree?',
 type: 'multiple-choice',
 options: ['56.5 ft', '50.2 ft', '6.5 ft', '3.3 ft'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>60</mn><mn>21.5</mn></mfrac></math> = <math><mfrac><mn>h</mn><mn>18</mn></mfrac></math>, so h = 60 × 18 ÷ 21.5 ≈ 50.2 feet.'
 }
];

// Scaled Score Mapping for Grade 8 Mathematics (2003)
// No raw-to-scaled score table was released with this test, so the Grade 8 Mathematics (2007)
// table is used as an approximation. It maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 0,
  2: 56,
  3: 91,
  4: 117,
  5: 138,
  6: 156,
  7: 171,
  8: 185,
  9: 197,
  10: 209,
  11: 220,
  12: 230,
  13: 240,
  14: 249,
  15: 258,
  16: 266,
  17: 275,
  18: 283,
  19: 291,
  20: 299,
  21: 306,
  22: 314,
  23: 321,
  24: 329,
  25: 336,
  26: 344,
  27: 351,
  28: 359,
  29: 366,
  30: 374,
  31: 382,
  32: 390,
  33: 398,
  34: 406,
  35: 415,
  36: 424,
  37: 433,
  38: 443,
  39: 453,
  40: 464,
  41: 475,
  42: 488,
  43: 502,
  44: 517,
  45: 534,
  46: 555,
  47: 581,
  48: 600,
  49: 600,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 27 of the released test required measuring with a physical ruler and was removed.
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

// Independent Results Manager for Grade 8 Math
(function() {
  'use strict';
  
  console.log(`Grade 8 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 8 Math`);
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
        testType: 'Grade 8 Mathematics (2003)'
      };
      
      console.log(`Saving Grade 8 Math result: ${rawScore}/${sampleQuestions.length} → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 8 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 8 Mathematics (2003)';
        updated = true;
        console.log(`Enhanced Grade 8 Math result ${index + 1}: ${result.rawScore}/${sampleQuestions.length} → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 8 Math results saved');
      
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
            testType: 'Grade 8 Mathematics (2003)'
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
    console.log('Initializing Grade 8 Math independent results system');
    
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
    
    console.log('Grade 8 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();