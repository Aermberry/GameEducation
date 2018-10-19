class Block extends eui.Component implements  eui.UIComponent {
	private spacing = 38;
	//因为block的child bar是从左拉到右，UI要求优先显示右侧的bar，所以bars的编号是从右到左，方便程序处理。
	private bars: Bar[] = [];

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
		this.bars = this.$children.map(child => child as Bar).reverse();
		this.updateBarVisibility();
		this.updateBarColor();
	}
	
	private $digit = 10;

	public get digit(): number
	{
		return this.$digit;
	}
	
	public set digit(value: number)
	{
		this.$digit = value;
		this.updateBarVisibility();
	}

	private updateBarVisibility(): void
	{
		this.bars.forEach((bar, index) => bar.visible = (index < this.digit));
	}
	
	private $color = 'red';

	public get color(): string
	{
		return this.$color;
	}

	public set color(value: string)
	{
		this.$color = value;
		this.updateBarColor();
	}

	public updateBarColor(): void
	{		
		this.bars.forEach(bar => bar.color = this.$color);
	}

	/** 把当前数粒移动到目标数粒旁边 */
	public async moveTo(destination: IParticleComponent): Promise<void>
	{
		// this.x = destination.x + (destination.$children.length - destination.digit) * this.spacing - 5 - this.width;
		// this.y = destination.y;
		let destinationVisualX = destination.x + destination.width - destination.digit * this.spacing;
		let x = destinationVisualX - this.width;
		let y = destination.y;
		let tw = egret.Tween.get(this);
		tw.to({x:x, y:y}, 600);
	}

	/** 合并被加数 */
	public async mergeAddend(addend: IParticleComponent): Promise<void>
	{
		let mergedCount = Math.min(10 - this.digit, addend.digit); //需要被合并的数
		if (this.digit + mergedCount < 10) {
			//合并后不足10，什么都不用做
			return;
		}

		this.copyColor(addend.getCededChildren(mergedCount), this.digit);
		this.digit += mergedCount;

		this.updateBarVisibility();
		if (this.isFull) {
			this.currentState = 'joined';
			let destinationVisualX = addend.x + addend.width - addend.digit * this.spacing;
			this.x = destinationVisualX - 340;
			this.y -= 50;
		}

		addend.digit -= mergedCount;
	}

	/** 获取准备割让给其他人的ParticleComponent */
	public getCededChildren(count: number): IParticleComponent[]
	{
		return this.$children.filter(child => child.visible).filter((child, index) => index < count).map(child => child as IParticleComponent);
	}

	public copyColor(sources: IParticleComponent[], destIndex: number): void
	{
		for (let index = 0; index < sources.length; index++) {
			let bar = (this.getChildAt(8 + destIndex + index) as Bar);
			bar.copyColor(sources[index].$children.map(child => child as IParticleComponent), 0);
		}
	}

	//是否所有child都已经显示
	private get isFull(): boolean
	{
		return this.digit == 10;
	}

	/** 合并进位 */
	public async mergeCarry(carry: IParticleComponent): Promise<void>
	{
		this.digit++;
		this.updateBarVisibility();
		this.bars[0].copyColor(carry.$children.map(child => child as IParticleComponent), 0);
		carry.visible = false;
	}

	/** 借位 */
	public borrowOne(): IParticleComponent
	{
		this.digit--;
		let borrow = new Bar();
		borrow.color = this.color;
		borrow.digit = 10;
		borrow.currentState = 'joined';
		borrow.x = this.x + this.width;
		borrow.y = this.y;
		this.parent.addChild(borrow);
		return borrow;
	}

	/** 移动到目标的左边 */
	public async moveToLeftOf(target: IParticleComponent): Promise<void>
	{
		let tw = egret.Tween.get(this);
		tw.to({x: target.x + target.width - 213, y: target.y - 80}, 800);
	}
	
	/** 移动到目标的右边 */
	public async moveToRightOf(target: IParticleComponent): Promise<void>
	{
		throw new Error('Impossible to run here');
	}
	
	/** 移动到目标的后边 */
	public async moveToBehideOf(target: IParticleComponent): Promise<void>
	{
		let tw = egret.Tween.get(this);
		tw.to({x: target.x + 20, y: target.y - 40}, 800);
	}
	
	/** 变成半透明 */
	public translucent(tranlucientAmount: number): void
	{
		this.bars.filter((child, index) => index < tranlucientAmount).forEach(child => child.alpha = 0.2);
	}
}