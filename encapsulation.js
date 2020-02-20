//Encapsulation in JavaScript
class Employee //class is created to set the details
{
    setEmpDetails(name, id, phoneNo) //function is defined with parameters
    {
        this.name1 = name //class variables
        this.id1 = id
        this.phoneNo1 = phoneNo
    }
    getEmpName() //get function for getting the details for accessing any of the property of above class
    {
        return this.name1
    }
    getEmpId()
    {
        return this.id1
    }
    getEmpPhone()
    {
        return this.phoneNo1
    }
}
let emp1 = new Employee() //instantiated the above class or create an object of it emp1
emp1.setEmpDetails('Rohit', 1001, 1236547890) //set variables values using above object
console.log(emp1.getEmpName()) //function to get username
console.log(emp1.getEmpId())
console.log(emp1.getEmpPhone())
//console.log(test)