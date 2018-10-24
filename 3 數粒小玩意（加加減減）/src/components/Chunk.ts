class Chunk extends eui.Component implements  eui.UIComponent {
	private xSpacing = 26;
	private ySpacing = 12;
	//因为chunk的block是从后排到前，UI要求优先显示前面的block，所以blocks的编号是从前到后，方便程序处理。
	private blocks: Block[] = [];

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
		this.blocks = this.$children.map(child => child as Block).reverse();
		this.updateBlockVisibility();
		this.updateBlockColor();
	}
	
	private $digit = 10;

	public get digit(): number
	{
		return this.$digit;
	}
	
	public set digit(value: number)
	{
		this.$digit = value;
		this.updateBlockVisibility();
	}

	private updateBlockVisibility(): void
	{
		this.blocks.forEach((bar, index) => bar.visible = (index < this.digit));
	}

	private $color = 'red';

	public get color(): string
	{
		return this.$color;
	}

	public set color(value: string)
	{
		this.$color = value;
		this.updateBlockColor();
	}

	public updateBlockColor(): void
	{
		this.blocks.forEach(block => block.color = this.$color);
	}

	/** 把当前数粒移动到目标数粒旁边 */
	public async moveTo(destination: IParticleComponent): Promise<void>
	{
		let twDestination = egret.Tween.get(destination);
		twDestination.to({x:-20}, 300);
		let tw = egret.Tween.get(this);
		tw.to({x: 330, y: destination.y}, 600);
	}

	/** 合并被加数 */
	public async mergeAddend(addend: IParticleComponent): Promise<void>
	{
		let mergedCount = Math.min(this.numChildren - this.digit, addend.digit);
		this.copyColor(addend.getCededChildren(mergedCount), this.numChildren - this.digit - 1);
		this.digit += mergedCount;
		this.updateBlockVisibility();

		if (this.isFull) {
			this.currentState = 'joined';
		}

		addend.digit -= mergedCount;
	}

	/** 复制指定数量的children */
	public getCededChildren(count: number): IParticleComponent[]
	{
		return this.$children.filter(child => child.visible).filter((child, index) => index < count).map(child => child as IParticleComponent);
	}

	public copyColor(sources: IParticleComponent[], destIndex: number): void
	{
		for (let index = 0; index < sources.length; index++) {
			let block = (this.getChildAt(destIndex - index) as Block);
			block.copyColor(sources[index].getCededChildren(10).map(child => child as IParticleComponent), 0);
		}
	}

	//是否所有child都已经显示
	private get isFull(): boolean
	{
		return this.digit == this.numChildren
	}

	/** 合并进位 */
	public async mergeCarry(carry: IParticleComponent): Promise<void>
	{
		this.digit++;
		this.updateBlockVisibility();
		this.blocks[0].copyColor(carry.getCededChildren(10).map(child => child as IParticleComponent), 0);
		carry.visible = false;
	}

	/** 借位 */
	public borrowOne(): IParticleComponent
	{
		this.digit--;
		let borrow = new Block();
		borrow.color = this.color;
		borrow.digit = 10;
		borrow.currentState = 'joined';
		borrow.x = this.x + this.width;
		borrow.y = this.y;
		this.parent.addChild(borrow);
		return borrow;
	}

	/** 移动到目标的左边 */
	public moveToLeftOf(target: IParticleComponent): Promise<void>
	{
		throw new Error('Impossible to run here');
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
		tw.to({x: target.x + this.digit * this.xSpacing, y: target.y - this.digit * this.ySpacing}, 800);
	}
	
	/** 变成半透明 */
	public translucent(tranlucientAmount: number): void
	{
		this.blocks.filter((child, index) => index < tranlucientAmount).forEach(child => child.alpha = 0.2);
	}
}