window.TEST_IDENTIFIER = 'math_grade4_2007';

const sampleQuestions = [
 {
 id: '1',
 text: 'The table shows the number of marbles Juan has in each of three jars. <br><img src="images/1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>closest</i> to the total number of marbles in the three jars?',
 type: 'multiple-choice',
 options: ['240', '340', '440', '540'],
 correctAnswer: 1, 
 explanation: 'Round each number to the nearest ten: 120 + 40 + 180 = 340. (The exact total is 121 + 37 + 180 = 338.)'
 },
 {
 id: '2',
 text: '108 ÷ 6 = ___',
 type: 'multiple-choice',
 options: ['16', '17', '18', '19'],
 correctAnswer: 2, 
 explanation: '6 × 18 = 108, so 108 ÷ 6 = 18.'
 },
 {
 id: '3',
 text: '741,409 − 23,611 = ___',
 type: 'multiple-choice',
 options: ['717,798', '718,798', '722,898', '727,898'],
 correctAnswer: 0, 
 explanation: '741,409 − 23,611 = 717,798.'
 },
 {
 id: '4',
 text: 'Mrs. Thomas bought <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> yard of red fabric and <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> yard of green fabric. How much more red fabric than green fabric did Mrs. Thomas buy?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>4</mn><mn>4</mn></mfrac></math> yard', '<math><mfrac><mn>6</mn><mn>8</mn></mfrac></math> yard', '<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math> yard', '<math><mfrac><mn>2</mn><mn>6</mn></mfrac></math> yard'],
 correctAnswer: 3, 
 explanation: 'Rewrite <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> as <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math>. Then <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> − <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math> yard.'
 },
 {
 id: '5',
 text: 'The number line below is marked with a heavy line segment. <br><img src="images/5.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which difference is between 50,000 and 55,000 as shown on this number line?',
 type: 'multiple-choice',
 options: ['89,362 − 45,486', '89,362 − 35,486', '89,362 − 25,486', '89,362 − 15,486'],
 correctAnswer: 1, 
 explanation: '89,362 − 35,486 = 53,876, which is between 50,000 and 55,000.'
 },
 {
 id: '6',
 text: 'Which product is between 1,000 and 1,500 as shown on the number line? <br><img src="images/6.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['20 × 25', '38 × 32', '50 × 38', '59 × 36'],
 correctAnswer: 1, 
 explanation: '38 × 32 = 1,216, which is between 1,000 and 1,500. (20 × 25 = 500, 50 × 38 = 1,900, and 59 × 36 = 2,124.)'
 },
 {
 id: '7',
 text: '45 × 12 = ___',
 type: 'multiple-choice',
 options: ['440', '530', '540', '550'],
 correctAnswer: 2, 
 explanation: '45 × 12 = 45 × 10 + 45 × 2 = 450 + 90 = 540.'
 },
 {
 id: '8',
 text: '<br><img src="images/8.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Henry ate <math><mfrac><mn>3</mn><mn>9</mn></mfrac></math> of the chocolate bar pictured. What fraction of the chocolate bar is left?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>6</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>9</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'The bar has 9 pieces. Henry ate 3 of them, so 9 − 3 = 6 pieces are left, or <math><mfrac><mn>6</mn><mn>9</mn></mfrac></math>.'
 },
 {
 id: '9',
 text: '267,412 − 81,523 = ___',
 type: 'multiple-choice',
 options: ['348,935', '226,111', '216,479', '185,889'],
 correctAnswer: 3, 
 explanation: '267,412 − 81,523 = 185,889.'
 },
 {
 id: '10',
 text: '0.62 + 0.69 = ___',
 type: 'multiple-choice',
 options: ['0.121', '0.131', '1.21', '1.31'],
 correctAnswer: 3, 
 explanation: 'Line up the decimal points and add: 0.62 + 0.69 = 1.31.'
 },
 {
 id: '11',
 text: 'Alyssa watched 3.5 hours of television last week. This week, she watched 4.7 hours of television. How many more hours did Alyssa watch television this week than last week?',
 type: 'multiple-choice',
 options: ['0.2', '0.8', '1.2', '8.2'],
 correctAnswer: 2, 
 explanation: '4.7 − 3.5 = 1.2 hours.'
 },
 {
 id: '12',
 text: 'The model below is shaded to represent the number 1. <br><img src="images/12-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Each of the following models is shaded to represent a decimal number. <br><img src="images/12-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the two decimals are added, what is the sum?',
 type: 'multiple-choice',
 options: ['0.09', '0.90', '9.0', '90.0'],
 correctAnswer: 1, 
 explanation: 'Model 1 shows 0.70 and Model 2 shows 0.20. 0.70 + 0.20 = 0.90.'
 },
 {
 id: '13',
 text: 'A city has a population of 7,380,916. What is 7,380,916 rounded to the nearest hundred thousand?',
 type: 'multiple-choice',
 options: ['7,000,000', '7,380,900', '7,400,000', '8,000,000'],
 correctAnswer: 2, 
 explanation: 'The hundred thousands digit is 3, and the digit to its right is 8, so round up: 7,400,000.'
 },
 {
 id: '14',
 text: 'The model below represents one whole. <br><img src="images/14-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What number is represented by the following model? <br><img src="images/14-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['1.024', '1.24', '12.4', '124'],
 correctAnswer: 1, 
 explanation: 'There is 1 whole square and 24 hundredths shaded in the second square, so the number is 1.24.'
 },
 {
 id: '15',
 text: 'A fractional part of this group of circles is shaded. <br><img src="images/15.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which group of stars is shaded to represent a fraction with an equivalent value?',
 type: 'multiple-choice',
 options: [
    {url: 'images/15a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: '4 of the 12 circles are shaded, which is <math><mfrac><mn>4</mn><mn>12</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>. Choice A has 1 of 3 stars shaded, which is also <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>.'
 },
 {
 id: '16',
 text: 'Which number has a 7 in the ten thousands place?',
 type: 'multiple-choice',
 options: ['173,862', '287,413', '364,879', '745,206'],
 correctAnswer: 0, 
 explanation: 'In 173,862, the 7 is in the ten thousands place.'
 },
 {
 id: '17',
 text: 'The model below is shaded to represent one whole. <br><img src="images/17-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The following model is shaded to represent a fraction of a whole. <br><img src="images/17-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is shaded to represent a fraction <i>less than</i> the fraction modeled above?',
 type: 'multiple-choice',
 options: [
    {url: 'images/17a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The model shows 5 of 12 parts shaded, or <math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>. Choice D shows <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>, which equals <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>. <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math> is less than <math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '18',
 text: 'Exactly <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math> of the ribbons Homer won were for 1st place. Which of the following could be the group of ribbons Homer won?',
 type: 'multiple-choice',
 options: [
    {url: 'images/18a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Choice F has 5 ribbons and 3 of them are for 1st place, so <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math> are for 1st place.'
 },
 {
 id: '19',
 text: 'What is 13.73 rounded to the nearest tenth?',
 type: 'multiple-choice',
 options: ['13.0', '13.7', '13.8', '14.0'],
 correctAnswer: 1, 
 explanation: 'The tenths digit is 7 and the hundredths digit is 3, which is less than 5, so 13.73 rounds down to 13.7.'
 },
 {
 id: '20',
 text: 'The model below is shaded to represent the number 1. <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which model represents the number that goes in the blank to make the statement below true? <br>0.23 < ___',
 type: 'multiple-choice',
 options: [
    {url: 'images/20a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The model in choice J shows 0.30, and 0.30 is greater than 0.23. The other models show numbers less than 0.23.'
 },
 {
 id: '21',
 text: 'A quart is almost a —',
 type: 'multiple-choice',
 options: ['milliliter', 'centiliter', 'liter', 'kiloliter'],
 correctAnswer: 2, 
 explanation: 'A liter is a little more than a quart, so a quart is almost a liter.'
 },
 {
 id: '22',
 text: 'The bicycle path at the city park is 1 mile long. Which of the following is <i>closest</i> to a distance of 1 mile?',
 type: 'multiple-choice',
 options: ['1.5 kilometers', '1.5 meters', '1.5 millimeters', '1.5 centimeters'],
 correctAnswer: 0, 
 explanation: '1 mile is about 1.6 kilometers, so 1.5 kilometers is closest.'
 },
 {
 id: '23',
 text: 'Which appears to be a pair of congruent figures?',
 type: 'multiple-choice',
 options: [
    {url: 'images/24a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/24d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Congruent figures have the same size and shape. The two figures in choice H are the same shape and size, just turned.'
 },
 {
 id: '24',
 text: 'Jackie plans to cover a tabletop with tiles. Which should Jackie know to make sure she buys enough tile?',
 type: 'multiple-choice',
 options: ['The height of the table', 'The perimeter of the tabletop', 'The weight of the table', 'The area of the tabletop'],
 correctAnswer: 3, 
 explanation: 'Area measures the amount of surface to be covered, so Jackie needs to know the area of the tabletop.'
 },
 {
 id: '25',
 text: '<br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The sides of this polygon are <i>best</i> described as —',
 type: 'multiple-choice',
 options: ['rays', 'points', 'lines', 'line segments'],
 correctAnswer: 3, 
 explanation: 'Each side of a polygon has two endpoints, so the sides are line segments.'
 },
 {
 id: '26',
 text: 'Anna bought 1 pound of butter. Which of the following is equivalent to 1 pound?',
 type: 'multiple-choice',
 options: ['10 ounces', '16 ounces', '28 ounces', '36 ounces'],
 correctAnswer: 1, 
 explanation: 'There are 16 ounces in 1 pound.'
 },
 {
 id: '27',
 text: 'Which of the following is <i>not</i> pictured in the diagram? <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Ray <i>BD</i>', 'Line <i>AD</i>', 'Angle <i>B</i>', 'Line segment <i>CD</i>'],
 correctAnswer: 3, 
 explanation: 'Points C and D are not connected in the diagram, so line segment CD is not pictured.'
 },
 {
 id: '28',
 text: 'A scientist filled an eyedropper with vinegar. Which of the following amount would fit in an eyedropper?',
 type: 'multiple-choice',
 options: ['10 milliliters', '10 liters', '1 kiloliter', '1 liter'],
 correctAnswer: 0, 
 explanation: 'An eyedropper holds only a small amount of liquid, so 10 milliliters is the only reasonable amount.'
 },
 {
 id: '29',
 text: 'A square is both a —',
 type: 'multiple-choice',
 options: ['rectangle and a triangle.', 'parallelogram and a rhombus.', 'triangle and a quadrilateral.', 'polygon and a circle.'],
 correctAnswer: 1, 
 explanation: 'A square has two pairs of parallel sides (a parallelogram) and four equal sides (a rhombus).'
 },
 {
 id: '30',
 text: '<br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the mass of the 5 nickels is 25 grams, which measurement is <i>closest</i> to the total mass of the 2 pieces of candy?',
 type: 'multiple-choice',
 options: ['35 grams', '30 grams', '25 grams', '20 grams'],
 correctAnswer: 3, 
 explanation: 'The side with the candy is higher, so the candy is lighter than the 25 grams of nickels. 20 grams is the only choice less than 25 grams.'
 },
 {
 id: '31',
 text: 'Line <i>m</i> and four points are shown on the grid. <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which two points appear to lie on the same line that is parallel to line <i>m</i>?',
 type: 'multiple-choice',
 options: ['<i>G</i> and <i>D</i>', '<i>D</i> and <i>E</i>', '<i>G</i> and <i>E</i>', '<i>F</i> and <i>D</i>'],
 correctAnswer: 2, 
 explanation: 'Line m is vertical. Points G and E are in the same column, so a vertical line through them is parallel to line m.'
 },
 {
 id: '32',
 text: 'Elsa made the graph below to show the amount of money her family spent on food each week for one month. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Between which two weeks was the difference in the amount spent on food closest to $5?',
 type: 'multiple-choice',
 options: ['Between week 1 and week 2', 'Between week 2 and week 3', 'Between week 1 and week 4', 'Between week 2 and week 4'],
 correctAnswer: 1, 
 explanation: 'Week 2 was $45 and week 3 was $40. $45 − $40 = $5.'
 },
 {
 id: '33',
 text: 'Terrell put 25 marbles in a bag. It is certain that the first marble taken from the bag will be red. Which is the number of red marbles in the bag?',
 type: 'multiple-choice',
 options: ['0', '5', '20', '25'],
 correctAnswer: 3, 
 explanation: 'For it to be certain that a red marble is picked, all 25 marbles must be red.'
 },
 {
 id: '34',
 text: 'Jason rolls a cube that has a different one of the following shapes on each face. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the probability the cube will land on a face with a star on Jason\'s first roll?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>1</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'There are 6 faces and only 1 has a star, so the probability is <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>.'
 },
 {
 id: '35',
 text: 'Pat and her friends will use the following spinner in a game. Each section of the spinner is the same size. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Pat spins first, what is the probability the arrow will land on a section labeled Missy?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'There are 6 equal sections and 2 are labeled Missy, so the probability is <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>.'
 },
 {
 id: '36',
 text: 'Mr. Charles measured and recorded the amount of liquid in a tank each hour for 4 hours. The table shows the results. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which <i>best</i> represents a correct graph of the information from the table?',
 type: 'multiple-choice',
 options: [
    {url: 'images/37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Graph A shows the points 23, 18, 27, and 25 at 8:00, 9:00, 10:00, and 11:00 on a correctly labeled scale.'
 },
 {
 id: '37',
 text: 'The line graph shows how Joseph\'s height changed as he grew. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is <i>closest</i> to Joseph\'s height when he was 15 years old?',
 type: 'multiple-choice',
 options: ['80 in.', '70 in.', '65 in.', '60 in.'],
 correctAnswer: 1, 
 explanation: 'At age 15, the line is at about 70 inches.'
 },
 {
 id: '38',
 text: 'Yolanda has 10 red tomatoes and 2 green tomatoes in a bag. All the tomatoes are the same size. If Yolanda takes 1 tomato from the bag without looking, which <i>best</i> describes the chance it will be a green tomato?',
 type: 'multiple-choice',
 options: ['Certain', 'Likely, but not certain', 'Unlikely, but not impossible', 'Impossible'],
 correctAnswer: 2, 
 explanation: 'Only 2 of the 12 tomatoes are green, so picking a green tomato is unlikely, but it is not impossible.'
 },
 {
 id: '39',
 text: 'The bar graph shows the number of each color pencil the school store sold last week. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the data in the graph, which of the following is <i>closest</i> to the total number of pencils sold last week?',
 type: 'multiple-choice',
 options: ['350', '400', '450', '500'],
 correctAnswer: 1, 
 explanation: 'About 110 red + 100 blue + 105 green + 85 yellow = 400 pencils.'
 },
 {
 id: '40',
 text: 'Ron used circles and rectangles to make a pattern. For Figure 1, he used two rectangles. For Figure 2, he added two circles. He continued the pattern by adding two rectangles, then two circles. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What will be the total number of circles in Figure 6?',
 type: 'multiple-choice',
 options: ['2', '4', '6', '8'],
 correctAnswer: 2, 
 explanation: 'Two circles are added in each even-numbered figure: Figure 2 has 2, Figure 4 has 4, and Figure 6 has 6 circles.'
 },
 {
 id: '41',
 text: 'Adrian is using a subtraction rule to make the number pattern shown below. <br>281 &nbsp; 278 &nbsp; 275 &nbsp; 272 &nbsp; 269 <br>If the pattern continues in the same way, what will be the <i>7th</i> number in the pattern?',
 type: 'multiple-choice',
 options: ['270', '266', '263', '260'],
 correctAnswer: 2, 
 explanation: 'The rule is subtract 3. The 6th number is 269 − 3 = 266 and the 7th number is 266 − 3 = 263.'
 },
 {
 id: '42',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['12 × 89 = 89 × 12', '12 × 89 = 89 ÷ 12', '12 × 89 = 10 + 2 + 89', '12 × 89 = (12 × 8) + (12 × 9)'],
 correctAnswer: 0, 
 explanation: 'Numbers can be multiplied in any order (the commutative property), so 12 × 89 = 89 × 12.'
 },
 {
 id: '43',
 text: 'Alana used a rule to get each new number in the pattern shown. <br>5, 10, 20, 40, 80 <br>Which could be the rule Alana used?',
 type: 'multiple-choice',
 options: ['Multiply by 2', 'Add 10', 'Add 5', 'Multiply by 5'],
 correctAnswer: 0, 
 explanation: 'Each number is double the one before: 5 × 2 = 10, 10 × 2 = 20, and so on.'
 },
 {
 id: '44',
 text: 'Dan is buying packages of cookies for class. Each package of cookies contains the same number of cookies. <br><img src="images/45.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the information from the table, how many packages will Dan need to buy to have a total of 32 cookies?',
 type: 'multiple-choice',
 options: ['6', '7', '8', '9'],
 correctAnswer: 2, 
 explanation: 'Each package has 4 cookies. 32 ÷ 4 = 8 packages.'
 },
 {
 id: '45',
 text: 'Which of the following goes in the blank to make the statement true? <br>12 + (8 + 25) = ___',
 type: 'multiple-choice',
 options: ['(12 + 8) + 25', '12 × 33', '33 + (12 + 8)', '20 + 37'],
 correctAnswer: 0, 
 explanation: 'Numbers can be grouped in any way when adding (the associative property), so 12 + (8 + 25) = (12 + 8) + 25.'
 },
 {
 id: '46',
 text: 'Which goes in the blank to make the statement true? <br>3 + 5 = ___',
 type: 'multiple-choice',
 options: ['5 ÷ 3', '5 − 3', '5 × 3', '5 + 3'],
 correctAnswer: 3, 
 explanation: 'Numbers can be added in any order, so 3 + 5 = 5 + 3.'
 },
 {
 id: '47',
 text: 'Which will be true if an equal sign (=) is placed in the empty box?',
 type: 'multiple-choice',
 options: ['7 × 6 ☐ 6 + 7', '7 × 6 ☐ 6 − 7', '7 × 6 ☐ 6 × 7', '7 × 6 ☐ 6 ÷ 7'],
 correctAnswer: 2, 
 explanation: 'Numbers can be multiplied in any order, so 7 × 6 = 6 × 7.'
 },
 {
 id: '48',
 text: '10 + 12 = ___',
 type: 'multiple-choice',
 options: ['12 − 10', '12 × 10', '12 ÷ 10', '12 + 10'],
 correctAnswer: 3, 
 explanation: 'Numbers can be added in any order, so 10 + 12 = 12 + 10.'
 },
 {
 id: '49',
 text: 'A number machine uses a rule to change numbers into different numbers. The following picture shows what happens when three different numbers go into and come out of the same number machine. <br><img src="images/50.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What number should come out if the number 12 goes into this number machine?',
 type: 'multiple-choice',
 options: ['16', '22', '33', '36'],
 correctAnswer: 3, 
 explanation: 'The rule is multiply by 3: 2 × 3 = 6, 5 × 3 = 15, and 8 × 3 = 24. So 12 × 3 = 36.'
 }
];

// Scaled Score Mapping for Grade 4 Mathematics (2007)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 86,
  2: 135,
  3: 164,
  4: 186,
  5: 203,
  6: 218,
  7: 231,
  8: 242,
  9: 253,
  10: 262,
  11: 271,
  12: 279,
  13: 287,
  14: 295,
  15: 302,
  16: 309,
  17: 316,
  18: 322,
  19: 329,
  20: 335,
  21: 342,
  22: 348,
  23: 354,
  24: 360,
  25: 366,
  26: 372,
  27: 378,
  28: 384,
  29: 391,
  30: 397,
  31: 403,
  32: 410,
  33: 416,
  34: 423,
  35: 430,
  36: 437,
  37: 445,
  38: 453,
  39: 461,
  40: 470,
  41: 480,
  42: 490,
  43: 501,
  44: 514,
  45: 529,
  46: 546,
  47: 568,
  48: 598,
  49: 600,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 21 of the released test required measuring with a physical ruler and was removed.
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
        testType: 'Grade 4 Mathematics (2007)'
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
        result.testType = 'Grade 4 Mathematics (2007)';
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
            testType: 'Grade 4 Mathematics (2007)'
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