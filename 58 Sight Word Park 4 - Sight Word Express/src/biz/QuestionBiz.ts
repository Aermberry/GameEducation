class QuestionBiz {
	private allQuestions: Question[] = [];
	private usedQuestions: Question[] = [];

	public constructor(questionRepo: IQuestionRepository) 
	{
		this.allQuestions = questionRepo.getAll();
	}

	/**
	 * 返回一个随机问题，不会跟之前返回的问题重复
	 */
	public random(): Question
	{
		let candidate: Question = null;
		do {
			candidate = this.allQuestions[Math.randomMinMax(0, this.allQuestions.length - 1)];
		} while (this.usedQuestions.indexOf(candidate) >= 0);
		this.usedQuestions.push(candidate);
		return candidate;
	}
}