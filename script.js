'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

// function sayName() {
//     console.log(this);
//     console.log(this.name);
// }
// const user = {
//     name: 'john'
// };
// sayName.call(user);
// sayName.apply(user);

// function count(num) {
//     return this*num;
// }
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(2));
// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов объект - сам объект
// 3) this в конструкторах и классах - это новый экземпяр объекта
// 4) Ручная привязка this: call, appy and bind

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    console.log(this);
    // this.style.backgroundColor = 'blue';
    e.target.style.backgroundColor = 'blue';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();

const double = a => a * 2;
console.log(double(4));