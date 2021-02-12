class Box{
    constructor(x,y){
      var   Option = {
        restitution:0.8,
        friction:2.0,
        density:1.0
  
        } 

        this.body=Bodies.rectangle(x,y,30,40,Option)
       this.Visiblity=255
        this.width = 30;
        this.height = 40;
        Matter.World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      console.log(this.body.speed);
      if(this.body.speed < 7){
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        stroke("white")
        rect(0,0,this.width,this.height);
        pop();
      }
      else{
        
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
       pop();
       
       
      
      
    
   
   
      
     
      
   
    }
}

score(){
  if(this.Visiblity<0&&this.Visiblity>=-100){
    score++;
  }
}


}; 
