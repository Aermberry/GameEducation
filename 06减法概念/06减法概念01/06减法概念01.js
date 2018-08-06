(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"06减法概念01_atlas_", frames: [[1379,3291,250,177],[1511,2993,488,152],[1156,2250,440,741],[788,2927,243,428],[0,2333,1154,592],[948,1590,885,658],[1219,847,514,648],[1033,2993,476,195],[0,0,1667,845],[1997,358,33,33],[1884,220,76,215],[0,2927,496,385],[1598,2250,415,741],[0,847,1217,741],[1884,0,162,218],[1735,1170,220,256],[1997,323,33,33],[1962,220,33,218],[1997,220,33,101],[1669,0,213,741],[1511,3147,344,142],[1033,3190,344,142],[498,2927,288,428],[1735,743,309,425],[0,1590,946,741]]}
];


// symbols:



(lib.angnle_2 = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back_btn = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.big_circle = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blink_student1 = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.circle1 = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.circle2 = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.circle3 = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.complete = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.game_frame = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.green_one_box = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.green_twenty = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.math_frame = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.middle_circle = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.position_circle = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.red_forteen_box = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.red_hunder_box = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.red_one_boxpng复制 = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.red_ten_box = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.red_three_box = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.small_circle = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.stop_hover = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.stop_normal = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.student_dump_1 = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.student_dump_2 = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.ten_digits_circle = function() {
	this.spriteSheet = ss["06减法概念01_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.circle3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件21, new cjs.Rectangle(0,0,514,648), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.circle2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(0,0,885,658), null);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.circle1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(0,0,1154,592), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.ten_digits_circle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(0,0,946,741), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.position_circle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(0,0,1217,741), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.big_circle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0,0,440,741), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.middle_circle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,415,741), null);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.small_circle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(0,0,213,741), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.green_twenty();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,76,215), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.red_hunder_box();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(0,0,220,256), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.red_forteen_box();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0,0,162,218), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.red_three_box();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(0,0,33,101), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.green_one_box();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,0,33,33), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.red_one_boxpng复制();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0,0,33,33), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.red_ten_box();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,33,218), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.angnle_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,250,177), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.blink_student1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,243,428), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.stop_normal();
	this.instance.parent = this;
	this.instance.setTransform(-174,-72);

	this.instance_1 = new lib.stop_hover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-173,-72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174,-72,344,142);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(1727,125);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.math_frame();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,54);

	this.instance_2 = new lib.game_frame();
	this.instance_2.parent = this;
	this.instance_2.setTransform(114,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,1898,845), null);


// stage content:
(lib.无标题3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// angnle
	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(936.8,107.7,1,1,0,0,0,125,88.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1).to({x:897.7,y:175.7},0).wait(1).to({x:857,y:242.9},0).wait(1).to({x:815.1,y:309.2},0).wait(1).to({x:772.1,y:374.8},0).wait(1).to({x:728.3,y:439.9},0).wait(1).to({x:683.6,y:504.4},0).wait(1).to({x:638.2,y:568.4},0).wait(1).to({x:592.2,y:632.1},0).wait(1).to({x:545.7,y:695.3},0).wait(1).to({x:498.7,y:758.2},0).wait(1).to({x:518.3,y:745.1},0).wait(1).to({x:537.8,y:732.1},0).wait(1).to({x:557.4,y:719.1},0).wait(1).to({x:576.9,y:706.1},0).wait(1).to({x:596.5,y:693.1},0).wait(1).to({x:616,y:680.1},0).wait(1).to({x:635.6,y:667},0).wait(1).to({x:655.1,y:654},0).wait(1).to({x:674.7,y:641},0).wait(1).to({x:694.2,y:628},0).wait(1).to({x:713.8,y:615},0).wait(1).to({x:733.3,y:602},0).wait(1).to({x:752.9,y:589},0).wait(1).to({x:772.4,y:575.9},0).wait(1).to({x:792,y:562.9},0).wait(1).to({x:811.5,y:549.9},0).wait(1).to({x:831.1,y:536.9},0).wait(1).to({x:850.6,y:523.9},0).wait(1).to({x:870.2,y:510.9},0).wait(1).to({x:889.8,y:497.9},0).wait(1).to({x:896.7,y:494.5},0).wait(1).to({x:903.7,y:491.1},0).wait(1).to({x:910.6,y:487.7},0).wait(1).to({x:917.6,y:484.3},0).wait(1).to({x:924.5,y:480.9},0).wait(1).to({x:931.5,y:477.5},0).wait(1).to({x:938.4,y:474.1},0).wait(1).to({x:945.4,y:470.7},0).wait(1).to({x:952.3,y:467.3},0).wait(1).to({x:959.3,y:463.9},0).wait(1).to({x:966.2,y:460.5},0).wait(1).to({x:973.2,y:457.1},0).wait(1).to({x:980.2,y:453.7},0).wait(1).to({x:987.1,y:450.3},0).wait(1).to({x:994.1,y:446.9},0).wait(1).to({x:1001,y:443.5},0).wait(1).to({x:1008,y:440.2},0).wait(1).to({x:1014.9,y:436.8},0).wait(1).to({x:1021.9,y:433.4},0).wait(1).to({x:1028.8,y:430},0).wait(1).to({x:1035.8,y:426.6},0).wait(1).to({x:1042.7,y:423.2},0).wait(1).to({x:1049.7,y:419.8},0).wait(1).to({x:1056.6,y:416.4},0).wait(1).to({x:1063.6,y:413},0).wait(1).to({x:1069.6,y:412.8},0).wait(1).to({x:1075.6,y:412.6},0).wait(1).to({x:1081.7,y:412.5},0).wait(1).to({x:1087.7,y:412.3},0).wait(1).to({x:1093.7,y:412.1},0).wait(1).to({x:1099.7,y:411.9},0).wait(1).to({x:1105.8,y:411.8},0).wait(1).to({x:1111.8,y:411.6},0).wait(1).to({x:1117.8,y:411.4},0).wait(1).to({x:1123.8,y:411.2},0).wait(1).to({x:1129.8,y:411.1},0).wait(1).to({x:1135.9,y:410.9},0).wait(1).to({x:1141.9,y:410.7},0).wait(1).to({x:1147.9,y:410.5},0).wait(1).to({x:1153.9,y:410.4},0).wait(1).to({x:1159.9,y:410.2},0).wait(1).to({x:1166,y:410},0).wait(1).to({x:1172,y:409.8},0).wait(1).to({x:1178,y:409.6},0).wait(1).to({x:1184,y:409.5},0).wait(1).to({x:1190.1,y:409.3},0).wait(1).to({x:1196.1,y:409.1},0).wait(1).to({x:1202.1,y:408.9},0).wait(1).to({x:1208.1,y:408.8},0).wait(1).to({x:1214.2,y:408.6},0).wait(1).to({x:1220.2,y:408.4},0).wait(1).to({x:1226.2,y:408.2},0).wait(1).to({x:1232.2,y:408.1},0).wait(1).to({x:1238.2,y:407.9},0).wait(1).to({x:1244.3,y:407.7},0).wait(1).to({x:1250.3,y:407.5},0).wait(1).to({x:1256.3,y:407.4},0).wait(1).to({x:1262.3,y:407.2},0).wait(1).to({x:1268.4,y:407},0).wait(6).to({x:1207.2,y:411.4},0).wait(1).to({x:1146,y:415.8},0).wait(1).to({x:1084.8,y:420.3},0).wait(1).to({x:1023.6,y:424.7},0).wait(1).to({x:962.4,y:429.1},0).wait(1).to({x:901.2,y:433.5},0).wait(10).to({x:947.1,y:433.9},0).wait(1).to({x:993,y:434.3},0).wait(1).to({x:1038.9,y:434.7},0).wait(1).to({x:1084.9,y:435.1},0).wait(1).to({x:1130.8,y:435.5},0).wait(1).to({x:1151},0).wait(1).to({x:1171.2},0).wait(1).to({x:1191.4},0).wait(1).to({x:1211.5},0).wait(1).to({x:1231.8},0).wait(1).to({x:1252},0).wait(1).to({x:1298.3},0).wait(1).to({x:1344.7},0).wait(1).to({x:1391.1},0).wait(1).to({x:1437.5},0).wait(20).to({x:1446.8},0).wait(1).to({x:1456.2},0).wait(1).to({x:1465.6},0).wait(1).to({x:1475},0).wait(1).to({x:1484.4},0).wait(1).to({x:1493.8},0).wait(1).to({x:1503.2},0).wait(1).to({x:1512.6},0).wait(1).to({x:1522},0).wait(1).to({x:1520.3},0).wait(1).to({x:1518.5},0).wait(1).to({x:1516.8},0).wait(1).to({x:1515.1},0).wait(1).to({x:1513.3},0).wait(1).to({x:1511.6},0).wait(1).to({x:1553,y:468.9},0).wait(1).to({x:1594.5,y:502.4},0).wait(1).to({x:1636.1,y:535.8},0).wait(1).to({x:1677.5,y:569.2},0).wait(1).to({x:1719.1,y:602.7},0).wait(1).to({x:1760.6,y:636.2},0).wait(26).to({x:1761.4,y:636},0).wait(1).to({x:1762.2,y:635.9},0).wait(1).to({x:1763,y:635.7},0).wait(1).to({x:1763.8,y:635.6},0).wait(1).to({x:1764.7,y:635.4},0).wait(1).to({x:1648.4,y:637.7},0).wait(1).to({x:1532.1,y:640},0).wait(1).to({x:1415.8,y:642.3},0).wait(1).to({x:1299.5,y:644.6},0).wait(1).to({x:1183.2,y:646.9},0).wait(7).to({x:1091.9,y:646.8},0).wait(1).to({x:1000.6},0).wait(1).to({x:909.2},0).wait(1).to({x:817.9},0).wait(7).to({x:765.3,y:621.6},0).wait(1).to({x:712.8,y:596.4},0).wait(1).to({x:660.3,y:571.2},0).wait(1).to({x:607.7,y:546},0).wait(46).to({x:995.1,y:532.9},0).wait(1).to({x:1382.2,y:519.6},0).wait(1).to({x:1769.9,y:505.7},0).wait(1).to({x:1722.7,y:502.4},0).wait(11).to({x:1723.1,y:532.9},0).wait(1).to({x:1723.5,y:563.4},0).wait(1).to({x:1723.9,y:593.8},0).wait(1).to({x:1724.2,y:624.3},0).wait(1).to({x:1724.6,y:654.8},0).wait(1).to({x:1725,y:685.3},0).wait(1).to({x:1725.4,y:715.7},0).wait(1).to({x:1725.8,y:746.2},0).wait(1).to({x:1726.1,y:776.7},0).wait(1).to({x:1726.5,y:807.2},0).wait(55).to({x:1510.7,y:758.4},0).wait(1).to({x:1294.9,y:709.7},0).wait(1).to({x:1079.1,y:661},0).wait(1).to({x:863.3,y:612.2},0).wait(1).to({x:647.5,y:563.5},0).wait(31).to({x:771.8,y:558.6},0).wait(1).to({x:896.1,y:553.7},0).wait(1).to({x:1020.4,y:548.7},0).wait(1).to({x:1144.7,y:543.8},0).wait(1).to({x:1269,y:538.9},0).wait(1).to({x:1275.5,y:583.1},0).wait(1).to({x:1281.9,y:627.2},0).wait(1).to({x:1288.3,y:671.4},0).wait(1).to({x:1294.8,y:715.6},0).wait(1).to({x:1301.2,y:759.8},0).wait(40).to({x:1167.6,y:732.3},0).wait(1).to({x:1033.9,y:704.9},0).wait(1).to({x:900.3,y:677.4},0).wait(1).to({x:766.7,y:650},0).wait(1).to({x:633,y:622.5},0).wait(36).to({x:894.3,y:435.2},0).wait(1).to({x:882.2,y:499.5},0).wait(1).to({x:870,y:563.9},0).wait(1).to({x:857.8,y:628.2},0).wait(1).to({x:845.6,y:692.6},0).wait(123).to({x:1332.1,y:473},0).wait(46));

	// complete
	this.instance_1 = new lib.student_dump_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77,652);

	this.instance_2 = new lib.student_dump_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(77,549);
	this.instance_2._off = true;

	this.instance_3 = new lib.complete();
	this.instance_3.parent = this;
	this.instance_3.setTransform(719,235);

	this.instance_4 = new lib.back_btn();
	this.instance_4.parent = this;
	this.instance_4.setTransform(719,451);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{y:652}}]},615).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1,p:{y:652}}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1,p:{y:652}}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_1,p:{y:664}}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_1,p:{y:664}}]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},2).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(617).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},1).wait(2).to({_off:false},0).wait(1).to({_off:true},3).wait(2).to({_off:false,y:583},0).wait(1).to({y:549},0).to({_off:true},1).wait(2).to({_off:false,y:583},0).wait(33));

	// circle3
	this.instance_5 = new lib.元件21();
	this.instance_5.parent = this;
	this.instance_5.setTransform(560,674,1,1,0,0,0,257,324);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(505).to({_off:false},0).wait(79).to({_off:true},1).wait(84));

	// circle2
	this.instance_6 = new lib.元件20();
	this.instance_6.parent = this;
	this.instance_6.setTransform(762.5,689,1,1,0,0,0,442.5,329);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(415).to({_off:false},0).wait(84).to({_off:true},1).wait(169));

	// circle1
	this.instance_7 = new lib.元件19();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1028,654,1,1,0,0,0,577,296);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(345).to({_off:false},0).wait(69).to({_off:true},1).wait(254));

	// ten_digits_circle
	this.instance_8 = new lib.元件18();
	this.instance_8.parent = this;
	this.instance_8.setTransform(781,612.5,1,1,0,0,0,473,370.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(285).to({_off:false},0).wait(10).to({_off:true},1).wait(373));

	// position_circle
	this.instance_9 = new lib.元件17();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1040.5,661.5,1,1,0,0,0,608.5,370.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(275).to({_off:false},0).wait(5).to({_off:true},1).wait(388));

	// big_circle
	this.instance_10 = new lib.元件16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(631,609.5,1,1,0,0,0,220,370.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(240).to({_off:false},0).wait(5).to({_off:true},1).wait(423));

	// middle_circle
	this.instance_11 = new lib.元件15();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1051.5,616.5,1,1,0,0,0,207.5,370.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(230).to({_off:false},0).wait(5).to({_off:true},1).wait(433));

	// small_circle
	this.instance_12 = new lib.元件14();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1555.5,648.5,1,1,0,0,0,106.5,370.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(220).to({_off:false},0).wait(5).to({_off:true},1).wait(443));

	// green_one_box
	this.instance_13 = new lib.元件8();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1380.5,391.5,1,1,0,0,0,16.5,16.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(174).to({_off:false},0).wait(1).to({y:391.4},0).wait(2).to({x:1380.4,y:391.3},0).wait(2).to({y:391.2},0).wait(2).to({y:391.1},0).wait(1).to({x:1380.3,y:391},0).wait(2).to({y:390.9},0).wait(2).to({y:390.8},0).wait(1).to({x:1380.2},0).wait(1).to({y:390.7},0).wait(2).to({x:1410.2,y:469.6},0).wait(1).to({x:1440.2,y:548.6},0).wait(1).to({x:1470.3,y:627.7},0).wait(1).to({x:1500.3,y:706.6},0).wait(1).to({x:1530.3,y:785.7},0).wait(1).to({x:1560.4,y:864.8},0).wait(465).to({_off:true},1).wait(8));

	// green_tweenty_box
	this.instance_14 = new lib.元件13();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1254,388.5,1,1,0,0,0,38,107.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(154).to({_off:false},0).wait(36).to({x:1204.9,y:479.4},0).wait(1).to({x:1155.9,y:570.2},0).wait(1).to({x:1106.8,y:661.1},0).wait(1).to({x:1057.7,y:751.9},0).wait(1).to({x:1008.7,y:842.8},0).wait(475));

	// red_three_box
	this.instance_15 = new lib.元件10();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1066.5,397.5,1,1,0,0,0,16.5,50.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(144).to({_off:false},0).wait(6).to({x:1066.6},0).wait(11).to({x:1066.7},0).wait(11).to({x:1066.8},0).wait(11).to({x:1066.9},0).wait(6).to({x:1149.1,y:399.1},0).wait(1).to({x:1231.3,y:400.7},0).wait(1).to({x:1313.6,y:402.2},0).wait(1).to({x:1395.8,y:403.8},0).wait(1).to({x:1478.1,y:405.4},0).wait(1).to({x:1560.4,y:407},0).wait(115).to({x:1561.3,y:446.9},0).wait(1).to({x:1562.3,y:486.8},0).wait(1).to({x:1563.2,y:526.8},0).wait(1).to({x:1564.2,y:566.7},0).wait(1).to({x:1565.1,y:606.7},0).wait(1).to({x:1566.1,y:646.6},0).wait(1).to({x:1567,y:686.5},0).wait(1).to({x:1568,y:726.5},0).wait(1).to({x:1568.9,y:766.4},0).wait(1).to({x:1569.9,y:806.4},0).wait(351));

	// red_one_box
	this.instance_16 = new lib.元件7();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1056.5,424.5,1,1,0,0,0,16.5,16.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(114).to({_off:false},0).wait(29).to({_off:true},1).wait(525));

	// red_forteen_box
	this.instance_17 = new lib.元件11();
	this.instance_17.parent = this;
	this.instance_17.setTransform(904,387,1,1,0,0,0,81,109);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(139).to({_off:false},0).wait(51).to({x:928.6,y:389.2},0).wait(1).to({x:953.2,y:391.4},0).wait(1).to({x:977.8,y:393.6},0).wait(1).to({x:1002.4,y:395.8},0).wait(1).to({x:1027,y:398},0).wait(1).to({x:1051.7,y:400.3},0).wait(218).to({x:1058.1,y:480.1},0).wait(1).to({x:1064.5,y:560},0).wait(1).to({x:1070.9,y:639.9},0).wait(1).to({x:1077.4,y:719.8},0).wait(1).to({x:1083.8,y:799.7},0).wait(252));

	// red_ten_box
	this.instance_18 = new lib.元件6();
	this.instance_18.parent = this;
	this.instance_18.setTransform(871.5,413,1,1,0,0,0,16.5,109);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(84).to({_off:false},0).wait(54).to({_off:true},1).wait(530));

	// red_hundred_box
	this.instance_19 = new lib.元件12();
	this.instance_19.parent = this;
	this.instance_19.setTransform(648,406,1,1,0,0,0,110,128);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(59).to({_off:false},0).wait(438).to({x:651.3,y:502.6},0).wait(1).to({x:654.6,y:599.1},0).wait(1).to({x:657.9,y:695.6},0).wait(1).to({x:661.3,y:792.2},0).wait(169));

	// student1
	this.instance_20 = new lib.元件3();
	this.instance_20.parent = this;
	this.instance_20.setTransform(198.5,866,1,1,0,0,0,121.5,214);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(4).to({_off:false},0).wait(610).to({_off:true},1).wait(54));

	// bg
	this.instance_21 = new lib.元件2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(970,622.5,1,1,0,0,0,949,422.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({x:970.5,y:621.6},0).wait(1).to({x:971,y:620.6},0).wait(1).to({x:971.5,y:619.7},0).wait(1).to({x:972,y:618.7},0).wait(665));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(981,740,1897,845);
// library properties:
lib.properties = {
	id: 'A9DC74C0FD7FEC45B91CF75BEF456FEE',
	width: 1920,
	height: 1080,
	fps: 5,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/06减法概念01_atlas_.png", id:"06减法概念01_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A9DC74C0FD7FEC45B91CF75BEF456FEE'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;