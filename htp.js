class htp{
    constructor(){
    this.backButton = loadImage("back arrow.png");
    this.title = createElement("h2");
    }

      setPosition() {
    this.title.position(width / 2 - 420, height / 2 - -490);
    this.backButton.position(width / 2 - 30, height / 2 - -925);
  }

    hide() {
    this.title.hide();
    this.signUpButton.hide();
  }

  display(){
    this.setPosition();
  }
}