//Inheritance in JavaScript
class car //parent class with two function/methods defined
{
    setName(name)
    {
        this.name = name
    }
    startEngine()
    {
        console.log('Engine started for:' +this.name)
    }
    stopEngine()
    {
        console.log('Engine stopped for:' +this.name)
    }
}
    class Toyota extends car //child class to inherit all functions of above parent class car
{
topSpeed(speed) //child class also have functions
{
    console.log('Top speed for '+this.name+ 'car' +speed) //child class is using parent class method to display the name and own function to display the speed
}
}

let myCar = new Toyota // create object of the child class
myCar.setName('Honda') //use child class object to call parent class method
myCar.startEngine()
myCar.stopEngine()
myCar.topSpeed(200) //child method also used