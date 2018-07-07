class CompleteScene extends eui.Component implements  eui.UIComponent {
	private exitButton: ImageButton

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
		(RES.getRes('sound 213_mp3') as egret.Sound).play(0, 1);
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
}