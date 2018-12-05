class rabbirComponent extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public playVoice(): void {
		let sound: egret.Sound = RES.getRes("")
		sound.play();
	}

}