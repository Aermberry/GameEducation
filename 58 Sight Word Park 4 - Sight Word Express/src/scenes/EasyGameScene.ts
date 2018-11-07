class EasyGameScene extends eui.Component implements  eui.UIComponent {
    private backBtn:eui.Image;
	private playEasyGmeTweenGroup:egret.tween.TweenGroup;
	private goodJobTweenGroup:egret.tween.TweenGroup;

	private birdImg:eui.Image;

	private sentenceLabel:eui.Label;
	private redLightImg:eui.Image;
	private trainImg:eui.Image;
	private driverImg:eui.Image;
	private smokeImg:eui.Image;
	private cargoLeftLabel: eui.Label;
	private greenLightImg:eui.Image;

	private trainEnterTweenGroup:egret.tween.TweenGroup;
	private trainAwayTweenGroup:egret.tween.TweenGroup;
	private firstBoxTweenGroup:egret.tween.TweenGroup;
	private secondBoxTweenGroup:egret.tween.TweenGroup;
	private thirdBoxTweenGroup:egret.tween.TweenGroup;
	private questionBiz: QuestionBiz;

	//答对或答错提示下拉框
    private dropDownBoxGroup:eui.Group;
    private dropDownBoxMovieClip:egret.MovieClip;
    private dropDownBoxFactory:egret.MovieClipDataFactory;

	//cargo
	private cargoGroup: eui.Group;

	private currentQuestion: Question;
	private cargoLeft = 0;
    
	public constructor(questionRepo: IQuestionRepository) 
	{
		super();
		this.questionBiz = new QuestionBiz(questionRepo);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
     
	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		mouse.setButtonMode(this.backBtn, true);

		this.birdImg.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.birdImg.source= 'bird_normal_png', this);
		this.birdImg.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.birdImg.source= 'bird_hover_png', this);


		for (let index = 0; index < this.cargoGroup.numChildren; index++) {
			let cargo = this.cargoGroup.getChildAt(index) as eui.Group;
			let cargoDropdownFactory = new egret.MovieClipDataFactory( RES.getRes('box_drop_down_json'), RES.getRes('box_drop_down_png'));
        	let cargoDropdownMovieClip = new egret.MovieClip(cargoDropdownFactory.generateMovieClipData('box_drop_down'));
			cargoDropdownMovieClip.name = 'movie';
			cargo.addChild(cargoDropdownMovieClip);
			cargo.swapChildren(cargoDropdownMovieClip, cargo.getChildByName('label'));
			cargo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPackSelect, this);
			mouse.setButtonMode(cargo, true);
		}

		this.startGame();
		this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goStartScene, this);
		
	}

	private goStartScene() 
	{
		Main.instance.gotoScene(new StartScene());
	}
	
	public async startGame():Promise<void>
	{
		this.cargoLeft = 20;
    	await this.playEasyGmeTweenGroup.playOnceAsync();
		this.birdImg.visible = true;
		this.redLightImg.visible= true;
		this.trainImg.visible = true;
	    this.driverImg.visible = true;
		this.smokeImg.visible = true;

		this.nextCargo();
	}

	private async nextCargo(): Promise<void>
	{
		this.cargoLeftLabel.text =  this.cargoLeft.toString() + "：trains Left ";
		this.resetCargoMovie();
		await this.trainEnterTweenGroup.playOnceAsync();
		this.currentQuestion = this.questionBiz.random();
		this.sentenceLabel.text = this.currentQuestion.sentence;
		this.currentQuestion.options.shuffle();
		
		for (let index = 0; index < this.currentQuestion.options.length; index++) {
			this.setCargoLabel(index, this.currentQuestion.options[index]);
		}
	}

	private resetCargoMovie(): void
	{
		for (let index = 0; index < this.cargoGroup.numChildren; index++) {
			this.getCargoDropMovie(index).gotoAndStop(0);
		}
	}

	private getCargoDropMovie(cargoIndex: number): egret.MovieClip
	{
		let cargo = this.cargoGroup.getChildAt(cargoIndex) as eui.Group;
		return cargo.getChildByName('movie') as egret.MovieClip;
	}

	private setCargoLabel(cargoIndex: number, text: string): void
	{
		let cargo = this.cargoGroup.getChildAt(cargoIndex) as eui.Group;
		let label = cargo.getChildByName('label') as eui.Label;
		label.text = text;
	}

	private async onPackSelect(e: egret.TouchEvent): Promise<void>
	{
		let cargoIndex = this.cargoGroup.getChildIndex(e.target as egret.DisplayObject);
		if (this.currentQuestion.options[cargoIndex] == this.currentQuestion.answer) {
			this.goodJobTweenGroup.play(0);
			this.playCorrectAnimation();
			this.setCargoLabel(cargoIndex, '');
			await this.playCargoDropdownMovie(cargoIndex);
			(RES.getRes('wuwu_mp3') as egret.Sound).play(0, 1);
			await this.trainAwayTweenGroup.playOnceAsync();
			this.cargoLeft--;

			if (this.cargoLeft > 0) {
				this.nextCargo();
			} else {
				this.addChild(new ResultScene(this));
			}
		} else {
			(RES.getRes('diao_mp3') as egret.Sound).play(0, 1);
			this.playWrongAnimation();
		}
	}

	/** 播放用户选择成功字母的动画 */
    public playCorrectAnimation(): void
    {
        this.dropDownBoxFactory = new egret.MovieClipDataFactory( RES.getRes('right_drop_down_box_json'), RES.getRes('right_drop_down_box_png'));
        this.dropDownBoxMovieClip = new egret.MovieClip(this.dropDownBoxFactory.generateMovieClipData('right_drop_down_box'));
        this.dropDownBoxGroup.addChild(this.dropDownBoxMovieClip);
        this.dropDownBoxMovieClip.play(0); 
        this.goodJobTweenGroup.play(0);
    }

    /** 播放用户选择错误字母的动画 */
    public playWrongAnimation(): void
    {
        this.dropDownBoxFactory = new egret.MovieClipDataFactory( RES.getRes('false_drop_down_box_json'), RES.getRes('false_drop_down_box_png'));
        this.dropDownBoxMovieClip = new egret.MovieClip(this.dropDownBoxFactory.generateMovieClipData('false_drop_down_box'));
        this.dropDownBoxGroup.addChild(this.dropDownBoxMovieClip);
        this.dropDownBoxMovieClip.play(0); 
        (RES.getRes('diao_mp3') as egret.Sound).play(0, 1);
    }

	/** 播放货物掉下的动画 */
	private async playCargoDropdownMovie(cargoIndex: number): Promise<void>
	{
		this.greenLightImg.visible = true;
        (RES.getRes('dingding_mp3') as egret.Sound).play(0, 1);
        await this.getCargoDropMovie(cargoIndex).playAsync();
		this.greenLightImg.visible = false;
	}
}