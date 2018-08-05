class Bar extends eui.Component implements  eui.UIComponent {

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
		this.updateParticleVisibility();
		this.updateParticleColor();
	}

	private $digit = 10;

	public get digit(): number
	{
		return this.$digit;
	}
	
	public set digit(value: number)
	{
		this.$digit = value;
		this.updateParticleVisibility();
	}

	private updateParticleVisibility(): void
	{
		//显示child index < value的child, 隐藏child index >= value的child
		for (let index = 0; index < this.numChildren; index++) {
			this.getChildAt(index) && (this.getChildAt(index).visible = (index < this.digit));
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
		this.updateParticleColor();
	}

	public updateParticleColor(): void
	{
		this.$children.forEach(child => child && ((child as Particle).color = this.$color));
	}

	/** 把当前数粒移动到目标数粒旁边 */
	public async moveTo(destination: IParticleComponent): Promise<void>
	{
		this.x = destination.x + 50;
		this.y = destination.y;
	}

	/** 合并被加数 */
	public async mergeAddend(addend: IParticleComponent): Promise<void>
	{
		let mergedCount = Math.min(this.numChildren - this.digit, addend.digit);
		this.copyColor(addend.getChildren(mergedCount), this.digit);
		this.digit += mergedCount;

		this.updateParticleVisibility();
		if (this.isFull) {
			this.currentState = 'joined';
		}

		addend.reduce(mergedCount);
	}

	/** 复制指定数量的children */
	public getChildren(count: number): IParticleComponent[]
	{
		return this.visibleChildren.filter((child, index) => index >= this.digit - count).map(child => child as IParticleComponent);
	}

	private get visibleChildren(): Particle[]
	{
		return this.$children.filter(child => child.visible).map(child => child as Particle);
	}

	public copyColor(sources: IParticleComponent[], destIndex: number): void
	{
		for (let index = 0; index < sources.length; index++) {
			(this.getChildAt(destIndex + index) as Particle).color = sources[index].color;
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
		//什么都不用做，因为Bar不可能有进位
		return;
	}

	/** 减少数字 */
	public reduce(value: number): void
	{
		this.digit -= value;
		this.updateParticleVisibility();
	}
}