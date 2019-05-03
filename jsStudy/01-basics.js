/** console 내장 객체 - 문자열 출력 */
console.log("일반 로그");
/** Error, Warn, Info, log */
console.error("에러 로그");
console.warn("경고 로그");
console.info("정보 로그");

/**
 * 여러 메시지 동시 출력: ,로 구분
 */
console.log("로그", 10, true);

/**
 * let(가변형), const(불변형) - ES6 -> 웹 클라이언트단은 chrome빼고 잘 지원안함
 */
let letVar = "let";
const constVar = "const"; // const는 선언과 동시 할당(불변형이므로)

letVar = 'let Changed';
// constVar = 'const Changed'; // const는 재할당이 불가

// JavaScript는 dynamic type 언어 : 런타임에 타입 변경됨
var v = "String";
console.log(v, typeof v);
v = 2019;
console.log(v, typeof v);

