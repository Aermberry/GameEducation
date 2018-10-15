class Chunk extends eui.Component implements  eui.UIComponent {
	private xSpacing = 26;
	private ySpacing = 12;

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
		//因为block的child block是从后拉到前，UI要求优先隐藏后面的block
		let visibleChildIndex = this.numChildren - this.digit;
		for (let index = 0; index < this.numChildren; index++) {
			this.getChildAt(index) && (this.getChildAt(index).visible = !(index < visibleChildIndex));
		}
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
		this.$children.forEach(child => child && ((child as Particle).color = this.$color));
	}

	/** 把当前数粒移动到目标数粒旁边 */
	public async moveTo(destination: IParticleComponent): Promise<void>
	{
		 
		let twDestination = egret.Tween.get(destination);
		twDestination.to({x:125}, 300);
		let tw = egret.Tween.get(this);
		tw.to({x: 530, y: destination.y}, 600);
		//destination.x = 125;
		// this.x = 530;
		// this.y = destination.y;

	}

	/** 合并被加数 */
	public async mergeAddend(addend: IParticleComponent): Promise<void>
	{
		let mergedCount = Math.min(this.numChildren - this.digit, addend.digit);
		this.copyColor(addend.getChildren(mergedCount), this.numChildren - this.digit - 1);
		this.digit += mergedCount;
		this.updateBlockVisibility();

		if (this.isFull) {
			this.currentState = 'joined';
		}

		addend.reduce(mergedCount);
	}

	/** 复制指定数量的children */
	public getChildren(count: number): IParticleComponent[]
	{
		return this.visibleChildren.filter((child, index) => index < count).map(child => child as IParticleComponent);
	}

	private get visibleChildren(): Particle[]
	{
		return this.$children.filter(child => child.visible).map(child => child as Particle);
	}

	public copyColor(sources: IParticleComponent[], destIndex: number): void
	{
		for (let index = 0; index < sources.length; index++) {
			let block = (this.getChildAt(destIndex - index) as Block);
			block.copyColor(sources[index].$children.map(child => child as IParticleComponent), 0);
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
		this.visibleChildren[this.visibleChildren.length - 1].copyColor(carry.$children.map(child => child as IParticleComponent), 0);
		carry.visible = false;
	}
	
	/** 减少数字 */
	public reduce(value: number): void
	{
		let visibleChildren = this.visibleChildren;
		for (let index = 0; index < value; index++) {
			visibleChildren[index].visible = false;
		}
	}

	/** 借位 */
	public borrowOne(): IParticleComponent
	{
		this.reduce(1);
		return new Block();
	}

	/** 移动到目标的左边 */
	public moveToLeftOf(target: IParticleComponent): Promise<void>
	{
		throw new Error('Impossible to run here');
	}
	
	/** 移动到目标的右边 */
	public async moveToRightOf(target: IParticleComponent): Promise<void>
	{
		let tw = egret.Tween.get(this);
		tw.to({x: target.x + target.width - 213, y: target.y - 80}, 800);
	}
	
	/** 变成半透明 */
	public translucent(): void
	{
		this.alpha = 0.7;
	}
}