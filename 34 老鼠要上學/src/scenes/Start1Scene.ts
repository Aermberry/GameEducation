class Start1Scene extends eui.Component implements  eui.UIComponent {
	
	public nextQuestionComponent: NextQuestionComponent;
	private soundChannel: egret.SoundChannel;

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
		let sound:egret.Sound = RES.getRes('start_scene_question1_option_mp3');
		this.soundChannel = sound.play();
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponentTap, this);
	}

	private onNextQuestionComponentTap(): void
	{
		this.stopMP3();
		Main.instance.gotoScene(new Start2Scene());
	}

	private stopMP3(): void
	{
		this.soundChannel.stop();
	}
	
}