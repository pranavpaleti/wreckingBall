class Polygon{
    constructor(x,y){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.circle(x,y,50,options);
        this.r=50
        

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        
    }

}