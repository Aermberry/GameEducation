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
		lzlib.SoundUtility.playSound('ye_you_completed_this_execcise_now_mp3');
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
}