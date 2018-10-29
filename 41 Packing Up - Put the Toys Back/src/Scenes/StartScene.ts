class startScene extends eui.Component implements eui.UIComponent {

	private startButton: eui.Button;

	private startMask: eui.Rect;
	private startButton2: eui.Button;
	private loadingAnim: egret.tween.TweenGroup

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onnextBtnClick, this);

	}

	private async onStartButtonClick(): Promise<void> {
		await this.loadingAnim.play(0);
		this.startMask.visible = false;
		this.startButton2.visible = false;
		this.startGame();
	}

	private async startGame(): Promise<void> {
		await lzlib.SoundUtility.playSound('01a_mp3');
		this.startButton.visible = true;
	}

	// 點擊進入游戲場景
	private onnextBtnClick(): void {
		Main.instance.gotoScene(new gameScene());
	}

}