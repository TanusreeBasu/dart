class Dart{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.dart = Constraint.create(options);
        World.add(world, this.dart);
    }

    fly(){
        this.dart.bodyA = null;
    }

    display(){
        if(this.dart.bodyA){
            var pointA = this.dart.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}