/**
 * 수치 데이터 다양한 형식으로 입력
 */
var dec = 10; // 십진수
var oct = 0o10; // 8진수
var hex = 0xFF; // 16진수

console.log(dec, oct, hex);
/**
 * Math 객체
 * round 반올림, trunc버림, floor버림
 */
console.log(Math.round(3.567), Math.trunc(3.567), Math.floor(3.567));
console.log(Math.min(3,5,6,6,7,1,23,12,34,12,3,5,6,7,1,2), Math.max(3,4,12,323,1,4,1,3,212,2,5,2));

/**
 * Casing : parse 계열의 내장 함수 -> number 형으로 변환하는 함수들
 */
console.log(parseInt("011"));
console.log(parseInt("011", 2)); // 2진수
console.log(parseFloat("123,456"));
console.log(parseInt("123.222"));

var v = parseInt("string123"); // 변환할 수 없는 형태 문자열
console.log(v, typeof v);
console.log(10 + v); // NaN 포함된 산술식은 NaN
console.log(isNaN(v));

// Infinity 포함된 산술 계산은 Infinity