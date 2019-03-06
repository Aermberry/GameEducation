class BirdScene7 extends eui.Component implements eui.UIComponent {
	private workerFirstImg: eui.Image;

	private nextDialogGroup: eui.Group;

	// private currentSoundChannl: egret.SoundChannel;

	private nextGroup: eui.Group;
	private nextLabel: eui.Label;
	private nextBtnGroup: eui.Group;

	private exitGroup: eui.Group;
	private forkIconImg: eui.Image;

	private firstLabel: eui.Label;
	private secondLabel: eui.Label;
	private thirdLabel: eui.Label;
	private wordkerTouchImg: eui.Image;
	private lightTweenGroup: egret.tween.TweenGroup;
	private purpleCircleImg: eui.Image;
	private workerTouchEventGroup: eui.Group;

	private fram_exitTips: eui.Group;
	private Label_true: eui.Label;
	private Label_false: eui.Label;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.enable(this.stage);
		mouse.setButtonMode(this.exitGroup, true);
		mouse.setButtonMode(this.nextBtnGroup, true);

		this.firstDialog();
		this.exitGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showExitTips, this);
		this.exitGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, () => this.forkIconImg.alpha = 0.3, this);
		this.exitGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, () => this.forkIconImg.alpha = 1, this);
		this.Label_true.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeCurrentWindow, this);
		this.Label_false.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeExitTipsFrame, this);
	}

	private showExitTips(): void {
		this.fram_exitTips.visible = true;
	}

	private closeCurrentWindow() {
		window.close();
	}

	private closeExitTipsFrame() {
		this.fram_exitTips.visible = false;
	}

	private async firstDialog(): Promise<void> {
		// this.currentSoundChannl = (RES.getRes('can_i_feed_mp3') as egret.Sound).play(0, 1);
		// await ThreadUtility.sleep(2000);
		await lzlib.SoundUtility.playSound("can_i_feed_mp3");
		this.nextDialogGroup.visible = true;
		this.workerFirstImg.visible = false;
		this.initWorkerTouchEvent();
	}
	private initWorkerTouchEvent(): void {
		this.workerTouchEventGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.mouseOut, this);
		this.workerTouchEventGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.mouseOver, this);
		this.workerTouchEventGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
		this.workerTouchEventGroup.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
		this.workerTouchEventGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextDialog, this);
	}

	private async nextDialog(): Promise<void> {
		// this.currentSoundChannl.stop();
		// this.currentSoundChannl = (RES.getRes('can_not_feed_mp3') as egret.Sound).play(0, 1);
		this.firstLabel.text = "No, you can't.";
		this.secondLabel.text = "You can't feed";
		this.thirdLabel.text = "the birds here.";
		await lzlib.SoundUtility.playSound("can_not_feed_mp3");
		// await ThreadUtility.sleep(6200);
		this.nextGroup.visible = true;
		this.nextBtnGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, () => this.nextLabel.textColor = 0, this);
		this.nextBtnGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, () => this.nextLabel.textColor = 16766720, this);
		this.nextBtnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, () => Main.instance.gotoScene(new BicycleScene8()), this);

	}

	private mouseOut(): void {
		this.wordkerTouchImg.source = 'worker_normal_png';
		this.purpleCircleImg.source = 'pruplr_circle_png';
	}

	private mouseOver(): void {
		this.wordkerTouchImg.source = 'worker_hover_png';
		this.purpleCircleImg.source = 'pruplr_circle_png';
		this.purpleCircleImg.alpha = 0.5;
	}

	private touchBegin(): void {
		this.wordkerTouchImg.source = 'worker_hover_png';
		this.wordkerTouchImg.skewX = 1.2;
		this.wordkerTouchImg.skewY = 1.2;
		this.purpleCircleImg.source = 'purple_circle_png';
	}

	private touchEnd(): void {
		this.wordkerTouchImg.source = 'worker_hover_png';
		this.purpleCircleImg.source = 'pruplr_circle_png';

		this.wordkerTouchImg.skewX = 1;
		this.wordkerTouchImg.skewY = 1;
	}



	private stopSoundChannel(): void {
		// if (this.currentSoundChannl != null) {
		// 	this.currentSoundChannl.stop();
		// }
		lzlib.SoundUtility.stopCurrentSound();
	}

}