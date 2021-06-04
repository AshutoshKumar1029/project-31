class plinko{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'isStatic':true
            
        }
        this.radius = 10
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var posx = this.body.position.x
        var posy = this.body.position.y
        push();
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse( posx,posy, this.radius)
        pop();
      }
}