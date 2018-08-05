class AddCalculationScene extends eui.Component implements  eui.UIComponent, IAddCalculationView {
	private startButton: eui.Button;
	private restartGroup: eui.Group;
	private exitGroup: eui.Group;

	private addendLabel: eui.BitmapLabel;
	private augendLabel: eui.BitmapLabel;
	private expressionHighlightGroup: eui.Group;
	private carryGroup: eui.Group;
	private sumGroup: eui.Group;

	private demoGroup: eui.Group;
	private demoHighlightGroup: eui.Group;
	private addendGroup: eui.Group;
	private augendGroup: eui.Group;

	private confirmDialogGroup: eui.Group;
	private yesButton: eui.Button;
	private noButton: eui.Button;

	private boyGroup: eui.Group;
	private boyImage: eui.Image;
	private boyFactory: egret.MovieClipDataFactory;
	private boyMovie: egret.MovieClip;

	private numberPad: NumberPad;
	private thinkCarefullyGroup: eui.Group;

	private presenter: AddCalculationPresenter;

	public constructor(addend: number, augend: number) {
		super();
		this.presenter = new AddCalculationPresenter(addend, augend);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onStartButtonClick, this.presenter);
		this.restartGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onRestartButtonClick, this.presenter);
		this.exitGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onExitButtonClick, this.presenter);

		this.presenter.loadView(this)
	}
	
	public set addend(value: number)
	{
		this.addendLabel.text = value.toString();
		for (let position = 0; position < 3; position++) {
			(this.addendGroup.getChildAt(position) as IParticleComponent).digit = this.presenter.getDigitAtPosition(value, position);
		}
	}
	
	public set augend(value: number)
	{
		this.augendLabel.text = value.toString();
		for (let position = 0; position < 3; position++) {
			(this.augendGroup.getChildAt(position) as IParticleComponent).digit = this.presenter.getDigitAtPosition(value, position);
		}
	}

	public hideStartButton(): void
	{
		this.startButton.visible = false;
	}

	public showRestartButton(): void
	{
		this.restartGroup.visible = true;
	}

	/** highlight操作数，包括expressionGroup和demoGroup里的操作数 */
	public highlightOperand(position: number): void
	{
		this.expressionHighlightGroup.getChildAt(position).visible = this.demoHighlightGroup.getChildAt(position).visible = true;
	}

	/** 不再highlight操作数，包括expressionGroup和demoGroup里的操作数 */
	public normalizeOperand(position: number): void
	{
		this.expressionHighlightGroup.getChildAt(position).visible = this.demoHighlightGroup.getChildAt(position).visible = false;
	}

	/** 把被加数移动到加数旁边 */
	public async moveAddendToAugend(position: number): Promise<void>
	{
		(this.addendGroup.getChildAt(position) as IParticleComponent).moveTo((this.augendGroup.getChildAt(position) as IParticleComponent));
		await lzlib.ThreadUtility.sleep(2000);
	}

	/** 合并被加数和加数 */
	public async mergeAddendAndAugend(position: number): Promise<void>
	{
		if (position == 1) {
			(this.addendGroup.getChildAt(position) as IParticleComponent).mergeAddend((this.augendGroup.getChildAt(position) as IParticleComponent))
		} else {
			(this.augendGroup.getChildAt(position) as IParticleComponent).mergeAddend((this.addendGroup.getChildAt(position) as IParticleComponent))
		}
		await lzlib.ThreadUtility.sleep(2000);
	}

	/** 合并进位 */
	public async mergeCarry(position: number): Promise<void>
	{
		if (position == 1) {
			(this.augendGroup.getChildAt(position + 1) as IParticleComponent).mergeCarry((this.addendGroup.getChildAt(position) as IParticleComponent));
		} else {
			(this.augendGroup.getChildAt(position + 1) as IParticleComponent).mergeCarry((this.augendGroup.getChildAt(position) as IParticleComponent));
		}
		await lzlib.ThreadUtility.sleep(2000);
	}

	/** 设置进位 */
	public setCarry(carry: number, position: number): void
	{
		(this.carryGroup.getChildAt(position) as EditableLabel).text = carry.toString();
	}

	/** 令和的指定位进入编辑模式 */
	public changeSumToEditMode(position: number): void
	{
		(this.sumGroup.getChildAt(position) as EditableLabel).currentState = 'edit';
	}

	/** 令和的指定位进入只读模式 */
	public changeSumToViewMode(position: number): void
	{
		(this.sumGroup.getChildAt(position) as EditableLabel).currentState = 'view';
	}

	/** 读取用户输入的指定位的和 */
	public async getSumAsync(position: number): Promise<string>
	{
		this.numberPad.visible = true;
		let char = await this.numberPad.getCharAsync();
		(this.sumGroup.getChildAt(position) as EditableLabel).text = char;
		this.numberPad.visible = false;
		return char;
	}

	/** 显示仔细想一想的提示 */
	public async alertThingCarefully(): Promise<void>
	{
		this.thinkCarefullyGroup.visible = true;
		await lzlib.ThreadUtility.sleep(1500);
		this.thinkCarefullyGroup.visible = false;
	}

	/** 显示是否需要进位的对话框 */
	public showNeedCarryDialog(): void
	{
		this.confirmDialogGroup.visible = true;
	}

	/** 隐藏是否需要进位的对话框 */
	public hideNeedCarryDialog(): void
	{
		this.confirmDialogGroup.visible = false;
	}

	/** 获取用户是否需要进位的选择 */
	public confirmNeedCarryAsync(): Promise<boolean>
	{
		return new Promise<boolean>(resolve => {
			this.yesButton.once(egret.TouchEvent.TOUCH_TAP, () => resolve(true), this);
			this.noButton.once(egret.TouchEvent.TOUCH_TAP, () => resolve(false), this);
		});
	}

	public openInputExpressoionScene(): void
	{
		Main.instance.gotoScene(new InputExpressionScene());
	}

	public exit(): void
	{
		window.close();
	}
	
	/** 显示通关动画 */
	public startCongratulation(): void
	{
		this.boyImage.visible = false;
		this.playBoyMovie();
	}
	
	private playBoyMovie(): void
	{
		this.boyFactory = new egret.MovieClipDataFactory( RES.getRes('boy_jump_json'), RES.getRes('boy_jump_png'));
		this.boyMovie = new egret.MovieClip(this.boyFactory.generateMovieClipData('boy'));
		this.boyMovie.y = 0;
		this.boyGroup.addChild(this.boyMovie);
		this.boyMovie.play(-1);
	}
}