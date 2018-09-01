class StartScene extends eui.Component implements  eui.UIComponent {
	
	private startLabel: eui.Label;
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
		this.startAnimation.play(0);
		this.startLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartLabelTap, this);
		this.startLabel.addEventListener(mouse.MouseEvent.ROLL_OVER, () => this.startLabel.textColor = 0x71FBFD, this);
		this.startLabel.addEventListener(mouse.MouseEvent.ROLL_OUT, () => this.startLabel.textColor = 0xfa3a99, this);
	}

	private onStartLabelTap()
	{
		Main.instant.gotoScene(new Game1Scene());
	}
	
}