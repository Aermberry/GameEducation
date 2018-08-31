class Scene11 extends eui.Component implements eui.UIComponent {
	private nextButton: eui.Button;
	private display:egret.tween.TweenGroup;
	private kenLabel:eui.Label;
	private KingLabel:eui.Label;
	private KongLabel:eui.Label;
	private KingLabel0:eui.Label;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		// this.onPlayBlackgroundMusic();
		// this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextScene, this);
		Base.onAsyncPlayBlackgroundMusic('27a_mp3');
		this.display.play(0);
		Base.onClickNextScene(this.nextButton,new Scene12())
		// this.nextButton.visible=true;
	}

	private onNextScene(): void {
		Main.instance.gotoScene(new Scene12());
	}

	private async changColor(element:eui.Label ):Promise<void> {
		// var shap:egret.Shape
		await lzlib.ThreadUtility.sleep(2000);
		 element.textColor= 0xd92e20;
		 await lzlib.ThreadUtility.sleep(2000);
		 await lzlib.ThreadUtility.sleep(2000);
		 await lzlib.ThreadUtility.sleep(2000);
		 await lzlib.ThreadUtility.sleep(2000);
	}

	// private onPlayBlackgroundMusic():void{
	// 	lzlib.SoundUtility.playSound('27a_mp3')
	// 	this.nextButton.visible=true;
	// }

}