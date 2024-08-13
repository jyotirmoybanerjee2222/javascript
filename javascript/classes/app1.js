class ToyotaCar {
    constructor(brand,milage){
        console.log("creating new object");
        this.brand = brand;
        this.milage = milage;
    }
    start(){
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    /*setBrand(brand) {
        this.brandName = brand;
    }*/
}

let fortunar = new ToyotaCar("fortunar",10); //constructor
console.log(fortunar);
//fortunar.setBrand("fortunar")
let lexus = new ToyotaCar("lexus",20);//constructor
console.log(lexus);
//lexus.setBrand("lexus");