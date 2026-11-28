window.TEST_IDENTIFIER = 'math_grade5_2007';

const sampleQuestions = [
 {
 id: '1',
 text: '6,048 ÷ 8 = ___',
 type: 'multiple-choice',
 options: ['756', '746', '664', '654'],
 correctAnswer: 0, 
 explanation: '8 × 756 = 6,048, so 6,048 ÷ 8 = 756.'
 },
 {
 id: '2',
 text: 'The table shows the number of pretzels a factory made in March and April. <br><img src="images/2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many more pretzels did the factory make in March than in April?',
 type: 'multiple-choice',
 options: ['82,877', '82,977', '117,123', '117,137'],
 correctAnswer: 0, 
 explanation: '962,458 − 879,581 = 82,877.'
 },
 {
 id: '3',
 text: 'Bender\'s Bakery sells muffins for $2 each, including tax. Diane bought 4 blueberry muffins and 3 cranberry muffins. What was the total cost of the muffins Diane bought?',
 type: 'multiple-choice',
 options: ['$24', '$14', '$9', '$7'],
 correctAnswer: 1, 
 explanation: 'Diane bought 4 + 3 = 7 muffins. 7 × $2 = $14.'
 },
 {
 id: '4',
 text: '5.2 + 1.073 = ___',
 type: 'multiple-choice',
 options: ['0.6273', '1.125', '5.075', '6.273'],
 correctAnswer: 3, 
 explanation: 'Line up the decimal points: 5.200 + 1.073 = 6.273.'
 },
 {
 id: '5',
 text: 'Mr. Collins made 20 birdhouses to sell at a carnival. He earns $15 for each birdhouse he sells. How much will Mr. Collins earn if he sells all 20 birdhouses?',
 type: 'multiple-choice',
 options: ['$35', '$55', '$300', '$400'],
 correctAnswer: 2, 
 explanation: '20 × $15 = $300.'
 },
 {
 id: '6',
 text: '0.38 × 0.9 = ___',
 type: 'multiple-choice',
 options: ['0.0342', '0.342', '3.42', '34.2'],
 correctAnswer: 1, 
 explanation: '38 × 9 = 342. There are 3 decimal places in the factors, so 0.38 × 0.9 = 0.342.'
 },
 {
 id: '7',
 text: '3 <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> − <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['2 <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '2 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '3 <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '3 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'Rewrite <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> as <math><mfrac><mn>4</mn><mn>6</mn></mfrac></math>. Then 3 <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> − <math><mfrac><mn>4</mn><mn>6</mn></mfrac></math> = 3 <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>.'
 },
 {
 id: '8',
 text: '309 ÷ 7 = ___',
 type: 'multiple-choice',
 options: ['51 R2', '44 R1', '41 R2', '32 R5'],
 correctAnswer: 1, 
 explanation: '7 × 44 = 308, and 309 − 308 = 1, so the answer is 44 R1.'
 },
 {
 id: '9',
 text: '72.3 − 19.6 = ___',
 type: 'multiple-choice',
 options: ['52.7', '52.8', '62.7', '67.3'],
 correctAnswer: 0, 
 explanation: 'Line up the decimal points and subtract: 72.3 − 19.6 = 52.7.'
 },
 {
 id: '10',
 text: 'Harry had 500 pennies in a jar. He sorted the pennies into 25 different stacks. Each stack had the same number of pennies. How many pennies were in each stack?',
 type: 'multiple-choice',
 options: ['20', '475', '525', '12,500'],
 correctAnswer: 0, 
 explanation: '500 ÷ 25 = 20 pennies.'
 },
 {
 id: '11',
 text: 'There are 914 students enrolled in Lakeview Elementary School. Frederich Elementary School has 276 fewer students enrolled. How many students are enrolled at Frederich Elementary School?',
 type: 'multiple-choice',
 options: ['1,190', '762', '642', '638'],
 correctAnswer: 3, 
 explanation: '914 − 276 = 638 students.'
 },
 {
 id: '12',
 text: '7.206 − 5.92 = ___',
 type: 'multiple-choice',
 options: ['6.614', '2.286', '2.114', '1.286'],
 correctAnswer: 3, 
 explanation: 'Write 5.92 as 5.920 and subtract: 7.206 − 5.920 = 1.286.'
 },
 {
 id: '13',
 text: 'Which of the fractions shown below has the same value as 0.7?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>100</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '0.7 is seven tenths, or <math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>.'
 },
 {
 id: '14',
 text: 'The table shows the distance that four athletes jumped in the long jump. <br><img src="images/14.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is a true statement?',
 type: 'multiple-choice',
 options: ['10.364 > 10.029', '10.029 > 10.151', '10.318 > 10.364', '10.151 > 10.318'],
 correctAnswer: 0, 
 explanation: 'Both numbers have 10 ones. 10.364 has 3 tenths and 10.029 has 0 tenths, so 10.364 > 10.029.'
 },
 {
 id: '15',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['6.980 > 6.981', '6.793 > 6.981', '6.982 > 6.981', '6.895 > 6.981'],
 correctAnswer: 2, 
 explanation: 'The ones, tenths, and hundredths digits are the same. 2 thousandths is more than 1 thousandth, so 6.982 > 6.981.'
 },
 {
 id: '16',
 text: 'Which fraction goes in the blank so that this list is in order from <i>least</i> to <i>greatest</i>? <br><math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>, 0.4, ___, <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>, 0.75',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'The missing number must be between 0.4 and <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> (about 0.67). <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = 0.5, which is between them.'
 },
 {
 id: '17',
 text: 'How is 4.026 written in words?',
 type: 'multiple-choice',
 options: ['Four and twenty-six hundredths', 'Four and twenty-six thousandths', 'Four thousand, twenty-six', 'Four hundred twenty-six'],
 correctAnswer: 1, 
 explanation: '4.026 has 4 ones and 26 thousandths: four and twenty-six thousandths.'
 },
 {
 id: '18',
 text: 'What is 29.74 rounded to the nearest tenth?',
 type: 'multiple-choice',
 options: ['29.0', '29.6', '29.7', '30.0'],
 correctAnswer: 2, 
 explanation: 'The tenths digit is 7 and the hundredths digit is 4, which is less than 5, so round down to 29.7.'
 },
 {
 id: '19',
 text: 'Which number is read "two and thirteen hundredths"?',
 type: 'multiple-choice',
 options: ['0.213', '2.013', '2.13', '213'],
 correctAnswer: 2, 
 explanation: 'Two and thirteen hundredths is 2 + 0.13 = 2.13.'
 },
 {
 id: '20',
 text: 'Which group of numbers is listed in order from <i>least</i> to <i>greatest</i>?',
 type: 'multiple-choice',
 options: ['0.1, <math><mfrac><mn>9</mn><mn>10</mn></mfrac></math>, 0.4, <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '0.1, 0.4, <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>, <math><mfrac><mn>9</mn><mn>10</mn></mfrac></math>', '0.1, 0.4, <math><mfrac><mn>9</mn><mn>10</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '0.1, <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>, 0.4, <math><mfrac><mn>9</mn><mn>10</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'As decimals, <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> = 0.75 and <math><mfrac><mn>9</mn><mn>10</mn></mfrac></math> = 0.9. So the order is 0.1, 0.4, 0.75, 0.9.'
 },
 {
 id: '21',
 text: 'Which of the following shows a reflection (flip) of the shaded shape across the heavy dotted line?',
 type: 'multiple-choice',
 options: [
    {url: 'images/21a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'A reflection is a mirror image. In choice C, the shape on the right is the mirror image of the shape on the left across the dotted line.'
 },
 {
 id: '22',
 text: 'In the figure, point <i>O</i> is the center of the circle. <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which two points appear to make a diameter when connected with a straight line?',
 type: 'multiple-choice',
 options: ['<i>M</i> and <i>S</i>', '<i>T</i> and <i>R</i>', '<i>O</i> and <i>R</i>', '<i>N</i> and <i>S</i>'],
 correctAnswer: 0, 
 explanation: 'A diameter goes through the center of the circle. M and S are on opposite sides of the circle, and the segment MS passes through the center O.'
 },
 {
 id: '23',
 text: 'Which unit could be used for measuring the amount of liquid needed to fill a small teacup?',
 type: 'multiple-choice',
 options: ['Gram', 'Pound', 'Meter', 'Milliliter'],
 correctAnswer: 3, 
 explanation: 'Milliliters measure liquid capacity. Grams and pounds measure mass or weight, and meters measure length.'
 },
 {
 id: '24',
 text: 'What is the perimeter of a rectangle that is 6 inches long and 4 inches wide?',
 type: 'multiple-choice',
 options: ['10 inches', '20 inches', '24 inches', '48 inches'],
 correctAnswer: 1, 
 explanation: 'Perimeter = 6 + 4 + 6 + 4 = 20 inches.'
 },
 {
 id: '25',
 text: 'Which of the following has exactly 5 vertices?',
 type: 'multiple-choice',
 options: [
    {url: 'images/25a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A square-based pyramid has 4 vertices around its base and 1 at the top, for 5 vertices in all.'
 },
 {
 id: '26',
 text: 'Which is <i>closest</i> to the measure of the angle? <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['25°', '45°', '80°', '90°'],
 correctAnswer: 2, 
 explanation: 'The angle is smaller than a right angle (90°) but much larger than half of a right angle (45°). Of the choices, 80° is closest.'
 },
 {
 id: '27',
 text: '<br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which figure is a quadrilateral?',
 type: 'multiple-choice',
 options: ['Figure <i>S</i>', 'Figure <i>T</i>', 'Figure <i>W</i>', 'Figure <i>X</i>'],
 correctAnswer: 3, 
 explanation: 'A quadrilateral has 4 sides. Figure X is a parallelogram, which has 4 sides.'
 },
 {
 id: '28',
 text: 'Which figure has an area of 8 and a perimeter of 12?',
 type: 'multiple-choice',
 options: [
    {url: 'images/28a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The rectangle in choice G is 4 units by 2 units. Its area is 4 × 2 = 8 and its perimeter is 4 + 2 + 4 + 2 = 12.'
 },
 {
 id: '29',
 text: 'The map shows Frank\'s flight path from Charlottesville to Roanoke, and then from Roanoke to Richmond. <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which <i>best</i> describes the angle formed by the two flight paths?',
 type: 'multiple-choice',
 options: ['Acute', 'Obtuse', 'Right', 'Straight'],
 correctAnswer: 0, 
 explanation: 'The angle formed at Roanoke is smaller than a square corner, so it is acute.'
 },
 {
 id: '30',
 text: 'Tom left home at 7:15 a.m. to go to work. He returned home at 4:45 p.m. What is the total amount of time Tom was away from home?',
 type: 'multiple-choice',
 options: ['3 hours, 30 minutes', '7 hours, 30 minutes', '8 hours, 30 minutes', '9 hours, 30 minutes'],
 correctAnswer: 3, 
 explanation: 'From 7:15 a.m. to 4:15 p.m. is 9 hours. From 4:15 p.m. to 4:45 p.m. is 30 minutes. Total: 9 hours, 30 minutes.'
 },
 {
 id: '31',
 text: 'Which statement is true?',
 type: 'multiple-choice',
 options: ['A cone is a type of cylinder.', 'A cube is a type of rectangular prism.', 'A square-based pyramid is a type of cube.', 'A rectangular prism is a type of cylinder.'],
 correctAnswer: 1, 
 explanation: 'A cube has 6 rectangular (square) faces, so it is a special kind of rectangular prism.'
 },
 {
 id: '32',
 text: 'A group of students were asked to name their favorite circus animal. The table shows the results. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the mean (average) of this set of data?',
 type: 'multiple-choice',
 options: ['42', '40', '32', '16'],
 correctAnswer: 0, 
 explanation: '48 + 36 + 32 + 54 + 40 = 210. 210 ÷ 5 = 42.'
 },
 {
 id: '33',
 text: 'Brent is using the spinner shown below to play a game. Each section of the spinner is the same size. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the probability the arrow will land on a section labeled 4 or 5 on Brent\'s next spin?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'There are 8 equal sections. 2 of them are labeled 4 or 5, so the probability is <math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '34',
 text: 'Mrs. Garrison has these sheets of wrapping paper. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following questions about these sheets of wrapping paper could you use probability to solve?',
 type: 'multiple-choice',
 options: ['How many different kinds of wrapping paper does Mrs. Garrison have?', 'How many sheets of wrapping paper does Mrs. Garrison have?', 'If Mrs. Garrison uses 1 sheet of wrapping paper, how many will be left?', 'If Mrs. Garrison picks 1 sheet of wrapping paper without looking, what kind will it most likely be?'],
 correctAnswer: 3, 
 explanation: 'Probability describes how likely something is to happen. Picking a sheet without looking is a chance event.'
 },
 {
 id: '35',
 text: 'The table shows the number of pages Laura read each night for a week. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What number of pages is the mode of this set of data?',
 type: 'multiple-choice',
 options: ['17', '20', '21', '24'],
 correctAnswer: 0, 
 explanation: 'The mode is the number that appears most often. 17 appears twice.'
 },
 {
 id: '36',
 text: 'Matt has two coins to flip. Each coin has an equal chance of landing on heads or tails. Which question about the coins requires knowledge of probability?',
 type: 'multiple-choice',
 options: ['What will Matt buy with the two coins?', 'What is the total value of the two coins Matt flipped?', 'What year is stamped on each coin?', 'What is the chance both coins will land on heads after one flip?'],
 correctAnswer: 3, 
 explanation: 'The chance that both coins land on heads is a probability question.'
 },
 {
 id: '37',
 text: 'Martin will glue a design he made onto a paper or a plastic plate. Then he will decorate the plate with one of the materials listed in the chart below. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which tree diagram shows all the possible combinations of 1 kind of plate and 1 material that Martin can make?',
 type: 'multiple-choice',
 options: [
    {url: 'images/38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Each of the 2 kinds of plate can go with each of the 4 materials, so there are 2 × 4 = 8 combinations. Tree diagram J shows all 8.'
 },
 {
 id: '38',
 text: 'This graph shows the total cost of a large jar of Mindy\'s peach jam at four different stores. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Between which two stores was there the <i>greatest</i> difference in total cost?',
 type: 'multiple-choice',
 options: ['Park\'s and Jenner\'s', 'Hoskin\'s and Jenner\'s', 'Drake\'s and Park\'s', 'Jenner\'s and Park\'s'],
 correctAnswer: 2, 
 explanation: 'Drake\'s has the lowest cost (about $2.25) and Park\'s has the highest (about $4.50), so the greatest difference is between Drake\'s and Park\'s.'
 },
 {
 id: '39',
 text: 'The graph shows how the water level below a bridge changed over a period of time. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many feet lower was the water level on Wednesday than on Monday?',
 type: 'multiple-choice',
 options: ['3 ft', '5 ft', '15 ft', '25 ft'],
 correctAnswer: 2, 
 explanation: 'The water level was 20 feet on Monday and 5 feet on Wednesday. 20 − 5 = 15 feet.'
 },
 {
 id: '40',
 text: 'Which of these could be solved by using the open sentence <i>S</i> − 7 = ?',
 type: 'multiple-choice',
 options: ['Rita collected 7 more seashells than Henry. If <i>S</i> is the number of seashells that Henry collected, how many did Rita collect?', 'Blanche collected 7 fewer seashells than Connie. If <i>S</i> is the number of seashells that Connie collected, how many did Blanche collect?', 'Amity filled 7 boxes with seashells. If <i>S</i> is the number of seashells she put in each box, how many seashells did she use in all?', 'Dylan needs 7 seashells more to complete his collection. If <i>S</i> is the number of seashells he has so far, how many will he have after he gets 7 more?'],
 correctAnswer: 1, 
 explanation: '"7 fewer than Connie" means subtract 7 from Connie\'s number: S − 7.'
 },
 {
 id: '41',
 text: 'In the expression <i>m</i> − 3, the letter <i>m</i> represents —',
 type: 'multiple-choice',
 options: ['a subtraction symbol', 'a number sentence', 'a subtraction problem', 'an unknown number'],
 correctAnswer: 3, 
 explanation: 'A letter in an expression is a variable. It stands for an unknown number.'
 },
 {
 id: '42',
 text: 'A rule was used to make the pattern shown below. <br>51, 45, 39, 33, 27, 21 . . . <br>Which could be the rule used to make the pattern?',
 type: 'multiple-choice',
 options: ['Subtract 6', 'Subtract 7', 'Divide by 6', 'Divide by 7'],
 correctAnswer: 0, 
 explanation: 'Each number is 6 less than the one before: 51 − 6 = 45, 45 − 6 = 39, and so on.'
 },
 {
 id: '43',
 text: 'A rule was used to make the pattern shown. <br>56, 49, 42, 35, 28, 21 <br>Which could be the rule?',
 type: 'multiple-choice',
 options: ['Subtract 5', 'Subtract 6', 'Subtract 7', 'Subtract 8'],
 correctAnswer: 2, 
 explanation: 'Each number is 7 less than the one before: 56 − 7 = 49, 49 − 7 = 42, and so on.'
 },
 {
 id: '44',
 text: 'Marcus had twice as many jawbreaker candies as Lyndon. If <i>J</i> represents the number of jawbreaker candies Lyndon had, which number sentence could be used to find the number of these candies Marcus had?',
 type: 'multiple-choice',
 options: ['<i>J</i> ÷ 2 = ?', '<i>J</i> × 2 = ?', '<i>J</i> − 2 = ?', '<i>J</i> + 2 = ?'],
 correctAnswer: 1, 
 explanation: '"Twice as many" means multiply by 2: J × 2.'
 },
 {
 id: '45',
 text: 'Which represents the unknown value in the following statement? <br><i>t</i> × 3 = 36',
 type: 'multiple-choice',
 options: ['<i>t</i>', '×', '3', '36'],
 correctAnswer: 0, 
 explanation: 'The letter t is a variable that stands for the unknown value.'
 },
 {
 id: '46',
 text: 'A number machine uses a rule to change numbers. The table shows what happened when four different numbers went into the same number machine. <br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the tables below could be results from the same number machine?',
 type: 'multiple-choice',
 options: [
    {url: 'images/47a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/47b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/47c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/47d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The rule is multiply by 3: 3 × 3 = 9, 4 × 3 = 12, 9 × 3 = 27, 15 × 3 = 45. Table B follows the same rule: 5 × 3 = 15, 6 × 3 = 18, 7 × 3 = 21, 8 × 3 = 24.'
 },
 {
 id: '47',
 text: 'A number machine uses a rule to change numbers. The picture shows what happened when three different numbers went into the same number machine. <br><img src="images/48.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following could be the rule this number machine used?',
 type: 'multiple-choice',
 options: ['In ÷ 2 = Out', 'In ÷ 4 = Out', 'In + 4 = Out', 'In − 6 = Out'],
 correctAnswer: 3, 
 explanation: '8 − 6 = 2, 12 − 6 = 6, and 14 − 6 = 8.'
 },
 {
 id: '48',
 text: 'If <i>n</i> represents a number, which means the same as the expression <i>n</i> ÷ 7?',
 type: 'multiple-choice',
 options: ['A number divided by seven', 'A number multiplied by seven', 'Seven more than a number', 'Seven less than a number'],
 correctAnswer: 0, 
 explanation: 'n ÷ 7 means a number divided by seven.'
 },
 {
 id: '49',
 text: 'Abel saw the tile pattern shown in the picture. <br><img src="images/50.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which could be the rule used to make the tile pattern?',
 type: 'multiple-choice',
 options: ['Repeat the first 2 tiles in the same order', 'Repeat the first 3 tiles in the same order', 'Repeat the first 4 tiles in the same order', 'Repeat the first 5 tiles in the same order'],
 correctAnswer: 1, 
 explanation: 'The first 3 tiles appear again as tiles 4, 5, 6 and again as tiles 7, 8, 9, so the rule is to repeat the first 3 tiles.'
 }
];

// Scaled Score Mapping for Grade 5 Mathematics (2007)
// Maps raw scores (number correct out of 50) to scaled scores
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
  // Question 32 of the released test required measuring with a physical ruler and was removed.
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
        testType: 'Grade 5 Mathematics (2007)'
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
        result.testType = 'Grade 5 Mathematics (2007)';
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
            testType: 'Grade 5 Mathematics (2007)'
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