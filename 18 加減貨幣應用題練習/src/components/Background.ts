namespace Ui {
	export class Background extends eui.Component implements eui.UIComponent {
		private indexLabel: Ui.IndexTitle
		public constructor() {
			super();
			this.skinName = "BackgroundSkin";
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void {
			super.childrenCreated();
			this.indexLabel.index = this.index;
		}

		private _index: string;
		private _scene: eui.Component;

		public set index(value) {
			this._index = value;
			// this.indexLabel&&(this.indexLabel.index=value);
		}
		public get index(): string {
			return this._index;
		}

		public set scene(value:eui.Component) {
			this._scene = value
			
		}

		public get scene():eui.Component{
			return this._scene
		}
	}
}
