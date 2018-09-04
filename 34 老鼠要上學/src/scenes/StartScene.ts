class StartScene extends eui.Component implements  eui.UIComponent {
	
	private nextQuestionComponent: NextQuestionComponent;
	private titleLabel: eui.Label;
	private optionGroup: eui.Group;
	private listenWordGroup: eui.Group;
	private mouseImage: eui.Image;

	private questionAnserRepository = new QuestionAnswerRepository();

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
		// this.playStartMP3();
		// this.nextQuestion();
		// this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionTap, this);
		// this.listenWordGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onListenWordGroup, this);
	}

	// private onListenWordGroup() :void
	// {
	// 	Main.instance.gotoScene(new ListenScene());
	// }

	// private onNextQuestionTap(): void
	// {
	// 	this.nextQuestion();
	// 	this.hideMouse();
	// }

	// public nextQuestion(): void
	// {
	// 	let question = this.questionAnserRepository.question[QuestionAnswerRepository.curQuestion];
	// 	let answer = this.questionAnserRepository.answer[QuestionAnswerRepository.curQuestion];

	// 	this.titleLabel.text = question.title;
	// 	this.nextQuestionComponent.source = this.questionAnserRepository.images[QuestionAnswerRepository.curQuestion];

	// 	let widthHeightBottom = this.questionAnserRepository.imageWidthHeightBottom[QuestionAnswerRepository.curQuestion];
	// 	this.nextQuestionComponent.width = widthHeightBottom.width;
	// 	this.nextQuestionComponent.height = widthHeightBottom.height;
	// 	this.nextQuestionComponent.bottom = widthHeightBottom.bottom;

	// 	let index = 0;
	// 	this.optionGroup.$children.map((label) => {
	// 		(label as eui.Label).text = question.option[index];
	// 		index++;
	// 	})

	// 	if (QuestionAnswerRepository.curQuestion<3){
	// 		QuestionAnswerRepository.curQuestion++;
	// 	}else{
	// 		QuestionAnswerRepository.curQuestion = 0;
	// 		this.nextQuestionComponent.visible = false;
	// 		this.listenWordGroup.visible = true;
	// 	}

	// }

	public hideMouse(): void
	{
		this.mouseImage.visible = false;
	}

	private async playStartMP3(): Promise<void>
	{
		// await lzlib.SoundUtility.playSound('start_introduction.mp3');
	}
	
	
}