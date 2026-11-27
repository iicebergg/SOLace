window.TEST_IDENTIFIER = 'math_grade5_2010';

const sampleQuestions = [
 {
 id: '1',
 text: '6 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> − 4 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['1 <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '2', '2 <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '2 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'Rewrite with a common denominator: 6 <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math> − 4 <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math> = 2 <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>.'
 },
 {
 id: '2',
 text: '4.155 ÷ 3 = ___',
 type: 'multiple-choice',
 options: ['1.385', '1.455', '13.85', '14.55'],
 correctAnswer: 0, 
 explanation: '4.155 ÷ 3 = 1.385. Check: 1.385 × 3 = 4.155.'
 },
 {
 id: '3',
 text: '<math><mfrac><mn>7</mn><mn>9</mn></mfrac></math> + <math><mfrac><mn>4</mn><mn>9</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '1 <math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>', '1 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>7</mn><mn>9</mn></mfrac></math> + <math><mfrac><mn>4</mn><mn>9</mn></mfrac></math> = <math><mfrac><mn>11</mn><mn>9</mn></mfrac></math>, which equals 1 <math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>.'
 },
 {
 id: '4',
 text: '488 ÷ 23 = ___',
 type: 'multiple-choice',
 options: ['24 R 8', '21 R 5', '20 R 8', '20 R 5'],
 correctAnswer: 1, 
 explanation: '23 × 21 = 483, and 488 − 483 = 5, so 488 ÷ 23 = 21 R 5.'
 },
 {
 id: '5',
 text: '36.21 × 1.2 = ___',
 type: 'multiple-choice',
 options: ['43.452', '42.452', '10.863', '9.863'],
 correctAnswer: 0, 
 explanation: '36.21 × 1.2 = 43.452. There are 3 decimal places in the factors, so there are 3 in the product.'
 },
 {
 id: '6',
 text: 'Mrs. Campano purchased 3 cases of pencils. Each case contained 96 pencils. What was the total number of pencils purchased?',
 type: 'multiple-choice',
 options: ['32', '99', '278', '288'],
 correctAnswer: 3, 
 explanation: '3 × 96 = 288 pencils.'
 },
 {
 id: '7',
 text: 'What is the quotient? <br>12.95 ÷ 5 = ___',
 type: 'multiple-choice',
 options: ['2.23', '2.58', '2.59', '2.63'],
 correctAnswer: 2, 
 explanation: '12.95 ÷ 5 = 2.59. Check: 2.59 × 5 = 12.95.'
 },
 {
 id: '8',
 text: '<math><mfrac><mn>5</mn><mn>9</mn></mfrac></math> − <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>8</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>9</mn></mfrac></math>, so <math><mfrac><mn>5</mn><mn>9</mn></mfrac></math> − <math><mfrac><mn>3</mn><mn>9</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>.'
 },
 {
 id: '9',
 text: 'This table shows the number of miles Mrs. Warren drove in the first three months of the year. <br><img src="images/9.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the total number of miles Mrs. Warren drove in these three months?',
 type: 'multiple-choice',
 options: ['3,772', '3,782', '11,565', '12,665'],
 correctAnswer: 1, 
 explanation: '1,193 + 987 + 1,602 = 3,782 miles.'
 },
 {
 id: '10',
 text: '30.5 − 16.9 = ___',
 type: 'multiple-choice',
 options: ['13.6', '14.6', '24.4', '26.4'],
 correctAnswer: 0, 
 explanation: 'Line up the decimal points and subtract: 30.5 − 16.9 = 13.6.'
 },
 {
 id: '11',
 text: '4,083 ÷ 40 = ___',
 type: 'multiple-choice',
 options: ['12', '12 R3', '100', '102 R3'],
 correctAnswer: 3, 
 explanation: '40 × 102 = 4,080, and 4,083 − 4,080 = 3, so the answer is 102 R3.'
 },
 {
 id: '12',
 text: 'A total of 355 chairs are needed for a school performance. There are 227 chairs already in place. How many more chairs are needed?',
 type: 'multiple-choice',
 options: ['128', '132', '572', '582'],
 correctAnswer: 0, 
 explanation: '355 − 227 = 128 more chairs.'
 },
 {
 id: '13',
 text: 'Which decimal is equal to <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['0.8', '0.45', '0.08', '0.045'],
 correctAnswer: 0, 
 explanation: '<math><mfrac><mn>4</mn><mn>5</mn></mfrac></math> = <math><mfrac><mn>8</mn><mn>10</mn></mfrac></math> = 0.8.'
 },
 {
 id: '14',
 text: 'Which list of fractions is ordered from least to greatest? <br><math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>, <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>, <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'As tenths: <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>, <math><mfrac><mn>4</mn><mn>10</mn></mfrac></math>, <math><mfrac><mn>5</mn><mn>10</mn></mfrac></math>, <math><mfrac><mn>6</mn><mn>10</mn></mfrac></math>. So the order from least to greatest is <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>, <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>.'
 },
 {
 id: '15',
 text: 'What is the value of the 1 in 3.619?',
 type: 'multiple-choice',
 options: ['One thousandth', 'One', 'One hundredth', 'One tenth'],
 correctAnswer: 2, 
 explanation: 'The 1 is in the hundredths place (3.6<b>1</b>9), so its value is one hundredth.'
 },
 {
 id: '16',
 text: 'Which statement below is true?',
 type: 'multiple-choice',
 options: ['25.32 < 25.319', '25.32 < 25.309', '25.32 < 25.302', '25.32 < 25.331'],
 correctAnswer: 3, 
 explanation: 'Compare 25.320 to each number. Only 25.331 is greater than 25.320.'
 },
 {
 id: '17',
 text: 'What is 36.357 rounded to the nearest tenth?',
 type: 'multiple-choice',
 options: ['40.0', '36.4', '36.3', '30.0'],
 correctAnswer: 1, 
 explanation: 'The digit after the tenths place is 5, so round up: 36.357 rounds to 36.4.'
 },
 {
 id: '18',
 text: 'Which of the following is the correct way to read 45.863?',
 type: 'multiple-choice',
 options: ['Forty-five and eight hundred sixty-three thousandths', 'Forty-five and eight hundred sixty-three thousands', 'Forty-five and eight hundred sixty-three hundredths', 'Forty-five and eight hundred sixty-three hundreds'],
 correctAnswer: 0, 
 explanation: 'The last digit is in the thousandths place, so 45.863 is read as forty-five and eight hundred sixty-three thousandths.'
 },
 {
 id: '19',
 text: 'Which decimal is equivalent to <math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['7.10', '0.7', '0.07', '0.007'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math> is seven tenths, which is 0.7.'
 },
 {
 id: '20',
 text: 'What is 516.823 rounded to the nearest hundredth?',
 type: 'multiple-choice',
 options: ['500', '517', '516.83', '516.82'],
 correctAnswer: 3, 
 explanation: 'The digit after the hundredths place is 3, so round down: 516.823 rounds to 516.82.'
 },
 {
 id: '21',
 text: 'Which angle is closest to 110 degrees?',
 type: 'multiple-choice',
 options: [
    {url: 'images/21a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/21d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'A 110° angle is obtuse, a little more than a right angle (90°). Choose the angle that opens just past a right angle.'
 },
 {
 id: '22',
 text: 'Which two of these solid geometric figures have fewer than five faces each? <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['1 and 2', '1 and 3', '2 and 4', '3 and 4'],
 correctAnswer: 3, 
 explanation: 'Count the faces of each solid. Only two of the figures have fewer than five faces.'
 },
 {
 id: '23',
 text: 'Which of the following shows a translation (slide) of the shape across the dotted line?',
 type: 'multiple-choice',
 options: [
    {url: 'images/23a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'A translation slides a shape without flipping or turning it, so the shape keeps the same orientation.'
 },
 {
 id: '24',
 text: 'Marissa needs to measure the distance between two cities on a small map. Which tool is best to use to measure this distance?',
 type: 'multiple-choice',
 options: ['Thermometer', 'Balance Scale', 'Compass', 'Ruler'],
 correctAnswer: 3, 
 explanation: 'A ruler measures length, so it is the best tool for measuring distance on a map.'
 },
 {
 id: '25',
 text: 'Which picture shows a line that is <b>not</b> a line of symmetry?',
 type: 'multiple-choice',
 options: [
    {url: 'images/25a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A line of symmetry divides a figure into two matching halves. Find the line where the two halves do not match.'
 },
 {
 id: '26',
 text: 'Brad began working on a project at 10:15 A.M. He finished the project at 3:26 P.M. How long did it take Brad to complete the project?',
 type: 'multiple-choice',
 options: ['4 hours 11 minutes', '4 hours 41 minutes', '5 hours 11 minutes', '5 hours 41 minutes'],
 correctAnswer: 2, 
 explanation: 'From 10:15 A.M. to 3:15 P.M. is 5 hours. From 3:15 P.M. to 3:26 P.M. is 11 minutes. The total is 5 hours 11 minutes.'
 },
 {
 id: '27',
 text: 'Which two figures are similar but <b>not</b> congruent? <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['1 and 2', '1 and 3', '2 and 3', '2 and 4'],
 correctAnswer: 3, 
 explanation: 'Similar figures have the same shape. Congruent figures have the same shape and size. Find the two figures with the same shape but different sizes.'
 },
 {
 id: '28',
 text: 'Ms. Perry placed a border around the bulletin board. <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The length of the border is an example of —',
 type: 'multiple-choice',
 options: ['area', 'volume', 'perimeter', 'circumference'],
 correctAnswer: 2, 
 explanation: 'The distance around a figure is its perimeter.'
 },
 {
 id: '29',
 text: 'Which of the following are the dimensions of a rectangle with a perimeter of 26 inches and an area of 42 square inches?',
 type: 'multiple-choice',
 options: ['Length — 1 inch; width — 26 inches', 'Length — 2 inches; width — 13 inches', 'Length — 2 inches; width — 21 inches', 'Length — 6 inches; width — 7 inches'],
 correctAnswer: 3, 
 explanation: 'For 6 by 7: perimeter = 6 + 7 + 6 + 7 = 26 inches and area = 6 × 7 = 42 square inches.'
 },
 {
 id: '30',
 text: 'Point B is the center of the circle shown. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following best describes <span style="text-decoration: overline;">BD</span>?',
 type: 'multiple-choice',
 options: ['Chord', 'Radius', 'Diameter', 'Circumference'],
 correctAnswer: 1, 
 explanation: 'BD goes from the center of the circle to a point on the circle, so it is a radius.'
 },
 {
 id: '31',
 text: 'Which of these is an obtuse triangle?',
 type: 'multiple-choice',
 options: [
    {url: 'images/31a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'An obtuse triangle has one angle greater than 90°.'
 },
 {
 id: '32',
 text: 'Which measurement is closest to the amount of milk in one drinking glass?',
 type: 'multiple-choice',
 options: ['2 cups', '2 liters', '2 quarts', '2 gallons'],
 correctAnswer: 0, 
 explanation: 'A drinking glass holds a small amount, about 2 cups. Liters, quarts, and gallons are too large.'
 },
 {
 id: '33',
 text: 'What is the mean (average) for the following set of data? <br>7, 4, 24, 20, 35',
 type: 'multiple-choice',
 options: ['18', '20', '24', '31'],
 correctAnswer: 0, 
 explanation: '7 + 4 + 24 + 20 + 35 = 90, and 90 ÷ 5 = 18.'
 },
 {
 id: '34',
 text: 'Greg needs an outfit for school. He must choose 1 shirt, 1 pair of pants, and 1 pair of shoes. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the information in the chart, which tree diagram shows all of Greg’s possible combinations?',
 type: 'multiple-choice',
 options: [
    {url: 'images/34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'There is 1 shirt color, 2 pants colors, and 2 types of shoes, so there are 1 × 2 × 2 = 4 combinations. Each pants color must branch to both types of shoes.'
 },
 {
 id: '35',
 text: 'A box contains 5 red, 4 yellow, and 3 green tiles of equal size. Which question could be answered using probability?',
 type: 'multiple-choice',
 options: ['If Liz selects one tile from the box without looking, which color of tile is she most likely to select?', 'If Liz selects one tile from the box without looking, how many tiles will be left?', 'How many more red tiles are there than green tiles?', 'What is the total number of tiles in the box?'],
 correctAnswer: 0, 
 explanation: 'Probability describes how likely an outcome is, such as which color is most likely to be selected.'
 },
 {
 id: '36',
 text: 'The spinner shown is divided into equal sections. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the probability that the arrow will point to a green section in one spin?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>4</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '2 of the 4 equal sections are green, so the probability is <math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>.'
 },
 {
 id: '37',
 text: 'Julian made the following list of all his math quiz scores. <br>77, 85, 86, 88, 88, 89, 89, 91, 93, 94, 97, 99, 99 <br>Which stem-and-leaf plot correctly shows Julian’s quiz scores?',
 type: 'multiple-choice',
 options: [
    {url: 'images/37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Stem 7 has leaf 7; stem 8 has leaves 5, 6, 8, 8, 9, 9; stem 9 has leaves 1, 3, 4, 7, 9, 9. Every score, including repeats, must appear.'
 },
 {
 id: '38',
 text: 'Leland is playing a game with these spinners. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Leland will spin the arrow on each spinner 1 time. Which tree diagram shows all of the possible outcomes?',
 type: 'multiple-choice',
 options: [
    {url: 'images/38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Each of the 3 colors must be paired with each of the 3 numbers, giving 3 × 3 = 9 outcomes.'
 },
 {
 id: '39',
 text: 'Look at the graph. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the trend shown by the data in the graph, which is the best prediction of the number of DVDs that will be sold during week 6?',
 type: 'multiple-choice',
 options: ['600', '700', '800', '1,000'],
 correctAnswer: 2, 
 explanation: 'Continue the trend shown by weeks 1 through 5 to predict the number sold in week 6.'
 },
 {
 id: '40',
 text: 'What is the mode for the following set of numbers? <br>6, 10, 8, 7, 9, 8, 9, 7, 7',
 type: 'multiple-choice',
 options: ['6', '7', '8', '9'],
 correctAnswer: 1, 
 explanation: 'The mode is the number that appears most often. 7 appears three times.'
 },
 {
 id: '41',
 text: 'Which of these could be solved by using the open sentence 9 − 3 = <i>p</i>?',
 type: 'multiple-choice',
 options: ['Alexa had 9 parakeets. She gave 3 to Gabby. How many parakeets did Alexa have left?', 'Alexa had 9 parakeets. She gave each of them 3 treats. How many treats did Alexa give them in all?', 'Alexa had 9 parakeets. She got 3 more from Gabby. How many parakeets does she have now?', 'Alexa had 9 parakeets. She kept them in 3 big cages. Each cage had the same number of parakeets. How many parakeets were in each cage?'],
 correctAnswer: 0, 
 explanation: 'Giving 3 of 9 parakeets away is subtraction: 9 − 3 = <i>p</i>.'
 },
 {
 id: '42',
 text: 'Which is the variable in the expression 5<i>n</i> + 2?',
 type: 'multiple-choice',
 options: ['5', '<i>n</i>', '+', '2'],
 correctAnswer: 1, 
 explanation: 'A variable is a letter that stands for an unknown number. In 5<i>n</i> + 2, the variable is <i>n</i>.'
 },
 {
 id: '43',
 text: 'What should be the 4th figure in the pattern? <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/43a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Find the rule that changes each figure into the next one, then apply it to get the 4th figure.'
 },
 {
 id: '44',
 text: 'There are a total of <i>y</i> students in Mr. Smith’s classroom. Which of the following represents the number of students in the classroom when 3 students are absent?',
 type: 'multiple-choice',
 options: ['<i>y</i> + 3', '<i>y</i> − 3', '<i>y</i> × 3', '<i>y</i> ÷ 3'],
 correctAnswer: 1, 
 explanation: 'When 3 students are absent, 3 fewer students are in the classroom: <i>y</i> − 3.'
 },
 {
 id: '45',
 text: 'Mr. Tanner bought 4 books of stamps. Each book contained the same number of stamps. If <i>s</i> represents the number of stamps in each book, which of the following could be used to determine the total number of stamps Mr. Tanner bought?',
 type: 'multiple-choice',
 options: ['<i>s</i> × 4 = ?', '<i>s</i> ÷ 4 = ?', '<i>s</i> − 4 = ?', '<i>s</i> + 4 = ?'],
 correctAnswer: 0, 
 explanation: '4 books with <i>s</i> stamps each is <i>s</i> × 4 stamps in all.'
 },
 {
 id: '46',
 text: 'Bill wants to give away 1,152 trading cards. He divides the cards equally among 8 friends and writes the equation 1,152 ÷ 8 = <i>x</i>. What does the <i>x</i> represent in the equation?',
 type: 'multiple-choice',
 options: ['The number of cards each person will receive', 'The number of cards remaining', 'The number of Bill’s friends', 'The number of cards Bill has'],
 correctAnswer: 0, 
 explanation: 'Dividing the cards equally among 8 friends gives the number of cards each friend receives.'
 },
 {
 id: '47',
 text: 'Darius has 25 marbles that will be separated into <i>g</i> equal groups. Which expression represents the number of marbles in each group?',
 type: 'multiple-choice',
 options: ['25 ÷ <i>g</i>', '25 − <i>g</i>', '<i>g</i> × 25', '<i>g</i> + 25'],
 correctAnswer: 0, 
 explanation: 'Separating 25 marbles into <i>g</i> equal groups is division: 25 ÷ <i>g</i>.'
 },
 {
 id: '48',
 text: 'Which problem could be solved using the open sentence 2<i>x</i> = 6?',
 type: 'multiple-choice',
 options: ['Gabe washed 6 loads of laundry each day for 2 days. How many loads of laundry did he wash all together?', 'After Gabe washed 2 loads of laundry, he had 6 more loads to wash. How many loads of laundry did he start with?', 'Gabe washed the same number of loads of laundry each day for 2 days. He washed a total of 6 loads of laundry. How many loads did he wash each day?', 'Gabe washed 2 loads of laundry on Monday. On Tuesday he washed some more loads. All together he washed 6 loads. How many loads of laundry did Gabe wash on Tuesday?'],
 correctAnswer: 2, 
 explanation: '2<i>x</i> = 6 means 2 groups of an unknown number make 6. That matches washing the same number of loads each day for 2 days for a total of 6.'
 },
 {
 id: '49',
 text: 'Raymond has three times as many trading cards as his friend David. David has 34 trading cards. Which number sentence could be used to find <i>r</i>, the number of trading cards that Raymond has?',
 type: 'multiple-choice',
 options: ['<i>r</i> = 3 + 34', '<i>r</i> = 3 ÷ 34', '<i>r</i> = 3 × 34', '<i>r</i> = 34 − 3'],
 correctAnswer: 2, 
 explanation: '“Three times as many” means multiply: <i>r</i> = 3 × 34.'
 },
 {
 id: '50',
 text: 'This table shows how much money Tiffany has in her savings at the end of each month. <br><img src="images/50.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues, what is the total amount of money that Tiffany will have in her savings at the end of 9 months?',
 type: 'multiple-choice',
 options: ['$49', '$56', '$63', '$70'],
 correctAnswer: 2, 
 explanation: 'Tiffany saves $7 each month, so after 9 months she will have 9 × $7 = $63.'
 }
];

// Scaled Score Mapping for Grade 5 Mathematics (2010)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 18,
  2: 74,
  3: 108,
  4: 133,
  5: 153,
  6: 170,
  7: 185,
  8: 198,
  9: 209,
  10: 220,
  11: 230,
  12: 240,
  13: 249,
  14: 258,
  15: 266,
  16: 274,
  17: 282,
  18: 289,
  19: 297,
  20: 304,
  21: 311,
  22: 319,
  23: 326,
  24: 333,
  25: 340,
  26: 347,
  27: 354,
  28: 361,
  29: 368,
  30: 376,
  31: 383,
  32: 391,
  33: 399,
  34: 407,
  35: 415,
  36: 424,
  37: 433,
  38: 442,
  39: 452,
  40: 463,
  41: 475,
  42: 487,
  43: 501,
  44: 517,
  45: 535,
  46: 556,
  47: 582,
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
        testType: 'Grade 5 Mathematics (2010)'
      };
      
      console.log(`Saving Grade 5 Math result: ${rawScore}/50 → ${scaledScore} (${performanceLevel})`);
      
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
        result.testType = 'Grade 5 Mathematics (2010)';
        updated = true;
        console.log(`Enhanced Grade 5 Math result ${index + 1}: ${result.rawScore}/50 → ${result.scaledScore} (${result.performanceLevel})`);
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
            testType: 'Grade 5 Mathematics (2010)'
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