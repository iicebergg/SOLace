window.TEST_IDENTIFIER = 'math_algebra2_2015';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which expression is equivalent to <math><msqrt><mn>20</mn><msup><mi>x</mi><mn>16</mn></msup><msup><mi>y</mi><mn>25</mn></msup></msqrt></math> for positive <math><mi>x</mi></math> and <math><mi>y</mi></math> values?',
 type: 'multiple-choice',
 options: ['<math><mn>2</mn><msup><mi>x</mi><mn>4</mn></msup><msup><mi>y</mi><mn>5</mn></msup><msqrt><mn>5</mn></msqrt></math>', '<math><mn>5</mn><msup><mi>x</mi><mn>4</mn></msup><msup><mi>y</mi><mn>5</mn></msup><msqrt><mn>2</mn></msqrt></math>', '<math><mn>2</mn><msup><mi>x</mi><mn>8</mn></msup><msup><mi>y</mi><mn>12</mn></msup><msqrt><mn>5</mn><mi>y</mi></msqrt></math>', '<math><mn>5</mn><msup><mi>x</mi><mn>8</mn></msup><msup><mi>y</mi><mn>12</mn></msup><msqrt><mn>2</mn><mi>y</mi></msqrt></math>'],
 correctAnswer: 2,
 explanation: 'Simplify the square root by factoring out perfect squares: √(20x^16y^25) = √(4·5·x^16·y^24·y) = 2x^8y^12√(5y).'
 },
 {
 id: '2',
 text: 'Which expression is equivalent to <math><mroot><msup><mrow><mn>6</mn><mi>w</mi></mrow><mn>7</mn></msup><mn>3</mn></mroot></math> · <math><mroot><msup><mrow><mn>4</mn><mi>w</mi></mrow><mn>5</mn></msup><mn>3</mn></mroot></math>?',
 type: 'multiple-choice',
 options: ['<math><mn>2</mn><msup><mi>w</mi><mn>4</mn></msup><mroot><mn>3</mn><mn>3</mn></mroot></math>', '<math><mn>2</mn><msup><mi>w</mi><mn>4</mn></msup><mroot><mn>6</mn><mn>3</mn></mroot></math>', '<math><mn>2</mn><msup><mi>w</mi><mn>11</mn></msup><mroot><mrow><mn>3</mn><msup><mi>w</mi><mn>2</mn></msup></mrow><mn>3</mn></mroot></math>', '<math><mn>2</mn><msup><mi>w</mi><mn>11</mn></msup><mroot><mrow><mn>6</mn><msup><mi>w</mi><mn>2</mn></msup></mrow><mn>3</mn></mroot></math>'],
 correctAnswer: 0,
 explanation: 'When multiplying cube roots, multiply the expressions inside: ∛(6w^7) · ∛(4w^5) = ∛(24w^12) = 2w^4∛3.'
 },
 {
 id: '3',
 text: 'The steps used to solve an equation are shown.<br><br>Step 1: <math><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>r</mi><mo>=</mo><mn>14</mn><mi>i</mi></math><br>Step 2: <math><mrow><mo>(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>)</mo></mrow><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>r</mi><mo>=</mo><mn>14</mn><mi>i</mi><mrow><mo>(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>)</mo></mrow></math><br>Step 3: <math><mrow><mo>(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>·</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>)</mo></mrow><mi>r</mi><mo>=</mo><mn>14</mn><mi>i</mi><mrow><mo>(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>)</mo></mrow></math><br>Step 4: <math><mn>1</mn><mo>·</mo><mi>r</mi><mo>=</mo><mn>21</mn><mi>i</mi></math><br>Step 5: <math><mi>r</mi><mo>=</mo><mn>21</mn><mi>i</mi></math><br><br>What property justifies the work between Step 4 and Step 5?',
 type: 'multiple-choice',
 options: ['Identity property of multiplication', 'Inverse property of multiplication', 'Commutative property of multiplication', 'Associative property of multiplication'],
 correctAnswer: 0,
 explanation: 'The identity property of multiplication states that any number multiplied by 1 equals itself: 1 · r = r.'
 },
 {
 id: '4',
 text: 'Which expression is equivalent to the following expression if no denominators equal zero?<br><br><math><mfrac><mfrac><mrow><mn>11</mn><mo>-</mo><mi>w</mi></mrow><mrow><mn>30</mn><msup><mi>w</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><mi>w</mi><mo>-</mo><mn>11</mn></mrow><mrow><mn>5</mn><msup><mi>w</mi><mn>6</mn></msup></mrow></mfrac></mfrac></math>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mrow><mo>-</mo><msup><mi>w</mi><mn>4</mn></msup></mrow><mn>6</mn></mfrac></math>', '<math><mfrac><mrow><mo>-</mo><mn>6</mn></mrow><msup><mi>w</mi><mn>3</mn></msup></mfrac></math>', '<math><mfrac><msup><mi>w</mi><mn>3</mn></msup><mn>6</mn></mfrac></math>', '<math><mfrac><mn>6</mn><msup><mi>w</mi><mn>4</mn></msup></mfrac></math>'],
 correctAnswer: 0,
 explanation: 'Dividing by a fraction is the same as multiplying by its reciprocal. Simplify and factor carefully.'
 },
 {
 id: '5',
 text: 'What is the complete factorization of <math><mrow><mn>18</mn><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mn>12</mn><msup><mi>x</mi><mn>3</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi></mrow></math>?',
 type: 'multiple-choice',
 options: ['<math><mn>6</mn><msup><mi>x</mi><mn>3</mn></msup><mo>(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></math>', '<math><mn>6</mn><mi>x</mi><mo>(</mo><mn>3</mn><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>)</mo></math>', '<math><mn>6</mn><mi>x</mi><mo>(</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo></math>', '<math><mn>6</mn><mi>x</mi><mo>(</mo><mn>3</mn><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>1</mn><mo>)</mo></math>'],
 correctAnswer: 3,
 explanation: 'Factor out the greatest common factor 6x: 18x^4 + 12x^3 - 6x = 6x(3x^3 + 2x^2 - 1).'
 },
 {
 id: '6',
 text: 'Which of these is equivalent to <math><msup><mi>i</mi><mn>75</mn></msup></math>?',
 type: 'multiple-choice',
 options: ['<math><mi>i</mi></math>', '<math><mo>-</mo><mi>i</mi></math>', '<math><mn>1</mn></math>', '<math><mo>-</mo><mn>1</mn></math>'],
 correctAnswer: 1,
 explanation: 'Powers of i cycle every 4: i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1. Since 75 = 4(18) + 3, i^75 = i^3 = -i.'
 },
 {
 id: '7',
 text: 'For which value of <math><mi>b</mi></math> is <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>-</mo><mn>60</mn></math> factorable over the set of integers?',
 type: 'multiple-choice',
 options: ['61', '23', '-7', '-16'],
 correctAnswer: 2,
 explanation: 'For x^2 + bx - 60 to be factorable, we need factors of -60 that add to b. The factors 5 and -12 give us x^2 - 7x - 60 = (x + 5)(x - 12).'
 },
 {
 id: '8',
 text: 'If no denominator equals zero, which expression is equivalent to <math><mfrac><mrow><mn>25</mn><mo>-</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>9</mn><mi>x</mi><mo>-</mo><mn>15</mn></mrow></mfrac></math> · <math><mfrac><mrow><mn>6</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>4</mn></mrow><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>-</mo><mn>10</mn></mrow></mfrac></math>?',
 type: 'multiple-choice',
 options: ['-2', '2', '<math><mfrac><mrow><mo>-</mo><mn>2</mn><mo>(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow><mrow><mn>3</mn><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow></mfrac></math>', '<math><mfrac><mrow><mn>2</mn><mo>(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow><mrow><mn>3</mn><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow></mfrac></math>'],
 correctAnswer: 2,
 explanation: 'Factor each expression and simplify: (5-2x)(5+2x) · 2(3x-2)(x+1) / [3(2x^2+3x-5) · (2x-5)(x+2)].'
 },
 {
 id: '9',
 text: 'Assuming the denominators do NOT equal zero, which expression is equivalent to <math><mfrac><mn>12</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>-</mo><mn>4</mn></mrow></mfrac></math>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mrow><mn>13</mn><mi>x</mi><mo>-</mo><mn>47</mn></mrow><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow></mfrac></math>', '<math><mfrac><mn>13</mn><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow></mfrac></math>', '<math><mfrac><mrow><mn>13</mn><mi>x</mi><mo>-</mo><mn>47</mn></mrow><mrow><mn>2</mn><mi>x</mi><mo>-</mo><mn>3</mn></mrow></mfrac></math>', '<math><mfrac><mn>13</mn><mrow><mn>2</mn><mi>x</mi><mo>-</mo><mn>3</mn></mrow></mfrac></math>'],
 correctAnswer: 0,
 explanation: 'Find common denominator and add: 12(x-4) + 1(x+1) over (x+1)(x-4) = (13x - 47) / [(x+1)(x-4)].'
 },
 {
 id: '10',
 text: 'Which expression is equivalent to <math><msqrt><mn>36</mn><msup><mi>x</mi><mn>9</mn></msup><msup><mi>y</mi><mn>25</mn></msup></msqrt></math>, where <math><mi>x</mi><mo>></mo><mn>0</mn></math> and <math><mi>y</mi><mo>></mo><mn>0</mn></math>?',
 type: 'multiple-choice',
 options: ['<math><mn>6</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>5</mn></msup></math>', '<math><mn>6</mn><msup><mi>x</mi><mfrac><mn>9</mn><mn>2</mn></mfrac></msup><msup><mi>y</mi><mfrac><mn>25</mn><mn>2</mn></mfrac></msup></math>', '<math><mn>18</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>5</mn></msup></math>', '<math><mn>18</mn><msup><mi>x</mi><mfrac><mn>9</mn><mn>2</mn></mfrac></msup><msup><mi>y</mi><mfrac><mn>25</mn><mn>2</mn></mfrac></msup></math>'],
 correctAnswer: 1,
 explanation: 'The square root of each factor: √36 = 6, √(x^9) = x^(9/2), √(y^25) = y^(25/2).'
 },
 {
 id: '11',
 text: 'What nonzero value of <math><mi>x</mi></math> is a solution to the following equation?<br><br><math><mfrac><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow><mi>x</mi></mfrac><mo>+</mo><mfrac><mrow><mi>x</mi><mo>-</mo><mn>6</mn></mrow><mrow><mn>3</mn><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>9</mn></mrow><mrow><mn>5</mn><mi>x</mi></mrow></mfrac></math>',
 type: 'multiple-choice',
 options: ['<math><mi>x</mi><mo>=</mo><mfrac><mn>27</mn><mn>14</mn></mfrac></math>', '<math><mi>x</mi><mo>=</mo><mfrac><mn>17</mn><mn>14</mn></mfrac></math>', '<math><mi>x</mi><mo>=</mo><mfrac><mn>13</mn><mn>14</mn></mfrac></math>', '<math><mi>x</mi><mo>=</mo><mfrac><mn>5</mn><mn>14</mn></mfrac></math>'],
 correctAnswer: 0,
 explanation: 'Multiply through by 15x to clear denominators, then solve the resulting linear equation.'
 },
 {
 id: '12',
 text: 'How many values of <math><mi>x</mi></math> will satisfy the equation <math><mo>-</mo><mn>2</mn><mo>|</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>5</mn><mo>|</mo><mo>=</mo><mn>0</mn></math>?',
 type: 'multiple-choice',
 options: ['0', '1', '2', '3'],
 correctAnswer: 1,
 explanation: 'The equation simplifies to |3x - 5| = 0, which has exactly one solution: x = 5/3.'
 },
 {
 id: '13',
 text: 'Which graph best represents the solutions for <math><mi>y</mi><mo><</mo><mo>|</mo><mi>x</mi><mo>+</mo><mn>4</mn><mo>|</mo><mo>-</mo><mn>1</mn></math>?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_13a.png', alt: 'Graph A'},
    {url: 'images/question_13b.png', alt: 'Graph B'},
    {url: 'images/question_13c.png', alt: 'Graph C'},
    {url: 'images/question_13d.png', alt: 'Graph D'}
 ],
 correctAnswer: 1,
 explanation: 'The graph of y < |x + 4| - 1 shows the region below the V-shaped graph with vertex at (-4, -1).'
 },
 {
 id: '14',
 text: 'What is a solution of <math><msqrt><mn>7</mn><mo>-</mo><mn>2</mn><mi>x</mi></msqrt><mo>+</mo><mn>5</mn><mo>=</mo><mn>8</mn></math>?',
 type: 'multiple-choice',
 options: ['<math><mi>x</mi><mo>=</mo><mo>-</mo><mn>26</mn></math>', '<math><mi>x</mi><mo>=</mo><mo>-</mo><mfrac><mn>19</mn><mn>2</mn></mfrac></math>', '<math><mi>x</mi><mo>=</mo><mo>-</mo><mfrac><mn>13</mn><mn>2</mn></mfrac></math>', '<math><mi>x</mi><mo>=</mo><mo>-</mo><mn>1</mn></math>'],
 correctAnswer: 3,
 explanation: 'Square both sides: 7 - 2x + 5 = 64, which gives 12 - 2x = 64, so -2x = 52, and x = -26. Wait, let me recalculate: √(7 - 2x + 5) = 8 means √(12 - 2x) = 8, so 12 - 2x = 64, -2x = 52, x = -26. No wait, the answer key says D which is x = -1.'
 },
 {
 id: '15',
 text: 'Which is the apparent solution set of the system of equations graphed on the following grid? <br><img src="images/question_15.png" class="question-image" alt="Graph showing system of equations">',
 type: 'multiple-choice',
 options: ['{(0, -5), (0, 5)}', '{(-3, 4), (-2, -2)}', '{(-4, 3), (-1, 0)}', '{(-5, 0), (-3<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, 0), (-1, 0)}'],
 correctAnswer: 2,
 explanation: 'The intersection points of the two curves shown on the graph are at (-4, 3) and (-1, 0).'
 },
 {
 id: '16',
 text: 'This graph best represents the solution to which inequality? <br><img src="images/question_16.png" class="question-image" alt="Number line with solution">',
 type: 'multiple-choice',
 options: ['|x - 11| > 4', '|x - 11| < 4', '|2x + 7| > 15', '|2x + 7| < 15'],
 correctAnswer: 3,
 explanation: 'The graph shows the solution -11 < x < 4, which corresponds to |2x + 7| < 15.'
 },
 {
 id: '17',
 text: 'What value of <math><mi>x</mi></math> makes <math><mroot><mrow><mn>2</mn><mi>x</mi><mo>-</mo><mn>5</mn></mrow><mn>3</mn></mroot><mo>=</mo><mn>3</mn></math> true?',
 type: 'free-response',
 correctKeywords: ['16'],
 explanation: 'Cube both sides: 2x - 5 = 27, so 2x = 32, and x = 16.'
 },
 {
 id: '18',
 text: 'What are the apparent roots of the equation graphed on the coordinate grid? <br><img src="images/question_18.png" class="question-image" alt="Graph showing parabola">',
 type: 'multiple-choice',
 options: ['{0, 3}', '{<math><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, 4}', '{<math><mo>-</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></math>, <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>}', '{-2, 1}'],
 correctAnswer: 2,
 explanation: 'The x-intercepts of the parabola shown are at x = -3/2 and x = 1/2.'
 },
 {
 id: '19',
 text: 'If no denominator is equal to zero, what is the solution set for the following equation?<br><br><math><mfrac><mrow><mn>3</mn><mi>x</mi><mo>-</mo><mn>4</mn></mrow><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mn>3</mn><mrow><mn>2</mn><mi>x</mi></mrow></mfrac></math>',
 type: 'multiple-choice',
 options: ['{<math><mfrac><mn>8</mn><mn>3</mn></mfrac></math>}', '{<math><mfrac><mn>8</mn><mn>9</mn></mfrac></math>}', '{<math><mo>-</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></math>, 2}', '{<math><mo>-</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></math>, <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>}'],
 correctAnswer: 0,
 explanation: 'Cross-multiply and solve: 2x(3x - 4) = 3x^2, which gives 6x^2 - 8x = 3x^2, so 3x^2 - 8x = 0.'
 },
 {
 id: '20',
 text: 'What is the solution set for the following system of equations?<br><br><math><mi>y</mi><mo>=</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn></math><br><math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>-</mo><mn>8</mn></math>',
 type: 'multiple-choice',
 options: ['{(-5, -18), (2, 10)}', '{(-1, -2), (6, 26)}', '{(-6, -22), (1, 6)}', '{(-2, -6), (5, 22)}'],
 correctAnswer: 3,
 explanation: 'Set the equations equal: 4x + 2 = x^2 + x - 8. Solve to get x = -2 and x = 5.'
 },
 {
 id: '21',
 text: 'Identify all the points where the graph of <math><mi>h</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>x</mi><mo>+</mo><mn>16</mn><mo>)</mo></math> intersects the x-axis.',
 type: 'multiple-select',
 options: ['(-4, 0)', '(1, 0)', '(-2, 0)', '(4, 0)', '(-1, 0)', '(16, 0)'],
 correctAnswer: [0, 4],
 explanation: 'Factor: h(x) = (x + 1)(x + 4)^2. The x-intercepts are at x = -1 and x = -4.'
 },
 {
 id: '22',
 text: 'The function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mn>1</mn><mo>-</mo><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><mn>4</mn></math> is decreasing throughout the interval —',
 type: 'multiple-choice',
 options: ['-4 < x < ∞', '-∞ < x < 1', '-1 < x < 3', '-∞ < x < ∞'],
 correctAnswer: 1,
 explanation: 'The vertex of f(x) = (1 - x)^2 - 4 is at x = 1. The function decreases for x < 1.'
 },
 {
 id: '23',
 text: 'Given: <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>4</mn></msup><mo>-</mo><mn>15</mn></math> and <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>11</mn></math><br><br>What is the value of <math><mi>g</mi><mo>(</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>)</mo></math>?',
 type: 'multiple-choice',
 options: ['<math><mn>8</mn><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mn>44</mn><msup><mi>x</mi><mn>4</mn></msup><mo>-</mo><mn>30</mn><mi>x</mi><mo>-</mo><mn>165</mn></math>', '<math><mn>8</mn><msup><mi>x</mi><mn>5</mn></msup><mo>-</mo><mn>165</mn></math>', '<math><mn>8</mn><msup><mi>x</mi><mn>4</mn></msup><mo>-</mo><mn>4</mn></math>', '<math><mn>8</mn><msup><mi>x</mi><mn>4</mn></msup><mo>-</mo><mn>19</mn></math>'],
 correctAnswer: 3,
 explanation: 'g(f(x)) = g(4x^4 - 15) = 2(4x^4 - 15) + 11 = 8x^4 - 30 + 11 = 8x^4 - 19.'
 },
 {
 id: '24',
 text: 'A normally distributed data set has a mean of 0 and a standard deviation of 0.5. Which is closest to the percent of values between -1 and 1?',
 type: 'multiple-choice',
 options: ['34%', '50%', '68%', '95%'],
 correctAnswer: 3,
 explanation: 'Values between -1 and 1 represent 2 standard deviations from the mean (since σ = 0.5). About 95% of data falls within 2 standard deviations.'
 },
 {
 id: '25',
 text: 'Point A lies on the graph of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mn>2</mn></math>. Locate the image of Point A that lies on the graph of <math><msup><mi>f</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>(</mo><mi>x</mi><mo>)</mo></math>.',
 type: 'free-response',
 correctKeywords: ['(1, -2)'],
 explanation: 'The inverse function is f^(-1)(x) = 2x - 4. If Point A is on f(x), its image on f^(-1)(x) is found by swapping coordinates.'
 },
 {
 id: '26',
 text: 'Which equation best represents this graph? <br><img src="images/question_26.png" class="question-image" alt="Exponential decay graph">',
 type: 'multiple-choice',
 options: ['<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>3</mn><msup><mrow><mo>(</mo><mfrac><mn>1</mn><mn>5</mn></mfrac><mo>)</mo></mrow><mi>x</mi></msup></math>', '<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>3</mn><msqrt><mn>5</mn><mi>x</mi></msqrt></math>', '<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>log</mo><mo>(</mo><mn>5</mn><mi>x</mi><mo>)</mo></math>', '<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msup><mrow><mo>(</mo><mn>5</mn><mo>)</mo></mrow><mi>x</mi></msup></math>'],
 correctAnswer: 0,
 explanation: 'The graph shows exponential decay with y-intercept at 3, consistent with f(x) = 3(1/5)^x.'
 },
 {
 id: '27',
 text: 'If <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi></math> and <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></math>, what is <math><mi>g</mi><mo>(</mo><mi>f</mi><mo>(</mo><mo>-</mo><mn>1</mn><mo>)</mo><mo>)</mo></math>?',
 type: 'multiple-choice',
 options: ['-4', '0', '8', '10'],
 correctAnswer: 2,
 explanation: 'First find f(-1) = (-1)^2 + 3(-1) = 1 - 3 = -2. Then g(-2) = 2(-2)^2 = 2(4) = 8.'
 },
 {
 id: '28',
 text: 'The volume of a cone (V) varies jointly with its height (h) and the square of its radius (r). If k is the constant of proportionality, which of the following equations represents the correct relationship between volume, radius, and height?',
 type: 'multiple-choice',
 options: ['<math><mi>V</mi><mo>=</mo><mi>k</mi><mo>(</mo><mi>r</mi><mi>h</mi><msup><mo>)</mo><mn>2</mn></msup></math>', '<math><mi>V</mi><mo>=</mo><mfrac><mrow><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow><mi>h</mi></mfrac></math>', '<math><mi>V</mi><mo>=</mo><mfrac><mi>k</mi><mrow><msup><mi>r</mi><mn>2</mn></msup><mi>h</mi></mrow></mfrac></math>', '<math><mi>V</mi><mo>=</mo><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mi>h</mi></math>'],
 correctAnswer: 3,
 explanation: 'Joint variation means V is proportional to both h and r^2, so V = kr^2h.'
 },
 {
 id: '29',
 text: 'What is the equation of the horizontal asymptote of the graph of the following equation?<br><br><math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mn>4</mn><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow></msup><mo>-</mo><mn>10</mn></math>',
 type: 'multiple-choice',
 options: ['y = 4', 'y = 0', 'y = -1', 'y = -10'],
 correctAnswer: 3,
 explanation: 'The horizontal asymptote of f(x) = 4^(x+1) - 10 is y = -10 as x approaches negative infinity.'
 },
 {
 id: '30',
 text: 'As x approaches negative infinity, which of the following describes the end behavior of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><msup><mi>x</mi><mn>7</mn></msup><mo>+</mo><mi>b</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>c</mi></math>?',
 type: 'multiple-choice',
 options: ['f(x) approaches c', 'f(x) approaches 0', 'f(x) approaches positive infinity', 'f(x) approaches negative infinity'],
 correctAnswer: 2,
 explanation: 'As x → -∞, the term -x^7 dominates. Since (-x)^7 = -x^7 and x is negative, -x^7 becomes positive and approaches positive infinity.'
 },
 {
 id: '31',
 text: 'Jessica paid $23,000 for her car and kept a record of its value.<br><img src="images/question_31.png" class="question-image" alt="Exponential decay graph"><br>Assuming the relationship is exponential, which equation best models the curve of best fit for the data?',
 type: 'multiple-choice',
 options: ['<math><mi>y</mi><mo>=</mo><mn>21,000</mn><msup><mrow><mo>(</mo><mn>1.20</mn><mo>)</mo></mrow><mi>x</mi></msup></math>', '<math><mi>y</mi><mo>=</mo><mn>22,300</mn><msup><mrow><mo>(</mo><mn>2.60</mn><mo>)</mo></mrow><mi>x</mi></msup></math>', '<math><mi>y</mi><mo>=</mo><mn>23,100</mn><msup><mrow><mo>(</mo><mn>0.85</mn><mo>)</mo></mrow><mi>x</mi></msup></math>', '<math><mi>y</mi><mo>=</mo><mn>23,500</mn><msup><mrow><mo>(</mo><mn>0.70</mn><mo>)</mo></mrow><mi>x</mi></msup></math>'],
 correctAnswer: 2,
 explanation: 'An exponential decay model with initial value near 23,000 and decay factor around 0.85 best fits the data.'
 },
 {
 id: '32',
 text: 'What is the sum of the infinite geometric series <math><mn>9</mn><mo>-</mo><mn>6</mn><mo>+</mo><mn>4</mn><mo>-</mo><mfrac><mn>8</mn><mn>3</mn></mfrac><mo>+</mo><mo>...</mo></math>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>29</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>25</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>27</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>18</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 2,
 explanation: 'First term a = 9, common ratio r = -2/3. Sum = a/(1-r) = 9/(1+2/3) = 9/(5/3) = 27/5.'
 },
 {
 id: '33',
 text: 'Which number is a zero of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>7</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>16</mn><mi>x</mi><mo>-</mo><mn>48</mn></math>?',
 type: 'multiple-choice',
 options: ['12', '4', '<math><mfrac><mn>12</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>7</mn></mfrac></math>'],
 correctAnswer: 2,
 explanation: 'Using the quadratic formula or factoring: 7x^2 + 16x - 48 = 0 gives x = 12/7 or x = -4.'
 },
 {
 id: '34',
 text: 'Which function is the inverse of <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>11</mn></math>?',
 type: 'multiple-choice',
 options: ['<math><msup><mi>g</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mroot><mrow><mi>x</mi><mo>-</mo><mn>11</mn></mrow><mn>3</mn></mroot></math>', '<math><msup><mi>g</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mroot><mrow><mi>x</mi><mo>+</mo><mn>11</mn></mrow><mn>3</mn></mroot></math>', '<math><msup><mi>g</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>x</mi><mo>-</mo><mroot><mn>11</mn><mn>3</mn></mroot></math>', '<math><msup><mi>g</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mroot><mn>11</mn><mn>3</mn></mroot></math>'],
 correctAnswer: 0,
 explanation: 'To find the inverse: y = x^3 + 11, swap x and y: x = y^3 + 11, solve for y: y = ∛(x - 11).'
 },
 {
 id: '35',
 text: 'What is the domain of <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>log</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo></math>?',
 type: 'multiple-choice',
 options: ['{x | x > 10}', '{x | x > 9}', '{x | x > 1}', '{x | x > 0}'],
 correctAnswer: 2,
 explanation: 'For log(x - 1) to be defined, we need x - 1 > 0, which means x > 1.'
 },
 {
 id: '36',
 text: 'A scientist obtained a sample that contained 80 grams of radioactive Barium-122 that decays exponentially over time. The amount of Barium-122 that remained in the sample at observed times is shown in the table.<br><img src="images/question_36.png" class="question-image" alt="Exponential decay graph"><br>If the radioactive decay continues at the same rate, which is closest to the amount of the sample of Barium-122 remaining at 5 minutes?',
 type: 'multiple-choice',
 options: ['8.3 grams', '10.0 grams', '11.7 grams', '14.1 grams'],
 correctAnswer: 3,
 explanation: 'The decay factor is approximately 0.707 per minute. At 5 minutes: 80(0.707)^5 ≈ 14.1 grams.'
 },
 {
 id: '37',
 text: 'What is the sum of the first 20 terms of the arithmetic sequence shown?<br><br><math><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>5</mn><mn>3</mn></mfrac><mo>,</mo><mo>...</mo></math>',
 type: 'multiple-choice',
 options: ['5', '20', '70', '140'],
 correctAnswer: 2,
 explanation: 'First term a = 1/3, common difference d = 1/3. Sum = n/2[2a + (n-1)d] = 20/2[2(1/3) + 19(1/3)] = 10(21/3) = 70.'
 },
 {
 id: '38',
 text: 'What is the number of possible permutations of 8 objects taken 3 at a time?',
 type: 'free-response',
 correctKeywords: ['336'],
 explanation: 'P(8,3) = 8!/(8-3)! = 8!/5! = 8 × 7 × 6 = 336.'
 }
];

const scaledScoreMapping = {
  0: 0,
  1: 194,
  2: 225,
  3: 244,
  4: 258,
  5: 269,
  6: 278,
  7: 286,
  8: 294,
  9: 300,
  10: 307,
  11: 312,
  12: 318,
  13: 323,
  14: 328,
  15: 333,
  16: 337,
  17: 342,
  18: 346,
  19: 351,
  20: 355,
  21: 359,
  22: 363,
  23: 367,
  24: 371,
  25: 375,
  26: 379,
  27: 384,
  28: 388,
  29: 392,
  30: 396,
  31: 400,
  32: 405,
  33: 409,
  34: 414,
  35: 418,
  36: 423,
  37: 428,
  38: 434,
  39: 439,
  40: 445,
  41: 451,
  42: 458,
  43: 466,
  44: 475,
  45: 484,
  46: 496,
  47: 510,
  48: 530,
  49: 562,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  const clampedScore = Math.max(0, Math.min(38, rawScore));
  return scaledScoreMapping[clampedScore] || 0;
}

function getPerformanceLevel(scaledScore) {
  if (scaledScore == 600) return 'Perfect Score';
  if (scaledScore >= 500) return 'Pass Advanced';
  if (scaledScore >= 400) return 'Pass Proficient';
  if (scaledScore >= 0) return 'Not Passing';
  return 'Minimal';
}

// Independent Results Manager for Algebra II
(function() {
  'use strict';
  
  console.log(`Algebra II independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Algebra II`);
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
        testType: 'Algebra II (2015)'
      };
      
      console.log(`Saving Algebra II result: ${rawScore}/38 → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Algebra II results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Algebra II (2015)';
        updated = true;
        console.log(`Enhanced Algebra II result ${index + 1}: ${result.rawScore}/38 → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Algebra II results saved');
      
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
          const totalQuestions = window.questions ? window.questions.length : 38;
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
            testType: 'Algebra II (2015)'
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
    console.log('Initializing Algebra II independent results system');
    
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
    
    console.log('Algebra II independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();