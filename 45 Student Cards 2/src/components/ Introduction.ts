namespace Ui{
export	class Introduction extends eui.Component implements  eui.UIComponent {
	private textLabel:eui.Label;
	private textLabel2:eui.Label;
		public constructor() {
			super();
			this.skinName="IntroductionSkin"
		}
	
		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
			
		}
	
	
		protected childrenCreated():void
		{
			super.childrenCreated();
			this.textLabel.text=this.text;
			this.textLabel.size=this.fontSize;
			this.textLabel2.text=this.text2;
			this.textLabel2.size=this.fontSize2;
		}

		private _text:string;
		private _fontSize:number;
		private _text2:string;
		private _fontSize2:number;

		// text
		public set text(value:string) {
			this._text=value;
		}

		public get text():string {
			return this._text;
		}

		// fintSize
		public set fontSize(value:number){
			this._fontSize=value;
		}

		public get fontSize():number {
			return this._fontSize;
		}

		public set text2(value:string) {
			this._text2=value;
		}

		public get text2():string {
			return this._text2;
		}

		// fintSize
		public set fontSize2(value:number){
			this._fontSize2=value;
		}

		public get fontSize2():number {
			return this._fontSize2;
		}
		
	}
}
