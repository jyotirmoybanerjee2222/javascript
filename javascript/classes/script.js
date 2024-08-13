let data = "secret information";
class User {
    constructor(name,email)
    {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("website data" ,data);
    }
}

class Admin extends User{
    constructor(name,email){
          super(name,email);
    }
    editData(){
        data = "some new value";
    }
}

let student1 = new User("hdhd","vbdbsbs");
let student2 = new User("hdhd","vbdbsbs");

let teacher1 = new User("Dean","da4asamasmnsa");
let Admin1 = new  Admin("adim","pabs")