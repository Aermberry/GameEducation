class Scene00 extends eui.Component implements eui.UIComponent {
	private textLabel: eui.Label;
	private nextButton: eui.Button;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP,
			this.onNextSceneClick, this);
		this.playBackgroundMusic();
	}

	private async playBackgroundMusic(): Promise<void> {
		await lzlib.SoundUtility.playSound('01a_mp3');//加載音頻
		this.textLabel.text = "Let's listen to  the poem about them.";//文字變換
		this.textLabel.textColor = 0x5d20f5;//我腦子顔色變換
		await lzlib.SoundUtility.playSound('01b_mp3')
		// await lzlib.ThreadUtility.sleep(3000);//
		this.nextButton.visible = true;
		// Main.instance.gotoScene(new Scene01());
	}

	private onNextSceneClick(): void {
		Main.instance.gotoScene(new Scene01());
	}
}