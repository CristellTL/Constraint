class Fan{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.w = w; 
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position; 
        
        Matter.Body.rotate(this.body,angle)
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,this.w,this.h);
        pop();
        
        angle +=0.1;
    }
}