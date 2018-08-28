class ContentComponent extends eui.Component implements  eui.UIComponent {
	
	private shangKuanLabel: eui.Label;
	private xiaKuanLabel: eui.Label;
	private textLabel: eui.Label;
	private dateLabel: eui.Label;
	private blessLabel: eui.Label;
	private greetLabel: eui.Label;
	private LabelComponents: LabelComponents;

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
		if (!this._isDisplayLabel){
			this.hideLabel();
		}
		this.shangKuanLabel.text = this._shangkuan;
		this.xiaKuanLabel.text = this._xiakuan;
		this.greetLabel.text = this._greet;
		this.textLabel.text = this._text;
		this.blessLabel.text = this._bless;
		this.dateLabel.text = this._date;
		this.hideText();
	}

	private _shangkuan = '小雄：';

	public get shangkuan(): string
	{
		return this._shangkuan;
	}

	public set shangkuan(str: string)
	{
		this._shangkuan = str;
		// this.shangKuanLabel && (this.shangKuanLabel.text = this._shangkuan);

	}

	private _xiakuan = '伯父';

	public get xiakuan(): string
	{
		return this._xiakuan;
	}

	public set xiakuan(str: string)
	{
		this._xiakuan = str;
		// this.xiaKuanLabel && (this.xiaKuanLabel.text = this._xiakuan);

	}

	private _bless = '身體健康';

	public get bless(): string
	{
		return this._bless;
	}

	public set bless(str: string)
	{
		this._bless = str;
		// this.blessLabel && (this.blessLabel.text = this._bless);

	}

	private _text = '蜘道妳茬遊詠比塞中得到第二名，我替妳憾到高興。我蕒了壹幅詠鏡送給妳，希望妳能好好利用這幅詠鏡，女裏煉習，不要瞞促眼前的成果，要追球壹個更高遠的木標。';

	public get text(): string
	{
		return this._xiakuan;
	}

	public set text(str: string)
	{
		this._text = str;
		// this.textLabel && (this.textLabel.text = this._text);

	}

	private _greet = '很久沒有見面了，你好嗎？';

	public get greet(): string
	{
		return this._greet;
	}

	public set greet(str: string)
	{
		this._greet = str;
		// this.greetLabel && (this.greetLabel.text = this._greet);

	}
	
	private _date = '八月十日';

	public get date(): string
	{
		return this._greet;
	}

	public set date(str: string)
	{
		this._date = str;
		// this.dateLabel && (this.dateLabel.text = this.date);

	}

	private _isDisplayLabel = true;

	public get isDisplayLabel(): boolean
	{
		return this._isDisplayLabel;
	}

	public set isDisplayLabel(isDisplay: boolean)
	{
		this._isDisplayLabel = isDisplay;

	}

	private hideText()
	{
		this.$children.map((group) => {

				let textLabel = group.$children[0] as eui.Label;
				console.log(textLabel);
				console.log(textLabel.text);
				if(textLabel.text == ' ')
				{
					console.log(group);
					group.visible = false;
				}
			
			

		})
	}

	private hideLabel()
	{
		this.$children.map((group) => {
			group.$children[group.$children.length-1].visible = false

		})
	}
}