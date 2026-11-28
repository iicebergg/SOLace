window.TEST_IDENTIFIER = 'math_grade7_2007';

const sampleQuestions = [
 {
 id: '1',
 text: 'Harrison is buying a bicycle for $340. What amount of sales tax must he pay if the sales tax rate is 7%?',
 type: 'multiple-choice',
 options: ['$7.00', '$23.80', '$24.60', '$238.00'],
 correctAnswer: 1, 
 explanation: '7% of $340 = 0.07 × 340 = $23.80.'
 },
 {
 id: '2',
 text: 'Jack spent 30% of the money he earned mowing lawns last summer. If Jack spent $45, what was the total amount of money he earned mowing lawns last summer?',
 type: 'multiple-choice',
 options: ['$15', '$75', '$150', '$195'],
 correctAnswer: 2, 
 explanation: '30% of the total is $45, so the total is $45 ÷ 0.30 = $150.'
 },
 {
 id: '3',
 text: 'Mike is making a scale model of his favorite car. The actual car is 8 feet long and 4 feet wide. Mike wants his model to be 12 inches in length. Which could be used to find the width of his model if he uses the same ratio?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>8</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>12</mn><mn>x</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>x</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>12</mn></mfrac></math> = <math><mfrac><mn>x</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>12</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>x</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'The ratio of length to width must be the same for the car and the model: <math><mfrac><mn>8</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>12</mn><mn>x</mn></mfrac></math>.'
 },
 {
 id: '4',
 text: 'Anita put $3,000 in a savings account. The account earns an annual interest rate of 3.5%. How much interest will Anita earn after her money has been in the account for one year?',
 type: 'multiple-choice',
 options: ['$105', '$350', '$1,050', '$2,650'],
 correctAnswer: 0, 
 explanation: '3.5% of $3,000 = 0.035 × 3,000 = $105.'
 },
 {
 id: '5',
 text: 'Joe knows a 5-pound turkey breast will feed 8 people. If 20 people are coming to Joe\'s home for dinner, at this rate how many pounds of turkey breast will he need?',
 type: 'multiple-choice',
 options: ['7.5 lbs', '12.5 lbs', '17 lbs', '32 lbs'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>5</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>x</mn><mn>20</mn></mfrac></math>, so x = 5 × 20 ÷ 8 = 12.5 pounds.'
 },
 {
 id: '6',
 text: 'A dolphin is 30 feet below the surface of the water. She rises 23 feet, sinks 17 feet, and finally rises another 27 feet. If there are no other changes, the dolphin is —',
 type: 'multiple-choice',
 options: ['3 feet above the surface of the water', '3 feet below the surface of the water', '63 feet above the surface of the water', '63 feet below the surface of the water'],
 correctAnswer: 0, 
 explanation: '−30 + 23 − 17 + 27 = 3, so the dolphin is 3 feet above the surface.'
 },
 {
 id: '7',
 text: 'Use the number line to complete the sentence. <br><img src="images/7.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The value of <math><mfrac><mn>y</mn><mn>z</mn></mfrac></math> will be —',
 type: 'multiple-choice',
 options: ['negative because both <i>y</i> and <i>z</i> are negative', 'positive because both <i>y</i> and <i>z</i> are negative', 'negative because <i>z</i> is farther from 0 than <i>y</i>', 'positive because <i>y</i> is closer to 0 than <i>z</i>'],
 correctAnswer: 1, 
 explanation: 'Both y and z are to the left of 0, so both are negative. A negative divided by a negative is positive.'
 },
 {
 id: '8',
 text: 'Which property is shown in the following number sentence? <br>(<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math><i>x</i> + 9) + 0 = (<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math><i>x</i> + 9)',
 type: 'multiple-choice',
 options: ['Multiplicative identity property', 'Additive identity property', 'Multiplicative inverse property', 'Additive inverse property'],
 correctAnswer: 1, 
 explanation: 'Adding 0 to a number leaves it unchanged. 0 is the additive identity.'
 },
 {
 id: '9',
 text: 'Which statement is <i>false</i>?',
 type: 'multiple-choice',
 options: ['−<math><mfrac><mn>7</mn><mn>1</mn></mfrac></math> = −1', '7 · 0 = 0', '7 + (−7) = 0', '7 · −1 = −7'],
 correctAnswer: 0, 
 explanation: '−<math><mfrac><mn>7</mn><mn>1</mn></mfrac></math> = −7, not −1, so that statement is false.'
 },
 {
 id: '10',
 text: 'Which number is equivalent to 0.7%?',
 type: 'multiple-choice',
 options: ['0.007', '0.07', '7', '70'],
 correctAnswer: 0, 
 explanation: '0.7% = 0.7 ÷ 100 = 0.007.'
 },
 {
 id: '11',
 text: 'Anne\'s utility bills for three months were $59, $67, and $33. To add the utility bills mentally, Anne thought <br>"(59 + 67) + 33 = 59 + (67 + 33)." <br>What property did Anne use?',
 type: 'multiple-choice',
 options: ['Inverse property of addition', 'Identity property of addition', 'Commutative property of addition', 'Associative property of addition'],
 correctAnswer: 3, 
 explanation: 'Anne changed the grouping of the numbers without changing their order. That is the associative property.'
 },
 {
 id: '12',
 text: '<math><mfrac><mn>4</mn><mn>3</mn></mfrac></math> · 9<sup>2</sup> − 2<sup>9</sup> = ___',
 type: 'multiple-choice',
 options: ['404', '6', '−6', '−404'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>4</mn><mn>3</mn></mfrac></math> · 81 = 108 and 2<sup>9</sup> = 512. 108 − 512 = −404.'
 },
 {
 id: '13',
 text: 'Which is correctly written in scientific notation?',
 type: 'multiple-choice',
 options: ['5.6 × 10<sup>6</sup>', '56 × 10<sup>5</sup>', '5,600,000', '56 million'],
 correctAnswer: 0, 
 explanation: 'In scientific notation, the first factor is at least 1 and less than 10, multiplied by a power of 10. Only 5.6 × 10<sup>6</sup> fits.'
 },
 {
 id: '14',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['30% = <math><mfrac><mn>3</mn><mn>100</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>50</mn></mfrac></math> = 0.06', '<math><mfrac><mn>30</mn><mn>1,000</mn></mfrac></math> = 0.30', '60% = <math><mfrac><mn>3</mn><mn>50</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>3</mn><mn>50</mn></mfrac></math> = <math><mfrac><mn>6</mn><mn>100</mn></mfrac></math> = 0.06.'
 },
 {
 id: '15',
 text: 'Triangle <i>MOE</i> is similar to triangle <i>SAW</i>. <br><img src="images/15.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which <i>must</i> be true?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>MO</mn><mn>SA</mn></mfrac></math> = <math><mfrac><mn>OE</mn><mn>SW</mn></mfrac></math>', '<math><mfrac><mn>MO</mn><mn>SA</mn></mfrac></math> = <math><mfrac><mn>ME</mn><mn>AW</mn></mfrac></math>', '∠<i>MEO</i> ≅ ∠<i>SWA</i>', '∠<i>MEO</i> ≅ ∠<i>ASW</i>'],
 correctAnswer: 2, 
 explanation: 'The vertices correspond in order: M to S, O to A, and E to W. So angle MEO corresponds to angle SWA, and corresponding angles of similar triangles are congruent.'
 },
 {
 id: '16',
 text: 'The ordered pair (−3, 4) is located in which quadrant of a coordinate plane?',
 type: 'multiple-choice',
 options: ['I', 'II', 'III', 'IV'],
 correctAnswer: 1, 
 explanation: 'The x-coordinate is negative and the y-coordinate is positive, so the point is in Quadrant II.'
 },
 {
 id: '17',
 text: 'Which figure is a decagon?',
 type: 'multiple-choice',
 options: [
    {url: 'images/17a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A decagon has 10 sides. The figure in choice D has 10 sides.'
 },
 {
 id: '18',
 text: 'Which is a parallelogram with all congruent sides?',
 type: 'multiple-choice',
 options: ['Trapezoid', 'Heptagon', 'Rhombus', 'Decagon'],
 correctAnswer: 2, 
 explanation: 'A rhombus is a parallelogram with 4 sides of equal length.'
 },
 {
 id: '19',
 text: 'Look at the coordinate grid. <br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which point is located in Quadrant II?',
 type: 'multiple-choice',
 options: ['<i>M</i>', '<i>P</i>', '<i>L</i>', '<i>N</i>'],
 correctAnswer: 1, 
 explanation: 'Quadrant II is the upper left, where x is negative and y is positive. Point P is there.'
 },
 {
 id: '20',
 text: 'Which is most likely <i>not</i> a rhombus?',
 type: 'multiple-choice',
 options: [
    {url: 'images/20a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A rhombus has 4 equal sides. The figure in choice J has two long sides and two short sides.'
 },
 {
 id: '21',
 text: 'A cylindrical-shaped water tank has a diameter of 4 feet and is 12 feet tall. Which is closest to the volume of this tank?',
 type: 'multiple-choice',
 options: ['48 cubic feet', '151 cubic feet', '452 cubic feet', '603 cubic feet'],
 correctAnswer: 1, 
 explanation: 'The radius is 2 feet. V = πr²h ≈ 3.14 × 4 × 12 ≈ 151 cubic feet.'
 },
 {
 id: '22',
 text: 'Chelsea wants to cover a rectangular prism-shaped box with paper. Which is closest to the minimum amount of paper Chelsea needs? <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['26 cm<sup>2</sup>', '54 cm<sup>2</sup>', '72 cm<sup>2</sup>', '108 cm<sup>2</sup>'],
 correctAnswer: 3, 
 explanation: 'Surface area = 2(6 × 4) + 2(6 × 3) + 2(4 × 3) = 48 + 36 + 24 = 108 cm<sup>2</sup>.'
 },
 {
 id: '23',
 text: 'Pablo has a large, circular rug on his square-shaped bedroom floor. <br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the diameter of the rug is equal to the length of the bedroom floor, which is closest to the area of the rug?',
 type: 'multiple-choice',
 options: ['38 sq ft', '75 sq ft', '113 sq ft', '144 sq ft'],
 correctAnswer: 2, 
 explanation: 'The diameter is 12 feet, so the radius is 6 feet. A = πr² ≈ 3.14 × 36 ≈ 113 sq ft.'
 },
 {
 id: '24',
 text: '<br><img src="images/24-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the minimum number of same-sized triangles as the one above that would be required to form the polygon below? <br><img src="images/24-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['3', '4', '6', '8'],
 correctAnswer: 1, 
 explanation: 'The polygon is a 2 cm by 4 cm rectangle (2 triangles) plus a triangle made of 2 more triangles, for 4 triangles in all.'
 },
 {
 id: '25',
 text: '<br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the figure shown above is rotated 180° <i>clockwise</i> about the origin, which best represents the new figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/25a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'A 180° rotation about the origin changes (x, y) to (−x, −y). The figure moves from Quadrant II to Quadrant IV, as in choice A.'
 },
 {
 id: '26',
 text: 'What is the area of the parallelogram shown? <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['185 sq ft', '230 sq ft', '2,600 sq ft', '3,250 sq ft'],
 correctAnswer: 2, 
 explanation: 'Area = base × height = 65 × 40 = 2,600 sq ft.'
 },
 {
 id: '27',
 text: 'Look at the table. <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is equivalent to the total number of sandwich combinations of 1 type of bread, 1 type of meat, and 1 type of cheese?',
 type: 'multiple-choice',
 options: ['3 + 4 + 3', '3<sup>2</sup> + 4', '(3 × 4) + (3 × 4)', '3 × 4 × 3'],
 correctAnswer: 3, 
 explanation: 'There are 3 breads, 4 meats, and 3 cheeses. By the counting principle, multiply: 3 × 4 × 3.'
 },
 {
 id: '28',
 text: 'The faces of a fair 6-sided cube are numbered 1 through 6. What is the probability that a 2, 3, or 5 will land face-up on the next roll?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: '3 of the 6 outcomes are favorable: <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '29',
 text: '18, 24, 18, 23, 19, 24, 23, 18 <br>Which measure has the greatest value for the data listed?',
 type: 'multiple-choice',
 options: ['Mode', 'Mean', 'Range', 'Median'],
 correctAnswer: 3, 
 explanation: 'In order: 18, 18, 18, 19, 23, 23, 24, 24. Mode = 18, mean ≈ 20.9, range = 6, median = (19 + 23) ÷ 2 = 21. The median is greatest.'
 },
 {
 id: '30',
 text: '<br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the range of the data?',
 type: 'multiple-choice',
 options: ['33', '44', '58', '92'],
 correctAnswer: 2, 
 explanation: 'Range = greatest − least = 92 − 34 = 58.'
 },
 {
 id: '31',
 text: 'Part of the box-and-whisker plot Jim was creating is shown below. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What could be missing from Jim\'s plot?',
 type: 'multiple-choice',
 options: ['Upper extreme', 'Lower extreme', 'Upper quartile', 'Median'],
 correctAnswer: 3, 
 explanation: 'The plot shows the two extremes and the box for the quartiles, but no line inside the box for the median.'
 },
 {
 id: '32',
 text: 'Mike has attempted 84 free throws. Of those attempted, 63 have gone in the basket. Based on this rate, what is the probability that Mike\'s next free throw attempt will go in the basket?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>63</mn><mn>84</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>.'
 },
 {
 id: '33',
 text: '<br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the mean (average) high temperature?',
 type: 'multiple-choice',
 options: ['56°F', '60°F', '61°F', '62°F'],
 correctAnswer: 1, 
 explanation: '56 + 59 + 62 + 62 + 61 + 62 + 59 = 421. 421 ÷ 7 ≈ 60.1, closest to 60°F.'
 },
 {
 id: '34',
 text: 'Jesse has 2 pairs of jeans, 4 sweaters, and 3 pairs of shoes. How many different combinations of a pair of jeans, a sweater, and a pair of shoes does she have?',
 type: 'multiple-choice',
 options: ['8', '9', '12', '24'],
 correctAnswer: 3, 
 explanation: '2 × 4 × 3 = 24 combinations.'
 },
 {
 id: '35',
 text: 'Which of the following is <i>not</i> a necessary calculation for constructing a box-and-whisker plot?',
 type: 'multiple-choice',
 options: ['Lower extreme', 'Median', 'Mean', 'Upper quartile'],
 correctAnswer: 2, 
 explanation: 'A box-and-whisker plot uses the extremes, quartiles, and median. The mean is not used.'
 },
 {
 id: '36',
 text: 'Freddie has 3 colors of construction paper. He will cut 5 different shapes from each color of construction paper to make a collage. Which is equivalent to the total number of shapes Freddie will cut?',
 type: 'multiple-choice',
 options: ['5 · 3', '5 + 3', '5 · 5 · 5', '3 · 3 · 3 · 3 · 3'],
 correctAnswer: 0, 
 explanation: 'He cuts 5 shapes from each of 3 colors: 5 · 3 = 15 shapes.'
 },
 {
 id: '37',
 text: '<br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Beth will reach into the bag and randomly choose 1 balloon. What is the probability she will choose a green balloon?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'There are 10 + 22 + 10 + 13 = 55 balloons and 22 are green. <math><mfrac><mn>22</mn><mn>55</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>.'
 },
 {
 id: '38',
 text: '<br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which tree diagram shows all the possible combinations of custom skateboards with 1 design and 1 background color?',
 type: 'multiple-choice',
 options: [
    {url: 'images/38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'There are 3 designs and 4 background colors. Tree diagram H shows each design paired with all 4 colors, for 12 combinations.'
 },
 {
 id: '39',
 text: 'What is the value of <i>x</i> for which the following is true? <br>30<i>x</i> = 40',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>', '10', '70'],
 correctAnswer: 1, 
 explanation: 'Divide both sides by 30: x = <math><mfrac><mn>40</mn><mn>30</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>.'
 },
 {
 id: '40',
 text: 'Which is a value for <i>r</i> that makes the following true? <br>−12 + <i>r</i> > 24',
 type: 'multiple-choice',
 options: ['−13', '13', '−37', '37'],
 correctAnswer: 3, 
 explanation: 'Add 12 to both sides: r > 36. Of the choices, only 37 is greater than 36.'
 },
 {
 id: '41',
 text: 'Which is a value for <i>h</i> that makes the following true? <br>−4<i>h</i> ≥ 24',
 type: 'multiple-choice',
 options: ['−7', '7', '−5', '5'],
 correctAnswer: 0, 
 explanation: 'Divide both sides by −4 and reverse the inequality: h ≤ −6. Of the choices, only −7 works.'
 },
 {
 id: '42',
 text: 'Which best describes the following? <br>3<i>x</i> + 5<i>x</i> + 11',
 type: 'multiple-choice',
 options: ['Constant', 'Expression', 'Equation', 'Inequality'],
 correctAnswer: 1, 
 explanation: 'It has variables and numbers but no equal sign or inequality symbol, so it is an expression.'
 },
 {
 id: '43',
 text: 'Tasha read 200 pages in her book this week. This was 50 more pages than she read last week. How many pages did she read last week?',
 type: 'multiple-choice',
 options: ['4', '40', '150', '250'],
 correctAnswer: 2, 
 explanation: '200 − 50 = 150 pages.'
 },
 {
 id: '44',
 text: '<br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is true for all values in the table above?',
 type: 'multiple-choice',
 options: ['<i>y</i> = −<i>x</i> + 3', '<i>y</i> = <i>x</i> − 1', '<i>y</i> = <i>x</i> + 1', '<i>y</i> = 2<i>x</i> + 3'],
 correctAnswer: 3, 
 explanation: 'Check y = 2x + 3: 2(−2) + 3 = −1, 2(−1.5) + 3 = 0, 2(0) + 3 = 3, and 2(3) + 3 = 9. All pairs work.'
 },
 {
 id: '45',
 text: 'Which best represents the number sentence shown? <br><i>x</i> − 7 = 8',
 type: 'multiple-choice',
 options: ['Seven less than a number is eight.', 'The quotient of <i>x</i> and 7 is eight.', 'Seven take away a number is eight.', 'A number subtracted from seven is eight.'],
 correctAnswer: 0, 
 explanation: 'x − 7 means 7 less than a number, and = 8 means "is eight."'
 },
 {
 id: '46',
 text: 'If <i>z</i> stands for the number, which best represents the sentence below? <br><i>Forty less than thirty is a number.</i>',
 type: 'multiple-choice',
 options: ['40 − 30 = <i>z</i>', '30 − 40 = <i>z</i>', '40 − <i>z</i> < 30', '<i>z</i> − 30 < 40'],
 correctAnswer: 1, 
 explanation: '"Forty less than thirty" means 30 − 40, and "is a number" means = z.'
 },
 {
 id: '47',
 text: '4<i>x</i> + 4 ______ <br>Which should be placed on the blank line above to make an inequality?',
 type: 'multiple-choice',
 options: ['= 12', '> 12', '−12', '÷12'],
 correctAnswer: 1, 
 explanation: 'An inequality uses a symbol such as >. 4x + 4 > 12 is an inequality.'
 },
 {
 id: '48',
 text: 'If <i>n</i> stands for the number, which best represents the following phrase? <br><i>The sum of a number and five divided by fifteen</i>',
 type: 'multiple-choice',
 options: ['<i>n</i> + <math><mfrac><mn>15</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>15</mn><mn>n</mn></mfrac></math> + 5', '<math><mfrac><mn>15</mn><mrow><mo>(</mo><mi>n</mi><mo>+</mo><mn>5</mn><mo>)</mo></mrow></mfrac></math>', '<math><mfrac><mrow><mo>(</mo><mi>n</mi><mo>+</mo><mn>5</mn><mo>)</mo></mrow><mn>15</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'The sum of a number and five is (n + 5). Dividing that by fifteen gives (n + 5) over 15.'
 },
 {
 id: '49',
 text: 'Ginni wrote the following geometric sequence in her notebook. <br>3, 9, 27, 81, 243, 729, . . . <br>What would be the 8th term in Ginni\'s sequence?',
 type: 'multiple-choice',
 options: ['1,458', '2,187', '5,832', '6,561'],
 correctAnswer: 3, 
 explanation: 'Each term is 3 times the one before. 7th term: 729 × 3 = 2,187. 8th term: 2,187 × 3 = 6,561.'
 },
 {
 id: '50',
 text: 'Which table contains <i>only</i> values that make the following true? <br><i>y</i> = 2<i>x</i> + 7',
 type: 'multiple-choice',
 options: [
    {url: 'images/50a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'In table F: 2(0) + 7 = 7, 2(1) + 7 = 9, and 2(2) + 7 = 11. All pairs work.'
 }
];

// Scaled Score Mapping for Grade 7 Mathematics (2007)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 6,
  2: 64,
  3: 99,
  4: 125,
  5: 146,
  6: 164,
  7: 179,
  8: 193,
  9: 205,
  10: 217,
  11: 227,
  12: 238,
  13: 247,
  14: 256,
  15: 265,
  16: 274,
  17: 282,
  18: 290,
  19: 298,
  20: 305,
  21: 313,
  22: 320,
  23: 328,
  24: 335,
  25: 342,
  26: 350,
  27: 357,
  28: 364,
  29: 372,
  30: 379,
  31: 387,
  32: 394,
  33: 402,
  34: 410,
  35: 418,
  36: 427,
  37: 436,
  38: 445,
  39: 455,
  40: 465,
  41: 476,
  42: 488,
  43: 501,
  44: 516,
  45: 533,
  46: 553,
  47: 579,
  48: 600,
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

// Independent Results Manager for Grade 7 Math
(function() {
  'use strict';
  
  console.log(`Grade 7 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 7 Math`);
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
        testType: 'Grade 7 Mathematics (2007)'
      };
      
      console.log(`Saving Grade 7 Math result: ${rawScore}/${sampleQuestions.length} → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 7 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 7 Mathematics (2007)';
        updated = true;
        console.log(`Enhanced Grade 7 Math result ${index + 1}: ${result.rawScore}/${sampleQuestions.length} → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 7 Math results saved');
      
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
            testType: 'Grade 7 Mathematics (2007)'
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
    console.log('Initializing Grade 7 Math independent results system');
    
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
    
    console.log('Grade 7 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();