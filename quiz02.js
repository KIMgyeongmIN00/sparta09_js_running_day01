`## 2. 객체 선언해보기

지난 시간에 배웠던 객체(object)를 다시 복습해보며, 아래의 조건을 충족하는 객체를 직접 선언해보세요.

- 자기 자신을 소개하는 객체입니다.
- 이름, 나이, MBTI 세 가지 키와 값이 포함되어 있어야 합니다.
- 콘솔 창에 이름, 나이, MBTI가 나오도록 console.log() 를 찍어보세요.

예시`

//객체는 key와 value로 이루어져 있습니다. 그렇기 때문에 이름, 나이, MBTI라는 key를 할당하고 그 key에 value를 : value로 할당하여 주면 객체가 선언되고 객체 내부의 값을 가져오려면 객체.key를 통하여 가져오면 됩니다.
const junhyun = {
  name: "주현",
  age: 24,
  MBTI: "INFJ"
};

console.log(junhyun.name);
console.log(junhyun.age);
console.log(junhyun.MBTI);
