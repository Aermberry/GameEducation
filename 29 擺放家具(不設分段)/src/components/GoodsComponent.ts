class GoodsComponent extends eui.Component implements eui.UIComponent, lzlib.Cloneable {
	private goodsImage: eui.Image;
	private circleImage: eui.Image;
	public enabledAudioName = true; //是否允许播放音频
	public isInRoom = false; //是否已经被放入房间

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
		this.goodsImage.source = this.source;
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
	}

	private onMouseOver(): void
	{
		// this.enabledAudioName && this.audioName && (RES.getRes(this.audioName) as egret.Sound).play(0, 1);
		lzlib.SoundUtility.playSound(this.audioName);
	}
	
	private _source = '';

	public get source(): string
	{
		return this._source;
	}

	public set source(value: string)
	{
		this._source = value;
		this.goodsImage && (this.goodsImage.source = value);
	}

	public clone(): Object
	{
		let result = new GoodsComponent();
		result.currentState = this.currentState;
		result.source = this.source;
		result.width = this.width;
		result.height = this.height;
		return result;
	}

	public validateInCorrectPlace(): void
	{
		if (!this.isInRoom || this.isInCorrectPlace) {
			this.currentState = 'normal';
			return;
		}

		if (this.isInWrongPlace) {
			this.currentState = 'wrong';
			return;
		}

		if (!this.enabled) {
			this.currentState = 'disabled';
		}
	}

	public get isInCorrectPlace(): boolean
	{
		//egret.Rectangele.containsPoint有bug，不要用
		return this.isInRoom && GoodsComponent.containsPoint(this.targetRect, this.bottomPoint);
	}

	public get isInWrongPlace(): boolean
	{
		return this.isInRoom && !GoodsComponent.containsPoint(this.targetRect, this.bottomPoint);
	}

	private static containsPoint(rect: egret.Rectangle, point: egret.Point): boolean
	{
		return (0 <= point.x - rect.x && point.x - rect.x <= rect.width)
		&& (0 <= point.y - rect.y && point.y - rect.y <= rect.height);
	}

	private _audioName = ''; //mouse over时播放的音频

	public get audioName(): string
	{
		return this._audioName;
	}

	public set audioName(value: string)
	{
		this._audioName = value;
	}

	/**
	 * 物件底部的点
	 * 用于判断该物件是否放在房间中的指定位置
	 */
	public get bottomPoint(): egret.Point
	{
		if (this.goodsImage) {
			return new egret.Point(this.x + this.goodsImage.x + this.goodsImage.width / 2, this.y + this.goodsImage.y + this.goodsImage.height);
		} else {
			return new egret.Point();
		}
	}

	/**
	 * 物件的目标摆放位置，当bottomPoint位于targetRect内时，系统认为物件摆放正确
	 */
	private _targetRect = new egret.Rectangle(0, 0, 100, 100);

	public get targetRect(): egret.Rectangle
	{
		return this._targetRect;
	}

	public set targetRectX(value: number)
	{
		this.targetRect.x = value;
	}

	public set targetRectY(value: number)
	{
		this.targetRect.y = value;
	}

	public set targetRectWidth(value: number)
	{
		this.targetRect.width = value;
	}

	public set targetRectHeight(value: number)
	{
		this.targetRect.height = value;
	}
}