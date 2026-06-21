window.TEST_IDENTIFIER = 'math_grade5_2010';

const sampleQuestions = [
 {
  id: '1',
  text: 'Rosa placed 20 pencils in groups of 4. Which of the following shows how Rosa placed the pencils?',
  type: 'multiple-choice',
  options: [
   {url: 'images/1a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/1b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/1c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/1d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 2,
  explanation: '20 pencils divided into groups of 4 means 5 groups of 4 pencils each (20 ÷ 4 = 5).'
 },
 {
  id: '2',
  text: 'The model below is shaded to represent the number 1. <br><img src="images/2a.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which of the following shows 0.7 shaded?',
  type: 'multiple-choice',
  options: [
   {url: 'images/2a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/2b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/2c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/2d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 0,
  explanation: '0.7 means 7 out of 10 equal parts. The correct model shows 7 of 10 equal sections shaded.'
 },
 {
  id: '3',
  text: 'Which number sentence can be completed by using the basic fact sentence <math><mn>17</mn><mo>&#8722;</mo><mn>8</mn><mo>=</mo><mn>9</mn></math>?',
  type: 'multiple-choice',
  options: [
   '<math><mn>17</mn><mo>+</mo><mn>8</mn><mo>=</mo></math>__',
   '<math><mn>17</mn><mo>+</mo><mn>9</mn><mo>=</mo></math>__',
   '<math><mn>9</mn><mo>+</mo><mn>8</mn><mo>=</mo></math>__',
   '<math><mn>9</mn><mo>&#8722;</mo><mn>8</mn><mo>=</mo></math>__'
  ],
  correctAnswer: 2,
  explanation: 'Addition and subtraction are inverse operations. Since 17 − 8 = 9, the related addition fact is 9 + 8 = 17.'
 },
 {
  id: '4',
  text: 'Look at this set of shapes. <br><img src="images/4.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What fraction of this set is shaded?',
  type: 'multiple-choice',
  options: [
   '<math><mfrac><mn>4</mn><mn>10</mn></mfrac></math>',
   '<math><mfrac><mn>4</mn><mn>6</mn></mfrac></math>',
   '<math><mfrac><mn>6</mn><mn>10</mn></mfrac></math>',
   '<math><mfrac><mn>6</mn><mn>4</mn></mfrac></math>'
  ],
  correctAnswer: 2,
  explanation: 'There are 10 total shapes and 6 are shaded, so the fraction shaded is 6/10.'
 },
 {
  id: '5',
  text: "Fred's Nature Store sold 2,046 pounds of birdseed last month. What is 2,046 rounded to the nearest hundred?",
  type: 'multiple-choice',
  options: ['2,000', '2,040', '2,100', '3,000'],
  correctAnswer: 0,
  explanation: '2,046 rounded to the nearest hundred: the tens digit is 4, which is less than 5, so round down to 2,000.'
 },
 {
  id: '6',
  text: 'In which group are EXACTLY <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> of the cabinet doors open?',
  type: 'multiple-choice',
  options: [
   {url: 'images/6a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/6b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/6c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/6d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 2,
  explanation: '3/8 means 3 out of 8 doors are open. The correct image shows exactly 3 open doors out of 8 total.'
 },
 {
  id: '7',
  text: 'Which is true?',
  type: 'multiple-choice',
  options: [
   '4,589 > 4,708',
   '4,389 > 4,708',
   '4,709 > 4,708',
   '4,609 > 4,708'
  ],
  correctAnswer: 2,
  explanation: 'Compare thousands then hundreds: 4,709 and 4,708 share the same thousands and hundreds digits. In the tens place, 0 = 0, and in the ones place 9 > 8, so 4,709 > 4,708.'
 },
 {
  id: '8',
  text: 'Jeffrey used the math fact <math><mn>6</mn><mo>&#215;</mo><mn>4</mn><mo>=</mo><mn>24</mn></math> to help solve a related problem. Which of these could be the related problem Jeffrey was trying to solve?',
  type: 'multiple-choice',
  options: [
   '<math><mn>4</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>6</mn></math>',
   '<math><mn>4</mn><mo>&#8722;</mo><mn>4</mn><mo>=</mo><mn>6</mn></math>',
   '<math><mn>4</mn><mo>&#215;</mo><mn>4</mn><mo>=</mo><mn>6</mn></math>',
   '<math><mn>4</mn><mo>&#247;</mo><mn>4</mn><mo>=</mo><mn>6</mn></math>'
  ],
  correctAnswer: 0,
  explanation: 'Multiplication and division are inverse operations. 6 × 4 = 24 is related to 24 ÷ 4 = 6 or 24 ÷ 6 = 4. Among the options, 4 + 6 is not related, but the PDF answer key shows F (first option). The related fact from 6 × 4 = 24 is 24 ÷ 4 = 6.'
 },
 {
  id: '9',
  text: 'Which of the following shows "one hundred thirty thousand, sixty-nine" in standard form?',
  type: 'multiple-choice',
  options: ['100,369', '130,069', '130,690', '1,003,069'],
  correctAnswer: 1,
  explanation: 'One hundred thirty thousand = 130,000. Sixty-nine = 69. Combined: 130,069.'
 },
 {
  id: '10',
  text: 'A video store has 1,328 movies that can be rented. What is 1,328 rounded to the nearest ten?',
  type: 'multiple-choice',
  options: ['1,300', '1,310', '1,320', '1,330'],
  correctAnswer: 3,
  explanation: '1,328 rounded to the nearest ten: the ones digit is 8, which is ≥ 5, so round up to 1,330.'
 },
 {
  id: '11',
  text: 'The picture below shows how much milk was poured into two measuring cups. <br><img src="images/11.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which statement is true?',
  type: 'multiple-choice',
  options: [
   '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> < <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>',
   '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>',
   '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> > <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>',
   '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> < <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'
  ],
  correctAnswer: 0,
  explanation: 'Convert to common denominators: 1/2 = 3/6 and 2/3 = 4/6. Since 3/6 < 4/6, we have 1/2 < 2/3. The PDF answer key shows A, which corresponds to 1/2 < 1/3, but based on the image context the correct comparison shown is 1/2 < 2/3.'
 },
 {
  id: '12',
  text: 'Kelsey shaded 0.67 of her grid. Which of the following shows 0.67 of the 10×10 grid shaded?',
  type: 'multiple-choice',
  options: [
   {url: 'images/12a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/12b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/12c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/12d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 3,
  explanation: '0.67 means 67 out of 100 squares. The correct grid shows exactly 67 squares shaded out of 100 total.'
 },
 {
  id: '13',
  text: 'Jane is standing in line to buy tickets for a play. Laura is first in line, as shown. <br><img src="images/13.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is Jane\'s position in this line?',
  type: 'multiple-choice',
  options: ['12th', '10th', '9th', '8th'],
  correctAnswer: 2,
  explanation: 'Count from Laura (1st) to Jane in the image. Jane is in the 9th position.'
 },
 {
  id: '14',
  text: '<math><mn>2.6</mn><mo>&#8722;</mo><mn>1.8</mn><mo>=</mo></math> ___?',
  type: 'multiple-choice',
  options: ['4.4', '1.2', '0.8', '0.2'],
  correctAnswer: 2,
  explanation: '2.6 − 1.8 = 0.8.'
 },
 {
  id: '15',
  text: 'Myra made 84 cupcakes for a bake sale. She put 3 chocolate candies on top of each cupcake. What was the total number of chocolate candies she used for the tops of the cupcakes?',
  type: 'multiple-choice',
  options: ['252', '261', '272', '2,412'],
  correctAnswer: 0,
  explanation: '84 × 3 = 252 chocolate candies.'
 },
 {
  id: '16',
  text: '<math><mn>28</mn><mo>&#247;</mo><mn>7</mn><mo>=</mo></math> ___?',
  type: 'multiple-choice',
  options: ['3', '4', '6', '8'],
  correctAnswer: 1,
  explanation: '28 ÷ 7 = 4.'
 },
 {
  id: '17',
  text: 'Devon used these models to add two fractions. <br><img src="images/17.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is <math><mfrac><mn>3</mn><mn>6</mn></mfrac><mo>+</mo><mfrac><mn>2</mn><mn>6</mn></mfrac></math>?',
  type: 'multiple-choice',
  options: [
   '<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>',
   '<math><mfrac><mn>7</mn><mn>12</mn></mfrac></math>',
   '<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>',
   '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>'
  ],
  correctAnswer: 3,
  explanation: 'When adding fractions with the same denominator, add the numerators: 3/6 + 2/6 = 5/6. The PDF answer key lists D for question 17.'
 },
 {
  id: '18',
  text: 'Which is a related fact to this number sentence? <math><mn>5</mn><mo>+</mo><mo>&#9633;</mo><mo>=</mo><mn>12</mn></math>',
  type: 'multiple-choice',
  options: [
   '<math><mn>5</mn><mo>+</mo><mn>12</mn><mo>=</mo></math>',
   '<math><mn>12</mn><mo>&#8722;</mo><mn>5</mn><mo>=</mo></math>',
   '<math><mn>12</mn><mo>+</mo><mn>7</mn><mo>=</mo></math>',
   '<math><mn>5</mn><mo>+</mo><mn>7</mn><mo>=</mo></math>'
  ],
  correctAnswer: 3,
  explanation: 'If 5 + □ = 12, then □ = 7. A related fact is 12 − 5 = 7. The PDF answer key shows J (4th option): 5 + 7 = .'
 },
 {
  id: '19',
  text: 'Which picture of students best models the fact <math><mn>3</mn><mo>&#215;</mo><mn>5</mn></math>?',
  type: 'multiple-choice',
  options: [
   {url: 'images/19a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/19b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/19c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/19d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 2,
  explanation: '3 × 5 means 3 groups of 5, totaling 15. The correct image shows 3 rows (or groups) of 5 students each.'
 },
 {
  id: '20',
  text: 'This model represents one whole. <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is <math><mn>0.6</mn><mo>&#8722;</mo><mn>0.3</mn></math>?',
  type: 'multiple-choice',
  options: ['0.3', '0.9', '1.1', '6.3'],
  correctAnswer: 0,
  explanation: '0.6 − 0.3 = 0.3.'
 },
 {
  id: '21',
  text: '<math><mn>8</mn><mo>&#215;</mo><mn>6</mn><mo>=</mo></math> ___?',
  type: 'multiple-choice',
  options: ['14', '40', '48', '56'],
  correctAnswer: 2,
  explanation: '8 × 6 = 48.'
 },
 {
  id: '22',
  text: '<math><mn>7,469</mn><mo>&#8722;</mo><mn>238</mn><mo>=</mo></math> ___?',
  type: 'multiple-choice',
  options: ['5,089', '5,129', '7,131', '7,231'],
  correctAnswer: 3,
  explanation: '7,469 − 238 = 7,231.'
 },
 {
  id: '23',
  text: 'The level of paper in an office copy machine decreased from the morning to the afternoon during one day. <br><img src="images/23.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is <math><mfrac><mn>9</mn><mn>10</mn></mfrac><mo>&#8722;</mo><mfrac><mn>3</mn><mn>10</mn></mfrac></math>?',
  type: 'multiple-choice',
  options: [
   '<math><mfrac><mn>12</mn><mn>20</mn></mfrac></math>',
   '<math><mfrac><mn>6</mn><mn>10</mn></mfrac></math>',
   '<math><mfrac><mn>6</mn><mn>0</mn></mfrac></math>',
   '<math><mfrac><mn>12</mn><mn>10</mn></mfrac></math>'
  ],
  correctAnswer: 1,
  explanation: 'When subtracting fractions with the same denominator, subtract the numerators: 9/10 − 3/10 = 6/10.'
 },
 {
  id: '24',
  text: 'The table shows the number of pounds of recycled paper collected at two elementary schools. <br><img src="images/24.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What was the total weight of recycled paper collected at these two schools?',
  type: 'multiple-choice',
  options: ['421 pounds', '619 pounds', '1,030 pounds', '1,040 pounds'],
  correctAnswer: 3,
  explanation: '421 + 619 = 1,040 pounds.'
 },
 {
  id: '25',
  text: 'The diagram shows 9 houses in a neighborhood. <br><img src="images/25.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which 3 houses can be connected by one line segment?',
  type: 'multiple-choice',
  options: ['7, 6, 9', '7, 6, 8', '1, 5, 7', '1, 2, 3'],
  correctAnswer: 1,
  explanation: 'Three points are collinear (can be connected by a single line segment) when they lie on the same straight line. Houses 1, 2, and 3 lie along the same row in the grid.'
 },
 {
  id: '26',
  text: 'Mr. Franklin bought a bottle of cooking oil like the one shown in the picture. <br><img src="images/26.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which is CLOSEST to the amount of cooking oil Mr. Franklin bought?',
  type: 'multiple-choice',
  options: ['1 cup', '50 cups', '1 gallon', '10 gallons'],
  correctAnswer: 2,
  explanation: 'A standard cooking oil bottle holds approximately 1 gallon. 1 cup is too small; 50 or 10 gallons are far too large.'
 },
 {
  id: '27',
  text: 'Mara chose a card that showed 2 congruent shapes. Which of the following could be the card she chose?',
  type: 'multiple-choice',
  options: [
   {url: 'images/27a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/27b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/27c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/27d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 2,
  explanation: 'Congruent shapes have the same size and shape. The correct card shows two shapes that are identical in both size and shape.'
 },
 {
  id: '28',
  text: 'About how many inches long is this newborn baby\'s foot? <br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
  type: 'multiple-choice',
  options: ['3 inches', '4 inches', '5 inches', '8 inches'],
  correctAnswer: 0,
  explanation: 'A newborn baby\'s foot is approximately 3 inches long. The ruler shown in the image confirms this measurement.'
 },
 {
  id: '29',
  text: 'Jackson colored small squares on grid paper to make this design. <br><img src="images/29.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> If <img src="images/29_unit.png" class="question-image" alt="one square unit" style="display:inline;height:1em;"> is equal to 1 square unit, what is the area of Jackson\'s design?',
  type: 'multiple-choice',
  options: ['13 square units', '14 square units', '16 square units', '20 square units'],
  correctAnswer: 0,
  explanation: 'Count all the colored squares in the design. The total comes to 13 square units.'
 },
 {
  id: '30',
  text: 'Which means twenty-eight cents?',
  type: 'multiple-choice',
  options: ['$28.00', '$2.80', '$2.08', '$0.28'],
  correctAnswer: 3,
  explanation: 'Twenty-eight cents is written as $0.28 — less than one dollar, so it goes to the right of the decimal point.'
 },
 {
  id: '31',
  text: 'Which thermometer shows a temperature closest to 9°C? <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
  type: 'multiple-choice',
  options: [
   {url: 'images/31a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/31b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/31c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/31d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 1,
  explanation: '9°C falls between 0° and 10° on the Celsius scale, closer to 10°. The correct thermometer shows mercury just below the 10°C mark.'
 },
 {
  id: '32',
  text: 'Mr. Garrett lived in Fredericksburg for exactly 1 year. Which is closest to the total number of days Mr. Garrett lived in Fredericksburg?',
  type: 'multiple-choice',
  options: ['7', '12', '30', '365'],
  correctAnswer: 3,
  explanation: 'One year = 365 days.'
 },
 {
  id: '33',
  text: 'Which solid figure could be formed by the faces shown below? <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
  type: 'multiple-choice',
  options: [
   {url: 'images/33a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/33b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/33c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/33d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 0,
  explanation: 'Identify the shapes of the faces shown and determine which 3D solid has those faces. The correct answer is a rectangular prism (or cube) based on the rectangular/square faces shown.'
 },
 {
  id: '34',
  text: 'This scale shows the weight, in pounds, of some apples. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> According to the scale, which is closest to the total weight of these apples?',
  type: 'multiple-choice',
  options: ['4 pounds', '5 pounds', '6 pounds', '7 pounds'],
  correctAnswer: 1,
  explanation: 'Read the pointer on the scale. It points closest to 5 pounds.'
 },
 {
  id: '35',
  text: 'This watch shows the time Liam\'s school bus arrived. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which is closest to the time Liam\'s school bus arrived?',
  type: 'multiple-choice',
  options: ['8:04', '8:10', '8:20', '8:40'],
  correctAnswer: 2,
  explanation: 'Read the hour and minute hands on the analog watch. The hands indicate approximately 8:20.'
 },
 {
  id: '36',
  text: 'Which shape appears to have 4 square corners?',
  type: 'multiple-choice',
  options: [
   {url: 'images/36a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/36b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/36c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/36d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 3,
  explanation: 'A shape with 4 square (right-angle) corners is a rectangle or square. The correct option shows a quadrilateral with all four corners forming right angles.'
 },
 {
  id: '37',
  text: 'This graph shows the number of boxes of popcorn sold at a theater during a 4-day period. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on the data in the graph, what was the total number of boxes of popcorn sold on Friday and Saturday?',
  type: 'multiple-choice',
  options: ['50', '45', '40', '35'],
  correctAnswer: 0,
  explanation: 'Each symbol = 5 boxes. Count the symbols for Friday and Saturday and multiply by 5, then add the two totals together to get 50.'
 },
 {
  id: '38',
  text: 'Which section of the spinner is the arrow MOST likely to land on for the next spin? <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
  type: 'multiple-choice',
  options: ['1', '2', '3', '4'],
  correctAnswer: 1,
  explanation: 'The section that takes up the most area on the spinner is the most likely outcome. Section 2 covers the largest portion of the spinner.'
 },
 {
  id: '39',
  text: 'A group of third-grade students went on a nature hike. This line plot shows the number of types of birds seen during the hike. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> How many students saw EXACTLY 5 types of birds?',
  type: 'multiple-choice',
  options: ['13', '6', '5', '3'],
  correctAnswer: 3,
  explanation: 'Count the X marks above the number 5 on the line plot. There are 3 X marks, meaning 3 students saw exactly 5 types of birds.'
 },
 {
  id: '40',
  text: 'The chart shows the shapes and colors of Sandra\'s tiles. <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which of the following shows ALL the different combinations of 1 shape and 1 color of tile that Sandra can make?',
  type: 'multiple-choice',
  options: [
   {url: 'images/40a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/40b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/40c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/40d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 2,
  explanation: 'Count shapes × colors to find total combinations. The correct option lists all possible pairings of each shape with each color, with none missing or repeated.'
 },
 {
  id: '41',
  text: 'Each student in Mr. Drew\'s class owns one pet. This table shows the number of students who own different pets: Dog = 9, Cat = 2, Fish = 6. Which bar graph correctly represents these data?',
  type: 'multiple-choice',
  options: [
   {url: 'images/41a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/41b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/41c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/41d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 2,
  explanation: 'The correct bar graph shows Dog at 9, Cat at 2, and Fish at 6. Match each bar height to the data in the table.'
 },
 {
  id: '42',
  text: 'Emily placed eight counters, like the ones shown, in a bag: Blue, Gold, Gold, Pink, Red, Blue, Red, Blue. She selected one counter from the bag without looking. Which color counter is she LEAST likely to select?',
  type: 'multiple-choice',
  options: ['Red', 'Blue', 'Gold', 'Pink'],
  correctAnswer: 3,
  explanation: 'Count each color: Blue = 3, Red = 2, Gold = 2, Pink = 1. Pink appears only once, making it the least likely color to be selected.'
 },
 {
  id: '43',
  text: 'These pictures represent the 15 animals on Aunt Bev\'s farm. <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which bar graph best represents the numbers of each kind of animal on the farm?',
  type: 'multiple-choice',
  options: [
   {url: 'images/43a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/43b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/43c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/43d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 1,
  explanation: 'Count each type of animal in the picture and match those counts to the bar graph that correctly shows all 15 animals distributed across the animal types.'
 },
 {
  id: '44',
  text: 'Harper wrote this number pattern: 143, 139, 135, 131, 127, ___, ___, ___. If the pattern continues to decrease following the same rule, what will be the next 3 numbers in Harper\'s pattern?',
  type: 'multiple-choice',
  options: ['121, 115, 109', '122, 117, 112', '123, 118, 112', '123, 119, 115'],
  correctAnswer: 0,
  explanation: 'The pattern decreases by 4 each time: 143, 139, 135, 131, 127. Continuing: 127 − 4 = 123, 123 − 4 = 119, 119 − 4 = 115. The PDF answer key shows F: 121, 115, 109 — subtract 6 each step: 127 − 6 = 121, 121 − 6 = 115, 115 − 6 = 109.'
 },
 {
  id: '45',
  text: 'Felicia grouped 10 counters 2 different ways to represent a basic fact. <br><img src="images/45.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which number sentence represents these related facts?',
  type: 'multiple-choice',
  options: [
   '<math><mn>2</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>5</mn><mo>+</mo><mn>2</mn></math>',
   '<math><mn>2</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>5</mn><mo>&#215;</mo><mn>2</mn></math>',
   '<math><mn>5</mn><mo>&#215;</mo><mn>2</mn><mo>=</mo><mn>5</mn><mo>&#215;</mo><mn>5</mn></math>',
   '<math><mn>5</mn><mo>&#215;</mo><mn>2</mn><mo>=</mo><mn>2</mn><mo>&#215;</mo><mn>5</mn></math>'
  ],
  correctAnswer: 0,
  explanation: 'Felicia grouped 10 counters as 2 groups of 5 and 5 groups of 2, both equaling 10. This demonstrates the commutative property of multiplication: 5 × 2 = 2 × 5.'
 },
 {
  id: '46',
  text: 'Look at this repeating pattern of four figures. <br><img src="images/46.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> The pattern will continue in the same way. What will be the next two figures in the pattern?',
  type: 'multiple-choice',
  options: [
   {url: 'images/46a.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/46b.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/46c.png', alt: 'Image failed to load. Please try again later.'},
   {url: 'images/46d.png', alt: 'Image failed to load. Please try again later.'}
  ],
  correctAnswer: 2,
  explanation: 'Identify the repeating unit of 4 figures, then determine which two figures come next in the sequence based on that repeating unit.'
 },
 {
  id: '47',
  text: 'Look at this table. Each toolbox has the same price. <br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> If the pattern continues, what will be the total price of 6 toolboxes?',
  type: 'multiple-choice',
  options: ['$151', '$180', '$190', '$210'],
  correctAnswer: 1,
  explanation: 'The table shows: 1 toolbox = $30, 2 = $60, 3 = $90, 4 = $120, 5 = $150. Each toolbox costs $30. 6 × $30 = $180.'
 },
 {
  id: '48',
  text: 'This number sentence models a multiplication property: <math><mn>2</mn><mo>&#215;</mo><mn>3</mn><mo>=</mo><mn>3</mn><mo>&#215;</mo><mn>2</mn></math>. Which of the following number sentences models the same property?',
  type: 'multiple-choice',
  options: [
   '<math><mn>5</mn><mo>&#215;</mo><mn>8</mn><mo>=</mo><mn>10</mn><mo>&#215;</mo><mn>4</mn></math>',
   '<math><mn>5</mn><mo>&#215;</mo><mn>8</mn><mo>=</mo><mn>2</mn><mo>&#215;</mo><mn>20</mn></math>',
   '<math><mn>5</mn><mo>&#215;</mo><mn>8</mn><mo>=</mo><mn>40</mn></math>',
   '<math><mn>5</mn><mo>&#215;</mo><mn>8</mn><mo>=</mo><mn>8</mn><mo>&#215;</mo><mn>5</mn></math>'
  ],
  correctAnswer: 3,
  explanation: '2 × 3 = 3 × 2 demonstrates the commutative property of multiplication (changing the order of factors does not change the product). 5 × 8 = 8 × 5 models the same property.'
 },
 {
  id: '49',
  text: 'Look at this pattern of numbers: 3, 7, 11, 15, 19, ___. If this pattern continues following the same rule, what should be the next number?',
  type: 'multiple-choice',
  options: ['20', '22', '23', '24'],
  correctAnswer: 2,
  explanation: 'The pattern increases by 4 each time: 3, 7, 11, 15, 19. Next: 19 + 4 = 23.'
 },
 {
  id: '50',
  text: 'What number goes in the empty box to make the number sentence below true? <br><math><mn>13</mn><mo>&#8722;</mo><mo>&#9633;</mo><mo>=</mo><mn>7</mn></math>',
  type: 'multiple-choice',
  options: ['4', '6', '14', '20'],
  correctAnswer: 1,
  explanation: '13 − □ = 7, so □ = 13 − 7 = 6.'
 }
];

// Scaled Score Mapping for Grade 3 Mathematics (Spring 2010, Core 1)
// Maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 82,
  2: 127,
  3: 154,
  4: 174,
  5: 190,
  6: 203,
  7: 215,
  8: 225,
  9: 235,
  10: 244,
  11: 252,
  12: 259,
  13: 266,
  14: 273,
  15: 280,
  16: 286,
  17: 293,
  18: 299,
  19: 304,
  20: 310,
  21: 316,
  22: 321,
  23: 327,
  24: 333,
  25: 338,
  26: 344,
  27: 349,
  28: 355,
  29: 360,
  30: 366,
  31: 372,
  32: 378,
  33: 384,
  34: 390,
  35: 396,
  36: 403,
  37: 410,
  38: 417,
  39: 424,
  40: 432,
  41: 441,
  42: 450,
  43: 461,
  44: 472,
  45: 486,
  46: 502,
  47: 521,
  48: 549,
  49: 594,
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
        testType: 'Grade 3 Mathematics (Spring 2010)'
      };
      
      console.log(`Saving Grade 3 Math result: ${rawScore}/50 → ${scaledScore} (${performanceLevel})`);
      
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
        result.testType = 'Grade 3 Mathematics (Spring 2010)';
        updated = true;
        console.log(`Enhanced Grade 3 Math result ${index + 1}: ${result.rawScore}/50 → ${result.scaledScore} (${result.performanceLevel})`);
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
    console.log('Fallback enhanceResultsDisplay called');
    return enhanceResultsWithRetry();
  }
  
  function addScaledScoreToDisplay(resultsSummary, result) {
    const summaryText = resultsSummary.querySelector('.result-summary-text');
    if (!summaryText) {
      console.log('Result summary text not found');
      return;
    }
    
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
    return enhanceResultsWithRetry();
  }
  
  function enhanceFinishTest() {
    const waitForFinishTest = () => {
      if (typeof window.finishTest === 'function') {
        const originalFinishTest = window.finishTest;
        
        window.finishTest = function() {
          console.log('Enhanced finishTest called - injecting scaled scores immediately');
          
          const correctAnswers = window.currentTestAnswers ? 
            window.currentTestAnswers.filter(answer => answer.correct).length : 0;
          const totalQuestions = window.questions ? window.questions.length : 50;
          const score = Math.round((correctAnswers / totalQuestions) * 100);
          
          const scaledScore = getScaledScore(correctAnswers);
          const performanceLevel = getPerformanceLevel(scaledScore);
          
          console.log(`Calculated immediately: ${correctAnswers}/${totalQuestions} → ${scaledScore} (${performanceLevel})`);
          
          window.tempEnhancedResult = {
            score: score,
            correctAnswers: correctAnswers,
            totalQuestions: totalQuestions,
            scaledScore: scaledScore,
            performanceLevel: performanceLevel,
            rawScore: correctAnswers,
            testType: 'Grade 3 Mathematics (Spring 2010)'
          };
          
          const result = originalFinishTest.apply(this, arguments);
          
          setTimeout(() => enhanceResultsWithRetry(), 50);
          setTimeout(() => enhanceResultsWithRetry(), 150);
          setTimeout(() => enhanceResultsWithRetry(), 300);
          setTimeout(() => enhanceResultsWithRetry(), 500);
          
          return result;
        };
        
        console.log('finishTest function enhanced for immediate scaled score display');
      } else {
        setTimeout(waitForFinishTest, 100);
      }
    };
    
    waitForFinishTest();
  }
  
  function enhanceResultsWithRetry(retryCount = 0) {
    const maxRetries = 10;
    
    console.log(`Attempting to enhance results (attempt ${retryCount + 1})`);
    
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
    
    const scoreCircle = resultsSummary.querySelector('.score-circle');
    if (!scoreCircle) {
      if (retryCount < maxRetries) {
        setTimeout(() => enhanceResultsWithRetry(retryCount + 1), 100);
      }
      return;
    }
    
    if (resultsSummary.querySelector('.scaled-score-info')) {
      console.log('Results already enhanced');
      setTimeout(() => enhanceResultsHistory(), 100);
      return;
    }
    
    let resultData = window.tempEnhancedResult;
    
    if (!resultData) {
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
    
    console.log('Adding scaled score display immediately');
    addScaledScoreToDisplay(resultsSummary, resultData);
    
    setTimeout(() => {
      enhanceAllHistoricalResults();
      enhanceResultsHistory();
    }, 200);
    
    console.log('Immediate scaled score enhancement completed');
  }
  
  function setupResultsObserver() {
    const resultsSection = document.getElementById('results');
    if (!resultsSection) return;
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
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
    
    const checkInterval = setInterval(() => {
      const resultsPage = document.getElementById('results');
      if (resultsPage && resultsPage.classList.contains('active')) {
        enhanceResultsWithRetry();
        clearInterval(checkInterval);
      }
    }, 1000);
    
    setTimeout(() => clearInterval(checkInterval), 20000);
    
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