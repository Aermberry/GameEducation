class ResultScene extends eui.Component implements  eui.UIComponent {
	private dialogTweenGroup:egret.tween.TweenGroup;
	private againGroup:eui.Group;
	private exitGroup:eui.Group;
	
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
		this.dialogTweenGroup.play(0);
		this.showAgainAndExit();
	}
	
	private async showAgainAndExit():Promise<void>
	{
	    await  lzlib.ThreadUtility.sleep(250);
		this.exitGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>window.close(), this);
		this.againGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new StartScene()), this);
	}
	
}