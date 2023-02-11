//Задание 8.
//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения
// в виде «Ключ — Х, значение — Y». Используйте шаблонные строки.

let carDetails = new Map ([
    ['brand', 'Toyota'],
    ['model', 'Prado'],
    ['year', '2012'],
    ['mileage', '85000'],
    ['repaired', false]
]);
carDetails.set('color','white');
console.log(carDetails.get('year'));
for (let pair of carDetails.entries()) {
    // pair - это массив [key, values]
    console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}