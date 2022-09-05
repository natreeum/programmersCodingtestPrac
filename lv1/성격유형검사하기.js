function solution(survey, choices) {
  var answer = "";
  const res = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] < 4) {
      if (choices[i] === 1) {
        res[survey[i][0]] += 3;
      } else if (choices[i] === 2) {
        res[survey[i][0]] += 2;
      } else if (choices[i] === 3) {
        res[survey[i][0]] += 1;
      }
    } else if (choices[i] > 4) {
      if (choices[i] === 5) {
        res[survey[i][1]] += 1;
      } else if (choices[i] === 6) {
        res[survey[i][1]] += 2;
      } else if (choices[i] === 7) {
        res[survey[i][1]] += 3;
      }
    }
  }
  const keys = Object.keys(res);
  for (let i = 0; i < 8; i = i + 2) {
    if (res[keys[i]] > res[keys[i + 1]]) {
      answer += keys[i];
    } else if (res[keys[i]] < res[keys[i + 1]]) {
      answer += keys[i + 1];
    } else {
      if (keys[i].charCodeAt() < keys[i + 1].charCodeAt()) {
        answer += keys[i];
      } else {
        answer += keys[i + 1];
      }
    }
  }

  return answer;
}
