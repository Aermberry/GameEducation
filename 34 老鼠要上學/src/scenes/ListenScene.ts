class ListenScene extends eui.Component implements  eui.UIComponent {
	
	private startAnswerGroup: eui.Group;
	private startAnimation: egret.tween.TweenGroup;
	
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
		this.animationStart();
		this.playMP3();
		this.startAnswerGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartAnswerGroupTap, this);
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
		await lzlib.SoundUtility.playSound('start_introduction_mp3');
	}
}