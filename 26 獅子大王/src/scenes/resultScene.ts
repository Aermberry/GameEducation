class resultScene extends eui.Component implements eui.UIComponent {

	private commitLabel: eui.Label;

	private Anim: egret.tween.TweenGroup;
	private plantMask: egret.tween.TweenGroup;

	private achieveComponent: achieveComponent;
	private achieveComponentGroup: eui.Group;


	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.plantMask.playOnceAsync().then(() => {
			// RES.getRes("sound 627_mp3").play(0, -1)
			optionsScene.getOptionInstance.onPlayVoice('sound 627_mp3')
		})
		this.textBook();
		this.playAnimation(this.Anim, true);
		lzlib.SoundUtility.playSound("sound 628_mp3").then(() => {
			this.achieveComponentGroup.visible = true;
		})
		this.achieveComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toInvitationScene, this)
	}

	private textBook(): void {
		this.commitLabel.text = lionDialogText.thanksTalk.toString();
	}

	private playAnimation(target: egret.tween.TweenGroup, isLoop: boolean): void {
		if (isLoop) {
			for (var key in target.items) {
				target.items[key].props = { loop: true };
			}
		}
		target.play();
	}

	private toInvitationScene(): void {
		optionsScene.getOptionInstance.onPauseVoice();
		Main.instance.gotoScene(new invitation());
	}
}