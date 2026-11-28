window.TEST_IDENTIFIER = 'math_grade5_2005';

const sampleQuestions = [
 {
 id: '1',
 text: 'These signs show the population of two different towns. <br><img src="images/1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How much <i>greater</i> is the population of Woodburn than Peltin?',
 type: 'multiple-choice',
 options: ['26,449', '27,651', '89,745', '90,645'],
 correctAnswer: 0, 
 explanation: '58,097 − 31,648 = 26,449.'
 },
 {
 id: '2',
 text: 'The solution to 49,364 − 15,869 is <i>closest</i> to —',
 type: 'multiple-choice',
 options: ['300', '3,000', '30,000', '300,000'],
 correctAnswer: 2, 
 explanation: 'Round to the nearest ten thousand: 50,000 − 20,000 = 30,000. (The exact answer is 33,495.)'
 },
 {
 id: '3',
 text: '520 ÷ 5 = ___',
 type: 'multiple-choice',
 options: ['140', '124', '120', '104'],
 correctAnswer: 3, 
 explanation: '5 × 104 = 520, so 520 ÷ 5 = 104.'
 },
 {
 id: '4',
 text: 'The solution to 421 × 32 is <i>closest to</i> —',
 type: 'multiple-choice',
 options: ['120', '1,200', '12,000', '120,000'],
 correctAnswer: 2, 
 explanation: 'Round to 400 × 30 = 12,000. (The exact answer is 13,472.)'
 },
 {
 id: '5',
 text: '1.725 ÷ 3 = ___',
 type: 'multiple-choice',
 options: ['0.0512', '0.0575', '0.512', '0.575'],
 correctAnswer: 3, 
 explanation: '1.725 ÷ 3 = 0.575. Check: 0.575 × 3 = 1.725.'
 },
 {
 id: '6',
 text: '347 + 602 + 1,985 = ___',
 type: 'multiple-choice',
 options: ['1,934', '2,824', '2,934', '11,475'],
 correctAnswer: 2, 
 explanation: '347 + 602 = 949, and 949 + 1,985 = 2,934.'
 },
 {
 id: '7',
 text: '9.62 − 7.154 = ___',
 type: 'multiple-choice',
 options: ['2.534', '2.466', '2.474', '0.6192'],
 correctAnswer: 1, 
 explanation: 'Write 9.62 as 9.620 and subtract: 9.620 − 7.154 = 2.466.'
 },
 {
 id: '8',
 text: 'A bag of chocolate candy holds exactly 408 pieces. Eight friends plan to share the chocolate pieces equally. How many chocolate pieces should each friend receive?',
 type: 'multiple-choice',
 options: ['3,264', '416', '400', '51'],
 correctAnswer: 3, 
 explanation: '408 ÷ 8 = 51 pieces.'
 },
 {
 id: '9',
 text: 'Suni needs <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> cup white sugar and <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> cup brown sugar to make cookies. How much sugar is that all together?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>11</mn><mn>12</mn></mfrac></math> cup', '<math><mfrac><mn>2</mn><mn>12</mn></mfrac></math> cup', '<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math> cup', '<math><mfrac><mn>2</mn><mn>7</mn></mfrac></math> cup'],
 correctAnswer: 0, 
 explanation: 'Use a common denominator of 12: <math><mfrac><mn>8</mn><mn>12</mn></mfrac></math> + <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math> = <math><mfrac><mn>11</mn><mn>12</mn></mfrac></math> cup.'
 },
 {
 id: '10',
 text: '0.05 × 6 = ___',
 type: 'multiple-choice',
 options: ['30', '0.30', '0.03', '0.003'],
 correctAnswer: 1, 
 explanation: '5 hundredths × 6 = 30 hundredths = 0.30.'
 },
 {
 id: '11',
 text: '8,245 ÷ 9 = ___',
 type: 'multiple-choice',
 options: ['916 R1', '916', '915 R1', '905'],
 correctAnswer: 0, 
 explanation: '9 × 916 = 8,244, and 8,245 − 8,244 = 1, so the answer is 916 R1.'
 },
 {
 id: '12',
 text: '7 <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math> + 6 <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['1 <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '13 <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>', '13 <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>', '14 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'Add the whole numbers and the fractions: 7 + 6 = 13 and <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math> + <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>, so the sum is 13 <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>.'
 },
 {
 id: '13',
 text: 'The scales below show the weights, in grams, of four soil samples. <br><img src="images/13.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is true about the weights of the soil samples?',
 type: 'multiple-choice',
 options: ['2.61 < 2.09', '2.74 < 2.58', '2.09 < 2.61', '2.58 < 2.09'],
 correctAnswer: 2, 
 explanation: '2.09 has 0 tenths and 2.61 has 6 tenths, so 2.09 < 2.61.'
 },
 {
 id: '14',
 text: 'This figure is shaded to represent the number 1. <br><img src="images/14-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following numbers is represented by the shaded part of the figure below? <br><img src="images/14-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['1.006', '1.06', '1.6', '16.0'],
 correctAnswer: 1, 
 explanation: 'There is 1 whole square and 6 hundredths shaded in the second square, so the number is 1.06.'
 },
 {
 id: '15',
 text: 'Which means "nine hundred sixty-three thousandths"?',
 type: 'multiple-choice',
 options: ['9,630', '0.963', '0.0963', '0.90063'],
 correctAnswer: 1, 
 explanation: 'Nine hundred sixty-three thousandths is <math><mfrac><mn>963</mn><mn>1000</mn></mfrac></math> = 0.963.'
 },
 {
 id: '16',
 text: 'The table shows last season\'s earned run averages (ERAs) for the four best pitchers in the Roanoke Little League. <br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which pitcher\'s ERA is 2.6 when rounded to the nearest tenth?',
 type: 'multiple-choice',
 options: ['Rasmund', 'Feinstein', 'Gotkowski', 'Johnson'],
 correctAnswer: 2, 
 explanation: '2.59 rounds up to 2.6. (2.34 rounds to 2.3, 2.54 rounds to 2.5, and 2.65 rounds to 2.7.)'
 },
 {
 id: '17',
 text: 'What number goes in the blank space to make the statement below true? <br><math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = <math><mfrac><mn>___</mn><mn>9</mn></mfrac></math>',
 type: 'multiple-choice',
 options: ['1', '3', '4', '6'],
 correctAnswer: 1, 
 explanation: 'Multiply the numerator and denominator by 3: <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>9</mn></mfrac></math>.'
 },
 {
 id: '18',
 text: 'Eddie shaded a fraction of this square. <br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which shows an equivalent fraction shaded?',
 type: 'multiple-choice',
 options: [
    {url: 'images/18a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Eddie shaded 2 of 4 parts, or <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>. Choice J has 4 of 8 parts shaded, which is also <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '19',
 text: 'Which of the following has a value less than <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> is less than <math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>, which equals <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>. The other fractions are all greater than <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '20',
 text: 'There were 75,631 people at a concert. What is that number rounded to the nearest ten thousand people?',
 type: 'multiple-choice',
 options: ['60,000', '70,000', '80,000', '90,000'],
 correctAnswer: 2, 
 explanation: 'The ten thousands digit is 7 and the next digit is 5, so round up to 80,000.'
 },
 {
 id: '21',
 text: 'Point <i>A</i> is the center of the circle. <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br><span style="text-decoration: overline"><i>EF</i></span> is best described as —',
 type: 'multiple-choice',
 options: ['a radius', 'a chord', 'a diameter', 'an arc'],
 correctAnswer: 1, 
 explanation: 'Segment EF has both endpoints on the circle and does not pass through the center, so it is a chord.'
 },
 {
 id: '22',
 text: 'Which unit could be used for measuring the weight of a rock?',
 type: 'multiple-choice',
 options: ['Square inch', 'Mile', 'Milliliter', 'Kilogram'],
 correctAnswer: 3, 
 explanation: 'Kilograms measure mass (weight). Square inches measure area, miles measure length, and milliliters measure capacity.'
 },
 {
 id: '23',
 text: 'What is the perimeter of the shaded figure on the grid below? <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['20 units', '21 units', '22 units', '24 units'],
 correctAnswer: 3, 
 explanation: 'Count the unit lengths all the way around the outside of the shaded figure. The perimeter is 24 units.'
 },
 {
 id: '24',
 text: 'For a field trip, Alice\'s class left the school at 7:10 a.m. The class returned to the school at 8:23 p.m. the same day. How long was the class away for the field trip?',
 type: 'multiple-choice',
 options: ['47 minutes', '1 hour, 13 minutes', '13 hours, 13 minutes', '13 hours, 47 minutes'],
 correctAnswer: 2, 
 explanation: 'From 7:10 a.m. to 8:10 p.m. is 13 hours. From 8:10 p.m. to 8:23 p.m. is 13 minutes. Total: 13 hours, 13 minutes.'
 },
 {
 id: '25',
 text: 'Which coordinates best describe the location of Mount Able? <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['(5, 6)', '(5, 5)', '(6, 5)', '(6, 6)'],
 correctAnswer: 2, 
 explanation: 'Mount Able is 6 units to the right and 5 units up, so it is at (6, 5).'
 },
 {
 id: '26',
 text: 'Four triangles are shown on the grid below. <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which two triangles appear to be similar?',
 type: 'multiple-choice',
 options: ['<i>M</i> and <i>S</i>', '<i>M</i> and <i>N</i>', '<i>N</i> and <i>S</i>', '<i>R</i> and <i>N</i>'],
 correctAnswer: 0, 
 explanation: 'Similar figures have the same shape but can be different sizes. Triangle S has the same shape as triangle M, just larger.'
 },
 {
 id: '27',
 text: 'Which of these would require finding the perimeter of something?',
 type: 'multiple-choice',
 options: ['Buying enough fencing to go around your front yard', 'Buying enough carpet for the floor of your classroom', 'Buying enough paint to cover the door of your classroom', 'Buying a tablecloth big enough to cover a table'],
 correctAnswer: 0, 
 explanation: 'Perimeter is the distance around a figure. Fencing goes around the yard. The other choices cover a surface, which is area.'
 },
 {
 id: '28',
 text: '<br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following describes the angle shown above?',
 type: 'multiple-choice',
 options: ['Right', 'Acute', 'Obtuse', 'Straight'],
 correctAnswer: 2, 
 explanation: 'The angle opens wider than a square corner but less than a straight line, so it is obtuse.'
 },
 {
 id: '29',
 text: 'Which of the solid shapes listed below has <i>no</i> vertices?',
 type: 'multiple-choice',
 options: ['Sphere', 'Pyramid', 'Cube', 'Cone'],
 correctAnswer: 0, 
 explanation: 'A sphere is perfectly round and has no corners (vertices). A cone has one vertex at its tip.'
 },
 {
 id: '30',
 text: 'Which pair of rulers is best described as perpendicular?',
 type: 'multiple-choice',
 options: [
    {url: 'images/32a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Perpendicular lines meet to form square corners (right angles). The rulers in choice G cross at right angles.'
 },
 {
 id: '31',
 text: 'Irene has a group of counters like the ones pictured below. In the group are 9 counters with a star on them and 1 counter without a star. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If one counter is chosen from the group without looking, which of the following best describes the chances that it will be the one <i>without</i> a star?',
 type: 'multiple-choice',
 options: ['Certain', 'Likely, but not certain', 'Unlikely, but not impossible', 'Impossible'],
 correctAnswer: 2, 
 explanation: 'Only 1 of the 10 counters has no star, so choosing it is unlikely, but it is possible.'
 },
 {
 id: '32',
 text: 'Manuel has 9 milk chocolate candy bars and 1 dark chocolate candy bar in a bag. All the candy bars are the same size and shape. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the probability that the first candy bar taken from the bag without looking will be milk chocolate?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>9</mn><mn>1</mn></mfrac></math>', '<math><mfrac><mn>9</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>10</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'There are 10 candy bars and 9 are milk chocolate, so the probability is <math><mfrac><mn>9</mn><mn>10</mn></mfrac></math>.'
 },
 {
 id: '33',
 text: 'Last winter, Julie recorded the outside temperature each hour for four hours. The table below shows the results. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following shows this information graphed correctly?',
 type: 'multiple-choice',
 options: [
    {url: 'images/35a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Graph D shows the temperatures 23°, 28°, 19°, and 21° at the correct times on an evenly spaced scale with all labels.'
 },
 {
 id: '34',
 text: 'Stephanie\'s school has a tutoring program after school and on Saturdays. This lists the number of students who came to tutoring for the last two weeks. <br>14 &nbsp; 35 &nbsp; 22 &nbsp; 28 <br>25 &nbsp; 30 &nbsp; 43 &nbsp; 16 <br>39 &nbsp; 41 &nbsp; 24 &nbsp; 30 <br>Which of the following stem-and-leaf plots shows this same information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'In order, the numbers are 14, 16, 22, 24, 25, 28, 30, 30, 35, 39, 41, 43. Plot F shows all 12 numbers.'
 },
 {
 id: '35',
 text: 'Andrew has these buttons to use for a design. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following questions about these buttons could you use probability to solve?',
 type: 'multiple-choice',
 options: ['How many more white buttons than gray buttons does Andrew have?', 'How many buttons does Andrew have in all?', 'If Andrew gives 2 buttons to Cissy, how many will be left?', 'If Andrew picks 1 button without looking, what color is it most likely to be?'],
 correctAnswer: 3, 
 explanation: 'Probability describes how likely something is to happen. Picking a button without looking is a chance event.'
 },
 {
 id: '36',
 text: 'The graph below shows the price of a bag of cherry drops at four different stores. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>closest</i> to the price of a bag of cherry drops at Harmons?',
 type: 'multiple-choice',
 options: ['$2.20', '$2.30', '$2.50', '$2.70'],
 correctAnswer: 1, 
 explanation: 'The bar for Harmons ends a little below $2.50, at about $2.30.'
 },
 {
 id: '37',
 text: 'The chart below shows the choices Ms. Diego has for getting dressed. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which tree diagram shows all the possible combinations of 1 top, 1 color of pants, and 1 kind of shoes?',
 type: 'multiple-choice',
 options: [
    {url: 'images/39a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'There are 2 tops × 2 pants × 2 shoes = 8 combinations. Tree diagram D shows all 8.'
 },
 {
 id: '38',
 text: 'The table below shows the amount some plants grew over the same period of time. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the range of this set of data?',
 type: 'multiple-choice',
 options: ['7 cm', '9 cm', '10 cm', '11 cm'],
 correctAnswer: 0, 
 explanation: 'Range = greatest − least = 14 − 7 = 7 cm.'
 },
 {
 id: '39',
 text: 'The table below shows the total cost of different numbers of notebooks. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the information in the table, what will be the total cost of 10 notebooks?',
 type: 'multiple-choice',
 options: ['$21.00', '$24.50', '$31.50', '$35.00'],
 correctAnswer: 3, 
 explanation: 'Each notebook costs $3.50, so 10 notebooks cost 10 × $3.50 = $35.00.'
 },
 {
 id: '40',
 text: 'Which best describes the location of point <i>X</i> on the number line shown below? <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['36', '37', '39', '40'],
 correctAnswer: 2, 
 explanation: '41 and 45 are 2 marks apart, so each mark is 2. Point X is 1 mark to the left of 41: 41 − 2 = 39.'
 },
 {
 id: '41',
 text: 'The first ten shapes in a pattern are shown below. Lionel is making the pattern by repeating the first six shapes in the same order as shown in the picture. <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Lionel continues the pattern in the same way, what will be the 16th shape in the pattern?',
 type: 'multiple-choice',
 options: [
    {url: 'images/43a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The pattern repeats every 6 shapes. 16 = 6 + 6 + 4, so the 16th shape is the same as the 4th shape, the down arrow.'
 },
 {
 id: '42',
 text: 'A number machine uses a rule to change numbers into different numbers. The table below shows what happened when different numbers went into the same number machine. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following could be the rule used by this number machine?',
 type: 'multiple-choice',
 options: ['Multiply by 3, then subtract 6', 'Multiply by 2, then add 1', 'Add 5', 'Add 8'],
 correctAnswer: 3, 
 explanation: '7 + 8 = 15, 12 + 8 = 20, 15 + 8 = 23, and 28 + 8 = 36.'
 },
 {
 id: '43',
 text: 'Which of the following goes in the box to make the statement below true? <br>(75 + 167) + 92 = ___',
 type: 'multiple-choice',
 options: ['75 + (167 × 92)', '92 + (167 + 75)', '(92 + 75) + (92 + 167)', '167 − (75 + 92)'],
 correctAnswer: 1, 
 explanation: 'Numbers can be added in any order and grouped in any way, so (75 + 167) + 92 = 92 + (167 + 75).'
 },
 {
 id: '44',
 text: 'Which of the following goes in the box to make the statement below true? <br>(13 × 8) × 25 = ___',
 type: 'multiple-choice',
 options: ['(13 × 25) + (13 × 8)', '(13 × 25) + (8 × 25)', '13 × (8 + 25)', '13 × (8 × 25)'],
 correctAnswer: 3, 
 explanation: 'Factors can be grouped in any way when multiplying (the associative property), so (13 × 8) × 25 = 13 × (8 × 25).'
 },
 {
 id: '45',
 text: 'If <i>N</i> represents a number, which of the following means "10 divided by a number"?',
 type: 'multiple-choice',
 options: ['10 − <i>N</i>', '10 + <i>N</i>', '10 × <i>N</i>', '10 ÷ <i>N</i>'],
 correctAnswer: 3, 
 explanation: '"10 divided by a number" means 10 ÷ N.'
 },
 {
 id: '46',
 text: 'Which of these could be solved by using the open sentence <i>D</i> + 2 = ?',
 type: 'multiple-choice',
 options: ['Lonnie earned $2 more than Blanca. If <i>D</i> is the amount in dollars that Blanca earned, how much did Lonnie earn?', 'Stephen spent $2 on a notebook. If <i>D</i> is the amount of money that he started with, how much does Stephen have left?', 'Diana earns $2 each time she washes the family car. If <i>D</i> is the total amount of money that she earned last year by washing the car, how many times did she wash the car?', 'The math club makes $2 on each box of dominoes that it sells. If <i>D</i> is the number of boxes of dominoes that the club sold, how much did it make in all?'],
 correctAnswer: 0, 
 explanation: '"$2 more than Blanca" means add 2 to Blanca\'s amount: D + 2.'
 },
 {
 id: '47',
 text: 'The table shows the cost of cans of paint. <br><img src="images/49.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How much would 5 cans of paint cost?',
 type: 'multiple-choice',
 options: ['$20.00', '$28.00', '$30.00', '$32.00'],
 correctAnswer: 2, 
 explanation: 'Each can costs $6.00, so 5 cans cost 5 × $6.00 = $30.00.'
 },
 {
 id: '48',
 text: 'If <i>L</i> represents the number of lambs a farmer owned, which of the following could be used to find the number of lambs he had after selling three of the lambs?',
 type: 'multiple-choice',
 options: ['<i>L</i> ÷ 3 = ?', '<i>L</i> × 3 = ?', '<i>L</i> + 3 = ?', '<i>L</i> − 3 = ?'],
 correctAnswer: 3, 
 explanation: 'Selling 3 lambs means taking 3 away: L − 3.'
 }
];

// Scaled Score Mapping for Grade 5 Mathematics (2005)
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
  // Question 21 of the released test required measuring with a physical ruler and was removed.
  // Question 28 of the released test required measuring with a physical ruler and was removed.
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
        testType: 'Grade 5 Mathematics (2005)'
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
        result.testType = 'Grade 5 Mathematics (2005)';
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
            testType: 'Grade 5 Mathematics (2005)'
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