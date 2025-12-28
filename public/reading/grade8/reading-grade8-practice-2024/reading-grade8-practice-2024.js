window.TEST_IDENTIFIER = 'reading_grade8_practice_2024';

// Reading passages that can be referenced by multiple questions
const readingPassages = {
  'hummingbirds': {
    title: 'Hummingbirds',
    content: `
     <ol class="paragraph-numbers">
      <li>Hummingbirds are one of nature’s most amazing creatures. Native only to the Western Hemisphere, these small birds are known for their deft flying abilities. They have a unique ability to hover in midair by rapidly flapping their wings as much as 80 times per second. In fact, hummingbirds are named for the distinct humming sound created by this rapid wing beat. Hummingbirds are the only birds that can actually fly backwards, and they can move quickly and easily in almost any direction. Therefore, if you’ve seen a petite bird appearing to dart and hover from one spot to the next, you were most likely watching a hummingbird.</li>

      <li>Hummingbirds use their unique ability to hover in place while feeding on flower nectar. They sip their sweet meals by reaching inside the flower with their narrow bills and split tongues. They also eat hundreds of insects each day. In fact, their flying style requires so much energy that hummingbirds must consume enough food to nearly equal their body weight each day!</li>

      <li>Hummingbirds make delightful and beneficial visitors to any garden. They help pollinate plants and flowers much as bees do. Attracting these fascinating creatures is easy. Simply set up a hummingbird feeder in early spring, and keep it filled with a syrupy mixture. Before long, your garden will be “humming” with activity.</li>

      <li>Hummingbirds are migratory and will leave in late fall when the weather gets too cold. Keep the feeder up two to three weeks after the last hummingbird is spotted. It might serve as a helpful feeding spot for passing hummingbirds migrating south. Don’t worry about delaying their migration, because hummers know when it’s time to leave, even if that means passing up a free lunch!</li>
</ol>
    `
  },

  'leaves': {
    title: 'Among the Leaves',
    content: `
    <center><p><i>Barbara Evans Stanush</i></p></center>
     <ol class="paragraph-numbers">
     <center><p>1</p></center>
      <li>You found it, high amid thick branches</li>
      <li>upright on a twig, plastered with lichen¹</li>
      <li>blending with the live oak.</li><br>

      <li>You spied it, bright-eyed daughter,</li>
      <li>keen to find another life</li>
      <li>among the hard leaves. You climbed</li><br>

      <li>to watch a hummer feeding nestlings;</li>
      <li>their tiny beaks gaped red. The mother</li>
      <li>did not scare. The nest bulged with growing.</li><br>

      <li>You called me to the mystery—-so slight</li>
      <li>I lost the nest each time my stare wavered.</li>
      <li>You balanced on the ladder, took a photograph.</li><br>

      <center><p>2</p></center>
      <li>Opening a box chock full of unclaimed views,</li>
      <li>I gaze at live oak leaves. In black</li>
      <li>and white, a puzzle</li><br>

      <li>until you, long grown and distant, recall</li>
      <li>the hummingbird, remind me of the nest.</li>
      <li>The littlest nest crafted by a mother</li><br>

      <li>who fused spider webs and moss into a bowl</li>
      <li>of softest down and laid two pulsing ovals,</li>
      <li>warmed them, brooded them to flight.</li><br>

      <li>Moments</li>
      <li>hidden in the live oak</li>
      <li>large among the leaves.</li><br>
</ol>

<hr>

<p>¹lichen - a type of moss that grows on trees.</p>
<p>“Among the Leaves” by Barbara Evan Stanush, from Stone Garden, copyright © 1992 by Barbara Evans Stanush. Used by permission of the author.</p>
    `
  },

  'woman': {
    title: 'A Woman of Courage and Conviction',
    content: `
     <ol class="paragraph-numbers">
      <li>With a satisfied smile, Keisha finished writing the last sentence of her English essay. She had written about one of her heroes, Rosa Parks, an important figure in the Civil Rights Movement. Keisha felt inspired by Rosa Parks’ actions, and in her essay she had tried to depict the courage and conviction Rosa Parks had shown the world.</li>

      <li>“Keisha,” her mother shouted from downstairs. “It’s almost 4:15. Have you finished your homework?”</li>

      <li>“I finished a minute ago, Mom,” Keisha answered. “Don’t worry, I won’t be late getting to the assisted living center. I just have to put some things in my backpack.” Keisha pulled down a collection of Maya Angelou’s poetry as well as a book of funny anecdotes from her bookshelf. She liked to be prepared with a selection of literature to read to the center’s residents. On an impulse, she added her English notebook as well.</li>

      <li>Keisha ran down the stairs, poked her head into the kitchen, and said, “I’ll be back by 5:45, Mom. See you later.” Keisha grabbed her jacket and ran out the door. She had to jog the three blocks to the center to make it by 4:30, when her hour of volunteering began.</li>

      <li>As Keisha came running in the door, Mrs. Ellis, the assisted living center manager, told Keisha, “We have a new resident this week. She’s still adjusting to her new surroundings, and I think you’ll be able to make friends with her.”</li>

      <li>“What’s her name?” Keisha asked, nervously wondering what this new woman was like.</li>

      <li>“Her name is Ruby Watson, and she’s lived in Alabama all her life until now,” Mrs. Ellis explained. “Her only daughter lives here in the city and wants her mother to be near. You’ll find Mrs. Watson in Room 28. And by the way, Keisha, good luck.”</li>

      <li>Keisha walked down the hallway to Room 28 at a quick, determined pace. She knocked on the door and heard a strong voice ask what she wanted. The door stuck stubbornly as Keisha tried the handle, so she used her shoulder to push it open. Walking into the room, she met the gaze of two piercing brown eyes staring at her suspiciously.</li>

      <li>“I’m Keisha Jackson, a student volunteer,” Keisha explained as she walked over to Mrs. Watson and sat down in the chair beside her. “I come here every Thursday afternoon to help pass the time with residents, or read to them, or, or ...” Keisha started to stumble over her words as Mrs. Watson continued to stare at her with an almost belligerent gaze.</li>

      <li>“I didn’t request anyone to keep me company,” Mrs. Watson interrupted. “I’m alone most of the time, and that’s how I prefer it.”</li>

      <li>“But it must be nice to see your daughter,” Keisha said, hoping to give the conversation a more positive turn.</li>

      <li>“My daughter has to work two jobs, so she seldom comes here to visit me,” Mrs. Watson said. “And my two grandchildren are so involved with their school activities that they hardly have time to come see me.”</li>

      <li>Keisha decided that a change of subject would be beneficial. “I brought along some books to read,” she said, pulling the books out of her backpack. “I have Maya Angelou’s poetry and a book of funny stories.”</li>

      <li>“I don’t like poetry, and I’m not in the mood for funny stories,” Mrs. Watson retorted. “What else do you have?”</li>

      <li>Nervously, Keisha pulled out her English notebook and opened it to her essay. She read the title aloud: “Rosa Parks: A Woman of Courage and Conviction.” She glanced at Mrs. Watson to see what kind of reaction she might have, but to her surprise, Mrs. Watson’s face had relaxed and her eyes shone with anticipation.</li>

      <li>“Read to me about Rosa,” Mrs. Watson said.</li>

      <li>At first, Keisha read the essay haltingly, but she soon fell into the natural, dramatic rhythm of her narrative. She read how Rosa Parks had staunchly refused to give up her seat on a segregated bus to a white passenger in 1955; then she read how Rosa’s action had inspired the Montgomery Bus Boycott, a protest that became a turning point in the struggle for civil rights.</li>

      <li>After Keisha read her last sentence, she looked at Mrs. Watson’s face. It was lit by a radiantly happy smile.</li>

      <li>“I marched in Montgomery too, you know,” Mrs. Watson said with pride. “I walked with Rosa Parks and Dr. Martin Luther King, Jr. The march was the greatest moment of my life because ...” Mrs. Watson paused, seemingly overwhelmed by her memory of the event.</li>

      <li>Keisha finished the sentence for her. “Because ... you were a woman of courage and conviction too.”</li>

      <li>“Yes,” Mrs. Watson said, sitting up straighter. “Yes, I was a woman of courage and conviction too, and I still am. Thank you for reminding me, Keisha.”</li>\
      
      <li>“Mrs. Watson, I’d like to see you again next Thursday, if that’s okay,” Keisha asked, hoping her voice wasn’t shaking with the emotions she felt.</li>

      <li>“Next Thursday will be fine, Keisha, just fine,” Mrs. Watson said with a warm smile. “And next time we see each other, I’ll tell you some of my stories.”</li>

      <li>“I’d like that,” Keisha answered. “I’d like that very much.”</li>
</ol>
    `
  },

  'harlem': {
    title: 'The Harlem Renaissance',
    content: `
    <ol class="paragraph-numbers">
      <li>Between World War I and the Great Depression, two of America’s most devastating events, an important cultural movement began to evolve in the heart of New York City. Beginning about 1920, it was called the Harlem Renaissance. Its name reveals its similarity to the European Renaissance, a golden age of art and literature during the 14th to 16th centuries. During this European Renaissance, geniuses like William Shakespeare and Leonardo da Vinci led the Western world out of the darkness of the Middle Ages.</li>

      <li>The Harlem Renaissance of the 1920s also gave rise to a group of highly talented artists. The resemblance ends there, however. The Harlem Renaissance owed little to European- influenced cultures or the dominant culture of early- 20th century America. Instead, this artistic awakening was created exclusively by African Americans, and it occurred at the perfect time.</li>

      <p><b>The Power of Hope</b></p>
      <li>In 1920, America was ripe for change; it needed a renewal of hope. World War I had cost more than $32 billion, and more than 100,000 American soldiers had been killed or wounded. Despite the continuing existence of racism in much of America, thousands of African Americans had served their country in the war. When the war ended, these soldiers returned to an America where social injustice was still tolerated and jobs were difficult to find.</li>

      <li>Many African Americans looked northward for the chance to rebuild their lives. It was a trend that had begun after the Civil War, when newly freed Southern slaves had moved north hungering for opportunity. After World War I, African Americans again gravitated to the larger Northern cities. Harlem, a large neighborhood in New York City, appeared to offer the kind of fresh start they were seeking. In fact, by the early 1920s, African Americans in Harlem had grown into a large but closely knit community. Conditions were not ideal, but the African American residents of Harlem shared similar cultural, social, and artistic values. Among the thousands attracted to the possibilities of Harlem was a select group of highly gifted artists who turned this former Dutch village into a hub of creativity.</li>

      <p><b>A New Sound Emerges</b></p>
      <li>It was called “jazz,” and no one had ever heard anything like it. A blend of traditional African rhythms, gospel, and blues, this new musical style was completely original. Not only did jazz express the African American experience, but its fluid, free- form nature also encouraged musicians to improvise and express themselves.</li>

      <li>Though jazz originated in New Orleans, its irresistible sound had made its way to New York’s Harlem. Jazz could be heard everywhere, from street corners to nightclubs. It was in these clubs that the most accomplished jazz musicians got their start. Louis Armstrong, Cab Calloway, and many others became legends. Soulful jazz singers like Billie Holiday and Bessie Smith were instant celebrities. Harlem’s finest musicians soon helped make jazz an international sensation.</li>

      <img src="images/armstrong.png" alt="Image failed to load. Please try again later." style="float: right; height: 120px; margin-left: 10px;">

      <p><b>Literature and Art Abound</b></p>
      <li>Despite the powerful influence of jazz, the foundation of the Harlem Renaissance was not made from music alone. African American writers such as Ralph Ellison and Zora Neale Hurston provided their own observations of African American life. They challenged others to examine prejudice and its damage to society and individuals. The words of gifted poets Langston Hughes and Countee Cullen revealed the complex and contradictory world of the African American experience, with all its joys and injustices.</li>

      <li>Meanwhile, the talented painter Jacob Lawrence, opera singer Marian Anderson, jazz dancer Josephine Baker, and scores of actors, sculptors, and playwrights made timeless contributions to the vision shaping the Harlem Renaissance.</li>

      <p><b>A Beginning, Not an End</b></p>
      <li>The convergence of talent that spontaneously came together during the Harlem Renaissance was nothing short of amazing. These gifted artists arrived in Harlem looking for hope, and what resulted was the blossoming of a new African American identity.</li>

      <li>The Harlem Renaissance began to decline in the late 1930s when the Great Depression crushed the nation’s economy. This sent most Americans into crisis, and time spent creating turned into time spent surviving. The heritage of the Harlem Renaissance is alive and well, however. The vision of its participants is a permanent part of our collective American culture. Their music, words, and art seem as fresh and powerful today in the 21st century as they were then.</li>

      <li>Perhaps the most important achievement of the Harlem Renaissance is the enduring knowledge that all citizens are entitled to a chance at greatness. Whenever such opportunities have flourished, the world’s supply of cultural treasures has also grown. The Harlem Renaissance was one of America’s shining moments.</li>
</ol>
    `
  },

  'habitats': {
    title: 'Delicate Habitats of the Ocean',
    content: `
    <img src="images/habitats.png" alt="Image failed to load. Please try again later." style="float: right; height: 120px; margin-left: 10px;">
     <ol class="paragraph-numbers">
      <li>Coral reefs and the ocean communities that surround them are some of the most beautiful and diverse ecosystems in the world. From Australia’s Great Barrier Reef to Virginia’s Chesapeake Bay, coral reefs are large and complex ocean systems. They provide food and shelter for thousands of fish and other ocean creatures. These coral reefs, while they are massive marine structures, actually depend on tiny ocean organisms and specific water conditions to survive and flourish.</li>

      <li>Coral is a structure of tiny animals called polyps that live fixed in one place. Many singular polyps band together and form larger colonies called reefs. The polyps have tentacles that stretch out to catch and feed on microscopic plankton and other marine animals. Coral has a hard skeleton made of calcium. As the polyps die, they leave behind their skeletons, which creates a reef, the structural base for the entire colony. Over time the structure grows upward, sometimes as much as ten centimeters a year. The newest polyps of the coral colony live at the top of the structure. The polyps can retreat quickly into their hard outer skeletons to escape predators.</li>

      <li>Corals grow in a variety of shapes, sizes, and colors. Species such as brain coral and fan coral take shapes that fit their names. Whip coral, which has a thin branchlike structure reaching up to three feet in length, is native to the Chesapeake Bay and provides an important habitat for the bay’s black sea bass. The deep purple branches of whip coral can be found in the lower bay on rocks and pilings and human- made structures below the water’s surface, such as bridge supports.</li>

      <li>When polyp colonies become established, the coral reefs provide a home for many sea creatures. Marine sponges, sea slugs, jellyfish, sea anemones, sea turtles, and a variety of fish depend on reefs for both food and shelter. In fact, more than 4,000 species of fish and marine life may populate a typical coral community. Some species, such as anemones, attach themselves to the surface of the reef, while others, such as sea slugs, seek protection within it.</li>

      <li>Most types of corals have a cooperative relationship with algae, which benefits both organisms. Algae plants live among the coral polyps and, through the process of photosynthesis, produce food they share with the coral. In return, the reef’s structure provides protection for the algae. Algae need light for photosynthesis, and coral reefs are found in shallow water where light can easily reach the structures algae inhabit.</li>

      <li>In recent years scientists and researchers have observed a troubling trend in these delicate ocean communities. Reefs around the world are being stressed by changes in the oceans’ temperatures and chemical balances. These changes are damaging the relationship between the coral and the algae. When ocean water warms or coral is stressed in some other way, coral views algae as a foreign substance rather than a food source and rejects the algae. In addition, the increasing level of acidity in the oceans makes it harder for coral to build its skeletal structure and may even dissolve existing coral skeletons. This damage affects all the marine creatures that depend on the reef for survival.</li>

      <li>There are positive developments, however, in the efforts to preserve the world’s coral reefs. The reefs themselves are helping scientists combat harmful environmental changes. Scientists hope that by learning more about how coral and algae coexist, species can be identified and better protected.</li>

      <li>Along with other management programs, the state of Virginia is constructing artificial reefs in order to provide feeding grounds and shelter for endangered reef- dwelling fish. These reefs are made of old tires and sunken ships, and since the 1990s the program has been using a new concrete, igloo- shaped structure. The Virginia Artificial Reef Program has created more than 23 artificial reef sites that replicate natural ocean reefs and attract fish and other ocean creatures.</li>

      <li>Coral reefs are beautiful habitats that provide food and shelter for fish and other marine animals. The reefs have an amazing ability to thrive, but changes in oceanic conditions are damaging these important habitats. However, scientists are working successfully to learn more about protecting the world’s coral reefs.</li>
</ol>
    `
  },

   'swift': {
    title: 'The Black Swift',
    content: `
    <ol class="paragraph-numbers">
      <li>It was on the third day that Joanna finally saw the bird.</li>

      <li>Joanna was perched on a boulder enjoying the warmth of the summer sun and trying not to think about her old school and friends. The splashing of the waterfall nearby drowned out most other noises, so it took Joanna a moment to hear another sound, high-pitched and repeated.</li>

      <li><i>Plik-plik-plik-plik!</i></li>

      <li>Looking around, Joanna saw trees, both evergreen and leafy, and the pool of water at the base of the waterfall that fed a healthy stream running downhill. She also noted the rocky slope of the trail as it led upward behind her, farther into the mountain. Then she heard it again.</li>

      <li><i>Plik-plik-plik-plik!</i></li>

      <li>Joanna had been to this waterfall twice before. Her family had just relocated to Colorado, and upon their arrival, as the moving van was still being unloaded, Joanna had immediately asked if she could go for a ride to explore her new neighborhood.</li>

      <li>“Take the walkie-talkie with you,” her mother had said that day, handing her one of the receivers they often used to communicate back in their old neighborhood.</li>

      <li>As Joanna pedaled away on her bicycle, she called back, “First I’ll just do some preliminary scouting.”</li>

      <li>The truth was that she was running away.</li>

      <li>"Not <i>literally</i> running away, of course, but getting out of her new house, away from the boxes that needed unpacking, and away from the neighbors who wanted to meet the “new girl.” She wanted to clear her mind of her worries. Would she like her new school? How would she make friends in this unfamiliar place? Would she be able to adjust? Joanna had seen signs that a state park was nearby, and by luck, she chanced upon one of its trail markers just a mile away.</li>

      <li>Joanna locked up her bike, read the park rules, studied the maps at the outdoor kiosk, and started hiking up the trail. After a half-hour’s ascent of fairly steep climbing, she noticed the trail leveled off into a little clearing. It was like a landing halfway up a stairway, insulated by trees and a waterfall cascading into a pool from twenty feet up.</li>

      <li>The setting was beautiful, and Joanna had felt her fears evaporate amid the soft ferns and the mist of the waterfall. In the following days, when she was not unpacking at home, Joanna had returned several times to this comforting place.</li>

      <li><i>Plik-plik-plik-plik!</i></li>

      <li>The sound jolted Joanna back to the present. Her watchful eyes now detected movement by the side of the waterfall. Standing slowly and creeping a step closer, she saw that there, clinging to a wet, mossy rock about twelve feet above the pool, was a small bird.</li>

      <li>The bird tilted its head to study Joanna with one of its large eyes. Its feathers were mostly black, camouflaging its body against the dark, wet rocks. The bird had a gray head the color of soot, and its eyes, two onyx stones, were surrounded with black, as if rimmed in eye makeup.</li>

      <li><i>Plik-plik-plik-plik!</i></li>

      <li>Now Joanna understood what she was hearing—-it must be a call for help! Somehow the little fellow must have become stranded or injured; perhaps it was unable to fly. The little black bird managed to hang on to the rock despite the slippery moss and being pelted by the spray of the waterfall. <i>The poor thing is probably miserable</i>, Joanna thought, <i>but what can I do?</i></li>

      <li>Remembering that the park map showed a ranger station higher up the trail, Joanna began hiking to get help. The trail above the waterfall was a more arduous, rockier climb, but she managed to reach the ranger station. A uniformed ranger in a wide--brimmed green hat stood on the porch, gazing across the canopy of the forest through large binoculars.</li>

      <li>“I’m really sorry to bother you, but I think there’s a bird in distress down at the waterfall. I’m not sure what to do,” she said.</li>

      <li>The ranger, whose nametag read “Dan,” shook his head. “No bother. Besides, I’m always looking for an excuse to hike down to the waterfall. Let’s have a look.”</li>

      <li>Later, approaching the clearing from above, Joanna apologized again. “I’m really sorry to drag you all the way down here.” Entering the glade, she looked toward the location where the bird had been. “It was right there!” she said, starting to turn crimson with embarrassment.</li>

      <li>Dan smiled patiently. “That’s okay,” he said, “maybe it found a way—-”</li>

      <li><i>Plik-plik-plik-plik!</i></li>

      <li>“There it is!” said Joanna excitedly. “Did you hear it?”</li>

      <li>Dan slowly brought a finger to his lips in a “shushing” gesture and moved backward, away from the waterfall to where the trail led downhill. Once they were a little farther away, Joanna couldn’t endure the suspense anymore. “Don’t tell me; it’s actually a <i>dangerous</i> bird?” she whispered.</li>

      <li>The ranger’s face looked awestruck. “Just fix your eyes on the waterfall,” he suggested. A few moments later, a black bird with a gray head and curved wings slowly emerged from behind the watery mist.</li>

      <li>“I can’t believe it,” Dan breathed. “That’s not a dangerous bird, but it is a mysterious one. It’s called a black swift.”</li>

      <li>Joanna shrugged and waited for an explanation.</li>

      <li>“Let me put it this way,” Dan said. “I’ve been a birdwatcher for a long time, and I’ve never seen one. Black swifts are unusual birds because they nest only on sea cliffs or behind waterfalls, like this one, which makes it hard to observe them in their natural habitat.”</li>

      <li>Joanna watched the bird inching along the rocks. “So it’s not actually injured?” As Joanna spoke, the bird jumped off the rock and disappeared instantly from sight, like an arrow shot from a bow.</li>

      <li>“No,” Dan laughed. “It looks pretty healthy to me. The black swift flies so fast and so high, it was once nicknamed ‘the cloud dweller.’”</li>

      <li><i>A bird called a “cloud dweller” that nests behind waterfalls</i>, Joanna thought. <i>How cool is that?</i></li>

      <li>“It’s fortunate we heard it,” said Dan. “Black swifts are usually silent, but sometimes around their nests you might hear a—-”</li>

      <li><i>Plik-plik-plik-plik!</i></li>

      <li>The ranger and the girl looked at each other because both had heard the quieter, high- pitched call clearly. “It sounds like there’s a <i>family</i> of black swifts back there,” said Dan. “This is a rare discovery.”</li>

      <li>Joanna gazed at the waterfall. This dark, cold, wet environment didn’t seem like it would make a good home, and yet this little family of birds was thriving here. They had adapted to a difficult, even treacherous environment to make a home here. She had assumed the bird needed help, but really it was going to get along just fine.</li>
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