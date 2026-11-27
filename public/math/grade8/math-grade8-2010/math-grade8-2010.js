window.TEST_IDENTIFIER = 'math_grade8_2010';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which value is equivalent to the expression shown? <br>−5(3 · 2 − 4)',
 type: 'multiple-choice',
 options: ['−5', '−10', '−26', '−45'],
 correctAnswer: 1, 
 explanation: 'Inside the parentheses: 3 · 2 − 4 = 2. Then −5 × 2 = −10.'
 },
 {
 id: '2',
 text: 'Which number is <i>less than</i> 22,874?',
 type: 'multiple-choice',
 options: ['2.18 × 10<sup>4</sup>', '2.55 × 10<sup>4</sup>', '2.43 × 10<sup>5</sup>', '1.78 × 10<sup>6</sup>'],
 correctAnswer: 0, 
 explanation: '2.18 × 10<sup>4</sup> = 21,800, which is less than 22,874.'
 },
 {
 id: '3',
 text: 'What is the value of 4 − 3<sup>3</sup>?',
 type: 'multiple-choice',
 options: ['−23', '−5', '1', '3'],
 correctAnswer: 0, 
 explanation: '3<sup>3</sup> = 27, so 4 − 27 = −23.'
 },
 {
 id: '4',
 text: 'Which of the following does <i>not</i> represent a rational number?',
 type: 'multiple-choice',
 options: ['0', '2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '√3', '[−1/10]'],
 correctAnswer: 2, 
 explanation: '√3 cannot be written as a ratio of two integers because 3 is not a perfect square, so it is irrational.'
 },
 {
 id: '5',
 text: 'Which of these is a true statement?',
 type: 'multiple-choice',
 options: ['2 × 10<sup>−2</sup> > 2 × 10<sup>2</sup>', '3.1 × 10<sup>3</sup> = 3,100', '2.5 × 10<sup>−2</sup> = 250', '0.235 < 2.35 × 10<sup>−2</sup>'],
 correctAnswer: 1, 
 explanation: '3.1 × 10<sup>3</sup> = 3.1 × 1,000 = 3,100.'
 },
 {
 id: '6',
 text: 'The set of whole numbers is <i>not</i> a subset of —',
 type: 'multiple-choice',
 options: ['irrational numbers', 'integers', 'rational numbers', 'real numbers'],
 correctAnswer: 0, 
 explanation: 'Whole numbers are integers, rational numbers, and real numbers, but they are not irrational numbers.'
 },
 {
 id: '7',
 text: 'Which list of numbers is ordered from <i>greatest</i> to <i>least</i>?',
 type: 'multiple-choice',
 options: ['3.84 × 10<sup>9</sup>, 6.13 × 10<sup>6</sup>, 4.72 × 10<sup>4</sup>, 7.76 × 10<sup>2</sup>', '3.84 × 10<sup>9</sup>, 4.72 × 10<sup>4</sup>, 6.13 × 10<sup>6</sup>, 7.76 × 10<sup>2</sup>', '7.76 × 10<sup>2</sup>, 6.13 × 10<sup>6</sup>, 4.72 × 10<sup>4</sup>, 3.84 × 10<sup>9</sup>', '7.76 × 10<sup>2</sup>, 4.72 × 10<sup>4</sup>, 6.13 × 10<sup>6</sup>, 3.84 × 10<sup>9</sup>'],
 correctAnswer: 0, 
 explanation: 'Order by the powers of 10 from greatest to least: 10<sup>9</sup>, 10<sup>6</sup>, 10<sup>4</sup>, 10<sup>2</sup>.'
 },
 {
 id: '8',
 text: 'Which of the following describes a square root of 41?',
 type: 'multiple-choice',
 options: ['Between 5 and 6', 'Between 6 and 7', 'Between 20 and 21', 'Between 40 and 42'],
 correctAnswer: 1, 
 explanation: '6<sup>2</sup> = 36 and 7<sup>2</sup> = 49. Since 41 is between 36 and 49, √41 is between 6 and 7.'
 },
 {
 id: '9',
 text: 'What is the value of 2(5 − <i>a</i>)<sup>2</sup> + 7<i>a</i> when <i>a</i> = 2?',
 type: 'multiple-choice',
 options: ['16', '20', '32', '50'],
 correctAnswer: 2, 
 explanation: '2(5 − 2)<sup>2</sup> + 7(2) = 2(9) + 14 = 18 + 14 = 32.'
 },
 {
 id: '10',
 text: 'Rob had $363.75 in his bank account on June 12. He made one deposit and two withdrawals as shown. <br><img src="images/10.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the balance in Rob’s bank account after the withdrawal on June 15?',
 type: 'multiple-choice',
 options: ['$170.25', '$352.75', '$374.75', '$557.25'],
 correctAnswer: 1, 
 explanation: '$363.75 − $47.50 + $91.25 − $54.75 = $352.75.'
 },
 {
 id: '11',
 text: 'What is the value of <i>x</i><sup>3</sup> + <i>x</i><sup>2</sup> + <i>x</i> when <i>x</i> = 3?',
 type: 'multiple-choice',
 options: ['9', '18', '21', '39'],
 correctAnswer: 3, 
 explanation: '3<sup>3</sup> + 3<sup>2</sup> + 3 = 27 + 9 + 3 = 39.'
 },
 {
 id: '12',
 text: 'Which number is a perfect square?',
 type: 'multiple-choice',
 options: ['6', '9', '12', '15'],
 correctAnswer: 1, 
 explanation: '9 = 3 × 3, so 9 is a perfect square.'
 },
 {
 id: '13',
 text: 'Albert had a goal of saving $80. He saved 115% of his goal. How much money did Albert save?',
 type: 'multiple-choice',
 options: ['$70', '$92', '$115', '$195'],
 correctAnswer: 1, 
 explanation: '115% of $80 = 1.15 × 80 = $92.'
 },
 {
 id: '14',
 text: 'The square root of which of the following integers is between 7 and 8?',
 type: 'multiple-choice',
 options: ['49', '52', '64', '65'],
 correctAnswer: 1, 
 explanation: '7<sup>2</sup> = 49 and 8<sup>2</sup> = 64. Only 52 is between 49 and 64.'
 },
 {
 id: '15',
 text: 'What is the surface area of a rectangular prism with the dimensions shown? <br><img src="images/15.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['7 sq in.', '14 sq in.', '18 sq in.', '25 sq in.'],
 correctAnswer: 3, 
 explanation: 'S.A. = 2lw + 2lh + 2wh = 2(3.5 × 1) + 2(3.5 × 2) + 2(1 × 2) = 7 + 14 + 4 = 25 sq in.'
 },
 {
 id: '16',
 text: 'Three different views of a three-dimensional figure constructed from cubes are shown. <br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following figures could these views represent?',
 type: 'multiple-choice',
 options: [
    {url: 'images/16a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Check each figure from the front, right side, and top. The correct figure matches all three views.'
 },
 {
 id: '17',
 text: 'In which diagram do ∠1 and ∠2 appear to be vertical angles?',
 type: 'multiple-choice',
 options: [
    {url: 'images/17a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Vertical angles are the opposite angles formed by two intersecting lines.'
 },
 {
 id: '18',
 text: 'Which group of three side lengths could form a right triangle?',
 type: 'multiple-choice',
 options: ['5 ft, 12 ft, 13 ft', '7 ft, 11 ft, 14 ft', '15 ft, 20 ft, 22 ft', '18 ft, 34 ft, 39 ft'],
 correctAnswer: 0, 
 explanation: 'By the Pythagorean theorem, 5<sup>2</sup> + 12<sup>2</sup> = 25 + 144 = 169 = 13<sup>2</sup>.'
 },
 {
 id: '19',
 text: 'Which pair of angles is supplementary?',
 type: 'multiple-choice',
 options: [
    {url: 'images/19a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Supplementary angles have measures that add to 180°: 40° + 140° = 180°.'
 },
 {
 id: '20',
 text: 'Mr. Malone plans to construct a walkway through his rectangular garden, as shown in the drawing. <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the value of <i>w</i>?',
 type: 'multiple-choice',
 options: ['22 ft', '21 ft', '15 ft', '11 ft'],
 correctAnswer: 2, 
 explanation: 'The walkway edge <i>w</i> is the hypotenuse of a right triangle with legs 11 ft and 10 ft: √(121 + 100) = √221 ≈ 14.9, which is closest to 15 ft.'
 },
 {
 id: '21',
 text: 'A three-dimensional figure is constructed from identical cubes. Three views of the figure are shown. <br><img src="images/21.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following could be the three-dimensional figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/21a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Check each figure from the front, top, and right side. The correct figure matches all three views.'
 },
 {
 id: '22',
 text: 'Three triangles are drawn in rectangle PQRS. <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following segments is a hypotenuse of one of these triangles?',
 type: 'multiple-choice',
 options: ['<span style="text-decoration: overline;">RS</span>', '<span style="text-decoration: overline;">RQ</span>', '<span style="text-decoration: overline;">XS</span>', '<span style="text-decoration: overline;">XQ</span>'],
 correctAnswer: 2, 
 explanation: 'The hypotenuse is the side opposite the right angle of a right triangle. XS is opposite the right angle at R in triangle XRS.'
 },
 {
 id: '23',
 text: 'What are the new coordinates of point B after △ABC is translated 2 units down and 3 units to the left? <br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['(3, 1)', '(4, 0)', '(8, 6)', '(9, 5)'],
 correctAnswer: 0, 
 explanation: 'Point B is at (6, 3). Subtract 3 from x and 2 from y: (6 − 3, 3 − 2) = (3, 1).'
 },
 {
 id: '24',
 text: 'The radius of the base of a cone is 4 inches. The slant height of the cone is 6 inches. Which is closest to the surface area of the cone? <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['75 sq in.', '100 sq in.', '126 sq in.', '188 sq in.'],
 correctAnswer: 2, 
 explanation: 'S.A. = πr<sup>2</sup> + πrl = π(16) + π(4)(6) = 40π ≈ 126 sq in.'
 },
 {
 id: '25',
 text: 'Which of the following equations is represented by the figure? <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['4<sup>2</sup> + 5<sup>2</sup> = 9<sup>2</sup>', '3<sup>2</sup> + 5<sup>2</sup> = 8<sup>2</sup>', '3<sup>2</sup> + 4<sup>2</sup> = 7<sup>2</sup>', '3<sup>2</sup> + 4<sup>2</sup> = 5<sup>2</sup>'],
 correctAnswer: 3, 
 explanation: 'The squares on the sides of the triangle have 9, 16, and 25 unit squares, so 3<sup>2</sup> + 4<sup>2</sup> = 5<sup>2</sup>.'
 },
 {
 id: '26',
 text: '<br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following graphs shows a dilation of the triangle from a fixed point?',
 type: 'multiple-choice',
 options: [
    {url: 'images/26a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/26b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/26c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/26d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'A dilation changes the size of a figure but keeps its shape, with all side lengths multiplied by the same scale factor.'
 },
 {
 id: '27',
 text: 'This circle graph displays the number of hours Meredith spent on various activities in a day. <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the data in the circle graph, what percent of Meredith’s day was spent on activities other than sleeping and eating?',
 type: 'multiple-choice',
 options: ['12%', '25%', '38%', '50%'],
 correctAnswer: 3, 
 explanation: 'Sleeping (9 hours) and eating (3 hours) take 12 of the 24 hours. The other 12 hours are <math><mfrac><mn>12</mn><mn>24</mn></mfrac></math> = 50% of the day.'
 },
 {
 id: '28',
 text: 'This graph shows the number of slices of pizza sold each day during one week in the school cafeteria. <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Each slice of pizza costs $0.50. What is the total amount of money the school cafeteria collected on the sales of pizza for this week?',
 type: 'multiple-choice',
 options: ['$7.50', '$15.50', '$75.00', '$150.00'],
 correctAnswer: 2, 
 explanation: 'There are 15 symbols, so 15 × 10 = 150 slices were sold. 150 × $0.50 = $75.00.'
 },
 {
 id: '29',
 text: 'A fair cube used in a game has 1 yellow side and 5 green sides. Emily will win the game if the cube lands on a green side on her next roll. Which statement <i>best</i> describes Emily’s chance of winning the game?',
 type: 'multiple-choice',
 options: ['Certainly will win', 'Certainly will lose', 'Most likely will win', 'Most likely will lose'],
 correctAnswer: 2, 
 explanation: 'The probability of rolling green is <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>, so Emily most likely will win.'
 },
 {
 id: '30',
 text: 'These box-and-whisker plots summarize the heights of the boys and the heights of the girls in an eighth-grade class. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the data in these box-and-whisker plots, which statement is true?',
 type: 'multiple-choice',
 options: ['The tallest student in the class is a girl.', 'The shortest student in the class is a boy.', 'The range of the boys’ heights is greater than the range of the girls’ heights.', 'The median height of the girls is greater than the median height of the boys.'],
 correctAnswer: 0, 
 explanation: 'The tallest student is shown by the right end of the whisker that reaches farthest to the right, which belongs to the girls’ plot.'
 },
 {
 id: '31',
 text: 'This matrix shows the grades on three weekly quizzes for Eric, Sam, and Curt. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the element at row 2, column 3?',
 type: 'multiple-choice',
 options: ['80', '86', '87', '88'],
 correctAnswer: 0, 
 explanation: 'Row 2 is 82, 86, 80. The element in column 3 is 80.'
 },
 {
 id: '32',
 text: 'The following scatterplot shows the scores several students received in math and music classes last semester. <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which statement <i>best</i> describes the relationship in the scatterplot?',
 type: 'multiple-choice',
 options: ['As the math score decreases, the music score increases.', 'As the math score increases, the music score decreases.', 'As the math score decreases, the music score does not change.', 'As the math score increases, the music score increases.'],
 correctAnswer: 3, 
 explanation: 'The points rise from left to right, showing a positive relationship: as math scores increase, music scores increase.'
 },
 {
 id: '33',
 text: 'This table shows the number of marbles in a bag by color. If one marble is randomly selected from the bag, what is the probability that it will be a blue or a red marble? <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['24%', '26%', '38%', '52%'],
 correctAnswer: 3, 
 explanation: 'There are 7 + 10 + 14 + 19 = 50 marbles. Blue or red is 7 + 19 = 26, and <math><mfrac><mn>26</mn><mn>50</mn></mfrac></math> = 52%.'
 },
 {
 id: '34',
 text: 'Three girls sent each other text messages as shown. <br>• Sonia sent Hannah 3 text messages and Takara 2 text messages. <br>• Hannah sent Sonia 1 text message and Takara 3 text messages. <br>• Takara sent Sonia 2 text messages and Hannah 1 text message. <br>Which matrix <i>best</i> summarizes this information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Each row shows who sent the messages, and each column shows who received them. Sonia’s row is 0, 3, 2; Hannah’s row is 1, 0, 3; Takara’s row is 2, 1, 0.'
 },
 {
 id: '35',
 text: 'Margaret has $200 in her savings account. She will deposit $50 into this account each week and will make no withdrawals. Which table represents this situation, excluding interest?',
 type: 'multiple-choice',
 options: [
    {url: 'images/35a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Start at $200 in week 0 and add $50 each week: $200, $250, $300, $350.'
 },
 {
 id: '36',
 text: 'Which graph contains all the ordered pairs in this table? <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Plot each ordered pair from the table and find the graph that shows all of them.'
 },
 {
 id: '37',
 text: 'Which of the following is equivalent to the inequality 5<i>x</i> + 7 < 17?',
 type: 'multiple-choice',
 options: ['5<i>x</i> < 10', '5<i>x</i> > 10', '5<i>x</i> < 24', '5<i>x</i> > 24'],
 correctAnswer: 0, 
 explanation: 'Subtract 7 from both sides: 5<i>x</i> < 10.'
 },
 {
 id: '38',
 text: 'Which table contains only points that lie on the line of the equation <i>y</i> = 6<i>x</i> − 6?',
 type: 'multiple-choice',
 options: [
    {url: 'images/38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Substitute each <i>x</i>-value into <i>y</i> = 6<i>x</i> − 6. For example, <i>x</i> = 2 gives <i>y</i> = 6 and <i>x</i> = −2 gives <i>y</i> = −18.'
 },
 {
 id: '39',
 text: 'What value of <i>n</i> makes this equation true? <br>4<i>n</i> + 9 = 6',
 type: 'multiple-choice',
 options: ['−7.50', '−0.75', '3.75', '10.50'],
 correctAnswer: 1, 
 explanation: 'Subtract 9: 4<i>n</i> = −3. Divide by 4: <i>n</i> = −0.75.'
 },
 {
 id: '40',
 text: '<br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the line containing the points in the table is plotted on a coordinate system, what does the graph look like?',
 type: 'multiple-choice',
 options: [
    {url: 'images/40a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Each point in the table has <i>y</i> = <i>x</i>, so the line passes through the origin and slopes upward.'
 },
 {
 id: '41',
 text: 'At the Good Earth Orchard, there are <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> as many lemon trees as there are orange trees. There are 132 orange trees at Good Earth Orchard. How many lemon trees are there?',
 type: 'multiple-choice',
 options: ['43', '44', '396', '528'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> × 132 = 44 lemon trees.'
 },
 {
 id: '42',
 text: 'The formula <i>d</i> = 52<i>t</i> + 65<i>t</i> can be used to find the distance, <i>d</i>, between two cars after traveling <i>t</i> hours in opposite directions. After how many hours will the distance between the two cars be 234 miles?',
 type: 'multiple-choice',
 options: ['0.5', '2.0', '3.6', '4.5'],
 correctAnswer: 1, 
 explanation: '234 = 117<i>t</i>, so <i>t</i> = 234 ÷ 117 = 2.0 hours.'
 },
 {
 id: '43',
 text: 'Which graph contains the ordered pairs listed in the table? <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/43a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Plot each ordered pair from the table and find the graph that shows all of them.'
 },
 {
 id: '44',
 text: 'Which number is <i>not</i> an element of the domain of the relation shown? <br>{(−2, 4), (0, 4), (1, 2), (3, 2)}',
 type: 'multiple-choice',
 options: ['−2', '0', '1', '4'],
 correctAnswer: 3, 
 explanation: 'The domain is the set of <i>x</i>-values: {−2, 0, 1, 3}. 4 is not in the domain.'
 },
 {
 id: '45',
 text: 'Which of the following tables of values is true for the equation <i>y</i> = 3(<i>x</i> − 3)?',
 type: 'multiple-choice',
 options: [
    {url: 'images/45a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/45b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/45c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/45d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'When <i>x</i> = −4, <i>y</i> = 3(−7) = −21. When <i>x</i> = 4, <i>y</i> = 3(1) = 3.'
 },
 {
 id: '46',
 text: 'It takes Kim 8 hours to travel a distance of 360 miles. At this rate, how many miles does Kim travel in 12 hours?',
 type: 'multiple-choice',
 options: ['720', '600', '540', '390'],
 correctAnswer: 2, 
 explanation: '360 ÷ 8 = 45 miles per hour, and 45 × 12 = 540 miles.'
 },
 {
 id: '47',
 text: 'Juan earns a flat fee of $150 plus $20 for every hour he works decorating a house. Which graph correctly displays Juan’s earnings?',
 type: 'multiple-choice',
 options: [
    {url: 'images/47a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/47b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/47c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/47d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The graph should start at $150 for 0 hours and increase by $20 for each hour.'
 },
 {
 id: '48',
 text: 'What is the solution to <math><mfrac><mn>n</mn><mn>2</mn></mfrac></math> − 4 > 10?',
 type: 'multiple-choice',
 options: ['<i>n</i> > 7', '<i>n</i> > 12', '<i>n</i> > 24', '<i>n</i> > 28'],
 correctAnswer: 3, 
 explanation: 'Add 4 to both sides: <math><mfrac><mn>n</mn><mn>2</mn></mfrac></math> > 14. Multiply by 2: <i>n</i> > 28.'
 },
 {
 id: '49',
 text: 'A relation is graphed as shown. <br><img src="images/49.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the domain of this relation?',
 type: 'multiple-choice',
 options: ['{1, 3, 4, 6}', '{2, 3, 5, 6}', '{1, 2, 3, 4, 5, 6}', '{0, 1, 2, 3, 4, 5, 6}'],
 correctAnswer: 0, 
 explanation: 'The domain is the set of <i>x</i>-values of the points: {1, 3, 4, 6}.'
 },
 {
 id: '50',
 text: 'Which of these equations represents the table of values? <br><img src="images/50.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<i>y</i> = −<i>x</i>', '<i>y</i> = <i>x</i> + 7', '<i>y</i> = 3<i>x</i> + 3', '<i>y</i> = 2<i>x</i> + 6'],
 correctAnswer: 3, 
 explanation: 'Substitute the values from the table. For <i>x</i> = −2: 2(−2) + 6 = 2, which matches <i>y</i> = 2.'
 }
];

// Scaled Score Mapping for Grade 8 Mathematics (2010)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 11,
  2: 69,
  3: 104,
  4: 130,
  5: 151,
  6: 168,
  7: 184,
  8: 198,
  9: 210,
  10: 222,
  11: 232,
  12: 242,
  13: 252,
  14: 261,
  15: 270,
  16: 279,
  17: 287,
  18: 295,
  19: 303,
  20: 311,
  21: 318,
  22: 326,
  23: 333,
  24: 341,
  25: 348,
  26: 356,
  27: 363,
  28: 371,
  29: 378,
  30: 386,
  31: 394,
  32: 402,
  33: 410,
  34: 418,
  35: 427,
  36: 436,
  37: 445,
  38: 455,
  39: 465,
  40: 476,
  41: 487,
  42: 500,
  43: 514,
  44: 529,
  45: 547,
  46: 567,
  47: 593,
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
        testType: 'Grade 8 Mathematics (2010)'
      };
      
      console.log(`Saving Grade 8 Math result: ${rawScore}/50 → ${scaledScore} (${performanceLevel})`);
      
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
        result.testType = 'Grade 8 Mathematics (2010)';
        updated = true;
        console.log(`Enhanced Grade 8 Math result ${index + 1}: ${result.rawScore}/50 → ${result.scaledScore} (${result.performanceLevel})`);
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
            testType: 'Grade 8 Mathematics (2010)'
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