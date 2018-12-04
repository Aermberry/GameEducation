class stampComponent extends eui.Component implements eui.UIComponent {

	private stamperAnim: egret.tween.TweenGroup;
	private changSzieAnim:egret.tween.TweenGroup;

	private stamperNormal:eui.Image;
	private stamperNormal_active:eui.Image;
	private stamper_active:eui.Image;
	private stamper_hover:eui.Image;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.enable(this.stage);
		mouse.setButtonMode( this.stamperNormal, true);
		mouse.setButtonMode( this.stamperNormal_active, true);
		mouse.setButtonMode( this.stamper_active, true);
		mouse.setButtonMode(this.stamper_hover, true);
		this.playAnimation(this.stamperAnim, true);
	}

	private playAnimation(target: egret.tween.TweenGroup, isLoop: boolean): void {
		if (isLoop) {
			for (var key in target.items) {
				target.items[key].props = { loop: true };
			}
		}
		target.play();
	}

	public async play():Promise<void>{
		let play= this.changSzieAnim.playOnceAsync();
		return play;
	}

}