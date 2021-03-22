function preload() {

}
function setup() {
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    myVideo=createCapture(VIDEO);
    myVideo.hide();
    tint_color="";
}
function draw() {
    image(myVideo,0,0,640,480);
    tint(tint_color);
}
function take_snapshot() {
    save('screenshot.png');
}
