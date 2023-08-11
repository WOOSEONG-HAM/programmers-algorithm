function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((number) => number % divisor === 0);
  if (answer.length === 0) answer.push(-1);
  return answer.sort((a, b) => a - b);
}
