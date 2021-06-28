class Ball{
    constructor(x,y,radius){
        var option = {
            density:1.5
        }
        this.body = Bodies.circle(x,y,radius,option)
        this.radius = radius
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        rectMode(RADIUS)
        translate(pos.x,pos.y)
        rotate(angle)
        //fill(251,245,0)
        circle(0,0,this.radius)
        pop()
    }
}