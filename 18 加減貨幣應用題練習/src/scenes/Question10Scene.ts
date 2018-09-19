class Question10Scene extends eui.Component implements  eui.UIComponent {
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
		lzlib.SoundUtility.playSound("scene010_mp3");
		this.nextQuestionButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNextQuestionPage,this)
	}

	private onNextQuestionPage():void {
		Base.gotoNextScene(new Question2Scene);
	}

}