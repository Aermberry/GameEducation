namespace Ui {
	export class resume extends eui.Component implements eui.UIComponent {
		private background: eui.Rect;
		public constructor() {
			super();
			this.skinName = 'ResumeSkin'
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
				
		}

		protected childrenCreated(): void {
			super.childrenCreated();
			this.background.strokeColor = this.borderColor;
		}

	
		private _borderColor: number;

		// 设置文本
	

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

