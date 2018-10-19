class ListenComponent extends eui.Component implements  eui.UIComponent {
	
	private titleAndFairyImage: eui.Image;

	private listenNormal = ['listen1_normal_png','listen2_normal_png','listen3_normal_png','listen4_normal_png','listen5_normal_png','listen6_normal_png'];
	private listenOvel = ['listen1_over_png','listen2_over_png','listen3_over_png','listen4_over_png','listen5_over_png','listen6_over_png'];
	private listenClick = ['listen1_click_png','listen2_click_png','listen3_click_png','listen4_click_png','listen5_click_png','listen6_click_png'];
	private MP3List = ['listening1_mp3', 'listening2_mp3', 'listening3_mp3', 'listening4_mp3', 'listening5_mp3', 'listening6_mp3'];

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
		mouse.setButtonMode(this.titleAndFairyImage, true);
		// this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.titleAndFairyImage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
		this.titleAndFairyImage.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.titleAndFairyImage.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
		this.titleAndFairyImage.source = this.listenNormal[this._currentListen];

	}

	// private onClick(): void
	// {
	// 	lzlib.SoundUtility.playSound(this.MP3List[this._currentListen]);
	// }

	private onBegin(e: egret.TouchEvent): void
	{
		this.titleAndFairyImage.source = this.listenClick[this._currentListen];
		console.log(this.MP3List[this._currentListen]);
		lzlib.SoundUtility.playSound(this.MP3List[this._currentListen]);
	}

	private onMouseOver(e: egret.TouchEvent): void
	{
		this.titleAndFairyImage.source = this.listenOvel[this._currentListen];
	}

	private onMouseOut(e: egret.TouchEvent): void
	{
		this.titleAndFairyImage.source = this.listenNormal[this._currentListen];
	}

	private _currentListen = 0;

	public get currentListen(): number
	{
		return this._currentListen;
	}

	public set currentListen(index: number)
	{
		this._currentListen = index;
	}
	
}