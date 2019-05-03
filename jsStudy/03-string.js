/**
 * ES Template String
 * "" | ''를 써도 무관
 * \n 개행, \t 탭 동일하게 작동
 * C언어나 Java언어에서 printf("포멧문자열", param); -> 존재하나 Javascript는 존재하지 않았음.
 * ES6 : Template String이 존재하게 됨.
 * `을 사용함.
 */

 var temp  = 24;
 
 // ES5 -> 포매팅 불가
 var message = "현재 실내 온도는 " + temp + "도 입니다.";
 console.log(message);

// ES6 -> 템플릿 문자열 (`)로 문자열 만듬. ${} 스트링을 연결
message = `현재 실내 온도는 ${temp}도 입니다.`;
console.log(message);

// 여러 줄 문자열 ES5 -> \n
message = "여러 줄 문자열을 \n입력합니다.\n어려웠어요";
console.log(message);

// ES6 브라우저에서는 쓰기 힘들다
message = `여러 줄 문자열을
입력합니다.
ES6에선 쉬워요`;
console.log(message);