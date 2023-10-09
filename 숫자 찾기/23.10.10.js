function solution(num, k) {
  var answer = 0;
  answer = String(num).split("").indexOf(String(k));
  return answer === -1 ? answer : answer + 1;
}