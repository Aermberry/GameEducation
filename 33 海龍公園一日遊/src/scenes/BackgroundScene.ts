class BackgroundScene extends eui.Component implements  eui.UIComponent {
	
	private coverImage: eui.Image;
	private currentLevelLargeLabel: eui.Label;
	private currentLevelSmallLabel: eui.Label;
	private nextPageButton: CircleButton;
	private startTweenGroup: egret.tween.TweenGroup;
	private exitButton: CircleButton;

	private backgroundRepo = new BackgroundRepository();

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
		this.nextPageButton.enabled = true;
		this.nextPageButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextPageButtonClick, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, window.close, this);
		this.loadView();
	}

	private onNextPageButtonClick(): void
	{
		Main.instance.gotoScene(new NextPageScene());
	}

	private async loadView(): Promise<void> 
	{
		let background = this.backgroundRepo.getAll()[LevelBiz.instance.currentLevel];
		this.currentLevelLargeLabel.text = this.currentLevelSmallLabel.text = `第${(LevelBiz.instance.currentLevel + 1).toLocaleString('zh-Hans-CN-u-nu-hanidec')}節`;
		this.coverImage.source = background.coverImageName;
		this.startTweenGroup.play(0);
		await lzlib.SoundUtility.playSound(background.introductionAudioName);
		this.nextPageButton.enabled = true;
	}
	
}