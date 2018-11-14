namespace Ui {
	export class AlterLabel extends eui.Component implements eui.UIComponent {
		private textLabel: eui.Label;
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
			
		}

		protected childrenCreated(): void {
			super.childrenCreated();

			this.textLabel.text=this.text;
			this.textLabel.size = this.fontSize;
		}

		private _text: string
		private _fontSize:number=30

		public set text(value: string) {
			this._text = value;
		}

		public  get text() {
			return this._text;
		}

		public set fontSize(value: number) {
			this._fontSize = value;
		}

		public get fontSize() {
			return this._fontSize
		}
	}
}
