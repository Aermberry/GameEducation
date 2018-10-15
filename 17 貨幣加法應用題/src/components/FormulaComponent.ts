class FormulaComponent extends eui.Component implements  eui.UIComponent {
	
	private titleImage: eui.Image;
	private leftImage: eui.Image;
	private rightImage: eui.Image;
	private resultImage: eui.Image;
	
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
		this.titleImage.source = this._titleImageSource;
		this.leftImage.source = this._leftImageSource;
		this.rightImage.source = this._rightImageSource;
		this.resultImage.source = this._resultImageSource;
	}

	private _titleImageSource = 'formula1_question_png';

	public get titleImageSource(): string
	{
		return this._titleImageSource;
	}

	public set titleImageSource(path: string)
	{
		this._titleImageSource = path;
	}
	
	private _rightImageSource = 'formula1_right_png';

	public get righttleImageSource(): string
	{
		return this._rightImageSource;
	}

	public set rightImageSource(path: string)
	{
		this._rightImageSource = path;
	}

	private _leftImageSource = 'formula1_left_png';

	public get leftImageSource(): string
	{
		return this._leftImageSource;
	}

	public set leftImageSource(path: string)
	{
		this._leftImageSource = path;
	}

	private _resultImageSource = 'formula1_result_png';

	public get resultImageSource(): string
	{
		return this._resultImageSource;
	}

	public set resultImageSource(path: string)
	{
		this._resultImageSource = path;
	}

	public showTitleImage(): void
	{
		this.titleImage.visible = true;
	}

	public showLeftImage(): void
	{
		this.leftImage.visible = true;
	}

	public showRightImage(): void
	{
		this.rightImage.visible = true;
	}

	public showResultImage(): void
	{
		this.resultImage.visible = true;
	}
}