function solution(s) {
  let answer = 0;
  const number = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let string = "";
  for (let i of s) {
    if (!nums.includes(i)) {
      string += i;
      if (Object.keys(number).includes(string)) {
        answer = answer * 10 + number[string];
        string = "";
      }
    } else {
      answer = answer * 10 + Number(i);
    }
  }
  return answer;
}

console.log(solution("23four5six7"));
