//Functions in JavaScript are reusable blocks of codes.
function add() //defined the function using function keyword
{
    console.log(2 + 1)
}
add() //function need to call from outside in order to execute it

//Reusable function

function add(a,b,c) //reusable functions with paramenters
{
    //console.log(a + b + c) //code to be executed onc alling the functions from outside
    return(a-b/c) //return is used to return and store the value in variable defined outside the function
}
let result = add(2,4,3) //return will return the value to result variable defined here and assign to function
console.log(result)
//add(1,2,3)
//add(2,2,2) //function called