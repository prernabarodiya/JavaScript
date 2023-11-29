// const Employee = {
//     Post : function(){
//         return "A Software Developer";
//     },
//     changeName : function(name){
//         this.name = name;
//     }
// };

/*var E1 = Object.create(Employee);
E1.name = "Prerna";
E1.role = "Writer";
E1.changeName("Anney");
console.log(E1);*/

/*var E1 = Object.create(Employee, {
    name : {value : "Prerna2", writable : true},
    role : {value : "Programmer", writable : true},
});
E1.changeName("Prerna Barodiya");
console.log(E1);*/

function Employee(name, id, salary){
    this.name = name;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.post = function(){
    return (this.name + " is a content creator");
}

var Prerna = new Employee("prerna", 45468, 5445);
console.log(Prerna);


function Programmer(name,id,salary, language){
    Employee.call(this, name, id, salary);
    this.language = language;
}

// for changing undefined function post() for prgrammar "Billa";
Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;

var Billa = new Programmer("Billa", 789, 8996, "JavaScript");
console.log(Billa);
