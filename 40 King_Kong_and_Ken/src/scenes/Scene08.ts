class Scene08 extends eui.Component implements eui.UIComponent {
	private textButton: eui.Button;
	private speakerImage: eui.Image;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		
		super.childrenCreated();
		this.speakerImage.touchEnabled = false;
		this.playBackgroundMusic();
		this.textButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextClick, this);
		this.speakerImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayVioce, this);
	
	}

	private async playBackgroundMusic(): Promise<void> {

		await lzlib.SoundUtility.playSound('09_startgame2_mp3');
		await lzlib.ThreadUtility.sleep(1000);
		this.speakerImage.touchEnabled = true;
		 
	}

	private async onPlayVioce(): Promise<void> {
		this.speakerImage.source = '/resource/textures/speaking.png'
		await lzlib.SoundUtility.playSound('09_click_on_tree_mp3')
		this.speakerImage.source = '/resource/textures/speaker.png'
		this.textButton.visible = true;
	}

	private onNextClick(): void {
		Main.instance.gotoScene(new Scene09());
	}

}