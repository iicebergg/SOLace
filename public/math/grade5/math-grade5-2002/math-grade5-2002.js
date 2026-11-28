window.TEST_IDENTIFIER = 'math_grade5_2002';

const sampleQuestions = [
 {
 id: '1',
 text: 'The difference of 21,234 − 19,078 is best described as —',
 type: 'multiple-choice',
 options: ['a little more than 1,000', 'a little more than 1,500', 'a little more than 2,000', 'a little more than 2,500'],
 correctAnswer: 2, 
 explanation: '21,234 − 19,078 = 2,156, which is a little more than 2,000.'
 },
 {
 id: '2',
 text: '1,234 ÷ 56 = ___',
 type: 'multiple-choice',
 options: ['22 R2', '34 R9', '38 R6', '42 R2'],
 correctAnswer: 0, 
 explanation: '56 × 22 = 1,232, and 1,234 − 1,232 = 2, so the answer is 22 R2.'
 },
 {
 id: '3',
 text: 'Lark bought the two shirts shown below. <br><img src="images/3.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the prices shown include tax, what was the total cost of the two shirts?',
 type: 'multiple-choice',
 options: ['$39.26', '$39.36', '$40.26', '$40.36'],
 correctAnswer: 1, 
 explanation: '$23.47 + $15.89 = $39.36.'
 },
 {
 id: '4',
 text: 'Last week Drew worked 7.9 hours. This week he worked 8.6 hours. How many more hours did he work this week than last week?',
 type: 'multiple-choice',
 options: ['1.7', '1.3', '0.7', '0.3'],
 correctAnswer: 2, 
 explanation: '8.6 − 7.9 = 0.7 hour.'
 },
 {
 id: '5',
 text: '82 × 69 = ___',
 type: 'multiple-choice',
 options: ['5,558', '5,658', '6,238', '12,030'],
 correctAnswer: 1, 
 explanation: '82 × 69 = 82 × 70 − 82 = 5,740 − 82 = 5,658.'
 },
 {
 id: '6',
 text: '6 <math><mfrac><mn>11</mn><mn>12</mn></mfrac></math> − <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['6 <math><mfrac><mn>1</mn><mn>12</mn></mfrac></math>', '6 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '5 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '5 <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Rewrite <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> as <math><mfrac><mn>10</mn><mn>12</mn></mfrac></math>. Then 6 <math><mfrac><mn>11</mn><mn>12</mn></mfrac></math> − <math><mfrac><mn>10</mn><mn>12</mn></mfrac></math> = 6 <math><mfrac><mn>1</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '7',
 text: '3.642 ÷ 6 = ___',
 type: 'multiple-choice',
 options: ['0.607', '6.07', '60.7', '607'],
 correctAnswer: 0, 
 explanation: '3.642 ÷ 6 = 0.607. Check: 0.607 × 6 = 3.642.'
 },
 {
 id: '8',
 text: '381 + 245 + 579 = ?',
 type: 'multiple-choice',
 options: ['1,105', '1,195', '1,205', '1,295'],
 correctAnswer: 2, 
 explanation: '381 + 245 = 626, and 626 + 579 = 1,205.'
 },
 {
 id: '9',
 text: 'The Smiths are planning to drive the 1,038 miles from their home to the Grand Canyon. They plan to drive 689 miles the first day. How many miles will they have left to drive to reach the Grand Canyon?',
 type: 'multiple-choice',
 options: ['349', '368', '451', '527'],
 correctAnswer: 0, 
 explanation: '1,038 − 689 = 349 miles.'
 },
 {
 id: '10',
 text: '<br><img src="images/10-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is <br><img src="images/10-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'The first circle shows <math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>, which equals <math><mfrac><mn>4</mn><mn>8</mn></mfrac></math>. The second circle shows <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>. <math><mfrac><mn>4</mn><mn>8</mn></mfrac></math> + <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>7</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '11',
 text: 'The total cost for Patsy to attend 9 days of arts and crafts camp was $306. The cost for each day of camp is the same. <br><img src="images/11.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the cost for each day of arts and crafts camp?',
 type: 'multiple-choice',
 options: ['$27', '$31', '$34', '$42'],
 correctAnswer: 2, 
 explanation: '$306 ÷ 9 = $34 per day.'
 },
 {
 id: '12',
 text: 'The table below shows the number of tickets sold to different events at the county fair. <br><img src="images/12.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the total number of tickets sold for these four events?',
 type: 'multiple-choice',
 options: ['7,634', '7,624', '6,634', '6,524'],
 correctAnswer: 0, 
 explanation: '2,260 + 3,031 + 928 + 1,415 = 7,634 tickets.'
 },
 {
 id: '13',
 text: 'For her report on dinosaurs, Rita rounded the weight of one kind of dinosaur to the nearest thousand. If the weight to the nearest thousand pounds was 8,000 pounds, which of the following could have been the weight before rounding?',
 type: 'multiple-choice',
 options: ['7,489 pounds', '8,293 pounds', '8,609 pounds', '9,512 pounds'],
 correctAnswer: 1, 
 explanation: '8,293 has a hundreds digit of 2, which is less than 5, so it rounds down to 8,000. The other choices round to 7,000, 9,000, and 10,000.'
 },
 {
 id: '14',
 text: 'Which is read "fifty-five and twenty-one thousandths"?',
 type: 'multiple-choice',
 options: ['5,521,000', '55,210', '55.21', '55.021'],
 correctAnswer: 3, 
 explanation: 'Fifty-five is the whole number part. Twenty-one thousandths is 0.021. So the number is 55.021.'
 },
 {
 id: '15',
 text: 'Which digit goes in the space to make the statement below true? <br>4,837,206 > 4,8___5,379',
 type: 'multiple-choice',
 options: ['2', '4', '6', '9'],
 correctAnswer: 0, 
 explanation: 'Compare the ten thousands digits: 3 must be greater than the missing digit. Of the choices, only 2 is less than 3.'
 },
 {
 id: '16',
 text: 'Which of the following has a value greater than <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>5</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>11</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>10</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>10</mn><mn>12</mn></mfrac></math>. <math><mfrac><mn>11</mn><mn>12</mn></mfrac></math> is greater than <math><mfrac><mn>10</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '17',
 text: 'What digit goes in the space to make the number sentence below true? <br>1.6238 < 1.___017',
 type: 'multiple-choice',
 options: ['4', '5', '6', '7'],
 correctAnswer: 3, 
 explanation: 'The tenths digit must be greater than 6 for the number to be greater than 1.6238. Of the choices, only 7 works.'
 },
 {
 id: '18',
 text: 'The figure below is shaded to represent a decimal. <br><img src="images/18-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many of the hearts below must be shaded to represent the fraction with the same value as the decimal represented above? <br><img src="images/18-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['1', '2', '3', '4'],
 correctAnswer: 1, 
 explanation: 'The figure has 5 of 10 parts shaded, which is 0.5 or <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>. Half of 4 hearts is 2 hearts.'
 },
 {
 id: '19',
 text: 'The picture below shows a copy of four different magazines. The number under each magazine is the total number of copies that magazine sold last year. <br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which magazine sold a number of copies that has a 4 in the ten-thousands place?',
 type: 'multiple-choice',
 options: ['All Sports', 'Teenage', 'Music Time', 'Young People'],
 correctAnswer: 0, 
 explanation: 'In 3,243,810, the 4 is in the ten-thousands place.'
 },
 {
 id: '20',
 text: 'A fraction of the group of bottles below is shaded. <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following groups is shaded to show a fraction with the same value?',
 type: 'multiple-choice',
 options: [
    {url: 'images/20a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: '2 of 5 bottles are shaded, which is <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>. Choice J has 4 of 10 bottles shaded, and <math><mfrac><mn>4</mn><mn>10</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>.'
 },
 {
 id: '21',
 text: 'Caroline put 1 inch of water in the bottom of a pot. Which is <i>closest to</i> 1 inch? <br><img src="images/21.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['2.5 centimeters', '25 centimeters', '2.5 meters', '25 meters'],
 correctAnswer: 0, 
 explanation: '1 inch is about 2.5 centimeters.'
 },
 {
 id: '22',
 text: 'Which of the following has at least two sides that appear to be parallel?',
 type: 'multiple-choice',
 options: [
    {url: 'images/23a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'A regular hexagon has three pairs of opposite sides that are parallel.'
 },
 {
 id: '23',
 text: 'Lynn drew a fish using two right triangles for its tail. Which could be the fish Lynn drew?',
 type: 'multiple-choice',
 options: [
    {url: 'images/24a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The tail in choice G is made of two triangles that each have a square corner (right angle).'
 },
 {
 id: '24',
 text: 'Which of the following describes a figure that has an area of 28 square centimeters?',
 type: 'multiple-choice',
 options: ['A rectangle with length of 9 centimeters and width of 5 centimeters', 'A rectangle with length of 7 centimeters and width of 4 centimeters', 'A square with length of 7 centimeters and width of 7 centimeters', 'A triangle that has 2 sides 10 centimeters long and 1 side 8 centimeters long.'],
 correctAnswer: 1, 
 explanation: 'The area of a rectangle is length × width: 7 × 4 = 28 square centimeters.'
 },
 {
 id: '25',
 text: '<br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What are the coordinates of Point <i>A</i>?',
 type: 'multiple-choice',
 options: ['(7, 7)', '(6, 6)', '(6, 5)', '(5, 6)'],
 correctAnswer: 1, 
 explanation: 'Point A is 6 units to the right of the origin and 6 units up, so its coordinates are (6, 6).'
 },
 {
 id: '26',
 text: 'Which unit would <i>most often</i> be used to determine the mass of one dogwood flower? <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Gram', 'Kilogram', 'Meter', 'Liter'],
 correctAnswer: 0, 
 explanation: 'A flower has a very small mass, so grams are the best unit. Meters measure length and liters measure capacity.'
 },
 {
 id: '27',
 text: 'Which best describes this figure? <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Angle JK', 'Line segment JK', 'Ray JK', 'Line JK'],
 correctAnswer: 1, 
 explanation: 'The figure has two endpoints, J and K, so it is a line segment.'
 },
 {
 id: '28',
 text: 'On Tuesday, Janine read in the newspaper that sunrise would be at 6:43 A.M. and sunset would be at 9:37 P.M. What length of time is the sun expected to be out? <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['4 hr 6 min.', '14 hr 54 min.', '15 hr 54 min.', '15 hr 6 min.'],
 correctAnswer: 1, 
 explanation: 'From 6:43 A.M. to 9:43 P.M. is 15 hours. 9:37 P.M. is 6 minutes earlier, so the sun is out 14 hours 54 minutes.'
 },
 {
 id: '29',
 text: 'Use your ruler as a straightedge to help you answer this question. On the grid below, connect point P to point Y, then connect point Y to point W. What kind of angle has been formed? <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Obtuse', 'Acute', 'Right', 'Straight'],
 correctAnswer: 0, 
 explanation: 'Angle PYW opens wider than a square corner but less than a straight line, so it is obtuse.'
 },
 {
 id: '30',
 text: 'Which is a true statement?',
 type: 'multiple-choice',
 options: ['The length of the radius of a circle is one-fourth the length of the diameter.', 'The length of the radius of a circle is the same as the length of the diameter.', 'The length of the radius of a circle is one-half the length of the diameter.', 'The length of the radius of a circle is two times the length of the diameter.'],
 correctAnswer: 2, 
 explanation: 'The diameter goes all the way across a circle through the center, and the radius goes from the center to the edge, so the radius is half the diameter.'
 },
 {
 id: '31',
 text: 'A recipe calls for 25 grams of sugar. This amount is closest to —',
 type: 'multiple-choice',
 options: ['1 pound', '1 ounce', '10 pounds', '10 ounces'],
 correctAnswer: 1, 
 explanation: '1 ounce is about 28 grams, so 25 grams is closest to 1 ounce.'
 },
 {
 id: '32',
 text: 'Mitch bought a box of candles. <br><img src="images/33-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>These are the candles that are in the box. <br><img src="images/33-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Mitch takes out 1 candle without looking, what is the probability that it will be striped?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>10</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'There are 10 candles and 2 of them are striped, so the probability is <math><mfrac><mn>2</mn><mn>10</mn></mfrac></math>.'
 },
 {
 id: '33',
 text: 'Each person attending a meeting will receive a notepad and a ruler. The table below shows the different colors of the notepads and the rulers. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following tree diagrams shows all the different combinations of 1 color of notepad and 1 color of ruler?',
 type: 'multiple-choice',
 options: [
    {url: 'images/34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Each of the 2 notepad colors can go with each of the 3 ruler colors. Tree diagram J shows all 2 × 3 = 6 combinations.'
 },
 {
 id: '34',
 text: 'For a class project, Anita compared the price of a medium-sized box of Superflakes cereal at five different stores. All the prices were recorded on the same day. The graph below shows the prices she recorded. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>closest</i> to the price of the box of cereal at Store #2?',
 type: 'multiple-choice',
 options: ['$1.65', '$1.51', '$1.13', '$1.02'],
 correctAnswer: 0, 
 explanation: 'The bar for Store #2 ends a little above $1.50, at about $1.65.'
 },
 {
 id: '35',
 text: 'Megan ordered T-shirts for all the people who registered for next week\'s charity walk. The table below shows the number of each size T-shirt she ordered. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the mean (average) number of shirts ordered per size?',
 type: 'multiple-choice',
 options: ['15', '19', '20', '26'],
 correctAnswer: 2, 
 explanation: '18 + 26 + 26 + 19 + 11 = 100 shirts. 100 ÷ 5 sizes = 20.'
 },
 {
 id: '36',
 text: 'Carla\'s softball team is selling candy to earn money for uniforms. The list shows the number of boxes of candy each member of the team sold. <br>22 &nbsp; 10 &nbsp; 31 &nbsp; 19 <br>38 &nbsp; 27 &nbsp; 44 &nbsp; 12 <br>14 &nbsp; 42 &nbsp; 35 &nbsp; 27 <br>Which of the following stem-and-leaf plots shows this same information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'In order, the numbers are 10, 12, 14, 19, 22, 27, 27, 31, 35, 38, 42, 44. Plot C shows the 10s as 0, 2, 4, 9; the 20s as 2, 7, 7; the 30s as 1, 5, 8; and the 40s as 2, 4.'
 },
 {
 id: '37',
 text: 'These are the flags that will be carried in front of the marching band. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following questions about these flags could you use probability to solve?',
 type: 'multiple-choice',
 options: ['How many more flags have trumpets on them than drums?', 'If Lionel picks a flag without looking, what kind of flag is he least likely to pick?', 'What kind of instrument is on exactly one-half of the flags?', 'If 5 people get to pick a flag before Amanda, how many will she have to choose from?'],
 correctAnswer: 1, 
 explanation: 'Probability describes how likely something is to happen. Picking a flag without looking is a chance event.'
 },
 {
 id: '38',
 text: 'Shelby asked some friends to name their favorite kind of pizza. She made this tally chart to show their answers. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which bar graph displays this information correctly?',
 type: 'multiple-choice',
 options: [
    {url: 'images/39a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The tally chart shows Cheese 3, Mushroom 8, Pepperoni 13, and Sausage 7. Graph B shows these values on an evenly spaced scale with labels.'
 },
 {
 id: '39',
 text: 'The graph below shows how the number of books of flower stamps in a vending machine changed over a period of hours. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>closest</i> to the number of books of stamps in the machine at 11 A.M.?',
 type: 'multiple-choice',
 options: ['41', '46', '52', '59'],
 correctAnswer: 2, 
 explanation: 'At 11 A.M., the point is a little above 50, at about 52.'
 },
 {
 id: '40',
 text: 'Which <i>best describes</i> the location of point R on the number line shown below? <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['49', '50', '54', '58'],
 correctAnswer: 2, 
 explanation: 'Each tick mark is 2 units (40 to 44 is two spaces). Counting from 40, point R is 7 spaces to the right: 40 + 14 = 54.'
 },
 {
 id: '41',
 text: 'The table shows the cost of tickets to a museum. The cost per ticket does not change. <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the pattern in the table, what will be the total cost of 3 tickets?',
 type: 'multiple-choice',
 options: ['$7.25', '$7.75', '$8.25', '$8.50'],
 correctAnswer: 2, 
 explanation: 'Each ticket costs $2.75, so 3 tickets cost 3 × $2.75 = $8.25.'
 },
 {
 id: '42',
 text: 'Look at the pattern below. <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If this pattern continues, what will be the next figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/43a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'In each figure, the shaded pair of triangles moves one position clockwise around the hexagon. The next figure has the shaded pair at the bottom, as in choice B.'
 },
 {
 id: '43',
 text: 'Jasper took all the books out of a box and arranged them on two shelves. He put the same number of books on each shelf. If <i>B</i> represents the number of books that were in the box, which of the following could be used to find the number of books Jasper put on each shelf?',
 type: 'multiple-choice',
 options: ['<i>B</i> + 2 = ?', '<i>B</i> × 2 = ?', '<i>B</i> − 2 = ?', '<i>B</i> ÷ 2 = ?'],
 correctAnswer: 3, 
 explanation: 'The books were split equally between 2 shelves, so divide: B ÷ 2.'
 },
 {
 id: '44',
 text: 'Andi is using white and gray tiles to make the pattern shown below. <br><img src="images/45.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If she continues the pattern in the same way, how many tiles will be in the next column of <i>gray</i> tiles?',
 type: 'multiple-choice',
 options: ['7', '8', '10', '12'],
 correctAnswer: 1, 
 explanation: 'The gray columns have 2, 4, and 6 tiles, increasing by 2 each time. The next gray column will have 8 tiles.'
 },
 {
 id: '45',
 text: '1, 10, 100, 1,000, ___ <br>If this pattern of numbers continues, what should be the next number in the pattern?',
 type: 'multiple-choice',
 options: ['10,000', '1,110', '1,100', '1,001'],
 correctAnswer: 0, 
 explanation: 'Each number is 10 times the one before: 1,000 × 10 = 10,000.'
 },
 {
 id: '46',
 text: 'Look at the pattern of shapes shown below. <br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues, what will the next 2 shapes look like?',
 type: 'multiple-choice',
 options: [
    {url: 'images/47a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/47b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/47c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/47d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The dot moves around the triangle from the bottom left corner to the top corner to the bottom right corner, then repeats. The next two shapes show the dot at the top and then the bottom right, as in choice D.'
 },
 {
 id: '47',
 text: 'The table shows the cost of milkshakes at an ice cream store. <br><img src="images/48.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern in the table continues, what will be the total cost for 6 milkshakes?',
 type: 'multiple-choice',
 options: ['$15.00', '$14.50', '$13.50', '$13.00'],
 correctAnswer: 0, 
 explanation: 'Each milkshake costs $2.50, so 6 milkshakes cost 6 × $2.50 = $15.00.'
 },
 {
 id: '48',
 text: 'Which of the following can be solved using the open sentence <i>B</i> − 5 = ?',
 type: 'multiple-choice',
 options: ['Dana bought just enough buttons to put five on each shirt she made. If <i>B</i> is the number of kinds of buttons she bought, how many shirts did Dana make?', 'Lana bought five of each kind of bagel a bakery had in stock. If <i>B</i> is the number of kinds of bagels the bakery had, how many bagels did Lana buy?', 'Carter sold five fewer boxes of cookies than Brad. If <i>B</i> is the number of boxes Brad sold, how many boxes of cookies did Carter sell?', 'Harry found five new bugs for his collection today. If <i>B</i> is the number of bugs he had yesterday, how many does he have now?'],
 correctAnswer: 2, 
 explanation: '"Five fewer than Brad" means subtract 5 from Brad\'s number, B − 5.'
 },
 {
 id: '49',
 text: 'Which describes a rule that the number machine could be using? <br><img src="images/50.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Multiply by 4; add 1', 'Divide by 4; add 1', 'Subtract 7', 'Add 7'],
 correctAnswer: 3, 
 explanation: '2 + 7 = 9, 9 + 7 = 16, and 16 + 7 = 23, so the rule is add 7.'
 }
];

// Scaled Score Mapping for Grade 5 Mathematics (2002)
// No raw-to-scaled score table was released with this test, so the Grade 5 Mathematics (2007)
// table is used as an approximation. It maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 10,
  2: 67,
  3: 101,
  4: 126,
  5: 146,
  6: 163,
  7: 178,
  8: 191,
  9: 203,
  10: 214,
  11: 224,
  12: 234,
  13: 243,
  14: 252,
  15: 260,
  16: 268,
  17: 276,
  18: 284,
  19: 292,
  20: 299,
  21: 306,
  22: 314,
  23: 321,
  24: 328,
  25: 335,
  26: 342,
  27: 350,
  28: 357,
  29: 364,
  30: 371,
  31: 379,
  32: 387,
  33: 394,
  34: 402,
  35: 411,
  36: 419,
  37: 428,
  38: 437,
  39: 447,
  40: 458,
  41: 469,
  42: 481,
  43: 494,
  44: 509,
  45: 526,
  46: 546,
  47: 572,
  48: 600,
  49: 600,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 22 of the released test required measuring with a physical ruler and was removed.
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

// Independent Results Manager for Grade 5 Math
(function() {
  'use strict';
  
  console.log(`Grade 5 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 5 Math`);
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
        testType: 'Grade 5 Mathematics (2002)'
      };
      
      console.log(`Saving Grade 5 Math result: ${rawScore}/${sampleQuestions.length} → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 5 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 5 Mathematics (2002)';
        updated = true;
        console.log(`Enhanced Grade 5 Math result ${index + 1}: ${result.rawScore}/${sampleQuestions.length} → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 5 Math results saved');
      
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
            testType: 'Grade 5 Mathematics (2002)'
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
    console.log('Initializing Grade 5 Math independent results system');
    
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
    
    console.log('Grade 5 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();