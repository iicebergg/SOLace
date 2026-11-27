window.TEST_IDENTIFIER = 'math_grade8_2008';

const sampleQuestions = [
 {
 id: '1',
 text: 'According to the order of operations, which operation should be performed first to evaluate the expression? <br>2 + 3 · 20 + 8 ÷ 4 − 1',
 type: 'multiple-choice',
 options: ['4 − 1', '8 ÷ 4', '20 + 8', '3 · 20'],
 correctAnswer: 3, 
 explanation: 'Multiply and divide from left to right before adding and subtracting. The first operation is 3 · 20.'
 },
 {
 id: '2',
 text: 'Apple juice concentrate is mixed with water to make apple juice. Which final mixture has the highest percentage of apple juice concentrate?',
 type: 'multiple-choice',
 options: ['400 mL apple juice concentrate mixed with 600 mL water', '400 mL apple juice concentrate mixed with 400 mL water', '300 mL apple juice concentrate mixed with 600 mL water', '300 mL apple juice concentrate mixed with 400 mL water'],
 correctAnswer: 1, 
 explanation: '400 mL of concentrate in 800 mL of mixture is 50%, which is the highest percentage.'
 },
 {
 id: '3',
 text: 'What is 901,000 written in scientific notation?',
 type: 'multiple-choice',
 options: ['9.01 × 10<sup>−5</sup>', '9.01 × 10<sup>−3</sup>', '9.01 × 10<sup>3</sup>', '9.01 × 10<sup>5</sup>'],
 correctAnswer: 3, 
 explanation: 'Move the decimal point 5 places to the left: 901,000 = 9.01 × 10<sup>5</sup>.'
 },
 {
 id: '4',
 text: 'According to the order of operations, which operation should be performed first to simplify the following? <br>7 + 3<sup>2</sup> − 4 ÷ 2 − 1',
 type: 'multiple-choice',
 options: ['7 + 3', '3<sup>2</sup> − 4', '2 − 1', '3<sup>2</sup>'],
 correctAnswer: 3, 
 explanation: 'Exponents come before multiplication, division, addition, and subtraction, so evaluate 3<sup>2</sup> first.'
 },
 {
 id: '5',
 text: 'Which set of numbers contains √5?',
 type: 'multiple-choice',
 options: ['Natural numbers', 'Irrational numbers', 'Integers', 'Rational numbers'],
 correctAnswer: 1, 
 explanation: '5 is not a perfect square, so √5 is an irrational number.'
 },
 {
 id: '6',
 text: 'Which list is ordered from <i>least</i> to <i>greatest</i>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>, 30%', '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, 30%', '30%, <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, 30%, <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '30% = 0.30, <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> ≈ 0.33, and <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math> = 0.60.'
 },
 {
 id: '7',
 text: 'Which expression has a value of 27 when <i>n</i> equals 2?',
 type: 'multiple-choice',
 options: ['<i>n</i> + (4<sup>3</sup> ÷ 8)', '<i>n</i> + (4 ÷ 8)<sup>3</sup>', '(<i>n</i> + 4)<sup>3</sup> ÷ 8', '(<i>n</i> + 4<sup>3</sup>) ÷ 8'],
 correctAnswer: 2, 
 explanation: '(2 + 4)<sup>3</sup> ÷ 8 = 6<sup>3</sup> ÷ 8 = 216 ÷ 8 = 27.'
 },
 {
 id: '8',
 text: 'Which has a value between 2 and 3?',
 type: 'multiple-choice',
 options: ['√12', '√8', '√3', '√2'],
 correctAnswer: 1, 
 explanation: '2<sup>2</sup> = 4 and 3<sup>2</sup> = 9. Since 8 is between 4 and 9, √8 is between 2 and 3.'
 },
 {
 id: '9',
 text: 'The area (<i>A</i>) of a trapezoid can be found using the formula <i>A</i> = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math><i>h</i>(<i>b</i><sub>1</sub> + <i>b</i><sub>2</sub>). What is the area of a trapezoid if <i>b</i><sub>1</sub> = 8 centimeters, <i>b</i><sub>2</sub> = 12 centimeters, and <i>h</i> = 6 centimeters?',
 type: 'multiple-choice',
 options: ['32 cm<sup>2</sup>', '48 cm<sup>2</sup>', '54 cm<sup>2</sup>', '60 cm<sup>2</sup>'],
 correctAnswer: 3, 
 explanation: '<i>A</i> = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> × 6 × (8 + 12) = 3 × 20 = 60 cm<sup>2</sup>.'
 },
 {
 id: '10',
 text: '<br><img src="images/10.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the family’s monthly income is $3,286, what is the amount the Wren family budgets for entertainment each month?',
 type: 'multiple-choice',
 options: ['$657.20', '$328.60', '$164.30', '$32.86'],
 correctAnswer: 1, 
 explanation: 'Entertainment is 10% of $3,286, which is $328.60.'
 },
 {
 id: '11',
 text: 'Which number is a perfect square?',
 type: 'multiple-choice',
 options: ['2', '5', '25', '52'],
 correctAnswer: 2, 
 explanation: '25 = 5 × 5, so it is a perfect square.'
 },
 {
 id: '12',
 text: 'What is the value of the following when <i>b</i> = 2? <br>3<sup><i>b</i></sup> + 3',
 type: 'multiple-choice',
 options: ['9', '12', '27', '36'],
 correctAnswer: 1, 
 explanation: '3<sup>2</sup> + 3 = 9 + 3 = 12.'
 },
 {
 id: '13',
 text: 'A computer game was originally priced at $59.99. It was marked down 15%. Then it was moved to a clearance rack marked “Take an additional 50% off the lowest marked price.” What was the final price of the computer game?',
 type: 'multiple-choice',
 options: ['$25.50', '$30.00', '$50.99', '$59.99'],
 correctAnswer: 0, 
 explanation: 'After 15% off: $59.99 × 0.85 ≈ $50.99. After an additional 50% off: $50.99 × 0.5 ≈ $25.50.'
 },
 {
 id: '14',
 text: 'Which is closest to the volume of a cylinder with measurements as shown? <br><img src="images/14.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['63 cubic units', '88 cubic units', '226 cubic units', '251 cubic units'],
 correctAnswer: 3, 
 explanation: 'V = πr<sup>2</sup>h ≈ 3.14 × 16 × 5 ≈ 251 cubic units.'
 },
 {
 id: '15',
 text: 'Which is closest to the measure of ∠<i>WXY</i>? <br><img src="images/15.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['45°', '55°', '135°', '145°'],
 correctAnswer: 2, 
 explanation: 'The angle is obtuse. Reading the protractor scale that starts at 0° along ray XW, the angle measures about 135°.'
 },
 {
 id: '16',
 text: '<br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which names one of the legs of the triangle pictured?',
 type: 'multiple-choice',
 options: ['∠<i>LJQ</i>', '<span style="text-decoration: overline;"><i>LJ</i></span>', '∠<i>QLJ</i>', '<span style="text-decoration: overline;"><i>QL</i></span>'],
 correctAnswer: 3, 
 explanation: 'The legs of a right triangle are the two sides that form the right angle. QL is one of them.'
 },
 {
 id: '17',
 text: 'What is the surface area of a cube with the measurements shown? <br><img src="images/17.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['81 m<sup>2</sup>', '54 m<sup>2</sup>', '27 m<sup>2</sup>', '9 m<sup>2</sup>'],
 correctAnswer: 1, 
 explanation: 'Each face is 3 × 3 = 9 m<sup>2</sup>, and a cube has 6 faces: 6 × 9 = 54 m<sup>2</sup>.'
 },
 {
 id: '18',
 text: 'Les rotated the figure 90° clockwise about the origin. <br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>most</i> likely the new image Les made?',
 type: 'multiple-choice',
 options: [
    {url: 'images/18a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A 90° clockwise rotation about the origin moves (<i>x</i>, <i>y</i>) to (<i>y</i>, −<i>x</i>), turning a horizontal figure into a vertical one on the right side of the <i>y</i>-axis.'
 },
 {
 id: '19',
 text: '<br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>This shows 3 different views of a three-dimensional figure constructed from cubes. Which could be this figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/19a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Check each figure from the top, front, and left side. The correct figure matches all three views.'
 },
 {
 id: '20',
 text: 'Which is a dilation of the figure in the following coordinate grid? <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/20a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'A dilation changes the size of a figure but keeps its shape and orientation.'
 },
 {
 id: '21',
 text: 'Lines <i>l</i> and <i>m</i> intersect so that the measure of ∠1 is 50°. <br><img src="images/21.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the measure of ∠2?',
 type: 'multiple-choice',
 options: ['40°', '50°', '100°', '130°'],
 correctAnswer: 1, 
 explanation: '∠1 and ∠2 are vertical angles, so they are congruent: 50°.'
 },
 {
 id: '22',
 text: 'A water slide is one side of a right triangle as shown. <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is <i>x</i>, the length of the water slide?',
 type: 'multiple-choice',
 options: ['14 ft', '21 ft', '26 ft', '34 ft'],
 correctAnswer: 2, 
 explanation: '<i>x</i><sup>2</sup> = 10<sup>2</sup> + 24<sup>2</sup> = 100 + 576 = 676, so <i>x</i> = 26 ft.'
 },
 {
 id: '23',
 text: 'The figure shows a triangle on a coordinate plane. <br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following shows the triangle translated 3 units to the right and 1 unit down?',
 type: 'multiple-choice',
 options: [
    {url: 'images/23a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Add 3 to each <i>x</i>-coordinate and subtract 1 from each <i>y</i>-coordinate.'
 },
 {
 id: '24',
 text: '<br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which three-dimensional figure in the position shown <i>most likely</i> has the top view shown above?',
 type: 'multiple-choice',
 options: [
    {url: 'images/24a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Imagine looking straight down on each figure. The correct figure shows a triangle from above.'
 },
 {
 id: '25',
 text: '<br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the measure of <span style="text-decoration: overline;"><i>AX</i></span>?',
 type: 'multiple-choice',
 options: ['3 in.', '9 in.', '19 in.', '27 in.'],
 correctAnswer: 1, 
 explanation: 'By the Pythagorean theorem, <i>AX</i><sup>2</sup> = 15<sup>2</sup> − 12<sup>2</sup> = 225 − 144 = 81, so <i>AX</i> = 9 in.'
 },
 {
 id: '26',
 text: 'Sandra has a bag of same-sized cookies. The number of cookies and the different animal pictures on the cookies are listed below. <br>• 9 lion <br>• 5 elephant <br>• 3 tiger <br>• 9 bear <br>Sandra will choose one cookie at random. What is the probability that the first cookie Sandra chooses will have a picture of a tiger?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>26</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>23</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'There are 9 + 5 + 3 + 9 = 26 cookies, and 3 are tigers: <math><mfrac><mn>3</mn><mn>26</mn></mfrac></math>.'
 },
 {
 id: '27',
 text: '<br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many rows does this matrix have?',
 type: 'multiple-choice',
 options: ['3', '4', '7', '12'],
 correctAnswer: 1, 
 explanation: 'Rows go across. The matrix has 4 rows.'
 },
 {
 id: '28',
 text: 'A spinner consists of six equal regions as shown. <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Harrold spins the spinner once, what is the probability that the arrow will land on a region numbered less than or equal to 2?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '2 of the 6 regions (1 and 2) are less than or equal to 2: <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>.'
 },
 {
 id: '29',
 text: 'The line graph shows the heights of water in a container that Manny recorded over a 5-hour period for a science project. <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the height of the water continues to decrease as shown, which is closest to its height at 6:00 p.m.?',
 type: 'multiple-choice',
 options: ['3.00 cm', '2.75 cm', '1.50 cm', '0.25 cm'],
 correctAnswer: 2, 
 explanation: 'The height drops about 1 to 1.5 cm each hour. Continuing the trend from about 2.75 cm at 5:00 gives about 1.50 cm at 6:00.'
 },
 {
 id: '30',
 text: 'The bar graph shows the number of absences for several students in Mr. Hide’s class. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the mode number of absences for this group of students?',
 type: 'multiple-choice',
 options: ['13', '10', '4', '3'],
 correctAnswer: 3, 
 explanation: 'The value that appears most often is 3 absences.'
 },
 {
 id: '31',
 text: 'A store manager displayed the number of bottles of suntan lotion sold during several months in this bar graph. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What percent of the total number of bottles of suntan lotion sold in June, July, and August was sold in July?',
 type: 'multiple-choice',
 options: ['30%', '32%', '40%', '48%'],
 correctAnswer: 2, 
 explanation: 'June 1,200 + July 1,500 + August 1,050 = 3,750. <math><mfrac><mn>1500</mn><mn>3750</mn></mfrac></math> = 40%.'
 },
 {
 id: '32',
 text: 'A bag contains 12 marbles: 5 are orange, 3 are blue, and the rest are red. If one marble is selected at random from the bag, what is the probability that it will be red or blue?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'There are 12 − 5 − 3 = 4 red marbles. Red or blue is 4 + 3 = 7 marbles: <math><mfrac><mn>7</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '33',
 text: 'A towing company charges a flat fee of $50 in addition to $2 a mile to tow vehicles. Which equation shows the relation between <i>y</i>, the total cost, and <i>x</i>, the number of miles a vehicle is towed?',
 type: 'multiple-choice',
 options: ['<i>y</i> = 2<i>x</i> + 50', '<i>y</i> = 2<i>x</i> − 50', '<i>y</i> = <math><mfrac><mn>x</mn><mn>2</mn></mfrac></math> + 50', '<i>y</i> = <math><mfrac><mn>x</mn><mn>2</mn></mfrac></math> − 50'],
 correctAnswer: 0, 
 explanation: '$2 per mile is 2<i>x</i>, plus the $50 flat fee: <i>y</i> = 2<i>x</i> + 50.'
 },
 {
 id: '34',
 text: 'Which graph <i>best</i> represents the following? <br><i>y</i> = <i>x</i> − 3',
 type: 'multiple-choice',
 options: [
    {url: 'images/34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The line has a slope of 1 and crosses the <i>y</i>-axis at −3.'
 },
 {
 id: '35',
 text: 'Which is one value of the set of <i>x</i> that makes the following true? <br>7<i>x</i> + 3 > 17',
 type: 'multiple-choice',
 options: ['0', '1', '2', '3'],
 correctAnswer: 3, 
 explanation: '7<i>x</i> > 14, so <i>x</i> > 2. Of the choices, only 3 is greater than 2.'
 },
 {
 id: '36',
 text: 'Which ordered pair (<i>x</i>, <i>y</i>) is a solution to the following? <br><i>y</i> = 3<i>x</i> + 10',
 type: 'multiple-choice',
 options: ['(2, 13)', '(−2, 16)', '(−3, 1)', '(1, 11)'],
 correctAnswer: 2, 
 explanation: '3(−3) + 10 = −9 + 10 = 1, so (−3, 1) is a solution.'
 },
 {
 id: '37',
 text: 'Steven read that the actual distance between Memphis and Chicago is about 525 miles. On a map, the distance between the two cities is about 10 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> inches. Which is <i>most likely</i> the scale used to make the map?',
 type: 'multiple-choice',
 options: ['1 inch represents 50 miles', '1 inch represents 25 miles', '1 inch represents 30 miles', '1 inch represents 40 miles'],
 correctAnswer: 0, 
 explanation: '525 ÷ 10.5 = 50 miles per inch.'
 },
 {
 id: '38',
 text: 'The following is a graph of a function of <i>x</i>. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which set <i>best</i> represents the domain of the function?',
 type: 'multiple-choice',
 options: ['{−7, −5, −2, 0, 3, 5, 8}', '{0, 2, 3, 5, 6, 8, 9}', '{−7, −5, −2, 0, 2, 3, 5, 6, 8, 9}', '{0, 3, 5, 8}'],
 correctAnswer: 0, 
 explanation: 'The domain is the set of <i>x</i>-coordinates of the points: −7, −5, −2, 0, 3, 5, and 8.'
 },
 {
 id: '39',
 text: 'Which ordered pair makes the equation <i>false</i>? <br><i>x</i> = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math><i>y</i> − 1',
 type: 'multiple-choice',
 options: ['(−1, 0)', '(0, 2)', '(2, 3)', '(1, 4)'],
 correctAnswer: 2, 
 explanation: 'For (2, 3): <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>(3) − 1 = 0.5, which is not 2, so the equation is false.'
 },
 {
 id: '40',
 text: 'Which graph <i>most likely</i> contains all the ordered pairs in the table? <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/40a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Plot each ordered pair from the table and find the graph that passes through all of them.'
 },
 {
 id: '41',
 text: 'What value for <i>n</i> makes the following sentence true? <br>5<i>n</i> = 8 + 3<i>n</i>',
 type: 'multiple-choice',
 options: ['<i>n</i> = 4', '<i>n</i> = 2', '<i>n</i> = <math><mfrac><mn>8</mn><mn>3</mn></mfrac></math>', '<i>n</i> = <math><mfrac><mn>8</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Subtract 3<i>n</i> from both sides: 2<i>n</i> = 8, so <i>n</i> = 4.'
 },
 {
 id: '42',
 text: 'Which of the following graphs contains all the ordered pairs in the table? <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/42a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The <i>y</i>-value increases by 1 each time <i>x</i> increases by 2, so the line has a slope of <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> and crosses the <i>y</i>-axis at −2.'
 },
 {
 id: '43',
 text: 'In which table do all of the ordered pairs make the equation true? <br><i>y</i> = 2<i>x</i> + 4',
 type: 'multiple-choice',
 options: [
    {url: 'images/43a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Substitute each <i>x</i>: 2(−2) + 4 = 0, 2(−1) + 4 = 2, 2(0) + 4 = 4, and 2(1) + 4 = 6.'
 },
 {
 id: '44',
 text: 'Mrs. Garcia used 5 cups of flour to make 3 loaves of bread. How many loaves of bread can she make with 30 cups of flour?',
 type: 'multiple-choice',
 options: ['10', '18', '28', '50'],
 correctAnswer: 1, 
 explanation: '30 cups is 6 times 5 cups, so she can make 6 × 3 = 18 loaves.'
 },
 {
 id: '45',
 text: 'Which ordered pair makes the equation true? <br>2<i>x</i> = 18 − <i>y</i>',
 type: 'multiple-choice',
 options: ['(0, 9)', '(1, 4)', '(4, 1)', '(9, 0)'],
 correctAnswer: 3, 
 explanation: 'For (9, 0): 2(9) = 18 and 18 − 0 = 18.'
 },
 {
 id: '46',
 text: 'What value for <i>w</i> makes the equation true? <br>4<i>w</i> − 8 = 16',
 type: 'multiple-choice',
 options: ['−6', '−2', '2', '6'],
 correctAnswer: 3, 
 explanation: 'Add 8: 4<i>w</i> = 24. Divide by 4: <i>w</i> = 6.'
 },
 {
 id: '47',
 text: 'Fran drove <i>m</i> miles in a car she rented. To find <i>R</i>, the total cost of renting the car, she used the following formula. <br><i>R</i> = 0.50<i>m</i> + 35 <br>What is the dependent variable in the formula?',
 type: 'multiple-choice',
 options: ['<i>R</i>', '0.50', '<i>m</i>', '35'],
 correctAnswer: 0, 
 explanation: 'The total cost <i>R</i> depends on the number of miles driven, so <i>R</i> is the dependent variable.'
 }
];

// Scaled Score Mapping for Grade 8 Mathematics (2008)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 13,
  2: 71,
  3: 106,
  4: 131,
  5: 151,
  6: 168,
  7: 183,
  8: 196,
  9: 208,
  10: 220,
  11: 230,
  12: 240,
  13: 249,
  14: 258,
  15: 266,
  16: 275,
  17: 282,
  18: 290,
  19: 298,
  20: 305,
  21: 313,
  22: 320,
  23: 327,
  24: 334,
  25: 342,
  26: 349,
  27: 356,
  28: 363,
  29: 371,
  30: 378,
  31: 386,
  32: 393,
  33: 401,
  34: 409,
  35: 418,
  36: 426,
  37: 436,
  38: 445,
  39: 455,
  40: 466,
  41: 477,
  42: 489,
  43: 503,
  44: 518,
  45: 536,
  46: 557,
  47: 582,
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
        testType: 'Grade 8 Mathematics (2008)'
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
        result.testType = 'Grade 8 Mathematics (2008)';
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
            testType: 'Grade 8 Mathematics (2008)'
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