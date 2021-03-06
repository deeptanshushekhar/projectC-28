class Tree{
    constructor(x,y,width,height){
       var options={
           isStatic:true
       }
       this.x=x;
       this.y=y;
       this.width=550;
       this.height=550;
       this.body=Bodies.rectangle(x,y,50,50,options);
       this.image=loadImage("tree.png");
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