class invitation extends eui.Component implements eui.UIComponent {

	private intvitationLetter01:eui.Image;
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
		 this.judgmentstypes();
		setTimeout(()=>{
			optionsScene.getOptionInstance.onPauseVoice();
			endInit()
		},10000)
	}

	//文字類型判斷
	private judgmentstypes():void {
		if(optionsScene.getOptionInstance.getWords){
			this.intvitationLetter01.source='invitation_png'
		}
	}

}