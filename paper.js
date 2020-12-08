class paper
{
    constructor(x,y){
        var options={
            isStatic:false,
            density: 1.2,
            friction:0.5,
            restitution:0.3
        }
        this.body=Bodies.circle(x,y,50,options);
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill("pink");
        circle(pos.x,pos.y,50);
        

    }

}