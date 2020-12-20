class Roof{
    constructor(x,y){
        var op={
            restitution:0.8,
            friction:0.2,
            density:0.2, isStatic:true
        }

        this.body=Bodies.rectangle(x,y,400,30,op)
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        rectMode(CENTER)
       rect(pos.x,pos.y,400,30)
    }
}