class BackgroundScene extends eui.Component implements  eui.UIComponent {
	
	public stepImage: eui.Image;
	public curStep: eui.Label;
	
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
		// this.stepImage.source = this._source;
		// this.curStep.text = this._text;
		console.log('BackgroundScene');
		console.log(this.stepImage);
		console.log(this.curStep);
	}

	// private _source = 'house_and_people_png';

	// public get source(): string
	// {
	// 	return this._source;
	// }

	// public set source(sourcePath:string)
	// {
	// 	this._source = sourcePath;
	// }

	// private _text = '第一节';

	// public get text(): string
	// {
	// 	return this._text;
	// }

	// public set text(text:string)
	// {
	// 	this._text = text;
	// }
	
}