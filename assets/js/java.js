(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Triangle _ Animation 3_atlas_1", frames: [[0,0,473,473],[475,0,207,414]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Meter01 = function() {
	this.initialize(ss["Triangle _ Animation 3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Meter02 = function() {
	this.initialize(ss["Triangle _ Animation 3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Scale = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#09240F").s().p("AiZA7QgQgJgJgPQgJgPAAgUQAAgSAJgQQAJgPARgJQARgJATAAQAOAAAPAGQAPAHALAKIgXAbQgHgIgIgFQgIgFgIAAQgJAAgIAFQgHAFgDAHQgFAIAAAKQAAAKAFAHQADAHAHAGQAIAEAJAAQAIAAAIgEQAIgDAHgIIAXAYQgNANgOAFQgPAIgOgBQgUABgQgKgAkaA+QgPgFgOgKIAPgeQALAJANAGQAOAFAKABQAHAAADgDQAEgCAAgFQAAgFgGgDQgHgEgLgCIgWgIQgJgEgHgGQgGgJgBgNQABgNAGgJQAHgKAMgFQAMgEARAAQAQAAANADQAQAGAKAFIgOAfQgKgGgOgFQgNgEgHAAQgGAAgCACQgDACAAADQAAAGAFADIASAGQAKADANAFQAKAEAFAHQAIAJgBANQAAAOgHAJQgHAJgNAFQgMAFgPAAQgQAAgSgGgADKBCIAAiDIBsAAIAAAeIhEAAIAAAVIA+AAIAAAdIg+AAIAAAUIBGAAIAAAfgABfBCIAAiDIAnAAIAABiIA3AAIAAAhgAAsBCIgIgWIg0AAIgIAWIgoAAIA4iDIAnAAIA2CDgAgFAQIAfAAIgQgqg");
	this.shape.setTransform(-0.6,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#90D24B","#0FA745"],[0,1],93.2,2.3,6.8,31.3).s().p("AlxCqQhHAAgxgxQgygzAAhGQAAhFAygyQAxgyBHAAILjAAQBGAAAyAyQAyAyAABFQAABGgyAzQgyAxhGAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scale, new cjs.Rectangle(-54,-17,108,34), null);


(lib.Meter2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Meter02();
	this.instance.setTransform(-103.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Meter2, new cjs.Rectangle(-103.5,-207,207,414), null);


(lib.Meter01_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Meter01();
	this.instance.setTransform(-236.5,-236.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Meter01_1, new cjs.Rectangle(-236.5,-236.5,473,473), null);


(lib.Line1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2EB751").ss(1,1,1).p("EggkAAAMBBJAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line1, new cjs.Rectangle(-209.5,-1,419,2), null);


(lib.Innovate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#09240F").s().p("AhyA7QgPgJgKgPQgJgQAAgTQAAgSAJgQQAKgQAPgJQASgIAUAAQATAAARAIQARAJAIAQQAKAPAAATQAAATgKAQQgIAPgRAJQgRAJgTAAQgVAAgRgJgAhcgeQgIAEgEAJQgEAHAAAKQAAAKAEAIQAEAIAIAFQAHAFAJAAQAJAAAGgFQAIgFAEgIQAEgHAAgLQAAgKgEgHQgEgIgHgFQgIgFgIAAQgJAAgHAFgAGDBBIAAiCIBrAAIAAAeIhEAAIAAAVIA+AAIAAAdIg+AAIAAAUIBGAAIAAAegAEpBBIAAhjIgmAAIAAgfIB0AAIAAAfIgmAAIAABjgADpBBIgIgVIg1AAIgIAVIgoAAIA4iCIAoAAIA2CCgAC2AQIAgAAIgPgqgAAtBBIgxiCIApAAIAeBaIAehaIAoAAIgzCCgAjEBBIg4hIIAABIIgkAAIAAiCIAiAAIA3BIIAAhIIAkAAIAACCgAlXBBIg3hIIAABIIgkAAIAAiCIAhAAIA4BIIAAhIIAjAAIAACCgAnvBBIAAiCIAmAAIAACCg");
	this.shape.setTransform(-1.75,0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#90D24B","#0FA745"],[0,1],111.4,3.5,8.2,47.4).s().p("AoCCqQhHAAgxgxQgygzAAhGQAAhFAygyQAxgyBHAAIQFAAQBGAAAyAyQAyAyAABFQAABGgyAzQgyAxhGAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Innovate, new cjs.Rectangle(-68.5,-17,137,34), null);


(lib.Incubate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#09240F").s().p("Ah5A9QgNgHgIgNQgHgMAAgSIAAhMIAmAAIAABMQAAALAHAHQAGAHAKAAQAIAAAHgHQAGgGAAgMIAAhMIAnAAIAABMQAAASgIAMQgHANgOAHQgOAHgRAAQgTAAgOgHgAj7A7QgQgJgIgPQgKgQABgTQgBgSAKgQQAIgQARgJQAQgIAUAAQAPAAAPAGQAQAHAJAKIgXAbQgGgIgJgFQgIgFgIAAQgJAAgHAFQgIAFgDAHQgFAHAAALQAAAKAFAHQADAHAIAFQAHAFAJAAQAIAAAHgEQAIgDAIgIIAXAYQgMAMgOAGQgQAHgOAAQgTAAgRgJgAF5BBIAAiCIBrAAIAAAeIhEAAIAAAVIA+AAIAAAdIg+AAIAAAUIBGAAIAAAegAEfBBIAAhjIgmAAIAAgfIB0AAIAAAfIgmAAIAABjgADeBBIgIgVIg1AAIgHAVIgpAAIA4iCIApAAIA2CCgACtAQIAfAAIgQgqgAgIBBIAAiCIBAAAQAQAAALAEQALAEAGAIQAGAHAAAKQAAAKgGAIQgGAIgKADQALACAIAIQAIAJAAANQgBAKgGAJQgHAIgMAFQgLAEgQAAgAAeAkIAXAAQAIAAAFgDQAEgDAAgGQAAgGgEgDQgFgDgIAAIgXAAgAAegNIAXAAQAHAAADgDQADgEAAgFQAAgFgDgDQgDgDgHAAIgXAAgAlNBBIg3hIIAABIIgkAAIAAiCIAhAAIA4BIIAAhIIAjAAIAACCgAnlBBIAAiCIAnAAIAACCg");
	this.shape.setTransform(-2.8,0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#90D24B","#0FA745"],[0,1],111.4,3.5,8.2,47.4).s().p("AoCCqQhHAAgxgxQgygzAAhGQAAhFAygyQAxgyBHAAIQFAAQBGAAAyAyQAyAyAABFQAABGgyAzQgyAxhGAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Incubate, new cjs.Rectangle(-68.5,-17,137,34), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#26CB4E","rgba(43,178,76,0)"],[0,1],0,0.1,0,0,0.1,48.5).s().p("AlWFXQiOiOAAjJQAAjICOiOQCOiODIAAQDIAACPCOQCOCOAADIQAADJiOCOQiPCOjIAAQjIAAiOiOg");
	this.shape.setTransform(48.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,97,97), null);


(lib.C3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2EB751").ss(2,0,0,4).p("AAAgnQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMQgMgLAAgRQAAgQAMgLQALgMAQAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A2B12").s().p("AgbAdQgMgMAAgRQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMAMQgMALgQAAQgQAAgLgLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-5,11.3,10);


(lib.C2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2EB751").ss(2,0,0,4).p("AAAgnQARAAALAMQAMAMAAAPQAAARgMAMQgLALgRAAQgQAAgMgLQgLgMAAgRQAAgPALgMQAMgMAQAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A2B12").s().p("AgbAdQgMgMAAgRQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMAMQgMALgQAAQgQAAgLgLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-5,11.3,10);


(lib.C1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2EB751").ss(2,0,0,4).p("AAAgnQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMQgMgLAAgRQAAgQAMgLQALgMAQAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A2B12").s().p("AgcAcQgLgLAAgRQAAgQALgLQAMgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgMgMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-5,11.3,10);


// stage content:
(lib.TriangleAnimation3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Scale();
	this.instance.setTransform(489,238);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:492.25,y:213.95},49).to({x:487.2,y:226.15},50).to({x:489,y:238},50).wait(1));

	// Layer_1
	this.instance_1 = new lib.Innovate();
	this.instance_1.setTransform(219.2,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:184,y:52.65},49).to({x:240.65,y:64.15},50).to({x:219.2,y:44.2},50).wait(1));

	// Layer_1
	this.instance_2 = new lib.Incubate();
	this.instance_2.setTransform(100.05,301.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:85.3,y:271.8},49).to({x:128.55,y:313.1},50).to({x:100.05,y:301.3},50).wait(1));

	// C3
	this.instance_3 = new lib.C3("synched",0);
	this.instance_3.setTransform(418.45,240.1,1,1,0,0,0,-0.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:425.6,y:214.85},49).to({x:420.35,y:226.55},50).to({x:418.45,y:240.1},50).wait(1));

	// C2
	this.instance_4 = new lib.C1("synched",0);
	this.instance_4.setTransform(303.45,45.1,1,1,0,0,0,-0.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:264.6,y:52.9},49).to({x:320.25,y:63.5},50).to({x:303.45,y:45.1},50).wait(1));

	// C1
	this.instance_5 = new lib.C2("synched",0);
	this.instance_5.setTransform(184.45,302.1,1,1,0,0,0,-0.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:165.65,y:271},49).to({x:208.15,y:313.1},50).to({x:184.45,y:302.1},50).wait(1));

	// L3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2EB751").ss(2,0,0,4).p("ASQk4MgkgAJx");
	this.shape.setTransform(302.15,271.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2EB751").ss(2,0,0,4).p("AySE4MAklgJv");
	this.shape_1.setTransform(302.025,270.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyVE3MAkrgJt");
	this.shape_2.setTransform(301.875,269.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyYE3MAkwgJt");
	this.shape_3.setTransform(301.75,269.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyaE2MAk1gJr");
	this.shape_4.setTransform(301.625,268.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2EB751").ss(2,0,0,4).p("AydE1MAk7gJp");
	this.shape_5.setTransform(301.5,268.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2EB751").ss(2,0,0,4).p("AygE0MAlBgJo");
	this.shape_6.setTransform(301.35,267.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyiE0MAlFgJn");
	this.shape_7.setTransform(301.225,267.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#2EB751").ss(2,0,0,4).p("AylE0MAlLgJn");
	this.shape_8.setTransform(301.1,266.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyoEzMAlRgJl");
	this.shape_9.setTransform(300.95,265.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyqEyMAlVgJj");
	this.shape_10.setTransform(300.825,265.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#2EB751").ss(2,0,0,4).p("AytExMAlbgJh");
	this.shape_11.setTransform(300.7,264.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2EB751").ss(2,0,0,4).p("AywEwMAlhgJf");
	this.shape_12.setTransform(300.575,264.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyyEwMAllgJf");
	this.shape_13.setTransform(300.425,263.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ay1EwMAlrgJe");
	this.shape_14.setTransform(300.3,263.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ay4EvMAlxgJd");
	this.shape_15.setTransform(300.175,262.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ay6EuMAl1gJb");
	this.shape_16.setTransform(300.025,261.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ay9EtMAl7gJZ");
	this.shape_17.setTransform(299.9,261.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzAEtMAmBgJZ");
	this.shape_18.setTransform(299.775,260.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzDEsMAmHgJX");
	this.shape_19.setTransform(299.65,260.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzFErMAmLgJW");
	this.shape_20.setTransform(299.5,259.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzIErMAmRgJV");
	this.shape_21.setTransform(299.375,259.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzLEqMAmXgJT");
	this.shape_22.setTransform(299.25,258.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzNEqMAmbgJT");
	this.shape_23.setTransform(299.1,257.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzQEpMAmhgJR");
	this.shape_24.setTransform(298.975,257.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzTEoMAmmgJP");
	this.shape_25.setTransform(298.85,256.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzVEoMAmrgJO");
	this.shape_26.setTransform(298.725,256.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzYEnMAmxgJN");
	this.shape_27.setTransform(298.575,255.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzbEmMAm3gJL");
	this.shape_28.setTransform(298.45,255);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzdEmMAm7gJL");
	this.shape_29.setTransform(298.325,254.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzgElMAnBgJJ");
	this.shape_30.setTransform(298.175,253.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzjEkMAnGgJH");
	this.shape_31.setTransform(298.05,253.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzlEkMAnLgJH");
	this.shape_32.setTransform(297.925,252.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzoEjMAnRgJF");
	this.shape_33.setTransform(297.8,252.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzrEjMAnXgJF");
	this.shape_34.setTransform(297.65,251.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#2EB751").ss(2,0,0,4).p("AztEiMAnbgJD");
	this.shape_35.setTransform(297.525,250.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzwEhMAnhgJB");
	this.shape_36.setTransform(297.4,250.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzzEhMAnngJB");
	this.shape_37.setTransform(297.25,249.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#2EB751").ss(2,0,0,4).p("Az1EgMAnrgI/");
	this.shape_38.setTransform(297.125,249.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#2EB751").ss(2,0,0,4).p("Az4EfMAnxgI9");
	this.shape_39.setTransform(297,248.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#2EB751").ss(2,0,0,4).p("Az7EfMAn3gI9");
	this.shape_40.setTransform(296.875,248.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#2EB751").ss(2,0,0,4).p("Az9EeMAn7gI7");
	this.shape_41.setTransform(296.725,247.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#2EB751").ss(2,0,0,4).p("A0AEeMAoBgI6");
	this.shape_42.setTransform(296.6,246.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#2EB751").ss(2,0,0,4).p("A0DEdMAoHgI5");
	this.shape_43.setTransform(296.475,246.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#2EB751").ss(2,0,0,4).p("A0FEcMAoLgI3");
	this.shape_44.setTransform(296.325,245.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#2EB751").ss(2,0,0,4).p("A0IEbMAoRgI1");
	this.shape_45.setTransform(296.2,245.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#2EB751").ss(2,0,0,4).p("A0LEbMAoXgI0");
	this.shape_46.setTransform(296.075,244.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#2EB751").ss(2,0,0,4).p("A0OEaMAodgIz");
	this.shape_47.setTransform(295.95,244.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#2EB751").ss(2,0,0,4).p("A0QEZMAohgIy");
	this.shape_48.setTransform(295.8,243.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#2EB751").ss(2,0,0,4).p("AUUkYMgonAIx");
	this.shape_49.setTransform(295.675,242.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#2EB751").ss(2,0,0,4).p("A0OEcMAodgI3");
	this.shape_50.setTransform(296.05,243.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#2EB751").ss(2,0,0,4).p("A0JEfMAoTgI9");
	this.shape_51.setTransform(296.425,244);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#2EB751").ss(2,0,0,4).p("A0FEiMAoLgJD");
	this.shape_52.setTransform(296.8,244.55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#2EB751").ss(2,0,0,4).p("A0AElMAoBgJJ");
	this.shape_53.setTransform(297.175,245.075);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#2EB751").ss(2,0,0,4).p("Az7EoMAn3gJP");
	this.shape_54.setTransform(297.525,245.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#2EB751").ss(2,0,0,4).p("Az2ErMAntgJV");
	this.shape_55.setTransform(297.9,246.15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzxEuMAnjgJb");
	this.shape_56.setTransform(298.275,246.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzsExMAnagJh");
	this.shape_57.setTransform(298.65,247.225);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzoE0MAnRgJn");
	this.shape_58.setTransform(299.025,247.775);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzjE3MAnHgJt");
	this.shape_59.setTransform(299.4,248.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzeE6MAm9gJz");
	this.shape_60.setTransform(299.775,248.825);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzZE9MAm0gJ5");
	this.shape_61.setTransform(300.15,249.375);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzVFAMAmrgJ/");
	this.shape_62.setTransform(300.525,249.925);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzQFDMAmhgKF");
	this.shape_63.setTransform(300.9,250.475);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzLFGMAmXgKM");
	this.shape_64.setTransform(301.25,251);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzGFJMAmNgKR");
	this.shape_65.setTransform(301.625,251.525);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#2EB751").ss(2,0,0,4).p("AzCFMMAmFgKX");
	this.shape_66.setTransform(302,252.075);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ay9FQMAl7gKe");
	this.shape_67.setTransform(302.375,252.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ay4FSMAlxgKk");
	this.shape_68.setTransform(302.75,253.15);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyzFWMAlngKq");
	this.shape_69.setTransform(303.125,253.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyvFZMAlfgKx");
	this.shape_70.setTransform(303.5,254.225);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyqFcMAlVgK3");
	this.shape_71.setTransform(303.875,254.75);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#2EB751").ss(2,0,0,4).p("AylFfMAlLgK9");
	this.shape_72.setTransform(304.25,255.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#2EB751").ss(2,0,0,4).p("AygFiMAlBgLD");
	this.shape_73.setTransform(304.625,255.825);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#2EB751").ss(2,0,0,4).p("AycFlMAk5gLJ");
	this.shape_74.setTransform(305,256.375);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyWFoMAkugLP");
	this.shape_75.setTransform(305.35,256.925);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#2EB751").ss(2,0,0,4).p("AySFrMAklgLV");
	this.shape_76.setTransform(305.725,257.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyNFuMAkbgLb");
	this.shape_77.setTransform(306.1,258);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyIFxMAkRgLh");
	this.shape_78.setTransform(306.475,258.525);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyEF0MAkIgLn");
	this.shape_79.setTransform(306.85,259.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ax/F3MAj/gLt");
	this.shape_80.setTransform(307.225,259.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ax6F6MAj1gLz");
	this.shape_81.setTransform(307.6,260.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ax1F9MAjrgL5");
	this.shape_82.setTransform(307.975,260.675);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxxGAMAjjgL/");
	this.shape_83.setTransform(308.35,261.225);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxsGDMAjZgMF");
	this.shape_84.setTransform(308.725,261.75);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxnGGMAjPgML");
	this.shape_85.setTransform(309.075,262.275);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxiGJMAjFgMR");
	this.shape_86.setTransform(309.45,262.825);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxdGMMAi7gMX");
	this.shape_87.setTransform(309.825,263.375);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxZGPMAizgMd");
	this.shape_88.setTransform(310.2,263.925);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxUGTMAipgMl");
	this.shape_89.setTransform(310.575,264.45);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxPGVMAifgMp");
	this.shape_90.setTransform(310.95,264.975);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxKGYMAiVgMv");
	this.shape_91.setTransform(311.325,265.525);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxGGbMAiNgM2");
	this.shape_92.setTransform(311.7,266.05);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxBGeMAiDgM8");
	this.shape_93.setTransform(312.075,266.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aw8GiMAh5gNC");
	this.shape_94.setTransform(312.45,267.15);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aw3GlMAhvgNJ");
	this.shape_95.setTransform(312.8,267.675);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#2EB751").ss(2,0,0,4).p("AwyGnMAhlgNO");
	this.shape_96.setTransform(313.175,268.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#2EB751").ss(2,0,0,4).p("AwuGqMAhdgNU");
	this.shape_97.setTransform(313.55,268.75);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#2EB751").ss(2,0,0,4).p("AwpGuMAhTgNb");
	this.shape_98.setTransform(313.925,269.275);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#2EB751").ss(2,0,0,4).p("AQlmwMghJANh");
	this.shape_99.setTransform(314.3,269.825);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#2EB751").ss(2,0,0,4).p("AwmGuMAhNgNc");
	this.shape_100.setTransform(314.05,269.85);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#2EB751").ss(2,0,0,4).p("AwoGsMAhRgNX");
	this.shape_101.setTransform(313.825,269.875);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#2EB751").ss(2,0,0,4).p("AwqGqMAhVgNS");
	this.shape_102.setTransform(313.575,269.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#2EB751").ss(2,0,0,4).p("AwtGnMAhbgNN");
	this.shape_103.setTransform(313.325,269.925);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#2EB751").ss(2,0,0,4).p("AwvGkMAhfgNI");
	this.shape_104.setTransform(313.075,269.95);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#2EB751").ss(2,0,0,4).p("AwxGiMAhjgND");
	this.shape_105.setTransform(312.85,269.975);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#2EB751").ss(2,0,0,4).p("AwzGgMAhngM/");
	this.shape_106.setTransform(312.6,270);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aw1GdMAhrgM6");
	this.shape_107.setTransform(312.375,270.05);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aw3GbMAhvgM1");
	this.shape_108.setTransform(312.125,270.05);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aw6GZMAh1gMx");
	this.shape_109.setTransform(311.85,270.075);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aw8GWMAh5gMr");
	this.shape_110.setTransform(311.625,270.125);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aw+GUMAh9gMn");
	this.shape_111.setTransform(311.375,270.125);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxAGSMAiBgMi");
	this.shape_112.setTransform(311.15,270.15);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxCGPMAiFgMd");
	this.shape_113.setTransform(310.9,270.175);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxEGMMAiJgMY");
	this.shape_114.setTransform(310.675,270.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxGGKMAiOgMT");
	this.shape_115.setTransform(310.4,270.225);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxIGIMAiSgMP");
	this.shape_116.setTransform(310.15,270.25);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxLGFMAiXgMK");
	this.shape_117.setTransform(309.925,270.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxNGDMAibgMF");
	this.shape_118.setTransform(309.675,270.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxPGBMAifgMB");
	this.shape_119.setTransform(309.45,270.325);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxRF+MAijgL7");
	this.shape_120.setTransform(309.2,270.375);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxUF8MAipgL3");
	this.shape_121.setTransform(308.95,270.375);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxVF6MAisgLy");
	this.shape_122.setTransform(308.7,270.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxYF3MAixgLt");
	this.shape_123.setTransform(308.475,270.45);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxaF1MAi1gLp");
	this.shape_124.setTransform(308.225,270.475);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxcFyMAi5gLj");
	this.shape_125.setTransform(307.975,270.475);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxeFwMAi9gLf");
	this.shape_126.setTransform(307.75,270.525);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxgFuMAjBgLb");
	this.shape_127.setTransform(307.5,270.55);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxjFrMAjHgLV");
	this.shape_128.setTransform(307.25,270.55);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxlFoMAjLgLQ");
	this.shape_129.setTransform(307,270.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxnFmMAjPgLL");
	this.shape_130.setTransform(306.775,270.625);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxpFkMAjTgLH");
	this.shape_131.setTransform(306.525,270.625);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxrFhMAjXgLB");
	this.shape_132.setTransform(306.3,270.675);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxtFfMAjbgK9");
	this.shape_133.setTransform(306.05,270.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxvFdMAjfgK5");
	this.shape_134.setTransform(305.775,270.725);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#2EB751").ss(2,0,0,4).p("AxxFaMAjkgKz");
	this.shape_135.setTransform(305.55,270.75);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ax0FYMAjpgKv");
	this.shape_136.setTransform(305.3,270.775);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ax2FVMAjtgKq");
	this.shape_137.setTransform(305.075,270.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ax4FTMAjxgKl");
	this.shape_138.setTransform(304.825,270.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ax6FRMAj1gKg");
	this.shape_139.setTransform(304.6,270.85);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ax8FOMAj5gKb");
	this.shape_140.setTransform(304.325,270.875);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ax+FMMAj9gKX");
	this.shape_141.setTransform(304.075,270.875);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyBFJMAkCgKR");
	this.shape_142.setTransform(303.85,270.925);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyDFHMAkGgKN");
	this.shape_143.setTransform(303.6,270.95);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyFFFMAkLgKJ");
	this.shape_144.setTransform(303.375,270.975);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyHFCMAkPgKD");
	this.shape_145.setTransform(303.125,271);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyJFAMAkTgJ/");
	this.shape_146.setTransform(302.875,271.025);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyLE+MAkXgJ7");
	this.shape_147.setTransform(302.625,271.05);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#2EB751").ss(2,0,0,4).p("AyNE7MAkcgJ1");
	this.shape_148.setTransform(302.4,271.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// L2
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao9vQIR7eh");
	this.shape_149.setTransform(361.55,142.15);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApCvNISFeb");
	this.shape_150.setTransform(361.225,141.975);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApHvJISPeT");
	this.shape_151.setTransform(360.875,141.825);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApLvGISYeN");
	this.shape_152.setTransform(360.55,141.625);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApQvCISheF");
	this.shape_153.setTransform(360.225,141.475);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApVu/ISrd/");
	this.shape_154.setTransform(359.875,141.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#2EB751").ss(2,0,0,4).p("Apau8IS1d5");
	this.shape_155.setTransform(359.525,141.15);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#2EB751").ss(2,0,0,4).p("Apfu4IS/dx");
	this.shape_156.setTransform(359.2,140.975);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#2EB751").ss(2,0,0,4).p("Apju1ITHdq");
	this.shape_157.setTransform(358.875,140.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApouxITRdj");
	this.shape_158.setTransform(358.525,140.625);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#2EB751").ss(2,0,0,4).p("AptuuITadd");
	this.shape_159.setTransform(358.2,140.45);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApxuqITjdW");
	this.shape_160.setTransform(357.875,140.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ap2unITtdP");
	this.shape_161.setTransform(357.55,140.125);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ap7ujIT3dI");
	this.shape_162.setTransform(357.2,139.95);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ap/ugIT/dB");
	this.shape_163.setTransform(356.875,139.775);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqEudIUJc7");
	this.shape_164.setTransform(356.525,139.625);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqJuZIUTc0");
	this.shape_165.setTransform(356.175,139.45);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqOuWIUcct");
	this.shape_166.setTransform(355.85,139.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqSuTIUlcn");
	this.shape_167.setTransform(355.525,139.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqXuPIUvcf");
	this.shape_168.setTransform(355.2,138.95);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqcuMIU4cZ");
	this.shape_169.setTransform(354.85,138.775);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqguJIVBcT");
	this.shape_170.setTransform(354.525,138.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqluFIVLcL");
	this.shape_171.setTransform(354.2,138.45);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqquCIVVcF");
	this.shape_172.setTransform(353.85,138.25);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aqut+IVdb9");
	this.shape_173.setTransform(353.525,138.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aqzt7IVnb3");
	this.shape_174.setTransform(353.175,137.925);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aq4t3IVxbv");
	this.shape_175.setTransform(352.85,137.775);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aq8t0IV5bp");
	this.shape_176.setTransform(352.5,137.575);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArBtwIWDbh");
	this.shape_177.setTransform(352.175,137.425);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArGttIWNbb");
	this.shape_178.setTransform(351.85,137.25);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArLtqIWXbV");
	this.shape_179.setTransform(351.5,137.075);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArPtmIWfbN");
	this.shape_180.setTransform(351.175,136.925);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArUtjIWpbH");
	this.shape_181.setTransform(350.85,136.725);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArZtfIWza/");
	this.shape_182.setTransform(350.525,136.575);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArdtcIW7a5");
	this.shape_183.setTransform(350.175,136.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#2EB751").ss(2,0,0,4).p("AritZIXFaz");
	this.shape_184.setTransform(349.825,136.25);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArntVIXPar");
	this.shape_185.setTransform(349.5,136.075);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArrtSIXYak");
	this.shape_186.setTransform(349.15,135.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArwtOIXhad");
	this.shape_187.setTransform(348.825,135.725);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ar1tLIXraX");
	this.shape_188.setTransform(348.5,135.575);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ar6tHIX1aQ");
	this.shape_189.setTransform(348.175,135.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ar+tEIX9aJ");
	this.shape_190.setTransform(347.825,135.225);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#2EB751").ss(2,0,0,4).p("AsDtBIYHaD");
	this.shape_191.setTransform(347.5,135.05);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#2EB751").ss(2,0,0,4).p("AsIs9IYRZ7");
	this.shape_192.setTransform(347.175,134.875);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#2EB751").ss(2,0,0,4).p("AsMs6IYZZ1");
	this.shape_193.setTransform(346.825,134.725);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#2EB751").ss(2,0,0,4).p("AsRs3IYjZv");
	this.shape_194.setTransform(346.475,134.55);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#2EB751").ss(2,0,0,4).p("AsWszIYtZn");
	this.shape_195.setTransform(346.15,134.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#2EB751").ss(2,0,0,4).p("AsbsvIY3Zg");
	this.shape_196.setTransform(345.825,134.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#2EB751").ss(2,0,0,4).p("AsfssIY/ZZ");
	this.shape_197.setTransform(345.475,134.05);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#2EB751").ss(2,0,0,4).p("AskspIZJZT");
	this.shape_198.setTransform(345.15,133.875);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#2EB751").ss(2,0,0,4).p("AsespIY9ZT");
	this.shape_199.setTransform(345.65,134.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#2EB751").ss(2,0,0,4).p("AsYspIYxZT");
	this.shape_200.setTransform(346.175,134.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#2EB751").ss(2,0,0,4).p("AsSspIYlZT");
	this.shape_201.setTransform(346.675,134.55);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#2EB751").ss(2,0,0,4).p("AsMspIYZZT");
	this.shape_202.setTransform(347.175,134.775);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#2EB751").ss(2,0,0,4).p("AsFspIYMZT");
	this.shape_203.setTransform(347.65,134.975);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ar/spIX/ZU");
	this.shape_204.setTransform(348.175,135.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ar5spIXzZU");
	this.shape_205.setTransform(348.675,135.45);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArzsqIXnZU");
	this.shape_206.setTransform(349.175,135.65);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArtsqIXbZV");
	this.shape_207.setTransform(349.675,135.875);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArnsqIXPZV");
	this.shape_208.setTransform(350.2,136.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArhsqIXDZV");
	this.shape_209.setTransform(350.7,136.325);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArbsqIW3ZV");
	this.shape_210.setTransform(351.2,136.55);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArVsqIWrZV");
	this.shape_211.setTransform(351.7,136.775);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArPsrIWfZX");
	this.shape_212.setTransform(352.225,137);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArJsqIWSZV");
	this.shape_213.setTransform(352.7,137.225);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#2EB751").ss(2,0,0,4).p("ArDsqIWHZW");
	this.shape_214.setTransform(353.2,137.45);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aq9srIV6ZX");
	this.shape_215.setTransform(353.7,137.675);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aq2srIVtZX");
	this.shape_216.setTransform(354.225,137.875);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqwsrIVhZX");
	this.shape_217.setTransform(354.725,138.125);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqqsrIVVZX");
	this.shape_218.setTransform(355.225,138.35);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqksrIVJZX");
	this.shape_219.setTransform(355.725,138.55);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqesrIU9ZX");
	this.shape_220.setTransform(356.25,138.775);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqYsrIUxZX");
	this.shape_221.setTransform(356.75,139.025);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqSsrIUlZX");
	this.shape_222.setTransform(357.25,139.225);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqMsrIUZZY");
	this.shape_223.setTransform(357.775,139.45);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqFssIULZZ");
	this.shape_224.setTransform(358.25,139.675);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#2EB751").ss(2,0,0,4).p("AqAssIUBZZ");
	this.shape_225.setTransform(358.75,139.875);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ap5ssITzZZ");
	this.shape_226.setTransform(359.25,140.125);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApzssITnZZ");
	this.shape_227.setTransform(359.775,140.35);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#2EB751").ss(2,0,0,4).p("AptssITbZZ");
	this.shape_228.setTransform(360.275,140.55);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApnssITPZZ");
	this.shape_229.setTransform(360.775,140.775);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#2EB751").ss(2,0,0,4).p("AphssITDZZ");
	this.shape_230.setTransform(361.275,141.025);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApbssIS3ZZ");
	this.shape_231.setTransform(361.8,141.225);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApVstISrZb");
	this.shape_232.setTransform(362.3,141.45);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApPstISfZb");
	this.shape_233.setTransform(362.8,141.675);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApJstISTZb");
	this.shape_234.setTransform(363.275,141.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApCstISFZb");
	this.shape_235.setTransform(363.8,142.125);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao8stIR6Zb");
	this.shape_236.setTransform(364.3,142.35);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao3stIRvZb");
	this.shape_237.setTransform(364.8,142.575);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#2EB751").ss(2,0,0,4).p("AowstIRiZb");
	this.shape_238.setTransform(365.3,142.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoqstIRVZb");
	this.shape_239.setTransform(365.825,143.025);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoksuIRJZc");
	this.shape_240.setTransform(366.325,143.25);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoesuIQ9Zc");
	this.shape_241.setTransform(366.825,143.45);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoYstIQxZc");
	this.shape_242.setTransform(367.325,143.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoSsuIQlZd");
	this.shape_243.setTransform(367.85,143.925);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoMsuIQZZd");
	this.shape_244.setTransform(368.325,144.125);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoGsuIQNZd");
	this.shape_245.setTransform(368.825,144.35);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoAsuIQBZd");
	this.shape_246.setTransform(369.325,144.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#2EB751").ss(2,0,0,4).p("An6suIP0Zd");
	this.shape_247.setTransform(369.85,144.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#2EB751").ss(2,0,0,4).p("An0suIPoZd");
	this.shape_248.setTransform(370.35,145.025);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#2EB751").ss(2,0,0,4).p("An1syIPrZl");
	this.shape_249.setTransform(370.175,144.95);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#2EB751").ss(2,0,0,4).p("An3s1IPvZr");
	this.shape_250.setTransform(370,144.925);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#2EB751").ss(2,0,0,4).p("An4s4IPxZx");
	this.shape_251.setTransform(369.825,144.85);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#2EB751").ss(2,0,0,4).p("An5s7IP0Z3");
	this.shape_252.setTransform(369.65,144.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#2EB751").ss(2,0,0,4).p("An7s/IP3Z/");
	this.shape_253.setTransform(369.475,144.75);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#2EB751").ss(2,0,0,4).p("An8tCIP5aF");
	this.shape_254.setTransform(369.3,144.675);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#2EB751").ss(2,0,0,4).p("An+tFIP9aL");
	this.shape_255.setTransform(369.125,144.625);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoAtIIQBaR");
	this.shape_256.setTransform(368.95,144.575);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoBtMIQDaY");
	this.shape_257.setTransform(368.775,144.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoCtOIQFae");
	this.shape_258.setTransform(368.575,144.45);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoEtSIQJal");
	this.shape_259.setTransform(368.425,144.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoFtVIQLar");
	this.shape_260.setTransform(368.225,144.35);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoHtYIQPax");
	this.shape_261.setTransform(368.075,144.275);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoItbIQRa4");
	this.shape_262.setTransform(367.875,144.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoKtfIQVa/");
	this.shape_263.setTransform(367.725,144.175);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoLtiIQXbF");
	this.shape_264.setTransform(367.525,144.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoNtlIQabL");
	this.shape_265.setTransform(367.35,144.025);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoOtpIQdbT");
	this.shape_266.setTransform(367.175,144);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoQtsIQhbZ");
	this.shape_267.setTransform(367,143.925);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoRtvIQjbf");
	this.shape_268.setTransform(366.825,143.875);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoStyIQmbl");
	this.shape_269.setTransform(366.65,143.825);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoUt2IQpbt");
	this.shape_270.setTransform(366.475,143.75);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoVt4IQrby");
	this.shape_271.setTransform(366.3,143.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoXt8IQvb5");
	this.shape_272.setTransform(366.125,143.65);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoZt/IQzb/");
	this.shape_273.setTransform(365.95,143.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoauCIQ1cF");
	this.shape_274.setTransform(365.775,143.525);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#2EB751").ss(2,0,0,4).p("AocuGIQ4cN");
	this.shape_275.setTransform(365.6,143.475);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoduJIQ7cT");
	this.shape_276.setTransform(365.425,143.425);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#2EB751").ss(2,0,0,4).p("AofuMIQ/cZ");
	this.shape_277.setTransform(365.25,143.35);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoguQIRBch");
	this.shape_278.setTransform(365.075,143.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#2EB751").ss(2,0,0,4).p("AohuTIREcn");
	this.shape_279.setTransform(364.9,143.25);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#2EB751").ss(2,0,0,4).p("AojuWIRHct");
	this.shape_280.setTransform(364.725,143.175);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#2EB751").ss(2,0,0,4).p("AokuZIRJcz");
	this.shape_281.setTransform(364.55,143.15);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#2EB751").ss(2,0,0,4).p("AomucIRNc5");
	this.shape_282.setTransform(364.375,143.075);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#2EB751").ss(2,0,0,4).p("AonugIRPdB");
	this.shape_283.setTransform(364.175,143);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#2EB751").ss(2,0,0,4).p("AopujIRTdH");
	this.shape_284.setTransform(364.025,142.975);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoqumIRVdN");
	this.shape_285.setTransform(363.825,142.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#2EB751").ss(2,0,0,4).p("AosupIRZdT");
	this.shape_286.setTransform(363.675,142.825);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#2EB751").ss(2,0,0,4).p("AotusIRbdZ");
	this.shape_287.setTransform(363.475,142.775);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#2EB751").ss(2,0,0,4).p("AovuwIRfdh");
	this.shape_288.setTransform(363.325,142.725);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#2EB751").ss(2,0,0,4).p("AowuzIRhdn");
	this.shape_289.setTransform(363.125,142.675);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aoyu2IRldt");
	this.shape_290.setTransform(362.95,142.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#2EB751").ss(2,0,0,4).p("Aozu6IRnd0");
	this.shape_291.setTransform(362.775,142.55);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao1u9IRqd7");
	this.shape_292.setTransform(362.6,142.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao2vAIRteB");
	this.shape_293.setTransform(362.425,142.425);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao4vDIRxeH");
	this.shape_294.setTransform(362.25,142.375);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao5vGIRzeN");
	this.shape_295.setTransform(362.075,142.325);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao6vKIR2eV");
	this.shape_296.setTransform(361.9,142.25);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao8vNIR5eb");
	this.shape_297.setTransform(361.725,142.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_149}]}).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_149}]},1).wait(1));

	// L1
	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApRUKMASjgoT");
	this.shape_298.setTransform(244.7,173.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApPUGMASfgoK");
	this.shape_299.setTransform(244.1,173.15);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApNUBMASbgoB");
	this.shape_300.setTransform(243.5,172.925);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApLT+MASXgn6");
	this.shape_301.setTransform(242.9,172.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApJT5MASTgnx");
	this.shape_302.setTransform(242.3,172.475);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApHT1MASPgnp");
	this.shape_303.setTransform(241.675,172.225);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApFTxMASLgnh");
	this.shape_304.setTransform(241.075,172);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApDTtMASHgnZ");
	this.shape_305.setTransform(240.475,171.75);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApBTpMASDgnR");
	this.shape_306.setTransform(239.875,171.55);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao/TlMAR/gnJ");
	this.shape_307.setTransform(239.275,171.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao9ThMAR7gnB");
	this.shape_308.setTransform(238.675,171.05);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao7TdMAR3gm5");
	this.shape_309.setTransform(238.075,170.825);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao5TZMARzgmx");
	this.shape_310.setTransform(237.475,170.575);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao3TVMARvgmp");
	this.shape_311.setTransform(236.875,170.375);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao1TRMARrgmh");
	this.shape_312.setTransform(236.275,170.125);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoyTNMARmgmY");
	this.shape_313.setTransform(235.65,169.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoxTJMARigmR");
	this.shape_314.setTransform(235.05,169.65);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#2EB751").ss(2,0,0,4).p("AouTEMARdgmH");
	this.shape_315.setTransform(234.45,169.425);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#2EB751").ss(2,0,0,4).p("AotTBMARbgmB");
	this.shape_316.setTransform(233.85,169.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#2EB751").ss(2,0,0,4).p("AorS8MARXgl3");
	this.shape_317.setTransform(233.25,168.975);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#2EB751").ss(2,0,0,4).p("AopS4MARTglv");
	this.shape_318.setTransform(232.65,168.725);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#2EB751").ss(2,0,0,4).p("AonS0MAROgln");
	this.shape_319.setTransform(232.05,168.475);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#2EB751").ss(2,0,0,4).p("AokSwMARJglf");
	this.shape_320.setTransform(231.45,168.25);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#2EB751").ss(2,0,0,4).p("AojSsMARHglX");
	this.shape_321.setTransform(230.85,168.025);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#2EB751").ss(2,0,0,4).p("AohSoMARDglP");
	this.shape_322.setTransform(230.25,167.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoeSkMAQ9glH");
	this.shape_323.setTransform(229.625,167.55);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#2EB751").ss(2,0,0,4).p("AocSgMAQ5gk/");
	this.shape_324.setTransform(229.025,167.325);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoaScMAQ1gk3");
	this.shape_325.setTransform(228.425,167.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoYSYMAQxgkv");
	this.shape_326.setTransform(227.825,166.875);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoWSUMAQtgkn");
	this.shape_327.setTransform(227.225,166.625);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoUSQMAQpgkf");
	this.shape_328.setTransform(226.625,166.375);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoSSMMAQlgkX");
	this.shape_329.setTransform(226.025,166.15);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoQSIMAQhgkP");
	this.shape_330.setTransform(225.425,165.925);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoOSEMAQdgkG");
	this.shape_331.setTransform(224.825,165.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoMSAMAQZgj/");
	this.shape_332.setTransform(224.225,165.45);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoKR7MAQVgj1");
	this.shape_333.setTransform(223.6,165.225);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoIR3MAQRgjt");
	this.shape_334.setTransform(223,164.975);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoGRzMAQNgjl");
	this.shape_335.setTransform(222.4,164.775);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoERvMAQJgjd");
	this.shape_336.setTransform(221.8,164.525);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoCRrMAQFgjV");
	this.shape_337.setTransform(221.2,164.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoARnMAQBgjN");
	this.shape_338.setTransform(220.6,164.05);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#2EB751").ss(2,0,0,4).p("An+RjMAP9gjF");
	this.shape_339.setTransform(220,163.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#2EB751").ss(2,0,0,4).p("An8RfMAP5gi9");
	this.shape_340.setTransform(219.4,163.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#2EB751").ss(2,0,0,4).p("An6RbMAP1gi1");
	this.shape_341.setTransform(218.8,163.35);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#2EB751").ss(2,0,0,4).p("An4RXMAPxgit");
	this.shape_342.setTransform(218.2,163.125);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#2EB751").ss(2,0,0,4).p("An2RTMAPtgil");
	this.shape_343.setTransform(217.575,162.875);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#2EB751").ss(2,0,0,4).p("An0ROMAPpgic");
	this.shape_344.setTransform(216.975,162.65);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#2EB751").ss(2,0,0,4).p("AnyRLMAPlgiV");
	this.shape_345.setTransform(216.375,162.425);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#2EB751").ss(2,0,0,4).p("AnwRHMAPhgiN");
	this.shape_346.setTransform(215.775,162.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#2EB751").ss(2,0,0,4).p("AnuRCMAPdgiE");
	this.shape_347.setTransform(215.175,161.95);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#2EB751").ss(2,0,0,4).p("AnvRGMAPfgiL");
	this.shape_348.setTransform(216.15,162.475);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#2EB751").ss(2,0,0,4).p("AnwRJMAPigiR");
	this.shape_349.setTransform(217.15,163);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#2EB751").ss(2,0,0,4).p("AnyRMMAPlgiX");
	this.shape_350.setTransform(218.125,163.55);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#2EB751").ss(2,0,0,4).p("AnzRPMAPngid");
	this.shape_351.setTransform(219.1,164.05);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#2EB751").ss(2,0,0,4).p("An0RSMAPpgij");
	this.shape_352.setTransform(220.075,164.575);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#2EB751").ss(2,0,0,4).p("An2RWMAPtgir");
	this.shape_353.setTransform(221.075,165.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#2EB751").ss(2,0,0,4).p("An3RZMAPvgiw");
	this.shape_354.setTransform(222.05,165.65);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#2EB751").ss(2,0,0,4).p("An4RcMAPxgi3");
	this.shape_355.setTransform(223.025,166.175);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#2EB751").ss(2,0,0,4).p("An6RfMAP0gi9");
	this.shape_356.setTransform(224,166.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#2EB751").ss(2,0,0,4).p("An7RiMAP3gjD");
	this.shape_357.setTransform(225,167.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#2EB751").ss(2,0,0,4).p("An8RlMAP5gjJ");
	this.shape_358.setTransform(225.975,167.75);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#2EB751").ss(2,0,0,4).p("An9RoMAP8gjP");
	this.shape_359.setTransform(226.95,168.275);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#2EB751").ss(2,0,0,4).p("An/RsMAP/gjW");
	this.shape_360.setTransform(227.925,168.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoARvMAQBgjd");
	this.shape_361.setTransform(228.925,169.325);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoCRyMAQFgjj");
	this.shape_362.setTransform(229.9,169.875);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoDR1MAQHgjp");
	this.shape_363.setTransform(230.875,170.375);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoER4MAQJgjv");
	this.shape_364.setTransform(231.85,170.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoGR7MAQNgj1");
	this.shape_365.setTransform(232.85,171.425);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoHR+MAQPgj7");
	this.shape_366.setTransform(233.825,171.975);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoISCMAQRgkD");
	this.shape_367.setTransform(234.8,172.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoJSFMAQTgkJ");
	this.shape_368.setTransform(235.775,173.025);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoLSIMAQXgkP");
	this.shape_369.setTransform(236.775,173.525);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoMSLMAQZgkV");
	this.shape_370.setTransform(237.75,174.075);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoNSOMAQbgkb");
	this.shape_371.setTransform(238.725,174.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoPSRMAQfgkh");
	this.shape_372.setTransform(239.725,175.125);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoQSVMAQhgko");
	this.shape_373.setTransform(240.7,175.65);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoRSYMAQjgkv");
	this.shape_374.setTransform(241.675,176.175);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoTSbMAQngk1");
	this.shape_375.setTransform(242.65,176.725);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoUSeMAQpgk7");
	this.shape_376.setTransform(243.65,177.225);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoVShMAQrglB");
	this.shape_377.setTransform(244.625,177.75);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoWSkMAQuglH");
	this.shape_378.setTransform(245.6,178.275);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoYSnMAQxglN");
	this.shape_379.setTransform(246.575,178.825);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoZSrMAQzglV");
	this.shape_380.setTransform(247.575,179.35);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoaSuMAQ2glb");
	this.shape_381.setTransform(248.55,179.875);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#2EB751").ss(2,0,0,4).p("AocSxMAQ5glh");
	this.shape_382.setTransform(249.525,180.375);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#2EB751").ss(2,0,0,4).p("AodS0MAQ7gln");
	this.shape_383.setTransform(250.5,180.925);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#2EB751").ss(2,0,0,4).p("AofS3MAQ/glt");
	this.shape_384.setTransform(251.5,181.45);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#2EB751").ss(2,0,0,4).p("AogS6MARBglz");
	this.shape_385.setTransform(252.475,181.975);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#2EB751").ss(2,0,0,4).p("AohS+MARDgl7");
	this.shape_386.setTransform(253.45,182.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoiTBMARFgmA");
	this.shape_387.setTransform(254.425,183.05);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#2EB751").ss(2,0,0,4).p("AokTEMARJgmH");
	this.shape_388.setTransform(255.425,183.55);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#2EB751").ss(2,0,0,4).p("AolTHMARLgmN");
	this.shape_389.setTransform(256.4,184.075);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#2EB751").ss(2,0,0,4).p("AomTKMARNgmT");
	this.shape_390.setTransform(257.375,184.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#2EB751").ss(2,0,0,4).p("AooTNMARRgmZ");
	this.shape_391.setTransform(258.35,185.15);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#2EB751").ss(2,0,0,4).p("AopTQMARTgmf");
	this.shape_392.setTransform(259.35,185.675);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoqTUMARVgmm");
	this.shape_393.setTransform(260.325,186.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#2EB751").ss(2,0,0,4).p("AosTXMARYgmt");
	this.shape_394.setTransform(261.3,186.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#2EB751").ss(2,0,0,4).p("AotTZMARbgmy");
	this.shape_395.setTransform(262.275,187.25);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#2EB751").ss(2,0,0,4).p("AouTdMARdgm5");
	this.shape_396.setTransform(263.275,187.775);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#2EB751").ss(2,0,0,4).p("AowTgMARhgm/");
	this.shape_397.setTransform(264.25,188.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#2EB751").ss(2,0,0,4).p("AowThMARhgnB");
	this.shape_398.setTransform(263.875,188);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoxTiMARjgnD");
	this.shape_399.setTransform(263.475,187.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoyTjMARlgnE");
	this.shape_400.setTransform(263.1,187.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#2EB751").ss(2,0,0,4).p("AoyTjMARlgnF");
	this.shape_401.setTransform(262.675,187.125);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#2EB751").ss(2,0,0,4).p("AozTkMARngnH");
	this.shape_402.setTransform(262.3,186.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#2EB751").ss(2,0,0,4).p("AozTlMARognJ");
	this.shape_403.setTransform(261.9,186.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao0TmMARpgnL");
	this.shape_404.setTransform(261.525,186.225);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao1TnMARrgnN");
	this.shape_405.setTransform(261.125,185.925);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao2TnMARsgnO");
	this.shape_406.setTransform(260.75,185.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao2ToMARtgnP");
	this.shape_407.setTransform(260.325,185.325);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao3TpMARvgnR");
	this.shape_408.setTransform(259.95,185.025);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao3TqMARwgnT");
	this.shape_409.setTransform(259.55,184.725);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao4TrMARxgnV");
	this.shape_410.setTransform(259.175,184.425);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao5TsMARzgnX");
	this.shape_411.setTransform(258.775,184.125);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao5TsMAR0gnX");
	this.shape_412.setTransform(258.4,183.825);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao6TtMAR1gnZ");
	this.shape_413.setTransform(257.975,183.525);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao7TuMAR3gnb");
	this.shape_414.setTransform(257.6,183.225);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao8TvMAR5gnd");
	this.shape_415.setTransform(257.2,182.95);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao8TwMAR5gnf");
	this.shape_416.setTransform(256.825,182.625);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao9TxMAR7gnh");
	this.shape_417.setTransform(256.425,182.35);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao9TyMAR8gnj");
	this.shape_418.setTransform(256.05,182.05);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao+TyMAR9gnj");
	this.shape_419.setTransform(255.625,181.725);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao/TzMAR/gnl");
	this.shape_420.setTransform(255.25,181.45);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#2EB751").ss(2,0,0,4).p("Ao/T0MASAgnn");
	this.shape_421.setTransform(254.85,181.15);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApAT1MASBgnp");
	this.shape_422.setTransform(254.475,180.875);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApBT2MASDgnr");
	this.shape_423.setTransform(254.1,180.55);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApCT3MASFgnt");
	this.shape_424.setTransform(253.7,180.25);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApDT4MASHgnv");
	this.shape_425.setTransform(252.9,179.65);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApET5MASJgnx");
	this.shape_426.setTransform(252.525,179.35);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApET6MASJgnz");
	this.shape_427.setTransform(252.125,179.075);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApFT7MASLgn0");
	this.shape_428.setTransform(251.75,178.75);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApGT7MASNgn1");
	this.shape_429.setTransform(251.35,178.475);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApGT8MASNgn3");
	this.shape_430.setTransform(250.975,178.175);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApHT9MASPgn5");
	this.shape_431.setTransform(250.55,177.875);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApIT+MASRgn7");
	this.shape_432.setTransform(250.175,177.575);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApIT/MASRgn9");
	this.shape_433.setTransform(249.775,177.275);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApJUAMASTgn/");
	this.shape_434.setTransform(249.4,176.975);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApKUAMASUgn/");
	this.shape_435.setTransform(249,176.675);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApKUBMASVgoB");
	this.shape_436.setTransform(248.625,176.375);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApLUCMASXgoD");
	this.shape_437.setTransform(248.2,176.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApMUDMASZgoF");
	this.shape_438.setTransform(247.825,175.775);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApMUEMASZgoH");
	this.shape_439.setTransform(247.425,175.475);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApNUFMASbgoJ");
	this.shape_440.setTransform(247.05,175.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApNUGMAScgoK");
	this.shape_441.setTransform(246.65,174.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApOUGMASdgoL");
	this.shape_442.setTransform(246.275,174.575);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApPUHMASfgoN");
	this.shape_443.setTransform(245.85,174.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApQUIMAShgoP");
	this.shape_444.setTransform(245.475,174);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#2EB751").ss(2,0,0,4).p("ApQUJMAShgoR");
	this.shape_445.setTransform(245.075,173.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_298}]}).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424,p:{x:253.7,y:180.25}}]},1).to({state:[{t:this.shape_424,p:{x:253.325,y:179.975}}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_298}]},1).wait(1));

	// Layer_11
	this.instance_6 = new lib.Line1();
	this.instance_6.setTransform(338.55,211.85,0.4086,1,78.1827,0,0,208.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.3492,x:294.45,y:195.45},49).to({regX:208.2,regY:-0.1,rotation:100.1777,x:294.75,y:207.85},50).to({regX:208.5,regY:0,scaleX:0.4086,rotation:78.1827,x:338.55,y:211.85},50).wait(1));

	// Layer_12
	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmSiMIMlEZ");
	this.shape_446.setTransform(378.75,225.775);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmXiLIMvEX");
	this.shape_447.setTransform(378.375,225.35);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmciKIM5EV");
	this.shape_448.setTransform(377.975,224.95);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmhiJINDET");
	this.shape_449.setTransform(377.6,224.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmmiIINNER");
	this.shape_450.setTransform(377.225,224.075);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmsiHINYEP");
	this.shape_451.setTransform(376.85,223.675);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmxiHINiEP");
	this.shape_452.setTransform(376.45,223.25);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Am2iGINtEM");
	this.shape_453.setTransform(376.075,222.85);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Am7iEIN3EJ");
	this.shape_454.setTransform(375.7,222.4);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnAiEIOBEJ");
	this.shape_455.setTransform(375.3,221.975);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnFiDIOLEH");
	this.shape_456.setTransform(374.925,221.575);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnKiCIOVEF");
	this.shape_457.setTransform(374.55,221.15);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnQiBIOhED");
	this.shape_458.setTransform(374.175,220.725);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnViAIOrEB");
	this.shape_459.setTransform(373.775,220.3);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Anah/IO1D/");
	this.shape_460.setTransform(373.4,219.875);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Anfh+IO/D9");
	this.shape_461.setTransform(373.025,219.475);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ankh+IPJD8");
	this.shape_462.setTransform(372.625,219.05);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Anqh9IPVD7");
	this.shape_463.setTransform(372.25,218.625);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Anvh7IPfD4");
	this.shape_464.setTransform(371.875,218.2);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("An0h7IPpD3");
	this.shape_465.setTransform(371.5,217.775);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("An5h6IPzD1");
	this.shape_466.setTransform(371.1,217.35);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("An+h5IP9Dz");
	this.shape_467.setTransform(370.725,216.95);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoEh4IQIDx");
	this.shape_468.setTransform(370.35,216.525);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoJh3IQSDv");
	this.shape_469.setTransform(369.95,216.075);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoOh2IQdDt");
	this.shape_470.setTransform(369.575,215.675);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoTh1IQnDr");
	this.shape_471.setTransform(369.225,215.25);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoYh1IQxDr");
	this.shape_472.setTransform(368.85,214.85);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Aodh0IQ7Dp");
	this.shape_473.setTransform(368.45,214.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoihzIRFDn");
	this.shape_474.setTransform(368.075,213.975);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoohyIRRDl");
	this.shape_475.setTransform(367.7,213.575);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AothxIRbDj");
	this.shape_476.setTransform(367.3,213.15);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoyhwIRlDh");
	this.shape_477.setTransform(366.925,212.725);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ao3hvIRvDf");
	this.shape_478.setTransform(366.55,212.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ao8huIR5Dd");
	this.shape_479.setTransform(366.175,211.875);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApBhtISDDc");
	this.shape_480.setTransform(365.775,211.45);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApGhtISODa");
	this.shape_481.setTransform(365.4,211.05);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApMhsISZDZ");
	this.shape_482.setTransform(365.025,210.625);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApRhrISjDX");
	this.shape_483.setTransform(364.625,210.2);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApWhqIStDV");
	this.shape_484.setTransform(364.25,209.775);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApbhpIS3DT");
	this.shape_485.setTransform(363.875,209.35);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApghoITBDR");
	this.shape_486.setTransform(363.5,208.95);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApmhnITMDP");
	this.shape_487.setTransform(363.1,208.525);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AprhmITXDN");
	this.shape_488.setTransform(362.725,208.075);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApwhlIThDL");
	this.shape_489.setTransform(362.35,207.675);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap1hlITrDL");
	this.shape_490.setTransform(361.95,207.25);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap6hkIT1DI");
	this.shape_491.setTransform(361.575,206.85);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqAhjIUBDH");
	this.shape_492.setTransform(361.2,206.425);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqFhiIULDF");
	this.shape_493.setTransform(360.825,205.975);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqKhhIUVDD");
	this.shape_494.setTransform(360.425,205.575);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqPhgIUfDB");
	this.shape_495.setTransform(360.05,205.15);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqOhgIUdDB");
	this.shape_496.setTransform(359.95,205.625);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqNhgIUcDB");
	this.shape_497.setTransform(359.9,205.875);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqNhgIUbDB");
	this.shape_498.setTransform(359.85,206.125);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqMhgIUZDB");
	this.shape_499.setTransform(359.775,206.35);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqLhgIUXDB");
	this.shape_500.setTransform(359.7,206.85);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqKhfIUWC/");
	this.shape_501.setTransform(359.65,207.075);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqKhfIUVC/");
	this.shape_502.setTransform(359.6,207.325);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqJhfIUTC/");
	this.shape_503.setTransform(359.5,207.8);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqIhfIURC/");
	this.shape_504.setTransform(359.45,208.05);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqIhfIUQC/");
	this.shape_505.setTransform(359.35,208.55);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqHhfIUPC/");
	this.shape_506.setTransform(359.275,208.775);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqGhfIUNC/");
	this.shape_507.setTransform(359.225,209.025);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqFhfIULC/");
	this.shape_508.setTransform(359.125,209.5);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqFhfIUKC/");
	this.shape_509.setTransform(359.1,209.75);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqEhfIUJC/");
	this.shape_510.setTransform(359.05,210);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqDheIUHC9");
	this.shape_511.setTransform(359,210.225);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqCheIUGC9");
	this.shape_512.setTransform(358.9,210.725);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqCheIUFC9");
	this.shape_513.setTransform(358.85,210.95);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqBheIUDC9");
	this.shape_514.setTransform(358.725,211.45);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqAheIUBC9");
	this.shape_515.setTransform(358.675,211.675);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap/heIT/C9");
	this.shape_516.setTransform(358.575,212.175);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap/hdIT/C8");
	this.shape_517.setTransform(358.525,212.4);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap+hdIT9C8");
	this.shape_518.setTransform(358.475,212.65);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap+hdIT8C8");
	this.shape_519.setTransform(358.45,212.9);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap9hdIT7C7");
	this.shape_520.setTransform(358.4,213.125);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap8hdIT5C7");
	this.shape_521.setTransform(358.3,213.625);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap7hdIT3C7");
	this.shape_522.setTransform(358.225,213.85);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap6hdIT1C7");
	this.shape_523.setTransform(358.125,214.35);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap5hdITzC7");
	this.shape_524.setTransform(358.025,214.825);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap4hdITxC7");
	this.shape_525.setTransform(357.925,215.325);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap4hdITxC6");
	this.shape_526.setTransform(357.875,215.55);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap3hdITvC6");
	this.shape_527.setTransform(357.85,215.8);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap2hdITuC6");
	this.shape_528.setTransform(357.8,216.05);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap2hcITtC5");
	this.shape_529.setTransform(357.725,216.275);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap1hcITrC5");
	this.shape_530.setTransform(357.675,216.525);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap0hcITpC5");
	this.shape_531.setTransform(357.575,217);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApvhdITfC7");
	this.shape_532.setTransform(357.95,217.425);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AprheITXC9");
	this.shape_533.setTransform(358.375,217.6);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApmhfITNC/");
	this.shape_534.setTransform(358.8,217.75);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApihgITFDB");
	this.shape_535.setTransform(359.225,217.925);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApdhhIS7DD");
	this.shape_536.setTransform(359.65,218.125);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApZhiISzDF");
	this.shape_537.setTransform(360.075,218.275);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApUhjISpDH");
	this.shape_538.setTransform(360.5,218.425);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApQhkIShDJ");
	this.shape_539.setTransform(360.925,218.625);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApLhlISXDL");
	this.shape_540.setTransform(361.35,218.775);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApHhmISPDN");
	this.shape_541.setTransform(361.75,218.95);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApChmISFDN");
	this.shape_542.setTransform(362.2,219.15);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ao+hoIR8DQ");
	this.shape_543.setTransform(362.6,219.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ao5hoIRzDS");
	this.shape_544.setTransform(363.05,219.45);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ao0hpIRpDT");
	this.shape_545.setTransform(363.475,219.625);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AowhqIRhDV");
	this.shape_546.setTransform(363.9,219.825);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AorhrIRXDX");
	this.shape_547.setTransform(364.325,219.975);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AonhsIRPDZ");
	this.shape_548.setTransform(364.725,220.125);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoihtIRFDb");
	this.shape_549.setTransform(365.175,220.325);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoehuIQ9Dd");
	this.shape_550.setTransform(365.575,220.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoZhvIQzDf");
	this.shape_551.setTransform(366.025,220.65);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoVhwIQrDh");
	this.shape_552.setTransform(366.425,220.825);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoQhxIQhDj");
	this.shape_553.setTransform(366.875,221);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoMhyIQZDl");
	this.shape_554.setTransform(367.275,221.175);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoHhzIQPDn");
	this.shape_555.setTransform(367.725,221.35);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoCh0IQGDp");
	this.shape_556.setTransform(368.15,221.525);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("An+h1IP9Dr");
	this.shape_557.setTransform(368.55,221.675);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("An5h2IPzDt");
	this.shape_558.setTransform(369,221.85);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("An1h3IPrDv");
	this.shape_559.setTransform(369.4,222.025);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Anxh3IPjDw");
	this.shape_560.setTransform(369.85,222.2);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ansh5IPZDz");
	this.shape_561.setTransform(370.25,222.375);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Anoh6IPQD1");
	this.shape_562.setTransform(370.7,222.525);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Anjh6IPHD2");
	this.shape_563.setTransform(371.1,222.7);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Aneh7IO9D4");
	this.shape_564.setTransform(371.55,222.9);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Anah9IO1D6");
	this.shape_565.setTransform(371.95,223.05);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnVh9IOrD8");
	this.shape_566.setTransform(372.375,223.2);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnRh/IOjD/");
	this.shape_567.setTransform(372.8,223.4);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnMh/IOZD/");
	this.shape_568.setTransform(373.225,223.575);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnIiAIOREB");
	this.shape_569.setTransform(373.675,223.725);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnDiBIOHED");
	this.shape_570.setTransform(374.075,223.875);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Am/iCIN/EF");
	this.shape_571.setTransform(374.525,224.075);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Am6iDIN1EH");
	this.shape_572.setTransform(374.925,224.25);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Am2iEINsEJ");
	this.shape_573.setTransform(375.35,224.4);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmxiFINjEL");
	this.shape_574.setTransform(375.775,224.6);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmsiGINZEN");
	this.shape_575.setTransform(376.2,224.75);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmoiHINREP");
	this.shape_576.setTransform(376.625,224.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmkiIINJER");
	this.shape_577.setTransform(377.05,225.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmfiJIM/ET");
	this.shape_578.setTransform(377.475,225.275);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmaiKIM2EV");
	this.shape_579.setTransform(377.9,225.425);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmWiLIMtEX");
	this.shape_580.setTransform(378.325,225.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_446}]}).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495,p:{x:360.05,y:205.15}}]},1).to({state:[{t:this.shape_495,p:{x:360,y:205.4}}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499,p:{x:359.775,y:206.35}}]},1).to({state:[{t:this.shape_499,p:{x:359.725,y:206.6}}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502,p:{x:359.6,y:207.325}}]},1).to({state:[{t:this.shape_502,p:{x:359.55,y:207.575}}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504,p:{x:359.45,y:208.05}}]},1).to({state:[{t:this.shape_504,p:{x:359.4,y:208.3}}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507,p:{x:359.225,y:209.025}}]},1).to({state:[{t:this.shape_507,p:{x:359.175,y:209.275}}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511,p:{x:359,y:210.225}}]},1).to({state:[{t:this.shape_511,p:{x:358.95,y:210.475}}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513,p:{x:358.85,y:210.95}}]},1).to({state:[{t:this.shape_513,p:{x:358.8,y:211.2}}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515,p:{x:358.675,y:211.675}}]},1).to({state:[{t:this.shape_515,p:{x:358.625,y:211.925}}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520,p:{x:358.4,y:213.125}}]},1).to({state:[{t:this.shape_520,p:{x:358.35,y:213.375}}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522,p:{x:358.225,y:213.85}}]},1).to({state:[{t:this.shape_522,p:{x:358.175,y:214.1}}]},1).to({state:[{t:this.shape_523,p:{x:358.125,y:214.35}}]},1).to({state:[{t:this.shape_523,p:{x:358.075,y:214.6}}]},1).to({state:[{t:this.shape_524,p:{x:358.025,y:214.825}}]},1).to({state:[{t:this.shape_524,p:{x:357.975,y:215.075}}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530,p:{x:357.675,y:216.525}}]},1).to({state:[{t:this.shape_530,p:{x:357.625,y:216.775}}]},1).to({state:[{t:this.shape_531,p:{x:357.575,y:217}}]},1).to({state:[{t:this.shape_531,p:{x:357.525,y:217.25}}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_446}]},1).wait(1));

	// G3
	this.instance_7 = new lib.Path();
	this.instance_7.setTransform(418.55,240.1,0.3847,0.3847,0,0,0,48.6,48.6);
	this.instance_7.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:48.5,scaleX:0.4556,scaleY:0.4556,x:425.65,y:214.85},49).to({regX:48.8,scaleX:0.7384,scaleY:0.7384,x:420.5,y:226.6},50).to({regX:48.6,regY:48.6,scaleX:0.3847,scaleY:0.3847,x:418.55,y:240.1},50).wait(1));

	// G2
	this.instance_8 = new lib.Path();
	this.instance_8.setTransform(303.55,45.15,0.6835,0.6835,0,0,0,48.5,48.5);
	this.instance_8.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:48.4,scaleX:0.8533,scaleY:0.8533,x:264.6,y:52.95},49).to({regX:48.3,regY:48.3,scaleX:0.7698,scaleY:0.7698,x:320.3,y:63.45},50).to({regX:48.5,regY:48.5,scaleX:0.6835,scaleY:0.6835,x:303.55,y:45.15},50).wait(1));

	// G1
	this.instance_9 = new lib.Path();
	this.instance_9.setTransform(184.5,302.1,1,1,0,0,0,48.5,48.5);
	this.instance_9.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:0.667,scaleY:0.667,x:165.75,y:271.05},49).to({regY:48.6,scaleX:0.4541,scaleY:0.4541,x:208.2,y:313.15},50).to({regY:48.5,scaleX:1,scaleY:1,x:184.5,y:302.1},50).wait(1));

	// Triangle_svg
	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ar1G5IXrty");
	this.shape_581.setTransform(262.675,255.85);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArzG4IXntv");
	this.shape_582.setTransform(262,255.375);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArxG3IXitt");
	this.shape_583.setTransform(261.35,254.925);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AruG2IXdtr");
	this.shape_584.setTransform(260.675,254.45);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArsG1IXZto");
	this.shape_585.setTransform(260,254);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArqGzIXUtl");
	this.shape_586.setTransform(259.35,253.55);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArnGyIXPtj");
	this.shape_587.setTransform(258.675,253.075);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArlGwIXLtf");
	this.shape_588.setTransform(258.025,252.625);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArjGvIXGtd");
	this.shape_589.setTransform(257.35,252.15);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArgGuIXBtb");
	this.shape_590.setTransform(256.675,251.675);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AreGtIW9tY");
	this.shape_591.setTransform(256.025,251.25);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArcGrIW5tV");
	this.shape_592.setTransform(255.35,250.775);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArZGqIWztT");
	this.shape_593.setTransform(254.675,250.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArXGoIWvtQ");
	this.shape_594.setTransform(254.025,249.85);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArUGnIWptN");
	this.shape_595.setTransform(253.35,249.375);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArSGmIWltL");
	this.shape_596.setTransform(252.7,248.925);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArQGlIWhtJ");
	this.shape_597.setTransform(252.025,248.475);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArOGjIWdtF");
	this.shape_598.setTransform(251.35,248);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArLGiIWXtD");
	this.shape_599.setTransform(250.7,247.55);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArJGhIWTtB");
	this.shape_600.setTransform(250.025,247.075);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArHGgIWPs+");
	this.shape_601.setTransform(249.35,246.6);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArEGeIWJs7");
	this.shape_602.setTransform(248.7,246.15);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArCGdIWFs5");
	this.shape_603.setTransform(248.025,245.7);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Aq/GcIWAs3");
	this.shape_604.setTransform(247.35,245.225);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Aq9GaIV7sz");
	this.shape_605.setTransform(246.7,244.775);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Aq7GZIV3sx");
	this.shape_606.setTransform(246.05,244.3);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Aq5GYIVysv");
	this.shape_607.setTransform(245.4,243.85);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Aq2GWIVtsr");
	this.shape_608.setTransform(244.725,243.375);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Aq0GVIVpsp");
	this.shape_609.setTransform(244.05,242.925);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqxGUIVksn");
	this.shape_610.setTransform(243.4,242.475);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqvGTIVfsl");
	this.shape_611.setTransform(242.725,242);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqtGRIVbsh");
	this.shape_612.setTransform(242.05,241.525);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqqGQIVWsf");
	this.shape_613.setTransform(241.4,241.075);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqoGPIVRsc");
	this.shape_614.setTransform(240.725,240.6);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqmGOIVNsa");
	this.shape_615.setTransform(240.05,240.15);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqkGMIVJsX");
	this.shape_616.setTransform(239.4,239.7);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqhGLIVDsV");
	this.shape_617.setTransform(238.725,239.225);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqfGJIU/sR");
	this.shape_618.setTransform(238.075,238.775);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqdGIIU7sP");
	this.shape_619.setTransform(237.4,238.3);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqaGHIU1sN");
	this.shape_620.setTransform(236.725,237.825);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqYGFIUxsK");
	this.shape_621.setTransform(236.075,237.4);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqVGEIUssH");
	this.shape_622.setTransform(235.4,236.925);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqTGDIUnsF");
	this.shape_623.setTransform(234.725,236.45);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqRGCIUjsD");
	this.shape_624.setTransform(234.075,236);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqPGAIUer/");
	this.shape_625.setTransform(233.4,235.525);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqMF/IUZr9");
	this.shape_626.setTransform(232.75,235.075);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqKF+IUVr7");
	this.shape_627.setTransform(232.075,234.625);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqHF9IUQr4");
	this.shape_628.setTransform(231.4,234.15);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqFF7IULr1");
	this.shape_629.setTransform(230.75,233.7);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqDF6IUHrz");
	this.shape_630.setTransform(230.075,233.225);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap+F9IT9r5");
	this.shape_631.setTransform(230.5,233.775);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap6GAIT1r/");
	this.shape_632.setTransform(230.925,234.325);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap2GDITtsF");
	this.shape_633.setTransform(231.35,234.875);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApyGGITlsK");
	this.shape_634.setTransform(231.775,235.4);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApuGJITdsR");
	this.shape_635.setTransform(232.2,235.95);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AppGMITTsX");
	this.shape_636.setTransform(232.625,236.5);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AplGOITLsc");
	this.shape_637.setTransform(233.075,237.05);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AphGSITDsi");
	this.shape_638.setTransform(233.5,237.6);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApdGUIS7so");
	this.shape_639.setTransform(233.925,238.15);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApYGXISyst");
	this.shape_640.setTransform(234.35,238.675);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApUGaISpsz");
	this.shape_641.setTransform(234.775,239.225);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApQGdIShs5");
	this.shape_642.setTransform(235.2,239.775);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApMGgISZs/");
	this.shape_643.setTransform(235.625,240.325);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApHGjISQtF");
	this.shape_644.setTransform(236.05,240.875);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApDGmISHtL");
	this.shape_645.setTransform(236.475,241.425);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ao/GpIR/tR");
	this.shape_646.setTransform(236.9,241.95);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ao7GsIR3tX");
	this.shape_647.setTransform(237.325,242.5);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ao3GvIRvtd");
	this.shape_648.setTransform(237.75,243.05);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AozGyIRntj");
	this.shape_649.setTransform(238.2,243.6);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AouG1IRdtp");
	this.shape_650.setTransform(238.625,244.15);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoqG4IRVtv");
	this.shape_651.setTransform(239.05,244.7);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AomG7IRNt1");
	this.shape_652.setTransform(239.475,245.225);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoiG+IRFt7");
	this.shape_653.setTransform(239.9,245.775);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AodHBIQ7uB");
	this.shape_654.setTransform(240.325,246.325);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoZHEIQzuH");
	this.shape_655.setTransform(240.75,246.875);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoVHHIQruN");
	this.shape_656.setTransform(241.175,247.425);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoRHKIQiuT");
	this.shape_657.setTransform(241.6,247.975);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoMHNIQZuZ");
	this.shape_658.setTransform(242.025,248.525);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoIHPIQRud");
	this.shape_659.setTransform(242.45,249.05);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoEHTIQJul");
	this.shape_660.setTransform(242.875,249.6);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoAHWIQBur");
	this.shape_661.setTransform(243.3,250.15);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("An7HZIP4ux");
	this.shape_662.setTransform(243.75,250.7);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("An3HcIPvu3");
	this.shape_663.setTransform(244.175,251.25);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnzHeIPnu8");
	this.shape_664.setTransform(244.6,251.8);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnvHhIPfvB");
	this.shape_665.setTransform(245.025,252.325);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnrHkIPXvH");
	this.shape_666.setTransform(245.45,252.875);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnmHnIPNvN");
	this.shape_667.setTransform(245.875,253.425);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AniHqIPFvT");
	this.shape_668.setTransform(246.3,253.975);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AneHtIO9vZ");
	this.shape_669.setTransform(246.725,254.525);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnaHwIO1vf");
	this.shape_670.setTransform(247.15,255.075);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnVHzIOrvl");
	this.shape_671.setTransform(247.575,255.6);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnRH2IOjvr");
	this.shape_672.setTransform(248,256.15);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnNH5IObvx");
	this.shape_673.setTransform(248.425,256.7);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnJH8IOTv3");
	this.shape_674.setTransform(248.875,257.25);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnEH/IOJv9");
	this.shape_675.setTransform(249.3,257.8);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnAICIOBwD");
	this.shape_676.setTransform(249.725,258.35);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Am8IFIN5wJ");
	this.shape_677.setTransform(250.15,258.875);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Am4IIINxwP");
	this.shape_678.setTransform(250.575,259.425);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmzILINowV");
	this.shape_679.setTransform(251,259.975);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AmvIOINfwb");
	this.shape_680.setTransform(251.425,260.525);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Am2IMINtwX");
	this.shape_681.setTransform(251.65,260.45);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Am8ILIN5wV");
	this.shape_682.setTransform(251.875,260.35);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnDIJIOHwR");
	this.shape_683.setTransform(252.1,260.225);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnJIHIOTwN");
	this.shape_684.setTransform(252.325,260.15);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnQIFIOhwJ");
	this.shape_685.setTransform(252.55,260.075);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnWIEIOtwH");
	this.shape_686.setTransform(252.775,259.975);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AndICIO7wD");
	this.shape_687.setTransform(253,259.85);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnjIAIPHv/");
	this.shape_688.setTransform(253.225,259.775);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnqH/IPVv9");
	this.shape_689.setTransform(253.45,259.675);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AnwH9IPhv5");
	this.shape_690.setTransform(253.675,259.6);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("An3H7IPvv1");
	this.shape_691.setTransform(253.9,259.5);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("An9H6IP7vy");
	this.shape_692.setTransform(254.125,259.4);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoEH4IQJvv");
	this.shape_693.setTransform(254.35,259.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoLH2IQXvr");
	this.shape_694.setTransform(254.575,259.225);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoRH0IQjvn");
	this.shape_695.setTransform(254.8,259.125);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoYHzIQxvl");
	this.shape_696.setTransform(255.025,259.025);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoeHxIQ9vh");
	this.shape_697.setTransform(255.25,258.925);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AolHvIRLve");
	this.shape_698.setTransform(255.475,258.85);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AorHuIRXva");
	this.shape_699.setTransform(255.7,258.75);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AoyHsIRlvX");
	this.shape_700.setTransform(255.925,258.65);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ao4HrIRxvV");
	this.shape_701.setTransform(256.15,258.55);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ao/HpIR/vR");
	this.shape_702.setTransform(256.375,258.475);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApFHnISLvN");
	this.shape_703.setTransform(256.6,258.375);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApMHlISZvJ");
	this.shape_704.setTransform(256.825,258.275);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApSHkISlvG");
	this.shape_705.setTransform(257.075,258.2);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApZHiISzvD");
	this.shape_706.setTransform(257.275,258.1);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApgHhITBvB");
	this.shape_707.setTransform(257.5,258);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApmHfITNu8");
	this.shape_708.setTransform(257.725,257.9);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AptHdITau5");
	this.shape_709.setTransform(257.95,257.825);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ApzHbITnu1");
	this.shape_710.setTransform(258.175,257.725);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Ap5HaIT0uz");
	this.shape_711.setTransform(258.4,257.625);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqAHYIUBuv");
	this.shape_712.setTransform(258.625,257.525);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqHHWIUPur");
	this.shape_713.setTransform(258.85,257.45);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqNHUIUbuo");
	this.shape_714.setTransform(259.075,257.35);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqUHTIUpul");
	this.shape_715.setTransform(259.3,257.25);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqaHRIU1uh");
	this.shape_716.setTransform(259.525,257.15);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqhHPIVDud");
	this.shape_717.setTransform(259.75,257.075);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AqnHOIVPub");
	this.shape_718.setTransform(259.975,256.975);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AquHMIVcuX");
	this.shape_719.setTransform(260.2,256.875);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Aq0HKIVpuT");
	this.shape_720.setTransform(260.425,256.775);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("Aq7HIIV2uQ");
	this.shape_721.setTransform(260.65,256.7);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArBHHIWDuN");
	this.shape_722.setTransform(260.875,256.6);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArIHFIWRuJ");
	this.shape_723.setTransform(261.1,256.525);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArOHDIWduG");
	this.shape_724.setTransform(261.325,256.4);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArVHCIWruD");
	this.shape_725.setTransform(261.55,256.3);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArbHAIW3t/");
	this.shape_726.setTransform(261.775,256.225);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AriG+IXFt8");
	this.shape_727.setTransform(262,256.15);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("AroG9IXRt5");
	this.shape_728.setTransform(262.225,256.025);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f().s("#2EB751").ss(0.9,0,0,4).p("ArvG7IXet1");
	this.shape_729.setTransform(262.45,255.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_581}]}).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_680}]},1).to({state:[{t:this.shape_681}]},1).to({state:[{t:this.shape_682}]},1).to({state:[{t:this.shape_683}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_688}]},1).to({state:[{t:this.shape_689}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_700}]},1).to({state:[{t:this.shape_701}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_704}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_707}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_711}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_718}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_726}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_581}]},1).wait(1));

	// Meter_02
	this.instance_10 = new lib.Meter2();
	this.instance_10.setTransform(294.45,217.5,1,1,0,0,0,-104.5,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:360},149).wait(1));

	// Meter_01
	this.instance_11 = new lib.Meter01_1();
	this.instance_11.setTransform(294.5,217.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:-360},149).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(263,103,366,449);
// library properties:
lib.properties = {
	id: 'B7B8EB2D6F4AEC4E829F167812E30AF4',
	width: 606,
	height: 440,
	fps: 30,
	color: "#000000",
	opacity: 0.00,
	manifest: [
		{src:"images/Triangle _ Animation 3_atlas_1.png?1618898384471", id:"Triangle _ Animation 3_atlas_1"}
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
an.compositions['B7B8EB2D6F4AEC4E829F167812E30AF4'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;