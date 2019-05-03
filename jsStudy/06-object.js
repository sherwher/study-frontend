/**
 * 객체에는 기능을 추가해서 사용할 수 있음.
 */
// 객체 생성 : 기본
var person = new Object();
person.name = "홍길동";
person.age = 28;
person.showInfo = function() {
    message = `name: ${this.name}, age: ${this.age}`;
    console.log(message);
}
person.showInfo();
// JSON
var person2 = {
    name: "홍길동",
    age: 28,
    showInfo: function() {
        message = `name: ${this.name}, age: ${this.age}`;
        console.log(message);
    }
}
person2.showInfo();

// Prototype 기반의 상속 구현
var Member = function(name, position) {
    this.name = name;
    this.position = position;
}

var m1 = new Member("강백호", "PF");
var m2 = new Member("서태웅", "SF");

// JavaScript는 동적으로 속성을 추가할 수 있다.
m1.sayHi = function() {
    console.log(this.name + "님이 당신을 부릅니다.");
}
m1.sayHi();
// m2.sayHi(); // m2에는 sayHi를 추가하지 않았다.

console.log(Member.prototype);

Member.prototype.introduce = function(){
    console.log(this.name + "님이 소개합니다.");
}

m1.introduce();
m2.introduce();
console.log(Member.prototype);

// 기존 JavaScript 객체들에도 동적으로 속성 추가할 수 있다.
console.log(String.prototype);
String.prototype.sayHello = function() {
    return "Hello, " + this;
}

console.log("강백호".sayHello());