window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","StartScene":"resource/scenes/StartScene.exml","SelectDifficultyScene":"resource/scenes/SelectDifficultyScene.exml","ReadyToPlayScene":"resource/scenes/ReadyToPlayScene.exml","PlayingScene":"resource/scenes/PlayingScene.exml","TargetButton":"resource/components/TargetButton.exml","Target":"resource/component/Target.exml","Cannon":"resource/components/Cannon.exml","ResultScene":"resource/scenes/ResultScene.exml"};generateEUI.paths['resource/components/BallTarget.exml'] = window.BallTarget = (function (_super) {
	__extends(BallTarget, _super);
	function BallTarget() {
		_super.call(this);
		this.skinParts = ["labelDisplay","hitImage","sunshineImage"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.hitImage_i(),this.sunshineImage_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentHeight",82)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","height",50),
					new eui.SetProperty("labelDisplay","visible",false)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("selected",
				[
					new eui.SetProperty("_Image1","percentWidth",85),
					new eui.SetProperty("_Image1","percentHeight",85),
					new eui.SetProperty("_Image1","source","ball_selected_svg")
				])
			,
			new eui.State ("hitting",
				[
					new eui.SetProperty("_Image1","percentHeight",82),
					new eui.SetProperty("hitImage","visible",true)
				])
		];
	}
	var _proto = BallTarget.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "ball_normal_svg";
		t.percentWidth = 77;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Kristen-ITC";
		t.left = 8;
		t.right = 8;
		t.size = 40;
		t.text = "box";
		t.textAlign = "center";
		t.textColor = 0x00000;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.hitImage_i = function () {
		var t = new eui.Image();
		this.hitImage = t;
		t.bottom = 0;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.source = "stars_joined_svg";
		t.visible = false;
		t.percentWidth = 80;
		return t;
	};
	_proto.sunshineImage_i = function () {
		var t = new eui.Image();
		this.sunshineImage = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "sunshine_svg";
		t.verticalCenter = 0;
		return t;
	};
	return BallTarget;
})(eui.Skin);generateEUI.paths['resource/components/BalloonTarget.exml'] = window.BalloonTarget = (function (_super) {
	__extends(BalloonTarget, _super);
	function BalloonTarget() {
		_super.call(this);
		this.skinParts = ["labelDisplay","hitImage","sunshineImage"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.hitImage_i(),this.sunshineImage_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentHeight",82)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","height",50),
					new eui.SetProperty("labelDisplay","visible",false)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("selected",
				[
					new eui.SetProperty("_Image1","percentWidth",85),
					new eui.SetProperty("_Image1","percentHeight",85),
					new eui.SetProperty("_Image1","source","balloon_selected_svg")
				])
			,
			new eui.State ("hitting",
				[
					new eui.SetProperty("_Image1","percentHeight",82),
					new eui.SetProperty("hitImage","visible",true)
				])
		];
	}
	var _proto = BalloonTarget.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "balloon_normal_svg";
		t.percentWidth = 77;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Kristen-ITC";
		t.left = 8;
		t.right = 8;
		t.size = 40;
		t.text = "box";
		t.textAlign = "center";
		t.textColor = 0x00000;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.hitImage_i = function () {
		var t = new eui.Image();
		this.hitImage = t;
		t.bottom = 0;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.source = "stars_joined_svg";
		t.visible = false;
		t.percentWidth = 80;
		return t;
	};
	_proto.sunshineImage_i = function () {
		var t = new eui.Image();
		this.sunshineImage = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "sunshine_svg";
		t.verticalCenter = 0;
		return t;
	};
	return BalloonTarget;
})(eui.Skin);generateEUI.paths['resource/components/BirdTarget.exml'] = window.BirdTarget = (function (_super) {
	__extends(BirdTarget, _super);
	function BirdTarget() {
		_super.call(this);
		this.skinParts = ["labelDisplay","hitImage","sunshineImage"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.hitImage_i(),this.sunshineImage_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentHeight",82)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","height",50),
					new eui.SetProperty("labelDisplay","visible",false)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("selected",
				[
					new eui.SetProperty("_Image1","percentWidth",85),
					new eui.SetProperty("_Image1","percentHeight",85),
					new eui.SetProperty("_Image1","bottom",3),
					new eui.SetProperty("_Image1","source","bird_selected_svg")
				])
			,
			new eui.State ("hitting",
				[
					new eui.SetProperty("_Image1","percentHeight",82),
					new eui.SetProperty("hitImage","visible",true)
				])
		];
	}
	var _proto = BirdTarget.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "bird_normal_svg";
		t.percentWidth = 77;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Kristen-ITC";
		t.left = 8;
		t.right = 8;
		t.size = 40;
		t.text = "box";
		t.textAlign = "center";
		t.textColor = 0x00000;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.hitImage_i = function () {
		var t = new eui.Image();
		this.hitImage = t;
		t.bottom = 0;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.source = "stars_joined_svg";
		t.visible = false;
		t.percentWidth = 80;
		return t;
	};
	_proto.sunshineImage_i = function () {
		var t = new eui.Image();
		this.sunshineImage = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "sunshine_svg";
		t.verticalCenter = 0;
		return t;
	};
	return BirdTarget;
})(eui.Skin);generateEUI.paths['resource/components/BottleTarget.exml'] = window.BottleTarget = (function (_super) {
	__extends(BottleTarget, _super);
	function BottleTarget() {
		_super.call(this);
		this.skinParts = ["labelDisplay","hitImage","sunshineImage"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.hitImage_i(),this.sunshineImage_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentHeight",81)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","height",50),
					new eui.SetProperty("labelDisplay","visible",false)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("selected",
				[
					new eui.SetProperty("_Image1","percentWidth",58),
					new eui.SetProperty("_Image1","percentHeight",85),
					new eui.SetProperty("_Image1","source","bottle_selected_png")
				])
			,
			new eui.State ("hitting",
				[
					new eui.SetProperty("_Image1","percentHeight",82),
					new eui.SetProperty("hitImage","visible",true)
				])
		];
	}
	var _proto = BottleTarget.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "bottle_normal_png";
		t.percentWidth = 50;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Kristen-ITC";
		t.left = 8;
		t.right = 8;
		t.size = 40;
		t.text = "box";
		t.textAlign = "center";
		t.textColor = 0x00000;
		t.verticalCenter = 30;
		return t;
	};
	_proto.hitImage_i = function () {
		var t = new eui.Image();
		this.hitImage = t;
		t.bottom = 0;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.source = "stars_joined_svg";
		t.visible = false;
		t.percentWidth = 80;
		return t;
	};
	_proto.sunshineImage_i = function () {
		var t = new eui.Image();
		this.sunshineImage = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "sunshine_svg";
		t.verticalCenter = 0;
		return t;
	};
	return BottleTarget;
})(eui.Skin);generateEUI.paths['resource/components/CakeTarget.exml'] = window.CakeTarget = (function (_super) {
	__extends(CakeTarget, _super);
	function CakeTarget() {
		_super.call(this);
		this.skinParts = ["labelDisplay","hitImage","sunshineImage"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.hitImage_i(),this.sunshineImage_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentHeight",82)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","height",50),
					new eui.SetProperty("labelDisplay","visible",false)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("selected",
				[
					new eui.SetProperty("_Image1","percentWidth",85),
					new eui.SetProperty("_Image1","percentHeight",85),
					new eui.SetProperty("_Image1","source","cake_selected_svg")
				])
			,
			new eui.State ("hitting",
				[
					new eui.SetProperty("_Image1","percentHeight",82),
					new eui.SetProperty("hitImage","visible",true)
				])
		];
	}
	var _proto = CakeTarget.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "cake_normal_svg";
		t.percentWidth = 77;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Kristen-ITC";
		t.left = 8;
		t.right = 8;
		t.size = 40;
		t.text = "box";
		t.textAlign = "center";
		t.textColor = 0x00000;
		t.verticalCenter = 20;
		return t;
	};
	_proto.hitImage_i = function () {
		var t = new eui.Image();
		this.hitImage = t;
		t.bottom = 0;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.source = "stars_joined_svg";
		t.visible = false;
		t.percentWidth = 80;
		return t;
	};
	_proto.sunshineImage_i = function () {
		var t = new eui.Image();
		this.sunshineImage = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "sunshine_svg";
		t.verticalCenter = 0;
		return t;
	};
	return CakeTarget;
})(eui.Skin);generateEUI.paths['resource/components/Cannon.exml'] = window.CannonSkin = (function (_super) {
	__extends(CannonSkin, _super);
	function CannonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "center";
		this.height = 150;
		this.width = 240;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		this.states = [
			new eui.State ("left",
				[
					new eui.SetProperty("_Image1","visible",true)
				])
			,
			new eui.State ("center",
				[
					new eui.SetProperty("_Image2","visible",true)
				])
			,
			new eui.State ("right",
				[
					new eui.SetProperty("_Image3","visible",true)
				])
		];
	}
	var _proto = CannonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "cannon_up_left_svg";
		t.visible = false;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "cannon_up_svg";
		t.visible = false;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "cannon_up_right_svg";
		t.visible = false;
		return t;
	};
	return CannonSkin;
})(eui.Skin);generateEUI.paths['resource/components/CastleTarget.exml'] = window.CastleTarget = (function (_super) {
	__extends(CastleTarget, _super);
	function CastleTarget() {
		_super.call(this);
		this.skinParts = ["labelDisplay","hitImage","sunshineImage"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.hitImage_i(),this.sunshineImage_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentHeight",82)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","height",50),
					new eui.SetProperty("labelDisplay","visible",false)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("selected",
				[
					new eui.SetProperty("_Image1","percentWidth",85),
					new eui.SetProperty("_Image1","percentHeight",85),
					new eui.SetProperty("_Image1","source","castle_selected_svg")
				])
			,
			new eui.State ("hitting",
				[
					new eui.SetProperty("_Image1","percentHeight",82),
					new eui.SetProperty("hitImage","visible",true)
				])
		];
	}
	var _proto = CastleTarget.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "castle_normal_svg";
		t.percentWidth = 77;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Kristen-ITC";
		t.left = 8;
		t.right = 8;
		t.size = 40;
		t.text = "box";
		t.textAlign = "center";
		t.textColor = 0x00000;
		t.verticalCenter = 30;
		return t;
	};
	_proto.hitImage_i = function () {
		var t = new eui.Image();
		this.hitImage = t;
		t.bottom = 0;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.source = "stars_joined_svg";
		t.visible = false;
		t.percentWidth = 80;
		return t;
	};
	_proto.sunshineImage_i = function () {
		var t = new eui.Image();
		this.sunshineImage = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "sunshine_svg";
		t.verticalCenter = 0;
		return t;
	};
	return CastleTarget;
})(eui.Skin);generateEUI.paths['resource/components/CowTarget.exml'] = window.CowTarget = (function (_super) {
	__extends(CowTarget, _super);
	function CowTarget() {
		_super.call(this);
		this.skinParts = ["labelDisplay","hitImage","sunshineImage"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.hitImage_i(),this.sunshineImage_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentHeight",82)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","height",50),
					new eui.SetProperty("labelDisplay","visible",false)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("selected",
				[
					new eui.SetProperty("_Image1","percentWidth",81),
					new eui.SetProperty("_Image1","percentHeight",85),
					new eui.SetProperty("_Image1","bottom",3),
					new eui.SetProperty("_Image1","horizontalCenter",-1),
					new eui.SetProperty("_Image1","source","cow_selected_svg")
				])
			,
			new eui.State ("hitting",
				[
					new eui.SetProperty("_Image1","percentHeight",82),
					new eui.SetProperty("hitImage","visible",true)
				])
		];
	}
	var _proto = CowTarget.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "cow_normal_svg";
		t.percentWidth = 77;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Kristen-ITC";
		t.left = 8;
		t.right = 8;
		t.size = 40;
		t.text = "box";
		t.textAlign = "center";
		t.textColor = 0x00000;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.hitImage_i = function () {
		var t = new eui.Image();
		this.hitImage = t;
		t.bottom = 0;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.source = "stars_joined_svg";
		t.visible = false;
		t.percentWidth = 80;
		return t;
	};
	_proto.sunshineImage_i = function () {
		var t = new eui.Image();
		this.sunshineImage = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "sunshine_svg";
		t.verticalCenter = 0;
		return t;
	};
	return CowTarget;
})(eui.Skin);generateEUI.paths['resource/components/FerrisWheelTarget.exml'] = window.FerrisWheelTarget = (function (_super) {
	__extends(FerrisWheelTarget, _super);
	function FerrisWheelTarget() {
		_super.call(this);
		this.skinParts = ["labelDisplay","hitImage","sunshineImage"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.hitImage_i(),this.sunshineImage_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentHeight",82)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","height",50),
					new eui.SetProperty("labelDisplay","visible",false)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("selected",
				[
					new eui.SetProperty("_Image1","percentWidth",85),
					new eui.SetProperty("_Image1","percentHeight",85),
					new eui.SetProperty("_Image1","source","ferris_wheel_selected_svg")
				])
			,
			new eui.State ("hitting",
				[
					new eui.SetProperty("_Image1","percentHeight",82),
					new eui.SetProperty("hitImage","visible",true)
				])
		];
	}
	var _proto = FerrisWheelTarget.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "ferris_wheel_normal_svg";
		t.percentWidth = 77;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Kristen-ITC";
		t.left = 8;
		t.right = 8;
		t.size = 40;
		t.text = "box";
		t.textAlign = "center";
		t.textColor = 0x00000;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.hitImage_i = function () {
		var t = new eui.Image();
		this.hitImage = t;
		t.bottom = 0;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.source = "stars_joined_svg";
		t.visible = false;
		t.percentWidth = 80;
		return t;
	};
	_proto.sunshineImage_i = function () {
		var t = new eui.Image();
		this.sunshineImage = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "sunshine_svg";
		t.verticalCenter = 0;
		return t;
	};
	return FerrisWheelTarget;
})(eui.Skin);generateEUI.paths['resource/components/HorseTarget.exml'] = window.HorseTarget = (function (_super) {
	__extends(HorseTarget, _super);
	function HorseTarget() {
		_super.call(this);
		this.skinParts = ["labelDisplay","hitImage","sunshineImage"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.hitImage_i(),this.sunshineImage_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentHeight",82)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","height",50),
					new eui.SetProperty("labelDisplay","visible",false)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("selected",
				[
					new eui.SetProperty("_Image1","percentWidth",85),
					new eui.SetProperty("_Image1","percentHeight",85),
					new eui.SetProperty("_Image1","source","horse_selected_svg")
				])
			,
			new eui.State ("hitting",
				[
					new eui.SetProperty("_Image1","percentHeight",82),
					new eui.SetProperty("hitImage","visible",true)
				])
		];
	}
	var _proto = HorseTarget.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "horse_normal_svg";
		t.percentWidth = 77;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Kristen-ITC";
		t.left = 8;
		t.right = 8;
		t.size = 40;
		t.text = "box";
		t.textAlign = "center";
		t.textColor = 0x00000;
		t.verticalCenter = 20;
		return t;
	};
	_proto.hitImage_i = function () {
		var t = new eui.Image();
		this.hitImage = t;
		t.bottom = 0;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.source = "stars_joined_svg";
		t.visible = false;
		t.percentWidth = 80;
		return t;
	};
	_proto.sunshineImage_i = function () {
		var t = new eui.Image();
		this.sunshineImage = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "sunshine_svg";
		t.verticalCenter = 0;
		return t;
	};
	return HorseTarget;
})(eui.Skin);generateEUI.paths['resource/components/PigTarget.exml'] = window.PigTarget = (function (_super) {
	__extends(PigTarget, _super);
	function PigTarget() {
		_super.call(this);
		this.skinParts = ["labelDisplay","hitImage","sunshineImage"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.hitImage_i(),this.sunshineImage_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentHeight",82)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","height",50),
					new eui.SetProperty("labelDisplay","visible",false)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("selected",
				[
					new eui.SetProperty("_Image1","percentWidth",85),
					new eui.SetProperty("_Image1","percentHeight",85),
					new eui.SetProperty("_Image1","source","pig_selected_svg")
				])
			,
			new eui.State ("hitting",
				[
					new eui.SetProperty("_Image1","percentHeight",82),
					new eui.SetProperty("hitImage","visible",true)
				])
		];
	}
	var _proto = PigTarget.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "pig_normal_svg";
		t.percentWidth = 77;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Kristen-ITC";
		t.left = 8;
		t.right = 8;
		t.size = 40;
		t.text = "box";
		t.textAlign = "center";
		t.textColor = 0x00000;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.hitImage_i = function () {
		var t = new eui.Image();
		this.hitImage = t;
		t.bottom = 0;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.source = "stars_joined_svg";
		t.visible = false;
		t.percentWidth = 80;
		return t;
	};
	_proto.sunshineImage_i = function () {
		var t = new eui.Image();
		this.sunshineImage = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "sunshine_svg";
		t.verticalCenter = 0;
		return t;
	};
	return PigTarget;
})(eui.Skin);generateEUI.paths['resource/components/TargetButton.exml'] = window.TargetButtonSkin = (function (_super) {
	__extends(TargetButtonSkin, _super);
	function TargetButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","hitImage","sunshineImage"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this.labelDisplay_i(),this.hitImage_i(),this.sunshineImage_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("selected",
				[
				])
			,
			new eui.State ("hitting",
				[
				])
		];
	}
	var _proto = TargetButtonSkin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		return t;
	};
	_proto.hitImage_i = function () {
		var t = new eui.Image();
		this.hitImage = t;
		return t;
	};
	_proto.sunshineImage_i = function () {
		var t = new eui.Image();
		this.sunshineImage = t;
		return t;
	};
	return TargetButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/scenes/PlayingScene.exml'] = window.PlayingSceneSkin = (function (_super) {
	__extends(PlayingSceneSkin, _super);
	function PlayingSceneSkin() {
		_super.call(this);
		this.skinParts = ["hurryTweenGroup","tipTweenGroup","readyTweenGroup","cannon","readyLabel","goLabel","speakerImage","backImage","timeLeftInRoundImage","minutesLabel","secondsLabel","hurryLabel","tipLabel"];
		
		this.height = 1280;
		this.width = 1920;
		this.hurryTweenGroup_i();
		this.tipTweenGroup_i();
		this.readyTweenGroup_i();
		this.elementsContent = [this._Image1_i(),this.cannon_i(),this._Image2_i(),this.readyLabel_i(),this.goLabel_i(),this.speakerImage_i(),this.backImage_i(),this._Image3_i(),this.timeLeftInRoundImage_i(),this._Image4_i(),this._TargetButton1_i(),this._TargetButton2_i(),this._TargetButton3_i(),this._TargetButton4_i(),this._TargetButton5_i(),this._TargetButton6_i(),this._Label1_i(),this.minutesLabel_i(),this._Label2_i(),this.secondsLabel_i(),this.hurryLabel_i(),this.tipLabel_i()];
		
		eui.Binding.$bindProperties(this, ["hurryLabel"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, ["tipLabel"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, ["readyLabel"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [640],[],this._Object13,"y");
		eui.Binding.$bindProperties(this, [1580],[],this._Object14,"y");
		eui.Binding.$bindProperties(this, ["goLabel"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [640],[],this._Object15,"y");
		eui.Binding.$bindProperties(this, [1580],[],this._Object16,"y");
	}
	var _proto = PlayingSceneSkin.prototype;

	_proto.hurryTweenGroup_i = function () {
		var t = new egret.tween.TweenGroup();
		this.hurryTweenGroup = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._To1_i(),this._Wait1_i(),this._Set1_i(),this._Wait2_i(),this._Set2_i(),this._Wait3_i(),this._Set3_i(),this._Wait4_i(),this._Set4_i(),this._To2_i()];
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto.tipTweenGroup_i = function () {
		var t = new egret.tween.TweenGroup();
		this.tipTweenGroup = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._To3_i(),this._Wait5_i(),this._Set5_i(),this._Wait6_i(),this._Set6_i(),this._Wait7_i(),this._Set7_i(),this._Wait8_i(),this._Set8_i(),this._To4_i()];
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._Wait7_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._Wait8_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.readyTweenGroup_i = function () {
		var t = new egret.tween.TweenGroup();
		this.readyTweenGroup = t;
		t.items = [this._TweenItem3_i(),this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Wait9_i(),this._Set9_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Wait9_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1500;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1360;
		t.horizontalCenter = 31;
		t.source = "playing_scene_bg_wood_svg";
		t.verticalCenter = 0;
		t.width = 2040;
		return t;
	};
	_proto.cannon_i = function () {
		var t = new Cannon();
		this.cannon = t;
		t.bottom = -150;
		t.currentState = "right";
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 1723;
		t.horizontalCenter = 0;
		t.source = "playing_scene_bg_red_silk_svg";
		t.width = 4544;
		t.y = -249;
		return t;
	};
	_proto.readyLabel_i = function () {
		var t = new eui.Label();
		this.readyLabel = t;
		t.anchorOffsetX = 870;
		t.anchorOffsetY = 300;
		t.fontFamily = "Hoffmanhand";
		t.horizontalCenter = 0;
		t.size = 600;
		t.text = "Ready";
		t.textColor = 0x89281C;
		t.y = -300;
		return t;
	};
	_proto.goLabel_i = function () {
		var t = new eui.Label();
		this.goLabel = t;
		t.anchorOffsetX = 670;
		t.anchorOffsetY = 300;
		t.fontFamily = "Hoffmanhand";
		t.horizontalCenter = 0;
		t.size = 600;
		t.text = "Go!!";
		t.textColor = 0x89281C;
		t.y = -300;
		return t;
	};
	_proto.speakerImage_i = function () {
		var t = new eui.Image();
		this.speakerImage = t;
		t.height = 285;
		t.source = "speaker_normal_svg";
		t.width = 285;
		t.x = 1575;
		t.y = 90;
		return t;
	};
	_proto.backImage_i = function () {
		var t = new eui.Image();
		this.backImage = t;
		t.height = 228;
		t.source = "back_svg";
		t.width = 140;
		t.x = 1748;
		t.y = 1050;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 685;
		t.source = "tube_empty_svg";
		t.width = 110;
		t.x = 140;
		t.y = 300;
		return t;
	};
	_proto.timeLeftInRoundImage_i = function () {
		var t = new eui.Image();
		this.timeLeftInRoundImage = t;
		t.bottom = 308;
		t.height = 658;
		t.source = "green_column_svg";
		t.width = 80;
		t.x = 154;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 268;
		t.source = "sight_word_hunter_small_svg";
		t.width = 380;
		t.x = 25;
		t.y = 130;
		return t;
	};
	_proto._TargetButton1_i = function () {
		var t = new TargetButton();
		t.anchorOffsetX = 135;
		t.bottom = 835;
		t.cannonballExitX = 0;
		t.cannonballExitY = 640;
		t.height = 325;
		t.leftOrRight = "left";
		t.skinName = "BirdTarget";
		t.width = 270;
		t.x = 607;
		return t;
	};
	_proto._TargetButton2_i = function () {
		var t = new TargetButton();
		t.anchorOffsetX = 135;
		t.bottom = 835;
		t.cannonballExitX = 850;
		t.cannonballExitY = 1280;
		t.height = 325;
		t.leftOrRight = "center";
		t.skinName = "BottleTarget";
		t.width = 270;
		t.x = 927;
		return t;
	};
	_proto._TargetButton3_i = function () {
		var t = new TargetButton();
		t.anchorOffsetX = 135;
		t.bottom = 835;
		t.cannonballExitX = 1920;
		t.cannonballExitY = 640;
		t.height = 325;
		t.leftOrRight = "right";
		t.skinName = "CakeTarget";
		t.width = 270;
		t.x = 1344;
		return t;
	};
	_proto._TargetButton4_i = function () {
		var t = new TargetButton();
		t.anchorOffsetX = 135;
		t.bottom = 465;
		t.cannonballExitX = 0;
		t.cannonballExitY = 840;
		t.height = 325;
		t.leftOrRight = "left";
		t.skinName = "BalloonTarget";
		t.width = 270;
		t.x = 657;
		return t;
	};
	_proto._TargetButton5_i = function () {
		var t = new TargetButton();
		t.anchorOffsetX = 135;
		t.bottom = 465;
		t.cannonballExitX = 1050;
		t.cannonballExitY = 1280;
		t.height = 325;
		t.leftOrRight = "center";
		t.skinName = "BallTarget";
		t.width = 270;
		t.x = 981;
		return t;
	};
	_proto._TargetButton6_i = function () {
		var t = new TargetButton();
		t.anchorOffsetX = 135;
		t.bottom = 465;
		t.cannonballExitX = 1920;
		t.cannonballExitY = 840;
		t.height = 325;
		t.leftOrRight = "right";
		t.skinName = "CastleTarget";
		t.width = 270;
		t.x = 1297;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.size = 60;
		t.text = "Time Left";
		t.textColor = 0x000000;
		t.x = 1520;
		t.y = 400;
		return t;
	};
	_proto.minutesLabel_i = function () {
		var t = new eui.Label();
		this.minutesLabel = t;
		t.fontFamily = "Kristen-ITC";
		t.size = 48;
		t.text = "3";
		t.textColor = 0x000000;
		t.x = 1590;
		t.y = 500;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.size = 44;
		t.text = ":";
		t.textColor = 0x000000;
		t.x = 1660;
		t.y = 500;
		return t;
	};
	_proto.secondsLabel_i = function () {
		var t = new eui.Label();
		this.secondsLabel = t;
		t.fontFamily = "Kristen-ITC";
		t.size = 48;
		t.text = "00";
		t.textColor = 0x000000;
		t.x = 1725;
		t.y = 500;
		return t;
	};
	_proto.hurryLabel_i = function () {
		var t = new eui.Label();
		this.hurryLabel = t;
		t.alpha = 0;
		t.fontFamily = "Kristen-ITC";
		t.size = 200;
		t.text = "Hurry!";
		t.textColor = 0x000;
		t.x = 1240;
		t.y = 850;
		return t;
	};
	_proto.tipLabel_i = function () {
		var t = new eui.Label();
		this.tipLabel = t;
		t.alpha = 0;
		t.bottom = 235;
		t.fontFamily = "Kristen-ITC";
		t.horizontalCenter = 0;
		t.size = 100;
		t.text = "Try Again!";
		t.textColor = 0x000;
		return t;
	};
	return PlayingSceneSkin;
})(eui.Skin);generateEUI.paths['resource/scenes/ReadyToPlayScene.exml'] = window.ReadyToPlaySceneSkin = (function (_super) {
	__extends(ReadyToPlaySceneSkin, _super);
	function ReadyToPlaySceneSkin() {
		_super.call(this);
		this.skinParts = ["backImage","goImage","goLabel"];
		
		this.height = 1280;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.backImage_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Image2_i(),this._Label8_i(),this._Label9_i(),this.goImage_i(),this.goLabel_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i()];
	}
	var _proto = ReadyToPlaySceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1360;
		t.horizontalCenter = 31;
		t.source = "select_difficulty_scene_bg_svg";
		t.verticalCenter = 0;
		t.width = 2040;
		return t;
	};
	_proto.backImage_i = function () {
		var t = new eui.Image();
		this.backImage = t;
		t.height = 228;
		t.source = "back_svg";
		t.width = 140;
		t.x = 1730;
		t.y = 40;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "Sight Word Hunter";
		t.y = 150;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.size = 40;
		t.text = "1. ";
		t.x = 920;
		t.y = 320;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.size = 44;
		t.text = "Listen to the word. ";
		t.x = 1000;
		t.y = 320;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.size = 40;
		t.text = "2. ";
		t.x = 920;
		t.y = 390;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.size = 44;
		t.text = "Click the picture with the correct word.";
		t.x = 1000;
		t.y = 390;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.size = 40;
		t.text = "3. ";
		t.x = 920;
		t.y = 490;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.size = 44;
		t.text = "Press          to listen to the word \nagain.";
		t.x = 1000;
		t.y = 490;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.source = "speaker_svg";
		t.width = 100;
		t.x = 1130;
		t.y = 465;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.size = 40;
		t.text = "4. ";
		t.x = 920;
		t.y = 615;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.size = 44;
		t.text = "Answer as many questions as \npossible in 2 minutes.";
		t.x = 1000;
		t.y = 615;
		return t;
	};
	_proto.goImage_i = function () {
		var t = new eui.Image();
		this.goImage = t;
		t.anchorOffsetX = 127;
		t.anchorOffsetY = 100;
		t.height = 200;
		t.horizontalCenter = 0;
		t.source = "stars_joined_svg";
		t.width = 255;
		t.y = 845;
		return t;
	};
	_proto.goLabel_i = function () {
		var t = new eui.Label();
		this.goLabel = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 20;
		t.fontFamily = "Kristen-ITC";
		t.horizontalCenter = 0;
		t.size = 56;
		t.text = "Go";
		t.textColor = 0x000000;
		t.y = 830;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 370;
		t.source = "ball_svg";
		t.width = 295;
		t.x = 10;
		t.y = 985;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 370;
		t.source = "ferris_wheel_svg";
		t.width = 295;
		t.x = 320;
		t.y = 970;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 390;
		t.source = "castle_svg";
		t.width = 295;
		t.x = 645;
		t.y = 950;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 370;
		t.source = "bird_svg";
		t.width = 295;
		t.x = 980;
		t.y = 975;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 380;
		t.source = "balloon_svg";
		t.width = 295;
		t.x = 1320;
		t.y = 960;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 370;
		t.source = "cake_svg";
		t.width = 295;
		t.x = 1620;
		t.y = 980;
		return t;
	};
	return ReadyToPlaySceneSkin;
})(eui.Skin);generateEUI.paths['resource/scenes/ResultScene.exml'] = window.ResultSceneSkin = (function (_super) {
	__extends(ResultSceneSkin, _super);
	function ResultSceneSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = ResultSceneSkin.prototype;

	return ResultSceneSkin;
})(eui.Skin);generateEUI.paths['resource/scenes/SelectDifficultyScene.exml'] = window.SelectDifficultySceneSkin = (function (_super) {
	__extends(SelectDifficultySceneSkin, _super);
	function SelectDifficultySceneSkin() {
		_super.call(this);
		this.skinParts = ["backImage","easyImage","easyLabel","proImage","proLabel"];
		
		this.height = 1280;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.backImage_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this.easyImage_i(),this.easyLabel_i(),this.proImage_i(),this.proLabel_i()];
	}
	var _proto = SelectDifficultySceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1360;
		t.horizontalCenter = 31;
		t.source = "select_difficulty_scene_bg_svg";
		t.verticalCenter = 0;
		t.width = 2040;
		return t;
	};
	_proto.backImage_i = function () {
		var t = new eui.Image();
		this.backImage = t;
		t.height = 228;
		t.source = "back_svg";
		t.width = 140;
		t.x = 1730;
		t.y = 40;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 390;
		t.horizontalCenter = 0;
		t.source = "snapshot_svg";
		t.width = 590;
		t.y = 85;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "Sight Word Hunter";
		t.y = 500;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Kristen-ITC";
		t.horizontalCenter = 0;
		t.size = 44;
		t.text = "Listen to the word. Shoot at the correct picture \nto win the prizes!";
		t.y = 600;
		return t;
	};
	_proto.easyImage_i = function () {
		var t = new eui.Image();
		this.easyImage = t;
		t.anchorOffsetX = 127;
		t.anchorOffsetY = 100;
		t.height = 200;
		t.source = "stars_joined_svg";
		t.width = 255;
		t.x = 731.5;
		t.y = 834.5;
		return t;
	};
	_proto.easyLabel_i = function () {
		var t = new eui.Label();
		this.easyLabel = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 20;
		t.fontFamily = "Kristen-ITC";
		t.size = 56;
		t.text = "Easy";
		t.textColor = 0x000000;
		t.x = 715;
		t.y = 804;
		return t;
	};
	_proto.proImage_i = function () {
		var t = new eui.Image();
		this.proImage = t;
		t.anchorOffsetX = 127;
		t.anchorOffsetY = 100;
		t.height = 200;
		t.source = "stars_joined_svg";
		t.width = 255;
		t.x = 1218.5;
		t.y = 834.5;
		return t;
	};
	_proto.proLabel_i = function () {
		var t = new eui.Label();
		this.proLabel = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 25;
		t.fontFamily = "Kristen-ITC";
		t.size = 56;
		t.text = "Pro";
		t.textColor = 0x000000;
		t.x = 1225;
		t.y = 804;
		return t;
	};
	return SelectDifficultySceneSkin;
})(eui.Skin);generateEUI.paths['resource/scenes/StartScene.exml'] = window.StartSceneSkin = (function (_super) {
	__extends(StartSceneSkin, _super);
	function StartSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","rainbowImage","sightWordParkImage","sightWordHunterImage"];
		
		this.height = 1280;
		this.width = 1920;
		this.elementsContent = [this.bg_i(),this.rainbowImage_i(),this.sightWordParkImage_i(),this.sightWordHunterImage_i()];
	}
	var _proto = StartSceneSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 1544;
		t.horizontalCenter = -48;
		t.source = "start_scene_bg_svg";
		t.verticalCenter = 80;
		t.width = 2535;
		return t;
	};
	_proto.rainbowImage_i = function () {
		var t = new eui.Image();
		this.rainbowImage = t;
		t.height = 295;
		t.source = "rainbow_svg";
		t.x = 1920;
		t.y = 85;
		return t;
	};
	_proto.sightWordParkImage_i = function () {
		var t = new eui.Image();
		this.sightWordParkImage = t;
		t.height = 350;
		t.horizontalCenter = 0;
		t.source = "sight_word_park_svg";
		t.visible = false;
		t.width = 1520;
		t.y = 85;
		return t;
	};
	_proto.sightWordHunterImage_i = function () {
		var t = new eui.Image();
		this.sightWordHunterImage = t;
		t.anchorOffsetX = 220;
		t.anchorOffsetY = 272;
		t.source = "sight_word_hunter_normal_png";
		t.x = 730;
		t.y = 930;
		return t;
	};
	return StartSceneSkin;
})(eui.Skin);