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

  'patience': {
    title: 'A Little Patience',
    content: `
     <ol class="paragraph-numbers">
      <li>Alice groaned as she walked into her room, letting her backpack fall to the ground with a loud thump. Once again her room looked like a whirlwind had blown through it, and she knew exactly who the culprit was. “Mom! She did it again!”</li>

      <li>Alice’s mom, who happened to be walking by, peeked through the doorway to appraise the damage that Alice’s younger sister had left behind. “I’ve talked to Mary about it,” Mom said with a sigh, “but she can’t seem to stay out of here. Your room is too irresistible. Maybe you should talk to her.”</li>

      <li>“Right,” Alice mumbled as she began to put away the stuffed animals and trinkets scattered everywhere. She was picking up the last of her belongings from the floor when she noticed her four-year-old sister at the door. “What do you want?” Alice snapped, tired from having to complete an unexpected chore.</li>

      <li>“I can’t because I have to finish cleaning my room,” Alice growled, “and then I have to do my homework.”</li>

      <li>“Why didn’t you do your homework already? Where were you?” Mary asked.</li>

      <li>“I’ve explained this before, Mary. I have track practice immediately after school, so I don’t have time to play with you and finish my homework.” Alice plopped herself down at her desk and began pulling her books out of her backpack, pretending not to notice her little sister standing in the doorway. Mary lingered a few more minutes and then quietly left.</li>

      <li>The next afternoon Alice walked into her room and found Mary in the middle of the floor surrounded by the stuffed animals that normally rested on her bed.</li>

      <li>“Mary!” Alice shouted in annoyance. “Please leave my things alone. I’m tired of having to clean my room every day.”</li>

      <li>“But you have some of the best toys in here,” Mary explained. “I really like this one!” she said as she held up a pink stuffed rabbit.</li>

      <li>“Mary, put that down!” Alice shrieked as she noticed the toy Mary held in her hands. It wasn’t just an ordinary stuffed animal; it was one of Alice’s longtime favorites. Mary, shocked by Alice’s intense reaction, immediately dropped it.</li>

      <li>“I’m sorry, Mary, but you have to go play somewhere else,” Alice pleaded.</li>

      <li>Mary lifted the rabbit and carefully placed it on the bed before walking toward the door. She turned and looked at Alice, who was gathering the remaining stuffed animals from the floor. “I’m sorry,” Mary said softly before leaving the room.</li>

      <li>Alice cleaned her room and, once again, began working on her homework, just as she usually did in the afternoons. She opened her backpack and emptied its contents onto her desk. After settling into her chair, she flipped open a textbook and started to read. Unlike most afternoons, though, she was unable to concentrate.</li>

      <li>When Alice realized she had read the same page three times in her history book, she gave up and began to walk around her room. She was absently staring out the window when something outside caught her eye. It was an empty swing, swaying in the wind. Mary’s little face, with her big grin and twinkling eyes, immediately came to Alice’s mind and held her thoughts for the rest of the evening.</li>

      <li>The next day Alice was surprised when she returned home after practice to find her room flawless. Not a thing was out of place. She set down her backpack, picked up the pink rabbit, and with a look of determination, she went to find Mary. She found her sister sitting at the kitchen table, paper and crayons scattered in front of her.</li>

      <li>“Hey, Mary. What are you doing?” Alice sat in the seat beside her. Mary glanced up but then immediately went back to her task. “Those are some pretty pictures.” Still Mary did not answer.</li>

      <li>Alice frowned. This was harder than she thought it would be. “Mary, I owe you an apology. I know I’ve been busy, but I shouldn’t have become angry with you yesterday.” She put the rabbit on the table. “This bunny misses you too,” she teased. “I’m wondering if you would do me a favor.”</li>

      <li>Mary put down her crayon as soon as she saw the rabbit. Alice continued, “He is important to me, and I wouldn’t trust him with just anyone. I thought maybe you could take care of him for me while I’m at school. Then the two of you could meet me at the swings when I arrive home from practice. What do you think?”</li>

      <li>Mary looked up at Alice, her eyes wide with excitement. She jumped down from her chair and grabbed Alice’s hand. “If we want to play on the swings today,” Mary said, “we have to go now. You have homework that you have to finish later.”</li>

      <li>“Okay.” Alice smiled and followed her sister. As they made their way to the swing, Alice saw the huge grin on Mary’s face and was humbled by the thought that such a small child was able to teach her such a big lesson on patience.</li>
</ol>
    `
  },

  'home': {
    title: 'My Family Home',
    content: `
      <ol class="paragraph-numbers">
        <li>The last time I visited here,</li>
        <li>I was a small girl of six.</li>
        <li>Now I am nearly twice that age.</li>
        <li>I am taller and smarter,</li>
        <li>and I have come to appreciate</li>
        <li>that I am from two places.</li>
        <li>Virginia is my first home,</li>
        <li>the land where I have grown</li>
        <li>from a child into</li>
        <li>a young lady.</li>
        <li>But the island of Puerto Rico</li>
        <li>is my family home.</li>
        <li>I pause in my tracks--</li>
        <li>It is here in these lush, green tropics</li>
        <li>where so much of <i>mi familia</i> resides.</li><br>

        <li>When my parents and I arrive,</li>
        <li>my grandparents, aunts, and uncles</li>
        <li>wrap us in warm hugs,</li>
        <li>and their arms tell me how much</li>
        <li>they have missed me.</li>
        <li>My cousins—-some born</li>
        <li>since I visited last—-</li>
        <li>wear gracious, welcoming grins.</li>
        <li>Right away they invite me</li>
        <li>to go outside and play.</li>
        <li>Although we are in December,</li>
        <li>the sun here shines hot</li>
        <li>and bright.</li><br>

        <li>At night when my father</li>
        <li>hugs me before I go to bed,</li>
        <li>he tells me again how special,</li>
        <li>how lucky I am to be</li>
        <li>from two places.</li>
        <li>Through the window of my room</li>
        <li>at my grandmother’s house,</li>
        <li>the voices of shouting, crashing waves remind me</li>
        <li>of waves on the Virginia coast—-</li>
        <li>except that these waves crash</li>
        <li>in my family’s language.</li>
        <li>These waves</li>
        <li>are speaking</li>
        <li>in Spanish.</li>
      </ol>
    `
  },

  'clocks': {
    title: 'Our Internal Clocks',
    content: `
    <ol class="paragraph-numbers">
      <li>Many people wake up to the sound of an alarm that they set the night before. At the end of the day when we look at a clock, we may be reminded that it is time to go to bed. Though we depend on external devices to tell time, our bodies follow their own built- in clocks, which work together to establish regular patterns. These internal clocks are the timekeeping systems that help our bodies adjust to changes.</li>

      <p><b>A Sense of Timing</b></p>
      <li>The body’s internal clocks are necessary for a living organism to perform basic functions. Their roles are coordinated by the brain, locked in perfect time by what are known as <i>circadian rhythms</i>. The word <i>circadian</i> comes from the Latin words <i>circa</i> (about) and <i>dies</i> (a day). Circadian rhythms are the physical, mental, and behavioral changes that humans experience in a 24- hour period. Examples of circadian rhythms include sleep patterns, body temperature, and blood pressure.</li>

      <p><b>Following a Pattern</b></p>
      <li>Circadian rhythms are the fine-tuned timing system of the human body. For example, circadian rhythms can influence a person’s athletic performance. A football player is more likely to perform better in the afternoon than in the evening. The human body becomes physically stronger as the day progresses and reaches full strength and alertness between the hours of 3 P.M. and 6 P.M. With less sunlight in the evening, the body begins slowing down and turns its energy toward fighting fatigue.</li>

      <li>One researcher concluded that circadian rhythms may affect the outcome of football games that are broadcast on television on a Monday night. These games usually start around 9 P.M. Eastern time and often involve one professional team flying from the West Coast to play another team on the East Coast. When it is 9 P.M. on the East Coast, it is only 6 P.M. on the West Coast due to the difference in time zones. As a result, West Coast players’ bodies are operating closer to their time of peak performance. In fact, West Coast teams playing on the East Coast win Monday night football games 63 percent of the time.</li>

      <li>The first rays of morning sunlight detected by a person’s eyes start a process in the nervous system that results in a wake- up message to the brain. The absence of sunlight at night, however, triggers the release of melatonin, a substance produced by the brains of mammals. Melatonin signals the body to feel tired. After about eight hours of sleep, a person can wake up feeling mentally alert and ready to function effectively. Every 24 hours this circadian rhythm repeats itself, telling the body when it is time to rest and when it is time to wake up.</li>

      <p><b>Nature in Rhythm</b></p>
      <li>Circadian rhythms also play a role in an organism’s consumption of food and water. For example, morning sunlight signals a plant to unfold its leaves to capture sunlight and convert it to the sugars it needs to survive. At night, the plant’s leaves then fold back to conserve water.</li>

      <li>One of the most interesting relationships between circadian rhythms involves bees and flowering plants. The circadian rhythms of flowers result in the opening and closing of petals at different times of day, depending on available sunshine. Since bees rely on nectar from flowers, their internal clocks coincide with plants’ circadian rhythms. When flowers open their petals, bees will be present to gather nectar at exactly the right time.</li>

      <li>Just as plants and animals follow a built- in biological timing system, we, too, fall into a repetitive pattern of waking and sleeping. These circadian rhythms guide our daily routines and keep our bodies on a schedule that helps us be as productive as possible during the time we spend awake.</li>
    `
  },

   'shine': {
    title: 'Let It Shine',
    content: `
    <ol class="paragraph-numbers">
      <li>As her eyes danced across the crowd, Jada nervously tugged on her long braid. Where was Sydney? The bus to the planetarium was leaving in five minutes! The girls had been looking forward to this field trip for weeks. They were in different science classes, so the field trip was a chance for the friends to spend time together. Jada was about to check her watch again when Mr. Tao approached her. “Sydney’s mother just called. Sydney has a cold and won’t be coming today.”</li>

      <li>“Oh, no!” Jada said.</li>

      <li>Mr. Tao continued, “Since you’re lacking a partner, you can pair up with Zach. Tyler also stayed home with a cold today, so Zach needs a partner too.”</li>

      <li>Jada glanced at Zach then looked away. He seemed nice enough, but science and homeroom were the only classes they had together. Jada was always so busy listening to Sydney before and after homeroom that she didn’t have time to talk to her other classmates. Jada didn’t even remember if she and Zach had ever spoken to each other.</li>

      <li>Mr. Tao began organizing the students into a line and onto the bus. As Jada slumped into a seat, she wished that Sydney were there. Sydney normally did all the talking while Jada just listened.</li>

      <li>“Can I sit here?” Zach asked, pointing to the empty seat next to Jada. He didn’t wait for an answer. “So, I guess we’re science partners today.”</li>

      <li>Jada nodded.</li>

      <li>“You’re pretty quiet today, even without Sydney around.”</li>

      <li>Jada blushed and looked at her shoes, but when she looked up at Zach’s face, his eyes were kind. He wasn’t making fun of her; he was simply stating his observations.</li>

      <li>“Sorry,” she muttered.</li>

      <li>“Hey, I don’t mind if you’re quiet,” Zach said. “I have two sisters and one brother, and they never stop talking!”</li>

      <li>Jada examined her braid. “I guess sometimes I don’t have much to say.”</li>

      <li>“Sometimes you have a lot to say,” he replied.</li>

      <li>Jada looked up. “What do you mean?”</li>

      <li>“Well, you always answer the questions in science. You seem to really understand the subject,” Zach said. “And I saw how you played the saxophone with Sydney in the band concert last fall. You were pretty good!”</li>

      <li>“You went to the fall concert?” Jada asked.</li>

      <li>“It was the same night as the art show, and I had a painting in one of the exhibits that night. I stopped by the concert when the art show was over.”</li>

      <li>Jada did remember. She also remembered that the saxophone duet was supposed to be a solo; the program even listed only her name, but Jada had let Sydney talk her into performing it together. “You’re too shy to appear on stage all by yourself!” Sydney had demanded. “You know how anxious you get in front of people. I’ll perform it with you.”</li>

      <li>Jada’s memory was interrupted by Mr. Tao’s announcement. “Students, we are on the way to the planetarium to view a program about the sun and the moon. Hopefully it will help all of you understand what we’ve been learning about eclipses. I’m passing around a handout for you to review with your partner.”</li>

      <li>When the handout reached them, Zach groaned. “I always get the eclipses mixed up. How do you keep them straight?”</li>

      <li>Jada took a deep breath. “Well, a lunar eclipse has to do with the moon being in a shadow.”</li>

      <li>Zach nodded. “Okay, go on.”</li>

      <li>She pointed to the first picture on the handout. “In the lunar eclipse, Earth moves between the sun and the moon, so the sun’s light is blocked from the moon.”</li>

      <li>“And the solar eclipse?” Zach asked.</li>

      <li>Jada pointed to the other picture. “In the solar eclipse, the moon is between Earth and the sun, blocking the sun’s light from Earth. If I forget those facts, I just remember that solar and sun both begin with an S.”</li>

      <li>Zach laughed.</li>

      <li>“Are you still confused?” Jada asked.</li>

      <li>“It’s not that,” Zach replied. “I was just thinking that Sydney’s kind of like an eclipse.”</li>

      <li>Jada frowned. “What do you mean?”</li>

      <li>“When Sydney’s around, she does all the talking and that keeps you from saying anything,” Zach explained. “It’s like she’s the moon keeping you in its shadow.”</li>

      <li>Jada blushed again. “Sydney’s just trying to be a good friend. She knows I’m quiet.”</li>

      <li>Zach continued. “I just think you should try stepping out of her shadow. You can stand on your own.”</li>

      <li>Jada smiled as the bus pulled into the planetarium’s parking lot. She knew she might always be shy, but she did have something to say. Maybe she could learn to speak up and, just like the sun, appear from behind the moon to allow her light to shine.</li>
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