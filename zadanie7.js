//Задание 7.
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать
// не только числа, но и, например, знаки, null и так далее.

let arr = [2, 0, 3, "mojito", 4, null];
let arr2 = [];
arr.forEach(function(elem) {
    if(typeof elem === "number") arr2.push(elem);
});

let even = arr2.filter(function(elem) {
    return elem % 2 == 0;
});
let odd = arr2.filter(function(elem){
    return elem % 2 !== 0;
});
let zero = arr2.filter(function(elem){
    return elem * 1 == 0;
});
console.log(`Количество четных чисел ${even.length}, количество нечетных чисел ${odd.length}, 
количество нулевых элементов ${zero.length}`);