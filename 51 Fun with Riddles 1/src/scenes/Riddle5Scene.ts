class Riddle5Scene extends eui.Component implements eui.UIComponent {
	private apple: eui.Image;
	private glasses: eui.Image;
	private cup: eui.Image;
	private isTrueImage: eui.Image;
	private transparentBlock: eui.Rect;

	private useGroup: eui.Group;
	private appleTipsGroup: eui.Group;
	private glassesTipsGroup: eui.Group;
	private useTipsGroup: eui.Group;
	private goodsGroup: eui.Group;

	private RiiddleOPtionsScenes: RiiddleOPtionsScenes;

	public constructor(RiiddleOPtionsScenes: RiiddleOPtionsScenes) {
		super();
		this.RiiddleOPtionsScenes = RiiddleOPtionsScenes;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.addshowTipsLabel(this.useGroup, this.useTipsGroup);
		this.addshowTipsLabel(this.apple, this.appleTipsGroup);
		this.addshowTipsLabel(this.glasses, this.glassesTipsGroup);
		this.isTrue(this.cup, this.isTrueImage);
	}

	public addshowTipsLabel(
		object: eui.Group | eui.Image | eui.Button,
		object2: eui.Group | eui.Image | eui.Button
	): void {
		object.addEventListener(
			egret.TouchEvent.TOUCH_TAP,
			() => {
				this.showTipsLabel(object2);
			},
			this
		);
	}

	public async showTipsLabel(
		object: eui.Group | eui.Image | eui.Button
	): Promise<void> {
		object.visible = true;
		this.preventClick(
			this.appleTipsGroup,
			this.glassesTipsGroup,
			this.isTrueImage,
			this.goodsGroup,
			this.transparentBlock
		);
		await lzlib.ThreadUtility.sleep(3000);
		object.visible = false;
	}

	public isTrue(btn: eui.Image | eui.Button, object: eui.Image) {
		btn.addEventListener(
			egret.TouchEvent.TOUCH_TAP,
			() => {
				this.isvisible(object);
			},
			this
		);
	}

	public async isvisible(object: eui.Image): Promise<void> {
		object.visible = true;
		await lzlib.ThreadUtility.sleep(1000);
		this.RiiddleOPtionsScenes.isCorrect("5");
		if (object.visible) {
			object.visible = false;
			await this.parent.removeChild(this);
		}
		// await object.visible && this.goHome();
	}

	public goHome() {
		Main.instance.gotoScene(new RiiddleOPtionsScenes());
	}

	private preventClick(
		tips01Group: eui.Group,
		tips02Group: eui.Group,
		tips03: eui.Image,
		optionGroup: eui.Group,
		transparentBlock: eui.Rect
	): void {
		if (tips01Group.visible || tips02Group.visible || tips03.visible) {
			const originIndex = optionGroup.getChildIndex(transparentBlock);
			const currentIndex = optionGroup.$children.length - 1;
			optionGroup.setChildIndex(transparentBlock, currentIndex);
			setTimeout(() => {
				optionGroup.setChildIndex(transparentBlock, originIndex);
			}, 5000);
		}
	}

}