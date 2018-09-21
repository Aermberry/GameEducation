class FinishScene extends eui.Component implements  eui.UIComponent {
	
	private ButtonComponent: ButtonComponent;

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
		this.playStartAnimation();
		this.ButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonComponentClick, this);
	}

	private onButtonComponentClick(e: egret.TouchEvent): void
	{
		Main.instance.gotoScene(new RoleSelectScene());
	}

	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}
	
}