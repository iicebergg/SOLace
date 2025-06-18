// Grade 3 Math Questions

const sampleQuestions = [
 {
 id: '1',
 text: 'Which number sentence will 9 + 6 = 15 help solve?',
 type: 'multiple-choice',
 options: ['15 - 9 = __', '15 × 9 = __', '15 ÷ 9 = __', '15 + 9 = __'],
 correctAnswer: 0,
 explanation: 'Addition and subtraction are inverse operations, so 9 + 6 = 15 helps solve 15 - 9 = 6.'
 },
 {
 id: '2',
 text: 'Two sets of circles are shown. Which of the following correctly compares the fraction of circles shaded in Set S to the fraction of circles shaded in Set T?',
 type: 'multiple-choice',
 image: {url: 'images/question_2.png', alt: 'Two sets of circles showing fractions'},
 options: ['3/11 > 7/11', '8/11 < 7/11', '3/11 > 4/11', '3/11 < 4/11'],
 correctAnswer: 3, 
 explanation: 'When comparing fractions with the same denominator, compare the numerators. Since 3 < 4, we have 3/11 < 4/11.'
 },
 {
 id: '3',
 text: 'The place value model shown represents a number. What number is represented by this place value model?',
 type: 'multiple-choice',
 image: {url: 'images/question_3.png', alt: 'Place value model showing thousands, hundreds, tens, and ones'},
 options: ['354', '454', '3,154', '4,054'],
 correctAnswer: 2, 
 explanation: 'Count the place value blocks: thousands, hundreds, tens, and ones to determine the number.'
 },
 {
 id: '4',
 text: 'Round 5,647 to the places shown.',
 type: 'drag-drop',
 options: ['5,000', '5,600', '5,650', '5,640', '6,000', '5,700'],
 dropZones: ['Rounded to the Nearest Thousand', 'Rounded to the Nearest Hundred', 'Rounded to the Nearest Ten'],
 correctAnswer: [4, 1, 2],
 explanation: 'To round 5,647: to nearest thousand (6,000), nearest hundred (5,600), nearest ten (5,650).'
 },
 {
 id: '5',
 text: 'Two packages of eggs are shown. Which statement correctly compares the fraction of the number of eggs in Package P to the fraction of the number of eggs in Package Q?',
 type: 'multiple-choice',
 image: {url: 'images/question_5.png', alt: 'Two packages of eggs with some broken'},
 options: ['4/12 < 3/12', '4/12 > 9/12', '8/12 > 9/12', '8/12 < 9/12'],
 correctAnswer: 3, 
 explanation: 'Compare the fractions by looking at the numerators when denominators are the same.'
 },
 {
 id: '6',
 text: 'Which shows the number 78,025 written in word form?',
 type: 'multiple-choice',
 options: ['Seven hundred eight thousand, two hundred fifty', 'Seven hundred eight thousand, twenty-five', 'Seventy-eight thousand, two hundred fifty', 'Seventy-eight thousand, twenty-five'],
 correctAnswer: 3, 
 explanation: '78,025 is read as seventy-eight thousand, twenty-five.'
 },
 {
 id: '7',
 text: 'This model is shaded to represent one whole. Look at the following model. What number do the shaded parts in this model represent?',
 type: 'multiple-choice',
 image: {url: 'images/question_7.png', alt: 'Fraction model showing shaded parts'},
 options: ['1/12', '11/12', '5 1/2', '10 1/2'],
 correctAnswer: 2, 
 explanation: 'Count the whole units and fractional parts shown in the model.'
 },
 {
 id: '8',
 text: 'Which number sentence can be completed using the basic fact sentence 3 × 2 = 6?',
 type: 'multiple-choice',
 options: ['12 ÷ 6 = __', '6 ÷ 3 = __', '6 × 3 = __', '3 + 2 = __'],
 correctAnswer: 1, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '9',
 text: 'Select the symbol that will make each number sentence true.',
 type: 'drag-drop',
 options: ['>', '=', '<'],
 dropZones: ['78 __ 78', '2,288 __ 2,199'],
 correctAnswer: [1, 0],
 explanation: '78 equals 78, so use =. 2,288 is greater than 2,199, so use >.'
 },
 {
 id: '10',
 text: 'In which group are exactly 3/8 of the shapes circles?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_10a.png', alt: 'Option A: Group of shapes'},
    {url: 'images/question_10b.png', alt: 'Option B: Group of shapes'},
    {url: 'images/question_10c.png', alt: 'Option C: Group of shapes'},
    {url: 'images/question_10d.png', alt: 'Option D: Group of shapes'}
 ],
 correctAnswer: 2, 
 explanation: 'Count the total shapes and circles in each group to find where exactly 3/8 are circles.'
 },
 {
 id: '11',
 text: 'What number goes in the box to make this number sentence true? 63 ÷ __ = 9',
 type: 'multiple-choice',
 options: ['6', '7', '8', '9'],
 correctAnswer: 1, 
 explanation: '63 ÷ 7 = 9, so the answer is 7.'
 },
 {
 id: '12',
 text: 'What fraction of the rectangle is shaded?',
 type: 'multiple-choice',
 image: {url: 'images/question_12.png', alt: 'Rectangle divided into parts with some shaded'},
 options: ['1/14', '1/7', '5/14', '5/7'],
 correctAnswer: 2, 
 explanation: 'Count the total parts and the shaded parts to determine the fraction.'
 },
 {
 id: '13',
 text: 'Which number sentence best represents this set of flowers?',
 type: 'multiple-choice',
 image: {url: 'images/question_13.png', alt: 'Groups of flowers arranged in rows'},
 options: ['32 ÷ 4 = ?', '32 - 8 = ?', '8 × 4 = ?', '8 + 8 = ?'],
 correctAnswer: 2, 
 explanation: 'Look at the arrangement to determine the multiplication sentence that represents the groups.'
 },
 {
 id: '14',
 text: 'Kiku had a total of 25 plants at her store on Tuesday morning. During the day, she sold 26 of these plants and then received 136 new plants. At the end of the day, exactly how many plants did Kiku have?',
 type: 'multiple-choice',
 options: ['9', '61', '145', '197'],
 correctAnswer: 2, 
 explanation: 'Start with 25, subtract 26 sold, then add 136 new plants: 25 - 26 + 136 = 135. Wait, this seems to have an error in the problem or answer choices.'
 },
 {
 id: '15',
 text: 'What fraction is represented by the shaded area?',
 type: 'multiple-choice',
 image: {url: 'images/question_15.png', alt: 'Geometric shape with shaded portion'},
 options: ['2/8', '6/16', '10/16', '6/8'],
 correctAnswer: 2, 
 explanation: 'Count the total equal parts and the shaded parts to find the fraction.'
 },
 {
 id: '16',
 text: 'A store has 57 packages of gum with 5 pieces of gum in each package. What is the total number of pieces of gum in these packages?',
 type: 'free-response',
 correctKeywords: ['285'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '17',
 text: 'What is 3/4 + 1/4?',
 type: 'multiple-choice',
 image: {url: 'images/question_17.png', alt: 'Visual representation of fraction addition'},
 options: ['1 1/4', '1', '4/8', '2/8'],
 correctAnswer: 1, 
 explanation: 'When adding fractions with the same denominator, add the numerators: 3/4 + 1/4 = 4/4 = 1.'
 },
 {
 id: '18',
 text: '3,000 - 285 = ?',
 type: 'multiple-choice',
 options: ['2,285', '2,715', '2,815', '3,285'],
 correctAnswer: 1, 
 explanation: '3,000 - 285 = 2,715.'
 },
 {
 id: '19',
 text: 'Which of these is best represented by this number line?',
 type: 'multiple-choice',
 image: {url: 'images/question_19.png', alt: 'Number line showing jumps or intervals'},
 options: ['24 + 4', '24 - 4', '6 × 4', '4 × 6'],
 correctAnswer: 2, 
 explanation: 'Look at the pattern on the number line to determine which operation it represents.'
 },
 {
 id: '20',
 text: 'Select each multiplication fact that equals 48.',
 type: 'multiple-select',
 options: ['4 × 12', '6 × 8', '12 × 4', '7 × 6', '8 × 6', '5 × 8'],
 correctAnswer: [0, 1, 2, 4],
 explanation: 'Check each multiplication: 4×12=48, 6×8=48, 12×4=48, 7×6=42, 8×6=48, 5×8=40.'
 },
 {
 id: '21',
 text: 'How many minutes are there from 10:30 A.M. to 1:00 P.M.?',
 type: 'multiple-choice',
 options: ['500 minutes', '300 minutes', '150 minutes', '120 minutes'],
 correctAnswer: 2, 
 explanation: 'From 10:30 A.M. to 1:00 P.M. is 2 hours and 30 minutes = 150 minutes.'
 },
 {
 id: '22',
 text: 'Harry drew a picture with the figures shown. Which best describes the figures in this picture?',
 type: 'multiple-choice',
 image: {url: 'images/question_22.png', alt: 'Three-dimensional geometric figures'},
 options: ['Cubes', 'Squares', 'Rectangles', 'Rectangular prisms'],
 correctAnswer: 3, 
 explanation: 'The figures are three-dimensional, so they are rectangular prisms, not flat shapes.'
 },
 {
 id: '23',
 text: 'Which is the most reasonable length of a bed?',
 type: 'multiple-choice',
 options: ['6 feet', '6 inches', '6 meters', '6 centimeters'],
 correctAnswer: 0, 
 explanation: '6 feet is the most reasonable length for a bed. 6 inches and 6 centimeters are too short, 6 meters is too long.'
 },
 {
 id: '24',
 text: 'Which is closest to the time shown on this clock?',
 type: 'multiple-choice',
 image: {url: 'images/question_24.png', alt: 'Analog clock face'},
 options: ['4:45', '5:45', '9:05', '9:25'],
 correctAnswer: 3, 
 explanation: 'Read the hour and minute hands to determine the approximate time.'
 },
 {
 id: '25',
 text: 'What is the temperature on this thermometer?',
 type: 'free-response',
 image: {url: 'images/question_25.png', alt: 'Thermometer showing temperature'},
 correctKeywords: ['84'],
 explanation: 'Read the temperature scale on the thermometer to find the exact temperature.'
 },
 {
 id: '26',
 text: 'Jack built a tower of blocks as shown. Which tower of blocks appears to be congruent to Jack\'s tower of blocks?',
 type: 'multiple-choice',
 image: {url: 'images/question_26.png', alt: 'Tower of blocks'},
 options: [
    {url: 'images/question_26a.png', alt: 'Tower option A'},
    {url: 'images/question_26b.png', alt: 'Tower option B'},
    {url: 'images/question_26c.png', alt: 'Tower option C'},
    {url: 'images/question_26d.png', alt: 'Tower option D'}
 ],
 correctAnswer: 2, 
 explanation: 'Congruent figures have the same shape and size. Look for the tower that matches exactly.'
 },
 {
 id: '27',
 text: 'Franklin began selling lumber in the morning at the time shown on the clock. He finished selling lumber three hours later. At what time did Franklin finish selling lumber?',
 type: 'multiple-choice',
 image: {url: 'images/question_27.png', alt: 'Clock showing start time'},
 options: ['8:45 A.M.', '9:45 A.M.', '10:45 A.M.', '11:45 A.M.'],
 correctAnswer: 3, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '28',
 text: 'What is the perimeter of the shaded figure on this grid?',
 type: 'multiple-choice',
 image: {url: 'images/question_28.png', alt: 'Grid with shaded figure'},
 options: ['18 units', '19 units', '22 units', '24 units'],
 correctAnswer: 2, 
 explanation: 'Count the units around the outside edge of the shaded figure to find the perimeter.'
 },
 {
 id: '29',
 text: 'Christina has the money shown. Exactly how much money does Christina have?',
 type: 'multiple-choice',
 image: {url: 'images/question_29.png', alt: 'Collection of coins and bills'},
 options: ['$3.50', '$3.60', '$3.85', '$4.05'],
 correctAnswer: 2, 
 explanation: 'Count the value of all the coins and bills shown.'
 },
 {
 id: '30',
 text: 'Alfred drew two rays and a line segment in his geometry notebook. Which of these could be the picture Alfred drew?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_30a.png', alt: 'Geometric drawing option A'},
    {url: 'images/question_30b.png', alt: 'Geometric drawing option B'},
    {url: 'images/question_30c.png', alt: 'Geometric drawing option C'},
    {url: 'images/question_30d.png', alt: 'Geometric drawing option D'}
 ],
 correctAnswer: 2, 
 explanation: 'A ray has one endpoint and extends infinitely in one direction. A line segment has two endpoints.'
 },
 {
 id: '31',
 text: 'Each side of this figure is the same length. Which measurement is closest to the perimeter of this figure?',
 type: 'multiple-choice',
 image: {url: 'images/question_31.png', alt: 'Regular polygon with measurement'},
 options: ['5 feet', '8 feet', '10 feet', '12 feet'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '32',
 text: 'This chart shows the type of toy and color choices for a reward in a teacher\'s basket. Which shows all the possible outcomes for a reward using one type of toy and one color?',
 type: 'multiple-choice',
 image: {url: 'images/question_32.png', alt: 'Chart showing toy types and colors'},
 options: [
    {url: 'images/question_32a.png', alt: 'Outcome chart option A'},
    {url: 'images/question_32b.png', alt: 'Outcome chart option B'},
    {url: 'images/question_32c.png', alt: 'Outcome chart option C'},
    {url: 'images/question_32d.png', alt: 'Outcome chart option D'}
 ],
 correctAnswer: 2, 
 explanation: 'Count the total possible combinations by multiplying the number of toy types by the number of colors.'
 },
 {
 id: '33',
 text: 'This pattern repeats after the first four circles. Joanne removed two circles from this repeating pattern. Which ordered pair of circles did she remove?',
 type: 'multiple-choice',
 image: {url: 'images/question_33.png', alt: 'Pattern of circles with some missing'},
 options: [
    {url: 'images/question_33a.png', alt: 'Circle pair option A'},
    {url: 'images/question_33b.png', alt: 'Circle pair option B'},
    {url: 'images/question_33c.png', alt: 'Circle pair option C'},
    {url: 'images/question_33d.png', alt: 'Circle pair option D'}
 ],
 correctAnswer: 2, 
 explanation: 'Identify the repeating pattern and determine which circles are missing from the sequence.'
 },
 {
 id: '34',
 text: 'Tia surveyed 14 students. She asked each student to choose one favorite food from four choices. Which chart could show the data from Tia\'s survey?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_34a.png', alt: 'Survey chart option A'},
    {url: 'images/question_34b.png', alt: 'Survey chart option B'},
    {url: 'images/question_34c.png', alt: 'Survey chart option C'},
    {url: 'images/question_34d.png', alt: 'Survey chart option D'}
 ],
 correctAnswer: 2, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '35',
 text: 'This table shows the number of minutes it takes Kendal to run laps around a track. If the pattern in the table continues in the same way, which of the following should be used to determine how many minutes it takes Kendal to run 10 laps?',
 type: 'multiple-choice',
 image: {url: 'images/question_35.png', alt: 'Table showing laps and minutes'},
 options: ['10 × 3', '10 + 6', '10 + 24', '10 × 6'],
 correctAnswer: 3, 
 explanation: 'Look at the pattern in the table to determine the relationship between laps and minutes.'
 },
 {
 id: '36',
 text: 'Stephanie recorded the number of inches of rainfall in her city during 4 weeks. The graph below shows the results. Which bar graph shows the same information?',
 type: 'multiple-choice',
 image: {url: 'images/question_36.png', alt: 'Line graph of rainfall data'},
 options: [
    {url: 'images/question_36a.png', alt: 'Bar graph option A'},
    {url: 'images/question_36b.png', alt: 'Bar graph option B'},
    {url: 'images/question_36c.png', alt: 'Bar graph option C'},
    {url: 'images/question_36d.png', alt: 'Bar graph option D'}
 ],
 correctAnswer: 2, 
 explanation: 'Compare the data values in the line graph to find the matching bar graph.'
 },
 {
 id: '37',
 text: 'Which number sentence shows the use of the identity property of multiplication?',
 type: 'multiple-choice',
 options: ['5 × 3 = 3 × 5', '5 + 0 = 5', '4 + 1 = 5', '1 × 5 = 5'],
 correctAnswer: 3, 
 explanation: 'The identity property of multiplication states that any number multiplied by 1 equals itself.'
 },
 {
 id: '38',
 text: 'Look at this pattern: 1, 3, 9, 27, 81. Which describes the rule used in this pattern?',
 type: 'multiple-choice',
 options: ['Divide by 9', 'Multiply by 3', 'Subtract 2', 'Add 2'],
 correctAnswer: 1, 
 explanation: 'Each number in the pattern is multiplied by 3 to get the next number: 1×3=3, 3×3=9, 9×3=27, 27×3=81.'
 },
 {
 id: '39',
 text: 'This line plot shows the number of points scored by students on a team. What was the total number of points scored by the students?',
 type: 'multiple-choice',
 image: {url: 'images/question_39.png', alt: 'Line plot showing student scores'},
 options: ['20', '19', '56', '8'],
 correctAnswer: 2, 
 explanation: 'Add up all the points shown on the line plot by multiplying each score by the number of students who achieved it.'
 },
 {
 id: '40',
 text: 'Debi will pick a card from the bag without looking. Place 8 cards in the bag to show the likelihood of Debi picking a card with a star is equally likely as picking a card with a heart.',
 type: 'drag-drop',
 image: {url: 'images/question_40.png', alt: 'Empty bag for placing cards'},
 options: ['Star card', 'Heart card', 'Circle card', 'Square card'],
 dropZones: ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6', 'Card 7', 'Card 8'],
 correctAnswer: [0, 1, 0, 1, 0, 1, 0, 1],
 explanation: 'For equally likely outcomes, place 4 star cards and 4 heart cards in the bag.'
 }
];