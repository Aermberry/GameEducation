class Start4Scene extends eui.Component implements  eui.UIComponent {
	
	public listenWordGroup: eui.Group;
	private listenLabel: eui.Label;
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
		mouse.setButtonMode(this.listenLabel,true);
		this.listenLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.listenLabel.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
		let sound:egret.Sound = RES.getRes('start_scene_question4_option_mp3');
		this.soundChannel = sound.play();
		this.listenWordGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onListenWordGroupTap, this);
	}

	private onMouseOver(e: egret.TouchEvent): void
	{
		(e.target as eui.Label).textColor = 0xC86AF3;
	}


	private onMouseOut(e: egret.TouchEvent): void
	{
		(e.target as eui.Label).textColor = 0x6334C3;
	}

	private onListenWordGroupTap(): void
	{
		this.stopMP3();
		Main.instance.gotoScene(new ListenScene());
	}

	private stopMP3(): void
	{
		this.soundChannel.stop();
	}
	
}