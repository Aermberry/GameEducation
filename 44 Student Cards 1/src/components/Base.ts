class Base {
	public constructor() {
	}

	// 画线

	public drawLine(label:eui.Label,Sence:eui.Component,color:number=0x951602): void{
		let x0=label.x;
		let y0=label.y;	
		let x1=x0+label.width;
		let shp:egret.Shape=new egret.Shape();
		label.textColor=color;
		shp.graphics.lineStyle(5,color);
		shp.graphics.moveTo(x0,y0);
		shp.graphics.lineTo(x1,y0);
		shp.graphics.endFill();
		Sence.addChild(shp);

	}

}