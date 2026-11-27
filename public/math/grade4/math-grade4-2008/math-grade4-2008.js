window.TEST_IDENTIFIER = 'math_grade4_2008';

const sampleQuestions = [
 {
 id: '1',
 text: '843,432 − 17,814 = ___',
 type: 'multiple-choice',
 options: ['825,422', '825,618', '834,418', '834,422'],
 correctAnswer: 1, 
 explanation: '843,432 − 17,814 = 825,618.'
 },
 {
 id: '2',
 text: 'Which product is between 550 and 600?',
 type: 'multiple-choice',
 options: ['48 × 12', '56 × 12', '45 × 12', '52 × 12'],
 correctAnswer: 0, 
 explanation: '48 × 12 = 576, which is between 550 and 600.'
 },
 {
 id: '3',
 text: '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>, so <math><mfrac><mn>2</mn><mn>8</mn></mfrac></math> + <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '4',
 text: 'Sam spent $3.29 for an ice cream sundae and $0.98 for a drink. What is the total amount Sam spent for the ice cream sundae and drink?',
 type: 'multiple-choice',
 options: ['$3.27', '$4.17', '$4.27', '$4.37'],
 correctAnswer: 2, 
 explanation: '$3.29 + $0.98 = $4.27.'
 },
 {
 id: '5',
 text: 'The model below is shaded to represent the number 1. <br><img src="images/5-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Each of the following models is shaded to represent a decimal number. <br><img src="images/5-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the two decimals are subtracted, what is the difference?',
 type: 'multiple-choice',
 options: ['0.057', '0.57', '5.7', '57.0'],
 correctAnswer: 1, 
 explanation: 'Model 1 shows 0.75 and Model 2 shows 0.18. 0.75 − 0.18 = 0.57.'
 },
 {
 id: '6',
 text: '34.6 − 2.82 = ___',
 type: 'multiple-choice',
 options: ['16.4', '31.78', '33.22', '33.78'],
 correctAnswer: 1, 
 explanation: 'Write 34.6 as 34.60, then subtract: 34.60 − 2.82 = 31.78.'
 },
 {
 id: '7',
 text: '741 ÷ 3 = ___',
 type: 'multiple-choice',
 options: ['210 R1', '240 R1', '247', '248'],
 correctAnswer: 2, 
 explanation: '3 × 247 = 741, so 741 ÷ 3 = 247.'
 },
 {
 id: '8',
 text: 'Which <i>best</i> describes the difference 3,021 − 987?',
 type: 'multiple-choice',
 options: ['Closer to 1,000 than 2,000', 'Closer to 2,000 than 3,000', 'Closer to 4,000 than 3,000', 'Closer to 5,000 than 4,000'],
 correctAnswer: 1, 
 explanation: '3,021 − 987 = 2,034, which is closer to 2,000 than to 3,000.'
 },
 {
 id: '9',
 text: '520 ÷ 5 = ___',
 type: 'multiple-choice',
 options: ['14', '104', '114', '140'],
 correctAnswer: 1, 
 explanation: '5 × 104 = 520, so 520 ÷ 5 = 104.'
 },
 {
 id: '10',
 text: '65 × 28 = ___',
 type: 'multiple-choice',
 options: ['650', '660', '1,810', '1,820'],
 correctAnswer: 3, 
 explanation: '65 × 28 = (65 × 20) + (65 × 8) = 1,300 + 520 = 1,820.'
 },
 {
 id: '11',
 text: '348 ÷ 3 = ___',
 type: 'multiple-choice',
 options: ['112', '115 R1', '116', '129 R2'],
 correctAnswer: 2, 
 explanation: '3 × 116 = 348, so 348 ÷ 3 = 116.'
 },
 {
 id: '12',
 text: 'Which 2 factors have a product of 925?',
 type: 'multiple-choice',
 options: ['23 × 45', '30 × 35', '25 × 37', '25 × 35'],
 correctAnswer: 2, 
 explanation: '25 × 37 = 925.'
 },
 {
 id: '13',
 text: 'What is 24,539 rounded to the nearest thousand?',
 type: 'multiple-choice',
 options: ['25,000', '24,500', '24,000', '20,000'],
 correctAnswer: 0, 
 explanation: 'The hundreds digit is 5, so round up: 24,539 rounds to 25,000.'
 },
 {
 id: '14',
 text: 'During a race, runners complete twenty-six and two-tenths miles. Which of the following shows this number written in standard form?',
 type: 'multiple-choice',
 options: ['206.2', '26.2', '26.02', '20.62'],
 correctAnswer: 1, 
 explanation: 'Twenty-six and two-tenths is 26.2.'
 },
 {
 id: '15',
 text: 'Which of the following shows a fraction model and a decimal model that both represent the same value?',
 type: 'multiple-choice',
 options: [
    {url: 'images/15a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Compare the fraction of the circle that is shaded with the decimal shaded on the grid. In the correct choice, both models show the same value.'
 },
 {
 id: '16',
 text: 'Which model is shaded to represent a fraction with value <i>greater than</i> <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: [
    {url: 'images/16a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Compare each shaded fraction to <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>. The model with 9 of 12 parts shaded shows <math><mfrac><mn>9</mn><mn>12</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>, which is greater than <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>.'
 },
 {
 id: '17',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['245,963 < 254,936', '245,963 > 254,963', '245,963 < 235,963', '245,963 > 263,945'],
 correctAnswer: 0, 
 explanation: 'Both numbers have 2 hundred thousands. 4 ten thousands is less than 5 ten thousands, so 245,963 < 254,936.'
 },
 {
 id: '18',
 text: 'Point <i>P</i> is located at 1 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> on the number line below. <br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is another name for the location of point <i>P</i>?',
 type: 'multiple-choice',
 options: ['1 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '1 <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>', '1 <math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>', '1 <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>2</mn><mn>4</mn></mfrac></math> is equivalent to <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, so 1 <math><mfrac><mn>2</mn><mn>4</mn></mfrac></math> = 1 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '19',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['0.234 > 0.233', '0.234 > 0.235', '0.234 > 0.241', '0.234 > 0.242'],
 correctAnswer: 0, 
 explanation: '4 thousandths is greater than 3 thousandths, so 0.234 > 0.233.'
 },
 {
 id: '20',
 text: 'The shaded sections of these models represent two decimal numbers. <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which statement is true?',
 type: 'multiple-choice',
 options: ['0.40 > 0.4', '0.40 = 4.0', '0.60 > 0.6', '0.60 = 0.6'],
 correctAnswer: 3, 
 explanation: 'Both models have the same amount shaded: 60 hundredths equals 6 tenths, so 0.60 = 0.6.'
 },
 {
 id: '21',
 text: 'Which of the following shows <i>only</i> line segment <i>AB</i>?',
 type: 'multiple-choice',
 options: [
    {url: 'images/21a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'A line segment has two endpoints and does not continue past them.'
 },
 {
 id: '22',
 text: 'Mr. Guzman is making a bookcase. Each shelf will be 1 yard long. A length of 1 yard is about the same as —',
 type: 'multiple-choice',
 options: ['10 millimeters', '10 centimeters', '1 kilometer', '1 meter'],
 correctAnswer: 3, 
 explanation: 'A yard (36 inches) is a little shorter than a meter (about 39 inches).'
 },
 {
 id: '23',
 text: 'Which shows only a translation (slide) of the figure across the dashed line?',
 type: 'multiple-choice',
 options: [
    {url: 'images/24a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'A translation slides a figure without flipping or turning it, so the figure keeps the same orientation.'
 },
 {
 id: '24',
 text: 'Joe ran a 100-meter race. How many centimeters are equal to 100 meters?',
 type: 'multiple-choice',
 options: ['10', '100', '1,000', '10,000'],
 correctAnswer: 3, 
 explanation: 'There are 100 centimeters in 1 meter: 100 × 100 = 10,000 centimeters.'
 },
 {
 id: '25',
 text: 'What do a ray and a line segment have in common?',
 type: 'multiple-choice',
 options: ['Both have two endpoints.', 'Both are part of a line.', 'Both go on and on infinitely.', 'Both include only 10 points.'],
 correctAnswer: 1, 
 explanation: 'Rays and line segments are both parts of a line.'
 },
 {
 id: '26',
 text: 'Troy dropped some craft sticks on the floor as shown in the picture. <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which two craft sticks are <i>best</i> described as intersecting but <i>not</i> perpendicular?',
 type: 'multiple-choice',
 options: ['2 and 3', '2 and 1', '4 and 3', '4 and 1'],
 correctAnswer: 0, 
 explanation: 'Sticks 2 and 3 cross each other, but they do not form right angles.'
 },
 {
 id: '27',
 text: 'Aaron drew these clouds. <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which cloud does <i>not</i> appear to be congruent to the other three?',
 type: 'multiple-choice',
 options: ['Cloud 1', 'Cloud 2', 'Cloud 3', 'Cloud 4'],
 correctAnswer: 0, 
 explanation: 'Clouds 2, 3, and 4 are the same shape and size, turned in different ways. Cloud 1 is a different shape.'
 },
 {
 id: '28',
 text: 'Mr. Zander bought 1 pint of chocolate milk. Which of the following is equivalent to 1 pint?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> cup', '1 quart', '2 cups', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> gallon'],
 correctAnswer: 2, 
 explanation: 'There are 2 cups in 1 pint.'
 },
 {
 id: '29',
 text: 'Marcy’s scrapbook is 12 inches wide. Which of the following is equivalent to 12 inches?',
 type: 'multiple-choice',
 options: ['1 yard', '1 foot', '1 centimeter', '1 meter'],
 correctAnswer: 1, 
 explanation: 'There are 12 inches in 1 foot.'
 },
 {
 id: '30',
 text: 'Fran bought an 8-ounce bag of candy. Which measurement is equivalent to 8 ounces?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> pound', '1 pound', '2 pounds', '2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> pounds'],
 correctAnswer: 0, 
 explanation: 'There are 16 ounces in 1 pound, so 8 ounces is <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> pound.'
 },
 {
 id: '31',
 text: 'Which ordered pair <i>best</i> represents point <i>L</i>? <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['(3, 7)', '(7, 3)', '(8, 9)', '(9, 8)'],
 correctAnswer: 3, 
 explanation: 'Point L is 9 units to the right and 8 units up, so it is at (9, 8).'
 },
 {
 id: '32',
 text: 'The picture shows all the candy that will be placed in a machine. Each time the handle on the machine is pulled, 1 candy comes out. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Alexa will pull the handle on the machine. Which color of candy is <i>least likely</i> to come out?',
 type: 'multiple-choice',
 options: ['Green', 'Yellow', 'Pink', 'Blue'],
 correctAnswer: 0, 
 explanation: 'There is only 1 green candy, fewer than any other color, so green is least likely.'
 },
 {
 id: '33',
 text: 'Mrs. Simmons drove 400 miles to visit a friend. The line graph below shows how the distance she traveled increased over time. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is <i>closest</i> to the total distance Mrs. Simmons drove in the first 2 hours?',
 type: 'multiple-choice',
 options: ['110 miles', '125 miles', '140 miles', '160 miles'],
 correctAnswer: 3, 
 explanation: 'At 2 hours, the graph is at about 160 miles.'
 },
 {
 id: '34',
 text: 'A group of students was asked to name the one band instrument they would most like to play. The graph below shows the results. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the data in the graph, which of the following is <i>closest</i> to the total number of students in the group?',
 type: 'multiple-choice',
 options: ['75', '67', '62', '59'],
 correctAnswer: 0, 
 explanation: 'Add the bars: about 15 + 24 + 11 + 22 = 72, which is closest to 75.'
 },
 {
 id: '35',
 text: 'A box contains 11 number tiles that are the same shape and size as shown. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Jason picks one tile from the box without looking, what is the probability that the number on the tile will end with 0 or 5?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>7</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '10, 25, 15, and 40 end with 0 or 5. That is 4 of the 11 tiles, so the probability is <math><mfrac><mn>4</mn><mn>11</mn></mfrac></math>.'
 },
 {
 id: '36',
 text: 'The table shows the number of coupons a store mailed and the value of each. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Mr. James will receive one of the coupons. Which <i>best</i> describes the chance that it will be a $100 coupon?',
 type: 'multiple-choice',
 options: ['Certain', 'Likely, but not certain', 'Unlikely, but not impossible', 'Impossible'],
 correctAnswer: 2, 
 explanation: 'Only 10 of the 5,000 coupons are $100 coupons, so it is unlikely, but not impossible.'
 },
 {
 id: '37',
 text: 'The line graph shows the number of cars in a parking lot over a three-hour period. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>According to data from the graph, which is <i>closest</i> to the number of cars that were in the parking lot at 1 p.m.?',
 type: 'multiple-choice',
 options: ['202', '230', '275', '360'],
 correctAnswer: 1, 
 explanation: 'At 1:00 p.m., the point is a little above 200, at about 230 cars.'
 },
 {
 id: '38',
 text: 'Keisha will pick one tile from a box without looking. From which of the following boxes is she <i>certain</i> to pick a tile with a “J” on it?',
 type: 'multiple-choice',
 options: [
    {url: 'images/39a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'An event is certain when every possible outcome is that event. The box with only J tiles is the answer.'
 },
 {
 id: '39',
 text: 'The table below shows the cubes Alex found in a box in the math closet. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the probability the first cube Alex takes from the box without looking will be a blue cube?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'There are 5 + 7 = 12 cubes, and 7 are blue. The probability is <math><mfrac><mn>7</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '40',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['9 − 18 = 18 − 9', '9 ÷ 18 = 18 ÷ 9', '9 + 18 = 18 + 9', '18 + 9 = 18 × 9'],
 correctAnswer: 2, 
 explanation: 'The order of addends does not change the sum: 9 + 18 = 18 + 9.'
 },
 {
 id: '41',
 text: 'For science class, Mr. Jennings is ordering kits that contain caterpillars that will change into butterflies. The table below shows the total number of kits he must order to get different numbers of caterpillars. <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the data in the table, what will be the total number of caterpillars in 8 kits?',
 type: 'multiple-choice',
 options: ['38', '40', '42', '48'],
 correctAnswer: 3, 
 explanation: 'Each kit has 6 caterpillars, so 8 kits have 8 × 6 = 48 caterpillars.'
 },
 {
 id: '42',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['6 × 8 = 8 + 6', '6 × 8 = 4 × 12', '6 × 8 = 48 + 6', '6 × 8 = 14 × 8'],
 correctAnswer: 1, 
 explanation: '6 × 8 = 48 and 4 × 12 = 48, so both sides are equal.'
 },
 {
 id: '43',
 text: 'Erik is using the rule “add 3” to mark points in a pattern on the following number line. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Using the same rule, what will be the next number Erik marks with a point?',
 type: 'multiple-choice',
 options: ['21', '22', '23', '24'],
 correctAnswer: 1, 
 explanation: 'The last point is at 19, and 19 + 3 = 22.'
 },
 {
 id: '44',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['6 × 3 = 2 × 9', '6 × 3 = 9 × 1', '6 × 3 = 3 × 2 × 2', '6 × 3 = 6 × 2 × 1'],
 correctAnswer: 0, 
 explanation: '6 × 3 = 18 and 2 × 9 = 18, so both sides are equal.'
 },
 {
 id: '45',
 text: 'A number machine uses a rule to change numbers into different numbers. The following picture shows what happens when three different numbers go into and come out of the same number machine. <br><img src="images/46.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which appears to be the rule used by this number machine?',
 type: 'multiple-choice',
 options: ['Multiply by 5', 'Subtract 3', 'Add 5', 'Add 16'],
 correctAnswer: 3, 
 explanation: '4 + 16 = 20, 9 + 16 = 25, and 6 + 16 = 22. The rule is add 16.'
 },
 {
 id: '46',
 text: 'The first six numbers in the pattern below were made using a subtraction rule. <br>85, 78, 71, 64, 57, 50, . . . <br>If the pattern continues the same way, what will be the next two numbers in the pattern?',
 type: 'multiple-choice',
 options: ['41, 34', '42, 35', '43, 36', '44, 37'],
 correctAnswer: 2, 
 explanation: 'The rule is subtract 7: 50 − 7 = 43 and 43 − 7 = 36.'
 },
 {
 id: '47',
 text: 'Which of the following will be a true statement if an equal sign (=) is placed in the box?',
 type: 'multiple-choice',
 options: ['7 + 2 ☐ 7 + 7', '7 + 14 ☐ 14 − 7', '7 + 7 ☐ 14 × 2', '7 + 7 ☐ 2 × 7'],
 correctAnswer: 3, 
 explanation: '7 + 7 = 14 and 2 × 7 = 14, so 7 + 7 = 2 × 7 is true.'
 },
 {
 id: '48',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['4 × 9 = 9 + 4', '4 × 9 = 9 × 4', '4 × 9 = 9 − 4', '4 × 9 = 9 ÷ 4'],
 correctAnswer: 1, 
 explanation: 'The order of factors does not change the product: 4 × 9 = 9 × 4.'
 },
 {
 id: '49',
 text: 'The points on this number line represent a pattern. <br><img src="images/50.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of these number lines continues this pattern of points in the same way?',
 type: 'multiple-choice',
 options: [
    {url: 'images/50a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The points are 6 apart (2, 8, 14, 20, 26, 32). The next points are 38, 44, 50, 56, 62.'
 }
];

// Scaled Score Mapping for Grade 4 Mathematics (2008)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 84,
  2: 133,
  3: 163,
  4: 185,
  5: 202,
  6: 217,
  7: 230,
  8: 241,
  9: 252,
  10: 261,
  11: 270,
  12: 279,
  13: 287,
  14: 294,
  15: 301,
  16: 308,
  17: 315,
  18: 322,
  19: 328,
  20: 335,
  21: 341,
  22: 347,
  23: 353,
  24: 359,
  25: 366,
  26: 372,
  27: 378,
  28: 384,
  29: 390,
  30: 396,
  31: 403,
  32: 409,
  33: 416,
  34: 423,
  35: 430,
  36: 437,
  37: 445,
  38: 452,
  39: 461,
  40: 470,
  41: 479,
  42: 490,
  43: 501,
  44: 514,
  45: 529,
  46: 547,
  47: 569,
  48: 599,
  49: 600,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 22 of the released test required measuring with a physical ruler and was removed.
  // Scale the raw score back to the released test's 50 questions before converting.
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

// Independent Results Manager for Grade 4 Math
(function() {
  'use strict';
  
  console.log(`Grade 4 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 4 Math`);
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
        testType: 'Grade 4 Mathematics (2008)'
      };
      
      console.log(`Saving Grade 4 Math result: ${rawScore}/${sampleQuestions.length} → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 4 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 4 Mathematics (2008)';
        updated = true;
        console.log(`Enhanced Grade 4 Math result ${index + 1}: ${result.rawScore}/${sampleQuestions.length} → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 4 Math results saved');
      
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
            testType: 'Grade 4 Mathematics (2008)'
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
    console.log('Initializing Grade 4 Math independent results system');
    
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
    
    console.log('Grade 4 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();