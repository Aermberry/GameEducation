class invitation extends eui.Component implements eui.UIComponent {

	private intvitationLetter01: eui.Image;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected async childrenCreated(): Promise<void> {
		super.childrenCreated();
		this.judgmentstypes();
		GameStart.optionsScene.getOptionInstance.onPlayVoice('sound 627_mp3')
		GameStart.optionsScene.getOptionInstance.playVoice("sound 637_mp3").then(() => {
			GameStart.optionsScene.getOptionInstance.onPauseVoice();
			endInit()
		});
	}

	//文字類型判斷
	private judgmentstypes(): void {
		if (GameStart.optionsScene.getOptionInstance.getWords) {
			this.intvitationLetter01.source = 'invitation_png'
		}
	}

}