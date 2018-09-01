class Scene22 extends eui.Component implements  eui.UIComponent {
	private BackButton:eui.Button;
	private duckImage:eui.Image;
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

		Base.onPlayBlackgroundMusic('53_mp3')
		this.BackButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBack,this);
		Base.onClickVoice(this.duckImage,'54_mp3');
	}

	private onBack():void {
		this.parent.removeChild(this);
	}
	
}