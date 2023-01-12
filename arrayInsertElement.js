var numbers = [0,1,2,3,4,5,6,7,8,9]

numbers[10] = 10
numbers[numbers.length] = 11 // numbers.length = 11
numbers[numbers.length] = 12 // numbers.length = 12

numbers.push(13)
numbers.push(14)
numbers.push(15)
numbers.push(16)

numbers.unshift(-1) // insere um elementos antes do primeiro elemento
numbers.unshift(-2)
numbers.unshift(-3)
numbers.unshift(-4)

console.log(numbers)

numbers.splice(3,3) // remove elementos de acordo com a posição passada
// a partir da posição 3 ele remove 3 elementos

numbers.splice(3, 0, 0, 1, 2, 3, 4)// insere os elementos 0, 1, 2, 3 e 4 a partir da posição 3
console.log(numbers)