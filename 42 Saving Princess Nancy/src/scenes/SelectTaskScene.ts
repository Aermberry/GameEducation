class SelectTaskScene extends eui.Component implements  eui.UIComponent {
	
	private task1Label: eui.Label;
	private task2Label: eui.Label;
	private maskRect: eui.Rect;

	private maskAnimation: egret.tween.TweenGroup;
	private finishMaskAnimation: egret.tween.TweenGroup;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated(): Promise<void>
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		mouse.setButtonMode(this.task1Label, true);
		mouse.setButtonMode(this.task2Label, true);
		lzlib.SoundUtility.playSound('select_task_mp3');
		await this.playMaskAnimation();
		this.maskRect.visible = false;
		this.task1Label.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onTask1Over, this);
		this.task2Label.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onTask2Over, this);
		this.task1Label.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onTask1Out, this);
		this.task2Label.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onTask2Out, this);
		this.task1Label.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTask1Begin, this);
		this.task2Label.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTask2Begin, this);
		this.task1Label.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTask1Click, this);
		this.task2Label.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTask2Click, this);
		this.task1Label.addEventListener(egret.TouchEvent.TOUCH_END, this.onTask1End, this);
		this.task2Label.addEventListener(egret.TouchEvent.TOUCH_END, this.onTask2End, this);
	}

	private onTask1Begin(): void
	{
		this.task1Label.textColor = 0xf33b3d;
	}

	private onTask2Begin(): void
	{
		this.task2Label.textColor = 0xf33b3d;
	}

	private onTask1Over(): void
	{
		this.task1Label.textColor = 0xc38f44;
	}

	private onTask2Over(): void
	{
		this.task2Label.textColor = 0xc38f44;
	}

	private onTask1Out(): void
	{
		this.task1Label.textColor = 0x7E512F;
	}

	private onTask2Out(): void
	{
		this.task2Label.textColor = 0x7E512F;
	}

	private onTask1End(): void
	{
		this.task1Label.textColor = 0x7E512F;
	}

	private onTask2End(): void
	{
		this.task2Label.textColor = 0x7E512F;
	}

	private async onTask1Click(): Promise<void>
	{
		await this.playMaskAnimation(true);
		Main.instance.gotoScene(new Task1IntroductionScene());
	}

	private async onTask2Click(): Promise<void>
	{
		await this.playMaskAnimation(true);
		Main.instance.gotoScene(new Task2IntroductionScene());
	}

	private async playMaskAnimation(isFinish = false): Promise<void>
	{
		this.maskRect.visible = true;
		if(isFinish){
			await this.finishMaskAnimation.playOnceAsync();
		}else{
			await this.maskAnimation.playOnceAsync();
		}
		
		this.maskRect.visible = false;
	}
	
}