type plusOne = (a: number) => number;
type changeName = () => void;

type cutZero = (a: string) => string;
type removeDash = (a: string) => number;

let cutZeroF: cutZero = function (char) {
  if (char[0] === "0") return char.substr(1);
  return char;
};

let removeDashF: removeDash = function (char) {
  if (char.indexOf("-") === -1) return Number(char);
  char = char.replace(/-/g, "");
  return Number(char);
};

type combine = (number: string, fun1: cutZero, fun2: removeDash) => void;

let combineF: combine = function (number, fun1, fun2) {
  let result: string;
  result = fun1(number);
  console.log(fun2(result));
};

combineF("010-1111-2222", cutZeroF, removeDashF);

let img = document.getElementById("#image");
if (img instanceof HTMLImageElement) img.src = "new.jpg";

let link = document.querySelectorAll(".naver");

link.forEach((a) => {
  if (a instanceof HTMLAnchorElement) a.href = "https://kakao.com";
});

class Car {
  model: string;
  price: number;

  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
  tax(): number {
    return this.price / 10;
  }
}

class Word {
  num: number[];
  str: string[];
  constructor(...parms) {
    parms.forEach((i) => {
      if (typeof i === "number") this.num.push(i);
      else this.str.push(i);
    });
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
