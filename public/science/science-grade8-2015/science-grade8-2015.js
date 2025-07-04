const sampleQuestions = [
 {
 id: '1',
 text: 'Sea anemones are poisonous. However, the clownfish has developed an outer layer of mucus which provides protection from the stinging cells of the sea anemone. The mucus is best described as--',
 image: {url:'images/question_1.png', alt: 'Image failed to load. Please try again later.'},
 type: 'multiple-choice',
 options: ['an adaptation', 'a relationship', 'an energy requirement', 'a social hierarchy'],
 correctAnswer: 0,
 explanation: 'Addition and subtraction are inverse operations, so 9 + 6 = 15 helps solve 15 - 9 = 6.'
 },
 {
 id: '2',
 text: 'Hurricanes form in tropical waters between 8 and 20 degrees north and south of the equator. Hurricanes rarely form at higher latitudes because the water is too--',
 type: 'multiple-choice',
 options: ['warm', 'deep', 'shallow', 'cold'],
 correctAnswer: 3, 
 explanation: 'When comparing fractions with the same denominator, compare the numerators. Since 3 < 4, we have 3/11 < 4/11.'
 },
 {
 id: '3',
 text: 'On a small island, scientists observed and graphed changes in wolf and moose populations. From 1965 to 1970, which data pattern did scientists observe?',
 type: 'multiple-choice',
 image: {url:'images/question_3.png', alt: 'Image failed to load. Please try again later.'},
 options: ['A drop in wolf population and a drop in moose population', 'An increase in wolf population and a drop in moose population', 'A drop in wolf population and an increase in moose population', 'An increase in wolf population and an increase in moose population'],
 correctAnswer: 2, 
 explanation: 'Count the place value blocks: thousands, hundreds, tens, and ones to determine the number.'
 },
 {
 id: '4',
 text: 'A metal spoon was placed in a dish of ice cream and became cool. Which correctly describes the heat transfer process that resulted in the cooling of the spoon?',
 type: 'multiple-choice',
 options: ['Conduction, because the spoon was in contact with the cold ice cream', 'Convection, because the spoon was in contact with the cold ice cream', 'Conduction, because cold air currents affected the temperature of the spoon', 'Convection, because cold air currents affected the temperature of the spoon'],
 correctAnswer: 0,
 explanation: 'To round 5,647: to nearest thousand (6,000), nearest hundred (5,600), nearest ten (5,650).'
 },
 {
 id: '5',
 text: 'Students performed several trials using the laboratory setup shown. students were also given this hypothesis: If friction increases, then the rolling distance of a marble will decrease. What should be changed to best test this hypothesis?',
 type: 'multiple-choice',
 image: {url:'images/question_5.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Height of the ramp', 'Height and length of the ramp', 'Roughness of the ramp surface', 'Height of the ramp and roughness of the ramp surface'],
 correctAnswer: 2, 
 explanation: 'Count the place value blocks: thousands, hundreds, tens, and ones to determine the number.'
 },
 {
 id: '6',
 text: 'A student recorded the temperature of an aquarium each hour for 8 hours. Which of these will best display the data the student collected?',
 type: 'multiple-choice',
 options: ['Bar graph', 'Circle graph', 'Picture graph', 'Line graph'],
 correctAnswer: 3, 
 explanation: '78,025 is read as seventy-eight thousand, twenty-five.'
 },
 {
 id: '7',
 text: 'A cold air mass moves underneath a warm air mass causing the warm air to rise. This event can best be identified as -',
 type: 'multiple-choice',
 options: ['a cold front', 'a warm front', 'an occluded front', 'a stationary front'],
 correctAnswer: 0, 
 explanation: 'Count the whole units and fractional parts shown in the model.'
 },
 {
 id: '8',
 text: 'Which body of water is often protected naturally from storms by barrier islands and also contains a mixture of fresh water and salt water?',
 type: 'multiple-choice',
 options: ['Estuary', 'Ocean', 'Lake', 'Pond'],
 correctAnswer: 0, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '9',
 text: 'Which three drawings best represent objects with kinetic energy?',
 type: 'multiple-select',
 options: [
    {url: 'images/question_9a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_9b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_9c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_9d.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_9e.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_9f.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: [2, 3, 5],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '10',
 text: 'Which of these best completes the Conversion Table?',
 type: 'multiple-choice',
 image: {url:'images/question_10.png', alt: 'Image failed to load. Please try again later.'},
 options: [
    {url: 'images/question_10a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10d.png', alt: 'Image failed to load. Please try again later.'},
 ],
 correctAnswer: 3, 
 explanation: '63 ÷ 7 = 9, so the answer is 7.'
 },
 {
 id: '11',
 text: 'A student measured the power of a motor operating at different temperatures. The student recorded a total of 11 measurements, one at each 2 degree interval between 10°C and 30°C. Which change in the procedure would most improve the validity of conclusions based on this investigation?',
 type: 'multiple-choice',
 options: ['Increasing the number of variables', 'Decreasing the range of the independent variable', 'Repeating the experiment several times', 'Producing a graph of numerical observations'],
 correctAnswer: 2, 
 explanation: '63 ÷ 7 = 9, so the answer is 7.'
 },
 {
 id: '12',
 text: 'Which of these has the strongest gravitational field?',
 type: 'multiple-choice',
 options: ['Sun', 'Earth', 'Saturn', 'Jupiter'],
 correctAnswer: 0, 
 explanation: 'Look at the arrangement to determine the multiplication sentence that represents the groups.'
 },
 {
 id: '13',
 text: 'Students placed steel wool in beakers of four different liquids in order of the most acidic to neutral. The students recorded their observations in the table. Which is the best conclusion based on the table?',
 type: 'multiple-choice',
 image: {url:'images/question_13.png', alt: 'Image failed to load. Please try again later.'},
 options: ['The more acidic the substance, the faster it reacts with steel wool.', 'The more acidic the substance, the faster the steel wool turns to a gas.', 'The less acidic the substance, the faster the steel wool becomes covered with air bubbles.', 'The less acidic the substance, the faster the steel wool changes color.'],
 correctAnswer: 0, 
 explanation: 'Count the total parts and the shaded parts to determine the fraction.'
 },
 {
 id: '14',
 text: 'Which is the result of using a more powerful motor to run an elevator?',
 type: 'multiple-choice',
 options: ['The same amount of work is done in less time.', 'Less work is done in the same amount of time.', 'The same amount of time is needed to move the same distance.', 'A longer time is needed to move a shorter distance.'],
 correctAnswer: 0, 
 explanation: 'Start with 25, subtract 26 sold, then add 136 new plants: 25 - 26 + 136 = 135. Wait, this seems to have an error in the problem or answer choices.'
 },
 {
 id: '15',
 text: 'A major scientific concern over nuclear energy is how to--',
 type: 'multiple-choice',
 options: ['deal with the large amounts of fossil fuels required', 'reduce the high levels of carbon dioxide emitted into the air', 'prevent the depletion of the ozone layer', 'store the waste products safely'],
 correctAnswer: 3, 
 explanation: 'Count the total equal parts and the shaded parts to find the fraction.'
 },
 {
 id: '16',
 text: 'What are the ordered steps for cloud formation?',
 type: 'drag-drop',
 options: ['Water vapor cools', 'Water condenses', 'Liquid water evaporates', 'Warm water vapor rises'],
 dropZones: ['First ↓', 'Second ↓', 'Third ↓', 'Fourth'],
 correctAnswer: [2, 3, 0, 1],
 explanation: 'For equally likely outcomes, place 4 star cards and 4 heart cards in the bag.'
 },
 {
 id: '17',
 text: 'Why is water known as the "universal solvent"?',
 type: 'multiple-choice',
 options: ['It dissolves all known substances.', 'It dissolves only solid substances.', 'It dissolves the greatest number of substances.', 'It dissolves substances faster than all other solvents.'],
 correctAnswer: 2,
 explanation: 'For equally likely outcomes, place 4 star cards and 4 heart cards in the bag.'
 },
 {
 id: '18',
 text: 'Which of these has been improved by genetic engineering?',
 type: 'multiple-choice',
 options: ['Visibility of insects to predators', 'Growth of insects in cornfields', 'Reduced number of pollinating insects', 'Resistance of corn plants to insects'],
 correctAnswer: 3, 
 explanation: '3,000 - 285 = 2,715.'
 },
 {
 id: '19',
 text: 'Which action will most reduce the use of nonrenewable energy resources in a school district?',
 type: 'multiple-choice',
 options: ['Installing low-flow faucets and toilets', 'Recycling worksheets and other paper products', 'Limiting the sweeping and mopping of classrooms to once a month', 'Replacing current lighting with more efficient lighting'],
 correctAnswer: 3, 
 explanation: 'Look at the pattern on the number line to determine which operation it represents.'
 },
 {
 id: '20',
 text: 'Sound waves are unable to travel through--',
 type: 'multiple-choice',
 options: ['air', 'a vacuum', 'water', 'a rock'],
 correctAnswer: 1, 
 explanation: 'Look at the pattern on the number line to determine which operation it represents.'
 },
 {
 id: '21',
 text: 'The speed of light is about 300,000,000 m/s. Which is the correct expression for the speed of light in scientific notation?',
 type: 'multiple-choice',
 options: ['30.0 x 10⁷ m/s', '30.0 x 10⁸ m/s', '3.0 x 10⁷ m/s', '3.0 x 10⁸ m/s'],
 correctAnswer: 3, 
 explanation: 'From 10:30 A.M. to 1:00 P.M. is 2 hours and 30 minutes = 150 minutes.'
 },
 {
 id: '22',
 text: 'Which of these properties of an unknown liquid can be found using a beaker, a hot plate, and a temperature probe?',
 type: 'multiple-choice',
 options: ['Density', 'Boiling point', 'Oxygen', 'Chemical composition'],
 correctAnswer: 1, 
 explanation: 'Congruent figures have the same shape and size. Look for the tower that matches exactly.'
 },
 {
 id: '23',
 text: 'Place the terms in the order of the simplest level of organization to the most complex.',
 type: 'drag-drop',
 options: ['System', 'Cell', 'Organ', 'Tissue'],
 dropZones: ['Simplest', '↓', '↓', 'Most complex'],
 correctAnswer: [1, 3, 2, 0],
 explanation: 'For equally likely outcomes, place 4 star cards and 4 heart cards in the bag.'
 },
 {
 id: '24',
 text: 'A group of campers travels to a cabin which has no electrical power. In order to provide the power for a heater and lights, which device would be appropriate?',
 type: 'multiple-choice',
 options: ['A resistor', 'An insulator', 'A generator', 'A voltmeter'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '25',
 text: 'Which of the.se i.s most likely the result of weasels and foxes depending on the same food source?',
 type: 'multiple-choice',
 options: ['The populations will compete with each other.', 'One of the populations will become herbivores.', 'Birthrates for both populations will increase.', 'New species of prey will evolve in the area.'],
 correctAnswer: 0, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '26',
 text: 'A farmer wants to plant a crop that grows well in a marshland environment. In order to produce a good harvest, the most important characteristic this plant should have is the ability to--',
 type: 'multiple-choice',
 options: ['thrive in wet soil', 'mature quickly', 'survive in dry conditions', 'attract a variety of pollinators'],
 correctAnswer: 0, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '27',
 text: 'The volume of water in the pot decreases during this investigation. Water droplets form on the mirror when positioned over the pot. In this setup, water--',
 type: 'multiple-choice',
 image: {url: 'images/question_28.png', alt: 'Image failed to load. Please try again later.'},
 options: ['vaporizes and then freezes', 'vaporizes and then condenses', 'condenses and then vaporizes', 'freezes and then vaporizes'], 
 correctAnswer: 1,
 explanation: 'Count the units around the outside edge of the shaded figure to find the perimeter.'
 },
 {
 id: '28',
 text: 'Which is an abiotic change in an ecosystem?',
 type: 'multiple-choice',
 options: ['Plant photosynthesis rates increase.', 'Fish species populations increase.', 'Aquatic predator survival rates increase.', 'Annual rainfall totals for an area increase.'],
 correctAnswer: 3, 
 explanation: 'Count the value of all the coins and bills shown.'
 },
 {
 id: '29',
 text: 'Ca + 2H₂O → Ca(OH)₂ + H₂ <br> How many different elements are involved in the chemical reaction shown?',
 type: 'free-response',
 correctKeywords: ['3'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '30',
 text: 'Physical and chemical weathering processes are responsible for breaking down rocks. Which of these is an example of chemical weathering by water?',
 type: 'multiple-choice',
 options: ['Mineral crystals form as water evaporates from rocks.', 'Limestone reacts with acid rain and dissolves.', 'Water freezes in rock cracks and causes the rock to split.', 'Moss collects and grows on the surface of rocks.'],
 correctAnswer: 1, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '31',
 text: 'The shaded row in the t.able is called a--',
 type: 'multiple-choice',
 image: {url: 'images/question_31.png', alt: 'Image failed to load. Please try again later.'},
 options: ['column', 'family', 'group', 'period'],
 correctAnswer: 3, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '32',
 text: 'White-footed mice having thicker fur than cactus mice is probably influenced most by the differences in the--',
 type: 'multiple-choice',
 options: ['food that they eat', 'time of day they are active', 'environmental climates where they live', 'amount of predators they encounter'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '33',
 text: 'During human fertilization, an egg and a sperm cell unite. Which structures in these cells carry the genes that will be transferred to the offspring?',
 type: 'multiple-choice',
 options: ['Vacuoles', 'Ribosomes', 'Chromosomes', 'Cell membranes'],
 correctAnswer: 2, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '34',
 text: 'Which facility relies on a nonrenewable source of energy?',
 type: 'multiple-choice',
 options: ['A wind farm that uses wind turbines', 'A dam that uses the power of water', 'A power station that burns coal', 'A solar farm that collects sunlight'],
 correctAnswer: 2, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '35',
 text: 'As the frequency of a wave decreases, the wave\'s--',
 type: 'multiple-choice',
 options: ['period decreases', 'amplitude increases', 'speed decreases', 'wavelength increases'],
 correctAnswer: 3, 
 explanation: 'The identity property of multiplication states that any number multiplied by 1 equals itself.'
 },
 {
 id: '36',
 text: 'This picture shows a zebra with two tick birds on its back. The tick birds alert the zebras that predators are near as well as remove and eat ticks found on zebras. What is the primary type of interaction between the tick birds and the zebras?',
 type: 'multiple-choice',
 image: {url: 'images/question_36.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Mutualism', 'Parasitism', 'Competition', 'Commensalism'],
 correctAnswer: 0, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '37',
 text: 'Which change will most likely increase the strength of a magnetic field produced by an electromagnet?',
 type: 'multiple-choice',
 options: ['Reduce the number of turns of the coil', 'Switch the direction in which the battery is connected', 'Remove the iron nail', 'Add a battery'],
 correctAnswer: 3, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '38',
 text: 'The physical expression of a trait in an organism is known as the--',
 type: 'multiple-choice',
 options: ['chromosome', 'genotype', 'phenotype', 'double helix'],
 correctAnswer: 2, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '39',
 text: 'Which statement correctly describes a difference between the mesosphere and the stratosphere?',
 type: 'multiple-choice',
 image: {url: 'images/question_39.png', alt: 'Image failed to load. Please try again later.'},
 options: ['The mesosphere has more active weather than the stratosphere.', 'The mesosphere contains fewer oxygen molecules than the stratosphere.', 'Air pressure is lower in the stratosphere than in the mesosphere', 'Temperatures decrease with altitude only in the stratosphere.'],
 correctAnswer: 1, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '40',
 text: 'Which organisms are producers in this food web?',
 type: 'multiple-select',
 image: {url: 'images/question_40.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Wolf', 'Snake', 'Shrub', 'Deer', 'Grass', 'Shrew', 'Rabbit', 'Tree', 'Hawk', 'Grasshopper'],
 correctAnswer: [2, 4, 7], 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '41',
 text: 'Which of these represents the freezing point of water in correct SI units?',
 type: 'multiple-choice',
 options: ['0°C', '0°F', '32°F', '-273°C'],
 correctAnswer: 0, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '42',
 text: 'A girl kicks a soccer ball into the air. Which of these best explains why the soccer ball falls back to Earth?',
 type: 'multiple-choice',
 options: ['The acceleration of the ball is unstable.', 'The motion of the ball is changed by external forces.', 'The pressure on the ball changes with altitude.', 'The force exerted on the ball is greater than gravity.'],
 correctAnswer: 1, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '43',
 text: 'Students measured the amount of an unknown substance that dissolved in water at different temperatures. What was the independent variable in this investigation?',
 type: 'multiple-choice',
 image: {url: 'images/question_43.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Amount of substance dissolved', 'Unknown substance used', 'Water temperature', 'Water volume'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '44',
 text: 'Which characteristic is common to the four outer planets in our solar system?',
 type: 'multiple-choice',
 options: ['Low mass', 'High density', 'Fast revolution', 'Gaseous composition'],
 correctAnswer: 3, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '45',
 text: 'When comparing a plant cell to an animal cell, only the plant cell will contain--',
 type: 'multiple-choice',
 options: ['ribosomes', 'chromosomes', 'chloroplasts', 'mitochondria'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '46',
 text: 'A student measures her heart rate after each of the activities listed. Based on this information, which is a constant in the student\'s investigation?',
 type: 'multiple-choice',
 image: {url: 'images/question_46.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Equipment needed for activity', 'Length of activity time', 'Activity performed', 'Energy expended during activity'],
 correctAnswer: 1, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '47',
 text: 'Which of these is the best description of a typical organism in the Plant kingdom?',
 type: 'multiple-choice',
 options: ['Is unicellular', 'Lacks a nucleus', 'Makes its own food', 'Lacks a cell wall'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '48',
 text: 'Which of these is a way that a person can help improve air quality?',
 type: 'multiple-choice',
 options: ['Build a compost pile', 'Carpool with several people', 'Burn leaves in the fall', 'Use a gas-powered lawn mower'],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
];