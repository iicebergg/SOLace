window.TEST_IDENTIFIER = 'math_grade3_2004';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which digit of this number is in the hundreds place? <br>5,769',
 type: 'multiple-choice',
 options: ['5', '6', '7', '9'],
 correctAnswer: 2, 
 explanation: 'In 5,769, the 5 is in the thousands place, the 7 is in the hundreds place, the 6 is in the tens place, and the 9 is in the ones place.'
 },
 {
 id: '2',
 text: 'The table below shows the number of each kind of poster that was sold by a third-grade class. <br><img src="images/2.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>The number of fish posters sold was LESS THAN the number of —',
 type: 'multiple-choice',
 options: ['Cat posters', 'Frog posters', 'Lizard posters', 'Bird posters'],
 correctAnswer: 2, 
 explanation: '259 fish posters were sold. Only lizard posters (284) had a greater number sold.'
 },
 {
 id: '3',
 text: 'There are 5 pennies in each stack shown below. <br><img src="images/3.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many pennies are there in all?',
 type: 'multiple-choice',
 options: ['90', '85', '80', '18'],
 correctAnswer: 0, 
 explanation: 'There are 18 stacks with 5 pennies each: 18 × 5 = 90 pennies.'
 },
 {
 id: '4',
 text: 'Which necklace has <math><mfrac><mn>5</mn><mn>8</mn></mfrac></math> of the beads with stars showing?',
 type: 'multiple-choice',
 options: [
    {url: 'images/4a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/4b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/4c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/4d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Each necklace has 8 beads. Necklace J has stars on 5 of its 8 beads.'
 },
 {
 id: '5',
 text: 'The figure below represents 1 pie. <br><img src="images/5-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which number is represented by the model below? <br><img src="images/5-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['0.45', '0.54', '4.5', '5.4'],
 correctAnswer: 3, 
 explanation: 'There are 5 whole pies and 4 of 10 pieces of another pie, which is 5 and <math><mfrac><mn>4</mn><mn>10</mn></mfrac></math>, or 5.4.'
 },
 {
 id: '6',
 text: '<br><img src="images/6.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What number is on the block that is 11th from the bottom?',
 type: 'multiple-choice',
 options: ['64', '18', '99', '37'],
 correctAnswer: 1, 
 explanation: 'Count up from the bottom block (63): the 11th block from the bottom is 18.'
 },
 {
 id: '7',
 text: 'There are 274 people on the plane shown below. <br><img src="images/7.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is 274 rounded to the nearest hundred?',
 type: 'multiple-choice',
 options: ['200', '270', '280', '300'],
 correctAnswer: 3, 
 explanation: '274 is between 200 and 300. The tens digit is 7, which is 5 or more, so 274 rounds up to 300.'
 },
 {
 id: '8',
 text: 'Which of the following is a true statement?',
 type: 'multiple-choice',
 options: ['2,245 > 2,174', '2,174 > 2,245', '2,062 > 2,165', '2,165 > 2,174'],
 correctAnswer: 0, 
 explanation: 'Both numbers have 2 thousands. 2,245 has 2 hundreds and 2,174 has 1 hundred, so 2,245 > 2,174.'
 },
 {
 id: '9',
 text: 'Each figure below is shaded to represent a fraction. Which pair of figures makes a statement that is true?',
 type: 'multiple-choice',
 options: [
    {url: 'images/9a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/9b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/9c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/9d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'In choice C, the left figure has 4 of 8 parts shaded and the right figure has 2 of 4 parts shaded. Both equal <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'
 },
 {
 id: '10',
 text: 'Mary will put vanilla ice cream into exactly <math><mfrac><mn>1</mn><mn>10</mn></mfrac></math> of the group of cones shown below. <br><img src="images/10.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Into how many cones will she put vanilla ice cream?',
 type: 'multiple-choice',
 options: ['1', '2', '5', '9'],
 correctAnswer: 0, 
 explanation: 'There are 10 cones. <math><mfrac><mn>1</mn><mn>10</mn></mfrac></math> of 10 is 1 cone.'
 },
 {
 id: '11',
 text: 'Last summer, 35,786 people visited the zoo in Harristown. How is 35,786 written in words?',
 type: 'multiple-choice',
 options: ['Thirty-five thousand, seven hundred eighty-six', 'Three hundred fifty-seven thousand, sixty-eight', 'Three hundred five thousand, seven hundred eighty-six', 'Three hundred fifty thousand, seven hundred eighty-six'],
 correctAnswer: 0, 
 explanation: '35,786 has 35 thousands and 786 ones: thirty-five thousand, seven hundred eighty-six.'
 },
 {
 id: '12',
 text: 'Ming used the fact, 21 ÷ 7 = 3, to help solve a different problem. Which of the following could be the problem she was trying to solve?',
 type: 'multiple-choice',
 options: ['___ ÷ 3 = 21', '___ + 3 = 10', '21 ÷ ___ = 7', '7 − ___ = 3'],
 correctAnswer: 2, 
 explanation: 'The numbers 21, 7, and 3 are in the same fact family. Since 21 ÷ 7 = 3, it is also true that 21 ÷ 3 = 7.'
 },
 {
 id: '13',
 text: 'In which group do exactly <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math> of the beach balls have stars on them?',
 type: 'multiple-choice',
 options: [
    {url: 'images/13a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/13b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/13c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/13d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: '<math><mfrac><mn>4</mn><mn>5</mn></mfrac></math> means 4 out of 5. Group D has 5 beach balls, and 4 of them have stars.'
 },
 {
 id: '14',
 text: 'Lester put these cans on a shelf. <br><img src="images/14.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Herman put 4 more cans on the shelf. How many cans were on the shelf then?',
 type: 'multiple-choice',
 options: ['12', '13', '14', '15'],
 correctAnswer: 1, 
 explanation: 'There are 9 cans on the shelf. 9 + 4 = 13 cans.'
 },
 {
 id: '15',
 text: 'Which of the following set models BEST represents 18 ÷ 3?',
 type: 'multiple-choice',
 options: [
    {url: 'images/15a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: '18 ÷ 3 means 18 objects split into 3 equal groups. Choice A shows 18 ducks in 3 groups of 6.'
 },
 {
 id: '16',
 text: 'For two months, the students in Chelsea\'s class collected newspapers for recycling. The table below shows how much they collected each month. <br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many pounds of newspaper did the students collect in all?',
 type: 'multiple-choice',
 options: ['1,293', '1,655', '2,303', '2,293'],
 correctAnswer: 2, 
 explanation: '974 + 1,329 = 2,303 pounds.'
 },
 {
 id: '17',
 text: '33 × 5 = ? <br>Which problem can be solved using the number sentence in the box?',
 type: 'multiple-choice',
 options: ['Calvin had 33 trading cards. He gave 5 of them to Wendy. How many trading cards does Calvin have left?', 'Sherman has 33 pages of stamps. Each page has 5 stamps on it. How many stamps is that all together?', 'The school store sold 33 bookmarks before lunch. They sold 5 bookmarks after lunch. How many bookmarks were sold in all?', 'Sally read for 33 minutes before dinner. She read for 5 minutes after dinner. How many minutes did she read in all?'],
 correctAnswer: 1, 
 explanation: '33 × 5 means 33 equal groups of 5. Sherman has 33 pages with 5 stamps on each page.'
 },
 {
 id: '18',
 text: 'Which has the same product as 3 × 4?',
 type: 'multiple-choice',
 options: ['2 × 6', '7 × 2', '4 × 6', '3 × 5'],
 correctAnswer: 0, 
 explanation: '3 × 4 = 12 and 2 × 6 = 12.'
 },
 {
 id: '19',
 text: '<br><img src="images/19-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What is <br><img src="images/19-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['5.0', '4.9', '2.9', '0.1'],
 correctAnswer: 1, 
 explanation: 'The first group shows 2 wholes and 5 tenths (2.5). The second shows 2 wholes and 4 tenths (2.4). 2.5 + 2.4 = 4.9.'
 },
 {
 id: '20',
 text: 'The chart shows the number of stickers four friends bought. <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many stickers did Joel and Katie buy all together?',
 type: 'multiple-choice',
 options: ['23', '27', '40', '50'],
 correctAnswer: 3, 
 explanation: 'Joel bought 23 and Katie bought 27. 23 + 27 = 50.'
 },
 {
 id: '21',
 text: 'A total of 6,158 people started a race. Only 5,643 of the people who started the race completed it. <br><img src="images/21.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many did not complete the race?',
 type: 'multiple-choice',
 options: ['515', '595', '1,515', '1,595'],
 correctAnswer: 0, 
 explanation: '6,158 − 5,643 = 515 people.'
 },
 {
 id: '22',
 text: 'This is a whole. <br><img src="images/22-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How much is <br><img src="images/22-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'The whole is divided into 3 equal parts, so each part is <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>. <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> = <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>.'
 },
 {
 id: '23',
 text: '54 ÷ 9 = ___',
 type: 'multiple-choice',
 options: ['5', '6', '7', '8'],
 correctAnswer: 1, 
 explanation: '6 × 9 = 54, so 54 ÷ 9 = 6.'
 },
 {
 id: '24',
 text: 'Bill has 2 decks of cards. Each deck has 52 cards. How many cards does Bill have in all?',
 type: 'multiple-choice',
 options: ['26', '50', '54', '104'],
 correctAnswer: 3, 
 explanation: '2 × 52 = 104 cards.'
 },
 {
 id: '25',
 text: 'Look at the pairs of shapes. Which is a pair of triangles?',
 type: 'multiple-choice',
 options: [
    {url: 'images/25a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/25d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'A triangle has 3 sides. Both shapes in choice C have 3 sides.'
 },
 {
 id: '26',
 text: 'This is 1 block. <br><img src="images/27-1.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many of these blocks are needed to make the stack shown below? <br><img src="images/27-2.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['13', '15', '18', '23'],
 correctAnswer: 1, 
 explanation: 'The stack has 3 rows of 5 blocks: 3 × 5 = 15 blocks.'
 },
 {
 id: '27',
 text: '<br><img src="images/28.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the temperature shown on this thermometer?',
 type: 'multiple-choice',
 options: ['69°F', '65°F', '60°F', '58°F'],
 correctAnswer: 1, 
 explanation: 'The liquid is halfway between 60° and 70°, which is 65°F.'
 },
 {
 id: '28',
 text: 'Which is a picture of a rectangular solid?',
 type: 'multiple-choice',
 options: [
    {url: 'images/29a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/29d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'A rectangular solid is shaped like a box, with 6 rectangular faces. Choice C is a rectangular solid.'
 },
 {
 id: '29',
 text: 'Which figure shows a line of symmetry?',
 type: 'multiple-choice',
 options: [
    {url: 'images/30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A line of symmetry divides a figure into two matching halves. Only the line in choice J does this.'
 },
 {
 id: '30',
 text: 'Each small square on the grid is 1 square unit. <br><img src="images/31.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many square units are needed to make the shaded figure?',
 type: 'multiple-choice',
 options: ['8', '12', '15', '20'],
 correctAnswer: 1, 
 explanation: 'Count the shaded squares: there are 12.'
 },
 {
 id: '31',
 text: 'Which of the following has just one square corner?',
 type: 'multiple-choice',
 options: [
    {url: 'images/32a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/32d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The triangle in choice G has exactly one square (right) corner. The rectangle and the square in choice H each have 4.'
 },
 {
 id: '32',
 text: 'Meegan finished lunch at the time shown on the clock below. <br><img src="images/33.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is closest to the time shown on the clock?',
 type: 'multiple-choice',
 options: ['12:01', '12:07', '1:01', '1:07'],
 correctAnswer: 3, 
 explanation: 'The hour hand is just past 1 and the minute hand is a little past the 1 (5 minutes), so the time is about 1:07.'
 },
 {
 id: '33',
 text: 'Wade is in third grade. <br><img src="images/34.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which is CLOSEST to the amount Wade weighs?',
 type: 'multiple-choice',
 options: ['5 ounces', '50 ounces', '5 pounds', '50 pounds'],
 correctAnswer: 3, 
 explanation: 'A third grader weighs about 50 pounds. 5 ounces, 50 ounces, and 5 pounds are all much too light.'
 },
 {
 id: '34',
 text: 'You can draw on the grid to help find the answer. <br><img src="images/35.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Three of the points on the grid above can be connected to make 1 line segment. Which 3 points are they?',
 type: 'multiple-choice',
 options: ['Points <i>P</i>, <i>R</i>, and <i>W</i>', 'Points <i>P</i>, <i>R</i>, and <i>T</i>', 'Points <i>S</i>, <i>T</i>, and <i>W</i>', 'Points <i>S</i>, <i>R</i>, and <i>T</i>'],
 correctAnswer: 1, 
 explanation: 'From P to R to T, each step is 1 unit to the right and 1 unit down, so P, R, and T lie on one straight line.'
 },
 {
 id: '35',
 text: 'Stephanie has the money shown below to buy a bib for her baby brother. <br><img src="images/36.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the prices shown include tax, which of the following bibs can Stephanie buy with this money?',
 type: 'multiple-choice',
 options: [
    {url: 'images/36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Stephanie has $1.00 + 6 quarters ($1.50) + 5 dimes ($0.50) + 3 nickels ($0.15) + 5 pennies ($0.05) = $3.20. Only the $3.16 bib costs $3.20 or less.'
 },
 {
 id: '36',
 text: 'The table below shows the number of each color pencil in a box. <br><img src="images/37.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which graph below shows the correct number of pencils in the box?',
 type: 'multiple-choice',
 options: [
    {url: 'images/37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The table shows Red 13, Green 26, Blue 20, and Yellow 16. Graph A has bars at these heights.'
 },
 {
 id: '37',
 text: 'The line plot below shows the number of books each student in Marcia\'s class read over the summer. <br><img src="images/38.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many more students read exactly 3 books than exactly 7 books?',
 type: 'multiple-choice',
 options: ['4', '5', '6', '7'],
 correctAnswer: 0, 
 explanation: 'There are 5 X\'s above 3 and 1 X above 7. 5 − 1 = 4 more students.'
 },
 {
 id: '38',
 text: 'The bar graph below shows the number of minutes it takes Chloe to do each chore. <br><img src="images/39.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>How many minutes does it take Chloe to clean her room and walk the dog all together?',
 type: 'multiple-choice',
 options: ['25', '35', '45', '60'],
 correctAnswer: 2, 
 explanation: 'Cleaning her room takes 20 minutes and walking the dog takes 25 minutes. 20 + 25 = 45 minutes.'
 },
 {
 id: '39',
 text: 'If Bert spins this spinner one time, which color is the spinner MOST LIKELY to land on? <br><img src="images/40.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Red', 'Green', 'Blue', 'Yellow'],
 correctAnswer: 2, 
 explanation: 'Blue has the largest section of the spinner, so the spinner is most likely to land on blue.'
 },
 {
 id: '40',
 text: 'Mark made this picture graph to show the number of birds he counted on a field trip. <br><img src="images/41.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>What was the total number of robins that he saw?',
 type: 'multiple-choice',
 options: ['16', '12', '8', '4'],
 correctAnswer: 0, 
 explanation: 'Robin has 4 bird symbols, and each symbol stands for 4 birds. 4 × 4 = 16 robins.'
 },
 {
 id: '41',
 text: 'Reed has to choose from these hats and shirts for a costume. <br><img src="images/42.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following lists all the different ways to combine 1 hat with 1 shirt?',
 type: 'multiple-choice',
 options: [
    {url: 'images/42a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/42d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Each of the 2 hats can go with each of the 2 shirts, so there are 2 × 2 = 4 combinations. Choice H shows all 4.'
 },
 {
 id: '42',
 text: 'The bar graph below shows the favorite kinds of nuts of the students in a class. <br><img src="images/43.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Peanuts were the favorite nut of how many students?',
 type: 'multiple-choice',
 options: ['7', '8', '14', '15'],
 correctAnswer: 3, 
 explanation: 'The bar for peanuts ends halfway between 14 and 16, which is 15.'
 },
 {
 id: '43',
 text: 'Look at the pattern of shapes below. <br><img src="images/44.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>If the pattern continues in the same way, what will be the next shape?',
 type: 'multiple-choice',
 options: [
    {url: 'images/44a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/44d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The pattern repeats: white cross, hourglass, gray cross, oval on a triangle. The last shape shown is the white cross, so the next shape is the hourglass.'
 },
 {
 id: '44',
 text: 'Look at this pattern. <br><img src="images/45.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following shows the same kind of pattern?',
 type: 'multiple-choice',
 options: [
    {url: 'images/45a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/45b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/45c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/45d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The pattern is 1 object, 2 objects, 1 object (gray towel, 2 candies, white towel), repeated. Choice B follows the same pattern: kite, 2 cups, kite.'
 },
 {
 id: '45',
 text: 'Look at the pattern of numbers shown below. <br>85 &nbsp; 82 &nbsp; 79 &nbsp; 76 &nbsp; ___ <br>If the pattern continues in the same way, what will be the next number?',
 type: 'multiple-choice',
 options: ['75', '73', '69', '65'],
 correctAnswer: 1, 
 explanation: 'Each number is 3 less than the one before: 76 − 3 = 73.'
 },
 {
 id: '46',
 text: 'Numbers that go into the machine below are changed to a different number using a rule. <br><img src="images/47.png" class="question-image" alt="Image failed to load. Please try again later."></img> <br>Which of the following could be the rule the machine uses?',
 type: 'multiple-choice',
 options: ['Subtract 19', 'Subtract 11', 'Subtract 10', 'Subtract 9'],
 correctAnswer: 3, 
 explanation: '30 − 9 = 21, 20 − 9 = 11, and 10 − 9 = 1, so the rule is subtract 9.'
 },
 {
 id: '47',
 text: 'Which of the patterns below is based on changes in SIZE?',
 type: 'multiple-choice',
 options: [
    {url: 'images/48a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/48b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/48c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/48d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'In choice F, the flowers change from small to large and back again. The other patterns change color or shape.'
 },
 {
 id: '48',
 text: 'What counting number comes right after 539?',
 type: 'multiple-choice',
 options: ['530', '538', '540', '541'],
 correctAnswer: 2, 
 explanation: '539 + 1 = 540.'
 },
 {
 id: '49',
 text: 'Ginger bought 3 children\'s tickets and some adult tickets for a fair. She bought a total of 11 tickets. How many adult tickets did Ginger buy?',
 type: 'multiple-choice',
 options: ['7', '8', '12', '14'],
 correctAnswer: 1, 
 explanation: '11 − 3 = 8 adult tickets.'
 }
];

// Scaled Score Mapping for Grade 3 Mathematics (2004)
// No raw-to-scaled score table was released with this test, so the Grade 3 Mathematics (2007)
// table is used as an approximation. It maps raw scores (number correct out of 50) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 84,
  2: 129,
  3: 156,
  4: 176,
  5: 192,
  6: 205,
  7: 216,
  8: 226,
  9: 236,
  10: 244,
  11: 252,
  12: 260,
  13: 267,
  14: 274,
  15: 280,
  16: 287,
  17: 293,
  18: 299,
  19: 304,
  20: 310,
  21: 316,
  22: 321,
  23: 327,
  24: 332,
  25: 338,
  26: 343,
  27: 349,
  28: 354,
  29: 360,
  30: 366,
  31: 371,
  32: 377,
  33: 383,
  34: 389,
  35: 396,
  36: 402,
  37: 409,
  38: 416,
  39: 424,
  40: 432,
  41: 440,
  42: 450,
  43: 460,
  44: 471,
  45: 485,
  46: 500,
  47: 520,
  48: 547,
  49: 592,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  // Question 26 of the released test required measuring with a physical ruler and was removed.
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
        testType: 'Grade 3 Mathematics (2004)'
      };
      
      console.log(`Saving Grade 3 Math result: ${rawScore}/${sampleQuestions.length} → ${scaledScore} (${performanceLevel})`);
      
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
        result.testType = 'Grade 3 Mathematics (2004)';
        updated = true;
        console.log(`Enhanced Grade 3 Math result ${index + 1}: ${result.rawScore}/${sampleQuestions.length} → ${result.scaledScore} (${result.performanceLevel})`);
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
            testType: 'Grade 3 Mathematics (2004)'
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
    console.log('Initializing Grade 3 Math independent results system');
    
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
    
    console.log('Grade 3 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();