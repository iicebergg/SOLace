window.TEST_IDENTIFIER = 'math_grade8_2007';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which is equivalent to this expression? <br>(6 − 3)<sup>4</sup>',
 type: 'multiple-choice',
 options: ['1,280', '81', '12', '7'],
 correctAnswer: 1, 
 explanation: '(6 − 3)<sup>4</sup> = 3<sup>4</sup> = 3 × 3 × 3 × 3 = 81.'
 },
 {
 id: '2',
 text: 'Which set contains √7?',
 type: 'multiple-choice',
 options: ['&#123;Rational numbers&#125;', '&#123;Natural numbers&#125;', '&#123;Irrational numbers&#125;', '&#123;Integers&#125;'],
 correctAnswer: 2, 
 explanation: '7 is not a perfect square, so √7 is a nonrepeating, nonterminating decimal. It is irrational.'
 },
 {
 id: '3',
 text: 'Which number is <i>not</i> equivalent to the other three?',
 type: 'multiple-choice',
 options: ['0.8 × 1<sup>2</sup>', '8 × 10<sup>2</sup>', '80 × 10<sup>1</sup>', '800 × 1<sup>1</sup>'],
 correctAnswer: 0, 
 explanation: '0.8 × 1<sup>2</sup> = 0.8, while the other three each equal 800.'
 },
 {
 id: '4',
 text: 'Which number has the <i>least</i> value?',
 type: 'multiple-choice',
 options: ['7.63 × 10<sup>4</sup>', '3.55 × 10<sup>6</sup>', '9.98 × 10<sup>3</sup>', '1.05 × 10<sup>5</sup>'],
 correctAnswer: 2, 
 explanation: 'The smallest power of 10 is 10<sup>3</sup>, so 9.98 × 10<sup>3</sup> = 9,980 is the least.'
 },
 {
 id: '5',
 text: 'Which of the following has a different value than the others?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>6</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '50%', '0.75'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>6</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> = 0.75, but 50% = 0.5.'
 },
 {
 id: '6',
 text: 'Which subset of real numbers does <i>not</i> contain the number 1?',
 type: 'multiple-choice',
 options: ['Whole numbers', 'Irrational numbers', 'Integers', 'Natural numbers'],
 correctAnswer: 1, 
 explanation: '1 is a rational number, so it is not irrational.'
 },
 {
 id: '7',
 text: 'Which operation should be performed first to simplify the following? <br>15 − 9 ÷ (−3)<sup>2</sup>',
 type: 'multiple-choice',
 options: ['Subtract 9 from 15', 'Divide 9 by (−3)', 'Multiply 2 times (−3)', 'Square (−3)'],
 correctAnswer: 3, 
 explanation: 'Exponents come before division and subtraction, so square (−3) first.'
 },
 {
 id: '8',
 text: 'What is the value of (<i>n</i> − 2)<sup>2</sup> + <i>n</i> − 1 when <i>n</i> = 4?',
 type: 'multiple-choice',
 options: ['7', '9', '15', '17'],
 correctAnswer: 0, 
 explanation: '(4 − 2)<sup>2</sup> + 4 − 1 = 4 + 4 − 1 = 7.'
 },
 {
 id: '9',
 text: 'The scale blueprint of a rectangular patio is drawn <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> inch to 1 foot. If the patio is 14 feet long, what is the measure of the patio\'s length on the blueprint?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>8</mn><mn>14</mn></mfrac></math> in.', '<math><mfrac><mn>4</mn><mn>7</mn></mfrac></math> in.', '1 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> in.', '3 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> in.'],
 correctAnswer: 2, 
 explanation: '14 × <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>14</mn><mn>8</mn></mfrac></math> = 1 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> inches.'
 },
 {
 id: '10',
 text: 'Which of the following is a perfect square?',
 type: 'multiple-choice',
 options: ['5', '10', '11', '16'],
 correctAnswer: 3, 
 explanation: '16 = 4 × 4.'
 },
 {
 id: '11',
 text: 'Fuji apples sold for $1.29 per pound while Golden Delicious apples were on sale for $0.89 per pound. Sandi bought 3 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> pounds of each kind. How much more did she pay for the Fuji apples than the Golden Delicious apples?',
 type: 'multiple-choice',
 options: ['$1.40', '$3.12', '$4.51', '$7.63'],
 correctAnswer: 0, 
 explanation: 'The difference is $0.40 per pound. 3.5 × $0.40 = $1.40.'
 },
 {
 id: '12',
 text: 'If <i>x</i> = 8, what is the value of this expression? <br><math><mfrac><mn>x</mn><mn>4</mn></mfrac></math> − 3',
 type: 'multiple-choice',
 options: ['−2.5', '−1', '1', '2.5'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>8</mn><mn>4</mn></mfrac></math> − 3 = 2 − 3 = −1.'
 },
 {
 id: '13',
 text: 'Which number is a perfect square?',
 type: 'multiple-choice',
 options: ['1', '2', '5', '8'],
 correctAnswer: 0, 
 explanation: '1 = 1 × 1.'
 },
 {
 id: '14',
 text: 'Harry and Connie bought tomatoes at the farmer\'s market. Harry paid $4.32 for 6 pounds of tomatoes. At that rate, how much should Connie have paid for 5 pounds of tomatoes?',
 type: 'multiple-choice',
 options: ['$2.16', '$3.60', '$5.04', '$5.18'],
 correctAnswer: 1, 
 explanation: '$4.32 ÷ 6 = $0.72 per pound. 5 × $0.72 = $3.60.'
 },
 {
 id: '15',
 text: 'Reflect the figure across the <i>y</i>-axis. <br><img src="images/15.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is most likely the new figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/15a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Reflecting across the y-axis flips the figure to the left side of the y-axis at the same height, as in choice C.'
 },
 {
 id: '16',
 text: 'Dale drew triangle <i>DOG</i> with the given measurements. <br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the measure of <span style="text-decoration: overline"><i>DG</i></span>?',
 type: 'multiple-choice',
 options: ['17 cm', '13 cm', '11 cm', '7 cm'],
 correctAnswer: 1, 
 explanation: 'DG is the hypotenuse: √(5² + 12²) = √169 = 13 cm.'
 },
 {
 id: '17',
 text: 'Triangle <i>CAT</i> was in Cedric\'s mathematics book. <br><img src="images/17.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is the hypotenuse of the triangle?',
 type: 'multiple-choice',
 options: ['∠<i>TAC</i>', '<span style="text-decoration: overline"><i>TA</i></span>', '∠<i>CTA</i>', '<span style="text-decoration: overline"><i>CT</i></span>'],
 correctAnswer: 3, 
 explanation: 'The hypotenuse is the side opposite the right angle at A, which is CT.'
 },
 {
 id: '18',
 text: 'This shows 3 different views of a three-dimensional figure made from cubes. <br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which could be a drawing of the figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/18a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Choice F matches the top view, the front view with two towers, and the left side view.'
 },
 {
 id: '19',
 text: 'Betty added a support to her metal shelves. <br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If ∠<i>SMO</i> measures 45°, what is the measure of ∠<i>SMN</i>?',
 type: 'multiple-choice',
 options: ['45°', '90°', '135°', '180°'],
 correctAnswer: 2, 
 explanation: '∠SMO and ∠SMN form a straight line, so they add to 180°. 180° − 45° = 135°.'
 },
 {
 id: '20',
 text: 'If all measurements of the right prisms and cylinders are in inches, which container has the greatest volume?',
 type: 'multiple-choice',
 options: [
    {url: 'images/20a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Volumes: F ≈ 3.14 × 25 × 10 ≈ 785, G ≈ 3.14 × 16 × 18 ≈ 904, H = 10 × 10 × 10 = 1,000, J = 8 × 8 × 18 = 1,152. J is greatest.'
 },
 {
 id: '21',
 text: '<br><img src="images/21-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br> <br><img src="images/21-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which statement about the volumes of the two pyramids shown above is true?',
 type: 'multiple-choice',
 options: ['The volume of Pyramid II is 10 times the volume of Pyramid I.', 'The volumes of Pyramid II and Pyramid I are the same.', 'Pyramid II has 10 more cubic feet of volume than Pyramid I.', 'Pyramid II has 30 more cubic feet of volume than Pyramid I.'],
 correctAnswer: 2, 
 explanation: 'Pyramid I: <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> × 6 × 4 × 5 = 40 cu ft. Pyramid II: <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> × 5 × 5 × 6 = 50 cu ft. Pyramid II has 10 more cubic feet.'
 },
 {
 id: '22',
 text: 'Which is closest to the surface area of a cone with dimensions as shown? <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['66 mm<sup>2</sup>', '75 mm<sup>2</sup>', '113 mm<sup>2</sup>', '207 mm<sup>2</sup>'],
 correctAnswer: 1, 
 explanation: 'The radius is 3 mm and the slant height is 5 mm. SA = πr² + πrl ≈ 3.14 × 9 + 3.14 × 15 ≈ 75 mm<sup>2</sup>.'
 },
 {
 id: '23',
 text: 'A transformation was performed on the following figure. <br><img src="images/23-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The result is the figure below. <br><img src="images/23-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What type of transformation was performed on the original figure?',
 type: 'multiple-choice',
 options: ['Dilation', 'Reflection', 'Rotation', 'Translation'],
 correctAnswer: 0, 
 explanation: 'The new figure has the same shape but is larger, so it is a dilation.'
 },
 {
 id: '24',
 text: 'Lines <i>l</i> and <i>m</i> intersect, forming the angles indicated in the drawing. <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following statements <i>must</i> be true?',
 type: 'multiple-choice',
 options: ['∠1 is congruent to ∠2.', '∠1 is supplementary to ∠3.', '∠2 is congruent to ∠4.', '∠2 is supplementary to ∠4.'],
 correctAnswer: 2, 
 explanation: '∠2 and ∠4 are vertical angles, so they are congruent.'
 },
 {
 id: '25',
 text: 'A figure has the views shown. <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which represents the figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/25a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The front view is a diamond and the side view is a rectangle with a line through the middle. Choice A is a prism with a diamond-shaped end, which matches both views.'
 },
 {
 id: '26',
 text: 'Two lines and a ray intersect at a single point as shown below. <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>In the drawing above, what is <i>m</i>∠1 if <i>m</i>∠2 = 40°?',
 type: 'multiple-choice',
 options: ['40°', '45°', '50°', '55°'],
 correctAnswer: 2, 
 explanation: '∠1 and ∠2 together form a right angle. 90° − 40° = 50°.'
 },
 {
 id: '27',
 text: 'Which matrix has a 2 and a 5 in the same column?',
 type: 'multiple-choice',
 options: ['<math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>2</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>5</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>', '<math><mrow><mo>[</mo><mtable><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>2</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>5</mn></mtd></mtr><mtr><mtd><mn>2</mn></mtd><mtd><mn>5</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>', '<math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mn>3</mn></mtd><mtd><mn>4</mn></mtd></mtr><mtr><mtd><mn>7</mn></mtd><mtd><mn>8</mn></mtd><mtd><mn>9</mn></mtd></mtr><mtr><mtd><mn>4</mn></mtd><mtd><mn>5</mn></mtd><mtd><mn>6</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>', '<math><mrow><mo>[</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>2</mn></mtd><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>4</mn></mtd><mtd><mn>5</mn></mtd><mtd><mn>6</mn></mtd></mtr><mtr><mtd><mn>7</mn></mtd><mtd><mn>8</mn></mtd><mtd><mn>9</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>'],
 correctAnswer: 3, 
 explanation: 'In matrix D, the second column is 2, 5, 8, which contains both a 2 and a 5.'
 },
 {
 id: '28',
 text: 'Which scattergram contains data with a positive relationship?',
 type: 'multiple-choice',
 options: [
    {url: 'images/28a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'In a positive relationship, one value increases as the other increases. In the Childrens\' Measurements graph (J), height increases as weight increases.'
 },
 {
 id: '29',
 text: 'During basketball practice, Jada attempted 52 free throws and made 16 of them. Based on that rate, what is the probability that she will make the next free throw she attempts?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>4</mn><mn>13</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>9</mn><mn>13</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: '<math><mfrac><mn>16</mn><mn>52</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>13</mn></mfrac></math>.'
 },
 {
 id: '30',
 text: 'This is a standard set of dominoes. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The dominoes are turned over and shuffled thoroughly, and one is chosen at random. What is the probability that the <i>total</i> number of spots showing on the one chosen will be greater than 6?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>11</mn><mn>28</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>9</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'There are 28 dominoes. 12 of them have more than 6 spots, so the probability is <math><mfrac><mn>12</mn><mn>28</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>.'
 },
 {
 id: '31',
 text: 'Rocky has a <math><mfrac><mn>3</mn><mn>140</mn></mfrac></math> chance of winning a trip to New York City. Which of the following best describes Rocky\'s chances of winning the trip?',
 type: 'multiple-choice',
 options: ['It is certain that Rocky will win the trip.', 'It is likely that Rocky will win the trip.', 'It is unlikely that Rocky will win the trip.', 'It is impossible that Rocky will win the trip.'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>3</mn><mn>140</mn></mfrac></math> is a small probability (about 2%), so winning is unlikely, but possible.'
 },
 {
 id: '32',
 text: 'Which is a 2-by-6 matrix?',
 type: 'multiple-choice',
 options: ['<math><mrow><mo>[</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>5</mn></mtd><mtd><mn>7</mn></mtd></mtr><mtr><mtd><mn>2</mn></mtd><mtd><mn>9</mn></mtd></mtr><mtr><mtd><mn>6</mn></mtd><mtd><mn>6</mn></mtd></mtr><mtr><mtd><mn>3</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>7</mn></mtd><mtd><mn>4</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>', '<math><mrow><mo>[</mo><mtable><mtr><mtd><mn>6</mn></mtd><mtd><mn>6</mn></mtd></mtr><mtr><mtd><mn>6</mn></mtd><mtd><mn>6</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>', '<math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mn>2</mn></mtd><mtd><mn>2</mn></mtd></mtr><mtr><mtd><mn>2</mn></mtd><mtd><mn>2</mn></mtd><mtd><mn>2</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>', '<math><mrow><mo>[</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>5</mn></mtd><mtd><mn>2</mn></mtd><mtd><mn>6</mn></mtd><mtd><mn>3</mn></mtd><mtd><mn>7</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>7</mn></mtd><mtd><mn>9</mn></mtd><mtd><mn>6</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>4</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>'],
 correctAnswer: 3, 
 explanation: 'A 2-by-6 matrix has 2 rows and 6 columns. Matrix J has 2 rows and 6 columns.'
 },
 {
 id: '33',
 text: 'The graph below shows the ages in months of the boys and girls in Mrs. Duncan\'s nursery class. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which conclusion can be justified by the data shown in the bar graph?',
 type: 'multiple-choice',
 options: ['The students in the class are at least 2 years old.', 'There are more girls than boys who are 26 to 27 months old in the class.', 'Most students in the class are older than 30 months.', 'There are more girls than boys in the class.'],
 correctAnswer: 0, 
 explanation: 'The youngest group is 24-25 months, and 24 months is 2 years, so every student is at least 2 years old.'
 },
 {
 id: '34',
 text: 'The scatterplot below shows Sarah\'s height and weight at various times from birth to her third birthday. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the scatterplot, which of the following conclusions about the relationship between her height and weight is true?',
 type: 'multiple-choice',
 options: ['There is a negative relationship between height and weight.', 'There is a positive relationship between height and weight.', 'There is a constant relationship between height and weight.', 'There is no relationship between height and weight.'],
 correctAnswer: 1, 
 explanation: 'As height increases, weight also increases, so the relationship is positive.'
 },
 {
 id: '35',
 text: 'A function of <i>x</i> containing four ordered pairs of the form (<i>x</i>, <i>y</i>) is shown below. <br>{(1, 3), (2, 4), (5, 7), (6, 8)} <br>What is the domain of the function?',
 type: 'multiple-choice',
 options: ['{1, 2, 5, 6}', '{3, 4, 7, 8}', '{1, 2, 3, 4}', '{5, 6, 7, 8}'],
 correctAnswer: 0, 
 explanation: 'The domain is the set of x-values: {1, 2, 5, 6}.'
 },
 {
 id: '36',
 text: 'Given the function of <i>x</i> defined by <br><i>y</i> = 3<i>x</i> + 5, <br>if the domain is {−4, −1, 2, 5}, what is the range?',
 type: 'multiple-choice',
 options: ['{−20, −11, −2, 7}', '{−7, −3, −2, −1}', '{−3, −2, −1, 0}', '{−7, 2, 11, 20}'],
 correctAnswer: 3, 
 explanation: '3(−4) + 5 = −7, 3(−1) + 5 = 2, 3(2) + 5 = 11, and 3(5) + 5 = 20.'
 },
 {
 id: '37',
 text: '<br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which statement generalizes the pattern shown in the table above?',
 type: 'multiple-choice',
 options: ['<i>x</i><sup><i>m</i></sup> · <i>x</i><sup><i>n</i></sup> = <i>x</i><sup>(<i>m</i>+<i>n</i>)</sup>', '<i>x</i><sup><i>m</i></sup> · <i>x</i><sup><i>n</i></sup> = <i>x</i><sup>(<i>n</i>−<i>m</i>)</sup>', '<i>x</i><sup><i>m</i></sup> · <i>x</i><sup><i>n</i></sup> = <i>x</i><sup>(<i>m</i>−<i>n</i>)</sup>', '<i>x</i><sup><i>m</i></sup> · <i>x</i><sup><i>n</i></sup> = <i>x</i><sup>(<i>n</i>+<i>m</i>)</sup>'],
 correctAnswer: 0, 
 explanation: 'In each row the exponents are added: x<sup>1</sup> · x<sup>2</sup> = x<sup>3</sup>, x<sup>2</sup> · x<sup>2</sup> = x<sup>4</sup>, and so on. So x<sup>m</sup> · x<sup>n</sup> = x<sup>(m+n)</sup>.'
 },
 {
 id: '38',
 text: '<br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which could be the table of values that was used to graph the function of <i>x</i> shown?',
 type: 'multiple-choice',
 options: [
    {url: 'images/38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The line passes through (0, −4) and (2, 0) and rises 2 units for each unit to the right. Table J lists (0, −4), (2, 0), (4, 4), and (6, 8), which all lie on this line.'
 },
 {
 id: '39',
 text: 'What is the solution to <math><mfrac><mn>x</mn><mn>4</mn></mfrac></math> + 10 = 34?',
 type: 'multiple-choice',
 options: ['4', '6', '96', '144'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>x</mn><mn>4</mn></mfrac></math> = 24, so x = 96.'
 },
 {
 id: '40',
 text: 'The formula shows that <i>c</i>, the total cost of buying pizzas at Al\'s Restaurant, depends on <i>p</i>, the number of pizzas ordered. <br><i>c</i> = 9<i>p</i> <br>What is the independent variable in the formula?',
 type: 'multiple-choice',
 options: ['<i>p</i>', '<i>c</i>', '9', '='],
 correctAnswer: 0, 
 explanation: 'The cost depends on the number of pizzas, so p is the independent variable.'
 },
 {
 id: '41',
 text: '<br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph best represents the line defined by the table of ordered pairs?',
 type: 'multiple-choice',
 options: [
    {url: 'images/41a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The points (−1, 4), (0, 2), and (1, 0) lie on a line that crosses the y-axis at 2 and falls 2 units for each unit to the right, as in graph B.'
 },
 {
 id: '42',
 text: 'What is the solution to the proportion below? <br><math><mfrac><mn>x</mn><mn>50</mn></mfrac></math> = <math><mfrac><mn>5.5</mn><mn>1</mn></mfrac></math>',
 type: 'multiple-choice',
 options: ['275', '27.5', '9.09', '9 <math><mfrac><mn>1</mn><mn>11</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'x = 50 × 5.5 = 275.'
 },
 {
 id: '43',
 text: 'Which table could be used to graph the following? <br><i>y</i> = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math><i>x</i> + 7',
 type: 'multiple-choice',
 options: [
    {url: 'images/43a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>(−3) + 7 = 6, <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>(0) + 7 = 7, <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>(3) + 7 = 8, and <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>(6) + 7 = 9, as in table A.'
 },
 {
 id: '44',
 text: 'Which is the closest to the circumference of a circle with a diameter of 17 inches?',
 type: 'multiple-choice',
 options: ['27 in.', '53 in.', '227 in.', '907 in.'],
 correctAnswer: 1, 
 explanation: 'C = πd ≈ 3.14 × 17 ≈ 53 inches.'
 },
 {
 id: '45',
 text: 'A cylindrical chemical tank is 12 feet high and has a diameter of 45 feet. Which is closest to the number of cubic feet of liquid the tank will hold?',
 type: 'multiple-choice',
 options: ['38,151', '19,076', '15,890', '141'],
 correctAnswer: 1, 
 explanation: 'The radius is 22.5 feet. V = πr²h ≈ 3.14 × 22.5 × 22.5 × 12 ≈ 19,076 cubic feet.'
 },
 {
 id: '46',
 text: '<br><img src="images/46.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is true for all pairs of values in the table above?',
 type: 'multiple-choice',
 options: ['<i>y</i> = <math><mfrac><mrow><mtext>x − 1</mtext></mrow><mrow><mtext>2</mtext></mrow></mfrac></math>', '<i>y</i> = 2<i>x</i> − 1', '<i>y</i> = <i>x</i> − 1', '<i>y</i> = <i>x</i> + 1'],
 correctAnswer: 1, 
 explanation: '2(0) − 1 = −1, 2(2) − 1 = 3, 2(3) − 1 = 5, and 2(4) − 1 = 7.'
 },
 {
 id: '47',
 text: 'What value of <i>x</i> makes the following statement true? <br>19 = 5<i>x</i> + 4',
 type: 'multiple-choice',
 options: ['23', '15', '4', '3'],
 correctAnswer: 3, 
 explanation: '5x = 15, so x = 3.'
 },
 {
 id: '48',
 text: 'Which is one of the solutions to the following? <br>2<i>x</i> + 4 < 12',
 type: 'multiple-choice',
 options: ['6', '5', '4', '3'],
 correctAnswer: 3, 
 explanation: '2x < 8, so x < 4. Of the choices, only 3 is less than 4.'
 },
 {
 id: '49',
 text: 'Which is a table of ordered pairs defined by <i>y</i> = 2<i>x</i> − 12?',
 type: 'multiple-choice',
 options: [
    {url: 'images/49a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/49b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/49c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/49d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: '2(12) − 12 = 12, 2(15) − 12 = 18, 2(22) − 12 = 32, and 2(30) − 12 = 48, as in table A.'
 },
 {
 id: '50',
 text: 'Which table of ordered pairs could be used to graph <i>y</i> = 4<i>x</i> − 5?',
 type: 'multiple-choice',
 options: [
    {url: 'images/50a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: '4(0) − 5 = −5, 4(1) − 5 = −1, 4(3) − 5 = 7, and 4(5) − 5 = 15, as in table G.'
 }
];

// Scaled Score Mapping for Grade 8 Mathematics (2007)
// Maps raw scores (number correct out of 50) to scaled scores
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
        testType: 'Grade 8 Mathematics (2007)'
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
        result.testType = 'Grade 8 Mathematics (2007)';
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
            testType: 'Grade 8 Mathematics (2007)'
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