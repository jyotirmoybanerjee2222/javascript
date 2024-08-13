const student = {
    fulName : "Jyotirmoy Banerjee",
    marks : 78,
    printMarks : function() {
        console.log("marks =",this.marks);
    },
};
console.log(student.printMarks);
// {
 //   console.log("marks =",this.marks);
//}
let arr = ['apple','mango','banana'];
console.log(arr);
arr.push("litchi");
console.log(arr);
const employee = {
    clacTax() {
        console.log("tax rate is 10%");
    }
};

const karanArjun = {
    salary :50000,
    clacTax(){
        console.log("tax rate is 20%"); // own function has higher preference
    }
};

const karanArjun2 = {
    salary :50000,
};

const karanArjun3 = {
    salary :50000,
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;


karanArjun3.clacTax();  