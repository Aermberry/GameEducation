class Start3Scene extends eui.Component implements  eui.UIComponent {
	
	public nextQuestionGroup: NextQuestionComponent;
	private nextQuestionLabel: eui.Label;
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
		mouse.enable(this.stage);
		mouse.setButtonMode(this.nextQuestionLabel,true);
		this.nextQuestionLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.nextQuestionLabel.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
		let sound:egret.Sound = RES.getRes('start_scene_question3_option_mp3');
		this.soundChannel = sound.play();
		this.nextQuestionGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponentTap, this);
	}


	private onMouseOver(e: egret.TouchEvent): void
	{
		(e.target as eui.Label).textColor = 0xfa9df6;
	}


	private onMouseOut(e: egret.TouchEvent): void
	{
		(e.target as eui.Label).textColor = 0xFF37FB;
	}

	private onNextQuestionComponentTap(): void
	{
		this.stopMP3();
		Main.instance.gotoScene(new Start4Scene());
	}

	private stopMP3(): void
	{
		this.soundChannel.stop();
	}
	
}