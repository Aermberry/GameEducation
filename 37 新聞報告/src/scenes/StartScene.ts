class StartScene extends eui.Component implements  eui.UIComponent {
	private startButton: eui.Image
	private startButton2: eui.Image;
	private startMask: eui.Rect;
	private exitButton: eui.Image;
	private exit:eui.Image;
	private startSoundChannel: egret.SoundChannel

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		mouse.enable(this.stage);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.setButtonMode(this.startButton, true);
		mouse.setButtonMode(this.startButton2, true);
		mouse.setButtonMode(this.exitButton, true);
		this.startButton.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onStartButtonRollOver, this);
		this.startButton.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onStartButtonRollOut, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStartButtonTouchBegin, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton2Click, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);
		this.exitButton.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this)
		this.exitButton.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this)
	}

	private onRollOver():void {
		this.exit.visible = true;
		this.exitButton.scaleX = this.exitButton.scaleY = 1.1;
	}

	private onRollOut(): void{
		this.exit.visible = false;
		this.exitButton.scaleX = this.exitButton.scaleY = 1;
	}

	private onStartButton2Click(): void
	{
		this.startSoundChannel = (RES.getRes('sound 188_mp3') as egret.Sound).play(0, 1);
		this.startMask.visible = false;
		this.startButton2.visible = false;
		this.startButton.visible = true;
	}
	
	private onStartButtonRollOver(e: mouse.MouseEvent): void
	{
		this.startButton.source = 'start_button_mouse_over_png';
	}

	private onStartButtonRollOut(e: mouse.MouseEvent): void
	{
		this.startButton.source = 'start_button_normal_png';
	}

	private onStartButtonTouchBegin(e: egret.TouchEvent): void
	{
		this.startButton.source = 'start_button_mouse_down_png';
	}

	private onStartButtonClick(e: egret.TouchEvent): void
	{
		this.startSoundChannel.stop();
		Main.instance.gotoScene(new Question1Scene());
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
  		window.close();
	}
}