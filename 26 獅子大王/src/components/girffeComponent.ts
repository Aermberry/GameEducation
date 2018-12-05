class girffeComponent extends eui.Component implements  eui.UIComponent {

	private eye:egret.tween.TweenGroup;
	private eyeSmell:egret.tween.TweenGroup;
	private flustedAnim:egret.tween.TweenGroup;

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

		this.eye.playLoopAsync();
		this.eyeSmell.playLoopAsync();
		this.flustedAnim.playLoopAsync();
		// this.currentState="click"
	}
	
}