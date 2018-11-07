class DateEvent extends egret.Event {

	// 事件的類型
	public static DATE: string = "dark游戲"

	public game: string = "沒想還哦"

	public constructor(type: string, bubbles: boolean = false, cancelabel: boolean = false) {
		super(type, bubbles, cancelabel)
	}
}

class Me extends egret.Sprite {
	public constructor() {
		super()
	}
}

class Guy extends egret.Sprite {
	public constructor() {
		super()
	}
	public getData(e: DateEvent) {
		console.log(`受邀去打${e.game}`);
	}
}

class dsaocument extends eui.Component implements eui.UIComponent {

	public constructor() {
		super();
	}

	// let me
}