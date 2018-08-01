class PuzzleCell extends eui.Component implements  eui.UIComponent {
	private label: eui.Label;
	private $size = 0;
	private $text = '';
	public rowIndex = 0;
	public columnIndex = 0;

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
		this.currentState = 'normal';
		this.label.size = this.$size;
		this.label.text = this.$text;
		this.label.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLabelClick, this);
	}
	
	public set size(value: number)
	{
		this.$size = value;
		this.label && (this.label.size = value);
	}

	public get text(): string
	{
		return this.$text;
	}

	public set text(value: string)
	{
		this.$text = value;
		this.label && (this.label.text = value);
	}

	private onLabelClick(e: egret.TouchEvent): void
	{
		this.currentState = this.currentState == 'normal' ? 'selected' : 'normal';
		this.dispatchEvent(e);
	}

	public compare(other: PuzzleCell): number
	{
		if (this.rowIndex != other.rowIndex) {
			return this.rowIndex - other.rowIndex;
		} else {
			return this.columnIndex - other.columnIndex;
		}
	}
}