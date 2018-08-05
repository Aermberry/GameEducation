class Particle extends eui.Component implements  eui.UIComponent, IParticleComponent {
	private particleImage: eui.Image;
	private $color = 'red';

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
		this.particleImage.source = `particle_${this.$color}_png`;
	}

	public get color(): string
	{
		return this.$color;
	}
	
	public set color(value: string)
	{
		this.$color = value;
		this.particleImage && (this.particleImage.source = `particle_${value}_png`);
	}

	public digit: number = 1;

	/** 把当前数粒移动到目标数粒旁边 */
	public async moveTo(destination: IParticleComponent): Promise<void>
	{

	}

	/** 合并被加数 */
	public async mergeAddend(addend: IParticleComponent): Promise<void>
	{

	}
	
	/** 合并进位 */
	public async mergeCarry(carry: IParticleComponent): Promise<void>
	{

	}

	/** 减少数字 */
	public reduce(value: number): void
	{

	}

	/** 复制指定数量的children */
	public getChildren(count: number): IParticleComponent[]
	{
		return [];
	}

	/** 复制颜色 */
	public copyColor(source: IParticleComponent[], destIndex: number): void
	{

	}
}