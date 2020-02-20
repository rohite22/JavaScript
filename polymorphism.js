
//Polymorphism in JavaScript. eat() function is created in multiple form in both parent and child class
class Animal //Parent class
{
    constructor(name)
    {
    this.name1 = name
    }
eats() //Parent class function
{
    console.log(this.name1+' eats food')
}
}
//let animal = new Animal('Dog')
//animal.eats()

class aligator extends Animal //Child class
{
    eats() //child class function is taking preferences over parent function and this concept is also called method overriding
    {
    super.eats() //super is used to call parent class functions also
    console.log(this.name1+' eats fishes')
}
}
let crane = new aligator('Crane')
crane.eats()