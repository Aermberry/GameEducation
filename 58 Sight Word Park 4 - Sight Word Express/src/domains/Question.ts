class Question 
{
	// underlinePosition代表当前下划线在句子的那个位子， 0 句子开头 ，1句子中间，因为句子结尾必定会有符号结尾

	public constructor(sentence: string, answer: string, options: string[],underlinePosition = 1) 
	{
		let underline = sentence.match(this.reg);
		let tempSentence = sentence.replace(this.reg, '____');
		let sentenceArr = tempSentence.split('____'); // 通过下划线把句子分割成多个部分
		
		
		if (sentenceArr.length == 2) {
			// 如果当前的句子能正常分为三部分
			sentenceArr.splice(1, 0, underline[0]); // 往句子中间插入下划线
		}else {
			// 当前的句子不能正常分为三部分

			if (underlinePosition == 0) {
				// 当前句子的下划线在句子开头
				sentenceArr.splice(0, 0, '');
				sentenceArr.splice(1, 0, underline[0]);
			}

		}
		this.sentence = sentenceArr;
		this.answer = answer;
		this.options = options;
		this.fullSentence = this.sentence.slice(0);
		this.fullSentence[1] = answer;
	}

	public sentence: string[];
	public answer: string; //正确答案
	public options: string[]; //所有选项
	public fullSentence: string[];
	private reg = /[_]{4,10}/g;
}