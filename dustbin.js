class dustbin
{
    constructor(x,y,width,height,angle){
      
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        rectMode(CENTER);
        fill("white");
        rect(this.x,this.y,this.width,this.height);
        

    }

}