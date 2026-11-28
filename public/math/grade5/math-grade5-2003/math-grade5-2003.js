window.TEST_IDENTIFIER = 'math_grade5_2003';

const sampleQuestions = [
 {
 id: '1',
 text: '143,065 − 7,183 = ___',
 type: 'multiple-choice',
 options: ['135,122', '135,882', '144,122', '144,248'],
 correctAnswer: 1, 
 explanation: '143,065 − 7,183 = 135,882.'
 },
 {
 id: '2',
 text: 'The table below shows the number of phone calls a radio station received each week for the last month. <br><img src="images/2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is the <i>best estimate</i> of the total number of calls received in the four-week period?',
 type: 'multiple-choice',
 options: ['15,000', '20,000', '25,000', '30,000'],
 correctAnswer: 2, 
 explanation: 'Round each number to the nearest thousand: 6,000 + 8,000 + 4,000 + 7,000 = 25,000.'
 },
 {
 id: '3',
 text: '89 × 47 = ___',
 type: 'multiple-choice',
 options: ['1,216', '4,183', '5,443', '8,899'],
 correctAnswer: 1, 
 explanation: '89 × 47 = 89 × 40 + 89 × 7 = 3,560 + 623 = 4,183.'
 },
 {
 id: '4',
 text: 'Tyrone has $20 to spend at the basketball game. He must use part of that amount to pay for his ticket. <br><img src="images/4.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the ticket costs $15.95, which of the following would he also be able to buy?',
 type: 'multiple-choice',
 options: [
    {url: 'images/4a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/4b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/4c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/4d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Tyrone has $20.00 − $15.95 = $4.05 left. The hot dog and drink cost $2.50 + $1.25 = $3.75, which is less than $4.05. The other pairs cost more than $4.05.'
 },
 {
 id: '5',
 text: 'Mr. Lang planted 35 rows of corn. There are 15 corn plants in each row. How many corn plants is that in all?',
 type: 'multiple-choice',
 options: ['455', '510', '525', '615'],
 correctAnswer: 2, 
 explanation: '35 × 15 = 525 corn plants.'
 },
 {
 id: '6',
 text: '8 <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math> − <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['8 <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>', '8 <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>', '7 <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>', '7 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'Use a common denominator of 10: 8 <math><mfrac><mn>8</mn><mn>10</mn></mfrac></math> − <math><mfrac><mn>5</mn><mn>10</mn></mfrac></math> = 8 <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>.'
 },
 {
 id: '7',
 text: '44.87 ÷ 7 = ___',
 type: 'multiple-choice',
 options: ['6.41', '0.641', '0.6041', '0.0641'],
 correctAnswer: 0, 
 explanation: '44.87 ÷ 7 = 6.41. Check: 6.41 × 7 = 44.87.'
 },
 {
 id: '8',
 text: '495,208 + 26,984 = ___',
 type: 'multiple-choice',
 options: ['411,182', '511,192', '522,192', '622,182'],
 correctAnswer: 2, 
 explanation: '495,208 + 26,984 = 522,192.'
 },
 {
 id: '9',
 text: 'This is 1. <br><img src="images/9-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is <br><img src="images/9-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'The whole is divided into 5 equal parts. The first model shows <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math> and the second shows <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>. <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math> − <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>.'
 },
 {
 id: '10',
 text: '4,734 ÷ 18 = ___',
 type: 'multiple-choice',
 options: ['116', '263', '277', '303'],
 correctAnswer: 1, 
 explanation: '18 × 263 = 4,734, so 4,734 ÷ 18 = 263.'
 },
 {
 id: '11',
 text: 'On field day, Nancy jumped 4 <math><mfrac><mn>7</mn><mn>12</mn></mfrac></math> feet. Abe jumped 3 <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> feet. How much farther did Nancy jump than Abe?',
 type: 'multiple-choice',
 options: ['2 feet', '1 <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> feet', '1 <math><mfrac><mn>5</mn><mn>12</mn></mfrac></math> feet', '<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math> feet'],
 correctAnswer: 2, 
 explanation: 'Rewrite 3 <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> as 3 <math><mfrac><mn>2</mn><mn>12</mn></mfrac></math>. Then 4 <math><mfrac><mn>7</mn><mn>12</mn></mfrac></math> − 3 <math><mfrac><mn>2</mn><mn>12</mn></mfrac></math> = 1 <math><mfrac><mn>5</mn><mn>12</mn></mfrac></math> feet.'
 },
 {
 id: '12',
 text: 'This is 1. <br><img src="images/12-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is <br><img src="images/12-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['0.63', '0.67', '0.73', '0.77'],
 correctAnswer: 1, 
 explanation: 'The first model shows 0.96 and the second model shows 0.29. 0.96 − 0.29 = 0.67.'
 },
 {
 id: '13',
 text: 'Which of the following makes the statement below true? <br>___ < 1,390,876',
 type: 'multiple-choice',
 options: ['1,409,540', '1,395,760', '1,398,001', '1,289,799'],
 correctAnswer: 3, 
 explanation: '1,289,799 has 2 hundred thousands, and 1,390,876 has 3 hundred thousands, so 1,289,799 < 1,390,876.'
 },
 {
 id: '14',
 text: 'A fraction of the group of students below is wearing a dark shirt. <br><img src="images/14.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is shaded to represent a fraction with the same value?',
 type: 'multiple-choice',
 options: [
    {url: 'images/14a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: '6 of the 10 students wear dark shirts, which is <math><mfrac><mn>6</mn><mn>10</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>. Choice J has 3 of 5 parts shaded.'
 },
 {
 id: '15',
 text: 'A fraction of the candles below is lit. <br><img src="images/15.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is shaded to represent a decimal with the same value?',
 type: 'multiple-choice',
 options: [
    {url: 'images/15a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: '1 of the 2 candles is lit, which is <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> or 0.5. Choice C has 5 of 10 parts shaded, which is 0.5.'
 },
 {
 id: '16',
 text: 'On Saturday, Lisa recorded four and five-tenths inches of rain. Which of the following shows that amount written in numerals?',
 type: 'multiple-choice',
 options: ['0.45', '4.05', '4.5', '45.0'],
 correctAnswer: 2, 
 explanation: 'Four and five-tenths is 4 + 0.5 = 4.5.'
 },
 {
 id: '17',
 text: 'Riley read that the population of Virginia in 1790 was 747,610. What is 747,610 rounded to the nearest hundred thousand people?',
 type: 'multiple-choice',
 options: ['700,000', '747,000', '750,000', '800,000'],
 correctAnswer: 0, 
 explanation: 'The hundred thousands digit is 7 and the next digit is 4, which is less than 5, so round down to 700,000.'
 },
 {
 id: '18',
 text: 'The United States Mint lists the standard weight of a United States dime as 2.268 grams. What is the value of the 8 in that number?',
 type: 'multiple-choice',
 options: ['Eight thousandths', 'Eight hundredths', 'Eight tenths', 'Eight'],
 correctAnswer: 0, 
 explanation: 'In 2.268, the 8 is in the third place after the decimal point, the thousandths place.'
 },
 {
 id: '19',
 text: 'What number goes in the box to make the statement shown below true? <br><math><mfrac><mn>1</mn><mn>5</mn></mfrac></math> = <math><mfrac><mn>___</mn><mn>10</mn></mfrac></math>',
 type: 'multiple-choice',
 options: ['1', '2', '5', '10'],
 correctAnswer: 1, 
 explanation: 'Multiply the numerator and denominator by 2: <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>10</mn></mfrac></math>.'
 },
 {
 id: '20',
 text: 'This figure represents the number 1. <br><img src="images/20-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following numbers is represented by the group of figures below? <br><img src="images/20-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['0.157', '0.175', '0.517', '0.571'],
 correctAnswer: 0, 
 explanation: 'The large cube is 1. Each flat is 0.1, each rod is 0.01, and each small cube is 0.001. There is 1 flat, 5 rods, and 7 small cubes: 0.1 + 0.05 + 0.007 = 0.157.'
 },
 {
 id: '21',
 text: 'Laura connected points Y and Z to make one side of an angle. Which other point should she connect to point Y in order to make a 28° angle? <br><img src="images/21.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['K', 'L', 'M', 'N'],
 correctAnswer: 3, 
 explanation: 'A 28° angle is a small acute angle, less than half of a right angle. Of the four points, only N makes a small angle with ray YZ.'
 },
 {
 id: '22',
 text: 'Which unit would <i>most often</i> be used to determine the mass of one piece of notebook paper? <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Kilogram', 'Gram', 'Meter', 'Liter'],
 correctAnswer: 1, 
 explanation: 'A piece of paper has a very small mass, so grams are the best unit.'
 },
 {
 id: '23',
 text: 'When Mr. Murphy pulled into the parking garage to park his car, the time stamped on his ticket was 10:12 a.m. The time when he left the garage that afternoon was 5:43 p.m. What length of time was Mr. Murphy\'s car in the parking garage? <br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['7 hr 31 min', '7 hr 55 min', '15 hr 31 min', '15 hr 55 min'],
 correctAnswer: 0, 
 explanation: 'From 10:12 a.m. to 5:12 p.m. is 7 hours. From 5:12 p.m. to 5:43 p.m. is 31 minutes. Total: 7 hr 31 min.'
 },
 {
 id: '24',
 text: 'What is the area of the rectangular poster shown below? <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['50 sq in.', '80 sq in.', '100 sq in.', '600 sq in.'],
 correctAnswer: 3, 
 explanation: 'Area = length × width = 30 × 20 = 600 square inches.'
 },
 {
 id: '25',
 text: 'In the figure below, point R is the center of the circle. <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is a chord of the circle?',
 type: 'multiple-choice',
 options: ['<span style="text-decoration: overline">ST</span>', '<span style="text-decoration: overline">PR</span>', '<span style="text-decoration: overline">MR</span>', '<span style="text-decoration: overline">RN</span>'],
 correctAnswer: 0, 
 explanation: 'A chord is a segment with both endpoints on the circle. S and T are both on the circle. The other segments end at the center, R.'
 },
 {
 id: '26',
 text: 'Use your ruler as a straightedge to help you answer this question. On the grid below, connect point K to point M, then connect point M to point S. What kind of angle has been formed? <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Acute', 'Right', 'Obtuse', 'Straight'],
 correctAnswer: 0, 
 explanation: 'Angle KMS is smaller than a square corner, so it is acute.'
 },
 {
 id: '27',
 text: 'Which <i>best describes</i> the location of the duck pond in the figure below? <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['(5, 6)', '(6, 7)', '(7, 0)', '(7, 6)'],
 correctAnswer: 3, 
 explanation: 'The duck pond is 7 units to the right and 6 units up, so it is at (7, 6).'
 },
 {
 id: '28',
 text: 'Which of the following includes ray AB and ray AC?',
 type: 'multiple-choice',
 options: [
    {url: 'images/29a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Choice C shows two rays that both start at point A, one going through B and one going through C.'
 },
 {
 id: '29',
 text: 'On the map below, which two streets are best described as parallel? <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Main St and Naples St', 'Main St and Rose St', 'Rose St and Evans St', 'Naples St and Evans St'],
 correctAnswer: 1, 
 explanation: 'Main Street and Rose Street run in the same direction and never cross, so they are parallel.'
 },
 {
 id: '30',
 text: 'Tina used 1 liter of chicken broth to make her special rice dish. This amount of chicken broth is <i>closest</i> to —',
 type: 'multiple-choice',
 options: ['1 ounce', '1 cup', '1 pint', '1 quart'],
 correctAnswer: 3, 
 explanation: 'A liter is a little more than a quart, so 1 liter is closest to 1 quart.'
 },
 {
 id: '31',
 text: 'All the sections on the spinner below are the same size. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the spinner is spun one time, what is the probability that the arrow will land on a space marked Red?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'There are 6 equal sections and 2 of them are Red, so the probability is <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>.'
 },
 {
 id: '32',
 text: 'Mr. Billings rents boats at Marsh Lake. The line graph below shows how the number of boats being used changed over a three-hour period. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>closest</i> to the number of boats that were being used at 10 a.m.?',
 type: 'multiple-choice',
 options: ['5', '16', '21', '26'],
 correctAnswer: 3, 
 explanation: 'At 10 a.m., the point is a little above 25, at about 26.'
 },
 {
 id: '33',
 text: 'The table below shows the number of each kind of candle a shop sold on Saturday. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following shows this information correctly graphed?',
 type: 'multiple-choice',
 options: [
    {url: 'images/35a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Graph B has a labeled, evenly spaced scale and bars at 35, 48, 39, 46, and 27 for the correct kinds of candles.'
 },
 {
 id: '34',
 text: 'In Sheila\'s class, there are 5 students with red hair, 8 students with blond hair, and 9 students with brown hair. Which of the following questions about these students could you use probability to solve?',
 type: 'multiple-choice',
 options: ['How many students are in Sheila\'s class all together?', 'If the teacher picks 1 student at random, what color hair is that student most likely to have?', 'How many more students have brown hair than red hair?', 'If the teacher buys 2 pencils for each student, how many pencils will she buy?'],
 correctAnswer: 1, 
 explanation: 'Probability describes how likely something is to happen. Picking a student at random is a chance event.'
 },
 {
 id: '35',
 text: 'This lists the number of points Cassie\'s team scored in each of their games. <br>17 &nbsp; 22 &nbsp; 39 &nbsp; 26 &nbsp; 25 <br>33 &nbsp; 37 &nbsp; 43 &nbsp; 18 &nbsp; 39 <br>29 &nbsp; 50 &nbsp; 41 &nbsp; 24 &nbsp; 48 <br>Which of the following stem-and-leaf plots shows this same information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'In order, the scores are 17, 18, 22, 24, 25, 26, 29, 33, 37, 39, 39, 41, 43, 48, 50. Plot A shows all 15 scores.'
 },
 {
 id: '36',
 text: 'The table below shows the number of blocks Susan walked each day last week. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the mean (average) number of blocks she walked each day?',
 type: 'multiple-choice',
 options: ['15', '17', '18', '21'],
 correctAnswer: 1, 
 explanation: '21 + 18 + 15 + 18 + 13 = 85 blocks. 85 ÷ 5 days = 17.'
 },
 {
 id: '37',
 text: 'On Saturday, Joseph compared the price of one gallon of regular gasoline at five different locations. The graph below shows the prices he recorded. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>closest</i> to the price of one gallon of gasoline at location #5?',
 type: 'multiple-choice',
 options: ['$1.82', '$1.75', '$1.53', '$1.08'],
 correctAnswer: 0, 
 explanation: 'The bar for location #5 ends a little above $1.80, at about $1.82.'
 },
 {
 id: '38',
 text: 'Everyone in art class is making a special plate. The table below shows the different choices of shape, design, and color that can be used. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following tree diagrams shows all the different kinds of plates that can be designed using 1 shape, 1 design, and 1 color?',
 type: 'multiple-choice',
 options: [
    {url: 'images/40a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'There are 2 shapes × 2 designs × 2 colors = 8 combinations. Tree diagram J shows all 8.'
 },
 {
 id: '39',
 text: 'The picture below shows what happened when different numbers were put into the same number machine. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which could be the rule used in this number machine?',
 type: 'multiple-choice',
 options: ['Multiply by 3, then subtract 5', 'Multiply by 2, then add 1', 'Add 9', 'Subtract 4'],
 correctAnswer: 1, 
 explanation: '8 × 2 + 1 = 17, 6 × 2 + 1 = 13, and 3 × 2 + 1 = 7.'
 },
 {
 id: '40',
 text: 'Which <i>best describes</i> the location of point Z on the number line shown below? <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['89', '90', '92', '93'],
 correctAnswer: 3, 
 explanation: 'The marks from 95 to 99 show that each tick mark is 1. Point Z is 2 marks to the left of 95, so it is at 93.'
 },
 {
 id: '41',
 text: 'Each person running in a race will get a card with a number on it. Look at the pattern of numbers on the cards below. <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues, what number will be on the next card?',
 type: 'multiple-choice',
 options: ['90', '93', '95', '97'],
 correctAnswer: 2, 
 explanation: 'The differences are +2, +3, +4, +5, so the next difference is +6: 89 + 6 = 95.'
 },
 {
 id: '42',
 text: 'Iris is writing music for a video game. The picture below shows how a pattern of 5 notes repeats while the game is played. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues, what kind of note will be the 12th note played?',
 type: 'multiple-choice',
 options: [
    {url: 'images/44a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The pattern has 5 notes. Notes 11 and 12 start the third repeat, so the 12th note is the same as note 2, a quarter note.'
 },
 {
 id: '43',
 text: 'Mr. Cooper is ordering some books from a catalog. The total cost includes the cost of the book plus an additional charge for shipping. The table below shows how the total cost changes as the number of books ordered increases. <br><img src="images/45.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the pattern shown in the table, which of the following rules could Mr. Cooper use to determine the total cost for any number of books?',
 type: 'multiple-choice',
 options: ['Multiply the number of books by $9.25', 'Multiply the number of books by $10.50', 'Multiply the number of books by $10 and add 50¢ for shipping', 'Multiply the number of books by $8 and add $2.50 for shipping'],
 correctAnswer: 3, 
 explanation: 'The total goes up $8 for each book. Check: 1 × $8 + $2.50 = $10.50 and 2 × $8 + $2.50 = $18.50.'
 },
 {
 id: '44',
 text: 'A rule is used to determine the number of blocks in each level of the figure shown below. <br><img src="images/46-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The table below shows the number of blocks that are in each level of the figure above. <br><img src="images/46-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Using this rule, how many blocks will be needed to make Level 10?',
 type: 'multiple-choice',
 options: ['20', '40', '100', '1,000'],
 correctAnswer: 2, 
 explanation: 'Each level has the level number times itself: 1 × 1, 2 × 2, 3 × 3, 4 × 4. Level 10 needs 10 × 10 = 100 blocks.'
 },
 {
 id: '45',
 text: 'Bella made 3 times as many cupcakes as Eric. If <i>E</i> represents the number of cupcakes Eric made, which of the following could be used to find the number of cupcakes Bella made?',
 type: 'multiple-choice',
 options: ['<i>E</i> + 3 = ?', '<i>E</i> × 3 = ?', '<i>E</i> ÷ 3 = ?', '<i>E</i> − 3 = ?'],
 correctAnswer: 1, 
 explanation: '"3 times as many" means multiply Eric\'s number by 3: E × 3.'
 },
 {
 id: '46',
 text: 'Look at the pattern of shapes shown below. <br><img src="images/48.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues, what will the next two shapes look like?',
 type: 'multiple-choice',
 options: [
    {url: 'images/48a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/48b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/48c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/48d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The pattern repeats: tall rectangle, square at the top, tall rectangle, square at the bottom. The last shape shown is a tall rectangle after a square at the bottom, so next come a square at the top and then a tall rectangle.'
 },
 {
 id: '47',
 text: 'The picture below shows how Kenta plans to create a tile border around the edge of a table. <br><img src="images/49.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern is continued all the way around the table, how many tiles with dots in the center will be needed in all?',
 type: 'multiple-choice',
 options: ['8', '9', '11', '12'],
 correctAnswer: 0, 
 explanation: 'The border has 24 tiles, and every third tile has a dot. 24 ÷ 3 = 8 tiles with dots.'
 },
 {
 id: '48',
 text: 'Pat is using a rule to make the list of numbers shown below. <br>48, 39, 30, 21, 12, ___ <br>If she continues using the same rule, what will be the next number in the list?',
 type: 'multiple-choice',
 options: ['11', '9', '7', '3'],
 correctAnswer: 3, 
 explanation: 'The rule is subtract 9: 12 − 9 = 3.'
 }
];

// Scaled Score Mapping for Grade 5 Mathematics (2003)
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
  // Question 24 of the released test required measuring with a physical ruler and was removed.
  // Question 31 of the released test required measuring with a physical ruler and was removed.
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
        testType: 'Grade 5 Mathematics (2003)'
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
        result.testType = 'Grade 5 Mathematics (2003)';
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
            testType: 'Grade 5 Mathematics (2003)'
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