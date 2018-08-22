/**
 * 各个属性的说明请见"CircleButton截图.png"
 * CircleButton默认width=150, height=150
 */
class CircleButton extends eui.Component implements  eui.UIComponent {
	private backgroundRect: eui.Rect;
	private titleLabel: eui.Label;
	private tipLabel: eui.Label;

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
		console.log(this.titleLabel);
		mouse.enable(this.stage);
		mouse.setButtonMode(this.backgroundRect, true);
		mouse.setButtonMode(this.titleLabel, true);
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
		this.titleLabel.text = this.title;
		this.titleLabel.textColor = this.titleColor;
		this.tipLabel.text = this.tip;
		this.backgroundRect.strokeColor = this.strokeColor;
		this.backgroundRect.fillColor = this.backgroundColor;
		// await lzlib.SoundUtility.playSound('');
	}

	private onRollOver(): void
	{
		this.currentState = 'over';
		
		if (this._tip == '播放/暫停') {
			this.backgroundRect.fillColor = 15951391;
		}

	}

	private onRollOut(): void
	{
		this.currentState = 'normal';
		if (this._tip == '播放/暫停') {
			this.backgroundRect.fillColor = 16777215;
		}

	}

	private onTouchBegin(): void
	{
		this.currentState = 'normal';
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

	private _strokeColor = 0;

	public get strokeColor(): number
	{
		return this._strokeColor;
	}

	public set strokeColor(value: number)
	{
		this._strokeColor = value;
		this.backgroundRect && (this.backgroundRect.strokeColor = value);
	}

	private _titleColor = 0;

	public get titleColor(): number
	{
		return this._titleColor;
	}

	public set titleColor(value: number)
	{
		this._titleColor = value;
		this.titleLabel && (this.titleLabel.textColor = value);
	}

	private _backgroundColor = 0;

	public get backgroundColor(): number
	{
		return this._backgroundColor;
	}

	public set backgroundColor(value: number)
	{
		this._backgroundColor = value;
		this.backgroundRect && (this.backgroundRect.fillColor = value);
	}
}