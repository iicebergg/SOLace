window.TEST_IDENTIFIER = 'math_grade8_2001';

const sampleQuestions = [
 {
 id: '1',
 text: 'If 0.3 < <i>x</i> < 35%, which of the following could be the value of <i>x</i>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '1'],
 correctAnswer: 1, 
 explanation: 'x must be between 0.30 and 0.35. <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> ≈ 0.333, which is between them.'
 },
 {
 id: '2',
 text: 'What is the value of 3 + 7(2<sup>3</sup> − 6)<sup>2</sup>?',
 type: 'multiple-choice',
 options: ['23', '31', '84', '2,503'],
 correctAnswer: 1, 
 explanation: '2<sup>3</sup> − 6 = 2, and 2<sup>2</sup> = 4. Then 3 + 7 × 4 = 3 + 28 = 31.'
 },
 {
 id: '3',
 text: 'A scale distance of 3.5 centimeters on a certain map represents an actual distance of 175 kilometers. What actual distance does 5.7 centimeters on the same map represent?',
 type: 'multiple-choice',
 options: ['0.285 km', '2.85 km', '28.5 km', '285 km'],
 correctAnswer: 3, 
 explanation: 'Each centimeter represents 175 ÷ 3.5 = 50 km. 5.7 × 50 = 285 km.'
 },
 {
 id: '4',
 text: 'Which of the following is <i>not</i> a prime number?',
 type: 'multiple-choice',
 options: ['2', '5', '17', '121'],
 correctAnswer: 3, 
 explanation: '121 = 11 × 11, so it is not prime.'
 },
 {
 id: '5',
 text: '<br><img src="images/5.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The shaded part of the square can be expressed by —',
 type: 'multiple-choice',
 options: ['0.02', '20%', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '20 of the 100 small squares are shaded, which is <math><mfrac><mn>20</mn><mn>100</mn></mfrac></math> = 20%.'
 },
 {
 id: '6',
 text: 'Mia has 90 roses and 135 carnations to put into vases. She wants to put the same number of roses and the same number of carnations into each vase. What is the <i>greatest</i> number of vases that she will need in order to do this?',
 type: 'multiple-choice',
 options: ['5', '9', '15', '45'],
 correctAnswer: 3, 
 explanation: 'The greatest number of vases is the greatest common factor of 90 and 135, which is 45.'
 },
 {
 id: '7',
 text: 'Which is closest to the location of point <i>A</i> on the number line? <br><img src="images/7.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['−11', '−7', '7', '11'],
 correctAnswer: 0, 
 explanation: 'Point A is to the left of −5, about 6 units farther left, so it is closest to −11.'
 },
 {
 id: '8',
 text: 'Which is an example of the associative property of multiplication?',
 type: 'multiple-choice',
 options: ['7 · 0 · 9 = 0', '4 · (7 · −3) = 4 · (−3 · 7)', '(6 · <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>) · 3 = 3', '5 · (3 · −8) = (5 · 3) · −8'],
 correctAnswer: 3, 
 explanation: 'The associative property changes how factors are grouped: 5 · (3 · −8) = (5 · 3) · −8.'
 },
 {
 id: '9',
 text: 'Johanna rented a car. Rental costs were $29.00 per day plus $0.49 for each mile driven. If she kept the car for 1 day and drove 50 miles, how much did she owe?',
 type: 'multiple-choice',
 options: ['$29.49', '$31.45', '$53.50', '$78.00'],
 correctAnswer: 2, 
 explanation: '$29.00 + 50 × $0.49 = $29.00 + $24.50 = $53.50.'
 },
 {
 id: '10',
 text: 'Randy makes $200 per week. His employer deducts 4% of his earnings for Randy\'s medical insurance. How much of his weekly salary does Randy pay for medical insurance?',
 type: 'multiple-choice',
 options: ['$80', '$8', '$0.80', '$0.08'],
 correctAnswer: 1, 
 explanation: '4% of $200 = 0.04 × 200 = $8.'
 },
 {
 id: '11',
 text: 'Between which two consecutive whole numbers does √42 lie?',
 type: 'multiple-choice',
 options: ['5 and 6', '6 and 7', '7 and 8', '8 and 9'],
 correctAnswer: 1, 
 explanation: '6<sup>2</sup> = 36 and 7<sup>2</sup> = 49. Since 42 is between 36 and 49, √42 is between 6 and 7.'
 },
 {
 id: '12',
 text: 'What is the value of <i>x</i><sup>2</sup>(7 − <i>x</i>) + 2 when <i>x</i> = 5?',
 type: 'multiple-choice',
 options: ['52', '100', '152', '172'],
 correctAnswer: 0, 
 explanation: '5<sup>2</sup>(7 − 5) + 2 = 25 × 2 + 2 = 52.'
 },
 {
 id: '13',
 text: 'Mrs. Adams walks between <math><mfrac><mn>4</mn><mn>10</mn></mfrac></math> and <math><mfrac><mn>6</mn><mn>10</mn></mfrac></math> mile every day. Which is the <i>best</i> estimate of the number of miles she will walk in 30 days?',
 type: 'multiple-choice',
 options: ['12', '15', '18', '20'],
 correctAnswer: 1, 
 explanation: 'She walks about <math><mfrac><mn>5</mn><mn>10</mn></mfrac></math> = 0.5 mile a day. 0.5 × 30 = 15 miles.'
 },
 {
 id: '14',
 text: 'Chris used a copy machine to enlarge a drawing to 150% of its original size. If the width of the original drawing was 37 centimeters, what is the width of the copy of the drawing?',
 type: 'multiple-choice',
 options: ['37.0 cm', '55.5 cm', '92.5 cm', '150.0 cm'],
 correctAnswer: 1, 
 explanation: '150% of 37 = 1.5 × 37 = 55.5 cm.'
 },
 {
 id: '15',
 text: 'Pure water boils at 212° F. If a certain chemical is added to the water, the boiling point changes by −28° F. At what temperature does the new liquid boil?',
 type: 'multiple-choice',
 options: ['240° F', '184° F', '−184° F', '−240° F'],
 correctAnswer: 1, 
 explanation: '212 + (−28) = 184° F.'
 },
 {
 id: '16',
 text: 'If Gina measured the length of all 4 sides of the top of her desk and added them together, what would she have?',
 type: 'multiple-choice',
 options: ['The diameter', 'The volume', 'The perimeter', 'The area'],
 correctAnswer: 2, 
 explanation: 'The sum of the lengths of all the sides is the perimeter.'
 },
 {
 id: '17',
 text: 'The angles in Δ<i>ABC</i> measure 27°, 73°, and 80°. What kind of triangle is Δ<i>ABC</i>?',
 type: 'multiple-choice',
 options: ['Equiangular', 'Acute', 'Obtuse', 'Right'],
 correctAnswer: 1, 
 explanation: 'All three angles are less than 90°, so the triangle is acute.'
 },
 {
 id: '18',
 text: 'What is the volume of the square-based pyramid shown below? <br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['96 cu in.', '256 cu in.', '384 cu in.', '768 cu in.'],
 correctAnswer: 1, 
 explanation: 'V = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> × base area × height = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> × 8 × 8 × 12 = 256 cu in.'
 },
 {
 id: '19',
 text: 'Each cube in this stack has a volume of 1 cubic unit, and each face of those cubes has an area of 1 square unit. <br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which could be the surface area of this stack of cubes?',
 type: 'multiple-choice',
 options: ['18 sq units', '24 sq units', '29 sq units', '36 sq units'],
 correctAnswer: 3, 
 explanation: 'Count the exposed square faces on all sides of the stack, including the bottom and the back. There are 36 exposed faces, so the surface area is 36 square units.'
 },
 {
 id: '20',
 text: '<br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The dark rectangle is reflected over line <i>v</i>. Which shows this reflection?',
 type: 'multiple-choice',
 options: [
    {url: 'images/20a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Reflecting over the vertical line v changes the sign of each h-coordinate. The rectangle moves from the left side to the same height on the right side, as in choice H.'
 },
 {
 id: '21',
 text: '<br><img src="images/21.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>closest</i> to the volume of the cone shown above?',
 type: 'multiple-choice',
 options: ['87.9 cm<sup>3</sup>', '395.6 cm<sup>3</sup>', '527.5 cm<sup>3</sup>', '1582.6 cm<sup>3</sup>'],
 correctAnswer: 2, 
 explanation: 'V = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>πr²h ≈ <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> × 3.14 × 36 × 14 ≈ 527.5 cm<sup>3</sup>.'
 },
 {
 id: '22',
 text: 'Which is the <i>closest</i> to the circumference of a circle with a radius of 2.4 meters?',
 type: 'multiple-choice',
 options: ['7.5 m', '15.1 m', '18.1 m', '72.3 m'],
 correctAnswer: 1, 
 explanation: 'C = 2πr ≈ 2 × 3.14 × 2.4 ≈ 15.1 meters.'
 },
 {
 id: '23',
 text: 'In this scale drawing, each square unit represents 1 square centimeter. <br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the area of the figure represented by the drawing?',
 type: 'multiple-choice',
 options: ['15 cm<sup>2</sup>', '20 cm<sup>2</sup>', '32 cm<sup>2</sup>', '47 cm<sup>2</sup>'],
 correctAnswer: 3, 
 explanation: 'Count the whole squares inside the figure, and combine the half squares along the slanted sides. The total is about 47 square units, or 47 cm<sup>2</sup>.'
 },
 {
 id: '24',
 text: '<br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>This shows 3 different views of a three-dimensional figure constructed from cubes. Which could be this figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/24a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Choice H matches all three views: the top view\'s T shape, the front view, and the side view.'
 },
 {
 id: '25',
 text: 'In Δ<i>ABC</i>, <span style="text-decoration: overline"><i>AB</i></span> measures 6 centimeters and <span style="text-decoration: overline"><i>BC</i></span> measures 8 centimeters. <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the length of <span style="text-decoration: overline"><i>AC</i></span>?',
 type: 'multiple-choice',
 options: ['1.41 cm', '2 cm', '5.29 cm', '10 cm'],
 correctAnswer: 2, 
 explanation: 'BC is the hypotenuse. AC² = 8² − 6² = 64 − 36 = 28, so AC = √28 ≈ 5.29 cm.'
 },
 {
 id: '26',
 text: '<br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>These figures are all —',
 type: 'multiple-choice',
 options: ['pyramids', 'prisms', 'cylinders', 'cones'],
 correctAnswer: 1, 
 explanation: 'Each figure has two congruent, parallel bases joined by rectangular faces, so they are all prisms.'
 },
 {
 id: '27',
 text: '<br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the area of this figure?',
 type: 'multiple-choice',
 options: ['19 cm<sup>2</sup>', '24 cm<sup>2</sup>', '27 cm<sup>2</sup>', '35 cm<sup>2</sup>'],
 correctAnswer: 2, 
 explanation: 'Split the figure into a 7 × 3 rectangle (21 cm<sup>2</sup>) and a 3 × 2 rectangle on top (6 cm<sup>2</sup>). 21 + 6 = 27 cm<sup>2</sup>.'
 },
 {
 id: '28',
 text: 'This shows three different views of a three-dimensional figure constructed from cubes. <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following could be the figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/28a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Choice G matches the top view (a U shape), the 3 × 3 front view, and the 2 × 3 side view.'
 },
 {
 id: '29',
 text: 'If ∠<i>QRS</i> and ∠<i>XYZ</i> are complementary, which <i>must</i> be true?',
 type: 'multiple-choice',
 options: ['One of the angles can measure between 90° and 180°.', 'The sum of the measures of the angles is 90°.', 'The sum of the measures of the angles is 180°.', 'Both angles must measure more than 90°.'],
 correctAnswer: 1, 
 explanation: 'Complementary angles have measures that add up to 90°.'
 },
 {
 id: '30',
 text: '<br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the length of side <i>n</i> on the second triangle?',
 type: 'multiple-choice',
 options: ['2', '2.5', '4', '5'],
 correctAnswer: 1, 
 explanation: 'The triangles are similar. The side of length 2 corresponds to the side of length 8, a scale factor of <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>. Side n corresponds to the side of length 10, so n = 10 × <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = 2.5.'
 },
 {
 id: '31',
 text: 'Ada and Jim received awards for placing either first, second, or third in their respective divisions at each of the 12 track meets attended by the team. The table indicates the results. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which matrix <i>best</i> organizes the information in the table?',
 type: 'multiple-choice',
 options: [
    {url: 'images/31a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Ada placed 1st 7 times, 2nd 3 times, and 3rd 2 times. Jim placed 1st 6 times, 2nd 4 times, and 3rd 2 times. Matrix C shows this.'
 },
 {
 id: '32',
 text: 'The table shows the Math and English scores of Art and 4 of his friends. <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which scattergram correctly shows the relationship between Math and English scores for the group of friends?',
 type: 'multiple-choice',
 options: [
    {url: 'images/32a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The points should be (84, 78), (67, 76), (92, 85), (75, 75), and (78, 88). Scattergram H shows these points.'
 },
 {
 id: '33',
 text: 'Maria\'s test scores for the grading period are 78, 50, 80, 83, 81, and 50. Which measure would report the highest result?',
 type: 'multiple-choice',
 options: ['Mean', 'Median', 'Mode', 'Range'],
 correctAnswer: 1, 
 explanation: 'Mean ≈ 70.3, median = (78 + 80) ÷ 2 = 79, mode = 50, range = 33. The median is highest.'
 },
 {
 id: '34',
 text: 'The graph shows the amount of money earned per week by 5 students in their summer jobs. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Tynan earned $80 per week more than Silas. Which could be her weekly salary?',
 type: 'multiple-choice',
 options: ['$115', '$250', '$275', '$290'],
 correctAnswer: 2, 
 explanation: 'Silas earned about $195 per week. $195 + $80 = $275.'
 },
 {
 id: '35',
 text: 'The list shows the scores made by each member of Jaime\'s discussion group on the last test. <br>69 &nbsp; 79 &nbsp; 62 &nbsp; 93 &nbsp; 73 &nbsp; 81 &nbsp; 73 &nbsp; 78 <br>Which box-and-whiskers plot correctly displays the information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/35a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'In order: 62, 69, 73, 73, 78, 79, 81, 93. The extremes are 62 and 93, the median is 75.5, and the quartiles are 71 and 80. Plot C shows these values.'
 },
 {
 id: '36',
 text: 'This is a list of Beth\'s English homework scores for the grading period. <br>93, 83, 64, 84, 76, 83, 78, 76, 60, 81 <br>Which stem-and-leaf plot correctly displays the information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'In order: 60, 64, 76, 76, 78, 81, 83, 83, 84, 93. Plot J shows all 10 scores.'
 },
 {
 id: '37',
 text: 'The graph shows the number of books checked out at the public library each day last week. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>On which day were there 3 times as many books checked out as on Tuesday?',
 type: 'multiple-choice',
 options: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
 correctAnswer: 2, 
 explanation: 'Tuesday had about 15 books. 3 × 15 = 45, and Friday shows 4 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> symbols, or 45 books.'
 },
 {
 id: '38',
 text: 'Joan and Barry are candidates for class president. Orville, Sally, Consuela, Harry, and Rebecca are candidates for vice president. Sam, William, and Frederica are candidates for secretary. How many different combinations of president, vice president, and secretary are possible?',
 type: 'multiple-choice',
 options: ['11', '18', '30', '40'],
 correctAnswer: 2, 
 explanation: '2 × 5 × 3 = 30 combinations.'
 },
 {
 id: '39',
 text: 'Dave is a member of a bowling league. The table below shows his record for the last 10 games (100 frames) he bowled. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on his previous record, what is the probability that Dave will bowl a strike in the next frame?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>100</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>50</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>25</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>25</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'He bowled 12 strikes in 100 frames. <math><mfrac><mn>12</mn><mn>100</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>25</mn></mfrac></math>.'
 },
 {
 id: '40',
 text: '<br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The graph shows the annual sales for the Gambit Novelty Company since 1975. Which is the <i>best</i> prediction for sales in the year 2005?',
 type: 'multiple-choice',
 options: ['$375,000', '$400,000', '$425,000', '$450,000'],
 correctAnswer: 3, 
 explanation: 'Sales grew about $50,000 every 5 years, reaching about $350,000 in 1995. Two more 5-year periods gives about $450,000 in 2005.'
 },
 {
 id: '41',
 text: 'Rhea took a survey of the students in her class to find out about their career interests. The results are shown in the graph. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The mode of the data is associated with which career?',
 type: 'multiple-choice',
 options: ['Health Related', 'Engineering/Science', 'Education', 'Computers'],
 correctAnswer: 3, 
 explanation: 'The mode is the most common response. Computers has the tallest bar.'
 },
 {
 id: '42',
 text: '<br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many of the sections of the spinner shown above should be colored blue in order to make the probability of the arrow landing on blue 0.375 in a single spin?',
 type: 'multiple-choice',
 options: ['1', '3', '5', '7'],
 correctAnswer: 1, 
 explanation: 'The spinner has 8 equal sections. 0.375 = <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>, so 3 sections should be blue.'
 },
 {
 id: '43',
 text: 'Working together, Joy and Steve collected 39 pounds of aluminum cans for recycling. If Joy collected <i>j</i> pounds, which of the following shows the number of pounds collected by Steve?',
 type: 'multiple-choice',
 options: ['<i>j</i> + 39', '<i>j</i> − 39', '39 − <i>j</i>', '39<i>j</i>'],
 correctAnswer: 2, 
 explanation: 'Steve collected the total minus Joy\'s part: 39 − j.'
 },
 {
 id: '44',
 text: '<br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Points <i>A</i>, <i>B</i>, and <i>C</i> are vertices of a parallelogram. What are the coordinates of the fourth vertex?',
 type: 'multiple-choice',
 options: ['(0, 0)', '(0, 1)', '(−1, 1)', '(−1, −1)'],
 correctAnswer: 2, 
 explanation: 'A is at (−3, −3), B at (2, −3), and C at (4, 1). Moving from B to C is 2 right and 4 up, so the fourth vertex is A moved 2 right and 4 up: (−1, 1).'
 },
 {
 id: '45',
 text: 'What is the solution to 5<i>a</i> + 11 + 3<i>a</i> − 7 = −4?',
 type: 'multiple-choice',
 options: ['<i>a</i> = <math><mfrac><mrow><mtext>−11</mtext></mrow><mrow><mtext>4</mtext></mrow></mfrac></math>', '<i>a</i> = <math><mfrac><mrow><mtext>−7</mtext></mrow><mrow><mtext>4</mtext></mrow></mfrac></math>', '<i>a</i> = −1', '<i>a</i> = 0'],
 correctAnswer: 2, 
 explanation: 'Combine like terms: 8a + 4 = −4. Then 8a = −8, so a = −1.'
 },
 {
 id: '46',
 text: 'The table shows some elements of a function. <br><img src="images/46.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the missing rule in this table?',
 type: 'multiple-choice',
 options: ['2<i>n</i>', '<math><mfrac><mrow><mtext>n + 2</mtext></mrow><mrow><mtext>2</mtext></mrow></mfrac></math>', '<math><mfrac><mrow><mtext>2n + 1</mtext></mrow><mrow><mtext>2</mtext></mrow></mfrac></math>', '3<i>n</i>'],
 correctAnswer: 1, 
 explanation: 'When n = 1, the value is <math><mfrac><mn>3</mn><mn>2</mn></mfrac></math> = <math><mfrac><mrow><mtext>1 + 2</mtext></mrow><mrow><mtext>2</mtext></mrow></mfrac></math>. The rule <math><mfrac><mrow><mtext>n + 2</mtext></mrow><mrow><mtext>2</mtext></mrow></mfrac></math> works for every column.'
 },
 {
 id: '47',
 text: '3<sup>4</sup> = 81 <br>3<sup>3</sup> = 27 <br>3<sup>2</sup> = 9 <br>3<sup>1</sup> = 3 <br>3<sup>0</sup> = 1 <br>3<sup>−1</sup> = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> <br>3<sup>−2</sup> = <math><mfrac><mn>1</mn><mn>9</mn></mfrac></math> <br>What is the value of 3<sup>−4</sup>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>24</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>27</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>81</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'Each step down divides by 3: 3<sup>−3</sup> = <math><mfrac><mn>1</mn><mn>27</mn></mfrac></math> and 3<sup>−4</sup> = <math><mfrac><mn>1</mn><mn>81</mn></mfrac></math>.'
 },
 {
 id: '48',
 text: 'If <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>(<i>x</i> − 4) = 9, what is the value of <i>x</i>?',
 type: 'multiple-choice',
 options: ['8', '12', '16', '17 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'Multiply both sides by <math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>: x − 4 = 12, so x = 16.'
 },
 {
 id: '49',
 text: 'A rock that weighed 1.2 pounds on the moon weighed 7.06 pounds on Earth. About how much would an astronaut who weighs 174 pounds on Earth weigh on the moon?',
 type: 'multiple-choice',
 options: ['14.5 lbs', '24.65 lbs', '29.58 lbs', '1,023.53 lbs'],
 correctAnswer: 2, 
 explanation: 'Set up a proportion: <math><mfrac><mn>1.2</mn><mn>7.06</mn></mfrac></math> = <math><mfrac><mn>x</mn><mn>174</mn></mfrac></math>. x = 1.2 × 174 ÷ 7.06 ≈ 29.58 pounds.'
 },
 {
 id: '50',
 text: 'Roxanne\'s car used 4.8 gallons of gasoline to drive 124 miles. If Roxanne has 180 more miles to go, which is <i>closest</i> to the additional number of gallons of gasoline the car will use to complete the trip?',
 type: 'multiple-choice',
 options: ['2.5', '7.0', '7.3', '14.1'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>4.8</mn><mn>124</mn></mfrac></math> = <math><mfrac><mn>x</mn><mn>180</mn></mfrac></math>, so x = 4.8 × 180 ÷ 124 ≈ 6.97, which is about 7.0 gallons.'
 },
 {
 id: '51',
 text: 'When any term in this sequence is divided by the previous term, the result is always the same. <br>3, −6, 12, −24, . . . <br>What is the 7th term of this sequence?',
 type: 'multiple-choice',
 options: ['−192', '−96', '96', '192'],
 correctAnswer: 3, 
 explanation: 'Each term is −2 times the one before: 3, −6, 12, −24, 48, −96, 192.'
 },
 {
 id: '52',
 text: 'When 10 is added to the product of 5 and a number, the result is 50. What is the number?',
 type: 'multiple-choice',
 options: ['5', '8', '10', '12'],
 correctAnswer: 1, 
 explanation: '5n + 10 = 50, so 5n = 40 and n = 8.'
 },
 {
 id: '53',
 text: 'What value of <i>x</i> satisfies the following? <br>4<i>x</i> + 12 = 100',
 type: 'multiple-choice',
 options: ['13', '22', '28', '37'],
 correctAnswer: 1, 
 explanation: '4x = 88, so x = 22.'
 },
 {
 id: '54',
 text: 'Which of the following is <i>not</i> true?',
 type: 'multiple-choice',
 options: ['3<i>x</i> − 8 is an expression with one variable.', '6<i>x</i> + 2<i>y</i> − 7 is an expression with 3 terms.', 'In the expression, 4<i>x</i> + 6<i>y</i>, the coefficient of <i>x</i> is 4.', '5<i>x</i> + 4 = 39 is an expression.'],
 correctAnswer: 3, 
 explanation: '5x + 4 = 39 has an equal sign, so it is an equation, not an expression.'
 },
 {
 id: '55',
 text: 'What is the solution to <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math><i>x</i> + 3 = 7?',
 type: 'multiple-choice',
 options: ['2', '4', '5', '8'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>x = 4, so x = 8.'
 },
 {
 id: '56',
 text: 'What is the solution to 10<i>x</i> + 13 = 17?',
 type: 'multiple-choice',
 options: ['<i>x</i> = 0.3', '<i>x</i> = 0.4', '<i>x</i> = 3.0', '<i>x</i> = 4.0'],
 correctAnswer: 1, 
 explanation: '10x = 4, so x = 0.4.'
 },
 {
 id: '57',
 text: 'The table shows some elements of a function. <br><img src="images/57.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the missing rule in this table?',
 type: 'multiple-choice',
 options: ['2<i>n</i> − 1', '2<i>n</i> + 1', '3<i>n</i>', '4<i>n</i> − 3'],
 correctAnswer: 3, 
 explanation: '4(1) − 3 = 1, 4(2) − 3 = 5, 4(3) − 3 = 9, and 4(4) − 3 = 13.'
 },
 {
 id: '58',
 text: 'Eric is twice as old as his brother Lucas. If 4 is subtracted from Eric\'s age and 4 is added to Lucas\'s age, their ages will be equal. What are the boys\' ages now?',
 type: 'multiple-choice',
 options: ['12 and 6', '14 and 7', '16 and 8', '18 and 9'],
 correctAnswer: 2, 
 explanation: 'Check 16 and 8: 16 is twice 8, and 16 − 4 = 12 = 8 + 4.'
 },
 {
 id: '59',
 text: 'Which means "6 less than 5 times a number is 4 more than 3 times that number"?',
 type: 'multiple-choice',
 options: ['5<i>n</i> − 6 = 3<i>n</i> + 4', '5(<i>n</i> − 6) = 3(<i>n</i> + 4)', '6 − 5<i>n</i> = 4 + 3<i>n</i>', '5(3<i>n</i> + 4) = 6'],
 correctAnswer: 0, 
 explanation: '"6 less than 5 times a number" is 5n − 6, and "4 more than 3 times that number" is 3n + 4.'
 },
 {
 id: '60',
 text: '<br><img src="images/60.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph shows a line that contains the points in the table of ordered pairs?',
 type: 'multiple-choice',
 options: [
    {url: 'images/60a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/60b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/60c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/60d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The points (−2, −3), (0, 1), and (2, 5) lie on a line through (0, 1) that rises 2 units for each 1 unit to the right. Graph G shows this line.'
 }
];

// Scaled Score Mapping for Grade 8 Mathematics (2001)
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
        testType: 'Grade 8 Mathematics (2001)'
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
        result.testType = 'Grade 8 Mathematics (2001)';
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
            testType: 'Grade 8 Mathematics (2001)'
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