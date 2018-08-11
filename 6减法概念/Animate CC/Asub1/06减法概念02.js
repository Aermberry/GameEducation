(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"06减法概念02_atlas_", frames: [[1268,847,33,215],[1368,847,215,253],[1268,1064,33,167],[1303,847,33,134],[0,0,1667,845],[864,1067,235,8],[0,847,496,385],[0,1234,1366,132],[498,847,344,142],[844,847,344,142],[1190,847,76,218],[498,991,364,89]]}
];


// symbols:



(lib.bar_green_box = function() {
	this.spriteSheet = ss["06减法概念02_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.block_green_boxpng = function() {
	this.spriteSheet = ss["06减法概念02_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fiveParticle_green_box = function() {
	this.spriteSheet = ss["06减法概念02_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fourParticle_red_box = function() {
	this.spriteSheet = ss["06减法概念02_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.game_frame = function() {
	this.spriteSheet = ss["06减法概念02_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.line_black = function() {
	this.spriteSheet = ss["06减法概念02_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.math_frame = function() {
	this.spriteSheet = ss["06减法概念02_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.rectangle_less = function() {
	this.spriteSheet = ss["06减法概念02_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.stop_hover = function() {
	this.spriteSheet = ss["06减法概念02_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.stop_normal = function() {
	this.spriteSheet = ss["06减法概念02_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.twoBar_red_box = function() {
	this.spriteSheet = ss["06减法概念02_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.word_blue = function() {
	this.spriteSheet = ss["06减法概念02_atlas_"];
	this.gotoAndStop(11);
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


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AEkAAQAAEkhWDOQhVDOh5AAQh3AAhWjOQhWjOAAkkQAAkiBWjOQBWjPB3AAQB5AABVDPQBWDOAAEig");
	this.shape.setTransform(29.2,70.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件26, new cjs.Rectangle(-3,-3,64.3,146.7), null);


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiiAZIAAgxIFFAAIAAAxg");
	this.shape.setTransform(16.3,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件25, new cjs.Rectangle(0,0,32.6,5), null);


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


(lib.position_black_large = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AR2AAQAAKolPHhQlOHhnZAAQnYAAlPnhQlOnhAAqoQAAqnFOnhQFPnhHYAAQHZAAFOHhQFPHhAAKng");
	this.shape.setTransform(114.2,164.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.position_black_large, new cjs.Rectangle(-4,-4,236.3,336.4), null);


(lib.block_red_boxswf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgSFUIAlgeIAABMIglAegAgSEDIAlgdIAABMIglAegAgSCyIAlgdIAABMIglAegAgSBiIAlgeIAABMIglAegAgSARIAlgdIAABLIglAegAgSg/IAlgdIAABMIglAdgAgSiQIAlgdIAABMIglAegAgSjgIAlgeIAABMIglAegAgSkxIAlgdIAABMIglAegAgSmCIAlgdIAABMIglAeg");
	this.shape.setTransform(41.2,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AGGBfIhMgPIAmgeIBMAPIgmAegADpA/IAmgdIBPAPIgnAegADkA/IhOgQIAmgdIBPAPIgmAegACRAuIhOgPIAngeIBOAPIgmAegAgPAPIAmgdIBOAOIgmAegAgTAOIhOgOIAmgeIBOAPIglAdgAhmgBIhOgPIAngeIBOAPIgmAegAkHggIAngeIBOAPIgmAegAkLghIhOgPIAmgeIBPAPIgmAegAldgxIhOgPIAmgeIBOAPIgmAeg");
	this.shape_1.setTransform(0,-40.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AFNHTIAAhNIBMAPIAABNgAFJHRIhNgPIAAhNIBOAQIAABMgACpGyIAAhNIBPAQIAABMgABWGiIAAhNIBPAQIAABMgAAEGRIAAhMIBPAPIAABNgAFNGCIAAhNIBMAPIAABNgAhOGBIAAhMIBOAPIAABNgAigFxIAAhMIBPAPIAABNgAFJGAIhNgPIAAhNIBOAQIAABMgAjzFhIAAhMIBPAPIAABNgACpFhIAAhNIBPAQIAABMgAlGFRIAAhMIBPAPIAABNgABWFRIAAhNIBPAQIAABMgAmZFBIAAhMIBPAPIAABNgAAEFBIAAhNIBPAQIAABMgAhOExIAAhNIBOAQIAABMgAFNExIAAhNIBMAPIAABNgAigEhIAAhNIBPAQIAABMgAFJEwIhNgQIAAhMIBOAPIAABNgAjzERIAAhNIBPAQIAABMgACpEQIAAhMIBPAPIAABNgABWEAIAAhMIBPAPIAABNgAlGEAIAAhMIBPAPIAABNgAmZDwIAAhMIBPAPIAABNgAAEDwIAAhNIBPAQIAABMgAFODgIAAhMIBLAPIAABMgAhODgIAAhNIBOAQIAABMgAigDQIAAhNIBPAQIAABMgAFJDfIhNgQIAAhMIBOAPIAABNgAjzDAIAAhNIBPAQIAABMgACpC/IAAhMIBPAPIAABNgAlGCwIAAhNIBPAQIAABMgABWCvIAAhMIBPAPIAABNgAmZCgIAAhNIBPAQIAABMgAAECfIAAhMIBPAPIAABNgAhOCPIAAhMIBOAPIAABNgAFOCPIAAhMIBLAPIAABMgAigB/IAAhMIBPAPIAABNgAFJCOIhNgPIAAhNIBOAQIAABMgAjzBvIAAhMIBPAPIAABNgACpBvIAAhNIBPAQIAABMgABWBfIAAhNIBPAQIAABMgAlGBfIAAhNIBPAQIAABMgAAEBPIAAhNIBPAQIAABMgAmZBPIAAhNIBPAQIAABMgAFOA/IAAhMIBLAOIAABNgAhOA+IAAhLIBOAOIAABNgAFJA+IhNgQIAAhLIBOAPIAABMgAigAuIAAhLIBPAPIAABMgAjzAeIAAhLIBPAPIAABMgACpAeIAAhMIBPAQIAABLgAj3AiIAAgBIABAAIAAABgAlGAOIAAhLIBPAQIAABLgABWAOIAAhMIBPAQIAABLgAmZgBIAAhMIBPAPIAABMgAAEgBIAAhNIBPAQIAABLgAhOgRIAAhNIBOAQIAABMgAFOgRIAAhNIBLAPIAABNgAigghIAAhNIBPAQIAABMgAFJgSIhNgQIAAhMIBOAPIAABNgAjzgxIAAhNIBPAQIAABMgACpgyIAAhMIBPAPIAABNgAlGhBIAAhNIBPAQIAABMgABWhCIAAhMIBPAPIAABNgAAEhSIAAhMIBPAPIAABNgAmZhSIAAhMIBPAPIAABNgAFOhiIAAhMIBLAPIAABMgAhOhiIAAhNIBOAQIAABMgAFJhjIhNgPIAAhNIBOAQIAABMgAighyIAAhNIBPAQIAABMgAjziCIAAhNIBPAQIAABMgACpiDIAAhMIBPAQIAABMgAlGiSIAAhNIBPAQIAABMgABWiTIAAhMIBPAPIAABNgAAEijIAAhMIBPAPIAABNgAmZijIAAhMIBPAPIAABNgAhOizIAAhMIBOAPIAABNgAFOizIAAhMIBLAPIAABMgAFJizIhNgQIAAhMIBOAPIAABNgAigjDIAAhMIBPAPIAABNgAjzjTIAAhMIBPAPIAABNgACpjTIAAhNIBPAQIAABMgAlGjjIAAhMIBPAPIAABNgABWjjIAAhNIBPAQIAABMgAAEjzIAAhNIBPAQIAABMgAmZjzIAAhNIBPAQIAABMgAhOkDIAAhNIBOAQIAABMgAFNkDIAAhNIBMAPIAABNgAFJkEIhNgQIAAhMIBOAPIAABNgAigkUIAAhMIBPAPIAABNgACpkkIAAhMIBPAPIAABNgAjzkkIAAhMIBPAPIAABNgAlGk0IAAhMIBPAPIAABNgABWk0IAAhLIABAAIAAgBIABAAIBNAPIAABMgAmZlEIAAhMIBPAPIAABNgAAElEIAAhMIBPAPIgBAAIABAAIAABMgAhOlUIAAhMIBOAPIAABMgAiglkIAAhMIBPAPIAABMgAjzl0IAAhMIBPAPIAABMgAlGmEIAAhNIBPAQIAABMgAmZmUIAAhNIBPAQIAABMg");
	this.shape_2.setTransform(-2,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AGGH0IhSgQIgBAAIAAgBIhOgPIgBAAIhRgQIgBAAIhSgQIgBgBIhQgQIgBAAIAAAAIgBAAIhRgQIgBAAIhSgQIgBAAIhRgQIgBAAIAAAAIgBAAIhRgQIgBAAIhSgQIgBAAIAAhRIABAAIgBAAIAAihIABgBIgBAAIAAigIABAAIgBAAIAAihIABgBIgBAAIAAjyIABAAIAogfIABAAIBSAPIABABIBSAPIAAABIBSAPIABABIAAAAIBSAPIABABIBRAPIAAABIBSAPIABABIAAAAIBSAPIABABIBSAQIAAAAIBSAQIABABIBOAPIABAAIABABIAABPIgBABIAAAAIABABIAABPIgBABIABAAIAABQIgBAAIABABIAABPIgBABIAAAAIABABIAABOIgBABIABAAIAABQIgBAAIAAABIABAAIAABQIgBAAIABABIAABPIgBABIAAAAIABABIAABPIgBABIABAAIAABQIgBAAIgoAgIgBABIgBAAgAE4HiIBNAPIAAhMIhNgPgAGIGjIAABNIAmgeIAAhMgADnHRIBNAQIACAAIAAhNIhPgPgACUHBIBPAQIAAhNIhPgPgABCGxIBPAQIAAhNIhPgPgAgQGhIBOAPIAAhMIhOgQgAE4GRIBNAPIAAhMIhNgPgAhjGRIBPAPIAAhMIhPgQgAGIFTIAABMIAmgeIAAhMgAi1GBIBPAPIAAhMIhPgQgADnGAIBNAQIACAAIAAhNIhPgPgAkIFxIBPAPIAAhMIhPgQgACUFwIBPAQIAAhNIhPgPgAlbFhIBPAPIAAhMIhPgQgABCFgIBPAQIAAhNIhPgPgAmtFRIBPAPIAAhMIhPgQgAgQFQIBOAQIAAhNIhOgPgAhjFAIBPAQIAAhNIhPgPgAE4FAIBNAPIAAhMIhNgPgAGIECIAABMIAmgeIAAhMgAi1EwIBPAQIAAhNIhPgPgADnEwIBNAPIACAAIAAhMIhPgQgAkIEgIBPAQIAAhNIhPgPgACUEgIBPAPIAAhMIhPgQgABCEQIBPAPIAAhMIhPgQgAlbEQIBPAPIAAhMIhPgQgAmtEAIBPAPIAAhMIhPgQgAgQD/IBOAQIAAhNIhOgPgAE5DwIBMAPIAAhNIhMgPgAhjDvIBPAQIAAhNIhPgPgAGICxIAABNIAmgeIAAhMgAi1DfIBPAQIAAhNIhPgPgADnDfIBNAPIACAAIAAhMIhPgQgAkIDPIBPAQIAAhNIhPgPgACUDPIBPAPIAAhMIhPgQgAlbC/IBPAQIAAhNIhPgPgABCC/IBPAPIAAhMIhPgQgAmtCvIBPAQIAAhNIhPgPgAgQCvIBOAPIAAhMIhOgQgAhjCfIBPAPIAAhMIhPgQgAE5CfIBMAPIAAhNIhMgPgAGIBgIAABNIAmgeIAAhMgAi1CPIBPAPIAAhMIhPgQgADnCOIBNAQIACAAIAAhNIhPgPgAkIB/IBPAPIAAhMIhPgQgACUB+IBPAQIAAhMIhPgQgABCBuIBPAQIAAhNIhPgPgAlbBuIBPAQIAAhNIhPgPgAgQBeIBOAQIAAhNIhOgPgAmtBeIBPAQIAAhNIhPgPgAE5BOIBMAPIAAhMIhMgPgAhjBOIBPAPIAAhMIhPgQgAGIAQIAABMIAmgeIAAhLgADnA+IBNAPIACAAIAAhMIhPgPgAi1A+IBPAPIAAhMIhPgPgAkIAuIBPAPIAAhLIhPgQgACUAtIBPAQIAAhLIhPgQgAkMAwIAAABIABABIABAAIAAgCIgBAAIgBAAgAlbAeIBPAPIAAhLIhPgQgABCAdIBPAQIAAhMIhPgPgAmtAOIBPAPIAAhLIhPgQgAgQANIBOAQIAAhMIhOgPgAhjgCIBPAPIAAhLIhPgQgAE5gCIBMAOIAAhLIhMgPgAGIhAIAABLIAmgdIAAhMgAi1gSIBPAQIAAhNIhPgPgADngSIBNAPIACAAIAAhMIhPgQgAkIgiIBPAQIAAhNIhPgPgACUgiIBPAPIAAhMIhPgQgAlbgyIBPAQIAAhNIhPgPgABCgyIBPAPIAAhMIhPgQgAgQhCIBOAPIAAhMIhOgQgAmthCIBPAPIAAhMIhPgQgAE5hSIBMAPIAAhNIhMgPgAhjhTIBPAQIAAhMIhPgQgAGIiRIAABNIAmgeIAAhMgADnhjIBNAQIACAAIAAhNIhPgPgAi1hjIBPAQIAAhNIhPgPgAkIhzIBPAQIAAhNIhPgPgACUhzIBPAPIAAhMIhPgQgAlbiDIBPAQIAAhNIhPgPgABCiDIBPAPIAAhMIhPgQgAgQiTIBOAPIAAhMIhOgQgAmtiTIBPAPIAAhMIhPgQgAhjijIBPAPIAAhMIhPgQgAE5ijIBMAPIAAhNIhMgPgAGIjhIAABMIAmgeIAAhMgADnizIBNAPIACAAIAAhMIhPgQgAi1izIBPAPIAAhMIhPgQgAkIjDIBPAPIAAhMIhPgQgACUjEIBPAQIAAhNIhPgPgAlbjTIBPAPIAAhMIhPgQgABCjUIBPAQIAAhNIhPgPgAgQjkIBOAQIAAhNIhOgPgAmtjkIBPAQIAAhMIhPgQgAhjj0IBPAQIAAhNIhPgPgAE4j0IBNAPIAAhMIhNgPgAGIkyIAABMIAmgeIAAhMgADnkEIBNAPIACAAIAAhMIhPgQgAi1kEIBPAPIAAhMIhPgQgACUkUIBPAPIAAhMIhPgQgAkIkUIBPAPIAAhMIhPgQgAlbkkIBPAPIAAhMIhPgQgABCklIBPAQIAAhMIhOgQIAAAAIgBABIAAAAgAmtk0IBPAPIAAhMIhPgQgAgQk1IBOAQIAAhMIgBgBIABABIhOgPgAE5lCIBMAPIABAAIAmgeIhNgPgAhjlFIBPAQIAAhMIhPgPgADolTIBPAQIAmgeIhPgPgAi1lVIBPAQIAAhMIhPgPgACWljIBOAQIAAAAIAmgeIhOgPgAkIllIBPAQIAAhMIhPgPgABDlzIBOAPIAAAAIAmgeIhOgPgAlbl1IBPAQIAAhNIhPgPgAgPmDIBNAPIAngeIhPgPgAmtmFIBPAQIAAhNIhPgPgAhimTIBPAPIAAAAIAlgeIhNgPgAi1mjIBPAPIABAAIAmgeIhPgPgAkHmzIBOAPIAngeIhPgPgAlZnDIBOAPIAAAAIAmgeIhOgPgAmsnTIBOAPIABAAIAmgeIhPgPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-50,86.6,100.1);


(lib.bar_red_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgnGKIAAhNIBOAQIAABMgAgnE5IAAhNIBOAQIAABMgAgnDpIAAhNIBOAQIAABMgAgnCYIAAhNIBOAQIAABMgAgnBHIAAhMIBOAPIAABMgAgngJIAAhNIBOAQIAABLgAgnhZIAAhNIBOAQIAABMgAgniqIAAhNIBOAQIAABMgAgnj7IAAhNIBOAQIAABMgAgnlMIAAhNIBOAQIAABMg");
	this.shape.setTransform(-1.9,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AAUAWIhNgPIAmgdIBNAQIgmAcg");
	this.shape_1.setTransform(0,-40.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgSFUIAlgeIAABMIglAegAgSEDIAlgeIAABMIglAegAgSCyIAlgdIAABMIglAegAgSBiIAlgeIAABMIglAegAgSARIAlgdIAABLIglAegAgSg/IAlgdIAABMIglAdgAgSiQIAlgdIAABMIglAegAgSjgIAlgeIAABMIglAegAgSkxIAlgeIAABMIglAegAgSmBIAlgeIAABMIglAeg");
	this.shape_2.setTransform(4.2,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUGsIhQgQIgBgBIAAhQIAAgBIAAAAIAAihIAAAAIAAAAIAAihIAAgBIAAAAIAAigIAAAAIAAAAIAAihIAAgBIAAAAIAAhOIgBgBIAAAAIABgCIApgfIABAAIBRAQIAAAAIAAABIAABQIAAAAIAAABIAABPIAAABIAAAAIAAABIAABPIAAABIAAAAIAABQIAAAAIAAABIAAAAIAABQIAAAAIAAABIAABOIAAABIAAAAIAAABIAABPIAAABIAAAAIAABPIAAABIAAABIAABPIAAAAIAAABIAAABIAABPIAAAAIgoAhIgBAAIgBAAgAg7GaIBOAPIAAhNIhOgPgAAWFbIAABNIAmgeIAAhMgAg7FIIBOAQIAAhNIhOgPgAAWEKIAABNIAmgeIAAhMgAg7D4IBOAQIAAhNIhOgPgAAWC6IAABNIAmgfIAAhLgAg7CnIBOAQIAAhNIhOgPgAAWBpIAABNIAmgeIAAhMgAg7BWIBOAQIAAhNIhOgPgAAWAYIAABNIAmgeIAAhLgAg7AFIBOAQIAAhMIhOgPgAAWg3IAABMIAmgeIAAhMgAg7hKIBOAQIAAhNIhOgPgAAWiIIAABNIAmgfIAAhMgAg7ibIBOAQIAAhNIhOgPgAAWjZIAABNIAmgeIAAhMgAg7jsIBOAQIAAhNIhOgPgAAWkqIAABNIAmgeIAAhMgAg7k9IBOAQIAAhMIhOgQgAAWl6IAABNIAmgeIAAhNgAg5mLIBMAPIABAAIAmgdIhNgQg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-42.8,12.5,85.6);


(lib.元件1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AHJAAQAAFHiGDnQiFDni+AAQi9AAiGjnQiFjnAAlHQAAlGCFjnQCGjnC9AAQC+AACFDnQCGDnAAFGg");
	this.shape.setTransform(45.7,78.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1_1, new cjs.Rectangle(-4,-4,99.4,165.8), null);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AYEAAQAARbnDMUQnDMVp+AAQp9AAnDsVQnDsUAAxbQAAxaHDsUQHDsVJ9AAQJ+AAHDMVQHDMUAARag");
	this.shape.setTransform(154,269.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(-4,-4,316,546.3), null);


(lib.boy_smile103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AALgHIAAAEIgDAAIAAABIgCAAIAAACIgDAAIgFADIgDAAIAAACIgCAAIAAACIgDAC");
	this.shape.setTransform(-13.7,75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgCABIAFgB");
	this.shape_1.setTransform(-12.9,74.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgGAIIgDAAIAAgGIADAAIAAgDIADAAIAAgBIADAAIAAgDIABAAIADgCIAGAA");
	this.shape_2.setTransform(-14.1,75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEEAB1").s().p("AgMAIIAAgFIAEAAIAAgDIACAAIAAgCIADAAIAAgBIACAAIADgDIAFAAIAFgCIAAAFIgCAAIAAABIgDAAIAAACIgDAAIgFADIgCAAIAAACIgDAAIAAABIgCACg");
	this.shape_3.setTransform(-13.8,75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgHgIIAQAR");
	this.shape_4.setTransform(-2.2,76.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AgQgEIAGAAIADABIACAAIAAADIADAAIAFACIADAAIAFADIAGAA");
	this.shape_5.setTransform(-4.7,74.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AgiAJIAFgEIAGgCIAGgDIAFgCIADgBIAGgDIACAAIAFgBIAZAAIAGAB");
	this.shape_6.setTransform(-9.9,75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AgGAFIADAAIAAgBIACAAIAAgCIACAAIAAgCIADgDIAAgBIADAA");
	this.shape_7.setTransform(-14.1,76.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgDgBIADABIAAACIAEAA");
	this.shape_8.setTransform(-15.3,76.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgMADIAEAAIAAgCIAHAAIACgBIAGAAIAAgCIAGAA");
	this.shape_9.setTransform(-16.9,76.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAAAPIgCgCIAAgTIACgCIAAgEIADgC");
	this.shape_10.setTransform(-18.5,78.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("ABCAOIgtAAIgIgCIgJAAIgbgFIgOgGIgJgBQgCgCgDgBIgIgEIgGgG");
	this.shape_11.setTransform(-11.9,81.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AAYgNIgGAEIgDAEIAAACIgVANIgGACIgCAAIgDACIgGAA");
	this.shape_12.setTransform(-2.9,81.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AgFgMIADACIAAACIACACIAAADIADACIAAABIADACIAAAJIgDAC");
	this.shape_13.setTransform(-0.8,78.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0AE0F").s().p("AgBAsIgJgCIgIAAIgcgFIgPgGIgIgCIgFgDIgJgFIgGgFIgCgCIAAgUIACgBIAAgEIADgDIAAgBIADAAIAAgCIAJAAIACgCIAFAAIAAgCIAGAAIADACIAAACIAFAAIAAACIADAAIAAgCIAEAAIAAgCIACAAIAAgEIADgBIAAgCIADAAIAFgEIAGgCIAFgDIAPgHIACAAIAFgBIAaAAIAFABIAFAAIADADIADAAIAAABIADAAIAGAFIADAAIAFADIAFAAIARATIAAACIADACIAAABIADACIAAAEIADABIAAACIACABIAAAKIgIAGIgDADIAAADIgWAOIgFACIgDAAIgDACg");
	this.shape_14.setTransform(-9.5,78.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AgPADIADgCIAAgBIADAAIADgCIAHAAIADACIADAAIACABIAEAAIAAACIACAA");
	this.shape_15.setTransform(-17.2,74);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AAGAIIgDAAIAAgDIgDAAIAAgCIgCgBIAAgCIgDAAIAAgH");
	this.shape_16.setTransform(-18.2,75.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AAKgBIgGAAIAAABIgDAAIgBACIgGAAIgDgC");
	this.shape_17.setTransform(-16.7,76);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AAAgGIAAAEIACACIAAAGIgCAA");
	this.shape_18.setTransform(-15.5,74.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F0AE0F").s().p("AgCAMIgDgBIgCAAIAAgCIgDAAIAAgDIgDgBIAAgCIgDAAIAAgJIADgBIAAgCIADAAIADgCIAHAAIADACIADAAIACACIADAAIAAABIADAAIAAAEIADACIAAAGIgDAAIAAADIgGAAIAAACIgCAAIgDABg");
	this.shape_19.setTransform(-17.1,74.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AgXgFIAJAAIAFACIATAAIADACIACAAIADABIAAACIAGAD");
	this.shape_20.setTransform(-7.1,73.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AgeAFIADAAIADgBIAFgCIADAAIADgCIANAAIADgBIARAAIACgCIAGAAIADgC");
	this.shape_21.setTransform(-12.6,73.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AADADIgFgF");
	this.shape_22.setTransform(-15.4,74);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AA0AAIgFAAIgGgCIgOAAIgGgCIgOAAIgGACIgVAAIgMADIgIAAIgLAE");
	this.shape_23.setTransform(-9.9,73.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F0AE0F").s().p("Ag2ADIADAAIADgCIAFgBIADAAIADgCIAOAAIADgCIARAAIACgCIAFAAIADgBIAIAAIAGABIAUAAIADACIACAAIADACIAAACIAGADIgGAAIgFgCIgOAAIgGgBIgOAAIgGABIgVAAIgMADIgIAAIgLAFg");
	this.shape_24.setTransform(-10.2,73.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AADABIADAAIAAACgAgEgCIACACIAFAAIAAAB");
	this.shape_25.setTransform(14,72.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AgGAFIADAAIAAgCIADgCIAAgBIACAAIAAgBIACgDIADAA");
	this.shape_26.setTransform(12.7,72.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AAHAAIgDAAIgEAAIAAgBIgGAAAAEACIAAgC");
	this.shape_27.setTransform(12.7,73.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AAEgDIgDAAIAAACIgBAAIAAABIgDAAIAAAE");
	this.shape_28.setTransform(13.8,73.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEEAB1").s().p("AgGAIIAAgCIgGAAIAAgDIAEAAIAAgBIACgCIAAgBIADAAIAAgBIADgDIACAAIAAgCIACACIAGAAIAAADIACAAIAAABIgCAAIAAABIgDAAIAAACIgDAAIAAABIgCAAIAAAFg");
	this.shape_29.setTransform(13.3,73);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AgGAAIADgCIAHAAIAAACIADABIAAACIgDAA");
	this.shape_30.setTransform(12.4,71.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AgMABIAJAAIAAgBIAQAA");
	this.shape_31.setTransform(10.5,71.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AggAEIAIAAIADgCIAoAAIADgCIAGAAIAFgD");
	this.shape_32.setTransform(5.9,72.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AgLAMIADAAIAAgCIACgBIAAgEIADgEIAAgDIADgCIAAgBIACAAIAAgCIAFgEIAGAA");
	this.shape_33.setTransform(1.3,73.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AAQAEIgMAAIAAgCIgEAAIAAgCIgGAAIgDgBIgDAAIgCgC");
	this.shape_34.setTransform(1.6,75.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("ABDAKIgIgCIgRAAIgJgBIgIAAIgIgCIgJAAIgSgEIgJAAIgvgK");
	this.shape_35.setTransform(9.8,76.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AAlAEIgGgCIgUAAIgCgCIghAAIgDgBIgFgCIgDAA");
	this.shape_36.setTransform(20.2,78.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AAZgJIAAAEIgFADIAAACIgDABIgGACIgDACIgCAAIgDACIgFAAIgDABIgLAAIgFACIgDAA");
	this.shape_37.setTransform(26.3,77.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AADgFIgDABIAAALIgCAA");
	this.shape_38.setTransform(29.1,75.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AgNgIIADAAIACABIADAAIADADIAAABIACAAIADACIAAABIADAAIADACIAAACIACACIAAACIADAB");
	this.shape_39.setTransform(28,74.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AgUgEIAIAAIADACIAGAAIAAACIADABIABAAIADACIADAAIADACIALAA");
	this.shape_40.setTransform(24.5,72.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("AghADIAJAAIACgCIAJAAIAFgBIAGAAIAFgCIAfAA");
	this.shape_41.setTransform(19,72.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AgCADIAAgDIACAAIAAgCIADAA");
	this.shape_42.setTransform(15.4,73.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AgDAEIADAAIAAgFIABAAIAAgCIADAA");
	this.shape_43.setTransform(14.7,73.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AgNgDIADAAIADADIADAAIACAAIAIAAIAAACIAFAAIADAC");
	this.shape_44.setTransform(12.9,74.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("AAHgFIgDAAIAAADIgEACIAAACIgDAAIAAACIgDAC");
	this.shape_45.setTransform(12.2,72.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F0AE0F").s().p("ABbAkIgGgCIgTAAIgDgDIgiAAIgDgBIgFgCIgDAAIgJgCIgPAAIgJgBIgIAAIgJgDIgIAAIgUgDIgIAAIgpgJIgGgCIgLAAIAAgCIgGAAIAAgDIgFAAIgDgBIgDAAIgDgCIADAAIAAgBIADgCIAAgEIADgDIAAgEIACgCIAAgBIADAAIAAgCIAGgFIAOAAIADgBIApAAIADgCIAFAAIAGgEIAIAAIAAgCIARAAIADgBIAIAAIAAABIADACIAAACIgDAAIAAACIgCAAIAAACIgGADIAAADIgDAAIAAACIgDABIAAAEIADAAIADACIADAAIADACIAIAAIAAABIAGAAIACACIAAgCIADAAIAAgFIACAAIAAgCIADAAIAAgDIADAAIAAgCIACAAIAAgDIAJAAIADgCIAIAAIAGgBIAFAAIAGgCIAnAAIADACIAGAAIAAABIACACIADAAIADADIADAAIADACIAOAAIACABIADAAIADACIAAACIADAAIADACIAAACIACAAIADABIAAACIADACIAAACIADABIAAACIgDABIAAAMIgDAAIAAAEIgFADIAAADIgDABIgGACIgDACIgCAAIgDABIgGAAIgDADIgLAAIgFACg");
	this.shape_46.setTransform(14.7,75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("AhIAJIALACIAtAAIALgCIAIAAIAlgHIAIgDIAIgCIARgH");
	this.shape_47.setTransform(-7.5,68.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AgHgCIADAAIACACIACAAIADABIADAAIAAACIACAA");
	this.shape_48.setTransform(-15.6,68.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AAAAOIgCgBIAAgKIACgBIAAgEIADgBIAAgKIgDAA");
	this.shape_49.setTransform(-16.5,69.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AgGAIIADAAIAAgDIAEgDIAAgCIADAAIAAgBIADgBIAAgF");
	this.shape_50.setTransform(-17.2,72);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("AAHABIgIAAIAAgBIgFAA");
	this.shape_51.setTransform(-17.2,73.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("AA0gFIgOAAIgFABIgPAAIgFADIgNAAIgGABIgIAAIgGABIgGAAIgOAEIgFAAIgGAC");
	this.shape_52.setTransform(-11.3,72.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("AAZAQIgDgDIgCgDIgGgEIAAgDIgGgDIgFgCIgDgEIgHgFIgGAAIgDgDIgFgBIgDAA");
	this.shape_53.setTransform(-3.6,73.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AADgRIAAAXIgDACIAAAIIgCAC");
	this.shape_54.setTransform(-0.8,73.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("AAAgVIADAEIAAARIgDACIAAAIIgCACIAAAJ");
	this.shape_55.setTransform(-0.2,69.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E9530E").s().p("ABMAmIgDgDIgGgEIAAgEIgFgEIgGgCIgDgDIgIgGIgGAAIgCgCIgGgCIgRAAIgFACIgNAAIgGACIgOAAIgGACIgIAAIgGACIgGAAIgOAEIgFAAIgGABIgIAAIAAgBIgGAAIAAgEIADAAIAAgCIAGgEIAAgCIACAAIAAgBIADgCIAAgEIgDgBIAAgKIADgBIAAgEIADgCIAAgJIADACIADAAIACACIADAAIAAABIADAAIAAACIALACIAtAAIALgCIAIAAIAkgHIAJgEIAIgCIARgHIADAEIAAAQIgDAEIAAAIIgDABIAAAhIgDACIAAAHIgCACIAAACg");
	this.shape_56.setTransform(-8.9,71.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("Ag0AFIAwAAIAHgCIAOAAIAFgCIAGAAIAIgBIAGgCIAFAAIAGgC");
	this.shape_57.setTransform(6.4,66.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("AADASIAAgdIgDgCIAAgCIgCgC");
	this.shape_58.setTransform(1.4,69.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,1,1).p("AAkAAIgCACIgsAAIgCgCIgMAAIgDgBIgIAA");
	this.shape_59.setTransform(5.3,71.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("AALgCIgDACIAAABIgFAAIAAACIgNAA");
	this.shape_60.setTransform(10,70.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("AADgUIAAAGIgDACIAAAMIgCACIAAAT");
	this.shape_61.setTransform(11.4,68.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E9530E").s().p("AgVAYIgDgBIgLAAIgDgCIgIAAIAAgdIgDgCIAAgCIgDgCIAwAAIAHgCIAOAAIAFgCIAGAAIAIgBIAGgDIAFAAIAGgBIAAAFIgDACIAAANIgDACIAAASIgCACIAAACIgGAAIAAACIgOAAIgDABg");
	this.shape_62.setTransform(6.4,68.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,1).p("AgDACIAAgCIADAAIAAgBQAAABABAAIADAAIAAAC");
	this.shape_63.setTransform(-9.9,52.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AAOAOIgJgFIAAgCIgFgEIAAgCIgCgBIAAgCIgGgDIAAgCIgCgCIAAgBIgDgD");
	this.shape_64.setTransform(-8.9,54.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(1,1,1).p("AAPgEIgFAAIAAACIgGAAIAAACIgCAAIgGADIgCAAIgDACIgFAA");
	this.shape_65.setTransform(-5.9,55.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AgYgKIAFABIAGAEIAAACIATAMIACAAIAGACIALAA");
	this.shape_66.setTransform(-7,54.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AABASIAAgCIgHgGIAAgCIgFgDIAAgCIgEgCIAAgBIgFgEIAAgCIgDgBIAAgCIgDgCIAAgEIADAAIAAgCIADACIADAAIAAACIAGACIAFAEIAAABIASAMIAEAAIAFACIAGAAIAAACIgGAAIAAACIgDAAIgGAEIgCAAIgDACg");
	this.shape_67.setTransform(-7.7,54.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AgGgDIADAAIAEADIAAACIADAAIAAACIADAA");
	this.shape_68.setTransform(-28.4,35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(1,1,1).p("AAEAGIgCgBIgBAAIAAgCIgBgCIAAgBIgDAAIAAgEIADAAIAAgBIABAA");
	this.shape_69.setTransform(-29.3,35.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AgCBYIAAgWIACgMIAAhtIADgLIAAgV");
	this.shape_70.setTransform(-29.4,44.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("AABgBIgCAAIAAAD");
	this.shape_71.setTransform(-29.5,53.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AAFgSIAAAFIgCACIAAAIIgDADIAAADIgCACIAAAIIgDADIAAAE");
	this.shape_72.setTransform(-28.9,51.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(1,1,1).p("AAAgbIADAEIAAAJIgDAEIAAAZIgCAEIAAAJ");
	this.shape_73.setTransform(-28,46.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AgBgXIAAAfIACABIAAAP");
	this.shape_74.setTransform(-28.1,41.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(1,1,1).p("AACgNIgCADIAAAKIACABIAAAN");
	this.shape_75.setTransform(-28.4,37.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("AAAgCIAHAFIgNAA");
	this.shape_76.setTransform(-27.6,35.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgNBdIAAgSIADgLIAAhtIACgMIAAgWIADAAIgDgCIAAgCIgCgCIAAgCIgDAAIAAgEIADAAIAAgCIAFAAIAFAFIAAABIADAAIAAACIADAAIAIAGIgOAAIAAABIgCACIAAAMIACABIAAAuIADABIAAAPIADACIAAAKIgDAEIAAAaIgDAEIAAAPIgCACIAAAHIgDAEIAAADIgDADIAAAHIgCAEIAAADg");
	this.shape_77.setTransform(-28.3,44);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("AgbgMIAIAAIADABIAGADIACAAIAIAFIAFACIADADIAPAJIAFAC");
	this.shape_78.setTransform(-5.5,31.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(1,1,1).p("AgmAOIAIgFIADgEIALgEIADgBIALgDIAFAAIADgCIAFgCIAGAAIALgFIAGAAIAFgB");
	this.shape_79.setTransform(-12.3,31.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,1,1).p("AAHAjIgDgGIAAgEIgCgEIAAgJIgCgEIAAgQIgDgFIAAgRIgDgE");
	this.shape_80.setTransform(-15.5,36.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1,1,1).p("AAQA1IgGgHIgQgnIAAgGIgGgMIAAgPIgCgGIAAgU");
	this.shape_81.setTransform(-13.3,45.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1,1,1).p("AALAWIgDgEIAAgGIgCgCIAAgEIgDgBIAAgFIgDgEIAAgBIgCgEIAAgCIgDgEIgCgCIgDgE");
	this.shape_82.setTransform(-10.6,53.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(1,1,1).p("AgGAAIADgBIACAAIACABIADAAIAAACIADAA");
	this.shape_83.setTransform(-10.2,55.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,1,1).p("AgWAJIAEgCIACAAIADgCIACAAIAEgCIADAAIACgCIACAAIADgBIADAAIAFgCIADAAIADgBIAAgDIADgBIADAA");
	this.shape_84.setTransform(-13.1,56.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1,1,1).p("AgIAEIADAAIAAgCIADAAIACgCIADAAIAAgBIADAAIAAgCIACAA");
	this.shape_85.setTransform(-16.2,57.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1,1,1).p("AAIAVIAAgGIgCgCIAAgGIgDgCIAAgDIgDgCIAAgBIgCgEIAAgFIgDgCIAAgGIgDgC");
	this.shape_86.setTransform(-16.2,59.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(1,1,1).p("AgCAZIACgDIAAgEIADgCIAAgo");
	this.shape_87.setTransform(-15.7,64.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,1,1).p("AAOAGIgFAAIgDgCIgGAAIgCgBIgCAAIAAgCIgDAAIgGgDIAAgE");
	this.shape_88.setTransform(-14.5,67.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(1,1,1).p("AA8gIIgFAEIgtAKIgJAAIgEACIgJAAIgIABIgOAAIgIgBIgRAA");
	this.shape_89.setTransform(-7.1,67.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1).p("AAEgnIgDAFIAAAGIgBAEIAAAOIgDAGIAAAOIADAGIAAAY");
	this.shape_90.setTransform(-0.9,62.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(1,1,1).p("AABgXIAAAPIADAEIAAAOIgDAEIAAACIgBAEIAAABIgDAD");
	this.shape_91.setTransform(-0.1,56.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1).p("AAfhLIgGAKIgDALIgFAJIgGATIgFAJIgGASIgFAJIgFATIgGAJIgIAcIgGAK");
	this.shape_92.setTransform(3.1,46.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(1,1,1).p("AAGgFIgEAAIAAABIgCAAIAAACIgDAAIAAAFIgDAAIAAAD");
	this.shape_93.setTransform(6.9,38.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1,1,1).p("AgDAIIADgCIAAgCIABgBIAAgCIADgBIAAgI");
	this.shape_94.setTransform(7.2,38.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(1,1,1).p("AgDATIAAgIIADgCIAAgHIABgCIAAgHIADgBIAAgK");
	this.shape_95.setTransform(6.3,41.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("AgGAWIAAgGIADgEIAAgHIACgEIAAgFIACgBIAAgEIADgCIAAgGIADgE");
	this.shape_96.setTransform(5.2,45.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(1,1,1).p("AgJAoIAAgFIgDgGIAAgGIADgDIAAgGIADgEIADgFIAEgEIAGgLIADgDIADgGIAAgU");
	this.shape_97.setTransform(3.3,51.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1,1,1).p("AgFAGIADAAIAFgDIAAgCIACAAIAAgFIgCgB");
	this.shape_98.setTransform(2,56.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(1,1,1).p("AgIAeIAAgPIAEgEIAAgDIACgEIAAgEIACgDIAAgEIADgDIAAgEIACgEIAAgHIAEgE");
	this.shape_99.setTransform(0.6,60.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1,1,1).p("AAFASIgFgEIAAgCIgCgCIAAgEIgDgBIAAgW");
	this.shape_100.setTransform(0.3,64.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(1,1,1).p("AAygEIgZAHIgFAAIgGACIg/AA");
	this.shape_101.setTransform(5.9,66.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1,1,1).p("AgBgBIADAD");
	this.shape_102.setTransform(10.8,65.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(1,1,1).p("AALgxIgDAFIgFAFIgNAjIAAARIAFANIAAAIIAFAFIADAGIAFAF");
	this.shape_103.setTransform(9.8,60.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(1,1,1).p("AgQAMIAGgEIADAAIACgCIAAgBIAFgEIAAgBIAIgGIADAAIADgBIAAgDIADgB");
	this.shape_104.setTransform(9.2,56.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1,1,1).p("AAbgSIgcASIgFACIgDADIgGAEIgCAEIgGACIgDAE");
	this.shape_105.setTransform(10.2,55.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1,1,1).p("AAOgdIAAAEIgDADIAAAEIgFAHIAAAEIgGAHIAAADIgFAIIAAAEIgFAIIAAADIgDAE");
	this.shape_106.setTransform(14.3,50.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(1,1,1).p("AAahTIgWBTIgFALIgHAeIgHALIgCALIgGAKIgDAL");
	this.shape_107.setTransform(18.3,39.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(1,1,1).p("AgzAOIARAAIAZgHIAFgEIAFgCIAGgDIAGgBIAFgEIAUgGIAOAA");
	this.shape_108.setTransform(15.8,32.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(1,1,1).p("AgbgBIADABIALAAIADACIAgAAIAGgD");
	this.shape_109.setTransform(7.8,33.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1,1,1).p("AgbgBIARAAIAGABIAKAAIADACIAIAAIAGgCIACAAIADgB");
	this.shape_110.setTransform(2.3,33.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(1,1,1).p("AgKgCIAIAAIAAACIAFAAIAAABIADAAQABABABABIADAA");
	this.shape_111.setTransform(-1.6,33.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E9530E").s().p("AiOC9IgJAAIgTgGIgFgDIgEgEIAAgCIAHgTIAAgiIgPgnIgDgCIADgCIADAAIAFgBIAEgCIAAgCIADAAIAIgEIAIgCIAJgEIALgBIAGgGIACAAIADgCIACAAIAEACIACAAIADACIgDgJIgGgIIgFgRIgIgJIAAgCIgLgSIgPgpIgFgpIAAgFIgFgOIgDgNIAAgNIgEgNIAAgNIgCgEIALgJIAOgGIA2gNIALACIAWAJIAIAIIAJAFIAGACIAIAAIAAACIAFAAIAAACIAEAAIACACIAUAAIAGACIAJAAIADACIAJAAIAGgCIACAAIADgCIADACIALAAIADACIAgAAIAHgEIAQAAIAZgIIAGgDIAGgCIAFgEIAGgCIAGgDIAUgGIANAAIgWBUIgGALIgIAeIgGAMIgDALIgFAJIgEALIAAAEIgCAEIAAADIgGAHIAAAEIgFAHIAAAEIgGAHIAAAEIgFAIIAAADIgEAEIgcATIgFACIgDADIgFAEIgDAEIgFACIgEADIAAACIAGgDIADAAIADgCIAAgCIAFgEIAAgCIAIgFIADAAIAEgCIAAgCIACgCIgCAGIgHAFIgCAIIgLAaIAAATIAFANIAAAHIAGAGIACAGIAHAFIACAEIgZAHIgFAAIgHACIg+AAIgGgEIAAgCIgCgBIAAgEIgDgCIAAglIADgEIAAgEIACgEIAAgDIADgEIAAgEIADgEIAAgDIADgEIAAgIIADgDIAAgCIADAAIAEgEIAAgCIADAAIAAgFIgDgCIAAgGIgDgFIAAgGIADgEIAAgFIADgEIACgGIAGgDIAGgMIADgDIADgGIAAgZIACgEIAAgHIADgEIAAgGIADgCIAAgEIACgBIAAgGIAEgEIAAgJIAIgUIAAgKIADgEIABgDIADgCIAAgIIgEACIgDACIgDACIgDAEIAAADIguBxIgJAcIgFAKIAAAJIACAJIAAAKIgFARIgDACIgFAOIAAAPIgEAPIAEAQIAAAUIgUAIIgtAJIgZACg");
	this.shape_112.setTransform(2,49.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(1,1,1).p("AAAgEIABAJ");
	this.shape_113.setTransform(-17.7,29.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1,1,1).p("AgGABIADAAIAAgBIAKAA");
	this.shape_114.setTransform(-18.6,28.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(1,1,1).p("AAEAjIAAgEIgDgGIAAgHIgBgGIAAgIIgDgEIAAgNIADgEIAAgEIABgFIAAgEIADgE");
	this.shape_115.setTransform(-19.7,32.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1,1,1).p("AgXABIAJAAIACACIAQAAIADgCIAIAAIADgBIADAAIADgC");
	this.shape_116.setTransform(-21.7,36);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1,1,1).p("AgGgSIAAARIgDADIAAADIADACIAAAEIADACIAAACIADACIAEAAIAGAC");
	this.shape_117.setTransform(-25.1,34.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1,1,1).p("AgMAIIAEAAIACgCIADAAIAAgCIADAAIAAgBIAEgDIAAgCIAJgG");
	this.shape_118.setTransform(-27,33.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(1,1,1).p("AgKgIIADADIAAABIACACIAAACIADAAIAAABIAKAHIADAA");
	this.shape_119.setTransform(-29.4,33.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1,1,1).p("AgZAFIALAAIACgBIAJAAIADgCIACAAIADgCIACAAIADAAIAJAAIACgDIADAAIADgB");
	this.shape_120.setTransform(-33.2,32.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1,1,1).p("AAAANIAAgLIABgCIAAgM");
	this.shape_121.setTransform(-36,34.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1,1,1).p("AgYAnIAWgRIACgFIADgEIADgFIAFgEIAAgFIAJgRIACgDIAAgGIADgGIAAgF");
	this.shape_122.setTransform(-38.7,39.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(1,1,1).p("AADADIgFgF");
	this.shape_123.setTransform(-40.9,44.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1,1,1).p("AApAmIgMgWIgFgEIgGgFIgDgGIgFgDIgGgGIgsgd");
	this.shape_124.setTransform(-36.6,48.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(1,1,1).p("AAIAVIgDgBIAAgGIgFgGIAAgCIgCgDIAAgCIgDgDIAAgBIgDgFIAAgM");
	this.shape_125.setTransform(-31.6,54.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1,1,1).p("AAbgEIgDAAIgDACIgCAAIgDACIgGAAIgDABIgFAAIgFACIgIAAIgGACIgDAAIgCgCIgDAA");
	this.shape_126.setTransform(-28.2,56.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1,1,1).p("AAGgKIgDABIAAALIgDAAIAAAFIgCAAIAAACIgDAC");
	this.shape_127.setTransform(-24.9,54.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(1,1,1).p("AALglIgFAIIgDAFIgDAEIAAAGIgCAEIAAAOIgDAFIAAAKIgCAEIAAAJIgDAG");
	this.shape_128.setTransform(-23.2,49.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1,1,1).p("AAAAGIAAgDIACAAIAAgCIgCgBIAAgF");
	this.shape_129.setTransform(-21.9,46.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1,1,1).p("AACApIAAg3IgCgFIAAgV");
	this.shape_130.setTransform(-21.9,51.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(1,1,1).p("AARAFIghgJ");
	this.shape_131.setTransform(-20.2,55.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1,1,1).p("AAOAAIgFAAIgDABIgGAAIgCgBIgLAA");
	this.shape_132.setTransform(-17.1,56.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(1,1,1).p("AgIgeIAAALIADAEIAAAEIADAEIAAADIACAEIAAADIADAEIAAAEIADADIAAAEIACAEIAAAJ");
	this.shape_133.setTransform(-16.5,53.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1,1,1).p("AALAfIAAgJIgDgEIAAgEIgCgDIAAgEIgDgEIAAgDIgDgEIAAgDIgFgIIAAgEIgFgHIAAgE");
	this.shape_134.setTransform(-16.2,53.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(1,1,1).p("AARgHIgDADIgDAAIAAABIgDACIgCAAIgGADIgFAAIgFAEIgDAAIgDAC");
	this.shape_135.setTransform(-13.4,55.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1,1,1).p("AgCgEIACADIAAABIADABIAAACIgDACIgCAA");
	this.shape_136.setTransform(-11.5,54.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(1,1,1).p("Agch3IAIAtIAAARIAFAeIAAAPIAJAuIAFAPIACANIAMAeIAQAc");
	this.shape_137.setTransform(-14.7,41.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFF06E").s().p("ABbCMIgDgCIgLAAIgigJIAAg4IgDgGIAAgYIADAAIAAgCIgDgCIAAgFIgFAHIgDAGIgDADIAAAGIgDAEIAAAPIgCAFIAAAKIgDAEIAAAJIgDAFIgDACIAAAMIgDAAIAAAFIgCAAIAAACIgDACIgDAAIgDACIgCAAIgCABIgGAAIgDADIgFAAIgGABIgIAAIgGACIgDAAIgDgCIgCAAIgDgBIAAgGIgDgEIgDgCIAAgCIgDgEIAAgBIgCgEIAAgCIgDgEIAAgNIgMgWIgFgEIgGgGIgDgFIgFgEIgGgFIgtgeIgFgGIAWgQIADgFIADgEIADgGIAFgDIAAgGIAJgRIACgEIAAgFIADgGIAAgRIADgCIAAgNIALAAIALgBIAJgEIAUgEIACgCIADAEIADAGIAOAJIADAAIALgEIAGgHIAHgGIAAAPIgDAJIAGAIIAIAEIAGABIAIAAIALACIAJAAIARgDIACgCIgIgoIAGgaIACgDIADAAIADgDIADAAIADgBIACABIADAKIAJAtIAAARIAGAeIAAAPIAIAtIAGAPIACANIAMAeIAQAcIAAACIADACIAAACIADACIAAABIgDADIgDAAIAAABIgCACIgDAAIAAACIgDACIgDAAIgFAEIgGAAIgGAEIgCAAIgDABIAAgJIgDgEIAAgDIgDgEIAAgEIgDgEIAAgEIgCgDIAAgEIgGgIIAAgDIgGgIIAAAIIADADIAAAEIADAEIAAAEIADADIAAAEIADAEIAAAEIACAEIAAADIADAEIAAAJIgFAAIgDACg");
	this.shape_138.setTransform(-26.2,42.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(1,1,1).p("AgIABIADAAIAAgBIANAA");
	this.shape_139.setTransform(-39.8,27.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(1,1,1).p("AgRARIADgEIAAgCIACgCIAAgDIAJgGIAAgDIAQgLIAFgC");
	this.shape_140.setTransform(-42.5,29.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(1,1,1).p("AAHgHIgIAPIgFAA");
	this.shape_141.setTransform(-43.6,30.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(1,1,1).p("AAUgJIgDABIgFAAIgDADIgGAAIgFADIgCAAIgDACIAAABIgIAGIAAABIgDAC");
	this.shape_142.setTransform(-40.9,28.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFF06E").s().p("AgZATIAAgCIACgEIAAgCIADgCIAAgEIAIgFIAAgDIAQgLIAGgCIACAAIAAgCIAPAAIgDACIgFAAIgEACIgFAAIgGAEIgCAAIgCACIAAABIgIAGIAAABIgEACIAAACIgIAPg");
	this.shape_143.setTransform(-41.6,29.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(1,1,1).p("AgIgBIALAAIAAABIACAAIADAC");
	this.shape_144.setTransform(-40,25.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(1,1,1).p("AgZARIAFgEIADgEIAFgDIAEgEIAIgFIAFgCIAIgFIAGgCIACgCIAFgC");
	this.shape_145.setTransform(-43.6,27.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1,1,1).p("AAHAMIgDgBIAAgFIgDAAIAAgFIgCgBIAAgGIgCAAIAAgEIgDgB");
	this.shape_146.setTransform(-45.5,30.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(1,1,1).p("AAegSIgMAAIgLADIgKAHIgGACIgCAEIgDACIgGAGIgDACIgFAIIAAAD");
	this.shape_147.setTransform(-41.9,29.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(1,1,1).p("AAAgGIABAM");
	this.shape_148.setTransform(-39.1,26.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFF06E").s().p("AgZAbIAAgDIgCAAIAAgGIgDgCIAAgGIgDAAIAAgDIgDgCIAGgFIADgCIAGgEIACgDIAJgGIAGgCIAGgGIAGgBIADgDIAFgBIAMAAIAAABIADAAIADADIAAABIACAOIgLAAIgLADIgMAGIgEADIgCAEIgEACIgFAHIgDACIgFAHIAAAEg");
	this.shape_149.setTransform(-42.6,28.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(1,1,1).p("AgDgLIADACIAAAEIABACIAAADIADAAIAAAM");
	this.shape_150.setTransform(-17.8,26.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(1,1,1).p("AgGANIAAgHIADgCIAAgEIACgBIAAgDIACgCIAAgCIADAAIAAgCIADgC");
	this.shape_151.setTransform(-18.9,27);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1,1,1).p("AALAAIgVAB");
	this.shape_152.setTransform(-18.5,28.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFF06E").s().p("AgKAGIADgCIAAgEIACgBIAAgDIADgCIAAgCIACAAIAAgCIADgCIADACIAAAEIACACIAAADIADAAIAAAMIgVACg");
	this.shape_153.setTransform(-18.5,27);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(1,1,1).p("AgWgIIAtAR");
	this.shape_154.setTransform(-5,25.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(1,1,1).p("AgGAAIANAA");
	this.shape_155.setTransform(-7.9,24.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(1,1,1).p("AANAJIgDgDIgDAAIgFgDIgCAAIAAgCIgDAAIgFgDIAAgBIgEAAIAAgF");
	this.shape_156.setTransform(-7.4,25.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(1,1,1).p("AAaAKIgCAAIgGgCIgGAAIgFgBIgDgCIgDAAIgHgFIgGgCIgIgGIgDAAIgDgB");
	this.shape_157.setTransform(-3.4,27.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(1,1,1).p("AAgACIguAAIgGgCIgDAAIgFgBIgDAA");
	this.shape_158.setTransform(2.4,28.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(1,1,1).p("AAOgBIgGAAIAAABIgSAAIAAACIgDAA");
	this.shape_159.setTransform(7,28.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(1,1,1).p("Ag3gJIAGAEIAOADIAFACIAXAFIAFAAIANADIAJAAIAJACIAbAA");
	this.shape_160.setTransform(2.8,27.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AANAVIgFgBIgDAAIgFgCIgGAAIgFgCIgGAAIgFgCIgDgCIgDAAIgIgFIgGgDIgIgEIgDAAIgGgEIgDAAIgFgDIgDAAIAAgCIgDAAIgFgEIAAgCIgDAAIAAgGIAOAAIAAACIAtARIAFADIAJABIAKAFIAIABIAGACIAIACIAGAAIAOAEIAIAAIAJACIAVAAIAAACIgSAAIAAABg");
	this.shape_161.setTransform(-0.4,26.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(1,1,1).p("AgJgPIATAf");
	this.shape_162.setTransform(-20.9,18.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(1,1,1).p("AgOACIAAgCIAFAAIADgBIAKAAIADABIAJAA");
	this.shape_163.setTransform(-23.3,17.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(1,1,1).p("AAKAkIAAgTIgDgEIAAgFIgDgFIAAgEIgEgHIAAgEIgGgKIAAgDIgDgGIAAgE");
	this.shape_164.setTransform(-23.9,20.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(1,1,1).p("AASgRIgIAGIAAACIgDACIgDADIgHAFIAAACIgDADIgIAGIAAACIgDAE");
	this.shape_165.setTransform(-21.1,22.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(1,1,1).p("AgCgCIAFAF");
	this.shape_166.setTransform(-19.6,20.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFF06E").s().p("AgIASIgCgDIAAgGIgDgEIAAgFIgFgHIAAgEIgEgFIgCgEIAAgDIgDgGIAAgGIAFAAIAEgCIAKAAIADACIAIAAIATAgIAGAFIgJAFIAAACIgCACIgDAEIgIAGIAAACIgDADIgIAGIAAABIgDAFg");
	this.shape_167.setTransform(-22.1,20.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(1,1,1).p("AgNgCIAGAAIAAACIAFAAIAAABIACAAIADACIALAA");
	this.shape_168.setTransform(-10.3,16);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(1,1,1).p("AglAgIAGgEIADgEIALgHIADgGIAPgLIADgDIAGgFIAFgEIADgEIALgHIADgEIAGgE");
	this.shape_169.setTransform(-15.5,18.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(1,1,1).p("AAAABIgCAAIAAgBIAFAA");
	this.shape_170.setTransform(-19.6,22.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(1,1,1).p("AgUAYIAAgEIADgEIADgCIAAgEIADgEIACgBIADgEIADgBIADgEIACgBIACgEIADgCIADgEIALgH");
	this.shape_171.setTransform(-21.7,24.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(1,1,1).p("AgDAnIAAghIADgGIAAgOIABgEIAAgPIADgF");
	this.shape_172.setTransform(-24.2,31.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(1,1,1).p("AATACIgdAAIgDgCIgDAAIgCgB");
	this.shape_173.setTransform(-22.7,35.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(1,1,1).p("AABgnIgBAFIAAAEIgDAGIAAAdIADAFIAAAKIABAFIAAAEIADAGIAAAF");
	this.shape_174.setTransform(-21.1,31.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(1,1,1).p("AA8g2IgWAVIgLAFIgJAHIgRAMIgHAHIgIAFIgfAcIgLARIgDAH");
	this.shape_175.setTransform(-15,21.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFF06E").s().p("AhFBiIgDgCIgDAAIgDgCIAAghIADgGIAAgPIADgEIAAgPIADgFIAAgEIACgEIAEgCIAAgDIAIgJIADgCIACgDIAEgCIACgEIADgCIACgDIAMgIIgDAAIAAgCIAFAAIAAgCIAHgDIACgEIALgIIADgFIAQgLIADgEIAFgGIAGgEIADgDIALgIIADgDIAFgEIAGAAIAAABIAGAAIAAADIACAAIADABIAMAAIgXAVIgLAGIgZASIgJAIIgIAFIgeAcIgMAQIgFANIAAAEIgCAGIAAAdIACAGIAAAJIADAGIAAAEIACAFIAAAGg");
	this.shape_176.setTransform(-16.8,25.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(1,1,1).p("AgFgBIADAAIAAACIACAAIADABIACAA");
	this.shape_177.setTransform(-13.1,15);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(1,1,1).p("AgNABIAGAAIAAgBIAPAAIAAABIAGAA");
	this.shape_178.setTransform(-15.1,14.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(1,1,1).p("AgSALIADgCIACAAIADgCIACAAIADgBIADAAIACgCIADAAIAGgEIACAAIAGgDIAAgCIACgBIAAgE");
	this.shape_179.setTransform(-18.5,15.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(1,1,1).p("AAJAQIAAgGIgDgEIAAgDIgDgCIAAgBIgDgEIAAgCIgCgBIAAgCIgCgCIAAgCIgDgC");
	this.shape_180.setTransform(-19.6,18.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(1,1,1).p("AACAAIgCAA");
	this.shape_181.setTransform(-18.6,20.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(1,1,1).p("AAegYIgDABIgDAEIgIAGIgGAHIgGACIgEAHIgPAJIgFAIIgFACIgDAD");
	this.shape_182.setTransform(-15.5,17.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#DE1B2C").s().p("AgVAdIAAgFIgDgFIAAgDIgDgCIAAgBIgDgFIAAgCIgDgBIAAgCIgCgDIAAAAIgDgCIAAgCIADgBIACAAIADgDIADAAIADgCIADAAIACgBIADAAIAGgEIADAAIAFgEIAAgBIACgCIAAgFIAGAAIAAgBIAQAAIAAABIAGAAIAAADIADAAIAAACIADAAIACACIADAAIgDABIgCAEIgJAFIgFAIIgGACIgGAGIgNAKIgFAIIgGABIgDAEg");
	this.shape_183.setTransform(-16.5,17.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(1,1,1).p("AgDgCIADACIAAABIABACIADAA");
	this.shape_184.setTransform(29.5,11.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(1,1,1).p("AgNAJIAIgFIAAgEIADgBIAAgCIACgBIAAgDIADgBIALAA");
	this.shape_185.setTransform(27.7,12.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(1,1,1).p("AgGAJIAAgGIADAAIAAgCIACgBIAAgCIAFgEIAAgBIADAA");
	this.shape_186.setTransform(25.6,14);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(1,1,1).p("AAJAEIgGAAIAAgCIgDAAIAAgCIgCAAIgGgD");
	this.shape_187.setTransform(25.8,15.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(1,1,1).p("AARgPIgGAEIAAACIgDACIgCAEIAAABIgGADIAAAEIgQAL");
	this.shape_188.setTransform(28.3,14);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#B9CBE2").s().p("AgNAWIAAgCIgDAAIAAgDIgDAAIgFgDIAAgGIADAAIAAgCIACgBIAAgCIAGgDIAAgCIADAAIAIgGIAAgDIACgCIAAgCIADgCIAAgCIADgCIALAAIAAACIADACIAAACIACACIADAAIAAADIgFAFIAAACIgDABIgDADIAAACIgGADIAAAFIgPALg");
	this.shape_189.setTransform(27.4,13.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(1,1,1).p("AgeAFIAXAAIACgBIADAAIAFgCIADAAIACgCIAGAAIADgBIADAAIAFgCIADAAIADgC");
	this.shape_190.setTransform(33.3,9.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(1,1,1).p("AAAAFIAAgJ");
	this.shape_191.setTransform(30.3,10.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(1,1,1).p("AAHADIgDAAIAAgCIgEAAIAAgBIgDAAIAAgCIgDAA");
	this.shape_192.setTransform(31,11.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(1,1,1).p("AAYgMIgDAEIAAACIgDADIgOAJIgEACIgDAAIgDABIgGACIgIAAIgDAC");
	this.shape_193.setTransform(34,10.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FEEAB1").s().p("AgTAOIAAgCIgFAAIAAgCIgDAAIAAgBIgDAAIAAgLIAXAAIACgCIADAAIAFgBIADAAIACgCIAGAAIADgCIADAAIAFgDIADAAIADgBIAAABIgDAFIAAACIgDADIgOAIIgFADIgDAAIgDABIgFACIgIAAIgDACg");
	this.shape_194.setTransform(33.3,10.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(1,1,1).p("AgSAJIADgBIAAgCIACgCIADgEIAKgHIADAAIADgBIAOAA");
	this.shape_195.setTransform(-14.3,8.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(1,1,1).p("AgCAUIAAgHIgDgEIAAgCIADgEIAAgIIACgCIAAgGIADgBIAAgDIADgB");
	this.shape_196.setTransform(-16.8,11.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(1,1,1).p("AAIAAIgQAA");
	this.shape_197.setTransform(-16.2,13.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(1,1,1).p("AAHgSIgDADIAAABIgCAEIAAACIgDACIAAAFIgCABIAAAIIgDAEIAAABIADACIAAAE");
	this.shape_198.setTransform(-15,11.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(1,1,1).p("AAKgIIgDABIAAAEIgDAAIAAACIgDABIAAACIgBAAIAAACIgDAAIAAACIgDAAIAAACIgDAB");
	this.shape_199.setTransform(-13.3,8.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgVAeIAAgHIgDgFIAAgBIADgEIAAgJIACgCIAAgFIADgCIAAgBIADgDIAAgCIADgBIAAgCIADgCIACgEIALgIIACAAIADgBIAOAAIgDABIAAAFIgCAAIAAACIgDABIAAACIgDAAIAAACIgDAAIAAACIgDAAIAAACIgCABIAAAFIgDABIAAACIgDADIAAACIgCACIAAAFIgDADIAAAGIgCAFIAAABIACACIAAAEg");
	this.shape_200.setTransform(-14.8,10.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(1,1,1).p("AgQADIALAAIADgCIAFAAIADgBIAFAAIADgCIADAA");
	this.shape_201.setTransform(35.9,7.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(1,1,1).p("AgQAEIAGgEIADAAIACgBIAQAAIADgCIADAA");
	this.shape_202.setTransform(32.5,7.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(1,1,1).p("AADAGIgDAAIAAgCIgCAAIAAgGIACgD");
	this.shape_203.setTransform(30.8,8.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(1,1,1).p("AAVgCIgDAAIgDACIgCAAIgDABIgJAAIgCACIgOAAIgCgCIgDAA");
	this.shape_204.setTransform(33.2,9.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(1,1,1).p("AALgKIAAAJIgDABIAAACIgCAAIgLAHIgCAAIgDAC");
	this.shape_205.setTransform(36.4,7.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FEEAB1").s().p("AgXAOIgDgCIgFAAIAAgCIgDAAIAAgHIADgCIAAgBIAFgEIADAAIADgBIARAAIACgCIAOAAIACgCIAGAAIADgDIAGAAIACgBIADAAIAAAJIgDACIAAACIgCAAIgMAGIgDAAIgCADIgDAAIgDABIgDAAIgDACIgHAAIgDACg");
	this.shape_206.setTransform(34,8.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(1,1,1).p("AgRgDIALAAIADACIAHAAIAAABIAGAAIADACIACAAIADAC");
	this.shape_207.setTransform(-6.5,6.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(1,1,1).p("AgUAMIADgCIAAgCIACgDIADgCIAAgCIALgHIAFAAIAGgEIADAAIAFgBIADAA");
	this.shape_208.setTransform(-10.5,7.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(1,1,1).p("AgCAXIgDgEIAAgBIgDgEIAAgLIADgDIAAgCIADgEIAAgBIACgFIADgBIAAgEIACgCIADgD");
	this.shape_209.setTransform(-13.4,11.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(1,1,1).p("AAiAJIgUAAIgCgBIgEAAIgFgCIgQgKIgGgDIgDAAIgFgBIgGAA");
	this.shape_210.setTransform(-10.3,14.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(1,1,1).p("AAHgEIgDAAIAAAEIgHAFIgDAA");
	this.shape_211.setTransform(-6.2,14.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(1,1,1).p("AgPAAIAJAAIAAACIAPAAIAAgCIAEAAIACgB");
	this.shape_212.setTransform(-7.1,14.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(1,1,1).p("AgHgHIAAAFIACAAIAAACIANAI");
	this.shape_213.setTransform(-9.5,13.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(1,1,1).p("AAOAFIgbgJ");
	this.shape_214.setTransform(-8.9,13.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(1,1,1).p("AAPgDIgCACIAAABIgDAAIAAACIgIAAIgCACIgOAA");
	this.shape_215.setTransform(-5.9,13.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(1,1,1).p("AgXgMIADABIAAADIADABIADAEIAVAOIADAAIAFACIAJAA");
	this.shape_216.setTransform(-6.8,11.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(1,1,1).p("AAEAAIgHAA");
	this.shape_217.setTransform(-8.8,10.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(1,1,1).p("AAaALIgLAAIgDgBIgFgCIgDAAIgDgCIgEgCIgGgEIgDgCIgIgGIgGgC");
	this.shape_218.setTransform(-5.7,11.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(1,1,1).p("AAHgGIAAAEIgDAAIAAADIgDAAIAAACIgCAAIAAABIgCAAIAAADIgDAA");
	this.shape_219.setTransform(-2.3,11.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(1,1,1).p("AgOgUIACACIAAAEIADACIAAACIADADIADACIAAAEIAFADIAAADIAFAEIADAEIAAACIADADIADAD");
	this.shape_220.setTransform(-3.1,9.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FEEAB1").s().p("AgJAuIgDgCIgDAAIgFgCIgRgLIgGgCIgCAAIgGgCIgGAAIgCgDIAAgDIgDgDIAAgLIADgEIAAgCIACgDIAAgBIADgEIADgCIAAgEIADgCIADgEIAAgCIACgBIAAgCIADgEIADgCIAAgCIALgHIAGAAIAFgEIADAAIAGgCIANAAIADACIAIAAIAAACIAGAAIADACIACAAIAGAEIAAADIADACIAAACIADAEIACACIAAADIAGAEIAAAEIAGAEIACAEIAAABIADADIADACIAAAEIgDAAIAAADIgDAAIAAACIgCAAIAAACIgDAAIAAACIgOAAIgDgCIgGgCIgCAAIgDgCIgGgCIgGgDIgCgEIgJgEIgEgDIAAgBIgJAAIAAABIADADIAAABIADACIADADIAVAPIADAAIAGACIAIAAIgDABIAAADIgDAAIAAABIgIAAIgDACIgOAAIgbgJIAAAGIADAAIAAABIAOAKIAHAAIAAABIARAAIAAgBIADAAIAAADIgGAEIgDACIgCAAIAAACgAAVAjIADgCIAAACgAAVAjg");
	this.shape_221.setTransform(-8,11);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(1,1,1).p("AgEABIADgBIAAgCIAHAAIAAAF");
	this.shape_222.setTransform(38.1,4.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(1,1,1).p("AgKAAIAFAAIADABIAIAAIACgBIADAA");
	this.shape_223.setTransform(36.4,4.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(1,1,1).p("AgSAFIAFgDIADAAIAAgCIADAAIADgBIAEAAIADgCIAJAAIACgBIAGAA");
	this.shape_224.setTransform(33.3,5.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(1,1,1).p("AAGAFIgDAAIAAgCIgDAAIAAgCIgCAAIAAgCIgDgD");
	this.shape_225.setTransform(31.9,6.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(1,1,1).p("AAcgEIgFAEIgDAAIgDABIgDAAIgFACIgDAAIgDACIgeAA");
	this.shape_226.setTransform(35.3,6.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(1,1,1).p("AADgEIAAAGIgDAAIAAADIgCAA");
	this.shape_227.setTransform(38.4,5.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FEEAB1").s().p("AgbANIAAgCIgDAAIAAgCIgCAAIAAgDIgEgCIAAgCIAGgDIADAAIAAgBIADAAIADgCIAFAAIADgDIAJAAIACgBIAKAAIADABIAJAAIADgBIACAAIADgDIAAgBIAIAAIAAAMIgDAAIAAAEIgCAAIgGADIgCAAIgDACIgEAAIgFACIgDAAIgDACg");
	this.shape_228.setTransform(35,5.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(1,1,1).p("AgKAAIAVAB");
	this.shape_229.setTransform(45.7,-8.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(1,1,1).p("AgYAdIAFgEIATgZIADgCIAFgIIAGgDIALgP");
	this.shape_230.setTransform(42,-5.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(1,1,1).p("AgcAkIADgGIAFgEIADgDIAGgGIAFgHIADgGIAFgEIACgDIADgGIADgDIAGgEIACgGIADgDIAGgEIADgG");
	this.shape_231.setTransform(36.6,1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(1,1,1).p("AAOAAIgVAAIgDABIgDAA");
	this.shape_232.setTransform(35.1,4.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(1,1,1).p("AA0g+IgRAPIgGAIIgIAHIgMAPIgIAIIg0BI");
	this.shape_233.setTransform(41.7,-1.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B9CBE2").s().p("AhBBBIADgGIAFgEIADgEIAMgMIACgGIAGgEIAFgJIADgEIAGgEIADgGIADgDIAFgDIADgFIAGgFIATgaIACgCIAGgHIAFgDIAMgQIAWACIgRAPIgFAIIgJAIIgLAOIgJAHIg0BIIgWAAIgDADg");
	this.shape_234.setTransform(40.3,-1.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(1,1,1).p("AgRAIIADgDIAAgCIACgBIADAAIADgCIADAAIAAgBIAEAAIADgCIADAAIADgCIAFAAIADgC");
	this.shape_235.setTransform(2.4,-10.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(1,1,1).p("AAEAWIAAgQIgDgDIAAgQIgBgCIAAgDIgDgD");
	this.shape_236.setTransform(1,-7.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(1,1,1).p("AABAAIgCAA");
	this.shape_237.setTransform(1.6,-5.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(1,1,1).p("AANgeIAAAEIgDAGIAAADIgDAEIAAAEIgDADIAAAEIgFAHIAAADIgCAEIAAAEIgDAEIAAADIgGAI");
	this.shape_238.setTransform(3,-8.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgJAfIAAgPIgDgEIAAgQIgCgCIAAgDIgDgCIAAgEIADgCIAAgCIACgBIADAAIADgCIADAAIAAgCIAEAAIADgCIADAAIADgCIAFAAIADgCIAAAEIgDAGIAAADIgCAEIAAAEIgDADIAAAEIgGAHIAAADIgDAEIAAAEIgBAEIAAADIgGAIg");
	this.shape_239.setTransform(2.4,-8.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(1,1,1).p("AgJAKIANgTIAGAA");
	this.shape_240.setTransform(-12.5,-11.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(1,1,1).p("AgJAOIADgBIAAgCIADgCIAAgCIADgCIAAgCQAAAAABgBIAAgEIADgBIAAgCIADgCIAAgDIADgD");
	this.shape_241.setTransform(-14.4,-9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(1,1,1).p("AgGAOIAAgEIADgCIAAgDIAFgEIAAgBIACgCIAAgEIADgBIAAgG");
	this.shape_242.setTransform(-16.1,-6.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(1,1,1).p("AgMAZIAGgHIAAgCIAGgIIAAgBIACgEIAAgFIACgEIAAgBIAGgIIAAgCIADgDIAAgE");
	this.shape_243.setTransform(-18,-2.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(1,1,1).p("AgQAGIAGAAIADACIACAAIAAgCIAFAAIAGgEIAAgCIAIgFIAAgCIADAA");
	this.shape_244.setTransform(-21,1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(1,1,1).p("AgoAXIAAgGIAGgHIAFgFIADgDIAGgDIAFgCIAJgBIAFgEIAngMIADgC");
	this.shape_245.setTransform(-26.8,3.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(1,1,1).p("AAEAOIgDgCIAAgCIgBgCIAAgQIgDgBIAAgE");
	this.shape_246.setTransform(-30.4,7.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(1,1,1).p("AADAEIAAgFIgDAAIAAgCIgCAA");
	this.shape_247.setTransform(-29.7,9.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(1,1,1).p("AAOAQIgbgf");
	this.shape_248.setTransform(-28,11.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(1,1,1).p("AALALIgLgIIAAgCIgCAAIAAgBIgDgBIAAgCIgCgCIAAgEIgDAA");
	this.shape_249.setTransform(-25.5,14.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(1,1,1).p("AAVACIgeAAIgDgCIgFAAIgDgB");
	this.shape_250.setTransform(-22.2,15.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(1,1,1).p("AAIgGIAAAEIgDACIAAABIgDAAIgCACIgCAAIAAABIgDAAIgDAD");
	this.shape_251.setTransform(-19.3,14.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(1,1,1).p("AAGgUIgDACIAAACIgDACIAAAEIgCABIAAAJIgDACIAAADIADACIAAAGIACACIAAADIADAD");
	this.shape_252.setTransform(-18.7,12.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(1,1,1).p("AAOgMIgDAAIgCABIAAADIgOAIIAAACIgFADIAAADIgDABIAAAE");
	this.shape_253.setTransform(-16.8,8.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(1,1,1).p("AgMgEIAGAAIADACIAEAAIAAACIADAAIAIAF");
	this.shape_254.setTransform(-16.6,7.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(1,1,1).p("AgPADIADAAIAAgCIADAAIADgBIAFAAIACgCIAMAAIADAC");
	this.shape_255.setTransform(-19.4,6.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(1,1,1).p("AgHAEIAHAAIAAgCIADAAIAAgDIADAAIAAgCIADAA");
	this.shape_256.setTransform(-21.8,7.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(1,1,1).p("AAKgHIgDAAIgDACIgDAAIgHAFIAAACIgDAAIAAAG");
	this.shape_257.setTransform(-21.7,7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(1,1,1).p("AAFgBIgCABIgFAAIAAACIgDAA");
	this.shape_258.setTransform(-20.1,5.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(1,1,1).p("AgWAEIAMAAIADgCIADAAIACgCIACAAIADgBIADAAIADgCIAFAAIAGADIAAACIADAC");
	this.shape_259.setTransform(-21.8,5.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(1,1,1).p("AANgEIgGAAIAAACIgFAAIgCACIgDAAIAAABIgDAAIAAACIgCAAIgEAC");
	this.shape_260.setTransform(-22.8,5.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(1,1,1).p("AARADIgJgFIgYAA");
	this.shape_261.setTransform(-19.9,4.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(1,1,1).p("AASAJIgDgBIAAgCIgCAAIgGgEIgDAAIgEgDIgDAAIgDgCIgDAAIgDgCIAAgBIgCAAIgDgD");
	this.shape_262.setTransform(-16.4,6.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(1,1,1).p("AALAAIgSAAIAAABIgDAA");
	this.shape_263.setTransform(-13.4,7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(1,1,1).p("AANgEIgDAAIAAACIgDAAIAAACIgCAAIAAABIgDAAIAAACIgCAAIgDACIgDAAIgCgCIgEAA");
	this.shape_264.setTransform(-11,6.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(1,1,1).p("AAcADIgDgCIgFAAIgDgBIgTAAIgFgCIgDAAIgDACIgOAA");
	this.shape_265.setTransform(-6.9,6.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(1,1,1).p("AAcg6IgLAeIgGAIIgLAcIgEAGIgGAPIgGAHIgCAIIgGAHIgDAI");
	this.shape_266.setTransform(-1.3,0.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(1,1,1).p("AgIgLIAAAEIAEACIAAAEQAAABACAAIAAABIACACIAAAEIADACIAAACIACAAIAEAB");
	this.shape_267.setTransform(0.6,-6.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(1,1,1).p("AgHAIIACAAIAAgCIAFgEIAAgCIADgBIAAgCIADAAIAAgEIADAA");
	this.shape_268.setTransform(-1,-6.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(1,1,1).p("AgQAFIADAAIADADIAFAAIAFgFIADAAIAAgBIAOgJ");
	this.shape_269.setTransform(-3.6,-5.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(1,1,1).p("AgegmIAAAFIAGAMIADADIAIARIAGADIAFALIAFAEIAFAFIAMAIIAFAGIAGAD");
	this.shape_270.setTransform(-8.4,-8.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#DE1B2C").s().p("AhVCNIgIgCIgOgJIgDgEIgFgFIgDgEIAAgCIgcggIAAgEIgDgCIAAgBIgDAAIAAgCIgDgEIgCgFIAAgMIgDgGIAAgBIAFgNIAOgMIAUgHIAngLIADgCIALACIAGgCIAGgDIAIgJIADAAIALgTIADgJIALgTIAAgEIAGgLIACgEIAGgLIAAgCIAGgFIAEgMIAGgFIADgGIAAgCIAOgUIAFAAIAAAFIAGAMIADADIAIARIAGAEIAFALIAGAEIAFAFIAMAIIAGAGIAFADIADAAIADACIAFAAIAGgEIADAAIAAgBIAOgKIADAAIAAgCIAFgDIAAgCIADgCIAAgCIADAAIAAgEIADAAIAAACIACACIAAAEIADACIAAABIADACIAAAEIADACIAAACIADAAIACACIAAACIgLAdIgFAIIgMAdIgFAFIgGAPIgFAIIgDAHIgGAIIgDAHIgCgCIgGAAIgDgCIgUAAIgFgBIgDAAIgDABIgRAAIAAACIgDAAIAAACIgCAAIAAACIgDAAIAAACIgDAAIgDACIgDAAIgCgCIgXAAIAAACIgDAAIgBgCIAAgCIgDAAIgGgEIgDAAIgFgDIgDAAIgDgCIgDAAIgCgCIAAgCIgDAAIgDgCIAAgCIgIgFIgaAAIAAACIgFAAIAAABIgGAAIgDACIgDAAIAAACIgCAAIAAACIgDAAIgDACIALAAIADgCIADAAIADgCIADAAIACgCIADAAIADgCIAGAAIAFAEIAAACIADACIgDACIgFAAIAAACIgDAAIAAABIgDAAIgDACIgDAAIgIAGIAAACIgDAAIAAAFIAJAAIAAgBIACAAIAAgEIADAAIAAgCIAGAAIAAgCIADAAIACgCIAGAAIADgCIALAAIADACIAFAAIAGACIADACIAFACIAGAEIgUANIgFAFIgDAGIAAACIgGAGIgFAQIAFARIADACIAAAEIgLAHIgGACg");
	this.shape_271.setTransform(-14.7,1.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(1,1,1).p("AgTgUIAGAAIAIAEIAIAGIACADIADACIAEAEIAAADIACABIAAAEIADAEIAAACIACAEIAAAE");
	this.shape_272.setTransform(13.7,-11.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(1,1,1).p("AgHAQIACgDIAAgBIADgCIAAgCIACgBIAAgCIADgCIAAgCIACgBIAAgEIADgCIAAgJ");
	this.shape_273.setTransform(10.9,-11.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(1,1,1).p("AgJAKIADgCIAAgDIADgCIAAgCIADAAIAAgDIABAAIAAgCIADgCIAAgBIADAAIADgD");
	this.shape_274.setTransform(9.1,-8.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(1,1,1).p("AgVA2IAYg8IADgGIAFgIIALgaIAAgH");
	this.shape_275.setTransform(5.9,-2.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(1,1,1).p("AgQAaIADgCIAAgDIAGgIIACgCIADgEIAAgEIAFgGIADgCIAAgDIAFgIIAAgEIADgBIADgE");
	this.shape_276.setTransform(2,5.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(1,1,1).p("AALAJIAAgDIgDgCIAAgCIgCgCIAAgBIgDAAIAAgCIgDgCIgCAAIgFgEIgDAA");
	this.shape_277.setTransform(1.4,9.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(1,1,1).p("AgFAFIALgJ");
	this.shape_278.setTransform(1.9,10.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(1,1,1).p("AgIADIADAAIADgCIAFAAIADgBIAAgCIADAA");
	this.shape_279.setTransform(0.4,11.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(1,1,1).p("AgBAAIADAA");
	this.shape_280.setTransform(-0.6,11.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(1,1,1).p("AADAAIgDAAIAAABIgCAA");
	this.shape_281.setTransform(-0.5,11.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(1,1,1).p("AAHgFIAAAEIgDAAIAAABIgEAEIgDAAIAAABIgDAA");
	this.shape_282.setTransform(0.5,10.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(1,1,1).p("AgIgFIADACIADAAIAAACIACAAIAAABIADAAIAAACIADAAIAAADIADAA");
	this.shape_283.setTransform(0.4,9.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(1,1,1).p("AADALIAAgGIgDAAIAAgFIgCgCIAAgEIAFgE");
	this.shape_284.setTransform(-0.8,10.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(1,1,1).p("AgKAIIADAAIAAgCIACAAIALgHIAAgBIACAAIAAgDIADgC");
	this.shape_285.setTransform(-1.6,12);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(1,1,1).p("AgMAGIADAAIAGgEIAAgCIACgBIAAgCIACAAIAAgCIAMAA");
	this.shape_286.setTransform(-4,13.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(1,1,1).p("AgCAFIACAAIAAgCIADAAIAAgH");
	this.shape_287.setTransform(-5.6,14.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(1,1,1).p("AgPAOIAGgEIAAgEIADgCIAAgBIACgCIAAgBIADgCIAAgCIAOgJIACAA");
	this.shape_288.setTransform(-7.3,16.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(1,1,1).p("AgoAeIAGgEIAIgJIADgEIALgHIADgEIAsgdIAGgC");
	this.shape_289.setTransform(-13,21.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(1,1,1).p("AAEAQIAAgPIgDgBIAAgFIgBgDIAAgFIgDgC");
	this.shape_290.setTransform(-16.7,25.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(1,1,1).p("AAAAVIgDgDIAAgNIADgDIAAgDIABgEIAAgFIADgCIAAgGIgDgC");
	this.shape_291.setTransform(-16.4,29.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(1,1,1).p("AAxgIIgOAAIgGABIgFAAIgpANIgGAAIgOADIgLAA");
	this.shape_292.setTransform(-11.6,30.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(1,1,1).p("AADADIAAgDIgDAAIAAgCIgCAA");
	this.shape_293.setTransform(-6.4,29.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(1,1,1).p("AAaAJIg0gR");
	this.shape_294.setTransform(-3.4,31);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(1,1,1).p("AAXAFIgEAAIgCgCIgJAAIgDgCIgHAAIgDgBIgGAAIgCgCIgGAAIgDgC");
	this.shape_295.setTransform(1.5,32.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(1,1,1).p("AAygEIgCAEIgGABIgIAAIgGACIgGAAIgFACIghAAIgIgCIgOAAIgGgCIgFAA");
	this.shape_296.setTransform(8.7,32.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(1,1,1).p("AAsgMIgGABIgGAAIgQAGIgGAAIgKAEIgGAAIgRAFIgCABIgGADIgGADIgFAC");
	this.shape_297.setTransform(18.1,30.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(1,1,1).p("AABgaIAAAEIADABIAAAEIADAEIAAAVIgDACIAAAEIgFAHIgCACIgDAE");
	this.shape_298.setTransform(23.1,26.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(1,1,1).p("AgCgHIACAAIAAACIADAAIAAAFIgDACIAAAGIADAA");
	this.shape_299.setTransform(23,23.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(1,1,1).p("AgFAHIADAAIAAgEIACAAIAAgDIADgCIAAgEIACAA");
	this.shape_300.setTransform(22.1,23.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(1,1,1).p("AgNAJIADAAIAAgBIADgCIADAAIAAgCIACgCIACAAIAAgCIADgBIADAAIAAgCIADAAIACgBIAAgDIADgB");
	this.shape_301.setTransform(20.2,25.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(1,1,1).p("AgCAAIAFAA");
	this.shape_302.setTransform(18.5,26.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(1,1,1).p("AAXgiIAAAUIgEAEIAAAFIgCAEIgDAFIgDAEIgCAFIgDAEIgLAIIgCADIgGAEIgJAE");
	this.shape_303.setTransform(20.5,22.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(1,1,1).p("AgthTIADALIAcA0IAOAUIAEALIAJAJIAFAMIAJAJIALAVIADALIAFAL");
	this.shape_304.setTransform(18,10.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(1,1,1).p("AAKglIgGACIgEAEIgDAGIgGAHIAAAPIADAFIAAAGIADAFIAAAGIADAEIABAFIAAAGIADAE");
	this.shape_305.setTransform(13,-1.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(1,1,1).p("AAHgSIADABIAAAIIgDACIAAAEIgDABIAAACIgDADIgBACIAAACIgDACIgDAEIAAABIgDACIAAAE");
	this.shape_306.setTransform(14.9,-7.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#DE1B2C").s().p("AAlDoIgJgCIgOAAIgFgCIgJAAIgCgCIgIAAIgDgCIgIAAIgDgBIgGAAIgDgCIgFAAIgDgCIg1gRIAAgEIgDAAIAAgCIgRAAIgFACIgGAAIgIACIgiALIgGAAIgNAEIgMAAIgDgCIAAgNIADgEIAAgDIADgEIAAgGIACgCIAAgFIgCgCIAAgNIgGgLIAAgGIgDgCIAPgNIA9gtIAGgCIAGgFIACgIIALgLIAJgGIADAAIADgBIAAgCIACgCIAAgGIAGgCIAFgHIAGgCIAJAAIACgEIAGgCIAFgDIAEgEIAFgEIAAgFIgFgIIAAgDIAFgDIAAgCIAFACIAGADIADADIADACIAAAEIgDADIgGAEIgFACIgDAAIgDACIAAACIAGAAIACgCIADAAIAGgCIAAgCIADAAIAAACIAOgLIgDgFIgFgHIgJgEIgGgCIAAgCIAGgJIAJgJIAPgfIADgDIAshlIAAgIIADgDIADgGIADgDIAKgIIAAgCIAHgGIACgFIAGgGIACgFIAAgKIAPAEIAIAGIAIAJIADAJIAFAKIAAAEIAEABIAAAIIgEACIAAADIgCACIAAACIgDAEIgDACIAAABIgDADIgCADIAAACIgDACIAAAEIgFABIgHAEIgCAGIgGAHIAAAPIADAGIAAAGIADAFIAAAGIAGAJIAAAGIADADIACALIAcA1IAJALIALAUIAIAJIAGALIAIAKIALAUIAEALIAFAMIAAAUIgCAEIAAAGIgDADIgMATIgLAHIgCAEIACgCIADAAIAAgCIADgBIACAAIAAgCIADAAIADgCIAAgCIADgCIAAgCIACAAIAAgEIAEAAIAAgDIADgCIAAgEIACAAIAAgCIADAAIAAACIADAAIAAAGIgDACIAAAFIADAAIAAAGIACACIAAADIADAEIAAAXIgDABIAAAEIgFAIIgDACIgCADIgHACIgFAAIgQAGIgHAAIgKADIgGAAIgSAGIgCACIgGACIgFAEIgGACIgCADIgHACIgIAAIgFACIgGAAIgGACg");
	this.shape_307.setTransform(3.4,9.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(1,1,1).p("AADgSIAAAEIADACIAAAOIgDACIAAADIgDACIAAACIgCAEIAAACIgDAC");
	this.shape_308.setTransform(9.8,-11.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(1,1,1).p("AgBABIADgB");
	this.shape_309.setTransform(9.9,-13.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(1,1,1).p("AgDATIAAgKIADgCIAAgCIABgBIAAgFIADgCIAAgNIgDgC");
	this.shape_310.setTransform(9.6,-11.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgFALIAEgCIAAgCIABgCIAAgFIADgBIAAgNIgDgCIADgCIAAAEIACACIAAAOIgCACIAAADIgDACIAAACIgBAEIAAACIgEACg");
	this.shape_311.setTransform(9.8,-11.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(1,1,1).p("AgIgEIADAAIABACIADAAIAAACIACAAIADABIACAAIAAACIADAC");
	this.shape_312.setTransform(7.7,-13.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(1,1,1).p("AgGACIAAgCIADAAIAAgBIADAAIACABIAFAAIAAAC");
	this.shape_313.setTransform(6.1,-14.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(1,1,1).p("AgCATIAAgFIACgCIAAgJIADgDIAAgJIgDgCIAAgI");
	this.shape_314.setTransform(5.3,-12.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").ss(1,1,1).p("AgEAPIAAgLIACgCIAAgCIACgBIAAgEIADgBIAAgGIACgC");
	this.shape_315.setTransform(4.5,-8.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(1,1,1).p("AgMAVIADgBIADgEIADgCIAAgEIACgCIAAgFIACgDIAAgGIADgCIAAgDIADgCIAAgEIAGgE");
	this.shape_316.setTransform(2.7,-5.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").ss(1,1,1).p("AABACIgCgD");
	this.shape_317.setTransform(1.6,-2.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(1,1,1).p("AgJAUIADgEIAAgDIADgFIAAgCIADgCIAAgEIABgCIAAgEIADgDIAAgCIADgCIAAgCIADgE");
	this.shape_318.setTransform(0.7,-0.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(1,1,1).p("AgDAFIADAAIAAgCIABAAIAAgFIADgC");
	this.shape_319.setTransform(-0.7,1.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(1,1,1).p("AgMAXIAAgEIADgCIADgEIAAgCIADgBIACgFIACgCIADgDIAAgBIADgCIADgEIAAgCIACgDIAAgK");
	this.shape_320.setTransform(-2.3,4.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(1,1,1).p("AAMANIgCgCIgDAAIAAgBIgDgCIAAgCIgDgCIAAgEIgEgCIAAgCIgDgDIAAgBIgGgE");
	this.shape_321.setTransform(-2.3,8.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(1,1,1).p("AAEgFIgDACIAAACIgBAAIAAABIgDACIAAAD");
	this.shape_322.setTransform(-0.7,8.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(1,1,1).p("AAQgbIgEAEIAAAHIgFAHIAAAFIgDABIgDADIAAAEIgHALIgDACIAAAEIgGAH");
	this.shape_323.setTransform(1.3,5.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(1,1,1).p("AAdhIIgQA4IgFAJIgGASIgFAJIgDAIIgFAJIgDAJIgGAKIgDAJIgFAI");
	this.shape_324.setTransform(5.8,-4.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(1,1,1).p("AAAgHIAAAP");
	this.shape_325.setTransform(8.7,-12.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFF06E").s().p("AgmB3IgDAAIAAgCIgCgCIAAgCIgDgCIAAgEIgGgDIAAgCIgDgCIAAgCIgFgDIAAgEIADgCIACgEIAAgCIADgBIADgFIADgBIADgEIAAgCIACgCIADgDIAAgDIADgDIAAgJIADAAIAAgCIADAAIAAgGIACgCIADgDIAAgEIADgEIAAgCIADgCIAAgFIADgDIAAgDIACgDIAAgDIADgCIAAgBIADgEIgDgDIADgCIADgDIADgDIAAgDIABgCIAAgGIADgDIAAgGIADgBIAAgFIADgCIAAgDIAFgEIAAgLIADgCIAAgBIADgCIAAgFIADgBIAAgGIADgCIAAgHIADgCIAAgKIACgDIAAgJIgCgDIAAgJIACAAIAAgCIADAAIADACIAGAAIAAADIACAAIACABIADAAIAAACIADAAIADACIACAAIAAABIADADIAAAOIgQA4IgFAKIgGATIgFAIIgDAHIgGAJIgDAKIgFAKIgDAJIgJALIAAAIIgEAHIAAAEIgDABIgDAFIAAADIgIALIgDACIAAAEIgGAIIgCABIAAACIgDAAIAAACIgDACIAAAEg");
	this.shape_326.setTransform(2.5,-2.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").ss(1,1,1).p("AgJgBIAKAAIAAABIAGAAIAAACIADAA");
	this.shape_327.setTransform(-7.4,-14.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(1,1,1).p("AgJADIADAAIAAgCIADAAIAAgBIADAAIABgCIAJAA");
	this.shape_328.setTransform(-9.4,-14.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").ss(1,1,1).p("AACAIIAAgHIgDAAIAAgHIADgB");
	this.shape_329.setTransform(-10.5,-13.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(1,1,1).p("AAeAmIgMgKIgCgFIgGgEIgDgEIgHgPIgDgDIgGgFIgDgGIgCgEIgDgFIgDgEIgDgGIgFgE");
	this.shape_330.setTransform(-7.4,-8.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").ss(1,1,1).p("AAEAAIgHAA");
	this.shape_331.setTransform(-4.3,-5.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(1,1,1).p("AAQgWIAAAFIgDABIAAAIIgDABIAAAEIgDACIAAADIgDACIgDADIgBADIgDADIgGAEIgDAEIgCAC");
	this.shape_332.setTransform(-2.3,-7.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").ss(1,1,1).p("AgbgWIAAAEIADADIAAADIAIAMIADABIADADIAIAGIAFACIAGAEIATAH");
	this.shape_333.setTransform(-3.6,-12);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AAMAxIgFgGIgGgEIgCgGIgFgDIgDgEIgDgFIgDgEIgCgGIgDgEIgGgFIgDgFIgCgDIgDgGIgDgEIgDgGIgFgDIAAgIIgDAAIAAgHIADgCIACAAIAAgCIADAAIAAgCIADAAIADgCIATAAIAAACIAGAAIAAACIADAAIAAAGIADADIAAAEIAHALIADACIADAEIAIAFIAGADIAFADIAGACIADABIALAEIAAADIgDACIAAAIIgDABIAAAEIgCACIAAAEIgDACIgDADIgDACIgDAEIgDACIgCACIgDADIgDADg");
	this.shape_334.setTransform(-5.7,-10);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").ss(1,1,1).p("AgXgIIAvAR");
	this.shape_335.setTransform(26.7,-14.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(1,1,1).p("AgNAIIADgBIAAgDIACAAIADgBIAAgCIADgBIAAgCIACgBIAAgDIADAAIACgBIAJAA");
	this.shape_336.setTransform(23,-15);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").ss(1,1,1).p("AgYAfIAFgEIAGgHIAGgEIAPgWIADgFIAOgT");
	this.shape_337.setTransform(19,-10.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(1,1,1).p("AgDAFIADAAIAAgBIABgCIAAgCIADAAIAAgE");
	this.shape_338.setTransform(16.1,-7.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").ss(1,1,1).p("AgDAFIADAAIAAgDIABAAIAAgFIADgB");
	this.shape_339.setTransform(15.2,-5.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(1,1,1).p("AgHAMIAAgDIADgDIAAgBIACAAIAAgEIACgBIAAgCIADgCIAAgCIADgBIAAgCIADgC");
	this.shape_340.setTransform(14,-4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(1,1,1).p("AAJAdIAAgEIgGgHIAAgEIgDgEIAAgFIgCgEIAAgDIgCgDIAAgMIgDgEIAAgH");
	this.shape_341.setTransform(14,0.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(1,1,1).p("AAGAKIgDgCIAAgNIgDAAIAAgDIgCgBIgCAA");
	this.shape_342.setTransform(15.4,4.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").ss(1,1,1).p("AAEALIAAgJIgDgCIAAgBIgBgCIAAgCIgDgBIAAgE");
	this.shape_343.setTransform(16.3,6.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(1,1,1).p("AABAAIgCAA");
	this.shape_344.setTransform(17,7.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(1,1,1).p("AAKANIgGgEIAAgBIgDgCIAAgEIgBgCIAAgBIgDgCIAAgDIgDgCIAAgCIgDgC");
	this.shape_345.setTransform(18.3,8.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(1,1,1).p("AAVAXIgFgBIgQgMIAAgEIgGgGIAAgCIgIgLIAAgEIgDgBIgDgE");
	this.shape_346.setTransform(21.4,12.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").ss(1,1,1).p("AAZgXIgxAv");
	this.shape_347.setTransform(26,12.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(1,1,1).p("AALgMIgFAEIAAACIgDACIgDAAIAAACIgCABIAAABIgDACIAAACIgCACIAAACIgDACIAAAD");
	this.shape_348.setTransform(29.7,8.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").ss(1,1,1).p("AgCgHIAAAFIACAAIAAAEIADAAIAAAG");
	this.shape_349.setTransform(30.5,6.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(1,1,1).p("AANgEIgGAAIgDABIgDAAIgBACIgDAAIAAABIgDAAIAAACIgCAAIAAADIgEAA");
	this.shape_350.setTransform(31.5,5.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").ss(1,1,1).p("AAug5IgcAlIgFAGIgQAVIgJAIIgFAIIgGAFIgWAe");
	this.shape_351.setTransform(37.4,-1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(1,1,1).p("AAKgJIgDACIAAABIgDACIAAACIgEADIAAACIgGADIAAACIgDAC");
	this.shape_352.setTransform(43,-7.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").ss(1,1,1).p("AhJgXIAIAEIAUAFIARAIIALABIARAHIAKACIARAHIAIACIALAEIAJACIALAEIAIAB");
	this.shape_353.setTransform(36.5,-11.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#B9CBE2").s().p("Ag3CYIgRgMIAAgDIgGgIIAAgCIgIgLIAAgEIgDgCIgDgEIgFgDIAAgCIgDgCIAAgEIgDgCIAAgBIgDgCIAAgEIgCgCIAAgCIgDgBIAAgDIgGAAIAAgJIgDgCIAAgCIgCgBIAAgCIgDgCIAAgEIgDgCIAAgPIgDAAIAAgCIgDgBIgCAAIAAgEIgGgIIAAgDIgDgEIAAgGIgDgEIAAgDIgCgEIAAgKIgDgEIAAgLIADgCIAAgCIACAAIAAgEIADgBIAAgCIADgCIAAgCIADgCIAAgCIADgCIAAgCIACAAIAAgDIADAAIAAgGIADgCIAAgCIADAAIAAgCIADgBIAAgCIACAAIAAgGIAGgEIAGgHIAFgEIARgWIADgGIAOgTIADgFIAFgEIAMgJIAIAAIBCAaIAJACIAQAHIAMACIAQAIIAMACIARAHIAIACIALAEIAJABIALAEIAIACIAAACIgCACIAAACIgDACIAAABIgGAEIAAACIgFAEIAAACIgDABIgcAmIgGAFIgRAWIgIAHIgGAIIgGAFIgWAfIgGAAIgCABIgDAAIgDACIgDAAIAAACIgDAAIAAACIgCAAIAAAEIgDAAIAAADIADAAIAAAGIACAAIAAAFIgFAEIAAACIgDACIgDAAIAAACIgDACIAAACIgCABIAAACIgDACIAAACIgDACIAAAEIgxAwg");
	this.shape_354.setTransform(28.5,-0.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").ss(1,1,1).p("AAPANIgVgOIAAgCIgDgBIgDAAIAAgEIgCgE");
	this.shape_355.setTransform(-3.7,-12.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(1,1,1).p("AAQgBIgDABIAAACIgDAAIgDACIgDAAIgCgCIgCAAIgEgCIgCAAIAAgBIgFAAIgEgC");
	this.shape_356.setTransform(-0.6,-10.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").ss(1,1,1).p("AASgJIAAAHIgIAFIgDAAIgDACIgEAAIgDACIgDAAIgDABIgDAAIgCACIgDAA");
	this.shape_357.setTransform(2.7,-12);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(1,1,1).p("AgBAAIACAB");
	this.shape_358.setTransform(4.3,-13.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").ss(1,1,1).p("AgCABIACAAIADgB");
	this.shape_359.setTransform(-5.3,-15);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(1,1,1).p("AgTAAIAWAAIACABIAPAA");
	this.shape_360.setTransform(-7.5,-15);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").ss(1,1,1).p("AgSAPIAIgGIAAgBIADgCIACgEIAAgCIAIgEIAAgCIADgCIAGgCIACgCIADAAIACgC");
	this.shape_361.setTransform(-11.5,-13.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(1,1,1).p("AglA5IAGgGIAFgHIADgIIAGgHIAFgGIAMgPIABgHIAMgOIACgGIAMgPIACgHIAGgIIADgH");
	this.shape_362.setTransform(-17.2,-6.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").ss(1,1,1).p("Ag5AgIADgIIALgLIALgHIARgHIAJgCIAHgEIAIgBIAJgEIAJgCIAZgLIAGgG");
	this.shape_363.setTransform(-26.7,2.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(1,1,1).p("AASAfIgFgEIgDgEIgDgBIgDgEIgEgEIgMgOIAAgEIgCgFIAAgEIgDgEIAAgJIADgE");
	this.shape_364.setTransform(-31,8.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").ss(1,1,1).p("AATAVIgCgEIgDgCIgGgCIgCgCIAAgCIgDgEIgFgDIgDgDIAAgCIgDgEIgCgCIgDgDIAAgCIgDgCIgCgE");
	this.shape_365.setTransform(-27.2,13.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(1,1,1).p("AgGAIIAAgEIADAAIAAgCIAHgFIAAgBIADgD");
	this.shape_366.setTransform(-25.9,16.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").ss(1,1,1).p("Ag2AQIAJACIAOAAIAIgCIAGAAIAIgCIAbgLIARgKIAJgEIAFgEIAGgC");
	this.shape_367.setTransform(-32.1,19.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(1,1,1).p("AAkgFIgGAEIgLADIgDAAIgFACIgIAAIgFABIgZAAIgDgBIgFAA");
	this.shape_368.setTransform(-33.9,20.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").ss(1,1,1).p("AARgGIgJAGIgCAAIAAABIgDAAIgDACIgCAAIgDABIgFAAIAAACIgGAA");
	this.shape_369.setTransform(-28.6,19.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(1,1,1).p("AAGAAIgKAA");
	this.shape_370.setTransform(-26.3,18.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").ss(1,1,1).p("AALAeIgDgEIAAgDIgCgEIAAgEIgDgDIAAgEIgDgEIAAgHIgCgEIAAgDIgFgIIAAgEIgDgDIAAgE");
	this.shape_371.setTransform(-24.6,22);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(1,1,1).p("AgKAWIADgEIAAgCIACgEIAAgFIADgEIAAgFIACgBIAAgEIADgEIAAgCIADgDIAFgE");
	this.shape_372.setTransform(-24.6,27.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").ss(1,1,1).p("AACADIAAgDIgCgC");
	this.shape_373.setTransform(-25.6,29.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(1,1,1).p("AgwAPIATgGIAGAAIAOgDIAGAAIAEgCIAJgCIAWgGIAGgEIAFgCIAGgE");
	this.shape_374.setTransform(-30.4,31.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(1,1,1).p("AgGgBIADAAIAAABIAEAAIAAACIAGAA");
	this.shape_375.setTransform(-36,32.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(1,1,1).p("AAGAAIgKAA");
	this.shape_376.setTransform(-36.1,32.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(1,1,1).p("AAqgLIgDACIgRAGIgDABIgVAHIgGAAIgQAGIgGAAIgGABIgFAA");
	this.shape_377.setTransform(-31.4,31.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(1,1,1).p("AgxAHIAFACIAUAAIAIgCIAGAAIAKgEIAJAAIAkgKIAGAA");
	this.shape_378.setTransform(-32.2,30.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").ss(1,1,1).p("AgCgIIACAAIAAAFIADADIAAAJ");
	this.shape_379.setTransform(-37.6,30.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(1,1,1).p("AAAgIIAAALIACABIAAAEIgCAA");
	this.shape_380.setTransform(-37.7,28.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").ss(1,1,1).p("AgEgLIADACIAAACIABACIAAAMIADAAIAAADIADAC");
	this.shape_381.setTransform(-38.4,26.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(1,1,1).p("AAAgSIAAAVIABADIAAAN");
	this.shape_382.setTransform(-39.1,22.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(1,1,1).p("AAGAAIgDAAIAAACIgFgDIgCAA");
	this.shape_383.setTransform(-38.7,21);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(1,1,1).p("AgKgBIAKAAIAAABIAGAAIACACIADAA");
	this.shape_384.setTransform(-39.2,20.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").ss(1,1,1).p("AAEAXIAAgEIgDgEIAAgbIgBgDIAAgGIgDgC");
	this.shape_385.setTransform(-39.9,23);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(1,1,1).p("AglASIAGgCIADgEIAFgCIADgEIAYgPIAXgIIALAA");
	this.shape_386.setTransform(-43.3,27);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(1,1,1).p("AADAIIAAgFIgDAAIAAgEIgCAAIAAgG");
	this.shape_387.setTransform(-46.8,29.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(1,1,1).p("AAPAHIgCABIgJAAIgDgBIgBAAIAAgDIgGgDIAAgBIgDgCIAAgBIgDAAIAAgDIgCgB");
	this.shape_388.setTransform(-45,31.2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").ss(1,1,1).p("AADgFIgDABIAAALIgCAA");
	this.shape_389.setTransform(-43.2,31.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(1,1,1).p("AAUgKIgIAAIgDABIgDAAIgQALIAAACIgFADIAAACIgDAC");
	this.shape_390.setTransform(-40.9,29.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").ss(1,1,1).p("AAGAUIAAgGIgDgEIAAgJIgDgDIAAgIIgBgBIAAgGIgDgC");
	this.shape_391.setTransform(-38.4,30.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(1,1,1).p("AAFAFIgKgJ");
	this.shape_392.setTransform(-37.3,32.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(1,1,1).p("AgZA3IAFgFIADgHIAFgIIADgGIAGgHIAHgVIAGgGIALgcIAAgIIAFgN");
	this.shape_393.setTransform(-39.4,38.8);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(1,1,1).p("AAXAQIgSgMIgFgBIgNgJIAAgCIgDgCIgDgEIgDgB");
	this.shape_394.setTransform(-39.8,46);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").ss(1,1,1).p("AAcAuIAAgGIgIgTIAAgFIgDgIIgGgFIgIgQIgLgLIgCgGIgGgEIgLgL");
	this.shape_395.setTransform(-34.7,52.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(1,1,1).p("AANADIgLAAIAAgCIgFAAIgDgBIgCAAIAAgCIgDAA");
	this.shape_396.setTransform(-30.7,57.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").ss(1,1,1).p("AAfgEIgLAAIgGACIgOAAIgFACIgIAAIgDABIgDAAIgCACIgGAAIgDAC");
	this.shape_397.setTransform(-26.4,57);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(1,1,1).p("AAQADIgDAAIgEgCIgIAAIgCgBIgIAAIgDgCIgDAA");
	this.shape_398.setTransform(-21.7,56.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").ss(1,1,1).p("AAKABIgDAAIAAgBIgQAA");
	this.shape_399.setTransform(-19.2,57.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(1,1,1).p("AAKAuIAAgRIgDgFIAAgGIgDgGIAAgFIgDgGIAAgEIgBgGIAAgGIgDgHIAAgGIgDgGIAAgFIgDgG");
	this.shape_400.setTransform(-17.2,62);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").ss(1,1,1).p("AgGAFIAFgDIAAgDIACAAIAAgCIADAAIAAgCIADAA");
	this.shape_401.setTransform(-16.9,67.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(1,1,1).p("AgDAXIADgEIAAgIIABgEIAAgVIADgCIAAgG");
	this.shape_402.setTransform(-18.1,70);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#000000").ss(1,1,1).p("AAEAFIgEgEIAAgFIgDAA");
	this.shape_403.setTransform(-18.1,73);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").ss(1,1,1).p("AgJAFIADgCIAAgCIADAAIAEgDIADAAIAAgCIAGAA");
	this.shape_404.setTransform(-18.6,74);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").ss(1,1,1).p("AADAKIgDgCIAAgBIgCgCIAAgO");
	this.shape_405.setTransform(-19.3,75.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(1,1,1).p("AABAXIgEgGIAAgEIgDgCIAAgJIADgDIAAgGIADgCIABgDIAAgCIADgDIAAgDIADgC");
	this.shape_406.setTransform(-19.7,78.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").ss(1,1,1).p("AAVAKIgFgEIgDAAIgDgCIgDAAIgGgCIgBAAIgDgCIgDAAIgDAAIgDAAIgFgEIAAgCIgDgC");
	this.shape_407.setTransform(-17.5,82.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").ss(1,1,1).p("AAQADIgDAAIgDgCIgKAAIgDgBIgIAAIgDgC");
	this.shape_408.setTransform(-13.8,83.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").ss(1,1,1).p("AASABIgOAAIgDgBIgSAA");
	this.shape_409.setTransform(-10.5,83.7);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").ss(1,1,1).p("AAfgHIgDACIgGADIgCAAIgDABIgGAAIgDABIgPAAIgDACIgJAAIgCACIgGABIgDAD");
	this.shape_410.setTransform(-5.6,83.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").ss(1,1,1).p("AAVgOIAAAEIgDAEIgTAMIgFACIgDAAIgLAH");
	this.shape_411.setTransform(-0.4,80.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").ss(1,1,1).p("AAKgCIgJAAIgBACIgDAAIAAABIgDAAIgDAC");
	this.shape_412.setTransform(2.7,79);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#000000").ss(1,1,1).p("AAWgDIgJAAIgCACIgIAAIgDABIgHAAIgDACIgIAAIgDAC");
	this.shape_413.setTransform(5.9,78.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").ss(1,1,1).p("AAwADIgGgCIgFAAIgGgBIgMAAIgFgCIg9AA");
	this.shape_414.setTransform(12.9,78.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#000000").ss(1,1,1).p("AAQABIgHAAIgCgBIgWAA");
	this.shape_415.setTransform(19.2,78.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(1,1,1).p("AAigDIgDAAIgFACIgDAAIgGABIgDAAIgFACIgKAAIgGACIgIAAIgDgCIgOAA");
	this.shape_416.setTransform(24.1,78.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#000000").ss(1,1,1).p("AALgKIgDADIAAADIgCACIAAADIgLAHIgCAAIgDAC");
	this.shape_417.setTransform(28.6,77.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(1,1,1).p("AADAFIAAgHIgDgCIgCAA");
	this.shape_418.setTransform(30,76.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#000000").ss(1,1,1).p("AgDgMIADACIAAAEIABACIAAAEIADACIAAAJIgDAC");
	this.shape_419.setTransform(30.1,75.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(1,1,1).p("AglgKIAUAAIAFABIAGAAIAGADIAEAAIALADIADACIAGABIALAHIADAE");
	this.shape_420.setTransform(25.9,72.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#000000").ss(1,1,1).p("AgbADIADgCIALAAIADgBIAbAAIACgCIAJAA");
	this.shape_421.setTransform(19.3,71.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(1,1,1).p("AgRgFIADAAIACADIADAAIAGACIAEAAIADACIAGAAIADACIACAAIADAC");
	this.shape_422.setTransform(14.7,71.6);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#000000").ss(1,1,1).p("AACgXIAAAJIgCACIAAAjIACAB");
	this.shape_423.setTransform(12.7,68.5);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").ss(1,1,1).p("AgBgCIADAF");
	this.shape_424.setTransform(12.8,65.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#000000").ss(1,1,1).p("AgHgKIAAAMIACACIAAADIAFAEIAIAA");
	this.shape_425.setTransform(11.8,64.2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").ss(1,1,1).p("AAEglIAAAGIgEAHIAAAGIgDAEIAAA0");
	this.shape_426.setTransform(11.3,59.4);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#000000").ss(1,1,1).p("AATgWIAAAIIgCAEIAAABIgDAEIgGAEIgDACIgFADIgFADIgCAEIgDACIgJAK");
	this.shape_427.setTransform(13.7,53.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#000000").ss(1,1,1).p("AAEgHIgDACIAAACIgBAAIAAALIgDAA");
	this.shape_428.setTransform(16.1,50.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#000000").ss(1,1,1).p("AAThIIgFATIAAAHIgdBkIAAAKIgDAJ");
	this.shape_429.setTransform(18.5,42.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#000000").ss(1,1,1).p("AAQgYIgHABIgCADIgGABIgBACIgDAEIAAACIgGAHIAAALIgDADIAAAMIgDAD");
	this.shape_430.setTransform(22,32.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#000000").ss(1,1,1).p("AAKgIIgDABIAAADIgDAAIAAADIgDABIAAACIgBACIAAACIgDAAIAAACIgDAAIgDAB");
	this.shape_431.setTransform(24.5,28.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#000000").ss(1,1,1).p("AgJghIADAFIADAFIAAADIAEAIIAAAEIADAFIAAADIADAEIAAAKIADADIAAAR");
	this.shape_432.setTransform(24.5,24.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#000000").ss(1,1,1).p("AgFgeIAFAIIAAADIADAEIAAAEIADAEIAAAbIgDADIAAAI");
	this.shape_433.setTransform(23.3,18.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").ss(1,1,1).p("AAEAAIgHAA");
	this.shape_434.setTransform(23.1,15);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#000000").ss(1,1,1).p("AASAGIgDAAIgCgCIgMAAIgBgCIgGAAIAAgCIgDAAIgDgBIgCAAIAAgCIgDgC");
	this.shape_435.setTransform(25.3,15.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").ss(1,1,1).p("AASgUIgDAEIAAACIgCAEIgDABIgDAEIAAACIgDACIgDADIgBABIAAACIgDAEIgGAEIgDAEIgFAE");
	this.shape_436.setTransform(29,14.1);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#000000").ss(1,1,1).p("AAegKIgGAEIgDADIgIAFIgGACIgGADIgFAAIgCACIgGACIgQAA");
	this.shape_437.setTransform(33.8,10.9);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#000000").ss(1,1,1).p("AAHgJIgDAAIAAABIgDAAIAAADIgCABIAAACIgCACIAAADIgDACIAAAF");
	this.shape_438.setTransform(37.4,8.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#000000").ss(1,1,1).p("AAIgPIAAAKIgIAFIAAABIgFAEIAAACIgDABIAAAEIADAE");
	this.shape_439.setTransform(38.7,6.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#000000").ss(1,1,1).p("AgIgEIAGAAIAAACIACAAIAAACIADAAIAAABIACAAIAAACIADAC");
	this.shape_440.setTransform(38.7,4.1);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#000000").ss(1,1,1).p("AAPgSIgDACIgDAEIAAACIgFADIAAACIgDAEIgCABIAAACIgDACIgCADIAAACIgGAEIAAACIgDAE");
	this.shape_441.setTransform(39.4,1.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").ss(1,1,1).p("AAggnIgDAEIgCAFIgGAGIgDADIgFAGIgDAFIgGAEIgKALIgDADIgFAGIgDAGIgGAFIgDAEIgFAL");
	this.shape_442.setTransform(44.1,-4.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#000000").ss(1,1,1).p("AgMgDIAAADIADAAIAAACIANAAIADACIAGAA");
	this.shape_443.setTransform(46.1,-8.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").ss(1,1,1).p("AgKgDIADAAIAAACIACAAIADABIACAAIADACIADAAIACACIADAA");
	this.shape_444.setTransform(43.7,-9.5);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#000000").ss(1,1,1).p("AgQgEIADAAIAAABIAGAAIAAADIAFAAIAFACIAFAAIAAACIADAAIADACIADAA");
	this.shape_445.setTransform(40.9,-10.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#000000").ss(1,1,1).p("AgzgSIAtAPIAGADIANAEIAFADIAPAEIATAI");
	this.shape_446.setTransform(34.1,-13);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#000000").ss(1,1,1).p("AgcgDIADgDIAFAAIADgCIAFACIAGAAIADADIAFABIACAAIAGADIAGACIAIAFIAGAA");
	this.shape_447.setTransform(25.9,-15.7);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#000000").ss(1,1,1).p("AgfAmIADgEIACgGIAGgEIAGgLIAFgEIADgFIADgEIAEgFIADgEIAGgFIADgEIAFgGIAGgDIADgGIAFgE");
	this.shape_448.setTransform(19.7,-12.4);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#000000").ss(1,1,1).p("AgDgIIADABIAAAHIABACIAAAGIADAB");
	this.shape_449.setTransform(16.1,-9.9);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#000000").ss(1,1,1).p("AgCgKIACAAIAAAEIADABIAAAQ");
	this.shape_450.setTransform(15.4,-11.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#000000").ss(1,1,1).p("AgbgCIADAAIAFgCIAhAAIAFAEIAEAAIACABIADAE");
	this.shape_451.setTransform(12.3,-13.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").ss(1,1,1).p("AgVgHIADACIAIAAIADADIAFAAIACABIACAAIADABIADAAIAFAEIAEAAIAFAE");
	this.shape_452.setTransform(7.3,-14.5);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#000000").ss(1,1,1).p("AgDAAIAHAA");
	this.shape_453.setTransform(4.6,-15.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AhlH2IgGgCIgQAAIgGgBIgLAAIgOgFIgJgDIgTgGIgJgDIgFgGIAAgCIgGgJIgDgIIADgJIAGgKIADgIIACgBIgFgIIAAgMIADgEIAIgEIADAAIADgCIACAAIgFgEIAAgDIgDgCIAAgCIAGgRIAAgSIACgKIAAgCIADgCIADgDIADgCIAAgDIAFgBIAAgRIgFgRIgDgRIgGgTIgCgQIgDgGIgDAAIgDgBIgOAAIgFgFIgGAAIgGgBIgFAAIgJgCIgLAAIgwAIIgDABIgLAAIgFgBIgDgDIgGgCIAAgBIgLglIgtg3IgRgLIgLgFIgIgGIgGgHIgDgDIAOgUIAXgqIARgvIgMgLIgCgJIAAgIIgJgXIAAgBIgLABIgJAFIgIAFIgLAMIAAABIgDAEIAAAHIgDACIgIACIgJgCIgCgEIgGgFIgDgEIgDgBIAAgDIgCgEIAAgBIgDgEIAAgEIAOgHIAZgTIAOgFIARgEIAFAAIgCgKIAAgaIgDgJIgDgCIAIAAIADACIAAAWIADAIIAAAKIAGALIAAAFIADAEIACAFIAAAOIADABIgDAEIAAACIADADIAAAEIADAEIAAAJIAUACIAngFIAkgMIAGAAIgtARIgiAIIgQAAIACABIAAACIADAAIADACIAGAAIA6gNIAigMIAGgFIAAgDIgDgCIAIgaIALgRIADgCIgFgLIgGgXIgLgWIAAgEIgDgBIgIAAIgMAHIgIACIgLADIgDAAIgLAGIgOAEIgZACIAWgEIAUgIIAngWIAFgBIAGgIIADgCIAFgIIgLgHIgFgIIgJgIIgOgSIgWgUIgJgLIgFgbIARgXIATgLIBMgbIAGgGIBJhrIACgHIAJgGIAFgHIAMgLIALgEIADgCIAWAAIAJACIAIAAIAKAVQAIATALADIAxgDIAWgqIAGAAIAAgCIAYAGIARAHIADACIALgCIAWAAIALACIAJAEIAIALIAAAPIADADIAAAFIADADIAAAEIADAFIA7hHIAFgDIAMgEIALACIALADIALAGIAJAGIAFAAIAUAFIBlAmIAIABIAGAFIADAAIAFADIAMAEIACACIADAAIADADIAGADIAFAAIAGABIAFAAIAAACIgWAeIgRAPIgWAeIgDAGIgGAHIgFAFIgLAPIgGAGIgDAEIADAAIAIAEIAAACIAGADIAAAGIgDAFIgLAMIgDAFIADAEIgGACIgFAIIgDAFIAAAGIgIAHIgUALIgOAEIgRAAIgGAJIgFAHIgJAIIgFAIIgMAJIgFgCIgJAAIgOgEIgIgFIgIAAIALAWIAAAZIgDALIAAAEIARAlIADANIAAARIgGADIAAAFIgGAHIgFACIgDABIgOAHIgGAHIgFALIgDALIAAAKIgDAEIgnCSIgDADIgDADIAAAHIgDACIAAACIgDALIgFAIIgLAHIgRAPIgDAEIgGAMIgCAQIAAA6IACAFIADAEIAGACIAFAAIAGAHIgDAAIAAAKIgDAJIAAAcIAJAGIAcAHIADACIATgDIAXAAIAIgCIAUAAIAiAFIAOAGIALAHIADADIAIASIAAAFIgDAFIAAgFIgDgCIgCAAIgDAEIgGALIgFAFIgGABIgDACIgZAGIgLAAIgOACIgLgCIgMAAIgFgDIgUAAIgigFIg9AAIgLACIgFAAIgRADIgJAAIgCADIgGAAIgGACIgCAAIgGADIgDAIIgQALIgLAEIgLAHIgWAHIgaACIgLAEIgDACgAl4h9IAGAAIAJACgAmGh/IADAAIADACIADAAIgDACg");
	this.shape_454.setTransform(0.2,33.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#000000").ss(1,1,1).p("AgRgEIAAgCIAjAKIAAACg");
	this.shape_455.setTransform(-33.8,34.7);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgRgEIAAgCIAjALIAAACg");
	this.shape_456.setTransform(-33.8,34.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#000000").ss(1,1,1).p("AAAABIABgBIAAABg");
	this.shape_457.setTransform(-35.7,34);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AgBABIACgBIAAABg");
	this.shape_458.setTransform(-35.7,34);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIACAAIAAABIgCAAg");
	this.shape_459.setTransform(-35.7,34);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AAAABIAAgBIABAAIAAABg");
	this.shape_460.setTransform(-35.7,34);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#000000").ss(1,1,1).p("AAAABIABAAIAAgBg");
	this.shape_461.setTransform(-35.7,33.8);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgBABIACgBIAAABg");
	this.shape_462.setTransform(-35.7,33.8);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIACABIgCAAg");
	this.shape_463.setTransform(-35.7,33.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AAAABIAAgBIABABg");
	this.shape_464.setTransform(-35.7,33.8);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABAAIAAABg");
	this.shape_465.setTransform(-36,33.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgBAAIADAAIAAABg");
	this.shape_466.setTransform(-36,33.6);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#000000").ss(1,1,1).p("AgCgCIACAAIADAFIgFgDg");
	this.shape_467.setTransform(-35.9,33.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgCAAIAAgCIACAAIADAFg");
	this.shape_468.setTransform(-35.9,33.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#000000").ss(1,1,1).p("AgCAAIACgCIADAFIgDgDg");
	this.shape_469.setTransform(-36.2,33.4);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AAAAAIgCAAIACgCIADAFg");
	this.shape_470.setTransform(-36.2,33.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#000000").ss(1,1,1).p("AgBAAIACgBIAAABIgCACg");
	this.shape_471.setTransform(-36.3,33.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgBAAIACgBIAAABIgCACg");
	this.shape_472.setTransform(-36.3,33.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#000000").ss(1,1,1).p("AgCAAIACgBIADABIgDACg");
	this.shape_473.setTransform(-36.4,33);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgCAAIACgBIADABIgDACg");
	this.shape_474.setTransform(-36.4,33);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#000000").ss(1,1,1).p("AgBAAIACgBIAAABIgCACg");
	this.shape_475.setTransform(-36.5,32.8);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgBAAIADgBIAAABIgDACg");
	this.shape_476.setTransform(-36.5,32.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#000000").ss(1,1,1).p("AADAAIgDABIgCgBg");
	this.shape_477.setTransform(-36.7,32.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AgCAAIAFAAIgDABg");
	this.shape_478.setTransform(-36.7,32.7);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABAAIgBABg");
	this.shape_479.setTransform(-36.8,32.4);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AAAAAIABAAIgBABg");
	this.shape_480.setTransform(-36.8,32.4);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#000000").ss(1,1,1).p("AgCABIACgBIADABg");
	this.shape_481.setTransform(-37,32.3);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgCABIACgBIADABg");
	this.shape_482.setTransform(-37,32.3);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABAAIgBABg");
	this.shape_483.setTransform(-37.1,32.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgBAAIACAAIgCABg");
	this.shape_484.setTransform(-37.1,32.3);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAAgBIABABg");
	this.shape_485.setTransform(-37.1,32.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgBABIAAgBIACABg");
	this.shape_486.setTransform(-37.1,32.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABAAIAAABg");
	this.shape_487.setTransform(-37.4,32.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AAAAAIABAAIAAABg");
	this.shape_488.setTransform(-37.4,32.1);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABABIgBAAg");
	this.shape_489.setTransform(-37.4,32);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AAAABIAAgBIABABg");
	this.shape_490.setTransform(-37.4,32);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#000000").ss(1,1,1).p("AgCAAIACAAIADABIgDAAg");
	this.shape_491.setTransform(-37.6,31.7);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AAAABIgCgBIACAAIADABg");
	this.shape_492.setTransform(-37.6,31.7);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIACgBIAAADIgCAAg");
	this.shape_493.setTransform(-37.7,31.5);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgBACIAAgCIADgBIAAADg");
	this.shape_494.setTransform(-37.7,31.5);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#000000").ss(1,1,1).p("AABACIgBgDIABAAg");
	this.shape_495.setTransform(-38,31.3);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AAAgBIABAAIAAADg");
	this.shape_496.setTransform(-38,31.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#000000").ss(1,1,1).p("AAAgBIACAAIAAADIgCAAg");
	this.shape_497.setTransform(-37.9,30.9);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_498.setTransform(-37.9,30.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#000000").ss(1,1,1).p("AgCgBIACAAIADADIgDAAg");
	this.shape_499.setTransform(-38.1,30.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AAAACIgCgDIACAAIADADg");
	this.shape_500.setTransform(-38.1,30.6);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#000000").ss(1,1,1).p("AAAgBIABAAIAAADIgBAAg");
	this.shape_501.setTransform(-38.2,30.2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AgBACIAAgDIADAAIAAADg");
	this.shape_502.setTransform(-38.2,30.2);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#000000").ss(1,1,1).p("AgCgBIACAAIADADIgDAAg");
	this.shape_503.setTransform(-38.4,29.8);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AAAACIgCgDIACAAIADADg");
	this.shape_504.setTransform(-38.4,29.8);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#000000").ss(1,1,1).p("AAAgBIABAAIAAADIgBAAg");
	this.shape_505.setTransform(-38.5,29.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AAAACIAAgDIACAAIAAADg");
	this.shape_506.setTransform(-38.5,29.4);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#000000").ss(1,1,1).p("AgCAAIACgBIADADIgDAAg");
	this.shape_507.setTransform(-38.7,29.1);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AAAACIgCgCIACgBIADADg");
	this.shape_508.setTransform(-38.7,29.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#000000").ss(1,1,1).p("AgBgBIACAAIAAABIgCACg");
	this.shape_509.setTransform(-38.8,28.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AgBgBIADAAIAAABIgDACg");
	this.shape_510.setTransform(-38.8,28.9);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#000000").ss(1,1,1).p("AgBAAIACAAIAAABIgCAAg");
	this.shape_511.setTransform(-38.8,28.5);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgBABIAAgBIADAAIAAABg");
	this.shape_512.setTransform(-38.8,28.5);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#000000").ss(1,1,1).p("AgBAAIACAAIgCABg");
	this.shape_513.setTransform(-38.8,28.4);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AgBAAIADAAIgDABg");
	this.shape_514.setTransform(-38.8,28.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#000000").ss(1,1,1).p("AgCAAIACAAIADABIgDAAg");
	this.shape_515.setTransform(-39,28.1);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AAAABIgCgBIACAAIADABg");
	this.shape_516.setTransform(-39,28.1);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABAA");
	this.shape_517.setTransform(-39.1,28.1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABAA");
	this.shape_518.setTransform(-39.1,28.1);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAAgBIABABg");
	this.shape_519.setTransform(-39.1,28);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AAAABIAAgBIABABg");
	this.shape_520.setTransform(-39.1,28);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#000000").ss(1,1,1).p("AABABIgBgBIABAAg");
	this.shape_521.setTransform(-39.3,28.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AgBAAIACAAIAAABg");
	this.shape_522.setTransform(-39.3,28.1);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAAgBIABABg");
	this.shape_523.setTransform(-39.3,28.1);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgBABIAAgBIACABg");
	this.shape_524.setTransform(-39.3,28.1);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#000000").ss(1,1,1).p("AABABIgBgBIABAAg");
	this.shape_525.setTransform(-39.6,28.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AAAAAIABAAIAAABg");
	this.shape_526.setTransform(-39.6,28.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAAgBIABABg");
	this.shape_527.setTransform(-39.6,28.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AAAABIAAgBIABABg");
	this.shape_528.setTransform(-39.6,28.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAAgBIABAAIAAABg");
	this.shape_529.setTransform(-39.9,28.1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgBABIAAgBIACAAIAAABg");
	this.shape_530.setTransform(-39.9,28.1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAAgBIACABg");
	this.shape_531.setTransform(-40.2,28.1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AAAABIAAgBIABABg");
	this.shape_532.setTransform(-40.2,28.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAAgBIABABg");
	this.shape_533.setTransform(-40.5,28.4);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgBABIAAgBIADABg");
	this.shape_534.setTransform(-40.5,28.4);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#000000").ss(1,1,1).p("AABABIgBgBIABAAg");
	this.shape_535.setTransform(-40.7,28.4);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AAAAAIACAAIAAABg");
	this.shape_536.setTransform(-40.7,28.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAAgBIABABg");
	this.shape_537.setTransform(-40.7,28.4);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AAAABIAAgBIACABg");
	this.shape_538.setTransform(-40.7,28.4);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#000000").ss(1,1,1).p("AABABIgCgBIACAAg");
	this.shape_539.setTransform(-41,28.4);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AgBAAIADAAIAAABg");
	this.shape_540.setTransform(-41,28.4);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#000000").ss(1,1,1).p("AgBgBIACABIgCACg");
	this.shape_541.setTransform(-41,28.5);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AgBgBIADABIgDACg");
	this.shape_542.setTransform(-41,28.5);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#000000").ss(1,1,1).p("AABACIgCgCIACgBg");
	this.shape_543.setTransform(-41.3,28.5);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AgBAAIADgBIAAADg");
	this.shape_544.setTransform(-41.3,28.5);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#000000").ss(1,1,1).p("AgBACIAAgCIACgBIAAABg");
	this.shape_545.setTransform(-41.3,28.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AgBAAIADgBIAAABIgDACg");
	this.shape_546.setTransform(-41.3,28.7);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#000000").ss(1,1,1).p("AABABIgBAAIABgBg");
	this.shape_547.setTransform(-41.6,28.7);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AgBABIACgBIAAABg");
	this.shape_548.setTransform(-41.6,28.7);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAAgBIABAAg");
	this.shape_549.setTransform(-41.6,28.9);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AgBAAIACAAIgCABg");
	this.shape_550.setTransform(-41.6,28.9);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#000000").ss(1,1,1).p("AABABIgBAAIABgBg");
	this.shape_551.setTransform(-41.9,28.9);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AAAABIABgBIAAABg");
	this.shape_552.setTransform(-41.9,28.9);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAAgBIABAAg");
	this.shape_553.setTransform(-41.9,29.1);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AAAAAIABAAIgBABg");
	this.shape_554.setTransform(-41.9,29.1);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#000000").ss(1,1,1).p("AACACIgCgCIACgBg");
	this.shape_555.setTransform(-42.2,29.2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgBAAIADgBIAAADg");
	this.shape_556.setTransform(-42.2,29.2);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#000000").ss(1,1,1).p("AAAACIABgDIAAADg");
	this.shape_557.setTransform(-42.2,29.2);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AAAACIABgDIAAADg");
	this.shape_558.setTransform(-42.2,29.2);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#000000").ss(1,1,1).p("AABABIgBgBIABAAg");
	this.shape_559.setTransform(-42.5,29.5);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AgBAAIACAAIAAABg");
	this.shape_560.setTransform(-42.5,29.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#000000").ss(1,1,1).p("AABABIgBgB");
	this.shape_561.setTransform(-42.5,29.5);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#000000").ss(1,1,1).p("AABABIgBgBIABAAg");
	this.shape_562.setTransform(-42.7,29.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AgBAAIADAAIAAABg");
	this.shape_563.setTransform(-42.7,29.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#000000").ss(1,1,1).p("AABAAIgBAA");
	this.shape_564.setTransform(-42.7,29.6);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#000000").ss(1,1,1).p("AABABIgBAAIAAgBIABAAg");
	this.shape_565.setTransform(-42.7,29.6);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AgBABIAAgBIADAAIAAABg");
	this.shape_566.setTransform(-42.7,29.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#000000").ss(1,1,1).p("AAAABIgCAAIAAgBIACABIADgBIgDABg");
	this.shape_567.setTransform(-42.9,29.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AAAABIADgBIgDABgAgCABIAAgBIACABg");
	this.shape_568.setTransform(-42.9,29.9);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#000000").ss(1,1,1).p("AABABIgCAAIAAgBg");
	this.shape_569.setTransform(-43,29.9);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AgBABIAAgBIACABg");
	this.shape_570.setTransform(-43,29.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#000000").ss(1,1,1).p("AABABIgCAAIAAgBIACAAg");
	this.shape_571.setTransform(-43,30);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AgBABIAAgBIACAAIAAABg");
	this.shape_572.setTransform(-43,30);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#000000").ss(1,1,1).p("AAAABIgCAAIACgBIADAAg");
	this.shape_573.setTransform(-43.2,30.2);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AgCABIACgBIADAAIgDABg");
	this.shape_574.setTransform(-43.2,30.2);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#000000").ss(1,1,1).p("AABABIgCAAIAAgBIACAAg");
	this.shape_575.setTransform(-43.3,30.4);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AgBABIAAgBIADAAIAAABg");
	this.shape_576.setTransform(-43.3,30.4);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#000000").ss(1,1,1).p("AABABIgCAAIAAgBIACAAg");
	this.shape_577.setTransform(-43.3,30.6);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AgBABIAAgBIADAAIAAABg");
	this.shape_578.setTransform(-43.3,30.6);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#000000").ss(1,1,1).p("AAAABIgCAAIACgBIADAAg");
	this.shape_579.setTransform(-43.5,30.8);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AgCABIACgBIADAAIgDABg");
	this.shape_580.setTransform(-43.5,30.8);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#000000").ss(1,1,1).p("AABABIgBAAIAAgBIABAAg");
	this.shape_581.setTransform(-43.6,31);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AAAABIAAgBIABAAIAAABg");
	this.shape_582.setTransform(-43.6,31);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#000000").ss(1,1,1).p("AABABIgBAAIAAgBIABAAg");
	this.shape_583.setTransform(-43.6,31.2);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AAAABIAAgBIABAAIAAABg");
	this.shape_584.setTransform(-43.6,31.2);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#000000").ss(1,1,1).p("AABACIgBgCIAAgBIABABg");
	this.shape_585.setTransform(-43.6,31.3);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AAAAAIAAgBIABABIAAACg");
	this.shape_586.setTransform(-43.6,31.3);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#000000").ss(1,1,1).p("AgCABIACgBIADABg");
	this.shape_587.setTransform(-43.8,31.3);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AgCABIACgBIADABg");
	this.shape_588.setTransform(-43.8,31.3);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#000000").ss(1,1,1).p("AABAAIgBAA");
	this.shape_589.setTransform(-43.9,31.5);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#000000").ss(1,1,1).p("AABAAIgBAA");
	this.shape_590.setTransform(-43.9,31.5);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#000000").ss(1,1,1).p("AABAAIgBAA");
	this.shape_591.setTransform(-43.9,31.5);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#000000").ss(1,1,1).p("AgFABIALgBIAAABg");
	this.shape_592.setTransform(-44.3,31.5);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AgFABIALgBIAAABg");
	this.shape_593.setTransform(-44.3,31.5);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#000000").ss(1,1,1).p("AgMgMIADgBIAWAbIgEAAg");
	this.shape_594.setTransform(-45.8,30.3);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AAKAOIgWgaIADgBIAVAbg");
	this.shape_595.setTransform(-45.8,30.3);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#000000").ss(1,1,1).p("AAWgPIADACIgxAdIAAgCg");
	this.shape_596.setTransform(-44.6,27.4);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AgYAOIAugdIADACIgxAdg");
	this.shape_597.setTransform(-44.6,27.4);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#000000").ss(1,1,1).p("AAOgDIAAABIgbAGIAAgBg");
	this.shape_598.setTransform(-40.9,25.6);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgNADIAbgGIAAABIgbAHg");
	this.shape_599.setTransform(-40.9,25.6);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#000000").ss(1,1,1).p("AAAgWIADAAIgDAtIgCAAg");
	this.shape_600.setTransform(-39.5,23.1);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgCAWIACgsIADAAIgDAsg");
	this.shape_601.setTransform(-39.5,23.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#000000").ss(1,1,1).p("AAQABIgDACIgbgDIAAgCg");
	this.shape_602.setTransform(-37.7,21.1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AgOAAIAAgCIAdADIgDACg");
	this.shape_603.setTransform(-37.7,21.1);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#000000").ss(1,1,1).p("AAQgBIAAABIgeACIAAgCg");
	this.shape_604.setTransform(-34.9,21.2);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgPAAIAegBIAAABIgeACg");
	this.shape_605.setTransform(-34.9,21.2);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIACABIgCAAg");
	this.shape_606.setTransform(-33.2,21.1);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AgBABIAAgBIADABg");
	this.shape_607.setTransform(-33.2,21.1);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIACABIgCAAg");
	this.shape_608.setTransform(-33.2,21.1);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#000000").s().p("AgBABIAAgBIADABg");
	this.shape_609.setTransform(-33.2,21.1);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#000000").ss(1,1,1).p("AACAAIAAABIgCgBg");
	this.shape_610.setTransform(-33.2,21.1);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#000000").s().p("AgBAAIADAAIAAABg");
	this.shape_611.setTransform(-33.2,21.1);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABAA");
	this.shape_612.setTransform(-32.9,21);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#000000").ss(1,1,1).p("AABAAIAAABIgBgBg");
	this.shape_613.setTransform(-32.9,20.9);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#000000").s().p("AAAAAIABAAIAAABg");
	this.shape_614.setTransform(-32.9,20.9);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABABIgBAAg");
	this.shape_615.setTransform(-32.6,20.9);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#000000").s().p("AAAABIAAgBIACABg");
	this.shape_616.setTransform(-32.6,20.9);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("#000000").ss(1,1,1).p("AABAAIAAABIgBgBg");
	this.shape_617.setTransform(-32.6,20.9);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#000000").s().p("AAAAAIACAAIAAABg");
	this.shape_618.setTransform(-32.6,20.9);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("#000000").ss(1,1,1).p("AABAAIAAABIgBAAg");
	this.shape_619.setTransform(-32.3,20.8);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#000000").s().p("AAAABIABgBIAAABg");
	this.shape_620.setTransform(-32.3,20.8);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIACABIgCAAg");
	this.shape_621.setTransform(-32.1,20.8);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AAAABIAAgBIABABg");
	this.shape_622.setTransform(-32.1,20.8);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("#000000").ss(1,1,1).p("AACAAIAAABIgCgBg");
	this.shape_623.setTransform(-32.1,20.7);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AAAAAIABAAIAAABg");
	this.shape_624.setTransform(-32.1,20.7);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("#000000").ss(1,1,1).p("AACgBIAAABIgCACIAAgCg");
	this.shape_625.setTransform(-31.8,20.6);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("AgBAAIACgBIAAABIgCACg");
	this.shape_626.setTransform(-31.8,20.6);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABABIgBAAg");
	this.shape_627.setTransform(-31.5,20.5);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AgBABIAAgBIADABg");
	this.shape_628.setTransform(-31.5,20.5);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("#000000").ss(1,1,1).p("AABAAIAAABIgBgBg");
	this.shape_629.setTransform(-31.5,20.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#000000").s().p("AgBAAIADAAIAAABg");
	this.shape_630.setTransform(-31.5,20.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIADABIgFAAg");
	this.shape_631.setTransform(-31.4,20.5);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#000000").s().p("AgCABIACgBIADABg");
	this.shape_632.setTransform(-31.4,20.5);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("#000000").ss(1,1,1).p("AABAAIAAABIgBgBg");
	this.shape_633.setTransform(-31.2,20.5);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#000000").s().p("AgBAAIACAAIAAABg");
	this.shape_634.setTransform(-31.2,20.5);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIACAB");
	this.shape_635.setTransform(-30.9,20.4);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIACAB");
	this.shape_636.setTransform(-30.9,20.4);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#000000").ss(1,1,1).p("AACAAIgCAA");
	this.shape_637.setTransform(-30.9,20.3);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#000000").ss(1,1,1).p("AAAABIADgBIgDABIAAAAIgCAAIAAgBg");
	this.shape_638.setTransform(-30.6,20.1);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#000000").s().p("AAAABIADgBIgDABgAgCABIAAgBIACABg");
	this.shape_639.setTransform(-30.6,20.1);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#000000").ss(1,1,1).p("AACAAIAAABIgCgBg");
	this.shape_640.setTransform(-30.7,20.1);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AgBAAIADAAIAAABg");
	this.shape_641.setTransform(-30.7,20.1);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#000000").ss(1,1,1).p("AgBAAIACAAIgCABg");
	this.shape_642.setTransform(-30.4,20.1);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("AAAAAIACAAIgCABg");
	this.shape_643.setTransform(-30.4,20.1);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#000000").ss(1,1,1).p("AABAAIAAABIgCgBg");
	this.shape_644.setTransform(-30.4,19.9);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#000000").s().p("AAAAAIACAAIAAABg");
	this.shape_645.setTransform(-30.4,19.9);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIACAAIgCABg");
	this.shape_646.setTransform(-30.1,19.9);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#000000").s().p("AAAAAIABAAIgBABg");
	this.shape_647.setTransform(-30.1,19.9);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#000000").ss(1,1,1).p("AACAAIAAABIgCAAg");
	this.shape_648.setTransform(-30.1,19.8);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#000000").s().p("AAAABIABgBIAAABg");
	this.shape_649.setTransform(-30.1,19.8);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#000000").ss(1,1,1).p("AACAAIAAABIgCAAIAAgBg");
	this.shape_650.setTransform(-29.8,19.7);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#000000").s().p("AAAABIAAgBIABAAIAAABg");
	this.shape_651.setTransform(-29.8,19.7);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#000000").ss(1,1,1).p("AAAgBIADABIgDACIgCgCg");
	this.shape_652.setTransform(-29.7,19.7);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#000000").s().p("AgCAAIACgBIADABIgDACg");
	this.shape_653.setTransform(-29.7,19.7);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#000000").ss(1,1,1).p("AgBAAIACAB");
	this.shape_654.setTransform(-29.5,19.6);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("#000000").ss(1,1,1).p("AABAAIAAABIgCgBg");
	this.shape_655.setTransform(-29.5,19.6);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#000000").s().p("AgBAAIACAAIAAABg");
	this.shape_656.setTransform(-29.5,19.6);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("#000000").ss(1,1,1).p("AgBAAIACAAIgCABg");
	this.shape_657.setTransform(-29.3,19.6);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#000000").s().p("AAAAAIABAAIgBABg");
	this.shape_658.setTransform(-29.3,19.6);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("#000000").ss(1,1,1).p("AAAgBIADABIgFACIACgCg");
	this.shape_659.setTransform(-29.4,19.5);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#000000").s().p("AAAAAIAAgBIADABIgFACg");
	this.shape_660.setTransform(-29.4,19.5);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("#000000").ss(1,1,1).p("AABAAIAAABIgCgBg");
	this.shape_661.setTransform(-29.3,19.4);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#000000").s().p("AAAAAIABAAIAAABg");
	this.shape_662.setTransform(-29.3,19.4);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("#000000").ss(1,1,1).p("AACABIgCgB");
	this.shape_663.setTransform(-30.9,20.3);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#000000").ss(1,1,1).p("AABAAIAAABIgCgBg");
	this.shape_664.setTransform(-29.3,19.4);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#000000").s().p("AAAAAIABAAIAAABg");
	this.shape_665.setTransform(-29.3,19.4);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABABIgBAAg");
	this.shape_666.setTransform(-29,19.4);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#000000").s().p("AgBABIAAgBIACABg");
	this.shape_667.setTransform(-29,19.4);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#000000").ss(1,1,1).p("AABAAIAAABIgBgBg");
	this.shape_668.setTransform(-29,19.4);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#000000").s().p("AgBAAIACAAIAAABg");
	this.shape_669.setTransform(-29,19.4);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIACABIgCAAg");
	this.shape_670.setTransform(-28.7,19.3);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#000000").s().p("AgBABIAAgBIADABg");
	this.shape_671.setTransform(-28.7,19.3);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIADABIgDAAIgCgBg");
	this.shape_672.setTransform(-28.6,19.2);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#000000").s().p("AAAABIgCgBIACAAIADABg");
	this.shape_673.setTransform(-28.6,19.2);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIADABIgFAAg");
	this.shape_674.setTransform(-28.3,19);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#000000").s().p("AgCABIACgBIADABg");
	this.shape_675.setTransform(-28.3,19);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAHgBIgNABg");
	this.shape_676.setTransform(-27.6,18.8);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#000000").s().p("AgGABIANgBIgHABg");
	this.shape_677.setTransform(-27.6,18.8);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#000000").ss(1,1,1).p("AgCABIACgBIADABg");
	this.shape_678.setTransform(-27.8,18.9);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#000000").s().p("AgCABIACgBIADABg");
	this.shape_679.setTransform(-27.8,18.9);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#000000").ss(1,1,1).p("AADgBIAAABIgDACIgCgCg");
	this.shape_680.setTransform(-27.5,18.8);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#000000").s().p("AgCAAIAFgBIAAABIgDACg");
	this.shape_681.setTransform(-27.5,18.8);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#000000").ss(1,1,1).p("AABAAIAAABIgCAAIAAgBg");
	this.shape_682.setTransform(-27,18.6);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#000000").s().p("AAAABIAAgBIABAAIAAABg");
	this.shape_683.setTransform(-27,18.6);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABABIgBAAg");
	this.shape_684.setTransform(-26.7,18.5);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#000000").s().p("AgBABIAAgBIACABg");
	this.shape_685.setTransform(-26.7,18.5);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIADABIgDAAIgCgBg");
	this.shape_686.setTransform(-26.6,18.4);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#000000").s().p("AAAABIgCgBIACAAIADABg");
	this.shape_687.setTransform(-26.6,18.4);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#000000").ss(1,1,1).p("AgCABIACgBIADABg");
	this.shape_688.setTransform(-26.4,18.3);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#000000").s().p("AgCABIACgBIADABg");
	this.shape_689.setTransform(-26.4,18.3);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#000000").ss(1,1,1).p("AACAAIAAABIgCgBg");
	this.shape_690.setTransform(-26.2,18.2);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#000000").s().p("AgBAAIADAAIAAABg");
	this.shape_691.setTransform(-26.2,18.2);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#000000").ss(1,1,1).p("AgBAAIACABIgCAAg");
	this.shape_692.setTransform(-25.9,18.3);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#000000").s().p("AAAABIAAgBIACABg");
	this.shape_693.setTransform(-25.9,18.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#000000").ss(1,1,1).p("AABABIgCgB");
	this.shape_694.setTransform(-29.3,19.4);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("#000000").ss(1,1,1).p("AgBAAIACAB");
	this.shape_695.setTransform(-25.9,18.3);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("#000000").ss(1,1,1).p("AAOAIIAAABIgbgQIADgBg");
	this.shape_696.setTransform(-24.6,19.1);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#000000").s().p("AgNgHIADgBIAYAQIAAABg");
	this.shape_697.setTransform(-24.6,19.1);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("#000000").ss(1,1,1).p("AADAtIgFhZIACAAg");
	this.shape_698.setTransform(-23.2,24.3);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#000000").s().p("AgCgsIACAAIADBZg");
	this.shape_699.setTransform(-23.2,24.3);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#000000").ss(1,1,1).p("AAGgDIgyAkIAAgCIAygiIAngd");
	this.shape_700.setTransform(-27.4,32.1);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#000000").s().p("AgYAQIAxgiIgxAkg");
	this.shape_701.setTransform(-29.4,33.6);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#000000").ss(1,1,1).p("AgBABIACgB");
	this.shape_702.setTransform(-25.9,18.2);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FFF06E").s().p("AgFBJIAAgCIgCAAIAAgEIgDgCIAAgBIgGgEIAAgCIgDgCIAAgBIgCAAIAAgDIgDgCIAAgCIgDgDIAAgCIgDgEIAAgDIgDgEIAAgEIgCgEIAAgFIgDgCIAAgEIgJAAIAAACIgLAAIgDACIAAACIgDAAIAAABIgDACIgCAAIAAACIgDAAIAAADIgDABIgDAAIAAAEIgDABIAAAFIgCABIAAAEIgDACIAAACIgLABIgXgcIAwgaIAcgIIADgtIAcADIAjgBIAAgCIAGAAIADgCIAFAAIAAgBIADAAIADgDIADAAIAAgCIADAAIAAgBIACAAIAGgEIADAAIAAgCIAFAAIADgCIADAAIAGgDIACAAIADgCIADAAIAGgEIAcARIADBYIhaBCg");
	this.shape_703.setTransform(-35,26.8);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#000000").s().p("AgHAFIAFAAIAAgFIAFgEIAAgGIAFgFIAAAUIgKALg");
	this.shape_704.setTransform(14.2,-48.7);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#000000").s().p("AgCAAIgFgFIAAgEIAFAAIAKAJIAAAFIgFAFg");
	this.shape_705.setTransform(14.2,-50.8);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#000000").s().p("AgEgBIAEgLIAFAAIAAALIgFADIAAAGIgEAFg");
	this.shape_706.setTransform(12.9,-50.5);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#000000").s().p("AgCAIIAAgGIgFgDIAAgGIAFgFIAFALIAAADIAFALIgKgFg");
	this.shape_707.setTransform(13.2,-48.4);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#000000").s().p("AgJAPIAAgeIAEgFIAPAPIAAAKIgPAQg");
	this.shape_708.setTransform(14,-49.7);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#000000").s().p("AgEAIIAAgUIAEAAIAAAOIAFAAIgFALg");
	this.shape_709.setTransform(7.2,-48.4);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#000000").s().p("AgHAKIAAgKIAKgJIAFAAIAAAEIgFAFIAAAFIgFAFg");
	this.shape_710.setTransform(7.4,-50.8);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#000000").s().p("AAAAKIAAgKIgEgFIAAgEIAJAJIAAAKg");
	this.shape_711.setTransform(8.7,-50.8);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#000000").s().p("AgKANIAGgLIAEAAIAAgDIAFgLIAGAAIAAALIgGAJIgFAFg");
	this.shape_712.setTransform(8.2,-48.4);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#000000").s().p("AgKASIAAgeIAGgFIAJAAIAAAFIAGAFIAAAFIgGAKIgJAKg");
	this.shape_713.setTransform(8.2,-49.5);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#000000").s().p("AAqBUIgGAFIALgaIgFgQIAAgKIgGgLIgKgLIgFgKIgpgpIgGgLIgKgKIgQglIALAAIAAALIALAVIAVAVIAEAKIApAqIAGAKIAFAQIAGAKIAAAbIgGAPIAAAFg");
	this.shape_714.setTransform(32.9,-57.6);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#000000").s().p("AAKALIgUgLIgFgEIAAAEIgKAAIAFgKIAKAAIAGAGIAJAEIAFAFIAGAAIAAgFIAFAAIAFALg");
	this.shape_715.setTransform(30.3,-67);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#000000").s().p("AA9AlIgGgGIgLgFIgEgFIgLAAIgLgFIgKAAIgJgGIgLAAIgggOIgFgGIgLgFIgEgKIAAgLIAEAAIAGALIAAAFIAKAFIAGAFIAKAGIAGAEIAKAAIALAFIAJAAIAKAFIAQAAIAGAGIAVAKIAEAFIAAAGg");
	this.shape_716.setTransform(25.8,-70.7);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#000000").s().p("AgcADIgFAAIAVgKIAZAAIAFAFIAQAAIAAAFIg4AAIgGAFg");
	this.shape_717.setTransform(22.7,-74.7);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#000000").s().p("AhbAXIAAgKIAVAAIALgFIAKAAIALgFIAPgFIAVgKIAKAAIAQgGIAKAAIALgEIAKAEIALAAIAKAGIALAKIAFAFIgFAAIAAgFIgGAFIgKgFIgFgFIgLgFIgfAAIgVAKIgPAFIgLAAIgVAKIgPAGIgLAAIgKAEg");
	this.shape_718.setTransform(17.4,-74.7);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#000000").s().p("AgpAiIAFgFIALgFIAFgLIAKgKIAGgPIATgVIAQgFIALAAIAAAFIgLAFIgKAAIgKALIgGAKIgJAKIgLAPIgFALIgLAFIAAAFg");
	this.shape_719.setTransform(11.4,-76.3);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#000000").s().p("AhTAdIAVAAIAqgVIAFgFIAPgKIAFgFIAVgLIAQgFIAVgKIAVAAIAAAFIgKAAIgLAFIgLAAIgpAVIgLAKIg+AfIgLAAIgKAFg");
	this.shape_720.setTransform(7.2,-76.3);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#000000").s().p("AgpA1IAFgGIAagqIAKgKIAFgKIAVgVIAKgQIAGALIgVAVIgFALIgUATIgGAQIgUAVIAAAGg");
	this.shape_721.setTransform(2,-77.5);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#000000").s().p("AhgA3IAKgFIALgLIALgFIAKgKIAVgLIAKgKIAqgUIAKgLIBEgfIgVAVIhKAkIgJAKIggAQIgKAKIgLAFIgKALIgVAKg");
	this.shape_722.setTransform(-1.5,-77.8);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#000000").s().p("AgnAqIAVgVIAGgLIAKgKIAFgKIAKgPIAGgLIAPgKIAGAFIggAfIgFAPIgFALIgUAVIgRAKg");
	this.shape_723.setTransform(-6.7,-76.5);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#000000").s().p("Ah4C4IAAggIgFgaIAAg1IALgqIAVgpIAfgqIAVgPIA0gwIBuhEIAFAFIhPAwIg+AvIgVAVIgVAQIgqA4IgPA/IAABPIAEAgg");
	this.shape_724.setTransform(-15.4,-62.9);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#000000").s().p("AgBAnIgLgkIAFgKIAAgKIAJgLIAAgKIALAAIgFAFIAAAFIgGALIAAAFIgDAFIAAAZIADAVg");
	this.shape_725.setTransform(-27.7,-40.6);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#000000").s().p("AgWgCIAAgKIAEgLIALgKIAKgFIAUAAIAAAFIgKAAIgKAFIgFAFIgFAAIgLALIAAAKIAGApg");
	this.shape_726.setTransform(-25.6,-36.4);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#000000").s().p("AADAFIAAgFIgFAAIgFgEIgKgGIAFAAIAAgFIAFAFIAFAAIAFAGIAFAAIAFAEIAAAFIAFAFIgFAGg");
	this.shape_727.setTransform(-22,-38.7);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#000000").s().p("AgcAfIAFgFIgFAAIALgKIAFgLIAKgFIAFgEIAFAAIAFgGIALgaIAFAFIgFAQIgGALIgKAJIgFAAIgKAFIgFAGIgLAPIgFAGg");
	this.shape_728.setTransform(-17.8,-40.3);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#000000").s().p("AhbBnIAQg1IAKgKIAGgQIAKgQIAlgkIAKgQIA+gpIALgLIAQgLIAFAGIgvAfIgLALIgQAKIgjAlIgQAKIgLAPIgFAQIgKALIgLAPIgQA0g");
	this.shape_729.setTransform(-6.2,-54.2);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#000000").s().p("AgfBBIAAgkIAGgQIAFgLIAKgJIAKgQIAFgPIAKgQIAQgKIgKAPIgGAQIgKAQIgJAKIgGAJIgKAQIAAALIgFAQIAAAUg");
	this.shape_730.setTransform(0.9,-59.4);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#000000").s().p("AhQAqIAKgVIALgFIAFgLIAKgFIALgKIAVgKIAPgLIAVgKIAPgFIALAAIAVgLIAKAAIAAALIgVAAIgqAVIgPAFIgfAQIgKAJIgLAFIgQAQIgFALIgFAFIgFAQg");
	this.shape_731.setTransform(5.9,-57.1);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#000000").s().p("AgUAYIAAgGIALAAIAJgKIAAgFIAFgFIAAgKIAKgGIAGgEIAAAKIgGAAIAAAFIgEAFIAAAKIgLAKIgJAGg");
	this.shape_732.setTransform(11.9,-60.5);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#000000").s().p("Ag7AIIgLgFIAAgFIAVAAIALAFIA+AAIAKgFIAaAAIAGgFIAFAKIgVAAIgFAFg");
	this.shape_733.setTransform(16.9,-58.4);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#000000").s().p("AAFASIAFAAIgFgFIAAgFIgJgFIgGgKIgFgFIAAgLIALgFIAEALIgKAAIAAAFIAGAAIAUAUIAAAKIgLALg");
	this.shape_734.setTransform(24,-56.3);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#000000").s().p("AAyAqIgKgGIgGgEIAAgLIgFgGIgKgTIAAgLIgLgFIgKgKIgaAAIgPAEIgWALIAAgLIAWgKIAPgFIAaAAIAKAFIAPAQIALAUIAAALIAGAKIAEAFIAAAGIALAAIAFgGIAGAKIgLAGg");
	this.shape_735.setTransform(31.1,-51.8);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#000000").s().p("AlKDPIAAgaIAFgFIAGgLIAAgFIAFgFIAAgFIgFggIAAhPIAKgpIAVgqIALgPIAVgVIAPgVIB5haIAqgaIgKAQIgLAKIgFALIgLAKIgFALIgKAQIgLAKIALgFIAFgLIAVgKIAKgLIAggPIAKgLIAqgVIAPgFIALgFIgfAfIgKAQIgGAKIgVAVIgFAQIALAAIAKgFIALAAIAegQIALgKIAfgQIALgLIAKgFIALAAIAKgFIALAAIgVAKIgLAQIgKALIgGAKIgKALIgFAKIAVAAIAKgFIALAAIAPgFIAqgVIAQAAIALgGIAVAAIAVALIAKAKIgKAAIgGgFIgqAAIgKAFIAFALIAFAFIAGALIAFAFIAKAFIALAAIAKAFIALAAIAKAGIALAAIAVAKIAKAAIAQAQIAAAKIgFAAIgFgFIgLgFIgFgFIgQAAIAAAFIAFAKIAAAQIALALIAFAKIAqApIAFALIALAKIAQAgIAAAaIgGAQIgFAFIgFAAIgQgQIAAgKIgFgGIgQgfIgFgFIgLgGIgaAAIgQAGIgVAKIAGgFIAAgFIgGgLIgFgFIgKgFIAAgLIAKgFIgKAAIgLAFIgaAAIgFAFIgqAAIgLgFIgaAAIAKgFIAAgFIAGgKIAFgFIAAgFIAFgLIgFAAIgLAFIgKAAIgVALIgQAFIgVAKIgJAKIgQAFIgLAGIgFAKIgKAFIgQAQIgFALIAAgVIAFgQIAFgLIAFgPIAQgaIALgKIAKgQIg/AqIgKAKIggAVIgKAPIgLALIgKAQIgLAKIgKAQIgGAQIgKAPIgQA1IgFAFIgFALIgGAAIgFAFIgFAAIgLAKIgKAQIgFgKIAAgGIgGAAIAAgFIgFAAIgKgKIgGAAIgFAFIgKAAIgGAFIgKAFIgLALIAAAKg");
	this.shape_736.setTransform(4.6,-59.5);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#000000").s().p("AgCAgIgkgbIAFgFIAVAPIAPAGIAKAAIALgGIAFgFIAFgOIAAgLIgFgPIAFAAIAFAPIAAAPIgKAaIgQAGg");
	this.shape_737.setTransform(15.3,-39.8);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#000000").s().p("AAfANIgKgLIgLgDIgZAAIgKADIgGAGIgFgGIAggOIAJAAIALAFIAKAAIALAUg");
	this.shape_738.setTransform(15,-44.2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FDC090").s().p("AgCAnIgQgFIgPgQIAAgpIAFgFIAVgKIAUAAIAGAFIAKAFIAFALIAAApIgLAKIgKAFg");
	this.shape_739.setTransform(15.3,-41.1);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#000000").s().p("AgPAPIgPAAIgLgFIgFgFIgGgJIgKgGIAAgKIAFAAIAbAZIAKAFIAeAAIALgFIALAAIAEgFIALgEIAFgLIAGgFIAFAFIgFAFIgGAKIgUAKIgGAFIgVAAIgJAGIgLgGg");
	this.shape_740.setTransform(5.1,-42.9);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#000000").s().p("Ag5A3IgFgQIAAgQIAFgKIAAgOIALgLIAFgLIALgKIAogVIAlAAIAQAPIgGAGIgEgGIgLgEIgqAAIgUAKIgGAKIgKAGIgQAeIAAAqg");
	this.shape_741.setTransform(4.6,-50.5);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#000000").s().p("AA8A0IAAgfIgVgpIgpgVIgfAAIgKAFIgGAFIgKAGIAAAFIgGgFIAGgGIgGAAIALgKIALgGIAKAAIAKgEIALAAIAKAEIAPAAIAKAGIALAKIALAGIAFAKIAKALIAFAPIAAApg");
	this.shape_742.setTransform(16.9,-51.3);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#000000").s().p("AgJASIgLAAIgKgFIgLAAIgVgUIAFgFIAFAFIALAGIALAJIAKAFIAkAAIAKgFIAGAAIAPgPIAGgKIAEgGIAGAAIgGALIAAAFIgVAUIgKAFIgVAAIgKAGg");
	this.shape_743.setTransform(17.2,-43.7);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FFFFFF").s().p("AhLBKIgFgGIgLAAIgFgFIgLgFIgFgGIgFgKIAAgGIgFgPIAAgZIAKgWIALgKIAFgLIAKgKIAVgKIAqAAIAVAKIAFgFIAVgLIAfAAIAQAGIAVAKIAFAKIALALIAPAgIAAAPIgFAPIAAAKIgQAQIgKAGIgFAFIgLAFIgaAAIgLgFIgKAAIgFgFIgLgGIgPgQIgFALIgKALIgVAKIgGAAIgKAGg");
	this.shape_744.setTransform(11.1,-48.7);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#000000").s().p("AgSANIgEgFIAEgGIAGAAIALgJIATAAIAGgFIAAALIgLAAIgFADIgJAAIgLALg");
	this.shape_745.setTransform(0.6,-39);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#000000").s().p("AAAASIgKgFIgKgKIAAgUIAFAAIAAAKIAFAFIAAAFIAGAFIAJAAIAKAFIAGAAIAAAFg");
	this.shape_746.setTransform(22.4,-34.3);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#000000").s().p("AhLAfIgFgFIAKAAIALgFIAKAAIALgGIAKAAIALgEIAKAAIAKgGIAKAAIAFgFIALgFIAKAAIAVgKIAGgKIAKgGIAFAGIgKAKIgVAKIgFAFIgVALIgLAAIgKAEIgKAAIgKAGIgLAAIgKAFIgLAAIgFAFg");
	this.shape_747.setTransform(13.7,-30.8);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#000000").s().p("AANA6IgPgGIgKgKIgKgQIgLgpIALgqIAKAAIgKAVIAAApIAEAQIALAQIAKAKIAKAFIAQAAIAFAGg");
	this.shape_748.setTransform(2.7,-33.5);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#000000").s().p("AAyAnIgGgFIgEAAIgRgQIgUgKIgKgKIgPgFIgQgQIgQgKIAFgFIAvAfIAKAKIAKAFIAFAFIALAFIAKALIAGAAIAAAFIAFAAIAAAFg");
	this.shape_749.setTransform(21.1,-62.6);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#000000").s().p("AiXAvIAAgKIAFAAIAKgLIAQgFIAQgLIBEgeIAVgFIAZgLIA1gKIAVAAIAvAKIAVALIgFAFIgQgLIgVgFIhJAAIgbALIgUAFIgvAUIgVAFIgVALIgfAVIgLAFIgFAFg");
	this.shape_750.setTransform(0.9,-63.9);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#000000").s().p("AgcBuIAAgfIgFggIAFglIAAgpIAfg/IAfgPIAAAFIgaAQIgPAaIgLAlIgEAjIAABFIAEAVIAAAKg");
	this.shape_751.setTransform(-17.7,-48.7);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#000000").s().p("AAIgEIgfAAIgFAEIgFgEIAKgGIAGgFIAQAAIATALIAQAOIgFAGg");
	this.shape_752.setTransform(-23,-38.7);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#000000").s().p("AgHAlIgKgpIAAgQIAFgVIAKgQIAKgKIAFAFIgKAKIgKAQIgFAQIAAAQIAKAjIAKAVIAKALIgFAFg");
	this.shape_753.setTransform(-27.2,-32.4);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#000000").s().p("AgSAXIgPgKIgLgLIAGgEIAKAKIAVALIAPAAIAVgLIAFgPIAAgQIAKAAIgKAkIgKAGIgQAEg");
	this.shape_754.setTransform(-21.4,-25.9);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#000000").s().p("ABZBHIgQAAIgKgGIgQgFIgPAAIgggKIgagQIgPgFIgLgKIgKgRIgLgJIgKgQIgKgKIgLgVIAAgVIALAVIAEAPIALAQIAVAVIALAPIAaAQIAKAFIAfALIALAFIAfAKIAQAAIAKAFIAQAAIAAALg");
	this.shape_755.setTransform(-7.5,-22.7);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#000000").s().p("AikBzIAAgKIA/AAIAagGIAagKIAagFIBJgqIAQgQIAVgPIAPgVIAQgQIAqhYIAFAAIgFAZIgVAqIgvA+IhUA/Ig0AVIhZAQg");
	this.shape_756.setTransform(19.5,-26.6);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#000000").s().p("AAnBpIAAgQIAGgPIAAggIgbhIIgKgLIgFgKIgKgQIgKgGIgLgKIgKgGIgLgKIAAgFIALAFIAPAKIALAGIAKAKIAKAQIAFAKIALALIAKAQIAQAuIAAA/IgFAQg");
	this.shape_757.setTransform(31.6,-48.7);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FDC090").s().p("AgZEHIgLgGIgPgFIgQAAIgggLIgLgFIgPgFIgqgbIgVgUIgLgQIgFgQIgKgPIAAAUIgWAVIgKAGIgQAAIgKgGIgQgFIgLgKIgUggIgGgVIAAgkIALggIAVgVIAfAAIAGAFIAKAFIAGALIAAgfIgGgfIAAglIAGglIAKgkIAVggIAvgaIALgLIAVgFIAQgKIBJggIBIgQIAvAAIArAWIAfAUIALALIAKAFIALALIAKAFIAGAFIAKAGIAFAAIAAAEIALAAIAAAGIAVAKIAqArIAFAPIAKALIAQAvIAAAQIAGAPIAAAPIgQA1IgVAvIgQAVIgKAVIgWAQIgPAVIgqAfIhKAgIhZAQg");
	this.shape_758.setTransform(4.1,-41.8);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#000000").s().p("AADA0IAAAGIgKhzIAKAAIAFBzg");
	this.shape_759.setTransform(7.9,-15.1);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#000000").s().p("AhAgCICBgFIAAAFIgKAAIAGAFIh9AFg");
	this.shape_760.setTransform(1.7,-20.6);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#000000").s().p("AgKAlIAKhEIAFgFIAAALIAGgGIgPBEg");
	this.shape_761.setTransform(-5.4,-17.2);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FDC090").s().p("AgSBBIgKgLIgKgDIgQgLIgVgfIAPhEIB9gFIALBzIgFAAIgGADIgEAAIgLAFIgKAAIgLAGg");
	this.shape_762.setTransform(1.5,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.1,-83.8,96.5,168.6);


(lib.angel318 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFC0D").s().p("ABMAoIgPgwIADgCIgEABIgigNIhOghQAAAIAVAOIAZAQIgsgLQgngKgKgTQAEANAIAGQABAEgMAbQgMAZgIAOQgIAOAEAKIAFAMIABAAIAAABIAAAAIADADIgBABIAAABIgBAAIAAAAIgBAAIgFABIgMgBIgLgFIgPgJIAigaIAMgqIABgPIgCg9IACgOIAWgHIAtgIIBygFIANAFIAVAMIAUARIAPAUIAGANIANAwIADAgIgBAPIgDAPIgGAPIgTASIgXAQIgnALQAQgrgJgkgABNgRIACgBIAJgIg");
	this.shape.setTransform(3.1,-22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAAIABgBIACABIgCACQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_1.setTransform(3.2,-21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAAIAAgBIABABQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_2.setTransform(-2.7,-21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAAQAAgFAFgBQAFABABAFQgBAGgFABQgFgBAAgGg");
	this.shape_3.setTransform(2.9,-21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAAQABgEADgBQAEABAAAEQAAAFgEABQgDgBgBgFg");
	this.shape_4.setTransform(-2.9,-21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLADQgDgMALgFQALgCAEANQADANgLAEIgDABQgIAAgEgMg");
	this.shape_5.setTransform(-2.4,-21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAEQgDgOANgGQANgCAGAPQADAOgNAGIgEAAQgKAAgFgNg");
	this.shape_6.setTransform(3.6,-21.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AABAOIgFgDIgGgFIgFgGIAAAAIABgCIACgDIAEgDIACgBIAEgDIAIgBIADAAIADABIACABIACACIgFgCIgKABIgEABIgBABIgCAAIgDAFIAAACIABABIAEADIANAIIAAABIgBAAIAAABIAAABIgEAAg");
	this.shape_7.setTransform(-1,-18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXATIgPgCIgPgHIgKgGIgJgGIgDgEIAAgBIAAAAIAAgBIABgBQgCAAAAAAQgBAAABAAQAAAAAAAAQABAAACAAQAGAVAxAEQAwAFAcgfIgHgGIACgCIACAAIADABIAKAGIADACIADACIACACIAAABIABAAIAAABIAAAAIAAAAIABACIAAABIgBAAIgCAAIAAAAIgCgBIAAgBIgBAAIgBgBIgHgDIgZAPQgSAIgRACIgHAAg");
	this.shape_8.setTransform(1.5,-15.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDD1A7").s().p("AAJBaIg3gMIgQgHIgbgXIgEgFIgGgRIgBgJIAEgOIAbg4IACgMIgCgOIBEAXIgrghIAlAGIBYApIAMAcIAHAfIABAQIgEAfIgFAPIAAABIgBABIgBABIAAAAIAAAAIAAABIgCAAIAAAAIgoAHg");
	this.shape_9.setTransform(1,-19.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFgFIAFgBIAFALIgEACg");
	this.shape_10.setTransform(5.5,31.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgCgFIADgBIACAMIgDABg");
	this.shape_11.setTransform(5,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBgDIADAAIAAAFIgDACg");
	this.shape_12.setTransform(4.9,29.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBADIAAgFIADAAIAAAFg");
	this.shape_13.setTransform(4.9,28.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AABAGIgDAAIACgMIADABIgCAMg");
	this.shape_14.setTransform(5,27.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgCADIAAgCIACgEIADABIgCAGg");
	this.shape_15.setTransform(5.3,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDAFIADgKIAEABIgEAKg");
	this.shape_16.setTransform(5.6,25.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBACIAAABIgBgFIAEAAIABAEIAAABg");
	this.shape_17.setTransform(5.7,25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAACIAAAAIgCgCIACgCIADADIAAABIgDAAIAAABg");
	this.shape_18.setTransform(5.5,24.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAADIgCgFIADgCIACAGIgDACg");
	this.shape_19.setTransform(5.2,24.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBADIgBgGIAFAAIAAAFIgEACg");
	this.shape_20.setTransform(5,23.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAFIABgBIAGgIIADACIgFAHg");
	this.shape_21.setTransform(5.3,22.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBABIABgBIACAAIAAABg");
	this.shape_22.setTransform(4.8,23.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgDgCIAAgCIAHAHIgCABg");
	this.shape_23.setTransform(5.4,24.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgBAGIABgKIACgBIAAABIgCAKg");
	this.shape_24.setTransform(5.6,25.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBAFIACgJIAAABIABAAIgCAIg");
	this.shape_25.setTransform(5.3,26.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgCABIAFgCIAAABIgEACg");
	this.shape_26.setTransform(4.7,26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEAEIAIgIIABABIgIAIg");
	this.shape_27.setTransform(4.1,27.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEAIIAIgQIABABIgIAQg");
	this.shape_28.setTransform(3.2,28.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgCAOIAEgbIABABIgEAag");
	this.shape_29.setTransform(2.5,31);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgCAJIAEgQIAAAAIABAAIgEAQg");
	this.shape_30.setTransform(2,33.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGACIAMgEIABAAIAAABIgMAEg");
	this.shape_31.setTransform(1.1,34.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBABIAAgBIACAAIAAAAIABAAIgBAAIABAAIAAABg");
	this.shape_32.setTransform(0.3,34.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgBAAIAAAAIADAAIAAAAg");
	this.shape_33.setTransform(6,33.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgCAAIAAgBIAFABIAAACg");
	this.shape_34.setTransform(-0.6,34.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAAAFIgBgKIABAAIACAKg");
	this.shape_35.setTransform(-1.1,33.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFAJIAJgSIABABIgJARg");
	this.shape_36.setTransform(-0.7,32.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgGAFIAMgKIABABIgMAKg");
	this.shape_37.setTransform(0.4,30.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgBAFIABgKIACAAIgCALg");
	this.shape_38.setTransform(1.2,29.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgBARIACghIABAAIgCAhg");
	this.shape_39.setTransform(1.4,27.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEAHIAAgBIAIgMIABABIgIAMg");
	this.shape_40.setTransform(2.1,25.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgEACIAHgEIABABIgHAEg");
	this.shape_41.setTransform(2.9,24.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgDAAIAHgBIAAABIgGACg");
	this.shape_42.setTransform(3.7,23.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgCAAIAAgBIAFABIgBACg");
	this.shape_43.setTransform(4.4,23.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFC7").s().p("AgYA2IgGgBIgEgLIALgSIANgNIADgKIADghIAHgNIAJgGIAGgCIAHABIACABIAIAIIgGAUIgHAEIgIAJIgJAPIgFAcIgEAQIgMAFg");
	this.shape_44.setTransform(2.2,29.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAAAIABAAIgBAAIABAAIAAAAIAAAAIgBABg");
	this.shape_45.setTransform(5.1,23);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAAAFIgBgIIABgBIAAABIAAAAIACAIg");
	this.shape_46.setTransform(5,23.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgCgCIAAgBIABAAIAEAFIAAACg");
	this.shape_47.setTransform(5.4,24.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAAADIAAgFIAAAAIAAAFg");
	this.shape_48.setTransform(5.7,25.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgCAGIAEgLIABAAIgDALg");
	this.shape_49.setTransform(5.4,26.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgBAFIABgJIACAAIgCAJg");
	this.shape_50.setTransform(5.2,27.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAAADIAAgFIAAAAIAAAFg");
	this.shape_51.setTransform(5,28);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAAAFIAAgJIAAAAIAAAJg");
	this.shape_52.setTransform(5,28.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAAAIIAAgQIAAAAIABAQg");
	this.shape_53.setTransform(5.1,30.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgDgEIABAAIAAgBIAGAKIgCABg");
	this.shape_54.setTransform(5.5,31.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgEAAIAAAAIAAgBIAAAAIAAABIAJAAIAAACg");
	this.shape_55.setTransform(6.3,32.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgDAHIAFgNIACAAIgGANg");
	this.shape_56.setTransform(7.2,31.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgBAIIACgPIABAAIgCAPg");
	this.shape_57.setTransform(7.6,30.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAAAFIAAgIIABAAIgBAIg");
	this.shape_58.setTransform(7.9,28.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAAAEIAAgHIAAAAIABAHg");
	this.shape_59.setTransform(7.9,28.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAAAEIAAgIIAAAAIABAIg");
	this.shape_60.setTransform(7.8,27.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAAADIAAgFIAAAAIAAAFg");
	this.shape_61.setTransform(7.7,26.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAAACIAAgDIABAAIgBADg");
	this.shape_62.setTransform(7.8,25.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgCADIAAgBIAFgEIAAABIgEAEg");
	this.shape_63.setTransform(8.1,25.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgBAEIAAgBIACgGIABABIgCAGg");
	this.shape_64.setTransform(8.7,24.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAAACIAAgFIABAAIgBAHg");
	this.shape_65.setTransform(8.9,24);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AACAGIgEgLIABAAIAEALg");
	this.shape_66.setTransform(8.7,23);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGgDIAAgBIANAIIAAABg");
	this.shape_67.setTransform(7.7,22.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgCAAIAFgBIAAABIgEACg");
	this.shape_68.setTransform(6.6,21.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEACIAHgEIABABIgIAEg");
	this.shape_69.setTransform(6,22);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgBADIACgGIABAAIAAABIgCAGg");
	this.shape_70.setTransform(5.3,22.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFC7").s().p("AgLA0IgGgLIgCgRIAAgKIAIgiIgHgIIgBgJIACgBIADgIIAOgHIAPAJIAFAMIgFAOIgHAGIAAATIABAIIgEAZIgFAOg");
	this.shape_71.setTransform(7,26.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgEAHIAFgOIAEACIgFANg");
	this.shape_72.setTransform(8.1,-9.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgHABIAMgGIgCABIAFACIgBABIgMAHg");
	this.shape_73.setTransform(7.2,-8.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDACIAAgDIAFAAIADADg");
	this.shape_74.setTransform(6.2,-8.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgDACIAAgEIAHABIgCAAIAAAEg");
	this.shape_75.setTransform(5.5,-8.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAGAGIgMgIIACgDIALAHIAAAEg");
	this.shape_76.setTransform(4.4,-8.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgCACIAAgDIAFAAIAAADg");
	this.shape_77.setTransform(15.7,-7.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgCACIAAgDIAFAAIAAADg");
	this.shape_78.setTransform(16.4,-7.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgGACIAAgDIANAAIAAADg");
	this.shape_79.setTransform(17.5,-7.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgNACIAAgEIAbABIAAAEg");
	this.shape_80.setTransform(19.7,-7.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgbABIAAgDIA3ACIAAADg");
	this.shape_81.setTransform(23.9,-7.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("Ag3gEIABAAIAAgFIBuAOIAAAFg");
	this.shape_82.setTransform(32.2,-6.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgRAPIgBgDIAigbIADAEIghAbg");
	this.shape_83.setTransform(1.1,19.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgTALIAlgZIACAFIglAYg");
	this.shape_84.setTransform(4.7,16.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgoASIBOgoIACAEIhOApg");
	this.shape_85.setTransform(10.5,13.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgoARIgCgEIBUgeIABAFIhUAdg");
	this.shape_86.setTransform(18.6,10);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgsAIIBYgUIABAEIhYAVg");
	this.shape_87.setTransform(27.3,7.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAAADIAAgFIAAAAIABAFg");
	this.shape_88.setTransform(44,-15.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgBgCIABAAIACAEIgCABg");
	this.shape_89.setTransform(44.2,-16.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgEACIABgBIgBAAIAKgCIAAABIgJACg");
	this.shape_90.setTransform(44.8,-16.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgBAAIABgBIACACIAAABg");
	this.shape_91.setTransform(43.5,-17.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgBAAIgBAAIABAAIAEAAIAAABg");
	this.shape_92.setTransform(43.8,-17.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgFADIAAgBIAKgEIABABIgKAEg");
	this.shape_93.setTransform(44.7,-17.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgIABIARgCIAAABIgRACg");
	this.shape_94.setTransform(42.3,-17.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgIACIAQgFIABABIgRAGg");
	this.shape_95.setTransform(44.2,-18.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgBACIACgDIABABIgCACgAgBABIAAABIAAAAgAgBACg");
	this.shape_96.setTransform(45.2,-18.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIABACIAAABg");
	this.shape_97.setTransform(45.4,-19.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgCAAIAAAAIAFAAIgBAAg");
	this.shape_98.setTransform(45,-19.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgDABIAAgBIAHAAIAAABg");
	this.shape_99.setTransform(44.3,-19.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgDABIAAgBIAHAAIAAABg");
	this.shape_100.setTransform(43.5,-19.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgGACIANgEIAAABIgNAEg");
	this.shape_101.setTransform(42.4,-19.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgBADIACgFIAAABIABAAIgCAEg");
	this.shape_102.setTransform(35.1,-17.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAAACIAAgDIAAAAIAAADg");
	this.shape_103.setTransform(34.9,-16.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAAACIAAgDIAAAAIAAADg");
	this.shape_104.setTransform(34.9,-16.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgCgGIABAAIAEAMIgBABg");
	this.shape_105.setTransform(35.2,-15.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgKADIABgBIATgEIABABIgUAEg");
	this.shape_106.setTransform(36.5,-14.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgEABIgBgBIALAAIAAABg");
	this.shape_107.setTransform(38.1,-15.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgIAAIAAAAIARAAIAAABg");
	this.shape_108.setTransform(39.6,-15);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgPACIAfgEIAAABIgfAEg");
	this.shape_109.setTransform(42.1,-15.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAAAAIgBAAIABgBIACABIgCACg");
	this.shape_110.setTransform(43.8,-15.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgBAAIABAAIgBgBIABAAIACABIAAACg");
	this.shape_111.setTransform(44.1,-15.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgCAAIAFgBIAAABIgFACg");
	this.shape_112.setTransform(44.6,-15.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgBAAIABgBIACABIgDACg");
	this.shape_113.setTransform(45.1,-15.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAAADIAAgGIABAAIAAAHg");
	this.shape_114.setTransform(45.2,-16.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAAABIgBAAIABgCIACABIgCACg");
	this.shape_115.setTransform(45.3,-16.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgBAAIADAAIAAAAIgCABg");
	this.shape_116.setTransform(45.5,-16.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAAAAIgBAAIABgBIACABIgCACg");
	this.shape_117.setTransform(45.8,-17);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAAAAIAAgBIAAAAIAAADg");
	this.shape_118.setTransform(45.9,-17.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_119.setTransform(45.8,-17.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAAABIAAgBIABABg");
	this.shape_120.setTransform(45.8,-17.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgCAAIAEAAIAAAAIgEABgAACAAIABAAIAAAAg");
	this.shape_121.setTransform(45.6,-17.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAAAAIAAABIgBAAIABgBIAAAAIACAAIgCABg");
	this.shape_122.setTransform(45.4,-17.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgDABIAHgCIAAABIgHACg");
	this.shape_123.setTransform(45.9,-18.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAAACIAAgDIABAAIgBADg");
	this.shape_124.setTransform(46.3,-18.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AABACIgCgDIABAAIACABIAAACg");
	this.shape_125.setTransform(46.2,-18.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgDAAIAAgBIAIABIAAABIgBAAIABABg");
	this.shape_126.setTransform(45.6,-19.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgBAAIAAAAIADAAIAAAAg");
	this.shape_127.setTransform(45,-19.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgQAEIgBAAIAAAAIAigIIABAAIgjAJg");
	this.shape_128.setTransform(46.6,-19.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgCAAIAEgBIABABIgEACg");
	this.shape_129.setTransform(48.6,-20.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgBAAIABgBIACABIgCACg");
	this.shape_130.setTransform(49,-20.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AACABIAAABIgEgDIABAAIAEACIAAABg");
	this.shape_131.setTransform(48.9,-20.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgBAAIAAAAIACAAIABAAIgBAAIAAABg");
	this.shape_132.setTransform(48.5,-21.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgBAAIAAAAIADAAIAAAAg");
	this.shape_133.setTransform(48.1,-21.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgDAAIAHAAIAAAAIgHABg");
	this.shape_134.setTransform(47.5,-21.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgSAEIAlgIIAAABIglAHg");
	this.shape_135.setTransform(45.2,-20.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgEABIAJgCIAAABIgJACg");
	this.shape_136.setTransform(42.8,-20.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgIABIARgCIAAABIgRACg");
	this.shape_137.setTransform(41.4,-19.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgEACIAJgEIAAABIgJAEg");
	this.shape_138.setTransform(40,-19.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgGAEIANgIIAAABIgNAIg");
	this.shape_139.setTransform(38.7,-18.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgEACIAIgEIAAABIgIAEg");
	this.shape_140.setTransform(37.6,-17.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgEAAIAJgBIAAABIgJACg");
	this.shape_141.setTransform(36.6,-17.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgEAAIAAAAIAIAAIAAABg");
	this.shape_142.setTransform(35.7,-17.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FDD1A7").s().p("AhGATIAAgJIACgGIAJACIALgCIAigUIBAgQIAIAAIAFgBIADABIAFAEIgDABIgFAEIgkAJIAEAAIAJAEIACADIAAAEIgIADIgBABIAFAAIABAEIAAACIgCACIgEACIgBADIgBAGIgCADIgGABIgFgBIgBABIgfAEIgfgBIgTAHg");
	this.shape_143.setTransform(42,-17.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgBAAIADAAIAAAAIgCABg");
	this.shape_144.setTransform(-11.8,-7.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAGAXIgNgsIAAgBIABABIAOAsg");
	this.shape_145.setTransform(-11.2,-5.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AACAQIgFgfIACAAIAFAfg");
	this.shape_146.setTransform(-10.2,-1.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AACAYIgEgvIACAAIADAvg");
	this.shape_147.setTransform(-9.8,2.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAAAFIAAgJIAAAAIABAJg");
	this.shape_148.setTransform(-9.5,5.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgFAAIAAAAIALAAIAAAAg");
	this.shape_149.setTransform(-8.8,5.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgDACIAHgEIAAABIgHAEg");
	this.shape_150.setTransform(-7.7,5.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgHAJIAAgBIAOgRIABABIgOARg");
	this.shape_151.setTransform(-6.6,4.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgMAKIAZgUIAAABIgYAUg");
	this.shape_152.setTransform(-4.6,2.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgMAGIAZgMIAAABIgZAMg");
	this.shape_153.setTransform(-2,0.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgTAGIAmgMIABABIgnAMg");
	this.shape_154.setTransform(1.3,-0.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgCAAIAEgBIABABIgEACg");
	this.shape_155.setTransform(3.6,-1.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgCgDIABABIgBgDIABAAIAAACIAEAIIgBABg");
	this.shape_156.setTransform(4.1,-0.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAAAGIAAgJIAAgBIAAABIABAJg");
	this.shape_157.setTransform(4.4,0.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAAADIAAgFIAAAAIAAAFg");
	this.shape_158.setTransform(4.5,1.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAAAFIAAgIIABAAIgBAIg");
	this.shape_159.setTransform(4.4,1.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgBAHIABgNIACAAIgCANg");
	this.shape_160.setTransform(4.2,3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgJAlIAShKIABAAIgSBLg");
	this.shape_161.setTransform(3.1,7.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgJAUIASgnIABABIgSAmg");
	this.shape_162.setTransform(1.2,13.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAEgIIABAAIgKARg");
	this.shape_163.setTransform(-0.2,16.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgCAIIADgPIACAAIgEAPg");
	this.shape_164.setTransform(-1,17.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAAAFIAAgIIABAAIgBAIg");
	this.shape_165.setTransform(-1.3,19.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAAADIAAgFIAAAAIABAFg");
	this.shape_166.setTransform(-1.3,19.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgBAAIAAgBIABAAIACADg");
	this.shape_167.setTransform(-1,20.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AACgBIACAAIgHADg");
	this.shape_168.setTransform(-0.4,20.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgDAEIAGgHIABABIgGAGg");
	this.shape_169.setTransform(0.3,20);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgGAGIAMgMIABAAIgMANg");
	this.shape_170.setTransform(1.2,19);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgjAVIBGgqIABAAIhHArg");
	this.shape_171.setTransform(5.5,16.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgkATIBJglIAAABIhIAkg");
	this.shape_172.setTransform(12.6,12.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgtAMIBbgZIAAABIhbAZg");
	this.shape_173.setTransform(20.9,9.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgfAHIA/gOIAAABIg/AOg");
	this.shape_174.setTransform(28.7,7.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AAbAYIg4guIAAgBIA6AuIABABg");
	this.shape_175.setTransform(29.2,4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgRgOIAAgBIAjAeIAAABg");
	this.shape_176.setTransform(24.4,0.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgOgGIABgBIAcANIgBACg");
	this.shape_177.setTransform(18.9,-3.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgMgFIABgBIAYAMIgBABg");
	this.shape_178.setTransform(16.2,-4.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgEgBIABgBIAHAEIgBABg");
	this.shape_179.setTransform(14.5,-5.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAAACIgBgEIABAAIACAEIgCABg");
	this.shape_180.setTransform(14,-6.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgEADIgBAAIALgGIAAABIgLAGg");
	this.shape_181.setTransform(14.5,-6.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgKAAIAVgBIAAABIgVACg");
	this.shape_182.setTransform(16.2,-7.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgCABIAAgBIAFAAIAAABg");
	this.shape_183.setTransform(17.7,-7.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgCABIAAgBIAFAAIAAABg");
	this.shape_184.setTransform(18.3,-7.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgFABIAAgBIALAAIAAABg");
	this.shape_185.setTransform(19.3,-7.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgJABIAAgBIATAAIAAABg");
	this.shape_186.setTransform(21,-7.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgvgDIAAgBIBfAJIAAABg");
	this.shape_187.setTransform(26.8,-7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgfgEIAAgBIA/AIIAAACg");
	this.shape_188.setTransform(34.7,-6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAHAOIAAgBIgPgZIABgBIAPAaIAAABg");
	this.shape_189.setTransform(37.2,-6.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AADANIgIgbIABAAIAKAbIgCAAIgBACg");
	this.shape_190.setTransform(36,-9.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AABAUIgCgnIABAAIACAng");
	this.shape_191.setTransform(35.3,-13.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AAAADIAAgFIABAAIAAAFg");
	this.shape_192.setTransform(35.1,-15.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_193.setTransform(35.1,-15.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAAAFIAAgIIABAAIAAAIg");
	this.shape_194.setTransform(35.1,-16.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAAAEIAAgHIABAAIAAAHg");
	this.shape_195.setTransform(35.1,-17.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAAAAIABgBIAAABIgBACg");
	this.shape_196.setTransform(35.1,-17.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAXgHIABABIgBAAIguAOg");
	this.shape_197.setTransform(32.7,-16.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgCAAIAAAAIAFAAIAAAAg");
	this.shape_198.setTransform(10,-9.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgCACIAFgEIAAABIgBABIABAAIgEADg");
	this.shape_199.setTransform(8.7,-10.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgCADIAEgFIABABIgEAEg");
	this.shape_200.setTransform(8.3,-9.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AAGgDIAAABIgLAGg");
	this.shape_201.setTransform(7.4,-9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgCAAIAFgBIgFADg");
	this.shape_202.setTransform(6.4,-8.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgGAAIAAAAIANAAIAAAAg");
	this.shape_203.setTransform(5.3,-8.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAEADIgIgEIAAgBIAJAEIAAABg");
	this.shape_204.setTransform(4.1,-8.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgCAAIAAgBIAFABIAAACg");
	this.shape_205.setTransform(3.2,-9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgCAAIAAAAIAFAAIAAABg");
	this.shape_206.setTransform(2.6,-9.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgCAAIAFAAIAAAAIgFABg");
	this.shape_207.setTransform(2,-9.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgHAAIAPgBIAAABIgPACg");
	this.shape_208.setTransform(0.8,-9.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgTACIAngEIAAABIgnAEg");
	this.shape_209.setTransform(-1.9,-8.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgmADIBNgGIAAABIhNAGg");
	this.shape_210.setTransform(-7.7,-8.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFC7").s().p("AiOC8IAAgQIAFgQIAeg6IAThLIACgPIgBgZIgEgKIgGABIgnANIgaANIgZAUIgQATIgIAFIgMAAIgLhZIgOgtIACgCICFgOIANAAIARAJIAOAAIAUgKIAFgHIAFgEIAHAIIAGAAIAMgCIDshPIACBCIALAcIAOAbIifgTIgugBIgYADIgLAGIACAGIAHAGIA4AbIAVAOIBeBMIicAoIhIAkIhHAsIgNAOIgIAHIgGAEg");
	this.shape_211.setTransform(13,1.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAAAAIgBAAIADAAIAAAAg");
	this.shape_212.setTransform(-29.6,-7.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgCAAIAAgBIAFABIAAACg");
	this.shape_213.setTransform(-29.1,-7.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgEgBIAAgBIAJAEIAAABg");
	this.shape_214.setTransform(-28.3,-7.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AAAACIAAgCIAAAAIAAgBIABABIgBACg");
	this.shape_215.setTransform(-27.8,-7.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgBAAIABAAIACAAIAAAAIgCABg");
	this.shape_216.setTransform(-28,-6.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#E4BC76").s().p("AACABIgEgBIAAAAIAEAAIABAAIAAABg");
	this.shape_217.setTransform(-28.3,-6.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgBAAIABgBIACABIAAACg");
	this.shape_218.setTransform(-28.8,-6.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgDgDIAAgBIAHAIIgBABg");
	this.shape_219.setTransform(-29.3,-7.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#E4BC76").s().p("AACAGIgLgKIAEgBIAFACIAKAFIAAACIgEACg");
	this.shape_220.setTransform(-28.8,-7.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_221.setTransform(-29.3,-9.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgEgBIABAAIAAgBIAHAFg");
	this.shape_222.setTransform(-28.9,-9.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgEgFIABAAIAIAKIgBABg");
	this.shape_223.setTransform(-28,-8.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAAADIAAgEIAAgBIAAAFg");
	this.shape_224.setTransform(-27.5,-7.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgCAAIAFAAIgBAAIABAAIgFABg");
	this.shape_225.setTransform(-27.8,-7.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgCAAIABAAIAEAAIAAABg");
	this.shape_226.setTransform(-28.3,-7.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgCAAIAAgBIAFABIgBACg");
	this.shape_227.setTransform(-28.8,-7.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgEgCIABgBIAIAGIAAABg");
	this.shape_228.setTransform(-29.6,-7.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AAAACIgBgEIABAAIACAEIgCABg");
	this.shape_229.setTransform(-30.1,-8.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AAAADIAAgFIABAAIgBAFg");
	this.shape_230.setTransform(-30.2,-9.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgCAAIAFAAIAAAAIgFABg");
	this.shape_231.setTransform(-29.7,-9.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#E4BC76").s().p("AAEAMIgPgKIgCgFIACgHIAHgBIABAAIAHAHIAKAKIAAAGg");
	this.shape_232.setTransform(-28.9,-8.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_233.setTransform(-27.8,-8.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAEAFIgIgIIABgBIAIAJg");
	this.shape_234.setTransform(-28.3,-8.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgFgDIAAgBIALAHIgBABg");
	this.shape_235.setTransform(-29.4,-9.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgBAAIAAgBIADABIAAACg");
	this.shape_236.setTransform(-30.1,-10.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AAAACIAAgCIAAgBIABACIAAABg");
	this.shape_237.setTransform(-30.4,-10.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AAAACIAAABIAAgFIABABIgBAEg");
	this.shape_238.setTransform(-30.4,-10.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgCACIAEgEIABABIgEAEg");
	this.shape_239.setTransform(-30.2,-11.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AAAAAIgBAAIABAAIACAAIAAABg");
	this.shape_240.setTransform(-29.8,-11.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgEgCIAAgBIAKAGIAAABg");
	this.shape_241.setTransform(-29,-11.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgFgEIAAgBIACAAIAJAKIgBABg");
	this.shape_242.setTransform(-27.8,-10.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AACAGIgEgKIABgBIAEALgAgCgEIAAgBIAAABg");
	this.shape_243.setTransform(-27,-9.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAAADIAAgFIABAAIAAAFg");
	this.shape_244.setTransform(-26.8,-8.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgCAAIAEAAIABAAIAAAAIgBAAIgDABg");
	this.shape_245.setTransform(-27,-7.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AACACIgEgCIABgBIAEACIgBAAIABABg");
	this.shape_246.setTransform(-27.5,-7.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#E4BC76").s().p("AAJAQIgBgCIgJgKIgLgGIgGgGIACgGIAFgEIADAAIALAHIALALIAFAMIAAAFIgFACg");
	this.shape_247.setTransform(-28.7,-9.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AAAAHIgBgNIABAAIACANg");
	this.shape_248.setTransform(-11.4,-6.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgzgEIAAgBIBnAJIgBABg");
	this.shape_249.setTransform(-16.5,-6.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgCAAIABAAIAEAAIgBAAIAAABg");
	this.shape_250.setTransform(-21.9,-7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgBAAIAAAAIADAAIgBABg");
	this.shape_251.setTransform(-22.2,-7.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgCADIAFgFIAAABIgEAEg");
	this.shape_252.setTransform(-22.7,-6.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgEAAIAAAAIAJAAIgBAAg");
	this.shape_253.setTransform(-23.4,-6.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgFAAIAAgBIAKABIAAACg");
	this.shape_254.setTransform(-24.4,-6.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgCAAIAAgBIAFACIAAABg");
	this.shape_255.setTransform(-25.3,-6.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgFADIACgBIAJgEIAAABIgJAEg");
	this.shape_256.setTransform(-25.1,-7.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AAKAQIAAgBIABABgAgKgPIAUAeIgCABg");
	this.shape_257.setTransform(-25.5,-9.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgGAAIAAAAIANAAIAAABg");
	this.shape_258.setTransform(-27.3,-10.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgDAAIABgBIAGABIgBAAIAAACg");
	this.shape_259.setTransform(-28.3,-10.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AAAgCIABAAIAAAEIgBABg");
	this.shape_260.setTransform(-28.7,-11.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAAADIAAgFIABAAIgBAFg");
	this.shape_261.setTransform(-28.6,-12);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AAAABIgBAAIACgCIABABIgDACg");
	this.shape_262.setTransform(-28.4,-12.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgDABIAAgBIgBAAIAKAAIAAABg");
	this.shape_263.setTransform(-27.7,-12.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgNgCIAAgCIAbAIIgBABg");
	this.shape_264.setTransform(-25.7,-12.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgSgFIABgBIAkAMIAAABg");
	this.shape_265.setTransform(-22.6,-11.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgKgFIAAgBIAVAMIgBABg");
	this.shape_266.setTransform(-19.6,-9.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgPgEIABgBIgBAAIABAAIAAAAIAeAKIAAABg");
	this.shape_267.setTransform(-16.9,-8.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgSgCIAAgCIAlAHIAAABg");
	this.shape_268.setTransform(-13.4,-7.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FDD1A7").s().p("AgQAWIgEgBIgDAAIgGAGIgUgBIgFgEIAKgEIgVgfIgOgBIgGgDIgBgGIABgHIAFgCIAKAAIBAAVIAUALIAhAMIAnAIIABANg");
	this.shape_269.setTransform(-20,-9.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AAAABIgBgBIAAAAIACAAIABABg");
	this.shape_270.setTransform(22.2,8.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgCAAIAFAAIAAAAIgFABg");
	this.shape_271.setTransform(21.7,8.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgGACIANgEIAAACIgMADg");
	this.shape_272.setTransform(20.7,8.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgNAGIAagMIABABIgaAMg");
	this.shape_273.setTransform(18.6,9.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgXAeIAug9IABABIgvA+g");
	this.shape_274.setTransform(14.9,13.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgaAbIA0g2IABABIg1A2g");
	this.shape_275.setTransform(9.9,19.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgHgGIAAAAIAAgBIAQAOIgCACg");
	this.shape_276.setTransform(8,22.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AghAgIABgCIgBAAIBCg9IABAAIhCA/g");
	this.shape_277.setTransform(12,20.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgiArIBEhVIABAAIhEBVg");
	this.shape_278.setTransform(18.8,12.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FDD1A7").s().p("AhLA8IA2g3IAtg/IAdgMIAOgDIAFAAIAEABIhGBVIhCA9g");
	this.shape_279.setTransform(14.8,15.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgGACIANgEIAAABIgBAAIABABIgNADg");
	this.shape_280.setTransform(6.9,15.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgGAGIANgMIAAABIgMAMg");
	this.shape_281.setTransform(5.5,16);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgBAkIABhGIACAAIgCBGg");
	this.shape_282.setTransform(4.8,20.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgKAIIABAAIgBABgAgJAIgAgKAHIAUgQIABABIgUAQg");
	this.shape_283.setTransform(5.7,22.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgCAPIADgeIACAAIgEAeIAAABg");
	this.shape_284.setTransform(7,20.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgCATIAEglIABAAIgDAlg");
	this.shape_285.setTransform(7.4,16.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FDD1A7").s().p("AgMgbIAMgLIAPgEIgJBDIgUASg");
	this.shape_286.setTransform(6.1,19.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgCADIAFgHIAAADIgEAFg");
	this.shape_287.setTransform(-12.4,-7.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgCAFIAEgJIAAgBIABABIgEAKg");
	this.shape_288.setTransform(-12.9,-6.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAAAHIgBgNIABABIAAgBIACANg");
	this.shape_289.setTransform(-13,-5.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AAAAHIgBgNIABAAIACANg");
	this.shape_290.setTransform(-12.7,-3.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgDgHIABAAIAGAOIgCABg");
	this.shape_291.setTransform(-12.3,-2.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgEgPIABgBIAJAgIgBABgAgEgPIAAgBIAAABg");
	this.shape_292.setTransform(-11.4,0);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AAEAQIgHgeIABgBIAHAfg");
	this.shape_293.setTransform(-10.5,3.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgCgEIABAAIAEAIIgBABg");
	this.shape_294.setTransform(-9.9,5.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_295.setTransform(-9.6,5.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AAAAIIAAgRIABAAIgBASg");
	this.shape_296.setTransform(-9.5,5.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAAAJIAAgRIABAAIAAARg");
	this.shape_297.setTransform(-9.5,3.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AABARIgDghIABAAIAEAhg");
	this.shape_298.setTransform(-9.7,0.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AAEARIgIghIABAAIAIAhg");
	this.shape_299.setTransform(-10.3,-2.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAGAQIgMgfIABAAIAMAfg");
	this.shape_300.setTransform(-11.4,-6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AAOBBIgUhJIgHgPIgDgNIgBgOIAEgKIAGgHIAUBBIAFAzIgBATg");
	this.shape_301.setTransform(-11.2,-0.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AAAAIIgBgPIABAAIACAPg");
	this.shape_302.setTransform(4.3,0.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAAAFIgBgJIABAAIACAJg");
	this.shape_303.setTransform(4.1,-1.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AAAADIAAgFIAAAAIABAFg");
	this.shape_304.setTransform(3.9,-2.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AACAEIgEgHIABAAIAEAHg");
	this.shape_305.setTransform(3.6,-2.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAGAHIgMgLIABgCIAMANg");
	this.shape_306.setTransform(2.7,-3.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgBAAIAAAAIADAAIAAAAg");
	this.shape_307.setTransform(-5.8,-8.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgKAVIARgsIAEABIgRAug");
	this.shape_308.setTransform(-31.6,-28);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgBAjIAAhGIADAAIAABGg");
	this.shape_309.setTransform(-42.9,-29.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgngCIAAgEIBPAJIAAAEg");
	this.shape_310.setTransform(-44.8,-22.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgVAgIAnhCIAEABIgnBEg");
	this.shape_311.setTransform(-36.9,-17.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AguACIACgCIgEAAIABgCIBgACIAAADg");
	this.shape_312.setTransform(-30.2,-21);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AAAAkIAAhFIAAgCIAAABIAAABIAAAAIAABFg");
	this.shape_313.setTransform(-42.8,-29.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgeARIA8gjIABAAIAAABIgBAAIg8Akg");
	this.shape_314.setTransform(-45.8,-24.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgngFIgCAAIACgBIBRAMIAAABg");
	this.shape_315.setTransform(-45,-22);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAJAjIgRhFIAAgBIABAAIARBGg");
	this.shape_316.setTransform(-39.7,-17.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgTAhIAmhDIABABIgnBEg");
	this.shape_317.setTransform(-36.9,-17.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgwAAIgBgBIBjACIAAABg");
	this.shape_318.setTransform(-30,-20.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AAkAaIAAgCIACACgAgmgYIACAAIBIAwIgBACg");
	this.shape_319.setTransform(-28.6,-23.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgHAWIgCABIAAgBIARgsIACAAIgRAtg");
	this.shape_320.setTransform(-31.5,-28);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgfAIIA9gRIACAAIgCABIg9ASg");
	this.shape_321.setTransform(-33.6,-29.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgegYIABgBIA7AxIAAABgAAeAYIAAgBIABACgAAeAYg");
	this.shape_322.setTransform(-39.7,-30.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFC216").s().p("AgkAZIhTgMIA9glIAAhGIA8AwIA+gSIgSAvIBKAwIhigEIgoBEg");
	this.shape_323.setTransform(-37,-23.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AguhAIAFgCIBYCBIgDAEg");
	this.shape_324.setTransform(-31.1,-13.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgOAAIABAAIgBgBIABAAIAAABIAcABIAAABg");
	this.shape_325.setTransform(-35.6,-21.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AAMAUIgZgnIAaAng");
	this.shape_326.setTransform(-25.9,-9.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgJAEIATgIIgBABIABAAIgTAIg");
	this.shape_327.setTransform(-25.6,-7.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AA0BMIAAABIhoiZIABAAIBoCZg");
	this.shape_328.setTransform(-31.8,-14.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#C16326").s().p("Ag+hMIAfACIBeCOIgVAJg");
	this.shape_329.setTransform(-30.8,-14.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgLB5Ig5gMIgQgHIgVgQIgMgNIgGABIgLgBIgLgEIgQgJIAjgbIALgqIAAhOIABgNIAXgIIAugIIBzgFIAjASIATARIAPAUIAGAMIANAxIAEAgIgBAQIgEAQIgGAOIgTATIgXAPIgnAMQAJgXABgVIgDAVIgFAQIgBAAIgBABIAAABIAAAAIgBABIgBAAIgoAHg");
	this.shape_330.setTransform(3.1,-22.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").ss(1,1,1).p("AgogfIA8gOIAVBSIgpAJIgMgoQgKgigSgDg");
	this.shape_331.setTransform(5.1,-10.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#E4BC76").s().p("AgMAGQgLgigRgDIA8gOIAUBSIgpAJg");
	this.shape_332.setTransform(5.1,-10.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgKgFIABgBIAUAMIAAABg");
	this.shape_333.setTransform(21.4,-2.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(0.3,1,1).p("AgHAtIADgCIABgFIACgCIABgFIACgCIADgSIADgCIgCgDIACgIIgCgDIABgFIgCgDIABgFIgCgDIACgBIgDgGIAAgFIgHgK");
	this.shape_334.setTransform(-2.2,0.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").ss(0.3,1,1).p("AgHAsIACgBIABgFIAFgEIABgFIACgBIgCgEIABgEIADgCIABgFIgCgCIADgCIAAgFIgBgDIABgJIgCgCIADgCIgCgDIABgFIgEgFIABgFIgJgO");
	this.shape_335.setTransform(-3.7,3.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(0.3,1,1).p("AgHAtIACgDIABgEIADgCIABgFIACgCIAFgcIgCgCIAAgFIADgCIgCgCIABgFIgEgGIABgEIgEgGIABgFIgFgI");
	this.shape_336.setTransform(-4.9,6.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").ss(0.3,1,1).p("AgIAtIADgCIABgFIAEgEIgBgDIACgCIABgEIADgCIAAgFIgCgDIADgCIACgJIgCgDIABgDIgCgDIABgFIACgCIgDgFIAAgFIgDgGIAAgFIgHgK");
	this.shape_337.setTransform(-6.4,10);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(0.3,1,1).p("AgHAxIAFgDIABgFIACgCIABgFIACgCIABgEIgCgDIADgCIABgFIgCgDIABgEIACgCIgBgDIAAgFIgCgCIACgJIgCgDIABgEIgEgGIABgFIgDgFIAAgFIgHgL");
	this.shape_338.setTransform(-8,12.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgUC1IgDACIgEAAIgFgGIgEgBIgVgeIgCgIIgFgIIgDgKIgGgIIgWhCIgBgMIgHgXIgDgOIAAgMIgDgKIAAgMIgFgYIAAgNIABgJIAAgMIACgJIAAgMIADgSIADgHIACgJIAFgFIAIgMIAKgIIAIgBIAGgEIAEABIAWgEIAFABIAHgBIAHAEIAWADIAHAEIADACIAJABIAhARIAEABIAHADIAFABIAEAGIAFABIADAFIAFABIACADIACgCIAOATIALAVIgGAQIAAAEIgDACIgCgDIgFAFIgCgEIgFAAIgCgDIgEgBIgKgOIgBAFIAIALIgBAFIACACIAAAEIgBAFIABAIIADACIgEATIgDACIgBAJIgDACIgBAFIgDACIgBAFIhHCYIAAgFIAAAFIgDASIgEAHIgCACIgBAEIgIAGg");
	this.shape_339.setTransform(-8.5,2.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgUC3IgDADIgFgBIgEgGIgEgBIgWgfIgBgHIgGgIIgDgKIgGgIIgWhEIAAgMIgIgXIgDgOIAAgMIgDgLIAAgLIgFgZIAAgMIABgJIAAgNIACgJIgBgMIAEgTIADgHIACgJIAGgEIAHgOIALgHIAHgCIAGgDIAEABIAXgEIAFABIAHgBIAHAEIAWADIAHAEIAEACIAJABIAhASIAEAAIAHAEIAFAAIAEAGIAEABIAEAGIAFABIACACIADgCIANATIALAWIgFAQIgBAFIgDABIgCgCIgFADIgCgCIgFgBIgCgDIgEgBIgKgNIgBAEIAIAMIgBAEIACADIAAAEIgBAEIABAIIACADIgDATIgDACIgBAJIgDACIgBAFIgDACIgBAEIhmBMIAJAHIAIALIAFAMIAIAwIgDATIgEAGIgCADIgBAEIgIAGg");
	this.shape_340.setTransform(-8.8,2.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(0.3,1,1).p("AAbAkIgDAAIgEgEIgDAAIgDgDIgEAAIgNgOIgDAAIAAgDIgHgHIAAgDIgDgDIAAgDIgEgDIAAgEIgDAAIAAgHIgDgDIAAgO");
	this.shape_341.setTransform(19.3,-4.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(0.3,1,1).p("AAbAkIgEAAIgDgEIgHAAIgDgDIgEAAIAAgEIgDgDIgDAAIgDgDIAAgEIgDAAIgEgDIAAgDIgGgIIAAgCIgEAAIAAgDIgDgEIAAgGIgDgEIAAgR");
	this.shape_342.setTransform(22.3,-3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").ss(0.3,1,1).p("AAbAkIgDAAIgEgEIgDAAIgDgDIgEAAIgUgUIAAgEIgDgDIgDAAIAAgDIgEgDIAAgHIgDgDIAAgHIgDgEIAAgK");
	this.shape_343.setTransform(25,-1.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(0.3,1,1).p("AAbAkIgEAAIgDgEIgHAAIAAgDIgDAAIgEgEIgDAAIgDgDIAAgDIgDAAIgHgHIAAgEIgDgDIAAgEIgDgCIgEAAIAAgHIgDgDIAAgHIgDgDIAAgO");
	this.shape_344.setTransform(28.1,0.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(0.3,1,1).p("AAdApIgHAAIgEgEIgDAAIgDgDIgEAAIgDgDIAAgEIgEAAIgCgDIAAgEIgDgDIgEAAIAAgDIgDgEIAAgDIgHgHIAAgCIgDgEIAAgGIgEgEIAAgHIgDgDIAAgO");
	this.shape_345.setTransform(30.9,1.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AB7CnIgEgDIgDAAIgHgEIgNgNIgDgGIACAIIiThXIgDgDIgEAAIgDgEIgEAAIgGgHIgEAAIgNgNIAAgDIgEgHIgDgEIgCgDIAAgDIgEgEIAAgMIgDgEIAAAQIgEAEIAAADIgDADIAAAEIgHAAIAAADIgDAAIgDgDIgOgKIgDgXIAAgYIADAAIAAgDIADgDIAAgHIAEgEIAAgGIADgEIAEgGIADgEIARghIAHgGIAFgKIARgRIAEgHIAGgEIAEgDIAUgKIADgDIAHAAIAHgEIAOAAIAMAHIAHAAIAHAHIAGADIAOAOIAHAKIAGAHIAHAKIAHAGIAHALIADAJIANAXIAEAKIAHALIAGANIAHAYIAHAJIAUBEIAAAKIAEAKIAAAKIADAHIAAAlIgDADIAAAHIgEAEIgDAAIAAADg");
	this.shape_346.setTransform(24.2,-8.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AB8CpIgDgEIgDAAIgHgDIgOgOIgVgsIgDgOIAAgOIADgKIiBgDIgDgEIgDAAIgEgDIgDAAIgHgHIgDAAIgOgOIAAgDIgEgHIgFgHIAAgDIgEgEIAAgMIgDgEIAAAQIgEAEIAAADIgDAEIAAADIgHAAIAAAEIgDAAIgEgEIgNgKIgEgXIAAgYIAEAAIAAgDIADgEIAAgHIADgDIAAgHIAEgDIADgHIAEgEIARghIAHgHIACgDIADgHIASgRIADgHIAHgDIADgEIAVgKIADgDIAHAAIAHgEIAOAAIAMAHIAHAAIAHAHIAHADIANAOIAHAKIAHAHIAHAKIAHAHIAHALIAKAWIAHALIADAKIAHAKIAHAOIAHAYIAHAJIAUBEIAAALIAEAKIAAAKIADAHIAAAmIgDADIAAAHIgEADIgDAAIAAAEg");
	this.shape_347.setTransform(24.4,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-34.6,98.4,69.3);


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
(lib._06减法概念02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("streamsound0");
	}
	this.frame_10 = function() {
		playSound("streamsound1");
	}
	this.frame_28 = function() {
		playSound("streamsound2");
	}
	this.frame_42 = function() {
		playSound("streamsound3");
	}
	this.frame_59 = function() {
		playSound("streamsound4");
	}
	this.frame_67 = function() {
		playSound("streamsound5");
	}
	this.frame_76 = function() {
		playSound("streamsound6");
	}
	this.frame_95 = function() {
		playSound("streamsound7");
	}
	this.frame_100 = function() {
		playSound("streamsound8");
	}
	this.frame_109 = function() {
		playSound("streamsound9");
	}
	this.frame_187 = function() {
		playSound("streamsound10");
	}
	this.frame_208 = function() {
		playSound("streamsound11");
	}
	this.frame_229 = function() {
		playSound("streamsound12");
	}
	this.frame_270 = function() {
		playSound("streamsound13");
	}
	this.frame_295 = function() {
		playSound("streamsound14");
	}
	this.frame_315 = function() {
		playSound("streamsound15");
	}
	this.frame_359 = function() {
		playSound("streamsound16");
	}
	this.frame_384 = function() {
		playSound("streamsound17");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(18).call(this.frame_28).wait(14).call(this.frame_42).wait(17).call(this.frame_59).wait(8).call(this.frame_67).wait(9).call(this.frame_76).wait(19).call(this.frame_95).wait(5).call(this.frame_100).wait(9).call(this.frame_109).wait(78).call(this.frame_187).wait(21).call(this.frame_208).wait(21).call(this.frame_229).wait(41).call(this.frame_270).wait(25).call(this.frame_295).wait(20).call(this.frame_315).wait(44).call(this.frame_359).wait(25).call(this.frame_384).wait(618));

	// angel
	this.instance = new lib.angel318("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1040.6,16.8,2.579,2.579,0,0,0,0,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:491.1,y:754.9},5).wait(19).to({x:1010,y:506.1},0).wait(3).to({x:1362.1},0).wait(3).to({x:1703.4},0).wait(5).to({x:979.2,y:879.9},0).wait(4).to({x:1273.3,y:841.9},0).wait(4).to({x:1665.3,y:862.2},0).wait(3).to({x:1653.9,y:698.5},0).wait(145).to({x:564.9,y:593.4},0).wait(25).to({startPosition:0},0).wait(76).to({x:1743.8,y:626.9},0).to({_off:true},310).wait(371));

	// circle3
	this.instance_1 = new lib.bar_red_box("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1205.6,486,2.369,2.547,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({_off:false},0).wait(187).to({x:1456.2,y:486.3},0).wait(757));

	// circle
	this.instance_2 = new lib.元件1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(382.7,409.4,1,1,0,0,0,45.7,78.9);

	this.instance_3 = new lib.circle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1514.3,668.1,1,1,0,0,0,154,269.1);

	this.instance_4 = new lib.元件26();
	this.instance_4.parent = this;
	this.instance_4.setTransform(321.3,344,1.126,1,0,0,0,29.4,70.4);

	this.instance_5 = new lib.position_black_large();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1153.6,484.8,1.095,1.013,0,0,0,114.2,164.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},154).to({state:[{t:this.instance_5},{t:this.instance_4}]},66).to({state:[{t:this.instance_4}]},25).to({state:[]},386).wait(371));

	// minus
	this.instance_6 = new lib.line_black();
	this.instance_6.parent = this;
	this.instance_6.setTransform(438,872,0.257,1.415);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({_off:false},0).to({_off:true},556).wait(371));

	// fivebar_green_box
	this.instance_7 = new lib.fiveParticle_green_box();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1494,754);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72).to({_off:false},0).to({_off:true},559).wait(371));

	// green_bar_box
	this.instance_8 = new lib.bar_green_box();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1097,716);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(68).to({_off:false},0).to({_off:true},563).wait(371));

	// block_green_box
	this.instance_9 = new lib.block_green_boxpng();
	this.instance_9.parent = this;
	this.instance_9.setTransform(619,716);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(64).to({_off:false},0).to({_off:true},567).wait(371));

	// fourParticle_red_box
	this.instance_10 = new lib.fourParticle_red_box();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1494,421);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(59).to({_off:false},0).to({_off:true},572).wait(371));

	// threeParticle_red_box
	this.instance_11 = new lib.twoBar_red_box();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1097,377);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(56).to({_off:false},0).to({_off:true},575).wait(371));

	// block_red_box
	this.instance_12 = new lib.block_red_boxswf("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(726.6,467.1,2.542,2.559);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(53).to({_off:false},0).to({_off:true},578).wait(371));

	// student
	this.instance_13 = new lib.boy_smile103("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(197.4,850,2.467,2.467,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(52).to({regX:0.2,scaleX:2.24,scaleY:2.24,x:225.2,y:855.3},0).to({_off:true},579).wait(371));

	// underline
	this.instance_14 = new lib.line_black();
	this.instance_14.parent = this;
	this.instance_14.setTransform(166,497,1.057,0.86);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(26).to({_off:false},0).to({_off:true},605).wait(371));

	// number
	this.text = new cjs.Text("4", "50px 'Arial'", "#C30409");
	this.text.textAlign = "right";
	this.text.lineHeight = 58;
	this.text.lineWidth = 28;
	this.text.parent = this;
	this.text.setTransform(394,341.2);

	this.text_1 = new cjs.Text("3", "50px 'Arial'", "#C30409");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 58;
	this.text_1.lineWidth = 28;
	this.text_1.parent = this;
	this.text_1.setTransform(335,341.2);

	this.text_2 = new cjs.Text("1", "50px 'Arial'", "#C30409");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 58;
	this.text_2.lineWidth = 28;
	this.text_2.parent = this;
	this.text_2.setTransform(273,341.2);

	this.instance_15 = new lib.元件25();
	this.instance_15.parent = this;
	this.instance_15.setTransform(189.2,457.3,1,1,0,0,0,16.3,2.5);

	this.text_3 = new cjs.Text("4", "50px 'Arial'", "#C30409");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 58;
	this.text_3.lineWidth = 28;
	this.text_3.parent = this;
	this.text_3.setTransform(394,341.2);

	this.text_4 = new cjs.Text("3", "50px 'Arial'", "#C30409");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 58;
	this.text_4.lineWidth = 28;
	this.text_4.parent = this;
	this.text_4.setTransform(335,341.2);

	this.text_5 = new cjs.Text("1", "50px 'Arial'", "#C30409");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 58;
	this.text_5.lineWidth = 28;
	this.text_5.parent = this;
	this.text_5.setTransform(273,341.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.text_2,p:{y:341.2,color:"#C30409"}},{t:this.text_1,p:{y:341.2,text:"3",color:"#C30409"}},{t:this.text,p:{y:341.2,text:"4",color:"#C30409"}}]},12).to({state:[{t:this.instance_15},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2,p:{y:430.5,color:"#159034"}},{t:this.text_1,p:{y:430.5,text:"1",color:"#159034"}},{t:this.text,p:{y:430.5,text:"5",color:"#159034"}}]},6).to({state:[]},613).wait(371));

	// bg_2
	this.instance_16 = new lib.word_blue();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1125,70);

	this.instance_17 = new lib.rectangle_less();
	this.instance_17.parent = this;
	this.instance_17.setTransform(278,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).to({state:[]},631).wait(371));

	// bg
	this.instance_18 = new lib.元件2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(960.8,628.7,1,1,0,0,0,949,422.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},631).wait(371));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(971.8,588,1897,1008.9);
// library properties:
lib.properties = {
	id: 'F55D8CE708CB4AB186D63425FCF6A2AD',
	width: 1920,
	height: 1080,
	fps: 5,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/06减法概念02_atlas_.png?1533954087988", id:"06减法概念02_atlas_"},
		{src:"sounds/streamsound0.mp3?1533954088972", id:"streamsound0"},
		{src:"sounds/streamsound1.mp3?1533954088972", id:"streamsound1"},
		{src:"sounds/streamsound10.mp3?1533954088972", id:"streamsound10"},
		{src:"sounds/streamsound11.mp3?1533954088972", id:"streamsound11"},
		{src:"sounds/streamsound12.mp3?1533954088972", id:"streamsound12"},
		{src:"sounds/streamsound13.mp3?1533954088972", id:"streamsound13"},
		{src:"sounds/streamsound14.mp3?1533954088972", id:"streamsound14"},
		{src:"sounds/streamsound15.mp3?1533954088972", id:"streamsound15"},
		{src:"sounds/streamsound16.mp3?1533954088972", id:"streamsound16"},
		{src:"sounds/streamsound17.mp3?1533954088972", id:"streamsound17"},
		{src:"sounds/streamsound2.mp3?1533954088972", id:"streamsound2"},
		{src:"sounds/streamsound3.mp3?1533954088972", id:"streamsound3"},
		{src:"sounds/streamsound4.mp3?1533954088972", id:"streamsound4"},
		{src:"sounds/streamsound5.mp3?1533954088972", id:"streamsound5"},
		{src:"sounds/streamsound6.mp3?1533954088972", id:"streamsound6"},
		{src:"sounds/streamsound7.mp3?1533954088972", id:"streamsound7"},
		{src:"sounds/streamsound8.mp3?1533954088972", id:"streamsound8"},
		{src:"sounds/streamsound9.mp3?1533954088972", id:"streamsound9"}
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
an.compositions['F55D8CE708CB4AB186D63425FCF6A2AD'] = {
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