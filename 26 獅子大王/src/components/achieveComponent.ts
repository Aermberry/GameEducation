class achieveComponent extends eui.Component implements eui.UIComponent {
	private flexAnim: egret.tween.TweenGroup;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.playAnimation(this.flexAnim, true);
	}

	private playAnimation(target: egret.tween.TweenGroup, isLoop: boolean): void {
		if (isLoop) {
			for (var key in target.items) {
				target.items[key].props = { loop: true };
			}
		}
		target.play();
	}

	private status(status: boolean = false): void {
		status ? this.currentState = "normal" : this.currentState = "active"
	}

	private gotoHomeScene(): void {
		let currentState = this.getCurrentState()
		if (currentState == "active")
			Main.instance.gotoScene(new optionsScene());
	}

}