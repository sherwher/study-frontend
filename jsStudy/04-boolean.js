 var v1;
 var v2 = null;

 console.log(v1, v2);
 console.log(typeof v1, typeof v2);

 // null은 개발자가 의도적으로 할당
 // undefined는 자바스크립트 엔진이 사용
 // 개발자가 의도적으로 undefined를 세팅하기도 한다

 v2 = undefined;
 console.log(v2, typeof v2);

 /**
  * ==, ===
  */

  console.log(123 == "123");    // 값만 비교
  console.log(123 === "123");   // 값과 타입 비교

