class Question1Scene extends eui.Component implements eui.UIComponent {

	private questionLabel: eui.Label;
	private titleLabel: eui.Label;
	private expressionLabel: eui.Label;
	private answerLabel: eui.Label;
	private tipLabel: eui.Label;
	private bestImage: eui.Image;
	private woodcolorImage: eui.Image;
	private watercolourImage: eui.Image;

	private nextQuestionButton: Ui.NextQuestion;
	private nextStepButton: ui.nextStepButton;
	private numberPad: NumberPad;
	private ant: Ui.MovieClipPlayer;
	private Beer: Beer;

	private ColorAnimation: egret.tween.TweenGroup;
	private Beers: egret.tween.TweenGroup;
	private worldsGroup: eui.Group;
	private arithmetic: eui.Group;
	private editableLabelGroup:eui.Group;
	private totalGroup:eui.Group;

	private expression = '';//用户输入的模式

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {

		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.enable(this.stage);

		this.playBackMusic();
		this.DisplayAnimation();

		this.nextQuestionButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionPage, this)
		this.numberPad.addEventListener(KeyDownEvent.EVENT, this.numberPadButtonClick, this);
		this.nextStepButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.verification, this);
	}

	//数字按钮事件
	private numberPadButtonClick(e: KeyDownEvent): void {
		if (e.char == '' && this.expression.length > 0) {
			this.expression = this.expression.substr(0, this.expression.length - 1);
		} else {
			this.expression += e.char;
		}
		this.expressionLabel.text = this.expression;
	}

	// 出场动画
	private async DisplayAnimation(): Promise<void> {
		await lzlib.ThreadUtility.sleep(500);
		this.questionLabel.visible = true;
		this.ColorAnimation.play(0);
	}

	// BGM
	private async playBackMusic(): Promise<void> {
		await lzlib.SoundUtility.playSound("scene01_mp3");
		this.titleLabel.visible = true;
		lzlib.ThreadUtility.sleep(1000);
		lzlib.SoundUtility.playSound("think_mp3");
		this.Beers.play(0);
		setTimeout(() => { this.worldsGroup.visible = true; }, 1000);
		await lzlib.ThreadUtility.sleep(3000);
		this.nextStepButton.visible = true;
		this.expressionLabel.visible = true;
	}

	//下一题
	private onNextQuestionPage(): void {
		Base.gotoNextScene(new Question2Scene);
	}

	// 下一步
	private async verification(): Promise<void> {
		const verification = this.expression,
			inputssion = "35元4角+14元2角"
		if (verification == inputssion) {
			this.watercolourImage.visible = false;
			this.woodcolorImage.visible = false;
			this.nextStepButton.visible = false;
			this.Beer.visible = false;
			this.worldsGroup.visible = false;
			this.expressionLabel.visible=false;
			 lzlib.SoundUtility.playSound("streamsound_1_mp3").then(async () => {
				this.ant.play();
			await lzlib.SoundUtility.playSound("streamsound_0_mp3");
			}).then(() => {
				this.bestImage.visible = false;
			}).then(() => {
				this.arithmetic.visible = true;
				this.validateSum();
			});
			this.answerLabel.visible = true;
			this.bestImage.visible = true;
		}
		else {
			this.worldsGroup.visible == false && (this.worldsGroup.visible = true);
			this.tipLabel.text = "想清楚，再試一次！";
			lzlib.SoundUtility.playSound("retry_mp3").then(() => {
				this.worldsGroup.visible = false
			});
		}
	}

	private async validateSum(): Promise<void>
	{
		let correctArray = ['6', '9', '4'];

		for (let index = 0; index < correctArray.length; index++) {
			let correctNumber = correctArray[index];
			let inputedNumber = '';
			let editableLabel = this.editableLabelGroup.getChildAt(index) as EditableLabel;
			editableLabel.visible = true;
			while ((inputedNumber = await this.numberPad.getCharAsync()) != correctNumber) {
				this.worldsGroup.visible = true;
				await lzlib.SoundUtility.playSound("streamsound_3_mp3")
				this.worldsGroup.visible = false;
			}
			editableLabel.currentState = 'view';
			editableLabel.text = inputedNumber;
		}

		this.bestImage.visible = true;
		this.totalGroup.visible = true;
		await lzlib.SoundUtility.playSound("streamsound_1_mp3")
	}
}