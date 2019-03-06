class StartSceneMask extends eui.Component implements  eui.UIComponent {
	private startButton:eui.Image;
	private playTweenGroup:egret.tween.TweenGroup;
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
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartButton,this)
	}

	private async onStartButton(): Promise<void> {
		this.playTweenGroup.play(0);
		this.startButton.visible = false;
		Main.instance.gotoScene(new StartScene());
	}
	
}