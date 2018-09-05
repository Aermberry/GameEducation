namespace Ui {
	export class TextLabel extends eui.Component implements eui.UIComponent {

		protected textLabel: eui.Label;
		protected backgroundColor: eui.Rect;
	
		public constructor() {
			super();
			this.skinName = 'TextLabelSkin'
			
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
				
		}

		protected childrenCreated(): void {
			super.childrenCreated();
			this.textLabel.text = this.text;
			this.backgroundColor.fillColor = this.color;
			this.textLabel.size = this.fontSize;
		}

		private _text: string;
		private _color: number;
		private _fontSize: number=20;

		// 设置文本
		public get text(): string{
			return this._text;
		}

		public set text(value: string) {
			this._text = value;
		}


		//设置背景颜色 
		public set color(value: number) {
			this._color = value;
		}

		public get color(): number{
			return this._color;
		}

		//设置字体大小
		public set fontSize(value: number) {
			this._fontSize = value;
		}

		public get fontSize():number {
			
			return this._fontSize;
		}
	}
}
