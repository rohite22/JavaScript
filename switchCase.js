//Switch case statements
let ratings = 4

switch(ratings)
{
case 1:
    console.log('Under review')
    break
case 2:
    console.log('Good')
    break //use break statement to het out of the loop, other wise it gives wrong results
case 3:
     console.log('Average')
     break
case 4:
    console.log('Good')
    break
default: //if none of the case statement matches then default will execute
    console.log('Please check you ratings')
}
