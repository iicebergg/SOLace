// Grade 3 Math Questions

const sampleQuestions = [
 {
 id: 'sample-a',
 text: 'Carlos made this tally chart to record the chores done by 12 of the students in his class. IMG Which chore was done by 5 students?',
 type: 'multiple-choice',
 image: {url: 'images/sample_a.png'},
 options: ['Washing Dishes', 'Walking Dog', 'Emptying Trash', 'Cleaning Room'],
 correctAnswer: 2, // Index of the correct option
 explanation: 'Paris is the capital and most populous city of France.',
 order: 1
 },
 {
 id: 'sample-b',
 text: '2 × 5',
 type: 'free-response',
 correctKeywords: ['10'],
 explanation: 'Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water. Chlorophyll is essential to this process, and oxygen is released as a byproduct.',
 order: 4
 },
 {
 id: '1',
 text: 'Which number sentence will 9 + 6 = 15 help solve?',
 type: 'multiple-choice',
 options: ['15 - 9 = __', '15 × 9 = __', '15 ÷ 9 = __', '15 + 9 = __'],
 correctAnswer: 2,
 explanation: 'Paris is the capital and most populous city of France.',
 order: 1
 },
 {
 id: '2',
 text: 'Two sets of cirles are shown. Which of the following correctly compares the fraction of circles shaded in Set S to the fraction of circles shades in Set T?',
 type: 'multiple-choice',
 image: {url: 'images/question_2.png'},
 options: ['3/11 > 7/11', '8/11 < 7/11', '3/11 > 4/11', '3/11 < 4/11'],
 correctAnswer: 2, 
 explanation: 'Paris is the capital and most populous city of France.',
 order: 1
 },
 {
 id: '3',
 text: 'The place value model shown represents a number. IMG What number is represented by this place value model?',
 type: 'multiple-choice',
 options: ['354', '454', '3,154', '4,054'],
 correctAnswer: 2, 
 explanation: 'Paris is the capital and most populous city of France.',
 order: 1
 },
 {
 id: '4',
 text: 'Round 5,647 to the places shown. bullet Nearest thousand Nearest hundred Nearest ten',
 type: 'drag-drop',
 options: ['5,000', '5,600', '5,650', '5,640', '6,000', '5,700'],
 dropZones: ['Rounded to the Nearest Thousand', 'Rounded to the Nearest Hundred', 'Rounded to the Nearest Ten'],
 correctAnswer: [0, 1, 2, 3],
 explanation: 'Albert Einstein developed the Theory of Relativity. Charles Darwin proposed the theory of Evolution by Natural Selection. Isaac Newton formulated the Laws of Motion. Marie Curie discovered radioactivity and isolated radioactive isotopes.',
 order: 7
 },
 {
 id: '5',
 text: 'Two packages of eggs are shown. IMG Which statement correctly compares the fraction of the number of eggs in Package P to the fraction of the number of eggs in Package Q?',
 type: 'multiple-choice',
 options: ['4/12 < 3/12', '4/12 > 9/12', '8/12 > 9/12', '8/12 < 9/12'],
 correctAnswer: 2, 
 explanation: 'Paris is the capital and most populous city of France.',
 order: 1
 },
 {
 id: '6',
 text: 'Which shows the number 78,025 written in word form?',
 type: 'multiple-choice',
 options: ['Seven hundred eight thousand, two hundred fifty', 'Seven hundred eight thousand, twenty-five', 'Seventy-eight thousand, two hundred fifty', 'Seevnty-eight thousand, twenty-five'],
 correctAnswer: 2, 
 explanation: 'Paris is the capital and most populous city of France.',
 order: 1
 },
 {
 id: '7',
 text: 'This model is shaded to represent one whole. IMG Look at the following model. IMG What number do the shaded parts in this model represent?',
 type: 'multiple-choice',
 options: ['1/12', '11/12', '5 mix 1/2', '10 mix 1/2'],
 correctAnswer: 2, 
 explanation: 'Paris is the capital and most populous city of France.',
 order: 1
 },
 {
 id: '8',
 text: 'Which number sentence can be completed using the basic fact sentance 3 x 2 = 6 ?',
 type: 'multiple-choice',
 options: ['12 ÷ 6 = __', '6 / 3 = __', '6 × 3 = __', '3 + 2 = __'],
 correctAnswer: 2, 
 explanation: 'Paris is the capital and most populous city of France.',
 order: 1
 },
 {
 id: '9',
 text: 'Select the symbol that will make each number sentence true.',
 type: 'drag-drop',
 options: ['>', '=', '<'],
 dropZones: ['78 blank 78', '2,288 blank 2,199'],
 correctAnswer: [0, 1, 2, 3],
 explanation: 'Albert Einstein developed the Theory of Relativity. Charles Darwin proposed the theory of Evolution by Natural Selection. Isaac Newton formulated the Laws of Motion. Marie Curie discovered radioactivity and isolated radioactive isotopes.',
 order: 7
 },
 {
 id: '10',
 text: 'In which group are exactly 3/8 of the shapes circles?',
 type: 'multiple-choice',
 options: ['img1', 'img2', 'img3', 'img4'],
 correctAnswer: 2, 
 explanation: 'Paris is the capital and most populous city of France.',
 order: 1
 },
 {
 id: '11',
 text: 'What number goes in the box to make this number sentence true? 63 ÷ box = 9',
 type: 'multiple-choice',
 options: ['6', '7', '8', '9'],
 correctAnswer: 2, 
 explanation: 'Paris is the capital and most populous city of France.',
 order: 1
 },
 {
 id: '12',
 text: 'These two models are each shaded to represent a fraction. IMG What is the sum of these two fractions?',
 type: 'multiple-choice',
 options: ['1/14', '1/7', '5/14', '5/7'],
 correctAnswer: 2, 
 explanation: 'Paris is the capital and most populous city of France.',
 order: 1
 },
 {
 id: 'x',
 text: 'Which of the following are primary colors?',
 type: 'multiple-select',
 options: ['Red', 'Green', 'Blue', 'Yellow', 'Purple'],
 correctAnswer: [0, 2, 3], // Indices of correct options (Red, Blue, Yellow)
 explanation: 'The primary colors are Red, Blue, and Yellow. Green and Purple are secondary colors created by mixing primary colors.',
 order: 2
 },
 {
 id: 'x',
 text: 'Match the countries with their capitals.',
 type: 'drag-drop',
 options: ['Tokyo', 'Berlin', 'Ottawa', 'Canberra'],
 dropZones: ['Japan', 'Germany', 'Canada', 'Australia'],
 correctAnswer: [0, 1, 2, 3], // Matching indices
 explanation: 'Tokyo is the capital of Japan, Berlin is the capital of Germany, Ottawa is the capital of Canada, and Canberra is the capital of Australia.',
 order: 3
 },
 {
 id: 'x',
 text: 'What is photosynthesis?',
 type: 'free-response',
 correctKeywords: ['light', 'energy', 'plants', 'chlorophyll', 'carbon dioxide', 'water', 'oxygen', 'glucose'],
 explanation: 'Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water. Chlorophyll is essential to this process, and oxygen is released as a byproduct.',
 order: 4
 },
 {
 id: 'x',
 text: 'What is the Pythagorean theorem?',
 type: 'multiple-choice',
 options: [
 'The sum of the interior angles of a triangle is 180 degrees',
 'a² + b² = c² in a right triangle, where c is the hypotenuse',
 'The area of a circle is πr²',
 'The volume of a sphere is (4/3)πr³'
 ],
 correctAnswer: 1,
 explanation: 'The Pythagorean theorem states that in a right triangle, the square of the length of the hypotenuse (c) is equal to the sum of squares of the other two sides (a and b). This is expressed as a² + b² = c².',
 order: 5
 },
 {
 id: 'x',
 text: 'Which of the following contribute to climate change?',
 type: 'multiple-select',
 options: ['Burning fossil fuels', 'Deforestation', 'Recycling', 'Solar energy production', 'Factory farming'],
 correctAnswer: [0, 1, 4],
 explanation: 'Burning fossil fuels, deforestation, and factory farming contribute to climate change by releasing greenhouse gases. Recycling and solar energy production are sustainable practices that help mitigate climate change.',
 order: 6
 },
 {
 id: 'x',
 text: 'Match each scientist with their discovery or contribution.',
 type: 'drag-drop',
 options: ['Theory of Relativity', 'Evolution by Natural Selection', 'Laws of Motion', 'Radioactivity'],
 dropZones: ['Einstein', 'Darwin', 'Newton', 'Curie'],
 correctAnswer: [0, 1, 2, 3],
 explanation: 'Albert Einstein developed the Theory of Relativity. Charles Darwin proposed the theory of Evolution by Natural Selection. Isaac Newton formulated the Laws of Motion. Marie Curie discovered radioactivity and isolated radioactive isotopes.',
 order: 7
 },
 {
 id: '8',
 text: 'Explain the water cycle in your own words.',
 type: 'free-response',
 correctKeywords: ['evaporation', 'condensation', 'precipitation', 'collection', 'sun', 'clouds', 'rain', 'ocean', 'groundwater'],
 explanation: 'The water cycle consists of evaporation (liquid water becomes water vapor), condensation (water vapor forms clouds), precipitation (water falls as rain, snow, etc.), and collection (water returns to bodies of water or groundwater).',
 order: 8
 },
 {
 id: '9',
 text: 'What is the first step in the scientific method?',
 type: 'multiple-choice',
 options: [
 'Perform an experiment',
 'Form a hypothesis',
 'Make observations and ask questions',
 'Analyze data'
 ],
 correctAnswer: 2,
 explanation: 'The scientific method begins with making observations and asking questions about those observations. This is followed by forming a hypothesis, testing through experimentation, analyzing data, and drawing conclusions.',
 order: 9
 },
 {
 id: '10',
 text: 'Which of the following are noble gases?',
 type: 'multiple-select',
 options: ['Helium', 'Oxygen', 'Neon', 'Carbon', 'Argon'],
 correctAnswer: [0, 2, 4],
 explanation: 'Helium, Neon, and Argon are noble gases. They are characterized by their full valence electron shells, which makes them largely non-reactive. Oxygen and Carbon are not noble gases.',
 order: 10
 }
];