class SentenceRepository {
	private sentences = [
		[
			new Sentence([new Clause(Conjunction.BECAUSE, 'sound 217_mp3'), new Clause(Conjunction.SO, 'sound 156_mp3')], 'sound 208_mp3'),
			new Sentence([new Clause(Conjunction.ALTHOUGH, 'sound 154_mp3'), new Clause(Conjunction.BUT, 'sound 152_mp3')], 'sound 206_mp3'),
			new Sentence([new Clause(Conjunction.BECAUSE, 'sound 150_mp3'), new Clause(Conjunction.SO, 'sound 148_mp3')], 'sound 204_mp3'),
			new Sentence([new Clause(Conjunction.IF, 'sound 146_mp3'), new Clause(Conjunction.THEN, 'sound 144_mp3')], 'sound 202_mp3')
		], [
			new Sentence([new Clause(Conjunction.BECAUSE, 'sound 142_mp3'), new Clause(Conjunction.SO, 'sound 140_mp3')], 'sound 200_mp3'),
			new Sentence([new Clause(Conjunction.ALTHOUGH, 'sound 138_mp3'), new Clause(Conjunction.BUT, 'sound 136_mp3')], 'sound 198_mp3'),
			new Sentence([new Clause(Conjunction.BECAUSE, 'sound 134_mp3'), new Clause(Conjunction.SO, 'sound 132_mp3')], 'sound 196_mp3'),
			new Sentence([new Clause(Conjunction.IF, 'sound 130_mp3'), new Clause(Conjunction.THEN, 'sound 128_mp3')], 'sound 194_mp3')
		], [
			new Sentence([new Clause(Conjunction.BECAUSE, 'sound 126_mp3'), new Clause(Conjunction.SO, 'sound 124_mp3')], 'sound 192_mp3'),
			new Sentence([new Clause(Conjunction.ALTHOUGH, 'sound 122_mp3'), new Clause(Conjunction.BUT, 'sound 120_mp3')], 'sound 190_mp3'),
			new Sentence([new Clause(Conjunction.ALTHOUGH, 'sound 118_mp3'), new Clause(Conjunction.BUT, 'sound 116_mp3')], 'sound 188_mp3'),
			new Sentence([new Clause(Conjunction.ALTHOUGH, 'sound 114_mp3'), new Clause(Conjunction.BUT, 'sound 112_mp3')], 'sound 186_mp3')
		], [
			new Sentence([new Clause(Conjunction.BECAUSE, 'sound 110_mp3'), new Clause(Conjunction.SO, 'sound 108_mp3')], 'sound 184_mp3'),
			new Sentence([new Clause(Conjunction.BECAUSE, 'sound 106_mp3'), new Clause(Conjunction.SO, 'sound 104_mp3')], 'sound 182_mp3'),
			new Sentence([new Clause(Conjunction.ALTHOUGH, 'sound 102_mp3'), new Clause(Conjunction.BUT, 'sound 100_mp3')], 'sound 180_mp3'),
			new Sentence([new Clause(Conjunction.BECAUSE, 'sound 98_mp3'), new Clause(Conjunction.SO, 'sound 96_mp3')], 'sound 178_mp3')
		], [
			new Sentence([new Clause(Conjunction.ALTHOUGH, 'sound 94_mp3'), new Clause(Conjunction.BUT, 'sound 92_mp3')], 'sound 176_mp3'),
			new Sentence([new Clause(Conjunction.IF, 'sound 90_mp3'), new Clause(Conjunction.THEN, 'sound 88_mp3')], 'sound 174_mp3'),
			new Sentence([new Clause(Conjunction.ALTHOUGH, 'sound 86_mp3'), new Clause(Conjunction.BUT, 'sound 84_mp3')], 'sound 172_mp3'),
			new Sentence([new Clause(Conjunction.BECAUSE, 'sound 82_mp3'), new Clause(Conjunction.SO, 'sound 80_mp3')], 'sound 170_mp3')
		]
	];

	public get(levelIndex: number, sentenceIndex: number): Sentence {
		return this.sentences[levelIndex][sentenceIndex];
	}
}