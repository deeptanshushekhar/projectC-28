class Boy{
    constructor(x,y){
       var options={
           isStatic:true,
           restitution:0,
           friction:1
       }
       this.body=Bodies.rectangle(x,y,50,50,options);
       this.image=loadImage("boy.png");
       this.width=300;
       this.height=300;
       World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this,width,this,height);
        pop()
    }        
}