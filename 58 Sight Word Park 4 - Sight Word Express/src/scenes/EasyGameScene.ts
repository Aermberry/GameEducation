class EasyGameScene extends eui.Component implements eui.UIComponent {
	private backBtn: eui.Image;
	private playEasyGmeTweenGroup: egret.tween.TweenGroup;
	private goodJobTweenGroup: egret.tween.TweenGroup;

	// private birdImg:eui.Image;

	private sentenceLabel: eui.Label;
	private redLightImg: eui.Image;
	private trainImg: eui.Image;
	private driverImg: eui.Image;
	private smokeImg: eui.Image;
	private cargoLeftLabel: eui.Label;
	private greenLightImg: eui.Image;

	private trainEnterTweenGroup: egret.tween.TweenGroup;
	private trainAwayTweenGroup: egret.tween.TweenGroup;
	private firstBoxTweenGroup: egret.tween.TweenGroup;
	private secondBoxTweenGroup: egret.tween.TweenGroup;
	private thirdBoxTweenGroup: egret.tween.TweenGroup;
	private questionBiz: QuestionBiz;

	//答对或答错提示下拉框
	private dropDownBoxGroup: eui.Group;
	private dropDownBoxMovieClip: egret.MovieClip;
	private dropDownBoxFactory: egret.MovieClipDataFactory;

	private carMovieClipPlayer: MovieClipPlayer;//火车文件

	//cargo
	private cargoGroup: eui.Group;

	private currentQuestion: Question;
	private cargoLeft = 0;

	private currentBoxSelected: number;
	private boxGroupX: number;

	public constructor(questionRepo: IQuestionRepository) {
		super();
		this.questionBiz = new QuestionBiz(questionRepo);
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.enable(this.stage);
		mouse.setButtonMode(this.backBtn, true);

		// this.birdImg.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.birdImg.source= 'bird_normal_png', this);
		// this.birdImg.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.birdImg.source= 'bird_hover_png', this);


		for (let index = 0; index < this.cargoGroup.numChildren; index++) {
			let cargo = this.cargoGroup.getChildAt(index) as eui.Group;
			let cargoDropdownFactory = new egret.MovieClipDataFactory(RES.getRes('box_drop_down_json'), RES.getRes('box_drop_down_png'));
			let cargoDropdownMovieClip = new egret.MovieClip(cargoDropdownFactory.generateMovieClipData('box_drop_down'));
			cargoDropdownMovieClip.name = 'movie';
			cargoDropdownMovieClip.gotoAndPlay(3);
			cargoDropdownMovieClip.gotoAndStop(3);
			cargo.addChild(cargoDropdownMovieClip);
			cargo.swapChildren(cargoDropdownMovieClip, cargo.getChildByName('label'));
			cargo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPackSelect, this);
			cargo.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onBoxCargoOver, this);
			cargo.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onBoxCargoOut, this);
			mouse.setButtonMode(cargo, true);
		}
		this.cargoAddClick();

		this.startGame();
		this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goStartScene, this);

	}

	private onBoxCargoOver(e: egret.TouchEvent): void
	{
		let boxMovieClip = (e.target as eui.Group).$children[0] as egret.MovieClip;
		boxMovieClip.gotoAndStop(2);
	}

	private onBoxCargoOut(e: egret.TouchEvent): void
	{
		let boxMovieClip = (e.target as eui.Group).$children[0] as egret.MovieClip;
		boxMovieClip.gotoAndStop(3);
	}

	private cargoRemoviClick(): void {
		for (let index = 0; index < this.cargoGroup.numChildren; index++) {
			let cargo = this.cargoGroup.getChildAt(index) as eui.Group;
			cargo.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onPackSelect, this)
		}
	}

	private cargoAddClick(): void {
		for (let index = 0; index < this.cargoGroup.numChildren; index++) {
			let cargo = this.cargoGroup.getChildAt(index) as eui.Group;
			cargo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPackSelect, this);
		}
	}

	// 是否启用鼠标事件
	private set enableBoxCargoMouse(bool: boolean)
	{
		if(bool) {
			for (let index = 0; index < this.cargoGroup.numChildren; index++) {
				let cargo = this.cargoGroup.getChildAt(index) as eui.Group;
				cargo.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onBoxCargoOver, this);
				cargo.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onBoxCargoOut, this);
			}
		}else {
			for (let index = 0; index < this.cargoGroup.numChildren; index++) {
				let cargo = this.cargoGroup.getChildAt(index) as eui.Group;
				cargo.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.onBoxCargoOver, this);
				cargo.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.onBoxCargoOut, this);
			}
		}
	}

	private goStartScene() {
		Main.instance.gotoScene(new StartScene());
	}

	public async startGame(): Promise<void> {
		this.cargoLeft = 20;
		await this.playEasyGmeTweenGroup.playOnceAsync();
		// this.birdImg.visible = true;
		this.redLightImg.visible = true;
		// this.trainImg.visible = true;
		// this.driverImg.visible = true;
		// this.smokeImg.visible = true;

		this.nextCargo();
	}

	private async nextCargo(): Promise<void> {
		this.cargoLeftLabel.text = this.cargoLeft.toString() + "：train(s) left ";
		this.resetCargoMovie();
		this.currentQuestion = this.questionBiz.random();
		this.sentenceLabel.text = '"' + this.currentQuestion.sentence + '"';
		await this.trainEnterTweenGroup.playOnceAsync();
		this.carMovieClipPlayer.setMovie = 'car_stop';
		this.currentQuestion.options.shuffle();

		for (let index = 0; index < this.currentQuestion.options.length; index++) {
			this.setCargoLabel(index, this.currentQuestion.options[index]);
		}
	}

	private resetCargoMovie(): void {
		for (let index = 0; index < this.cargoGroup.numChildren; index++) {
			this.getCargoDropMovie(index).gotoAndStop(0);
		}
	}

	private getCargoDropMovie(cargoIndex: number): egret.MovieClip {
		let cargo = this.cargoGroup.getChildAt(cargoIndex) as eui.Group;
		return cargo.getChildByName('movie') as egret.MovieClip;
	}

	private setCargoLabel(cargoIndex: number, text: string): void {
		let cargo = this.cargoGroup.getChildAt(cargoIndex) as eui.Group;
		let label = cargo.getChildByName('label') as eui.Label;
		label.text = text;
	}

	private async onPackSelect(e: egret.TouchEvent): Promise<void> {
		this.cargoRemoviClick();
		this.enableBoxCargoMouse = false;
		let cargoIndex = this.cargoGroup.getChildIndex(e.target as egret.DisplayObject);
		this.currentBoxSelected = cargoIndex;
		if (this.currentQuestion.options[cargoIndex] == this.currentQuestion.answer) {
			this.goodJobTweenGroup.play(0);
			this.playCorrectAnimation();
			this.setCargoLabel(cargoIndex, '');
			await this.playCargoDropdownMovie(cargoIndex);
			// (RES.getRes('wuwu_mp3') as egret.Sound).play(0, 1);
			lzlib.SoundUtility.playSound("wuwu_mp3");
			this.boxMove();
			await this.trainAwayTweenGroup.playOnceAsync();
			this.carMovieClipPlayer.setMovie = 'car_move'
			this.cargoLeft--;
			this.boxMoveToNormalPlace();

			if (this.cargoLeft > 0) {
				this.nextCargo();
			} else {
				this.addChild(new ResultScene(this));
			}
		} else {
			// (RES.getRes('diao_mp3') as egret.Sound).play(0, 1);
			lzlib.SoundUtility.playSound("diao_mp3");
			this.playWrongAnimation();
		}

		this.cargoAddClick();
		this.enableBoxCargoMouse = true;
	}

	/** 播放用户选择成功字母的动画 */
	public playCorrectAnimation(): void {
		this.dropDownBoxFactory = new egret.MovieClipDataFactory(RES.getRes('right_drop_down_box_json'), RES.getRes('right_drop_down_box_png'));
		this.dropDownBoxMovieClip = new egret.MovieClip(this.dropDownBoxFactory.generateMovieClipData('right_drop_down_box'));
		this.dropDownBoxGroup.addChild(this.dropDownBoxMovieClip);
		this.dropDownBoxMovieClip.play(0);
		this.goodJobTweenGroup.play(0);
	}

	/** 播放用户选择错误字母的动画 */
	public playWrongAnimation(): void {
		this.dropDownBoxFactory = new egret.MovieClipDataFactory(RES.getRes('false_drop_down_box_json'), RES.getRes('false_drop_down_box_png'));
		this.dropDownBoxMovieClip = new egret.MovieClip(this.dropDownBoxFactory.generateMovieClipData('false_drop_down_box'));
		this.dropDownBoxGroup.addChild(this.dropDownBoxMovieClip);
		this.dropDownBoxMovieClip.play(0);
		(RES.getRes('diao_mp3') as egret.Sound).play(0, 1);
	}

	/** 播放货物掉下的动画 */
	private async playCargoDropdownMovie(cargoIndex: number): Promise<void> {
		this.greenLightImg.visible = true;
		this.redLightImg.source = "red_lights_png";
		(RES.getRes('dingding_mp3') as egret.Sound).play(0, 1);

		//设置正确的完整句子
		this.sentenceLabel.text = this.currentQuestion.fullSentence;

		await this.getCargoDropMovie(cargoIndex).playAsync();

		this.greenLightImg.visible = false;
		this.redLightImg.source = "red_light_png";
	}

	/** 箱子移动 */
	private async boxMove(): Promise<void>
	{
		let boxGroup = this.cargoGroup.getChildAt(this.currentBoxSelected);
		this.boxGroupX = boxGroup.x;
		let tw = egret.Tween.get(boxGroup);
		tw.to({
			x: this.boxGroupX - this.boxGroupX - boxGroup.width
		}, 500);
	}


	/** 箱子移动回正常位置 */
	private boxMoveToNormalPlace(): void
	{
		let boxGroup = this.cargoGroup.getChildAt(this.currentBoxSelected);
		let tw = egret.Tween.get(boxGroup);
		tw.to({
			x: this.boxGroupX
		}, 500);
	}

}