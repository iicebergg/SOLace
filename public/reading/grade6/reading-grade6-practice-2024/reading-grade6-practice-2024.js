window.TEST_IDENTIFIER = 'reading_grade6_practice_2024';

// Reading passages that can be referenced by multiple questions
const readingPassages = {
  'view': {
    title: 'A Different View',
    content: `
     <ol class="paragraph-numbers">
      <li>Twelve-year-old Quinterro stood at the edge of the mountain pass high above the city of Lima, Peru. He aimed his binoculars at the city below. It was late afternoon, and lights were starting to sparkle. Quinterro scanned the streets and the buildings, letting the binoculars bring the busy place into focus for him. He picked a mark on the old main street of Lima, adjusted the lenses, and stood still for a few minutes.</li>

      <li>Lowering the binoculars, Quinterro looked back at his family. He squirmed as he thought of his life, day after hot summer day, watching the llamas. Supper was cooking slowly on the fire. Quinterro’s older brother Ireneo was talking quietly to his father. Behind them the llamas munched on the scrubby mountain grass. Quinterro sighed. His family seemed so content. Why couldn’t he feel the same? Operating a llama caravan over the mountain wasn’t exciting, but there were some benefits. He ran through the list in his head: trading old toys for new ones, keeping in shape for school sports, gazing across the city every chance he had. Quinterro looked down at the binoculars in his hand.</li>

      <li>“Quint!” exclaimed Ireneo. “I’ve told you a million times to pay attention!”</li>

      <li>Ireneo was scrambling toward the llamas. Quinterro aimed the binoculars toward the mountain pass only to see that he was too late. Another caravan with llamas had reached the clearing, and the day’s peace was instantly disturbed. The new llamas smelled the other animals and bolted. Quinterro watched as a girl his age chased after one of the jumpy animals, and then he looked back at his brother. Ireneo had climbed partway up a steep incline to reach the nervous llamas.</li>

      <li>Hurrying across the clearing to help, Quinterro shifted his binoculars so they hung down his back. He and Ireneo led the llamas back to the clearing, and Ireneo gave the strap around Quinterro’s neck a slight tug.</li>

      <li>“I thought you needed these to watch for other caravans,” Ireneo shouted with irritation.</li>

      <li>Quinterro did not respond to Ireneo. Instead, he glanced around until he spotted the girl he had been watching earlier. She spoke in a soft and gentle voice. She seemed to be making friends with the llamas. Quinterro headed back across the clearing.</li>

      <li>“I think they’re almost calmed down,” the girl said as Quinterro approached.</li>

      <li>“Ours too,” Quinterro said.</li>

      <li>“My name is Marta,” the girl said.</li>

      <li>Quinterro introduced himself. For a minute, there was nothing but the sound of llamas chewing grass. Then Marta spoke. “I’m curious,” she said. “Do you do this all the time?”</li>

      <li>“My family does. I help out during school breaks,” Quinterro said.</li>

      <li>Marta smiled. “I live in the city, and every day I look up at these mountains and wonder where they go. This place looks so beautiful from below. When my cousin said he was joining a caravan, I begged to come along.”</li>

      <li>Quinterro simply stared at her, disbelieving what he had heard, but Marta didn’t seem to notice. He was surprised that anyone would choose to leave the exciting city for the quiet mountains.</li>

      <li>“The city looks so different from up here,” Marta said as she looked down.</li>

      <li>A thought occurred to Quinterro, and he took the binoculars from around his neck. “Try these.”</li>

      <li>He passed the binoculars to Marta and then turned to look down at the city. When not magnified, the city looked smaller and duller. He was just about to ask for his binoculars back when Marta spoke.</li>

      <li>“I think they’re broken,” she said.</li>

      <li>Curious, Quinterro reached for the binoculars and held them to his eyes. The bushes in front of him were huge like green mountains. He saw every leaf and every branch in vivid detail. He aimed the binoculars at the llamas, at the mountain pass, and then at his family. Everything seemed bigger, closer, and more defined.</li>

      <li>Next, he aimed the binoculars at the city below. It was completely out of focus. Quinterro adjusted the lenses to focus them on the city. With a smile, he handed the binoculars back to Marta.</li>

      <li>“They’re not broken,” Quinterro said. “It depends on how you look through them.”</li>
</ol>
    `
  },

  'fire': {
    title: 'Along the Ring of Fire',
    content: `
    <ol class="paragraph-numbers">
      <li>Off the coast of Alaska, molten rock rises through cracks in the floor of the Pacific Ocean. This superheated material known as magma oozes like toothpaste squeezed from a tube. Stretching, grumbling, and erupting, Earth slowly builds a new island.</li>

      <li>Along the Pacific coast of South America, one part of the planet’s surface gradually drifts toward another. Although difficult to believe, the rocky outer crust of Earth is not solid; rather, it is broken up into gigantic pieces called plates. Up to 250 miles thick, the plates, which float on top of a softer layer of hot rock, move at a pace of 0.39 to 3.94 inches per year. As the plates slide past one another, the action can sometimes result in volcanic activity.</li>

    <img src="images/ring_of_fire.png" alt="Image failed to load. Please try again later." style="float: right; height: 120px; margin-left: 10px;">

      <li>These dramatic events take place thousands of miles apart, yet they are connected. Surrounding the Pacific Ocean is a circle of volcanoes that includes more than half of the world’s active volcanoes. While many are sleeping giants, others spew lava and toss ash and rock into the air. This region is called the Ring of Fire.</li>

      <li>The Ring of Fire stretches from the west coast of South America northward to Alaska. It curves west at the Aleutian Islands and crosses the Pacific Ocean. Then it heads down the east coast of Asia toward New Zealand.</li>

      <p><b>Historical Eruptions</b></p>
      <li>Major volcanic eruptions along the Ring of Fire make history. In 1883 Krakatoa, an island volcano at the western edge of the ring, erupted in four explosions. The third explosion was so loud that it could be clearly heard 3,000 miles away. Krakatoa heaved a massive dust cloud nearly 50 miles into the air. For a year, that cloud covered Earth and changed the weather worldwide. Areas near the eruption remained dark from dust for days. Even three years later, volcanic debris in the atmosphere caused red sunsets thousands of miles away.</li>

      <li>Closer to home, Mount St. Helens, a volcano in the Cascade Range in the state of Washington, erupted in 1980. Although Mount St. Helens did not spew lava, it did cause tremendous damage. This eruption hurled a cloud of superheated ash, dirt, rock, and gases into the air. The ash blew eastward and was thick enough to disrupt travel. The side of the mountain fell away, causing a landslide.</li>

      <li>In 1991 Mount Pinatubo in the Philippines erupted after 600 quiet years. During four days in June, Pinatubo released more than 20 million tons of debris into the air, destroying many homes.</li>

      <li>Some volcanoes erupt more quietly, with lava oozing through the cracks in Earth’s surface. This type of volcano is found in Hawaii. Fluid lava from a volcano such as Kilauea tends to advance slowly but still causes extensive damage. Deep beneath the surface of the ocean, the Ring of Fire is destructive, but it is constructive too. How can a volcano destroy and build at the same time?</li>

      <p><b>How Volcanoes Can Be Helpful</b></p>
      <li>After a volcano erupts, lava flows and then hardens into rock. More lava adds another layer to the rock. Eventually the rock builds into either a mountain or an island. Many years must pass before the harsh surface of the new island can sustain life. Over time the hard volcanic rock crumbles into soil. Wind carries seeds that fall into the soil and take root. Islands soon become covered with dense plant life. Flowers and fruits attract birds, insects, and other animals.</li>

      <li>Island chains such as Japan, New Zealand, and Hawaii formed as a result of volcanic activity. Mount Fuji in Japan is one of these volcanoes, though it is not an active one. It is said to be a dormant, or sleeping, volcano for the time being. Part of a national park, it has not been active in hundreds of years. Farmers even plant crops in fields along the slopes of Mount Fuji.</li>

      <li>The Ring of Fire is constructive in other ways too. Its activity not only forms islands; it also provides useful materials. Volcanic rock contains reserves of minerals commonly used in everyday life. Large deposits of aluminum, nickel, zinc, and copper are found in volcanic rock all over the world. Forms of aluminum appear on grocery store shelves as foil and cans. Nickel, zinc, and copper have dozens of uses, including the copper wire and pipes found in most homes.</li>

      <li>Volcanic activity creates some of the most spectacular fireworks found in nature. True, destruction lies behind the fireworks, but eventually new life rises from the ruins. If the Ring of Fire seems distant and unreal, remember that it also exists as an island awaiting new life, as a field for growing food, and as part of the pipes that make a home.</li>
</ol>
    `
  },

  'secret_message': {
    title: 'Want to Send a Secret Message?',
    content: `
      <p><i>Here are three amazing ways to do it!</i></p>
      
      <p>Secret messages have been around for hundreds of years. Spies used them to pass important information without being caught. The next time you want to send a secret message, try one of these fun ideas!</p>
      
<div class="passage-innerbox">
<img src="images/lemony-letter.png" alt="Lemony Letter" style="float: right; height: 100px; margin-left: 10px;">
      <p><b>Lemony Letter</b></p>
      <p><u>What you will need:</u>
      <ul>
      <li>A lemon</li>
      <li>A knife</li>
      <li>A small cup</li>
      <li>A thin paintbrush</li>
      <li>A piece of white paper</li>
      <li>A lamp</li>
      </ul></p>
      
      <p><ol>
      <li>To have enough juice, gently roll the lemon back and forth against the table with your palm.</li>
      <li>Have a grownup cut the lemon in half.</li>
      <li>Squeeze the lemon so the juice drips into the cup.</li>
      <li>Dip the paintbrush into the juice and write a message on the paper. When the "ink" dries, the paper will appear blank.</li>
      <li>Give your secret message to a friend or family member.</li>
      <li>Have the person who receives your message hold the paper near a light bulb. The heat will make the secret message appear! The lemon juice will turn a brown color.</li>
      </ol></p>
</div>

<div class="passage-innerbox">
<img src="images/mirror-message.png" alt="Mirror Message" style="float: right; height: 100px; margin-left: 10px;">
      <p><b>Mirror Message</b></p>
      <p><u>What you will need:</u>
      <ul>
      <li>A potato</li>
      <li>A potato peeler of knife</li>
      <li>A bathroom mirror</li>
      </ul></p>
      
      <p><ol>
      <li>Ask a grownup to peel the skin from one end of the potato.</li>
      <li>Using the peeled end of the potato, write a message in big letters on the bathroom mirror.</li>
      <li>Your message will be <u>invisible</u> until you take a bath or shower. When you take a shower or bath, close the door so the steam stays in the bathroom. Steam from the hot water will appear on the mirror and make your message show.</li>
      </ol></p>

      <p>Surprise someone else! Write a message on the bathroom mirror for a family member. See how long it takes for the person to discover your secret message.</p>
</div>

<div class="passage-innerbox">
<img src="images/crazy-crayon.png" alt="Crazy Crayon" style="float: right; height: 100px; margin-left: 10px;">
      <p><b>Crazy Crayon</b></p>
      <p><u>What you will need:</u>
      <ul>
      <li>A piece of white paper</li>
      <li>A white crayon</li>
      <li>Dark-colored paint</li>
      <li>A paintbrush</li>
      </ul></p>
      
      <p><ol>
      <li>Using the white crayon, write your message on the paper. It will be difficult to see the markings, so be careful.</li>
      <li>Give your secret message to a friend.</li>
      <li>Have your friend use the paintbrush to spread the paint over the paper. The message will appear on the paper as the person paints.</li>
      </ol></p>

      <p>It's amazing! The paint does not stick to the waxy crayon, so the words will show through.</p>
</div>
    `
  },

   'hidden_treasure': {
    title: 'A Hidden Treasure',
    content: `
    <ol class="paragraph-numbers">
      <li>Evan and his 16-year-old brother, Mark, liked spending time with their grandmother. Today, though, Grandma was busy painting.</li>

      <li>"May I help you paint your kitchen, Grandma?" asked Evan.</li>

      <li>"Your mom is helping me," Grandma replied with a smile. "Maybe you could play a game with Mark. I have some games in the attic."</li>

      <li>The brothers nodded. They climbed the steps and opened the attic door to look for the games.</li>

      <li>Instead of a game, Evan found an old journal in a dusty trunk. He opened the pages and discovered a map! The drawing showed Grandma's house, a raindrop inside a square, two little triangles, and a dock. Best of all, a large "X" marked the "Greatest Fishing Spot," which was near the dock.</li>

      <li>Excitedly, Evan asked Mark, "Do you think we can find this fishing spot?"</li>

      <li>Mark took a closer look at the map. "Let's try," he said, and they thundered down the steps.</li>

      <li>"Mom, we're going outside on a treasure hunt!" Evan shouted from the back door.</li>

      <li>"Okay," Mom laughed, shaking her head.</li>

      <li>"The square with the raindrop is behind Grandma's house," Mark said, narrowing his eyes as he examined the map.</li>

      <li>When he looked up, Mark noticed a faded blue spot on the water tower nearby. "Look!" he exclaimed. "The water tower once had a raindrop painted on it. That must be it."</li>

      <li>Next, the boys searched for the two small triangles near the tower. Before long, Evan patted the trunks of two pine trees.</li>

      <li>"These trees must be the triangles on the map," he decided. "They're in the right places."</li>

      <li>"Now we just need to find the dock," Mark said. The two boys searched the riverside near the trees, but they found only weeds.</li>

      <li>Evan finally suggested that Grandma might remember the old dock.</li>

      <li>The boys rushed into the kitchen with their question as Grandma and Mom were washing their paintbrushes.</li>

      <li>"That dock was torn down a long time ago," Grandma explained. "How did you know about it?" she puzzled.</li>

      <li>The boys presented the map, and Mom smiled. "That's my map I made when I was a young girl. Grandma and I loved fishing from the old dock."</li>

      <li>"Wow! Could you take us to that place? The dock is no longer there, but maybe it's still a great fishing spot," Evan said hopefully.</li>

      <li>Grandma smiled, remembering the times she spent with Mom. "Sure," she agreed. "Let's see if the fish still like it there."</li>

      <li>"I'll get our fishing poles," Evan offered. The map had certainly led to a treasure and a chance to spend time with Grandma.</li>
</ol>
    `
  },

   'ostrich': {
    title: 'The Ostrich: One Odd Bird',
    content: `
    <ol class="paragraph-numbers">
    <img src="images/ostrich.png" alt="Ostrich" style="float: right; height: 250px; margin-left: 10px;">
      <li>Ostriches hold the record as the largest birds in the world. A male can grow to nine feet tall. That is about three feet taller than most men. How do these giants spend their days?</li>

      <p><b>Life in a Bird Herd</b></p>
      <li>Ostriches live in groups called herds. One male is the leader. He uses his strong legs to dig a hole for a nest. The herd only needs one nest because all the females lay their eggs in it. The male and one of the females take turns guarding and sitting on the eggs.</li>

      <li>When the chicks hatch from the eggs, they are covered with yellow fuzz and black spots. Their colors match the sandy ground. This coloring helps them hide from dangerous animals. The mother and father ostrich protect the chicks too. Before long, feathers replace the fuzz on the chicks. Their new fluffy feathers trap air and keep the chicks warm at night.</li>

      <li>The young birds learn to peck the ground and eat plants by watching older ostriches. They eat mostly plants, seeds, and roots but will also eat insects and small lizards. This diet helps the chicks grow quickly, almost a foot each month!</li>

      <p><b>Speedy Runners</b></p>
      <li>Although these birds cannot fly, powerful legs help them move quickly. Ostriches can bolt across the ground at 43 miles per hour. They keep their wings outstretched while running. This helps them keep their balance, especially when changing direction.</li>

      <p><b>Staying Safe</b></p>
      <li>With such speed, ostriches outrun most predators, but they know how to defend themselves too. Their strong legs can deliver a kick that stops a lion! Ostriches use another trick to stay safe. They sit down on the ground, rest their heads on the sand, and lie very still. The sand blends with the color of the ostriches so other animals do not notice them.</li>

      <li>Today, wild ostriches live in Africa, but many tame ones live on farms and in zoos. Ostriches are unusual-looking birds, but their power and speed make them one of the fastest animals on land.</li>

<div class="passage-innerbox">
      <p><b>Ostrich Facts</b><br>
      Life span: 30-40 years<br>
      Weight: 350 pounds<br>
      Height: 8-9 feet<br>
      Egg weight: 3 pounds<br>
      Nest size: Up to 8 feet<br>
      Herd size: Usually fewer than 12 birds</p>
</div>
    `
  },

     'search': {
    title: 'The Search',
    content: `
      <ol class="paragraph-numbers">
        <li>I've emptied my sports bag</li>
        <li>Checked in the car</li>
        <li>Reached under the sofa</li>
        <li>And searched near and far.</li><br>
        <li>But hunt as I may</li>
        <li>I've got only one shoe--</li>
        <li>And where its mate is</li>
        <li>I haven't a clue.</li><br>
        <li>"When was your last game?"</li>
        <li>Dad asks thoughtfully.</li>
        <li>"And after the game</li>
        <li>Whom did you see?"</li><br>
        <li>I pause in my tracks--</li>
        <li>Dad's smart, it is true</li>
        <li>But his questions don't lead</li>
        <li>To my runaway shoe.</li><br>
        <li>It's surely gone missing</li>
        <li>There's clearly no hope.</li>
        <li>I have to give up</li>
        <li>Find somewhere to mope.</li><br>
        <li>So I sit on the steps</li>
        <li>And stare into the yard</li>
        <li>Where Otis the dog</li>
        <li>Serves as guard--</li><br>
        <li>Then I notice that Otis</li>
        <li>Has a new chew</li>
        <li>With laces and treads--</li>
        <li>Oh, no! It's my shoe!</li>
      </ol>
    `
  }

};

const sampleQuestions = [
  {
    id: '1',
    text: 'Another good title for this story would be--',
    type: 'multiple-choice',
    passageId: 'the_cooks_surprise',
    options: [
      'Sewing New Clothes',
      'Baking for the Family', 
      'A Morning Snack',
      'Gifts for Everyone'
    ],
    correctAnswer: 3,
    explanation: 'The story is about both Danielle making cupcakes as a surprise for her siblings and her siblings making an apron as a surprise for her. Everyone in the story gives and receives gifts.'
  },

  {
    id: '2', 
    text: 'Danielle keeps the cupcakes a secret by--',
    type: 'multiple-choice',
    passageId: 'the_cooks_surprise',
    options: [
      'moving them to the laundry room',
      'making them in the morning', 
      'placing them inside a box',
      'covering them with paper'
    ],
    correctAnswer: 1,
    explanation: 'The passage states that Danielle "had baked cupcakes early in the morning, while Martin and Madison were still asleep," which kept them secret.'
  },

  {
    id: '3',
    text: 'Complete this flow chart. <br><img src="images/question_3.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
    type: 'multiple-choice',
    passageId: 'the_cooks_surprise',
    options: [
      'Danielle looks at the edges of the apron.',
      'Danielle finds bits of cloth in the laundry room.', 
      'Danielle sets the cupcakes on the table.',
      'Danielle walks into her bedroom.',
      'Danielle tries on the apron.'
    ],
    correctAnswer: 4,
    explanation: 'After receiving the apron and saying "Thank you. It\'s perfect," the passage says "As she put on the apron, Danielle suddenly remembered the cupcakes she left on the table."'
  },

  {
    id: '4',
    text: 'Danielle is pleased with the surprise most likely because she--',
    type: 'multiple-choice',
    passageId: 'the_cooks_surprise',
    options: [
      'needs to wear it when making cupcakes',
      'can cook more often for her family',
      'enjoys wearing blue and yellow clothes',
      'can tell that her family cares about her'
    ],
    correctAnswer: 3,
    explanation: 'Madison says "We wanted to make a surprise for you because you\'re such a nice sister. You are always thinking of us." This shows her family\'s care and appreciation for her.'
  },

  {
    id: '5',
    text: 'What will Martin and Madison most likely do next?',
    type: 'multiple-choice', 
    passageId: 'the_cooks_surprise',
    options: [
      'Make another apron',
      'Help their sister cook',
      'Clean the laundry room',
      'Bite into their cupcakes'
    ],
    correctAnswer: 3,
    explanation: 'At the end, Danielle says "I have a surprise for you too!" and leads them to the kitchen where she left cupcakes for them.'
  },

  {
    id: '6',
    text: 'Which of these do the characters have in common?',
    type: 'multiple-choice', 
    passageId: 'the_cooks_surprise',
    options: [
      'They think of others.',
      'They sleep late.',
      'They sew clothes.',
      'They like to cook.'
    ],
    correctAnswer: 0,
    explanation: 'All three characters make surprises for each other: Danielle bakes cupcakes for her siblings, and Martin and Madison make an apron for Danielle, showing they all think of others.'
  },

  {
    id: '7',
    text: 'What is the root word in "discovered"?',
    type: 'multiple-choice',
    passageId: 'the_cooks_surprise',
    options: [
      'disc',
      'disco', 
      'cover',
      'over'
    ],
    correctAnswer: 2,
    explanation: 'The root word in "discovered" is "cover." The prefix "dis-" means "not" and the suffix "-ed" shows past tense, so "discovered" means "uncovered" or "found."'
  },

  {
    id: '8',
    text: 'Some people eat seaweed all by itself because they most likely--',
    type: 'multiple-choice',
    passageId: 'useful_weeds_of_the_sea', 
    options: [
      'do not know it is used in other foods',
      'eat many foods that come from the ocean',
      'enjoy foods that add color to the meals they eat', 
      'do not like how it tastes mixed with other foods'
    ],
    correctAnswer: 1,
    explanation: 'The passage states that "In some parts of the world, especially near the ocean, people eat seaweed all by itself," suggesting people near oceans commonly eat foods from the sea.'
  },

  {
    id: '9',
    text: 'Based on the article, seaweed makes ice cream and yogurt--',
    type: 'multiple-choice',
    passageId: 'useful_weeds_of_the_sea',
    options: [
      'last longer',
      'taste different',
      'sell faster',
      'look different',
    ],
    correctAnswer: 3,
    explanation: 'The passage explains that "Without seaweed, ice cream and yogurt would not be as thick or creamy but would seem rather lumpy and watery," showing seaweed affects how they look and their texture.'
  },

  {
    id: '10',
    text: 'Which question is answered in the article?',
    type: 'multiple-choice',
    passageId: 'useful_weeds_of_the_sea',
    options: [
      'What does seaweed taste like?',
      'Where do farmers buy seaweed?',
      'Which ocean has the most seaweed?',
      'Which goods have seaweed in them?',
    ],
    correctAnswer: 3,
    explanation: 'The article mentions several goods that contain seaweed: toothpaste, shampoo, makeup, ice cream, and yogurt. It also states "Hundreds of everyday items have seaweed in them."'
  },

    {
    id: '11',
    text: 'The author wrote this article most likely to--',
    type: 'multiple-choice',
    passageId: 'useful_weeds_of_the_sea',
    options: [
      'give facts about an ocean plant',
      'list kinds of ocean plants',
      'tell about people who eat ocean plants',
      'tell how to cook with ocean plants',
    ],
    correctAnswer: 0,
    explanation: 'The article provides factual information about seaweed, explaining what it is, where it grows, and how it is used in various everyday products.'
  },

  {
    id: '12',
    text: 'In an Internet search about oceans, which website would most likely have information about where red seaweed grows?',
    type: 'multiple-choice',
    passageId: 'useful_weeds_of_the_sea',
    options: [
      'Life in the Ocean: Learn about whales, dolphins, and many other creatures of the ocean...',
      'Ocean Habitats: Learn to recognize the ocean homes of many types of fish...',
      'Discover Ocean Plants: Find interesting facts about plants that live in the ocean...',
      'Photos of the Ocean Floor: Follow a team of divers who take amazing pictures of the ocean floor...',
      'Foods From the Ocean: Discover how food from the ocean ends up on people\'s plates...'
    ],
    correctAnswer: 2,
    explanation: 'The website "Discover Ocean Plants" would be most likely to have information about where red seaweed grows, as seaweed is a type of ocean plant.'
  },

  {
    id: '13',
    text: 'What makes the secret message appear in "Lemony Letter"?',
    type: 'multiple-choice',
    passageId: 'secret_message',
    options: [
      'Heat',
      'Light',
      'Juice',
      'Water',
    ],
    correctAnswer: 0,
    explanation: 'The instructions state: "Have the person who receives your message hold the paper near a light bulb. The heat will make the secret message appear!"'
  },

  {
    id: '14',
    text: 'In "Mirror Message" when the steam in the bathroom is gone, the message will most likely--',
    type: 'multiple-choice',
    passageId: 'secret_message',
    options: [
      'spread',
      'turn white',
      'disappear',
      'turn brown',
    ],
    correctAnswer: 2,
    explanation: 'The message only appears when steam covers the mirror. When the steam clears and goes away, the message would no longer be visible.'
  },

  {
    id: '15',
    text: 'In step 3 of "Mirror Message," what does the word <u>invisible</u> mean?',
    type: 'multiple-choice',
    passageId: 'secret_message',
    options: [
      'clear',
      'small',
      'hidden',
      'forgotten',
    ],
    correctAnswer: 2,
    explanation: 'In this context, "invisible" means the message cannot be seen or is hidden from view until the steam makes it appear.'
  },

  {
    id: '16',
    text: '"Lemony Letter" and "Mirror Message" are alike because both--',
    type: 'multiple-choice',
    passageId: 'secret_message',
    options: [
      'need help from a grownup',
      'need the use of a lamp',
      'have messages that must be dry to be read',
      'have messages that must be painted to be read',
    ],
    correctAnswer: 0,
    explanation: 'Both methods require adult assistance: "Lemony Letter" needs a grownup to cut the lemon in half, and "Mirror Message" needs a grownup to peel the potato.'
  },

  {
    id: '17',
    text: 'In "Crazy Crayon," it is hard to see the message before painting over it because the message--',
    type: 'multiple-choice',
    passageId: 'secret_message',
    options: [
      'needs to be next to light',
      'takes a long time to change color',
      'is written on dark paper',
      'is written in a white color',
    ],
    correctAnswer: 3,
    explanation: 'The instructions say to use a white crayon on white paper, making it "difficult to see the markings" because white crayon on white paper is nearly invisible.'
  },

  {
    id: '18',
    text: 'One reason to read the flier is to--',
    type: 'multiple-choice',
    passageId: 'secret_message',
    options: [
      'find out when spies need to use secret messages',
      'learn how secret messages are made',
      'discover secret messages that have been sent in the past',
      'learn about the first person to send a secret message',
    ],
    correctAnswer: 1,
    explanation: 'The flier provides step-by-step instructions for three different methods of creating secret messages, teaching readers how to make them.'
  },

  {
    id: '19',
    text: 'The author puts numbers before some sentences in the flier to--',
    type: 'multiple-choice',
    passageId: 'secret_message',
    options: [
      'list the steps in the order of importance',
      'order the steps the reader will follow',
      'show how many items the reader needs in each step',
      'tell about how many minutes each step will take',
    ],
    correctAnswer: 1,
    explanation: 'The numbers indicate the sequential order of steps that must be followed to successfully create each type of secret message.'
  },

  {
    id: '20',
    text: 'Read this sentence and dictionary entry. <div class="passage-innerbox"><b>In the winter, grocery stores <u>charge</u> too much for strawberries.</b></div> <div class="passage-dicbox"><b>charge</b> (chärj) <i>v.</i> <b>1.</b> To give orders. <b>2.</b> To set as a price. <b>3.</b> To fill up completely. <b>4.</b> To rush forward.</div>',
    type: 'multiple-choice',
    options: [
      '1',
      '2',
      '3',
      '4',
    ],
    correctAnswer: 1,
    explanation: 'In the context of grocery stores charging "too much" for strawberries, "charge" means "to set as a price," which is definition 2.'
  },

  {
    id: '21',
    text: 'Guide words: <div class="passage-innerbox">camera - cause</div> <br>Which two words would appear on the same page as these guide words?',
    type: 'multiple-select',
    options: [
      'carrot',
      'cabin',
      'calm',
      'canal',
      'cave'
    ],
    correctAnswer: [0, 3],
    explanation: 'Guide words show the first and last entries on a dictionary page. "Carrot" and "canal" fall alphabetically between "camera" and "cause." "Cabin" comes before "camera" and "cave" comes after "cause."'
  },

  {
    id: '22',
    text: 'The title tells readers that a character in the story will most likely--',
    type: 'multiple-choice',
    passageId: 'hidden_treasure',
    options: [
      'spend time outdoors',
      'need to draw a map',
      'go to an amazing place',
      'search for something',
    ],
    correctAnswer: 3,
    explanation: 'The title "A Hidden Treasure" suggests that characters will be looking for or searching for something that is hidden.'
  },

  {
    id: '23',
    text: 'Paragraph 5 is important to the story because it-',
    type: 'multiple-choice',
    passageId: 'hidden_treasure',
    options: [
      'tells what is on the map',
      'tells why Evan likes to go fishing',
      'shows how the attic looks',
      'shows where Grandma lives',
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 5 describes what Evan found on the map: "Grandma\'s house, a raindrop inside a square, two little triangles, and a dock" with an "X" marking the "Greatest Fishing Spot."'
  },

  {
    id: '24',
    text: 'After Evan and Mark find the map, they both feel--',
    type: 'multiple-choice',
    passageId: 'hidden_treasure',
    options: [
      'wise',
      'calm',
      'proud',
      'eager',
    ],
    correctAnswer: 3,
    explanation: 'The text shows their excitement: Evan asks "Excitedly" if they can find the fishing spot, Mark says "Let\'s try," and "they thundered down the steps," showing they are eager to start their search.'
  },

  {
    id: '25',
    text: 'Where does this story begin and end?',
    type: 'multiple-choice',
    passageId: 'hidden_treasure',
    options: [
      'At the river',
      'Near the trees',
      'In the kitchen',
      'In the attic',
    ],
    correctAnswer: 2,
    explanation: 'The story begins with Grandma painting her kitchen, and ends with the boys rushing back "into the kitchen" with their question about the dock, then planning to get fishing poles.'
  },

  {
    id: '26',
    text: 'Based on the story, where does the map first lead the boys? <br><img src="images/question_26.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
    type: 'multiple-choice',
    passageId: 'hidden_treasure',
    options: [
      'The house',
      'The water tower',
      'The trees',
      'The Greatest Fishing Spot',
    ],
    correctAnswer: 1,
    explanation: 'Mark says "The square with the raindrop is behind Grandma\'s house" and they look for the water tower with the faded raindrop symbol first.'
  },

  {
    id: '27',
    text: 'Which question is answered at the end of the story?',
    type: 'multiple-choice',
    passageId: 'hidden_treasure',
    options: [
      'What brings fish to a certain area?',
      'What happened to the old dock?',
      'How often did Mom go to the old dock?',
      'How many fish does Grandma catch?',
    ],
    correctAnswer: 1,
    explanation: 'When the boys ask about the dock, Grandma explains: "That dock was torn down a long time ago."'
  },

  {
    id: '28',
    text: 'Place these words in alphabetical order.',
    type: 'drag-drop',
    passageId: 'hidden_treasure',
    options: ['steps', 'shouted', 'searched', 'smiled', 'spend'],
    dropZones: [' ', ' ', ' ', ' ', ' '],
    correctAnswer: [2, 1, 3, 4, 0],
    explanation: 'In alphabetical order: searched, shouted, smiled, spend, steps.'
  },

  {
    id: '29',
    text: 'Based on paragraph 4, the reader can tell that-',
    type: 'multiple-choice',
    passageId: 'ostrich',
    options: [
      'chicks learn to eat by watching older ostriches',
      'ostriches need people to feed them a healthy diet',
      'plants are easier for ostriches to feed on than insects',
      'chicks wait to eat until the grown ostriches finish',
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 4 directly states: "The young birds learn to peck the ground and eat plants by watching older ostriches."'
  },

  {
    id: '30',
    text: 'Paragraph 6 explains that one way ostriches keep themselves safe is by--',
    type: 'multiple-choice',
    passageId: 'ostrich',
    options: [
      'flying',
      'digging',
      'kicking',
      'sleeping',
    ],
    correctAnswer: 2,
    explanation: 'Paragraph 6 states: "Their strong legs can deliver a kick that stops a lion!"'
  },

  {
    id: '31',
    text: 'What information can be learned by reading the chart at the end of the article?',
    type: 'multiple-choice',
    passageId: 'ostrich',
    options: [
      'What do ostriches use to build a nest?',
      'Why do ostriches keep the herd size low?',
      'How long do ostriches live?',
      'How many eggs do ostriches lay?',
    ],
    correctAnswer: 2,
    explanation: 'The "Ostrich Facts" chart shows "Life span: 30-40 years," which answers how long ostriches live.'
  },

  {
    id: '32',
    text: 'Based on the article, one way the male leader is like the females in the herd is that he helps--',
    type: 'multiple-choice',
    passageId: 'ostrich',
    options: [
      'make the nest',
      'guard the eggs',
      'hide the chicks',
      'feed the chicks',
    ],
    correctAnswer: 1,
    explanation: 'The text states: "The male and one of the females take turns guarding and sitting on the eggs."'
  },

  {
    id: '33',
    text: 'The feathers of an ostrich help the bird--',
    type: 'multiple-choice',
    passageId: 'ostrich',
    options: [
      'run fast',
      'stay warm',
      'move quietly',
      'look bigger',
    ],
    correctAnswer: 1,
    explanation: 'The passage explains: "Their new fluffy feathers trap air and keep the chicks warm at night."'
  },

  {
    id: '34',
    text: 'Based on the article, what can the reader most likely tell about ostriches?',
    type: 'multiple-choice',
    passageId: 'ostrich',
    options: [
      'They can run faster than any other animal.',
      'Their wings are their most useful part.',
      'Their speed helps them escape.',
      'They usually kick their enemies.',
    ],
    correctAnswer: 2,
    explanation: 'The article states: "With such speed, ostriches outrun most predators" and that they can run 43 miles per hour, showing their speed helps them escape danger.'
  },

  {
    id: '35',
    text: 'After looking at the title, the reader knows that this poem is about--',
    type: 'multiple-choice',
    passageId: 'search',
    options: [
      'hiding something',
      'finding something',
      'looking for something',
      'thinking about something',
    ],
    correctAnswer: 2,
    explanation: 'The title "The Search" indicates the poem will be about someone searching or looking for something.'
  },

  {
    id: '36',
    text: 'What does <u>pause</u> mean in line 13?',
    type: 'multiple-choice',
    passageId: 'search',
    options: [
      'Try to remember',
      'Begin to ask questions',
      'Think about the past',
      'Stop for a short time',
    ],
    correctAnswer: 3,
    explanation: '"Pause" means to stop briefly or for a short time. The speaker stops in their tracks when Dad asks questions.'
  },

  {
    id: '37',
    text: 'In lines 17-20, the speaker can best be described as--',
    type: 'multiple-choice',
    passageId: 'search',
    options: [
      'scared',
      'upset',
      'angry',
      'lazy',
    ],
    correctAnswer: 1,
    explanation: 'Lines 17-20 show disappointment and sadness: "It\'s surely gone missing / There\'s clearly no hope. / I have to give up / Find somewhere to mope." The speaker feels upset about losing the shoe.'
  },

  {
    id: '38',
    text: 'Where is the first place the speaker looks for the shoe?',
    type: 'multiple-choice',
    passageId: 'search',
    options: [
      'Under the sofa',
      'In the car',
      'In a sports bag',
      'Near the steps',
    ],
    correctAnswer: 2,
    explanation: 'The first line of the poem states: "I\'ve emptied my sports bag," which shows this was the first place searched.'
  },

  {
    id: '39',
    text: 'Based on the events in the poem, the shoe was most likely last worn--',
    type: 'multiple-choice',
    passageId: 'search',
    options: [
      'at school',
      'during a game',
      'at a friend\'s house',
      'in a friend\'s car',
    ],
    correctAnswer: 1,
    explanation: 'Dad asks "When was your last game?" which suggests the shoe was worn during a sports game, and the speaker empties a sports bag looking for it.'
  },

  {
    id: '40',
    text: 'Which question is answered in the poem?',
    type: 'multiple-choice',
    passageId: 'search',
    options: [
      'What is the dog\'s new chew toy?',
      'Why is the dog playing outside?',
      'What sport does the speaker play?',
      'When was the speaker\'s last game?',
    ],
    correctAnswer: 0,
    explanation: 'The poem reveals that Otis the dog has a "new chew / With laces and treads" which turns out to be the missing shoe.'
  },
];

// Reading panel management - Auto-opening, no toggle
let isReadingPanelOpen = false;
let currentPassageId = null;

 function openReadingPanel() {
  const panel = document.getElementById('reading-panel');
  const testContainer = document.querySelector('.test-container'); // Outer container with class
  
  if (panel) {
    panel.classList.add('open');
    isReadingPanelOpen = true;
    console.log('Reading panel auto-opened');
  }
  
  // Add class to outer test container (the one with class="test-container")
  if (testContainer) {
    testContainer.classList.add('panel-open');
    console.log('Test container adjusted for left panel');
  }
}

function closeReadingPanel() {
  const panel = document.getElementById('reading-panel');
  const testContainer = document.querySelector('.test-container'); // Outer container with class
  
  if (panel) {
    panel.classList.remove('open');
    isReadingPanelOpen = false;
    console.log('Reading panel closed');
  }
  
  // Remove class from outer test container
  if (testContainer) {
    testContainer.classList.remove('panel-open');
    console.log('Test container reset');
  }
}

// Also update the loadPassage function to ensure proper class application
function loadPassage(passageId) {
  if (!passageId) {
    console.log('No passageId provided, closing panel');
    closeReadingPanel();
    return;
  }
  
  if (currentPassageId === passageId && isReadingPanelOpen) {
    console.log('Passage already loaded and panel open:', passageId);
    return; // Already loaded and open
  }
  
  const passage = readingPassages[passageId];
  if (!passage) {
    console.error('Passage not found:', passageId);
    console.log('Available passages:', Object.keys(readingPassages));
    closeReadingPanel();
    return;
  }
  
  currentPassageId = passageId;
  
  const titleElement = document.getElementById('passage-title');
  const contentElement = document.getElementById('passage-content');
  
  if (titleElement) {
    titleElement.textContent = passage.title;
    console.log('Passage title set to:', passage.title);
  } else {
    console.error('Passage title element not found');
  }
  
  if (contentElement) {
    contentElement.innerHTML = passage.content;
    console.log('Passage content loaded, length:', passage.content.length);
  } else {
    console.error('Passage content element not found');
  }
  
  // Auto-open the panel and ensure test container gets proper class
  openReadingPanel();
  
  // Force reflow and ensure class is applied
  setTimeout(() => {
    const testContainer = document.querySelector('.test-container');
    if (testContainer && !testContainer.classList.contains('panel-open')) {
      console.log('Force applying panel-open class');
      testContainer.classList.add('panel-open');
    }
  }, 100);
  
  console.log('Successfully loaded and opened passage:', passage.title);
}

// Enhanced displayFeedback function with positioning fix
function displayFeedback(isCorrect, explanation) {
  const feedbackContainer = document.getElementById('feedback-container');
  const feedbackMessage = document.getElementById('feedback-message');
  const explanationElement = document.getElementById('explanation');

  if (feedbackMessage) {
    feedbackMessage.textContent = isCorrect ? 'Correct!' : 'Incorrect:';
    feedbackMessage.className = isCorrect ? 'correct' : 'incorrect';
  }

  if (explanationElement) {
    explanationElement.textContent = explanation;
  }

  if (feedbackContainer) {
    feedbackContainer.style.display = 'block';
    
    // Force a reflow to ensure positioning is applied
    feedbackContainer.offsetHeight;
    
    // Scroll feedback into view if needed
    setTimeout(() => {
      feedbackContainer.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest',
        inline: 'nearest'
      });
    }, 100);
  }
}

function loadPassage(passageId) {
  if (!passageId) {
    console.log('No passageId provided, closing panel');
    closeReadingPanel();
    return;
  }
  
  if (currentPassageId === passageId && isReadingPanelOpen) {
    console.log('Passage already loaded and panel open:', passageId);
    return; // Already loaded and open
  }
  
  const passage = readingPassages[passageId];
  if (!passage) {
    console.error('Passage not found:', passageId);
    console.log('Available passages:', Object.keys(readingPassages));
    closeReadingPanel();
    return;
  }
  
  currentPassageId = passageId;
  
  const titleElement = document.getElementById('passage-title');
  const contentElement = document.getElementById('passage-content');
  
  if (titleElement) {
    titleElement.textContent = passage.title;
    console.log('Passage title set to:', passage.title);
  } else {
    console.error('Passage title element not found');
  }
  
  if (contentElement) {
    contentElement.innerHTML = passage.content;
    console.log('Passage content loaded, length:', passage.content.length);
  } else {
    console.error('Passage content element not found');
  }
  
  // Auto-open the panel
  openReadingPanel();
  
  console.log('Successfully loaded and opened passage:', passage.title);
}

// AUTO-OPEN APPROACH: Watch for question changes and auto-load passages
document.addEventListener('DOMContentLoaded', function() {
  console.log('Auto-opening left panel reading test initializing...');
  
  // Set questions for the test framework using the expected variable name
  window.sampleQuestions = sampleQuestions;
  
  // Remove any toggle button functionality since we auto-open
  const toggleBtn = document.getElementById('toggle-reading-panel');
  if (toggleBtn) {
    toggleBtn.style.display = 'none';
    console.log('Toggle button hidden');
  }
  
  // Watch for question changes and auto-load passages accordingly
  let lastQuestionIndex = -1;
  
  function checkForQuestionChange() {
    const currentQuestionSpan = document.getElementById('current-question');
    if (currentQuestionSpan) {
      const currentIndex = parseInt(currentQuestionSpan.textContent) - 1;
      
      if (currentIndex !== lastQuestionIndex && currentIndex >= 0 && currentIndex < sampleQuestions.length) {
        lastQuestionIndex = currentIndex;
        const question = sampleQuestions[currentIndex];
        
        console.log('Question changed to:', currentIndex + 1, 'passageId:', question.passageId || 'none');
        
        // Auto-load passage if question has one, close panel if it doesn't
        if (question.passageId) {
          loadPassage(question.passageId);
        } else {
          closeReadingPanel();
          currentPassageId = null;
        }
      }
    }
  }
  
  // Check for question changes every 500ms
  setInterval(checkForQuestionChange, 500);
  
  console.log('Auto-opening left panel initialized with', sampleQuestions.length, 'questions');
});