class Scene11 extends eui.Component implements eui.UIComponent {
	private nextButton: eui.Button;
	private display: egret.tween.TweenGroup;
	private kenLabel: eui.Label;
	private KingLabel: eui.Label;
	private KongLabel: eui.Label;
	private KingLabel0: eui.Label;

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
		this.changColor(this.kenLabel);
		this.changColor(this.KingLabel);
		Base.onClickNextScene(this.nextButton, new Scene12())
		// this.nextButton.visible=true;
	}

	private onNextScene(): void {
		Main.instance.gotoScene(new Scene12());
	}

	private async changColor(element: eui.Label): Promise<void> {
		// var shap:egret.Shape
		await lzlib.ThreadUtility.sleep(20000);
		element.textColor = 0xd92e20;
		let shp: egret.Shape = new egret.Shape();
		shp.graphics.lineStyle(2, 0xd92e20);
		shp.graphics.moveTo(200, 400);
		shp.graphics.lineTo(200, 420);
		shp.graphics.endFill();
	}

	// private onPlayBlackgroundMusic():void{
	// 	lzlib.SoundUtility.playSound('27a_mp3')
	// 	this.nextButton.visible=true;
	// }

}