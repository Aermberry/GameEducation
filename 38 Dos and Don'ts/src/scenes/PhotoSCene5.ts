class PhotoSCene5 extends eui.Component implements eui.UIComponent {
	private nextDialogGroup: eui.Group;

	private nextGroup: eui.Group;
	private nextBtnGroup: eui.Group;
	private nextLabel: eui.Label


	private currentSoundChannl: egret.SoundChannel;

	private firstLabel: eui.Label;
	private secondLabel: eui.Label;
	private workerTouchEventGroup: eui.Group;
	private orangeCircleImg: eui.Image;
	private workerHeaderImg: eui.Image;

	private exitGroup: eui.Group;
	private forkIconImg: eui.Image;

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

		this.playSound();
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

	private async playSound(): Promise<void> {
		this.currentSoundChannl = (RES.getRes('photo_amy_mp3') as egret.Sound).play(0, 1);
		await ThreadUtility.sleep(2000);
		this.nextDialogGroup.visible = true;
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
		this.currentSoundChannl.stop();
		this.currentSoundChannl = (RES.getRes('photo_worker_mp3') as egret.Sound).play(0, 1);
		this.firstLabel.text = "Yes, you can.";
		this.secondLabel.text = "You can take pictures here.";
		await ThreadUtility.sleep(3000);
		this.nextGroup.visible = true;
		this.nextBtnGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, () => this.nextLabel.textColor = 0, this);
		this.nextBtnGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, () => this.nextLabel.textColor = 16766720, this);
		this.nextBtnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, () => Main.instance.gotoScene(new FlowersScene6()), this);

	}

	private mouseOut(): void {
		this.workerHeaderImg.source = 'worker_normal_png';
		this.orangeCircleImg.source = 'oragne_normal_png';
	}

	private mouseOver(): void {
		this.workerHeaderImg.source = 'worker_hover_png';
		this.orangeCircleImg.source = 'oragne_hover_png';
	}

	private touchBegin(): void {
		this.workerHeaderImg.source = 'worker_normal_png';
		this.workerHeaderImg.skewX = 1.2;
		this.workerHeaderImg.skewY = 1.2;
		this.orangeCircleImg.source = 'oragne_normal_png';
	}

	private touchEnd(): void {
		this.workerHeaderImg.source = 'worker_normal_png';
		this.orangeCircleImg.source = 'oragne_hover_png';
		this.workerHeaderImg.skewX = 1;
		this.workerHeaderImg.skewY = 1;
	}

	private stopSoundChannel(): void {
		if (this.currentSoundChannl != null) {
			this.currentSoundChannl.stop();
		}
	}

}