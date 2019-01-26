class QuestionComponent extends eui.Component implements  eui.UIComponent {
	
	private leftLabel: eui.Label;
	private middleLabel: eui.Label;
	private rightLabel: eui.Label;
	private labels: eui.Label[];
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public set setQuestion(question: string[])
	{
		this.leftLabel.text = question[0];
		this.middleLabel.text = question[1];
		this.rightLabel.text = question[2];

		this.middleLabel.textColor = 0xffffff;
		this.middleLabel.bold = false;
	}

	public set setFullSentence(question: string[])
	{
		this.leftLabel.text = question[0];
		this.middleLabel.text = question[1];
		this.rightLabel.text = question[2];

		this.middleLabel.textColor = 0x000000; // 设置字体为黑色
		this.middleLabel.bold = true;
	}
	
}