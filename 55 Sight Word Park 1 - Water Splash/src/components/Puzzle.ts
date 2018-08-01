class Puzzle extends eui.Component implements  eui.UIComponent {
	private labels: PuzzleCell[][] = [];
	private $characters: string[][] = [];
	private padding = 10;
	private labelSpacing = 10;
	private currentSelectedLabels: PuzzleCell[] = [];

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
	}

	public get characters(): string[][]
	{
		return this.$characters;
	}
	
	/**
	 * 设置puzzle的单词，例如5x5, 7x7的二维数组
	 */
	public set characters(value: string[][])
	{
		this.$characters = value;
		this.initLabels();
	}

	private initLabels(): void
	{
		this.labels.forEach(row => row.forEach( cell => this.removeChild(cell)));
		this.labels = this.characters.map((row, rowIndex) => row.map((cell, columnIndex) => this.createLabel(cell, rowIndex, columnIndex)));
		this.labels.forEach(row => row.forEach( cell => this.addChild(cell)));
	}

	private createLabel(char: string, rowIndex, columnIndex): PuzzleCell
	{
		let label = new PuzzleCell();
		label.width = label.height = this.computeLabelWidth();
		label.size = this.characters.length < 7 ? 60 : 45;
		label.text = char;
		label.x = this.padding + columnIndex * label.width + columnIndex * this.labelSpacing;
		label.y = this.padding + rowIndex * label.height + rowIndex * this.labelSpacing;
		label.rowIndex = rowIndex;
		label.columnIndex = columnIndex;
		label.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLabelSelect, this);
		return label;
	}

	private computeLabelWidth(): number
	{
		if (this.characters.length == 0) {
			return (this.width - this.padding * 2);
		}
		
		let totalSpacing = (this.characters.length - 1) * this.labelSpacing;
		return (this.width - this.padding * 2 - totalSpacing) / this.characters.length;
	}

	private onLabelSelect(e: egret.TouchEvent): void
	{
		var target = e.target as PuzzleCell;

		if (target.currentState == 'selected') {
			if (this.currentSelectedLabels.indexOf(target) < 0) {
				this.currentSelectedLabels.push(target);
				this.currentSelectedLabels = this.currentSelectedLabels.sort((left, right) => left.compare(right));
			}
		} else {
			let index = this.currentSelectedLabels.indexOf(target);
			if (index >= 0) {
				this.currentSelectedLabels.splice(index, 1);
			}
		}
	}

	public get currentSelectedChars(): string[]
	{
		return this.currentSelectedLabels.map(label => label.text);
	}

	public deselectChars(): void
	{
		this.currentSelectedLabels.forEach(label => label.currentState = 'normal');
		this.currentSelectedLabels = [];
	}

	/** 锁定当前选中的字母，不允许用户再更改，同时清空当前选中的字母 */
	public lockCurrentSelectChars(): void
	{
		this.currentSelectedLabels.forEach(label => {
			label.enabled = false;
			label.currentState = 'disabled';
		});
		this.currentSelectedLabels = [];
	}
}