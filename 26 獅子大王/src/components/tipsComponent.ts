class tipsComponent extends eui.Component implements eui.UIComponent {

	private tipsAnim: egret.tween.TweenGroup;
	private rect:eui.Rect;
	private returnGroup:eui.Group;
	private rabbitScene:rabbitScene;
	public constructor(rabbitScene:rabbitScene) {
		super();
		this.rabbitScene=rabbitScene;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.returnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,this.return,this)
	}

	public playAnim(): void {
		this.tipsAnim.playOnceAsync();
	}

	private return():void {
		this.rabbitScene.removeChild(this);
  }
}