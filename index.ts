const name = "Park",
  age = 26,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age, gender);

// 이 파일이 모듈이 된다는 것을 이해할 수 있도록 만들어 주는 코드
export {}; // 1번 줄에서 "블록 범위 변수 'name'을(를) 다시 선언할 수 없습니다.ts(2451)" 에러가 나는 걸 방지해 줌, 약간 버그같은 느낌
