//Задание 2.
//Дана переменная x, которая может принимать любое значение. Написать программу,
// которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
//Опишите три случая: когда х = числу, строке или логическому типу.
// В других случаях выводите сообщение: «Тип x не определён».

let x = "90";
let result;
switch (typeof(x)) {
    case "number":
        result = "x - число";
        break;
    case "string":
        result = "x - строка";
        break;
    case "boolean":
        result = "x - логическое";
        break;
    default:
        result = "Тип x не определен";
}
console.log(result);