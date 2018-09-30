namespace Ui {
	export class TexttLabel extends eui.Component implements eui.UIComponent {

		private textLabel: eui.Label;
		private backgroundColor:eui.Rect;
		public constructor() {
			super();
			this.skinName = "TexttLabelSkin"
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void {
			super.childrenCreated();
			this.textLabel.text = this.text;
			this.textLabel.size = this.fontSize;
			this.textLabel.textAlign=this.textAglign;
			this.textLabel.textColor=this.fontColor;
			this.textLabel.verticalAlign=this.verticalAlign;
		}

		private _text: string = "textLabel";
		private _fontSize: number = 30;
		private _textAglign:string="lefet"
		private _fontColor:number=0x602DA3;
		private _verticalAlign:string="middle";

		// 字符
		public set text(value: string) {
			this._text = value;
		}

		public get text(): string {
			return this._text;
		}
		// 字体大小
		public set fontSize(value: number) {
			this._fontSize = value;
		}

		public get fontSize(): number {
			return this._fontSize;
		}

		// 设置水平对齐方式
		public set textAglign(value:string){
			this._textAglign=value;
		}

		public get textAglign():string {
			return this._textAglign;
		}

		// 设置字体颜色
		public set fontColor(value:number){
			this._fontColor=value;
		}

		public get fontColor():number {
			return this._fontColor;
		}

		// 垂直对齐
		public set verticalAlign(value:string) {
			this._verticalAlign=value;
		}

		public get verticalAlign():string {
			return this._verticalAlign;
		}
	}
}
