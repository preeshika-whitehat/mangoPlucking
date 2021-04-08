class stone{
    constructor(x, y,width,height) {
        var options = {
            'restitution':0.6,
            'friction':1.0,
            'density':1.2
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height=height;
        //this.image = loadImage("images/stone.png");
        World.add(world, this.body);
      }
      
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.diametre);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
 }
 