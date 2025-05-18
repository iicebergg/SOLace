// Sample questions for the test system

const sampleQuestions = [
 {
 id: '1',
 text: 'What is the capital of France?',
 type: 'multiple-choice',
 options: ['London', 'Berlin', 'Paris', 'Madrid'],
 correctAnswer: 2, // Index of the correct option (Paris)
 explanation: 'Paris is the capital and most populous city of France.',
 order: 1
 },
 {
 id: '2',
 text: 'Which of the following are primary colors?',
 type: 'multiple-select',
 options: ['Red', 'Green', 'Blue', 'Yellow', 'Purple'],
 correctAnswer: [0, 2, 3], // Indices of correct options (Red, Blue, Yellow)
 explanation: 'The primary colors are Red, Blue, and Yellow. Green and Purple are secondary colors created by mixing primary colors.',
 order: 2
 },
 {
 id: '3',
 text: 'Match the countries with their capitals.',
 type: 'drag-drop',
 options: ['Tokyo', 'Berlin', 'Ottawa', 'Canberra'],
 dropZones: ['Japan', 'Germany', 'Canada', 'Australia'],
 correctAnswer: [0, 1, 2, 3], // Matching indices
 explanation: 'Tokyo is the capital of Japan, Berlin is the capital of Germany, Ottawa is the capital of Canada, and Canberra is the capital of Australia.',
 order: 3
 },
 {
 id: '4',
 text: 'What is photosynthesis?',
 type: 'free-response',
 correctKeywords: ['light', 'energy', 'plants', 'chlorophyll', 'carbon dioxide', 'water', 'oxygen', 'glucose'],
 explanation: 'Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water. Chlorophyll is essential to this process, and oxygen is released as a byproduct.',
 order: 4
 },
 {
 id: '5',
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
 id: '6',
 text: 'Which of the following contribute to climate change?',
 type: 'multiple-select',
 options: ['Burning fossil fuels', 'Deforestation', 'Recycling', 'Solar energy production', 'Factory farming'],
 correctAnswer: [0, 1, 4],
 explanation: 'Burning fossil fuels, deforestation, and factory farming contribute to climate change by releasing greenhouse gases. Recycling and solar energy production are sustainable practices that help mitigate climate change.',
 order: 6
 },
 {
 id: '7',
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