class AlertInfoRepository {

	private infos = {
			'clothes1': new DecorationInfo('Correct! She is wearing a pink gown.','correct_gown_mp3'),
			'eyesBlue': new DecorationInfo('Correct! She has big round blue eyes.','correct_eyes_mp3'),
			'nosePointed': new DecorationInfo('Correct! Her nose turns up a little at the end.','correct_nose_mp3'),
			'mouthRed': new DecorationInfo('Correct! Her lips are as red as roses.','correct_lips_mp3'),
			'hairWave': new DecorationInfo('Correct! She has long wavy brown hair.','correct_hair_mp3'),
			'crown': new DecorationInfo('Correct! She is wearing a crown.','correct_crown_mp3'),
			'glassSlippers': new DecorationInfo('Correct! She is wearing a pair of glass slippers.','correct_slippers_mp3'),
			'necklace': new DecorationInfo('Correct! She is wearing a necklace.','correct_necklace_mp3'),
			'earrings': new DecorationInfo('Correct! She is wearing a pair of earrings.','correct_earsings_mp3'),
			'gloves': new DecorationInfo('Correct! She is wearing a pair of white gloves.','correct_gloves_mp3')
		};
	public constructor() {
	}

	public getInfo(name: string): DecorationInfo
	{
		return this.infos[name];
	}
}