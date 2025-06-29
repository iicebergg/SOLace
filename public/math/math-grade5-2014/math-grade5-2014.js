const sampleQuestions = [
 {
 id: '1',
 text: '56.791 + 1.9 = ?',
 type: 'multiple-choice',
 options: ['58.691', '57.691', '56.981', '56.810'],
 correctAnswer: 0,
 explanation: 'Addition and subtraction are inverse operations, so 9 + 6 = 15 helps solve 15 - 9 = 6.'
 },
 {
 id: '2',
 text: 'Which decimal is equivalent to <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['0.30', '0.35', '0.53', '0.60'],
 correctAnswer: 3, 
 explanation: 'When comparing fractions with the same denominator, compare the numerators. Since 3 < 4, we have 3/11 < 4/11.'
 },
 {
 id: '3',
 text: 'A parking garage has 12 levels. Each level has 86 parking spaces. What is the total number of parking spaces in the garage?',
 type: 'multiple-choice',
 options: ['98', '168', '932', '1,032'],
 correctAnswer: 3, 
 explanation: 'Count the place value blocks: thousands, hundreds, tens, and ones to determine the number.'
 },
 {
 id: '4',
 text: 'What is the value of this expression? <br><center>6+4(8-5)</center>',
 type: 'multiple-choice',
 options: ['18', '30', '33', '72'],
 correctAnswer: 0,
 explanation: 'To round 5,647: to nearest thousand (6,000), nearest hundred (5,600), nearest ten (5,650).'
 },
 {
 id: '5',
 text: 'Which list of numbers is ordered from least to greatest?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>, 0.22, <math><mfrac><mn>8</mn><mn>9</mn></mfrac></math>, 0.75', '<math><mfrac><mn>8</mn><mn>9</mn></mfrac></math>, 0.75, <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>, 0.22', '0.22, <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>, 0.75, <math><mfrac><mn>8</mn><mn>9</mn></mfrac></math>', '0.22, 0.75, <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>, <math><mfrac><mn>8</mn><mn>9</mn></mfrac></math>'],
 correctAnswer: 2,
 explanation: 'To round 5,647: to nearest thousand (6,000), nearest hundred (5,600), nearest ten (5,650).'
 },
 {
 id: '6',
 text: 'Based on the order of operations, which shows the first step in simplifying this expression? <br><center>16 ÷ 2 + 6(7 + 4 × 5)</center>',
 type: 'multiple-choice',
 options: ['8 + 6(7 + 4 × 5)', '16 ÷ 8(7 + 4 × 5)', '16 ÷ 2 + 6(11 × 5)', '16 ÷ 2 + 6(7 + 20)'],
 correctAnswer: 3, 
 explanation: '78,025 is read as seventy-eight thousand, twenty-five.'
 },
 {
 id: '7',
 text: 'This table shows the weights of Vincent\'s three dogs. <br><img src="images/question_7.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the difference between the combined weight of Hannah and Dillon and the weight of Wilson?',
 type: 'free-response',
 correctKeywords: ['24.8', '24.80', '24.800'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '8',
 text: 'Mary Lee has a total of 216 eggs. Using these eggs, she will fill empty egg cartons that each hold 12 eggs. What is the greatest number of egg cartons that Mary Lee can fill completely?',
 type: 'multiple-choice',
 options: ['18', '19', '228', '2,592'],
 correctAnswer: 0, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '9',
 text: 'What is the product of 5.06 and 2.1?',
 type: 'multiple-choice',
 options: ['10.526', '10.626', '1.518', '1.508'],
 correctAnswer: 1, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '10',
 text: '493.57 ÷ 7 = __',
 type: 'free-response',
 correctKeywords: ['70.51', '70.510'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '11',
 text: 'The cost for a movie ticket is $5.50. Soft drinks cost $1.25 each. What is the total cost for 13 people to each purchase a movie ticket and a soft drink?',
 type: 'multiple-choice',
 options: ['$16.25', '$19.75', '$72.75', '$87.75'],
 correctAnswer: 3, 
 explanation: '63 ÷ 7 = 9, so the answer is 7.'
 },
 {
 id: '12',
 text: 'students are comparing their heights. Jose is 4<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> feet tall, Lee is 4<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> feet tall, Judi is 4<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math> feet tall, and Sammy is 4<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> feet tall. Which student is the tallest?',
 type: 'multiple-choice',
 options: ['Jose', 'Lee', 'Judi', 'Sammy'],
 correctAnswer: 3, 
 explanation: 'Count the total parts and the shaded parts to determine the fraction.'
 },
 {
 id: '13',
 text: 'Michael has a total of 10 pies to serve. This table shows the amounts of pie Michael has already served. <br><img src="images/question_13.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which mixed number represents the total amount of pie Michael has left to serve?',
 type: 'multiple-choice',
 options: ['2<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math> pies', '3<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math> pies', '6<math><mfrac><mn>11</mn><mn>12</mn></mfrac></math> pies', '7<math><mfrac><mn>11</mn><mn>12</mn></mfrac></math> pies'],
 correctAnswer: 0, 
 explanation: 'Look at the arrangement to determine the multiplication sentence that represents the groups.'
 },
 {
 id: '14',
 text: 'The state of Virginia has a total area of 39,594 square miles. The state of Maryland has a total area of 9,774 square miles. How much larger is the total area of Virginia than Maryland?',
 type: 'multiple-choice',
 options: ['29,820 square miles', '30,220 square miles', '30,820 square miles', '49,368 square miles'],
 correctAnswer: 0, 
 explanation: 'Start with 25, subtract 26 sold, then add 136 new plants: 25 - 26 + 136 = 135. Wait, this seems to have an error in the problem or answer choices.'
 },
 {
 id: '15',
 text: 'Karla bought 3 packages of chicken. The total weight of the chicken in these packages is 7.52 pounds. This table shows the weight of the chicken in two packages. <br><img src="images/question_15.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the weight of the chicken in package Y?',
 type: 'multiple-choice',
 options: ['3.55 pounds', '3.87 pounds', '3.97 pounds', '4.45 pounds'],
 correctAnswer: 0, 
 explanation: 'Count the total equal parts and the shaded parts to find the fraction.'
 },
 {
 id: '16',
 text: 'This chart shows the number of miles Tyra walked on each of three days. <br><img src="images/question_13.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the total number of miles Tyra walked on these three days?',
 type: 'multiple-choice',
 options: ['3<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math> miles', '4<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> miles', '4<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> miles', '5<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math> miles'],
 correctAnswer: 3, 
 explanation: 'Look at the arrangement to determine the multiplication sentence that represents the groups.'
 },
 {
 id: '17',
 text: 'A set of basketball uniforms contains only odd-numbered jerseys. Which could be three of the jersey numbers from this set of uniforms?',
 type: 'multiple-choice',
 options: ['11, 33, 44', '15, 41, 55', '21, 35, 52', '34, 42, 50'],
 correctAnswer: 1, 
 explanation: 'Look at the arrangement to determine the multiplication sentence that represents the groups.'
 },
 {
 id: '18',
 text: 'Tristan saw five helicopters parked at the airport. <br><img src="images/question_18.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which list shows all of the odd numbers on the helicopters?',
 type: 'multiple-choice',
 options: ['36, 54', '11, 31', '11, 23, 31', '11, 31, 36, 54'],
 correctAnswer: 2, 
 explanation: '3,000 - 285 = 2,715.'
 },
 {
 id: '19',
 text: 'Which of the following digits could be found in the ones place of a number that is divisible by 2?',
 type: 'multiple-choice',
 options: ['0', '1', '3', '5'],
 correctAnswer: 0, 
 explanation: 'Look at the pattern on the number line to determine which operation it represents.'
 },
 {
 id: '20',
 text: 'What is 7,459.82 rounded to the nearest whole number?',
 type: 'free-response',
 correctKeywords: ['7,460', '7460'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '21',
 text: '530 milliliters = __ liter(s)',
 type: 'multiple-choice',
 options: ['0.53', '5.3', '53,000', '530,000'],
 correctAnswer: 0, 
 explanation: 'From 10:30 A.M. to 1:00 P.M. is 2 hours and 30 minutes = 150 minutes.'
 },
 {
 id: '22',
 text: 'Which is closest to the measure of ∠T? <br><img src="images/question_22.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['27°', '33°', '153°', '180°'],
 correctAnswer: 2, 
 explanation: 'From 10:30 A.M. to 1:00 P.M. is 2 hours and 30 minutes = 150 minutes.'
 },
 {
 id: '23',
 text: 'Marissa drew a figure with the following characteristics. <ul><li>Four congruent sides</li><li>Two pairs of parallel sides</li><li>Two pairs of congruent opposite angles</li><li>No right angles</li></ul> Which term best describes the figure Marissa drew?',
 type: 'multiple-choice',
 options: ['Triangle', 'Rhombus', 'Rectangle', 'Trapezoid'],
 correctAnswer: 1, 
 explanation: '6 feet is the most reasonable length for a bed. 6 inches and 6 centimeters are too short, 6 meters is too long.'
 },
 {
 id: '24',
 text: 'Mario began watching a movie at the time shown on the clock. <br><img src="images/question_24.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> The movie was 2 hours and 25 minutes long. What time did the movie end?',
 type: 'multiple-choice',
 options: ['7:55 P.M.', '8:30 P.M.', '9:30 P.M.', '9:55 P.M'],
 correctAnswer: 3,
 explanation: 'For equally likely outcomes, place 4 star cards and 4 heart cards in the bag.'
 },
 {
 id: '25',
 text: 'To determine the amount of peanuts a bag will hold, Toby needs to find the--',
 type: 'multiple-choice',
 options: ['area', 'length', 'volume', 'perimeter'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '26',
 text: 'This is a flat figure. Destiny plans to cut this figure along the dashed line segments. <br><img src="images/question_26.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Identify the names of the three figures she will form.',
 type: 'multiple-select',
 options: ['Triangle', 'Rhombus', 'Parallelogram', 'Square', 'Trapezoid'],
 correctAnswer: [0, 2, 4],
 explanation: 'Check each multiplication: 4×12=48, 6×8=48, 12×4=48, 7×6=42, 8×6=48, 5×8=40.'
 },
 {
 id: '27',
 text: 'Point S is the center of the circle shown. <br><img src="images/question_27.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which line segment is a radius of the circle?',
 type: 'multiple-choice',
 options: ['QR', 'SR', 'QT', 'TR'],
 correctAnswer: 1, 
 explanation: 'Count the value of all the coins and bills shown.'
 },
 {
 id: '28',
 text: 'The city is building a new outdoor basketball court. <br><img src="images/question_28.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which is most likely the length of the new outdoor basketball court?',
 type: 'multiple-choice',
 options: ['94 inches', '94 feet', '94 centimeters', '94 kilometers'],
 correctAnswer: 1, 
 explanation: 'Count the value of all the coins and bills shown.'
 },
 {
 id: '29',
 text: 'Which triangle appears to be a scalene triangle?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_29a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_29b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_29c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_29d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '30',
 text: 'Perimeter is used to find the--',
 type: 'multiple-choice',
 options: ['distance from a ceiling to the floor', 'amount of blacktop on a playground', 'amount of floor space covered by a carpet', 'distance around the edge of a swimming pool'],
 correctAnswer: 3, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '31',
 text: 'Identify each angle that appears to be an acute angle.',
 type: 'multiple-select',
 options: [
    {url: 'images/question_31a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_31b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_31c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_31d.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_31e.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_31f.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: [1, 3],
 explanation: 'Check each multiplication: 4×12=48, 6×8=48, 12×4=48, 7×6=42, 8×6=48, 5×8=40.'
 },
 {
 id: '32',
 text: 'What is the area of a right triangle with a base of 4 feet and a height of 8 feet?',
 type: 'multiple-choice',
 options: ['12 square feet', '16 square feet', '24 square feet', '32 square feet'],
 correctAnswer: 1, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.',
 },
 {
 id: '33',
 text: 'The chart shows the different shirts, pants, and shoes Simon has in his closet. <br><img src="images/question_33.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which lists all of the possible combinations Simon can create of one shirt, one pair of pants, and one pair of shoes?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_33a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_33b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_33c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_33d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '34',
 text: 'This table shows the number of fish in each of 7 aquariums. <br><img src="images/question_34.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Jeff emptied all the fish from these aquariums and put a fair share of these fish into each of these 7 aquariums. The number of fish he will put into each aquarium represents the--',
 type: 'multiple-choice',
 options: ['median', 'range', 'mean', 'mode'],
 correctAnswer: 2, 
 explanation: 'The identity property of multiplication states that any number multiplied by 1 equals itself.'
 },
 {
 id: '35',
 text: 'This graph shows the high temperature in Richmond for each of 6 days. <br><img src="images/question_35.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on this graph, which statement is true?',
 type: 'multiple-choice',
 options: ['The greatest increase in high temperature on the graph occurs between Day 4 and Day 5.', 'The greatest increase in high temperature on the graph occurs between Day 5 and Day 6.', 'The greatest decrease in high temperature on the graph occurs between Day 2 and Day 3.', 'The greatest decrease in high temperature on the graph occurs between Day 3 and Day 4.'],
 correctAnswer: 0, 
 explanation: 'The identity property of multiplication states that any number multiplied by 1 equals itself.'
 },
 {
 id: '36',
 text: 'Brad has 2 bags with blocks that are all the same shape and size. There are 5 blocks in Bag A and 2 blocks in Bag B as shown. <br><img src="images/question_36.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Brad will randomly select one block from each bag. Which list shows all of the possible combinations of one block from each bag?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '37',
 text: 'A set of data is shown. <center>{ 24, 14, 37, 14, 25, 37, 14, 33, 27 }</center> What is the mode for this set of data?',
 type: 'free-response',
 correctKeywords: ['14'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '38',
 text: 'A number machine uses a rule to change numbers. This table shows the results. <br><img src="images/question_38.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which could be the rule the number machine uses to change the input numbers to the output numbers?',
 type: 'multiple-choice',
 options: ['Add 15', 'Subtract 15', 'Divide by 4', 'Multiply by 4'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '39',
 text: 'This graph shows the number of boxes of canned soup that were delivered to a grocery store each week for six weeks. <br><img src="images/question_39.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on this graph, which statement is true?',
 type: 'multiple-choice',
 options: ['The number of boxes of soup delivered to the store in Week 6 is more than the number of boxes of soup delivered to the store in Week 4.', 'The number of boxes of soup delivered to the store in Week 3 is less than the number of boxes of soup delivered to the store in Week 5.', 'The number of boxes of soup delivered to the store in Week l is about the same as the number of boxes of soup delivered to the store in Week 4.', 'The number of boxes of soup delivered to the store in Week 2 is about the same as the number of boxes of soup delivered to the store in Week 5.'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '40',
 text: 'Ms. Chapman wrote this equation on the board. <center>1 + n = 6</center> She drew a model of this equation using this key. <br><img src="images/question_40.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which model best represents Ms. Chapman\'s equation?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_40a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_40b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_40c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_40d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '41',
 text: 'Which rule can be used to find the next number in this increasing pattern? <center>3, 4, 6, 9, 13, 18, 24, _</center>',
 type: 'multiple-choice',
 options: ['Add 7 to 24', 'Add 6 to 24', 'Add 5 to 24', 'Add 3 to 24'],
 correctAnswer: 0, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '42',
 text: 'Jordan needs to walk 6 more miles this week to reach his weekly goal of 21 miles. Which number sentence can be used to find n, the total number of miles that Jordan has walked so far this week?',
 type: 'multiple-choice',
 options: ['n = 6 + 21', 'n + 6 = 21', 'n = 6 × 21', 'n - 6 = 21'],
 correctAnswer: 1, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '43',
 text: 'The table shows the number of points Ellie scored in each of five games. <br><img src="images/question_43.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> The range is 10 because it is the--',
 type: 'multiple-choice',
 options: ['middle number of points she scored', 'number of points she scored most often', 'fair share of the number of points she scored', 'difference between the highest and lowest number of points she scored'],
 correctAnswer: 3, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '44',
 text: 'This stem-and-leaf plot shows the number of pies sold at a bakery each day for 14 days. <br><img src="images/question_44.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on the information in the stem-and-leaf plot, which statement is correct?',
 type: 'multiple-choice',
 options: ['The greatest number of pies sold on any day was 30.', 'The greatest number of pies sold on any day was 25.', 'The least number of pies sold on any day was 8.', 'The least number of pies sold on any day was 0.'],
 correctAnswer: 0, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '45',
 text: 'This sample space shows all the possible combinations of one type of main dish and one type of drink from which Roberto can choose. <center>Cereal, Milk<br>Cereal, Juice<br>Eggs, Milk<br>Eggs, Juice<br>Pancakes, Milk<br>Pancakes, Juice</center> According to the sample space, what is the probability Roberto will select eggs and juice?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '46',
 text: 'What is the 7th term in this decreasing pattern? <center>73, 64, 56, 49, 43, ...</center>',
 type: 'free-response',
 correctKeywords: ['34'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '47',
 text: 'This set of data shows the number of pages that Caden read each night for 5 nights. <center>{ 15, 12, 18, 10, 30 }</center> What is the range for this set of data?',
 type: 'multiple-choice',
 options: ['20', '18', '17', '15'],
 correctAnswer: 0, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '48',
 text: 'Which situation could be represented by the open sentence 15 - 5 = p?',
 type: 'multiple-choice',
 options: ['Stuart is reading a book that has a total of 15 chapters. He reads 5 chapters every day. How many days will it take Stuart to finish this book?', 'Stuart is reading a book that has a total of 15 chapters. He has already read 5 chapters. How many chapters of the book are left for Stuart to read?', 'Stuart is reading a book that has a total of 15 chapters. This book has 5 chapters less than the book Stuart read last week. How many chapters were in the book Stuart read last week?', 'Stuart is reading a book that has a total of 15 chapters. This is 5 times the number of chapters as the book. Stuart read last week. How many chapters were in the book Stuart read last week?'],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '49',
 text: 'Which equation shows the distributive property?',
 type: 'multiple-choice',
 options: ['256 × 1 = 256', '5 × 9 × 4 = 4 × 9 × 5', '(8 × 6) + (8 × 7) = 8(6 + 7)', '(12 + 19) + 13 = 12 + (19 + 13)'],
 correctAnswer: 2, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
  {
 id: '50',
 text: 'Sylvia has 18 pieces of red, cherry-flavored candy to share equally among friends. Which is a variable in this situation?',
 type: 'multiple-choice',
 options: ['The number of friends who will receive candy', 'The number of pieces of candy that Sylvia has', 'The flavor of each piece of candy', 'The color of each piece of candy'],
 correctAnswer: 0, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
];

// Scaled Score Mapping for Grade 4 Mathematics (2014)
// Maps raw scores (number correct out of 40) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 144,
  2: 183,
  3: 207,
  4: 225,
  5: 239,
  6: 251,
  7: 262,
  8: 271,
  9: 280,
  10: 288,
  11: 295,
  12: 302,
  13: 309,
  14: 315,
  15: 321,
  16: 327,
  17: 332,
  18: 338,
  19: 343,
  20: 349,
  21: 354,
  22: 359,
  23: 364,
  24: 369,
  25: 374,
  26: 379,
  27: 384,
  28: 389,
  29: 394,
  30: 399,
  31: 405,
  32: 410,
  33: 416,
  34: 421,
  35: 427,
  36: 433,
  37: 439,
  38: 446,
  39: 452,
  40: 460,
  41: 467,
  42: 476,
  43: 485,
  44: 495,
  45: 507,
  46: 521,
  47: 538,
  48: 562,
  49: 600,
  50: 600,
};

// Function to get scaled score based on raw score (number correct)
function getScaledScore(rawScore) {
  const clampedScore = Math.max(0, Math.min(40, rawScore));
  return scaledScoreMapping[clampedScore] || 0;
}

// Function to get performance level based on scaled score
function getPerformanceLevel(scaledScore) {
  if (scaledScore == 600) return 'Perfect Score';
  if (scaledScore >= 500) return 'Pass Advanced';
  if (scaledScore >= 400) return 'Pass Proficient';
  if (scaledScore >= 0) return 'Not Passing';
  return 'Minimal';
}

// This integrates with the existing results system more robustly
(function() {
  'use strict';
  
  console.log('Grade 4 Math scaled score system initializing...');
  
  // Flag to track if we've enhanced the results
  let resultsEnhanced = false;
  
  // Function to add scaled score styles (run once)
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
      
      .performance-level {
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.9rem;
      }
      
      .performance-level.perfect-score {
        background-color: #e7c3ff;
        color: #6f2c91;
      }
      
      .performance-level.pass-advanced {
        background-color: var(--success-color, #d4edda);
        color: var(--success-color, #155724);
      }
      
      .performance-level.pass-proficient {
        background-color: #d1ecf1;
        color: #0c5460;
      }
      
      .performance-level.not-passing {
        background-color: #f8d7da;
        color: #721c24;
      }
      
      .performance-level.minimal {
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
    console.log('Scaled score styles added');
  }
  
  // Function to add CSS styles for historical scaled score display
  function addHistoricalScaledScoreStyles() {
    if (document.getElementById('historical-scaled-score-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'historical-scaled-score-styles';
    style.textContent = `
      .historical-scaled-score {
        font-size: 0.85rem;
        color: var(--text-color, #666);
        margin-left: 0.5rem;
      }
      
      .mini-performance-level {
        padding: 0.15rem 0.3rem;
        border-radius: 3px;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.75rem;
        margin-left: 0.25rem;
      }
      
      .mini-performance-level.perfect-score {
        background-color: #e7c3ff;
        color: #6f2c91;
      }
      
      .mini-performance-level.pass-advanced {
        background-color: var(--success-color, #d4edda);
        color: var(--success-color, #155724);
      }
      
      .mini-performance-level.pass-proficient {
        background-color: #d1ecf1;
        color: #0c5460;
      }
      
      .mini-performance-level.not-passing {
        background-color: #f8d7da;
        color: #721c24;
      }
      
      .mini-performance-level.minimal {
        background-color: #f8d7da;
        color: #721c24;
      }
    `;
    
    document.head.appendChild(style);
    console.log('Historical scaled score styles added');
  }
  
  // Function to enhance ALL historical results with scaled scores
  function enhanceAllHistoricalResults() {
    console.log('Enhancing all historical results with scaled scores...');
    
    // Get all results from localStorage
    const savedResults = JSON.parse(localStorage.getItem('solace_test_results') || '[]');
    let updated = false;
    
    // Process each result to add scaled scores if missing
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 4 Mathematics (2014)';
        updated = true;
        console.log(`Enhanced historical result ${index + 1}: ${result.rawScore}/40 → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    // Save updated results back to localStorage
    if (updated) {
      localStorage.setItem('solace_test_results', JSON.stringify(savedResults));
      console.log('Updated historical results saved to localStorage');
    }
    
    // Also update the results manager's internal storage if available
    if (window.resultsManager && window.resultsManager.results) {
      window.resultsManager.results.forEach((result, index) => {
        if (!result.scaledScore && result.correctAnswers !== undefined) {
          result.scaledScore = getScaledScore(result.correctAnswers);
          result.performanceLevel = getPerformanceLevel(result.scaledScore);
          result.rawScore = result.correctAnswers;
          result.testType = 'Grade 4 Mathematics (2014)';
          console.log(`Enhanced results manager result ${index + 1}: ${result.rawScore}/40 → ${result.scaledScore}`);
        }
      });
    }
  }

  // Function to enhance results display with scaled score information
  function enhanceResultsDisplay() {
    console.log('Attempting to enhance results display...');
    
    // First, enhance all historical results
    enhanceAllHistoricalResults();
    
    const resultsSummary = document.getElementById('results-summary');
    if (!resultsSummary) {
      console.log('Results summary not found, skipping enhancement');
      return false;
    }
    
    // Check if we've already enhanced these results
    if (resultsSummary.querySelector('.scaled-score-info')) {
      console.log('Latest result already enhanced, but checking history...');
      enhanceResultsHistory();
      return true;
    }
    
    // Get the latest result
    const latestResult = window.resultsManager ? window.resultsManager.getLatestResult() : null;
    if (!latestResult) {
      console.log('No latest result found, checking localStorage');
      
      // Fallback: try to get from localStorage and calculate scaled score
      const savedResults = JSON.parse(localStorage.getItem('solace_test_results') || '[]');
      if (savedResults.length === 0) {
        console.log('No saved results found');
        return false;
      }
      
      const lastResult = savedResults[0];
      
      // Calculate scaled score if not present
      if (!lastResult.scaledScore && lastResult.correctAnswers !== undefined) {
        lastResult.scaledScore = getScaledScore(lastResult.correctAnswers);
        lastResult.performanceLevel = getPerformanceLevel(lastResult.scaledScore);
        lastResult.rawScore = lastResult.correctAnswers;
        console.log(`Calculated scaled score: ${lastResult.scaledScore} for raw score ${lastResult.rawScore}`);
      }
      
      if (!lastResult.scaledScore) {
        console.log('Could not determine scaled score');
        return false;
      }
      
      // Use the calculated result
      addScaledScoreToDisplay(resultsSummary, lastResult);
      enhanceResultsHistory();
      return true;
    }
    
    // Calculate scaled score if not present in latest result
    if (!latestResult.scaledScore && latestResult.correctAnswers !== undefined) {
      latestResult.scaledScore = getScaledScore(latestResult.correctAnswers);
      latestResult.performanceLevel = getPerformanceLevel(latestResult.scaledScore);
      latestResult.rawScore = latestResult.correctAnswers;
      console.log(`Calculated scaled score: ${latestResult.scaledScore} for raw score ${latestResult.rawScore}`);
    }
    
    if (!latestResult.scaledScore) {
      console.log('Latest result missing scaled score data');
      return false;
    }
    
    addScaledScoreToDisplay(resultsSummary, latestResult);
    enhanceResultsHistory();
    return true;
  }
  
  // Function to add scaled score display to the results summary
  function addScaledScoreToDisplay(resultsSummary, result) {
    console.log('Adding scaled score display to results');
    
    const summaryText = resultsSummary.querySelector('.result-summary-text');
    if (!summaryText) {
      console.log('Result summary text not found');
      return;
    }
    
    // Create scaled score info element
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
        <p><em>The scaled score is a converted score out of 600 that accounts for test difficulty across the state.</em></p>
      </div>
    `;
    
    // Add the scaled score info to the summary
    summaryText.appendChild(scaledScoreInfo);
    
    // Add styles
    addScaledScoreStyles();
    
    console.log('Scaled score display added successfully');
  }
  
  // Function to enhance the results history with scaled scores
  function enhanceResultsHistory() {
    console.log('Enhancing results history with scaled scores...');
    
    const resultsDetails = document.getElementById('results-details');
    if (!resultsDetails) {
      console.log('Results details section not found');
      return;
    }
    
    // Find all result items in the history
    const resultItems = resultsDetails.querySelectorAll('.result-item');
    if (resultItems.length === 0) {
      console.log('No result items found in history');
      return;
    }
    
    // Get all saved results to match with display items
    const savedResults = JSON.parse(localStorage.getItem('solace_test_results') || '[]');
    
    resultItems.forEach((resultItem, index) => {
      // Skip if already enhanced
      if (resultItem.querySelector('.historical-scaled-score')) {
        return;
      }
      
      // Get the corresponding saved result
      const savedResult = savedResults[index];
      if (!savedResult || !savedResult.scaledScore) {
        console.log(`No scaled score data for result item ${index}`);
        return;
      }
      
      // Find the result details section
      const resultDetails = resultItem.querySelector('.result-details');
      if (!resultDetails) {
        console.log(`No result details found for item ${index}`);
        return;
      }
      
      // Create scaled score element for history item
      const historicalScaledScore = document.createElement('span');
      historicalScaledScore.className = 'historical-scaled-score';
      historicalScaledScore.innerHTML = ` • Scaled: ${savedResult.scaledScore} (<span class="mini-performance-level ${savedResult.performanceLevel.toLowerCase().replace(/\s+/g, '-')}">${savedResult.performanceLevel}</span>)`;
      
      // Add to the result details
      resultDetails.appendChild(historicalScaledScore);
      
      console.log(`Enhanced historical result ${index + 1} with scaled score ${savedResult.scaledScore}`);
    });
    
    // Add mini styles for historical display
    addHistoricalScaledScoreStyles();
  }
  
  // Function to periodically check for results and enhance them
  function checkAndEnhanceResults() {
    // Only check if we're on the results page
    const resultsPage = document.getElementById('results');
    if (!resultsPage || !resultsPage.classList.contains('active')) {
      return;
    }
    
    if (enhanceResultsDisplay()) {
      resultsEnhanced = true;
      
      // Also enhance historical results after a short delay
      setTimeout(() => {
        enhanceResultsHistory();
      }, 100);
      
      return true;
    }
    
    return false;
  }
  
  // Override the finishTest function to include scaled score data
  function enhanceFinishTest() {
    if (typeof window.finishTest !== 'function') return;
    
    const originalFinishTest = window.finishTest;
    window.finishTest = function() {
      console.log('Enhanced finishTest called');
      
      // Get the current test results
      const correctAnswers = window.currentTestAnswers ? 
        window.currentTestAnswers.filter(answer => answer.correct).length : 0;
      const totalQuestions = window.questions ? window.questions.length : 40;
      
      // Calculate scaled score
      const scaledScore = getScaledScore(correctAnswers);
      const performanceLevel = getPerformanceLevel(scaledScore);
      
      console.log(`Test finished: ${correctAnswers}/${totalQuestions} correct, scaled score: ${scaledScore} (${performanceLevel})`);
      
      // Store scaled score data in a temporary variable for later use
      window.tempScaledScoreData = {
        scaledScore,
        performanceLevel,
        rawScore: correctAnswers
      };
      
      // Call the original function
      const result = originalFinishTest.apply(this, arguments);
      
      // Set up a timer to enhance results after they're displayed
      setTimeout(() => {
        checkAndEnhanceResults();
      }, 100);
      
      return result;
    };
  }
  
  // Initialize the enhancement system
  function initialize() {
    console.log('Initializing Grade 4 Math scaled score system');
    
    // Add styles immediately
    addScaledScoreStyles();
    
    // Try to enhance finishTest function
    enhanceFinishTest();
    
    // Set up periodic checking for results
    const checkInterval = setInterval(() => {
      if (checkAndEnhanceResults()) {
        clearInterval(checkInterval);
      }
    }, 500);
    
    // Clean up the interval after 30 seconds
    setTimeout(() => {
      clearInterval(checkInterval);
    }, 30000);
    
    // Listen for navigation to results page
    document.addEventListener('click', function(e) {
      if (e.target && (e.target.id === 'results-btn' || e.target.id === 'view-results')) {
        setTimeout(() => {
          checkAndEnhanceResults();
          // Additional check for historical results
          setTimeout(() => {
            enhanceResultsHistory();
          }, 300);
        }, 200);
      }
    });
    
    console.log('Grade 4 Math scaled score system initialized');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();