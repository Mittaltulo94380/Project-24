class Dustbin{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.dustbinObject=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.dustbinObject);
        this.width=width;
        this.height=height;
    }

    display(){
        fill("white");
        rectMode(CENTER);
        rect(this.dustbinObject.position.x,this.dustbinObject.position.y,this.width,this.height);

    }
}
