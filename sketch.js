
var play;
var how;
var about;
var body = document.querySelector(".body");

var htp
var mrb_one;



function setup(){
    createCanvas(windowWidth,windowHeight);

play=createButton("play")
play.position(100,100)
play.id("bt")
//play.size(150,150)

about=createButton("About")
about.position(100,200)
about.id("bt")


how=createButton("How")
how.position(100,300)
how.id("bt")



}




function draw(){


    play.mousePressed(() =>{
        play.hide();
        about.hide();
        how.hide();
        body.style.background="#A5E1FF";
        htp = new htp();
        htp.display();
    })
        how.mousePressed(() =>{
        play.hide();
        about.hide();
        how.hide();
        body.style.background="#A5E1FF"
    })
        about.mousePressed(() =>{
        play.hide();
        about.hide();
        how.hide();
        body.style.background="#A5E1FF"
    })


}

function hide(){
    play.hide();
    how.hide();
    about.hide();
}