var Scales = /** @class */ (function () {
    function Scales() {
        this.productsArr = [];
    }
    Scales.prototype.add = function (_product) {
        this.productsArr.push(_product);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        this.productsArr.forEach(function (prod) {
            sumScale += prod.getScale();
        });
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var productsList = [];
        this.productsArr.forEach(function (prod) {
            productsList.push(prod.getName());
        });
        return productsList;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Apple.prototype.getName = function () {
        return this.name;
    };
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Tomato.prototype.getName = function () {
        return this.name;
    };
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    return Tomato;
}());
var scales = new Scales();
var apple1 = new Apple("Anis", 150);
var tomato1 = new Tomato("Black", 200);
var apple2 = new Apple("Golden", 210);
var tomato2 = new Tomato("Yellow", 205);
scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);
console.log("Total weight of products on the scales:  " + scales.getSumScale());
console.log("List of products on the scales:  " + scales.getNameList());
//# sourceMappingURL=app.js.map