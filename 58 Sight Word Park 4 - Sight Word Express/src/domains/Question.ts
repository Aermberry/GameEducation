class Question 
{
	public constructor(sentence: string, answer: string, options: string[]) 
	{
		this.sentence = sentence;
		this.answer = answer;
		this.options = options;
		this.fullSentence = '"' + this.sentence.replace(this.reg, this.answer) + '"';
	}

	public sentence: string;
	public answer: string; //正确答案
	public options: string[]; //所有选项
	public fullSentence: string;
	private reg = /[_]{4,10}/g;
}