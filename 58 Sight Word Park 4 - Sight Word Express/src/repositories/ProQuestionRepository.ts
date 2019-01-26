class ProQuestionRepository {
	public constructor() {
	}

	public getAll(): Question[]
	{
		return [
			new Question('I ____ play football with my friends.','always',['always','around','green']),
			new Question('The bees fly ____ the flowers.','around',['around','best','many']),
			new Question('I like playing football ____ it is fun.','because',['because','always','before']),
			new Question('It has ____ raining for three days.','been',['been','don\'t','made']),
			new Question('Brush your teeth ____ you go to bed.','before',['before','sleep','would']),
			new Question('Tom is my ____ friend.','best',['best','upon','very']),
			new Question('I like ____ of them.','both',['both','their','pull']),
			new Question('I usually ____ food in the supermarket.','buy',['buy','fast','off']),
			new Question('Please ____ me on the phone.','call',['call','been ','sing']),
			new Question('It was ____ this morning.','cold',['cold','call','your']),
			new Question('He has ______ a good job.','done',['done','go','best']),
			new Question('I ____ know.','don\'t',['don\'t','call','many']),
			new Question('Tom is a ____ runner.','fast',['fast','tell','wish']),
			new Question('He won the ____ prize.','first',['first','goes','why']),
			new Question('There are ____ ducks.','five',['five','use','gave']),
			new Question('We ____ the treasure!','found',['found','would','those']),
			new Question('Tom ____ me a gift yesterday.','gave',['gave','both','right']),
			new Question('He ____ to school by bus.','goes',['goes','going','fast']),
			new Question('The tree is ____.','green',['green','which','before']),
			new Question('The dog likes ____ new house.','its',['its','off','us']),
			new Question('Look! Felix is ____ now.','running',['runs','run','running']),
			new Question('I ____ a paper plane yesterday.','made',['made','tell','best']),
			new Question('How ____ apples do you have?','many',['many','made','around']),
			new Question('Turn ____ the light.','off',['off','cold','fast']),
			new Question('Do you like apples ____ pears?','or',['or','its','buy']),
			new Question('Let\'s ____ the rope!','pull',['pull','first','cold']),
			new Question('Can you ____ me the story?','read',['read','wash','does']),
			new Question('“The answer is a zebra.” “You are ____!”','right',['right','sing','always']),
			new Question('Let\'s ____ a song.','sing',['sing','gave','many']),
			new Question('Please ____ down.','sit',['sit','use','off']),
			new Question('I sometimes ____ on the sofa.','sleep',['sleep','these','found']),
			new Question('Please ____ me a story. ','tell',['tell','call','best']),
			new Question('They like ____ teacher.','their',['their','always','made']),
			new Question('____ are Tom\'s pencils. ','These',['These','Don\'t','Their'], 0),
			new Question('Put ____ books on the desk. ','those',['those','been ','around']),
			new Question('Once ____ a time, there was a frog.','upon',['upon','call','right']),
			new Question('Read ____ a story, please. ','us',['us','sit','or']),
			new Question('I ____ a spoon to eat.','use',['use','tell','why']),
			new Question('I am ____ tired.','very',['very','five','buy']),
			new Question('____ your hands before you eat.','Wash',['Wash','Green','Which'], 0),
			new Question('____ do you prefer, milk or apple juice?','Which',['Which','Read','Those'], 0),
			new Question('____ do you like playing football?','Why',['Why','Sing','Their'], 0),
			new Question('I ____ you a Merry Christmas.','wish',['wish','work','been']),
			new Question('The ants ____ very hard.','work',['work','upon','working']),
			new Question('I ____ like to go to the washroom.','would',['would','around','because']),
			new Question('I ____ a letter to Mary.','wrote',['wrote','sleep','right']),
			new Question('What is ____ name?','your',['your','why','does']),
			new Question('Tell me ____ bats.','about',['about','never','light']),
			new Question('I feel ____.','better',['better','drink','eight']),
			new Question('I will ____ this dog home.','bring',['bring','about','myself']),
			new Question('I ____ my bag to school every day.','carry',['carry','seven','shall']),
			new Question('Please keep the school ____.','clean',['clean','kind','about']),
			new Question('I ____ the tomato in half.','cut',['cut','hot','ten']),
			new Question('I have ____ my homework.','done',['done','pick','full']),
			new Question('I can ____ a pretty flower.','draw',['draw','only','long']),
			new Question('What would you like to ____?','drink',['drink','eight','warm']),
			new Question('There are ____ sheep.','eight',['eight','drink','bring']),
			new Question('I ____ down and hurt my knee.','fell',['fell','done','sang']),
			new Question('He lives ____ away from school.','far',['far','cut','six']),
			new Question('The basket is ____ of apples.','full',['full','warm','fall']),
			new Question('I ____ a present from Tom.','got',['got','hurt','ten']),
			new Question('The seed will ____ into a plant.','grow',['grow','full','hurt']),
			new Question('Please ____ onto the railing.','hold',['hold','much','long']),
			new Question('I would like to have some ____ tea, please.','hot',['hot','own','far']),
			new Question('Ouch! I ____ myself!','hurt',['hurt','hot','small']),
			new Question('____ you like it, you can eat it.','If',['If','Carry','Try'], 0),
			new Question('Please ____ the park clean.','keep',['keep','today','grow']),
			new Question('What ____ of animals do you like?','kind',['kind','seven','hold']),
			new Question('We ____ at the joke. ','laugh',['laugh','better','warm']),
			new Question('Turn on the ____.','light',['light','laugh','keep']),
			new Question('Mary has ____ hair.','long',['long','hurt','bring']),
			new Question('I ate too ______ food last night.','much',['much','never','start']),
			new Question('I made the paper plane ____.','myself',['myself','pick','together']),
			new Question('I ____ throw rubbish on the road.','never',['never','fall','seven']),
			new Question('Bats ____ come out at night.','only',['only','full','hold']),
			new Question('Use your ____ pencil.','own',['own','hurt','far']),
			new Question('Don\'t ____ the flowers.','pick',['pick','done','much']),
			new Question('There are ____ pigs.','seven',['seven','never','carry']),
			new Question('What ____ I wear?','shall',['shall','clean','small']),
			new Question('I can ____ you my picture.','show',['show','about','warm']),
			new Question('I am ____ years old.','six',['six','long','own']),
			new Question('Bees are ____.','small',['small','shall','keep']),
			new Question('Our lessons ______ at half past eight.','start',['start','kind','eight']),
			new Question('I have ____ fingers.','ten',['ten','fall','shall']),
			new Question('____ is Christmas!','Today',['Today','Shall','Eight'], 0),
			new Question('We play football ____.','together',['together','bring','small']),
			new Question('I want to ____ the food.','try',['try','six','if']),
			new Question('The soup is ____.','warm',['warm','today','only']),
			new Question('Philip ____ housework every day.','does',['do','doing','does']),
			new Question('The teacher ____, “Open your book.”','says',['say','says','saying']),
			new Question('Emily____ shopping.','enjoys',['enjoy','enjoys','enjoying']),
			new Question('Sally ____ her homework every night.','does',['do','doing','does']),
		]
	}
}