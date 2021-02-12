class Ground{
    constructor(x,y,width,height){
        var parv={
            isStatic:true,
            friction:1,
            density:1.5
        }
    this.body=Bodies.rectangle(x,y,width,height,parv);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
       
        rectMode(CENTER)
        fill("red");
        rect(pos.x,pos.y,this.width,this.height)
    }

}