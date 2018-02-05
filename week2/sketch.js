var capture;
var tracker
var w = 640,
    h = 480;

function setup() {
    capture = createCapture(VIDEO);
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();
    colorMode(HSB);
    imageMode(CENTER);
    tracker = new clm.tracker();
    tracker.init(pModel);
    tracker.start(capture.elt);
}

function draw() {
    image(capture, width / 2, height / 2, w, h);
    let positions = tracker.getCurrentPosition();

    if (positions.length > 0) {
        var dis = dist(positions[27][0], positions[27][1], positions[32][0], positions[32][1]);
        //console.log(dis);
        if(dis > 130){
            moveForward();
        }
    }
}
