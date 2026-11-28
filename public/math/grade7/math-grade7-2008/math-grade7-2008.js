window.TEST_IDENTIFIER = 'math_grade7_2008';

const sampleQuestions = [
 {
 id: '1',
 text: 'Ralph’s map of Virginia Beach uses a scale of 1 inch for every 7 miles. Ralph runs a distance of 13.2 miles from his house in Virginia Beach every weekend. Which is closest to the number of inches needed to represent this distance on Ralph’s map?',
 type: 'multiple-choice',
 options: ['7.2 inches', '7.0 inches', '6.2 inches', '1.9 inches'],
 correctAnswer: 3, 
 explanation: '13.2 ÷ 7 ≈ 1.9 inches.'
 },
 {
 id: '2',
 text: 'Max surveyed students on his website and asked each to select 1 favorite after-school activity. The percents of the total number of students who responded for each activity are shown in the table. <br><img src="images/2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If 126 students selected watching movies, how many total students responded to Max’s survey?',
 type: 'multiple-choice',
 options: ['108', '144', '700', '2,268'],
 correctAnswer: 2, 
 explanation: '18% of the total is 126, so the total is 126 ÷ 0.18 = 700 students.'
 },
 {
 id: '3',
 text: 'A jug of drinking water contained 1 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> gallons. After one day, <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math> gallon had been used. How much water was left in the jug?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> gallon', '<math><mfrac><mn>7</mn><mn>8</mn></mfrac></math> gallon', '1 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> gallons', '1 <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> gallons'],
 correctAnswer: 1, 
 explanation: '1 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = <math><mfrac><mn>12</mn><mn>8</mn></mfrac></math>, so <math><mfrac><mn>12</mn><mn>8</mn></mfrac></math> − <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>7</mn><mn>8</mn></mfrac></math> gallon.'
 },
 {
 id: '4',
 text: 'Kevin mixes paint using 8 ounces of yellow paint for every 3 ounces of white paint. At this rate, how many ounces of white paint would be mixed with 24 ounces of yellow paint?',
 type: 'multiple-choice',
 options: ['8', '9', '19', '64'],
 correctAnswer: 1, 
 explanation: '24 is 3 times 8, so use 3 × 3 = 9 ounces of white paint.'
 },
 {
 id: '5',
 text: 'Lynne loaned $480 to a friend. The friend paid back the amount borrowed plus 10% interest. What was the total amount the friend paid to Lynne?',
 type: 'multiple-choice',
 options: ['$480.10', '$484.80', '$490.00', '$528.00'],
 correctAnswer: 3, 
 explanation: '10% of $480 is $48, so the friend paid $480 + $48 = $528.'
 },
 {
 id: '6',
 text: 'Eli can type 1 page in 10 minutes. How many total pages can he type in one hour?',
 type: 'multiple-choice',
 options: ['1', '6', '10', '60'],
 correctAnswer: 1, 
 explanation: '60 minutes ÷ 10 minutes per page = 6 pages.'
 },
 {
 id: '7',
 text: 'The change in the number of students enrolled at a school over six months is shown in the following table. <br><img src="images/7.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The number of students enrolled at the end of September was 4,327. What was the number of students enrolled in the school at the end of March?',
 type: 'multiple-choice',
 options: ['4,275', '4,300', '4,325', '4,352'],
 correctAnswer: 2, 
 explanation: '−15 + 8 + 3 − 12 + 3 + 11 = −2, so 4,327 − 2 = 4,325 students.'
 },
 {
 id: '8',
 text: 'Which set is ordered <i>greatest</i> to <i>least</i>?',
 type: 'multiple-choice',
 options: ['{16%, <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>, 1.6 × 10<sup>6</sup>, 0.166}', '{16%, 0.166, <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>, 1.6 × 10<sup>6</sup>}', '{1.6 × 10<sup>6</sup>, 16%, <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>, 0.166}', '{1.6 × 10<sup>6</sup>, <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>, 0.166, 16%}'],
 correctAnswer: 3, 
 explanation: '1.6 × 10<sup>6</sup> = 1,600,000, <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> ≈ 0.1667, 0.166, and 16% = 0.16.'
 },
 {
 id: '9',
 text: 'Which property is used in the following number sentence? <br>4(3 + <i>n</i>) = (4 · 3) + (4 · <i>n</i>)',
 type: 'multiple-choice',
 options: ['Distributive property', 'Additive inverse property', 'Associative property of addition', 'Commutative property of addition'],
 correctAnswer: 0, 
 explanation: 'Multiplying 4 by each term inside the parentheses is the distributive property.'
 },
 {
 id: '10',
 text: 'Which of the following is another way of expressing 2 out of 8?',
 type: 'multiple-choice',
 options: ['2.5%', '25%', '2.5', '25'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>2</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = 25%.'
 },
 {
 id: '11',
 text: 'Which list is in order from <i>least</i> to <i>greatest</i>?',
 type: 'multiple-choice',
 options: ['0.17, 40%, <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>, <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>, 0.78', '0.17, 40%, <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>, <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>, 0.78', '0.78, <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>, <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>, 40%, 0.17', '0.78, <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>, <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>, 40%, 0.17'],
 correctAnswer: 1, 
 explanation: 'As decimals: 0.17, 0.40, 0.625, 0.667, 0.78.'
 },
 {
 id: '12',
 text: 'The fraction <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> is equivalent to —',
 type: 'multiple-choice',
 options: ['0.012%', '0.125%', '12.5%', '125%'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> = 0.125 = 12.5%.'
 },
 {
 id: '13',
 text: 'Which of the following equations illustrates the multiplicative property of zero?',
 type: 'multiple-choice',
 options: ['10 · 0 = 0', '10 + (−10) = 0', '10(15 · 0) = 10(0 · 15)', '10(8 + 0) = 10 · 8 + 10 · 0'],
 correctAnswer: 0, 
 explanation: 'The multiplicative property of zero says any number times 0 equals 0.'
 },
 {
 id: '14',
 text: 'Which is <i>false</i>?',
 type: 'multiple-choice',
 options: ['35 ÷ (−30 + 37) = (−35 ÷ −30) + (−35 ÷ 37)', '(−891 + 345) − −78 = −891 + (345 − −78)', '−5 · (−35 + 42) = (−5 · −35) + (−5 · 42)', '−62 + 123 = 123 + −62'],
 correctAnswer: 0, 
 explanation: 'Division does not distribute over addition this way: 35 ÷ 7 = 5, but the right side does not equal 5.'
 },
 {
 id: '15',
 text: 'Which ordered pair describes a point with a location in the second quadrant on a coordinate grid?',
 type: 'multiple-choice',
 options: ['(−6, −5)', '(−6, 5)', '(6, −5)', '(6, 5)'],
 correctAnswer: 1, 
 explanation: 'Points in the second quadrant have a negative <i>x</i>-coordinate and a positive <i>y</i>-coordinate.'
 },
 {
 id: '16',
 text: 'Which pair of triangles is most likely similar? <br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['1 and 4', '2 and 5', '3 and 5', '4 and 2'],
 correctAnswer: 1, 
 explanation: 'Similar triangles have the same shape. Triangles 2 and 5 have the same shape but different sizes.'
 },
 {
 id: '17',
 text: 'Travis is making a wall hanging out of different colors of glass. The shape of the wall hanging is shown on the grid below. <br><img src="images/17.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the total amount of glass needed to make the wall hanging?',
 type: 'multiple-choice',
 options: ['28 square units', '34 square units', '36 square units', '40 square units'],
 correctAnswer: 2, 
 explanation: 'Count the whole squares and combine the half squares inside the shape. The area is about 36 square units.'
 },
 {
 id: '18',
 text: 'Translate the figure vertically 6 positive units. <br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which <i>best</i> describes the location of the image of vertex <i>V</i>?',
 type: 'multiple-choice',
 options: ['(5, −8)', '(5, 4)', '(−1, −2)', '(11, −2)'],
 correctAnswer: 1, 
 explanation: 'Vertex V is at (5, −2). Moving up 6 units gives (5, 4).'
 },
 {
 id: '19',
 text: 'Which of the following is a pentagon?',
 type: 'multiple-choice',
 options: [
    {url: 'images/19a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A pentagon has 5 sides.'
 },
 {
 id: '20',
 text: '<br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is most likely the type of transformation that takes place from Figure 1 to Figure 2 on the coordinate grid above?',
 type: 'multiple-choice',
 options: ['Rotation about the origin', 'Dilation', 'Translation', 'Reflection across the <i>y</i>-axis'],
 correctAnswer: 2, 
 explanation: 'Figure 2 is the same size and orientation as Figure 1, moved to the right, so it is a translation.'
 },
 {
 id: '21',
 text: 'The following is true about similar triangles <i>ABC</i> and <i>DEF</i>. <br><math><mfrac><mn>AB</mn><mn>DE</mn></mfrac></math> = <math><mfrac><mn>BC</mn><mn>EF</mn></mfrac></math> = <math><mfrac><mn>AC</mn><mn>DF</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>1</mn></mfrac></math> <br>Which could be the lengths of <span style="text-decoration: overline;"><i>BC</i></span> and <span style="text-decoration: overline;"><i>EF</i></span>?',
 type: 'multiple-choice',
 options: ['<i>BC</i> = 6 and <i>EF</i> = 3', '<i>BC</i> = 9 and <i>EF</i> = 3', '<i>BC</i> = 3 and <i>EF</i> = 6', '<i>BC</i> = 3 and <i>EF</i> = 9'],
 correctAnswer: 0, 
 explanation: 'BC must be twice EF: 6 = 2 × 3.'
 },
 {
 id: '22',
 text: 'Trevor covered a cylindrical can with paper for a project. The can is 18 centimeters tall and has a 5-centimeter radius. Which is closest to the minimum amount of paper Trevor needed to cover the entire can?',
 type: 'multiple-choice',
 options: ['283 cm<sup>2</sup>', '644 cm<sup>2</sup>', '722 cm<sup>2</sup>', '1,413 cm<sup>2</sup>'],
 correctAnswer: 2, 
 explanation: 'S.A. = 2πr<sup>2</sup> + 2πrh ≈ 2(3.14)(25) + 2(3.14)(5)(18) = 157 + 565.2 ≈ 722 cm<sup>2</sup>.'
 },
 {
 id: '23',
 text: 'Which of the following quadrilaterals has exactly one pair of parallel sides?',
 type: 'multiple-choice',
 options: ['Rhombus', 'Trapezoid', 'Rectangle', 'Parallelogram'],
 correctAnswer: 1, 
 explanation: 'A trapezoid has exactly one pair of parallel sides.'
 },
 {
 id: '24',
 text: '<br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What type of polygon is this?',
 type: 'multiple-choice',
 options: ['Pentagon', 'Heptagon', 'Hexagon', 'Decagon'],
 correctAnswer: 2, 
 explanation: 'The polygon has 6 sides, so it is a hexagon.'
 },
 {
 id: '25',
 text: 'A powdered drink mix is stored in a cylindrical container that has a radius of 6 centimeters and a height of 14 centimeters. Which is closest to the <i>maximum</i> number of cubic centimeters the container will hold?',
 type: 'multiple-choice',
 options: ['126 cm<sup>3</sup>', '396 cm<sup>3</sup>', '504 cm<sup>3</sup>', '1,583 cm<sup>3</sup>'],
 correctAnswer: 3, 
 explanation: 'V = πr<sup>2</sup>h ≈ 3.14 × 36 × 14 ≈ 1,583 cm<sup>3</sup>.'
 },
 {
 id: '26',
 text: 'Bob wants to paint a rectangular wall that measures 16 feet by 9 feet. The wall contains a window with the dimensions shown. <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Bob does not paint the window, what is the total shaded area he will paint?',
 type: 'multiple-choice',
 options: ['144 sq ft', '104 sq ft', '50 sq ft', '40 sq ft'],
 correctAnswer: 1, 
 explanation: 'Wall: 16 × 9 = 144 sq ft. Window: 8 × 5 = 40 sq ft. Area to paint: 144 − 40 = 104 sq ft.'
 },
 {
 id: '27',
 text: 'Peter picks one bill at a time from a bag and replaces it. He repeats this process 100 times and records the results in the table. <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the table, which bill has an experimental probability of <math><mfrac><mn>7</mn><mn>25</mn></mfrac></math> for being drawn from the bag next?',
 type: 'multiple-choice',
 options: ['$1', '$5', '$10', '$20'],
 correctAnswer: 0, 
 explanation: '<math><mfrac><mn>7</mn><mn>25</mn></mfrac></math> = <math><mfrac><mn>28</mn><mn>100</mn></mfrac></math>. The $1 bill was drawn 28 times out of 100.'
 },
 {
 id: '28',
 text: 'The 9 students in Mr. Smith’s P. E. class measured their arm spans and heights. The scatterplot shows the results. <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which data table was <i>most</i> likely used to make the scatterplot?',
 type: 'multiple-choice',
 options: [
    {url: 'images/28a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Match each point on the scatterplot to an (arm span, height) pair in the table.'
 },
 {
 id: '29',
 text: 'Look at the table. <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the median number of kites sold per year?',
 type: 'multiple-choice',
 options: ['680', '668', '540', '240'],
 correctAnswer: 0, 
 explanation: 'In order: 540, 650, 680, 690, 780. The median is 680.'
 },
 {
 id: '30',
 text: 'At Van’s Video Store, 30% of the children’s movies are animated. If a customer randomly chooses one children’s movie, what is the probability that the movie he chooses will be animated?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: '30% = <math><mfrac><mn>30</mn><mn>100</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>.'
 },
 {
 id: '31',
 text: 'Tim wants his mean (average) quiz score in history class to be 90. His first 3 quiz scores were 86, 92, and 94. What score should he make on the 4th quiz in order to have a mean (average) quiz score of exactly 90?',
 type: 'multiple-choice',
 options: ['85', '88', '93', '95'],
 correctAnswer: 1, 
 explanation: 'He needs a total of 4 × 90 = 360. 360 − (86 + 92 + 94) = 360 − 272 = 88.'
 },
 {
 id: '32',
 text: 'Three families are playing a board game and need to form teams of 3 players with 1 player from each family. <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many different teams containing 1 member from each family could be formed?',
 type: 'multiple-choice',
 options: ['3', '9', '18', '27'],
 correctAnswer: 3, 
 explanation: 'Each family has 3 members: 3 × 3 × 3 = 27 teams.'
 },
 {
 id: '33',
 text: 'A school club listed the attendance at its weekly meetings as follows. <br>12, 9, 20, 15, 13, 8, 16, 12, 18, 10, 26, 14, 24, 17, 18 <br>Which statement is <i>best</i> supported by the data?',
 type: 'multiple-choice',
 options: ['There is no mode.', 'There is only one mode.', 'There are only two modes.', 'There are three modes.'],
 correctAnswer: 2, 
 explanation: '12 and 18 each appear twice, and every other value appears once, so there are two modes.'
 },
 {
 id: '34',
 text: 'What is the lower quartile in the box-and-whisker plot? <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['10', '35', '60', '65'],
 correctAnswer: 2, 
 explanation: 'The lower quartile is the left edge of the box, at 60.'
 },
 {
 id: '35',
 text: 'The rosebushes in Pattie’s Plant Store have the following colors: <br>• 20% yellow blooms. <br>• 50% red blooms. <br>• 30% pink blooms. <br>If George selected a rosebush at random today, what is the probability that it will produce yellow blooms?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: '20% = <math><mfrac><mn>20</mn><mn>100</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>.'
 },
 {
 id: '36',
 text: 'The Augusta City Chamber of Commerce computed the average dinner price for two at several area restaurants. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the range of the prices displayed in the box-and-whisker plot?',
 type: 'multiple-choice',
 options: ['20', '25', '50', '65'],
 correctAnswer: 2, 
 explanation: 'The range is the upper extreme minus the lower extreme: 65 − 15 = 50.'
 },
 {
 id: '37',
 text: 'Which scatterplot <i>best</i> shows there is no significant relationship between the heights of a group of people and the total amount of money they spend on food each week?',
 type: 'multiple-choice',
 options: [
    {url: 'images/37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'When there is no relationship, the points are scattered with no clear upward or downward trend.'
 },
 {
 id: '38',
 text: 'Jackie is in a fashion show at school. For her first outfit she may choose from 3 different colored shirts, 2 pairs of pants, and 3 pairs of shoes. From how many different possible outfits of 1 shirt, 1 pair of pants, and 1 pair of shoes can Jackie choose?',
 type: 'multiple-choice',
 options: ['3', '8', '11', '18'],
 correctAnswer: 3, 
 explanation: '3 × 2 × 3 = 18 outfits.'
 },
 {
 id: '39',
 text: 'Kirk wrote the number pattern shown below. <br>0, 2, 5, 9, 14, 20 <br>He found that the differences between the numbers increased by 1 as shown below. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the differences continue to increase by 1, what will be the 9th number in Kirk’s original pattern?',
 type: 'multiple-choice',
 options: ['35', '38', '44', '54'],
 correctAnswer: 2, 
 explanation: 'Continue the pattern: 20 + 7 = 27, 27 + 8 = 35, 35 + 9 = 44. The 9th number is 44.'
 },
 {
 id: '40',
 text: 'Which phrase <i>best</i> represents the following? <br><math><mfrac><mn>n</mn><mn>5</mn></mfrac></math> + 7',
 type: 'multiple-choice',
 options: ['Seven added to the quotient of a number and five', 'Seven added to the quotient of five and a number', 'The sum of seven and five divided by a number', 'Five divided by a number added to seven'],
 correctAnswer: 0, 
 explanation: '<math><mfrac><mn>n</mn><mn>5</mn></mfrac></math> is the quotient of a number and five, and 7 is added to it.'
 },
 {
 id: '41',
 text: 'Which represents <i>all</i> the values for <i>u</i> that make the following true? <br><i>u</i> + 5 > 7',
 type: 'multiple-choice',
 options: ['<i>u</i> > 2', '<i>u</i> > 12', '<i>u</i> < 2', '<i>u</i> < 12'],
 correctAnswer: 0, 
 explanation: 'Subtract 5 from both sides: <i>u</i> > 2.'
 },
 {
 id: '42',
 text: 'What value of <i>p</i> makes the following true? <br><i>p</i> − 4.5 = 2.5',
 type: 'multiple-choice',
 options: ['−7.0', '−2.0', '2.0', '7.0'],
 correctAnswer: 3, 
 explanation: 'Add 4.5 to both sides: <i>p</i> = 7.0.'
 },
 {
 id: '43',
 text: 'What is the solution to the number sentence? <br><math><mfrac><mn>c</mn><mn>10</mn></mfrac></math> = 40',
 type: 'multiple-choice',
 options: ['<i>c</i> = 4', '<i>c</i> = 30', '<i>c</i> = 50', '<i>c</i> = 400'],
 correctAnswer: 3, 
 explanation: 'Multiply both sides by 10: <i>c</i> = 400.'
 },
 {
 id: '44',
 text: 'Which could be used to find the number <i>n</i>? <br><i>Four less than a number, n, is equal to fifteen.</i>',
 type: 'multiple-choice',
 options: ['<i>n</i> − 4 = 15', '4 − <i>n</i> = 15', '<i>n</i> − 15 = 4', '15 − <i>n</i> = 4'],
 correctAnswer: 0, 
 explanation: 'Four less than <i>n</i> is <i>n</i> − 4, and it equals 15.'
 },
 {
 id: '45',
 text: 'Ginger spent $24 at the fair, which was three times the amount she spent last year at the fair. How much money did Ginger spend last year at the fair?',
 type: 'multiple-choice',
 options: ['$8', '$21', '$27', '$72'],
 correctAnswer: 0, 
 explanation: '3<i>x</i> = 24, so <i>x</i> = $8.'
 },
 {
 id: '46',
 text: '6<i>z</i> > 36 <br>The above is —',
 type: 'multiple-choice',
 options: ['an expression', 'an equation', 'an inequality', 'a variable'],
 correctAnswer: 2, 
 explanation: 'The sentence uses the symbol >, so it is an inequality.'
 },
 {
 id: '47',
 text: 'A large box contains 11 smaller boxes of raisins. The price of the large box is $2.75. Each of the smaller boxes of raisins costs the same amount. Which could be used to find <i>d</i>, the price of a smaller box?',
 type: 'multiple-choice',
 options: ['11<i>d</i> = 2.75', '<i>d</i> + 11 = 2.75', '<i>d</i> − 11 = 2.75', '<math><mfrac><mn>d</mn><mn>11</mn></mfrac></math> = 2.75'],
 correctAnswer: 0, 
 explanation: '11 boxes at <i>d</i> dollars each cost $2.75, so 11<i>d</i> = 2.75.'
 },
 {
 id: '48',
 text: 'Which table contains <i>only</i> values that satisfy the following? <br><i>y</i> = <i>x</i> + 5',
 type: 'multiple-choice',
 options: [
    {url: 'images/48a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/48b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/48c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/48d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'For each pair, <i>y</i> must be 5 more than <i>x</i>: (−5, 0), (−1, 4), (5, 10).'
 },
 {
 id: '49',
 text: 'The graph displays the relationship between time and profit. <br><img src="images/49.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which equation represents the relationship between time (<i>t</i>) and profit (<i>P</i>)?',
 type: 'multiple-choice',
 options: ['<i>P</i> = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math><i>t</i>', '<i>P</i> = <i>t</i>', '<i>P</i> = 2<i>t</i>', '<i>P</i> = 3<i>t</i>'],
 correctAnswer: 2, 
 explanation: 'The line passes through (1, 2), (2, 4), and (3, 6), so profit is 2 times the time: <i>P</i> = 2<i>t</i>.'
 },
 {
 id: '50',
 text: 'Which is an expression?',
 type: 'multiple-choice',
 options: ['5<i>x</i> + 3', '5<i>x</i> = 3', '5<i>x</i> ≥ 3', '5<i>x</i> < 3'],
 correctAnswer: 0, 
 explanation: 'An expression has no equal sign or inequality symbol.'
 }
];

// Scaled Score Mapping for Grade 7 Mathematics (2008)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 26,
  2: 83,
  3: 117,
  4: 143,
  5: 163,
  6: 180,
  7: 194,
  8: 208,
  9: 219,
  10: 230,
  11: 241,
  12: 250,
  13: 260,
  14: 268,
  15: 277,
  16: 285,
  17: 293,
  18: 300,
  19: 308,
  20: 315,
  21: 323,
  22: 330,
  23: 337,
  24: 344,
  25: 351,
  26: 358,
  27: 365,
  28: 372,
  29: 380,
  30: 387,
  31: 394,
  32: 402,
  33: 410,
  34: 417,
  35: 426,
  36: 434,
  37: 443,
  38: 452,
  39: 462,
  40: 472,
  41: 483,
  42: 495,
  43: 508,
  44: 523,
  45: 540,
  46: 560,
  47: 585,
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
        testType: 'Grade 7 Mathematics (2008)'
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
        result.testType = 'Grade 7 Mathematics (2008)';
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
            testType: 'Grade 7 Mathematics (2008)'
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