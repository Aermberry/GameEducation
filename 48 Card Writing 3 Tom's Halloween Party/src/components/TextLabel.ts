class TextLabel extends eui.Component implements eui.UIComponent {
	private backgroundRect: eui.Rect;
	private textLabel: eui.Label;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.backgroundRect.fillColor = this.backgroundColor;
		this.textLabel.text=this.text;
		this.textLabel.size=this.fontSize
	}

	// 背景颜色
	private _backgroundColor: number = 0xf7d783;

	public set backgroundColor(value: number) {
		this._backgroundColor = value;
	}
	public get backgroundColor(): number {
		return this._backgroundColor;
	}

	// 文本
	private _text: string = " ";

	public set text(value: string) {
		this._text = value;
	}

	public get text(): string {
		return this._text;
	}

	//font-size
	private _fontSzie:number=16;

	public set fontSize(value:number) {
		this._fontSzie=value
	}

	public get fontSize(){
		return this._fontSzie;
	}

}