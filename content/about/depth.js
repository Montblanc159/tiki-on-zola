w = 250, h = 250;

var renderer = new PIXI.WebGLRenderer(w, h);
var stage = new PIXI.Container();

var container = new PIXI.Container();

var foreground = new PIXI.Container();

stage.addChild(container);
stage.addChild(foreground);

var f;
var fg;
var mousex = w / 2, mousey = h / 2;

var ploader = new PIXI.loaders.Loader();

function init(image, depthImage, id) {


    var cOutput = document.getElementById(id);
    cOutput.appendChild(renderer.view);

    image.crossOrigin = "";
    depthImage.crossOrigin = "";

    ploader.add('fg', image); //insert Orignal 2d Image Here
    ploader.add('depth', depthImage); //insert Depth Map Here

    ploader.once('complete', startMagic);
    // Begin loading -
    ploader.load();

}

function startMagic() {
    fg = new PIXI.Sprite(ploader.resources.fg.texture);

    foreground.addChild(fg);

    d = new PIXI.Sprite(ploader.resources.depth.texture);
    f = new PIXI.filters.DisplacementFilter(d, 0);
    fg.filters = [f];
    window.onmousemove = function (e) {
        mousex = e.clientX;
        mousey = e.clientY;
    };

    animate();
}


function animate() {

    f.scale.x = (window.innerWidth / 2 - mousex) / 250;
    f.scale.y = (window.innerHeight / 2 - mousey) / 250;

    fg.addChild(d);
    d.renderable = false;

    renderer.render(stage);
    requestAnimationFrame(animate);
}

// Start -
init('/about/elsa.png', '/about/elsa_depth.png', 'elsa');
