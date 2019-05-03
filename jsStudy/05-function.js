/**
 * 함수형 프로그래밍
 * callback
 * 함수 선언 방법 : 함수 선언(Declaration)
 */
function add(a, b) {
    return a + b;
}
console.log(add(1, 5));

// 함수 표현(Expression) : 이름없고, 익명 함수(Anonymous)
var sum = function(a, b) {
    return a + b;
}
console.log(typeof sum, sum(10, 20));

// 매개 변수
function getTotal() {
    var result = 0;
    // 선언된 인자값은 없지만 arguments 객체가 생성됨
    for(var i=0; i < arguments.length; i++){
        if(typeof arguments[i] == "number"){
            result += arguments[i];
        }
    }
    return result;
}
console.log(getTotal(1,2,3,4,5));
console.log(getTotal(1,2,3,'4',5,6));

// JavaScript의 함수는 그 자체로 객체(1급 시민)
function calcUsingCallback(a, b, func) {
    // a, b를 가지고 로직 수행 -> 내부에서 결정하지 않음
    if(typeof func == "function"){
        func(a,b);
    }
}

calcUsingCallback(10, 20, function(v1, v2){
    console.log(v1 + v2);
});

calcUsingCallback(10, 20, function(v1, v2){
    console.log(v1 * v2);
});

calcUsingCallback(10, 20, function(v1, v2){
    console.log(v1 - v2);
});