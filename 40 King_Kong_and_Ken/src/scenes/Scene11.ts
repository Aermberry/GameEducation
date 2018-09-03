class Scene11 extends eui.Component implements eui.UIComponent {
	private nextButton: eui.Button;
	private display: egret.tween.TweenGroup;
	private kenLabel: eui.Label;
	private KingLabel: eui.Label;
	private KongLabel: eui.Label;
	private KingLabel0: eui.Label;
	private konglabel0: eui.Label;
	private kenLabel0: eui.Label;
	private arry: eui.Label[];
	private headerLabel:eui.Label;

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
		this.arry = [this.kenLabel, this.KingLabel, this.KongLabel, this.KingLabel0, this.konglabel0, this.kenLabel0];
		this.changColor(this.arry);
		Base.onClickNextScene(this.nextButton, new Scene12())
		// this.nextButton.visible=true;
	}

	private onNextScene(): void {
		Main.instance.gotoScene(new Scene12());
	}

	private async changColor(arry: eui.Label[]): Promise<void> {
		await lzlib.ThreadUtility.sleep(20000);
		for (let i = 0; i < arry.length; i++) {
			await lzlib.ThreadUtility.sleep(2000);
			console.log(arry[i]);
			Base.changColor(arry[i]);
			await lzlib.ThreadUtility.sleep(2000);
			await Base.ruling(this, arry[i]);
		}
		await lzlib.ThreadUtility.sleep(1000);
		this.headerLabel.visible=true;
		await lzlib.SoundUtility.playSound('27b_mp3');
		this.nextButton.visible=true;

	}
}