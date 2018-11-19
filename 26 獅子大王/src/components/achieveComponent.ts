class achieveComponent extends eui.Component implements eui.UIComponent {
	private flexAnim: egret.tween.TweenGroup;
	private optionsScene:optionsScene;
	private rabbitScene:rabbitScene;
	private achieve_normal:eui.Image;
	private achieve_active:eui.Image;

	public constructor(optionsScene:optionsScene,rabbitScene:rabbitScene) {
		super();
		this.optionsScene=optionsScene;
		this.rabbitScene=rabbitScene;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		  mouse.enable(this.stage);
    mouse.setButtonMode(this.achieve_normal,true);
    mouse.setButtonMode(this.achieve_active,true);
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
			this.optionsScene.removeChild(this.rabbitScene);
	}

}