class Ball{
    constructor(x,y,r){
        var options = {
            restitution: 0.95,
            frictionAir:0.01
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        ellipse(pos.x,pos.y,this.r, this.r);
    }
}