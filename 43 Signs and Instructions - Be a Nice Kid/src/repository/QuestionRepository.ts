class QuestionRepository {

	private questions = [
		new Question('Do not eat or drink.','picture1','wave1_mp3'),
		new Question('Do not litter.','picture2','wave2_mp3'),
		new Question('Do not tear the pages.','picture3','wave3_mp3'),
		new Question('Keep quiet!','picture4','wave4_mp3'),
		new Question('Do not pick the flowers.','picture5','wave5_mp3'),
		new Question('Do not feed the birds.','picture6','wave6_mp3'),
		new Question('Raise your right hand.','picture7','wave7_mp3'),
		new Question('Put up your left hand.','picture8','wave8_mp3'),
		new Question('Shake hands with your neighbour.','picture9','wave9_mp3'),
		new Question('Pass your worksheets to your leader.','picture10','wave10_mp3'),
		new Question('Line up, children!','picture11','wave11_mp3'),
		new Question('Do not run in the classroom!','picture12','wave12_mp3'),
		new Question('Speak up! I can’t hear you.','picture13','wave13_mp3'),
		new Question('Click your fingers.','picture14','wave14_mp3'),
		new Question('Spell your name.','picture15','wave15_mp3'),
		new Question('Underline the answer.','picture16','wave16_mp3'),
		new Question('Fill in the blanks.','picture17','wave17_mp3'),
		new Question('Stop eating!','picture18','wave18_mp3'),
		new Question('Complete the table.','picture19','wave19_mp3'),
		new Question('Do this exercise.','picture20','wave20_mp3'),
		new Question('Listen to the tape.','picture21','wave21_mp3'),
		new Question('Put away your book.','picture22','wave22_mp3'),
		new Question('Copy the sentence onto the blackboard.','picture23','wave23_mp3'),
		new Question('You may start doing your work.','picture24','wave24_mp3'),
		new Question('Face your partner.','picture25','wave25_mp3'),
		new Question('Pick up your pencil.','picture26','wave26_mp3'),
		new Question('Talk to your classmate.','picture27','wave27_mp3'),
		new Question('Read this word aloud.','picture28','wave28_mp3'),
		new Question('Turn on the fan.','picture29','wave29_mp3'),	
		new Question('Turn off the lights.','picture30','wave30_mp3'),
		new Question('Point to the fan.','picture31','wave31_mp3')
	];

	public random(returnedCount: number, excludes: Question[]): Question[]
	{
		let result = [];
		while (result.length < returnedCount) {
			let candidate = this.questions[Math.randomMinMax(0, this.questions.length - 1)];
			if (result.indexOf(candidate) < 0 && excludes.indexOf(candidate) < 0) { //return[]选项不能重复并且不能包含excludes[]里的选项
				result.push(candidate);
			}
		}
		return result;
	}

	public constructor() {
	}
}