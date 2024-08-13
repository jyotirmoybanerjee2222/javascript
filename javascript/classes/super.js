class person {
    constructor(name){

       this.species = "homo sapiens";
       this.name = name;
    }
    eat()
    {
        console.log("eat");
    }    
}

class Engineer extends  person  {
    constructor (name){

       super(name);//to invoke parent class constructor

    }

    Work(){//it has higher pirority
        super.eat();//Accesing parent class object
        console.log("solve problems, build something");
    }
}

class Doctor extends person{
    Work(){
        
        console.log("treat patient");
    }

}

let engiObj = new Engineer("jyoti");