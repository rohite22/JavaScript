//for loop execution
let i

for (i=2; i<6; i++)
/*i=1 is to initialize the value of variable from, i<6 is the condition to check each time statement is executed
i++ is incrementing the value of i each time the statment is excuted and condition is returned as true.*/

{
    console.log('The value of i is:' +i)
}
//for in loop
let fruits = ['Apple', 'Banana', 'Cherry']
let x
for (x in fruits) //x will check the index values of above array starting from 0
{
    console.log(fruits[x])
}

for (x of fruits) // for of loop will return the value of the object rather index. 
{
    console.log(x)
}