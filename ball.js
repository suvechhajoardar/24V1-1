class Ball {
    constructor(x, y) {
      var options = {
        'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;
      
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     
      fill('yellow')
      rectMode(CENTER)
      circle(0, 0, this.radius);
      pop();
    };
  };
  