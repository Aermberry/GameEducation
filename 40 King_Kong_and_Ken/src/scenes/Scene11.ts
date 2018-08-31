class Scene11 extends eui.Component implements eui.UIComponent {
	private nextButton: eui.Button;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		// this.onPlayBlackgroundMusic();
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextScene, this);
		Base.onAsyncPlayBlackgroundMusic('27a_mp3', this.nextButton);
		// this.nextButton.visible=true;
	}

	private onNextScene(): void {
		Main.instance.gotoScene(new Scene12());
	}

	// private onPlayBlackgroundMusic():void{
	// 	lzlib.SoundUtility.playSound('27a_mp3')
	// 	this.nextButton.visible=true;
	// }

}