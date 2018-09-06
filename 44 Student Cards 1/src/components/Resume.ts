namespace Ui {
	export class resume extends eui.Component implements eui.UIComponent {
		private textLabel: eui.Label;
		private background: eui.Rect;
		public constructor() {
			super();
			this.skinName = 'TextLabelSkin'
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
				
		}

		protected childrenCreated(): void {
			super.childrenCreated();
			this.textLabel.size = this.fontSize;
			this.textLabel.textColor = this.fontColor;
			this.textLabel.text = this.text;
			this.textLabel.fontFamily="Comic Sans MS"
			this.background.strokeColor = this.borderColor;
		}

		private _text:string;
		private _fontSize:number=20;
		private _fontColor: number = 0x9C0F8A;
		private _borderColor: number;

		// 设置文本
		public get text():string {
			return this._text;
		}

		public set text(value:string){
			this._text=value;
		}

		// 设置背景色
		public set fontColor(value:number){
			this._fontColor=value;
		}

		public get fontColor():number {
			return this._fontColor;
		}

		// 设置字体大小
		public set fontSize(value:number){
			this._fontSize=value;
		}
		public get fontSize():number{
			return this._fontSize;
		}

		// borderColor
		public set borderColor(value: number) {
			this._borderColor = value;
			// console.log(this._borderColor);
		}

		public get borderColor(): number {
			return this._borderColor;
		}

	}
}

