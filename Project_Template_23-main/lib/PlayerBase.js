class PlayerBase
{
    constructor(x,y,width,height)
    {
        var opt=
        {
            isStatic:true
        };
        this.body=Bodies.rectangle(x,y,width,height,opt);
        this.width=width;
        this.height=height;

        this.image=loadImage("assets/base1.png");
        World.add(world,this.body);
    }
    display()
    {
        var p=this.body.position;
        var a=this.body.angle;
        push();
        
        translate(p.x,p.y);
        rotate(a);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);

        pop();
    }
}