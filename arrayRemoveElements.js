var numbers = [0,1,2,3,4,5,6,7,8,9]

numbers[10] = 10
numbers[numbers.length] = 11 // numbers.length = 11
numbers[numbers.length] = 12 // numbers.length = 12

numbers.push(13)
numbers.push(14)
numbers.push(15)
numbers.push(16)

numbers.unshift(-1)
numbers.unshift(-2)
numbers.unshift(-3)
numbers.unshift(-4)

console.log(numbers)

numbers.pop() // remove elementos do fim do array
numbers.shift() // remove elementos do início do array

console.log(numbers)