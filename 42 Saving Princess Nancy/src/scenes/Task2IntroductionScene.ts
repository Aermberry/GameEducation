class Task2IntroductionScene extends eui.Component implements  eui.UIComponent {
	
	private NextBootsComponent: BootsComponent;

	private task2Channel: egret.SoundChannel

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
		this.playTaskMP3();
		this.NextBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextClick, this);
	}

	private onNextClick(e: egret.TouchEvent): void
	{
		Main.instance.gotoScene(new DistinguishRole1Scene());
		this.task2Channel.stop();
	}

	private playTaskMP3(): void
	{
		this.task2Channel = (RES.getRes('task2_introduction_mp3') as egret.Sound).play(0,1);
	}
	
}