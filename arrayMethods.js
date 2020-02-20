//array methods

let fruits = ['Apple', 'Mango', 'Banana']
console.log(fruits) //an array is defined above.

fruits.pop() //Removes the last element from an array and returns it
fruits.shift() //Removes the first element from an array and returns it.
fruits.push('lemon') //Appends new elements at the end of an array, and returns the new length of the array
fruits.unshift('Grapes') //Inserts new elements at the start of an array.
delete fruits[1]
fruits[1] = 'Kiwi'
console.log(fruits)
fruits.splice(1,2) //Removes elements from an array as per starting index mentioned
fruits.splice(2,0, 'Mango', 'Papaya') //Number of elements to insert into the array and 0 to not remove this index
console.log(fruits)

let citrusFruits = fruits.slice(0,1) //The end of the specified portion of the array exclusive of the element at the index 'end'.
console.log(fruits)
console.log(citrusFruits)

let evenNumber = [2,4,6]
let oddNumber = [1,3,5]
let primeNumber = [2,3,5]
let Number = evenNumber.concat(oddNumber, primeNumber) //concatenation of arrays
console.log(Number)