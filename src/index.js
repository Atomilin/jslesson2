/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var coppyarray = [];

    for (var i = 0; i < array.length; i++) {
        coppyarray[i] = fn(array[i], i, array);
    }

    return coppyarray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var x = initial || array[0],
        i = initial ? 0 : 1;

    for (; i < array.length; i++) {
        x = fn(x, array[i], i, array);
    }

    return x;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var arr = [];
    
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            key = key.toUpperCase();
            arr.push(key);
        }
    }

    return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
    var array2 = [];

    if (from < 0 && Math.abs(from) > array.length) {
        from = 0;
    } else if (from < 0) {
        from = array.length + from
    } else if (from > array.length) {
        from = array.length
    } else {
        from;
    }
  
    if (to < 0 && Math.abs(to) < array.length) {
        to = array.length + to;
    } else if (to > array.length) {
        to = array.length;
    } else {
        to;
    }

    for (var i = from; i < to; i++) {
        array2.push(array[i]);
    }

    return array2;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
 
function createProxy(obj) {

    var handler = {
        set: function(obj, prop, value) {
            obj[prop] = value*value;

            return true;
        }
    }
    var proxyObj = new Proxy(obj, handler);

    return proxyObj;
}
export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};