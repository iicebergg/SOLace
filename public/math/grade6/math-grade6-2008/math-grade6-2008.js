window.TEST_IDENTIFIER = 'math_grade6_2008';

const sampleQuestions = [
 {
 id: '1',
 text: '1.771 ÷ 0.07 = ___',
 type: 'multiple-choice',
 options: ['0.253', '2.53', '25.3', '253'],
 correctAnswer: 2, 
 explanation: 'Move both decimal points two places to the right: 177.1 ÷ 7 = 25.3.'
 },
 {
 id: '2',
 text: 'Look at the table. <br><img src="images/2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The sound of an airplane taking off is about 2.2 times louder than a person shouting. Which is the <i>best</i> estimate of the decibel level of an airplane taking off?',
 type: 'multiple-choice',
 options: ['100', '140', '200', '340'],
 correctAnswer: 1, 
 explanation: '2.2 × 65.4 ≈ 2 × 65 + 0.2 × 65 = 130 + 13 = 143, which is about 140.'
 },
 {
 id: '3',
 text: 'Tim mails two boxes of cookies to friends. One box weighs 1 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> pounds, and the other weighs 2 <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> pounds. What is the total weight of the two boxes?',
 type: 'multiple-choice',
 options: ['2 <math><mfrac><mn>1</mn><mn>7</mn></mfrac></math> pounds', '3 <math><mfrac><mn>5</mn><mn>12</mn></mfrac></math> pounds', '3 <math><mfrac><mn>5</mn><mn>7</mn></mfrac></math> pounds', '4 <math><mfrac><mn>5</mn><mn>12</mn></mfrac></math> pounds'],
 correctAnswer: 3, 
 explanation: '1 <math><mfrac><mn>9</mn><mn>12</mn></mfrac></math> + 2 <math><mfrac><mn>8</mn><mn>12</mn></mfrac></math> = 3 <math><mfrac><mn>17</mn><mn>12</mn></mfrac></math> = 4 <math><mfrac><mn>5</mn><mn>12</mn></mfrac></math> pounds.'
 },
 {
 id: '4',
 text: 'Lisa is having a meeting at her house. There are 48 members at the meeting. She estimates each member will drink 32 ounces of punch. Each bottle of punch contains 64 ounces. Which is the <i>best</i> estimate for the number of bottles of punch Lisa needs to buy?',
 type: 'multiple-choice',
 options: ['5', '15', '25', '35'],
 correctAnswer: 2, 
 explanation: 'Each member drinks half a bottle (32 ÷ 64), so 48 members need about 24 bottles, which is closest to 25.'
 },
 {
 id: '5',
 text: 'Sandra wants to buy 2 gallons of detergent. The table shows the sale price of four different brands of detergent. <br><img src="images/5.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following is the <i>least</i> expensive way for Sandra to buy 2 gallons of detergent?',
 type: 'multiple-choice',
 options: ['Buying 4 bottles of Fresh All', 'Buying 4 bottles of Mega Wash', 'Buying 2 bottles of Ultra Clean', 'Buying 1 bottle of No More Stains'],
 correctAnswer: 0, 
 explanation: 'Fresh All: 4 × $2.00 = $8.00. Mega Wash: $12.40. Ultra Clean: $13.00. No More Stains: $12.00. Fresh All is least expensive.'
 },
 {
 id: '6',
 text: 'Every week Sam saves $1.00 on Monday and $2.50 on Friday. If this is his total weekly savings, how many weeks would it take him to save enough to buy a $49 wireless phone?',
 type: 'multiple-choice',
 options: ['7 weeks', '14 weeks', '46 weeks', '52 weeks'],
 correctAnswer: 1, 
 explanation: 'Sam saves $3.50 each week, and $49 ÷ $3.50 = 14 weeks.'
 },
 {
 id: '7',
 text: '1 <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> − <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = ___',
 type: 'multiple-choice',
 options: ['1 <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '1 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '1 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '2 <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>, so 1 <math><mfrac><mn>5</mn><mn>6</mn></mfrac></math> − <math><mfrac><mn>2</mn><mn>6</mn></mfrac></math> = 1 <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math> = 1 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '8',
 text: 'Risa drank <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math> glass of lemonade. Fola drank <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> glass of lemonade. If the glasses held the same amount of lemonade, how much more did Risa drink than Fola?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> glass', '<math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> glass', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> glass', '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> glass'],
 correctAnswer: 1, 
 explanation: '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>, so <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math> − <math><mfrac><mn>2</mn><mn>8</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> glass.'
 },
 {
 id: '9',
 text: 'Look at the table. <br><img src="images/9.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the <i>total</i> distance the team will run in 4 weeks?',
 type: 'multiple-choice',
 options: ['23 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> miles', '47 miles', '70 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> miles', '94 miles'],
 correctAnswer: 3, 
 explanation: 'One week: 0 + 2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> + 3 + 2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> + 3 + 2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> + 10 = 23 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> miles. Four weeks: 4 × 23 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = 94 miles.'
 },
 {
 id: '10',
 text: 'Look at the menu. <br><img src="images/10.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is the <i>best</i> estimate of the difference between the cost of buying the Taco Plate dinner and the cost of buying rice, beans, and 2 tacos as sides?',
 type: 'multiple-choice',
 options: ['$2', '$5', '$7', '$10'],
 correctAnswer: 0, 
 explanation: 'Sides: $1.69 + $1.69 + 2 × $2.79 ≈ $9. The Taco Plate is about $7. The difference is about $2.'
 },
 {
 id: '11',
 text: 'All of these circles are the same size. Within each circle the pieces are equally divided. Which circle has the <i>least</i> amount shaded?',
 type: 'multiple-choice',
 options: [
    {url: 'images/11a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/11b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/11c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/11d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Find the fraction shaded in each circle and compare. The circle with the smallest fraction shaded has the least amount shaded.'
 },
 {
 id: '12',
 text: '<br><img src="images/12.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Based on the representations shown, which of the following is true?',
 type: 'multiple-choice',
 options: [
    {url: 'images/12a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/12b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/12c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/12d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: '6 filled circles represent −6 and 5 open circles represent 5. Since −6 < 5, the last statement is true.'
 },
 {
 id: '13',
 text: 'Which is equivalent to <math><mfrac><mn>3</mn><mn>20</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['3%', '5%', '15%', '20%'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>3</mn><mn>20</mn></mfrac></math> = <math><mfrac><mn>15</mn><mn>100</mn></mfrac></math> = 15%.'
 },
 {
 id: '14',
 text: 'Which of the following is a composite number?',
 type: 'multiple-choice',
 options: ['13', '15', '17', '23'],
 correctAnswer: 1, 
 explanation: '15 = 3 × 5, so it has more than two factors.'
 },
 {
 id: '15',
 text: 'The ratio of boys to girls in Room B is 15 to 12. What is the ratio of girls to <i>total</i> students in Room B?',
 type: 'multiple-choice',
 options: ['12 to 27', '12 to 15', '15 to 27', '15 to 12'],
 correctAnswer: 0, 
 explanation: 'There are 15 + 12 = 27 students, so the ratio of girls to total is 12 to 27.'
 },
 {
 id: '16',
 text: 'What is the greatest common factor of 12 and 20?',
 type: 'multiple-choice',
 options: ['2', '4', '60', '240'],
 correctAnswer: 1, 
 explanation: 'The factors of 12 are 1, 2, 3, 4, 6, 12. The factors of 20 are 1, 2, 4, 5, 10, 20. The greatest common factor is 4.'
 },
 {
 id: '17',
 text: 'Which of the following is true?',
 type: 'multiple-choice',
 options: ['0.310 < 0.275', '0.325 > 0.310', '0.325 < 0.275', '0.310 > 0.325'],
 correctAnswer: 1, 
 explanation: '0.325 has 2 hundredths and 0.310 has 1 hundredth, so 0.325 > 0.310.'
 },
 {
 id: '18',
 text: 'Which is a prime number?',
 type: 'multiple-choice',
 options: ['33', '35', '37', '39'],
 correctAnswer: 2, 
 explanation: '37 has exactly two factors, 1 and 37.'
 },
 {
 id: '19',
 text: 'The picture shows a section of Main Street. The car in the picture is 15 feet long. <br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which estimate is <i>closest</i> to the length of the section of Main Street shown in the picture?',
 type: 'multiple-choice',
 options: ['15 ft', '30 ft', '45 ft', '60 ft'],
 correctAnswer: 2, 
 explanation: 'The street section is about 3 car lengths long: 3 × 15 = 45 ft.'
 },
 {
 id: '20',
 text: 'Lou is making a pizza that has a radius of 9 inches. Which is closest to the area of the pizza?',
 type: 'multiple-choice',
 options: ['1,017.36 sq in.', '254.34 sq in.', '56.52 sq in.', '25.434 sq in.'],
 correctAnswer: 1, 
 explanation: 'A = πr<sup>2</sup> ≈ 3.14 × 81 = 254.34 sq in.'
 },
 {
 id: '21',
 text: 'Which statement is true about both a pyramid <i>and</i> a cone?',
 type: 'multiple-choice',
 options: ['Both have at least one vertex.', 'Both have a circular base.', 'Both have a rectangular base.', 'Both have at least one triangular face.'],
 correctAnswer: 0, 
 explanation: 'A pyramid and a cone each come to a point, called a vertex.'
 },
 {
 id: '22',
 text: 'Which is closest to the measure of the angle shown? <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['35°', '45°', '145°', '155°'],
 correctAnswer: 2, 
 explanation: 'The angle is obtuse. Reading the protractor from the side where the angle starts at 0°, it measures about 145°.'
 },
 {
 id: '23',
 text: 'Which word does <i>not</i> apply to every rectangle?',
 type: 'multiple-choice',
 options: ['Parallelogram', 'Quadrilateral', 'Polygon', 'Rhombus'],
 correctAnswer: 3, 
 explanation: 'A rhombus has 4 equal sides. Not every rectangle has 4 equal sides.'
 },
 {
 id: '24',
 text: 'Casey and her friends went to the library to work on their social studies project. They pushed the two tables pictured together. <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What will be the total area of the top of the two tables when they are pushed together?',
 type: 'multiple-choice',
 options: ['18 square feet', '24 square feet', '36 square feet', '48 square feet'],
 correctAnswer: 2, 
 explanation: 'Each table top is 6 × 3 = 18 square feet. Two tables: 2 × 18 = 36 square feet.'
 },
 {
 id: '25',
 text: 'Petra drew the angle shown. <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which figure <i>most likely</i> has an angle that is congruent to the angle Petra drew?',
 type: 'multiple-choice',
 options: [
    {url: 'images/25a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Petra’s angle measures about 60°. Each angle of an equilateral triangle measures 60°.'
 },
 {
 id: '26',
 text: 'Which is closest to the circumference of circle <i>O</i> shown? <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['113.04 cm', '75.36 cm', '37.68 cm', '18.84 cm'],
 correctAnswer: 3, 
 explanation: 'C = 2πr ≈ 2 × 3.14 × 3 = 18.84 cm.'
 },
 {
 id: '27',
 text: 'Which figure appears to have <i>exactly</i> one pair of parallel sides?',
 type: 'multiple-choice',
 options: [
    {url: 'images/27a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/27d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'A trapezoid has exactly one pair of parallel sides.'
 },
 {
 id: '28',
 text: 'Which is <i>closest</i> to the measure of ∠<i>M</i> in the figure shown? <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['180°', '90°', '60°', '45°'],
 correctAnswer: 3, 
 explanation: 'Triangle KLM appears to be an isosceles right triangle, so ∠M measures about 45°.'
 },
 {
 id: '29',
 text: 'What three-dimensional object will be formed when the figure below is folded on the dashed lines? <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Cone', 'Cylinder', 'Square pyramid', 'Rectangular prism'],
 correctAnswer: 3, 
 explanation: 'The net has 6 rectangular faces, which fold into a rectangular prism.'
 },
 {
 id: '30',
 text: 'Anna rode her bicycle 12.4 kilometers. How many meters did she ride?',
 type: 'multiple-choice',
 options: ['0.124 meter', '1,240 meters', '12,400 meters', '124,000 meters'],
 correctAnswer: 2, 
 explanation: '1 kilometer = 1,000 meters, so 12.4 × 1,000 = 12,400 meters.'
 },
 {
 id: '31',
 text: 'A clerk recorded the number of pairs of jeans sold each day at a store. The data are displayed on the stem-and-leaf plot. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following statements is <i>true</i> according to the data in the stem-and-leaf plot?',
 type: 'multiple-choice',
 options: ['The number of pairs of jeans sold each day was between 0 and 8.', 'The stem-and-leaf plot displays 26 days of sales.', 'The median for the data is 25.', 'The mode for the data is 25.'],
 correctAnswer: 3, 
 explanation: '25 appears four times, more than any other value, so the mode is 25.'
 },
 {
 id: '32',
 text: 'What is missing from the box-and-whisker plot? <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Median', 'Range', 'Upper quartile', 'Lower quartile'],
 correctAnswer: 0, 
 explanation: 'The box should have a line inside it showing the median, but none is shown.'
 },
 {
 id: '33',
 text: 'Look at the table. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the range for the times listed in the table?',
 type: 'multiple-choice',
 options: ['4 min', '9 min', '10 min', '12 min'],
 correctAnswer: 3, 
 explanation: 'Range = greatest − least = 18 − 6 = 12 minutes.'
 },
 {
 id: '34',
 text: 'Claire flips a fair coin with sides heads and tails. Kris rolls a fair number cube with sides 1, 2, 3, 4, 5, and 6. Which shows all of the possible combinations of one flip and one roll?',
 type: 'multiple-choice',
 options: [
    {url: 'images/34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'There are 2 × 6 = 12 combinations. Each side of the coin must be paired with each number on the cube.'
 },
 {
 id: '35',
 text: 'Look at the table. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The songs on Seth’s CD player play randomly. What is the probability that the next song played will be by the artist Sound Off?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>24</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>7</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '3 of the 12 songs are by Sound Off, so the probability is <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>.'
 },
 {
 id: '36',
 text: 'This table shows the number of people who visited a museum over a 6-day period. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph <i>best</i> displays the information in the table?',
 type: 'multiple-choice',
 options: [
    {url: 'images/36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The points must show 28, 34, 52, 56, 93, and 87 visitors, in order from Tuesday to Sunday.'
 },
 {
 id: '37',
 text: 'Which statement is <i>false</i>?',
 type: 'multiple-choice',
 options: ['A set of data always has a mode.', 'A set of data may have exactly one mode.', 'A set of data may have more than one mode.', 'The mode is the piece of data that occurs most frequently.'],
 correctAnswer: 0, 
 explanation: 'If no value repeats, a set of data has no mode, so it is false that a set of data always has a mode.'
 },
 {
 id: '38',
 text: 'What is the median for this set of data? <br>{217, 243, 203, 206, 230, 195, 243}',
 type: 'multiple-choice',
 options: ['206', '217', '220', '243'],
 correctAnswer: 1, 
 explanation: 'In order: 195, 203, 206, 217, 230, 243, 243. The middle value is 217.'
 },
 {
 id: '39',
 text: '<br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Using the representations above, which correctly represents the following number sentence if each scale is balanced? <br>5 + <i>x</i> = 7',
 type: 'multiple-choice',
 options: [
    {url: 'images/39a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/39d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'One side must have 5 circles and 1 <i>x</i>-cup, and the other side must have 7 circles.'
 },
 {
 id: '40',
 text: 'Look at the equation mat. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the value of <i>x</i>?',
 type: 'multiple-choice',
 options: ['11', '7', '3', '2'],
 correctAnswer: 2, 
 explanation: 'The left side has <i>x</i> + 4 and the right side has 7, so <i>x</i> = 7 − 4 = 3.'
 },
 {
 id: '41',
 text: 'Look at the table. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which rule does Patrick’s pattern follow?',
 type: 'multiple-choice',
 options: ['Add 110 to the term to get the value.', 'Multiply 11 by the term to get the value.', 'Double the term to get the value.', 'Square the term to get the value.'],
 correctAnswer: 3, 
 explanation: '11<sup>2</sup> = 121, 12<sup>2</sup> = 144, 13<sup>2</sup> = 169, and so on. Each value is the square of the term.'
 },
 {
 id: '42',
 text: 'Which pattern would be the result of a rule in which two triangles always follow a square, and a circle can only appear after every fourth triangle?',
 type: 'multiple-choice',
 options: [
    {url: 'images/42a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Each square is followed by two triangles, and a circle appears only after the fourth triangle.'
 },
 {
 id: '43',
 text: 'What value of <i>p</i> will make the following number sentence true? <br>14<i>p</i> = 182',
 type: 'multiple-choice',
 options: ['13', '168', '196', '2,548'],
 correctAnswer: 0, 
 explanation: 'Divide both sides by 14: <i>p</i> = 182 ÷ 14 = 13.'
 },
 {
 id: '44',
 text: 'Look at the table. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which rule <i>best</i> describes the relationship between all the <i>x</i> and <i>y</i> values in the table?',
 type: 'multiple-choice',
 options: ['Add 2 to the <i>x</i>-value to get the <i>y</i>-value.', 'Subtract 14 from the <i>y</i>-value to get the <i>x</i>-value.', 'Divide the <i>y</i>-value by 2 to get the <i>x</i>-value.', 'Multiply the <i>x</i>-value by 3 to get the <i>y</i>-value.'],
 correctAnswer: 3, 
 explanation: 'Each <i>y</i>-value is 3 times the <i>x</i>-value: 1 × 3 = 3, 2 × 3 = 6, and so on.'
 },
 {
 id: '45',
 text: 'Tammy wrote the following values for powers of 10. <br>10<sup>2</sup> = 100 <br>10<sup>3</sup> = 1,000 <br>10<sup>4</sup> = 10,000 <br>10<sup>5</sup> = 100,000 <br>Based on the pattern, which is equivalent to 100,000,000?',
 type: 'multiple-choice',
 options: ['10<sup>6</sup>', '10<sup>7</sup>', '10<sup>8</sup>', '10<sup>9</sup>'],
 correctAnswer: 2, 
 explanation: 'The exponent equals the number of zeros. 100,000,000 has 8 zeros, so it equals 10<sup>8</sup>.'
 },
 {
 id: '46',
 text: 'Which is an equation?',
 type: 'multiple-choice',
 options: ['<i>h</i> − 5 = <math><mfrac><mn>32</mn><mn>8</mn></mfrac></math>', '6<i>x</i> − 3', '5<i>y</i> + 1 > 2', '4<i>t</i><sup>2</sup>'],
 correctAnswer: 0, 
 explanation: 'An equation has an equal sign showing that two expressions are equal.'
 },
 {
 id: '47',
 text: 'Jeff multiplied each term in the pattern below by the same number. <br>1, 4, 16, 64 <br>If the pattern continues, what will be the 6th term?',
 type: 'multiple-choice',
 options: ['84', '112', '256', '1,024'],
 correctAnswer: 3, 
 explanation: 'Each term is multiplied by 4: 64 × 4 = 256 (5th term), and 256 × 4 = 1,024 (6th term).'
 },
 {
 id: '48',
 text: '405, 135, 45, 15 <br>Dylan began his number pattern with 405. To determine each new number in the pattern, he performed the same operation on the previous number. Which operation could have been used for the pattern?',
 type: 'multiple-choice',
 options: ['Divide by 3', 'Multiply by 3', 'Subtract 270', 'Divide by 5'],
 correctAnswer: 0, 
 explanation: '405 ÷ 3 = 135, 135 ÷ 3 = 45, and 45 ÷ 3 = 15.'
 },
 {
 id: '49',
 text: 'The scale below is balanced. <br><img src="images/49-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Using the representations and scale above, which could be placed on the right side of the following scale to make it balanced? <br><img src="images/49-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/49a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/49b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/49c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/49d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The first scale shows <i>x</i> + 3 = 7, so <i>x</i> = 4. To balance one box, place 4 crayons on the right side.'
 },
 {
 id: '50',
 text: 'A variable is —',
 type: 'multiple-choice',
 options: ['the numerical factor in a term', 'a mathematical sentence stating that two expressions are equal', 'a symbol used to represent an unspecified member of a set', 'a number in an expression of sums and/or differences'],
 correctAnswer: 2, 
 explanation: 'A variable is a symbol, usually a letter, that stands for an unknown or unspecified value.'
 }
];

// Scaled Score Mapping for Grade 6 Mathematics (2008)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 26,
  2: 81,
  3: 114,
  4: 138,
  5: 157,
  6: 173,
  7: 187,
  8: 200,
  9: 211,
  10: 221,
  11: 231,
  12: 240,
  13: 249,
  14: 257,
  15: 265,
  16: 273,
  17: 280,
  18: 288,
  19: 295,
  20: 302,
  21: 309,
  22: 315,
  23: 322,
  24: 329,
  25: 336,
  26: 342,
  27: 349,
  28: 356,
  29: 363,
  30: 370,
  31: 377,
  32: 384,
  33: 392,
  34: 399,
  35: 407,
  36: 415,
  37: 424,
  38: 433,
  39: 442,
  40: 452,
  41: 463,
  42: 475,
  43: 487,
  44: 502,
  45: 518,
  46: 538,
  47: 562,
  48: 596,
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
        testType: 'Grade 6 Mathematics (2008)'
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
        result.testType = 'Grade 6 Mathematics (2008)';
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
            testType: 'Grade 6 Mathematics (2008)'
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