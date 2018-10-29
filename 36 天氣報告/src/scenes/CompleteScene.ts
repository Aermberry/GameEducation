class CompleteScene extends eui.Component implements  eui.UIComponent {
	private exitButton: eui.Image;
	private exit:eui.Image;

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
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);
		this.exitButton.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this);
		this.exitButton.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this);
		(RES.getRes('sound 232_mp3') as egret.Sound).play(0, 1);
	}

	private onRollOver():void {
		this.exit.visible = true;
		this.exitButton.scaleX = this.exitButton.scaleY = 1.1;
	}

	private onRollOut(): void{
		this.exit.visible = false;
		this.exitButton.scaleX = this.exitButton.scaleY = 1;
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
}