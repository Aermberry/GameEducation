/**
 * 各个属性的说明请见"CircleButton截图.png"
 * CircleButton默认width=150, height=150
 */
class CircleButton extends eui.Component implements  eui.UIComponent {
	private backgroundRect: eui.Rect;
	private highlightRect: eui.Rect;
	private titleLabel: eui.Label;
	private tipLabel: eui.Label;
	private iconImage: eui.Image;
	private blinkingTweenGroup: egret.tween.TweenGroup;
	private _enabled = true;

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
		mouse.enable(this.stage);
		mouse.setButtonMode(this.backgroundRect, true);
		mouse.setButtonMode(this.titleLabel, true);
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
		this.titleLabel.text = this.title;
		this.titleLabel.textColor = this.titleColor;
		this.tipLabel.text = this.tip;
		this.iconImage.source = this.iconSource;
		this.backgroundRect.strokeColor = this.strokeColor;
		this.backgroundRect.fillColor = this.backgroundColor;
		this.enabled = this._enabled;
	}

	private onRollOver(): void
	{
		this._enabled && (this.currentState = 'over');
	}

	private onRollOut(): void
	{
		this._enabled && (this.currentState = 'normal');
	}

	private onTouchBegin(): void
	{
		this._enabled && (this.currentState = 'normal');
	}
	
	private _title = '';
	
	public get title(): string
	{
		return this._title;
	}

	public set title(value: string)
	{
		this._title = value;
		this.titleLabel && (this.titleLabel.text = value);
	}

	private _tip = '';

	public get tip(): string
	{
		return this._tip;
	}

	public set tip(value: string)
	{
		this._tip = value;
		this.tipLabel && (this.tipLabel.text = value);
	}

	private _strokeColor = 0x000000;

	public get strokeColor(): number
	{
		return this._strokeColor;
	}

	public set strokeColor(value: number)
	{
		this._strokeColor = value;
		this.backgroundRect && (this.backgroundRect.strokeColor = value);
	}

	private _titleColor = 0x000000;

	public get titleColor(): number
	{
		return this._titleColor;
	}

	public set titleColor(value: number)
	{
		this._titleColor = value;
		this.titleLabel && (this.titleLabel.textColor = value);
	}

	private _backgroundColor = 0xffffff;

	public get backgroundColor(): number
	{
		return this._backgroundColor;
	}

	public set backgroundColor(value: number)
	{
		this._backgroundColor = value;
		this.backgroundRect && (this.backgroundRect.fillColor = value);
	}

	private _iconSource = '';

	public get iconSource(): string
	{
		return this._iconSource;
	}

	public set iconSource(value: string)
	{
		this._iconSource = value;
		this.iconImage && (this.iconImage.source = value);
	}

	public set highlight(value: boolean) 
	{
		if (value) {
			this.blinkingTweenGroup.playLoopAsync();
		} else {
			this.blinkingTweenGroup.stop();
			this.highlightRect.alpha = 0;
		}
	}

	/**
	 * TypeScript有bug，当用户通过exml文件设置该属性时，value是string，不是boolean。
	 * 所以我只能强行转换成string再判断
	 */
	public set enabled(value: boolean)
	{
		this._enabled = value.toString().toLowerCase() === 'true';
		super.$setEnabled(this._enabled);
		this.currentState = this._enabled ? 'normal' : 'disabled';
	}
}