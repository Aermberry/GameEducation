class sheeepComponent extends eui.Component implements  eui.UIComponent {

	private eyeAnim:egret.tween.TweenGroup;
	private flustered:egret.tween.TweenGroup;
	private eyesAnims:egret.tween.TweenGroup;

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
		// this.currentState="click"
		this.playLoopAnim(this.flustered)
		this.playLoopAnim(this.eyeAnim)
		this.playLoopAnim(this.eyesAnims)
	}

	private playLoopAnim(Anim:egret.tween.TweenGroup):void{
		Anim.playLoopAsync();
	}


	
}