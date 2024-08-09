var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  johnestesmath   copyright  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Section",
  "number": "1",
  "title": "The Goal of Onboarding to Mathematics",
  "body": " The Goal of Onboarding to Mathematics  Welcome to Overview of Mathematics! This book is different in its aim from most mathematics texts that you'll encounter. Whereas most textbooks will dig into the details of a particular topic (one topic, no doubt, worth the effort it takes to dig into), Onboarding to Mathematics will look at a variety of topics.   Who is this book for?   Most in-coming mathematics majors probably choose their major because of the success they had in high school. I chose to study mathematics in college just because I enjoyed my high school courses and wanted to do some more math. But what do math majors do? What is in store for the freshman math major?  This text is for the young math major (and anyone interested in the things that undergraduate mathematics thinks abouts) to get a glimpse of things on the path that they have began walking upon.   What this book is not   We should mention that this book is not exhaustive in any sense. We will not turn over every stone on any given subject and will look at these subjects at a somewhat surface level. We also admit that certain things will be left out, but we are confident those topics will be addressed at a sophisticated level in separate courses.   So what is the point of this book?    \"Onboarding\" is the process of introducing a new person into the culture and customs of an organization, and that is exactly what this text is about. Onboarding to Mathematics seeks to introduce students to the wonderful world of mathematics and its vibrant community.  In particular, we hope to introduce  the culture of the mathematics community both locally at Belhaven along with the broader community of mathematicians across the world,  snapshots of common math topics in interactive ways,  and skills to maximize success as a student.  And we hope to have some fun while doing it.  Best practices for this course are just showing up with a good attitude and having a curiosity about math topics.  Let's get started!  "
},
{
  "id": "frontmatter-3-3",
  "level": "2",
  "url": "frontmatter-3.html#frontmatter-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Who is this book for? "
},
{
  "id": "frontmatter-3-6",
  "level": "2",
  "url": "frontmatter-3.html#frontmatter-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "What this book is not "
},
{
  "id": "frontmatter-3-8",
  "level": "2",
  "url": "frontmatter-3.html#frontmatter-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "So what is the point of this book? "
},
{
  "id": "frontmatter-3-9",
  "level": "2",
  "url": "frontmatter-3.html#frontmatter-3-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "\"Onboarding\" "
},
{
  "id": "frontmatter-3-11",
  "level": "2",
  "url": "frontmatter-3.html#frontmatter-3-11",
  "type": "Remark",
  "number": "1.0.1",
  "title": "",
  "body": "Best practices for this course are just showing up with a good attitude and having a curiosity about math topics. "
},
{
  "id": "sec-sets",
  "level": "1",
  "url": "sec-sets.html",
  "type": "Section",
  "number": "1.1",
  "title": "Shopping Carts and Sets",
  "body": " Shopping Carts and Sets  Sunday afternoon at the local supermarket is a bustling place. Shoppers cut each other off for the last jar of salsa with a smile and a 'pardon me'. Amid the somewhat friendly and mostly competitive crowd, long-time friends Yuri and Kalo bump into each other in front of the cauliflower. It's always a bit awkward looking into someone else's shopping cart (feels like a violation of privacy, right?), but Yuri couldn't help but notice that there was some overlap.  PUT A FIGURE HERE  \"Hey, I like rice cakes, too. Look!\" exclaimed Yuri holding up a bag of rice cakes from his cart.  \"Oh, I hate them! Those are for my mom,\" replied Kalo. Yuri frowned.  Anyway... the two carts looked like this:     Yuri's cart  Kalo's cart    rice cakes  rice cakes    cauliflower  cauliflower    halibut  tuna    coffee creamer  crab legs    spicy ramen  spicy ramen    cilantro  parsley    yellow onion  purple onion    corn chips  cookies    salami  bagels    eggs  salami      cream cheese      Collections of Things  There's some mathematics going on here. Anytime we find a collection of items (like a shopping cart) we have a mathematical object called a set.  A set is simply a collection of objects that we refer to as elements .  Let's call the set of Yuri's cart , written as { rice cakes, cauliflower, halibut, coffee creamer, spicy ramen, cilantro, yellow onion, corn chips, salami, eggs } . Similarly {rice cakes, cauliflower, tuna, crab legs, spicy ramen, parsley, purple onion, cookies, bagels, salami, and cream cheese} is the set representing Kalo's cart. So halibut is an element of (written as halibet ), and tuna .  We could make a list of the items that both Yuri and Kalo have in their carts, and this overlap between their two carts represents the \"intersection of Y and K\", denoted .  In general for sets and , the intersection of and  , , is the set of elements in both sets.    Intesection of and , .       Yuri and Kalo's intersection   What does contain?     = {rice cakes, cauliflower, spicy ramen, salami}    Another friend interrupts Yuri and Kalo's meeting. JACOBI greets them both as they unapologetically rifle through his cart.  JACOBI's cart is represented by the set {spicy ramen, cilantro, corn chips, and eggs}. Yuri can't help notice that everything in is also in . In this case, we say that is a subset of , denoted or .    A set is a subset of if for any element , we know also that .      A subset of , .      Subsets of Dairy   Let be the set of all dairy items. Find a subset of that is also a subset of .    The subset we're looking for must be a set of dairy items in Kalo's cart: , for example.  That is, {cream cheese}.     Is the intersection a subset?   Is a subset of ?    Yes! Any element in is also an element of .    Unbeknownst to Kalo, Kalo's wife MARNIE is also in the grocery store with {cauliflower, macaroni, purple onion, water, bacon}. When Kalo and MARNIE bump into each other, they decide to finish their shopping and to consolidate their items to one cart. Kalo reshelves the cauliflower and purple onion, though, since MARNIE already has those items in her cart. This new cart is known as the \"union of K and M\", .    In general, for sets and , the union of and , , is the collection of elements that are in either set (or both).      Union of and , .      Question of union   What is ?     Another question of union   What is ?     More complicated sets   What about ?      An empty cart  After Kalo and Marnie consolidate their carts, somebody snags Kalo's now empty cart. This makes Kalo consider how an empty cart relates to sets.      Can a set have 0 elements?    Definitely!    Actually, that empty cart is symbolic of a very important set. The empty set is the set with no elements. We denote it as .      Give an example of two sets, and for which .    There are millions of examples. For example, let be the set of all species of turtles and be the set of flying creatures. Come up with your on example.      Venn Diagrams  A common way to picture sets and how they interact is with overlapping circles. You have already seen a few such images in this section. We call these figures Venn diagrams, named after mathematician John Venn (1834-1923), and they help us quickly recognize how given sets are related.  For example, consider the sets , , and . Are sets such as or obvious? The Venn diagram makes these relationships obvious.         Use the Venn diagram to provide .    We can see .    It's also fairly common to find Venn diagram memes. You should do a quick internet search to see for yourself.       How about we look at sets of actors from popular movie franchises?      More sets later Remember that our goal is to introduce you to topics you'll cover in more detail later. There are other set operations that we won't cover here. You'll see these in classes like Discrete Mathematics, Modern Algebra, and many others.    Set Activities   You will now be human Venn diagrams (This works best in an open area).    Teams give an elt in called out sets like A UNION B INTERSECT C, etc.    "
},
{
  "id": "sec-sets-7",
  "level": "2",
  "url": "sec-sets.html#sec-sets-7",
  "type": "Table",
  "number": "1.1.1",
  "title": "",
  "body": "   Yuri's cart  Kalo's cart    rice cakes  rice cakes    cauliflower  cauliflower    halibut  tuna    coffee creamer  crab legs    spicy ramen  spicy ramen    cilantro  parsley    yellow onion  purple onion    corn chips  cookies    salami  bagels    eggs  salami      cream cheese    "
},
{
  "id": "subsec-sets-3",
  "level": "2",
  "url": "sec-sets.html#subsec-sets-3",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "A set is simply a collection of objects that we refer to as elements . "
},
{
  "id": "subsec-sets-6",
  "level": "2",
  "url": "sec-sets.html#subsec-sets-6",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "In general for sets and , the intersection of and  , , is the set of elements in both sets. "
},
{
  "id": "subsec-sets-7",
  "level": "2",
  "url": "sec-sets.html#subsec-sets-7",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": "  Intesection of and , .  "
},
{
  "id": "q-setintersect",
  "level": "2",
  "url": "sec-sets.html#q-setintersect",
  "type": "Question",
  "number": "1.1.5",
  "title": "Yuri and Kalo’s intersection.",
  "body": " Yuri and Kalo's intersection   What does contain?     = {rice cakes, cauliflower, spicy ramen, salami}   "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-sets.html#def-",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "  A set is a subset of if for any element , we know also that .   "
},
{
  "id": "subsec-sets-13",
  "level": "2",
  "url": "sec-sets.html#subsec-sets-13",
  "type": "Figure",
  "number": "1.1.7",
  "title": "",
  "body": "  A subset of , .  "
},
{
  "id": "q-setsubset",
  "level": "2",
  "url": "sec-sets.html#q-setsubset",
  "type": "Question",
  "number": "1.1.8",
  "title": "Subsets of Dairy.",
  "body": " Subsets of Dairy   Let be the set of all dairy items. Find a subset of that is also a subset of .    The subset we're looking for must be a set of dairy items in Kalo's cart: , for example.  That is, {cream cheese}.   "
},
{
  "id": "q-setsubsetintersect",
  "level": "2",
  "url": "sec-sets.html#q-setsubsetintersect",
  "type": "Question",
  "number": "1.1.9",
  "title": "Is the intersection a subset?",
  "body": " Is the intersection a subset?   Is a subset of ?    Yes! Any element in is also an element of .   "
},
{
  "id": "def-union",
  "level": "2",
  "url": "sec-sets.html#def-union",
  "type": "Definition",
  "number": "1.1.10",
  "title": "",
  "body": "  In general, for sets and , the union of and , , is the collection of elements that are in either set (or both).   "
},
{
  "id": "subsec-sets-19",
  "level": "2",
  "url": "sec-sets.html#subsec-sets-19",
  "type": "Figure",
  "number": "1.1.11",
  "title": "",
  "body": "  Union of and , .  "
},
{
  "id": "q-union1",
  "level": "2",
  "url": "sec-sets.html#q-union1",
  "type": "Question",
  "number": "1.1.12",
  "title": "Question of union.",
  "body": " Question of union   What is ?   "
},
{
  "id": "q-union2",
  "level": "2",
  "url": "sec-sets.html#q-union2",
  "type": "Question",
  "number": "1.1.13",
  "title": "Another question of union.",
  "body": " Another question of union   What is ?   "
},
{
  "id": "q-union3",
  "level": "2",
  "url": "sec-sets.html#q-union3",
  "type": "Question",
  "number": "1.1.14",
  "title": "More complicated sets.",
  "body": " More complicated sets   What about ?   "
},
{
  "id": "q-emptyset",
  "level": "2",
  "url": "sec-sets.html#q-emptyset",
  "type": "Question",
  "number": "1.1.15",
  "title": "",
  "body": "  Can a set have 0 elements?    Definitely!   "
},
{
  "id": "subsec-emptyset-5",
  "level": "2",
  "url": "sec-sets.html#subsec-emptyset-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "empty set "
},
{
  "id": "q-emptyinter",
  "level": "2",
  "url": "sec-sets.html#q-emptyinter",
  "type": "Question",
  "number": "1.1.16",
  "title": "",
  "body": "  Give an example of two sets, and for which .    There are millions of examples. For example, let be the set of all species of turtles and be the set of flying creatures. Come up with your on example.   "
},
{
  "id": "subsec-venn-4",
  "level": "2",
  "url": "sec-sets.html#subsec-venn-4",
  "type": "Figure",
  "number": "1.1.17",
  "title": "",
  "body": "  "
},
{
  "id": "q-venn1",
  "level": "2",
  "url": "sec-sets.html#q-venn1",
  "type": "Question",
  "number": "1.1.18",
  "title": "",
  "body": "  Use the Venn diagram to provide .    We can see .   "
},
{
  "id": "subsec-venn-8",
  "level": "2",
  "url": "sec-sets.html#subsec-venn-8",
  "type": "Figure",
  "number": "1.1.19",
  "title": "",
  "body": "  "
},
{
  "id": "subsec-venn-11",
  "level": "2",
  "url": "sec-sets.html#subsec-venn-11",
  "type": "Figure",
  "number": "1.1.20",
  "title": "",
  "body": "  "
},
{
  "id": "subsec-venn-12",
  "level": "2",
  "url": "sec-sets.html#subsec-venn-12",
  "type": "Remark",
  "number": "1.1.21",
  "title": "More sets later.",
  "body": " More sets later Remember that our goal is to introduce you to topics you'll cover in more detail later. There are other set operations that we won't cover here. You'll see these in classes like Discrete Mathematics, Modern Algebra, and many others. "
},
{
  "id": "act-set1",
  "level": "2",
  "url": "sec-sets.html#act-set1",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": " You will now be human Venn diagrams (This works best in an open area).  "
},
{
  "id": "act-set2",
  "level": "2",
  "url": "sec-sets.html#act-set2",
  "type": "Activity",
  "number": "1.1.2",
  "title": "",
  "body": " Teams give an elt in called out sets like A UNION B INTERSECT C, etc.  "
},
{
  "id": "sec-pascaltriangle",
  "level": "1",
  "url": "sec-pascaltriangle.html",
  "type": "Section",
  "number": "1.2",
  "title": "A Special Triangle",
  "body": " A Special Triangle      You can find all sorts of interesting examples of surprising structures in the universe of mathematics. One such example is a very special triangle of numbers that's easy to construct and borderline ubiquitous in its applications.  This triangle goes by many names and was discovered by several cultures in history. In 450 BC, Indian mathematician, Pingata, called this new construction the \"Staircase of Mount Meru\". Persian mathematician, Omar Khayyam, discovered \"Khauuam's Triangle\" in the 11th century, and close to the same time, Chinese mathematician, Jin Xian, discovered \"Yang Hui's Triangle\". In the western world, this triangle is most commonly refered to as Pascal's Triangle, named after french mathematician, Blaise Pascal, who discovered this triangle in the 17th century. REFERENCE      The Pingata, Khauuman's Triangle, and Yang Hui's Triangle    Constructing Pascal's Triangle  Now we will follow the foot steps of giants. We can build Pascal's Triangle by listing out the rows. For the first row (row ), we just write , and the second row is composed of . The third row (what we call row 2) consists of like below.      The pattern of Pascal's Triangle is not immediately obvious for us yet. The in row 2 comes from adding the two 's above it in row 1. For the next row (row 3), we start with . The next entry consists of the sum of the two numbers above it ( ). Next is the sum , and finally we end the row with . That is, row 3 is .  Then we just repeat this process.     Row 4   Fill out row 4 of Pascal's Triangle.    Following the same process, row 4 has entries or .      Fill out the first 8 rows of Pascal's Triangle.    Patterns of Pacal's Triangle  Pascal's triangle has interested mathematicians for centuries, as it is filled with interesting patterns.     Adding along a row   Add entries of rows 0 through 4. What pattern do you notice?    The sume of entries of rows 0 through 4 are respectively. These looks like powers of .    We just uncovered that the sum of entries along row add up to . This is just one pattern of Pascal's triangle, but there are many more. Wadji Mohamed Retemi expertly hightlights some of these patterns we find in Pascal's triangle in this Ted Ed video.        Use TedEd's video and Pascal's Triangle to answer the following.   Binomial Expansion     Use Pascal's Triangle to expand the binomial      Powers of 11   Use Pascal's Triangle to find      Counting Apples   There are apples on a counter. In how many ways could we select of them? Use Pascal's Triangle to decide.     Triangular Numbers   List out of the first 6 triangular numbers.     Tetrahedral Numbers   What is the 5th tetrahedral number?     "
},
{
  "id": "sec-pascaltriangle-2",
  "level": "2",
  "url": "sec-pascaltriangle.html#sec-pascaltriangle-2",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec-pascaltriangle-5",
  "level": "2",
  "url": "sec-pascaltriangle.html#sec-pascaltriangle-5",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": "   The Pingata, Khauuman's Triangle, and Yang Hui's Triangle  "
},
{
  "id": "subsec-pascalconstruct-3",
  "level": "2",
  "url": "sec-pascaltriangle.html#subsec-pascalconstruct-3",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": "   "
},
{
  "id": "ques-pascal1",
  "level": "2",
  "url": "sec-pascaltriangle.html#ques-pascal1",
  "type": "Question",
  "number": "1.2.4",
  "title": "Row 4.",
  "body": " Row 4   Fill out row 4 of Pascal's Triangle.    Following the same process, row 4 has entries or .   "
},
{
  "id": "act-pascal1",
  "level": "2",
  "url": "sec-pascaltriangle.html#act-pascal1",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": "Fill out the first 8 rows of Pascal's Triangle. "
},
{
  "id": "sec-patterns-4",
  "level": "2",
  "url": "sec-pascaltriangle.html#sec-patterns-4",
  "type": "Question",
  "number": "1.2.5",
  "title": "Adding along a row.",
  "body": " Adding along a row   Add entries of rows 0 through 4. What pattern do you notice?    The sume of entries of rows 0 through 4 are respectively. These looks like powers of .   "
},
{
  "id": "vid-khanpascal",
  "level": "2",
  "url": "sec-pascaltriangle.html#vid-khanpascal",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": "   "
},
{
  "id": "ques-pascal2",
  "level": "2",
  "url": "sec-pascaltriangle.html#ques-pascal2",
  "type": "Question",
  "number": "1.2.7",
  "title": "Binomial Expansion.",
  "body": " Binomial Expansion     Use Pascal's Triangle to expand the binomial    "
},
{
  "id": "ques-pascal3",
  "level": "2",
  "url": "sec-pascaltriangle.html#ques-pascal3",
  "type": "Question",
  "number": "1.2.8",
  "title": "Powers of 11.",
  "body": " Powers of 11   Use Pascal's Triangle to find    "
},
{
  "id": "ques-pascal4",
  "level": "2",
  "url": "sec-pascaltriangle.html#ques-pascal4",
  "type": "Question",
  "number": "1.2.9",
  "title": "Counting Apples.",
  "body": " Counting Apples   There are apples on a counter. In how many ways could we select of them? Use Pascal's Triangle to decide.   "
},
{
  "id": "ques-pascal5",
  "level": "2",
  "url": "sec-pascaltriangle.html#ques-pascal5",
  "type": "Question",
  "number": "1.2.10",
  "title": "Triangular Numbers.",
  "body": " Triangular Numbers   List out of the first 6 triangular numbers.   "
},
{
  "id": "ques-pascal6",
  "level": "2",
  "url": "sec-pascaltriangle.html#ques-pascal6",
  "type": "Question",
  "number": "1.2.11",
  "title": "Tetrahedral Numbers.",
  "body": " Tetrahedral Numbers   What is the 5th tetrahedral number?   "
},
{
  "id": "sec-belhaven-math-intro",
  "level": "1",
  "url": "sec-belhaven-math-intro.html",
  "type": "Section",
  "number": "1.3",
  "title": "Introduction to Belhaven Mathematics",
  "body": " Introduction to Belhaven Mathematics  Welcome to the Mathematics and Computer Science Department (MCS) at Belhaven University, one department under Belhaven's School of Science & Mathematics. We work hard to provide unique learning opportunities, to do a lot of math, and to have fun while we grow. Maybe we can best summarize what Belhaven MCS is about with the three crucial pillars of our identity:  Community,  Academic experiences,  Service.        Keep these pillars in mind Community. Academic experiences. Service.  We believe that our students reach their greatest potential by following these pillars, and we strive to incorporate these values throughout our curriculum.   Community     We are very proud of the community of students, faculty, and staff that we have in the Belhaven Math & Computer Science department, and we're excited about you joining us.  Do you want to get the most out of your college experience? We picked community as our first pillar for a reason. We want you to be a part of something special! Our most successful students at Belhaven are the ones who get involved early and often, and we encourage you to be an active part of our community.  And we have a lot of opportunities for you to get involved quickly!   MCS Club  The student-led Math & Computer Science Club gets together frequently to play games, eat some food, and sneak in some math and computer science. The MCS Club members help each other with resumes, projects, 3D printing, and more.     The MCS Club is unique in that it also serves as student chapters for both the MAA (Mathematical Association of America) and the ACM (Association of Computing & Machinery), so it's like two clubs in one. Club membership guarantees membership to one of these professional societies at a very discounted rate.     Do you want to join the MCS Club? Of course! Let your instructor know to get further details.    STEM Events  The MCS Department and the School of Science and Mathematics hosts a variety of events. It's important to join the larger science community at Belhaven. Usually food is involved too.  Be on the lookout for   Homecoming tailgating: Belhaven STEM puts on a spread for students and alumni before the football homecoming game.       FOOD: Lunch before finals, burgers at a picnic, cookies and donuts. We like to break bread with each other, and we hope you get involved.   Merch: We often order MCS or Belhaven STEM shirts, sweaters, hoodies, and such.   ScienceFest: Help us give back to the community by participating in ScienceFest, the largest science festival in the state. We help the Mississippi Children's Museum and Mississippi's Museum of Natural Science by showing math-based games (and other hands-on science experiments) to children of the Jackson metro.          Good Communication  Good communication is so undervalued. Go talk to your professors . At Belhaven, we want to know our students. Meet your classmates. They're going to help you through this next assignmnent.  Download the Microsoft Team app, and join the BelhavenSTEM Team. We post about upcoming events and have a channel specific to internships, scholarships, and research opportunities.     Academic Experiences  Your degree is measured in credit hours. You're taking classes ultimately to earn a degree. You'll also expect some grades in those classes. BUT let's be careful not to mistake grades and credit hours with actual learning. Our goal in the MCS Department is provide an environment of true learning. We want you to adapt a mentality of a continual learning: one who learns inside and outside of the classroom.  In addition to core classes such as Calculus, Linear Algebra, Discrete Mathematics, and Differential Equations, Belhaven's MCS department delivers a number of curriculum add-ons. Let's take a look at what additional academic experiences we offer.   STEM Seminar  Meet professional scientists and mathematicians who share about what they do, how they got there, and how you can too. This is a great way to find internships and jobs.       Mathematical Research  In MAT 391, 392, 491 and 492, students participate in the mathematical research process reviewing recent results of a select topic and attempting to further it. These students will present their findings as a poster and presentation at the Belhaven University Undergraduate Research Symposium (BUURS) and our sectional meetings of the MAA.           Belhaven Maker Campus  The Belhaven Maker Campus is a collaboration between Math & Computer Science and Art & Design featuring formative technologies such as 3D printers, CAD drawing systems, laser engraving, and more. We are a community of engineering students, artists, and mathematicians wanting to get our hands busy making things with technology.     Join the Maker Campus, and you can gain access to both of our campuses maker labs. Design your own creations and 3D print them! Customize your gear with laser etching or make custom stickers. There are a lot of possibilities, and the Maker Campus is designed to make your ideas a reality.          The Eyes of Faith Portfolio  What does the Bible say about mathematics? What does life as a Christian mathematician entail? What role does change and randomness play in God's creation? These are deep questions that we will ask ourselves during throughout our mathematics coursework at Belhaven.  The book Mathematics through the Eyes of Faith by Russell Howell and James Bradley approaches these questions in an intellectually honest manner . Students will use this text as a reference to write their own thoughts in their Eyes of Faith Portfolio , a collaboration of Eyes of Faith papers written over several courses covering chapter of our reference text.  The chapter breakdown follows curiously close to our major requirements and is summarized in the following table. (You might want to hang on to this one.)  Eyes of Faith Portfolio        Course  Course Name  Eyes Chapter    MAT 207  Calculus I   1. The Big Questions     MAT 208  Calculus II   2. The Historical Context     MAT 209  Calculus III   3. Infinity     MAT 210  Calculus IV   7. Beauty     MAT 303  Discrete Mathematics   6. Proof and Truth     MAT 304  Differential Equations   8. Effectiveness     MAT 305  Statistics and Probability   5. Chance     MAT 311  Linear Algebra   4. Dimension     MAT 410  Advanced Calculus   9. Epistemology     MAT 491  Intro to Math Research I   10. Ontology     MAT 492  Intro to Math Research II   11. An Apology         For Engineering Majors  In addition to academic experiences math majors experience, students in Belhaven's engineering partnership  learn AutoCAD in PHY 119 Intro to Engineering  interact with professional engineers from places like Yates construction, Raytheon, and Asset Engineering.  take site visits to Ole Miss, Mississippi State, and places like Nissan and the U.S. Army Corps of Engineers Research and Development Center (ERDC).         For Actuarial Science Majors  For those majoring in Actuarial Sciences (ASM), students will  learn statistical software such as R,  sit for the first actuarial exam, the Probability Exam (SOA Exam P).         Double Major and Minors  A mathematics major is very valuable, but pairing a math degree with another field will bring more opportunities than you might expect. We recommend either double-majoring or minoring in the following areas:   Computer Science    Chemistry or Physics    Business or Accounting    Tradigital Art     Besides these recommended degrees, we have had double majors in Dance, Theatre, Music, History, English, and so much more.   "
},
{
  "id": "sec-belhaven-math-intro-2-2",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#sec-belhaven-math-intro-2-2",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": "  "
},
{
  "id": "sec-belhaven-math-intro-3",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#sec-belhaven-math-intro-3",
  "type": "Remark",
  "number": "1.3.2",
  "title": "Keep these pillars in mind.",
  "body": " Keep these pillars in mind Community. Academic experiences. Service. "
},
{
  "id": "subsec-community-2",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsec-community-2",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": "  "
},
{
  "id": "subsubsec-mcsclub-3",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsubsec-mcsclub-3",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": "  "
},
{
  "id": "subsubsec-mcsclub-5",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsubsec-mcsclub-5",
  "type": "Figure",
  "number": "1.3.5",
  "title": "",
  "body": "  "
},
{
  "id": "subsubsec-social-3-1-1-2",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsubsec-social-3-1-1-2",
  "type": "Figure",
  "number": "1.3.6",
  "title": "",
  "body": "  "
},
{
  "id": "subsubsec-social-3-1-4-2",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsubsec-social-3-1-4-2",
  "type": "Figure",
  "number": "1.3.7",
  "title": "",
  "body": "  "
},
{
  "id": "subsubsec-communicate-2",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsubsec-communicate-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Go talk to your professors "
},
{
  "id": "subsec-acexperiences-2",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsec-acexperiences-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "BUT let's be careful not to mistake grades and credit hours with actual learning. "
},
{
  "id": "subsubsec-seminar-3",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsubsec-seminar-3",
  "type": "Figure",
  "number": "1.3.8",
  "title": "",
  "body": "  "
},
{
  "id": "subsec-acexperiences-5-3",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsec-acexperiences-5-3",
  "type": "Figure",
  "number": "1.3.9",
  "title": "",
  "body": "  "
},
{
  "id": "subsec-acexperiences-5-4",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsec-acexperiences-5-4",
  "type": "Figure",
  "number": "1.3.10",
  "title": "",
  "body": "  "
},
{
  "id": "subsec-makercampus-3",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsec-makercampus-3",
  "type": "Figure",
  "number": "1.3.11",
  "title": "",
  "body": "  "
},
{
  "id": "subsec-makercampus-5",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsec-makercampus-5",
  "type": "Figure",
  "number": "1.3.12",
  "title": "",
  "body": "  "
},
{
  "id": "subsec-makercampus-6",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#subsec-makercampus-6",
  "type": "Figure",
  "number": "1.3.13",
  "title": "",
  "body": "  "
},
{
  "id": "sec-belhaven-math-intro-8-3",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#sec-belhaven-math-intro-8-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Mathematics through the Eyes of Faith Eyes of Faith Portfolio "
},
{
  "id": "table-eyes",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#table-eyes",
  "type": "Table",
  "number": "1.3.14",
  "title": "Eyes of Faith Portfolio",
  "body": " Eyes of Faith Portfolio        Course  Course Name  Eyes Chapter    MAT 207  Calculus I   1. The Big Questions     MAT 208  Calculus II   2. The Historical Context     MAT 209  Calculus III   3. Infinity     MAT 210  Calculus IV   7. Beauty     MAT 303  Discrete Mathematics   6. Proof and Truth     MAT 304  Differential Equations   8. Effectiveness     MAT 305  Statistics and Probability   5. Chance     MAT 311  Linear Algebra   4. Dimension     MAT 410  Advanced Calculus   9. Epistemology     MAT 491  Intro to Math Research I   10. Ontology     MAT 492  Intro to Math Research II   11. An Apology     "
},
{
  "id": "sec-belhaven-math-intro-10",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#sec-belhaven-math-intro-10",
  "type": "Figure",
  "number": "1.3.15",
  "title": "",
  "body": "  "
},
{
  "id": "sec-belhaven-math-intro-11-3",
  "level": "2",
  "url": "sec-belhaven-math-intro.html#sec-belhaven-math-intro-11-3",
  "type": "Figure",
  "number": "1.3.16",
  "title": "",
  "body": "  "
},
{
  "id": "sec-successfuls",
  "level": "1",
  "url": "sec-successfuls.html",
  "type": "Section",
  "number": "1.4",
  "title": "How to be a successful math major",
  "body": " How to be a successful math major  How do you succeed as a math student? What does success even look like for a mathematician?  College is a unique time to invest wholeheartedly in yourself. It is an enormous opportunity to build your skills, make valuable connections, and lay a foundation for your future. Even as a freshman, having a good plan for approaching your studies will make your life much, much easier.  Before going too far towards your degree in mathematics, it is worth spending time considering how to be a successful mathematics student. We will spend a few minutes now discussing a good strategy to making the most of your college tenure as a math student.   Math People   Think about people you know who are \"good\" at mathematics? What traits do they have that you feel made them \"good\" at mathematics?    Let's get introspective for a moment. What about yourself? At what moments do you feel you have been successful in mathematics?   Past Experiences   Think about your past experiences in mathematics courses. When were you most successful? What practices helped you be successful?     Tips for Success  Now let's look towards the future. Ask yourself \"What can I do to be a successful math student NOW?\" This is not always an easy question to answer, and honestly everyone will have to answer it differently. However, we can provide a few guiding points that may help you develop a strategy to do well in your mathematical coursework.     Be curious about things! It is very difficult to learn about things if you have no interest in them. We can practice curiosity (which leads to deeper learning) by simply asking \"why\" more often. Mathematics, especially, encourages us to wonder why things operate the way they do.     Don't just be a note taker! Notes can be helpful, but do not think writing down whatever is on the board is enough to have a good class. It is easy to take notes without thinking about what is actually happening in class.     Be alert in class. Come to class ready to be engaged. Ask questions. You paid for the time. Don't waste it!     Procrastination is NOT your friend. It is easy to push off an assignment here or there to another time. Somedays are about balancing competing priorities, but in the long run procrastination will only make things worse. Avoid avoiding when possible.     Consistent work leads to consistent success. Try to approach your school work like you would a workout routine. Lifting weights once a week helps some, but if you are serious about bulking up, then you know you need to hit the gym more frequently than once a week. Bring the same mindset, and with consistend work you will see gains in understanding and performance.    People associate good math-ing with intelligence. There is some truth to that, but there are things we can do to increase our level of success. While we cannot contral our intelligence, Work ethic is in your control.   What speaks to you?   After reviewing the previous points, what speaks to you? What can you do to prepare yourself to be a successful mathematics student?      Putting it into practice   If you are in a mathematics course this semester, make a plan to your approach to the course.  Ask yourself the following questions:   What can I do to engage in class?    Pick a regular time in the week reserved to work on homework. When will that be?    Who can I study with? When will I study?    Where is my instructor's office? When are their office hours?         Meeting Classmates  Find four classmates in your class that you have not met before. Ask them the following questions:   What is you name?    What is your major?    Where are you from?    What's one interesting fact about you?     Finish your introduction with each person by picking a unique codeword to share just between the two of you. Example: \"truncated\".    "
},
{
  "id": "ques-mathpeople",
  "level": "2",
  "url": "sec-successfuls.html#ques-mathpeople",
  "type": "Question",
  "number": "1.4.1",
  "title": "Math People.",
  "body": " Math People   Think about people you know who are \"good\" at mathematics? What traits do they have that you feel made them \"good\" at mathematics?   "
},
{
  "id": "ques-mathpractices",
  "level": "2",
  "url": "sec-successfuls.html#ques-mathpractices",
  "type": "Question",
  "number": "1.4.2",
  "title": "Past Experiences.",
  "body": " Past Experiences   Think about your past experiences in mathematics courses. When were you most successful? What practices helped you be successful?   "
},
{
  "id": "subsec-tips-3-1-1",
  "level": "2",
  "url": "sec-successfuls.html#subsec-tips-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Be curious about things! "
},
{
  "id": "subsec-tips-3-2-1",
  "level": "2",
  "url": "sec-successfuls.html#subsec-tips-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Don't just be a note taker! "
},
{
  "id": "subsec-tips-3-3-1",
  "level": "2",
  "url": "sec-successfuls.html#subsec-tips-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Be alert in class. "
},
{
  "id": "subsec-tips-3-4-1",
  "level": "2",
  "url": "sec-successfuls.html#subsec-tips-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Procrastination is NOT your friend. "
},
{
  "id": "subsec-tips-3-5-1",
  "level": "2",
  "url": "sec-successfuls.html#subsec-tips-3-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Consistent work leads to consistent success. "
},
{
  "id": "subsec-tips-4",
  "level": "2",
  "url": "sec-successfuls.html#subsec-tips-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Work ethic "
},
{
  "id": "q-whatcanyoudo",
  "level": "2",
  "url": "sec-successfuls.html#q-whatcanyoudo",
  "type": "Question",
  "number": "1.4.3",
  "title": "What speaks to you?",
  "body": " What speaks to you?   After reviewing the previous points, what speaks to you? What can you do to prepare yourself to be a successful mathematics student?   "
},
{
  "id": "act-mathpractice",
  "level": "2",
  "url": "sec-successfuls.html#act-mathpractice",
  "type": "Activity",
  "number": "1.4.1",
  "title": "",
  "body": " If you are in a mathematics course this semester, make a plan to your approach to the course.  Ask yourself the following questions:   What can I do to engage in class?    Pick a regular time in the week reserved to work on homework. When will that be?    Who can I study with? When will I study?    Where is my instructor's office? When are their office hours?     "
},
{
  "id": "a-classmates",
  "level": "2",
  "url": "sec-successfuls.html#a-classmates",
  "type": "Activity",
  "number": "1.4.2",
  "title": "",
  "body": " Meeting Classmates  Find four classmates in your class that you have not met before. Ask them the following questions:   What is you name?    What is your major?    Where are you from?    What's one interesting fact about you?     Finish your introduction with each person by picking a unique codeword to share just between the two of you. Example: \"truncated\".  "
},
{
  "id": "sec-career",
  "level": "1",
  "url": "sec-career.html",
  "type": "Section",
  "number": "1.5",
  "title": "Careers in Mathematics",
  "body": " Careers in Mathematics  What can you do with your degree? What doors does a background in mathematics open? What is a mathematician? You can be a math teacher, but what if you're not interested in education as a career?  It's good to be thinking of life after college, even if you just started your college days. A little research into what career options are open to you will help set a vision for your future, and a vision for the future will provide a path of clear steps to get you there.  Remember:   There is no success without discipline.    There is no discipine without vision.     Also remember that a huge part of the college experience is exploring options and figuring out what path fits you best. Do not feel pressured to have everything figured out yet. Here we are simply showing what's out here.   What Careers are there?   Northwestern University compiled a list of careers using mathematics. Read through the article Best Math Careers.     Do any of these careers seem interesting to you?   What Careers are there?   Find three careers (one of them resulting directly from a mathematics degree) that you can follow with your degree. Be sure to include your sources.     Canvas Discussion   Locate the Canvas discussion post \"Mathematical Careers\", and share a resource highlighting one of the careers you found to be interesting.     Career Interest   Do any of the careers you mentioned or found in Canvas seem like a career you would like to pursue? Why or why not?     Steps Towards a Career   After reviewing several careers, choose one and describe steps you can take to obtain that position.     College after college  Some of us are destined for more school than others. You might find yourself wanting more math than what your undergrad experience can accommodate. It could be that you decide to earn a Master's or a PhD.  If you have any interest in graduate school, you'll want to make sure to build a resume of things graudate programs look for.   high GPA    interest in research (conferences, posters, thesis)    a Research Experience for Undergrads (REU) if possible.      "
},
{
  "id": "sec-career-4",
  "level": "2",
  "url": "sec-career.html#sec-career-4",
  "type": "Remark",
  "number": "1.5.1",
  "title": "",
  "body": "Remember:   There is no success without discipline.    There is no discipine without vision.    "
},
{
  "id": "act-careers",
  "level": "2",
  "url": "sec-career.html#act-careers",
  "type": "Activity",
  "number": "1.5.1",
  "title": "What Careers are there?",
  "body": " What Careers are there?   Northwestern University compiled a list of careers using mathematics. Read through the article Best Math Careers.    "
},
{
  "id": "three-careers",
  "level": "2",
  "url": "sec-career.html#three-careers",
  "type": "Question",
  "number": "1.5.2",
  "title": "What Careers are there?",
  "body": " What Careers are there?   Find three careers (one of them resulting directly from a mathematics degree) that you can follow with your degree. Be sure to include your sources.   "
},
{
  "id": "canvas-careers",
  "level": "2",
  "url": "sec-career.html#canvas-careers",
  "type": "Question",
  "number": "1.5.3",
  "title": "Canvas Discussion.",
  "body": " Canvas Discussion   Locate the Canvas discussion post \"Mathematical Careers\", and share a resource highlighting one of the careers you found to be interesting.   "
},
{
  "id": "career-interest",
  "level": "2",
  "url": "sec-career.html#career-interest",
  "type": "Question",
  "number": "1.5.4",
  "title": "Career Interest.",
  "body": " Career Interest   Do any of the careers you mentioned or found in Canvas seem like a career you would like to pursue? Why or why not?   "
},
{
  "id": "ques-steps",
  "level": "2",
  "url": "sec-career.html#ques-steps",
  "type": "Question",
  "number": "1.5.5",
  "title": "Steps Towards a Career.",
  "body": " Steps Towards a Career   After reviewing several careers, choose one and describe steps you can take to obtain that position.   "
},
{
  "id": "sec-logicpuzzle",
  "level": "1",
  "url": "sec-logicpuzzle.html",
  "type": "Section",
  "number": "1.6",
  "title": "Logically Speaking",
  "body": " Logically Speaking  Let's assume that if gordentockles borg the headenvorsh, then the dezapatos changs the wungwing. Also, we all know that if the dezapatos changs the wungwing, then chimi dupas the mongo-gale. But does that means that if gordentockles borg the headenvorsh, then chimi dupas the mongo-gale?  What? What was that?  You have probably seen theorem statements in textbooks like the Mean Value Theorem below. If you are like me, then you probably skipped all of the words and jumped to the big equation. Right?   Mean Value Theorem   If is a function that is continuous on and differentiable on , then there is a number in such that     It's okay if you have no idea what any of that means. The Mean Value Theorem will have more meaning in Calculus. For now, just notice that has the form if some stuff then some more stuff.  Actually, the nonsensical paragraph opening this session has several \" if some stuff then some more stuff\" statements. These type of statements are called conditional statements, and we can represent them symbolically like . We we know logically that implies that if occurs, then will follow.   Gordentockles and Chimi  Earlier we were asked whether we know for sure that if gordentockles borg the headenvorsh, then chimi dupas the mongo-gale. Let's represent the statement \"gordentockles borg the headenvorsh\" with , the statement \"the dezapatos changs the wungwing\" with , and the statement \"chimi dupas the mongo-gale\" with .      How would we represent symbolically the statement \"if gordentockles borg the headenvorsh, then the dezapatos changs the wungwing\"?    This is a conditional statement: .      How would we represent symbolically the statement \"if the dezapatos changs the wungwing, then the chimi dupas the mongo-gale\"?    This is a conditional statement: .    From and , we have two conditionals and . So if occurs, then occurs, and if occurs, then so does . So is it not true then, that if occurs, then occurs?    What does mean? And is it true based upon what we know?    The conditional statement reads as \"if gordentockles borg the headenvorsh, then chimi dupas the mongo-gale\", and it is true based upon what we know.      The Usefulness of Logic  Logic helps us safely traverse through mathematical statements. As we'll see later, all proof writing depends on principles of logic, and having a good understanding of the basics of logic will help us make sense of things that are initially unintuitive.  The past few exercises showed a couple of things. Firstly, that we can follow the logic of an argument even if we're not overly familiar with the contents of the article. Do we even know what a gordentockle is? Secondly, we arrived to some transitive form of conditionals. We decided that if and , then . Logicians can string together simpler logic statements to arrive to new, more complicated statements.  Take a look at the tree REF below, in which each edge is a conditional statement.       If is true, what else do we know for sure is true?    We know and is true, so is true.      Starting with , what things must be true to guarantee that is true?    To guarantee that is true, we must have to be true as well. Note that we do not know if this is only reason is true or not, but the way we can guarantee it.      Suppose is not true. What else do we know for sure is not true?    It is tempting to say that and are not true, but we don't know that actually! What we know is that . So if is true and is false, then we have a contradiction. So if is false, then must be false.      Contrapositives   gave us a new rule of logic. Supposing is true and is false, we now know that must be false. We'll write to mean \"not \", and so our new rule could be stated as .  This new statement, , is called the contrapositive , and the conditional and the contrapostive are logically equivalent statments. This means, that if one is true, then they're both true, and if one is false, they're both false.  Contrapositives are very useful.    What is the contrapostive of the statment \"if the dezapatos changs the wungwing, then chimi dupas the mongo-gale\"?    If chimi does not dupas the mongo-gale, then the dezapatos does not chang the wungwing.      Make up three conditional \"if-then\" statements and write them down. Trade your conditionals with a classmate and write the contrapositive to your classmate's conditional statements.      Knights and Knaves  Mathematician (and magician) Raymond Smullyan (1919-2017) famously wrote several books of logic puzzles. The puzzles have entertained and challenged people for decades. You can find a list of his works at the https:\/\/www.raymondsmullyan.com\/bio\/    Raymond Smullyan (1919-2017)   One set of his puzzles involve the reader (you) visiting an island in which there lives two types of people. Knights ALWAYS tell the truth, and Knaves ALWAY lie. In many of these puzzles, you engage in a brief discussion with two or more island inhabitants, and based upon their statements you are challenged with identifying what type of people each person is.  Let's try a few.   Knight and Knaves I   You encounter two island residents, and , each is either a knight or a knave. makes the following statement: \"At least one of us is a knave.\" What are and ?     Knight and Knaves II   Suppose says, \"Either I am a knave or is a knight.\" What are and ?     Knight and Knaves III   This time, you encounter three people , each of whom is either a knight or knave. and make the following statements:    What are , and ?    You can more of Smullyan's logic puzzles on Dan Mackinnon's github page .    Samurai Jack and the Wyrm  In the early 2000's, the Cartoon Network hit, Samurai Jack explored a Smullyan-style logic puzzle. In the show, Jack is desparately trying to return to his proper time in history hears a rumor of a two-headed wyrm with the power of time travel.  The two heads of the wyrm tell him that one head only tells the truth and the other only tells lies (Sound familiar?), and Jack has to determine which one is which. If he answers correctly, the truth telling head will devour Jack, and that process will send Jack back to the past.      SPOILER ALERT: Unfortunately for Jack, both heads lie, and the entire exercise was just a trick. Don't worry, though, Jack escapes mostly in good health.   "
},
{
  "id": "thm-mvt",
  "level": "2",
  "url": "sec-logicpuzzle.html#thm-mvt",
  "type": "Theorem",
  "number": "1.6.1",
  "title": "Mean Value Theorem.",
  "body": " Mean Value Theorem   If is a function that is continuous on and differentiable on , then there is a number in such that    "
},
{
  "id": "sec-logicpuzzle-6",
  "level": "2",
  "url": "sec-logicpuzzle.html#sec-logicpuzzle-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "if then "
},
{
  "id": "sec-logicpuzzle-7",
  "level": "2",
  "url": "sec-logicpuzzle.html#sec-logicpuzzle-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "if then conditional "
},
{
  "id": "ques-gordentockles1",
  "level": "2",
  "url": "sec-logicpuzzle.html#ques-gordentockles1",
  "type": "Question",
  "number": "1.6.2",
  "title": "",
  "body": "  How would we represent symbolically the statement \"if gordentockles borg the headenvorsh, then the dezapatos changs the wungwing\"?    This is a conditional statement: .   "
},
{
  "id": "ques-gordentockles2",
  "level": "2",
  "url": "sec-logicpuzzle.html#ques-gordentockles2",
  "type": "Question",
  "number": "1.6.3",
  "title": "",
  "body": "  How would we represent symbolically the statement \"if the dezapatos changs the wungwing, then the chimi dupas the mongo-gale\"?    This is a conditional statement: .   "
},
{
  "id": "ques-gordentockles3",
  "level": "2",
  "url": "sec-logicpuzzle.html#ques-gordentockles3",
  "type": "Question",
  "number": "1.6.4",
  "title": "",
  "body": "  What does mean? And is it true based upon what we know?    The conditional statement reads as \"if gordentockles borg the headenvorsh, then chimi dupas the mongo-gale\", and it is true based upon what we know.   "
},
{
  "id": "subsec-useoflogic-5",
  "level": "2",
  "url": "sec-logicpuzzle.html#subsec-useoflogic-5",
  "type": "Figure",
  "number": "1.6.5",
  "title": "",
  "body": "  "
},
{
  "id": "ques-logic1",
  "level": "2",
  "url": "sec-logicpuzzle.html#ques-logic1",
  "type": "Question",
  "number": "1.6.6",
  "title": "",
  "body": "  If is true, what else do we know for sure is true?    We know and is true, so is true.   "
},
{
  "id": "ques-logic2",
  "level": "2",
  "url": "sec-logicpuzzle.html#ques-logic2",
  "type": "Question",
  "number": "1.6.7",
  "title": "",
  "body": "  Starting with , what things must be true to guarantee that is true?    To guarantee that is true, we must have to be true as well. Note that we do not know if this is only reason is true or not, but the way we can guarantee it.   "
},
{
  "id": "ques-logic3",
  "level": "2",
  "url": "sec-logicpuzzle.html#ques-logic3",
  "type": "Question",
  "number": "1.6.8",
  "title": "",
  "body": "  Suppose is not true. What else do we know for sure is not true?    It is tempting to say that and are not true, but we don't know that actually! What we know is that . So if is true and is false, then we have a contradiction. So if is false, then must be false.   "
},
{
  "id": "subsec-contrapositives-3",
  "level": "2",
  "url": "sec-logicpuzzle.html#subsec-contrapositives-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contrapositive "
},
{
  "id": "ques-contrapositive1",
  "level": "2",
  "url": "sec-logicpuzzle.html#ques-contrapositive1",
  "type": "Question",
  "number": "1.6.9",
  "title": "",
  "body": "  What is the contrapostive of the statment \"if the dezapatos changs the wungwing, then chimi dupas the mongo-gale\"?    If chimi does not dupas the mongo-gale, then the dezapatos does not chang the wungwing.   "
},
{
  "id": "act-contrapositive1",
  "level": "2",
  "url": "sec-logicpuzzle.html#act-contrapositive1",
  "type": "Activity",
  "number": "1.6.1",
  "title": "",
  "body": "  Make up three conditional \"if-then\" statements and write them down. Trade your conditionals with a classmate and write the contrapositive to your classmate's conditional statements.   "
},
{
  "id": "subsec-knights-3",
  "level": "2",
  "url": "sec-logicpuzzle.html#subsec-knights-3",
  "type": "Figure",
  "number": "1.6.10",
  "title": "",
  "body": "  Raymond Smullyan (1919-2017)  "
},
{
  "id": "ques-smullyan1",
  "level": "2",
  "url": "sec-logicpuzzle.html#ques-smullyan1",
  "type": "Question",
  "number": "1.6.11",
  "title": "Knight and Knaves I.",
  "body": " Knight and Knaves I   You encounter two island residents, and , each is either a knight or a knave. makes the following statement: \"At least one of us is a knave.\" What are and ?   "
},
{
  "id": "ques-smullyan2",
  "level": "2",
  "url": "sec-logicpuzzle.html#ques-smullyan2",
  "type": "Question",
  "number": "1.6.12",
  "title": "Knight and Knaves II.",
  "body": " Knight and Knaves II   Suppose says, \"Either I am a knave or is a knight.\" What are and ?   "
},
{
  "id": "ques-smullyan3",
  "level": "2",
  "url": "sec-logicpuzzle.html#ques-smullyan3",
  "type": "Question",
  "number": "1.6.13",
  "title": "Knight and Knaves III.",
  "body": " Knight and Knaves III   This time, you encounter three people , each of whom is either a knight or knave. and make the following statements:    What are , and ?   "
},
{
  "id": "vid-khanpascal",
  "level": "2",
  "url": "sec-logicpuzzle.html#vid-khanpascal",
  "type": "Figure",
  "number": "1.6.14",
  "title": "",
  "body": "   "
},
{
  "id": "sec-graphtheory",
  "level": "1",
  "url": "sec-graphtheory.html",
  "type": "Section",
  "number": "1.7",
  "title": "Connecting Dots",
  "body": " Connecting Dots      Jane and her friend Julia were invited to a small get together at their friend Julio's place. When they arrive, they don't really know any of the other four people (other than Julio) who seem to know each other EXCEPT one of the four coincidentally is Jane's cousin, Elaine.     Julio's party   This type situations happen all of the time. If you're sitting in a classroom, you're in a similar situation right now. When you are with a group of people, you are a part of a mathematical structure known as a graph . Actually, any network (relationships, pipe systems, road maps, the internet, ...) can be represented as a graph.     Various graphs   We see graphs anytime we have a collection of items (We call them vertices or nodes .) and relationships between those items (We call the relationships edges .). In fact, it is by the vertices and edges that we define a graph.    A graph G is a pair of two sets and , where is the set of vertices and is the set of edges on .       Drawing a Graph   Draw the graph with vertex set and edge set .    Graph theorists study all sort aspects of graphs. We ask questions about the longest path of a graph, how easy is it to break up a graph with vertex or edge deletions, and if we can draw a graph in the plane without crossing any edges (among many others).  We'll explore a few interesting graph theory questions here.   Touring the City of Königsburg      If we happen to find ourselves in Königsburg Prussia in the 18th century, we would see a city layout similar to the one in . The Pregel river flowed through the middle of the city forming two islands. The part we care about, though, is the seven highlighted bridges.  Residents such as ourselves, as a game, would often attempt to tour the city with these rules:   You must cross each bridge (all 7) exactly one time (no more and no less).    You must end your tour exactly where you began.   A tour that meets these requirements will be called a successful tour.    Can you find a successful tour of Königsburg?    This game peaked the interest of the incredibly brilliant mathematician, Leonhard Euler (1707-1783), and to solve this question Euler introduced the field of graph theory to the world. The Königsburg bridge problem is considered the to be the first instance graph theory historically. Like Euler, we can picture Königsburg as a graph by treating the bridges as edges and use vertices to represent each land mass.    Represent Königsburg with a graph.            What do we mean by a \"tour\" on a graph? First, two edges are incident if they share a vertex. We can say a tour is a sequence of incident edges. We want to find a tour that begins and ends with the same vertex. This type of tour is called an eulerian circuit .   Let's take a tour on our new Königsburg graph, and each time we visit and each time we leave a vertex, we will give that vertex a point. For example, if we start at vertex and travel to and then to , then and have 1 point each while has 2 points.      As we keep touring through our graph, the points of a vertex tells us how many edges touching that vertex are a part of our tour.   One-point vertices   How can the vertex have 1 point?    Either is the beginning or ending of our tour (and not both).     Odd Points   How can the vertex have an odd number of points?    Our tour is currently resting at , and is not the first and last vertex of the tour. If the point value is more than 1, then the tour has already arrived and left at least once.     Even Points   How can the vertex have an even number of points?    Our tour is resting at . If the point value is more than 1, then the tour has already arrived and left at least once.    From questions , , and , we see that a vertex will only have an odd number of points (or adjacent to an odd number of edges in our tour) if that vertex either starts or ends the tour... unless the tour ends where it started.  Remember that an eulerian circuit passes through EVERY edge and ends where it started. So can a vertex in an eulerian circuit have an odd number of points? No. So if a graph has an eulerian circuit, then every vertex is adjacent to an even number of vertices. We just drew up a sketch of a proof for the following theorem.    A graph has an eulerian circuit if and only if it has no vertex adjacent to an odd number of edges.    We finally see what Euler saw.    So why does the Königsberg graph not have an eulerian circuit?    The Königsberg graph has several vertices adjacent to an odd number of edges.      Connectivity  Let's look again at the graphs in . This time we want to break down our graphs by deleting vertices. In particular, we want to know how many vertices we have to delete in order to break the graph into pieces.      For example, if we delete one vertex from the first graph in (the edges adjacent to that vertex are also deleted), does our graph break into two separate pieces? No. It'll take more than one vertex, but it can be done with two vertices! In , we deleted two vertices (indicated by the red open circles), and now the graph is broken up. We say it is disconnected .      There's a lot we could say about this situation. The two vertices we deleted are a cut set of the graph, and the pieces are called components . After we delete our cut set, if is in one component and is another component, then our cut set is a separating set . In this graph, our cut set had two vertices, so we say the graph is -connected.    In general, the graph is -connected if has a cut set of vertices.    So how connected are the graphs in ?    For each graph in , what is the smallest value of such that is -connected?    The graph on the farthest left is -connected.    Knowing how connected a graph is can tell us other things as well. For example,    If is a -connected graph, , then every vertices of lie on a common cycle of .    Connectivity and cycles do not seem to be immediately related, but graph theorists have discovered that they are related concepts.    Different Paths  Let's play one more walking game. This time we'll look at paths in a graph. A path is like a tour except now vertices can be revisted. So a path is a tour with unique vertices and edges.       From , can you find a path starting at and ending at ? Can you find more than one?  Try this: after finding a - path, delete the vertices of the path from the graph (but not and ). Then try to find another - path and deleting those vertices as well. Repeat this process as much as possible. How many paths can you find in this way?   The paths you found in are called internally disjoint paths since they have no vertices in common other than their endpoints. Did you find four internally disjoint paths in the graph in ? Good. For a graph with nonadjacent vertices and , is there a way we could count the number of - internally disjoint paths in ?  In , when we found our first - path, we deleted the internal vertices.    After deleting those internal vertices, was the graph still connected?    No. If the graph was disconnected, then there would no more paths to find.      How many paths do we need to delete in order to separate and ?    All four of them! Coincidence?    Does this give us some sort of link between - separating sets and the number of internally disjoint - paths?    What is the size of the smallest - separating set in the graph in ?    We need to delete four vertices. Note that is a - separating set.    Woah. So we had four internally disjoint paths and a separating set cardinality four. This is not a coincidence. Let's take graph with nonadjacent vertices and , and let's call the number of internally - paths . Let's also let be the cardinality of a smallest - separating set. Now we can show they are related.   Menger's Theorem   Let be a graph with nonadjacent vertices and . Then .     "
},
{
  "id": "sec-graphtheory-2",
  "level": "2",
  "url": "sec-graphtheory.html#sec-graphtheory-2",
  "type": "Figure",
  "number": "1.7.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec-graphtheory-4",
  "level": "2",
  "url": "sec-graphtheory.html#sec-graphtheory-4",
  "type": "Figure",
  "number": "1.7.2",
  "title": "",
  "body": "   Julio's party  "
},
{
  "id": "sec-graphtheory-5",
  "level": "2",
  "url": "sec-graphtheory.html#sec-graphtheory-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "graph "
},
{
  "id": "sec-graphtheory-6",
  "level": "2",
  "url": "sec-graphtheory.html#sec-graphtheory-6",
  "type": "Figure",
  "number": "1.7.3",
  "title": "",
  "body": "   Various graphs  "
},
{
  "id": "sec-graphtheory-7",
  "level": "2",
  "url": "sec-graphtheory.html#sec-graphtheory-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vertices nodes edges "
},
{
  "id": "def-graph",
  "level": "2",
  "url": "sec-graphtheory.html#def-graph",
  "type": "Definition",
  "number": "1.7.4",
  "title": "",
  "body": "  A graph G is a pair of two sets and , where is the set of vertices and is the set of edges on .   "
},
{
  "id": "ques-graphs1",
  "level": "2",
  "url": "sec-graphtheory.html#ques-graphs1",
  "type": "Question",
  "number": "1.7.5",
  "title": "",
  "body": " Drawing a Graph   Draw the graph with vertex set and edge set .   "
},
{
  "id": "subsec-konigsburg-2",
  "level": "2",
  "url": "sec-graphtheory.html#subsec-konigsburg-2",
  "type": "Figure",
  "number": "1.7.6",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-konigsburg-5",
  "level": "2",
  "url": "sec-graphtheory.html#subsec-konigsburg-5",
  "type": "Activity",
  "number": "1.7.1",
  "title": "",
  "body": "  Can you find a successful tour of Königsburg?   "
},
{
  "id": "q-konigsburg",
  "level": "2",
  "url": "sec-graphtheory.html#q-konigsburg",
  "type": "Question",
  "number": "1.7.7",
  "title": "",
  "body": "  Represent Königsburg with a graph.           "
},
{
  "id": "subsec-konigsburg-8",
  "level": "2",
  "url": "sec-graphtheory.html#subsec-konigsburg-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "incident tour eulerian circuit "
},
{
  "id": "subsec-konigsburg-10",
  "level": "2",
  "url": "sec-graphtheory.html#subsec-konigsburg-10",
  "type": "Figure",
  "number": "1.7.9",
  "title": "",
  "body": "   "
},
{
  "id": "q-konigs2",
  "level": "2",
  "url": "sec-graphtheory.html#q-konigs2",
  "type": "Question",
  "number": "1.7.10",
  "title": "One-point vertices.",
  "body": " One-point vertices   How can the vertex have 1 point?    Either is the beginning or ending of our tour (and not both).   "
},
{
  "id": "q-konigs3",
  "level": "2",
  "url": "sec-graphtheory.html#q-konigs3",
  "type": "Question",
  "number": "1.7.11",
  "title": "Odd Points.",
  "body": " Odd Points   How can the vertex have an odd number of points?    Our tour is currently resting at , and is not the first and last vertex of the tour. If the point value is more than 1, then the tour has already arrived and left at least once.   "
},
{
  "id": "q-konigs4",
  "level": "2",
  "url": "sec-graphtheory.html#q-konigs4",
  "type": "Question",
  "number": "1.7.12",
  "title": "Even Points.",
  "body": " Even Points   How can the vertex have an even number of points?    Our tour is resting at . If the point value is more than 1, then the tour has already arrived and left at least once.   "
},
{
  "id": "thm-eulercircuit",
  "level": "2",
  "url": "sec-graphtheory.html#thm-eulercircuit",
  "type": "Theorem",
  "number": "1.7.13",
  "title": "",
  "body": "  A graph has an eulerian circuit if and only if it has no vertex adjacent to an odd number of edges.   "
},
{
  "id": "q-kongigs6",
  "level": "2",
  "url": "sec-graphtheory.html#q-kongigs6",
  "type": "Question",
  "number": "1.7.14",
  "title": "",
  "body": "  So why does the Königsberg graph not have an eulerian circuit?    The Königsberg graph has several vertices adjacent to an odd number of edges.   "
},
{
  "id": "subsec-connectivity-3",
  "level": "2",
  "url": "sec-graphtheory.html#subsec-connectivity-3",
  "type": "Figure",
  "number": "1.7.15",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-connectivity-4",
  "level": "2",
  "url": "sec-graphtheory.html#subsec-connectivity-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "disconnected "
},
{
  "id": "subsec-connectivity-5",
  "level": "2",
  "url": "sec-graphtheory.html#subsec-connectivity-5",
  "type": "Figure",
  "number": "1.7.16",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-connectivity-6",
  "level": "2",
  "url": "sec-graphtheory.html#subsec-connectivity-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cut set components separating set "
},
{
  "id": "def-connectivity",
  "level": "2",
  "url": "sec-graphtheory.html#def-connectivity",
  "type": "Definition",
  "number": "1.7.17",
  "title": "",
  "body": "  In general, the graph is -connected if has a cut set of vertices.   "
},
{
  "id": "q-connectivity1",
  "level": "2",
  "url": "sec-graphtheory.html#q-connectivity1",
  "type": "Question",
  "number": "1.7.18",
  "title": "",
  "body": "  For each graph in , what is the smallest value of such that is -connected?    The graph on the farthest left is -connected.   "
},
{
  "id": "thm-kconnectedresult",
  "level": "2",
  "url": "sec-graphtheory.html#thm-kconnectedresult",
  "type": "Theorem",
  "number": "1.7.19",
  "title": "",
  "body": "  If is a -connected graph, , then every vertices of lie on a common cycle of .   "
},
{
  "id": "subsec-mengers-2",
  "level": "2",
  "url": "sec-graphtheory.html#subsec-mengers-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "paths path "
},
{
  "id": "subsec-mengers-3",
  "level": "2",
  "url": "sec-graphtheory.html#subsec-mengers-3",
  "type": "Figure",
  "number": "1.7.20",
  "title": "",
  "body": "   "
},
{
  "id": "a-paths1",
  "level": "2",
  "url": "sec-graphtheory.html#a-paths1",
  "type": "Activity",
  "number": "1.7.2",
  "title": "",
  "body": " From , can you find a path starting at and ending at ? Can you find more than one?  Try this: after finding a - path, delete the vertices of the path from the graph (but not and ). Then try to find another - path and deleting those vertices as well. Repeat this process as much as possible. How many paths can you find in this way?  "
},
{
  "id": "subsec-mengers-5",
  "level": "2",
  "url": "sec-graphtheory.html#subsec-mengers-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "internally disjoint paths "
},
{
  "id": "q-mengers1",
  "level": "2",
  "url": "sec-graphtheory.html#q-mengers1",
  "type": "Question",
  "number": "1.7.21",
  "title": "",
  "body": "  After deleting those internal vertices, was the graph still connected?    No. If the graph was disconnected, then there would no more paths to find.   "
},
{
  "id": "q-mengers2",
  "level": "2",
  "url": "sec-graphtheory.html#q-mengers2",
  "type": "Question",
  "number": "1.7.22",
  "title": "",
  "body": "  How many paths do we need to delete in order to separate and ?    All four of them! Coincidence?   "
},
{
  "id": "q-mengers3",
  "level": "2",
  "url": "sec-graphtheory.html#q-mengers3",
  "type": "Question",
  "number": "1.7.23",
  "title": "",
  "body": "  What is the size of the smallest - separating set in the graph in ?    We need to delete four vertices. Note that is a - separating set.   "
},
{
  "id": "thm-mengers",
  "level": "2",
  "url": "sec-graphtheory.html#thm-mengers",
  "type": "Theorem",
  "number": "1.7.24",
  "title": "Menger’s Theorem.",
  "body": " Menger's Theorem   Let be a graph with nonadjacent vertices and . Then .   "
},
{
  "id": "sec-fourcolors",
  "level": "1",
  "url": "sec-fourcolors.html",
  "type": "Section",
  "number": "1.8",
  "title": "Coloring Graphs",
  "body": " Coloring Graphs  Consider the map of the United States in figure \\ref{map}. You are challenged to color the map with the rule that bordering states cannot have the same color. Overall this is pretty easy, BUT we also want to use the fewest colors possible. How many colors do you need to do this?   Color the map   Color the map in the fewest colors possible, where neighboring states do not share a color.             How many colors?   So how many colors did it take to color your map?    The minimum number of colors is .    In this context, if we treat each state as a vertex and shared borders as edges, then this map is just a graph. The challenge we gave to color the map then is really a challenge to color a graph with this rule: if two vertices share an edge, those vertices must be different colors.  Finding the minimum colors to color a graph is a common graph theory question.   Coloring Trees  A graph is called a tree if it is connected and has no cycles. More precisely, there is a path between any two vertices... but only one path.     Some trees.     How many colors does the tree in require?    Only two!      Draw three of your own trees on at least vertices. How many colors do your new trees require?    Do you we know how many colors any tree will require now? Is it possible that all trees can be colored in two colors? Based on our examples, we want to say \"yes\", but a few examples is not enough to say for sure in the world of mathematics.  Maybe we can make a logical argument to show trees can be colored in two colors, though. Let's start with a vertex (call it ) and color it . Also, we say a vertex is a neighbor of (or adjacent to ) if it shares an edges with . Note that we often use numbers to represent colors so that we can easily refer to color 100, for example, instead of trying to keep up with 100 different named colors.    What color can we color the neighbors of ?    How about 2?      What color can we color the neighbors of the neighbors of ?    Since this new vertex is not adjacent to (otherwise the graph is not a tree), it could be colored 1.      What about the neighbors of the neighbors of the neighbors of ?    This sounds confusing. Is it possible that one these neighbors of neighbors of neighbors    Okay, maybe we have found a pattern.    What color can we color a vertex that is an odd number of edges away from ? what about a vertex an even number of edges from ?    This argument only works, though, because we're talking about trees. If there is a cycle in our graph, then a vertex may be an even number of edges from coming from one direction and an odd number of edges from another direction. That can't happen in a tree.  Awesome. So trees can be colored in two colors.    What about Cycles?  So we know trees can be colored in two colors, and our argument really needed the fact the trees do not have cycles. So what about cycles? Can a cycle be colored in two colors?     Coloring cycles   Draw four cycles on vertices for different values of (I recommend consecutive values of ) and color their vertices.        Give a hypothesis on the number of colors a cycle on vertices requires to be colored.    After observing several cycles, we conclude that if is even, the cycle requires two colors. However, if is odd, the cycle requires three colors.      Appel and Haken shook things up  BORING!!! We'll now turn our attention to something similar to coloring the map of the US. Is it possible to draw a country with states that would require more than four colors? The answer is actually no!  In 1976, Appel and Haken proved their famous Four Color Theorem, but this result brought a good bit of controversy. Numberphile's fantastic video belows covers the controversy surrounding the Four Color Theorem.  Use the following video to answer the following questions.        When phrasing the question in terms of graph theory. How do we represent countries?      What is the benefit of phrasing the Four Color Theorem as a graph theory problem?      Give a brief explanation of the argument that map needs no more than seven colors.      Why was Appel and Haken’s proof controversial?     "
},
{
  "id": "ques-fourcolor1",
  "level": "2",
  "url": "sec-fourcolors.html#ques-fourcolor1",
  "type": "Activity",
  "number": "1.8.1",
  "title": "Color the map.",
  "body": " Color the map   Color the map in the fewest colors possible, where neighboring states do not share a color.   "
},
{
  "id": "sec-fourcolors-4-1",
  "level": "2",
  "url": "sec-fourcolors.html#sec-fourcolors-4-1",
  "type": "Figure",
  "number": "1.8.1",
  "title": "",
  "body": "   "
},
{
  "id": "ques-fourcolor2",
  "level": "2",
  "url": "sec-fourcolors.html#ques-fourcolor2",
  "type": "Question",
  "number": "1.8.2",
  "title": "How many colors?",
  "body": " How many colors?   So how many colors did it take to color your map?    The minimum number of colors is .   "
},
{
  "id": "subsec-colortrees-2",
  "level": "2",
  "url": "sec-fourcolors.html#subsec-colortrees-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tree "
},
{
  "id": "subsec-colortrees-3",
  "level": "2",
  "url": "sec-fourcolors.html#subsec-colortrees-3",
  "type": "Figure",
  "number": "1.8.3",
  "title": "",
  "body": "   Some trees.  "
},
{
  "id": "ques-trees1",
  "level": "2",
  "url": "sec-fourcolors.html#ques-trees1",
  "type": "Question",
  "number": "1.8.4",
  "title": "",
  "body": "  How many colors does the tree in require?    Only two!   "
},
{
  "id": "subsec-colortrees-5",
  "level": "2",
  "url": "sec-fourcolors.html#subsec-colortrees-5",
  "type": "Question",
  "number": "1.8.5",
  "title": "",
  "body": "  Draw three of your own trees on at least vertices. How many colors do your new trees require?   "
},
{
  "id": "subsec-colortrees-7",
  "level": "2",
  "url": "sec-fourcolors.html#subsec-colortrees-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "neighbor adjacent "
},
{
  "id": "ques-trees2",
  "level": "2",
  "url": "sec-fourcolors.html#ques-trees2",
  "type": "Question",
  "number": "1.8.6",
  "title": "",
  "body": "  What color can we color the neighbors of ?    How about 2?   "
},
{
  "id": "ques-trees3",
  "level": "2",
  "url": "sec-fourcolors.html#ques-trees3",
  "type": "Question",
  "number": "1.8.7",
  "title": "",
  "body": "  What color can we color the neighbors of the neighbors of ?    Since this new vertex is not adjacent to (otherwise the graph is not a tree), it could be colored 1.   "
},
{
  "id": "ques-trees4",
  "level": "2",
  "url": "sec-fourcolors.html#ques-trees4",
  "type": "Question",
  "number": "1.8.8",
  "title": "",
  "body": "  What about the neighbors of the neighbors of the neighbors of ?    This sounds confusing. Is it possible that one these neighbors of neighbors of neighbors   "
},
{
  "id": "ques-trees5",
  "level": "2",
  "url": "sec-fourcolors.html#ques-trees5",
  "type": "Question",
  "number": "1.8.9",
  "title": "",
  "body": "  What color can we color a vertex that is an odd number of edges away from ? what about a vertex an even number of edges from ?   "
},
{
  "id": "ques-cycles1",
  "level": "2",
  "url": "sec-fourcolors.html#ques-cycles1",
  "type": "Activity",
  "number": "1.8.2",
  "title": "Coloring cycles.",
  "body": " Coloring cycles   Draw four cycles on vertices for different values of (I recommend consecutive values of ) and color their vertices.   "
},
{
  "id": "ques-cycles2",
  "level": "2",
  "url": "sec-fourcolors.html#ques-cycles2",
  "type": "Question",
  "number": "1.8.10",
  "title": "",
  "body": "  Give a hypothesis on the number of colors a cycle on vertices requires to be colored.    After observing several cycles, we conclude that if is even, the cycle requires two colors. However, if is odd, the cycle requires three colors.   "
},
{
  "id": "vid-numberPhileFourColor",
  "level": "2",
  "url": "sec-fourcolors.html#vid-numberPhileFourColor",
  "type": "Figure",
  "number": "1.8.11",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-fourcolors-6",
  "level": "2",
  "url": "sec-fourcolors.html#subsec-fourcolors-6",
  "type": "Question",
  "number": "1.8.12",
  "title": "",
  "body": "  When phrasing the question in terms of graph theory. How do we represent countries?   "
},
{
  "id": "subsec-fourcolors-7",
  "level": "2",
  "url": "sec-fourcolors.html#subsec-fourcolors-7",
  "type": "Question",
  "number": "1.8.13",
  "title": "",
  "body": "  What is the benefit of phrasing the Four Color Theorem as a graph theory problem?   "
},
{
  "id": "subsec-fourcolors-8",
  "level": "2",
  "url": "sec-fourcolors.html#subsec-fourcolors-8",
  "type": "Question",
  "number": "1.8.14",
  "title": "",
  "body": "  Give a brief explanation of the argument that map needs no more than seven colors.   "
},
{
  "id": "subsec-fourcolors-9",
  "level": "2",
  "url": "sec-fourcolors.html#subsec-fourcolors-9",
  "type": "Question",
  "number": "1.8.15",
  "title": "",
  "body": "  Why was Appel and Haken’s proof controversial?   "
},
{
  "id": "sec-history",
  "level": "1",
  "url": "sec-history.html",
  "type": "Section",
  "number": "1.9",
  "title": "A Little History",
  "body": " A Little History  Mathematics is a permanent fixture in human development. We find evidence of mathematical thinking in our most ancient of civilizations, and yet all modern technological advancements rely of good mathematics. Mathematics is the foundational tool we use to turn creative ideas into reality. But the human stories of mathematics is an area worth studying as well.  Throughout your coursework, you will learn about the interesting figures of math history and some of the incredible (and sometimes unbelievable) tales they are a part of. There are stories of young genius, incredible risks, underdogs, and duels. You will hear about mathematical giants from all over the world and how their contributions are still valuable to us today. Math history is rich and immensely interesting.   What we take for granted  We learn about rationals, primes, and equations by the time we get to middle school, but so many of these ideas were unknown for generations. We take so much of our foundational mathematics for granted, but behind a lot of these concepts are moments of ingenious insight.  For example,   Our numerals are referred as \"Hindu-Arabic numerals\" invented by Indian mathematicians between the first and fourth centuries.     The discovery of irrational numbers threw the Pythagoreans into an existential crisis in the 4th century.    In the 17th century, mathematicians and philosophers Rene Descarte and Piere de Fermat independently connected geometry and algebra with a coordinate system we use in basic algebra today. This system is called \"Cartesian coordiantes\" after Descartes.      Portrait of Rene Descartes traditionally attributed to Frans Hals         Thinking Differently  Studying math history also helps us see how culture impacts the way we think about things... even objective ideas such as mathematics. We can see that ancient cultures sometimes approached their problems from a perspective we might find unusual.   Egyptian Multiplication      One of two surviving Egyptian mathematical papyri: The Rhind Papyrus    Ancient Egyptians were excellent at calculations, with applications in areas of economics, land area, and volumes of solids. They developed algorithms to help perform complicated calculations with high accuracy. We will look at their alogrithm for multiplying two integers.  For example, How would the Egyptians multiply 23 and 12? Their work all depends upon powers of two.   Writing out Powers of 2   Fill out the following tables with powers of two.      Powers of 2      value                                     value     1     2     4     8     16        The Egyption multiplication algorithm is sometimes referred to as the \"double method\", because the algorithm involves doubling one of the factors repeatedly. Let's do this with the first factor, 23.   Double 23   Fill out the third column of the table by repeatedly doubling 23.               1  23     2       4       8       16                       1  23     2  46     4  92     8  184     16  368        Now we need to write our other factor as a sum of powers of two. For example, .   Powers of 2 to get 12   Write 12 as a sum of powers of 2.         We determined earlier that , and we just need to add the corresponding rows from .                 1  23       2  46       4  92       8  184        16  368           Our Final Calculation   Add up the appropriate multiples of to calculate .    From , we see the entries in rows corredsponding to and are and . So we conclude that .       Another Multiplication Question   Multiply as would the Egyptians.      Mathematics of Babylon  Unfortunately, due to the again of papyrus, we have few resources to pull from regarding Egyptian mathematics. However, the Babylonians baked their writings in cuneiform on clay tablets. This more durable writing system has provided us with a lot of information regarding Babylonian mathematics dating back to 1700 BC.      The Babylonian cuneiform tablet: Plimpton 322    Babylon made a lot of advancement in mathematics with knowledge of cubic equations and Pythagoras' namesake, the Pythagorean Theorem (about 1000 years before Pythagoras), but we will just focus on the Babylonian number system.  Babylonians tracked numbers in base-60 (sexigesimal). Though that may sound odd, we still use sexigesimal systems when thinking about time (60 seconds to a minute) and angle measure ( in a circle).  So what does sexigesimal notation look like? Think about typing on a microwave. After a second, what does that microwave read? Not , right? The microwave knows that minute means seconds, and so after a second, we see .  Similarly, the Babylonian would write for what we mean by . We would read a number like base-60 as base-10.   Sexigesimal Practice   Convert into base-10.         Sexigesimal notation is particularly useful when dealing with fractions. For example, is , and by , the Babylonians meant .  To calculate , Babylonians would first find and then multiply it by . For example, is found first by finding and then multiply the result by to get     We finish our calculation by recognizing .   Practicing with Sexigesimal Fractions  Represent as a sexigesimal fraction.      Mathigon's Timeline of Mathematics       Mathigon has currated an interactive map of significant mathematical moments. We will now reference their timeline to answer the following questions.  Visit Mathigon's Timeline of Mathematics .    Find a mathematician from Asia. What contribution did he or she make?      Find a mathematician listed between 1600 and 1800 Asia. What contribution did he or she make?      Find a mathematician listed between te 20th and 21st. What contribution did he or she make?     "
},
{
  "id": "subsec-advancements-3-1-3-2-1",
  "level": "2",
  "url": "sec-history.html#subsec-advancements-3-1-3-2-1",
  "type": "Figure",
  "number": "1.9.1",
  "title": "",
  "body": "   Portrait of Rene Descartes traditionally attributed to Frans Hals  "
},
{
  "id": "subsubsec-egyptian-2-1",
  "level": "2",
  "url": "sec-history.html#subsubsec-egyptian-2-1",
  "type": "Figure",
  "number": "1.9.2",
  "title": "",
  "body": "   One of two surviving Egyptian mathematical papyri: The Rhind Papyrus  "
},
{
  "id": "ques-powersoftwo",
  "level": "2",
  "url": "sec-history.html#ques-powersoftwo",
  "type": "Question",
  "number": "1.9.3",
  "title": "Writing out Powers of 2.",
  "body": " Writing out Powers of 2   Fill out the following tables with powers of two.      Powers of 2      value                                     value     1     2     4     8     16       "
},
{
  "id": "ques-twos1",
  "level": "2",
  "url": "sec-history.html#ques-twos1",
  "type": "Question",
  "number": "1.9.6",
  "title": "Double 23.",
  "body": " Double 23   Fill out the third column of the table by repeatedly doubling 23.               1  23     2       4       8       16                       1  23     2  46     4  92     8  184     16  368       "
},
{
  "id": "ques-twos2",
  "level": "2",
  "url": "sec-history.html#ques-twos2",
  "type": "Question",
  "number": "1.9.9",
  "title": "Powers of 2 to get 12.",
  "body": " Powers of 2 to get 12   Write 12 as a sum of powers of 2.        "
},
{
  "id": "table23arrows",
  "level": "2",
  "url": "sec-history.html#table23arrows",
  "type": "Table",
  "number": "1.9.10",
  "title": "",
  "body": "               1  23       2  46       4  92       8  184        16  368      "
},
{
  "id": "ques-twos3",
  "level": "2",
  "url": "sec-history.html#ques-twos3",
  "type": "Question",
  "number": "1.9.11",
  "title": "Our Final Calculation.",
  "body": " Our Final Calculation   Add up the appropriate multiples of to calculate .    From , we see the entries in rows corredsponding to and are and . So we conclude that .   "
},
{
  "id": "ques-egyptmult2",
  "level": "2",
  "url": "sec-history.html#ques-egyptmult2",
  "type": "Question",
  "number": "1.9.12",
  "title": "Another Multiplication Question.",
  "body": " Another Multiplication Question   Multiply as would the Egyptians.   "
},
{
  "id": "subsubsec-babylon-3-1",
  "level": "2",
  "url": "sec-history.html#subsubsec-babylon-3-1",
  "type": "Figure",
  "number": "1.9.13",
  "title": "",
  "body": "   The Babylonian cuneiform tablet: Plimpton 322  "
},
{
  "id": "ques-baby1",
  "level": "2",
  "url": "sec-history.html#ques-baby1",
  "type": "Question",
  "number": "1.9.14",
  "title": "Sexigesimal Practice.",
  "body": " Sexigesimal Practice   Convert into base-10.        "
},
{
  "id": "ques-baby2",
  "level": "2",
  "url": "sec-history.html#ques-baby2",
  "type": "Question",
  "number": "1.9.15",
  "title": "Practicing with Sexigesimal Fractions.",
  "body": " Practicing with Sexigesimal Fractions  Represent as a sexigesimal fraction.  "
},
{
  "id": "subsec-timeline-2",
  "level": "2",
  "url": "sec-history.html#subsec-timeline-2",
  "type": "Figure",
  "number": "1.9.16",
  "title": "",
  "body": "   "
},
{
  "id": "ques-timeline1",
  "level": "2",
  "url": "sec-history.html#ques-timeline1",
  "type": "Question",
  "number": "1.9.17",
  "title": "",
  "body": "  Find a mathematician from Asia. What contribution did he or she make?   "
},
{
  "id": "ques-timeline2",
  "level": "2",
  "url": "sec-history.html#ques-timeline2",
  "type": "Question",
  "number": "1.9.18",
  "title": "",
  "body": "  Find a mathematician listed between 1600 and 1800 Asia. What contribution did he or she make?   "
},
{
  "id": "ques-timeline3",
  "level": "2",
  "url": "sec-history.html#ques-timeline3",
  "type": "Question",
  "number": "1.9.19",
  "title": "",
  "body": "  Find a mathematician listed between te 20th and 21st. What contribution did he or she make?   "
},
{
  "id": "sec-harnessinf",
  "level": "1",
  "url": "sec-harnessinf.html",
  "type": "Section",
  "number": "2.1",
  "title": "Harnessing <span class=\"process-math\">\\(\\infty\\)<\/span>",
  "body": " Harnessing  \"What is the largest number you can think of?\" Hopefully, you see that is a question with no real answer. Maybe the closest we can come to answering that question is even though we know is not a number.  In fact, is a weird creature. It breaks some of our number-intuition. It feels like just does not behave. For example, can we add an infinite number of numbers and get something finite? We'll see that you can sometimes. Some of our normal addition rules act differently when is involved. For example, can help us show that ? Let's start with , and we know that Can't we do this forever?     This is a problem! Apparently, the associate law of addition doesn't play well with . You'll discuss this example in greater detail in a later course, but this is enough to show that can be very unusual.  HILBERT HOTEL VIDEO    In Hilbert's hotel, how do we accommodate a new customer if all rooms are booked?      In Hilbert's hotel, how do we accommodate new customers if all rooms are booked?      In Hilbert's hotel, how do we accommodate an infinite new customers if all rooms are booked?    Rules like sound impossible, until we consider the strange creature we call .   Not always unpredictable  However, is not completely unpredictable in all cases. Actually, we should say that a pattern trending towards infinity is sometimes predictable.  For example, consider the function . What happens as the variable gets larger and larger (trends towards ).    Fill out the following table and make a decision about what happens to as trends towards .                                                          What's your decision?    So it seems as gets closer to , gets closer to 0. Let's try something else. This time, let's let get close to .    Fill out the following table and make a decision about what happens to as trends towards .                                                          What's your decision?    This time, seems to get larger and larger. We could say that as trends towards (at least from the positive side of the number line), trends towards .  Actually, a graph would make these trends obvious.     (for accessibility)       Movement On Paper  Trends like the ones we looked at in and are examples of limits , a foundational tool in the study of Calculus. We would write the conclusions from the past activities like We'll save defining limits clearly for your other coursework, but we can think about limits intuitively.  Firstly, we can think of limits as a way to introduce motion on paper. We \"watched\" the behavior of as \"moved\" towards . There are other examples in which we allow the number rectangles or the number of sides or the number terms and so on extend towards . The limit is similar to the play button on a YouTube video. When you see , you can just imagine some sort of movement or change on your paper.  Secondly, the limit is the tool that allows us to tame ... Well, not \"tame\" , but we can utilize with a limit to accomplish some incredible things. We don't tame the Mississippi River, but it is an enormous resource!    So what is Calculus?  So what is calculus exactly? Calculus is a multifaceted branch of mathematics that serves as the bedrock of an enormous number of applications in a a huge variety of fields. However, common to all of the underlying ideas of calculus is harnessing through limits to do something.  Let's look at some examples of how, in some cases, we can predict the infinite. The first should be familiar to us.   Limit of Functions  Use a table to evaluate (By , we mean we approach from the left side of the number line. Try using numbers like and so on.)   Earlier, we added an infinite number of times. Can we actually add an infinite amount of numbers and get a finite answer? Calculus says, \"Yes! It is possible.\"  A geometric series is a summation of the powers of a number . So it looks like For a lot of numbers, this sum gets larger and larger, but if , the sum will equal . This should surprise you in some way. We can add up an infinite number of numbers and actually calculate the result with a nice, clean formula!   Finding Geometric Series   Calculuate the geometric series corresponding to :     The value of in this case is , which is less than , so our formula applies.     All of that adds up to ? Wow. What about if we let ?   Another Geometric Series   Calculuate the geometric series corresponding to :     Like , , so     Let's look at one more example.    Recursive Sequences  A sequence , , is just an infinite list of terms. A familiar example would be , the sequence of natural numbers. A sequence is different than a set in that the order of the terms matters. So is the term in the sequence . Make sense? The terms in a sequence typically are defined by a rule. For example, if , then   A sequence is a recursive sequence if the rule for involves earlier terms in the sequence. For example, suppose and, after the first term, . Then and so on.   Recursive Terms   What is in our recursive sequence?    The big question is whether this recurvise sequence, like the function and the geometric series we saw earlier, has a limit? The answer is \"yes\", but how would we find it?  If you take an analysis course (Maybe Advanced Calculus or Intro to Real Analysis), you will see questions like this, and to find a limit of our recursive sequence you would have to prove two important pieces of information. First, the terms in our sequence either need to get progessively smaller or larger with each sequential term, and secondly all of the terms must be smaller than some number and larger than another number (That is, for each term .).  If these two facts are true, then the Monotone Convergence Theorem guarantees the recursive sequence has a limit.     Use the Sage cell to make a hypothesis about if either is (1) increasing or decreasing and (2) bound above or below by a number.    It looks like is (1) decreasing and (2) bound above by 1 and below by 0. However, this is just a hypothesis.      Does the recursive sequence defined by and satisfy the conditions of the Monotone Convergence Theorem? (See the solution.)    Yes, it does, but proving that is beyond the scope of what we're doing here. It can be a little complicated.    In mathematics, it's not a good idea to take things for granted, but for the purpose of illustration, suppose we have shown that is decreasing (getting smaller with each term) and always larger than . That means that our sequence does have a limit. Let's call this mysterious limit point , and here's how we find what is.  We know that , and so that also means that . So   All of that to say that our limit satisfies the equation     Find the limit point of our sequence by solving the equation     This is just algebra at this point. So either or , but we already know that so .    This is a complicated example, but we are highlighting how even though can act strangely, we can use it to answer complicated quesetions... like how this sequence will trend towards !   "
},
{
  "id": "hilberhotel1",
  "level": "2",
  "url": "sec-harnessinf.html#hilberhotel1",
  "type": "Question",
  "number": "2.1.1",
  "title": "",
  "body": "  In Hilbert's hotel, how do we accommodate a new customer if all rooms are booked?   "
},
{
  "id": "hilberhotel2",
  "level": "2",
  "url": "sec-harnessinf.html#hilberhotel2",
  "type": "Question",
  "number": "2.1.2",
  "title": "",
  "body": "  In Hilbert's hotel, how do we accommodate new customers if all rooms are booked?   "
},
{
  "id": "hilberhotel3",
  "level": "2",
  "url": "sec-harnessinf.html#hilberhotel3",
  "type": "Question",
  "number": "2.1.3",
  "title": "",
  "body": "  In Hilbert's hotel, how do we accommodate an infinite new customers if all rooms are booked?   "
},
{
  "id": "ac-limits1",
  "level": "2",
  "url": "sec-harnessinf.html#ac-limits1",
  "type": "Activity",
  "number": "2.1.1",
  "title": "",
  "body": "  Fill out the following table and make a decision about what happens to as trends towards .                                                          What's your decision?   "
},
{
  "id": "ac-limits2",
  "level": "2",
  "url": "sec-harnessinf.html#ac-limits2",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": "  Fill out the following table and make a decision about what happens to as trends towards .                                                          What's your decision?   "
},
{
  "id": "fig-plot1",
  "level": "2",
  "url": "sec-harnessinf.html#fig-plot1",
  "type": "Figure",
  "number": "2.1.6",
  "title": "",
  "body": "   (for accessibility)    "
},
{
  "id": "subsec-movementonpaper-2",
  "level": "2",
  "url": "sec-harnessinf.html#subsec-movementonpaper-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limits "
},
{
  "id": "ques-limits1",
  "level": "2",
  "url": "sec-harnessinf.html#ques-limits1",
  "type": "Question",
  "number": "2.1.7",
  "title": "Limit of Functions.",
  "body": " Limit of Functions  Use a table to evaluate (By , we mean we approach from the left side of the number line. Try using numbers like and so on.)  "
},
{
  "id": "subsec-whatiscalculus-6",
  "level": "2",
  "url": "sec-harnessinf.html#subsec-whatiscalculus-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric series "
},
{
  "id": "ques-limits2",
  "level": "2",
  "url": "sec-harnessinf.html#ques-limits2",
  "type": "Question",
  "number": "2.1.8",
  "title": "Finding Geometric Series.",
  "body": " Finding Geometric Series   Calculuate the geometric series corresponding to :     The value of in this case is , which is less than , so our formula applies.    "
},
{
  "id": "ques-limits3",
  "level": "2",
  "url": "sec-harnessinf.html#ques-limits3",
  "type": "Question",
  "number": "2.1.9",
  "title": "Another Geometric Series.",
  "body": " Another Geometric Series   Calculuate the geometric series corresponding to :     Like , , so    "
},
{
  "id": "subsec-recursive-2",
  "level": "2",
  "url": "sec-harnessinf.html#subsec-recursive-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequence "
},
{
  "id": "subsec-recursive-3",
  "level": "2",
  "url": "sec-harnessinf.html#subsec-recursive-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recursive sequence "
},
{
  "id": "ques-recursive1",
  "level": "2",
  "url": "sec-harnessinf.html#ques-recursive1",
  "type": "Question",
  "number": "2.1.10",
  "title": "Recursive Terms.",
  "body": " Recursive Terms   What is in our recursive sequence?   "
},
{
  "id": "subsec-recursive-6",
  "level": "2",
  "url": "sec-harnessinf.html#subsec-recursive-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prove "
},
{
  "id": "subsec-recursive-7",
  "level": "2",
  "url": "sec-harnessinf.html#subsec-recursive-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Monotone Convergence Theorem "
},
{
  "id": "ques-mct1",
  "level": "2",
  "url": "sec-harnessinf.html#ques-mct1",
  "type": "Question",
  "number": "2.1.11",
  "title": "",
  "body": "  Use the Sage cell to make a hypothesis about if either is (1) increasing or decreasing and (2) bound above or below by a number.    It looks like is (1) decreasing and (2) bound above by 1 and below by 0. However, this is just a hypothesis.   "
},
{
  "id": "ques-mct2",
  "level": "2",
  "url": "sec-harnessinf.html#ques-mct2",
  "type": "Question",
  "number": "2.1.12",
  "title": "",
  "body": "  Does the recursive sequence defined by and satisfy the conditions of the Monotone Convergence Theorem? (See the solution.)    Yes, it does, but proving that is beyond the scope of what we're doing here. It can be a little complicated.   "
},
{
  "id": "ques-mct3",
  "level": "2",
  "url": "sec-harnessinf.html#ques-mct3",
  "type": "Question",
  "number": "2.1.13",
  "title": "",
  "body": "  Find the limit point of our sequence by solving the equation     This is just algebra at this point. So either or , but we already know that so .   "
},
{
  "id": "sec-newtonleibniz",
  "level": "1",
  "url": "sec-newtonleibniz.html",
  "type": "Section",
  "number": "2.2",
  "title": "Newton vs Leibniz",
  "body": " Newton vs Leibniz  Text of section.  "
},
{
  "id": "sec-archimedes",
  "level": "1",
  "url": "sec-archimedes.html",
  "type": "Section",
  "number": "2.3",
  "title": "Archimedes’ Great Idea",
  "body": " Archimedes' Great Idea  Modern Calculus was formulated by Sir Isaac Newton and Gotfriend Leibniz in 1687. But the great mathematician, Archimedes, was really close to developing Calculus in 300 B.C. (Almost 2000 years before Newton and Leibniz!) with the formation of the limit: the starting point of well-defined calculus (though he never used the word ``limit\" in his construction.).   Archimedes of Syracuse    What is this weird number?  To illustrate how Archimedes was thinking about calculus two thousand years before calculus was a known thing, we should think about circles. Ancient cultures were puzzled that every circle carried an unusual trait. It seemed that for a circle with diameter , its circumference was predictable... kind of.   Circumference and Diameter  How many diameter lengths is the circumference of a circle? SETUP SOME ACTIVITY WITH THIS.   It appears that a circle with diamer has a circumference a bit more than . This fact was true with every circle, and each culture attempted by their own estimates to calculate the myserious number that was the ratio of circumference to diameter .  So what is this number? We define as for the circle with circumference and diameter . The Babylonians found to approximate , and the Egyptians used for their estimate. You probably learned something like . Through modern techniques, computers can now calculate to millions of digits, but the true value of eluded the greatest of minds for centuries.  For reference, here are the first 30 digits of .     Archimedes' Estimate  Archimedes was interested in figuring out the very mysterious number of , and eventually estimated to be (or between ). That's really, really close for 300 BC.   How did he develop such a good estimate? Archimedes was exteremly good at calculations, and he knew polygons very well.     He first inscribed a hexagon in a circle with radius like in , and then he noticed that the hexagon's area is a rough estimate of the area of the circle. Let's work that out for ourselves. We can find the hexagon's area by dividing it into six equilateral triangles and finding their area.   The Hexagon's Area   Find the area of one equilateral triangle using the formula for base and height .    The triangle is equilateral, so it has base length . Using pythagorean theorem, we find the height to be . So the area of the triangle is So the area of the hexagon is .    Okay... that's not a great estimate for , but Archimedes realized a dodecagon's area would be a better estimate. Why stop there though? he calculated areas of -gons, -gons, and -gons (all by hand and without modern trigonometry), all inscribed in a circle of radius 1. Archimedes knew that these areas trend towards some number really close to what we now call .  In the illustration below, you can see how the areas of -gons trend towards as goes to . Wait... that sounds like a limit! Archimedes build a limit that in 300 BC.      "
},
{
  "id": "subsec-weirdnumber-3",
  "level": "2",
  "url": "sec-archimedes.html#subsec-weirdnumber-3",
  "type": "Activity",
  "number": "2.3.1",
  "title": "Circumference and Diameter.",
  "body": " Circumference and Diameter  How many diameter lengths is the circumference of a circle? SETUP SOME ACTIVITY WITH THIS.  "
},
{
  "id": "subsec-archimedes-4",
  "level": "2",
  "url": "sec-archimedes.html#subsec-archimedes-4",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": "  "
},
{
  "id": "ques-archim1",
  "level": "2",
  "url": "sec-archimedes.html#ques-archim1",
  "type": "Question",
  "number": "2.3.2",
  "title": "The Hexagon’s Area.",
  "body": " The Hexagon's Area   Find the area of one equilateral triangle using the formula for base and height .    The triangle is equilateral, so it has base length . Using pythagorean theorem, we find the height to be . So the area of the triangle is So the area of the hexagon is .   "
},
{
  "id": "geo-act1",
  "level": "2",
  "url": "sec-archimedes.html#geo-act1",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": "  "
},
{
  "id": "sec-calcinmovies",
  "level": "1",
  "url": "sec-calcinmovies.html",
  "type": "Section",
  "number": "2.4",
  "title": "Calculus in the Movies",
  "body": " Calculus in the Movies  Using infinitely close approximations displays power of calculus. Did you know that you can see calculus at work when you watch Finding Nemo?  In fact Pixar Studios continually conducts rigorous mathematical research. One of the mathematicians working for Pixar is Tony Rose, the first PhD in mathematics to win an Academy Award!   Numberphile's Math and Movies  YouTube content creators Numberphile visited Pixar Studios to meet with Tony Rose to discuss some of the mathematics behind their movies.        Explain how the concept of a limit has helped Pixar animators.      Why do newer animated movies look better than the pioneers of 3D animation like Toy Story and Ice Age?     "
},
{
  "id": "vid-numberphileCalc",
  "level": "2",
  "url": "sec-calcinmovies.html#vid-numberphileCalc",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": "   "
},
{
  "id": "ques-calinmovies1",
  "level": "2",
  "url": "sec-calcinmovies.html#ques-calinmovies1",
  "type": "Question",
  "number": "2.4.2",
  "title": "",
  "body": "  Explain how the concept of a limit has helped Pixar animators.   "
},
{
  "id": "subsec-numberphileCal-5",
  "level": "2",
  "url": "sec-calcinmovies.html#subsec-numberphileCal-5",
  "type": "Question",
  "number": "2.4.3",
  "title": "",
  "body": "  Why do newer animated movies look better than the pioneers of 3D animation like Toy Story and Ice Age?   "
},
{
  "id": "sec-ratesofchange",
  "level": "1",
  "url": "sec-ratesofchange.html",
  "type": "Section",
  "number": "2.5",
  "title": "Rates of Change",
  "body": " Rates of Change  Did you know crows give gifts? Some people have found that if you routinely feed local crows or ravens, they will eventually return the favor by bringing trinkets. People have reported that their crow friends have brought bottle caps, sticks, feathers, and miscelaneous shiny objects.   Imagine your friend, Lucas, has a crow friend, and his crow brings him two small gifts a day. So the shoebox where Lucas keeps these gifts grows by two items a day. We can chart it like below.   Crow-friend presents   (for accessibility)     We see here an example of linear data. That is, if we chart this information, we can see a straight line with equation , where is our initial amount (or -intercept) and is our slope.  What does slope mean exactly? The graph in is , and so the slope is . But what does that mean? The slope refers to how quickly our line is changing... a rate of change . In this case, gifts per day.  This is exactly why the slope formula is The rate of change is measured by \"change in over change in \".   Throwing a Ball  A lot of situations aren't linear, though, right? For example, if our tall friend throws a ball straight up at mph (or feet per second), thanks to gravity which accelerates over time, after seconds, the ball is at height feet.   Ball height over time   (for accessibility)     This obviously has a rate of change, but our slope formula doesn't seem to make sense anymore. So how do we find how quickly a ball is moving in the air at a given time? Unlike the crow-friend graph earlier, we cannot talk about slope... or maybe we should consider the slope to be variable. So when we talk about velocity, we have to talk about velocity at a given time , since velocity is not constant.  Suppose we want to know how fast the ball is travelling after . This is a difficult question at first, but maybe we can take an average velocity over a short time interval and use this average velocity as an estimate for the velocity at exactly . For example, let's find the average velocity from to . In other words, we look for the slope of the line passing through the points and . We call such a line a secant line .   Our First Average   Use the slope formula to calculate the average velocity of te ball from to .       f(x) = -16*x^2+44*x+6 sl(x) = (f(2)-f(x))\/(2-x) g2 = plot(f, (0, 3), color='blue', linestyle='-', aspect_ratio=.06); g2 += plot(sl(1)*(x-1)+f(1), (0, 3), color='red', linestyle='-', aspect_ratio=.06); g2   We can see the graph of the function modelling the ball and the secant line in . The idea is that the slope of the secant line gives us an estimate for the rate the ball is travelling at . Is this a good estimate?  Probably not.    How could we get a better estimate?    Maybe we should find secant line slopes that pass through points closer to , like the secant line corresponding to times and .    If we take an average over a shorter distance, we can get a more accurate measurement for the instantaneous rate of change at . The Geogebra applet below shows the trend of slopes of the secant lines as our time interval gets smaller.          Use the Geogebra applet to estimate how quickly the ball is traveling at .    It appears to be trending towards .    Notice that the secant line disappears when the time interval is . This is part of the problem, right? We can get a trend of slopes when the time interval is close to , but the slope formula is undefined once we have a time interval length .  There is, however, a special line we call the tangent line that intersects our graph right at and whose slope is the number that the secant slopes are trending towards. The tangent line's slope gives us the instantaneous rate of change that we are looking for. Wouldn't it be nice to have a good way of finding the tangent line's slope?  PIC OF GRAPH WITH TANGENT LINE.    Derivatives and Instantaneous Rate of Change  Remember from that when we talk about trends, we're actually talking about limits. In this case, we're looking at slopes of secant lines as the time interval trends towards 0. This limit gives us the instantaneous rate of change of a function at a given time.  Mathematically, with help of the slope formula, we could say the instantaneous rate of change is and amazingly the simple slope formula we learned in algebra becomes the tool to finding instantaneous rate of change!  This limit is called the derivative , and it is the gateway to understanding movement and change in mathematical terms. Your first semester of Calculus will focus heavily on the derivative, including nice formulas for calculating derivatives and a variety of derivative applications.  Typically, for function , we denote the derivative as , and with this new definition, we see that the tangent line at has equation for any function. With the derivative in our arsenal, we have a more sophisticated method to finding a rate of change than using secant line.    Applications of Derivatives  You encountere derivatives everywhere you go.... everytime you hit your car breaks... everytime you take medicine... and everytime you launch a rocket into space. The derivative is an extremely powerful tool. Let's look at a few applications of derivatives.   Applications of Derivatives   With a group of classmates, find four applications of derivatives either through a textbook or the internet.     More Rates of Change  We were not kidding around when we said that derivates are all around us. Any rate of change can be classified as a derivative. We can find examples from biology, chemistry, population dynamics, ecology, economy, and astronomy (among many others).  Let's look at an example.    Suppose you have a tank holds gallons of water, which drains from the bottom in min. By Torricelli's Law , the volume of water remaining in the tank after minutes is   What does the derivative model?    Since gives us the volume of water at time , gives us the rate of change in the water volume at time . That is, tells us how quickly the water is draining from the tank at time .      Suppose that , where is the volume of water remaining in .  How quickly is the water draining after .      Highest and Lowest  If the derivative of is at the value , the instaneous rate of change at is as well. That means the tangent line at has slope and thus is horizontal. What does this mean? When does a function have no change? Or a horizontal tangent line? Many times, these are the places where has either reached a high point or a low point. For this reason, derivatives often help us find the highs and lows.  Suppose we find of fencing at a local flea market (for a price we can't turn down), and we are wanting to build an enclosed field with it. We have the perfect place along a local creek that will serve as one border of our field. The question calculus can help with is \"How do we build a field with the most area possible?\" Should this field be long and then? Should it be square shaped? Somewhere in between? Let's figure that out.  ADD GEOGEBRA ANIMATION OF A FIELD?  We can label the rectangular sides as and (with ), but we need to also setup equations for area and perimeter.    What's the area of the field in terms of and ?             What's the perimeter in terms of and ? Don't forget that the total amount of fence is .    Since one side of the rectangle is the creek, we have perimeter , and so in total we have as a representation of perimeter.    We can use our perimeter equation to express as a one variable function. From there, the equation will help us pinpoint exactly what dimension field has the maximum area.    Express as a function of .    We solve for to get and so     So now we know the area of a our field is . After some simple derivative rules, we obtain .    Solve the equation .    We solve to get .    So is a potential maximum or minimum of , and since is a downward opening parabola, it makes sense that is in fact the maximum. Putting it all together, the largest field we could possibly build has two sides length and one more side length . The area of this field is .  You can imagine there a lot of valuable applications similar to this.    "
},
{
  "id": "fig-rates1",
  "level": "2",
  "url": "sec-ratesofchange.html#fig-rates1",
  "type": "Figure",
  "number": "2.5.1",
  "title": "",
  "body": " Crow-friend presents   (for accessibility)    "
},
{
  "id": "sec-ratesofchange-6",
  "level": "2",
  "url": "sec-ratesofchange.html#sec-ratesofchange-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope rate of change "
},
{
  "id": "fig-rates2",
  "level": "2",
  "url": "sec-ratesofchange.html#fig-rates2",
  "type": "Figure",
  "number": "2.5.2",
  "title": "",
  "body": " Ball height over time   (for accessibility)    "
},
{
  "id": "subsec-throwaball-4",
  "level": "2",
  "url": "sec-ratesofchange.html#subsec-throwaball-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "at a given time "
},
{
  "id": "subsec-throwaball-5",
  "level": "2",
  "url": "sec-ratesofchange.html#subsec-throwaball-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant line "
},
{
  "id": "ques-der1",
  "level": "2",
  "url": "sec-ratesofchange.html#ques-der1",
  "type": "Question",
  "number": "2.5.3",
  "title": "Our First Average.",
  "body": " Our First Average   Use the slope formula to calculate the average velocity of te ball from to .   "
},
{
  "id": "fig-diff3",
  "level": "2",
  "url": "sec-ratesofchange.html#fig-diff3",
  "type": "Figure",
  "number": "2.5.4",
  "title": "",
  "body": "   f(x) = -16*x^2+44*x+6 sl(x) = (f(2)-f(x))\/(2-x) g2 = plot(f, (0, 3), color='blue', linestyle='-', aspect_ratio=.06); g2 += plot(sl(1)*(x-1)+f(1), (0, 3), color='red', linestyle='-', aspect_ratio=.06); g2  "
},
{
  "id": "ques-der2",
  "level": "2",
  "url": "sec-ratesofchange.html#ques-der2",
  "type": "Question",
  "number": "2.5.5",
  "title": "",
  "body": "  How could we get a better estimate?    Maybe we should find secant line slopes that pass through points closer to , like the secant line corresponding to times and .   "
},
{
  "id": "geogebra-sec",
  "level": "2",
  "url": "sec-ratesofchange.html#geogebra-sec",
  "type": "Figure",
  "number": "2.5.6",
  "title": "",
  "body": "  "
},
{
  "id": "ques-sec1",
  "level": "2",
  "url": "sec-ratesofchange.html#ques-sec1",
  "type": "Question",
  "number": "2.5.7",
  "title": ".",
  "body": "   Use the Geogebra applet to estimate how quickly the ball is traveling at .    It appears to be trending towards .   "
},
{
  "id": "subsec-throwaball-16",
  "level": "2",
  "url": "sec-ratesofchange.html#subsec-throwaball-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent line "
},
{
  "id": "subsec-derivatives-2",
  "level": "2",
  "url": "sec-ratesofchange.html#subsec-derivatives-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "instantaneous rate of change "
},
{
  "id": "subsec-derivatives-4",
  "level": "2",
  "url": "sec-ratesofchange.html#subsec-derivatives-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derivative "
},
{
  "id": "ques-der4",
  "level": "2",
  "url": "sec-ratesofchange.html#ques-der4",
  "type": "Question",
  "number": "2.5.8",
  "title": "Applications of Derivatives.",
  "body": " Applications of Derivatives   With a group of classmates, find four applications of derivatives either through a textbook or the internet.   "
},
{
  "id": "ques-appd11",
  "level": "2",
  "url": "sec-ratesofchange.html#ques-appd11",
  "type": "Question",
  "number": "2.5.9",
  "title": "",
  "body": "  Suppose you have a tank holds gallons of water, which drains from the bottom in min. By Torricelli's Law , the volume of water remaining in the tank after minutes is   What does the derivative model?    Since gives us the volume of water at time , gives us the rate of change in the water volume at time . That is, tells us how quickly the water is draining from the tank at time .   "
},
{
  "id": "ques-appd12",
  "level": "2",
  "url": "sec-ratesofchange.html#ques-appd12",
  "type": "Question",
  "number": "2.5.10",
  "title": "",
  "body": "  Suppose that , where is the volume of water remaining in .  How quickly is the water draining after .   "
},
{
  "id": "ques-appd31",
  "level": "2",
  "url": "sec-ratesofchange.html#ques-appd31",
  "type": "Question",
  "number": "2.5.11",
  "title": "",
  "body": "  What's the area of the field in terms of and ?        "
},
{
  "id": "ques-appd32",
  "level": "2",
  "url": "sec-ratesofchange.html#ques-appd32",
  "type": "Question",
  "number": "2.5.12",
  "title": "",
  "body": "  What's the perimeter in terms of and ? Don't forget that the total amount of fence is .    Since one side of the rectangle is the creek, we have perimeter , and so in total we have as a representation of perimeter.   "
},
{
  "id": "ques-appd33",
  "level": "2",
  "url": "sec-ratesofchange.html#ques-appd33",
  "type": "Question",
  "number": "2.5.13",
  "title": "",
  "body": "  Express as a function of .    We solve for to get and so    "
},
{
  "id": "ques-appd34",
  "level": "2",
  "url": "sec-ratesofchange.html#ques-appd34",
  "type": "Question",
  "number": "2.5.14",
  "title": "",
  "body": "  Solve the equation .    We solve to get .   "
},
{
  "id": "sec-surfaces",
  "level": "1",
  "url": "sec-surfaces.html",
  "type": "Section",
  "number": "2.6",
  "title": "Surfaces",
  "body": " Surfaces  Most of our lives is not spent in a 2D world (is any of it?), so why would we only look at mathematics in a 2D world? Most of our experiences are three dimensional, so it only makes sense to think about mathematics in a 3D environment.       There are two ways we can visualize a 3D surface. The first way you might consider is having two independent variables, , and one dependent variable, . So functions of this form are written as   You can see the surface below.        Contour Plots: Connecting 2D and 3D Shapes  There's something familiar about . Where have you seen something like that before? Well, we know is a 2D object: a circle with radius . We so can think of these circles as a part of . If you sliced at height and put that slice on a plate, the result would be the circle .  These slices are called contours or -curves of , and each - curve of a 3D function results in a 2D object. Keep in mind that when you study explicitly defined functions in the 2D sense, you are actually studying -curves of a 3D function.   along with several contours       Contour  What if there's some type of mathematical object whose contour is a 3D surface itself? Can you think of how that would work? Yeah, we would need a 4D surface set equal to a constant. That is,    from several vantage points          Quartic Surfaces   "
},
{
  "id": "fig-surface1",
  "level": "2",
  "url": "sec-surfaces.html#fig-surface1",
  "type": "Figure",
  "number": "2.6.1",
  "title": "",
  "body": "    "
},
{
  "id": "fig-surface2",
  "level": "2",
  "url": "sec-surfaces.html#fig-surface2",
  "type": "Figure",
  "number": "2.6.2",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-contour-3",
  "level": "2",
  "url": "sec-surfaces.html#subsec-contour-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contours -curves explicitly defined functions "
},
{
  "id": "fig-surface3",
  "level": "2",
  "url": "sec-surfaces.html#fig-surface3",
  "type": "Figure",
  "number": "2.6.3",
  "title": "",
  "body": " along with several contours    "
},
{
  "id": "fig-surface4",
  "level": "2",
  "url": "sec-surfaces.html#fig-surface4",
  "type": "Figure",
  "number": "2.6.4",
  "title": "",
  "body": " from several vantage points    "
},
{
  "id": "des-act1",
  "level": "2",
  "url": "sec-surfaces.html#des-act1",
  "type": "Figure",
  "number": "2.6.5",
  "title": "",
  "body": "  "
},
{
  "id": "sec-polarcoords",
  "level": "1",
  "url": "sec-polarcoords.html",
  "type": "Section",
  "number": "2.7",
  "title": "Polar Coordinates",
  "body": " Polar Coordinates  The traveling fair is in town! You can see the rides at the fair grounds from the highway as you pass by (and smell the funnel cake). Our friend, Tom, finally worked up the courage to ask out Amy, and so a trip to the fair is their first date.  Their first ride is the bumper cars. Amy drives around the rectangular arena, but Tom's cart is stuck in one of the corners. While he's sitting there, he starts thinking about locations of other carts. The arena is rectangular and can be broken up into a grid of ft sections, and each cart's location is classified by an coordinate.  PICTURE  Coordinates like we see at the bumper cars are called rectangular coordinates (because they fit nicely in a rectangular grid). For example, the point is written to show that is found in the plane by going in the -direction and in the -direction.  But are rectangular grids always the best way to think of things? Tom and Amy move on to the tilt-o-whirl, and even though we could label the coordinates of this round environment using a rectangular grid, there's probably a more efficient way. What if instead of thinking in terms of rectangles, we thought of things in terms of circles? Rectangular coordinates are awkward for round and circular shapes, and so maybe there's a better way. Meet polar coordinates.  Polar coordinates redefine point by . That is, we label our coordinates with a radius and an angle of rotation. We can get to the same point by going out a distance of and rotating  as pictured.    rectangular coordinates     polar coordinates     So the rectangular point can be written in polar coordinates as .   Converting Coordinates  How can we go from rectangle world to circle world? Obviously, with triangles.   converting to polar coordinates    Notice the values of and form a right triangle, and so by Pythagorean theorem and a little trigonometry, and (or maybe more usefully said: ).    Convert into polar coordinates.    Trigonometry can also help us go from polar to rectangular coordinates.    Using the same triangle as before, determine and .         There we have it! We use and to convert coordinates from polar to rectangular.    Conver polar coordinate into rectangular coordinates.      Polar Functions  Ancient cultures spent a lot of time watching the sky. They built calendars, determined seasons, and even navigated across oceans with the help of positions of stars. Some cultures crafted stories around constellations while others saw their gods in the planets.   Retrograde Motion of Planets     Tracking the position of planets and stars was crucial to society, but planets behaved erratically by sometimes travelling backwards! This motion is called retrograde motion, and it is an interesting phenomenon due to planets' elliptical orbits. Retrograde motion led astologists to these amazing \"dances of planets\".   The 8 year dance between Earth and Venus        The vertical line test says amazing plots like these are not functions. What we really mean is that they are not functions with independent variable and as a function of , However, in polar coordinates, plots like these would be right at home. We can treat as a function of the independent variable . So typically represents a polar function.    Polar Coordinates in Desmos  We can easily view polar functions in Desmos by simply typing an equation . Let's see what kind of functions we can create.   Polar Function Intro  Try plotting . You can type by typing \"theta\".      The function is known as the Archimedean spiral or the golden spiral and is related to Fibonacci sequence. As for Desmos, notice bounds of are automatically added, and you can adjust that range as needed. Let's try a few more polar plots.      Plot .         Plot .      Plot and change the value of with a slider.         Plot and insert a slider when prompted. (Hint: Desmos cannot recognize . Try typing .)         Showing Off Polar Plots  In a small group, make a Desmos plot of polar plot (or plots) to share with the class. The class will vote, and the winning group will be the \"Polar Royals\".      "
},
{
  "id": "sec-polarcoords-5",
  "level": "2",
  "url": "sec-polarcoords.html#sec-polarcoords-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rectangular coordinates "
},
{
  "id": "sec-polarcoords-8-1",
  "level": "2",
  "url": "sec-polarcoords.html#sec-polarcoords-8-1",
  "type": "Figure",
  "number": "2.7.1",
  "title": "",
  "body": " rectangular coordinates   "
},
{
  "id": "sec-polarcoords-8-2",
  "level": "2",
  "url": "sec-polarcoords.html#sec-polarcoords-8-2",
  "type": "Figure",
  "number": "2.7.2",
  "title": "",
  "body": " polar coordinates   "
},
{
  "id": "subsec-convertingcoords-3",
  "level": "2",
  "url": "sec-polarcoords.html#subsec-convertingcoords-3",
  "type": "Figure",
  "number": "2.7.3",
  "title": "",
  "body": " converting to polar coordinates   "
},
{
  "id": "ques-pcords1",
  "level": "2",
  "url": "sec-polarcoords.html#ques-pcords1",
  "type": "Question",
  "number": "2.7.4",
  "title": "",
  "body": "  Convert into polar coordinates.   "
},
{
  "id": "ques-pcoords2",
  "level": "2",
  "url": "sec-polarcoords.html#ques-pcoords2",
  "type": "Question",
  "number": "2.7.5",
  "title": "",
  "body": "  Using the same triangle as before, determine and .        "
},
{
  "id": "ques-pcoords3",
  "level": "2",
  "url": "sec-polarcoords.html#ques-pcoords3",
  "type": "Question",
  "number": "2.7.6",
  "title": "",
  "body": "  Conver polar coordinate into rectangular coordinates.   "
},
{
  "id": "fig-coords3",
  "level": "2",
  "url": "sec-polarcoords.html#fig-coords3",
  "type": "Figure",
  "number": "2.7.7",
  "title": "",
  "body": " Retrograde Motion of Planets    "
},
{
  "id": "fig-planetdances",
  "level": "2",
  "url": "sec-polarcoords.html#fig-planetdances",
  "type": "Figure",
  "number": "2.7.8",
  "title": "",
  "body": " The 8 year dance between Earth and Venus     "
},
{
  "id": "act-polar1",
  "level": "2",
  "url": "sec-polarcoords.html#act-polar1",
  "type": "Activity",
  "number": "2.7.1",
  "title": "Polar Function Intro.",
  "body": " Polar Function Intro  Try plotting . You can type by typing \"theta\".     "
},
{
  "id": "subsec-polarcordsdesmos-4",
  "level": "2",
  "url": "sec-polarcoords.html#subsec-polarcordsdesmos-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Archimedean spiral golden spiral "
},
{
  "id": "ques-polarplot1",
  "level": "2",
  "url": "sec-polarcoords.html#ques-polarplot1",
  "type": "Question",
  "number": "2.7.10",
  "title": "",
  "body": "  Plot .   "
},
{
  "id": "desmos-polar3",
  "level": "2",
  "url": "sec-polarcoords.html#desmos-polar3",
  "type": "Figure",
  "number": "2.7.11",
  "title": "",
  "body": "  "
},
{
  "id": "ques-polarplot2",
  "level": "2",
  "url": "sec-polarcoords.html#ques-polarplot2",
  "type": "Question",
  "number": "2.7.12",
  "title": "",
  "body": "  Plot .   "
},
{
  "id": "ques-polarplot3",
  "level": "2",
  "url": "sec-polarcoords.html#ques-polarplot3",
  "type": "Activity",
  "number": "2.7.2",
  "title": "",
  "body": "  Plot and change the value of with a slider.      "
},
{
  "id": "ques-desmosplot4",
  "level": "2",
  "url": "sec-polarcoords.html#ques-desmosplot4",
  "type": "Question",
  "number": "2.7.14",
  "title": "",
  "body": "  Plot and insert a slider when prompted. (Hint: Desmos cannot recognize . Try typing .)   "
},
{
  "id": "desmos-polar5",
  "level": "2",
  "url": "sec-polarcoords.html#desmos-polar5",
  "type": "Figure",
  "number": "2.7.15",
  "title": "",
  "body": "  "
},
{
  "id": "act-polarplots2",
  "level": "2",
  "url": "sec-polarcoords.html#act-polarplots2",
  "type": "Activity",
  "number": "2.7.3",
  "title": "Showing Off Polar Plots.",
  "body": " Showing Off Polar Plots  In a small group, make a Desmos plot of polar plot (or plots) to share with the class. The class will vote, and the winning group will be the \"Polar Royals\".     "
},
{
  "id": "sec-groups",
  "level": "1",
  "url": "sec-groups.html",
  "type": "Section",
  "number": "3.1",
  "title": "Algebra Shapes and Groups",
  "body": " Algebra Shapes and Groups  Imagine a game board with four squares (like a chessboard) labelled through , and one token placed on a square. This is a rather simple game, all we can do is move the token to the right, and if the token moves off the board, it goes back to spot .  We can map out all possible moves of this game with a simple chart. We'll write to mean the token starts in slot and travels moves to the right.    Fill out the chart of all possible moves of the token on a chessboard.                                                                        This game is rather boring... is it even a game? But it illustrates how we can uncover the underlying structure mathematically of something.   Algebra's Goal  If we ever make contact with an extraterrestrial society, how could we ever hope to communicate with them? We think that mathematics is our best chance of communicating with intelligent life. We are pretty confident that if they have the means to send and receive messages, they will have an understanding of mathematics.  But what does their alien math look like? We would be very suprised to find the Mean Value Theorem or the Four Color Theorem in their writings, right? At least with the same phrasing we use, BUT we would not be surprised if they had their own versions of these results.  Modern algebra seeks to explore \"deeper\" structures of mathematical systems, so that we can recognize familiar math in unfamiliar environments. Can we find the big picture patterns of mathematics? That is our goal with higher algebra.    A Familiar Pattern  Let's find another underlying structure. Define the set where , and consider multiplication in this set. We should point out that if we multiply two things in , the result is also in , and this property is called closure . As an example,     Fill out the multiplication table for set                                                                         Do you notice any similarities between and ? Tables like these are called Cayley Tables , and one use of Cayley Tables is highlighting patterns. Even though we have different contexts, different sets, and even different operations, in some way they are the same thing.   Underlying Cayley Table     Algebraists can show that the context of the token on the chessboard and the multiplicative powers of are, in fact, the same. What we mean, actually, is that they operate the same way. We say they are isomorphic (meaning \"same shape\"), and in an algebra course we can prove these things are isomorphic.    What is a Group?  Both of the previous examples are examles of one of the simplest algebraic structures: the group . We have found two groups, so far, and highlighted that they are isomorphic, but what exactly is a group?  The group is a set paired with an operation (let's say ) that satisfies a short list of properties. The first two are familar to us.   the closure property: if , then     the associative property: for any ,      To show the last two properties, let's consider the two examples we discussed earlier. Let be paired with multiplication as earlier, and let be paired with addition defined by such: the token starting at square moving squares to the right will rest on square .   Identity Elements  How is a number affected when multiplied by ? What about when summed with ?  By using the Caylet Tables from earlier, we can see in set , there is an element, , so that for any other element , . In other words, multiplying by changes nothing. An element like is known as the identity of .    What is the identity of the group with operation ?    The identity is .      What is the identity of the group with operation ?    The identity is .    The third property of groups is that every group has an identity . There is an element such for any element , .    Inverse Elements  Consider the token game once again, and suppose we start on square and move spaces to right to end up on square . Can we make another move to end up back on square ? In general, if we start on square and move squares to the right. We can only move right, but is it possible to keep moving right until we end up back on square ?    After moving squares, starting at square , determine how many squares you must traverse to get back to square for .    If , we must move squares. If , we must traverse squares to return to square . Similarly, we travel squares and square respectively for respectively.    So for any square , there is a number of squares that results in landing on square . In other words, for any , there is a where . In this case, we say is the inverse of . Remember that serves a special role in : the identity.  The last property of group is the inverse property . That is, for any , there is an element , where , where is the identity of . In other words, starting with any element, we can get back to the group's identity through the inverse. We often denote the inverse of as .    Determine the inverses of the elements of .    We know , so is its own inverse. Also , and so and are inverses of each other. Lastly, , and so is its own inverse.       Why do we think about groups?  If we can prove a statement about a generic group , then we know that statement will apply to any group we find! Knowing things about groups will help us find the familiar patterns in unfamiliar environments.  So proving a statement about a group proves statements in an many different contexts (sometimes an infinite number of contexts). Thinking in generalized terms is a powerful way to approach math, and mathematicians like to generalize for that very reason.  For example, here are some things we know about groups.   Let be a group. Then    has exactly one identity.    for any , has exactly one inverse.    for any , .    for any ,         You might know some groups already. Do you think the following sets are groups with the given operation?    Is set with operation a group? If not, why? For our purposes, just think about the identity and inverses.    all integers; addition     all real numbers; addition     all real numbers; multiplication     all real numbers except ; multiplication           all integers; addition  Yes! The identity is , and the inverse of is .     all real numbers; addition  Yes! The identity is , and the inverse of is .     all real numbers; multiplication  No! :( The identity is , but for any . So has no inverse.     all real numbers except ; multiplication  Yes! The identity is , and the inverse of is . If is not in the picture, we can never obtain through multiplication.         A Group of Squares  Let's look at one last example of a group. Take a square with corners labelled (We would recommend cutting one out of paper), and we will say a \"symmetry\" of the square is an action in which we pick up the square, do something to it, and put it down again so that it takes up the same space it did before. For example, we can rotate the square , and it will rest on the exact same space where it started.  There are eight symmetries of the square. Can you find them?    What are the eight basic symmetries of the square?    There are four rotations: rotating , , , .  There are also four flips: flip along a horizontal axis, along a vertical axis, along a northwest diagonal, and along a northeast diagonal.    Let's call this set of symmetries . Here, we call a rotation of  .  FIGURE  What if we did two of these symmetries? Do we get something new? For symmetries and , the composition is the result of first applying and then applying .  For example, means we first rotate the square and then another . Is this a new symmetry? No... it's just . Are any of them new?    In groups, fill out a Cayley table for . Don't assumer that  shows a calculator for the symmetries of a squre. This may be useful!                                                                                                                                                                                                     Symmetries of a Square Calculator    So does with form a group? You just showed it is closed. We will tell you it is associative. Does have an identity? Yes, . Does have inverses?    What are the inverses for elements of ?     "
},
{
  "id": "act-goups2",
  "level": "2",
  "url": "sec-groups.html#act-goups2",
  "type": "Activity",
  "number": "3.1.1",
  "title": "",
  "body": "  Fill out the chart of all possible moves of the token on a chessboard.                                                                       "
},
{
  "id": "subsec-modernalgebra-2",
  "level": "2",
  "url": "sec-groups.html#subsec-modernalgebra-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closure "
},
{
  "id": "act-groups1",
  "level": "2",
  "url": "sec-groups.html#act-groups1",
  "type": "Activity",
  "number": "3.1.2",
  "title": "",
  "body": "  Fill out the multiplication table for set                                                                        "
},
{
  "id": "subsec-modernalgebra-4",
  "level": "2",
  "url": "sec-groups.html#subsec-modernalgebra-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cayley Tables "
},
{
  "id": "fig-isomorphism",
  "level": "2",
  "url": "sec-groups.html#fig-isomorphism",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": " Underlying Cayley Table    "
},
{
  "id": "subsec-modernalgebra-6",
  "level": "2",
  "url": "sec-groups.html#subsec-modernalgebra-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isomorphic "
},
{
  "id": "subsec-groups-2",
  "level": "2",
  "url": "sec-groups.html#subsec-groups-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "group "
},
{
  "id": "subsec-groups-3",
  "level": "2",
  "url": "sec-groups.html#subsec-groups-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closure property: associative property: "
},
{
  "id": "subsubsec-identity-3",
  "level": "2",
  "url": "sec-groups.html#subsubsec-identity-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity "
},
{
  "id": "ques-identity1",
  "level": "2",
  "url": "sec-groups.html#ques-identity1",
  "type": "Question",
  "number": "3.1.4",
  "title": "",
  "body": "  What is the identity of the group with operation ?    The identity is .   "
},
{
  "id": "ques-identity2",
  "level": "2",
  "url": "sec-groups.html#ques-identity2",
  "type": "Question",
  "number": "3.1.5",
  "title": "",
  "body": "  What is the identity of the group with operation ?    The identity is .   "
},
{
  "id": "subsubsec-identity-6",
  "level": "2",
  "url": "sec-groups.html#subsubsec-identity-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity "
},
{
  "id": "ques-inverse1",
  "level": "2",
  "url": "sec-groups.html#ques-inverse1",
  "type": "Question",
  "number": "3.1.6",
  "title": "",
  "body": "  After moving squares, starting at square , determine how many squares you must traverse to get back to square for .    If , we must move squares. If , we must traverse squares to return to square . Similarly, we travel squares and square respectively for respectively.   "
},
{
  "id": "subsubsec-inverse-4",
  "level": "2",
  "url": "sec-groups.html#subsubsec-inverse-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse "
},
{
  "id": "subsubsec-inverse-5",
  "level": "2",
  "url": "sec-groups.html#subsubsec-inverse-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse property "
},
{
  "id": "ques-inverse2",
  "level": "2",
  "url": "sec-groups.html#ques-inverse2",
  "type": "Question",
  "number": "3.1.7",
  "title": "",
  "body": "  Determine the inverses of the elements of .    We know , so is its own inverse. Also , and so and are inverses of each other. Lastly, , and so is its own inverse.   "
},
{
  "id": "thm-identity",
  "level": "2",
  "url": "sec-groups.html#thm-identity",
  "type": "Theorem",
  "number": "3.1.8",
  "title": "",
  "body": "  Let be a group. Then    has exactly one identity.    for any , has exactly one inverse.    for any , .    for any ,       "
},
{
  "id": "ques-groups1",
  "level": "2",
  "url": "sec-groups.html#ques-groups1",
  "type": "Question",
  "number": "3.1.9",
  "title": "",
  "body": "  Is set with operation a group? If not, why? For our purposes, just think about the identity and inverses.    all integers; addition     all real numbers; addition     all real numbers; multiplication     all real numbers except ; multiplication           all integers; addition  Yes! The identity is , and the inverse of is .     all real numbers; addition  Yes! The identity is , and the inverse of is .     all real numbers; multiplication  No! :( The identity is , but for any . So has no inverse.     all real numbers except ; multiplication  Yes! The identity is , and the inverse of is . If is not in the picture, we can never obtain through multiplication.      "
},
{
  "id": "ques-dihedral1",
  "level": "2",
  "url": "sec-groups.html#ques-dihedral1",
  "type": "Question",
  "number": "3.1.10",
  "title": "",
  "body": "  What are the eight basic symmetries of the square?    There are four rotations: rotating , , , .  There are also four flips: flip along a horizontal axis, along a vertical axis, along a northwest diagonal, and along a northeast diagonal.   "
},
{
  "id": "act-dihedral1",
  "level": "2",
  "url": "sec-groups.html#act-dihedral1",
  "type": "Activity",
  "number": "3.1.3",
  "title": "",
  "body": "  In groups, fill out a Cayley table for . Don't assumer that  shows a calculator for the symmetries of a squre. This may be useful!                                                                                                                                                                                                   "
},
{
  "id": "fig-dihedral1",
  "level": "2",
  "url": "sec-groups.html#fig-dihedral1",
  "type": "Figure",
  "number": "3.1.12",
  "title": "",
  "body": " Symmetries of a Square Calculator   "
},
{
  "id": "ques-dihedral2",
  "level": "2",
  "url": "sec-groups.html#ques-dihedral2",
  "type": "Question",
  "number": "3.1.13",
  "title": "",
  "body": "  What are the inverses for elements of ?   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
