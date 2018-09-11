namespace Ui {
	export class TexttLabel extends eui.Component implements eui.UIComponent {

		private textLabel:eui.Label;
		public constructor() {
			super();
			this.skinName="TexttLabelSkin"
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void {
			super.childrenCreated();
			this.textLabel.text=this.text
		}

		private _text:string="textLabel";
		private _fontSize:number=30

		public set text(value:string){
			 this._text=value;
		}

		public get text():string {
			return this._text
		}

		public set fontSize(value:number){
			this._fontSize=value;
		}

		public get fontSize():number {
			return this._fontSize
		}
	}
}
