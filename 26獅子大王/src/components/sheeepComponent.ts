class sheeepComponent extends eui.Component implements eui.UIComponent {

	private eyeAnim: egret.tween.TweenGroup;
	private flustered: egret.tween.TweenGroup;
	private eyesAnims: egret.tween.TweenGroup;

	private sheep_active: eui.Image
	private sheep_hover: eui.Image

	private startTime: number = 0;
	private endTime: number = 0;
	private timer: number = 0;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.playLoopAnim(this.flustered)
		this.playLoopAnim(this.eyeAnim)
		this.playLoopAnim(this.eyesAnims)

		if (egret.Capabilities.isMobile) {
			this.sheep_active.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ontouchStartTime, this)
			this.sheep_active.addEventListener(egret.TouchEvent.TOUCH_END, this.ontouchEndTime, this)
		}
		else {
			this.sheep_active.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hoverStatus, this)
			this.sheep_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
		}
	}

	//TOUCH_BEGIN 開始時間
	private ontouchStartTime(): void {
		let startSeconds = new Date();
		this.startTime = startSeconds.getTime();
	}

	//TOUCH_END 結束時間
	private ontouchEndTime(): void {
		let endSeconds = new Date();
		this.endTime = endSeconds.getTime();
		this.timer = this.endTime - this.startTime;
		let touchDown: TouchDown = new TouchDown(TouchDown.EVENT)
		if (this.timer > 700 || this.timer == 700) {
			this.dispatchEvent(touchDown);
		}
		else {
			this.clickStatus();
			GameStart.optionsScene.getOptionInstance.playVoice("sound 95_mp3");
			var timer: egret.Timer = new egret.Timer(3000, 1)
			timer.addEventListener(egret.TimerEvent.TIMER, ()=>{GameStart.optionsScene.getOptionInstance.toGameScene(new sheepScene())}, this);
			timer.start();
		}
	}

	private playLoopAnim(Anim: egret.tween.TweenGroup): void {
		Anim.playLoopAsync();
	}

	private activeStatus(): void {
		this.currentState = "active";
	}

	private hoverStatus(): void {
		this.currentState = "hover";
		GameStart.optionsScene.getOptionInstance.playVoice("sound 95_mp3")
	}

	public clickStatus(): void {
		this.currentState = "click";
	}

	public disableMouse(): void {
		this.sheep_hover.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

	public ableMouse(): void {
		this.sheep_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}



}