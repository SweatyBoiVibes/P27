class Ball{
    constructor(x,y){
        var op={
            restitution:0.8,
         
            
        }

        this.body=Bodies.circle(x,y,20,op)
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,20)
    }
}