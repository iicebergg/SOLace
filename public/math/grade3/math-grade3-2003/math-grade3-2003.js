window.TEST_IDENTIFIER = 'math_grade3_2003';

const sampleQuestions = [
 {
 id: '1',
 text: 'Brooke guessed that there are 605,788 buttons in the jar below. <br><img src="images/1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following shows 605,788 written in words?',
 type: 'multiple-choice',
 options: ['Six hundred, seventy-eight', 'Six hundred five, seven hundred eighty-eight', 'Six hundred five thousand, seventy-eight', 'Six hundred five thousand, seven hundred eighty-eight'],
 correctAnswer: 3, 
 explanation: '605,788 has 605 thousands and 788 ones, so it is read "six hundred five thousand, seven hundred eighty-eight."'
 },
 {
 id: '2',
 text: '<br><img src="images/2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Each of these bags has exactly 5 buttons in it. How many buttons are there in all?',
 type: 'multiple-choice',
 options: ['17', '80', '85', '90'],
 correctAnswer: 2, 
 explanation: 'There are 17 bags with 5 buttons each: 17 × 5 = 85 buttons.'
 },
 {
 id: '3',
 text: 'Greg read about a 365,970 mile space flight. What is the value of the 3 in 365,970?',
 type: 'multiple-choice',
 options: ['300', '3,000', '30,000', '300,000'],
 correctAnswer: 3, 
 explanation: 'The 3 is in the hundred thousands place, so its value is 300,000.'
 },
 {
 id: '4',
 text: 'Sara can use the fact 12 − 6 = 6 to help solve a related problem. Which of the following could be the problem she is trying to solve?',
 type: 'multiple-choice',
 options: ['___ + 6 = 12', '___ × 6 = 6', '___ − 6 = 0', '___ ÷ 6 = 12'],
 correctAnswer: 0, 
 explanation: 'Addition and subtraction are related: since 12 − 6 = 6, the missing number in ___ + 6 = 12 is 6.'
 },
 {
 id: '5',
 text: 'The figure shown below is shaded to represent a fraction. <br><img src="images/5.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is shaded to represent a fraction with a value EQUAL TO the one above?',
 type: 'multiple-choice',
 options: [
    {url: 'images/5a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/5b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/5c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/5d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The figure has 3 of 6 equal parts shaded, which is <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>. Choice B also has 3 of its 6 equal parts shaded, which equals <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '6',
 text: '<br><img src="images/6.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which figure is on the 15th space from START?',
 type: 'multiple-choice',
 options: [
    {url: 'images/6a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/6b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/6c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/6d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Count the spaces clockwise from START: the 15th space is the dog.'
 },
 {
 id: '7',
 text: 'Virginia covers one hundred two thousand, five hundred fifty-eight square kilometers of land. Which shows this number?',
 type: 'multiple-choice',
 options: ['1,258', '12,558', '102,558', '1,200,558'],
 correctAnswer: 2, 
 explanation: 'One hundred two thousand is 102,000 and five hundred fifty-eight is 558, so the number is 102,558.'
 },
 {
 id: '8',
 text: 'A clown walks on stilts that are 147 centimeters tall. <br><img src="images/8.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is 147 rounded to the nearest hundred?',
 type: 'multiple-choice',
 options: ['250', '200', '150', '100'],
 correctAnswer: 3, 
 explanation: '147 is between 100 and 200. The tens digit is 4, which is less than 5, so 147 rounds down to 100.'
 },
 {
 id: '9',
 text: 'Which figure shows <math><mfrac><mn>1</mn><mn>10</mn></mfrac></math> shaded?',
 type: 'multiple-choice',
 options: [
    {url: 'images/9a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/9b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/9c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/9d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>1</mn><mn>10</mn></mfrac></math> means 1 of 10 equal parts. Choice C is divided into 10 equal parts with 1 part shaded.'
 },
 {
 id: '10',
 text: 'This is a whole. <br><img src="images/10-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which tells the exact number of pizzas shown in the picture below? <br><img src="images/10-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['5.4', '4.5', '0.54', '0.45'],
 correctAnswer: 1, 
 explanation: 'There are 4 whole pizzas and 5 of 10 slices of another pizza, which is 4 and <math><mfrac><mn>5</mn><mn>10</mn></mfrac></math>, or 4.5.'
 },
 {
 id: '11',
 text: '<br><img src="images/11.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Tracy bought these pencils. Each pencil cost 2 cents. How much did the pencils cost all together?',
 type: 'multiple-choice',
 options: ['5¢', '15¢', '30¢', '45¢'],
 correctAnswer: 2, 
 explanation: 'There are 15 pencils, and 15 × 2¢ = 30¢.'
 },
 {
 id: '12',
 text: '<br><img src="images/12.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What fraction of the candles on the cake is lit?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>4</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'There are 7 candles and 4 of them are lit, so <math><mfrac><mn>4</mn><mn>7</mn></mfrac></math> of the candles are lit.'
 },
 {
 id: '13',
 text: 'The table below shows the length of some of the longest rivers in the world. <br><img src="images/13.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The Amazon River is 4,000 miles long. This is LESS THAN the length of which river?',
 type: 'multiple-choice',
 options: ['Mississippi River', 'Nile River', 'Yangtze River', 'Yenisei River'],
 correctAnswer: 1, 
 explanation: 'The only river longer than 4,000 miles is the Nile (4,145 miles), so 4,000 is less than the length of the Nile River.'
 },
 {
 id: '14',
 text: 'Diane has the money shown below. <br><img src="images/14.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Shelly has a group of coins with the same total value as Diane\'s money. Which could be Shelly\'s money?',
 type: 'multiple-choice',
 options: [
    {url: 'images/14a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Diane has $1.00 + 3 quarters + 2 dimes = $1.95. The coins in choice F also add up to $1.95.'
 },
 {
 id: '15',
 text: 'A school library had 2,089 books. It received 853 more books during the year. How many books did the library have then?',
 type: 'multiple-choice',
 options: ['1,236', '2,832', '2,836', '2,942'],
 correctAnswer: 3, 
 explanation: '2,089 + 853 = 2,942 books.'
 },
 {
 id: '16',
 text: '42 ÷ 7 = ___',
 type: 'multiple-choice',
 options: ['5', '6', '7', '8'],
 correctAnswer: 1, 
 explanation: '6 × 7 = 42, so 42 ÷ 7 = 6.'
 },
 {
 id: '17',
 text: 'The word problem below is part of Ben\'s homework. <br>"Cathy bought 25 packages of balloons. Each package has 4 balloons. How many balloons did she buy in all?" <br>Which of the following number sentences can Ben use to solve this problem?',
 type: 'multiple-choice',
 options: ['25 × 4 = ___', '25 + 4 = ___', '25 − 4 = ___', '25 ÷ 4 = ___'],
 correctAnswer: 0, 
 explanation: 'There are 25 equal groups of 4 balloons, so multiply: 25 × 4.'
 },
 {
 id: '18',
 text: 'This is a whole cake. <br><img src="images/18-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Mark\'s part of the cake is shaded below. <br><img src="images/18-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>He gave these 5 pieces away. <br><img src="images/18-3.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What fraction of the whole cake did Mark have left?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'The whole cake has 8 pieces. Mark had 7 pieces and gave 5 away, so he had 2 pieces left, or <math><mfrac><mn>2</mn><mn>8</mn></mfrac></math> of the cake.'
 },
 {
 id: '19',
 text: '56.4 − 32.7 = ___',
 type: 'multiple-choice',
 options: ['14.7', '23.7', '24.3', '24.7'],
 correctAnswer: 1, 
 explanation: 'Line up the decimal points and subtract: 56.4 − 32.7 = 23.7.'
 },
 {
 id: '20',
 text: 'This is a whole. <br><img src="images/20-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is <br><img src="images/20-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'The first circle shows <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> and the second shows <math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>. <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> + <math><mfrac><mn>2</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '21',
 text: 'At the craft fair, Tom sold toy trains like the one shown below. <br><img src="images/21.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>He sold each train for $28. How much did Tom make by selling 4 trains?',
 type: 'multiple-choice',
 options: ['$24', '$32', '$112', '$832'],
 correctAnswer: 2, 
 explanation: '4 × $28 = $112.'
 },
 {
 id: '22',
 text: '<br><img src="images/22-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is <br><img src="images/22-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['2.4', '2.0', '1.6', '0.1'],
 correctAnswer: 0, 
 explanation: 'The first group shows 3 ones and 6 tenths, or 3.6. The second shows 1 one and 2 tenths, or 1.2. 3.6 − 1.2 = 2.4.'
 },
 {
 id: '23',
 text: 'Paul wanted to buy a shirt that cost $15. He had $7. How much more did Paul need to buy the shirt?',
 type: 'multiple-choice',
 options: ['$22', '$12', '$8', '$3'],
 correctAnswer: 2, 
 explanation: '$15 − $7 = $8.'
 },
 {
 id: '24',
 text: '7 × 9 = ___',
 type: 'multiple-choice',
 options: ['16', '32', '56', '63'],
 correctAnswer: 3, 
 explanation: '7 × 9 = 63.'
 },
 {
 id: '25',
 text: 'Each small square on the grid is 1 square unit. <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many square units are needed to make the shaded figure shown on the grid?',
 type: 'multiple-choice',
 options: ['5', '7', '10', '14'],
 correctAnswer: 2, 
 explanation: 'The shaded rectangle is 5 squares long and 2 squares tall, so it covers 5 × 2 = 10 square units.'
 },
 {
 id: '26',
 text: 'Martin drew the picture shown below. <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is NOT true about the boy in the picture?',
 type: 'multiple-choice',
 options: ['He is far from the tree.', 'He is close to the tree.', 'He is beside the tree.', 'He is near the tree.'],
 correctAnswer: 0, 
 explanation: 'The boy is standing right next to the tree, so it is NOT true that he is far from the tree.'
 },
 {
 id: '27',
 text: 'Linda and Tom have been friends for 1 year. How many months make 1 year?',
 type: 'multiple-choice',
 options: ['6', '12', '18', '24'],
 correctAnswer: 1, 
 explanation: 'There are 12 months in 1 year.'
 },
 {
 id: '28',
 text: 'Timmy saw this picture of an old television. <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which part of the television is the BEST model of an angle?',
 type: 'multiple-choice',
 options: [
    {url: 'images/29a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'An angle is formed by two rays that meet at a point. The antenna is shaped like a V, which models an angle.'
 },
 {
 id: '29',
 text: 'What shape are the faces of a cube?',
 type: 'multiple-choice',
 options: ['Circle', 'Triangle', 'Square', 'Pentagon'],
 correctAnswer: 2, 
 explanation: 'A cube has 6 faces, and each face is a square.'
 },
 {
 id: '30',
 text: 'In which of the figures below is it possible to draw a line of symmetry?',
 type: 'multiple-choice',
 options: [
    {url: 'images/31a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'A vertical line through the middle of the anchor divides it into two matching halves, so the anchor has a line of symmetry.'
 },
 {
 id: '31',
 text: 'Which of the following is the BEST example of a sphere?',
 type: 'multiple-choice',
 options: [
    {url: 'images/32a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'A sphere is perfectly round like a ball, so the ball is the best example.'
 },
 {
 id: '32',
 text: 'Which 2 shapes below are congruent? <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['L and P', 'M and N', 'N and L', 'P and N'],
 correctAnswer: 1, 
 explanation: 'Congruent shapes have the same size and shape. Triangles M and N are the same size and shape.'
 },
 {
 id: '33',
 text: 'The school principal has a fire drill planned for the time shown on the clock below. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the time shown on the clock?',
 type: 'multiple-choice',
 options: ['12:06', '12:29', '1:06', '1:29'],
 correctAnswer: 1, 
 explanation: 'The hour hand is just past 12 and the minute hand is just before the 6 (30 minutes), so the time is about 12:29.'
 },
 {
 id: '34',
 text: 'Which thermometer shows 78°F?',
 type: 'multiple-choice',
 options: [
    {url: 'images/35a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: '78°F is 2 degrees below 80°F. The thermometer in choice C is filled to just below the 80° mark.'
 },
 {
 id: '35',
 text: 'Look at the pairs of shapes. Which is a pair of rectangles?',
 type: 'multiple-choice',
 options: [
    {url: 'images/36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'A rectangle has 4 sides and 4 right angles. Both shapes in choice H are rectangles.'
 },
 {
 id: '36',
 text: 'The chart below shows the number of some different snacks sold before a movie. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph below shows the correct number sold for each kind of snack?',
 type: 'multiple-choice',
 options: [
    {url: 'images/37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The chart shows candy 15, drink 11, and popcorn 18. Graph A has bars that end at 15, 11, and 18.'
 },
 {
 id: '37',
 text: '<br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Diana\'s birthday is on November 23. Hilary\'s birthday is six days before that. When is Hilary\'s birthday?',
 type: 'multiple-choice',
 options: ['November 6', 'November 17', 'November 18', 'November 24'],
 correctAnswer: 1, 
 explanation: 'Count back 6 days from November 23: 23 − 6 = 17, so November 17.'
 },
 {
 id: '38',
 text: 'The bar graph below shows the favorite breakfast cereals of some students. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many MORE students like Nutty Pops than Yummy O\'s?',
 type: 'multiple-choice',
 options: ['16', '6', '3', '1'],
 correctAnswer: 1, 
 explanation: '16 students like Nutty Pops and 10 like Yummy O\'s. 16 − 10 = 6.'
 },
 {
 id: '39',
 text: 'The chart below shows the number of each kind of kite that are mixed up in a box. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Cathy picks a kite from the box without looking, what kind is it MOST LIKELY to be?',
 type: 'multiple-choice',
 options: [
    {url: 'images/40a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The kite with the star has the greatest number (18) in the box, so it is the most likely to be picked.'
 },
 {
 id: '40',
 text: 'These are the different erasers and pencils Adrian has. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following shows all the different ways that Adrian can combine 1 eraser and 1 pencil?',
 type: 'multiple-choice',
 options: [
    {url: 'images/41a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Each of the 2 erasers can go with each of the 3 pencils, so there are 2 × 3 = 6 combinations. Choice D shows all 6.'
 },
 {
 id: '41',
 text: 'The picture graph below shows the number of sweaters ordered in each size in one week. <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which size of sweater had exactly 15 sweaters ordered?',
 type: 'multiple-choice',
 options: ['Small', 'Medium', 'Large', 'Extra Large'],
 correctAnswer: 0, 
 explanation: 'Each symbol stands for 3 sweaters. 15 ÷ 3 = 5 symbols, and Small has 5 symbols.'
 },
 {
 id: '42',
 text: 'The bar graph below shows the number of miles each member of a club hiked in one week. <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is CLOSEST to the number of miles Paula hiked?',
 type: 'multiple-choice',
 options: ['5', '14', '20', '24'],
 correctAnswer: 3, 
 explanation: 'Paula\'s bar ends a little below the 25 line, which is closest to 24.'
 },
 {
 id: '43',
 text: 'Look at the pattern of numbers shown below. <br>21 &nbsp; 29 &nbsp; 37 &nbsp; 45 &nbsp; ___ <br>If the pattern continues in the same way, what will be the next number?',
 type: 'multiple-choice',
 options: ['46', '52', '53', '63'],
 correctAnswer: 2, 
 explanation: 'Each number is 8 more than the one before: 45 + 8 = 53.'
 },
 {
 id: '44',
 text: 'Look at the pattern of shapes below. <br><img src="images/45.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues in the same way, what will the next shape look like?',
 type: 'multiple-choice',
 options: [
    {url: 'images/45a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/45b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/45c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/45d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The pattern repeats dark gray, white, light gray, short black. The last shape is light gray, so the next shape is the short black one.'
 },
 {
 id: '45',
 text: 'The table below shows the number of vans needed for different numbers of students to go on a camping trip. <br><img src="images/46.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern in the table continues, how many students are able to ride in 6 vans?',
 type: 'multiple-choice',
 options: ['31', '36', '40', '42'],
 correctAnswer: 1, 
 explanation: 'Each van holds 6 students, so 6 vans hold 6 × 6 = 36 students.'
 },
 {
 id: '46',
 text: 'Shauna had some toy cars in a bag. She gave 8 of the cars to Lucas. After that, Shauna had 10 toy cars. How many toy cars were in the bag before Shauna gave any to Lucas?',
 type: 'multiple-choice',
 options: ['2', '9', '12', '18'],
 correctAnswer: 3, 
 explanation: 'Add the cars she gave away to the cars she has left: 8 + 10 = 18.'
 },
 {
 id: '47',
 text: 'Numbers that go into the machine below are changed to a different number using a rule. <br><img src="images/48.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following could be the rule the machine uses?',
 type: 'multiple-choice',
 options: ['Add 1', 'Add 3', 'Add 7', 'Add 10'],
 correctAnswer: 2, 
 explanation: '20 + 7 = 27, 21 + 7 = 28, and 23 + 7 = 30, so the rule is add 7.'
 },
 {
 id: '48',
 text: 'Look at the pattern of shapes below. <br><img src="images/49.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues in the same way, what will be the next shape?',
 type: 'multiple-choice',
 options: [
    {url: 'images/49a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/49b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/49c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/49d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The shapes repeat in the unit circle, square, pentagon, circle, square, triangle. The last unit shown stops after circle, square, so the next shape is the pentagon.'
 },
 {
 id: '49',
 text: 'Look at the pattern of leaves below. <br><img src="images/50.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues in the same way, what will the next leaf in the pattern look like?',
 type: 'multiple-choice',
 options: [
    {url: 'images/50a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The pattern repeats small dark leaf, light gray leaf, large black leaf, white leaf. After the small dark leaf comes the light gray leaf.'
 }
];

// Scaled Score Mapping for Grade 3 Mathematics (2003)
// No raw-to-scaled score table was released with this test, so the Grade 3 Mathematics (2007)
// table is used as an approximation. It maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 84,
  2: 129,
  3: 156,
  4: 176,
  5: 192,
  6: 205,
  7: 216,
  8: 226,
  9: 236,
  10: 244,
  11: 252,
  12: 260,
  13: 267,
  14: 274,
  15: 280,
  16: 287,
  17: 293,
  18: 299,
  19: 304,
  20: 310,
  21: 316,
  22: 321,
  23: 327,
  24: 332,
  25: 338,
  26: 343,
  27: 349,
  28: 354,
  29: 360,
  30: 366,
  31: 371,
  32: 377,
  33: 383,
  34: 389,
  35: 396,
  36: 402,
  37: 409,
  38: 416,
  39: 424,
  40: 432,
  41: 440,
  42: 450,
  43: 460,
  44: 471,
  45: 485,
  46: 500,
  47: 520,
  48: 547,
  49: 592,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 25 of the released test required measuring with a physical ruler and was removed.
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

// Independent Results Manager for Grade 3 Math
(function() {
  'use strict';
  
  console.log(`Grade 3 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 3 Math`);
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
        testType: 'Grade 3 Mathematics (2003)'
      };
      
      console.log(`Saving Grade 3 Math result: ${rawScore}/${sampleQuestions.length} → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 3 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 3 Mathematics (2003)';
        updated = true;
        console.log(`Enhanced Grade 3 Math result ${index + 1}: ${result.rawScore}/${sampleQuestions.length} → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 3 Math results saved');
      
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
            testType: 'Grade 3 Mathematics (2003)'
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
    console.log('Initializing Grade 3 Math independent results system');
    
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
    
    console.log('Grade 3 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();