//Задание 6.
//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат
// true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.
// Проверить, все ли элементы в массиве одинаковые.

let arr = [2, 2, 2, 3];
let a = arr[0];
function isIdentical(element, index, array) {
    return element === a;
}
console.log(arr.every(isIdentical));