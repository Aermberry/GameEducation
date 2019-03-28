class TouchDown extends egret.Event {

	// 自定義事件
	public static readonly EVENT = 'pressdown';//事件的名字
	public _logo: string = "";

	public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable); //調用父類的構造函數
	}
}