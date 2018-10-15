class Riddle2Scene extends eui.Component implements eui.UIComponent {
  private apple: eui.Image;
  private key: eui.Image;
  private Puzzle: eui.Image;
  private isTrueImage: eui.Image;
  private transparentBlock: eui.Rect;

  private putGroup: eui.Group;
  private togetherGroup: eui.Group;
  private putTipsGroup: eui.Group;
  private appleTipsGroup: eui.Group;
  private keyTipsGroup: eui.Group;
  private tipsGroup: eui.Group;

  public constructor() {
    super();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
		super.childrenCreated();
		
	}
	
	public addshowTipsLabel(
		object: eui.Group | eui.Image | eui.Button,
		object2: eui.Group | eui.Image | eui.Button,callback
	): void {
		object.addEventListener(
			egret.TouchEvent.TOUCH_TAP,
			() => {
				
			},
			this
		);
	}

	public async showTipsLabel(
		object: eui.Group | eui.Image | eui.Button,callback
	): Promise<void> {
		object.visible = true;
		callback();
		// this.preventClick(
		// 	this.drinksTipsGroup,
		// 	this.pencilBoxTipGroup,
		// 	this.isTrueImage,
		// 	this.goodsGroup,
		// 	this.transparentBlock
		// );
		await lzlib.ThreadUtility.sleep(5000);
		object.visible = false;
	}

	public isTrue(btn: eui.Image | eui.Button, object: eui.Image,callback) {
		btn.addEventListener(
			egret.TouchEvent.TOUCH_TAP,
			() => {
				// this.isvisible(object);
				callback(object);
			},
			this
		);
	}

	public async isvisible(object: eui.Image): Promise<void> {
		object.visible = true;
		await lzlib.ThreadUtility.sleep(1000);
		object.visible && this.gotoNextScene(new StatueScene());
	}

	public gotoNextScene(scene: eui.Component) {
		Main.instance.gotoScene(scene);
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
