window.TEST_IDENTIFIER = 'math_grade3_2007';

const sampleQuestions = [
 {
 id: '1',
 text: 'The Parents\' Club sold 2,487 tickets for the winter festival. What is 2,487 rounded to the nearest hundred?',
 type: 'multiple-choice',
 options: ['2,400', '2,470', '2,480', '2,500'],
 correctAnswer: 3, 
 explanation: '2,487 is between 2,400 and 2,500. The tens digit is 8, which is 5 or more, so 2,487 rounds up to 2,500.'
 },
 {
 id: '2',
 text: 'Which of the following shows "nine hundred seven thousand, four hundred eighteen" in standard form?',
 type: 'multiple-choice',
 options: ['9,007,418', '970,418', '907,480', '907,418'],
 correctAnswer: 3, 
 explanation: 'Nine hundred seven thousand is 907,000 and four hundred eighteen is 418, so the number is 907,418.'
 },
 {
 id: '3',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['6,473 > 6,374', '6,473 < 6,347', '6,473 < 6,437', '6,473 > 6,734'],
 correctAnswer: 0, 
 explanation: 'Both numbers have 6 thousands. 4 hundreds is more than 3 hundreds, so 6,473 > 6,374.'
 },
 {
 id: '4',
 text: 'The figure below is shaded to represent the number 1. <br><img src="images/4-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What number is represented by the model below? <br><img src="images/4-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['0.28', '2.08', '2.80', '8.20'],
 correctAnswer: 1, 
 explanation: 'There are 2 whole squares and 8 hundredths shaded in the third square, so the number is 2.08.'
 },
 {
 id: '5',
 text: 'This model is shaded to show a fraction of a whole. <br><img src="images/5.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is shaded to show a fraction with a value GREATER THAN the one above?',
 type: 'multiple-choice',
 options: [
    {url: 'images/5a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/5b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/5c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/5d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The model shows <math><mfrac><mn>8</mn><mn>10</mn></mfrac></math> shaded. Choice C shows <math><mfrac><mn>7</mn><mn>8</mn></mfrac></math> shaded, and <math><mfrac><mn>7</mn><mn>8</mn></mfrac></math> is greater than <math><mfrac><mn>8</mn><mn>10</mn></mfrac></math> because only <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> is unshaded instead of <math><mfrac><mn>2</mn><mn>10</mn></mfrac></math>.'
 },
 {
 id: '6',
 text: 'In which picture is there an even number of dinosaurs?',
 type: 'multiple-choice',
 options: [
    {url: 'images/6a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/6b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/6c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/6d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'An even number can be split into 2 equal groups. Choice J has 4 dinosaurs, and 4 is even.'
 },
 {
 id: '7',
 text: 'What is 9,999 rounded to the nearest hundred?',
 type: 'multiple-choice',
 options: ['9,000', '9,900', '10,000', '100,000'],
 correctAnswer: 2, 
 explanation: '9,999 is between 9,900 and 10,000. The tens digit is 9, so it rounds up to 10,000.'
 },
 {
 id: '8',
 text: 'The model below represents the number 1. <br><img src="images/8-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which number is represented by the model shown below? <br><img src="images/8-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['2 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '2 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '1 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'There are 2 whole circles and <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> of another circle shaded, so the number is 2 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>.'
 },
 {
 id: '9',
 text: 'A toy store sold 274,091 games in one year. What is the value of the 7 in 274,091?',
 type: 'multiple-choice',
 options: ['70', '700', '7,000', '70,000'],
 correctAnswer: 3, 
 explanation: 'The 7 is in the ten thousands place, so its value is 70,000.'
 },
 {
 id: '10',
 text: 'This <br><img src="images/10.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>represents a value of 1. Which model represents the value of 3 in 168,342?',
 type: 'multiple-choice',
 options: [
    {url: 'images/10a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/10b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/10c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/10d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The 3 in 168,342 is in the hundreds place, so its value is 300. Choice G shows 3 hundreds blocks.'
 },
 {
 id: '11',
 text: '<br><img src="images/11.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What fraction of the group of T-shirts is striped?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'There are 7 T-shirts and 3 of them are striped, so <math><mfrac><mn>3</mn><mn>7</mn></mfrac></math> are striped.'
 },
 {
 id: '12',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['704 is greater than 750', '212 is less than 200', '836 is greater than 736', '525 is less than 499'],
 correctAnswer: 2, 
 explanation: '836 has 8 hundreds and 736 has 7 hundreds, so 836 is greater than 736.'
 },
 {
 id: '13',
 text: 'This model is shaded to show 1 whole. <br><img src="images/13-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What decimal is shown by the model below? <br><img src="images/13-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['0.34', '3.34', '3.40', '33.40'],
 correctAnswer: 1, 
 explanation: 'There are 3 whole squares and 34 hundredths shaded in the fourth square, so the decimal is 3.34.'
 },
 {
 id: '14',
 text: 'There are 4 tables. Chris put 6 plates on each table. What is the total number of plates Chris put on the tables?',
 type: 'multiple-choice',
 options: ['2', '10', '18', '24'],
 correctAnswer: 3, 
 explanation: '4 × 6 = 24 plates.'
 },
 {
 id: '15',
 text: '36 ÷ 4 = ___',
 type: 'multiple-choice',
 options: ['6', '7', '8', '9'],
 correctAnswer: 3, 
 explanation: '9 × 4 = 36, so 36 ÷ 4 = 9.'
 },
 {
 id: '16',
 text: '4 × 8 = ___',
 type: 'multiple-choice',
 options: ['36', '32', '28', '12'],
 correctAnswer: 1, 
 explanation: '4 × 8 = 32.'
 },
 {
 id: '17',
 text: 'Juan has 147 baseball cards and 259 football cards. <br><img src="images/17.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many more football cards than baseball cards does Juan have?',
 type: 'multiple-choice',
 options: ['11', '12', '102', '112'],
 correctAnswer: 3, 
 explanation: '259 − 147 = 112 more football cards.'
 },
 {
 id: '18',
 text: 'This model is shaded to show one whole. <br><img src="images/18-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The two models below are each shaded to show a fraction. <br><img src="images/18-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>One fraction is subtracted from the other. Which model is shaded to show the difference?',
 type: 'multiple-choice',
 options: [
    {url: 'images/18a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/18d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Model 1 shows <math><mfrac><mn>7</mn><mn>10</mn></mfrac></math> and Model 2 shows <math><mfrac><mn>5</mn><mn>10</mn></mfrac></math>. <math><mfrac><mn>7</mn><mn>10</mn></mfrac></math> − <math><mfrac><mn>5</mn><mn>10</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>10</mn></mfrac></math>. Choice J has 2 of 10 parts shaded.'
 },
 {
 id: '19',
 text: '2,408 + 692 = ___',
 type: 'multiple-choice',
 options: ['2,090', '3,100', '8,328', '9,328'],
 correctAnswer: 1, 
 explanation: '2,408 + 692 = 3,100.'
 },
 {
 id: '20',
 text: '3.5 + 2.8 = ___',
 type: 'multiple-choice',
 options: ['5.13', '5.3', '6.13', '6.3'],
 correctAnswer: 3, 
 explanation: 'Line up the decimal points and add: 3.5 + 2.8 = 6.3.'
 },
 {
 id: '21',
 text: '8 × 9 = ___',
 type: 'multiple-choice',
 options: ['17', '64', '72', '81'],
 correctAnswer: 2, 
 explanation: '8 × 9 = 72.'
 },
 {
 id: '22',
 text: 'Which set model BEST shows 4 × 2?',
 type: 'multiple-choice',
 options: [
    {url: 'images/22a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/22b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/22c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/22d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: '4 × 2 means 4 groups of 2. Choice F shows 4 groups with 2 boats in each.'
 },
 {
 id: '23',
 text: '4.9 + 2.3 = ___',
 type: 'multiple-choice',
 options: ['6.1', '6.2', '7.2', '7.3'],
 correctAnswer: 2, 
 explanation: 'Line up the decimal points and add: 4.9 + 2.3 = 7.2.'
 },
 {
 id: '24',
 text: 'Mark divided a large chocolate bar into 4 equal pieces. He gave 1 piece to his friend and took 1 piece for himself. <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What fractional part of the candy bar was left?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '2 of the 4 pieces were taken, so 4 − 2 = 2 pieces were left, or <math><mfrac><mn>2</mn><mn>4</mn></mfrac></math> of the bar.'
 },
 {
 id: '25',
 text: 'Which of the figures below appears to have a line of symmetry?',
 type: 'multiple-choice',
 options: [
    {url: 'images/25a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Choice B can be folded along a vertical line through its middle so both halves match.'
 },
 {
 id: '26',
 text: 'Which of the following units can be used to record the weight of a bicycle?',
 type: 'multiple-choice',
 options: ['Cups', 'Gallons', 'Miles', 'Pounds'],
 correctAnswer: 3, 
 explanation: 'Pounds measure weight. Cups and gallons measure capacity, and miles measure length.'
 },
 {
 id: '27',
 text: 'Ginger wore braces for exactly 1 year. How many days did she wear braces in all?',
 type: 'multiple-choice',
 options: ['365', '30', '12', '7'],
 correctAnswer: 0, 
 explanation: 'There are 365 days in 1 year.'
 },
 {
 id: '28',
 text: 'Which is CLOSEST to the temperature shown on the thermometer? <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['80ºF', '70ºF', '65ºF', '60ºF'],
 correctAnswer: 1, 
 explanation: 'The liquid in the thermometer stops at the 70° mark.'
 },
 {
 id: '29',
 text: 'What is the correct name for the figure pictured below? <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Cone', 'Cylinder', 'Prism', 'Pyramid'],
 correctAnswer: 0, 
 explanation: 'The figure has a circular base and comes to a point, so it is a cone.'
 },
 {
 id: '30',
 text: 'Which is CLOSEST to the length of the scissors? <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['6 paper clips', '7 paper clips', '9 paper clips', '11 paper clips'],
 correctAnswer: 1, 
 explanation: 'Count the paper clips in the chain from the bottom to the top of the scissors. The scissors are about 7 paper clips long.'
 },
 {
 id: '31',
 text: 'Elijah drew this picture of a caterpillar in science class. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which part of the caterpillar BEST represents an angle?',
 type: 'multiple-choice',
 options: [
    {url: 'images/31a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'An angle is formed by two rays that meet at a point. The V-shaped antennae in choice C model an angle.'
 },
 {
 id: '32',
 text: 'Which clock shows NEAREST to 3:20?',
 type: 'multiple-choice',
 options: [
    {url: 'images/32a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'At 3:20, the hour hand is a little past the 3 and the minute hand points to the 4. Clock F shows this.'
 },
 {
 id: '33',
 text: 'On which of the following does the heavy dotted line appear to be a line of symmetry of the shaded figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/33a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'In choice B, the parts of the figure on each side of the dotted line are mirror images of each other.'
 },
 {
 id: '34',
 text: 'Which statement about a square is true?',
 type: 'multiple-choice',
 options: ['Two sides are longer than the other two sides.', 'All four sides are different lengths.', 'One side is shorter than the other sides.', 'All four sides are of equal length.'],
 correctAnswer: 3, 
 explanation: 'A square has four sides that are all the same length.'
 },
 {
 id: '35',
 text: 'Daniel had this money in a bank. <br><img src="images/35-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>His brother gave him the money shown below. <br><img src="images/35-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the total amount of money Daniel has altogether?',
 type: 'multiple-choice',
 options: ['$4.50', '$4.25', '$4.00', '$3.75'],
 correctAnswer: 1, 
 explanation: 'Daniel had $2.00 + 2 quarters = $2.50. His brother gave him $1.00 + 7 dimes + 1 nickel = $1.75. $2.50 + $1.75 = $4.25.'
 },
 {
 id: '36',
 text: 'The chart shows the number of packages of donuts sold. <br><img src="images/37-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Ken made the following pictograph using the data from the chart. <br><img src="images/37-2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which key correctly completes Ken\'s pictograph?',
 type: 'multiple-choice',
 options: [
    {url: 'images/37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Thursday has 2 symbols for 4 packages, so each symbol represents 4 ÷ 2 = 2 packages.'
 },
 {
 id: '37',
 text: 'These are the leaves Sandy collected for school. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which bar graph correctly shows the number of each kind of leaf?',
 type: 'multiple-choice',
 options: [
    {url: 'images/38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Count each kind of leaf: 2, 7, 4, and 4. Graph J shows these numbers.'
 },
 {
 id: '38',
 text: 'A bakery made four different kinds of doughnuts. The pictograph below shows the number of each kind of doughnut sold one morning. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the data in the graph, what was the total number of chocolate doughnuts sold?',
 type: 'multiple-choice',
 options: ['6', '16', '19', '60'],
 correctAnswer: 3, 
 explanation: 'Chocolate has 6 symbols, and each symbol represents 10 doughnuts. 6 × 10 = 60.'
 },
 {
 id: '39',
 text: 'The bar graph below shows the number of each flavor jellybean in a bag. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the graph, how many grape jellybeans were in the bag?',
 type: 'multiple-choice',
 options: ['1', '2', '3', '4'],
 correctAnswer: 2, 
 explanation: 'The bar for grape ends at 3.'
 },
 {
 id: '40',
 text: 'All the cards shown below are put in a box. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Shanna picked 1 card from the box without looking. Which of the following best describes the chances that the name on the card she picked began with the letter A?',
 type: 'multiple-choice',
 options: ['Certain', 'Likely, but not certain', 'Unlikely, but not impossible', 'Impossible'],
 correctAnswer: 0, 
 explanation: 'Every name on the cards begins with the letter A, so it is certain.'
 },
 {
 id: '41',
 text: 'Fran is making the graph below to show the number of cans collected by students in each of four classrooms. <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which label should Fran place on line 1?',
 type: 'multiple-choice',
 options: ['Kinds of Food', 'Sizes of Cans', 'Number of Cans Collected', 'Days of Collection'],
 correctAnswer: 2, 
 explanation: 'The numbers on the side of the graph show how many cans each classroom collected, so the label is "Number of Cans Collected."'
 },
 {
 id: '42',
 text: 'Mr. Garza\'s class voted for the flavor of topping they wanted for their ice cream. The results are shown in the table below. <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph correctly shows the data in the table?',
 type: 'multiple-choice',
 options: [
    {url: 'images/43a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/43d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Count the votes: Pineapple 3, Chocolate 6, and Strawberry 5. Graph D shows these numbers.'
 },
 {
 id: '43',
 text: 'Paul sorted some shapes into the following two groups. He placed shapes with the same shape and the same shading into each group. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which shape should Paul include in Group R?',
 type: 'multiple-choice',
 options: [
    {url: 'images/44a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Group R has only shaded circles. The small shaded circle in choice H belongs in Group R.'
 },
 {
 id: '44',
 text: 'The first five numbers in a pattern are shown below. A subtraction rule was used to find each new number in the pattern. <br>125 &nbsp; 105 &nbsp; 85 &nbsp; 65 &nbsp; 45 &nbsp; ? <br>If the subtraction pattern is continued in the same way, what will be the next number in the pattern?',
 type: 'multiple-choice',
 options: ['25', '35', '44', '46'],
 correctAnswer: 0, 
 explanation: 'Each number is 20 less than the one before: 45 − 20 = 25.'
 },
 {
 id: '45',
 text: 'Which number can be placed on the line to make the number sentence true? <br>17 = ___ × 17',
 type: 'multiple-choice',
 options: ['0', '1', '2', '17'],
 correctAnswer: 1, 
 explanation: 'Any number multiplied by 1 is itself, so 1 × 17 = 17.'
 },
 {
 id: '46',
 text: 'Yoshi used a skip counting rule to complete the number pattern shown. <br>312 &nbsp; 315 &nbsp; 318 &nbsp; 321 &nbsp; 324 &nbsp; ___ <br>The skip counting rule continues. What will be the next number in Yoshi\'s pattern?',
 type: 'multiple-choice',
 options: ['325', '327', '330', '332'],
 correctAnswer: 1, 
 explanation: 'The rule is to count by 3s: 324 + 3 = 327.'
 },
 {
 id: '47',
 text: 'The table shows the total costs of different numbers of pencils. <br><img src="images/48.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the pattern in the table, what will be the total cost for 6 pencils?',
 type: 'multiple-choice',
 options: ['$1.00', '$1.25', '$1.50', '$1.75'],
 correctAnswer: 2, 
 explanation: 'Each pencil costs $0.25, so 6 pencils cost $1.25 + $0.25 = $1.50.'
 },
 {
 id: '48',
 text: '9 × 2 = ___',
 type: 'multiple-choice',
 options: ['6 × 3', '3 × 3', '3 × 8', '5 × 3'],
 correctAnswer: 0, 
 explanation: '9 × 2 = 18 and 6 × 3 = 18.'
 },
 {
 id: '49',
 text: 'Susan found these in an old box. <br><img src="images/50.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which chart shows the correct number of each?',
 type: 'multiple-choice',
 options: [
    {url: 'images/50a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Count each kind of utensil: 3 forks, 7 spoons, and 9 knives. Chart H shows these numbers.'
 }
];

// Scaled Score Mapping for Grade 3 Mathematics (2007)
// Maps raw scores (number correct out of 50) to scaled scores
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
  // Question 36 of the released test required measuring with a physical ruler and was removed.
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
        testType: 'Grade 3 Mathematics (2007)'
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
        result.testType = 'Grade 3 Mathematics (2007)';
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
            testType: 'Grade 3 Mathematics (2007)'
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