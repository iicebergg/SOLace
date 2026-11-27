window.TEST_IDENTIFIER = 'math_grade7_2010';

const sampleQuestions = [
 {
 id: '1',
 text: 'Sandy made 9 free throws out of 12 free-throw attempts in a basketball game. What percentage of the free-throw attempts did Sandy make?',
 type: 'multiple-choice',
 options: ['25%', '33%', '57%', '75%'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>9</mn><mn>12</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> = 75%.'
 },
 {
 id: '2',
 text: 'Charlie’s Restaurant advertises that 3% of the total amount of money earned on Tuesdays will be donated to a local charity. At this same rate, which statement is most likely true?',
 type: 'multiple-choice',
 options: ['Charlie’s Restaurant earned a total of $500 last Tuesday and donated $3.', 'Charlie’s Restaurant earned a total of $700 last Tuesday and donated $21.', 'Charlie’s Restaurant earned a total of $3 last Tuesday and donated $100.', 'Charlie’s Restaurant earned a total of $9 last Tuesday and donated $270.'],
 correctAnswer: 1, 
 explanation: '3% of $700 = 0.03 × 700 = $21.'
 },
 {
 id: '3',
 text: 'What number is equal to 2 · 8 − 4 ÷ 4?',
 type: 'multiple-choice',
 options: ['2', '3', '14', '15'],
 correctAnswer: 3, 
 explanation: 'Multiply and divide first: 2 · 8 = 16 and 4 ÷ 4 = 1. Then 16 − 1 = 15.'
 },
 {
 id: '4',
 text: 'Which expression is equivalent to −5 − (−7)?',
 type: 'multiple-choice',
 options: ['−5 + 7', '−5 + −7', '5 − (−7)', '−7 − (−5)'],
 correctAnswer: 0, 
 explanation: 'Subtracting a negative number is the same as adding its opposite: −5 − (−7) = −5 + 7.'
 },
 {
 id: '5',
 text: 'Michael bought a stereo on sale for 20% off the regular price. The regular price of the stereo was $180. What was the sale price of the stereo?',
 type: 'multiple-choice',
 options: ['$36', '$90', '$144', '$160'],
 correctAnswer: 2, 
 explanation: '20% of $180 is $36, so the sale price is $180 − $36 = $144.'
 },
 {
 id: '6',
 text: 'Tom needs 2 tablespoons of a cleaning product for every 5 quarts of water. How many tablespoons of the cleaning product would he need for 4 quarts of water?',
 type: 'multiple-choice',
 options: ['1.6', '2.0', '2.5', '10.0'],
 correctAnswer: 0, 
 explanation: 'Set up a proportion: <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> = <math><mfrac><mn>x</mn><mn>4</mn></mfrac></math>, so x = 8 ÷ 5 = 1.6 tablespoons.'
 },
 {
 id: '7',
 text: 'The record high temperature for a certain U.S. state is 104°F. The record low temperature for the same state is −14°F. What is the difference between the record high and low temperatures for this state?',
 type: 'multiple-choice',
 options: ['90°F', '100°F', '108°F', '118°F'],
 correctAnswer: 3, 
 explanation: '104 − (−14) = 104 + 14 = 118°F.'
 },
 {
 id: '8',
 text: 'Which list is ordered from <i>least</i> to <i>greatest</i>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>, <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>, <math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>, <math><mfrac><mn>7</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>, <math><mfrac><mn>7</mn><mn>11</mn></mfrac></math>, <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>11</mn></mfrac></math>, <math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>, <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>, <math><mfrac><mn>7</mn><mn>11</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>, <math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'As decimals: <math><mfrac><mn>2</mn><mn>9</mn></mfrac></math> ≈ 0.22, <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> = 0.375, <math><mfrac><mn>7</mn><mn>11</mn></mfrac></math> ≈ 0.64, and <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> ≈ 0.83.'
 },
 {
 id: '9',
 text: 'Manuel can paint 5 pictures in 12.5 hours. At this rate, which proportion can be used to find <i>p</i>, the number of pictures Manuel can paint in 8 hours?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>5</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>20.5</mn><mn>p</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>p</mn><mn>20.5</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>12.5</mn></mfrac></math> = <math><mfrac><mn>8</mn><mn>p</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>12.5</mn></mfrac></math> = <math><mfrac><mn>p</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'Write each ratio as pictures to hours: <math><mfrac><mn>5</mn><mn>12.5</mn></mfrac></math> = <math><mfrac><mn>p</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '10',
 text: 'The speed of light is approximately 300,000,000 meters per second. What is the speed of light expressed in scientific notation?',
 type: 'multiple-choice',
 options: ['3.0 × 10<sup>6</sup> m/s', '3.0 × 10<sup>7</sup> m/s', '3.0 × 10<sup>8</sup> m/s', '3.0 × 10<sup>9</sup> m/s'],
 correctAnswer: 2, 
 explanation: 'Move the decimal point 8 places to the left: 300,000,000 = 3.0 × 10<sup>8</sup>.'
 },
 {
 id: '11',
 text: 'What real number property of multiplication is shown in this equation? <br>3 · 11 · 10 = 3 · 10 · 11',
 type: 'multiple-choice',
 options: ['Inverse property', 'Identity property', 'Associative property', 'Commutative property'],
 correctAnswer: 3, 
 explanation: 'The order of the factors changed, which shows the commutative property.'
 },
 {
 id: '12',
 text: 'When simplifying the following, using order of operations, which operation should be performed first? <br>11 ÷ (12 − 8 · 3) + 24',
 type: 'multiple-choice',
 options: ['11 ÷ 12', '12 − 8', '8 · 3', '24'],
 correctAnswer: 2, 
 explanation: 'Work inside the parentheses first, and multiply before subtracting, so 8 · 3 comes first.'
 },
 {
 id: '13',
 text: 'Which number is <i>less</i> than 138%?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>13</mn><mn>8</mn></mfrac></math>', '1 <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>', '1.75', '1.25 × 10<sup>2</sup>'],
 correctAnswer: 1, 
 explanation: '138% = 1.38. 1 <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> = 1.125, which is less than 1.38.'
 },
 {
 id: '14',
 text: 'Which of the following expressions is equivalent to 4.1(8.5 − 6.2)?',
 type: 'multiple-choice',
 options: ['8.5 − 4.1 · 6.2', '4.1 · 8.5 − 6.2', '4.1 · 8.5 − 4.1 · 6.2', '(4.1 + 8.5) − (4.1 + 6.2)'],
 correctAnswer: 2, 
 explanation: 'By the distributive property, 4.1(8.5 − 6.2) = 4.1 · 8.5 − 4.1 · 6.2.'
 },
 {
 id: '15',
 text: 'Triangles <i>XYZ</i> and <i>KLM</i> are congruent. What is the ratio of the length of <span style="text-decoration: overline;"><i>XY</i></span> to the length of <span style="text-decoration: overline;"><i>KL</i></span>?',
 type: 'multiple-choice',
 options: ['1:1', '1:2', '1:3', '1:4'],
 correctAnswer: 0, 
 explanation: 'Corresponding sides of congruent triangles are equal, so the ratio is 1:1.'
 },
 {
 id: '16',
 text: 'Which grid shows a 90° <i>counterclockwise</i> rotation of triangle <i>PQR</i> about the origin?',
 type: 'multiple-choice',
 options: [
    {url: 'images/16a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A 90° counterclockwise rotation about the origin moves (x, y) to (−y, x), so a triangle in Quadrant I moves to Quadrant II.'
 },
 {
 id: '17',
 text: 'In which quadrant is the point (17, 18) located?',
 type: 'multiple-choice',
 options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
 correctAnswer: 0, 
 explanation: 'Both coordinates are positive, so the point is in Quadrant I.'
 },
 {
 id: '18',
 text: 'Triangle <i>ABC</i> is similar to triangle <i>PQR</i>. <br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which proportion can be used to find <i>n</i>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>8</mn><mn>9</mn></mfrac></math> = <math><mfrac><mn>n</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>12</mn></mfrac></math> = <math><mfrac><mn>n</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>12</mn><mn>n</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>9</mn></mfrac></math> = <math><mfrac><mn>12</mn><mn>n</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'AB corresponds to PQ and BC corresponds to QR, so <math><mfrac><mn>4</mn><mn>9</mn></mfrac></math> = <math><mfrac><mn>12</mn><mn>n</mn></mfrac></math>.'
 },
 {
 id: '19',
 text: 'A cylindrical paint can has a diameter of 12 centimeters and a height of 16 centimeters. Which is closest to the volume of the paint can in cubic centimeters?',
 type: 'multiple-choice',
 options: ['603', '1,206', '1,809', '7,235'],
 correctAnswer: 2, 
 explanation: 'The radius is 6 cm. V = πr<sup>2</sup>h ≈ 3.14 × 36 × 16 ≈ 1,809 cubic centimeters.'
 },
 {
 id: '20',
 text: 'Which of the following is the name for the shape shown? <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Octagon', 'Hexagon', 'Pentagon', 'Heptagon'],
 correctAnswer: 1, 
 explanation: 'The shape has 6 sides, so it is a hexagon.'
 },
 {
 id: '21',
 text: 'Which property is common to all quadrilaterals?',
 type: 'multiple-choice',
 options: ['Four angles', 'Four congruent sides', 'Opposite sides parallel', 'Opposite angles congruent'],
 correctAnswer: 0, 
 explanation: 'Every quadrilateral has four sides and four angles.'
 },
 {
 id: '22',
 text: 'What is the area, in square inches, of this quadrilateral? <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['80 in.<sup>2</sup>', '160 in.<sup>2</sup>', '320 in.<sup>2</sup>', '324 in.<sup>2</sup>'],
 correctAnswer: 1, 
 explanation: 'The diagonals are 20 in. and 16 in. The area is <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> × 20 × 16 = 160 in.<sup>2</sup>.'
 },
 {
 id: '23',
 text: 'A trapezoid is a quadrilateral with exactly —',
 type: 'multiple-choice',
 options: ['one pair of congruent sides', 'one pair of parallel sides', 'four congruent angles', 'four congruent sides'],
 correctAnswer: 1, 
 explanation: 'A trapezoid has exactly one pair of parallel sides.'
 },
 {
 id: '24',
 text: 'This diagram shows a rectangular prism. <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the total surface area of this prism?',
 type: 'multiple-choice',
 options: ['110 square inches', '168 square inches', '208 square inches', '220 square inches'],
 correctAnswer: 3, 
 explanation: 'S.A. = 2lw + 2lh + 2wh = 2(4 × 3) + 2(4 × 14) + 2(3 × 14) = 24 + 112 + 84 = 220 square inches.'
 },
 {
 id: '25',
 text: 'Which polygon has 2 times as many angles as a pentagon?',
 type: 'multiple-choice',
 options: ['Decagon', 'Nonagon', 'Hexagon', 'Heptagon'],
 correctAnswer: 0, 
 explanation: 'A pentagon has 5 angles, and 2 × 5 = 10. A decagon has 10 angles.'
 },
 {
 id: '26',
 text: '<br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which line segment most likely connects points located at (−4, 3) and (4, 3) on the coordinate grid above?',
 type: 'multiple-choice',
 options: ['<span style="text-decoration: overline;">OG</span>', '<span style="text-decoration: overline;">GB</span>', '<span style="text-decoration: overline;">PO</span>', '<span style="text-decoration: overline;">BP</span>'],
 correctAnswer: 2, 
 explanation: 'Point P is at (−4, 3) and point O is at (4, 3), so the segment is PO.'
 },
 {
 id: '27',
 text: 'The school soccer team is ordering new knee pads for their uniforms. The knee pads come in 4 different colors, 6 sizes, and 2 styles. How many different outcomes of knee pads are available?',
 type: 'multiple-choice',
 options: ['12', '24', '40', '48'],
 correctAnswer: 3, 
 explanation: 'By the Fundamental Counting Principle, 4 × 6 × 2 = 48 outcomes.'
 },
 {
 id: '28',
 text: 'Which scatterplot <i>best</i> displays a positive relationship among the data points?',
 type: 'multiple-choice',
 options: [
    {url: 'images/28a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'In a positive relationship, the y-values tend to increase as the x-values increase.'
 },
 {
 id: '29',
 text: 'The number of sandwiches sold at four stores from Week 1 through Week 5 is shown in this table. <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based only on the data in the table, which store is most likely to increase its sales of sandwiches in Week 6?',
 type: 'multiple-choice',
 options: ['Store P', 'Store Q', 'Store R', 'Store S'],
 correctAnswer: 0, 
 explanation: 'Store P’s sales have generally increased each week, so Store P is most likely to increase again.'
 },
 {
 id: '30',
 text: 'What is the interquartile range of the box-and-whisker plot? <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['20', '30', '50', '65'],
 correctAnswer: 1, 
 explanation: 'The interquartile range is the upper quartile minus the lower quartile: 60 − 30 = 30.'
 },
 {
 id: '31',
 text: 'What is the median of the data shown? <br>38, 50, 43, 33, 35, 30, 64, 43, 41',
 type: 'multiple-choice',
 options: ['34', '35', '41', '43'],
 correctAnswer: 2, 
 explanation: 'In order: 30, 33, 35, 38, 41, 43, 43, 50, 64. The middle value is 41.'
 },
 {
 id: '32',
 text: 'The students in Mr. Denton’s class earned the following scores on a fitness test. <br>430, 620, 510, 500, 480, 490, 660, 480, 530, 550, 590, 660, 330, 380 <br>Which frequency table <i>best</i> displays these data?',
 type: 'multiple-choice',
 options: [
    {url: 'images/32a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Count the scores in each range: 300–399 has 2, 400–499 has 4, 500–599 has 5, and 600–699 has 3.'
 },
 {
 id: '33',
 text: 'A bag has 15 white marbles and 12 blue marbles. Allison will randomly select 1 marble from this bag. What is the probability that she will select a blue marble?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>5</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>9</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'There are 27 marbles and 12 are blue: <math><mfrac><mn>12</mn><mn>27</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>9</mn></mfrac></math>.'
 },
 {
 id: '34',
 text: 'This scatterplot shows the relationships between the heights of 10 pairs of mothers and daughters. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the scatterplot, which of the following statements is true?',
 type: 'multiple-choice',
 options: ['The tallest mother has the tallest daughter.', 'The shortest mother has the shortest daughter.', 'Taller mothers tend to have taller daughters.', 'Shorter mothers tend to have taller daughters.'],
 correctAnswer: 2, 
 explanation: 'The points show a positive trend: as the mother’s height increases, the daughter’s height tends to increase.'
 },
 {
 id: '35',
 text: 'The table shows the number of catches for each of five members on a softball team. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Coach Hart calculated the mean, median, mode, and range for these data. He realized that he forgot to include Louise’s 11 catches in the table. If Coach Hart now includes Louise’s data with the data for the other five members, which of the following statistical measures would change from his original calculations?',
 type: 'multiple-choice',
 options: ['Mean', 'Median', 'Mode', 'Range'],
 correctAnswer: 0, 
 explanation: 'The original mean is 47 ÷ 5 = 9.4. With Louise, it is 58 ÷ 6 ≈ 9.67, so the mean changes. The median (10), mode (10), and range (6) stay the same.'
 },
 {
 id: '36',
 text: 'Kenan recorded the outcomes he got when he flipped a fair coin 30 times. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If he flips the same coin 300 more times, then he should expect that for these 300 flips —',
 type: 'multiple-choice',
 options: ['less than 60 flips will land tails up', 'close to 150 flips will land heads up', 'between 250 and 300 flips will land tails up', 'more than 250 flips will land heads up'],
 correctAnswer: 1, 
 explanation: 'The coin is fair, so the probability of heads is <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>. Expect about <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> × 300 = 150 heads.'
 },
 {
 id: '37',
 text: 'Randall wants to buy a pizza. He can select from 5 different sizes, 4 types of crust, and 12 toppings for his pizza. Which of the following shows how to find all the different possible choices of 1 size, 1 crust, and 1 pizza topping Randall can buy?',
 type: 'multiple-choice',
 options: ['5 · 4 · 12', '5 · 4 + 12', '5 · (4 + 12)', '5 + 4 + 12'],
 correctAnswer: 0, 
 explanation: 'By the Fundamental Counting Principle, multiply the number of choices: 5 · 4 · 12.'
 },
 {
 id: '38',
 text: 'This table shows ticket sales for the Taylor Middle School band concert. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many tickets must be sold on Saturday to make the median and the mode the same?',
 type: 'multiple-choice',
 options: ['190', '286', '528', '826'],
 correctAnswer: 2, 
 explanation: 'With 528 on Saturday, the data in order are 190, 286, 528, 528, 632, 826. The median is (528 + 528) ÷ 2 = 528, and the mode is also 528.'
 },
 {
 id: '39',
 text: 'Charles worked for 12 hours on Wednesday. This was 3 times as long as he worked on Tuesday. How many hours did Charles work on Tuesday?',
 type: 'multiple-choice',
 options: ['4', '9', '15', '36'],
 correctAnswer: 0, 
 explanation: '3<i>t</i> = 12, so <i>t</i> = 4 hours.'
 },
 {
 id: '40',
 text: 'Which table contains only values that satisfy the following? <br><i>y</i> = 2<i>x</i>',
 type: 'multiple-choice',
 options: [
    {url: 'images/40a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'For each pair, <i>y</i> must be twice <i>x</i>: (0, 0), (2, 4), (4, 8).'
 },
 {
 id: '41',
 text: 'What value of <i>x</i> makes −4<i>x</i> = 12 true?',
 type: 'multiple-choice',
 options: ['−48', '−3', '3', '16'],
 correctAnswer: 1, 
 explanation: 'Divide both sides by −4: <i>x</i> = 12 ÷ (−4) = −3.'
 },
 {
 id: '42',
 text: 'How is “ten less than the square of a number, <i>a</i>,” expressed algebraically?',
 type: 'multiple-choice',
 options: ['<i>a</i><sup>2</sup> − 10', '10 − <i>a</i><sup>2</sup>', '2<i>a</i> − 10', '10 − 2<i>a</i>'],
 correctAnswer: 0, 
 explanation: 'The square of <i>a</i> is <i>a</i><sup>2</sup>, and ten less than that is <i>a</i><sup>2</sup> − 10.'
 },
 {
 id: '43',
 text: 'The sum of a number and −13 is −7. What is the number?',
 type: 'multiple-choice',
 options: ['−20', '−6', '6', '20'],
 correctAnswer: 2, 
 explanation: '<i>n</i> + (−13) = −7, so <i>n</i> = −7 + 13 = 6.'
 },
 {
 id: '44',
 text: 'Which phrase is represented by 3(8 − <i>n</i>) + 2?',
 type: 'multiple-choice',
 options: ['The sum of two and three times the quotient of eight and a number, <i>n</i>', 'The sum of two and three times the difference between a number, <i>n</i>, and eight', 'Two more than the difference between three times a number, <i>n</i>, and eight', 'Two more than three times the difference between eight and a number, <i>n</i>'],
 correctAnswer: 3, 
 explanation: '8 − <i>n</i> is the difference between eight and <i>n</i>. Multiply by three, then add two.'
 },
 {
 id: '45',
 text: 'Which symbol can be placed in the box to make the following an expression? <br>12 − 3<i>x</i> ☐ 5',
 type: 'multiple-choice',
 options: ['≤', '>', '=', '+'],
 correctAnswer: 3, 
 explanation: 'An expression has no equal sign or inequality symbol, so the box must be an operation such as +.'
 },
 {
 id: '46',
 text: 'Gloria placed 2 apples into each of 14 boxes. Let <i>a</i> represent the total number of apples she had. Which of the following <i>best</i> represents this situation?',
 type: 'multiple-choice',
 options: ['<i>a</i> = <math><mfrac><mn>14</mn><mn>2</mn></mfrac></math>', '<i>a</i> = 14 · 2', '<i>a</i> = 14 + 2', '<i>a</i> = 14 − 2'],
 correctAnswer: 1, 
 explanation: '14 boxes with 2 apples each is 14 · 2 apples.'
 },
 {
 id: '47',
 text: 'Which word best describes 8<i>z</i> − 5 < 18?',
 type: 'multiple-choice',
 options: ['Variable', 'Equation', 'Inequality', 'Expression'],
 correctAnswer: 2, 
 explanation: 'The sentence uses the symbol <, so it is an inequality.'
 },
 {
 id: '48',
 text: 'What is the solution to <i>d</i> − 10 = −30?',
 type: 'multiple-choice',
 options: ['−40', '−20', '20', '40'],
 correctAnswer: 1, 
 explanation: 'Add 10 to both sides: <i>d</i> = −30 + 10 = −20.'
 },
 {
 id: '49',
 text: 'Which sequence is a geometric sequence?',
 type: 'multiple-choice',
 options: ['1, 2, 4, 8, . . .', '2, 4, 6, 8, . . .', '3, 7, 11, 15, . . .', '4, 8, 12, 16, . . .'],
 correctAnswer: 0, 
 explanation: 'In a geometric sequence, each term is multiplied by the same number. In 1, 2, 4, 8, each term is multiplied by 2.'
 },
 {
 id: '50',
 text: 'Which of the following represents the sentence shown? <br>“Twice a number, <i>n</i>, decreased by six is fourteen.”',
 type: 'multiple-choice',
 options: ['2<i>n</i> − 6 = 14', '2<i>n</i> + 6 = 14', '2(<i>n</i> − 6) = 14', '2 + <i>n</i> − 6 = 14'],
 correctAnswer: 0, 
 explanation: 'Twice a number is 2<i>n</i>, decreased by six is 2<i>n</i> − 6, and “is fourteen” means = 14.'
 }
];

// Scaled Score Mapping for Grade 7 Mathematics (2010)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 25,
  2: 83,
  3: 118,
  4: 143,
  5: 164,
  6: 181,
  7: 197,
  8: 210,
  9: 223,
  10: 234,
  11: 245,
  12: 255,
  13: 265,
  14: 274,
  15: 283,
  16: 291,
  17: 300,
  18: 308,
  19: 316,
  20: 324,
  21: 331,
  22: 339,
  23: 347,
  24: 354,
  25: 362,
  26: 369,
  27: 377,
  28: 384,
  29: 392,
  30: 400,
  31: 407,
  32: 415,
  33: 423,
  34: 432,
  35: 440,
  36: 449,
  37: 458,
  38: 467,
  39: 477,
  40: 488,
  41: 499,
  42: 511,
  43: 525,
  44: 540,
  45: 557,
  46: 577,
  47: 600,
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
        testType: 'Grade 7 Mathematics (2010)'
      };
      
      console.log(`Saving Grade 7 Math result: ${rawScore}/50 → ${scaledScore} (${performanceLevel})`);
      
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
        result.testType = 'Grade 7 Mathematics (2010)';
        updated = true;
        console.log(`Enhanced Grade 7 Math result ${index + 1}: ${result.rawScore}/50 → ${result.scaledScore} (${result.performanceLevel})`);
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
          const totalQuestions = window.questions ? window.questions.length : 50;
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
            testType: 'Grade 7 Mathematics (2010)'
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