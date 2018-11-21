class stampComponent extends eui.Component implements eui.UIComponent {

	private stamperAnim: egret.tween.TweenGroup;
	private changSzieAnim:egret.tween.TweenGroup;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		// this.playAnimation(this.stamperAnim,true);
		this.currentState=this.skin.states[2].name
		this.changSzieAnim.playOnceAsync();
	}

	private playAnimation(target: egret.tween.TweenGroup, isLoop: boolean): void {
		if (isLoop) {
			for (var key in target.items) {
				target.items[key].props = { loop: true };
			}
		}
		target.play();
	}

}