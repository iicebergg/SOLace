window.TEST_IDENTIFIER = 'math_grade8_2009';

const sampleQuestions = [
 {
 id: '1',
 text: 'According to the order of operations, which operation should be performed first to simplify the expression? <br>12 + 2 · 5<sup>2</sup> − 1',
 type: 'multiple-choice',
 options: ['12 + 2', '5 − 1', '2 · 5', '5<sup>2</sup>'],
 correctAnswer: 3, 
 explanation: 'Exponents are evaluated before multiplication, addition, and subtraction, so 5<sup>2</sup> comes first.'
 },
 {
 id: '2',
 text: '5.78 × 10<sup>5</sup> = ___',
 type: 'multiple-choice',
 options: ['57,800,000', '578,000', '0.0000578', '0.00000578'],
 correctAnswer: 1, 
 explanation: 'Move the decimal point 5 places to the right: 5.78 × 10<sup>5</sup> = 578,000.'
 },
 {
 id: '3',
 text: 'Which of the following does <i>not</i> contain the number 24?',
 type: 'multiple-choice',
 options: ['Integers', 'Whole numbers', 'Natural numbers', 'Irrational numbers'],
 correctAnswer: 3, 
 explanation: '24 is a natural number, a whole number, and an integer. It is rational, so it is not in the set of irrational numbers.'
 },
 {
 id: '4',
 text: 'Which value is equivalent to 22 − 2<sup>3</sup>?',
 type: 'multiple-choice',
 options: ['14', '16', '20', '30'],
 correctAnswer: 0, 
 explanation: '2<sup>3</sup> = 8, so 22 − 8 = 14.'
 },
 {
 id: '5',
 text: 'What is 102,000,000 expressed in scientific notation?',
 type: 'multiple-choice',
 options: ['1.02 × 10<sup>9</sup>', '1.02 × 10<sup>8</sup>', '1.02 × 10<sup>7</sup>', '1.02 × 10<sup>6</sup>'],
 correctAnswer: 1, 
 explanation: 'Move the decimal point 8 places to the left: 102,000,000 = 1.02 × 10<sup>8</sup>.'
 },
 {
 id: '6',
 text: 'Which of the following is <i>not</i> a rational number?',
 type: 'multiple-choice',
 options: ['−0.75', '0', '√4', '√15'],
 correctAnswer: 3, 
 explanation: '15 is not a perfect square, so √15 is irrational. (√4 = 2 is rational.)'
 },
 {
 id: '7',
 text: 'Which statement is true?',
 type: 'multiple-choice',
 options: ['0.09 > <math><mfrac><mn>7</mn><mn>8</mn></mfrac></math>', '6% < 0.09', '<math><mfrac><mn>7</mn><mn>8</mn></mfrac></math> < 8.0 × 10<sup>−3</sup>', '8.0 × 10<sup>−3</sup> > 6%'],
 correctAnswer: 1, 
 explanation: '6% = 0.06, and 0.06 < 0.09.'
 },
 {
 id: '8',
 text: 'Between which two whole numbers is √33?',
 type: 'multiple-choice',
 options: ['32 and 34', '16 and 17', '6 and 7', '5 and 6'],
 correctAnswer: 3, 
 explanation: '5<sup>2</sup> = 25 and 6<sup>2</sup> = 36. Since 33 is between 25 and 36, √33 is between 5 and 6.'
 },
 {
 id: '9',
 text: 'What is the value of the following when <i>v</i> = 2? <br>5(<i>v</i> − 10) − 7',
 type: 'multiple-choice',
 options: ['−47', '−7', '7', '47'],
 correctAnswer: 0, 
 explanation: '5(2 − 10) − 7 = 5(−8) − 7 = −40 − 7 = −47.'
 },
 {
 id: '10',
 text: 'The school had a fundraiser. Students collected money at three locations. They spent $17.80 on materials. <br><img src="images/10.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How much money did they make in the fundraiser after subtracting the cost of materials?',
 type: 'multiple-choice',
 options: ['$148.20', '$183.80', '$201.60', '$219.40'],
 correctAnswer: 1, 
 explanation: '$87.95 + $49.40 + $64.25 = $201.60, and $201.60 − $17.80 = $183.80.'
 },
 {
 id: '11',
 text: 'What is the value of 3(<i>x</i><sup>2</sup> − 4<i>x</i>) when <i>x</i> = 5?',
 type: 'multiple-choice',
 options: ['5', '15', '30', '55'],
 correctAnswer: 1, 
 explanation: '3(25 − 20) = 3(5) = 15.'
 },
 {
 id: '12',
 text: 'Which of the following numbers is a perfect square?',
 type: 'multiple-choice',
 options: ['36', '28', '22', '14'],
 correctAnswer: 0, 
 explanation: '36 = 6 × 6, so it is a perfect square.'
 },
 {
 id: '13',
 text: 'What is the value of the expression 5(<i>a</i> + <i>b</i>) − 3(<i>b</i> + <i>c</i>) if <i>a</i> = 4, <i>b</i> = 3, and <i>c</i> = 2?',
 type: 'multiple-choice',
 options: ['20', '18', '14', '10'],
 correctAnswer: 0, 
 explanation: '5(4 + 3) − 3(3 + 2) = 35 − 15 = 20.'
 },
 {
 id: '14',
 text: 'The running shoes Gina bought at a 20%-off sale were originally priced at $70. Before tax was added, how much money did Gina save by buying the shoes on sale?',
 type: 'multiple-choice',
 options: ['$7', '$10', '$14', '$20'],
 correctAnswer: 2, 
 explanation: '20% of $70 = 0.20 × 70 = $14.'
 },
 {
 id: '15',
 text: '<br><img src="images/15.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following shows the figure after it has been reflected over the horizontal axis?',
 type: 'multiple-choice',
 options: [
    {url: 'images/15a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'A reflection over the horizontal axis changes (<i>x</i>, <i>y</i>) to (<i>x</i>, −<i>y</i>), so the figure is flipped upside down below the <i>x</i>-axis.'
 },
 {
 id: '16',
 text: 'If <span style="text-decoration: overline;"><i>CE</i></span> intersects <span style="text-decoration: overline;"><i>DF</i></span> at <i>X</i>, which angle <i>must</i> be congruent to ∠<i>CXD</i>? <br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['∠<i>CXF</i>', '∠<i>DXE</i>', '∠<i>FXD</i>', '∠<i>FXE</i>'],
 correctAnswer: 3, 
 explanation: '∠CXD and ∠FXE are vertical angles, so they are congruent.'
 },
 {
 id: '17',
 text: 'What is the volume of a square-based pyramid with base side lengths of 16 meters, a slant height of 17 meters, and a height of 15 meters?',
 type: 'multiple-choice',
 options: ['1,280 m<sup>3</sup>', '1,360 m<sup>3</sup>', '1,450 m<sup>3</sup>', '2,040 m<sup>3</sup>'],
 correctAnswer: 0, 
 explanation: 'V = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>Bh = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>(16 × 16)(15) = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>(256)(15) = 1,280 m<sup>3</sup>.'
 },
 {
 id: '18',
 text: 'What is the value of <i>m</i> in the right triangle shown? <br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['1.5', '4.0', '7.5', '10.5'],
 correctAnswer: 2, 
 explanation: '<i>m</i><sup>2</sup> = 6<sup>2</sup> + 4.5<sup>2</sup> = 36 + 20.25 = 56.25, so <i>m</i> = 7.5.'
 },
 {
 id: '19',
 text: 'What is the surface area of the rectangular prism shown? <br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['40 cm<sup>2</sup>', '79 cm<sup>2</sup>', '120 cm<sup>2</sup>', '158 cm<sup>2</sup>'],
 correctAnswer: 3, 
 explanation: 'S.A. = 2(8 × 5) + 2(8 × 3) + 2(5 × 3) = 80 + 48 + 30 = 158 cm<sup>2</sup>.'
 },
 {
 id: '20',
 text: 'A figure has the bottom and left-side views shown, and its front view is shaded. <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which represents the figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/20a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/20d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Check each figure from the bottom and from the left side. The correct figure matches both views.'
 },
 {
 id: '21',
 text: 'In this figure, two rays intersect <span style="text-decoration: overline;"><i>AD</i></span> at point <i>X</i>. The measure of ∠<i>AXB</i> is 32°. The figure is not necessarily drawn to scale. <br><img src="images/21.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the measure of ∠<i>BXD</i>?',
 type: 'multiple-choice',
 options: ['58°', '90°', '122°', '148°'],
 correctAnswer: 3, 
 explanation: '∠AXB and ∠BXD form a straight angle, so ∠BXD = 180° − 32° = 148°.'
 },
 {
 id: '22',
 text: 'Which graph shows <i>only</i> a translation?',
 type: 'multiple-choice',
 options: [
    {url: 'images/22a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/22b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/22c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/22d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'In a translation, every point slides the same distance in the same direction, and the figure is not turned or flipped.'
 },
 {
 id: '23',
 text: 'Three different views of a three-dimensional figure constructed from cubes are shown. <br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which figure could be represented by these views?',
 type: 'multiple-choice',
 options: [
    {url: 'images/23a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Check each figure from the front, right side, and top. The correct figure matches all three views.'
 },
 {
 id: '24',
 text: 'The legs of a right triangle measure 9 inches and 12 inches. What is the length of the hypotenuse of this triangle?',
 type: 'multiple-choice',
 options: ['3 in.', '8 in.', '15 in.', '21 in.'],
 correctAnswer: 2, 
 explanation: '<i>c</i><sup>2</sup> = 9<sup>2</sup> + 12<sup>2</sup> = 81 + 144 = 225, so <i>c</i> = 15 in.'
 },
 {
 id: '25',
 text: '<br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which correctly names the hypotenuse of the triangle pictured?',
 type: 'multiple-choice',
 options: ['∠<i>PZA</i>', '∠<i>APZ</i>', '<span style="text-decoration: overline;"><i>PZ</i></span>', '<span style="text-decoration: overline;"><i>AP</i></span>'],
 correctAnswer: 3, 
 explanation: 'The hypotenuse is the side opposite the right angle at Z, which is AP.'
 },
 {
 id: '26',
 text: 'In which figure is line <i>L</i> most likely a line of reflection?',
 type: 'multiple-choice',
 options: [
    {url: 'images/26a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/26b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/26c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/26d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A line of reflection divides the face into two mirror-image halves.'
 },
 {
 id: '27',
 text: 'Jill is playing a game with a spinner like the one pictured below. <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the sections are congruent, what is the probability that on Jill’s next spin the arrow will land on a section labeled red?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>15</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>16</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '4 of the 16 sections are red: <math><mfrac><mn>4</mn><mn>16</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>.'
 },
 {
 id: '28',
 text: 'The box-and-whisker plot shows the ages of employees at a local company. <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the apparent upper quartile of this plot?',
 type: 'multiple-choice',
 options: ['21', '35', '42', '78'],
 correctAnswer: 2, 
 explanation: 'The upper quartile is the right edge of the box, at about 42.'
 },
 {
 id: '29',
 text: 'Which element is located at row 3, column 2? <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['2', '7', '8', '9'],
 correctAnswer: 1, 
 explanation: 'Row 3 is 5, 7, 9. The element in column 2 is 7.'
 },
 {
 id: '30',
 text: 'This graph shows the number of students on the honor roll at three schools. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the total number of students on the honor roll at these three schools?',
 type: 'multiple-choice',
 options: ['525', '550', '575', '600'],
 correctAnswer: 2, 
 explanation: 'There are 11 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> symbols in all, and each represents 50 students: 11.5 × 50 = 575.'
 },
 {
 id: '31',
 text: 'In Happy Hills Pond, 2 out of 5 fish are goldfish. If 40 fish were randomly chosen from the pond, which is <i>most</i> likely the number of goldfish chosen?',
 type: 'multiple-choice',
 options: ['8', '16', '24', '37'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> × 40 = 16 goldfish.'
 },
 {
 id: '32',
 text: 'The matrix shows the number of male and female students in each of the classes at Bradley High School. <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>According to the matrix, how many male sophomores are there?',
 type: 'multiple-choice',
 options: ['626', '770', '924', '1,550'],
 correctAnswer: 2, 
 explanation: 'In the Sophomore row, the Male column shows 924.'
 },
 {
 id: '33',
 text: 'The table shows all of the possible outcomes when Juan tosses a penny, a nickel, and a quarter at the same time. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the probability that Juan’s result will be 3 tails on his first toss?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Only 1 of the 8 outcomes is 3 tails, so the probability is <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '34',
 text: 'Manuel surveyed his class to determine each student’s favorite sport. According to the circle graph, what percent of Manuel’s classmates selected football or baseball as their favorite sport? <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['20%', '25%', '45%', '55%'],
 correctAnswer: 2, 
 explanation: 'Football (25%) + baseball (20%) = 45%.'
 },
 {
 id: '35',
 text: 'In which table do all the ordered pairs make the following equation true? <br><i>x</i> + 3<i>y</i> = 15',
 type: 'multiple-choice',
 options: [
    {url: 'images/35a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Check each pair: 0 + 3(5) = 15, 3 + 3(4) = 15, and 6 + 3(3) = 15.'
 },
 {
 id: '36',
 text: 'Which rule represents the relation shown in the table? <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<i>y</i> = <i>x</i> − 1', '<i>y</i> = <i>x</i> + 3', '<i>y</i> = 2<i>x</i> − 3', '<i>y</i> = 2<i>x</i> + 3'],
 correctAnswer: 2, 
 explanation: '2(2) − 3 = 1, 2(3) − 3 = 3, 2(4) − 3 = 5, and so on.'
 },
 {
 id: '37',
 text: 'Jenna uses 36 beads to make 4 bracelets. How many of the same type of bracelet can Jenna make with 108 beads?',
 type: 'multiple-choice',
 options: ['12', '27', '432', '972'],
 correctAnswer: 0, 
 explanation: 'Each bracelet uses 9 beads, and 108 ÷ 9 = 12 bracelets.'
 },
 {
 id: '38',
 text: 'The following set of ordered pairs of the form (<i>x</i>, <i>y</i>) lie on the graph of a function of <i>x</i>. <br>{(0, −1), (1, 2), (2, 5), (3, 8)} <br>Which equation describes the function?',
 type: 'multiple-choice',
 options: ['<i>y</i> = 2<i>x</i> + 1', '<i>y</i> = <i>x</i> − 1', '<i>y</i> = <i>x</i> + 5', '<i>y</i> = 3<i>x</i> − 1'],
 correctAnswer: 3, 
 explanation: '<i>y</i> increases by 3 each time <i>x</i> increases by 1, and <i>y</i> = −1 when <i>x</i> = 0: <i>y</i> = 3<i>x</i> − 1.'
 },
 {
 id: '39',
 text: 'The table shows the number of hours it takes to mow a certain number of lawns. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph <i>best</i> represents the relationship shown in the table?',
 type: 'multiple-choice',
 options: [
    {url: 'images/39a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The number of lawns is half the number of hours, so the line starts at (0, 0) and passes through (4, 2) and (10, 5).'
 },
 {
 id: '40',
 text: 'What value of <i>n</i> makes the equation true? <br><math><mfrac><mn>2</mn><mn>3</mn></mfrac></math><i>n</i> + 4 = 10',
 type: 'multiple-choice',
 options: ['14 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '9', '5 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '4'],
 correctAnswer: 1, 
 explanation: 'Subtract 4: <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math><i>n</i> = 6. Multiply by <math><mfrac><mn>3</mn><mn>2</mn></mfrac></math>: <i>n</i> = 9.'
 },
 {
 id: '41',
 text: 'The formula for converting temperatures from Celsius to Fahrenheit is <i>F</i> = <math><mfrac><mn>9</mn><mn>5</mn></mfrac></math><i>C</i> + 32. Which temperature, in degrees Fahrenheit, is closest to 60°C?',
 type: 'multiple-choice',
 options: ['50.4°F', '65.3°F', '140.0°F', '165.6°F'],
 correctAnswer: 2, 
 explanation: '<i>F</i> = <math><mfrac><mn>9</mn><mn>5</mn></mfrac></math>(60) + 32 = 108 + 32 = 140°F.'
 },
 {
 id: '42',
 text: 'What is the domain of this relation? <br>{(1, −4), (3, 6), (−1, 1), (6, 0)}',
 type: 'multiple-choice',
 options: ['{1, 6}', '{−4, 0, 1, 6}', '{−1, 1, 3, 6}', '{−4, −1, 0, 1, 3, 6}'],
 correctAnswer: 2, 
 explanation: 'The domain is the set of <i>x</i>-values: {−1, 1, 3, 6}.'
 },
 {
 id: '43',
 text: 'What is the value of <i>x</i> in the following equation? <br>−4<i>x</i> + 2 = −14',
 type: 'multiple-choice',
 options: ['−4', '−3', '3', '4'],
 correctAnswer: 3, 
 explanation: 'Subtract 2: −4<i>x</i> = −16. Divide by −4: <i>x</i> = 4.'
 },
 {
 id: '44',
 text: '<br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph <i>best</i> represents the line defined by the table of ordered pairs?',
 type: 'multiple-choice',
 options: [
    {url: 'images/44a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The line passes through (−2, −1), (0, 0), and (2, 1), so it goes through the origin with a slope of <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '45',
 text: 'The values for a function of <i>x</i> are in the table. <br><img src="images/45.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the range of the function?',
 type: 'multiple-choice',
 options: ['{1, 2, 3, 4}', '{3.14, 12.56, 28.26, 50.24}', '{(1, 3.14), (2, 12.56), (3, 28.26), (4, 50.24)}', '{1, 2, 3, 4, 3.14, 12.56, 28.26, 50.24}'],
 correctAnswer: 1, 
 explanation: 'The range is the set of <i>y</i>-values.'
 },
 {
 id: '46',
 text: 'Which graph contains the ordered pairs in the table? <br><img src="images/46.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/46a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/46b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/46c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/46d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The line passes through (−2, 0), (0, −1), and (4, −3), so it has a slope of −<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> and crosses the <i>y</i>-axis at −1.'
 },
 {
 id: '47',
 text: 'A function of <i>x</i> is defined by the following equation. <br><i>y</i> = 5<i>x</i> + 12 <br>What is the independent variable?',
 type: 'multiple-choice',
 options: ['<i>x</i>', '<i>y</i>', '5', '12'],
 correctAnswer: 0, 
 explanation: 'The value of <i>y</i> depends on the value chosen for <i>x</i>, so <i>x</i> is the independent variable.'
 },
 {
 id: '48',
 text: 'The profit, <i>P</i>, a school makes selling <i>x</i> tickets to a play can be determined by the formula <i>P</i> = 8<i>x</i> − 400. If the school made a profit of $1200 on the play, how many tickets were sold?',
 type: 'multiple-choice',
 options: ['100', '150', '200', '250'],
 correctAnswer: 2, 
 explanation: '1,200 = 8<i>x</i> − 400, so 8<i>x</i> = 1,600 and <i>x</i> = 200 tickets.'
 },
 {
 id: '49',
 text: 'What value of <i>w</i> makes the following true? <br>3<i>w</i> − 5 = 7',
 type: 'multiple-choice',
 options: ['−4', '−1', '1', '4'],
 correctAnswer: 3, 
 explanation: 'Add 5: 3<i>w</i> = 12. Divide by 3: <i>w</i> = 4.'
 },
 {
 id: '50',
 text: 'To graph the equation <i>y</i> = 3<i>x</i> − 7, Renita created the following table of values. <br><img src="images/50.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which <i>y</i>-value corresponds to 7?',
 type: 'multiple-choice',
 options: ['−4', '14', '21', '28'],
 correctAnswer: 1, 
 explanation: '<i>y</i> = 3(7) − 7 = 21 − 7 = 14.'
 }
];

// Scaled Score Mapping for Grade 8 Mathematics (2009)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 1,
  2: 59,
  3: 94,
  4: 120,
  5: 141,
  6: 158,
  7: 173,
  8: 187,
  9: 199,
  10: 211,
  11: 221,
  12: 231,
  13: 241,
  14: 250,
  15: 259,
  16: 268,
  17: 276,
  18: 284,
  19: 292,
  20: 300,
  21: 307,
  22: 315,
  23: 322,
  24: 330,
  25: 337,
  26: 345,
  27: 352,
  28: 360,
  29: 368,
  30: 375,
  31: 383,
  32: 391,
  33: 399,
  34: 408,
  35: 417,
  36: 426,
  37: 435,
  38: 445,
  39: 455,
  40: 466,
  41: 478,
  42: 491,
  43: 505,
  44: 520,
  45: 538,
  46: 560,
  47: 586,
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

// Independent Results Manager for Grade 8 Math
(function() {
  'use strict';
  
  console.log(`Grade 8 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 8 Math`);
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
        testType: 'Grade 8 Mathematics (2009)'
      };
      
      console.log(`Saving Grade 8 Math result: ${rawScore}/50 → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 8 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 8 Mathematics (2009)';
        updated = true;
        console.log(`Enhanced Grade 8 Math result ${index + 1}: ${result.rawScore}/50 → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 8 Math results saved');
      
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
            testType: 'Grade 8 Mathematics (2009)'
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
    console.log('Initializing Grade 8 Math independent results system');
    
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
    
    console.log('Grade 8 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();