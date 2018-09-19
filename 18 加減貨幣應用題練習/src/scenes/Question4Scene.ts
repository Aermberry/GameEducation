class Question4Scene extends eui.Component implements  eui.UIComponent {
	private questionLabel: eui.Label;
	private titleLabel: eui.Label;
	private Animation: egret.tween.TweenGroup;
	private Beers: egret.tween.TweenGroup;
	private worldsGroup:eui.Group;
	private nextStepButton:ui.nextStepButton;
	private nextQuestionButton:Ui.NextQuestion;
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
	}

	private async DisplayAnimation(): Promise<void> {
		await lzlib.ThreadUtility.sleep(500);
		this.questionLabel.visible = true;
		this.Animation.play(0);
	}
	private async playBackMusic(): Promise<void> {
		await lzlib.SoundUtility.playSound("scene04_mp3");
		this.titleLabel.visible = true;
		lzlib.ThreadUtility.sleep(1000);
		await lzlib.SoundUtility.playSound("think_mp3");
		await this.Beers.play(0);
		setTimeout(()=>{this.worldsGroup.visible=true;},1000);
		await lzlib.ThreadUtility.sleep(3000);
		this.nextStepButton.visible=true;
	}


	private onNextQuestionPage():void {
		Base.gotoNextScene(new Question5Scene());
	}
	
}