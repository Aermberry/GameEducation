class FinishScene extends eui.Component implements  eui.UIComponent {
	
	private finishAnimation: egret.tween.TweenGroup;
	private exitLabel: eui.Label;
	
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
		this.playStartAnimation();
		this.exitLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			window.close();
		}, this);

	}

	private playStartAnimation(): void
	{
		this.finishAnimation.play(0);
	}
	
}