class ContentComponent extends eui.Component implements  eui.UIComponent {
	
	private shangKuanLabel: eui.Label;
	private xiaKuanLabel: eui.Label;
	private textLabel: eui.Label;
	private dateLabel: eui.Label;
	private blessLabel: eui.Label;
	private greetLabel: eui.Label;
	private shangKuanLabelComponent: LabelComponents;
	private xiaKuanLabelComponent: LabelComponents;
	private textLabelComponent: LabelComponents;
	private dateLabelComponent: LabelComponents;
	private blessLabelComponent: LabelComponents;
	private greetLabelComponent: LabelComponents;
	private alertGame1Component: AlertGame1Component;
	//当前拖拽完成的个数；
	private finishNum:number;

	public constructor() {
		super();
		this.finishNum = 0;
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
		this.enableDrop();
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
				if(textLabel.text == ' ')
				{
					group.visible = false;
				}	
		})
	}

	private hideLabel():void
	{
		this.$children.map((group) => {
			group.$children[group.$children.length-1].visible = false

		})
	}

	private enableDrop():void
	{

		let drop = new lzlib.Drop();
		this.addChild(drop);
		drop.enableDrop(this.shangKuanLabelComponent);
		this.shangKuanLabelComponent.addEventListener(lzlib.LzDragEvent.DROP, this.onShangKuanLabelComponentDrop, this);

		drop = new lzlib.Drop();
		this.addChild(drop);
		drop.enableDrop(this.greetLabelComponent);
		this.greetLabelComponent.addEventListener(lzlib.LzDragEvent.DROP, this.onGreetLabelComponentDrop, this);

		drop = new lzlib.Drop();
		this.addChild(drop);
		drop.enableDrop(this.textLabelComponent);
		this.textLabelComponent.addEventListener(lzlib.LzDragEvent.DROP, this.onBodyLabelComponentDrop, this);

		drop = new lzlib.Drop();
		this.addChild(drop);
		drop.enableDrop(this.blessLabelComponent);
		this.blessLabelComponent.addEventListener(lzlib.LzDragEvent.DROP, this.onBlessLabelComponentDrop, this);

		drop = new lzlib.Drop();
		this.addChild(drop);
		drop.enableDrop(this.xiaKuanLabelComponent);
		this.xiaKuanLabelComponent.addEventListener(lzlib.LzDragEvent.DROP, this.onXiaKuanLabelComponentDrop, this);

		drop = new lzlib.Drop();
		this.addChild(drop);
		drop.enableDrop(this.dateLabelComponent);
		this.dateLabelComponent.addEventListener(lzlib.LzDragEvent.DROP, this.onDateLabelComponentDrop, this);
	}

	private onShangKuanLabelComponentDrop(e: lzlib.LzDragEvent): void
	{
		this.handleStringDrop(e,'上款');
	}

	private onGreetLabelComponentDrop(e: lzlib.LzDragEvent): void
	{
		this.handleStringDrop(e,'問候語');
	}

	private onBodyLabelComponentDrop(e: lzlib.LzDragEvent): void
	{
		this.handleStringDrop(e,'正文');
	}

	private onBlessLabelComponentDrop(e: lzlib.LzDragEvent): void
	{
		this.handleStringDrop(e,'祝頌語');
	}

	private onXiaKuanLabelComponentDrop(e: lzlib.LzDragEvent): void
	{
		this.handleStringDrop(e,'下款');
	}

	private onDateLabelComponentDrop(e: lzlib.LzDragEvent): void
	{
		this.handleStringDrop(e,'日期');
	}

	private handleStringDrop(e: lzlib.LzDragEvent ,dropStr: string)
	{
		let dragObject = e.dragObject as LabelComponents;
		let targetObject = e.target as LabelComponents;
		if(dragObject.text !== dropStr)
		{
			this.alertTip(dragObject.text,dropStr);
		}else{
			this.alertGame1Component && (this.alertGame1Component.visible = false);
			targetObject.text = dropStr;
			this.finishNum++;
		}
	}

	private alertTip(drapStr: string, dropStr: string): void
	{
		this.alertGame1Component = this.alertGame1Component?this.alertGame1Component:new AlertGame1Component();
		this.alertGame1Component.visible = true;
		this.alertGame1Component.message = Game1Repository.alertInfo[drapStr];
		this.alertGame1Component.x = 88;
		this.alertGame1Component.y = 1015;
		this.addChild(this.alertGame1Component);
	}

	public get isFinish(): boolean
	{
		return this.finishNum >= 6;
	}

}