class Block1{
    constructor(x,y,width,height,c){
        var option = {
            isStatic:false,
            friction:0.05,
            density:0.75
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width 
        this.height = height
        this.trans = 255
        this.c = c
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        if(this.body.speed<6){
          push()
          rectMode(CENTER)
          translate(pos.x,pos.y)
          rotate(angle)
          fill(this.c)
          rect(0,0,this.width,this.height)
          pop()
        }
        else {
          World.remove(world,this.body)
          push()
          this.trans-=2
          tint(255,this.trans)
          pop()
           
        }
     }
}