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


	protected async childrenCreated():Promise<void>
	{
		mouse.enable(this.stage);
		mouse.setButtonMode(this.startAnswerLabel,true);
		super.childrenCreated();
		this.animationStart();
		await this.playMP3();
		this.startAnswerLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.mouseOver, this);
		this.startAnswerLabel.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.mouseOut, this);
		this.startAnswerGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartAnswerGroupTap, this);
	}

	private mouseOver(e: egret.TouchEvent): void
	{
		let label = e.target as eui.Label;
		label.textColor = 0x1C99EF;
	}

	private mouseOut(e: egret.TouchEvent): void
	{
		let label = e.target as eui.Label;
		label.textColor = 0xFB35FC;

	}

	private onStartAnswerGroupTap(): void
	{
		Main.instance.gotoScene(new Question1Scene());
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