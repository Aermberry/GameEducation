class Question2Scene extends eui.Component implements eui.UIComponent {

	private BakeryTweenGroup: egret.tween.TweenGroup;
	private beeTweenGroup: egret.tween.TweenGroup;
	private antTweenGroup: egret.tween.TweenGroup;


	private exitButton: ImageButton;
	private nextButton: ImageButton;
	private lastButton: ImageButton;
	private nextStepButton: ImageButton;
	private numberPad: NumberPad;
	private nextbgnoall: Nextbgnoall;

	private expressionLabel: eui.Label;
	private textRunnersLabel: eui.Label;
	private honeyBeeMovieClip: eui.Image;
	private ejectBox1lmage: eui.Image;
	private reflectionlmage: eui.Image;
	private repeat: eui.Image;
	private googd: eui.Image;
	private Ant1lmage: eui.Image;
	private image10: eui.Image;
	private antBoxImage: eui.Image;
	private repeat2lmage: eui.Image;
	private totalTextlmage: eui.Label;
	private runnersGroup: eui.Group;
	private numberGroup: eui.Group;
	private sumGroup: eui.Group;
	private totalBoxGroup: eui.Group;
	private editableLabelGroup: eui.Group;
	private expression = ''; //用户输入的横式
	private inputssion = '' //答案输入模式

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.enable(this.stage);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onnNextButtonButtonClick, this);
		this.lastButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onnlastButtonButtonClick, this);
		this.nextStepButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onnNextstepButtonClick, this);
		this.numberPad.addEventListener(KeyDownEvent.EVENT, this.onnNumberPadButtonClick, this)
		this.playGame();
	}
	// 离开按钮事件
	private onExitButtonClick(): void {
		window.close();
	}
	// 下一题按钮事件
	private onnNextButtonButtonClick(): void {
		Main.instance.gotoScene(new Question3Scene());
	}
	// 上一题按钮事件
	private onnlastButtonButtonClick(): void {
		Main.instance.gotoScene(new Question1Scene());
	}
	// 点击下一步事件
	private onnNextstepButtonClick(): void {
		this.playExamples();
	}
	// 点击数字按钮事件
	private onnNumberPadButtonClick(e: KeyDownEvent): void {
		if (e.char == '' && this.expression.length > 0) {
			this.expression = this.expression.substr(0, this.expression.length - 1);
		} else {
			this.expression += e.char;
		}
		this.expressionLabel.text = this.expression;

	}
	private async playGame(): Promise<void> {
		this.BakeryTweenGroup.play(0);
		await lzlib.SoundUtility.playSound("sound2_streamsound 0_mp3")

		this.textRunnersLabel.alpha = 1;
		this.beeTweenGroup.play(0);
		await lzlib.SoundUtility.playSound("think_streamsound 0_mp3")
		this.nextStepButton.visible = true;
		this.expressionLabel.visible = true;
	}
	private async playExamples(): Promise<void> {
		if (this.expression == "140+130" || this.expression == "130+140") {
			this.totalTextlmage.alpha = 1;
			this.expressionLabel.visible = false;
			this.honeyBeeMovieClip.visible = false;
			this.ejectBox1lmage.visible = false;
			this.reflectionlmage.visible = false;
			this.repeat.visible = false;
			this.runnersGroup.visible = false;
			this.nextStepButton.visible = false;
			this.antTweenGroup.play(0);
			await lzlib.SoundUtility.playSound("add_intro_streamsound 1_mp3")
			await lzlib.SoundUtility.playSound("add_intro_streamsound 0_mp3")
			this.numberGroup.visible = true;
			this.Ant1lmage.visible = true;
			this.image10.visible = false;
			this.antBoxImage.visible = false;
			this.googd.visible = false;

			this.validateSum();
		} else {
			this.reflectionlmage.visible = false;
			this.repeat.visible = true;
			await lzlib.SoundUtility.playSound("retry_streamsound 0_mp3")
		}
	}

	private async validateSum(): Promise<void> {
		let correctArray = ['0', '7', '2'];

		for (let index = 0; index < correctArray.length; index++) {
			let correctNumber = correctArray[index];
			let inputedNumber = '';
			let editableLabel = this.editableLabelGroup.getChildAt(index) as EditableLabel;
			editableLabel.visible = true;
			while ((inputedNumber = await this.numberPad.getCharAsync()) != correctNumber) {
				console.log('输入错误');
				this.antBoxImage.visible = true;
				this.repeat2lmage.visible = true;
				await lzlib.SoundUtility.playSound("error_streamsound 0_mp3")
				this.antBoxImage.visible = false;
				this.repeat2lmage.visible = false;
			}
			editableLabel.currentState = 'view';
			editableLabel.text = inputedNumber;
		}

		this.googd.visible = true;
		this.totalBoxGroup.visible = true;
		await lzlib.SoundUtility.playSound("add_intro_streamsound 1_mp3")
		this.nextbgnoall.visible = true;
	}
}
