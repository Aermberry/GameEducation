class ContentComponent extends eui.Component implements  eui.UIComponent {
	
	private shangKuanLabel: eui.Label;
	private xiaKuanLabel: eui.Label;
	private textLabel: eui.Label;
	private dateLabel: eui.Label;
	private blessLabel: eui.Label;
	private greetLabel: eui.Label;

	private shangKuanRect: eui.Rect;
	private xiaKuanRect: eui.Rect;
	private textRect: eui.Rect;
	private dateRect: eui.Rect;
	private blessRect: eui.Rect;
	private greetRect: eui.Rect;
	private currentRect: eui.Rect;

	private shangKuanLabelComponent: LabelComponents;
	private xiaKuanLabelComponent: LabelComponents;
	private textLabelComponent: LabelComponents;
	private dateLabelComponent: LabelComponents;
	private blessLabelComponent: LabelComponents;
	private greetLabelComponent: LabelComponents;
	private alertGame1Component: AlertGame1Component;

	private startGame2: egret.tween.TweenGroup;
	private endGame3: egret.tween.TweenGroup;
	private startGame3: egret.tween.TweenGroup;
	private startGame4: egret.tween.TweenGroup;
	private endGame4: egret.tween.TweenGroup;
	//当前拖拽完成的个数；
	private finishNum:number;

	public game1Scene: Game1Scene;

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
		this.shangKuanLabel && (this.shangKuanLabel.text = this._shangkuan);

	}

	private _xiakuan = '伯父';

	public get xiakuan(): string
	{
		return this._xiakuan;
	}

	public set xiakuan(str: string)
	{
		this._xiakuan = str;
		this.xiaKuanLabel && (this.xiaKuanLabel.text = this._xiakuan);

	}

	private _bless = '身體健康';

	public get bless(): string
	{
		return this._bless;
	}

	public set bless(str: string)
	{
		this._bless = str;
		this.blessLabel && (this.blessLabel.text = this._bless);

	}

	private _text = '知道你在游泳比賽中得到第二名，我替你感到高興。我買了一副泳鏡送給你，希望你能好好利用這副泳鏡，努力練習，不要滿足眼前的成果，要追求一個更高遠的目標。';

	public get text(): string
	{
		return this._xiakuan;
	}

	public set text(str: string)
	{
		this._text = str;
		this.textLabel && (this.textLabel.text = this._text);

	}

	private _greet = '很久沒有見面了，你好嗎？';

	public get greet(): string
	{
		return this._greet;
	}

	public set greet(str: string)
	{
		this._greet = str;
		this.greetLabel && (this.greetLabel.text = this._greet);

	}
	
	private _date = '八月十日';

	public get date(): string
	{
		return this._greet;
	}

	public set date(str: string)
	{
		this._date = str;
		this.dateLabel && (this.dateLabel.text = this.date);

	}

	public hideRect(): void
	{
		this.currentRect && (this.currentRect.visible = false);
	}

	public showShangKuanRect(): void
	{
		this.currentRect && (this.currentRect.visible = false);
		this.shangKuanRect.visible = true;
		this.currentRect = this.shangKuanRect;
	}

	public showXiaKuanRect(): void
	{
		this.currentRect && (this.currentRect.visible = false);
		this.xiaKuanRect.visible = true;
		this.currentRect = this.xiaKuanRect;
	}

	public showGreetRect(): void
	{
		this.currentRect && (this.currentRect.visible = false);
		this.greetRect.visible = true;
		this.currentRect = this.greetRect;
	}

	public showTextRect(): void
	{
		this.currentRect && (this.currentRect.visible = false);
		this.textRect.visible = true;
		this.currentRect = this.textRect;
	}


	public showBlessRect(): void
	{
		this.currentRect && (this.currentRect.visible = false);
		this.blessRect.visible = true;
		this.currentRect = this.blessRect;
	}

	public showDateRect(): void
	{
		this.currentRect && (this.currentRect.visible = false);
		this.dateRect.visible = true;
		this.currentRect = this.dateRect;
	}

	public RectHandle(text: string): void
	{
		console.log(text);
		let	obj = {'上款':this.showShangKuanRect,'下款':this.showXiaKuanRect,'問候語':this.showGreetRect,'正文':this.showTextRect,'日期':this.showDateRect,'祝願語':this.showBlessRect};
		obj[text].apply(this);
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
				let textLabel = group.$children[1] as eui.Label;
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
		this.handleStringDrop(e,'上款','shangkuan');
	}

	private onGreetLabelComponentDrop(e: lzlib.LzDragEvent): void
	{
		this.handleStringDrop(e,'問候語','greet');
	}

	private onBodyLabelComponentDrop(e: lzlib.LzDragEvent): void
	{
		this.handleStringDrop(e,'正文','text');
	}

	private onBlessLabelComponentDrop(e: lzlib.LzDragEvent): void
	{
		this.handleStringDrop(e,'祝願語','bless');
	}

	private onXiaKuanLabelComponentDrop(e: lzlib.LzDragEvent): void
	{
		this.handleStringDrop(e,'下款','xiakuan');
	}

	private onDateLabelComponentDrop(e: lzlib.LzDragEvent): void
	{
		this.handleStringDrop(e,'日期','date');
	}

	private handleStringDrop(e: lzlib.LzDragEvent ,dropStr: string,curLabelName: string)
	{
		console.log(e);
		let dragObject = e.dragObject as LabelComponents;
		let targetObject = e.target as LabelComponents;
		if(dragObject.text !== dropStr)
		{
			this.alertTip(dragObject.text,dropStr);
		}else{
			this.alertGame1Component && (this.alertGame1Component.visible = false);
			targetObject.text = dropStr;
			this.finishNum++;
	
			this.game1Scene.removeNameChildrent(curLabelName);
			

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

	public playGame2Start()
	{
		this.startGame2.play(0);
	}

	public playGame3Start(): void
	{
		this.startGame3.play(0);
	}

	public playGame3End(): void
	{
		this.endGame3.play(0);
	}

	public playGame4Start(): void
	{
		this.startGame4.play(0);
	}

	public playGame4End(): void
	{
		this.endGame4.play(0);
	}
}