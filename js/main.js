

// 1. 

    // function lessThan100(a, b) {
    // 	let sum = a + b;
    //   if(sum < 100){
    // 		return true;
    // 	}
    // 	return false;
    // }

    // console.log(lessThan100(22, 15))
    // console.log(lessThan100(83, 34))
    // console.log(lessThan100(3, 77))


// 2.Вернуть строку как целое число

    // function stringInt(str) {
    // 	return parseInt(str);
    // }
    // console.log(stringInt("6"));


// 3. Using the "&&" Operator

    // function and(a, b) {
    // 	if (a && b == true){
    // 		return true;
    // 	}
    // 	return false;
    // }
    // console.log(and(true, false))
    // console.log(and(true, true))
    // console.log(and(false, true))
    // console.log(and(false, false))


// 4.Умножить каждый элемент массива на два

    // function getMultipliedArr(arr) {
    // 	let arr1 = arr.map(n => n * 2);
    // 	return arr1;
    // }
    // console.log(getMultipliedArr([2, 5, 3]))


// 5.Получить сумму всех элементов массива

    // function getSumOfItems(arr) {
    // 	let arr1 = arr.reduce(
    //   (accumulator, currentValue) => accumulator + currentValue)
    // 		return arr1;
    // }
    // console.log(getSumOfItems([2, 7, 4]))


// 6. Сумма больше пяти

    // function sumFive(arr) {
    // 	let sum = 0;
    // 	for(let i = 0; i < arr.length; i++){
    // 		if(arr[i] > 5){
    // 			sum += arr[i];
    // 		}
    // 	}
    // 	return sum;
    // }

    // console.log(sumFive([1, 5, 20, 30, 4, 9, 18]))


// 7. Менее 100 ремиксов массива

    // function arrayLessThan100(arr) {
    // 	let arr1 = arr.reduce((acc, cur) => acc + cur) < 100;
    // 		return arr1;
    // }
    // console.log(arrayLessThan100([5, 57]))
    // console.log(arrayLessThan100([77, 30]))
    // console.log(arrayLessThan100([0]))


// 8. Преобразовать километры в мили

    // function kmtomiles(kilometers) {
    // 	return parseFloat((kilometers * 0.621371).toFixed(5))
    // }

// console.log(kmtomiles(2))


// 9. Суммирование квадратов

    // function squaresSum(n) {
    // 	let sum = 0;
    // 	for(let i = 0; i <= n; i++){
    // 	sum += i*i;
    // 	}
    // 	return sum;
    // }
    // console.log(squaresSum(3))


// 10. Создайте функцию, которая принимает число nи возвращает его десятичную часть .

    // function decimalPart(n) {
    // 	return Math.abs(n % 1);
    // }

    // console.log(decimalPart(1.2))
    // console.log(decimalPart(-3.73))
    // console.log(decimalPart(10))


//11. Hello; Hello World; World

    // function helloWorld(num) {

    //     if (num % 3 == 0 && num % 5 == 0) {
    //     return "Hello World";
    //     } 
    //     else if (num % 3 == 0) {
    //     return "Hello";
    //     } 
    //     else if (num % 5 == 0) {
    //     return "World";
    //     }
    // }
    //      console.log(helloWorld(3))
    //      console.log(helloWorld(5))
    //      console.log(helloWorld(15))


// 12. Напишите функцию, которая принимает yearи возвращает соответствующий век.

    // function centuryFromYear(year) {
    // 	return Math.ceil(year / 100)
    // }
    // console.log(centuryFromYear(2005))
    // console.log(centuryFromYear(1950))
    // console.log(centuryFromYear(1900))


// 13.Преобразование числа в соответствующее название месяца

    // function monthName(num) {
    // let months = ['January', 'February', 'March', 'April',
    //  'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //     return months[num - 1];  
    //   }
    // console.log(monthName(3))
    // console.log(monthName(12))
    // console.log(monthName(6))


// 14.Високосные годы

    // function isLeap(year) {
    //     if( year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
    //     return true;
    //     }
    //   return false;
    // }
    // console.log(isLeap(2020));


// 15.Сортировать несортируемое

    // function sortIt(arr) {
    // 	return arr.sort((a, b) => a - b);
    // }
    // console.log(sortIt([4, 1, 3]))


// 16.Создайте функцию, которая принимает три значения:
// hчасы
// mминуты
// sсекунды
// Возвращает значение с наибольшей продолжительностью .


    // function longestTime(h, m, s) {
    //     let max = m;
    //     if (h * 60 * 60 > max && h * 60 > s / 60) {
    //     max = h
    //     }
    //     else if (s / 60 > max && h * 60 < s / 60) {
    //     max = s;
    //     }
    //     return max;
    //   }
    // console.log(longestTime(1, 59, 3598))
    // console.log(longestTime(2, 300, 15000))
    // console.log(longestTime(15, 955, 59400))


