class tipsComponent extends eui.Component implements eui.UIComponent {

	private tipsAnim: egret.tween.TweenGroup;

	private rect: eui.Rect;

	private returnGroup: eui.Group;
	private calendarTipsGroup: eui.Group;
	private letterGroup: eui.Group;

	private scene: eui.Component;
	private bulbComponent: bulbComponent;

	private calendar: eui.Image;

	private rabbitTips: eui.Label;
	private snakeTips: eui.Label;
	private ratTips: eui.Label;
	private giraffeTips: eui.Label;
	private pigTips: eui.Label;
	private sheepTips: eui.Label;

	private voice: string;
	private voice2: string;

	private letterTipsGroup: eui.Group;


	public constructor(scene: eui.Component, voice: string, voice2?: string) {
		super();
		this.scene = scene;
		this.voice = voice;
		this.voice2 = voice2;
	}

	protected partAdded(partName: string, instance: any): void {

		super.partAdded(partName, instance);

	}


	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.enable(this.stage);
		mouse.setButtonMode(this.calendarTipsGroup, true);
		this.calendarTipsGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.showCalendar, this);
		this.calendarTipsGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.cancleShowCalendar, this);
		this.letterTipsGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.showLetter, this);
		this.letterTipsGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.cancleShowLetter, this);
		this.returnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.return, this)
		this.lionDialogTextFlow();
	}

	public playAnim(): void {
		this.tipsAnim.playOnceAsync();
		this.playVoice(this.voice).then(() => {
			this.returnGroup.visible = true;
		})
	}

	public async playSnakeAnim(): Promise<void> {
		this.tipsAnim.playOnceAsync();
		await this.playVoice(this.voice);
		this.playVoice(this.voice2).then(() => {
			this.returnGroup.visible = true;
		})
	}

	private return(): void {
		this.scene.removeChild(this);
	}

	private async playVoice(voiceName: string): Promise<void> {
		let sound = GameStart.optionsScene.getOptionInstance.playVoice(voiceName).then(() => {
			this.calendarTipsGroup.visible = true;
			this.letterTipsGroup.visible = true;
		});
		return sound;
	}

	private showCalendar(): void {
		this.calendar.visible = true
	}
	private cancleShowCalendar(): void {
		this.calendar.visible = false;
	}

	private showLetter(): void {
		this.letterGroup.visible = true;
	}

	private cancleShowLetter(): void {
		this.letterGroup.visible = false;
	}

	private lionDialogTextFlow(): void {
		switch (this.currentState) {
			case "rabbit":
				this.rabbitTips.textFlow = [
					{ text: lionDialogText.rabbitTips_a.toString(), style: { size: 87, textColor: 0xa00000 } },
					{ text: lionDialogText.rabbitTips_b.toString(), style: { size: 87, textColor: 0x000000 } },
					{ text: lionDialogText.rabbitTips_c.toString(), style: { size: 87, textColor: 0xa00000 } },
					{ text: lionDialogText.rabbitTips_d.toString(), style: { size: 87, textColor: 0x000000 } },
					{ text: lionDialogText.rabbitTips_e.toString(), style: { size: 87, textColor: 0xa00000 } },
					{ text: lionDialogText.rabbitTips_f.toString(), style: { size: 87, textColor: 0x000000 } }
				];
				break;
			case "snake":
				this.snakeTips.textFlow = [
					{ text: lionDialogText.snakeTips_a.toString(), style: { size: 87, textColor: 0x000000 } },
					{ text: lionDialogText.snakeTips_b.toString(), style: { size: 87, textColor: 0xa00000 } }
				];
				break;
			case "rat":
				this.ratTips.textFlow = [
					{ text: lionDialogText.ratTips_a.toString(), style: { size: 87, textColor: 0x000000 } },
					{ text: lionDialogText.ratTips_b.toString(), style: { size: 87, textColor: 0x000000 } },
					{ text: lionDialogText.ratTips_c.toString(), style: { size: 87, textColor: 0xa00000 } }
				];
				break;
			case "giraffe":
				this.giraffeTips.textFlow = [
					{ text: lionDialogText.giraffeTips_a.toString(), style: { size: 87, textColor: 0x000000 } },
					{ text: lionDialogText.giraffeTips_b.toString(), style: { size: 87, textColor: 0x000000 } },
					{ text: lionDialogText.giraffeTips_c.toString(), style: { size: 87, textColor: 0xa00000 } }
				];
				break;
			case "pig":
				this.pigTips.textFlow = [
					{ text: lionDialogText.pigTips_a.toString(), style: { size: 87, textColor: 0x000000 } },
					{ text: lionDialogText.pigTips_b.toString(), style: { size: 87, textColor: 0xa00000 } }
				];
				break;
			case "sheep":
				this.sheepTips.textFlow = [
					{ text: lionDialogText.sheepTips_a.toString(), style: { size: 87, textColor: 0x000000 } },
					{ text: lionDialogText.sheepTips_b.toString(), style: { size: 87, textColor: 0xa00000 } },
					{ text: lionDialogText.sheepTips_c.toString(), style: { size: 87, textColor: 0x000000 } }
				];
				break;
		}
	}

}