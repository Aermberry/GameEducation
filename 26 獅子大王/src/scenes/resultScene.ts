class resultScene extends eui.Component implements  eui.UIComponent {

	private commitLabel:eui.Label;
	private Anim:egret.tween.TweenGroup;

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
		this.textBook();
		this.playAnimation(this.Anim,true);
	}

	private textBook():void {
		this.commitLabel.text=lionDialogText.thanksTalk.toString();
	}

	private playAnimation(target: egret.tween.TweenGroup, isLoop: boolean): void {
		if (isLoop) {
			for (var key in target.items) {
				target.items[key].props = { loop: true };
			}
		}
		target.play();
	}	
}