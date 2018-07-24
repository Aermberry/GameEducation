class NumberPad extends eui.Component implements  eui.UIComponent {
	private oneButton: ImageButton;
	private twoButton: ImageButton;
	private threeButton: ImageButton;
	private fourButton: ImageButton;
	private fiveButton: ImageButton;
	private sixButton: ImageButton;
	private sevenButton: ImageButton;
	private eightButton: ImageButton;
	private nineButton: ImageButton;
	private zeroButton: ImageButton;
	private eraserButton: ImageButton;

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
		this.oneButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.onKeyDown('1'), this);
		this.twoButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.onKeyDown('2'), this);
		this.threeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.onKeyDown('3'), this);
		this.fourButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.onKeyDown('4'), this);
		this.fiveButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.onKeyDown('5'), this);
		this.sixButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.onKeyDown('6'), this);
		this.sevenButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.onKeyDown('7'), this);
		this.eightButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.onKeyDown('8'), this);
		this.nineButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.onKeyDown('9'), this);
		this.zeroButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.onKeyDown('0'), this);
		this.eraserButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.onKeyDown(''), this);
	}
	
	private onKeyDown(char: string): void
	{
		this.dispatchEvent(new KeyDownEvent(char));
	}

	public async getCharAsync(): Promise<string>
	{
		return new Promise<string>(resolve => {
			this.once(KeyDownEvent.EVENT, (e: KeyDownEvent) => resolve(e.char), this);
		});
	}
}

class KeyDownEvent extends egret.Event
{
	public static readonly EVENT = 'keydown';
	public char: string = '';

	public constructor(char: string) 
	{
		super(KeyDownEvent.EVENT);
		this.char = char;
	}
}