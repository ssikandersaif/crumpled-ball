class Paper{
constructor(x,y,r){

var options = {

restitution : 0.3,
friction : 0,
density : 1.2,
isStatic: false,



}

this.x = x
this.y = y
this.r = r 

this.body = Bodies.circle(this.x,this.y,this.r,options)
this.image = loadImage("paper.png");
World.add(world,this.body);

}

display(){

push()
translate(this.body.position.x,this.body.position.y)
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)

}





}