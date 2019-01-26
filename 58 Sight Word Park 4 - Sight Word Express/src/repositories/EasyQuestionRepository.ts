class EasyQuestionRepository {
	public constructor() {
		
	}

	public getAll(): Question[]
	{
		// 0代表下划线在句子开头
		return [
			new Question('I drink ____ cup of milk every morning.','a',['a','I','an']),
			new Question('I have a dog ____ a cat.','and',['and','on','old']),
			new Question('I throw ____ the rubbish.','away',['away','come','you']),
			new Question('I have a ____ dog.','big',['big','for','the']),
			new Question('The sky is ____.','blue',['blue','we','and']),
			new Question('I ____ read.','can',['can','not','red']),
			new Question('____ here.','Come',['Come','Where','Blue'], 0),
			new Question('Please sit ____, Mary.','down',['down','up','play']),
			new Question('I can\'t ____ my ruler.','find',['find','one','funny']),
			new Question('This gift is ____ you.','for',['for','two','you']),
			new Question('The clown is ____.','funny',['funny','look','can']),
			new Question('I ____ to school by bus.','go',['go','you','little']),
			new Question('I ____ my mum make cookies.','help',['help','here','run']),
			new Question('Come ____.','here',['here','the','three']),
			new Question('____ am eating a banana.','I',['I','Down','Where'], 0),
			new Question('The fox is ____ the box.','in',['in','and','it']),
			new Question('Tom ____ my friend.','is',['is','up','go']),
			new Question('We like ____.','it',['it','my','find']),
			new Question('They ____ into the water.','jumped',['jumped','could','made']),
			new Question('My ____ brother is cute.','little',['little','you','it']),
			new Question('____ at the bee.','Look',['Look','See','Away'], 0),
			new Question('My mum will ____ a pie.','make',['make','yellow','look']),
			new Question('My mum will make a pie for ____.','me',['me','here','in']),
			new Question('Where is ____ pencil?','my',['my','see','not']),
			new Question('Tom does ____ need to go to school today.','not',['not','one','can']),
			new Question('I have ____ apple for lunch.','one',['one','play','a']),
			new Question('I ____ with Mary and Tom.','play',['play','red','down']),
			new Question('The apple is ____.','red',['red','make','my']),
			new Question('I ____ with my dog.','run',['run','red','said']),
			new Question('"Follow me,"  ______Mimi.','said',['said','funny','not']),
			new Question('I ____ with my eyes.','see',['see','three','and']),
			new Question('____ kitten is cute.','The',['The','You','Run'], 0),
			new Question('I have ____ rabbits.','three',['three','where','jump']),
			new Question('We walk ____ the park.','to',['to','see','here']),
			new Question('I have ____ hands.','two',['two','help','a']),
			new Question('We ran ____ the hill.','up',['up','we','two']),
			new Question('____ are good friends.','We',['We','Run','The'], 0),
			new Question('____ are you?','Where',['Where','Come','Little'], 0),
			new Question('Lemons are _________.','sour',['thick','sour','spicy']),
			new Question('How are ____?','you',['you','can','blue']),
			new Question('I did ____ my homework.','all',['all','soon','must']),
			new Question('I ____ a good student.','am',['am','there','she']),
			new Question('They ____ my good friends.','are',['are','at','this']),
			new Question('Look ____ the bee.','at',['at','what','yes']),
			new Question('She ____ an ice-cream yesterday.','ate',['ate','under','on']),
			new Question('I will ____ home soon.','be',['be','out','good']),
			new Question('I have ____ hair.','black',['black','want','but']),
			new Question('Mary has ____ eyes. ','brown',['brown','please','do']),
			new Question('I want to play ____ I can\'t.','but',['but','are','too']),
			new Question('Dad ____ home at seven o’clock tonight.','came',['came','that','black']),
			new Question('He ____ his homework.','did',['did','brown','but']),
			new Question('____ you like swimming?','Do',['Do','There','Yes'], 0),
			new Question('I ____ an ice cream every day.','eat',['eat','did','into']),
			new Question('There are ____ birds in the tree.','four',['four','ate','now']),
			new Question('I ____ a teddy bear on my birthday.','got',['got','this','well']),
			new Question('You did a ____ job!','good',['good','like','she']),
			new Question('I ____ a lovely cat.','have',['have','good','yes']),
			new Question('____ is my friend.','He',['He','Am','Have'], 0),
			new Question('Come ____ the house.','into',['into','there','pretty']),
			new Question('I ____ my teacher.','like',['like','well','too']),
			new Question('You ____ do your homework now.','must',['must','brown','what']),
			new Question('I got a ________ toy for my birthday.','new',['new','but','all']),
			new Question('"Do you like dogs?" "________, I don’t."','No',['No','This','Yes']),
			new Question('Can I use the computer ____?','now',['now','no','came']),
			new Question('The ball is ____ the table.','on',['on','out','did']),
			new Question('____ family went hiking last Sunday.','Our',['Our','He','Say'], 0),
			new Question('The fish jumps ____ of the tank.','out',['out','our','ate']),
			new Question('Can I eat that, ____?','please',['please','went','good']),
			new Question('My sister is ____. ','pretty',['pretty','she','yes']),
			new Question('My dog ____ away yesterday.','ran',['ran','will','ride']),
			new Question('I ____ a bike at weekends.','ride',['ride','four','into']),
			new Question('He ____ a ghost last night.','saw',['saw','under','new']),
			new Question('What did you ____?','say',['say','must','black']),
			new Question('____ is my sister.','She',['She','They','Like'], 0),
			new Question('I am ____ hungry.','very',['very','well','at']),
			new Question('I will be back ____.','soon',['soon','this','into']),
			new Question('____ is my book.','That',['That','Too','Get'], 0),
			new Question('____ are two cars on the road.','There',['There','Please','What'], 0),
			new Question('They ____ to school on foot.','go',['go','going','goes']),
			new Question('____ is my friend, Jane.','This',['This','Soon','Ride'], 0),
			new Question('"I enjoy reading science books." " Me, ____."','too',['too','have','be']),
			new Question('The cat is ____ the table.','under',['under','white','like']),
			new Question('I ____ to play with Tom.','want',['want','who','must']),
			new Question('I ____ late for school yesterday.','was',['was','she','came']),
			new Question('I don\'t feel ____!','well',['well','did','but']),
			new Question('Our family ____ to the zoo.','went',['went','ate','was']),
			new Question('____ is it?','What',['What','Pretty','With'], 0),
			new Question('Pandas are black and  ____.','white',['white','must','they']),
			new Question('____ is this boy?','Who',['Who','Well','Like'], 0),
			new Question('I ____ go swimming tomorrow.','will',['will','brown','all']),
			new Question('I want to play ____ Mary.','with',['with','they','am']),
			new Question('"Do you like ice-cream?" "________, I do."','Yes',['Yes','Get','Into']),
			new Question('I go to the library ____ school.','after',['after','let','thank']),
			new Question('I watched the cartoon ____.','again',['again','when','from']),
			new Question('____ mouse has big ears.','That',['That','Of','Put'], 0),
			new Question('I don\'t see ____ fish.','any',['any','take','give']),
			new Question('Paul is ____ tall as his twin brother.','as',['as','know','an']),
			new Question('I ____ Miss Law a question.','asked',['asked','has','may']),
			new Question('He goes to school ____ bus.','by',['by','after','just']),
			new Question('____ I play with Tom?','Could',['Could','Fly','Stop'], 0),
			new Question('I sleep at nine o’clock ______ night.','every',['every','live','going']),
			new Question('Birds ____ in the sky. ','fly',['fly','from ','any']),
			new Question('I came home ____ school.','from',['from','stop','when']),
			new Question('Can you ____ us some candies?','give',['give','then','every']),
			new Question('We are ____ to China.','going',['going','once','how']),
			new Question('I ____ a great time.','had',['had','his','old']),
			new Question('A horse ____ four legs.','has',['has','her','let']),
			new Question('Mary loves ____ toy.','her',['her','them','him']),
			new Question('I give ____ my toys.','him',['him','how','after']),
			new Question('Tom puts on ____ shirt.','his',['his','know','from']),
			new Question('I know ____ to sing.','how',['how','from ','were']),
			new Question('I ____ ate a cake.','just',['just','when','as']),
			new Question('I ____ how to play the piano.','know',['know','once','some']),
			new Question('Please ____ me help you.','let',['let','her','think']),
			new Question('I ____ in Yuen Long.','live',['live','let','from']),
			new Question('You ____ go now.','may',['may','ask','every']),
			new Question('There are a lot ____ butterflies.','of',['of','an','has']),
			new Question('The ____ woman walks slowly.','old',['old','once','put']),
			new Question('I play football ____ a week.','once',['once','fly','every']),
			new Question('____ the door, please.','Open',['Open','Know','Some'], 0),
			new Question('Mary jumps ____ Tom.','over',['over','old','live']),
			new Question('I ____ the book on the desk.','put',['put','over','from']),
			new Question('My mum has a ____ face.','round',['round','give','them']),
			new Question('Can I have ____ candies, please?','some',['some','how','know']),
			new Question('____ talking, please.','Stop',['Stop','Put','Her'], 0),
			new Question('____ out a pencil, please.','Take',['Take','Has','When'], 0),
			new Question('____ you very much!','Thank',['Thank','Round','After'], 0),
			new Question('Could I play with ____?','them',['them','think','over']),
			new Question('I will have lunch and ____ go to the park for a walk.','then',['then','going','think']),
			new Question('I ____ the duck is cute.','think',['think','let','open']),
			new Question('We ____ to school every morning.','walk',['walk','stop','live']),
			new Question('The children ____ in the playground.','were',['were','going','take']),
			new Question('____ is your birthday?','When',['When','Thank','From'], 0),
			new Question('My mum ____ a pie every Sunday.','makes',['make','makes','making']),
			new Question('The students are ____ .','clapping',['clap','claps','clapping']),
			new Question('Nick is ______ his birthday cake.','cutting',['cuts','cut','cutting']),
			new Question('We are ____ for the school picnic.','planning',['plans','plan','planning']),
			new Question('I am ____ a bicycle.','riding',['ride','riding','rides']),
			new Question('Ada is ____ a train to her cousin’s home. ','taking',['takes','taking','take']),
			new Question('Roy and Angel ____ us to go to their party.','ask',['ask','asks','asking']),
			new Question('Amy ____ at Happy Primary School.','studies',['study','studying','studies']),
			new Question('He ____ at home every night.','stays',['stay','stays','staying']),
			new Question('Polly is ____ behind the tree.','hiding',['hide','hides','hiding']),
			new Question('His uncle is ____ him a red packet.','giving',['give','gives','giving']),
			new Question('Ben’s cousins are walking with ____.','him',['he','his','him']),


		]
	}
}