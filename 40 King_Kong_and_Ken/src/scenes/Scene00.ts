class Scene00 extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,
			this.onSceneClick, this);
		this.playBackgroundMusic();
	}

	private async playBackgroundMusic(): Promise<void> {
		await lzlib.SoundUtility.playSound('01a_mp3');
		Main.instance.gotoScene(new Scene00_1());
	}

	private onSceneClick(): void {
		Main.instance.gotoScene(new Scene00_1());
	}
}