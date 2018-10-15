class Scene18 extends eui.Component implements  eui.UIComponent {
	private BackButton:eui.Button;
	private potImage:eui.Image;
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

		Base.onPlayBlackgroundMusic('44_mp3')
		this.BackButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBack,this);
		Base.onClickVoice(this.potImage,'40_mp3');
	}

	private onBack():void {
		this.parent.removeChild(this);
	}
	
}