class QuestionScene extends eui.Component implements  eui.UIComponent {
	
	private likeImage: eui.Image;
	private optionsGroup: eui.Group;
	private cloudAlertGroup: eui.Group;
	private answerLabel: eui.Label;
	private answerHornComponent: HornComponent;
	private okButtonComponent: ButtonComponent;
	private continueButtonComponent: ButtonComponent;
	
	private currentRadioComponent: RadioComponent;

	private cloudAlertAnimation: egret.tween.TweenGroup;

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
		await this.showCloudAlert();
		await this.playIntroductionMP3();
		this.showOption([1,2,3,4]);
		this.setAnswer(2);
		this.handleRadioComponent();
		this.continueButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onContinueClick, this);
	}

	private onContinueClick(e: egret.TouchEvent): void
	{

	}

	public showLikeImage(): void
	{
		this.likeImage.visible = true;
	}

	public async showCloudAlert(): Promise<void>
	{
		this.cloudAlertGroup.visible = true;
		this.cloudAlertAnimation.play();
		lzlib.SoundUtility.playSound('streamsound 27_mp3');
		await lzlib.ThreadUtility.sleep(2600);
		this.cloudAlertGroup.visible = false;
	}

	public showCorrect(): void
	{
		this.showLikeImage();
		this.answerLabel.visible = true;
	}

	public showOption(arr: any[]): void
	{
		let index = 0;
		let obj = null;
		this.optionsGroup.$children.map((group) => {
			obj = Repository.questions[index];
			let movie = (group.$children[0] as MovieClipPlayer);
			let horn = (group.$children[1] as HornComponent);
			horn.soundPath = obj.sound;
			movie.dataSet = obj.picture + '_json';
			movie.texture = obj.picture + '_png';
			movie.movieClipName = obj.picture;
			index++;
		})
	}

	public async playIntroductionMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound1_7_mp3');
	}

	public setAnswer(index: number): void
	{
		let obj = Repository.questions[index];
		this.answerLabel.text = obj.sentence;
		this.answerHornComponent.soundPath = obj.sound;
	}

	private handleRadioComponent(): void
	{
		this.optionsGroup.$children.map((group) => {
			group.$children[2].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRadioClick, this);
		})
	}

	private onRadioClick(e: egret.TouchEvent): void
	{
		this.currentRadioComponent && (this.currentRadioComponent.isSelect = false);
		this.currentRadioComponent = (e.target.parent as RadioComponent);
	}
	
}