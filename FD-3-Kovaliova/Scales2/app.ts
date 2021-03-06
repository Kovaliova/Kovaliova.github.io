//интерфейс возврата названия и веса
interface IScalable {
    getScale():number;
    getName():string;

}

class Scales {
    
    productsArr:Array<IScalable>;

    constructor() {
        this.productsArr=[]; 
    }

    add(_product:IScalable):void {
        this.productsArr.push(_product);
    }

    getSumScale():number {
        let sumScale:number = 0;
        this.productsArr.forEach( (prod:IScalable) => {
            sumScale+= prod.getScale();                   
        });
        return sumScale;
    }

    getNameList():Array<string> {
        let productsList:Array<string> = [];
        this.productsArr.forEach( (prod:IScalable) => {
            productsList.push (prod.getName());                   
        });
        return productsList;
    }
}


class Apple implements IScalable {

    name:string;
    weight:number;

    constructor(_name:string, _weight:number) {
        this.name = _name;
        this.weight = _weight;
    }

       
    getName():string {   //получить название продукта
        return this.name; 
    }

    getScale():number {   //получить вес продукта
        return this.weight;
    }
   
}

class Tomato implements IScalable  {

    name:string;
    weight:number;

    constructor(_name:string, _weight:number) {
        this.name = _name;
        this.weight = _weight;
    }

       
    getName():string {   //получить название продукта
        return this.name; 
    }

    getScale():number {   //получить вес продукта
        return this.weight;
    }
   
}



let scales:Scales = new Scales();

let apple1:Apple=new Apple("AnisApple", 150);
let tomato1:Tomato=new Tomato("BlackTomato", 200);
let apple2:Apple=new Apple("GoldenApple", 210);
let tomato2:Tomato=new Tomato("YellowTomato", 205);

scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);


console.log("Total weight of products on the scales:  " + scales.getSumScale());
console.log("List of products on the scales:  " + scales.getNameList());
