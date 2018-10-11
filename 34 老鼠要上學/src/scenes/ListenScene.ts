class ListenScene extends eui.Component implements  eui.UIComponent {
	
	private startAnswerGroup: eui.Group;
	private startAnimation: egret.tween.TweenGroup;
	private startAnswerLabel: eui.Label;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated(): void
	{
		mouse.enable(this.stage);
		mouse.setButtonMode(this.startAnswerLabel,true);
		super.childrenCreated();
		this.animationStart();
		this.startAnswerLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.mouseOver, this);
		this.startAnswerLabel.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.mouseOut, this);
		this.startAnswerGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartAnswerGroupTap, this);
		this.playMP3();
	}

	private mouseOver(e: egret.TouchEvent): void
	{
		(e.target as eui.Label).textColor = 0x1C99EF;	
	}

	private mouseOut(e: egret.TouchEvent): void
	{
		(e.target as eui.Label).textColor = 0xFB35FC;
	}

	private onStartAnswerGroupTap(): void
	{
		Main.instance.gotoScene(new Question1Scene());
	}

	private onSkipButtonClick(): void
	{
		
	}

	public animationStart(): void
	{
		this.startAnimation.play(0);
	}

	private async playMP3(): Promise<void>
	{
		return lzlib.SoundUtility.playSound('start_introduction_mp3');
	}

}