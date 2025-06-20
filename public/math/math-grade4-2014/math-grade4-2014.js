const sampleQuestions = [
 {
 id: '1',
 text: 'What is the sum of 3/5 and 1/10?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>'],
 correctAnswer: 0,
 explanation: 'Addition and subtraction are inverse operations, so 9 + 6 = 15 helps solve 15 - 9 = 6.'
 },
 {
 id: '2',
 text: 'Wilma drinks 1.09 liters of juice. Richard drinks 0.987 liter of juice. How much more juice does Wilma drink than Richard?',
 type: 'multiple-choice',
 options: ['0.103 liter', '0.878 liter', '1.917 liters', '2.077 liters'],
 correctAnswer: 3, 
 explanation: 'When comparing fractions with the same denominator, compare the numerators. Since 3 < 4, we have 3/11 < 4/11.'
 },
 {
 id: '3',
 text: 'What is the least common multiple of 8 and 12?',
 type: 'multiple-choice',
 options: ['16', '24', '48', '96'],
 correctAnswer: 2, 
 explanation: 'Count the place value blocks: thousands, hundreds, tens, and ones to determine the number.'
 },
 {
 id: '4',
 text: 'What is the product of 84 and 76?',
 type: 'multiple-choice',
 options: ['6,164', '6,274', '6,384', '6,494'],
 correctAnswer: [4, 1, 2],
 explanation: 'To round 5,647: to nearest thousand (6,000), nearest hundred (5,600), nearest ten (5,650).'
 },
 {
 id: '5',
 text: 'Kristin poured 6 ounces of lemonade into each of 19 glasses. Exactly how many ounces of lemonade did Kristin pour into all of these glasses?',
 type: 'free-response',
 correctKeywords: ['285'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '6',
 text: 'At a store, flowerpots cost $28 each. Which is closest to the total cost of 72 of these flowerpots?',
 type: 'multiple-choice',
 options: ['$100', '$210', '$1,400', '$2,100'],
 correctAnswer: 3, 
 explanation: '78,025 is read as seventy-eight thousand, twenty-five.'
 },
 {
 id: '7',
 text: 'A school choir sold 825 tickets for a concert. Each ticket cost $9. What was the total cost of all the tickets sold?',
 type: 'multiple-choice',
 options: ['$7,425', '$7,385', '$7,285', '$7,225'],
 correctAnswer: 2, 
 explanation: 'Count the whole units and fractional parts shown in the model.'
 },
 {
 id: '8',
 text: ' ',
 type: 'multiple-choice',
 image: {url:'images/question_8.png', alt: 'Image failed to load. Please try again later.'},
 options: ['0.379', '0.505', '3.79', '5.05'],
 correctAnswer: 1, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '9',
 text: 'What is the difference between 3,240 and 578?',
 type: 'free-response',
 correctKeywords: ['285'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '10',
 text: 'John ran a total of 342 minutes in a 7-day period. He ran about the same number of minutes each day. Which is closest to the number of minutes John ran on one of those days?',
 type: 'multiple-choice',
 options: ['20', '30', '50', '60'],
 correctAnswer: 1, 
 explanation: '63 ÷ 7 = 9, so the answer is 7.'
 },
 {
 id: '11',
 text: 'What is the difference between 5/12 and 1/4',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: '63 ÷ 7 = 9, so the answer is 7.'
 },
 {
 id: '12',
 text: 'Carl does 25 sit-ups 3 times per day. What is the total number of sit-ups Carl does in 7 days?',
 type: 'multiple-choice',
 options: ['35', '75', '495', '525'],
 correctAnswer: 3, 
 explanation: 'Count the total parts and the shaded parts to determine the fraction.'
 },
 {
 id: '13',
 text: 'Which number is a common factor of 15, 18, and 30?',
 type: 'multiple-choice',
 options: ['9', '6', '5', '3'],
 correctAnswer: 0, 
 explanation: 'Look at the arrangement to determine the multiplication sentence that represents the groups.'
 },
 {
 id: '14',
 text: 'What digit is in the tenths place in this number? 24.816',
 type: 'multiple-choice',
 options: ['1', '2', '6', '8'],
 correctAnswer: 2, 
 explanation: 'Start with 25, subtract 26 sold, then add 136 new plants: 25 - 26 + 136 = 135. Wait, this seems to have an error in the problem or answer choices.'
 },
 {
 id: '15',
 text: 'Which division statement represents 3/8?',
 type: 'multiple-choice',
 options: ['3 divided by 8', '8 divided by 3', '3 divided by 11', '11 divided by 3'],
 correctAnswer: 0, 
 explanation: 'Count the total equal parts and the shaded parts to find the fraction.'
 },
 {
 id: '16',
 text: 'Which fraction is represented by point W shown on the number line?',
 type: 'multiple-choice',
 image: {url: 'images/question_16.png', alt: 'Image failed to load. Please try again later.'},
 options: ['<math><mfrac><mn>10</mn><mn>13</mn></mfrac></math>', '<math><mfrac><mn>9</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'When adding fractions with the same denominator, add the numerators: 3/4 + 1/4 = 4/4 = 1.'
 },
 {
 id: '17',
 text: 'Identify the place value for each digit in the number 304,215.',
 type: 'drag-drop',
 options: ['Millions', 'Hundred thousands', 'Ten thousands', 'Thousands', 'Hundreds', 'Tens', 'Ones'],
 dropZones: ['0', '1', '2', '3', '4', '5'],
 correctAnswer: [0, 1, 0, 1, 0, 1, 0, 1],
 explanation: 'For equally likely outcomes, place 4 star cards and 4 heart cards in the bag.'
 },
 {
 id: '18',
 text: 'This table shows the times it took four students to complete a 40-meter race. Which statement about these times is true?',
 type: 'multiple-choice',
 image: {url: 'images/question_18.png', alt: 'Image failed to load. Please try again later.'},
 options: ['13.7 > 13.07', '13.07 > 13.6', '13.6 > 13.7', '13.06 > 13.07'],
 correctAnswer: 1, 
 explanation: '3,000 - 285 = 2,715.'
 },
 {
 id: '19',
 text: 'Which statement is true?',
 type: 'multiple-choice',
 options: ['89,045 < 84,905', '84,950 < 85,049', '8,240,579 < 8,209,745', '8,504,297 < 8,054,972'],
 correctAnswer: 3, 
 explanation: 'Look at the pattern on the number line to determine which operation it represents.'
 },
 {
 id: '20',
 text: 'How is 2.32 written in words?',
 type: 'multiple-choice',
 options: ['Two hundred thirty-two', 'Two and thirty-two tenths', 'Two and thirty-two hundredths', 'Two and thirty-two thousandths'],
 correctAnswer: 3, 
 explanation: 'Look at the pattern on the number line to determine which operation it represents.'
 },
 {
 id: '21',
 text: 'What is 7,613,542 rounded to the nearest ten thousand?',
 type: 'multiple-choice',
 options: ['7,600,000', '7,610,000', '7,614,000', '7,620,000'],
 correctAnswer: 2, 
 explanation: 'From 10:30 A.M. to 1:00 P.M. is 2 hours and 30 minutes = 150 minutes.'
 },
 {
 id: '22',
 text: ' ',
 type: 'multiple-choice',
 image: {url: 'images/question_22.png', alt: 'Image failed to load. Please try again later.'},
 options: [
    {url: 'images/question_22a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_22b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_22c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_22d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Congruent figures have the same shape and size. Look for the tower that matches exactly.'
 },
 {
 id: '23',
 text: '',
 type: 'multiple-choice',
 image: {url: 'images/question_23.png', alt: 'Image failed to load. Please try again later.'},
 options: ['1.7', '1.3', '0.7', '0.3'],
 correctAnswer: 0, 
 explanation: '6 feet is the most reasonable length for a bed. 6 inches and 6 centimeters are too short, 6 meters is too long.'
 },
 {
 id: '24',
 text: 'Order the fractions from greatest to least.',
 type: 'drag-drop',
 image: {url: 'images/question_40.png', alt: 'Image failed to load. Please try again later.'},
 options: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>'],
 dropZones: ['Greatest', '', 'Least'],
 correctAnswer: [0, 1, 0, 1, 0, 1, 0, 1],
 explanation: 'For equally likely outcomes, place 4 star cards and 4 heart cards in the bag.'
 },
 {
 id: '25',
 text: 'Which number, when rounded to the nearest hundredth, is equal to 7.59?',
 type: 'multiple-choice',
 options: ['7.595', '7.588', '7.584', '7.594'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '26',
 text: 'Which figure has less than four angles?',
 type: 'multiple-choice',
 options: ['Triangle', 'Rhombus', 'Rectangle', 'Parallelogram'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '27',
 text: 'Which is closest to the length of this hair comb, in inches?',
 type: 'multiple-choice',
 image: {url: 'images/question_27.png', alt: 'Image failed to load. Please try again later.'},
 options: ['4 <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', '4 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '4 <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>', '4 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '28',
 text: 'Identify two lines in the figure that appear to be parallel.',
 type: 'point-select',
 image: {url: 'images/question_28.png', alt: 'Image failed to load. Please try again later.'},
 options: ['18 units', '19 units', '22 units', '24 units'],
 correctAnswer: 3, 
 explanation: 'Count the units around the outside edge of the shaded figure to find the perimeter.'
 },
 {
 id: '29',
 text: 'Lola\'s puppy weighed 6 pounds. What is the total number of ounces Lola\'s puppy weighed?',
 type: 'multiple-choice',
 options: ['48 ounces', '60 ounces', '72 ounces', '96 ounces'],
 correctAnswer: 1, 
 explanation: 'Count the value of all the coins and bills shown.'
 },
 {
 id: '30',
 text: 'Which pair of figures appears to be congruent?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A ray has one endpoint and extends infinitely in one direction. A line segment has two endpoints.'
 },
 {
 id: '31',
 text: 'A restaurant has 3 gallons of soup. What is the total number of pints of soup this restaurant has?',
 type: 'multiple-choice',
 options: ['12 pints', '18 pints', '24 pints', '48 pints'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '32',
 text: 'A basketball team left the school at 2:55 P.M. and returned at 5:45 P.M. What was the total amount of time that passed between the time this team left and returned to the school?',
 type: 'multiple-choice',
 options: ['2 hours 10 minutes', '2 hours 50 minutes', '3 hours 10 minutes', '3 hours 50 minutes'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '33',
 text: 'Which of these objects has a mass closest to 1 kilogram?',
 type: 'multiple-choice',
 options: ['A desk', 'A pencil', 'A dictionary', 'A sheet of paper'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '34',
 text: 'Which picture shows a single reflection of the figure across line r?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '35',
 text: 'Which set of figures shows only octagons?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '36',
 text: '2 meters = __ millimeters',
 type: 'multiple-choice',
 options: ['20,000 millimeters', '2,000 millimeters', '200 millimeters', '20 millimeters'],
 correctAnswer: 3, 
 explanation: 'The identity property of multiplication states that any number multiplied by 1 equals itself.'
 },
 {
 id: '37',
 text: 'Which of the followign represents ray KL?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '38',
 text: 'Tyrone used 1 pint of liquid to completely fill a container. Which container could be the one Tyrone filled?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '39',
 text: 'TMandy is making a spinner game. She wants the arrow on the spinner to have an equally likely chance of landing on each of 4 space.s. Each space will have a different shape on it. Which appears to be the spinner Mandy should make?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_39a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_39b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_39c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_39d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '40',
 text: 'Which equation is true?',
 type: 'multiple-choice',
 options: ['4 x 7 = 26 + 2', '4 x 8 = 32 + 2', '7 x 6 = 59 - 7', '7 x 8 = 64 - 7'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '41',
 text: 'Which equation is true?',
 type: 'multiple-choice',
 options: ['4 x 7 = 26 + 2', '4 x 8 = 32 + 2', '7 x 6 = 59 - 7', '7 x 8 = 64 - 7'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '42',
 text: ' ',
 type: 'multiple-choice',
 image: {url: 'images/question_42.png', alt: 'Image failed to load. Please try again later.'},
 options: ['13', '12', '11', '10'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '43',
 text: 'Lori has a coin with one side heads and one side tails. Which letter on this number line best represents the probability that this coin flipped one time will land with tails fac.ing up?',
 type: 'multiple-choice',
 image: {url: 'images/question_43.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Q', 'R', 'S', 'T'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '44',
 text: ' ',
 type: 'multiple-choice',
 image: {url: 'images/question_44.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '45',
 text: 'Todd has the following folders in his backpack: -2 blue -2 red -2 yellow -2 purple The folders are all the same size and shape, Todd reaches into his backpack and selects one folder without looking. What is the likelihood the folder will be green?',
 type: 'multiple-choice',
 image: {url: 'images/question_45.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Certain', 'Likely, but not certain', 'Unlikely, but not impossible', 'Impossible'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '46',
 text: 'Which number sentence is correct?',
 type: 'multiple-choice',
 options: ['3 x 2 x 3 = 2 x 6', '5 x 2 x 5 = 10 x 2', '4 x 2 x 6 = 12 x 4', '8 x 3 x 0 = 12 x 2'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '47',
 text: 'Which equation shows the use of the associative property of multiplication?',
 type: 'multiple-choice',
 options: ['2x(50x1) = 2x50', '2x(50x12)=(2x50)x12', '2x(50x12)=2x(12x50)', '2x(12x50)=(2+12)x(2+50)'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '48',
 text: 'Jeremy rolls a fair number cube labeled 1 through 6. Place a point on the number line to represent the probability that he will roll a 2 on the first roll.',
 type: 'point-select',
 image: {url: 'images/question_48.png', alt: 'Image failed to load. Please try again later.'},
 options: ['18 units', '19 units', '22 units', '24 units'],
 correctAnswer: 3, 
 explanation: 'Count the units around the outside edge of the shaded figure to find the perimeter.'
 },
 {
 id: '49',
 text: 'An art club has 2 fourth-grade girls, 4 third-grade boys, 10 third-grade girls, and 8 fourth-grade boys. Which table correctly shows this information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_49a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_49b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_49c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_49d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '50',
 text: 'In increasing pattern is shown. 5, 14, 23, 32, 41 Which pattern uses the same rule as the pattern above?',
 type: 'multiple-choice',
 options: ['42, 33, 24, 15, 6', '15, 23, 31, 39, 47', '13, 22, 31, 40, 49', '8, 19, 30, 41, 52'],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
];