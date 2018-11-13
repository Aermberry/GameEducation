class StartScene extends eui.Component implements  eui.UIComponent {
	
	private startLabel: eui.Label;
	private startButton2: eui.Image;
	private startMask: eui.Rect;

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
		mouse.enable(this.stage);
		mouse.setButtonMode(this.startLabel, true);
		this.startLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartLabelTap, this);
		this.startLabel.addEventListener(mouse.MouseEvent.ROLL_OVER, () => this.startLabel.textColor = 0x71FBFD, this);
		this.startLabel.addEventListener(mouse.MouseEvent.ROLL_OUT, () => this.startLabel.textColor = 0xfa3a99, this);
		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton2Click, this);
	}

	private onStartButton2Click(): void
	{
		this.startAnimation.play(0);
		this.startMask.visible = false;
		this.startButton2.visible = false;
	}

	private onStartLabelTap()
	{
		Main.instant.gotoScene(new Game1Scene());
	}
	
}