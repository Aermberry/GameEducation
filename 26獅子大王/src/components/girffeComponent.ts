class girffeComponent extends eui.Component implements eui.UIComponent {

	private eye: egret.tween.TweenGroup;
	private eyeSmell: egret.tween.TweenGroup;
	private flustedAnim: egret.tween.TweenGroup;
	private giraffe_active: eui.Image;
	private giraffe_hover: eui.Image;

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

		this.eye.playLoopAsync();
		this.eyeSmell.playLoopAsync();
		this.flustedAnim.playLoopAsync();

		if (egret.Capabilities.isMobile) {
			this.giraffe_active.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ontouchStartTime, this)
			this.giraffe_active.addEventListener(egret.TouchEvent.TOUCH_END, this.ontouchEndTime, this)
		}
		else {
			this.giraffe_active.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hoverStatus, this)
			this.giraffe_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
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
			GameStart.optionsScene.getOptionInstance.onPauseVoice()
			GameStart.optionsScene.getOptionInstance.playVoice("sound 69_mp3");
			var timer: egret.Timer = new egret.Timer(3000, 1)
			timer.addEventListener(egret.TimerEvent.TIMER, ()=>{GameStart.optionsScene.getOptionInstance.toGameScene(new giraffeScene())}, this);
			timer.start();
		}

	}

	private activeStatus(): void {
		this.currentState = "active";
	}

	private hoverStatus(): void {
		this.currentState = "hover";
		GameStart.optionsScene.getOptionInstance.playVoice("sound 69_mp3");
	}

	public clickStatus(): void {
		this.currentState = "click";
	}

	public disableMouse(): void {
		this.giraffe_hover.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

	public ableMouse(): void {
		this.giraffe_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}



}