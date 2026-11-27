window.TEST_IDENTIFIER = 'math_grade5_2008';

const sampleQuestions = [
 {
 id: '1',
 text: '654 ÷ 8 = ___',
 type: 'multiple-choice',
 options: ['81 R6', '83', '84 R2', '88'],
 correctAnswer: 0, 
 explanation: '8 × 81 = 648, and 654 − 648 = 6, so 654 ÷ 8 = 81 R6.'
 },
 {
 id: '2',
 text: '1.32 − 0.86 = ___',
 type: 'multiple-choice',
 options: ['0.46', '0.54', '2.18', '4.60'],
 correctAnswer: 0, 
 explanation: 'Line up the decimal points and subtract: 1.32 − 0.86 = 0.46.'
 },
 {
 id: '3',
 text: 'The temperature of the water in a swimming pool is 51°F. Since the freezing point of water is 32°F, how many degrees would the temperature of the water have to drop to reach the freezing point?',
 type: 'multiple-choice',
 options: ['2°F', '9°F', '19°F', '21°F'],
 correctAnswer: 2, 
 explanation: '51 − 32 = 19°F.'
 },
 {
 id: '4',
 text: '2.4 × 3.15 = ___',
 type: 'multiple-choice',
 options: ['18.9', '7.56', '1.89', '0.756'],
 correctAnswer: 1, 
 explanation: '24 × 315 = 7,560. There are 3 decimal places in the factors, so 2.4 × 3.15 = 7.560 = 7.56.'
 },
 {
 id: '5',
 text: '7 <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math> − <math><mfrac><mn>1</mn><mn>10</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>', '7 <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>', '7 <math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>4</mn><mn>5</mn></mfrac></math> = <math><mfrac><mn>8</mn><mn>10</mn></mfrac></math>, so 7 <math><mfrac><mn>8</mn><mn>10</mn></mfrac></math> − <math><mfrac><mn>1</mn><mn>10</mn></mfrac></math> = 7 <math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>.'
 },
 {
 id: '6',
 text: '41.22 ÷ 2 = ___',
 type: 'multiple-choice',
 options: ['15.11', '20.11', '20.61', '21.51'],
 correctAnswer: 2, 
 explanation: '41.22 ÷ 2 = 20.61.'
 },
 {
 id: '7',
 text: 'There are 26 birdhouses made at a factory each hour. What is the total number of birdhouses made at the factory in 8 hours?',
 type: 'multiple-choice',
 options: ['34', '64', '202', '208'],
 correctAnswer: 3, 
 explanation: '26 × 8 = 208 birdhouses.'
 },
 {
 id: '8',
 text: '8,104 ÷ 2 = ___',
 type: 'multiple-choice',
 options: ['452', '4,052', '4,502', '40,052'],
 correctAnswer: 1, 
 explanation: '8,104 ÷ 2 = 4,052.'
 },
 {
 id: '9',
 text: 'Mr. Madrid bought 3 pairs of red mittens and 2 pairs of blue mittens. Each pair of mittens cost $10, including tax. What was the total cost of the mittens Mr. Madrid bought?',
 type: 'multiple-choice',
 options: ['$5', '$15', '$50', '$60'],
 correctAnswer: 2, 
 explanation: '3 + 2 = 5 pairs, and 5 × $10 = $50.'
 },
 {
 id: '10',
 text: '5 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> − 2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['2 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '3 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '3 <math><mfrac><mn>2</mn><mn>2</mn></mfrac></math>', '7 <math><mfrac><mn>5</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>, so 5 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> − 2 <math><mfrac><mn>2</mn><mn>4</mn></mfrac></math> = 3 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>.'
 },
 {
 id: '11',
 text: 'Jerry went to a local sporting goods store and bought a football and a basketball. <br><img src="images/11.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Since the prices included tax, how much did Jerry spend all together?',
 type: 'multiple-choice',
 options: ['$42.41', '$51.41', '$52.31', '$52.41'],
 correctAnswer: 3, 
 explanation: '$27.47 + $24.94 = $52.41.'
 },
 {
 id: '12',
 text: '8.5 ÷ 5 = ___',
 type: 'multiple-choice',
 options: ['1.5', '1.7', '15', '17'],
 correctAnswer: 1, 
 explanation: '8.5 ÷ 5 = 1.7.'
 },
 {
 id: '13',
 text: 'Which fraction is equivalent to 0.1?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>1</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>100</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>1000</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '0.1 is one tenth, or <math><mfrac><mn>1</mn><mn>10</mn></mfrac></math>.'
 },
 {
 id: '14',
 text: 'Which is true?',
 type: 'multiple-choice',
 options: ['97.856 > 98.765', '96.587 > 96.785', '97.568 > 97.685', '95.658 > 95.568'],
 correctAnswer: 3, 
 explanation: 'Both numbers have 95 ones. 6 tenths is greater than 5 tenths, so 95.658 > 95.568.'
 },
 {
 id: '15',
 text: 'One of the smallest butterflies in the world has a wingspan of 1.5 centimeters. What is the value of the digit 5 in 1.5?',
 type: 'multiple-choice',
 options: ['Five tenths', 'Five hundredths', 'Fifteen', 'Five'],
 correctAnswer: 0, 
 explanation: 'The 5 is in the tenths place, so its value is five tenths.'
 },
 {
 id: '16',
 text: 'Which is read “three and forty-one thousandths”?',
 type: 'multiple-choice',
 options: ['3,410', '3.041', '3.401', '3.410'],
 correctAnswer: 1, 
 explanation: 'Forty-one thousandths is 0.041, so the number is 3.041.'
 },
 {
 id: '17',
 text: 'Which decimal is equivalent to <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['0.3', '0.4', '0.6', '0.8'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math> = <math><mfrac><mn>6</mn><mn>10</mn></mfrac></math> = 0.6.'
 },
 {
 id: '18',
 text: 'What is 2.48 rounded to the nearest tenth?',
 type: 'multiple-choice',
 options: ['3.0', '2.5', '2.4', '2.0'],
 correctAnswer: 1, 
 explanation: 'The hundredths digit is 8, so round up: 2.48 rounds to 2.5.'
 },
 {
 id: '19',
 text: 'Which group of numbers is listed in order from <i>least</i> to <i>greatest</i>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>, 0.6, 0.25, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '0.6, <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, 0.25', '0.25, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, 0.6, <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '0.25, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>, 0.6'],
 correctAnswer: 2, 
 explanation: 'As decimals: 0.25, 0.5, 0.6, 0.75. So the order is 0.25, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, 0.6, <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>.'
 },
 {
 id: '20',
 text: 'How is 43.968 written in words?',
 type: 'multiple-choice',
 options: ['Forty-three and nine six eight', 'Forty-three and nine hundred sixty-eight', 'Forty-three and nine hundred sixty-eight hundredths', 'Forty-three and nine hundred sixty-eight thousandths'],
 correctAnswer: 3, 
 explanation: 'The last digit is in the thousandths place: forty-three and nine hundred sixty-eight thousandths.'
 },
 {
 id: '21',
 text: 'The water in Martha’s watering bucket is frozen. Which would <i>most</i> likely be the temperature of the water?',
 type: 'multiple-choice',
 options: ['100°C', '50°C', '25°C', '0°C'],
 correctAnswer: 3, 
 explanation: 'Water freezes at 0°C.'
 },
 {
 id: '22',
 text: 'Which set of shapes shows a reflection (flip) over the dotted line?',
 type: 'multiple-choice',
 options: [
    {url: 'images/23a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/23d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'A reflection produces a mirror image: each point is the same distance from the dotted line on the other side.'
 },
 {
 id: '23',
 text: 'What is the perimeter of a square with a side 12 centimeters long?',
 type: 'multiple-choice',
 options: ['24 cm', '48 cm', '72 cm', '144 cm'],
 correctAnswer: 1, 
 explanation: 'A square has 4 equal sides: 4 × 12 = 48 cm.'
 },
 {
 id: '24',
 text: 'Charles cut each piece of paper pictured below on the dotted lines shown. <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following are the shapes of the four pieces?',
 type: 'multiple-choice',
 options: ['Triangles and rectangles', 'Squares and triangles', 'Rectangles and circles', 'Squares and hexagons'],
 correctAnswer: 0, 
 explanation: 'Cutting a square along its diagonal makes two triangles. Cutting a square across the middle makes two rectangles.'
 },
 {
 id: '25',
 text: 'Which of the following appears to be a pair of similar shapes?',
 type: 'multiple-choice',
 options: [
    {url: 'images/26a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/26b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/26c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/26d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Similar shapes have the same shape but may be different sizes. All their sides are in the same proportion.'
 },
 {
 id: '26',
 text: 'Point <i>P</i> is the center of the circular target shown in the picture. <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which appears to be a diameter of the circle?',
 type: 'multiple-choice',
 options: ['<span style="text-decoration: overline;"><i>PQ</i></span>', '<span style="text-decoration: overline;"><i>SQ</i></span>', '<span style="text-decoration: overline;"><i>PR</i></span>', '<span style="text-decoration: overline;"><i>RQ</i></span>'],
 correctAnswer: 3, 
 explanation: 'A diameter passes through the center of the circle. RQ goes through point P.'
 },
 {
 id: '27',
 text: 'Which unit could be used to record the length of a desk?',
 type: 'multiple-choice',
 options: ['Inch', 'Liter', 'Pound', 'Gram'],
 correctAnswer: 0, 
 explanation: 'Inches measure length. Liters measure volume, and pounds and grams measure weight or mass.'
 },
 {
 id: '28',
 text: 'Which geometric figure has one square base and triangular faces?',
 type: 'multiple-choice',
 options: ['Cone', 'Cube', 'Cylinder', 'Pyramid'],
 correctAnswer: 3, 
 explanation: 'A square pyramid has one square base and triangular faces that meet at a point.'
 },
 {
 id: '29',
 text: 'Jason drew this diagram. He needs to buy enough fencing to put around the dog’s play pen. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which measure can Jason calculate to determine the amount of fencing he needs to buy?',
 type: 'multiple-choice',
 options: ['Area', 'Mass', 'Perimeter', 'Volume'],
 correctAnswer: 2, 
 explanation: 'Fencing goes around the pen, so Jason needs the perimeter.'
 },
 {
 id: '30',
 text: 'Which figure appears to have <i>only</i> 1 pair of parallel sides?',
 type: 'multiple-choice',
 options: [
    {url: 'images/31a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/31d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A trapezoid has exactly 1 pair of parallel sides.'
 },
 {
 id: '31',
 text: 'The picture shows five points on a grid. <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which three points can be connected to form a right triangle?',
 type: 'multiple-choice',
 options: ['Points <i>U</i>, <i>W</i>, and <i>Z</i>', 'Points <i>W</i>, <i>Y</i>, and <i>Z</i>', 'Points <i>X</i>, <i>W</i>, and <i>Z</i>', 'Points <i>X</i>, <i>W</i>, and <i>U</i>'],
 correctAnswer: 3, 
 explanation: 'X is directly above W, and U is directly left of W, so segments WX and WU form a right angle at W.'
 },
 {
 id: '32',
 text: 'On Saturday, the manager of a car wash kept a record of the number of cars that came to the car wash each hour. This lists the results. <br>15 42 34 26 20 31 <br>46 15 43 29 54 37 <br>Which of the following stem-and-leaf plots shows this same information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/33a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/33d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Stem 1: 5, 5. Stem 2: 0, 6, 9. Stem 3: 1, 4, 7. Stem 4: 2, 3, 6. Stem 5: 4.'
 },
 {
 id: '33',
 text: 'Trent used the spinner shown to play a board game. Each section of the spinner is the same size. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the probability the arrow will land on a section labeled green on Trent’s first spin?',
 type: 'multiple-choice',
 options: ['0.1', '0.2', '0.3', '0.4'],
 correctAnswer: 1, 
 explanation: '2 of the 10 sections are green: <math><mfrac><mn>2</mn><mn>10</mn></mfrac></math> = 0.2.'
 },
 {
 id: '34',
 text: 'The line graph shows Dana’s distance from home one afternoon. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>closest</i> to Dana’s distance from home at 4:45 p.m.?',
 type: 'multiple-choice',
 options: ['2 miles', '2.5 miles', '3 miles', '3.5 miles'],
 correctAnswer: 1, 
 explanation: 'At 4:45 p.m., the point on the graph is at about 2.5 miles.'
 },
 {
 id: '35',
 text: 'The picture below shows the price for each kind of birdhouse Nikos will sell at a craft fair. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the mode price of the birdhouses?',
 type: 'multiple-choice',
 options: ['$17', '$21', '$25', '$30'],
 correctAnswer: 2, 
 explanation: 'The mode is the price that appears most often. $25 appears twice.'
 },
 {
 id: '36',
 text: 'Mariko must write a report. The chart shows the different countries and topics from which she can choose. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which lists all the different combinations of 1 country and 1 topic Mariko can choose?',
 type: 'multiple-choice',
 options: ['France, Geography <br>France, Wildlife <br>France, History <br>Japan, Geography <br>Japan, Wildlife <br>Japan, History <br>Egypt, Geography <br>Egypt, Wildlife <br>Egypt, History', 'France, Geography <br>France, History <br>Japan, Geography <br>Japan, Wildlife <br>Egypt, Geography <br>Egypt, History', 'France, Geography <br>France, History <br>Japan, Geography <br>Japan, Wildlife <br>Egypt, History', 'France, Geography <br>Japan, Wildlife <br>Egypt, History'],
 correctAnswer: 0, 
 explanation: 'There are 3 countries and 3 topics, so there are 3 × 3 = 9 combinations.'
 },
 {
 id: '37',
 text: 'The table shows the number of each color of marble Rodney has in a box. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which question about the marbles can Rodney use knowledge about probability to solve?',
 type: 'multiple-choice',
 options: ['What is the total number of marbles in the box?', 'What is the chance of taking a yellow marble from the box on the first draw?', 'How many red marbles are in the box?', 'How many more blue marbles than red marbles are in the box?'],
 correctAnswer: 1, 
 explanation: 'Probability describes the chance that an event will happen.'
 },
 {
 id: '38',
 text: 'JoAnn recorded the daily high temperatures for one week in the table. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the mean (average) of this data?',
 type: 'multiple-choice',
 options: ['74°F', '78°F', '80°F', '90°F'],
 correctAnswer: 1, 
 explanation: '72 + 65 + 80 + 74 + 85 + 80 + 90 = 546, and 546 ÷ 7 = 78°F.'
 },
 {
 id: '39',
 text: 'The table shows the number of tickets sold at an amusement park during one week. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the median number of tickets sold at the park during that week?',
 type: 'multiple-choice',
 options: ['240', '380', '470', '477'],
 correctAnswer: 2, 
 explanation: 'In order: 270, 320, 380, 470, 510, 650, 740. The middle value is 470.'
 },
 {
 id: '40',
 text: '<i>z</i> ÷ 4 = ☐ <br>Which could be solved using this number sentence?',
 type: 'multiple-choice',
 options: ['Kim ate 4 times as many jellybeans as Zach. If <i>z</i> represents the number of jellybeans Zach ate, how many jellybeans did Kim eat?', 'Zach made 4 fewer basketball shots than Kim. If <i>z</i> represents the number of shots Kim made, how many shots did Zach make?', 'Zach made some cookies. He gave an equal number of cookies to 4 of his friends. If <i>z</i> represents the number of cookies Zach made, how many cookies did each friend get?', 'Zach and Kim collected a total of 4 insects. If <i>z</i> represents the number of insects Zach collected, how many insects did Kim collect?'],
 correctAnswer: 2, 
 explanation: 'Sharing <i>z</i> cookies equally among 4 friends is division: <i>z</i> ÷ 4.'
 },
 {
 id: '41',
 text: 'If <i>k</i> represents a number, which represents “23 times a number”?',
 type: 'multiple-choice',
 options: ['<i>k</i> + 23', '23 × <i>k</i>', '<i>k</i> ÷ 23', '23 − <i>k</i>'],
 correctAnswer: 1, 
 explanation: '“Times” means multiply: 23 × <i>k</i>.'
 },
 {
 id: '42',
 text: 'Michael used a rule to make the number pattern shown. <br>1, 2, 4, 8, 16 <br>If the pattern continues in the same way, what should Michael do to determine the 6th number?',
 type: 'multiple-choice',
 options: ['Multiply 16 by 2', 'Multiply 8 by 2', 'Multiply 4 by 2', 'Multiply 2 by 2'],
 correctAnswer: 0, 
 explanation: 'Each number is 2 times the one before it. The 5th number is 16, so the 6th number is 16 × 2.'
 },
 {
 id: '43',
 text: 'When five tiles are laid flat as shown, this design has one line of symmetry. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which tile, without rotating, could correctly complete this design?',
 type: 'multiple-choice',
 options: [
    {url: 'images/44a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The design must match on both sides of its line of symmetry, so the missing tile must be the mirror image of the tile across from it.'
 },
 {
 id: '44',
 text: 'Greg is making a math puzzle. Greg writes, “<i>w</i> is an even number.” Which of the following could represent the variable <i>w</i>?',
 type: 'multiple-choice',
 options: ['12', '15', '25', '51'],
 correctAnswer: 0, 
 explanation: '12 is the only even number.'
 },
 {
 id: '45',
 text: 'Tina has 5 more yellow flowers in her collection than blue flowers. If <i>b</i> represents the number of blue flowers in Tina’s collection, which can be used to determine the number of yellow flowers in her collection?',
 type: 'multiple-choice',
 options: ['<i>b</i> + 5 = ?', '<i>b</i> − 5 = ?', '<i>b</i> × 5 = ?', '<i>b</i> ÷ 5 = ?'],
 correctAnswer: 0, 
 explanation: '5 more than <i>b</i> is <i>b</i> + 5.'
 },
 {
 id: '46',
 text: 'If <i>M</i> represents a number, which of the following means “eight multiplied by a number”?',
 type: 'multiple-choice',
 options: ['<i>M</i> + 6', '<i>M</i> − 6', '8 ÷ <i>M</i>', '8 × <i>M</i>'],
 correctAnswer: 3, 
 explanation: 'Eight multiplied by a number is 8 × <i>M</i>.'
 },
 {
 id: '47',
 text: 'A number machine uses a rule to change numbers. The picture below shows the results. <br><img src="images/48.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which could be the rule used by this number machine?',
 type: 'multiple-choice',
 options: ['Divide by 2', 'Subtract 4', 'Multiply by 2', 'Add 4'],
 correctAnswer: 0, 
 explanation: '8 ÷ 2 = 4, 14 ÷ 2 = 7, and 18 ÷ 2 = 9. The rule is divide by 2.'
 },
 {
 id: '48',
 text: '<i>c</i> × 6 = ☐ <br>Which could be solved using this number sentence?',
 type: 'multiple-choice',
 options: ['Sarah bought 6 boxes of candy. Ryan also bought some boxes of candy. If <i>c</i> represents the number of boxes of candy Ryan bought, how many boxes of candy did Sarah and Ryan buy altogether?', 'Sarah has 6 boxes of candy. Each box has the same number of candies inside. If <i>c</i> represents the number of candies in each box, how many candies does Sarah have in all?', 'Sarah has 6 more boxes of candy than Ryan. If <i>c</i> represents the number of boxes Sarah has, how many boxes of candy does Ryan have?', 'Sarah gave 6 of her boxes of candy to Ryan. If <i>c</i> represents the number of boxes Sarah had, how many boxes did she have left?'],
 correctAnswer: 1, 
 explanation: '6 boxes with <i>c</i> candies in each box is <i>c</i> × 6 candies in all.'
 },
 {
 id: '49',
 text: 'If <i>P</i> represents a number, which of the following expressions means 10 more than that number?',
 type: 'multiple-choice',
 options: ['<i>P</i> · 10', '10 ÷ <i>P</i>', '<i>P</i> + 10', '10 − <i>P</i>'],
 correctAnswer: 2, 
 explanation: '10 more than <i>P</i> is <i>P</i> + 10.'
 }
];

// Scaled Score Mapping for Grade 5 Mathematics (2008)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 0,
  2: 51,
  3: 86,
  4: 111,
  5: 131,
  6: 148,
  7: 163,
  8: 177,
  9: 189,
  10: 200,
  11: 211,
  12: 221,
  13: 230,
  14: 239,
  15: 248,
  16: 256,
  17: 264,
  18: 272,
  19: 280,
  20: 288,
  21: 295,
  22: 303,
  23: 310,
  24: 318,
  25: 325,
  26: 333,
  27: 340,
  28: 348,
  29: 355,
  30: 363,
  31: 370,
  32: 378,
  33: 386,
  34: 395,
  35: 403,
  36: 412,
  37: 421,
  38: 431,
  39: 441,
  40: 452,
  41: 463,
  42: 476,
  43: 489,
  44: 505,
  45: 522,
  46: 543,
  47: 568,
  48: 600,
  49: 600,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 21 of the released test required measuring with a physical protractor and was removed.
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
        testType: 'Grade 5 Mathematics (2008)'
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
        result.testType = 'Grade 5 Mathematics (2008)';
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
            testType: 'Grade 5 Mathematics (2008)'
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