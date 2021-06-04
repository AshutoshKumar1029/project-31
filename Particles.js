class particles{
    constructor(x, y) {
        var options = {
            'restitution':0.8
        }
        this.radius = 10
        this.body = Bodies.circle(x, y, this.radius, options);
        this.color = color(Math.round(random(0,225)),Math.round(random(0,225)),Math.round(random(0,225)))
        World.add(world, this.body);
      }
      display(){
        var posx = this.body.position.x
        var posy = this.body.position.y
        push();
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse( posx,posy,this.radius)
        pop();
      }
}