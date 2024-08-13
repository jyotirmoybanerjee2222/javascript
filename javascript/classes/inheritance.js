class Parent {
    hello(){
     console.log("hello");   
    }
}
class Child extends Parent{}
let obj =  new Child();

class person {
    constructor(){
       this.species = "homo sapiens";
    }
    eat()
    {
        console.log("eat");
    }

    sleep()
    {
        console.log("sleep");
    }
    Work()
    {
        console.log("Do nothing");
    }
    
}

class Engineer extends  person  {
    Work(){//it has higher pirority
        
        console.log("solve problems, build something");
    }
}

class Doctor extends person{
    Work(){
        console.log("treat patient");
    }

}

let jyoti = new Engineer();