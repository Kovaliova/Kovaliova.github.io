class Scales {
    
    productsArr:Array<Product>;

    constructor() {
        this.productsArr=[]; 
    }

    add(_product:Product):void {
        this.productsArr.push(_product);
        console.log( "Product has been added to the scale:" + _product.name);   
    }

    getSumScale():number {
        let sumScale:number = 0;
        this.productsArr.forEach( (prod:Product) => {
            sumScale+= prod.getScale();                   
        });
        return sumScale;
    }

    getNameList():Array<string> {
        let productsList:Array<string> = [];
        this.productsArr.forEach( (prod:Product) => {
            productsList.push (prod.getName());                   
        });
        return productsList;
    }
}

class Product {

    name:string;
    weight:number;

    static numOfProducts:number = 0;//кол-во созданных продуктов

    constructor(_name:string, _weight:number) {
        this.name=_name;
        this.weight=_weight;
        Product.numOfProducts++;
    }

    getScale():number {   //получить вес продукта
        return this.weight;
    }

    getName():string {   //получить название продукта
        return this.name;
    }
    
}

class Apple extends Product {

    color:string;

    constructor(_name:string, _weight:number, _color:string) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        super(_name, _weight); 
        this.color=_color;
    }

    getColor():string {   //получить цвет продукта
        return this.color;
    }

    getName():string {   //получить название продукта
        super.getName();      
        return (this.getColor() + " " + this.name); 
       
    }
   
}

class Tomato extends Product {
    constructor(_name:string, _weight:number){ 
        super(_name, _weight); 
    }
   
}

let scales:Scales = new Scales();

let apple1:Apple=new Apple("Anis", 150, "green");
console.log("Weight product  " + apple1.color+ apple1.name + "  equally  "+ apple1.weight )

let tomato1:Tomato=new Tomato("Black", 200);
console.log("Weight product  " +  tomato1.getName() + "  equally  "+ tomato1.getScale() )

let apple2:Apple=new Apple("Golden", 210, "red");
console.log("Weight product  " +  apple2.getName() + "  equally  "+ apple2.getScale() )
let tomato2:Tomato=new Tomato("Yellow", 205);

scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);


console.log("Total weight of products on the scales:  " + scales.getSumScale());
console.log("List of products on the scales:  " + scales.getNameList());
console.log("Create products:" + Product.numOfProducts);
