/*function myFunction()
{

}
myFunction.prototype //every function has this property and by default it is empty */

//prototype in JavaScript

let EmpDetails = function(name, age) //EmpDetails is a constructor with functions assigned to it. In JS a constructor can also b ecreated without a class
{
this.name1 = name
this.age1 = age
}
EmpDetails.prototype.getName = function() //function() is assgned with a prototype property
{
    return this.name1
}
EmpDetails.prototype.getAge = function()
{
    return this.age1
}

let emp1 = new EmpDetails('Rohit', 200) //object is created for the constructor with values
let emp2 = new EmpDetails('Navdeep', 201)
console.log(emp1.getName()) //emp1 object is used to access all function/methods of constructor
console.log(emp1.getAge())
console.log(emp2.getName())
console.log(emp2.getAge())

