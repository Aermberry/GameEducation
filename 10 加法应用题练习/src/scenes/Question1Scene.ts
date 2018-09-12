class Question1Scene extends eui.Component implements  eui.UIComponent {

	private runners_motion1: egret.tween.TweenGroup;
	private runners_motion2: egret.tween.TweenGroup;
	private runners_motion3: egret.tween.TweenGroup;


	private exitButton: ImageButton;
	private nextButton: ImageButton;
	private nextStepButton:ImageButton;
	private numberPad: NumberPad;
	
	private expressionLabel: eui.Label;
	private text_runners: eui.Label;
	private image2:eui.Image;
	private image3:eui.Image;
	private image4:eui.Image;
	private image5:eui.Image;
	private image6:eui.Image;
	private image9:eui.Image;
	private image10:eui.Image;
	private total_text:eui.Label;
	private runners_box:eui.Group;
	private number_box:eui.Group;
	private sumGroup: eui.Group;
	private editableLabelGroup: eui.Group;
	private expression = ''; //用户输入的横式
	private inputssion = '' //答案输入模式

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onExitButtonClick,this);
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onnNextButtonButtonClick,this);
		this.nextStepButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onnNextstepButtonClick,this);
		this.numberPad.addEventListener(KeyDownEvent.EVENT,this.onnNumberPadButtonClick,this)
		this.playGame();
		this.image5.visible = false;
		this.total_text.visible = false;
	}
	// 离开按钮事件
	private onExitButtonClick (): void{
		console.log(123)
	}
	// 下一题按钮事件
	private onnNextButtonButtonClick (): void{
		console.log(123)
	}
	// 点击下一步事件
	private onnNextstepButtonClick () : void{
		this.playExamples();
	}
	// 点击数字按钮事件
	private onnNumberPadButtonClick (e:KeyDownEvent) : void{
		if (e.char == '' && this.expression.length > 0) {
			this.expression = this.expression.substr(0, this.expression.length - 1);
		} else {
			this.expression += e.char;
		}
		this.expressionLabel.text =  this.expression;

	}
	private async playGame(): Promise<void> {
		this. runners_motion1.play(0);
		this.nextStepButton.visible = false;
		this.expressionLabel.visible = false;
		this.text_runners.visible = false;
		await lzlib.SoundUtility.playSound("sound1_streamsound 0_mp3")

		this.text_runners.visible = true;
		this. runners_motion2.play(0);
		await lzlib.SoundUtility.playSound("think_streamsound 0_mp3")
		this.nextStepButton.visible = true;
		this.expressionLabel.visible = true;
	}
	private async playExamples():Promise<void> {
		if(this.expression == "214+123" || this.expression == "123+214"){
			this.total_text.visible = true;
			this.expressionLabel.visible = false;
			this.image2.visible = false;
			this.image3.visible = false;
			this.image4.visible = false;
			this.image5.visible = false;
			this.runners_box.visible = false;
			this.nextStepButton.visible = false;
			this. runners_motion3.play(0);
			await lzlib.SoundUtility.playSound("add_intro_streamsound 1_mp3")
			await lzlib.SoundUtility.playSound("add_intro_streamsound 0_mp3")
			this.number_box.visible = true;
			this.image6.visible = false;
			this.image9.visible = false;
			this.image10.visible = false;
		
			this.validateSum();
		}else{
			this.image4.visible = false;
			this.image5.visible = true;
			await lzlib.SoundUtility.playSound("retry_streamsound 0_mp3")
			this.image5.visible = false;
		}
	}

	private async validateSum(): Promise<void>
	{
		let correctArray = ['7', '3', '3'];

		for (let index = 0; index < correctArray.length; index++) {
			let correctNumber = correctArray[index];
			let inputedNumber = '';
			let editableLabel = this.editableLabelGroup.getChildAt(index) as EditableLabel;
			editableLabel.visible = true;
			while ((inputedNumber = await this.numberPad.getCharAsync()) != correctNumber) {
				console.log('输入错误');
			}
			editableLabel.currentState = 'view';
			editableLabel.text = inputedNumber;
		}

		this.image6.alpha = 1;
	}
}