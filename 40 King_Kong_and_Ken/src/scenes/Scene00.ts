class Scene00 extends eui.Component implements eui.UIComponent {
	
	private textLabel: eui.Label;

	private nextButton: eui.Button;
	private startMask: eui.Rect;
    private startButton: eui.Button;

    private loadingAnim:egret.tween.TweenGroup

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
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartButtonClick,this);
	}

	private  async onStartButtonClick(): Promise<void>{
		await this.loadingAnim.play(0);
		this.startMask.visible = false;
		this.startButton.visible = false;
		await lzlib.ThreadUtility.sleep(2000)
		await this.playBackgroundMusic();
	}

	private async playBackgroundMusic(): Promise<void> {
		await lzlib.SoundUtility.playSound('01a_mp3');
		this.textLabel.text = "Let's listen to a poem about them.";
		this.textLabel.textColor = 0x5d20f5;
		await lzlib.SoundUtility.playSound('01b_mp3')
		this.nextButton.visible = true;
	}

	private onNextSceneClick(): void {
		Main.instance.gotoScene(new Scene01());
	}
}