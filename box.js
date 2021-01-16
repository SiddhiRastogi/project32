class Box extends BaseClass {
    constructor(x, y){
      super(x,y,30,30);
      this.image = loadImage("can.png");
      this.visibility = 255;
     
    }

    score(){
      if(this.visibility < 0 && this.visibility > -1000){
        score++
      }
    }

    display(){
      if(this.body.speed < 3){
        super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility - 25;
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y , 30 , 30);
        pop();
      }
    }
  
  };

