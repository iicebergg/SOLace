window.TEST_IDENTIFIER = 'math_grade8_2002';

const sampleQuestions = [
 {
 id: '1',
 text: 'How many factors does a prime number have?',
 type: 'multiple-choice',
 options: ['0', '1', '2', '3'],
 correctAnswer: 2, 
 explanation: 'A prime number has exactly 2 factors: 1 and itself.'
 },
 {
 id: '2',
 text: 'Which of the following is <i>not</i> true?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> = 0.4 = 40%', '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math> = 0.7 = 70%', '2 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = 2.5 = 25%', '3 <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> = 3.375 = 337.5%'],
 correctAnswer: 2, 
 explanation: '2.5 = 250%, not 25%.'
 },
 {
 id: '3',
 text: '72 − (7 + 8) · 4 is equivalent to —',
 type: 'multiple-choice',
 options: ['292', '260', '87', '12'],
 correctAnswer: 3, 
 explanation: 'Parentheses first: 7 + 8 = 15. Then 15 · 4 = 60, and 72 − 60 = 12.'
 },
 {
 id: '4',
 text: 'Linda is keeping a record of her scores and entered these statistics after her first basketball game. <br><img src="images/4.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the ratio of field goals made to field goals attempted?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>2</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'She made 8 of 12 field goals attempted: <math><mfrac><mn>8</mn><mn>12</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>.'
 },
 {
 id: '5',
 text: 'Loretta is filling numbers in the Venn diagram. No number is to be entered more than once. <br><img src="images/5.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the greatest number that can be appropriately placed in the shaded area of the diagram?',
 type: 'multiple-choice',
 options: ['5', '10', '15', '180'],
 correctAnswer: 2, 
 explanation: 'The shaded area holds common factors of 45 and 60 that are not already used. The greatest common factor of 45 and 60 is 15.'
 },
 {
 id: '6',
 text: 'Which is an integer?',
 type: 'multiple-choice',
 options: ['−19', '1.5', '√2', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Integers are whole numbers and their opposites. −19 is an integer.'
 },
 {
 id: '7',
 text: 'Harold was looking at a scale drawing of a city park. A reflection pool 27 meters long measured 1.8 centimeters on the drawing. Which is most likely the scale used to make the drawing?',
 type: 'multiple-choice',
 options: ['1 cm represents 9 m', '1 cm represents 12 m', '1 cm represents 15 m', '1 cm represents 18 m'],
 correctAnswer: 2, 
 explanation: '27 ÷ 1.8 = 15, so 1 cm represents 15 m.'
 },
 {
 id: '8',
 text: 'If <i>a</i> + <i>b</i> = <i>a</i>, then <i>b</i> equals —',
 type: 'multiple-choice',
 options: ['−1', '0', '1', '−<i>a</i>'],
 correctAnswer: 1, 
 explanation: 'Adding 0 to a number does not change it, so b = 0.'
 },
 {
 id: '9',
 text: 'Between what two consecutive whole numbers does √95 lie?',
 type: 'multiple-choice',
 options: ['7 and 8', '8 and 9', '9 and 10', '10 and 11'],
 correctAnswer: 2, 
 explanation: '9<sup>2</sup> = 81 and 10<sup>2</sup> = 100. Since 95 is between them, √95 is between 9 and 10.'
 },
 {
 id: '10',
 text: 'A recipe calls for 3 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> cups of flour and 1 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> cups of sugar. If the recipe is doubled, how much flour will be required?',
 type: 'multiple-choice',
 options: ['3 cups', '3 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> cups', '4 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> cups', '6 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> cups'],
 correctAnswer: 3, 
 explanation: '2 × 3 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = 6 <math><mfrac><mn>2</mn><mn>4</mn></mfrac></math> = 6 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> cups.'
 },
 {
 id: '11',
 text: 'David earns $9.60 per hour for a 40-hour week. What was his net pay for a week in which his total deductions were $84.30?',
 type: 'multiple-choice',
 options: ['$93.90', '$299.70', '$315.70', '$384.00'],
 correctAnswer: 1, 
 explanation: 'Gross pay is 40 × $9.60 = $384.00. $384.00 − $84.30 = $299.70.'
 },
 {
 id: '12',
 text: 'Mark layered 3 pieces of wood to build the base for a lamp. The pieces were <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> inch thick, <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math> inch thick, and <math><mfrac><mn>3</mn><mn>16</mn></mfrac></math> inch thick. How thick was the base for the lamp?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>7</mn><mn>16</mn></mfrac></math> in.', '<math><mfrac><mn>9</mn><mn>16</mn></mfrac></math> in.', '<math><mfrac><mn>15</mn><mn>16</mn></mfrac></math> in.', '1 <math><mfrac><mn>1</mn><mn>16</mn></mfrac></math> in.'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>4</mn><mn>16</mn></mfrac></math> + <math><mfrac><mn>10</mn><mn>16</mn></mfrac></math> + <math><mfrac><mn>3</mn><mn>16</mn></mfrac></math> = <math><mfrac><mn>17</mn><mn>16</mn></mfrac></math> = 1 <math><mfrac><mn>1</mn><mn>16</mn></mfrac></math> in.'
 },
 {
 id: '13',
 text: 'What is the value of <i>n</i><sup>2</sup>(<i>m</i> + <i>r</i>) if <i>m</i> = 3, <i>n</i> = 2, and <i>r</i> = 4?',
 type: 'multiple-choice',
 options: ['28', '16', '14', '9'],
 correctAnswer: 0, 
 explanation: '2<sup>2</sup>(3 + 4) = 4 × 7 = 28.'
 },
 {
 id: '14',
 text: 'At the video rental shop, 5 movies can be rented for $6.99. Each additional movie rental is $1.99. What would be the total cost of renting 8 movies?',
 type: 'multiple-choice',
 options: ['$12.96', '$13.98', '$15.92', '$25.87'],
 correctAnswer: 0, 
 explanation: '$6.99 + 3 × $1.99 = $6.99 + $5.97 = $12.96.'
 },
 {
 id: '15',
 text: 'What is the value of <math><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>5</mn></mfrac></math> + <i>y</i><sup>2</sup> − 12, when <i>y</i> = 5?',
 type: 'multiple-choice',
 options: ['13', '16', '18', '22'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>25</mn><mn>5</mn></mfrac></math> + 25 − 12 = 5 + 25 − 12 = 18.'
 },
 {
 id: '16',
 text: 'This shows 3 different views of a three-dimensional figure made from cubes. <br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which could be a drawing of the figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/16a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Choice J matches the 2 × 3 top view, the front view with two towers, and the side view.'
 },
 {
 id: '17',
 text: '<br><img src="images/17.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Δ<i>ABC</i> is similar to Δ<i>DEF</i>, which of the following must be true?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>AB</mn><mn>AC</mn></mfrac></math> = <math><mfrac><mn>DE</mn><mn>EF</mn></mfrac></math>', '<math><mfrac><mn>AB</mn><mn>DF</mn></mfrac></math> = <math><mfrac><mn>AC</mn><mn>EF</mn></mfrac></math>', '<math><mfrac><mn>AB</mn><mn>BC</mn></mfrac></math> = <math><mfrac><mn>DE</mn><mn>DF</mn></mfrac></math>', '<math><mfrac><mn>AB</mn><mn>DE</mn></mfrac></math> = <math><mfrac><mn>AC</mn><mn>DF</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'Corresponding sides of similar triangles are proportional. AB corresponds to DE and AC corresponds to DF, so <math><mfrac><mn>AB</mn><mn>DE</mn></mfrac></math> = <math><mfrac><mn>AC</mn><mn>DF</mn></mfrac></math>.'
 },
 {
 id: '18',
 text: 'Section <i>ABC</i> and section <i>EBD</i> of the flower garden contain roses. <span style="text-decoration: overline"><i>AE</i></span> and <span style="text-decoration: overline"><i>CD</i></span> are straight line segments. <br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If ∠<i>ABC</i> measures 38°, what is the measure of ∠<i>EBD</i>?',
 type: 'multiple-choice',
 options: ['38°', '52°', '90°', '142°'],
 correctAnswer: 0, 
 explanation: '∠ABC and ∠EBD are vertical angles, so they have the same measure, 38°.'
 },
 {
 id: '19',
 text: 'Look at the design below. <br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which term identifies the shaded part in the center of the design?',
 type: 'multiple-choice',
 options: ['Heptagon', 'Pentagon', 'Nonagon', 'Decagon'],
 correctAnswer: 0, 
 explanation: 'The shaded polygon has 7 sides, so it is a heptagon.'
 },
 {
 id: '20',
 text: '<br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which white triangle shows where the black triangle would be if reflected across the <i>x</i>-axis?',
 type: 'multiple-choice',
 options: ['A', 'B', 'C', 'D'],
 correctAnswer: 1, 
 explanation: 'Reflecting across the x-axis flips the triangle to the same x-positions below the axis. Triangle B is that image.'
 },
 {
 id: '21',
 text: 'Which of the following indicates the greatest weight?',
 type: 'multiple-choice',
 options: ['600 pounds', '0.25 tons', '9,000 ounces', '0.5 tons'],
 correctAnswer: 3, 
 explanation: '0.5 ton = 1,000 pounds. 0.25 ton = 500 pounds and 9,000 ounces = 562.5 pounds, so 0.5 ton is greatest.'
 },
 {
 id: '22',
 text: 'Su Li wants to place a protective covering over a rectangular flower bed that measures 3.2 meters by 4.3 meters. How many square meters of covering will she need?',
 type: 'multiple-choice',
 options: ['7.5', '13.76', '15.0', '27.52'],
 correctAnswer: 1, 
 explanation: 'Area = 3.2 × 4.3 = 13.76 square meters.'
 },
 {
 id: '23',
 text: 'Which figures appear to be congruent? <br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['A and B', 'B and D', 'C and D', 'D and A'],
 correctAnswer: 3, 
 explanation: 'Congruent figures have the same size and shape. Figures D and A are the same shape and size, just turned.'
 },
 {
 id: '24',
 text: 'The wheel rim has a diameter of 15 inches. <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>closest</i> to the inside circumference of the tire designed to fit on the rim?',
 type: 'multiple-choice',
 options: ['47.1 in.', '94.2 in.', '176.6 in.', '706.5 in.'],
 correctAnswer: 0, 
 explanation: 'C = πd ≈ 3.14 × 15 = 47.1 inches.'
 },
 {
 id: '25',
 text: 'Look at the angles in this quadrilateral. <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which angle measure is closest to 48°?',
 type: 'multiple-choice',
 options: ['∠1', '∠2', '∠3', '∠4'],
 correctAnswer: 3, 
 explanation: 'A 48° angle is acute, about half of a right angle. Angle 4 is the only clearly acute angle; angles 2 and 3 are near 90° and angle 1 is obtuse.'
 },
 {
 id: '26',
 text: 'A grid is placed over a cross-sectional drawing of a molding. Each square of the grid represents one square centimeter. <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many square centimeters are contained in the area of the cross section?',
 type: 'multiple-choice',
 options: ['44', '96', '108', '208'],
 correctAnswer: 2, 
 explanation: 'Count the whole squares and combine the half squares along the slanted edges. The area is 108 square centimeters.'
 },
 {
 id: '27',
 text: 'The cylindrical cannister of this fire extinguisher has a radius of 2.5 inches and is 13.5 inches high. <br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is <i>closest</i> to the number of cubic inches it will hold when filled?',
 type: 'multiple-choice',
 options: ['1,060', '265', '212', '115'],
 correctAnswer: 1, 
 explanation: 'V = πr²h ≈ 3.14 × 2.5 × 2.5 × 13.5 ≈ 265 cubic inches.'
 },
 {
 id: '28',
 text: 'As part of an art project, Billy has to paint the surface area of a square-based pyramid. The pyramid has the dimensions shown. <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the total surface area of the pyramid?',
 type: 'multiple-choice',
 options: ['441 sq in.', '301 sq in.', '252 sq in.', '175 sq in.'],
 correctAnswer: 3, 
 explanation: 'Base: 7 × 7 = 49. Four triangles: 4 × <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> × 7 × 9 = 126. Total: 49 + 126 = 175 sq in.'
 },
 {
 id: '29',
 text: 'This is a cross section of the design of a bookshelf. <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the length, in inches, of the brace indicated by <span style="text-decoration: overline"><i>BC</i></span> in the sketch?',
 type: 'multiple-choice',
 options: ['25 in.', '30 in.', '32.5 in.', '35 in.'],
 correctAnswer: 0, 
 explanation: 'BC is the hypotenuse of a right triangle with legs 15 and 20. √(15² + 20²) = √625 = 25 inches.'
 },
 {
 id: '30',
 text: 'This net represents the surface area of a solid figure. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which drawing represents the figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The net has 4 triangles, which fold into a triangular pyramid, as in choice F.'
 },
 {
 id: '31',
 text: 'The chart shows the pizza menu for the local pizza parlor. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following shows the total number of ways Andy can buy a pizza with one topping?',
 type: 'multiple-choice',
 options: ['4 + 3 × 4', '4 × 3 × 4', '(4 × 3) + (4 × 3)', '(4 × 4) + 3'],
 correctAnswer: 1, 
 explanation: 'There are 4 sizes, 3 crusts, and 4 toppings. By the counting principle: 4 × 3 × 4.'
 },
 {
 id: '32',
 text: 'The table shows the number of birthday cards a shop sold each day in a two-week period. <br><img src="images/32.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which line plot displays this information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/32a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The data have one 7, four 8s, two 9s, one 10, two 12s, one 14, two 15s, and one 18. Line plot G shows these counts.'
 },
 {
 id: '33',
 text: 'The stem-and-leaf plot shows the highest January temperature in degrees Fahrenheit for 10 U.S. cities. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>In how many cities is the highest January temperature above 45 degrees Fahrenheit?',
 type: 'multiple-choice',
 options: ['4', '5', '6', '7'],
 correctAnswer: 1, 
 explanation: 'The temperatures above 45 are 46, 47, 53, 54, and 60, so there are 5 cities.'
 },
 {
 id: '34',
 text: 'Three clubs participated in a fundraiser. Club A sold 128 candy bars and 56 drinks. Club B sold 78 candy bars and 89 drinks. Club C sold 97 candy bars and 123 drinks. Which matrix <i>best</i> organizes and displays the data?',
 type: 'multiple-choice',
 options: [
    {url: 'images/34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Each row must match a club: A (128, 56), B (78, 89), C (97, 123). Matrix J shows this.'
 },
 {
 id: '35',
 text: 'On your first draw, what is the probability of drawing a red card, without looking, from a shuffled deck containing 6 red cards, 6 blue cards, and 8 black cards?',
 type: 'multiple-choice',
 options: ['10%', '20%', '30%', '40%'],
 correctAnswer: 2, 
 explanation: 'There are 20 cards and 6 are red: <math><mfrac><mn>6</mn><mn>20</mn></mfrac></math> = 30%.'
 },
 {
 id: '36',
 text: 'A package contains 7 bags of tortilla chips, 3 bags of cheese puffs, 4 bags of potato chips, and 6 bags of corn chips. If Steve reaches into the package and selects one bag without looking, what is the probability he will choose potato chips?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>20</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>20</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'There are 20 bags and 4 are potato chips: <math><mfrac><mn>4</mn><mn>20</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>.'
 },
 {
 id: '37',
 text: 'The graph shows the number of CDs sold each year at a small music store. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the number of CDs sold each year continues to increase as shown in the plot, which is the <i>best</i> prediction of the number of CDs the store will sell during its 8<sup>th</sup> year of business?',
 type: 'multiple-choice',
 options: ['3,400', '3,000', '2,400', '2,000'],
 correctAnswer: 2, 
 explanation: 'Sales grew from about 400 to 1,600 over 4 years, about 300 per year. Three more years: 1,600 + 3 × 300 ≈ 2,500, so 2,400 is the best prediction.'
 },
 {
 id: '38',
 text: 'These cards are used to play a game between two players. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If Sally draws one card at random, what is the probability it will be a card with a star?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>10</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: '4 of the 10 cards have stars: <math><mfrac><mn>4</mn><mn>10</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>.'
 },
 {
 id: '39',
 text: 'Soccer is the world\'s most popular sport. The table lists the records of 5 World Cup winners. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the mean number of total points scored by these teams?',
 type: 'multiple-choice',
 options: ['51', '74', '74.2', '99'],
 correctAnswer: 2, 
 explanation: '57 + 99 + 48 + 74 + 93 = 371. 371 ÷ 5 = 74.2.'
 },
 {
 id: '40',
 text: 'Which scatterplot best shows the relationship between a person\'s height and the time that person spends watching television?',
 type: 'multiple-choice',
 options: [
    {url: 'images/40a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/40d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A person\'s height and TV time are not related, so the points should be scattered with no pattern, as in choice J.'
 },
 {
 id: '41',
 text: 'Harry asked several classmates to name their favorite after-school activity and showed the results in this table. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph correctly displays this information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/41a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/41d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Of 48 students, Sports is half (24), Band is a quarter (12), and Drama and Math/Science Club are each an eighth (6). Graph A shows these sizes.'
 },
 {
 id: '42',
 text: 'The box-and-whisker plot shows the class sizes in 15 schools. <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which statement concerning the class sizes <i>must</i> be true?',
 type: 'multiple-choice',
 options: ['The range of size is 8.', 'The largest class is 31.', 'Half of the classes are larger than 23.', 'The median class size is 28.'],
 correctAnswer: 3, 
 explanation: 'The line inside the box marks the median, which is at 28.'
 },
 {
 id: '43',
 text: 'Hilary has $9 less than Barbara. Together they have $21. If <i>x</i> represents Barbara\'s money, which of the following expresses this relationship?',
 type: 'multiple-choice',
 options: ['(<i>x</i> + 9) + <i>x</i> = 21', '(<i>x</i> − 9) + <i>x</i> = 21', '<i>x</i> − 9 = 21 + <i>x</i>', '<i>x</i> = 21 + <i>x</i> − 9'],
 correctAnswer: 1, 
 explanation: 'Hilary has x − 9. Together: (x − 9) + x = 21.'
 },
 {
 id: '44',
 text: 'In the center section of an auditorium, each row has 2 more seats than the row in front of it. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The front row of the section contains 23 seats. How many seats are in the 10<sup>th</sup> row from the stage?',
 type: 'multiple-choice',
 options: ['33', '39', '41', '43'],
 correctAnswer: 2, 
 explanation: 'The 10th row has 9 more rows\' worth of increases: 23 + 9 × 2 = 41 seats.'
 },
 {
 id: '45',
 text: 'What value of <i>c</i> makes the sentence 5(<i>c</i> − 0.15) = 2.50 true?',
 type: 'multiple-choice',
 options: ['0.47', '0.53', '0.63', '0.65'],
 correctAnswer: 3, 
 explanation: 'Divide by 5: c − 0.15 = 0.50, so c = 0.65.'
 },
 {
 id: '46',
 text: 'The sonar system of a submarine receives an echo back from a ship 5,000 yards away after 6.1 seconds. It picks up an echo from a second ship after 8.4 seconds. Which proportion could be used to find the distance to the second ship?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>6.1</mn><mn>5000</mn></mfrac></math> = <math><mfrac><mn>8.4</mn><mn>x</mn></mfrac></math>', '<math><mfrac><mn>6.1</mn><mn>8.4</mn></mfrac></math> = <math><mfrac><mn>x</mn><mn>5000</mn></mfrac></math>', '<math><mfrac><mrow><mtext>8.4 − 6.1</mtext></mrow><mrow><mtext>8.4</mtext></mrow></mfrac></math> = <math><mfrac><mn>x</mn><mn>5000</mn></mfrac></math>', '<math><mfrac><mn>2.3</mn><mn>5000</mn></mfrac></math> = <math><mfrac><mn>6.1</mn><mn>x</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'The ratio of time to distance stays the same: <math><mfrac><mn>6.1</mn><mn>5000</mn></mfrac></math> = <math><mfrac><mn>8.4</mn><mn>x</mn></mfrac></math>.'
 },
 {
 id: '47',
 text: '<br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which best describes the circled portion of the equation?',
 type: 'multiple-choice',
 options: ['expression', 'variable', 'term', 'coefficient'],
 correctAnswer: 0, 
 explanation: '7x − 9 combines terms with operations and has no equal sign of its own, so it is an expression.'
 },
 {
 id: '48',
 text: 'There are 48 newborn girls in a hospital nursery. For every 3 girls there are 2 boys. How many newborn boys are in the nursery?',
 type: 'multiple-choice',
 options: ['72', '48', '32', '24'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>3</mn><mn>2</mn></mfrac></math> = <math><mfrac><mn>48</mn><mn>b</mn></mfrac></math>, so b = 48 × 2 ÷ 3 = 32 boys.'
 },
 {
 id: '49',
 text: 'Elizabeth drove 432 miles on the second day of a trip, which was 17 miles more than five times as far as she drove on the first day. How many miles did she drive on the first day?',
 type: 'multiple-choice',
 options: ['61', '83', '84', '90'],
 correctAnswer: 1, 
 explanation: '5x + 17 = 432, so 5x = 415 and x = 83 miles.'
 },
 {
 id: '50',
 text: 'The number of diagonals that can be drawn in a polygon with <i>n</i> sides can be determined by <math><mfrac><mrow><mtext>n(n − 3)</mtext></mrow><mrow><mtext>2</mtext></mrow></mfrac></math>. How many diagonals can be drawn in a polygon with 10 sides?',
 type: 'multiple-choice',
 options: ['130', '70', '65', '35'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mrow><mtext>10 × 7</mtext></mrow><mrow><mtext>2</mtext></mrow></mfrac></math> = <math><mfrac><mn>70</mn><mn>2</mn></mfrac></math> = 35.'
 },
 {
 id: '51',
 text: '<br><img src="images/51.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which line segment connects (2, 3) and (−3, −2)?',
 type: 'multiple-choice',
 options: ['<span style="text-decoration: overline"><i>PQ</i></span>', '<span style="text-decoration: overline"><i>PR</i></span>', '<span style="text-decoration: overline"><i>QS</i></span>', '<span style="text-decoration: overline"><i>RS</i></span>'],
 correctAnswer: 1, 
 explanation: 'Point P is at (2, 3) and point R is at (−3, −2), so segment PR connects them.'
 },
 {
 id: '52',
 text: 'The table shows the relationship between <i>d</i>, the number of days a library book is overdue, and <i>f</i>, the amount of the fine. <br><img src="images/52.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following describes the relationship?',
 type: 'multiple-choice',
 options: ['<i>f</i> = 0.05<i>d</i>', '<i>f</i> = <i>d</i> + 0.05', '<i>f</i> = 2<i>d</i> + 0.05', '<i>f</i> = (<i>d</i> + 2)0.05'],
 correctAnswer: 0, 
 explanation: 'The fine is $0.05 for each day: 0.05 × 1 = 0.05, 0.05 × 2 = 0.10, and so on.'
 },
 {
 id: '53',
 text: 'Which table contains only values that satisfy <i>y</i> = 3<i>x</i> − 5?',
 type: 'multiple-choice',
 options: [
    {url: 'images/53a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/53b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/53c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/53d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'In table C: 3(−3) − 5 = −14, 3(0) − 5 = −5, and 3(3) − 5 = 4.'
 },
 {
 id: '54',
 text: 'Martha\'s grandfather at 63 years of age is 6 years more than 3 times as old as Martha. What is Martha\'s age?',
 type: 'multiple-choice',
 options: ['17', '19', '21', '23'],
 correctAnswer: 1, 
 explanation: '3m + 6 = 63, so 3m = 57 and m = 19.'
 },
 {
 id: '55',
 text: 'What is the solution to <math><mfrac><mrow><mtext>x + 5</mtext></mrow><mrow><mtext>30</mtext></mrow></mfrac></math> = 12?',
 type: 'multiple-choice',
 options: ['<i>x</i> = 72', '<i>x</i> = 355', '<i>x</i> = 365', '<i>x</i> = 1,800'],
 correctAnswer: 1, 
 explanation: 'Multiply both sides by 30: x + 5 = 360, so x = 355.'
 },
 {
 id: '56',
 text: 'Which of these is an inequality?',
 type: 'multiple-choice',
 options: ['4<i>x</i> = 5<i>y</i>', '3<i>x</i> − 6 = 12', '<i>x</i><sup>2</sup> − 3<i>x</i> + 4', '3<i>x</i> < <i>x</i> − 2'],
 correctAnswer: 3, 
 explanation: 'An inequality uses a symbol such as <. Only 3x < x − 2 is an inequality.'
 },
 {
 id: '57',
 text: '"twice the number of books divided by fifteen" <br>Which represents the phrase in the box?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>15n</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2n</mn><mn>15</mn></mfrac></math>', '<math><mfrac><mrow><mtext>2 + n</mtext></mrow><mrow><mtext>15</mtext></mrow></mfrac></math>', '<math><mfrac><mrow><mtext>n</mtext></mrow><mrow><mtext>2(15)</mtext></mrow></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'Twice the number is 2n. Divided by fifteen gives <math><mfrac><mn>2n</mn><mn>15</mn></mfrac></math>.'
 },
 {
 id: '58',
 text: 'Which best represents the graph of <i>y</i> = <i>x</i> + 3?',
 type: 'multiple-choice',
 options: [
    {url: 'images/58a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/58b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/58c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/58d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The line y = x + 3 crosses the y-axis at 3 and rises 1 unit for each unit to the right, as in graph F.'
 },
 {
 id: '59',
 text: 'Which is a solution for 5<i>x</i> + 2 = 9<i>x</i> − 4?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mrow><mtext>−2</mtext></mrow><mrow><mtext>3</mtext></mrow></mfrac></math>', '<math><mfrac><mrow><mtext>−3</mtext></mrow><mrow><mtext>2</mtext></mrow></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Subtract 5x and add 4 to both sides: 6 = 4x, so x = <math><mfrac><mn>6</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '60',
 text: '<br><img src="images/60.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which <i>best</i> describes the value of (4.5)<sup>2</sup>?',
 type: 'multiple-choice',
 options: ['Between 4 and 9', 'Between 9 and 16', 'Between 16 and 25', 'Greater than 25'],
 correctAnswer: 2, 
 explanation: '4.5 is between 4 and 5, so (4.5)<sup>2</sup> is between 16 and 25. (It equals 20.25.)'
 }
];

// Scaled Score Mapping for Grade 8 Mathematics (2002)
// No raw-to-scaled score table was released with this test, so the Grade 8 Mathematics (2007)
// table is used as an approximation. It maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 0,
  2: 56,
  3: 91,
  4: 117,
  5: 138,
  6: 156,
  7: 171,
  8: 185,
  9: 197,
  10: 209,
  11: 220,
  12: 230,
  13: 240,
  14: 249,
  15: 258,
  16: 266,
  17: 275,
  18: 283,
  19: 291,
  20: 299,
  21: 306,
  22: 314,
  23: 321,
  24: 329,
  25: 336,
  26: 344,
  27: 351,
  28: 359,
  29: 366,
  30: 374,
  31: 382,
  32: 390,
  33: 398,
  34: 406,
  35: 415,
  36: 424,
  37: 433,
  38: 443,
  39: 453,
  40: 464,
  41: 475,
  42: 488,
  43: 502,
  44: 517,
  45: 534,
  46: 555,
  47: 581,
  48: 600,
  49: 600,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
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
        testType: 'Grade 8 Mathematics (2002)'
      };
      
      console.log(`Saving Grade 8 Math result: ${rawScore}/${sampleQuestions.length} → ${scaledScore} (${performanceLevel})`);
      
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
        result.testType = 'Grade 8 Mathematics (2002)';
        updated = true;
        console.log(`Enhanced Grade 8 Math result ${index + 1}: ${result.rawScore}/${sampleQuestions.length} → ${result.scaledScore} (${result.performanceLevel})`);
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
            testType: 'Grade 8 Mathematics (2002)'
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