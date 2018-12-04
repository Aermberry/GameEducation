

class bulbComponent extends eui.Component implements eui.UIComponent {

	private lampGrad: egret.tween.TweenGroup;

	private lampLight_normal: eui.Image;
	private lampLight: eui.Image;
	private bulb_hover: eui.Image;
	private bulb_active: eui.Image;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.enable(this.stage);
		mouse.setButtonMode( this.lampLight_normal, true);
		mouse.setButtonMode( this.lampLight, true);
		mouse.setButtonMode(this.bulb_hover, true);
		mouse.setButtonMode(this.bulb_active, true);
		this.playAnimation(this.lampGrad, true);
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



