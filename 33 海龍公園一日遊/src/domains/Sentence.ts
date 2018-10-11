class Sentence {
	public clauses: Clause[] = [];
	/** 当用户选择错误时，系统会播放当提示语音 */
	public tipsAudioName = '';

	public constructor(clauses: Clause[], tipsAudioName: string) {
		this.clauses = clauses;
		this.tipsAudioName = tipsAudioName;
	}

	public validate(leftConjunction: Conjunction, rightConjunction: Conjunction): boolean {
		return this.clauses[0].conjunction === leftConjunction
		&& this.clauses[1].conjunction === rightConjunction;
	}
}