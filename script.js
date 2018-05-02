// 1
var num = 11;
var str = 'Dima';
var bool = true;
var nothing = null;
var value = undefined;

// 2
var a = 7;
var b = 8;
var c = 9;
var P = a + b + c;
console.log('P = ', a + b + c);

var p = (a + b + c) / 2;
console.log('p = ', (a + b + c)/2);

r = Math.sqrt( ( (p-a)*(p-b)*(p-c) ) / p )
console.log('r = ', Math.sqrt( ( (p-a)*(p-b)*(p-c) ) / p ));

r_90 = (a + b - c) / 2;
console.log ('r_90 = ', r_90);

//3

var user_email = '';
var current_date = '';
var arr_surname = '';
var value = '';
var border_right_top = '';

//4

var user = {
    name: 'Vasya'
}
console.log(user.name);
user.name = 'Petya';
console.log(user.name);

//5

console.info('6' - 3); // Ответ 3   Строка преобразуется в цифру
console.info('20' + 10); //2010 Конкатенация
console.info('10' + - 2);
console.info("4px" - 2); // NaN нельзя отнять от 4px цифру 2
console.info(15 / 0); //Infinity Деление на 0 в JS даёт Infinity
console.info(4 + 5 + "px"); //9px Сначала происходит суммирование двух чисел,а после конкатенация
console.info(+"");// Пустая строка преобразуется в 0
console.info(NaN === NaN); //false NaN ничему не равно
console.info(null == undefined);//true при сравнивании null равняется undefined
