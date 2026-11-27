window.TEST_IDENTIFIER = 'math_grade6_2010';

const sampleQuestions = [
 {
 id: '1',
 text: 'Hayden has $20 to spend at the county fair. Admission to the fair is $5.00 per person, and tickets for food and games are $1.25 per ticket. What information is needed to calculate the amount of money that Hayden will have left after attending the fair?',
 type: 'multiple-choice',
 options: ['The number of prizes he won', 'The number of hours he attended', 'The number of tickets he purchased', 'The number of miles the fair is from his house'],
 correctAnswer: 2, 
 explanation: 'To find how much money Hayden spent, you need to know how many $1.25 tickets he bought in addition to the $5.00 admission.'
 },
 {
 id: '2',
 text: 'Amy bought three CDs for $15.34, $17.57, and $10.29, including sales tax. She gave the clerk $50.00. Which is closest to the amount of change Amy should receive?',
 type: 'multiple-choice',
 options: ['$1.00', '$7.00', '$10.00', '$17.00'],
 correctAnswer: 1, 
 explanation: 'Estimate the total: $15 + $18 + $10 = $43. $50 − $43 = $7.'
 },
 {
 id: '3',
 text: 'What is 11.25 divided by 0.5?',
 type: 'multiple-choice',
 options: ['2,250', '225', '22.5', '2.25'],
 correctAnswer: 2, 
 explanation: 'Dividing by 0.5 is the same as multiplying by 2: 11.25 × 2 = 22.5.'
 },
 {
 id: '4',
 text: 'Donna and Darcy collected newspapers for recycling. Donna collected 5 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> pounds of newspaper. Darcy collected 2 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> pounds of newspaper. What was the total amount of newspaper they collected?',
 type: 'multiple-choice',
 options: ['8 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> pounds', '8 pounds', '7 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> pounds', '7 pounds'],
 correctAnswer: 1, 
 explanation: '5 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> + 2 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = 7 <math><mfrac><mn>4</mn><mn>4</mn></mfrac></math> = 8 pounds.'
 },
 {
 id: '5',
 text: 'In her shopping cart, Jody has 2 pounds of oranges at $0.99 per pound, 3 cans of soup at $1.19 per can, and 1 gallon of ice cream at $3.79 per gallon. Which is closest to the total cost of the items in her shopping cart?',
 type: 'multiple-choice',
 options: ['$9.00', '$8.00', '$7.00', '$6.00'],
 correctAnswer: 0, 
 explanation: '2 × $0.99 = $1.98, 3 × $1.19 = $3.57, and $3.79. The total is $9.34, which is closest to $9.00.'
 },
 {
 id: '6',
 text: '0.64 ÷ 0.008 = ___',
 type: 'multiple-choice',
 options: ['8', '80', '800', '8,000'],
 correctAnswer: 1, 
 explanation: 'Move both decimal points three places to the right: 640 ÷ 8 = 80.'
 },
 {
 id: '7',
 text: 'Which fraction is equivalent to <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> ÷ <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>5</mn><mn>18</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>', '1 <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'Multiply by the reciprocal: <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> × <math><mfrac><mn>3</mn><mn>1</mn></mfrac></math> = <math><mfrac><mn>15</mn><mn>6</mn></mfrac></math> = 2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '8',
 text: 'Look at the table. <br><img src="images/8.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which could be used to determine the total amount of money Gwen spent before tax?',
 type: 'multiple-choice',
 options: ['Multiply the cost per item by the number of items, then add the products', 'Divide the cost per item by the number of items, then multiply the quotients', 'Divide the cost per item by the number of items, then add the quotients', 'Multiply the cost per item by the number of items, then multiply the products'],
 correctAnswer: 0, 
 explanation: 'Find the cost of each type of item by multiplying, then add those amounts to find the total.'
 },
 {
 id: '9',
 text: 'Jasmine’s recipe requires <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> cup flour. She has only <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> cup of flour in the pantry. How much more flour does she need?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>7</mn><mn>6</mn></mfrac></math> cups', '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math> cup', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> cup', '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> cup'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> − <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>6</mn></mfrac></math> − <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> cup.'
 },
 {
 id: '10',
 text: 'The table shows the prices for CDs at 4 different stores. <br><img src="images/10.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which store has the lowest price per CD?',
 type: 'multiple-choice',
 options: ['Budget Buy', 'CD City', 'Music Mall', 'Shop Smart'],
 correctAnswer: 2, 
 explanation: 'Divide each total price by the number of CDs: Budget Buy $7.50, CD City about $8.00, Music Mall about $7.33, Shop Smart $8.99. Music Mall has the lowest price per CD.'
 },
 {
 id: '11',
 text: 'A prime number can <i>best</i> be described as —',
 type: 'multiple-choice',
 options: ['a number with more than 2 different factors', 'a number with exactly 2 different factors', 'always an even number', 'always an odd number'],
 correctAnswer: 1, 
 explanation: 'A prime number has exactly 2 different factors: 1 and itself.'
 },
 {
 id: '12',
 text: 'What is the greatest common factor of 18 and 33?',
 type: 'multiple-choice',
 options: ['594', '198', '6', '3'],
 correctAnswer: 3, 
 explanation: 'The factors of 18 are 1, 2, 3, 6, 9, 18. The factors of 33 are 1, 3, 11, 33. The greatest common factor is 3.'
 },
 {
 id: '13',
 text: 'Which decimals are ordered from <i>least</i> to <i>greatest</i>?',
 type: 'multiple-choice',
 options: ['0.009, 0.8, 0.05, 1.0', '0.009, 0.05, 0.8, 1.0', '1.0, 0.05, 0.8, 0.009', '1.0, 0.8, 0.05, 0.009'],
 correctAnswer: 1, 
 explanation: 'As thousandths: 0.009, 0.050, 0.800, 1.000. So the order is 0.009, 0.05, 0.8, 1.0.'
 },
 {
 id: '14',
 text: 'Which of the following is true?',
 type: 'multiple-choice',
 options: ['−16 = 16', '−29 > 24', '−47 < −43', '−70 < −77'],
 correctAnswer: 2, 
 explanation: 'On a number line, −47 is to the left of −43, so −47 < −43.'
 },
 {
 id: '15',
 text: 'Sam owns a canoe rental company with 120 boats. He has 55 wood boats, and the rest are fiberglass. What is the ratio of wood boats to fiberglass boats?',
 type: 'multiple-choice',
 options: ['55:65', '65:55', '120:55', '120:65'],
 correctAnswer: 0, 
 explanation: 'There are 120 − 55 = 65 fiberglass boats, so the ratio of wood to fiberglass is 55:65.'
 },
 {
 id: '16',
 text: 'Which is a composite number?',
 type: 'multiple-choice',
 options: ['49', '47', '37', '29'],
 correctAnswer: 0, 
 explanation: 'A composite number has more than 2 factors. 49 = 7 × 7, so 49 is composite.'
 },
 {
 id: '17',
 text: 'Which percent is equivalent to <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['15%', '20%', '35%', '60%'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math> = <math><mfrac><mn>60</mn><mn>100</mn></mfrac></math> = 60%.'
 },
 {
 id: '18',
 text: 'Which digit could be found in the ones place of an odd number?',
 type: 'multiple-choice',
 options: ['0', '1', '2', '4'],
 correctAnswer: 1, 
 explanation: 'Odd numbers end in 1, 3, 5, 7, or 9.'
 },
 {
 id: '19',
 text: 'Which is closest to the area of a classroom bulletin board?',
 type: 'multiple-choice',
 options: ['2,000 square inches', '2,000 square feet', '2,000 cubic inches', '2,000 cubic feet'],
 correctAnswer: 0, 
 explanation: 'Area is measured in square units, and a bulletin board is about 2,000 square inches (2,000 square feet would be larger than a classroom).'
 },
 {
 id: '20',
 text: 'Which angle has a measure closest to 90°? <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['∠HQA', '∠HQB', '∠HQD', '∠HQE'],
 correctAnswer: 1, 
 explanation: 'A 90° angle is a right angle, like the corner of a square. ∠HQB appears closest to a right angle.'
 },
 {
 id: '21',
 text: 'How many ounces are equivalent to 25 pounds?',
 type: 'multiple-choice',
 options: ['175 ounces', '200 ounces', '370 ounces', '400 ounces'],
 correctAnswer: 3, 
 explanation: 'There are 16 ounces in 1 pound: 25 × 16 = 400 ounces.'
 },
 {
 id: '22',
 text: 'Nikki drew a sketch of the floor plan of her home. <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which two rooms in Nikki’s sketch appear to be congruent?',
 type: 'multiple-choice',
 options: ['Bedroom 1 and Family Room', 'Dining Room and Bedroom 1', 'Living Room and Bedroom 2', 'Living Room and Dining Room'],
 correctAnswer: 0, 
 explanation: 'Congruent figures have the same size and shape.'
 },
 {
 id: '23',
 text: 'A wheel has a radius of 67.5 meters. Which is closest to the circumference of this wheel?',
 type: 'multiple-choice',
 options: ['211.95 m', '423.9 m', '4,556.25 m', '14,306.62 m'],
 correctAnswer: 1, 
 explanation: 'C = 2πr ≈ 2 × 3.14 × 67.5 = 423.9 m.'
 },
 {
 id: '24',
 text: 'What is equivalent to 3 gallons?',
 type: 'multiple-choice',
 options: ['3 quarts', '4 quarts', '6 quarts', '12 quarts'],
 correctAnswer: 3, 
 explanation: 'There are 4 quarts in 1 gallon: 3 × 4 = 12 quarts.'
 },
 {
 id: '25',
 text: 'What is the area of the triangle shown? <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['32 cm<sup>2</sup>', '40 cm<sup>2</sup>', '48 cm<sup>2</sup>', '96 cm<sup>2</sup>'],
 correctAnswer: 2, 
 explanation: 'A = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>bh = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> × 8 × 12 = 48 cm<sup>2</sup>.'
 },
 {
 id: '26',
 text: 'What number of feet equals 24 yards?',
 type: 'multiple-choice',
 options: ['2', '8', '72', '288'],
 correctAnswer: 2, 
 explanation: 'There are 3 feet in 1 yard: 24 × 3 = 72 feet.'
 },
 {
 id: '27',
 text: 'Three angle measures of quadrilateral WXYZ are labeled in the figure. <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the measure of ∠WZY?',
 type: 'multiple-choice',
 options: ['112°', '158°', '202°', '248°'],
 correctAnswer: 0, 
 explanation: 'The angles of a quadrilateral add to 360°. Subtract the three known angles from 360° to get 112°.'
 },
 {
 id: '28',
 text: 'Which triangle appears to have 3 congruent angles?',
 type: 'multiple-choice',
 options: [
    {url: 'images/28a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A triangle with 3 congruent angles is equilateral, so all three sides also appear equal.'
 },
 {
 id: '29',
 text: 'Which of the following shapes is <i>not</i> a parallelogram?',
 type: 'multiple-choice',
 options: ['Trapezoid', 'Rectangle', 'Rhombus', 'Square'],
 correctAnswer: 0, 
 explanation: 'A parallelogram has 2 pairs of parallel sides. A trapezoid has exactly 1 pair of parallel sides.'
 },
 {
 id: '30',
 text: 'A net of a three-dimensional figure is shown below. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is most likely the figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Fold the net in your mind and match its faces to the faces of each figure.'
 },
 {
 id: '31',
 text: 'If a data set has an odd number of data and is in numerical order, then the middle value represents the —',
 type: 'multiple-choice',
 options: ['median', 'range', 'mean', 'mode'],
 correctAnswer: 0, 
 explanation: 'The median is the middle value of a data set in numerical order.'
 },
 {
 id: '32',
 text: 'The first 200 visitors to a state park were asked about their favorite park activity. The results are shown in this circle graph. <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is closest to the number of these 200 visitors who said hiking was their favorite activity?',
 type: 'multiple-choice',
 options: ['25 visitors', '40 visitors', '50 visitors', '75 visitors'],
 correctAnswer: 2, 
 explanation: 'Hiking takes up about one-fourth of the circle, and <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> of 200 is 50 visitors.'
 },
 {
 id: '33',
 text: 'This box-and-whisker plot displays information about the test scores for 25 students. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the information in this box-and-whisker plot, which of the following statements is <i>true</i>?',
 type: 'multiple-choice',
 options: ['The highest score on the test is 90.', 'The range of the test scores is 15.', 'The median test score is 85.', 'The mean test score is 85.'],
 correctAnswer: 2, 
 explanation: 'The line inside the box shows the median, which is 85.'
 },
 {
 id: '34',
 text: 'A bag contains 4 red, 5 green, 3 blue, and 6 yellow tiles of equal size and shape. One tile is randomly selected from the bag. What is the probability that the tile selected is blue?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'There are 4 + 5 + 3 + 6 = 18 tiles and 3 are blue: <math><mfrac><mn>3</mn><mn>18</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>.'
 },
 {
 id: '35',
 text: 'Look at the table. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the mean of the number of tickets sold over these four days?',
 type: 'multiple-choice',
 options: ['25', '27', '28', '29'],
 correctAnswer: 2, 
 explanation: '36 + 25 + 18 + 33 = 112, and 112 ÷ 4 = 28.'
 },
 {
 id: '36',
 text: 'Mr. Murphy asked 24 of his students how many miles they live from the school. The stem-and-leaf plot shows the data. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is a true conclusion based on the data in the stem-and-leaf plot?',
 type: 'multiple-choice',
 options: ['Five students live 1 mile from the school.', 'Three students live 4 miles from the school.', 'Exactly half the students live 7 or more miles from the school.', 'The maximum distance a student lives from the school is 15 miles.'],
 correctAnswer: 0, 
 explanation: 'The stem 0 row has five leaves of 1, so five students live 1 mile from the school.'
 },
 {
 id: '37',
 text: 'Andy is packing clothes for a camping trip. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the chart, which of the following shows all of Andy’s possible clothing combinations of 1 color of shirt, 1 type of pants, and 1 type of shoes?',
 type: 'multiple-choice',
 options: ['blue shirt, shorts, boots <br>blue shirt, shorts, sandals <br>blue shirt, jeans, boots <br>blue shirt, jeans, sandals <br>green shirt, shorts, boots <br>green shirt, shorts, sandals <br>green shirt, jeans, boots <br>green shirt, jeans, sandals', 'blue shirt, shorts, boots <br>blue shirt, jeans, sandals <br>green shirt, shorts, boots <br>green shirt, jeans, sandals', 'blue shirt, shorts, boots <br>blue shirt, shorts, sandals <br>blue shirt, jeans, boots <br>blue shirt, jeans, sandals <br>green shirt, shorts, boots <br>green shirt, jeans, boots', 'red shirt, shorts, sandals <br>red shirt, jeans, sandals <br>blue shirt, shorts, boots <br>green shirt, jeans, sandals'],
 correctAnswer: 0, 
 explanation: 'There are 2 × 2 × 2 = 8 possible combinations, so the list must have 8 different outfits.'
 },
 {
 id: '38',
 text: 'This graph shows the number of people who used the Internet each year in the United States from 1997 to 2003. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the information in the graph, between which two years did the smallest increase occur?',
 type: 'multiple-choice',
 options: ['1997 and 1998', '1998 and 1999', '2001 and 2002', '2002 and 2003'],
 correctAnswer: 3, 
 explanation: 'The smallest increase is where the graph rises the least from one year to the next.'
 },
 {
 id: '39',
 text: 'What value of <i>m</i> makes this number sentence true? <br><i>m</i> − 5 = 35',
 type: 'multiple-choice',
 options: ['175', '40', '30', '7'],
 correctAnswer: 1, 
 explanation: 'Add 5 to both sides: <i>m</i> = 35 + 5 = 40.'
 },
 {
 id: '40',
 text: 'Which word describes the boxed number? <br><span style="border: 1px solid; padding: 0 3px;">8</span><i>x</i> = <i>y</i>',
 type: 'multiple-choice',
 options: ['Term', 'Variable', 'Equation', 'Coefficient'],
 correctAnswer: 3, 
 explanation: 'A coefficient is a number multiplied by a variable. In 8<i>x</i>, 8 is the coefficient.'
 },
 {
 id: '41',
 text: 'Based on the equation mat, what is the value for <i>x</i>? <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['2', '6', '22', '112'],
 correctAnswer: 1, 
 explanation: 'The left side has <i>x</i> + 8 and the right side has 14, so <i>x</i> = 14 − 8 = 6.'
 },
 {
 id: '42',
 text: 'What is the solution to the following? <br><math><mfrac><mn>n</mn><mn>6</mn></mfrac></math> = 36',
 type: 'multiple-choice',
 options: ['<i>n</i> = 6', '<i>n</i> = 30', '<i>n</i> = 42', '<i>n</i> = 216'],
 correctAnswer: 3, 
 explanation: 'Multiply both sides by 6: <i>n</i> = 36 × 6 = 216.'
 },
 {
 id: '43',
 text: 'If the arithmetic pattern shown continues, what will be the <i>8th</i> number? <br>54, 48, 42, 36, . . .',
 type: 'multiple-choice',
 options: ['34', '30', '12', '6'],
 correctAnswer: 2, 
 explanation: 'Subtract 6 each time: 54, 48, 42, 36, 30, 24, 18, 12. The 8th number is 12.'
 },
 {
 id: '44',
 text: 'Which of the following numbers is <i>not</i> a perfect square?',
 type: 'multiple-choice',
 options: ['49', '90', '121', '144'],
 correctAnswer: 1, 
 explanation: '49 = 7<sup>2</sup>, 121 = 11<sup>2</sup>, and 144 = 12<sup>2</sup>. 90 is not the square of a whole number.'
 },
 {
 id: '45',
 text: 'Which of the following is equivalent to 6 × 6 × 6 × 6 × 6?',
 type: 'multiple-choice',
 options: ['36<sup>6</sup>', '30<sup>6</sup>', '6<sup>5</sup>', '5<sup>6</sup>'],
 correctAnswer: 2, 
 explanation: '6 is used as a factor 5 times, so the expression equals 6<sup>5</sup>.'
 },
 {
 id: '46',
 text: 'This pattern repeats after the first four shapes. <br><img src="images/46.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What should be the 11th shape in this repeating pattern?',
 type: 'multiple-choice',
 options: [
    {url: 'images/46a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/46b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/46c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/46d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The pattern repeats every 4 shapes. 11 = 4 + 4 + 3, so the 11th shape is the same as the 3rd shape.'
 },
 {
 id: '47',
 text: 'What number sentence is modeled by the shapes shown? <br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<i>x</i> + 4 = 12', '4<i>x</i> = 12', '4<i>x</i> = 3', '<i>x</i> = 9'],
 correctAnswer: 1, 
 explanation: 'There are 4 <i>x</i>-tiles on one side and 12 unit tiles on the other, so 4<i>x</i> = 12.'
 },
 {
 id: '48',
 text: 'What is the <i>10th</i> term in the increasing pattern shown? <br>1, 1, 2, 3, 5, 8, 13',
 type: 'multiple-choice',
 options: ['144', '89', '55', '34'],
 correctAnswer: 2, 
 explanation: 'Each term is the sum of the two terms before it: 13, 21, 34, 55. The 10th term is 55.'
 },
 {
 id: '49',
 text: 'Which could be the rule for the following pattern? <br>1,000 100 10 1 0.1 0.01',
 type: 'multiple-choice',
 options: ['Divide the previous number by 10.', 'Multiply the previous number by 10.', 'Subtract 900 from the previous number.', 'Add 0.09 to the previous number.'],
 correctAnswer: 0, 
 explanation: 'Each number is the previous number divided by 10.'
 },
 {
 id: '50',
 text: 'Which of these is the variable in the number sentence 4<i>x</i> + 3 = 8?',
 type: 'multiple-choice',
 options: ['4', '3', '+', '<i>x</i>'],
 correctAnswer: 3, 
 explanation: 'A variable is a letter that represents an unknown value. The variable is <i>x</i>.'
 }
];

// Scaled Score Mapping for Grade 6 Mathematics (2010)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 28,
  2: 83,
  3: 117,
  4: 141,
  5: 161,
  6: 177,
  7: 192,
  8: 205,
  9: 217,
  10: 227,
  11: 238,
  12: 247,
  13: 256,
  14: 265,
  15: 273,
  16: 281,
  17: 289,
  18: 297,
  19: 304,
  20: 312,
  21: 319,
  22: 326,
  23: 334,
  24: 341,
  25: 348,
  26: 355,
  27: 362,
  28: 369,
  29: 377,
  30: 384,
  31: 391,
  32: 399,
  33: 407,
  34: 415,
  35: 423,
  36: 432,
  37: 440,
  38: 450,
  39: 460,
  40: 470,
  41: 481,
  42: 493,
  43: 506,
  44: 521,
  45: 538,
  46: 558,
  47: 583,
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

// Independent Results Manager for Grade 6 Math
(function() {
  'use strict';
  
  console.log(`Grade 6 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 6 Math`);
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
        testType: 'Grade 6 Mathematics (2010)'
      };
      
      console.log(`Saving Grade 6 Math result: ${rawScore}/50 → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 6 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 6 Mathematics (2010)';
        updated = true;
        console.log(`Enhanced Grade 6 Math result ${index + 1}: ${result.rawScore}/50 → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 6 Math results saved');
      
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
            testType: 'Grade 6 Mathematics (2010)'
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
    console.log('Initializing Grade 6 Math independent results system');
    
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
    
    console.log('Grade 6 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();