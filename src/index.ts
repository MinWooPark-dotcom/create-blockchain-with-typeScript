interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Park",
  age: 26,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

// 이 파일이 모듈이 된다는 것을 이해할 수 있도록 만들어 주는 코드
// 1번 줄에서 "블록 범위 변수 'name'을(를) 다시 선언할 수 없습니다.ts(2451)" 에러가 나는 걸 방지해 줌, 약간 버그같은 느낌
export {};
