class Question6Scene extends eui.Component implements  eui.UIComponent {
	private questionLabel: eui.Label;
	private titleLabel: eui.Label;
	private expressionLabel: eui.Label;

	private nextQuestionButton: Ui.NextQuestion;
	private nextStepButton: ui.nextStepButton;
	private previousQuestionButton:PreviousQuestion;
	private numberPad: NumberPad;

	private Beers: egret.tween.TweenGroup;
	private worldsGroup: eui.Group;

	private expression = '';//用户输入的模式
	private inputssion = '';//答案输入的模式
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
		this.playBackMusic();
		this.DisplayAnimation();

		this.nextQuestionButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNextQuestionPage,this)
		this.previousQuestionButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.previousQuestion,this);
		this.numberPad.addEventListener(KeyDownEvent.EVENT, this.numberPadButtonClick, this);
	}

	//数字按钮事件
	private numberPadButtonClick(e: KeyDownEvent): void {
		if (e.char == '' && this.expression.length > 0) {
			this.expression = this.expression.substr(0, this.expression.length - 1);
		} else {
			this.expression += e.char;
		}
		this.expressionLabel.text = this.expression;
	}

private async DisplayAnimation(): Promise<void> {
		await lzlib.ThreadUtility.sleep(500);
		this.questionLabel.visible = true;
	}
	private async playBackMusic(): Promise<void> {
		await lzlib.SoundUtility.playSound("scene06_mp3");
		this.titleLabel.visible = true;
		lzlib.ThreadUtility.sleep(1000);
		await lzlib.SoundUtility.playSound("think_mp3");
		await this.Beers.play(0);
		setTimeout(()=>{this.worldsGroup.visible=true;},1000);
		await lzlib.ThreadUtility.sleep(3000);
		this.nextStepButton.visible=true;
		this.expressionLabel.visible=true;
	}

	private onNextQuestionPage():void {
		Base.gotoNextScene(new Question7Scene());
	}

	//上一题
	private previousQuestion():void {
		Base.gotoNextScene(new Question5Scene());
	}
	
}