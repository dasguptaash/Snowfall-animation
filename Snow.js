class Snow{
    constructor(x,y,r){
        var options = {
            restitution : 0.6,
            friction  : 0.9,
            density : 0.7
        }
    this.image= loadImage("snow5.webp");
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    this.lifetime=100;
    World.add (world,this.body);
    }
    
     display(){
        var pos = this.body.posiion;

        ellipse(this.image,pos.x,pos.y,this.r,this.r);
              
        }
        
    }
       
    