function solution(n) {
  let answer = 0;
  let stringArrayNumbers = String(n).split("").sort((a, b) => b - a);
  answer = Number(stringArrayNumbers.join(""));
  return answer;
}