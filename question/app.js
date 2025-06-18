// 基礎編
// //Q1 変数
let nickname = 'はな';
let age = 24;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + 'です。');

//Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`)

//Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4 配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5 四則演算
let ages = playerList[0].age + playerList[1].age + playerList[2].age;
ages /= playerList.length;
console.log(ages);

//Q6 関数
function sayHello(){
  console.log('Hello');
};
sayHello();
const sayWorld = function(){
  console.log('World');
};
sayWorld();

//Q7 メソッド
user.birthday = '2000-09-27';
user.sayHello = function(){
    console.log('Hello!');
  };
console.log(user);

//Q8 引数
let calc = {}
calc.add = function(x, y){
  console.log(x + y);
};
calc.subtract = function(x, y){
  console.log(x - y);
};
calc.multiply = function(x, y){
  console.log(x * y);
};
calc.divide = function(x, y){
  console.log(x / y);
};
calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(10, 2);

//Q9 返り値
function remainder(x, y){
  return x % y;
};
let x = 5;
let y = 3;
console.log(x + 'を' + y + 'で割った余りは' + remainder(x, y) + 'です。');

//Q10 スコープ
//xのスコープは関数foo内に限られている。xのみを単体でコンソールしようとしても、参照するべき変数がないため、エラーが発生する。

//応用編
//Q1 標準組み込みオブジェクト
console.log(Math.floor(Math.random() * (9 + 1)));

//Q2-1 コールバック関数
setTimeout(() => {
  console.log('Hello World!');
}, 3000);

//Q2-2 コールバック関数
function printName(firstName, formatter) {
  console.log(formatter(firstName));
}
const addIntro = (name) => '私の名前は' + name + 'です。';
let firstName = '井垣';
printName(firstName, addIntro);

//Q3 if
let num = -9;
if(num > 0){
  console.log('num is greater than 0');
}else if(num < 0){
  console.log('num is less than 0');
}else if(num === 0){
  console.log('num is 0');
};

//Q4 for
let numbers = [];
for(let i = 0; i <= 99; i++){
  numbers.push(i);
};
console.log(numbers);

//Q5 for×if
let mixed = [4, '2', 5, '8', '9', 0, 1];
for(let i = 0; i <= mixed.length; i++){
  const value = mixed[i];
  if(typeof value === 'number'){
    if (value % 2 === 0){
      console.log('even');
    }else{
      console.log('odd');
    }
  }else{
    console.log('not number');
  }
};