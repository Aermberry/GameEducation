class GameScene extends eui.Component implements  eui.UIComponent {
	private trainGroup: eui.Group;
	private nextPageGroup: eui.Group;
	private textAnswerGroup: eui.Group;
	private nextQuestionButton: CircleButton;
	private currentLevelLabel: eui.Label;
	private checkButton: CircleButton;
	private train: egret.tween.TweenGroup;
	public constructor() {
		super();
	}

	protected async partAdded(partName:string,instance:any): Promise<void>
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated():Promise<void>
	{
		super.childrenCreated();
		this.nextQuestionButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionClick, this);
		this.checkButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheckButtonClick, this);
		// lzlib.SoundUtility.playSound('sound_step_introduce_mp3');
		this.enDrag(this.textAnswerGroup.$children);


	}

	private async onNextQuestionClick(): Promise<void>
	{
		this.currentLevelLabel.text = `第${(LevelBiz.instance.currentLevel + 1).toLocaleString('zh-Hans-CN-u-nu-hanidec')}節完`;
		this.currentLevelLabel.visible = true;
		await lzlib.ThreadUtility.sleep(1500);
		LevelBiz.instance.currentLevel++;
		Main.instance.gotoScene(new BackgroundScene());
	}

	private onCheckButtonClick() {
		//判断当前答案是否正确，正确执行下面代码

		this.train.play(0);

	}

	private enDrag(arr)
	{
		for (let index = 0; index < arr.length-1; index++) {
			let child = arr[index]
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false, index);
		}

		// let drop = new lzlib.Drop();
		// this.stage.addChild(drop);
		// drop.enableDrop(this.containerHome);
		// this.containerHome.addEventListener(lzlib.LzDragEvent.DROP, this.onTrashDrop, this);
	}
	
}