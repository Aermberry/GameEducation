class invitation extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected async childrenCreated(): Promise<void> {
		super.childrenCreated();
		optionsScene.getOptionInstance.onPlayVoice('sound 627_mp3')
	 	optionsScene.getOptionInstance.playVoice("sound 637_mp3");
		setTimeout(()=>{
			optionsScene.getOptionInstance.onPauseVoice();
			endInit()
		},10000)
	}
}