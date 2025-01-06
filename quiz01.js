1.
let uninitialized;
console.log(uninitialized); // 결과값 < undefined > : 선언한 변수 안의 값을 따로 지정하지 않아 정의 되지 않은 값인 undefined가 나올 것 같습니다.


2.
< const > apple = "사과"; // : 변수를 선언하는 키워드 중 하나를 고르는 것 같은데 재할당이 안되니 const라 생각하였습니다.
apple = "바나나"; // TypeError: Assignment to constant variable


3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 > : lotto 배열의 인덱스 값 3번의 요소를 추출하는 코드입니다. 인덱스는 왼쪽부터 0으로 시작하니 3번 인덱스 값인 19번이 나올 것 같습니다.


4.
let mySchedule = "";
console.log(mySchedule || false); // < false > falsy값 false/null/undefined/0/NaN/"" 값 중 하나인 ""가 선택되어 false가 나올 것 같습니다.
console.log(!!mySchedule); // < false > !는 NOT 기호인데 NOT을 두 번하여 !mySchedule = true/ !true = false가 될 것 같습니다.