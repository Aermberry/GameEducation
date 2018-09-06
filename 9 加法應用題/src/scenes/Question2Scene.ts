class Question2Scene extends eui.Component implements  eui.UIComponent {
	private motion_1: egret.tween.TweenGroup;
	private motion_2: egret.tween.TweenGroup;
	private motion_3: egret.tween.TweenGroup;

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
		mouse.enable(this.stage);
		this.playGame();
	}
	private async playGame(): Promise<void>
	{
		this.motion_1.play(0);
		this.motion_2.play(0);
		await lzlib.SoundUtility.playSound('add_2streamsound 0_mp3');
		await lzlib.SoundUtility.playSound('add_2streamsound 1_mp3');

		this.motion_3.play(0);
		await lzlib.SoundUtility.playSound('add_2streamsound 2_mp3');
		await lzlib.SoundUtility.playSound('add_2streamsound 3_mp3');
		await lzlib.SoundUtility.playSound('add_2streamsound 4_mp3');
	}
}