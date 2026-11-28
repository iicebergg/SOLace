window.TEST_IDENTIFIER = 'math_grade8_2004';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which is equivalent to the following? <br>7 · 3 + 4 · 6',
 type: 'multiple-choice',
 options: ['7 · 3 + 6 · 4', '7 · 4 + 3 · 6', '25 · 6', '7 · 42'],
 correctAnswer: 0, 
 explanation: 'Factors can be multiplied in either order, so 4 · 6 = 6 · 4.'
 },
 {
 id: '2',
 text: 'Which arrow shows the location of −5 on the number line? <br><img src="images/2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<i>K</i>', '<i>L</i>', '<i>M</i>', '<i>N</i>'],
 correctAnswer: 1, 
 explanation: 'Each tick mark is 1 unit. Counting 5 marks to the left of 0 lands at arrow L.'
 },
 {
 id: '3',
 text: 'Which of the following is a true statement?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> = 0.40 = 4%', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> < 0.40 < 4%', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> = 0.40 = 40%', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> < 0.40 < 40%'],
 correctAnswer: 2, 
 explanation: '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> = 0.40 = 40%.'
 },
 {
 id: '4',
 text: 'Which of the following real numbers is <i>not</i> a rational number?',
 type: 'multiple-choice',
 options: ['√21', '3 <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>', '2.41414', '−13'],
 correctAnswer: 0, 
 explanation: '21 is not a perfect square, so √21 is a nonrepeating, nonterminating decimal. It is irrational.'
 },
 {
 id: '5',
 text: 'Look at the set shown below. <br>{2<i>a</i>, 3<i>a</i>, 4<i>a</i>} <br>If <i>a</i> is a prime number, how many members of the set are also prime?',
 type: 'multiple-choice',
 options: ['0', '1', '2', '3'],
 correctAnswer: 0, 
 explanation: 'Each member has at least three factors (for example, 2a has factors 1, 2, a, and 2a), so none of them is prime.'
 },
 {
 id: '6',
 text: 'Which is equivalent to 13 − 3<sup>3</sup>?',
 type: 'multiple-choice',
 options: ['7', '4', '−10', '−14'],
 correctAnswer: 3, 
 explanation: '3<sup>3</sup> = 27, and 13 − 27 = −14.'
 },
 {
 id: '7',
 text: '<i>A</i> = {2, 3, 5, 7, 11, 19, 23, 29} <br>Which of the following is a true statement concerning <i>A</i>?',
 type: 'multiple-choice',
 options: ['All numbers in <i>A</i> are odd.', 'All numbers in <i>A</i> are prime.', 'All numbers in <i>A</i> are even.', 'All numbers in <i>A</i> are composites.'],
 correctAnswer: 1, 
 explanation: 'Each number in A has exactly two factors, 1 and itself, so all are prime.'
 },
 {
 id: '8',
 text: 'What is the value of (12 − 8)<sup>2</sup> + 21 − 4?',
 type: 'multiple-choice',
 options: ['1', '3', '33', '1,089'],
 correctAnswer: 2, 
 explanation: '(4)<sup>2</sup> = 16, and 16 + 21 − 4 = 33.'
 },
 {
 id: '9',
 text: 'A weather forecaster checked and emptied a rain gauge six times one day. The measurements in inches were 0.243, 0.595, 0.903, 0.756, 0.398, and 0.112. Which is the best estimate of the total rainfall that day?',
 type: 'multiple-choice',
 options: ['2.0 in.', '2.5 in.', '3.0 in.', '3.5 in.'],
 correctAnswer: 2, 
 explanation: 'The sum is 3.007 inches, which is about 3.0 inches.'
 },
 {
 id: '10',
 text: 'What is the value of 6<i>n</i>(<i>n</i> − 1) + 4, when <i>n</i> = 3?',
 type: 'multiple-choice',
 options: ['44', '40', '36', '19'],
 correctAnswer: 1, 
 explanation: '6 × 3 × 2 + 4 = 36 + 4 = 40.'
 },
 {
 id: '11',
 text: 'Which of the following is <i>not</i> a perfect square?',
 type: 'multiple-choice',
 options: ['49', '64', '81', '99'],
 correctAnswer: 3, 
 explanation: '49 = 7², 64 = 8², and 81 = 9², but no whole number squared equals 99.'
 },
 {
 id: '12',
 text: 'A flight engineer for an airline flies an average of 2,923 miles per week. Which is the <i>best</i> estimate of the number of miles she flies in 3 years?',
 type: 'multiple-choice',
 options: ['150,000', '300,000', '450,000', '600,000'],
 correctAnswer: 2, 
 explanation: 'About 3,000 miles × 52 weeks × 3 years ≈ 468,000, which is closest to 450,000.'
 },
 {
 id: '13',
 text: 'For large parties, a restaurant adds a 15% service charge to the bill. How much would be added to a bill of $638.40?',
 type: 'multiple-choice',
 options: ['$27.68', '$63.84', '$95.76', '$150.00'],
 correctAnswer: 2, 
 explanation: '0.15 × $638.40 = $95.76.'
 },
 {
 id: '14',
 text: 'On a map, the distance between Milvale and Dracut is 1 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> inches. If the map uses a scale of <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> inch represents 1 mile, what is the actual distance in miles from Milvale to Dracut?',
 type: 'multiple-choice',
 options: ['2', '3', '3 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '5'],
 correctAnswer: 3, 
 explanation: '1 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> inches = <math><mfrac><mn>5</mn><mn>4</mn></mfrac></math> inches, which is 5 quarter-inches, so the distance is 5 miles.'
 },
 {
 id: '15',
 text: 'Which of the following best represents √39? A number between —',
 type: 'multiple-choice',
 options: ['3 and 4', '6 and 7', '7 and 8', '8 and 10'],
 correctAnswer: 1, 
 explanation: '6² = 36 and 7² = 49, so √39 is between 6 and 7.'
 },
 {
 id: '16',
 text: 'This net represents the surface area of a solid figure. <br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is a drawing of the figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/16a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A circle and a curved sector fold into a cone, as in choice J.'
 },
 {
 id: '17',
 text: 'This is a pair of similar triangles. <br><img src="images/18.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following proportions is true for these triangles?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>a</mn><mn>s</mn></mfrac></math> = <math><mfrac><mn>c</mn><mn>t</mn></mfrac></math>', '<math><mfrac><mn>a</mn><mn>s</mn></mfrac></math> = <math><mfrac><mn>b</mn><mn>t</mn></mfrac></math>', '<math><mfrac><mn>a</mn><mn>s</mn></mfrac></math> = <math><mfrac><mn>c</mn><mn>r</mn></mfrac></math>', '<math><mfrac><mn>a</mn><mn>s</mn></mfrac></math> = <math><mfrac><mn>s</mn><mn>b</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Matching the angles, side a corresponds to side s and side c corresponds to side t, so <math><mfrac><mn>a</mn><mn>s</mn></mfrac></math> = <math><mfrac><mn>c</mn><mn>t</mn></mfrac></math>.'
 },
 {
 id: '18',
 text: 'Which is <i>closest</i> to the circumference of a circle with a radius of 9 inches?',
 type: 'multiple-choice',
 options: ['28.26 in.', '56.52 in.', '63.59 in.', '81.31 in.'],
 correctAnswer: 1, 
 explanation: 'C = 2πr ≈ 2 × 3.14 × 9 = 56.52 inches.'
 },
 {
 id: '19',
 text: 'A quart of milk is closest to —',
 type: 'multiple-choice',
 options: ['a cup of milk', 'a milliliter of milk', 'a liter of milk', 'a gallon of milk'],
 correctAnswer: 2, 
 explanation: 'A quart is slightly less than a liter.'
 },
 {
 id: '20',
 text: 'Marta painted an 18-foot by 12-foot rectangular wall. What is the area of the wall she painted?',
 type: 'multiple-choice',
 options: ['423 sq ft', '216 sq ft', '60 sq ft', '30 sq ft'],
 correctAnswer: 1, 
 explanation: 'Area = 18 × 12 = 216 sq ft.'
 },
 {
 id: '21',
 text: 'This solid is composed of cubes, all of which are the same size. <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Using an edge of a cube as one unit, which could be the volume of the figure?',
 type: 'multiple-choice',
 options: ['28 cubic units', '24 cubic units', '20 cubic units', '16 cubic units'],
 correctAnswer: 0, 
 explanation: 'Count the cubes in each step layer, including the cubes hidden underneath the upper steps. There are 28 cubes, so the volume is 28 cubic units.'
 },
 {
 id: '22',
 text: 'The original Ferris wheel introduced at the 1893 World\'s Fair in Chicago had a diameter of 250 feet. <br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the distance a person who rode this wheel traveled in one complete revolution?',
 type: 'multiple-choice',
 options: ['393 ft', '785 ft', '1,570 ft', '49,063 ft'],
 correctAnswer: 1, 
 explanation: 'C = πd ≈ 3.14 × 250 = 785 feet.'
 },
 {
 id: '23',
 text: '<br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the volume of this circular cone?',
 type: 'multiple-choice',
 options: ['150.8 cm<sup>3</sup>', '452.4 cm<sup>3</sup>', '603.2 cm<sup>3</sup>', '1,809.6 cm<sup>3</sup>'],
 correctAnswer: 0, 
 explanation: 'The radius is 4 cm. V = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>πr²h ≈ <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> × 3.14 × 16 × 9 ≈ 150.8 cm<sup>3</sup>.'
 },
 {
 id: '24',
 text: 'Which list gives the plane figures in order by the number of sides, starting with the fewest number of sides?',
 type: 'multiple-choice',
 options: ['Octagon, nonagon, heptagon, pentagon', 'Pentagon, octagon, heptagon, nonagon', 'Nonagon, octagon, heptagon, pentagon', 'Pentagon, heptagon, octagon, nonagon'],
 correctAnswer: 3, 
 explanation: 'Pentagon (5), heptagon (7), octagon (8), nonagon (9).'
 },
 {
 id: '25',
 text: '<br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the volume of the square-based pyramid shown above?',
 type: 'multiple-choice',
 options: ['9 cm<sup>3</sup>', '12 cm<sup>3</sup>', '24 cm<sup>3</sup>', '36 cm<sup>3</sup>'],
 correctAnswer: 1, 
 explanation: 'V = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> × base area × height = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> × 3 × 3 × 4 = 12 cm<sup>3</sup>.'
 },
 {
 id: '26',
 text: '<br><img src="images/27.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is the length of <span style="text-decoration: overline"><i>BC</i></span>?',
 type: 'multiple-choice',
 options: ['2 cm', '5 cm', '√12 cm', '√20 cm'],
 correctAnswer: 2, 
 explanation: 'AC is the hypotenuse. BC = √(4² − 2²) = √12 cm.'
 },
 {
 id: '27',
 text: 'Which of the following is a heptagon?',
 type: 'multiple-choice',
 options: [
    {url: 'images/28a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A heptagon has 7 sides. The figure in choice J has 7 sides.'
 },
 {
 id: '28',
 text: '<br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What value of <i>x</i> would make Δ<i>ABC</i> similar to Δ<i>DEF</i>?',
 type: 'multiple-choice',
 options: ['26', '29', '31', '32'],
 correctAnswer: 0, 
 explanation: 'The scale factor is 42 ÷ 28 = 1.5 (and 45 ÷ 30 = 1.5). x = 39 ÷ 1.5 = 26.'
 },
 {
 id: '29',
 text: 'In the diagram below, lines <i>l</i> and <i>p</i> intersect. <br><img src="images/30.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the measure of ∠<i>a</i> is 109°, what is the measure of ∠<i>b</i>?',
 type: 'multiple-choice',
 options: ['109°', '100°', '71°', '19°'],
 correctAnswer: 2, 
 explanation: '∠a and ∠b form a straight line, so they add to 180°. 180° − 109° = 71°.'
 },
 {
 id: '30',
 text: 'In a bag of candies there are 13 red candies, 13 green candies, 13 yellow candies, and 13 blue candies. If you choose 1 candy from the bag, what is the probability the candy will <i>not</i> be blue?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: '39 of the 52 candies are not blue: <math><mfrac><mn>39</mn><mn>52</mn></mfrac></math> = <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>.'
 },
 {
 id: '31',
 text: 'The list shows the scores made by each member of Jaime\'s discussion group on the last test. <br>71 &nbsp; 80 &nbsp; 62 &nbsp; 93 &nbsp; 68 &nbsp; 87 &nbsp; 73 &nbsp; 78 <br>Which stem-and-leaf plot correctly displays the information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/32a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'In order: 62, 68, 71, 73, 78, 80, 87, 93. Plot F shows all 8 scores.'
 },
 {
 id: '32',
 text: '<br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the daily average (mean) number of lunches sold during the week?',
 type: 'multiple-choice',
 options: ['225', '250', '270', '290'],
 correctAnswer: 2, 
 explanation: '400 + 200 + 150 + 350 + 250 = 1,350. 1,350 ÷ 5 = 270.'
 },
 {
 id: '33',
 text: 'For a trip, Tyler packed one red sweater, one striped blouse, one white blouse, one blue skirt, and one black skirt. Which shows all the possible ways that she could combine one sweater, one blouse, and one skirt?',
 type: 'multiple-choice',
 options: [
    {url: 'images/34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: '1 sweater × 2 blouses × 2 skirts = 4 combinations. Diagram G shows all 4.'
 },
 {
 id: '34',
 text: 'Cathy and Terry participated in a mathematics competition at school. The table shows how they placed in each of the eight categories of the competition. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which matrix <i>best</i> summarizes the results for Cathy and Terry?',
 type: 'multiple-choice',
 options: [
    {url: 'images/35a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/35d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Cathy placed 1st 3 times, 2nd 4 times, and 3rd once. Terry placed 1st 4 times, 2nd twice, and 3rd twice. Matrix A shows this.'
 },
 {
 id: '35',
 text: 'Which scattergram shows the relationship between the amount of gasoline in an automobile\'s tank and the distance traveled since the last fill-up?',
 type: 'multiple-choice',
 options: [
    {url: 'images/36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'As the distance traveled increases, the gas remaining decreases. Scattergram H shows this negative relationship.'
 },
 {
 id: '36',
 text: 'Nicole listed her homework scores from her mathematics class. <br>100, 97, 95, 80, 88, 84, 96, 60, 78, 83 <br>Which box-and-whisker plot correctly displays the information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'In order: 60, 78, 80, 83, 84, 88, 95, 96, 97, 100. The extremes are 60 and 100, the median is 86, and the quartiles are 80 and 96. Plot B shows these values.'
 },
 {
 id: '37',
 text: 'How many different ways could Lisa arrange these four stickers in this rectangle? <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['4', '8', '12', '24'],
 correctAnswer: 3, 
 explanation: '4 × 3 × 2 × 1 = 24 arrangements.'
 },
 {
 id: '38',
 text: 'This shows all the different ways a pair of number cubes can land in a game Robbie is playing. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>To win on his next turn, he needs to roll an 8. What is the probability that Robbie will win on his next turn?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>5</mn><mn>36</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>72</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>36</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>35</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'An 8 can be rolled 5 ways (2-6, 3-5, 4-4, 5-3, 6-2) out of 36 outcomes, so the probability is <math><mfrac><mn>5</mn><mn>36</mn></mfrac></math>.'
 },
 {
 id: '39',
 text: '<br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>According to the data in the graph, which would be the most reasonable prediction for the percent of households with CD-ROMs in their computers in 1998?',
 type: 'multiple-choice',
 options: ['24%', '36%', '40%', '44%'],
 correctAnswer: 1, 
 explanation: 'The percent rose about 6 points each year, reaching 30% in 1997. About 36% is a reasonable prediction for 1998.'
 },
 {
 id: '40',
 text: 'The spinner below is used in a game. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>In a single spin, what is the probability of the arrow landing on a Green or Blue space?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'There are 8 equal spaces: 4 Blue and 1 Green. <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>.'
 },
 {
 id: '41',
 text: 'Sam listed his scores from history class. <br>84, 86, 83, 78, 92, 87, 92, 90, 88, 86 <br>Which line plot correctly displays his scores?',
 type: 'multiple-choice',
 options: [
    {url: 'images/42a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The data have one each of 78, 83, 84, 87, 88, and 90, and two each of 86 and 92. Line plot H shows these counts.'
 },
 {
 id: '42',
 text: 'A car-rental agency charges $38 per day plus $0.21 for each mile driven. Sandra paid $88.40 for renting a car from them for one day. Which of the following could be used to find the number of miles she drove that day?',
 type: 'multiple-choice',
 options: ['0.21<i>x</i> + 38 = 88.4', '0.21<i>x</i> = 88.4', '38<i>x</i> = 0.21(88.4)', '38<i>x</i> + 0.21 = 88.4'],
 correctAnswer: 0, 
 explanation: 'The cost is $0.21 for each of x miles plus $38: 0.21x + 38 = 88.4.'
 },
 {
 id: '43',
 text: 'What value for <i>t</i> makes this equation true? <br><math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>(<i>t</i> + 7) = 48',
 type: 'multiple-choice',
 options: ['17', '31', '89', '103'],
 correctAnswer: 2, 
 explanation: 'Multiply both sides by 2: t + 7 = 96, so t = 89.'
 },
 {
 id: '44',
 text: '<br><img src="images/45.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which number replaces the "?" in the table?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>81</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>9</mn></mfrac></math>', '−1', '−9'],
 correctAnswer: 1, 
 explanation: 'Each step to the left divides by 3. 3<sup>−2</sup> = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> ÷ 3 = <math><mfrac><mn>1</mn><mn>9</mn></mfrac></math>.'
 },
 {
 id: '45',
 text: 'Ron wanted to find a rule for finding the terms in this sequence of numbers. <br>1 &nbsp; 2 &nbsp; 6 &nbsp; 24 &nbsp; . . . <br>He rewrote the first four terms this way. <br>1 &nbsp; 1 · 2 &nbsp; 1 · 2 · 3 &nbsp; 1 · 2 · 3 · 4 <br>If Ron continues to write terms this way, what will be the sixth term in the sequence?',
 type: 'multiple-choice',
 options: ['216', '480', '600', '720'],
 correctAnswer: 3, 
 explanation: 'The sixth term is 1 · 2 · 3 · 4 · 5 · 6 = 720.'
 },
 {
 id: '46',
 text: 'Jeffrey\'s dogs ate 42 pounds of food during July. At that rate, which is <i>closest</i> to the number of days a 100-pound bag of dog food would last?',
 type: 'multiple-choice',
 options: ['3', '74', '135', '140'],
 correctAnswer: 1, 
 explanation: 'July has 31 days. <math><mfrac><mn>42</mn><mn>31</mn></mfrac></math> = <math><mfrac><mn>100</mn><mn>d</mn></mfrac></math>, so d = 100 × 31 ÷ 42 ≈ 74 days.'
 },
 {
 id: '47',
 text: 'What is the solution to <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math><i>x</i> + 3 = 7?',
 type: 'multiple-choice',
 options: ['2', '4', '5', '8'],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>x = 4, so x = 8.'
 },
 {
 id: '48',
 text: 'Don is solving the sentence below for <i>x</i>. <br>5<i>x</i> − 8 = 0 <br>Which of the following is equivalent to this sentence?',
 type: 'multiple-choice',
 options: ['<i>x</i> − 8 = <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<i>x</i> − 8 = −5', '5<i>x</i> = 8', '5<i>x</i> = −8'],
 correctAnswer: 2, 
 explanation: 'Add 8 to both sides: 5x = 8.'
 },
 {
 id: '49',
 text: '<br><img src="images/50.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is a graph of a line that contains all the points in this table of ordered pairs?',
 type: 'multiple-choice',
 options: [
    {url: 'images/50a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/50d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The points (−4, −2), (0, 0), and (2, 1) lie on y = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>x, a line through the origin that rises 1 unit for every 2 units to the right, as in graph H.'
 },
 {
 id: '50',
 text: 'Laureen is studying her genealogy and has started a family tree of ancestors from which she is directly descended. <br><img src="images/51.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Laureen has been able to identify direct ancestors for six previous generations. How many direct ancestors does she have in the 6th generation before hers?',
 type: 'multiple-choice',
 options: ['12', '16', '32', '64'],
 correctAnswer: 3, 
 explanation: 'The number of ancestors doubles each generation: 2, 4, 8, 16, 32, 64.'
 },
 {
 id: '51',
 text: 'Part of the statement below is circled. <br><img src="images/52.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which <i>best</i> describes the circled part of the statement?',
 type: 'multiple-choice',
 options: ['Coefficient', 'Variable', 'Term', 'Expression'],
 correctAnswer: 0, 
 explanation: 'The circled 3 is the number multiplied by the variable x, so it is a coefficient.'
 },
 {
 id: '52',
 text: 'Laurie used 5 yards of fabric to make 2 costumes for the school play. How many yards of fabric would she need to make 20 more of these costumes?',
 type: 'multiple-choice',
 options: ['8', '27', '40', '50'],
 correctAnswer: 3, 
 explanation: 'Each costume uses 2.5 yards. 20 × 2.5 = 50 yards.'
 },
 {
 id: '53',
 text: 'Which graph corresponds to <i>y</i> = 2<i>x</i> − 2?',
 type: 'multiple-choice',
 options: [
    {url: 'images/54a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/54b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/54c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/54d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The line crosses the y-axis at −2 and rises 2 units for each unit to the right, as in graph F.'
 },
 {
 id: '54',
 text: 'Which means "the sum of 8 and 4 times a number is 36"?',
 type: 'multiple-choice',
 options: ['8<i>x</i> + 4 = 36', '4<i>x</i> + 8 = 36', '4(<i>x</i> + 8) = 36', '4<i>x</i> = 36 + 8'],
 correctAnswer: 1, 
 explanation: '4 times a number is 4x, and the sum with 8 is 4x + 8.'
 },
 {
 id: '55',
 text: 'A parking garage charges $2.00 for the first hour and $0.80 for each additional hour. Which of the following could be used to find <i>C</i>, the cost in dollars of parking <i>h</i> hours?',
 type: 'multiple-choice',
 options: ['<i>C</i> = 0.80(<i>h</i> − 1) + 2', '<i>C</i> = 2(<i>h</i> − 1) + 0.80', '<i>C</i> = 2.80(<i>h</i> − 1)', '<i>C</i> = 3.60(<i>h</i> − 1)'],
 correctAnswer: 0, 
 explanation: 'After the first hour there are h − 1 additional hours at $0.80 each, plus $2.00: C = 0.80(h − 1) + 2.'
 },
 {
 id: '56',
 text: 'Mr. Rosenthal purchased dining room furniture on a no-interest, 24 months-to-pay sale. The total cost of the furniture was $1,892 including sales tax. He planned to make a deposit of $350 and used <br>1,892 = 350 + 24<i>x</i> <br>to determine the amount of each monthly payment, <i>x</i>. How much should Mr. Rosenthal pay each month?',
 type: 'multiple-choice',
 options: ['$64.25', '$64.70', '$93.42', '$643.50'],
 correctAnswer: 0, 
 explanation: '24x = 1,892 − 350 = 1,542, so x = 1,542 ÷ 24 = $64.25.'
 },
 {
 id: '57',
 text: '<br><img src="images/58.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is the function described by the table of ordered pairs?',
 type: 'multiple-choice',
 options: ['<i>y</i> = <i>x</i> + 1', '<i>y</i> = 3<i>x</i>', '<i>y</i> = 2<i>x</i> + 3', '<i>y</i> = <i>x</i> + 13'],
 correctAnswer: 2, 
 explanation: '2(−2) + 3 = −1, 2(0) + 3 = 3, 2(3) + 3 = 9, 2(5) + 3 = 13, and 2(10) + 3 = 23.'
 },
 {
 id: '58',
 text: 'A taxi charges $2.00 for up to and including the first mile, and $1.60 for each mile thereafter. What would the taxi charge for a trip of 4 miles?',
 type: 'multiple-choice',
 options: ['$6.40', '$6.80', '$8.00', '$8.40'],
 correctAnswer: 1, 
 explanation: '$2.00 + 3 × $1.60 = $2.00 + $4.80 = $6.80.'
 },
 {
 id: '59',
 text: 'A bottle of liquid dog vitamins indicates that a dog gets 2 drops of vitamins each day for every 5 pounds of body weight. How many drops of vitamins should a 20-pound dog get each day?',
 type: 'multiple-choice',
 options: ['2', '4', '8', '22'],
 correctAnswer: 2, 
 explanation: '20 ÷ 5 = 4 groups of 5 pounds, and 4 × 2 = 8 drops.'
 }
];

// Scaled Score Mapping for Grade 8 Mathematics (2004)
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
  // Question 17 of the released test required measuring with a physical protractor and was removed.
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
        testType: 'Grade 8 Mathematics (2004)'
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
        result.testType = 'Grade 8 Mathematics (2004)';
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
            testType: 'Grade 8 Mathematics (2004)'
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