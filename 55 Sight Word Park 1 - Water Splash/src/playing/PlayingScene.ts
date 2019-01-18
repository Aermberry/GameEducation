class PlayingScene extends eui.Component implements  eui.UIComponent, IPlayingView {
    private shootBtnImg:eui.Image;
	private resetBtnImg:eui.Image;

	private hintsBtnImg:eui.Image;
	private hideWordImg:eui.Image;
	private nextPuzzleImg:eui.Image;
    private backImg:eui.Image;
	private puzzle: Puzzle;
	private wordGroup: eui.Group;

	private readyGoTweenGroup: egret.tween.TweenGroup;
	private goodJobTweenGroup: egret.tween.TweenGroup;
	private completeGameTweenGroup: egret.tween.TweenGroup;
	private tipsTweenGroup:egret.tween.TweenGroup;

	private tipsText:eui.Label;

	private states = 0; //用户点击hideWordImg的次数
	
	private presenter = new PlayingPresenter();
	private difficulty: Difficulty;

	public constructor(difficulty: Difficulty) {
		super();
		this.difficulty = difficulty;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		
		this.initRestAndShootBtn();
		this.initNextPuzzleButton();
		//this.initHintsBtn();
		this.initBackBtn();
		this.initHideWordSBtn();

		this.presenter.loadView(this, this.difficulty);		
	}

	private initRestAndShootBtn():void
	{

		this.resetBtnImg.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.resetBtnImg.source="confirm_normal_png", this);
		this.resetBtnImg.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.resetBtnImg.source="confirm_hover_png", this);
		this.resetBtnImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onResetButtonClick, this.presenter);
	    
        this.shootBtnImg.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.shootBtnImg.source="confirm_normal_png", this);
        this.shootBtnImg.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.shootBtnImg.source="confirm_hover_png", this);
		this.shootBtnImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onShootButtonClick, this.presenter);
		this.hintsBtnImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onHintsBtnImgClick,this.presenter);
    }

	private initBackBtn():void
	{
		this.backImg.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new SelectDiffcultScene()), this);
	}

	private initHideWordSBtn():void
	{
		this.hideWordImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideWordTouchEvent, this);
	}

	private initNextPuzzleButton(): void
	{
		mouse.setButtonMode(this.nextPuzzleImg, true);
		this.nextPuzzleImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.nextPuzzleButtonClick, this.presenter);
	}

	private hideWordTouchEvent():void
	{
       this.states++;
	   if(this.states >1){
		   this.states = 0;
	   }
	   if(this.states == 0){
			this.hideWordImg.source = "hide_word_png"
			this.wordGroup.visible = true;
		}else if(this.states == 1){
			this.hideWordImg.source = "show_word_png"
			this.wordGroup.visible = false;
		}
	}

	public async tipsanswer(answerIndex:number,words: string[]): Promise <void>
	{
		
		this.tipsText.text = "HINT:" + words[answerIndex];
		// this.tipsTweenGroup.play(0);
		await lzlib.ThreadUtility.sleep(4000);
		this.tipsText.text = 'Please help stop the fire!';
	};

	public onRestartButtonClick(): void
	{
		this.presenter.onRestartButtonClick();
	}

	public set words(value: string[])
	{
		for (let index = 0; index < value.length; index++) {
			(this.wordGroup.getChildAt(index) as RedLineLabel).text = value[index];
		}
	}

	public set puzzleCharacters(value: string[][])
	{
		this.puzzle.characters = value;
	}

	/** 用户本次选中的字母，不包括之前选中的字母 */
	public get currentSelectedChars(): string[]
	{
		return this.puzzle.currentSelectedChars;
	}

	/** 取消当前选择的字母 */
	public deselectChars(): void
	{
		this.puzzle.deselectChars();
	}

	/** 锁定当前选中的字母，不允许用户再更改，同时清空当前选中的字母 */
	public lockCurrentSelectChars(): void
	{
		this.puzzle.lockCurrentSelectChars();
	}

	/** 把左侧单词列表的指定行标志为已删除 */
	public markWordAsDeleted(rowIndex: number): void
	{
		(this.wordGroup.getChildAt(rowIndex) as RedLineLabel).currentState = 'deleted';
	}

	/** 把左边的单列表的所有行标志为未删除 */
	public markWordsAsNormal(): void
	{
		for (let index = 0; index < this.wordGroup.numChildren; index++) {
			(this.wordGroup.getChildAt(index) as RedLineLabel).currentState = 'normal';
		}
	}

	/** 显示成功射中的动画和声音 */
	public playGoodJobMovie(): void
	{
		this.goodJobTweenGroup.play(0);
		(RES.getRes('peng_mp3') as egret.Sound).play(0, 1);
	}

	public playReadyGoMovie(): void
	{
		this.readyGoTweenGroup.play(0);
	}

	public async playCompleteAnimation(): Promise<void>
	{
		await this.completeGameTweenGroup.playOnceAsync();
		this.addChild(new ResultScene(this));
	}
}