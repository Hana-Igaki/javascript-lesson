//Q1 変数
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