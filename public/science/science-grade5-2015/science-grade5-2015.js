const sampleQuestions = [
 {
 id: '1',
 text: 'A fungus is found growing on dead leaves on the forest floor. The fungus is an example of a--',
 type: 'multiple-choice',
 options: ['decomposer', 'carnivore', 'predator', 'producer'],
 correctAnswer: 3,
 explanation: 'Addition and subtraction are inverse operations, so 9 + 6 = 15 helps solve 15 - 9 = 6.'
 },
 {
 id: '2',
 text: 'Based on the table, how much rainfall should a scientist have predicted for May of 2011 in Norfolk?',
 type: 'multiple-choice',
 image: {url:'images/question_2.png', alt: 'Image failed to load. Please try again later.'},
 options: ['12-17 inches', '15-20 inches', '18-23 inches', '21-26 inches'],
 correctAnswer: 0, 
 explanation: 'When comparing fractions with the same denominator, compare the numerators. Since 3 < 4, we have 3/11 < 4/11.'
 },
 {
 id: '3',
 text: 'Which of these best explains why the sun is not visible during the night?',
 type: 'multiple-choice',
 options: ['The moon blocks the sun from view.', 'That side of the sun faces away from Earth.', 'The sun stops creating light at night.', 'That side of Earth faces away from the sun.'],
 correctAnswer: 1, 
 explanation: 'Count the place value blocks: thousands, hundreds, tens, and ones to determine the number.'
 },
 {
 id: '4',
 text: 'A model of a plate boundary is shown. What most likely happens as the plates slide past each other?',
 type: 'multiple-choice',
 image: {url:'images/question_4.png', alt: 'Image failed to load. Please try again later.'},
 options: ['A mountain forms.', 'An earthquake occurs.', 'The ocean floor widens.', 'Magma comes to the surface.'],
 correctAnswer: 2,
 explanation: 'To round 5,647: to nearest thousand (6,000), nearest hundred (5,600), nearest ten (5,650).'
 },
 {
 id: '5',
 text: 'What is the mass of the rock shown?',
 type: 'free-response',
 image: {url:'images/question_5.png', alt: 'Image failed to load. Please try again later.'},
 correctKeywords: ['114'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '6',
 text: 'During pollination, pollen is transferred from a stamen to a--',
 type: 'multiple-choice',
 image: {url:'images/question_6.png', alt: 'Image failed to load. Please try again later.'},
 options: ['petal', 'stem', 'stepal', 'stigma'],
 correctAnswer: 3, 
 explanation: '78,025 is read as seventy-eight thousand, twenty-five.'
 },
 {
 id: '7',
 text: 'Which of these is an impact made by humans?',
 type: 'multiple-choice',
 options: ['Marble being dug from a rock quarry', 'Marble forming from sedimentary rock', 'Oceans drying and exposing limestone', 'Limestone forming from shells of ocean animals'],
 correctAnswer: 0, 
 explanation: 'Count the whole units and fractional parts shown in the model.'
 },
 {
 id: '8',
 text: 'Lobster pots are used by fishermen to catch lobsters in shallow water. In which area of the ocean would commercial fishermen most likely place their lobster pots?',
 type: 'multiple-choice',
 options: ['On the bottom of an ocean trench', 'On top of a mid-ocean ridge', 'On the continental slope', 'On the continental shelf'],
 correctAnswer: 3, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '9',
 text: 'Which unit is best to use to measure the distance a runner covered in 30 seconds?',
 type: 'multiple-choice',
 options: ['mm', 'cm', 'm', 'km'],
 correctAnswer: 3, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '10',
 text: 'In which direction will the ball most likely go after it hits the wall?',
 type: 'multiple-choice',
 image: {url:'images/question_10.png', alt: 'Image failed to load. Please try again later.'},
 options: [
    {url: 'images/question_10a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '11',
 text: 'What is the difference between 5/12 and 1/4',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: '63 ÷ 7 = 9, so the answer is 7.'
 },
 {
 id: '12',
 text: 'Which cell part is necessary for producing food?',
 type: 'multiple-choice',
 image: {url:'images/question_12.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Cell membrane', 'Vacuole', 'Chloroplast', 'Cytoplasm'],
 correctAnswer: 3, 
 explanation: 'Count the total parts and the shaded parts to determine the fraction.'
 },
 {
 id: '13',
 text: 'One way in which light waves are different from sound waves is that light waves--',
 type: 'multiple-choice',
 options: ['can move through empty space', 'are caused by rapid vibrations', 'travel more slowly', 'can be reflected'],
 correctAnswer: 3, 
 explanation: 'Look at the arrangement to determine the multiplication sentence that represents the groups.'
 },
 {
 id: '14',
 text: 'Which material will correctly complete the chart?',
 type: 'multiple-choice',
 image: {url:'images/question_14.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Gold, because it is a shiny metal', 'Salt, because it is made of two types of atoms', 'Nitrogen, because it is a gas in the atmosphere', 'Carbon, because it is part of many different molecules'],
 correctAnswer: 3, 
 explanation: 'Start with 25, subtract 26 sold, then add 136 new plants: 25 - 26 + 136 = 135. Wait, this seems to have an error in the problem or answer choices.'
 },
 {
 id: '15',
 text: 'A student rubbed a plastic comb with a piece of wool cloth and then placed the comb near a stream of water. The water bent toward the comb as shown because of-',
 type: 'multiple-choice',
 image: {url:'images/question_15.png', alt: 'Image failed to load. Please try again later.'},
 options: ['thermal energy', 'static electricity', 'magnetism', 'gravity'],
 correctAnswer: 0, 
 explanation: 'Count the total equal parts and the shaded parts to find the fraction.'
 },
 {
 id: '16',
 text: 'Which plant part develops into a fruit?',
 type: 'multiple-choice',
 options: ['Flower', 'Stem', 'Leaf', 'Root'],
 correctAnswer: 1, 
 explanation: 'When adding fractions with the same denominator, add the numerators: 3/4 + 1/4 = 4/4 = 1.'
 },
 {
 id: '17',
 text: 'A student is investigating the time it takes for different objects to reach the ground after they are dropped. The constant in this investigation is the -',
 type: 'multiple-choice',
 options: ['time to reach the ground', 'distance to the ground', 'weight of each object', 'object being dropped'],
 correctAnswer: 2,
 explanation: 'For equally likely outcomes, place 4 star cards and 4 heart cards in the bag.'
 },
 {
 id: '18',
 text: 'This table shows the times it took four students to complete a 40-meter race. Which statement about these times is true?',
 type: 'multiple-choice',
 image: {url: 'images/question_18.png', alt: 'Image failed to load. Please try again later.'},
 options: ['13.7 > 13.07', '13.07 > 13.6', '13.6 > 13.7', '13.06 > 13.07'],
 correctAnswer: 0, 
 explanation: '3,000 - 285 = 2,715.'
 },
 {
 id: '19',
 text: 'Which of these represents a correct flow of energy based on the food web shown?',
 type: 'multiple-choice',
 image: {url: 'images/question_19.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Loggerhead Turtle → Horseshoe Crab → Razor Clam', 'Horseshoe Crab → Loggerhead Turtle → Sanderling', 'Diamondback Terrapin → Razor Clam → Plankton', 'Razor Clam → Horseshoe Crab → Sanderling'],
 correctAnswer: 1, 
 explanation: 'Look at the pattern on the number line to determine which operation it represents.'
 },
 {
 id: '20',
 text: 'When stirred together, which two substances form a solution?',
 type: 'multiple-choice',
 options: ['Sand and salt', 'Sugar and salt', 'Sand and water', 'Sugar and water'],
 correctAnswer: 2, 
 explanation: 'Look at the pattern on the number line to determine which operation it represents.'
 },
 {
 id: '21',
 text: 'The plants are most likely responding to which factor in the environment?',
 type: 'multiple-choice',
 image: {url: 'images/question_19.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Light', 'Water', 'Oxygen', 'Carbon dioxide'],
 correctAnswer: 1, 
 explanation: 'From 10:30 A.M. to 1:00 P.M. is 2 hours and 30 minutes = 150 minutes.'
 },
 {
 id: '22',
 text: 'The greater the frequency of a sound wave, the--',
 type: 'multiple-choice',
 image: {url: 'images/question_19.png', alt: 'Image failed to load. Please try again later.'},
 options: ['lower the pitch', 'higher the pitch', 'softer the sound', 'louder the sound'],
 correctAnswer: 1, 
 explanation: 'From 10:30 A.M. to 1:00 P.M. is 2 hours and 30 minutes = 150 minutes.'
 },
 {
 id: '23',
 text: 'A student made the model showing the particles in a solid. To improve the model, the student should--',
 type: 'multiple-choice',
 image: {url: 'images/question_23.png', alt: 'Image failed to load. Please try again later.'},
 options: ['put the beads in a square container', 'take out some beads so the particles can move more easily', 'shake the container gently to show how the particles vibrate', 'use different-colored beads to make the particles easier to see'],
 correctAnswer: 2, 
 explanation: '6 feet is the most reasonable length for a bed. 6 inches and 6 centimeters are too short, 6 meters is too long.'
 },
 {
 id: '24',
 text: 'Which substance produced during photosynthesis is represented by the X in the illustration?',
 type: 'multiple-choice',
 image: {url: 'images/question_24.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Water', 'Oxygen', 'Sunlight', 'Carbon dioxide'],
 correctAnswer: [2, 0, 1],
 explanation: 'For equally likely outcomes, place 4 star cards and 4 heart cards in the bag.'
 },
 {
 id: '25',
 text: 'Which of these animals is classified as a vertebrate?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_25a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_25b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_25c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_25d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'A ray has one endpoint and extends infinitely in one direction. A line segment has two endpoints.'
 },
 {
 id: '26',
 text: 'An electromagnet can be made using a battery, insulated wire, and--',
 type: 'multiple-choice',
 options: ['an iron nail', 'an aluminum can', 'a nickel coin', 'a gold chain'],
 correctAnswer: 0, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '27',
 text: 'High and low tides on the coast are caused mostly by -',
 type: 'multiple-choice',
 options: ['underwater earthquakes', 'the gravity from the moon', 'storms over the ocean', 'the tilt of Earth'], 
 correctAnswer: 2,
 explanation: 'Count the units around the outside edge of the shaded figure to find the perimeter.'
 },
 {
 id: '28',
 text: 'The plant shown grows in swamps and produces an odor similar to a skunk. Why should people preserve a plant like the skunk cabbage?',
 type: 'multiple-choice',
 image: {url: 'images/question_28.png', alt: 'Image failed to load. Please try again later.'},
 options: ['It depends on a moist environment.', 'It has a certain role in the ecosystem.', 'It is prized by gardeners for its flowers.', 'It has leaves that are about the same shape as each other.'],
 correctAnswer: 3, 
 explanation: 'Count the value of all the coins and bills shown.'
 },
 {
 id: '29',
 text: 'Which pair of organisms needs to switch places for the ocean food chain to be correct?',
 type: 'multiple-choice',
 image: {url: 'images/question_29.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Phytoplankton and fish', 'Animal-like plankton and fish', 'White shark and phytoplankton', 'White shark and animal-like plankton'],
 correctAnswer: 3, 
 explanation: 'Count the value of all the coins and bills shown.'
 },
 {
 id: '30',
 text: 'Students investigated how different colors of construction paper in a solar oven affect the heating of water. Which graph correctly represents the data for the brown construction paper?',
 type: 'multiple-choice',
 image: {url: 'images/question_30.png', alt: 'Image failed to load. Please try again later.'},
 options: [
    {url: 'images/question_30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '31',
 text: 'A student made a track for a toy sled using 4 different materials. At which section of the track is friction most likely to cause the greatest resistance to the motion of the toy sled?',
 type: 'multiple-choice',
 image: {url: 'images/question_31.png', alt: 'Image failed to load. Please try again later.'},
 options: ['1', '2', '3', '4'],
 correctAnswer: 1, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '32',
 text: 'Which pair of colors is in order from the longest wavelength of light in the visible spectrum to the shortest wavelength?',
 type: 'multiple-choice',
 options: ['Green, orange', 'Yellow, red', 'Violet, blue', 'Red, violet'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '33',
 text: 'Based on the mineral identification table, which mineral belongs in square X of the flow chart?',
 type: 'multiple-choice',
 image: {url: 'images/question_33.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Mica', 'Graphite', 'Magnetite', 'Hornblende'],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '34',
 text: 'The conveyor belt moves the groceries by transforming electrical energy into--',
 type: 'multiple-choice',
 image: {url: 'images/question_34.png', alt: 'Image failed to load. Please try again later.'},
 options: ['thermal energy', 'radiant energy', 'mechanical energy', 'potential energy'],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '35',
 text: 'Students made a classroom barometer that can be used to measure--',
 type: 'multiple-choice',
 image: {url: 'images/question_35.png', alt: 'Image failed to load. Please try again later.'},
 options: ['wind direction', 'temperature', 'air pressure', 'precipitation'],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '36',
 text: 'Which of these is an example of a behavioral adaptation?',
 type: 'multiple-choice',
 options: ['A cow that has flat teeth', 'A squirrel that has buried acorns', 'A fish that has scales', 'An owl that has soft feathers'],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '37',
 text: 'Coal is important for Virginia because it--',
 type: 'multiple-choice',
 options: ['can be used for energy', 'can be divided into four types', 'is found in many areas of the country', 'is formed from plant and animal remains'],
 correctAnswer: 0, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
];