class Rectangle{
    constructor(name, width, height){
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area(){
        return this.height * this.width; 
    }

    static getClass(){
        return "Rectangle";
    }

    // perimeter(){
    //     return 2 * this.width + this.height;
    // }

    // isSquare(){
    //     return this.width === this.height;
    // }

    // logArea(){
    //     console.log('Rectangle area: ' + this.area());
    // }
}

const square = new Rectangle('Square', 20 , 20);
console.log(square.area());
console.log(Rectangle.getClass());

//console.log(Object.getPrototypeOf(square));