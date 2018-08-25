class GameScene extends eui.Component implements  eui.UIComponent {
	private currentLevelLabel: eui.Label;
	private nextQuestionButton: CircleButton;

	public constructor() {
		super();
	}

	protected async partAdded(partName:string,instance:any): Promise<void>
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.nextQuestionButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionClick, this);
	}

	private async onNextQuestionClick(): Promise<void>
	{
		this.currentLevelLabel.text = `第${(LevelBiz.instance.currentLevel + 1).toLocaleString('zh-Hans-CN-u-nu-hanidec')}節完`;
		this.currentLevelLabel.visible = true;
		await lzlib.ThreadUtility.sleep(1500);
		LevelBiz.instance.currentLevel++;
		Main.instance.gotoScene(new BackgroundScene());
	}
	
}