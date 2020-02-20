//We can create an instance of class
function Employee(name, age, salary) //Constructor Employee with parameter
{
    this.name = name
    this.age = age
    this.salary = salary
    //this.monthlybonus = 1000 //makeit function varibale to keep the scope within the function ony and can not be accessed from outside
let monthlybonus = 1500 //defined as function variable to make it abstract
    //finalsalary = salary = monthlybonus
//this.calculateSalary = function() //function to call and calculate total salary. this function needs not be exposed to end user and need to be abstracted as below
let calculateSalary = function() //function variable can not be accessed outside the function
{
//let TotalSalary = this.salary + this.monthlybonus //it becomes like below
let TotalSalary = salary + monthlybonus
console.log('Total Salary:' +TotalSalary)
}
this.getEmpDetails = function() //function to get empdetails
{
console.log('Name of the person:' +this.name+' | Age:' +this.age)
calculateSalary()
}
}
let emp1 = new Employee('Rohit', 30, 4500) //class is instanciated to create an object emp1
emp1.getEmpDetails() //call to function from above class is completed successfully
//emp1.monthlybonus = 5000 //the value can also be alterned if not abstracted
//emp1.calculateSalary() //this doe snot work after it is deined as a function varibale above
