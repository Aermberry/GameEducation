class CloudAlertComponent extends eui.Component implements  eui.UIComponent {
	
	private titleImage: eui.Image;
	private likeImage: eui.Image;
	private fairyAlertGroup: eui.Group;
	
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
	}

	private _titleImageSource = 'question_png';

	public get titleImageSource(): string
	{
		return this._titleImageSource;
	}

	public set titleImageSource(path: string)
	{
		this._titleImageSource = path;
	}

	public showCorrectAlert(): void
	{
		this.likeImage.visible = true;
	}

	public showWrongAlert(): void
	{
		this.fairyAlertGroup.visible = true;
	}

	public hideAlert(): void
	{
		this.likeImage.visible = false;
		this.fairyAlertGroup.visible = false;
	}
	
}