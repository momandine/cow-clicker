// Make a canvas element
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Make a cow image object
var cowReady = false;
var cow = new Image();
cow.onload = function () {
    cowReady = true;
};
cow.src = "images/cow.jpg";

// Set up counting clicks
var clicks = 0;
var incrementClicks = function () {
    clicks ++;
};
addEventListener("mousedown", incrementClicks, false);

// Draw everything
var render = function () {
    ctx.clearRect(0,0,512,480);
	if (cowReady) {
		ctx.drawImage(cow, 0, 0);
        console.log('Cow ready');
	}

	// Score
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Clicks: " + clicks, 150, 460);
};

var reset = function () {
    clicks = 0;
};

var main = function () {
	render();
    // Do it again!
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

reset();
main();
