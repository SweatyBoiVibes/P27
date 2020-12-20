class Rope{
    constructor(bodyA, bodyB, ptx){
        var op={
            bodyA: bodyA,
            bodyB: bodyB,
            length:150,
            stiffness:0.04
               
        }

        this.body=Matter.Constraint.create(op)
        this.ptx=ptx
        World.add(world,this.body)
    }

    display(){
        var a=this.body.bodyA.position
        var b=this.body.bodyB.position
        push()
        stroke("red")
        line(a.x,a.y,b.x+this.ptx,b.y)
        pop()
    }

}