class Scene07 extends eui.Component implements eui.UIComponent {
	private nextButton: eui.Button;
	private pongLabel: eui.Label;
	private pongLabel0: eui.Label;
	private KongLabel: eui.Label;
	private strongLabel: eui.Label
	;
	private DongLabel: eui.Label;
	private DongLabel0: eui.Label;
	private kongLebel: eui.Label;
	private gongLabel: eui.Label;
	private headerLabel: eui.Label;
	private group00: eui.Group;
	private redLineGroup: eui.Group;
	private diplay: egret.tween.TweenGroup;
	private arry: eui.Label[];
	private voiceList: string[] = ["08_pong_mp3", "08_pong_mp3", "08_kong_mp3", "08_strong_mp3", "08_dong_mp3", "08_dong_mp3", "08_kong_mp3", "08_gong_mp3"];

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();

		Base.onAsyncPlayBlackgroundMusic('08_startgame1a_mp3').then(() => {
			this.changRedColor(this.pongLabel, this.pongLabel0, this.KongLabel, this.strongLabel, this.DongLabel, this.DongLabel0, this.kongLebel, this.gongLabel)
		});
		this.diplay.play(0);
		Base.onClickNextScene(this.nextButton, new Scene08())
	}


	//changcolor&drawline

	private async changRedColor(...restOfName: eui.Label[]): Promise<void> {
		for (var i = 0; i < restOfName.length; i++) {
			await lzlib.ThreadUtility.sleep(500);
			restOfName[i].textColor = 0xd92e20;
			restOfName[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickVoice.bind(this, this.voiceList[i]), this);//
			(this.redLineGroup.$children[i] as eui.Label).visible = true;
		}

		this.playSound("08_startgame1b_mp3")

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