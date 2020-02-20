//simple class syntac without constructor
// class Employee
// {
// setDetails(name, id) //function with parameters
// {
//     this.name1 = name //this.name is a class varibale and get the value, assigned to function parameter above
//     this.id = id
// }
// }
// let empl1 = new Employee() //created an object empl1 for the above class to initialize it.
// empl1.setDetails('Rohit', 20) //using object to access function 'setDetails' and variable 'name, id' of the class
// console.log(empl1.name1) //name1 with fetch the name1 of class variable that has value 'Rohit' now
// console.log(empl1.id)


//simple class syntax with constructor
class Employee
    {
    constructor(name, id) //constructor is like a function with parameters
    {
    this.name1 = name //this.name1 is a class varibale and get the value, assigned to function parameter above
    this.id1 = id
    }
    }
let empl1 = new Employee('rohit', 200) //object empl1 for the above class to initialize it and constructor is called by default
let empl2 = new Employee('Kumar', 201) //the value for the class contructor need to be provided
console.log(empl1.name1) //name1 with fetch the name1 of class variable that has value 'Rohit' now
console.log(empl1.id1)
console.log(empl2.name1)
console.log(empl2.id1)