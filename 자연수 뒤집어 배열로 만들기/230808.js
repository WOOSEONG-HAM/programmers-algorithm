function solution(n) {
  var answer = [];
  answer = String(n)
    .split('')
    .reverse()
    .map((stringNum) => Number(stringNum));
  return answer;
}
