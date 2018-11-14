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
	private redLineGroup:eui.Group;
	private voiceList:string[]=["ken_mp3","king_mp3","kong_mp3","king_mp3","kong_mp3","ken_mp3"]

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		Base.onAsyncPlayBlackgroundMusic('27a_mp3').then(() => {
			this.changRedColor(this.kenLabel, this.KingLabel, this.KongLabel, this.KingLabel0, this.konglabel0, this.kenLabel0)
		});
		this.display.play(0);
		Base.onClickNextScene(this.nextButton, new Scene12())
	}

	private async changRedColor(...restOfName: eui.Label[]): Promise<void> {
		for (var i = 0; i < restOfName.length; i++) {
			
			restOfName[i].textColor = 0xd92e20;
			restOfName[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickVoice.bind(this, this.voiceList[i]), this);
			(this.redLineGroup.$children[i] as eui.Label).visible = true;
		}

		this.playSound("27b_mp3")

	}

	private async playSound(sound: string): Promise<void> {
		this.headerLabel.visible = true;
		await lzlib.SoundUtility.playSound(sound);
		this.nextButton.visible = true;
	}

	private clickVoice(voice: string): void {
		let current = voice;
		var sound: egret.Sound = RES.getRes(current);
		sound.play(0, 1);
	}
}