class pigComponent extends eui.Component implements  eui.UIComponent {

	private eyeAnim:egret.tween.TweenGroup;
	private flusteredAnim:egret.tween.TweenGroup;
	private eyes:egret.tween.TweenGroup;
	
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
		this.onAnim();
		this.eyes.playLoopAsync();
		this.currentState="click"
	}
	
	public async onAnim():Promise<void>{
		this.eyeAnim.playOnceAsync().then(()=>{
			this.flusteredAnim.playLoopAsync();
		})
	}
}