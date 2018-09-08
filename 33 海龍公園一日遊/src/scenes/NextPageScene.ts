class NextPageScene extends eui.Component implements  eui.UIComponent {
	
	private currentLevelLabel: eui.Label;
	private nextPageButton: CircleButton;
	private exitButton: CircleButton;
	
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
		this.nextPageButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextPageButtonClick, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, window.close, this);
		this.currentLevelLabel.text = `第${(LevelBiz.instance.currentLevel + 1).toLocaleString('zh-Hans-CN-u-nu-hanidec')}節`;
	}

	private onNextPageButtonClick(): void
	{
		Main.instance.gotoScene(new GameScene());
	}
}