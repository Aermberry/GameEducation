class TargetButton extends eui.Button implements  eui.UIComponent {
	private hitImage: eui.Image;
	private sunshineImage: eui.Image;
	private _cannonballExitX = 0; //加农炮炮弹的出界X坐标，当加农炮炮弹击中目标后，炮弹离开屏幕的X坐标
	private _cannonballExitY = 0; //加农炮炮弹的出界Y坐标，当加农炮炮弹击中目标后，炮弹离开屏幕的Y坐标
	private _leftOrRight: string; //当前位置的位置，可能值是 left, center, right

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
		this.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onMouseOver, this);
		this.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onMouseOut, this);
	}

	private onMouseOver(e: mouse.MouseEvent): void
	{
		this.currentState = "selected";
	}

	private onMouseOut(e: mouse.MouseEvent): void
	{
		if (this.enabled) {
			this.currentState = "up";
		}
	}

	/**
	 * 靶子被炮弹击中，播放被击中的效果
	 */
	public async playShootedAnimation(): Promise<void>
	{
		console.log('htting');
		this.currentState = "hitting";
		await ThreadUtility.sleep(100);
		this.currentState = "down";
		this.enabled = false;
	}

	public get cannonballExitX(): number
	{
		return this._cannonballExitX;
	}

	public set cannonballExitX(value: number)
	{
		this._cannonballExitX = value;
	}

	public get cannonballExitY(): number
	{
		return this._cannonballExitY;
	}

	public set cannonballExitY(value: number)
	{
		this._cannonballExitY = value;
	}

	public get leftOrRight(): string
	{
		return this._leftOrRight;
	}

	public set leftOrRight(value: string)
	{
		this._leftOrRight = value;
	}

	public setLabel(value: string): void
	{
		this.label = value;
		egret.Tween.get(this.sunshineImage)
		.to({ scaleX: 1, scaleY: 1}, 500)
		.to({ scaleX: 0, scaleY: 0});
	}

	public reset(): void
	{
		this.currentState = 'up';
		this.enabled = true;
	}
	
}