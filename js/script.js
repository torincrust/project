"use strict"; // всегда прописывать типо работаем с новым стандартом кода

let number = 5; // обьявление переменной изменяемой
const leftBorderWidth = 1;// обьявление переменной не изменняемая

number = 10;
console.log(number);

const obj = { // обьект который может содержать данные(свойства обьекта) и действия( методы)
    a:50
};

obj.a = 10;
console.log(obj);

const obj1 = { // обьект который может содержать данные(свойства обьекта) и действия( методы)
    name: "john",
    age:25,
    isMarried: false
};
console.log(obj1.name);// обращение к свойству 
/* console.log(obj1["name"]); */// обращение к свойству 

let arr = ['plum.png','orange.jpeg', 'apple.bmp'];// массив 
console.log(arr[2]);

/* alert('hello'); */

/* const result = confirm("ты тут?");
console.log(result); */

/* const answer = prompt("есть 18", "");
console.log(answer); */

// вся информация которая приходит от пользователя будет в виде строк

/* const answers = [];
answers[0] = prompt('как ваше имя?', '');
answers[1] = prompt('как ваша фамилия?', '');
answers[2] = prompt('сколько вам лет?', '');

document.write(answers); */

/* const category = 'toys';
console.log(`https://someurl.com/${category}/5`); //интерполяция строк работает только через косые ковычки 

const user = "kirill";
alert(`hello, ${user}`); */

//sfsd