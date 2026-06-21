window.TEST_IDENTIFIER = 'math_grade4_2010';

const sampleQuestions = [
 {
 id: '1',
 text: 'The difference between 76,423 and 29,876 is best described as closest to —',
 type: 'multiple-choice',
 options: ['60,000', '50,000', '40,000', '30,000'],
 correctAnswer: 1,
 explanation: '76,423 − 29,876 = 46,547, which is closest to 50,000.'
 },
 {
 id: '2',
 text: 'Which is closest to 53 × 18?',
 type: 'multiple-choice',
 options: ['100', '600', '1,000', '1,800'],
 correctAnswer: 2,
 explanation: '53 × 18 = 954. Rounding to 50 × 20 gives 1,000, the closest estimate.'
 },
 {
 id: '3',
 text: 'What is the sum of the fractions shown by the shaded parts of the models? <br><img src="images/3.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> ',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>10</mn><mn>15</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>15</mn></mfrac></math>'],
 correctAnswer: 2,
 explanation: 'Model 1 shows <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> and Model 2 shows <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>. Since <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>10</mn></mfrac></math>, the sum is <math><mfrac><mn>4</mn><mn>10</mn></mfrac></math> + <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math> = <math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>.'
 },
 {
 id: '4',
 text: '4.2 − 2.86 = ___?',
 type: 'multiple-choice',
 options: ['1.34', '2.66', '3.28', '7.06'],
 correctAnswer: 0,
 explanation: 'Align the decimals: 4.20 − 2.86 = 1.34.'
 },
 {
 id: '5',
 text: 'The difference of 743 − 239 is best described as a little more than —',
 type: 'multiple-choice',
 options: ['200', '300', '400', '500'],
 correctAnswer: 3,
 explanation: '743 − 239 = 504, which is a little more than 500.'
 },
 {
 id: '6',
 text: '138 ÷ 6 = ___?',
 type: 'multiple-choice',
 options: ['21', '23', '24', '28'],
 correctAnswer: 1,
 explanation: '138 ÷ 6 = 23.'
 },
 {
 id: '7',
 text: '3.76 + 2.99 = ___?',
 type: 'multiple-choice',
 options: ['5.65', '5.75', '6.65', '6.75'],
 correctAnswer: 3,
 explanation: '3.76 + 2.99 = 6.75.'
 },
 {
 id: '8',
 text: 'Which is closest to 82 ÷ 7?',
 type: 'multiple-choice',
 options: ['10', '20', '30', '40'],
 correctAnswer: 0,
 explanation: '82 ÷ 7 ≈ 11.7, which is closest to 10.'
 },
 {
 id: '9',
 text: 'What is the difference between <math><mfrac><mn>6</mn><mn>7</mn></mfrac></math> and <math><mfrac><mn>2</mn><mn>7</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>8</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>14</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>0</mn></mfrac></math>'],
 correctAnswer: 2,
 explanation: 'With like denominators, subtract the numerators: <math><mfrac><mn>6</mn><mn>7</mn></mfrac></math> − <math><mfrac><mn>2</mn><mn>7</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>7</mn></mfrac></math>.'
 },
 {
 id: '10',
 text: 'Ms. Kraft bought 4 bags of rocks for her garden. Each bag contained 107 rocks. What is the total number of rocks she bought? <br>107 × 4 = ___?',
 type: 'multiple-choice',
 options: ['408', '424', '428', '468'],
 correctAnswer: 2,
 explanation: '107 × 4 = 428.'
 },
 {
 id: '11',
 text: 'Kim and José shared one whole pizza. Kim ate <math><mfrac><mn>4</mn><mn>6</mn></mfrac></math> of the pizza, and José ate <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math> of the pizza. How much of the pizza was eaten?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>11</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 3,
 explanation: '<math><mfrac><mn>4</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>8</mn><mn>12</mn></mfrac></math>, so the total is <math><mfrac><mn>8</mn><mn>12</mn></mfrac></math> + <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math> = <math><mfrac><mn>11</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '12',
 text: '71,965 − 42,749 = ___?',
 type: 'multiple-choice',
 options: ['29,216', '31,224', '39,124', '39,226'],
 correctAnswer: 0,
 explanation: '71,965 − 42,749 = 29,216.'
 },
 {
 id: '13',
 text: 'The fraction bars each show one whole divided into fractional parts. <br><img src="images/13.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which is true?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> > <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> > <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'],
 correctAnswer: 3,
 explanation: 'The fraction bars show that <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> covers more than <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, so <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> > <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '14',
 text: 'How is 75,054 written in words?',
 type: 'multiple-choice',
 options: ['Seventy-five, fifty-four', 'Seventy-five hundred, fifty-four', 'Seventy-five thousand, fifty-four', 'Seventy-five thousand, five hundred four'],
 correctAnswer: 2,
 explanation: '75,054 is read as seventy-five thousand, fifty-four.'
 },
 {
 id: '15',
 text: 'Which statement is true?',
 type: 'multiple-choice',
 options: ['5,092 > 5,902', '4,958 < 9,350', '9,350 < 4,958', '6,785 = 6,857'],
 correctAnswer: 1,
 explanation: '4,958 is less than 9,350, so 4,958 < 9,350 is the true statement.'
 },
 {
 id: '16',
 text: 'What is 265,200 rounded to the nearest hundred thousand?',
 type: 'multiple-choice',
 options: ['200,000', '265,000', '270,000', '300,000'],
 correctAnswer: 3,
 explanation: 'The digit in the ten-thousands place is 6, so 265,200 rounds up to 300,000.'
 },
 {
 id: '17',
 text: 'The fraction strips shown are each divided into equal parts. <br><img src="images/17.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which fraction has the least value?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 1,
 explanation: 'With the same numerator, the fraction with the largest denominator is the smallest, so <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math> has the least value.'
 },
 {
 id: '18',
 text: 'Which of the following numbers will round to 26?',
 type: 'multiple-choice',
 options: ['25.3', '25.5', '26.7', '27.1'],
 correctAnswer: 1,
 explanation: '25.5 rounds up to 26. The other values round to 25 or 27.'
 },
 {
 id: '19',
 text: 'This model is shaded to represent the number 1. <br><img src="images/19-1.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>The model shown is shaded to represent part of 1. <br><img src="images/19-2.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which decimal best represents the shaded part of this model?',
 type: 'multiple-choice',
 options: ['0.42', '0.042', '4.2', '42'],
 correctAnswer: 0,
 explanation: 'The model shows 42 of 100 equal parts shaded, which is written as 0.42.'
 },
 {
 id: '20',
 text: 'This model represents <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>. <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which model represents a fraction that is equivalent to <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: [
    {url: 'images/20a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0,
 explanation: 'An equivalent fraction shades the same portion of the whole; <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>.'
 },
 {
 id: '21',
 text: 'Which pair of figures appears to be congruent?',
 type: 'multiple-choice',
 options: [
    {url: 'images/21a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0,
 explanation: 'Congruent figures have the same size and shape.'
 },
 {
 id: '22',
 text: 'A puppy weighs 2 pounds. What is the puppy\'s weight in ounces?',
 type: 'multiple-choice',
 options: ['32 ounces', '20 ounces', '16 ounces', '8 ounces'],
 correctAnswer: 0,
 explanation: '1 pound = 16 ounces, so 2 pounds = 32 ounces.'
 },
 {
 id: '23',
 text: 'The drawing shows lines a, b, j, and k. <br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which of the following pairs of lines appear to be perpendicular?',
 type: 'multiple-choice',
 options: ['Lines a and j', 'Lines b and j', 'Lines a and k', 'Lines a and b'],
 correctAnswer: 2,
 explanation: 'Perpendicular lines meet to form a right angle; lines a and k form a right angle.'
 },
 {
 id: '24',
 text: 'A paper clip is 2.5 centimeters long. Which is closest to the length, in inches, of the paper clip?',
 type: 'multiple-choice',
 options: ['1', '2', '5', '12'],
 correctAnswer: 0,
 explanation: '1 inch ≈ 2.54 centimeters, so 2.5 centimeters is closest to 1 inch.'
 },
 {
 id: '25',
 text: 'Which measurement is closest to the volume of liquid in this beaker? <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> ',
 type: 'multiple-choice',
 options: ['10 milliliters', '20 milliliters', '30 milliliters', '40 milliliters'],
 correctAnswer: 2,
 explanation: 'The liquid level is closest to the 30 milliliter mark on the beaker.'
 },
 {
 id: '26',
 text: 'Which is true of a square?',
 type: 'multiple-choice',
 options: ['It has no sides of equal length.', 'It has 4 curved sides.', 'It has only 1 pair of parallel sides.', 'It has 4 right angles.'],
 correctAnswer: 3,
 explanation: 'A square has four right angles. Its four sides are equal and it has two pairs of parallel sides.'
 },
 /*
 {
 id: '27',
 text: 'Use your centimeter (cm) ruler to answer this question. Which is closest to the perimeter of the figure shown? <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> ',
 type: 'multiple-choice',
 options: ['21 cm', '18 cm', '12 cm', '9 cm'],
 correctAnswer: 0,
 explanation: 'Adding the measured side lengths gives a perimeter closest to 21 cm.'
 },
 */
 {
 id: '28',
 text: 'What is the maximum number of line segments shown in this drawing? <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> ',
 type: 'multiple-choice',
 options: ['4', '5', '10', '11'],
 correctAnswer: 2,
 explanation: 'With 5 labeled points, the number of distinct segments connecting pairs of points is 10.'
 },
 /*
 {
 id: '29',
 text: 'Use your inch ruler to help you answer this question. Which is closest to the length of this notepad? <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> ',
 type: 'multiple-choice',
 options: ['4 inches', '4 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> inches', '5 inches', '5 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> inches'],
 correctAnswer: 1,
 explanation: 'Measured against the ruler, the notepad is closest to 4 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> inches.'
 },
 */
 {
 id: '30',
 text: 'The shapes shown are numbered 1 through 4. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which two shapes appear to be congruent?',
 type: 'multiple-choice',
 options: ['1 and 2', '2 and 3', '3 and 4', '4 and 1'],
 correctAnswer: 3,
 explanation: 'Shapes 4 and 1 have the same size and shape, so they are congruent.'
 },
 {
 id: '31',
 text: 'Kenny measured the mass of a candle on a balance scale. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which appears to be the mass of the candle pictured?',
 type: 'multiple-choice',
 options: ['500 g', '550 g', '600 g', '650 g'],
 correctAnswer: 3,
 explanation: 'The masses balancing the candle total 500 + 100 + 50 = 650 grams.'
 },
 {
 id: '32',
 text: 'Which ordered pair would have to represent point D in order to complete rectangle ABCD? <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> ',
 type: 'multiple-choice',
 options: ['(5, 2)', '(4, 2)', '(2, 5)', '(2, 4)'],
 correctAnswer: 0,
 explanation: 'To complete rectangle ABCD, point D lines up below B and across from C at (5, 2).'
 },
 {
 id: '33',
 text: 'Gary filled his 10,000-gallon swimming pool with water from a garden hose. He started filling the pool at 10:00 A.M. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Gary continues to add water to the pool at this same rate. Which is closest to the number of gallons of water that will be in the pool at 2:00 P.M. on the same day?',
 type: 'multiple-choice',
 options: ['300 gallons', '1,200 gallons', '1,500 gallons', '1,600 gallons'],
 correctAnswer: 1,
 explanation: 'The graph shows a steady rate of about 300 gallons per hour. Over 4 hours that is about 1,200 gallons.'
 },
 {
 id: '34',
 text: 'A pouch contains 5 blue marbles, 2 red marbles, 1 green marble, and 4 pink marbles. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>What is the probability that Jorge will select, without looking, a red marble on the first try?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>10</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 3,
 explanation: 'There are 2 red marbles out of 12 total, so the probability is <math><mfrac><mn>2</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '35',
 text: 'This bar graph shows the number of letters written by students in four third-grade classrooms. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which question cannot be answered using the information in this bar graph?',
 type: 'multiple-choice',
 options: ['Which two classrooms combined wrote 35 letters?', 'Which classroom wrote the least number of letters?', 'Which classroom wrote the greatest number of letters?', 'Which month did Mr. Williams\' class write the most letters?'],
 correctAnswer: 3,
 explanation: 'The graph shows letter totals by classroom, not by month, so the question about which month cannot be answered.'
 },
 {
 id: '36',
 text: 'The table shows the number of cans of different-colored paint in Mr. Eggan\'s garage. Each can is the same size. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Mr. Eggan chooses one paint can without looking. What is the probability the first can chosen will be a can of white paint?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 1,
 explanation: 'There are 4 white cans out of 7 total cans (3 peach + 4 white), so the probability is <math><mfrac><mn>4</mn><mn>7</mn></mfrac></math>.'
 },
 {
 id: '37',
 text: 'Margaret bought a box of 12 doughnuts. It is impossible for the doughnut picked from the box to be glazed. Which of the following is the number of glazed doughnuts in the box?',
 type: 'multiple-choice',
 options: ['0', '1', '2', '3'],
 correctAnswer: 0,
 explanation: 'An impossible event has a probability of 0, so there are 0 glazed doughnuts in the box.'
 },
 {
 id: '38',
 text: 'This table shows the number of people in Lou\'s Restaurant at different times during the same day. <br><center>12:00 → 35 people, 3:00 → 10 people, 6:00 → 50 people, 9:00 → 45 people</center><br>Which line graph correctly shows this information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2,
 explanation: 'The correct line graph plots 35 at 12:00, 10 at 3:00, 50 at 6:00, and 45 at 9:00.'
 },
 {
 id: '39',
 text: 'A box contains 45 bags of cheese popcorn and 5 bags of caramel popcorn. Which of the following best describes the chances that the first bag of popcorn taken from the box will be caramel popcorn?',
 type: 'multiple-choice',
 options: ['Impossible', 'Unlikely, but not impossible', 'Likely, but not certain', 'Certain'],
 correctAnswer: 1,
 explanation: 'Only 5 of the 50 bags are caramel, so picking caramel is unlikely but still possible.'
 },
 {
 id: '40',
 text: 'Taylor put the following fruit stickers of the same size and shape in a bag: 2 apple stickers, 3 orange stickers, 1 pear sticker, and 2 plum stickers. Taylor will pick one fruit sticker from the bag without looking. What is the probability the sticker will be a pear sticker?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 0,
 explanation: 'There is 1 pear sticker out of 8 total stickers, so the probability is <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '41',
 text: 'Which number correctly completes this number sentence? <br>(45 + 14) + 17 = (14 + 45) + (___)',
 type: 'multiple-choice',
 options: ['59', '45', '17', '14'],
 correctAnswer: 2,
 explanation: 'Because 45 + 14 equals 14 + 45, the missing number must be 17 to keep both sides equal.'
 },
 {
 id: '42',
 text: 'When four members of a basketball team stand in a certain order as shown, the numbers on their uniforms make a pattern. <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which rule describes this pattern?',
 type: 'multiple-choice',
 options: ['Add 8', 'Multiply by 9', 'Divide by 6', 'Subtract 12'],
 correctAnswer: 3,
 explanation: 'The uniform numbers decrease by 12 each time (54, 42, 30, 18), so the rule is subtract 12.'
 },
 {
 id: '43',
 text: 'Which number sentence is true?',
 type: 'multiple-choice',
 options: ['(29 + 16) − 3 = (16 − 29) + 3', '(15 + 19) + 24 = 15 + (19 + 24)', '(33 + 18) + 2 = (18 − 33) + 2', '(21 − 7) + 6 = (7 + 21) + 6'],
 correctAnswer: 1,
 explanation: 'The associative property of addition lets you regroup the addends without changing the sum: (15 + 19) + 24 = 15 + (19 + 24).'
 },
 {
 id: '44',
 text: 'This table shows the number of minutes Lee practiced tennis during 4 weeks. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>If the pattern shown in the table continues in the same way, how many minutes will Lee practice during the 6th week?',
 type: 'multiple-choice',
 options: ['365', '345', '300', '255'],
 correctAnswer: 2,
 explanation: 'The minutes increase by 45 each week (75, 120, 165, 210). Week 5 is 255 and week 6 is 300.'
 },
 {
 id: '45',
 text: 'Which number sentence is not true?',
 type: 'multiple-choice',
 options: ['8 × (2 × 3) = (8 × 2) × 3', '(5 × 2) × 1 = 5 × (2 × 4)', '(5 + 5) + 2 = 5 + (5 + 2)', '(6 + 5) + 3 = 6 + (5 + 3)'],
 correctAnswer: 1,
 explanation: '(5 × 2) × 1 = 10, but 5 × (2 × 4) = 40, so this sentence is not true. The others show the associative property.'
 },
 {
 id: '46',
 text: 'The numbers on these mailboxes form a pattern. <br><img src="images/46.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>This pattern continues in the same way. Which number will be on the next mailbox?',
 type: 'multiple-choice',
 options: ['202', '200', '199', '197'],
 correctAnswer: 2,
 explanation: 'The numbers decrease by 4 (215, 211, 207, 203), so the next mailbox is 203 − 4 = 199.'
 },
 {
 id: '47',
 text: 'Harry saw these columns being built for a highway overpass. Each of the columns has 2 more blocks than the column before it. <br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>If this pattern continues, how many blocks should the 5th column have?',
 type: 'multiple-choice',
 options: ['8', '10', '12', '14'],
 correctAnswer: 2,
 explanation: 'The columns grow by 2 blocks each (4, 6, 8, 10), so the 5th column has 12 blocks.'
 },
 {
 id: '48',
 text: 'Which statement is true?',
 type: 'multiple-choice',
 options: ['3 × 6 = 2 × 12', '2 × 9 = 4 × 6', '2 × 9 = 3 × 8', '3 × 8 = 4 × 6'],
 correctAnswer: 3,
 explanation: '3 × 8 = 24 and 4 × 6 = 24, so 3 × 8 = 4 × 6 is true.'
 },
 {
 id: '49',
 text: 'Look at the pattern of numbers. <br><center>2, 10, 18, ___, 34, 42</center><br>What is the missing number in this pattern?',
 type: 'multiple-choice',
 options: ['20', '26', '28', '30'],
 correctAnswer: 1,
 explanation: 'Each number increases by 8 (2, 10, 18, 26, 34, 42), so the missing number is 26.'
 },
 {
 id: '50',
 text: 'What number makes this number sentence true? <br>7 + (13 + 4) = (7 + ___) + 4',
 type: 'multiple-choice',
 options: ['4', '7', '11', '13'],
 correctAnswer: 3,
 explanation: 'By the associative property, the grouping changes but the addends stay the same, so the missing number is 13.'
 }
];

// Scaled Score Mapping for Grade 3 Mathematics (2014)
// Maps raw scores (number correct out of 40) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 73,
  2: 122,
  3: 152,
  4: 173,
  5: 190,
  6: 205,
  7: 218,
  8: 229,
  9: 239,
  10: 249,
  11: 258,
  12: 266,
  13: 274,
  14: 281,
  15: 289,
  16: 296,
  17: 303,
  18: 309,
  19: 316,
  20: 322,
  21: 328,
  22: 335,
  23: 341,
  24: 347,
  25: 353,
  26: 359,
  27: 366,
  28: 372,
  29: 378,
  30: 385,
  31: 391,
  32: 398,
  33: 405,
  34: 412,
  35: 419,
  36: 427,
  37: 435,
  38: 443,
  39: 452,
  40: 461,
  41: 471,
  42: 482,
  43: 494,
  44: 508,
  45: 523,
  46: 541,
  47: 564,
  48: 594,
  49: 600,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  const clampedScore = Math.max(0, Math.min(40, rawScore));
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
        testType: 'Grade 3 Mathematics (2014)'
      };
      
      console.log(`Saving Grade 3 Math result: ${rawScore}/40 → ${scaledScore} (${performanceLevel})`);
      
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
        result.testType = 'Grade 3 Mathematics (2014)';
        updated = true;
        console.log(`Enhanced Grade 3 Math result ${index + 1}: ${result.rawScore}/40 → ${result.scaledScore} (${result.performanceLevel})`);
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
          const totalQuestions = window.questions ? window.questions.length : 40;
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
            testType: 'Grade 3 Mathematics (2014)'
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