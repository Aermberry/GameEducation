class Block extends eui.Component implements  eui.UIComponent {
	private spacing = 38;

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
		//因为block的child bar是从左拉到右，UI要求优先隐藏左侧的bar
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
		this.updateBarColor();
	}

	public updateBarColor(): void
	{
		this.$children.forEach(child => child && ((child as Particle).color = this.$color));
	}

	/** 把当前数粒移动到目标数粒旁边 */
	public async moveTo(destination: IParticleComponent): Promise<void>
	{
		// this.x = destination.x + (destination.$children.length - destination.digit) * this.spacing - 5 - this.width;
		// this.y = destination.y;
		let x = destination.x + (destination.$children.length - destination.digit) * this.spacing - 5 - this.width;
		let y = destination.y;
		let tw = egret.Tween.get(this);
		tw.to({x:x, y:y}, 600);
	}

	/** 合并被加数 */
	public async mergeAddend(addend: IParticleComponent): Promise<void>
	{
		let mergedCount = Math.min(this.numChildren - this.digit, addend.digit);
		if (this.digit + mergedCount < 10) {
			//合并后不足10，什么都不用做
			return;
		}

		this.copyColor(addend.getChildren(mergedCount), this.digit);
		this.digit += mergedCount;

		this.updateBarVisibility();
		if (this.isFull) {
			this.currentState = 'joined';
			this.x = 830;
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
			let bar = (this.getChildAt(destIndex + index) as Bar);
			bar.copyColor(sources[index].$children.map(child => child as IParticleComponent), 0);
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
		this.updateBarVisibility();
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
}