class Question 
{
	public constructor(sentence: string, answer: string, options: string[]) 
	{
		this.sentence = sentence;
		this.answer = answer;
		this.options = options;
	}

	public sentence: string;
	public answer: string; //正确答案
	public options: string[]; //所有选项
}