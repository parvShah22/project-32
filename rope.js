class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.pointB = pointB
        this.ro = Constraint.create(options);
        World.add(world, this.ro);
    }

    fly(){
        this.ro.bodyA = null;
    }
    
    attach(body){
        this.ro.bodyA = body;
    }
    display(){
        
       if(this.ro.bodyA){
            var pointA = this.ro.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
             stroke("red")
        
            line(pointA.x,pointA.y,pointB.x,pointB.y)
          
       }
    }
}