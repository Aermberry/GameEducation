class RedLineLabel extends eui.Component implements  eui.UIComponent {
	private label: eui.Label;
	private $text: string;

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
		this.label.text = this.$text;
	}
	
	public set text(value: string)
	{
		this.$text = value;
		this.label && (this.label.text = value);
	}
}